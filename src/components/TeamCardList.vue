<template>
  <div id="teamCardList">
    <van-card
        v-for="team in props.teamList"
        thumb="/src/assets/team.png"
        :desc="team.description"
        :title="`${team.name}`"
    >
      <template #tags>
        <van-tag plain type="primary" style="margin-right: 8px;margin-top: 8px">
          {{ teamStatusEnum[team.status] }}
        </van-tag>
      </template>
      <template #bottom>
        <div>
          {{ `队伍人数：${team.hasJoinNum}/${team.maxNum}` }}
        </div>
        <div v-if="team.expireTime">
          {{ '过期时间:' + team.expireTime }}
        </div>
        <div>
          {{ '创建时间:' + team.createTime }}
        </div>
      </template>
      <!--        @click="doJoinTeam(team.id)">加入队伍-->
      <template #footer>

        <van-button v-if="team.userId !== currentUser?.id && !team.hasJoin"
                    size="small" plain type="primary"
                    @click="preJoinTeam(team)">加入队伍
        </van-button>
        <van-button v-if="team.userId === currentUser?.id"
                    size="small" plain type="primary"
                    @click="doUpdateTeam(team.id)">更新队伍
        </van-button>
        <van-button v-if="team.userId !== currentUser?.id && team.hasJoin"
                    size="small" plain type="primary"
                    @click="doQuitTeam(team.id)">退出队伍
        </van-button>
        <van-button v-if="team.userId === currentUser?.id"
                    size="small" plain type="danger"
                    @click="doDeleteTeam(team.id)">解散队伍
        </van-button>
      </template>
    </van-card>
    <van-dialog v-model:show="showPasswordDialog" title="密码填写"
                show-cancel-button @confirm="doJoinTeam" @cancel="doJoinCancel">
      <van-field v-model="password" placeholder="请输入密码"/>
    </van-dialog>
  </div>

</template>

<script setup lang="ts">
import {TeamType} from "../models/team";
import {teamStatusEnum} from "../constants/team.ts";
import myAxios from "../plugins/myAxios.ts";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user.ts";
import {useRouter} from "vue-router";

interface TeamCardListProps {
  teamList: TeamType[];
}

const props = withDefaults(defineProps<TeamCardListProps>(), {
  // @ts-ignore
  teamList: [] as TeamType[],
});

const router = useRouter();

// 获取当前登录用户信息
const currentUser = ref();
onMounted(async () => {
  currentUser.value = await getCurrentUser();
});

// 输入队伍密码
const showPasswordDialog = ref(false);
const password = ref('');
/**
 * 加入队伍
 * 复用公开 进行改造
 */
const joinTeamId = ref(0);
const preJoinTeam = (team:TeamType) => {
  joinTeamId.value = team.id;
  if(team.status === 0) {
    doJoinTeam();
  } else {
    showPasswordDialog.value = true;
  }
}
// 加入队伍后清空
const doJoinCancel = () => {
  joinTeamId.value = 0;
  password.value = '';
}

/**
 * 加入队伍
 */
const doJoinTeam = async () => {
  if(!joinTeamId.value) {
    return;
  }
  const res = await myAxios.post('/team/join', {
    teamId: joinTeamId.value,
    password: password.value
  });
  // todo 在这在更改了response统一格式后 这要改成res.code
  if (res.data) {
    alert("加入队伍成功！");
    doJoinCancel();
  } else {
    // todo 在这在更改了response统一格式后，可以将失败的messagge拼接在这！
    alert("加入队伍失败！");
  }
}

/**
 * 跳转至更新队伍页面
 */
const doUpdateTeam = async (id: number) => {
  router.push({
    path:'/team/update',
    query: {
      id,
    }
  });
}

/**
 * 退出队伍
 */
const doQuitTeam = async (id: number) => {
  const res = await myAxios.post('/team/quit', {
    teamId: id
  });
  if (res.data) {
    alert("操作成功！");
  } else {
    alert("操作失败！");
  }
}

/**
 * 解散队伍
 */
const doDeleteTeam = async (id: number) => {
  const res = await myAxios.post('/team/delete', {
    id,
  });
  if (res.data) {
    alert("操作成功！");
  } else {
    alert("操作失败！");
  }
}



</script>

<style scoped>
#teamCardList:deep(.van-image__img) {
  height: 128px;
  object-fit: unset;
}
</style>