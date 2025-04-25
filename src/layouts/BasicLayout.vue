<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from "vue";
import routes from "../config/route.ts";

const router = useRouter();

const DEFAULT_TILE = "一路同行";
const title = ref(DEFAULT_TILE);


/**
 * 根据路由切换标题
 */
router.beforeEach((to, from) => {
  const toPath = to.path;
  const route =  routes.find((route) => {
    return route.path === toPath;
  });
  if(!route?.title) {
    title.value = DEFAULT_TILE;
  } else {
    title.value = route.title;
  }
});

const onClickLeft = () => {
  router.back();
};
const onClickRight = () => {
  // 字符串路径
  router.push('/search');
};

</script>

<template>
  <van-nav-bar
      :title="title"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>
  <div id="content">
    <router-view/>
  </div>


  <van-tabbar
      route
      @change="onChange"
  >
    <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item to="/team" icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o" name="user">个人</van-tabbar-item>
  </van-tabbar>


</template>

<style scoped>
#content {
  padding-bottom: 80px;
}
</style>