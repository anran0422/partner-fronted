<script setup>
import {useRouter} from "vue-router";
import { ref } from 'vue';
import myAxios from "../plugins/myAxios.ts";

const router = useRouter();
const userAccount = ref('');
const userPassword = ref('');

import { showSuccessToast, showFailToast } from 'vant';

const onSubmit = async () => {
  const res = await myAxios.post('/user/login', {
    userAccount: userAccount.value,
    userPassword: userPassword.value,
  });
  // 后端返回数据为 res.data
  if(res.data) {
    router.replace('/');
    showSuccessToast('登陆成功');
  } else {
    showFailToast('账号或密码错误');
  }
};

</script>

<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '账号不能为空' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="userPassword"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '密码不能为空' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<style scoped>

</style>