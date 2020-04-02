<template>
    <div class="error-container">
        <div class="error-con" :style="{ 'min-height': minHeight + 'px' }">
            <div class="error-tips">
                <div class="error-tips-img">
                    <img src="~@/assets/images/404.png" alt="404" />
                </div>
                <div class="error-tips-text">
                    出错啦,找不到您请求的页面...
                </div>
                <el-button type="primary" @click="$router.replace('/login')">
                    <span v-if="isLogin">
                        前往首页
                    </span>
                    <span v-if="!isLogin">前往登录页</span>
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Page404',
    data() {
        return {
            homeURL: '/',
            minHeight: 0,
        };
    },
    computed: {
        ...mapGetters(['isLogin']),
    },
    methods: {
        // 设置页面最小高度
        setMinHeight() {
            //动态设置内容高度 让footer始终居底   header+footer的高度是100
            const footerHeight = document.getElementById('appFooter').clientHeight;
            const headHeight = 64;

            const h = document.documentElement.clientHeight - footerHeight - headHeight;
            this.minHeight = h <= 440 ? 440 : h;
            window.onresize = () => {
                const h = document.documentElement.clientHeight - footerHeight - headHeight;
                this.minHeight = h <= 440 ? 440 : h;
            };
        },
    },
    mounted() {
        this.setMinHeight();
    },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.error-container {
    min-height: 100%;
    padding-top: 60px;
    .error-con {
        position: relative;
        .error-tips {
            transform: translate(-50%, -50%);
            position: absolute;
            top: 50%;
            left: 50%;
            width: 610px;
            height: 400px;
            text-align: center;
            .error-tips-img {
                width: 100%;
                img {
                    width: 100%;
                }
            }
            .error-tips-text {
                font-size: 24px;
                color: #333333;
                margin: 40px 0;
            }
        }
    }
}
</style>
