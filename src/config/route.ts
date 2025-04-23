import Index from "../pages/Index.vue";
import Team from "../pages/TeamPage.vue";
import UserPage from "../pages/UserPage.vue";
import UserUpdatePage from "../pages/UserUpdatePage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import Search from "../pages/SearchPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import TeamAddPage from "../pages/Team/TeamAddPage.vue";
import TeamUpdatePage from "../pages/Team/TeamUpdatePage.vue";
import UserTeamJoinPage from "../pages/UserTeamJoinPage.vue";
import UserTeamCreatePage from "../pages/UserTeamCreatePage.vue";

const routes = [
    {path: '/', component: Index},
    {path: '/team', title:"队伍", component: Team},
    {path: '/team/add', title:"创建队伍", component: TeamAddPage},
    {path: '/team/update', title:"更新队伍", component: TeamUpdatePage},
    {path: '/user', title:"个人信息", component: UserPage},
    {path: '/search', title:"搜索队伍", component: Search},
    {path: '/user/edit/', title:"编辑信息", component: UserEditPage},
    {path: '/user/list/', title:"用户列表", component: SearchResultPage},
    {path: '/user/login', title:"用户登录", component: UserLoginPage},
    {path: '/user/update', title:"修改信息", component: UserUpdatePage},
    {path: '/user/team/join', title:"已加入", component: UserTeamJoinPage},
    {path: '/user/team/create', title:"已创建", component: UserTeamCreatePage},
]

export default routes;