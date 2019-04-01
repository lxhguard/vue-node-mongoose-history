<template>
    <div id="me">
        <!-- 头部标题栏 -->
        <HeadTop title="个人中心">
            <span slot="left">
            </span>
            <span slot="right">
                <Icon type="md-settings" size="20" />
            </span>
        </HeadTop>

        <div class="content">
            <!-- 用户信息 -->
            <div class="info">
                <!-- 默认是未登录状态 -->
                <div class="info_content" v-if="!showInfo">
                    <div class="info_img">
                        <Icon type="md-outlet" size="60" style="color:#c5c8ce;"/>
                    </div><br>
                    <div class="info_operation">
                        <router-link :to="{path:'/login',query:{}}">登录 | 注册</router-link>
                    </div><br>
                    <div class="info_fan">
                        <span>粉丝：0</span>&nbsp;&nbsp;
                        <span>关注：0</span>
                    </div>
                </div>
                <!-- 如果用户已经登录 -->
                <div class="info_content" v-if="showInfo">
                    <div class="info_img">
                        <!-- 头像 -->
                        <img :src="this.person.avatarurl" width="60" height="60"/>
                    </div><br>
                    <div class="info_operation">
                        <router-link :to="{path:'/infocenter',query:{person:this.person}}"><span class="info_color">{{person.user_name}}</span></router-link>
                    </div>
                    <div class="info_disc">
                        简介：<span class="info_color">{{person.disc}}</span>
                    </div>
                    <div class="info_fan">
                        粉丝：<span class="info_color">{{person.fan}}</span>&nbsp;&nbsp;
                        关注：<span class="info_color">{{person.cult}}</span>
                    </div>
                </div>
            </div>

            <!-- 功能选项卡 -->
            <div >
                <Tabs value="name1" class="allopts">
                    <TabPane label="我的" name="name1" class="opts">
                        <div style="padding: 10px;background: #f8f8f9；margin:0 auto;width:100%;">
                            <Card title="更多操作" icon="ios-options" :padding="0" shadow style="width: 100%;">
                                <CellGroup>
                                    <Cell >
                                        <div >
                                            <Icon type="md-checkbox" class="iconColor" />&nbsp;&nbsp;
                                            <span>尚未打卡</span>
                                        </div>
                                    </Cell>
                                    <Cell  >
                                        <div @click="getmedal">
                                            <Icon type="md-list-box" class="iconColor" />&nbsp;&nbsp;
                                            <span>我的帖子</span>
                                        </div>
                                    </Cell>
                                    <Cell  >
                                        <div @click="getmedal">
                                            <Icon type="logo-twitch" class="iconColor" />&nbsp;&nbsp;
                                            <span>我的消息</span>
                                        </div>
                                    </Cell>
                                    <Cell  >
                                        <div @click="getmedal">
                                            <Icon type="ios-paper" class="iconColor" />&nbsp;&nbsp;
                                            <span>我的任务</span>
                                        </div>
                                    </Cell>
                                    <Cell  >
                                        <div @click="getmedal">
                                            <Icon type="md-ionitron" class="iconColor" />&nbsp;&nbsp;
                                            <span>我的等级</span>
                                        </div>
                                    </Cell>
                                    <Cell class="testsss"  on-click="getmedal">
                                        <div @click="getmedal">
                                            <Icon type="md-ribbon" class="iconColor" />&nbsp;&nbsp;
                                            <span>我的勋章</span>
                                        </div>
                                    </Cell> 
                                    <Cell class="testsss"  on-click="getmedal">
                                        <div @click="logout">
                                            <Icon type="md-log-out" style="color:#ed4014;" />&nbsp;&nbsp;
                                            <span>退出登录</span>
                                        </div>
                                    </Cell>       
                                </CellGroup>
                            </Card>
                        </div>
                    </TabPane>
                    <TabPane label="美拍" name="name2" class="opts">
                        美拍
                    </TabPane>
                    <TabPane label="访客" name="name3" class="opts">访客</TabPane>
                </Tabs>
            </div>

        </div>

        <TabBar></TabBar>
    </div>
</template>

<script>
import store from '../../vuex/store'
import TabBar from '../components/TabBar/TabBar'
import HeadTop from '../components/HeadTop/HeadTop'

export default {
    name:"Me",
    data(){
        return {
            showInfo:false,
            // 用户信息
            person:{
                user_name:'',
                fan:0,
                cult:0,
                disc:'',
                avatarurl:'',
            }
            
        }
    },
    methods:{
        // 退出登录
        logout(){
            //判断用户是否登录，显示对应的div.info
            var localtoken = localStorage.getItem("token");
            var localusername = localStorage.getItem("user_name");
            var localparams = {
                token:localtoken,
                user_name:localusername
            }
            this.$axios({
                  url:"http://localhost:4444/users/islogin",
                  method:"get",
                  params:localparams 
                })
                .then(res=>{
                    console.log('这里是vue初始化生命周期：');
                    if(res.data.status == 200){
                        this.showInfo = true;
                        localStorage.setItem('token', null);
                        localStorage.setItem('user_name', null);
                        localStorage.setItem('info', null);
                        alert('退出登录成功');
                        this.$router.push('/login');
                    }else{
                        alert('您尚未登录，请先登录！')
                        this.$router.push('/login');
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            
        },
        // 获得勋章方法
        getmedal(value){
            console.log(value);
            this.$axios({
                  url:"http://localhost:4444/users/me/medal",
                  method:"get",
                  params:{"name":"功勋"}
                })
                .then(res=>{
                    console.log('me.vue勋章墙返回信息');
                    console.log(res.data);
                    //成功取得勋章信息
                    if(res.data.status == 200){
                        alert(res.data.msg);
                    }else{
                      alert(res.data.msg);
                      this.$router.push('/login');
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
        }
    },//methods结束
    //引入vuex
    store,
    //引入子组件
    components: {
        HeadTop,
        TabBar,
    },
    //vue生命周期钩子函数
    beforeCreate(){
        //判断用户是否登录，显示对应的div.info
        var localtoken = localStorage.getItem("token");
        var localusername = localStorage.getItem("user_name");
        var localparams = {
            token:localtoken,
            user_name:localusername
        }
        this.$axios({
                  url:"http://localhost:4444/users/islogin",
                  method:"get",
                  params:localparams 
                })
                .then(res=>{
                    console.log('这里是vue初始化生命周期：');
                    if(res.data.status == 200){
                        this.showInfo = true;
                        this.person.user_name = res.data.info.username;
                        this.person.disc = res.data.info.disc;
                        this.person.fan = res.data.info.fan;
                        this.person.cult = res.data.info.cult;
                        this.person.avatarurl = res.data.info.avatarurl;
                        console.log(res.data.info);
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
    },
}
</script>

<style scoped>
.content{
    width:100%;
    margin: 0 auto;
}
/* 用户信息，设置背景图片 */
.info{
    height: 200px;
    width: 100%;
    background-image: url('../../static/images/starssky.jpeg');
}
.info_content{
    width:400px;
    height:200px;
    padding:30px;
    margin: 0 auto;
}
.info_operation a{
    color:white;
}
.info_fan{
    color:white;
}
.info_disc{
    color:white;
}
.info_color{
    color:white;
}
/* 选项卡 */
.allopts{
    width: 100%;
    margin: 0 auto;
}

/* 图标颜色 */
.iconColor{
    color:#5cadff;
}
</style>
