// 引入dataList里面的数据
const listData = require('../../data/dataList.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: listData['list_data']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  toDetail (event) {
    // 获取到点击的列表索引
    const index = event.currentTarget.dataset.index
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index
    })
  },
  carouselToDetail (event) {
    // 获取到自定义的节点数据
    const index = event.target.dataset.index
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index
    })
  }
})