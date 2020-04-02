import request from '@/utils/request';
import qs from 'qs';

// 商品管理

// 获取商品列表
export function getList(params) {
    return request({
        url: 'admin/goods/selectPage',
        method: 'get',
        // 行业类型 goodsType 商城 1 外卖 2
        // siteId  当前用户的店铺ID
        params,
    });
}
// 获取商品详情
export function getGoodsDetails(params) {
    return request({
        url: 'admin/goods/select',
        method: 'get',
        params,
    });
}

// 获取商品 分类列表、子分类
export function getCategoryList(params) {
    return request({
        url: 'admin/sitebar/findSiteBar',
        // url: '/applet/mobile/siteBar/findSiteBar',
        method: 'get',
        params,
    });
}
// 新接口 查询店铺的分组信息
export function getSiteBarList(params) {
    return request({
        url: '/admin/sitebar/findSiteBarListBySiteId',
        method: 'get',
        params,
    });
}

//  添加 商品
export function addGoods(data) {
    return request({
        url: 'admin/goods/addGoods',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data, { arrayFormat: 'brackets' }),
    });
}
export function updateGoods(data) {
    return request({
        url: 'admin/goods/updateGoods',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data, { arrayFormat: 'brackets' }),
    });
}

//  上架 商品
export function upGoods(data) {
    return request({
        url: 'admin/goods/up',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}

//  下架 商品
export function downGoods(data) {
    return request({
        url: 'admin/goods/down',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}

//  删除 商品
export function delGoods(data) {
    return request({
        url: 'admin/goods/del',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}

//  设置 分组（归档分组）
export function setSiteBar(data) {
    return request({
        url: 'admin/goods/setSiteBar',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}

// 商品编辑

// 获取 七牛云上传Token
export function getSysPicUploadToken(params) {
    return request({
        url: 'admin/qiniu/getSysPicUploadToken',
        method: 'get',
        params,
    });
}

// 获取 七牛云上传Token
export function getFreightTemplateList(params) {
    return request({
        url: 'admin/yunfei/template/list',
        method: 'get',
        params,
    });
}
//  添加评论
export function addReview(data) {
    return request({
        url: 'admin/review/addReviewForPC',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}

// 主店铺的商品复制到旗舰店加入审核表
export function goodsAudit(data) {
    return request({
        url: 'goodsCheck/transferMainGoodsToFlagShipCheck',
        method: 'post',
        data,
    });
}
// 获取 不同 审核状态的 商品列表
export function getGoodsCheckList(params) {
    return request({
        url: 'goodsCheck/getFlageShipAccountGoodsCheckList',
        method: 'post',
        params,
    });
}

// 商品分组 添加分组
export function addGrouping(data) {
    return request({
        url: 'admin/sitebar/saveSiteBar',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}

// 商品分组 删除分组
export function delectGrouping(data) {
    return request({
        url: 'admin/sitebar/delSiteBar',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}
// 商品分组 更新分组
export function updateGrouping(data) {
    return request({
        url: 'admin/sitebar/updateSiteBar',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}

// 分店导入商品， 获取 总店商品列表
export function getMaiduocbdGoodsList(params) {
    return request({
        url: '/branchstorefunction/getgooslist',
        method: 'get',
        params,
    });
}
// 分店导入商品接口
export function importMaiduocbdGoods(data) {
    return request({
        url: '/branchstorefunction/batchCopyGoods',
        method: 'post',
        data,
    });
}
// 修改分店商品
export function updateGoodsByBranch(data) {
    return request({
        url: '/admin/goods/updateGoodsByBranch',
        method: 'post',
        data,
    });
}
