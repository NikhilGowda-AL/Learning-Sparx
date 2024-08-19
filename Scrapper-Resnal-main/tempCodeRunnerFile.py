headers["Cookie"] = response.headers["Set-Cookie"].split(";")[0]
# response = requests.get(img_url, headers=post_headers, stream=True, verify=False)
# path = Path(__file__).resolve().parent / "cap.jpeg"
# with open(path, 'wb') as f:
#     for chunk in response.iter_content(chunk_size=128):
#         f.write(chunk)