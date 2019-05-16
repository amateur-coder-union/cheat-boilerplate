cd WebDriverAgent
# 解锁keychain以便正常签名应用
PASSWORD="123698745"
# just like this => PASSWORD= "123456789"
security unlock-keychain -p $PASSWORD ~/Library/Keychains/login.keychain

# 获取设备的UDID
UDID="ddd871b02775cdb6c3b40872d17d41f66436c56b"

#cd $(你的WebDriverAgent所在目录)
xcodebuild -project ./WebDriverAgent.xcodeproj -allowProvisioningUpdates -scheme WebDriverAgentRunner -destination "id=$UDID" test