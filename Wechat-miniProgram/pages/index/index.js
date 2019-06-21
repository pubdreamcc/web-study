Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    flag: false,
    time: (new Date()).toString().slice(16, 24)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取用户信息
    this.getUserInfo()
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },
  go: function () {
    wx.switchTab({
      url: '/pages/list/list',
    })
  },

  handleUserInfo (data) {
    // 如果用户点击允许授权
    if (data.detail.rawData) {
      this.getUserInfo()
    } else {
      // 如果用户点击拒绝授权
      this.setData({
        flag: false,
        userInfo: {}
      })
    }
  },

  getUserInfo () {
    // 获取用户信息
    wx.getUserInfo({
      success: (data) => {
        this.setData({
          flag: true,
          userInfo: {
            name: data.userInfo.nickName,
            avatarUrl: data.userInfo.avatarUrl
          }
        })
      }
    })
  },


  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})