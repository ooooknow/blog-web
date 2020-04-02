import request from '@/utils/request';
import qs from 'qs';

//获取优惠券列表
export function getCouponList(params) {
    return request({
        url: 'admin/coupon/queryByPage',
        method: 'get',
        // 行业类型 goodsType 商城 1 外卖 2
        // siteId  当前用户的店铺ID
        params,
    });
}

//使优惠券失效
export function invalid(params) {
    return request({
        url: 'admin/coupon/invalid',
        method: 'get',
        params,
    });
}

//删除优惠券
export function remove(params) {
    return request({
        url: 'admin/coupon/remove',
        method: 'get',
        params,
    });
}

//查找优惠券
export function findCouponConfig(params) {
    return request({
        url: 'admin/coupon/findCouponConfig',
        method: 'get',
        params,
    });
}

//新建优惠券
export function saveOrUpdate(data) {
    return request({
        url: 'admin/coupon/saveOrUpdate',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}

// 分类商品结构
export function findSiteBar(parId, hasSubList, siteId, start, limit) {
    return request({
        url: '/applet/mobile/siteBar/findSiteBar',
        method: 'get',
        params: {
            parId,
            hasSubList,
            siteId,
            start,
            limit,
        },
    });
}

//寻找单个商品
export function selectPage(data) {
    return request({
        url: 'admin/goods/selectPage',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}
