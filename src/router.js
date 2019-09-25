import Vue from 'vue'
import VueRouter from 'vue-router'
//ルート用のコンポーネントを読み込む
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
// import header from '@/views/header.vue'
//Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)

//VueRouterインスタンスを生成する
const router = new VueRouter({
    mode: 'history',
    //URLのパスと紐づくコンポーネントをマッピング
    routes:[
        {path: '/', component: Home},
        {path: '/product', component: Product}
        // {path: '/hoge', component: header}
    ]
})

//生成したVueRouterインスタンスをエクスポート
export default router