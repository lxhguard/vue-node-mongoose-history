<template>
    <div>
        <!-- 头部标题栏 -->
        <HeadTop title="十三朝西安---全面领略">
            <span slot="left">
            </span>
            <span slot="right">
                <Icon type="md-clipboard" size="20" />
            </span>
        </HeadTop>

        <!-- 中部内容区域 -->
        <div class="center_main">
            <!-- 菜单栏目 -->
            <div class="menu_show">
                <Menu :theme="theme3" active-name="1" style="width:100%">
                    <MenuGroup title="十三朝长安">
                        <router-link to='/discuss/history'>
                            <MenuItem name="1">
                                <Icon type="md-document" />
                                历尽沧桑
                            </MenuItem>
                        </router-link>
                        <router-link to='/discuss/people'>
                            <MenuItem name="2">
                                <Icon type="md-body" />
                                风流人物
                            </MenuItem>
                        </router-link>
                        <router-link to='/discuss/custom'>
                            <MenuItem name="3"> 
                                <Icon type="md-beer" />
                                民俗文化
                            </MenuItem>
                        </router-link>
                        <router-link to='/discuss/city'>
                            <MenuItem name="4">             
                                <Icon type="md-book" />
                                城中趣闻  
                            </MenuItem>
                        </router-link>
                    </MenuGroup>
                </Menu>
            </div>
            <!-- 显示内容栏目 -->
            <div class="content_show">
                <router-view></router-view>
            </div>
        </div>

        <!-- 下方导航栏 -->
        <TabBar></TabBar>
    </div>
</template>

<script>
import store from '../../vuex/store'
import TabBar from '../components/TabBar/TabBar'
import HeadTop from '../components/HeadTop/HeadTop'


export default {
    name:"Discuss",
    data(){
        return {
            theme3: 'dark'
        }
    },
    //引入vuex
    store,
    //引入子组件
    components: {
        TabBar,
        HeadTop
    },
}
</script>

<style scoped>
a{
    color: white;
}
.menu_show{
    width:20%;
    position: fixed;
    top:10%;
    left: 0;
    
}
.content_show{
    width:80%;
    float: right;
}
</style>
