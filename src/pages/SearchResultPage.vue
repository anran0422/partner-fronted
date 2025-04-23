<script setup>

import {useRoute} from "vue-router";
import {onMounted, ref} from 'vue';
import myAxios from "../plugins/myAxios.ts";
import qs from "qs";
import UserCardList from "../components/UserCardList.vue";

const route = useRoute();
// 得到 SearchPage 传递过来的参数
const {tags} = route.query;

const userList = ref([]);
const loading = ref(true);

onMounted(async () => {
  loading.value = true;
  const userListData = await myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags
    },
    paramsSerializer: params => {
      return qs.stringify(params, {indices: false})
    }
  })
    .then(function (response) {
      console.log("/user/search/tags 成功",response.data
      );
      return response.data;
    })
    .catch(function (error) {
      console.error("/user/search/tags 失败",error);
    })
  console.log(userListData);
  if(userListData) {
    userListData.forEach(user => {
      if(user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    });
    userList.value = userListData;
    loading.value = false;
  }
})

// const mockUser = {
//   id: 123456,
//   username: 'anran',
//   userAccount: 'anran123',
//   avatarUrl: 'https://pic.rmb.bdstatic.com/bjh/events/b8456f45731abe3bfede4faff5c482e77468.png@h_1280',
//   profile: "这个人很懒，什么都没有留下。",
//   gender: 0,
//   phone: '12345678910',
//   email: "1234567897@qq.com",
//   userRole: 1,
//   planetCode: "1234",
//   tags: ['java', 'c++', 'python', 'emo'],
//   createTime: new Date(),
// }

</script>

<template>
  <user-card-list :user-list="userList" :loading="loading">

  </user-card-list>
  <van-empty v-if="!userList || userList.length < 1" description="暂无符合用户" />

</template>

<style scoped>

</style>