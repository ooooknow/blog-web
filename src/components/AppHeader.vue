<template>
    <div v-if="showHeader" :text="showHeader" class="header">
        <div class="header-logo">
            <router-link to="/login">
                <img src="~@/assets/images/logo.png" alt="" />
            </router-link>
        </div>
        <template v-if="isLogin">
            <breadcrumb class="header-breadcrumb" />
            <div class="header-menu">
                <el-dropdown class="avatar-container" trigger="click">
                    <div class="avatar-wrapper">
                        <span class="user-name">你好 {{ name }} </span>
                        <!--店铺类型-->
                        <img v-if="logo" class="user-avatar" :src="logo" alt="" />
                        <i class="el-icon-caret-bottom" />
                    </div>
                    <el-dropdown-menu class="user-dropdown" slot="dropdown">
                        <router-link :to="homeUrl" class="inlineBlock">
                            <el-dropdown-item>首页</el-dropdown-item>
                        </router-link>
                        <a @click="logout" href="JavaScript:;">
                            <el-dropdown-item divided>退出</el-dropdown-item>
                        </a>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Breadcrumb from '@/components/Breadcrumb.vue';

export default {
    components: {
        Breadcrumb,
    },
    data() {
        return {
            homeUrl: '/',
        };
    },
    computed: {
        ...mapGetters(['name', 'isLogin', 'headTitle', 'logo', 'roles', 'showHeader']),
    },
    methods: {
        async logout() {
            await this.$store.dispatch('user/LogOut');
            this.$router.push(`/login?redirect=${this.$route.fullPath}`);
        },
    },
};
</script>

<style lang="scss" scoped>
.header {
    height: 64px;
    width: 100%;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1002;
    @include clearfix;
    .header-logo {
        height: 100%;
        width: 200px;
        height: 64px;
        float: left;
        a {
            display: inline-block;
            width: 100%;
            height: 100%;
            padding: 16px 20px;
            img {
                height: 32px;
            }
            &:hover {
                background: rgba(0, 0, 0, 0.025);
            }
        }
    }

    .header-breadcrumb {
        float: left;
    }

    .header-menu {
        padding-right: 20px;
        float: right;
        height: 64px;
        line-height: 64px;
        &:focus {
            outline: none;
        }

        .right-menu-item {
            display: inline-block;
            padding: 0 8px;
            height: 100%;
            font-size: 18px;
            color: #5a5e66;
            vertical-align: text-bottom;

            &.hover-effect {
                cursor: pointer;
                transition: background 0.3s;

                &:hover {
                    background: rgba(0, 0, 0, 0.025);
                }
            }
        }

        .avatar-container {
            .avatar-wrapper {
                position: relative;
                line-height: 64px;
                height: 64px;
                cursor: pointer;
                .dashboard-account__item {
                    display: inline-block;
                    vertical-align: middle;
                }
                .user-avatar {
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    vertical-align: middle;
                    margin: 0 10px;
                }
                .user-name {
                    vertical-align: middle;
                }

                .el-icon-caret-bottom {
                    font-size: 12px;
                    vertical-align: middle;
                }
            }
        }
    }
    .header-welcome {
        float: left;
        height: 64px;
        line-height: 64px;
        font-size: 16px;
        font-weight: 500;
        color: #333333;
        margin-left: 20px;
    }
    .header-introduce {
        float: right;
        height: 64px;
        @include clearfix;
        padding-right: 20px;
        .introduce-item {
            float: right;
            height: 64px;
            line-height: 64px;
            margin-left: 20px;
            &.introduce-item__btn {
                .item-con {
                    margin: 16px 0;
                    width: 120px;
                    height: 32px;
                    line-height: 32px;
                    background-color: #ff8e42;
                    border-radius: 5px;
                    color: #fff;
                    font-size: 14px;
                    text-align: center;
                    cursor: pointer;
                    &:hover {
                        opacity: 0.8;
                    }
                }
            }
            &.introduce-item__text {
                .item-con {
                    font-size: 12px;
                    color: #666666;
                }
            }
        }
    }
}
</style>
