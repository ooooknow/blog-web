import request from '@/utils/request';

// 获取 七牛云上传Token
export function getSysPicUploadToken(params) {
    return request({
        url: 'admin/qiniu/getSysPicUploadToken',
        method: 'get',
        params,
    });
}

//未登录情况，获取七牛云上传token, 用于注册
export function getSysPicUploadTokenRegister() {
    return request({
        url: '/getSysPicUploadTokenRegister',
        method: 'get',
    });
}
