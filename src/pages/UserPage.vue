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
    <van-cell title="当前用户" :value="user?.username" />
    <van-cell title="修改信息" is-link to="/user/update" />
    <van-cell title="已加入" is-link to="/user/team/join" />
    <van-cell title="已创建" is-link to="/user/team/create" />
  </template>
</template>

<style scoped>

</style>