//app.js
import wc from './utils/util.js'

App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    const that = this

    // 登录 获取 openId
    wx.login({
      success: (res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        let data = {
          Action: 'GetWeiXinOpenID',
          loginCode: res.code
        }

        that.wc.get(data, (json) => {
          wx.setStorageSync('openid', json.openid || 1)
          wx.setStorageSync('session_key', json.session_key)
          // that.openId = json.result

          // 获取用户信息
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              let userInfo = res.userInfo
              let getData = {
                Action: 'CheckUser',
                openid: wx.getStorageSync('openid'),
                nickName: userInfo.nickName,
                avatarUrl: userInfo.avatarUrl,
                gender: userInfo.gender, //性别 0：未知、1：男、2：女
                province: userInfo.province,
                city: userInfo.city,
                country: userInfo.country
              }

              that.wc.get(getData, (json) => {
                wx.setStorageSync('openId', json.Message || 1)
              })

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })

        })
      }
    })

  },
  globalData: {
    userInfo: null
  },
  wc: new wc()
})