import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("../components/HelloWorld.vue"),
      props: (route) => ({ msg: route.query.msg })
    },
    {
      path: "/vmodels",
      component: () => import("../components/vmodels.vue")
    },
    {
      path: "/vno",
      component: () => import("../components/vno.vue")
    },
    {
      path: "/vbind",
      component: () => import("../components/vbind.vue")
    },
    {
      path: "/prop",
      component: () => import("../components/prop.vue")
    },
    {
      path: "/axios",
      component: () => import("../components/axios.vue")
    }
  ]
});
