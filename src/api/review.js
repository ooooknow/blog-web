import request from '@/utils/request';

// 开启/关闭评论审核
export function updateReviewConfig(params) {
    return request({
        url: 'admin/review/updateReviewConfig',
        method: 'get',
        params,
    });
}
// 获取评价设置
export function getReviewConfig(params) {
    return request({
        url: 'admin/review/getReviewConfig',
        method: 'get',
        params,
    });
}
// 获取评论
export function queryReviews(params) {
    return request({
        url: 'admin/review/queryReviews',
        method: 'get',
        params,
    });
}
// 回复

export function updateRecordReply(params) {
    return request({
        url: 'admin/review/updateRecordReply',
        method: 'get',
        params,
    });
}
// changeShow改变评论可见状态
export function changeShow(params) {
    return request({
        url: 'admin/review/changeShow',
        method: 'get',
        params,
    });
}
// statistics 店铺评价
export function statistics(params) {
    return request({
        url: 'admin/review/statistics',
        method: 'get',
        params,
    });
}
// export function saveCommonfile(data) {
//     return request({
//         url: '/admin/commonfile',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//         },
//         data: qs.stringify(data),
//     });
// }
