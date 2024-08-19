import requests
from bs4 import BeautifulSoup
import csv
import os
from io import BytesIO
from PIL import Image

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


url = "https://results.vtu.ac.in/JFEcbcs23/index.php"
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Safari/605.1.15",
    "Accept": "*/*",
    "Cache-Control": "no-cache",
    "Postman-Token": "b222b1f1-1fed-4490-965a-805f53a28e97",
    "Host": "results.vtu.ac.in",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
}
response = https_agent.get(url, headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')
token = soup.find("input", {"name": "Token"})["value"]
img_url = "https://results.vtu.ac.in" + soup.find("img", {"alt": "CAPTCHA code"})["src"]
post_payload["Token"] = token
img_headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Safari/605.1.15",
    "Accept": "*/*",
    "Cache-Control": "no-cache",
    "Postman-Token": "063fdb07-fe60-466a-be5e-fe08dec56a21",
    "Host": "results.vtu.ac.in",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Cookie": response.headers["Set-Cookie"].split(";")[0],
}
post_headers["Cookie"] = img_headers["Cookie"]
print(img_url)
response = https_agent.get(img_url, headers=img_headers, stream=True)
img = Image.open(BytesIO(response.content))
img.show()
temp_cap = input("Enter the captcha code: ")
if temp_cap != "":
    post_payload["captchacode"] = temp_cap
else:
    print("Empty Captcha - Getting new Session")