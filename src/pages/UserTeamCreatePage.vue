<script setup lang="ts">

import {useRouter} from "vue-router";
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";

const router = useRouter();
const searchText = ref('');

// 跳转到队伍页面
const doAddTeam = () => {
  router.push({
    path:'/team/add',
  });
}
const teamList = ref({});

/**
 * 通用搜索
 * @param val
 */
const listTeam = async (val = '') => {
  const res = await myAxios.get('/team/list/create', {
    params: {
      searchText : val,
      pageNum: 1,
    },
  });
  if(res?.code === 0) {
    teamList.value = res.data;
    console.log("这是数据" + res.data);
  } else {
    alert ("查询失败");
  }
}
// 页面加载时运行一次
onMounted( () => {
  listTeam('');
});

// 搜索事件
const onSearch = (val) => {
  listTeam(val)
};


</script>

<template>
  <div>
    <van-search v-model="searchText" placeholder="请输入搜索关键词" @search="onSearch"/>
    <team-card-list :team-List="teamList" />
    <van-button type="primary" block @click="doAddTeam">创建队伍</van-button>
    <van-empty v-if="teamList?.length < 1"  description="数据为空"/>
  </div>
</template>

<style scoped>

</style>