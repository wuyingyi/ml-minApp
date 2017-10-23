// pages/myGoods/myGoods.js
const app = getApp()
const { wc } = app
const { host, data, isSuccess, success } = wc

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  // 收藏状态切换
  collectCut: function (e) {
    var index = e.currentTarget.dataset.index;
    var list = this.data.goodList

    list[index].IsFav = !(list[index].IsFav || false);
    this.setData({ goodList: list })

    // 切换收藏状态
    let id = e.currentTarget.dataset.id
    let getData = {
      Action: 'AddFavorite',
      ClassID: 3,
      UserID: wx.getStorageSync('openId'),
      ID: id
    }
    // let list = this.data.list
    wc.get(getData, (json) => {
      if (json[isSuccess] === success) {

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    let getData = {
      Action: 'GetMyProductList',
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