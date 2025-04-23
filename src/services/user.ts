import myAxios from '../plugins/myAxios';

export const getCurrentUser = async () => {
    // const currentUser = getCurrentUserState();
    // if(currentUser) {
    //     return currentUser;
    // }
    // 用户不存在 发起请求
    const res = await myAxios.get("/user/current");
    if(res.code === 0) {
        // setCurrentUserState(res.data);
        return res.data;
    }

    return null;
}