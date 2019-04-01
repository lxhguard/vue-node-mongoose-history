<template>
    <div>
        <!-- 头部标题栏 -->
        <HeadTop title="幸运同城">
            <span slot="left">
            </span>
            <span slot="right">
                <Icon type="md-settings" />
            </span>
        </HeadTop>
        City1<br>
        City2<br>
        City3<br>
        City4<br>
        City5<br>
        City6<br>
        <TabBar></TabBar>
    </div>
</template>

<script>
import store from '../../vuex/store'
import TabBar from '../components/TabBar/TabBar'
import HeadTop from '../components/HeadTop/HeadTop'

export default {
    name:"City",
    data(){
        return {

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

</style>
