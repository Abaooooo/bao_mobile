<template>
  <div class="nav_box">
    <router-link to="/home">
      <span class="iconfont icon-home"></span>
      <span class="text">首页</span>
    </router-link>

    <router-link to="/category">
      <span class="iconfont icon-category"></span>
      <span class="text">分类</span>
    </router-link>

    <router-link to="/cart">
      <span class="iconfont icon-cart"></span>
      <span class="text">购物车</span>
    </router-link>

    <router-link to="/user">
      <span class="iconfont icon-user"></span>
      <span class="text">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.nav_box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  box-shadow: 0 6px 6px 6px #ccc;
  display: flex;
  align-items: center;
  background: #fff;
  a {
    flex: 1;
    color: #999;
    .iconfont {
      font-size: 20px;
    }
    .text {
      font-size: 14px;
      display: block;
    }
  }
}
</style>