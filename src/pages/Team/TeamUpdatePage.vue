<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../../plugins/myAxios.ts";
import {TeamType} from "../../models/team.d.ts";

const router = useRouter();
const route = useRoute();

const addTeamData = ref({});

/**
 * 页面加载时拿到队伍信息
 */
const id = route.query.id;
onMounted(async() => {
  if(id <= 0) {
    alert("队伍id错误");
    return;
  }
  const res = await myAxios.get('/team/get',{
    params: {
      id,
    }
  });
  if(res.status === 200 && res.data) {
    addTeamData.value = res.data;
  } else {
    alert("获取队伍信息失败");
  }
});

const datePickerRes = ref(addTeamData.value.expireTime);
const showPicker = ref(false);
const minDate = new Date();
const onConfirm = ({ selectedValues }) => {
  datePickerRes.value = selectedValues.join('-');
  addTeamData.value.expireTime = datePickerRes.value;
  showPicker.value = false;
};

/**
 * 页面提交，更新队伍
 */
const onSubmit = async() => {
  const postData = {
    ...addTeamData.value,
    status: Number(addTeamData.value.status),
  }
  const res = await myAxios.post('/team/update', postData);

  if(res.data && res.status === 200){
    router.push( {
      path: '/team',
      replace: true
    });
    alert("更新队伍成功");
    console.log(res);
  }else{
    alert("更新队伍失败");
  }
}



</script>

<template id="teamAddPage">
  <div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
            v-model="addTeamData.name"
            name="name"
            label="队伍名称"
            placeholder="请输入队伍名称"
            :rules="[{ required: true, message: '请输入队伍名称' }]"
        />
        <van-field
            v-model="addTeamData.description"
            rows="1"
            autosize
            label="队伍描述"
            type="textarea"
            placeholder="请输入队伍描述"
        />
        <van-field
            v-model="datePickerRes"
            is-link
            readonly
            name="datePicker"
            label="过期时间"
            :placeholder="addTeamData.expireTime ?? '请选择过期时间'"
            @click="showPicker = true"
        />
        <van-popup v-model:show="showPicker" position="bottom">
          <van-date-picker
              @cancel = "showPicker = false"
              @confirm="onConfirm"
              type="datetime"
              title="选择过期时间"
              :min-date="minDate"
          />
        </van-popup>

        <van-field name="radio" label="队伍状态">
          <template #input>
            <van-radio-group v-model="addTeamData.status" direction="horizontal">
              <van-radio name="0">公开</van-radio>
              <van-radio name="1">私有</van-radio>
              <van-radio name="2">加密</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field
            v-if="addTeamData.status === '2'"
            v-model="addTeamData.password"
            type="password"
            name="password"
            label="密码"
            placeholder="请输入队伍密码"
            :rules="[{ required: true, message: '密码不能为空' }]"
        />

      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>

</template>

<style scoped>

</style>