<template>
  <div>
    <div class="container">
      <img :src="imgUrl" class="img">
      <div class="car-detail">
        <div>{{ zhName }}</div>
        <div>{{ enName }}</div>
        <div>{{ origin }}</div>
        <div>{{ company }}</div>
        <div>{{ createdTime }}</div>
        <div>{{ founder }}</div>
      </div>
    </div>

    <div class="cars-into-title">车标故事</div>
    <div class="cars-into">
      <wxParse :content="briefInto"/>
    </div>
  </div>
</template>

<script>
import data from '@/data/data'
import wxParse from 'mpvue-wxparse'

export default {
  data() {
    return {
      data: data.data,
      imgUrl: '',
      zhName: '',
      enName: '',
      origin: '',
      company: '',
      createdTime: '',
      founder: '',
      briefInto: ''
    }
  },

  components: {
    wxParse
  },

  mounted: function () {
    let options = this.$root.$mp.query
    // options = {i:0, j:0}
    let detailData = this.data[options.i].infos[options.j]
    // let detailData = this.data[0].infos[0]
    
    this.imgUrl = detailData.imgUrl
    this.zhName = detailData.zhName
    this.enName = detailData.enName
    this.origin = detailData.origin
    this.company = detailData.company
    this.createdTime = detailData.createdTime
    this.founder = detailData.founder
    
    const p = /<img .* src=.*>/g
    const briefInto = detailData.briefInto.replace(p, '')
    this.briefInto = briefInto

    const pageTitle = detailData.zhName.replace('品牌名称：', '').trim()
    wx.setNavigationBarTitle({title: pageTitle})
  },

  onShareAppMessage: function() {}
}
</script>

<style>
@import url("~mpvue-wxparse/src/wxParse.css");

.wxParse .p, .wxParse-p, .wxParse-div {
  font-size: 24rpx;
  color: #353535;
  line-height:1.5em;
  margin-bottom:20rpx;
}

.container {
  display: flex;
  margin-bottom: 20rpx;
}

.img {
  height: 250rpx; 
  width: 250rpx; 
  margin-left: 20rpx; 
  border: 1px solid #eee;
}

.car-detail {
  margin-left: 25rpx;
  flex: 1;
  font-size: 26rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cars-into {
  padding: 20rpx;
}

.cars-into-title {
  height: 60rpx;
  line-height: 60rpx;
  background: #eee;
  font-size: 30rpx;
  padding-left: 20rpx;
}
</style>
