const app = getApp()
const data = require('../../data.js')

Page({
  data: {
    data: data.data,
    toView: 'a',
    indexes: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
  },

  onLoad: function () {
  },

  bindtap: function(e) {
    const index = e.currentTarget.dataset.i

    this.setData({
      toView: index
    })
  }
})
