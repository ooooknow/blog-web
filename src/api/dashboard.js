import request from '@/utils/request';

// 概览

// 获取 昨天统计数据
export function getYesterdayStat() {
    return request({
        url: 'admin/stat_data/getYesterdayStat',
        method: 'get',
    });
}
// 获取 近7天订单趋势
export function getTrendStat(params) {
    return request({
        url: 'admin/stat_data/getTrendStat',
        method: 'get',
        params,
    });
}
