import Vue from 'vue'
import VueRouter from 'vue-router'
//ルート用のコンポーネントを読み込む
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import Job from '@/views/Job.vue'
import Strengths from '@/views/Strengths.vue'

//Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)

//VueRouterインスタンスを生成する
const router = new VueRouter({
    // mode: 'history',
    //URLのパスと紐づくコンポーネントをマッピング
    routes:[
        {path: '/', component: Home},
        {path: '/Profile', component: Profile},
        {path: '/Job', component: Job},
        {path: '/Strengths', component: Strengths}
    ]
})

//生成したVueRouterインスタンスをエクスポート
export default router