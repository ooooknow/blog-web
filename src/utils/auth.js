import Cookies from 'js-cookie';

export function getCookie(key) {
    return Cookies.get(key);
}

export function setCookie(key, value) {
    return Cookies.set(key, value);
}

export function removeAllCookie() {
    let allCookies = Cookies.getJSON();
    for (let key in allCookies) {
        if (allCookies.hasOwnProperty(key)) {
            Cookies.remove(key);
        }
    }
    return Cookies.getJSON();
}

// const IsLoginKey = 'isLogin';

// export function getIsLogin() {
//     return Cookies.get(IsLoginKey);
// }

// export function setIsLogin(isLogin) {
//     return Cookies.set(IsLoginKey, isLogin);
// }

// export function setAccountInfo(key,val){
//     if (key!=='' && val!==''){
//         Cookies.set(key, val);
//     }
// }
// export function getAccountInfo(key){
//     if (key!==''){
//       return Cookies.get(key);
//     }else {
//         console.log('key!==null',key);
//         console.log('Cookies.get',Cookies.get(key));
//     }
// }
// // 移除用户数据
// export function removeLoginInfo() {
//     let infoList =['accountToken','userName','userSiteId','uid','maiduoSiteId','maiduoUid','sourceUrlPrefix','token'];
//     for (let i = 0; i <infoList.length ; i++) {
//         Cookies.remove(infoList[i]);
//     }
// }

// export function removeIsLogin() {
//     return Cookies.remove(IsLoginKey);
// }
