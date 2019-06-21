// movie/movie.js
// 定义请求的url地址
const url = 'http://t.yushu.im/v2/movie/top250'
// 获取到全局唯一的小程序实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 发送ajax请求拿到电影数据
    wx.request({
      url: url,
      method: 'GET',
      success: (res) => {
        this.setData({
          movieData: res.data.subjects
        })
        app.movies = res.data.subjects
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