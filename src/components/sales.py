print("\n手机店打折活动进行中")
strWeek = input("请输入中文星期（如星期一）: ")  # 输入星期
intTime = int(input("请输入时间中的小时(范围0-23）："))  # 输入时间
if (strWeek == "星期二" and (intTime >= 10 and intTime <= 11)) or (strWeek == "星期五" and (intTime >= 14 and intTime <= 15)):
    print("恭喜您，获得了折扣参与资格!")
else:
    print("对不起，您来晚一步，期待下次活动")
