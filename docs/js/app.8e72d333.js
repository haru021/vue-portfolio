(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],d=0,h=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&h.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={app:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),n=s.n(a);n.a},"0849":function(t,e,s){},"2a37":function(t,e,s){"use strict";var a=s("0849"),n=s.n(a);n.a},4433:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("header",{staticClass:"w-100"},[s("h1",{staticClass:"bg-dark"},[s("router-link",{staticClass:"text-light",attrs:{to:"/"}},[t._v("Moe'sPorfolio")])],1),s("nav",{staticClass:"navbar navbar-dark bg-dark"},[s("b-button",{staticClass:"navbar-toggler",on:{click:t.openMenu}},[s("span",{staticClass:"navbar-toggler-icon"})]),s("Drawer",{ref:"LeftDrawer",attrs:{direction:"left",exist:!0}},[s("b-button",{staticClass:"navbar-toggler close-btn",on:{click:t.closeMenu}},[s("span",{staticClass:"close-btn-icon"},[s("font-awesome-icon",{attrs:{icon:"times"}})],1)]),s("div",{staticClass:"button-list"},[s("b-button",{attrs:{block:""},on:{click:function(e){return t.navhandler("/")}}},[t._v("Top")]),s("b-button",{attrs:{block:""},on:{click:function(e){return t.navhandler("Profile")}}},[t._v("自己紹介")]),s("b-button",{attrs:{block:""},on:{click:function(e){return t.navhandler("Job")}}},[t._v("こんな風に働きたい")]),s("b-button",{attrs:{block:""},on:{click:function(e){return t.navhandler("Strengths")}}},[t._v("私の強みはこれ！")])],1)],1)],1)]),s("router-view"),s("footer",{staticClass:"w-100 bg-dark text-light"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col d-flex text-light"},[t._v("made with by Moe")]),s("div",{staticClass:"col d-flex justify-content-end"},[s("a",{staticClass:"icon-right text-light",attrs:{href:"https://twitter.com/home?lang=ja"}},[s("font-awesome-icon",{attrs:{icon:["fab","twitter-square"]}})],1),s("a",{staticClass:"icon-right text-light",attrs:{href:"https://www.facebook.com/haru0901"}},[s("font-awesome-icon",{attrs:{icon:["fab","facebook-square"]}})],1)])])])])],1)},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.enabled?s("section",[s("aside",{ref:"element",staticClass:"sidebar",style:t.style},[t._t("default")],2),s("div",{ref:"overlay",staticClass:"overlay"})]):t._e()},o=[],c={props:["direction","exist"],data:function(){return{auto_speed:"0.3s",manual_speed:"0.03s",threshold:20,startTime:null,startPos:null,translate:null,active:!1,visible:!0}},computed:{element:function(){return this.$refs.element},overlay:function(){return this.$refs.overlay},enabled:function(){return 1==this.exist},style:function(){return"right"==this.direction?"transform:translate3d(100%,0,0);right:0;":"transform:translate3d(-100%,0,0);left:0;"}},mounted:function(){var t=this;document.addEventListener("touchstart",(function(e){t.handleStart(e)})),document.addEventListener("touchmove",(function(e){t.handleMove(e)})),document.addEventListener("touchend",(function(e){t.handleEnd(e)})),document.addEventListener("touchcancel",(function(e){t.handleEnd(e)})),window.addEventListener("resize",(function(e){t.setVisibality(e)}),!0),this.overlay.addEventListener("transitionend",(function(e){t.handleZindex(e)}),!1),this.overlay.addEventListener("click",(function(e){t.close()}),!1),this.setVisibality()},methods:{setVisibality:function(){0==this.element.offsetWidth?this.visible=!1:this.visible=!0},handleStart:function(t){this.startTime=(new Date).getTime(),this.startPos=t.targetTouches[0].pageX,this.element.style.transitionDuration=this.manual_speed},handleMove:function(t){var e=this.gesture(t),s=this.validate(this.direction,e);if(s){var a=this.percentage(this.direction,e);"left"==this.direction?(this.translate=t.touches[0].pageX-this.element.offsetWidth,this.translate<0?this.element.style.transform="translate3d("+this.translate+"px,0,0)":this.open()):(this.translate=-(screen.width-this.element.offsetWidth-t.touches[0].pageX),this.translate>0?this.element.style.transform="translate3d("+this.translate+"px,0,0)":this.open()),this.overlayOpacity(a/100)}},handleEnd:function(t){var e=this.speed(t),s=this.gesture(t),a=this.validate(this.direction,s);a&&(e>.6?this.active?this.close():this.open():this.element.offsetWidth/2>Math.abs(this.translate)?this.open():this.close())},handleZindex:function(){var t=window.getComputedStyle(this.overlay).getPropertyValue("opacity");t<=0&&(this.overlay.style.zIndex=-999)},validate:function(t,e){if("left"==t){if(this.active&&"swiperight"==e||!this.active&&("swipeleft"==e||this.startPos>this.threshold))return!1}else if(this.active&&"swipeleft"==e||!this.active&&("swiperight"==e||this.startPos<screen.width-this.threshold))return!1;return!(document.querySelector(".sidebar.active")&&!this.active||!this.visible)},overlayOpacity:function(t){this.overlay.style.opacity=t,t>0&&(this.overlay.style.zIndex=999)},gesture:function(t){var e=["swipeleft","swiperight"],s=t.changedTouches[0].pageX;return this.startPos-s<0?e[1]:e[0]},open:function(){this.translate=0,this.element.style.transform="translate3d("+this.translate+",0,0)",this.element.style.transitionDuration=this.auto_speed,this.overlayOpacity(1),this.lock(document.querySelector("html")),this.lock(document.querySelector("body")),this.element.classList.add("active"),this.active=!0},close:function(){"left"==this.direction?this.translate="-"+this.element.offsetWidth+"px":this.translate=this.element.offsetWidth+"px",this.element.style.transform="translate3d("+this.translate+",0,0)",this.element.style.transitionDuration=this.auto_speed,this.overlayOpacity(0),this.unlock(document.querySelector("html")),this.unlock(document.querySelector("body")),this.element.classList.remove("active"),this.active=!1},speed:function(t){var e=(new Date).getTime()-this.startTime,s=Math.abs(this.startPos),a=Math.abs(t.changedTouches[0].pageX),n=s>a?s-a:a-s;return n/e},percentage:function(t,e){var s=0,a=[];return a="left"==t?["swipeleft","swiperight"]:["swiperight","swipeleft"],this.active&&e==a[0]&&(s=100-Math.round(Math.abs(this.translate)/this.element.offsetWidth*100)),this.active||e!=a[1]||(s=Math.round(100-Math.abs(this.translate)/this.element.offsetWidth*100)),s>100&&(s=100),s<0&&(s=0),s},lock:function(t){t.style.overflow="hidden",t.style.touchAction="none"},unlock:function(t){t.style.removeProperty("overflow"),t.style.removeProperty("touch-action")}}},l=c,u=(s("a50b"),s("2877")),d=Object(u["a"])(l,i,o,!1,null,"5f7e0c1b",null),h=d.exports,f={name:"App",data:function(){return{active:!1,navi:!1}},components:{Drawer:h},methods:{naviOpen:function(){this.active=!this.active,this.navi=!this.navi},openMenu:function(){this.$refs.LeftDrawer.active?this.$refs.LeftDrawer.close():this.$refs.LeftDrawer.open()},closeMenu:function(){this.$refs.LeftDrawer.active&&this.$refs.LeftDrawer.close()},navhandler:function(t){this.$router.push(t),this.closeMenu()}}},p=f,v=(s("034f"),Object(u["a"])(p,n,r,!1,null,null,null)),b=v.exports,m=(s("f9e3"),s("2dd8"),s("8c4f")),_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home w-100"},[a("img",{staticClass:"d-none d-lg-block",attrs:{src:s("89b1"),alt:"top",width:"100%"}}),a("img",{staticClass:"d-lg-none",attrs:{src:s("6fc9"),alt:"top",width:"100%"}}),a("div",{staticClass:"text-center"},[a("h1",[t._v("Welcome to Portfolio!")]),a("p",[t._v("ご覧いただきましてありがとうございます。")]),a("p",[t._v("こちらは、フロントエンドエンジニア見習い小林のポートフォリオサイトです。")]),a("p",[t._v("これまでの経緯やプロフィールを記載しております。")]),a("p",[t._v("コーヒー片手にごゆるりとご覧下さいませ。")])])])}],y={},w=Object(u["a"])(y,_,g,!1,null,null,null),x=w.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"product"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("h1",{staticClass:"text-left"},[t._v("自己紹介")]),s("b-card-group",{attrs:{deck:""}},[s("b-card",{staticClass:"text-left",attrs:{header:"基本情報"}},[s("b-card-text",[s("h2",[t._v("小林萌")]),s("p",[t._v("生年月日：1992年9月1日")]),s("p",[t._v("年齢：27歳")]),s("p",[t._v("学歴：九州産業大学国際文化学部日本文化学科2016年卒業")]),s("p",[t._v("職歴：携帯販売・Webデザイナー")])])],1)],1),s("b-card-group",{attrs:{deck:""}},[s("b-card",{staticClass:"text-left",attrs:{header:"スキル"}},[s("b-card-text",[s("p",[t._v("実務経験有："),s("br"),t._v("\n    HTML5,CSS3,フォトショップ(画像加工、レタッチ),LP制作のディレクション")]),s("p",[t._v("実務経験無(学習段階)："),s("br"),t._v("\n    Vue.js,AdobeXD")])])],1)],1),s("b-card-group",{attrs:{deck:""}},[s("b-card",{staticClass:"text-left",attrs:{header:"資格"}},[s("b-card-text",[s("p",[t._v("WEB関係："),s("br"),t._v("\n    Webクリエイター能力認定試験エキスパート")]),s("p",[t._v("その他："),s("br"),t._v("\n    語彙・読解力検定２級")])])],1)],1),s("b-card-group",{attrs:{deck:""}},[s("b-card",{staticClass:"text-left",attrs:{header:"職務経歴"}},[s("b-card-text",[s("p",[t._v("携帯販売："),s("br"),t._v("\n    回線の新規契約や契約内容の案内、更新、機種変更などの窓口業務や付属品販売などを行なっていました。")]),s("p",[t._v("レディースアパレルECショップ："),s("br"),t._v("\n    楽天に出店している店舗のサイト管理や新規イベントページ作成などコーディングをメインに業務を行なっていました。")]),s("p",[t._v("化粧品ECサイト："),s("br"),t._v("\n    自社で運営しているECサイトの保守管理やLP製作時のディレクションや広告代理店とのやりとりを行なっていました。")])])],1)],1),s("b-card-group",{attrs:{deck:""}},[s("b-card",{staticClass:"text-left",attrs:{header:"趣味嗜好"}},[s("b-card-text",[s("p",[t._v("趣味：車")]),s("p",[t._v("好きな車："),s("br"),t._v("\n    HONDA シビックTYPE R、三菱　ランサーエボリューション、トヨタ カムリ、アウディ A4、BMW 3シリーズ")]),s("p",[t._v("好きなドライブコース："),s("br"),t._v("\n    飯塚〜北九州、朝倉〜大分、阿蘇山一周、佐世保、長崎市、糸島〜唐津")])])],1)],1)],1)],1)],1)},k=[],O=(s("2a37"),{}),P=Object(u["a"])(O,C,k,!1,null,null,null),E=P.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"product"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("h1",{staticClass:"text-left"},[t._v("こんな風に働きたい")]),s("b-card-group",{attrs:{deck:""}},[s("b-card",{staticClass:"text-left",attrs:{header:"道を切り開いていく仕事がしたい"}},[s("b-card-text",[s("p",[t._v("常に新しいことにチャレンジしたいという気持ちを持っています。")]),s("p",[t._v("また、何もないところから作り上げ行くことにやりがいを感じます。")])])],1)],1),s("b-card-group",{attrs:{deck:""}},[s("b-card",{staticClass:"text-left",attrs:{header:"企業規模は小〜中規模がいい"}},[s("b-card-text",[s("p",[t._v("枠にとらわれると自分の力を発揮することが難しくなるため、思考を自由にできる規模の企業で働きたいと思います。")])])],1)],1),s("b-card-group",{attrs:{deck:""}},[s("b-card",{staticClass:"text-left",attrs:{header:"協調性を大切にしたい"}},[s("b-card-text",[s("p",[t._v("人の和を大切にする社風の企業で働きたいです。")]),s("p",[t._v("何か新しいことを始めるとき、点ではなく面で進めていく方が成功すると考えています。")]),s("p",[t._v("個人の意見をある程度孫亮する会社の方が強みを生かせると考えています。")])])],1)],1)],1)],1)],1)},j=[],L=(s("f48f"),{}),S=Object(u["a"])(L,M,j,!1,null,null,null),D=S.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{staticClass:"product"},[s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("h1",{staticClass:"text-left"},[t._v("私の強みはこれ！")]),s("b-card-group",{attrs:{deck:""}},[s("b-card",{staticClass:"text-left",attrs:{header:"情報収集能力は高い方"}},[s("b-card-text",[s("p",[t._v("以前働いていた企業で、社内でこういう事がしたいという案が出てきたとき、"),s("br"),t._v("\n    マニュアルやネットの記事、競業他社のサイトなどを調査し実現できる方法を提案し実装まで行なっていました。")])])],1)],1),s("b-card-group",{attrs:{deck:""}},[s("b-card",{staticClass:"text-left",attrs:{header:"エラーが起きたとき全力で調べる"}},[s("b-card-text",[s("p",[t._v("ページ実装時にエラーが発生した際に、"),s("br"),t._v("\n    エラーコードを検索したり、公式リファレンスを読んだり、ネット記事を探し出しエラーの原因と解決策を探すことが楽しくできます。")])])],1)],1),s("b-card-group",{attrs:{deck:""}},[s("b-card",{staticClass:"text-left",attrs:{header:"調査することが好き"}},[s("b-card-text",[s("p",[t._v("新しいサービスや使えそうなライブラリーなど興味のある分野について検索をしたり本を読んだりしています。")]),s("p",[t._v("また、調べなければならない事についても、めんどくさいと思いつつも自分の納得が行くまで、とことん調べます。")])])],1)],1)],1)],1)],1)},T=[],W=(s("c15d"),{}),q=Object(u["a"])(W,$,T,!1,null,null,null),X=q.exports;a["default"].use(m["a"]);var A=new m["a"]({routes:[{path:"/",component:x},{path:"/Profile",component:E},{path:"/Job",component:D},{path:"/Strengths",component:X}]}),V=A,J=s("5f5b"),z=s("ecee"),B=s("c074"),H=s("f2d1"),I=s("b702"),Z=s("ad3d");z["c"].add(B["a"],H["a"],I["a"]),a["default"].use(J["a"]),a["default"].component("font-awesome-icon",Z["a"]),a["default"].config.productionTip=!1,new a["default"]({el:"#app",router:V,render:function(t){return t(b)}})},"64a9":function(t,e,s){},"6bfb":function(t,e,s){},"6fc9":function(t,e,s){t.exports=s.p+"img/top.98e5aad3.png"},"89b1":function(t,e,s){t.exports=s.p+"img/top-pc.71b2f4f4.png"},"9d2e":function(t,e,s){},a50b:function(t,e,s){"use strict";var a=s("6bfb"),n=s.n(a);n.a},c15d:function(t,e,s){"use strict";var a=s("9d2e"),n=s.n(a);n.a},f48f:function(t,e,s){"use strict";var a=s("4433"),n=s.n(a);n.a}});
//# sourceMappingURL=app.8e72d333.js.map