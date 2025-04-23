<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {showFailToast, showSuccessToast} from "vant";
import myAxios from "../plugins/myAxios.ts";

const router = useRouter();
const user = ref();

// 这里也可以使用抽象的函数，但是要去掉缓存，以免不刷新页面
onMounted(async () => {
  const res = await myAxios.get('/user/current');
  if(res.code === 0) {
    user.value = res.data;
    showSuccessToast("获取用户信息成功");
  } else {
    showFailToast("获取用户信息失败");
  }
});
// const user = {
//   id: 123,
//   username: "安然0422",
//   userAccount: "anran",
//   avatarUrl: "www.baidu.com",
//   profile: "这个人很懒，什么都没有留下。",
//   gender: "男",
//   phone: "15804292449",
//   email: "15804292449@163.com",
//   userStatus: 1,
//   userRole: 1,
//   planetCode: 1234,
//   tags: ['java','c','c++'],
//   createTime: new Date(),
// }

const toEdit = (editKey: string, editName: string,currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  });
}

</script>

<template>
  <template v-if="user">
    <van-cell title="昵称" is-link :value="user.username" @click="toEdit('username','昵称',user.username)"/>
    <van-cell title="账号" is-link :value="user.userAccount" @click="toEdit('userAccount','账号',user.userAccount)"/>
    <van-cell title="头像" is-link to="/user/edit" :value="user.avatarUrl" >
      <img style="height: 48px" src="../assets/beauti.png">
    </van-cell>
    <van-cell title="性别" is-link :value="user.gender" @click="toEdit('gender','性别',user.gender)"/>
    <van-cell title="电话" is-link :value="user.phone" @click="toEdit('phone','电话',user.phone)"/>
    <van-cell title="邮箱" is-link :value="user.email" @click="toEdit('email','邮箱',user.email)"/>
    <van-cell title="星球编号" :value="user.planetCode" />
    <van-cell title="注册时间" :value="user.createTime" />
  </template>
</template>

<style scoped>

</style>