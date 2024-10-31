from PIL import Image

# 讀取圖片
image_path = "inversion.png"  # 替換成你的圖片路徑
image = Image.open(image_path)

# 自動裁切透明區域
cropped_image = image.crop(image.getbbox())

# 設定新寬度和高度
new_width = round(1011*1.5)  # 替換成你想要的寬度
new_height = round(1176*1.5)  # 替換成你想要的高度

# 調整裁切後的圖片大小
resized_image = cropped_image.resize((new_width, new_height), Image.ANTIALIAS)

# 儲存結果
resized_image.save("resized_image.png")
print("圖片已成功調整並儲存為 resized_image.png")

