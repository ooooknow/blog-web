import { supplierRoutes, branchRoutes, flagshipRoutes, constantRoutes } from '@/router';

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
// function hasPermission(roles, route) {
//     // roles为权限身份数组
//     if (route.meta && route.meta.roles) {
//         return roles.some(role => route.meta.roles.indexOf(role) >= 0);
//     } else {
//         return true;
//     }
// }

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(roles) {
    // 返回满足条件的子路由对象
    // const accessedRouters = asyncRouterMap.filter(route => {
    //   if (hasPermission(roles, route)) {
    //     if (route.children && route.children.length) {
    //       // route.children重新过滤赋值;
    //       route.children = filterAsyncRouter(route.children, roles);
    //     }
    //     return true; // 返回该权限路由对象;
    //   }
    //   return false;
    // })

    //supplier（供货商）、branch（分店）、flagship（旗舰店）
    let roleRouters = {
        supplier: supplierRoutes || [],
        branch: branchRoutes || [],
        flagship: flagshipRoutes || [],
    };
    //取出当前角色的路由
    return roleRouters[roles];
}

const permission = {
    state: {
        routers: constantRoutes,
        addRouters: [],
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers; // 权限路由
            state.routers = constantRoutes.concat(routers); // 总路由
        },
    },
    actions: {
        // 根据角色，重新设置权限路由;并保存到vuex中,SET_ROUTERS;
        GenerateRoutes({ commit }, roles) {
            return new Promise(resolve => {
                let accessedRouters = '';
                accessedRouters = filterAsyncRouter(roles);
                commit('SET_ROUTERS', accessedRouters);
                resolve();
            });
        },
    },
};

export default permission;
