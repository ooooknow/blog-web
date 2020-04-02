import request from '@/utils/request';

// 发送验证码
export function getRealPayDetails(data) {
    return request({
        url: 'audit/messageCode/sendSmsCodeByPc',
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        params: data,
    });
}
// 校验手机验证码
export function codeCheckByPc(data) {
    return request({
        url: 'audit/messageCode/codeCheckByPc',
        method: 'get',
        params: data,
    });
}
// 供货商注册
export function supplierRegister(data) {
    return request({
        url: 'supplierRegister',
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        data: data,
    });
}

// 分店注册
export function branchStoreRegister(data) {
    return request({
        url: 'branchStoreRegister',
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        data: data,
    });
}

// 旗舰店注册
export function flagshipStoreRegister(data) {
    return request({
        url: 'flagshipStoreRegister',
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        data: data,
    });
}

// 校验用户名是否存在
export function checkUserNameReg(userName) {
    return request({
        url: 'checkUserNameReg',
        method: 'get',
        params: {
            userName: userName,
        },
    });
}

//店铺注册：获取分类
export function findMultStorePartitionRegist() {
    return request({
        url: 'helper/mallsite/findMultStorePartitionRegist',
        method: 'get',
    });
}
