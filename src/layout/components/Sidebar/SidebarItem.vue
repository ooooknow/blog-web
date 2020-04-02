<template>
    <div v-if="!item.hidden" class="menu-wrapper">
        <template v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
            <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
                <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{ 'submenu-title-noDropdown': !isNest }">
                    <i :class="Object.assign({}, item.meta, onlyOneChild.meta).icon" class="iconfont svg-icon" v-if="Object.assign({}, item.meta, onlyOneChild.meta).icon"></i>
                    <!--                    <span class="menu-wrapper-item"-->
                    <span v-if="Object.assign({}, item.meta, onlyOneChild.meta).title">{{ Object.assign({}, item.meta, onlyOneChild.meta).title }} </span>
                </el-menu-item>
            </app-link>
        </template>

        <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
            <template slot="title">
                <i :class="item.meta.icon" class="iconfont svg-icon" v-if="item.meta.icon"></i>
                <span v-if="item.meta.title">{{ item.meta.title }}</span>
            </template>
            <sidebar-item v-for="child in item.children" :key="child.path" :is-nest="true" :item="child" :base-path="resolvePath(child.path)" class="nest-menu" />
        </el-submenu>
    </div>
</template>

<script>
import path from 'path';
import { isExternal } from '@/utils/validate';
import AppLink from './Link';
import FixiOSBug from './FixiOSBug';

export default {
    name: 'SidebarItem',
    components: { AppLink },
    mixins: [FixiOSBug],
    props: {
        // route object
        item: {
            type: Object,
            required: true,
        },
        isNest: {
            type: Boolean,
            default: false,
        },
        basePath: {
            type: String,
            default: '',
        },
    },
    data() {
        this.onlyOneChild = null;
        return {};
    },
    methods: {
        hasOneShowingChild(children = [], parent) {
            const showingChildren = children.filter(item => {
                if (item.hidden) {
                    return false;
                } else {
                    // Temp set(will be used if only has one showing child)
                    this.onlyOneChild = item;
                    return true;
                }
            });

            // When there is only one child router, the child router is displayed by default
            if (showingChildren.length === 1) {
                return true;
            }

            // Show parent if there are no child router to display
            if (showingChildren.length === 0) {
                this.onlyOneChild = {
                    ...parent,
                    path: '',
                    noShowingChildren: true,
                };
                return true;
            }

            return false;
        },
        resolvePath(routePath) {
            if (isExternal(routePath)) {
                return routePath;
            }
            if (isExternal(this.basePath)) {
                return this.basePath;
            }
            return path.resolve(this.basePath, routePath);
        },
    },
};
</script>
<style lang="scss" scoped>
@mixin custom-icon {
    display: inline-block;
    width: 18px;
    height: 18px;
    background-size: 100% 100%;
    margin-right: 16px;
}
.preview {
    @include custom-icon;
    background-image: url(~@/assets/sidebarIcon/preview.png);
}
.shop {
    @include custom-icon;
    background-image: url(~@/assets/sidebarIcon/shop.png);
}
.good {
    @include custom-icon;
    background-image: url(~@/assets/sidebarIcon/good.png);
}
.good-import {
    @include custom-icon;
    background-image: url(~@/assets/sidebarIcon/good-import.png);
}
.order {
    @include custom-icon;
    background-image: url(~@/assets/sidebarIcon/order.png);
}
.property {
    @include custom-icon;
    background-image: url(~@/assets/sidebarIcon/property.png);
}
.withdraw {
    @include custom-icon;
    background-image: url(~@/assets/sidebarIcon/withdraw.png);
}
.marketing {
    @include custom-icon;
    background-image: url(~@/assets/sidebarIcon/marketing.png);
}
.menu-wrapper {
    .menu-wrapper-item {
        display: block;
        text-align: center;
    }
}
</style>
