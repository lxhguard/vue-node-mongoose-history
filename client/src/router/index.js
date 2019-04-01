import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import World from '@/pages/World'
import Discuss from '@/pages/discuss'
import Samecity from '@/pages/samecity'
import Me from '@/pages/me'
import Infocenter from '@/pages/infocenter'
import History from '@/pages/discuss/history'
import People from '@/pages/discuss/people'
import Custom from '@/pages/discuss/custom'
import City from '@/pages/discuss/city'
import notFound from "@/components/notFound/notFound";

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/world",
      name: "World",
      component: World
    },
    {
      path: "/discuss",
      name: "Discuss",
      component: Discuss,
      children: [
        {
          path: '/',
          name: "History",
          component: History
        },
        {
          path: "history",
          name: "History",
          component: History
        },
        {
          path: "people",
          name: "People",
          component: People
        },
        {
          path: "city",
          name: "City",
          component: City
        },
        {
          path: "custom",
          name: "Custom",
          component: Custom
        }
      ]
    },
    {
      path: "/samecity",
      name: "Samecity",
      component: Samecity
    },
    {
      path: "/me",
      name: "Me",
      component: Me
    },
    {
      path: "/infocenter",
      name: "Infocenter",
      component: Infocenter
    },
    {
      path: "/",
      redirect: "/login"
    },
    //定义一个页面找不到的组件
    {
      path: "*",
      component: notFound
    }
  ]
});
