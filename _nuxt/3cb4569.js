(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{261:function(t,e,n){"use strict";e.a={computed:{ionClass(){let t="";return"rotate"===this.animate?t="ion-rotate ":"beat"===this.animate?t="ion-beat ":"shake"===this.animate&&(t="ion-shake "),`${this.rootClass} ${t}`}},props:{title:{type:String,default:""},rootClass:{type:String,default:""},w:{type:String,default:"1em"},h:{type:String,default:"1em"},animate:{type:String,default:""}}}},264:function(t,e,n){"use strict";var o={name:"logo-github-icon",mixins:[n(261).a],data:function(){return{iconTitle:this.title?this.title:"Logo Github Icon"}}},r=n(27),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ion",class:t.ionClass,attrs:{"data-title":t.iconTitle,"data-name":"logo-github-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{viewBox:"0 0 512 512",width:t.w,height:t.h}},[e("path",{attrs:{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"}})])])}),[],!1,null,null,null);e.a=component.exports},267:function(t,e,n){var content=n(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("364d07a4",content,!0,{sourceMap:!1})},274:function(t,e,n){t.exports=n.p+"img/wibudesu.35ec921.jpeg"},275:function(t,e,n){t.exports=n.p+"img/mypokedex.3eb5e17.jpeg"},276:function(t,e,n){"use strict";n(267)},277:function(t,e,n){var o=n(59)((function(i){return i[1]}));o.push([t.i,"hr.dope[data-v-1a5c94bc]{\n  border:0;\n  width:90px;\n  border-top:2px solid #dc3545;\n  text-align:left;\n  margin:initial;\n  margin-top:7px;\n  margin-left:5px\n}\nhr.line[data-v-1a5c94bc]{\n  width:90%;\n  margin:5px auto\n}",""]),o.locals={},t.exports=o},282:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this._self._c;return t("div",{staticClass:"md:w-1/2 m-2"},[t("img",{attrs:{src:n(274),alt:"dummy project"}})])},function(){var t=this._self._c;return t("div",{staticClass:"md:w-1/2 m-2"},[t("img",{attrs:{src:n(275),alt:"dummy project"}})])}],r=n(264),l={name:"md-link-icon",mixins:[n(261).a],data:function(){return{iconTitle:this.title?this.title:"Md Link Icon"}}},c=n(27),d=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ion",class:t.ionClass,attrs:{"data-title":t.iconTitle,"data-name":"md-link-icon"}},[e("svg",{staticClass:"ion__svg",attrs:{width:t.w,height:t.h,viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M74.6 256c0-38.3 31.1-69.4 69.4-69.4h88V144h-88c-61.8 0-112 50.2-112 112s50.2 112 112 112h88v-42.6h-88c-38.3 0-69.4-31.1-69.4-69.4zm85.4 22h192v-44H160v44zm208-134h-88v42.6h88c38.3 0 69.4 31.1 69.4 69.4s-31.1 69.4-69.4 69.4h-88V368h88c61.8 0 112-50.2 112-112s-50.2-112-112-112z"}})])])}),[],!1,null,null,null).exports,m={data:function(){return{projectLinks:{wibudesuLink:"https://github.com/riiamri23/wibudesu2",mypokedexLink:"https://github.com/riiamri23/mypokedex"},demoLinks:{wibudesuDemo:"https://wibudesu.vercel.app/",mypokedexDemo:"https://mypokedex-ten.vercel.app/"}}},components:{GithubIcon:r.a,MdLinkIcon:d}},h=(n(276),Object(c.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto mt-10 animate__animated animate__fadeInUp animate__fast"},[e("h1",{staticClass:"text-4xl text-center mb-10"},[t._v("Recents Projects")]),t._v(" "),e("div",{staticClass:"flex-row",attrs:{id:"list-projects"}},[e("div",{staticClass:"md:flex flex-row items-start mx-10"},[t._m(0),t._v(" "),e("div",{staticClass:"md:w-1/2 m-2"},[e("h1",{staticClass:"text-3xl"},[t._v("Wibudesu")]),t._v(" "),e("hr",{staticClass:"dope"}),t._v(" "),e("div",{staticClass:"w-full rounded-lg border border-gray-200 p-5 my-5"},[e("p",[t._v("Watching some anime, manga and about anime news, you can see everything here")]),t._v(" "),e("span",[e("a",{staticClass:"text-blue-500 hover:underline font-medium",attrs:{href:t.demoLinks.wibudesuDemo,target:"_blank"}},[t._v("Check it Out ")]),e("MdLinkIcon",{staticClass:"inline-block",attrs:{w:"15px",h:"15px"}})],1),t._v(" "),e("hr",{staticClass:"line"}),t._v(" "),e("div",[e("span",[e("a",{staticClass:"text-blue-500 hover:underline font-medium",attrs:{href:t.projectLinks.wibudesuLink,target:"_blank"}},[t._v("View Source Code ")]),e("GithubIcon",{staticClass:"inline-block",attrs:{w:"15px",h:"15px"}})],1)])])])]),t._v(" "),e("div",{staticClass:"md:flex flex-row items-start mx-10"},[t._m(1),t._v(" "),e("div",{staticClass:"md:w-1/2 m-2"},[e("h1",{staticClass:"text-3xl"},[t._v("My Pokedex")]),t._v(" "),e("hr",{staticClass:"dope"}),t._v(" "),e("div",{staticClass:"w-full rounded-lg border border-gray-200 p-5 my-5"},[e("p",[t._v("Look at pokedex you love there, you can see every pokemon here")]),t._v(" "),e("span",[e("a",{staticClass:"text-blue-500 hover:underline font-medium",attrs:{href:t.demoLinks.mypokedexDemo,target:"_blank"}},[t._v("Check it Out ")]),e("MdLinkIcon",{staticClass:"inline-block",attrs:{w:"15px",h:"15px"}})],1),t._v(" "),e("hr",{staticClass:"line"}),t._v(" "),e("div",[e("span",[e("a",{staticClass:"text-blue-500 hover:underline font-medium",attrs:{href:t.projectLinks.mypokedexLink,target:"_blank"}},[t._v("View Source Code ")]),e("GithubIcon",{staticClass:"inline-block",attrs:{w:"15px",h:"15px"}})],1)])])])])])])}),o,!1,null,"1a5c94bc",null));e.default=h.exports}}]);