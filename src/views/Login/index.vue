<template>
    <div class="login">
        <div class="login-container">
            <div class="login-container-introduce">
                <div class="introduce-desc">
                    hello
                </div>
                <div class="introduce-foot">
                    <el-button class="to-supplier-btn"><router-link to="/register/supplier">hello</router-link></el-button>
                </div>
            </div>
            <el-form :model="loginForm" :rules="loginRules" auto-complete="on" class="login-container-form" label-position="left" ref="loginForm">
                <div class="login-form-img">
                    <!-- <img src="~@/assets/images/logo.png" alt="" /> -->
                </div>
                <el-form-item prop="userName">
                    <span class="svg-container">
                        <i class="iconfont icon-yonghu"></i>
                    </span>
                    <el-input auto-complete="on" name="userName" placeholder="请输入用户名" type="text" v-model="loginForm.userName"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <span class="svg-container">
                        <i class="iconfont icon-mima"></i>
                    </span>
                    <el-input :type="pwdType" @keyup.enter.native="handleLogin('loginForm')" auto-complete="on" name="password" placeholder="请输入密码" v-model="loginForm.password"></el-input>
                    <span @click="showPwd" class="show-pwd">
                        <i :class="pwdType === 'password' ? 'icon-yanjing' : 'icon-chakanyanjingshishifenxi'" class="iconfont"></i>
                    </span>
                </el-form-item>
                <el-button class="login-btn" :loading="loading" @click.native.prevent="handleLogin('loginForm')" type="primary">登录 </el-button>
                <el-button class="login-btn" type="text"><router-link to="/register/index">我要开店</router-link> </el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            loginForm: {
                userName: '',
                password: '',
            },
            loginRules: {
                userName: [
                    {
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur',
                    },
                ],
                password: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur',
                    },
                ],
            },
            loading: false,
            pwdType: 'password',
        };
    },
    methods: {
        showPwd() {
            if (this.pwdType === 'password') {
                this.pwdType = 'text';
            } else {
                this.pwdType = 'password';
            }
        },
        handleLogin(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.loading = true;
                    this.$store
                        .dispatch('user/Login', this.loginForm)
                        .then(data => {
                            this.loading = false;
                            if (data.result) {
                                this.$router.push({
                                    path: '/dashboard',
                                });
                            } else {
                                this.$message.error(data.msg || '登录失败，请重试！');
                            }
                        })
                        .catch(error => {
                            console.log(error);
                            this.loading = false;
                        });
                } else {
                    //console.log('error submit!!')
                    return false;
                }
            });
        },
    },
    mounted() {
        this.$store.commit('app/SET_HEAD_TITLE', '欢迎登陆');
    },
};
</script>

<style rel="stylesheet/scss" lang="scss">
$dark_gray: #889aa4;
$light_gray: #eee;

.login {
    position: relative;
    background-image: url(~@/assets/images/bg.jpg);
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-width: 1200px;
    .login-container {
        width: 1024px;
        height: 512px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -256px 0 0 -512px;
        border-radius: 8px 8px 8px 8px;
        @include clearfix;
        .login-container-introduce {
            width: 512px;
            height: 512px;
            float: left;
            background-color: rgba(13, 50, 89, 0.5);
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            color: #fff;
            padding: 120px 80px 0 80px;
            .introduce-title {
                font-size: 26px;
                font-weight: 600;
                padding-bottom: 56px;
                letter-spacing: 2px;
            }
            .introduce-item {
                font-size: 22px;
                padding-bottom: 28px;
                position: relative;
                letter-spacing: 2px;
                padding-left: 40px;
                &::before {
                    content: '';
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background-color: #fff;
                    display: inline-block;
                    position: absolute;
                    left: -12px;
                    top: 10px;
                }
                .introduce-item__icon {
                    width: 30px;
                    height: 30px;
                    display: inline-block;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 100%;
                    position: absolute;
                    left: 0px;
                }
            }
            .introduce-desc {
                font-size: 18px;
                line-height: 26px;
                padding-bottom: 35px;
            }
            .introduce-foot {
                text-align: center;
                .to-supplier-btn {
                    width: 352px;
                    color: #fff;
                    background-color: initial;
                    &:hover,
                    &:active {
                        border-color: #ff8e42;
                        color: #ff8e42;
                    }
                }
            }
        }
        .login-container-form {
            width: 512px;
            height: 512px;
            float: left;
            background: #fff;
            border-radius: 0 8px 8px 0;
            padding: 0 81px;
            .login-form-img {
                padding: 40px 0;
                text-align: center;
                img {
                    width: 100%;
                }
            }

            .show-pwd {
                position: absolute;
                right: 10px;
                top: 2px;
                font-size: 16px;
                color: $dark_gray;
                cursor: pointer;
                user-select: none;
            }
            .el-form-item {
                color: #454545;
                height: 56px;
                line-height: 56px;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 16px;
                padding: 0 10px;
                color: #343d47;
                background: #fff;
                .el-form-item__content {
                    height: 56px;
                    line-height: 56px;
                    .svg-container {
                        height: 56px;
                        width: 22px;
                        line-height: 56px;
                        padding: 0;
                        display: inline-block;
                        vertical-align: middle;
                        i {
                            font-size: 22px;
                        }
                    }
                    .el-input {
                        position: relative;
                        font-size: 14px;
                        display: inline-block;
                        width: 306px;
                        vertical-align: middle;
                        .el-input__inner {
                            background: #fff;
                            border-color: #fff;
                        }
                    }
                }
            }
            .login-btn {
                width: 100%;
                margin: 0 0 10px;
            }
        }
    }
}
</style>
