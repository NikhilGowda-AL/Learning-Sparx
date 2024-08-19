import requests
from bs4 import BeautifulSoup

# # login = 'http://bitwebserver.bittechlearn.online:8084/Students/StudentLogin.aspx'
# # headers = { 
# #     "User-Agent":
# #       "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Safari/605.1.15"
# #  }
# # payload={
# #     'TXTUSN':'1BI22IS071',
# #     'txtVerificationCode':'1E5447',
# #     'TXTPASSWORD':'H1uywt'
# # }

# with requests.session() as s:
#     # r=s.post(login,data=payload,headers=headers)
#     n=s.get('http://bitwebserver.bittechlearn.online:8084/Students/StudentsCorner.aspx')
    
#     ss=soup.find("div", { "id" : "articlebody" })
#     print(n.text)

headers = {
    'authority': 'ms-mt--api-web.spain.advgo.net',
    'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
    'accept': 'application/json, text/plain, */*',
    'x-adevinta-channel': 'web-desktop',
    'x-schibsted-tenant': 'coches',
    'sec-ch-ua-mobile': '?0',
    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
    'content-type': 'application/json;charset=UTF-8',
    'origin': 'https://www.coches.net',
    'sec-fetch-site': 'cross-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://www.coches.net/',
    'accept-language': 'en-US,en;q=0.9,es;q=0.8',
}

payload ={
    'username':'6361114519',
    'password':"9739131695"
}

with requests.session() as s:
    n=s.post("https://www.instagram.com/",data=payload,verify=False,headers=headers)
    # n=s.get("https://results.vtu.ac.in/JJEcbcs23/resultpage.php",verify=False)
    print(n.status_code)
    print(n.text)
    soup = BeautifulSoup(n.text,"html.parser")
    print(soup.find_all("span",class_="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft"))