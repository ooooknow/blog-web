<template>
    <div class="footer" id="appFooter">
        <div class="footer-pc" v-if="!isPhone">
            <div class="container footer-copyright-container">
                <div class="footer-info-box">
                    <div class="footer-info-wrapper">
                        <p class="footer-info-style">
                            {{ footers.copyright }}
                            <a target="_blank" href="http://www.beian.miit.gov.cn">{{ footers.record }}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 移动端底部 -->
        <div class="footer-mobile" v-if="isPhone">
            <p>广东衡韵信息科技有限公司</p>
            <p>
                Copyrights © 2019
                <a target="_blank" href="http://www.beian.miit.gov.cn">{{ footers.record }}</a>
            </p>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'AppFooter',
    data() {
        return {
            footers: {
                copyright: ' © 2020 yosan.All rights Reserved',
                record: '粤ICP备20028628号',
            },
        };
    },
    computed: {
        ...mapGetters(['isPhone']),
    },
};
</script>
<style lang="scss" scoped>
.footer-pc {
    width: 100%;
    color: #999999;
    font-size: 16px;
    overflow: hidden;
    background: #f5f5f5;
    padding-bottom: 5px;

    .footer_information {
        height: 235px;
        border-bottom: 1px solid #e1e1e1;
    }

    .container {
        padding-top: 40px;
        width: 1200px;
    }

    .footer-wapper {
        margin: 0 auto;
        text-align: center;

        .footer-company-container {
            text-align: center;
            display: inline-block;
            vertical-align: middle;
            width: 30%;

            .footer-company-name {
                font-weight: 500;
                padding-bottom: 5px;
            }

            .footer_logo {
                .footer_logo_img {
                    padding-bottom: 17px;
                    display: inline-block;
                    width: 289px;
                    height: 77px;
                }

                .footer_contact_phone {
                    color: #216da9;
                    width: 290px;
                    height: 60px;
                    border: 1px solid #216da9;
                    border-radius: 5px;
                    margin: 0 auto;
                    padding-left: 60px;
                    background-repeat: no-repeat;
                    background-size: 29px 20px;
                    background-position: 20px;
                    h5 {
                        font-size: 24px;
                        font-weight: 600;
                        line-height: 60px;
                        text-align: center;
                        letter-spacing: 2px;
                    }
                }
            }

            .footer-company {
                height: 60px;
                padding: 20px 0;
            }

            .footer-company-letter {
                font-size: 24px;
                font-weight: 500;
            }
        }
    }

    .footer-copyright-container {
        box-sizing: border-box;
        width: 100%;
        height: 88px;
        margin: auto;
        padding-top: 0;

        .footer-info-box {
            box-sizing: border-box;
            margin: 0 auto;

            .footer-info-wrapper {
                text-align: center;
                font-size: 14px;
                color: rgba(153, 153, 153, 1);

                .footer-info-line {
                    height: 12px;
                    border-left: 1px solid #e1e1e1;
                    margin: 0 10px;
                }

                .footer-info-style {
                    padding-top: 20px;
                    font-size: 14px;
                    text-align: center;
                    a {
                        color: #999999;
                        &:hover {
                            color: #f27623;
                        }
                    }
                }
            }

            .footer-link {
                .footer-link-list {
                    font-size: 12px;
                    padding-top: 10px;
                    line-height: 20px;
                    overflow: hidden;

                    .footer-link-li {
                        float: left;
                    }
                }
            }

            .splitUrl {
                padding-left: 5px;
                border-left: 1px solid rgba(68, 68, 68, 1);
            }
        }
    }

    .footer-nav {
        width: 70%;
        display: inline-block;
        text-align: center;
        vertical-align: middle;

        .footer-nav-spacing {
            font-weight: 500;
            color: #000000;
        }

        .footer-nav-product {
            display: inline-block;
            vertical-align: top;
            padding-left: 100px;
        }

        .footer-nav-company {
            display: inline-block;
            vertical-align: top;
            height: 130px;
            padding: 0 30px;
            margin: 0 70px;
            border-left: 1px solid #e1e1e1;
            border-right: 1px solid #e1e1e1;
        }

        .footer-nav-maiduocbd {
            display: inline-block;
            vertical-align: top;

            .footer-nav-maiduocbd-desc {
                display: block;
                text-align: center;
            }
        }

        .footer-nav-content {
            padding-top: 20px;
            font-size: 12px;
            line-height: 25px;

            .footer-nav-link {
                font-size: 14px;
                color: rgba(153, 153, 153, 1);
                font-weight: 500;
            }
            a {
                color: #999999;
                &:hover {
                    color: #f27623;
                }
            }
        }

        .footer-nav-maiduocbd .footer-nav-content img {
            width: 104px;
            height: 104px;
        }
    }
}

.footer-mobile {
    width: 100%;
    text-align: center;
    padding: 12px 0;
    p {
        color: #999;
        font-size: 12px;
        line-height: 16px;
        a {
            color: #999999;
            &:hover {
                color: #f27623;
            }
        }
    }
}
</style>
