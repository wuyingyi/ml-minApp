// pages/mine/mine.js
const app = getApp()
const { wc } = app
const { host, data, isSuccess, success } = wc

let list = [
  {
    icon: 'image',
    title: '我的文章',
    path: 'myRead'
  },
  {
    icon: 'image',
    title: '我的课程',
    path: 'myCourse'
  },
  {
    icon: 'image',
    title: '我的物品',
    path: 'myGoods'
  }
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list,
  },

  //  认证
  doIdent: function (e) {
    // https://sp.yangchengtech.com/bodymind/Handler/Handler.ashx?Action=ValiDate&encryptedData=&iv=&session_key=&UserID=8
    let detail = e.detail
    const that = this
    let getData = {
      Action: 'ValiDate',
      encryptedData: detail.encryptedData,
      iv: detail.iv,
      session_key: wx.getStorageSync('session_key'),
      UserID: wx.getStorageSync('openId'),
    }

    wc.get(getData, (json) => {
      if (json[isSuccess] === success) {
        that.setData({
          'userInfo.isValidate': 1
        })
      }
    })
  },

  navtoList: function (e) {
    let data = e.currentTarget.dataset
    let path = data.path
    wc.navigateTo('/pages/' + path + '/' + path)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   userInfo: app.globalData.userInfo
    // })

    const that = this
    let getData = {
      Action: 'GetUsersDetail',
      UserID: wx.getStorageSync('openId'),
    }

    wc.get(getData, (json) => {
      if (json[isSuccess] === success) {
        that.setData({
          userInfo: json[data]
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})