import request from '@/utils/request';
import qs from 'qs';

// 获取运费列表
export function list(data) {
    return request({
        url: 'admin/yunfei/template/list',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            // 'Content-Type': 'application/json',
        },
        data: qs.stringify(data),
    });
}
export function del(data) {
    return request({
        url: 'admin/yunfei/template/del',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            // 'Content-Type': 'application/json',
        },
        data: qs.stringify(data),
    });
}
// 复制
export function duplicate(data) {
    return request({
        url: 'admin/yunfei/template/duplicate',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            // 'Content-Type': 'application/json',
        },
        data: qs.stringify(data),
    });
}

export function detaillist(data) {
    return request({
        url: 'admin/yunfei/template/detaillist',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            // 'Content-Type': 'application/json',
        },
        data: qs.stringify(data),
    });
}

export function edit(data) {
    return request({
        url: 'admin/yunfei/template/edit',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            // 'Content-Type': 'application/json',
        },
        data: qs.stringify(data),
    });
}
export function add(data) {
    return request({
        url: 'admin/yunfei/template/add',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            // 'Content-Type': 'application/json',
        },
        data: qs.stringify(data),
    });
}
