<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from "vue";
import myAxios from "../../plugins/myAxios.ts";

const router = useRouter();

const initFormData = {
  "name": "",
  "description": "",
  "maxNum": 0,
  "password": "",
  "expireTime": "",
  "status": 0
}
const addTeamData = ref({...initFormData});

const showPicker = ref(false);
const minDate = new Date();
const datePickerRes = ref('');
const onConfirm = ({ selectedValues }) => {
  datePickerRes.value = selectedValues.join('-');
  addTeamData.value.expireTime = datePickerRes.value; // 2024-10-30 后端接收了时间 可以测试进行查看
  showPicker.value = false;
};

const onSubmit = async() => {
  // todo 前端参数校验
  const res = await myAxios.post('/team/add',{
    ...addTeamData.value,
    status: Number(addTeamData.value.status),
  });

  if(res.status === 200 && res.data){
    router.push( {
      path: '/team',
      replace: true
    });
    alert("创建队伍成功");
  }else{
    alert("创建队伍失败");
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
        <!--不懂为什么就我会报错啊-->
        <van-field
            v-model="datePickerRes"
            is-link
            readonly
            name="datePicker"
            label="过期时间"

            @click="showPicker = true"
        />
        <van-popup v-model:show="showPicker" position="bottom">
          <van-date-picker
              @confirm="onConfirm"
              @cancel = "showPicker = false"
              type="datetime"
              title="选择过期时间"
              :min-date="minDate"
          />
        </van-popup>
        <van-field name="stepper" label="最大人数">
          <template #input>
            <van-stepper v-model="addTeamData.maxNum" min="3" max="10"/>
          </template>
        </van-field>

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