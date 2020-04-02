import request from '@/utils/request';
import qs from 'qs';
// 获取规格列表
export function getSpecList(params) {
    return request({
        url: 'admin/cusmallMallSpec/getSpecList',
        method: 'get',
        params,
    });
}
// 添加规格/修改规格
export function saveSpec(data) {
    return request({
        url: 'admin/cusmallMallSpec/saveSpec',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data, { arrayFormat: 'brackets' }),
    });
}
// 删除规格
export function delSpec(data) {
    return request({
        url: 'admin/cusmallMallSpec/delSpec',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            // 'Content-Type': 'application/json',
        },
        data: qs.stringify(data),
    });
}
// getSpecAndValue
// 获取规格详情
export function getSpecAndValue(data) {
    return request({
        url: 'admin/cusmallMallSpec/getSpecAndValue',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        data: qs.stringify(data),
    });
}
