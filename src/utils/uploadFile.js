import { getSysPicUploadToken, getSysPicUploadTokenRegister } from '../api/utils';
import Cookies from 'js-cookie';

export const queryUploadToken = async () => {
    let uploadToken = '';
    let expireTime = '';
    if (Cookies.get('token')) {
        let token = JSON.parse(Cookies.get('token'));
        uploadToken = token.uploadToken;
        expireTime = token.expireTime;
    }
    if (uploadToken && expireTime >= Date.now()) {
        return { token: uploadToken, expireTime: expireTime };
    } else {
        Cookies.remove('token');
        try {
            const { ret, model } = await getSysPicUploadToken();
            if (ret === 0) {
                uploadToken = model.token;
                expireTime = Date.now() + 3000000; // token 有效期改为50分钟
                Cookies.set(
                    'token',
                    JSON.stringify({
                        uploadToken: uploadToken,
                        expireTime: expireTime,
                    })
                );
                return { token: uploadToken, expireTime: expireTime };
            }
            return false;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
};

//未登录获取七牛云token
export const queryUploadTokenRegister = async () => {
    let uploadToken = '';
    let expireTime = '';
    if (Cookies.get('tokenRegister')) {
        let token = JSON.parse(Cookies.get('tokenRegister'));
        uploadToken = token.uploadToken;
        expireTime = token.expireTime;
    }
    if (uploadToken && expireTime >= Date.now()) {
        return { token: uploadToken, expireTime: expireTime };
    } else {
        Cookies.remove('tokenRegister');
        try {
            const { ret, model } = await getSysPicUploadTokenRegister();
            if (ret === 0) {
                uploadToken = model.token;
                expireTime = Date.now() + 3600000;
                Cookies.set(
                    'tokenRegister',
                    JSON.stringify({
                        uploadToken: uploadToken,
                        expireTime: expireTime,
                    })
                );
                return { token: uploadToken, expireTime: expireTime };
            }
            return false;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
};
