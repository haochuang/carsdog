<template>
  <scroll-view scroll-y :scroll-into-view="toView" style="height:100%" enable-back-to-top="true">
    <div class="container" style="height:100%">
      <div v-for="(item, i) in data" :key="i" :id="item.index" class="item" >
        <div class="category">{{ item.index }}</div>
        <div class="img-wrapper">
          <div class="pic-item" v-for="(item, j) in item.infos" :key="j">
            <navigator :url=" '/pages/detail/main?i=' + i + '&j=' + j" hover-class="none" style="width:100%; height:100%">
              <img :src="item.imgUrl" style="width:100%;height:100%">
              <div class="car-name">{{ item.zhNameShort }}</div>
            </navigator>
          </div>
        </div>
      </div>

      <!-- 导航 -->
      <div class="nav">
        <div v-for="item in indexes" :key="item" :data-i="item" @tap="bindtap">{{ item }}</div>
      </div>
    </div>
  </scroll-view>
</template>

<script>
import data from '@/data/data'

export default {
  data () {
    return {
      indexes: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'],
      data: data.data,
      toView: 'a'
    }
  },

  methods: {
    getCarName: function(name) {
      return name.replace('品牌名称：', '').trim()
    },
    bindtap: function(e) {
      this.toView = e.target.dataset.i
      console.log(this.toView)
    }
  },

  created () {
    this.data.forEach(infos => {
      // console.log(infos)
      infos.infos.forEach(car => {
        car.zhNameShort = car.zhName.replace('品牌名称：', '').trim()
      })
    })
  },

  // 据说一般情况下不要用小程序的钩子函数？
  onShareAppMessage: function() {}
}
</script>

<style scoped>

.pic-item {
  width: 170rpx;
  height: 170rpx;
  display:inline-block; 
  border: 1px solid #eee; 
  box-sizing: border-box; 
  padding: 10rpx; 
  text-align: center;
}

.nav {
  position: fixed; 
  height:100%;
  right: 16rpx;
  top: 0;
  font-size: 26rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #666;
  font-weight: 600;
}

.category {
  padding-left: 15rpx;
  height: 60rpx; 
  line-height: 60rpx;
  background: #eee; 
  color: #000;
  font-weight: bold;
}

.img-wrapper {
  width: 720rpx;
  margin-left: 15rpx;
  margin-top: 15rpx;
}

.car-name {
  font-size: 19rpx;
  margin-top: 8rpx;
}
</style>
