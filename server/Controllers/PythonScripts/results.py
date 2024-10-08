import requests
from bs4 import BeautifulSoup
from io import BytesIO
from PIL import Image
import sys

post_payload = {
    "Token": "55af47bae3a4104902c28cea54dcce98ae34318b",
    "captchacode": "nikki",
    "lns": "1BI22IS071",
}
print("above capthcha")
sys.stdout.flush()
def get_results():
    
    url = "https://results.vtu.ac.in/JFEcbcs23/index.php"

    
    form_page = requests.get(url,verify=False, stream=True)
    form_html = BeautifulSoup(form_page.text, 'html.parser')
    token = form_html.find("input", {"name": "Token"})["value"]
    cookie =  form_page.headers["Set-Cookie"].split(";")[0]
    post_payload["Token"]=token
    img_url = "https://results.vtu.ac.in" + form_html.find("img", {"alt": "CAPTCHA code"})["src"]
    img_headers = {
        "Cookie":cookie,
    }
    captcha_img = requests.get(img_url,headers=img_headers,verify=False, stream=True)
    img = Image.open(BytesIO(captcha_img.content))
    img.show()


    captcha = input("Enter the captcha code : ")
    post_payload["captchacode"]=captcha


    post_payload["lns"] = str(sys.argv[1])
    url = "https://results.vtu.ac.in/JFEcbcs23/resultpage.php"
    results_page = requests.post(url,headers=img_headers, verify=False, data=post_payload)
    results_html = BeautifulSoup(results_page.content,"html.parser")
    table = results_html.find("div", {"class": "divTableBody"})
    rows = table.find_all("div",{"class": "divTableRow"})
    numOfSubs = len(rows)-1
    marks_dict ={}
    for i in range(1,numOfSubs+1):
        sub = rows[i].select("div:nth-child(1)")
        marks = rows[i].select("div:nth-child(5)")
        marks_dict[sub[0].text.strip()]=int(marks[0].text.strip())
    total = 0
    sumOfGradePoints = 0
    totalCredits = 20
    for key,value in marks_dict.items():
        total+=value
        if (key=="BMATS101" or key=="BPHYS102"):
            credits = 4
        elif (key=="BPOPS103" or key=="BETCK105H" or key=="BESCK104B"):
            credits = 3
        else :
            credits = 1
        if (value == 100):
            sumOfGradePoints+=(credits*10)
        else :
            sumOfGradePoints+=(credits*((value//10)+1))
    sgpa = sumOfGradePoints/totalCredits
    print(sgpa)
get_results()

sys.stdout.flush()