// pages/userLogin/userLogin.js

const app = getApp()
Page({
  data: {

  },
  doLogin: function (e) {
    var formObject = e.detail.value;
    var username = formObject.username;
    var password = formObject.password;
    if (username.length == 0 || password.length == 0) {
      wx.showToast({
        title: '用户密码不为空',
        icon: 'none',
        duration: 3000

      })
    } else {
      //调用后端
      var serverurl = app.serverUrl;
      wx.showLoading({
        title: '请稍等...',
      }),
      wx.request({
        url: serverurl + '/login',
        method: "POST",
        data: {
          username: username,
          password: password
        },
        header: {
          'content-type': 'application/json'//默认值
        },
        success: function (res) {
          console.log(res.data);
          wx.hideLoading();
          var status = res.data.status1;
          res.data.data.faceimage = app.serverUrl + "/images" + res.data.data.faceimage;
          if (status == 200) {
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 2000
            }),
              // wx.navigateTo({
              //   url: '../minePage/mine',
              // })
              app.globalData.userInfo = res.data.data;
            wx.navigateBack({
              delta: 1,//返回上一页
            })
              //跳转
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 4000
            }),
            
              app.globalData.userInfo = res.data.data;
              
          } 
        }
      })

    }
  },
  goRegistBtn:function(){
    wx.navigateTo({
      url: '../userRegist/userRegist',
    })
  }
})