(self.webpackChunkessentialworks=self.webpackChunkessentialworks||[]).push([[42],{1530:function(e,t){var r,n,a,o,s,l,i,u,d,f,c,m,p,b,h,g;n="undefined"!=typeof window?window:this,s="0.5.4",l="hasOwnProperty",i=/[\.\/]/,u=/\s*,\s*/,d=function(e,t){return e-t},f={n:{}},c=function(){for(var e=0,t=this.length;e<t;e++)if(void 0!==this[e])return this[e]},m=function(){for(var e=this.length;--e;)if(void 0!==this[e])return this[e]},p=Object.prototype.toString,b=String,h=Array.isArray||function(e){return e instanceof Array||"[object Array]"==p.call(e)},g=function(e,t){var r,n=o,s=Array.prototype.slice.call(arguments,2),l=g.listeners(e),i=0,u=[],f={},p=[],b=a;p.firstDefined=c,p.lastDefined=m,a=e,o=0;for(var h=0,v=l.length;h<v;h++)"zIndex"in l[h]&&(u.push(l[h].zIndex),l[h].zIndex<0&&(f[l[h].zIndex]=l[h]));for(u.sort(d);u[i]<0;)if(r=f[u[i++]],p.push(r.apply(t,s)),o)return o=n,p;for(h=0;h<v;h++)if("zIndex"in(r=l[h]))if(r.zIndex==u[i]){if(p.push(r.apply(t,s)),o)break;do{if((r=f[u[++i]])&&p.push(r.apply(t,s)),o)break}while(r)}else f[r.zIndex]=r;else if(p.push(r.apply(t,s)),o)break;return o=n,a=b,p},g._events=f,g.listeners=function(e){var t,r,n,a,o,s,l,u,d=h(e)?e:e.split(i),c=f,m=[c],p=[];for(a=0,o=d.length;a<o;a++){for(u=[],s=0,l=m.length;s<l;s++)for(r=[(c=m[s].n)[d[a]],c["*"]],n=2;n--;)(t=r[n])&&(u.push(t),p=p.concat(t.f||[]));m=u}return p},g.separator=function(e){e?(e="["+(e=b(e).replace(/(?=[\.\^\]\[\-])/g,"\\"))+"]",i=new RegExp(e)):i=/[\.\/]/},g.on=function(e,t){if("function"!=typeof t)return function(){};for(var r=h(e)?h(e[0])?e:[e]:b(e).split(u),n=0,a=r.length;n<a;n++)!function(e){for(var r,n=h(e)?e:b(e).split(i),a=f,o=0,s=n.length;o<s;o++)a=(a=a.n).hasOwnProperty(n[o])&&a[n[o]]||(a[n[o]]={n:{}});for(a.f=a.f||[],o=0,s=a.f.length;o<s;o++)if(a.f[o]==t){r=!0;break}!r&&a.f.push(t)}(r[n]);return function(e){+e==+e&&(t.zIndex=+e)}},g.f=function(e){var t=[].slice.call(arguments,1);return function(){g.apply(null,[e,null].concat(t).concat([].slice.call(arguments,0)))}},g.stop=function(){o=1},g.nt=function(e){var t=h(a)?a.join("."):a;return e?new RegExp("(?:\\.|\\/|^)"+e+"(?:\\.|\\/|$)").test(t):t},g.nts=function(){return h(a)?a:a.split(i)},g.off=g.unbind=function(e,t){if(e){var r=h(e)?h(e[0])?e:[e]:b(e).split(u);if(r.length>1)for(var n=0,a=r.length;n<a;n++)g.off(r[n],t);else{r=h(e)?e:b(e).split(i);var o,s,d,c,m,p=[f],v=[];for(n=0,a=r.length;n<a;n++)for(c=0;c<p.length;c+=d.length-2){if(d=[c,1],o=p[c].n,"*"!=r[n])o[r[n]]&&(d.push(o[r[n]]),v.unshift({n:o,name:r[n]}));else for(s in o)o[l](s)&&(d.push(o[s]),v.unshift({n:o,name:s}));p.splice.apply(p,d)}for(n=0,a=p.length;n<a;n++)for(o=p[n];o.n;){if(t){if(o.f){for(c=0,m=o.f.length;c<m;c++)if(o.f[c]==t){o.f.splice(c,1);break}!o.f.length&&delete o.f}for(s in o.n)if(o.n[l](s)&&o.n[s].f){var y=o.n[s].f;for(c=0,m=y.length;c<m;c++)if(y[c]==t){y.splice(c,1);break}!y.length&&delete o.n[s].f}}else for(s in delete o.f,o.n)o.n[l](s)&&o.n[s].f&&delete o.n[s].f;o=o.n}e:for(n=0,a=v.length;n<a;n++){for(s in(o=v[n]).n[o.name].f)continue e;for(s in o.n[o.name].n)continue e;delete o.n[o.name]}}}else g._events=f={n:{}}},g.once=function(e,t){var r=function(){return g.off(e,r),t.apply(this,arguments)};return g.on(e,r)},g.version=s,g.toString=function(){return"You are running Eve "+s},n.eve=g,e.exports?e.exports=g:void 0===(r=function(){return g}.apply(t,[]))||(e.exports=r)},4442:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(4985),o=r(3190),s=r(4160);const l=a.ci.phone;t.default=e=>n.createElement("header",null,n.createElement("nav",{id:"web-navigation-bar"},n.createElement("button",{onClick:()=>e.scrollTo(e.homeRef,!0)},n.createElement("div",{className:"logo-container"},n.createElement("h4",{className:"logo-text",id:"thin-logo"},"Essential"),n.createElement("h4",{className:"logo-text",id:"bold-logo"},"Works"))),n.createElement("div",{className:"dropdown"},n.createElement("button",{onClick:e.toggleDropdown,className:"dropbtn",ref:e.dropDownButtonRef},"Services"),n.createElement("div",{id:"myDropdown",className:"dropdown-content",ref:e.dropDownMenuRef},n.createElement("button",{onClick:()=>e.scrollTo(e.residentialRef,!0)},"Residential Services"),n.createElement("button",{onClick:()=>e.scrollTo(e.businessRef,!0)},"Business Services"))),n.createElement("button",{onClick:()=>e.scrollTo(e.aboutRef,!1)},"About Us"),n.createElement("a",{id:"quote-url-link",href:"https://forms.gle/idoyRoFJoFWhJACy7",target:"_blank"},n.createElement("p",null,"Get a Quote")),n.createElement("button",{onClick:()=>e.scrollTo(e.contactRef,!1)},"Contact Us"),n.createElement("a",{id:"phone-link",href:"tel:347-494-1802"},n.createElement("img",{id:"phone-image",src:(0,s.dq)(l)}),"(347) 494-1802")),n.createElement("div",{id:"mobile-navigation-bar"},n.createElement(o.slide,{isOpen:e.menuOpen,onStateChange:t=>e.handleMenuStateChange(t.isOpen)},n.createElement("a",{id:"home",className:"menu-item",onClick:()=>e.scrollTo(e.homeRef,!0,!0)},"Home"),n.createElement("a",{id:"residential",className:"menu-item",onClick:()=>e.scrollTo(e.residentialRef,!1,!0)},"Residential"),n.createElement("a",{id:"business",className:"menu-item",onClick:()=>e.scrollTo(e.businessRef,!1,!0)},"Business"),n.createElement("a",{id:"about",className:"menu-item",onClick:()=>e.scrollTo(e.aboutRef,!1,!0)},"About"),n.createElement("a",{id:"form-link",className:"menu-item",href:"https://forms.gle/idoyRoFJoFWhJACy7",target:"_blank"},"Get a Quote"),n.createElement("a",{id:"contact",className:"menu-item",onClick:()=>(console.log("contact hit"),e.scrollTo(e.contactRef,!1,!0))},"Contact")),n.createElement("div",{className:"phone-item-container"},n.createElement("a",{id:"phone-link",href:"tel:347-494-1802"},n.createElement("img",{id:"phone-image",src:(0,s.dq)(l)}),"(347) 494-1802"))))},4985:function(e,t,r){"use strict";r.d(t,{H:function(){return u},MA:function(){return c},N5:function(){return i},ci:function(){return d},l9:function(){return f}});const n="/residential-gallery/bathroom/bath14after.jpg",a="/residential-gallery/bedroom/bedroom1.jpg",o="/residential-gallery/bathroom/bathroomwall.jpg",s="/residential-gallery/kitchen1.1.1.jpg",l="/residential-gallery/interiorWindowAfter.jpg",i="/Profile-tiny.jpg",u="/altered/philosophy-hero.jpg",d={phone:"/phone-call.png",instagram:"/icons/IG_Glyph_Fill.gif",facebook:"/icons/f_logo_RGB-Blue_100.png",yelp:"/icons/burst_icon@2x.png"},f=[{caption:"",url:"/constructionWebImages/kitchen1-2.jpg"},{caption:"",url:"/constructionWebImages/paint2.jpg"},{caption:"",url:"/constructionWebImages/wall1.jpg"}],c=[{caption:"Kitchen Set",thumbnail:s,data:[{caption:"before",url:"/residential-gallery/kitchen1.1.1Before.jpg"},{caption:"after",url:s}]},{caption:"Bathroom Set",thumbnail:n,data:[{caption:"before",url:"/residential-gallery/bathroom/bath12before.jpg"},{caption:"after",url:"/residential-gallery/bathroom/bath12after.jpg"},{caption:"before",url:"/residential-gallery/bathroom/bath14before.jpg"},{caption:"after",url:n}]},{caption:"Interior Window",thumbnail:l,data:[{caption:"before",url:"/residential-gallery/interiorWindowBefore.jpg"},{caption:"after",url:l}]},{caption:"Bedroom Set",thumbnail:a,data:[{caption:"",url:"/residential-gallery/kitchen-black/1.jpg"},{caption:"",url:a},{caption:"",url:"/residential-gallery/bedroom/bedroom2.jpg"},{caption:"",url:"/residential-gallery/bedroom/bedroom3.jpg"},{caption:"",url:"/residential-gallery/bedroom/bedroom4.jpg"},{caption:"",url:"/residential-gallery/bedroom/bedroom5.jpg"},{caption:"",url:"/residential-gallery/bedroom/bedroom6.jpg"}]},{caption:"Bathroom Set",thumbnail:o,data:[{caption:"",url:"/residential-gallery/bathroom/bathroom8.jpg"},{caption:"",url:o}]},{caption:"Modern Kitchen",thumbnail:"/residential-gallery/kitchen-black/2-tiny.jpg",data:[{caption:"",url:"/residential-gallery/kitchen-black/2.jpg"},{caption:"",url:"/residential-gallery/kitchen-black/3.jpg"},{caption:"",url:"/residential-gallery/kitchen-black/4.jpg"}]}]},3190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={slide:r(6432),stack:r(7277),elastic:r(2996),bubble:r(3414),push:r(3976),pushRotate:r(8796),scaleDown:r(9070),scaleRotate:r(6001),fallDown:r(5576),reveal:r(6523)},e.exports=t.default},4510:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function o(e){return e&&e.__esModule?e:{default:e}}var s=r(7294),l=o(s),i=o(r(5697)),u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,r){for(var n=!0;n;){var a=e,o=t,s=r;n=!1,null===a&&(a=Function.prototype);var l=Object.getOwnPropertyDescriptor(a,o);if(void 0!==l){if("value"in l)return l.value;var i=l.get;if(void 0===i)return;return i.call(s)}var u=Object.getPrototypeOf(a);if(null===u)return;e=u,t=o,r=s,n=!0,l=u=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={hover:!1}}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"getLineStyle",value:function(e){return n({position:"absolute",height:"20%",left:0,right:0,top:2*e*20+"%",opacity:this.state.hover?.6:1},this.state.hover&&this.props.styles.bmBurgerBarsHover)}},{key:"render",value:function(){var e=this,t=void 0;if(this.props.customIcon){var r={className:("bm-icon "+(this.props.customIcon.props.className||"")).trim(),style:n({width:"100%",height:"100%"},this.props.styles.bmIcon)};t=l.default.cloneElement(this.props.customIcon,r)}else t=l.default.createElement("span",null,[0,1,2].map((function(t){return l.default.createElement("span",{key:t,className:("bm-burger-bars "+e.props.barClassName+" "+(e.state.hover?"bm-burger-bars-hover":"")).trim(),style:n({},e.getLineStyle(t),e.props.styles.bmBurgerBars)})})));return l.default.createElement("div",{className:("bm-burger-button "+this.props.className).trim(),style:n({zIndex:1e3},this.props.styles.bmBurgerButton)},l.default.createElement("button",{type:"button",id:"react-burger-menu-btn",onClick:this.props.onClick,onMouseOver:function(){e.setState({hover:!0}),e.props.onIconHoverChange&&e.props.onIconHoverChange({isMouseIn:!0})},onMouseOut:function(){e.setState({hover:!1}),e.props.onIconHoverChange&&e.props.onIconHoverChange({isMouseIn:!1})},style:{position:"absolute",left:0,top:0,zIndex:1,width:"100%",height:"100%",margin:0,padding:0,border:"none",fontSize:0,background:"transparent",cursor:"pointer"}},"Open Menu"),t)}}]),t}(s.Component);t.default=u,u.propTypes={barClassName:i.default.string,customIcon:i.default.element,styles:i.default.object},u.defaultProps={barClassName:"",className:"",styles:{}},e.exports=t.default},5430:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function o(e){return e&&e.__esModule?e:{default:e}}var s=r(7294),l=o(s),i=o(r(5697)),u=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,r){for(var n=!0;n;){var a=e,o=t,s=r;n=!1,null===a&&(a=Function.prototype);var l=Object.getOwnPropertyDescriptor(a,o);if(void 0!==l){if("value"in l)return l.value;var i=l.get;if(void 0===i)return;return i.call(s)}var u=Object.getPrototypeOf(a);if(null===u)return;e=u,t=o,r=s,n=!0,l=u=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"getCrossStyle",value:function(e){return{position:"absolute",width:3,height:14,transform:"before"===e?"rotate(45deg)":"rotate(-45deg)"}}},{key:"render",value:function(){var e,t=this;if(this.props.customIcon){var r={className:("bm-cross "+(this.props.customIcon.props.className||"")).trim(),style:n({width:"100%",height:"100%"},this.props.styles.bmCross)};e=l.default.cloneElement(this.props.customIcon,r)}else e=l.default.createElement("span",{style:{position:"absolute",top:"6px",right:"14px"}},["before","after"].map((function(e,r){return l.default.createElement("span",{key:r,className:("bm-cross "+t.props.crossClassName).trim(),style:n({},t.getCrossStyle(e),t.props.styles.bmCross)})})));return l.default.createElement("div",{className:("bm-cross-button "+this.props.className).trim(),style:n({},{position:"absolute",width:24,height:24,right:8,top:8},this.props.styles.bmCrossButton)},l.default.createElement("button",n({type:"button",id:"react-burger-cross-btn",onClick:this.props.onClick,style:{position:"absolute",left:0,top:0,zIndex:1,width:"100%",height:"100%",margin:0,padding:0,border:"none",fontSize:0,background:"transparent",cursor:"pointer"}},!this.props.isOpen&&{tabIndex:-1}),"Close Menu"),e)}}]),t}(s.Component);t.default=u,u.propTypes={crossClassName:i.default.string,customIcon:i.default.element,isOpen:i.default.bool,styles:i.default.object},u.defaultProps={crossClassName:"",className:"",styles:{},isOpen:!1},e.exports=t.default},6661:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={overlay:function(e){return{position:"fixed",zIndex:1e3,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.3)",opacity:e?1:0,MozTransform:e?"":"translate3d(100%, 0, 0)",MsTransform:e?"":"translate3d(100%, 0, 0)",OTransform:e?"":"translate3d(100%, 0, 0)",WebkitTransform:e?"":"translate3d(100%, 0, 0)",transform:e?"":"translate3d(100%, 0, 0)",transition:e?"opacity 0.3s":"opacity 0.3s, transform 0s 0.3s"}},menuWrap:function(e,t,r){return{position:"fixed",right:r?0:"inherit",zIndex:1100,width:t,height:"100%",MozTransform:e?"":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:e?"":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:e?"":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:e?"":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:e?"":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:"all 0.5s"}},menu:function(){return{height:"100%",boxSizing:"border-box",overflow:"auto"}},itemList:function(){return{height:"100%"}},item:function(){return{display:"block"}}},e.exports=t.default},4660:function(e,t){"use strict";function r(){var e=Array.from(document.getElementsByClassName("bm-item")).shift();e&&e.focus()}function n(){var e=Array.from(document.getElementsByClassName("bm-item")).pop();e&&e.focus()}function a(){var e=document.getElementById("react-burger-cross-btn");e&&e.focus()}function o(e){if(document.activeElement.className.includes("bm-item")){var t=document.activeElement[e];t?t.focus():a()}else"previousElementSibling"===e?n():r()}Object.defineProperty(t,"__esModule",{value:!0}),t.focusOnFirstMenuItem=r,t.focusOnLastMenuItem=n,t.focusOnCrossButton=a,t.focusOnMenuButton=function(){var e=document.getElementById("react-burger-menu-btn");e&&e.focus()},t.focusOnMenuItem=o,t.focusOnNextMenuItem=function(){o("nextElementSibling")},t.focusOnPreviousMenuItem=function(){o("previousElementSibling")}},9978:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=void 0;try{e=r(1223)}finally{return e}},e.exports=t.default},2539:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.pxToNum=function(e){return parseInt(e.slice(0,-2),10)}},4126:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(i){a=!0,o=i}finally{try{!n&&l.return&&l.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function o(e){return e&&e.__esModule?e:{default:e}}var s=o(r(7294)),l=(o(r(3935)),o(r(5697))),i=o(r(6661)),u=r(4660),d=o(r(4510)),f=o(r(5430));t.default=function(e){if(!e)throw new Error("No styles supplied");var t="ArrowDown",r="ArrowUp";var o=function(o){var l,c,m=s.default.useState(!1),p=n(m,2),b=p[0],h=p[1],g=s.default.useRef(),v=s.default.useRef({}),y=(l=o.isOpen,c=s.default.useRef(l),s.default.useEffect((function(){c.current=l})),c.current);function O(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];v.current=e,M(),setTimeout((function(){h((function(t){return void 0!==e.isOpen?e.isOpen:!t}))}))}function C(){"function"==typeof o.onClose?o.onClose():O()}function T(e,t){var r=o.width,n=o.right;return e(b,"string"!=typeof r?r+"px":r,n,t)}function x(t,r,n){var s="bm"+t.replace(t.charAt(0),t.charAt(0).toUpperCase()),l=i.default[t]?T(i.default[t]):{};return e[t]&&(l=a({},l,T(e[t],r+1))),o.styles[s]&&(l=a({},l,o.styles[s])),n&&(l=a({},l,n)),o.noTransition&&delete l.transition,l}function w(e,t,r){var n=document.getElementById(e);if(n){var a=T(t);for(var s in a)a.hasOwnProperty(s)&&(n.style[s]=r?a[s]:"");var l=function(e){return e.style["overflow-x"]=r?"hidden":""};o.htmlClassName||l(document.querySelector("html")),o.bodyClassName||l(document.querySelector("body"))}else console.error("Element with ID '"+e+"' not found")}function M(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0],r=function(e,r){return e.classList[t?"add":"remove"](r)};o.htmlClassName&&r(document.querySelector("html"),o.htmlClassName),o.bodyClassName&&r(document.querySelector("body"),o.bodyClassName),e.pageWrap&&o.pageWrapId&&w(o.pageWrapId,e.pageWrap,t),e.outerContainer&&o.outerContainerId&&w(o.outerContainerId,e.outerContainer,t);var n=document.querySelector(".bm-menu-wrap");n&&(t?n.removeAttribute("hidden"):n.setAttribute("hidden",!0))}function k(){g.current&&clearTimeout(g.current)}function N(e){switch((e=e||window.event).key){case"Escape":o.disableCloseOnEsc||(C(),(0,u.focusOnMenuButton)());break;case t:(0,u.focusOnNextMenuItem)();break;case r:(0,u.focusOnPreviousMenuItem)();break;case"Home":(0,u.focusOnFirstMenuItem)();break;case"End":(0,u.focusOnLastMenuItem)()}}function E(e){if((e=e||window.event).target===document.getElementById("react-burger-menu-btn"))switch(e.key){case t:case" ":O();break;case r:O({focusOnLastItem:!0})}}return s.default.useEffect((function(){return o.isOpen&&O({isOpen:!0,noStateChange:!0}),function(){M(!1),k()}}),[]),s.default.useEffect((function(){var t,r;void 0!==o.isOpen&&o.isOpen!==b&&o.isOpen!==y?O():e.svg&&(t=document.getElementById("bm-morph-shape"),r=e.svg.lib(t).select("path"),b?e.svg.animate(r):setTimeout((function(){r.attr("d",e.svg.pathInitial)}),300))})),s.default.useEffect((function(){var e=v.current,t=e.noStateChange,r=e.focusOnLastItem;t||o.onStateChange({isOpen:b}),o.disableAutoFocus||(b?r?(0,u.focusOnLastMenuItem)():(0,u.focusOnFirstMenuItem)():document.activeElement?document.activeElement.blur():document.body.blur()),k(),g.current=setTimeout((function(){g.current=null,b||M(!1)}),500);var n=b?N:E,a=o.customOnKeyDown||n;return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}),[b]),s.default.createElement("div",null,!o.noOverlay&&s.default.createElement("div",{className:("bm-overlay "+o.overlayClassName).trim(),onClick:function(){!0===o.disableOverlayClick||"function"==typeof o.disableOverlayClick&&o.disableOverlayClick()||C()},style:x("overlay")}),!1!==o.customBurgerIcon&&s.default.createElement("div",{style:x("burgerIcon")},s.default.createElement(d.default,{onClick:function(){"function"==typeof o.onOpen?o.onOpen():O()},styles:o.styles,customIcon:o.customBurgerIcon,className:o.burgerButtonClassName,barClassName:o.burgerBarClassName,onIconStateChange:o.onIconStateChange})),s.default.createElement("div",{id:o.id,className:("bm-menu-wrap "+o.className).trim(),style:x("menuWrap"),"aria-hidden":!b},e.svg&&s.default.createElement("div",{id:"bm-morph-shape",className:("bm-morph-shape "+o.morphShapeClassName).trim(),style:x("morphShape")},s.default.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 100 800",preserveAspectRatio:"none"},s.default.createElement("path",{d:e.svg.pathInitial}))),s.default.createElement("div",{className:("bm-menu "+o.menuClassName).trim(),style:x("menu")},s.default.createElement(o.itemListElement,{className:("bm-item-list "+o.itemListClassName).trim(),style:x("itemList")},s.default.Children.map(o.children,(function(e,t){if(e){var r=["bm-item",o.itemClassName,e.props.className].filter((function(e){return!!e})).join(" "),n=a({key:t,className:r,style:x("item",t,e.props.style)},!b&&{tabIndex:-1});return s.default.cloneElement(e,n)}})))),!1!==o.customCrossIcon&&s.default.createElement("div",{style:x("closeButton")},s.default.createElement(f.default,{onClick:C,styles:o.styles,customIcon:o.customCrossIcon,className:o.crossButtonClassName,crossClassName:o.crossClassName,isOpen:b}))))};return o.propTypes={bodyClassName:l.default.string,burgerBarClassName:l.default.string,burgerButtonClassName:l.default.string,className:l.default.string,crossButtonClassName:l.default.string,crossClassName:l.default.string,customBurgerIcon:l.default.oneOfType([l.default.element,l.default.oneOf([!1])]),customCrossIcon:l.default.oneOfType([l.default.element,l.default.oneOf([!1])]),customOnKeyDown:l.default.func,disableAutoFocus:l.default.bool,disableCloseOnEsc:l.default.bool,disableOverlayClick:l.default.oneOfType([l.default.bool,l.default.func]),htmlClassName:l.default.string,id:l.default.string,isOpen:l.default.bool,itemClassName:l.default.string,itemListClassName:l.default.string,itemListElement:l.default.oneOf(["div","nav"]),menuClassName:l.default.string,morphShapeClassName:l.default.string,noOverlay:l.default.bool,noTransition:l.default.bool,onClose:l.default.func,onIconHoverChange:l.default.func,onOpen:l.default.func,onStateChange:l.default.func,outerContainerId:e&&e.outerContainer?l.default.string.isRequired:l.default.string,overlayClassName:l.default.string,pageWrapId:e&&e.pageWrap?l.default.string.isRequired:l.default.string,right:l.default.bool,styles:l.default.object,width:l.default.oneOfType([l.default.number,l.default.string])},o.defaultProps={bodyClassName:"",burgerBarClassName:"",burgerButtonClassName:"",className:"",crossButtonClassName:"",crossClassName:"",disableAutoFocus:!1,disableCloseOnEsc:!1,htmlClassName:"",id:"",itemClassName:"",itemListClassName:"",menuClassName:"",morphShapeClassName:"",noOverlay:!1,noTransition:!1,onStateChange:function(){},outerContainerId:"",overlayClassName:"",pageWrapId:"",styles:{},width:300,onIconHoverChange:function(){},itemListElement:"nav"},o},e.exports=t.default},3414:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(9978)),o=n(r(4126)),s=r(2539),l={svg:{lib:a.default,pathInitial:"M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z",pathOpen:"M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z",animate:function(e){var t=0,r=this.pathOpen.split(";"),n=r.length,a=window.mina;!function o(){t>n-1||(e.animate({path:r[t]},0===t?400:500,0===t?a.easein:a.elastic,(function(){o()})),t++)}()}},morphShape:function(e,t,r){return{position:"absolute",width:"100%",height:"100%",right:r?"inherit":0,left:r?0:"inherit",MozTransform:r?"rotateY(180deg)":"rotateY(0deg)",MsTransform:r?"rotateY(180deg)":"rotateY(0deg)",OTransform:r?"rotateY(180deg)":"rotateY(0deg)",WebkitTransform:r?"rotateY(180deg)":"rotateY(0deg)",transform:r?"rotateY(180deg)":"rotateY(0deg)"}},menuWrap:function(e,t,r){return{MozTransform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:e?"transform 0.4s 0s":"transform 0.4s"}},menu:function(e,t,r){var n=(0,s.pxToNum)(t)-140;return{position:"fixed",MozTransform:e?"":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",MsTransform:e?"":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",OTransform:e?"":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",WebkitTransform:e?"":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",transform:e?"":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",transition:e?"opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)":"opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",opacity:e?1:0}},item:function(e,t,r,n){var a=(0,s.pxToNum)(t)-140;return{MozTransform:e?"translate3d(0, 0, 0)":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",MsTransform:e?"translate3d(0, 0, 0)":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",OTransform:e?"translate3d(0, 0, 0)":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",WebkitTransform:e?"translate3d(0, 0, 0)":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",transform:e?"translate3d(0, 0, 0)":r?"translate3d("+a+", 0, 0)":"translate3d(-"+a+", 0, 0)",transition:e?"opacity 0.3s 0.4s, transform 0.3s 0.4s":"opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",opacity:e?1:0}},closeButton:function(e,t,r){var n=(0,s.pxToNum)(t)-140;return{MozTransform:e?"translate3d(0, 0, 0)":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",MsTransform:e?"translate3d(0, 0, 0)":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",OTransform:e?"translate3d(0, 0, 0)":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",WebkitTransform:e?"translate3d(0, 0, 0)":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",transform:e?"translate3d(0, 0, 0)":r?"translate3d("+n+", 0, 0)":"translate3d(-"+n+", 0, 0)",transition:e?"opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)":"opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",opacity:e?1:0}}};t.default=(0,o.default)(l),e.exports=t.default},2996:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(9978)),o=n(r(4126)),s=r(2539),l={svg:{lib:a.default,pathInitial:"M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z",pathOpen:"M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z",animate:function(e){e.animate({path:this.pathOpen},400,window.mina.easeinout)}},morphShape:function(e,t,r){return{position:"absolute",width:120,height:"100%",right:r?"inherit":0,left:r?0:"inherit",MozTransform:r?"rotateY(180deg)":"",MsTransform:r?"rotateY(180deg)":"",OTransform:r?"rotateY(180deg)":"",WebkitTransform:r?"rotateY(180deg)":"",transform:r?"rotateY(180deg)":""}},menuWrap:function(e,t,r){return{MozTransform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:e?"translate3d(0, 0, 0)":r?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:"all 0.3s"}},menu:function(e,t,r){return{position:"fixed",right:r?0:"inherit",width:(0,s.pxToNum)(t)-120,whiteSpace:"nowrap",boxSizing:"border-box",overflow:"visible"}},itemList:function(e,t,r){if(r)return{position:"relative",left:"-110px",width:"170%",overflow:"auto"}},pageWrap:function(e,t,r){return{MozTransform:e?"":r?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",MsTransform:e?"":r?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",OTransform:e?"":r?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",WebkitTransform:e?"":r?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",transform:e?"":r?"translate3d(-100px, 0, 0)":"translate3d(100px, 0, 0)",transition:e?"all 0.3s":"all 0.3s 0.1s"}},outerContainer:function(e){return{overflow:e?"":"hidden"}}};t.default=(0,o.default)(l),e.exports=t.default},5576:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(4126),o=(n=a)&&n.__esModule?n:{default:n};t.default=(0,o.default)({menuWrap:function(e){return{MozTransform:e?"":"translate3d(0, -100%, 0)",MsTransform:e?"":"translate3d(0, -100%, 0)",OTransform:e?"":"translate3d(0, -100%, 0)",WebkitTransform:e?"":"translate3d(0, -100%, 0)",transform:e?"":"translate3d(0, -100%, 0)",transition:"all 0.5s ease-in-out"}},pageWrap:function(e,t,r){return{MozTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",MsTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",OTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",WebkitTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",transform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",transition:"all 0.5s"}},outerContainer:function(e){return{perspective:"1500px",perspectiveOrigin:"0% 50%",overflow:e?"":"hidden"}}}),e.exports=t.default},3976:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(4126),o=(n=a)&&n.__esModule?n:{default:n};t.default=(0,o.default)({pageWrap:function(e,t,r){return{MozTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",MsTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",OTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",WebkitTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",transform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",transition:"all 0.5s"}},outerContainer:function(e){return{overflow:e?"":"hidden"}}}),e.exports=t.default},8796:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(4126),o=(n=a)&&n.__esModule?n:{default:n};t.default=(0,o.default)({pageWrap:function(e,t,r){return{MozTransform:e?"":r?"translate3d(-"+t+", 0, 0) rotateY(15deg)":"translate3d("+t+", 0, 0) rotateY(-15deg)",MsTransform:e?"":r?"translate3d(-"+t+", 0, 0) rotateY(15deg)":"translate3d("+t+", 0, 0) rotateY(-15deg)",OTransform:e?"":r?"translate3d(-"+t+", 0, 0) rotateY(15deg)":"translate3d("+t+", 0, 0) rotateY(-15deg)",WebkitTransform:e?"":r?"translate3d(-"+t+", 0, 0) rotateY(15deg)":"translate3d("+t+", 0, 0) rotateY(-15deg)",transform:e?"":r?"translate3d(-"+t+", 0, 0) rotateY(15deg)":"translate3d("+t+", 0, 0) rotateY(-15deg)",transformOrigin:r?"100% 50%":"0% 50%",transformStyle:"preserve-3d",transition:"all 0.5s"}},outerContainer:function(e){return{perspective:"1500px",overflow:e?"":"hidden"}}}),e.exports=t.default},6523:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(4126),o=(n=a)&&n.__esModule?n:{default:n};t.default=(0,o.default)({menuWrap:function(e,t,r){return{MozTransform:"translate3d(0, 0, 0)",MsTransform:"translate3d(0, 0, 0)",OTransform:"translate3d(0, 0, 0)",WebkitTransform:"translate3d(0, 0, 0)",transform:"translate3d(0, 0, 0)",zIndex:e?1e3:-1}},overlay:function(e,t,r){return{zIndex:1400,MozTransform:e?r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)":"translate3d(0, 0, 0)",MsTransform:e?r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)":"translate3d(0, 0, 0)",OTransform:e?r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)":"translate3d(0, 0, 0)",WebkitTransform:e?r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)":"translate3d(0, 0, 0)",transform:e?r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)":"translate3d(0, 0, 0)",transition:"all 0.5s",visibility:e?"visible":"hidden"}},pageWrap:function(e,t,r){return{MozTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",MsTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",OTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",WebkitTransform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",transform:e?"":r?"translate3d(-"+t+", 0, 0)":"translate3d("+t+", 0, 0)",transition:"all 0.5s",zIndex:1200,position:"relative"}},burgerIcon:function(e,t,r){return{MozTransform:e?r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)":"translate3d(0, 0, 0)",MsTransform:e?r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)":"translate3d(0, 0, 0)",OTransform:e?r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)":"translate3d(0, 0, 0)",WebkitTransform:e?r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)":"translate3d(0, 0, 0)",transform:e?r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)":"translate3d(0, 0, 0)",transition:"all 0.1s",position:"relative",zIndex:1300}},outerContainer:function(e){return{overflow:e?"":"hidden"}}}),e.exports=t.default},9070:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(4126),o=(n=a)&&n.__esModule?n:{default:n};t.default=(0,o.default)({pageWrap:function(e,t){return{MozTransform:e?"":"translate3d(0, 0, -"+t+")",MsTransform:e?"":"translate3d(0, 0, -"+t+")",OTransform:e?"":"translate3d(0, 0, -"+t+")",WebkitTransform:e?"":"translate3d(0, 0, -"+t+")",transform:e?"":"translate3d(0, 0, -"+t+")",transformOrigin:"100%",transformStyle:"preserve-3d",transition:"all 0.5s"}},outerContainer:function(){return{perspective:"1500px"}}}),e.exports=t.default},6001:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(4126),o=(n=a)&&n.__esModule?n:{default:n};t.default=(0,o.default)({pageWrap:function(e,t,r){return{MozTransform:e?"":r?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",MsTransform:e?"":r?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",OTransform:e?"":r?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",WebkitTransform:e?"":r?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",transform:e?"":r?"translate3d(-100px, 0, -600px) rotateY(20deg)":"translate3d(100px, 0, -600px) rotateY(-20deg)",transformStyle:"preserve-3d",transition:"all 0.5s",overflow:e?"":"hidden"}},outerContainer:function(e){return{perspective:"1500px",overflow:e?"":"hidden"}}}),e.exports=t.default},6432:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(4126),o=(n=a)&&n.__esModule?n:{default:n};t.default=(0,o.default)({}),e.exports=t.default},7277:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(4126),o=(n=a)&&n.__esModule?n:{default:n};t.default=(0,o.default)({menuWrap:function(e,t,r){return{MozTransform:e?"":r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)",MsTransform:e?"":r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)",OTransform:e?"":r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)",WebkitTransform:e?"":r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)",transform:e?"":r?"translate3d("+t+", 0, 0)":"translate3d(-"+t+", 0, 0)",transition:e?"transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)":"transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)"}},item:function(e,t,r,n){return{MozTransform:e?"":"translate3d(0, "+500*n+"px, 0)",MsTransform:e?"":"translate3d(0, "+500*n+"px, 0)",OTransform:e?"":"translate3d(0, "+500*n+"px, 0)",WebkitTransform:e?"":"translate3d(0, "+500*n+"px, 0)",transform:e?"":"translate3d(0, "+500*n+"px, 0)",transition:e?"transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)":"transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)"}}}),e.exports=t.default}}]);
//# sourceMappingURL=74093d8a7124b8bf4e33d5945e98d35fd457f344-514080f2f119c5f06943.js.map