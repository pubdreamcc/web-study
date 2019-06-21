// pages/detail/detail.js
const listData = require('../../data/dataList.js')
// 获取到全局唯一的app实例，从而得到全局的数据
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj: {},
    index: null,
    isAudioPlay: false,
    isCollection: false
  },

  handleMusic () {
    let isAudioPlay = !this.data.isAudioPlay
    this.setData({
      isAudioPlay: isAudioPlay
    })
    // 播放或停止音频
      const BackgroundAudioManager = wx.getBackgroundAudioManager()
    if (!isAudioPlay) {
      // 暂停音频
      BackgroundAudioManager.pause()
      app.data.audioPlay = false
    } else {
      // 播放音频
      BackgroundAudioManager.src = this.data.dataObj.music.dataUrl
      BackgroundAudioManager.title = this.data.dataObj.music.title
      BackgroundAudioManager.play()
      app.data.audioPlay = true
    }
  },

  // 收藏文章
  collection () {
    let isCollection = !this.data.isCollection
    this.setData({
      isCollection
    })
    let title = isCollection ? '收藏成功' :  '取消收藏'
    // 弹出消息提示框
    wx.showToast({
      title: title,
      icon: 'success'
    })
    // 把数据缓存到本地
    let data = {}
    wx.getStorage({
      key: 'isCollection',
      success: (res) => {
        data = res.data
        data[this.data.index] = isCollection ? true : false
        wx.setStorage({
          key: 'isCollection',
          data: data
        })
      }
    })
  },

  // 分享
  share () {
    wx.showActionSheet({
      itemList: ['分享到朋友圈', '分享到微博', '分享到qq空间'],
      success(res) {
        console.log(res.tapIndex)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取到页面路径中的参数
    const index = options.index
    // 更新初始化数据
    this.setData({
      dataObj: listData.list_data[index],
      index
    })

    // 是否已经收藏
    const dataStorage = wx.getStorageSync("isCollection")
    if (!dataStorage) {
      // 初始化一个缓存空对象
      wx.setStorageSync('isCollection', {})
    }
    if (dataStorage[index]) {
      // 已经收藏
      this.setData({
        isCollection: true
      })
    }
    const BackgroundAudioManager = wx.getBackgroundAudioManager()
    // 监听背景音频播放事件
    BackgroundAudioManager.onPlay(() => {
      app.data.audioPlay = true
    })
    // 监听背景音频停止事件
    BackgroundAudioManager.onPause(() => {
      app.data.audioPlay = false
    })
    if (app.data.audioPlay) {
      // 说明后台音乐正在播放中
      this.setData({
        isAudioPlay: true
      })
    } else {
      // 说明后台没有在播放音乐
      this.setData({
        isAudioPlay: false
      })
    }
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