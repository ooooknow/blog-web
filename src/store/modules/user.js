import { login, getInfo } from '@/api/user';
import { getShopInfo } from '@/api/shop';
import { getCookie, setCookie, removeAllCookie } from '@/utils/auth';
import { resetRouter } from '@/router';
import store from '../index';

const state = {
    //是否登录
    isLogin: getCookie('isLogin'),
    //账号token
    token: getCookie('accountToken'),
    //用户名
    name: getCookie('userName'),
    //用户uid
    uid: getCookie('uid'),
    //用户获取开店助手二维码uid
    codeUid: getCookie('codeUid'),
    //用户siteid
    userSiteId: getCookie('userSiteId'),
    //店铺id
    maiduoSiteId: getCookie('maiduoSiteId'),
    //店铺uid
    maiduoUid: getCookie('maiduoUid'),
    //图片资源地址
    sourceUrlPrefix: getCookie('sourceUrlPrefix') || 'http://profile.maiduocbd.com/',
    //店铺过期时间
    packageEndTime: getCookie('packageEndTime'),
    //店铺是否过期
    isExpire: getCookie('isExpire') || false,
    //账号角色
    roles: '',
    //店铺是否待于激活状态
    needActive: false,
    //店铺logo
    logo: null,
    //是否显示全局头部
    showHeader: true,
};

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
        setCookie('accountToken', token);
    },
    SET_IS_LOGIN: (state, isLogin) => {
        state.isLogin = isLogin;
        setCookie('isLogin', isLogin);
    },
    SET_NAME: (state, name) => {
        state.name = name;
        setCookie('userName', name);
    },
    SET_UID: (state, uid) => {
        state.uid = uid;
        setCookie('uid', uid);
    },
    SET_CODE_UID: (state, codeUid) => {
        state.codeUid = codeUid;
        setCookie('codeUid', codeUid);
    },
    SET_USERSITEID: (state, userSiteId) => {
        state.userSiteId = userSiteId;
        setCookie('userSiteId', userSiteId);
    },
    SET_MAIDUOSITEID: (state, maiduoSiteId) => {
        state.maiduoSiteId = maiduoSiteId;
        setCookie('maiduoSiteId', maiduoSiteId);
    },
    SET_MAIDUOUID: (state, maiduoUid) => {
        state.maiduoUid = maiduoUid;
        setCookie('maiduoUid', maiduoUid);
    },
    SET_SOURCEURLPREFIX: (state, sourceUrlPrefix) => {
        state.sourceUrlPrefix = sourceUrlPrefix;
        setCookie('sourceUrlPrefix', sourceUrlPrefix);
    },
    SET_PACKAGE_ENDTIME: (state, data) => {
        state.packageEndTime = data;
        setCookie('packageEndTime', data);
    },
    SET_IS_EXPIRE: (state, data) => {
        state.isExpire = data;
        setCookie('isExpire', data);
    },
    SET_ROLES: (state, data) => {
        state.roles = data;
    },
    SET_NAAD_ACTIVE: (state, data) => {
        state.needActive = data;
    },
    SET_LOGO: (state, data) => {
        state.logo = data;
    },
    SET_SHOW_HEADER: (state, data) => {
        console.log('SET_SHOW_HEADER data', data);
        state.showHeader = data;
    },
};

const actions = {
    // user login
    Login({ commit }, userInfo) {
        const { userName, password } = userInfo;
        return new Promise((resolve, reject) => {
            login({ UserName: userName.trim(), Password: password })
                .then(response => {
                    if (response.result) {
                        // 获取用户信息 站点ID
                        //store.dispatch('user/getInfo');
                        const { token } = response.data;
                        console.log('token : ', token);

                        //保存
                        commit('SET_TOKEN', token);
                        commit('SET_IS_LOGIN', true);
                        commit('SET_NAME', userName);
                    }
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },

    // get user info
    GetInfo({ commit }) {
        return new Promise((resolve, reject) => {
            getInfo()
                .then(response => {
                    const { model } = response;
                    const {
                        siteId,
                        account,
                        maiduoSiteId, //店铺id
                        maiduoUid, //用户uid
                        needActive, //店铺是否需要激活
                        expire, //套餐是否已过期
                        accountPackageEndTime, //账号套餐时间
                        sourceUrlPrefix, //图片资源地址
                    } = model;
                    let { isMaiduoChidStore, isMaiduoSubStore, isMaiduoFlagship, supplier } = model.accountGene;
                    //保存角色 supplier（供货商）、branch（分店）、flagship（旗舰店）
                    let roles = 'flagship'; //设置默认
                    let uid = account.unionId;
                    let codeUid = '';
                    //分店
                    if (isMaiduoChidStore && isMaiduoSubStore) {
                        roles = 'branch';
                        codeUid = account.unionId;
                    }
                    //旗舰店
                    if (isMaiduoFlagship && isMaiduoSubStore) {
                        roles = 'flagship';
                        codeUid = model.uid;
                    }
                    //供货商
                    if (supplier && isMaiduoSubStore) {
                        roles = 'supplier';
                        codeUid = account.unionId;
                    }
                    //保存用户siteid, uid
                    commit('SET_UID', uid);
                    commit('SET_CODE_UID', codeUid);
                    commit('SET_USERSITEID', siteId);
                    commit('SET_MAIDUOSITEID', maiduoSiteId);
                    commit('SET_MAIDUOUID', maiduoUid);
                    commit('SET_SOURCEURLPREFIX', sourceUrlPrefix);
                    commit('SET_PACKAGE_ENDTIME', accountPackageEndTime);
                    commit('SET_IS_EXPIRE', expire);
                    commit('SET_NAAD_ACTIVE', needActive);
                    console.log(roles);
                    //保存
                    commit('SET_ROLES', roles);

                    // 获取店铺信息 logo
                    store.dispatch('user/getShopInfo', uid);

                    resolve(model);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    // 获取店铺信息
    async getShopInfo({ commit }, uid) {
        return new Promise((resolve, reject) => {
            getShopInfo({ uid: uid })
                .then(response => {
                    const { result } = response.model;
                    if (result !== null) {
                        commit('SET_LOGO', state.sourceUrlPrefix + result.image);
                    }
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    // 获取店铺信息
    async changHeader({ commit }) {
        console.log('changHeader');
        commit('SET_SHOW_HEADER', !state.showHeader);
    },
    // user logout
    LogOut({ commit }) {
        commit('SET_UID', '');
        commit('SET_CODE_UID', '');
        commit('SET_USERSITEID', '');
        commit('SET_MAIDUOSITEID', '');
        commit('SET_MAIDUOUID', '');
        //commit('SET_SOURCEURLPREFIX', '');
        commit('SET_PACKAGE_ENDTIME', '');
        commit('SET_IS_EXPIRE', false);
        commit('SET_NAAD_ACTIVE', '');
        commit('SET_TOKEN', '');
        commit('SET_LOGO', '');
        commit('SET_NAME', '');
        commit('SET_IS_LOGIN', '');
        commit('SET_ROLES', []);
        store.commit('SET_ROUTERS', []);
        removeAllCookie();
        resetRouter();
    },

    // remove isLogin
    ResetIsLogin({ commit }) {
        return new Promise(resolve => {
            commit('SET_NAME', '');
            commit('SET_IS_LOGIN', '');
            commit('SET_ROLES', []);
            store.commit('SET_ROUTERS', []);
            removeAllCookie();
            resolve();
        });
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
