import requests 
from bs4 import BeautifulSoup as bs
import os
from pathlib import Path

from anticaptchaofficial.imagecaptcha import *

url = "https://results.vtu.ac.in/JJEcbcs23/index.php"
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Safari/605.1.15",
    "Accept": "*/*",
    "Cache-Control": "no-cache",
    "Host": "results.vtu.ac.in",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
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


firstPage = requests.get(url,verify=False,headers=headers)
# soup_1 = bs(firstPage.content,"html.parser")
# token = soup_1.find("img",{"alt":"CAPTCHA code"})["src"]
# img_url ="https://results.vtu.ac.in" + token
# response = requests.get(img_url, headers=post_headers, stream=True, verify=False)
print(firstPage.headers)
# headers["Cookie"] = response.headers["Set-Cookie"].split(";")[0]
# path = Path(__file__).resolve().parent / "cap.jpeg"
# with open(path, 'wb') as f:
#     for chunk in response.iter_content(chunk_size=128):
#         f.write(chunk)
# print(response.content)



# solver = imagecaptcha()s
# solver.set_verbose(1)
# solver.set_key("d253d2ae29ef08e949353f7d19462407")

# # Specify softId to earn 10% commission with your app.
# # Get your softId here: https://anti-captcha.com/clients/tools/devcenter
# solver.set_soft_id(0)

# captcha_text = solver.solve_and_return_solution("captcha.jpeg")
# if captcha_text != 0:
#     print("captcha text "+captcha_text)
# else:
#     print("task finished with error "+solver.error_code)