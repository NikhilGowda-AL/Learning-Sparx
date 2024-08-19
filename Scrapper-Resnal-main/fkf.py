import json
import requests
from bs4 import BeautifulSoup
import csv
import os
from pathlib import Path

post_payload = {
    "Token": "55af47bae3a4104902c28cea54dcce98ae34318b",
    "captchacode": "iV4dKr",
    "lns": "1BI18CS010",
}

post_headers = {
    "Host": "results.vtu.ac.in",
    "Connection": "keep-alive",
    "Content-Length": "80",
    "Cache-Control": "max-age=0",
    "Upgrade-Insecure-Requests": "1",
    "Origin": "https://results.vtu.ac.in",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-User": "?1",
    "Sec-Fetch-Dest": "document",
    "Referer": "https://results.vtu.ac.in/JFEcbcs23/index.php",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
    "Cookie": "VISRE=4ldr63bhbo4it7marog3ndqt2c4c6r1o24t90rhhutdd82vm6tlqmitj0bbn22undfndp18pv1c04c3s8ib4472iumg09s2nv55taf2; VISRE=gl48oihilvkotdn96oofnj9ehtsm91gp97jg6ck6snen1btkeob4ru34jjqterit4pl3nldh6tg4uc4r89kdfle40pu17g47dds86s0",
}

https_agent = requests.Session()
https_agent.verify = False

def get_new_session():
    url = "https://results.vtu.ac.in/JFEcbcs23/index.php"
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Safari/605.1.15",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Host": "results.vtu.ac.in",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
    }
    response = requests.get(url, headers=headers, verify=False)
    soup = BeautifulSoup(response.text, 'html.parser')
    post_payload["Token"] = soup.find("input", {"name": "Token"}).get("value", "")
    img_url = "https://results.vtu.ac.in" + soup.find("img", {"alt": "CAPTCHA code"}).get("src", "")
    post_headers["Cookie"] = response.headers["Set-Cookie"].split(";")[0]
    
    print(img_url)
    
    # response = requests.get(img_url, headers=post_headers, stream=True, verify=False)
    # path = Path(__file__).resolve().parent / "cap.png"
    # with open(path, 'wb') as f:
    #     for chunk in response.iter_content(chunk_size=128):
    #         f.write(chunk)
    
    # temp_cap = input("Enter the captcha code: ")
    # post_payload["captchacode"] = temp_cap if temp_cap else get_new_session()

def get_result(USN, Batch, Sem, Section):
    post_payload["lns"] = USN
    url = "https://results.vtu.ac.in/JFEcbcs23/resultpage.php"
    data = f"Token={post_payload['Token']}&lns={post_payload['lns']}&captchacode={post_payload['captchacode']}"
    headers = post_headers.copy()
    headers["Content-Length"] = str(len(data))
    response = requests.post(url, headers=headers, data=data, verify=False)
    
    if "Invalid captcha code !!!" in response.text:
        print("Invalid Captcha, getting new session")
        get_new_session()
        return get_result(USN, Batch, Sem, Section)
    elif "Redirecting to VTU Results Site" in response.text:
        get_new_session()
        return get_result(USN, Batch, Sem, Section)
    elif "University Seat Number is not available or Invalid..!" in response.text:
        raise Exception("Student Not Found")
    elif "Please check website after 4 hour --- !!!" in response.text:
        print("IP Blocked")
    elif "Semester : 5" in response.text:
        results = []
        soup = BeautifulSoup(response.text, 'html.parser')
        for element in soup.select(".divTable .divTableBody > .divTableRow")[1:]:
            result = {}
            for i, ele in enumerate(element.select(".divTableCell")):
                case = {
                    0: "subjectCode",
                    1: "subjectName",
                    2: "ia",
                    3: "ea",
                    4: "total",
                    5: "result",
                }.get(i)
                if case is not None:
                    result[case] = ele.text.strip()
            results.append(result)
        return {
            "name": soup.select_one("td[style='padding-left:15px']").text.replace(": ", ""),
            "USN": USN,
            "results": results,
            "Batch": Batch,
            "Sem": Sem,
            "Section": Section,
        }
    elif response.text == "<script type='text/javascript'>alert('Please check website after 2 hour !!!');window.location.href='index.php';</script>":
        print("Session broken")
        get_new_session()
        return get_result(USN, Batch, Sem, Section)

if __name__ == "__main__":
    Result = []
    get_new_session()
    with open("5th.csv", "r") as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            print(f"{csv_reader.line_num}/{len(csv_reader)} - Name: {row['USN']} - Section: {row['Section']}")
            try:
                res = get_result(row["USN"], int(row["Batch"]), int(row["Sem"]), row["Section"])
                Result.append(res)
            except Exception as e:
                print(e)

    with open("result.json", "w") as f:
        f.write(json.dumps(Result, indent=2))

    print("=========================")
    print("Completed")
