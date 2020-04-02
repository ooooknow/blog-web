import request from '@/utils/request';
import qs from 'qs';

//获取提现账户信息
export function getWithdrawAccountInfo(params) {
    return request({
        url: 'admin/applet/accountinfo/getWithdrawAccountInfo',
        method: 'get',
        params,
    });
}

//更新提现提现账户信息
export function updateWithdrawAccountInfo(data) {
    return request({
        url: 'admin/applet/accountinfo/updateWithdrawAccountInfo',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}

//申请提现
export function applyWithdraw(data) {
    return request({
        url: 'admin/applet/accountinfo/applyWithdraw',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}

//获取收入的细节
export function getIncomeDetail(params) {
    return request({
        url: 'admin/applet/accountinfo/getIncomeDetail',
        method: 'get',
        params,
    });
}

//法官更新版本(绑定微信号收款)
export function judgeUpdateVersion(params) {
    return request({
        url: 'admin/applet/accountinfo/judgeUpdateVersion',
        method: 'get',
        params,
    });
}

//查询可提现金额列表
export function queryWithdrawWithApply(params) {
    return request({
        url: 'admin/applet/accountinfo/queryWithdrawWithApply',
        method: 'get',
        params,
    });
}

//查询提现记录
export function queryWithdrawRecords(params) {
    return request({
        url: 'admin/applet/accountinfo/queryWithdrawRecords',
        method: 'get',
        params,
    });
}
