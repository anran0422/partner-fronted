<script setup lang="ts">

import {useRouter} from "vue-router";
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";

const router = useRouter();
const searchText = ref('');

/**
 * 切换查询状态
 */
const active=ref('public')
const onTabChange = ((name) => {
  if(name === 'public') {
    listTeam(searchText.value, 0);
  } else {
    listTeam(searchText.value, 2);
  }
});

// 跳转到队伍页面
const doAddTeam = () => {
  router.push({
    path:'/team/add',
  });
}
const teamList = ref({});
const myJoinTeamList = ref({});

/**
 * 搜索队伍
 * @param val
 */
const listTeam = async (val = '', status = 0) => {
  const res = await myAxios.get('/team/list', {
    params: {
      searchText : val,
      pageNum: 1,
      status,
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


/**
 * 搜索当前用户加入队伍
 * @param val
 */
const listMyJoinTeam = async (val = '') => {
  const res = await myAxios.get('/team/list/join', {
    params: {
      searchText : val,
      pageNum: 1,
    },
  });
  if(res?.code === 0) {
    myJoinTeamList.value = res.data;
    console.log("这是数据" + res.data);
  } else {
    alert ("查询失败");
  }
}


</script>

<template>
  <div>
    <van-search v-model="searchText" placeholder="请输入搜索关键词" @search="onSearch"/>
    <van-tabs v-model:active="active" @change="onTabChange">
      <van-tab title="公开" name="public" />
      <van-tab title="加密" name="password" />
    </van-tabs>
    <div style="margin-bottom:16px;"/>
    <team-card-list :team-List="teamList" :myJoinTeamList="myJoinTeamList" />
    <van-floating-bubble
        axis="xy"
        magnetic="x"
        icon="plus"
        @click="doAddTeam"
    />
    <van-empty v-if="teamList?.length < 1"  description="数据为空"/>
  </div>
</template>

<style scoped>

</style>