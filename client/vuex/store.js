import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/* 共享数据 */
const state = {
    //  默认loading未加载完毕
    isShow: false,
    //  从node接收的alert状态;内容;用户名
    showAlert:false,
    Nodestatus:0,
    Nodecontent:'',
    Nodename:'',
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
};

/* 数据存入数据库的 API ,用来修改state */
const mutations = {
  // 修改token，并将token存入localStorage
  changeLogin(state, user) {
    state.Authorization = user.Authorization;
    localStorage.setItem('Authorization', user.Authorization);
  }
}

/* 从数据库（state）中取 */
const getters = {

}

/* 数据的中间处理 */
const action = {

}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  action
});