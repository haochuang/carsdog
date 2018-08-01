
<template>
  <div class="container">
    <img src="./../../../static/avatars.jpeg" class="avatars-img">
    <div>该小程序仅为了个人方便查询 & 记忆车标所创建</div>
    <div>无任何商业用途</div>
  </div>
</template>

<script>
export default {
  onShareAppMessage: function() {}
}
</script>

<style>
.container {
  font-size: 28rpx;
  text-align: center;
  margin-top: 15rpx;
  color: #999;
}

.avatars-img {
  width: 160rpx; 
  height: 160rpx; 
  border-radius:50%;
}
</style>
