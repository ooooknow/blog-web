/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
// export function validUsername(str) {

//     const valid_map = ['admin', 'editor'];
//     return valid_map.indexOf(str.trim()) >= 0;
// }

/**
 * 验证登录账号、用户名
 * @param {String} str
 * @returns {Boolean}
 * 用户名长度在 6 至 18 位并且不能包含空格和特殊符号
 */
export function validUserName(str) {
    return /^[0-9a-zA-Z]{6,18}$/.test(str);
}

/**
 * 验证登录密码
 * @param {String} str
 * @returns {Boolean}
 * 密码长度在 6 至 18 位并且不能包含中文和空格
 */
export function validUserPass(str) {
    return /^[a-zA-Z\d~\!@#\$%\^&\*\(\)_\-\+=\{\[\}\]\|\\:;\"\'\<,\>\.\?\/]{6,18}$/.test(str);
}

/**
 * 验证手机号
 * @param {String} str
 * @returns {Boolean}
 */
export function validPhone(str) {
    return /^1[3456789]\d{9}$/.test(str);
}

/**
 * 验证短信验证码
 * @param {String} str
 * @param {Number} len 验证码长度，默认6位
 * @returns {Boolean}
 */
export function validSmsCode(str, len = 6) {
    let reg = `^\\d{${len}}$`;
    return new RegExp(reg).test(str);
}

/**
 * 验证店铺名称
 * @param {String} str
 * @returns {Boolean}
 * 店铺名称长度在 6 至 18 位并且不能包含特殊字符
 */
export function validStoreName(str) {
    return /^[A-Za-z0-9\u4e00-\u9fa5]{6,18}$/.test(str);
}

/**
 * 验证公司名称、企业名称
 * @param {String} str
 * @returns {Boolean}
 * 公司名称长度在 6 至 18 位并且不能包含空格或特殊字符
 */
export function validCompany(str) {
    return /^[A-Za-z0-9\u4e00-\u9fa5]{6,18}$/.test(str);
}

/**
 * 验证主营项目
 * @param {String} str
 * @returns {Boolean}
 * 主营项目长度在 2 至 12 位并且不能包含空格或特殊字符
 */
export function validMainProject(str) {
    return /^[A-Za-z\u4e00-\u9fa5]{2,12}$/.test(str);
}

/**
 * 验证联系人、法人姓名
 * @param {String} str
 * @returns {Boolean}
 * 联系人长度在 1 至 20 位，支持单独中文和英文但不支持中英文结合。
 */
export function validContact(str) {
    return /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/.test(str);
}

/**
 * 验证微信号
 * @param {String} str
 * @returns {Boolean}
 * 微信号长度在 6 至 20 位并且不能包含空格或中文字符
 */
export function validWeiXin(str) {
    return /^([-_a-zA-Z0-9]{6,20})+$/.test(str);
}

/**
 * 验证QQ号
 * @param {String} str
 * @returns {Boolean}
 * QQ长度在 5 至 12 位并且只能是数字
 */
export function validQQ(str) {
    return /^\d{5,12}$/.test(str);
}

/**
 * 验证身份证
 * @param {String} str
 * @returns {Boolean}
 */
export function validIdCard(str) {
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
}

/**
 * 验证码银行卡账号
 * @param {String} str
 * @returns {Boolean}
 * 银行卡长度在 16 位或 19 位并且只能是数字
 */
export function validBankNumber(str) {
    return /^(\d{16}|\d{19})$/.test(str);
}

/**
 * 验证小程序账号
 * @param {String} str
 * @returns {Boolean}
 * 小程序账号不能包含空格或中文字符
 */
export function validAppletAccount(str) {
    return !/^[\u4e00-\u9fa5 ]+$/.test(str);
}
/**
 * 验证小程序账号
 * @param {String} str
 * @returns {Boolean}
 * 小程序密码不能包含空格或中文字符
 */
export function validAppletPass(str) {
    return !/^[\u4e00-\u9fa5 ]+$/.test(str);
}
