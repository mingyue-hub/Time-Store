// pages/foget/forget.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel: "",
    code: "",
    sendTime: '发送验证码',
    sendColor: '#363636',
    snsMsgWait: 60,
    password: "",
    email: "",
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
  jpassword(e) {
    var cp = e.detail.value;
    var p = this.data.password;
    if (cp.length == 0) {
      wx.showToast({
        title: '密码不能空',
        icon: 'none',
        duration: 3000
      })
    } else {
      if (cp != p) {
        wx.showToast({
          title: '密码不一致',
          icon: 'none',
          duration: 3000
        })
      }
    }
  },
  passinput: function (e) {
    var p = p = e.detail.value;
    //var flag = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]")
    if (p.length == 0) {
      wx.showToast({
        title: '密码不能空',
        icon: 'none',
        duration: 3000
      })
    }
    else if (p.length < 8) {
      wx.showToast({
        title: '密码太短，至少8位',
        icon: 'none',
        duration: 3000
      })
    }
    else if (p.match(/\D/) == null) {
      wx.showToast({
        title: '至少含有一个字母',
        icon: 'none',
        duration: 3000
      })
    }
    else {
      this.setData({
        password: p
      })
    }
  },
  // 邮箱验证部分

  inputemail: function (e) {

    let email = e.detail.value

    let checkedNum = this.checkEmail(email)

  },
  inputTel: function (e) {
    this.setData({
      tel: e.detail.value
    })
  },

  checkEmail: function (email) {

    let str = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/

    if (str.test(email)) {
      this.setData({
        email: email
      })
      return true

    } else {

      wx.showToast({

        title: '请填写正确的邮箱号',

        icon: 'none',
        duration: 3000
      })

      return false

    }

  },
  // 获取验证码
  sendCode: function () {
    console.log(this.data.email)
    if (this.data.email == "") {
      wx.showToast({
        title: '邮箱地址不能为空',
        icon: "none",
        duration: 2000
      })
      return
    }
    // 60秒后重新获取验证码
    var inter = setInterval(function () {
      this.setData({
        smsFlag: true,
        sendColor: '#cccccc',
        sendTime: this.data.snsMsgWait + 's后重发',
        snsMsgWait: this.data.snsMsgWait - 1
      });
      if (this.data.snsMsgWait < 0) {
        clearInterval(inter)
        this.setData({
          sendColor: '#363636',
          sendTime: '发送验证码',
          snsMsgWait: 60,
          smsFlag: false
        });
      }
    }.bind(this), 1000);

    // 写自己的服务器和接口- - 
    var serverurl = app.serverUrl;
    wx.request({
      url: serverurl + '/user/regist/sendemail',
      data: {
        email: this.data.email,
      },
      method: "POST",

      success(res) {
        console.log(res);
        if (res.statusCode == 200) {
          //that.toast('短信验证码发送成功，请注意查收');
          wx.showToast({
            title: '短信验证码发送成功，请注意查收',
            icon: "success",
            duration: 2000
          })
          that.setData({
            code: res.data.data
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: "none",
            duration: 2000
          })
        }
      }
    })
  },
  doUpdate: function (e) {
    var formObject = e.detail.value;
    console.log(formObject);
    if (this.data.code==""||this.data.tel==""){
      wx.showToast({
        title: "验证码不能为空",
        icon: "none",
        duration: 2000
      })
      return
    }
    if (this.data.code != this.data.tel) {
      
      wx.showToast({
        title: "验证码不正确，请重新输入",
        icon:"none",
        duration:2000
      })
      return
    }
   
    
    if (formObject.email.length == 0) {
      wx.showToast({
        title: "邮箱不能为空",
        icon: 'none',
        duration: 4000
      })
      return
    }
    var serverurl = app.serverUrl;
    wx.request({
      //url: serverurl + '/user/update/password',
      method: "PUT",
      data: formObject,
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        console.log(res.data);
        var status = res.statusCode;
        if (status == 200) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 4000
          }),
            wx.navigateBack({
              delta: 1
            })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 4000
          })
        }
      }
    })

  },
  goLoginBtn: function () {
    wx.navigateBack({
      delta: 1
    })
  }
})