(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"408a":function(e,t,n){},a10d:function(e,t,n){"use strict";n("408a")},f820:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const a={class:"about"},c=["src"];function s(e,t,n,s,d,i){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createElementVNode"])("h1",null,Object(o["toDisplayString"])(e.app_name),1),Object(o["createElementVNode"])("h1",null,Object(o["toDisplayString"])(e.title),1),Object(o["createElementVNode"])("img",{alt:"gitee挂件",src:e.URL,style:{width:"90%"}},null,8,c),Object(o["createCommentVNode"])("",!0)])}var d=n("ce1a"),i=Object(o["defineComponent"])({setup(){const e="光遇复刻档案馆",t="https://gitee.com/jun-laner/tensorflow-skypre/widgets/widget_card.svg?colors=eae9d7,000000,272822,484a45,eae9d7,747571",n="AI预测复刻 结果仅供娱乐";function o(){const e=d["e"]();e.add(d["a"].dense({units:100,activation:"relu",inputShape:[10]})),e.add(d["a"].dense({units:1,activation:"linear"})),e.compile({optimizer:"sgd",loss:"meanSquaredError"});const t=d["d"]([100,10]),n=d["d"]([100,1]);e.fit(t,n,{epochs:100,callbacks:{onEpochEnd:(e,t)=>console.log(`Epoch ${e}: loss = ${t.loss}`)}})}return{app_name:e,title:n,URL:t,doML:o}}}),l=(n("a10d"),n("6b0d")),r=n.n(l);const p=r()(i,[["render",s],["__scopeId","data-v-5e5d72d0"]]);t["default"]=p}}]);
//# sourceMappingURL=about.8f02a245.js.map