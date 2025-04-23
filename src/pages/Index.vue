<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref, watchEffect} from 'vue';
import myAxios from "../plugins/myAxios.ts";
import UserCardList from "../components/UserCardList.vue";
import {UserType} from "../models/user";


const route = useRoute();
const userList = ref([]);
const isMatchMode = ref<boolean>(false);
const loading = ref<boolean>(true);

const loadData = async () => {
  let userListData;
  loading.value = true;
  if (isMatchMode.value) { // 当前为心动模式
    const num = 5;
    isMatchMode.value = true;
    userListData = await myAxios.get('/user/match', {
      params: {
        num,
      },
    })
        .then(function (response) {
          console.log("/user/match 成功", response);
          return response?.data;
        })
        .catch(function (error) {
          console.error("/user/match 失败", error);
        })

    if (userListData) {
      userListData.forEach((user: UserType) => {
        if (user.tags) {
          user.tags = JSON.parse(user.tags);
        }
      });
      userList.value = userListData;
    }
  } else { // 切换至普通模式
    isMatchMode.value = false;
    userListData = await myAxios.get('/user/recommend', {
      params: {
        pageNum: 1,
        pageSize: 8,
      },
    })
        .then(function (response) {
          console.log("/user/recommend 成功", response);
          return response.data.records;
        })
        .catch(function (error) {
          console.error("/user/recommend 失败", error);
        })
    if (userListData) {
      userListData.forEach((user: UserType) => {
        if (user.tags) {
          user.tags = JSON.parse(user.tags);
        }
      });
      userList.value = userListData;
    }
  }
  loading.value = false;
}

watchEffect(() => {
  loadData();
});

</script>

<template>
  <van-cell center title="心动模式">
    <van-switch v-model="isMatchMode" size="24"/>
  </van-cell>
  <user-card-list :user-list="userList" :loading="loading"/>
  <van-empty v-if="!userList || userList.length < 1" description="暂无符合用户"/>

</template>

<style scoped>

</style>