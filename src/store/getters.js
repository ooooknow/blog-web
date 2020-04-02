const getters = {
    // 头部标题
    headTitle: state => state.app.headTitle,
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    token: state => state.user.token,
    isLogin: state => state.user.isLogin,
    name: state => state.user.name,
    userSiteId: state => state.user.userSiteId,
    uid: state => state.user.uid,
    codeUid: state => state.user.codeUid,
    maiduoSiteId: state => state.user.maiduoSiteId,
    maiduoUid: state => state.user.maiduoUid,
    sourceUrlPrefix: state => state.user.sourceUrlPrefix,
    packageEndTime: state => state.user.packageEndTime,
    isExpire: state => state.user.isExpire,
    roles: state => state.user.roles,
    routers: state => state.permission.routers, // 所有路由
    addRouters: state => state.permission.addRouters, // 权限过滤路由
    needActive: state => state.user.needActive, //店铺是否需要激活
    logo: state => state.user.logo, //店铺logo
    showHeader: state => state.user.showHeader, //显示、隐藏全局头部
    freightDetail: state => state.freight.freightDetail,
};
export default getters;
