<script setup lang="ts">
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";

const searchText = ref('');
const teamList = ref({});

/**
 * 搜索当前用户加入的队伍
 * @param val
 */
const listTeam = async (val = '') => {
  const res = await myAxios.get('/team/list/join', {
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
const onSearch = (val:string) => {
  listTeam(val)
};


</script>

<template>
  <div>
    <van-search v-model="searchText" placeholder="请输入搜索关键词" @search="onSearch"/>
    <team-card-list :team-List="teamList"></team-card-list>
    <van-empty v-if="teamList?.length < 1"  description="数据为空"/>
  </div>
</template>

<style scoped>

</style>