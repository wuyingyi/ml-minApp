// pages/myFav/myFav.js
const app = getApp()
const { wc } = app
const { host, data, isSuccess, success } = wc

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tIndex: 0
  },

  // tab 切换
  switchTab: function (e) {
    const that = this
    let data = e.currentTarget.dataset

    that.setData({
      tIndex: data.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    // 文章
    let getData = {
      Action: 'GetFavNewsList',
      UserID: wx.getStorageSync('openId'),
    }

    wc.get(getData, (json) => {
      if (json[isSuccess] === success) {
        that.setData({
          readList: json[data]
        })
      }
    })

    // 课程
    getData = {
      Action: 'GetFavCourseList',
      UserID: wx.getStorageSync('openId'),
    }

    wc.get(getData, (json) => {
      if (json[isSuccess] === success) {
        that.setData({
          Data: json[data]
        })
      }
    })

    // 物品
    getData = {
      Action: 'GetFavProductList',
      UserID: wx.getStorageSync('openId'),
    }

    wc.get(getData, (json) => {
      if (json[isSuccess] === success) {
        that.setData({
          goodList: json[data]
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