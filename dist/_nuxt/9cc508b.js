(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(n,e,t){var content=t(200);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(109).default)("d706d280",content,!0,{sourceMap:!1})},157:function(n,e,t){"use strict";var r={head:function(){return{bodyAttrs:{class:"bg-gray-300"}}}},o=t(34),component=Object(o.a)(r,(function(){var n=this.$createElement;return(this._self._c||n)("Nuxt")}),[],!1,null,null,null);e.a=component.exports},158:function(n,e,t){t(159),n.exports=t(160)},200:function(n,e,t){var r=t(108)((function(i){return i[1]}));r.push([n.i,"/*! tailwindcss v2.2.4 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\n/**\nAdd the correct font size in all browsers.\n*/\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\n\nh1,\np {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\nh1 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.container{\n  width:100%;\n}\n\n@media (min-width: 640px){\n  .container{\n    max-width:640px;\n  }\n}\n\n@media (min-width: 768px){\n  .container{\n    max-width:768px;\n  }\n}\n\n@media (min-width: 1024px){\n  .container{\n    max-width:1024px;\n  }\n}\n\n@media (min-width: 1280px){\n  .container{\n    max-width:1280px;\n  }\n}\n\n@media (min-width: 1536px){\n  .container{\n    max-width:1536px;\n  }\n}\n\n.static{\n  position:static;\n}\n\n.absolute{\n  position:absolute;\n}\n\n.top-0{\n  top:0px;\n}\n\n.right-0{\n  right:0px;\n}\n\n.mx-6{\n  margin-left:1.5rem;\n  margin-right:1.5rem;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.my-32{\n  margin-top:8rem;\n  margin-bottom:8rem;\n}\n\n.mt-3{\n  margin-top:0.75rem;\n}\n\n.mt-6{\n  margin-top:1.5rem;\n}\n\n.-mt-16{\n  margin-top:-4rem;\n}\n\n.block{\n  display:block;\n}\n\n.flex{\n  display:flex;\n}\n\n.hidden{\n  display:none;\n}\n\n.h-4{\n  height:1rem;\n}\n\n.h-6{\n  height:1.5rem;\n}\n\n.h-12{\n  height:3rem;\n}\n\n.h-48{\n  height:12rem;\n}\n\n.h-auto{\n  height:auto;\n}\n\n.w-48{\n  width:12rem;\n}\n\n.w-4\\/5{\n  width:80%;\n}\n\n.w-full{\n  width:100%;\n}\n\n.max-w-4xl{\n  max-width:56rem;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.flex-wrap{\n  flex-wrap:wrap;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.justify-between{\n  justify-content:space-between;\n}\n\n.rounded-none{\n  border-radius:0px;\n}\n\n.rounded{\n  border-radius:0.25rem;\n}\n\n.rounded-lg{\n  border-radius:0.5rem;\n}\n\n.rounded-full{\n  border-radius:9999px;\n}\n\n.border{\n  border-width:1px;\n}\n\n.border-b-2{\n  border-bottom-width:2px;\n}\n\n.border-solid{\n  border-style:solid;\n}\n\n.border-gray-600{\n  --tw-border-opacity:1;\n  border-color:rgba(75, 85, 99, var(--tw-border-opacity));\n}\n\n.border-green-500{\n  --tw-border-opacity:1;\n  border-color:rgba(16, 185, 129, var(--tw-border-opacity));\n}\n\n.bg-white{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.bg-gray-300{\n  --tw-bg-opacity:1;\n  background-color:rgba(209, 213, 219, var(--tw-bg-opacity));\n}\n\n.bg-green-700{\n  --tw-bg-opacity:1;\n  background-color:rgba(4, 120, 87, var(--tw-bg-opacity));\n}\n\n.bg-indigo-600{\n  --tw-bg-opacity:1;\n  background-color:rgba(79, 70, 229, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-200:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-green-900:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(6, 78, 59, var(--tw-bg-opacity));\n}\n\n.bg-cover{\n  background-size:cover;\n}\n\n.bg-center{\n  background-position:center;\n}\n\n.fill-current{\n  fill:currentColor;\n}\n\n.p-2{\n  padding:0.5rem;\n}\n\n.p-4{\n  padding:1rem;\n}\n\n.px-3{\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n}\n\n.px-4{\n  padding-left:1rem;\n  padding-right:1rem;\n}\n\n.py-1{\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n}\n\n.py-2{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n}\n\n.pt-2{\n  padding-top:0.5rem;\n}\n\n.pt-3{\n  padding-top:0.75rem;\n}\n\n.pt-4{\n  padding-top:1rem;\n}\n\n.pt-8{\n  padding-top:2rem;\n}\n\n.pt-12{\n  padding-top:3rem;\n}\n\n.pr-4{\n  padding-right:1rem;\n}\n\n.pb-8{\n  padding-bottom:2rem;\n}\n\n.pb-16{\n  padding-bottom:4rem;\n}\n\n.text-center{\n  text-align:center;\n}\n\n.text-xs{\n  font-size:0.75rem;\n  line-height:1rem;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-base{\n  font-size:1rem;\n  line-height:1.5rem;\n}\n\n.text-xl{\n  font-size:1.25rem;\n  line-height:1.75rem;\n}\n\n.text-3xl{\n  font-size:1.875rem;\n  line-height:2.25rem;\n}\n\n.font-bold{\n  font-weight:700;\n}\n\n.text-white{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.text-gray-600{\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n.text-green-700{\n  --tw-text-opacity:1;\n  color:rgba(4, 120, 87, var(--tw-text-opacity));\n}\n\n.text-indigo-600{\n  --tw-text-opacity:1;\n  color:rgba(79, 70, 229, var(--tw-text-opacity));\n}\n\n.hover\\:text-gray-700:hover{\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity));\n}\n\n.hover\\:text-green-700:hover{\n  --tw-text-opacity:1;\n  color:rgba(4, 120, 87, var(--tw-text-opacity));\n}\n\n.opacity-25{\n  opacity:0.25;\n}\n\n.opacity-50{\n  opacity:0.5;\n}\n\n.opacity-75{\n  opacity:0.75;\n}\n\n.hover\\:opacity-75:hover{\n  opacity:0.75;\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow-xl{\n  --tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-2xl{\n  --tw-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.focus\\:outline-none:focus{\n  outline:2px solid transparent;\n  outline-offset:2px;\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.transition-colors{\n  transition-property:background-color, border-color, color, fill, stroke;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration:150ms;\n}\n\n.duration-300{\n  transition-duration:300ms;\n}\n\n@media (min-width: 640px){\n}\n\n@media (min-width: 768px){\n  .md\\:mx-2{\n    margin-left:0.5rem;\n    margin-right:0.5rem;\n  }\n\n  .md\\:mt-0{\n    margin-top:0px;\n  }\n\n  .md\\:ml-auto{\n    margin-left:auto;\n  }\n\n  .md\\:flex{\n    display:flex;\n  }\n\n  .md\\:hidden{\n    display:none;\n  }\n\n  .md\\:flex-row{\n    flex-direction:row;\n  }\n\n  .md\\:items-center{\n    align-items:center;\n  }\n\n  .md\\:p-12{\n    padding:3rem;\n  }\n\n  .md\\:py-4{\n    padding-top:1rem;\n    padding-bottom:1rem;\n  }\n}\n\n@media (min-width: 1024px){\n  .lg\\:mx-0{\n    margin-left:0px;\n    margin-right:0px;\n  }\n\n  .lg\\:my-0{\n    margin-top:0px;\n    margin-bottom:0px;\n  }\n\n  .lg\\:block{\n    display:block;\n  }\n\n  .lg\\:hidden{\n    display:none;\n  }\n\n  .lg\\:h-screen{\n    height:100vh;\n  }\n\n  .lg\\:w-2\\/5{\n    width:40%;\n  }\n\n  .lg\\:w-3\\/5{\n    width:60%;\n  }\n\n  .lg\\:w-full{\n    width:100%;\n  }\n\n  .lg\\:justify-start{\n    justify-content:flex-start;\n  }\n\n  .lg\\:rounded-lg{\n    border-radius:0.5rem;\n  }\n\n  .lg\\:rounded-r-none{\n    border-top-right-radius:0px;\n    border-bottom-right-radius:0px;\n  }\n\n  .lg\\:rounded-l-lg{\n    border-top-left-radius:0.5rem;\n    border-bottom-left-radius:0.5rem;\n  }\n\n  .lg\\:px-4{\n    padding-left:1rem;\n    padding-right:1rem;\n  }\n\n  .lg\\:pt-0{\n    padding-top:0px;\n  }\n\n  .lg\\:pb-0{\n    padding-bottom:0px;\n  }\n\n  .lg\\:text-left{\n    text-align:left;\n  }\n\n  .lg\\:text-sm{\n    font-size:0.875rem;\n    line-height:1.25rem;\n  }\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}",""]),r.locals={},n.exports=r}},[[158,8,1,9]]]);