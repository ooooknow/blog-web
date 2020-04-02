import request from '@/utils/request';

// 查询资产列表信息
export function getRealPayDetails(params) {
    return request({
        url: 'admin/realpay/getRealPayDetails',
        method: 'get',
        params,
    });
}

// 查询佣金信息
export function queryCommissionSituation(params) {
    return request({
        url: 'admin/distributor/promoter/queryCommissionSituation',
        method: 'get',
        params,
    });
}

// 查询佣金详情
export function queryCommissionDetails(params) {
    return request({
        url: 'admin/distributor/promoter/queryCommissionDetails',
        method: 'get',
        params,
    });
}
