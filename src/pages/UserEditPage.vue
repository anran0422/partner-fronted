<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import myAxios from "../plugins/myAxios";
import {getCurrentUser} from "../services/user.ts";
import {showFailToast, showLoadingToast, showSuccessToast} from "vant";

const route = useRoute();
const router = useRouter();

const editUser = ref({
  editKey: route.query.editKey,
  editName: route.query.editName,
  currentValue: route.query.currentValue,
});

const onSubmit = async () => {
  const currentUser = await getCurrentUser();

  if(!currentUser) {
    showFailToast("用户未登录");
    router.push('/user/login');
  }
  const res = await myAxios({
    method: 'post',
    url: '/user/update',
    data: {
      "id": currentUser.id,
      [editUser.value.editKey as string]: editUser.value.currentValue,
    }
  });
  if(res.code === 0) {
    router.back();
  } else {
    showFailToast("修改错误");
  }
}


</script>

<template>
  <van-form @submit="onSubmit">
    <van-field
        v-model="editUser.currentValue"
        :name="editUser.editKey"
        :label="editUser.editName"
        :placeholder="`请输入${editUser.editName}`"
    />

    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>


</template>

<style scoped>

</style>