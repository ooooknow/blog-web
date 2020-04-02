import request from '@/utils/request';
import qs from 'qs';

//获取提现账户信息
export function queryWaybillTemplates(params) {
    return request({
        url: 'admin/waybill/manager/queryWaybillTemplates',
        method: 'get',
        params,
    });
}
// 获取地址

export function queryDeliveryAddressList(params) {
    return request({
        url: 'admin/waybill/manager/queryDeliveryAddressList',
        method: 'get',
        params,
    });
}
// 删除运单模板
export function deleteWaybillTemplate(params) {
    return request({
        url: 'admin/waybill/manager/deleteWaybillTemplate',
        method: 'get',
        params,
    });
}
// 保存发货地址
export function saveOrUpdateAddress(params) {
    return request({
        url: 'admin/waybill/manager/saveOrUpdateAddress',
        method: 'get',
        params,
    });
}
// 删除发货地址deleteDeliveryAddress
export function deleteDeliveryAddress(params) {
    return request({
        url: 'admin/waybill/manager/deleteDeliveryAddress',
        method: 'get',
        params,
    });
}
// 保存运费模板
export function saveOrUpdateWaybillTemplate(data) {
    return request({
        url: 'admin/waybill/manager/saveOrUpdateWaybillTemplate',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}

export function findWaybillTemplate(params) {
    return request({
        url: 'admin/waybill/manager/findWaybillTemplate',
        method: 'get',
        params,
    });
}
