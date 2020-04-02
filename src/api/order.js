import request from '@/utils/request';
import qs from 'qs';

// 订单管理

// 获取订单列表
export function queryOrderList(data) {
    return request({
        url: 'admin/order/queryOrderList',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}
// 修改实付金额
export function updateOrderPrice(params) {
    return request({
        url: 'admin/order/updateOrderPrice',
        method: 'get',
        params,
    });
}
// 删除订单
export function deleteOrder(data) {
    return request({
        url: 'admin/order/delete',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}
// 卖家发货
export function sendOrder(data) {
    return request({
        url: 'admin/order/sendOrder',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}
// 批量发货
export function batchSendOrder(data) {
    console.log(data);
    return request({
        url: 'admin/order/batchSendOrder',
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data; charset=UTF-8',
        },
        data: data,
    });
}
// 修改物流信息
export function updateDelivery(data) {
    return request({
        url: 'admin/order/updateDelivery',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}
// 同意/拒绝退款
export function examineOrder(data) {
    return request({
        url: 'admin/order/examineOrder',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}
// 获取订单详情
export function getOrderDetail(data) {
    return request({
        url: 'admin/order/getOrderDetail',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}
// 打印小票
export function printAgain(data) {
    return request({
        url: 'admin/order/printAgain',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}

// 获取运单模块列表
export function queryWaybillTemplates(params) {
    return request({
        url: 'admin/waybill/manager/queryWaybillTemplates',
        method: 'get',
        params,
    });
}
