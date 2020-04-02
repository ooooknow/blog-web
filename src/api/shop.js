import request from '@/utils/request';
import qs from 'qs';

// 店铺管理

// 获取商品列表
export function getFlagShipInfo(params) {
    return request({
        url: 'flagshipInfo/getFlagShipInfoByUid',
        method: 'POST',
        params,
    });
}
// 获取图片库相关数据 图片分组、list
export function getCommonfile(params) {
    return request({
        url: '/admin/commonfile',
        method: 'GET',
        params,
    });
}
// 保存图片到图片库
export function saveCommonfile(data) {
    return request({
        url: '/admin/commonfile',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}
//  保存店铺banner、背景图
export function saveFlagShipInfo(data) {
    return request({
        url: 'flagshipInfo/save',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}
// 获取店铺信息
export function getShopInfo(params) {
    return request({
        url: '/admin/multstore/findRelation',
        method: 'GET',
        params,
    });
}
// 获取总店 店铺分类
export function getShopCategory(params) {
    return request({
        url: '/admin/multStorePartition/findMultStorePartitionByUid',
        method: 'GET',
        params,
    });
}
//  保存店铺信息
export function saveShopInfo(data) {
    return request({
        url: '/admin/multstore/saveStoreRelationInfo',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}
// 校验店铺名称是否存在
export function checkStoreName(params) {
    return request({
        url: '/checkStoreName',
        method: 'GET',
        params,
    });
}
