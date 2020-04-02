import request from '@/utils/request';

export function getQrcodeByPath(params) {
    return request({
        url: '/pc/storePackage/bindHelpQRCodeByPc',
        method: 'get',
        //params => { page: 已经发布的页面路径, scene: 当前登陆用户的unionId }
        params,
    });
}
