<template>
  <div id="content">
    <!-- 加载圈 -->
    <Loading></Loading>
    <!-- 九宫格布局 -->
    <div id="order-list">
      <Row type="flex" align="bottom" class="son">
        <Col span="8"></Col>
        <Col span="8">
          <Tag color="default" style="opacity:0.5;font-size:1.5em;">
            <span>大唐长安</span>
          </Tag>
        </Col>
        <Col span="8"></Col>
      </Row>
      <br>
      <Row type="flex" justify="center" class="son">
          <Col span="8"></Col>
          <Col span="8" >
            <div id="login" v-if="showLogin">
              <Input prefix="ios-contact" v-model="user_name" placeholder="Enter name" style="width: auto;" /><br><br>
              <Input prefix="md-key" v-model="user_password" placeholder="Enter password" style="width: auto;" /><br><br>
              <Button type="success"  @click="LoginIn">Login</Button><br><br>
              <span style="color:#2d8cf0;">还没账号？立即</span><Button type="warning" ghost  @click="showR">注册</Button>
            </div>
            <div id="register" v-if="showRegister">
              <Input v-model="rname" prefix="ios-contact" placeholder="Enter name" style="width: auto;" /><br><br>
              <Input v-model="rpassword" prefix="md-key" placeholder="Enter password" style="width: auto;" /><br><br>
              <Input v-model="remail" prefix="ios-mail" placeholder="Enter email" style="width: auto;" /><br><br>
              <span><Input v-model="vcode" placeholder="captcha" style="width: 65px;" /></span>
              <span><Button type="primary" v-show="showIt" @click="sendcode" style="width: 100px;">获取验证码</Button></span>
              <span><Button type="primary" v-show="!showIt" @click="sendcode" style="width: 100px;" disabled>{{btntxt}}</Button></span><br><br>
              <Button type="success"  @click="RegisterNew">Register</Button><br><br>
              <span style="color:#2d8cf0;">已有账号？立即</span><Button type="warning" ghost  @click="showL">登录</Button>
            </div>
          </Col>
          <Col span="8"></Col>
      </Row>
      <br>
      <Row type="flex" >
        <Col span="8"></Col>
        <Col span="8"></Col>
        <Col span="8">
          <router-link :to="{path:'/world',query:{}}" style="float:left;color:yellow;">
            <span>跳过</span><Icon type="md-arrow-round-forward"/>
          </router-link>
        </Col>
      </Row>
    </div>


  </div>
</template>

<script>
import store from '../../vuex/store'
import Loading from './Loading/Loading'
import {isMail} from '../../static/common/common.js'
import {isLegal} from '../../static/common/common.js'


export default {
  name: 'Login',
  data () {
    return {
      showIt:true,
      showLogin:true,
      showRegister:false,
      user_name:'',
      user_password:'',
      rname:'',
      rpassword:'',
      remail:'',
      vcode:'',
      btntxt:"获取验证码",
      time:0
    }
  },
  //引入vuex
  store,
  //引入子组件
  components: {
    Loading,
  },
  methods:{
        // 显示注册框
        showR(){
          this.showLogin = false;
          this.showRegister = true;
        },
        // 显示登录框
        showL(){
          this.showRegister = false;
          this.showLogin = true;
        },
        // 发送验证码到邮箱
        sendcode(){
          this.time=60;
          this.timer();
        },
        // 多少秒后重新发送
        timer() {
          if (this.time > 0) {
            this.showIt = false;
            this.time--;
            this.btntxt=this.time+"s重新获取";
            setTimeout(this.timer, 1000);
          } else{
            this.showIt = true;
            this.time=0;
            this.btntxt="获取验证码";
            this.disabled=false;
          }
        },
        // 注册新用户
        RegisterNew(){
          var Send_params = {};
          this.$axios.get('https://www.apiopen.top/journalismApi')
                    .then(res=>{
                        alert('成功')
                        console.log(res)//返回请求的结果
                    })
                    .catch(err=>{
                        console.log(err)
                  })
          if(this.rname.length) {
            if(isRange(this.rname,0,12)){
					    if(isMail(this.remail)){
                if(isRange(this.rpassword,0,16)){
                  params = {
                    name :this.rname,
                    password : this.rpassword,
                    email : this.remail
                  };
                  
                }//end rpassword-if
              }
            }
          }//end name.length-if

        },
        // 用户登录
        LoginIn(){
            var Send_params = {};
            Send_params = {
              "user_name":this.user_name,
              "user_password":this.user_password
            };
            if (Send_params.user_name == '') {
              alert('用户名不能为空');
            }else{
              if (Send_params.user_password == '') {
                alert('密码不能为空!');
              }else{
                //登录接口
                this.$axios({
                  url:"http://localhost:4444/users/login",
                  method:"get",
                  params:Send_params
                })
                .then(res=>{
                    //1.清空 登录界面输入框
                    this.user_name='';
                    this.user_password='';

                    console.log('Login.vue打印请求结果res.data')
                    console.log(res.data)//返回请求的结果

                    //登录成功 跳转index
                    if(res.data.status == 200){
                      //本地存储 token 和 user_name
                      localStorage.setItem('token', res.data.token);
                      localStorage.setItem('user_name', res.data.user_name);
                      alert('登录成功');
                      this.$router.push('/world');
                    }else{
                      alert(res.data.msg);
                      this.$router.push('/login');
                    }
                    
                })
                .catch(err=>{
                    console.log(err)
                })
              }//end 密码是否为空
            }//end 用户名是否为空
            
            
            
        }
    },//methods方法结束
  mounted:function(){
    var orderHeight=document.body.clientHeight;
    document.getElementById("order-list").style.height=orderHeight+'px';
  },
  beforeCreate:function(){
    store.state.isShow = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content{
  background-image: url('../../static/images/bg.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
#order-list{
  z-index: 100;
}
.son{
  height: 25%;
}

</style>
