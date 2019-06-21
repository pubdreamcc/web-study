// pages/movieDetail/movieDetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {},
    movieActor: ''
  },
  hello () {
    console.log(123)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取到页面路径中的id
    const id = options.id
    // 根据id值查找对应的电影
    const movie = app.movies.find((item) => {
      return item.id == id
    })
    let movieActor = ''
    for (const item of movie.casts) {
      movieActor += item.name + ','
    }
    movieActor = movieActor.slice(0, movieActor.length-1)
    this.setData({
      movie: movie,
      movieActor: movieActor
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