(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{193:function(t,e,r){"use strict";var n=r(15),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"fixed top-0 w-full shelves",attrs:{role:"banner"}},[e("div",{staticClass:"px-6"},[e("div",{staticClass:"flex justify-between items-center py-4"},[e("a",{staticClass:"text-white",attrs:{href:"/"}},[e("p",{staticClass:"logo-txt mx-0 xl:pl2 text-xl font-medium"},[this._v(this._s(this.$t("title")))])]),this._v(" "),this._m(0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center"},[e("nav",{staticClass:"text-sm flex"},[e("a",{staticClass:"px-2 py-1",attrs:{href:"/web"}},[e("img",{attrs:{src:"/estantes.svg"}})]),this._v(" "),e("a",{staticClass:"px-2 py-1",attrs:{href:"/web/covers"}},[e("img",{attrs:{src:"/covers.svg"}})])])])}],!1,null,null,null);e.a=component.exports},195:function(t,e,r){var content=r(344);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("8da92178",content,!0,{sourceMap:!1})},196:function(t,e,r){var content=r(346);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("4a3fc706",content,!0,{sourceMap:!1})},197:function(t,e,r){var content=r(348);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("634d869e",content,!0,{sourceMap:!1})},205:function(t,e,r){"use strict";var n=r(6),o=r(206)(5),l=!0;"find"in[]&&Array(1).find((function(){l=!1})),n(n.P+n.F*l,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(82)("find")},206:function(t,e,r){var n=r(23),o=r(81),l=r(24),c=r(18),d=r(207);t.exports=function(t,e){var r=1==t,f=2==t,m=3==t,v=4==t,h=6==t,x=5==t||h,w=e||d;return function(e,d,_){for(var y,C,k=l(e),A=o(k),$=n(d,_,3),O=c(A.length),E=0,S=r?w(e,O):f?w(e,0):void 0;O>E;E++)if((x||E in A)&&(C=$(y=A[E],E,k),t))if(r)S[E]=C;else if(C)switch(t){case 3:return!0;case 5:return y;case 6:return E;case 2:S.push(y)}else if(v)return!1;return h?-1:m||v?v:S}}},207:function(t,e,r){var n=r(208);t.exports=function(t,e){return new(n(t))(e)}},208:function(t,e,r){var n=r(10),o=r(124),l=r(2)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[l])&&(e=void 0)),void 0===e?Array:e}},343:function(t,e,r){"use strict";var n=r(195);r.n(n).a},344:function(t,e,r){(e=r(35)(!1)).push([t.i,".icon-news[data-v-728d0868]{width:100px;margin:0 .25rem}",""]),t.exports=e},345:function(t,e,r){"use strict";var n=r(196);r.n(n).a},346:function(t,e,r){(e=r(35)(!1)).push([t.i,".shelf[data-v-44d8f73a]{min-height:87px}.icon-news[data-v-44d8f73a]{width:100px;margin:0 .25rem}.arrow[data-v-44d8f73a]{width:1rem;height:.8rem;padding-left:.25rem}.bg-gradient-shelves .see-more-show[data-v-44d8f73a]{visibility:hidden}.bg-gradient-shelves:hover .see-more-show[data-v-44d8f73a]{visibility:visible}",""]),t.exports=e},347:function(t,e,r){"use strict";var n=r(197);r.n(n).a},348:function(t,e,r){(e=r(35)(!1)).push([t.i,".marquesine{background-color:var(--marquesine)}.marquesine .owl-theme .owl-dots{position:absolute;top:0;right:0}.marquesine .owl-theme .owl-nav.disabled+.owl-dots{margin-top:0!important}.h-gad{height:5.6rem}",""]),t.exports=e},364:function(t,e,r){"use strict";r.r(e);r(22),r(205),r(37);var n=r(5),o=(r(123),r(193)),l={props:["id","image_url","name","url"]},c=(r(343),r(15)),d={props:["id","name","newspapers","image_url"],components:{NewspaperItem:Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"black",attrs:{to:"/web/"+this.id+"?"}},[e("p",{staticClass:"mx-0 icon-news"},[e("img",{staticClass:"v-mid",attrs:{src:""+this.image_url,alt:this.name}})])])}),[],!1,null,"728d0868",null).exports}};r(345);var f={components:{ShelfItem:Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{key:t.id,staticClass:"bg-gradient-shelves relative"},[r("h4",{staticClass:"uppercase mx-0 py-4 pl-6"},[t._v(t._s(t.name))]),t._v(" "),r("p",{staticClass:"see-more-show absolute right-0 top-0 uppercase p-4 text-xs flex items-center"},[t._v(t._s(t.$t("diario.see-more"))+" "),t._m(0)]),t._v(" "),r("div",{staticClass:"flex overflow-x-scroll pl-4 shelf"},t._l(t.newspapers,(function(t){return r("NewspaperItem",{key:t.id,attrs:{id:t.id,name:t.name,image_url:t.image_url}})})),1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("i",{staticClass:"arrow"},[e("img",{attrs:{src:"/arrow_white.svg",alt:"ir a"}})])}],!1,null,"44d8f73a",null).exports,DiariosHeader2:o.a},head:function(){return{title:this.$t("diario.title")}},data:function(){return{shelves:null,markee:null}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.app,o=t.store,e.prev=1,l=n.i18n.locale,e.next=5,r.$get("/newspapers/from/arg");case 5:return c=e.sent,e.next=8,r.$get("/widgets?country=arg&include=indicators&lang="+l);case 8:return d=e.sent,o.commit("SET_SHELVES",c),e.abrupt("return",{shelves:c,markee:d});case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",{shelves:null,markee:null});case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))()},mounted:function(){var t;(t={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return t.Android()||t.BlackBerry()||t.iOS()||t.Opera()||t.Windows()}}).Android()?document.location.href="https://play.google.com/store/apps/details?id=com.tachanfil.diariosargentinos":t.iOS()&&(document.location.href="https://itunes.apple.com/app/diarios-argentinos/id591281452")},methods:{getCategoryName:function(t){var e=this.$store.app.i18n.locale,r=t.translations.find((function(tr){return tr.lang===e}));return(null!=r?r.text:t.name).toUpperCase()}}},m=(r(347),Object(c.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("diarios-header2"),t._v(" "),r("div",{staticClass:"pt-16"},[t.shelves?r("div",{staticClass:"h-shelves with-ga overflow-y-scroll"},[t.markee?r("div",{staticClass:"py-3 px-6 marquesine"},[r("client-only",[r("carousel",{attrs:{autoplay:!0,nav:!1,items:1,dots:!0,autoplayTimeout:7e3}},t._l(t.markee,(function(e){return r("div",{key:e.id},[r("p",{staticClass:"text-sm mx-0 text-gray-400 uppercase",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),r("p",{staticClass:"text-lg mx-0",domProps:{innerHTML:t._s(e.description)}})])})),0)],1)],1):t._e(),t._v(" "),t._l(t.shelves.categories,(function(e){return r("ShelfItem",{key:e.id,attrs:{id:e.id,name:t.getCategoryName(e),newspapers:e.newspapers}})}))],2):t._e()]),t._v(" "),r("div",{staticClass:"w-full h-gad fixed bottom-0"},[r("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-8904729355883130","data-ad-slot":"1720306780","data-full-width-responsive":"","ins-style":"display:block;width:728px;height:90px; margin: 0 auto;"}})],1)],1)}),[],!1,null,null,null));e.default=m.exports}}]);