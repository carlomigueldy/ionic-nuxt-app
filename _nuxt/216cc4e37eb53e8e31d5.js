(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_popover",(function(){return j}));var r=n(16),o=n(42),c=(n(5),n(267),n(273)),l=(n(272),n(268)),d=n(266),f=n(274),v=n(275),m=function(e,t){var n="top",r="left",o=e.querySelector(".popover-content"),l=o.getBoundingClientRect(),d=l.width,f=l.height,v=e.ownerDocument.defaultView.innerWidth,m=e.ownerDocument.defaultView.innerHeight,y=t&&t.target&&t.target.getBoundingClientRect(),w=null!=y&&"top"in y?y.top:m/2-f/2,O=null!=y&&"left"in y?y.left:v/2,j=y&&y.width||0,x=y&&y.height||0,E=e.querySelector(".popover-arrow"),D=E.getBoundingClientRect(),k=D.width,P=D.height;null==y&&(E.style.display="none");var S={top:w+x,left:O+j/2-k/2},A={top:w+x+(P-1),left:O+j/2-d/2},L=!1,T=!1;A.left<h+25?(L=!0,A.left=h):d+h+A.left+25>v&&(T=!0,A.left=v-d-h,r="right"),w+x+f>m&&w-f>0?(S.top=w-(P+1),A.top=w-f-(P-1),e.className=e.className+" popover-bottom",n="bottom"):w+x+f>m&&(o.style.bottom=h+"%"),E.style.top=S.top+"px",E.style.left=S.left+"px",o.style.top=A.top+"px",o.style.left=A.left+"px",L&&(o.style.left="calc("+A.left+"px + var(--ion-safe-area-left, 0px))"),T&&(o.style.left="calc("+A.left+"px - var(--ion-safe-area-right, 0px))"),o.style.transformOrigin=n+" "+r;var C=Object(c.a)(),W=Object(c.a)(),B=Object(c.a)();return W.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.08),B.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),C.addElement(e).easing("ease").duration(100).addAnimation([W,B])},h=5,y=function(e){var t=Object(c.a)(),n=Object(c.a)(),r=Object(c.a)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.08,0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([n,r])},w=function(e,t){var n=e.ownerDocument,r="rtl"===n.dir,o="top",l=r?"right":"left",d=e.querySelector(".popover-content"),f=d.getBoundingClientRect(),v=f.width,m=f.height,h=n.defaultView.innerWidth,y=n.defaultView.innerHeight,w=t&&t.target&&t.target.getBoundingClientRect(),O=null!=w&&"bottom"in w?w.bottom:y/2-m/2,j=null!=w&&"left"in w?r?w.left-v+w.width:w.left:h/2-v/2,x=w&&w.height||0,E={top:O,left:j};E.left<12?(E.left=12,l="left"):v+12+E.left>h&&(E.left=h-v-12,l="right"),O+x+m>y&&O-m>0?(E.top=O-m-x,e.className=e.className+" popover-bottom",o="bottom"):O+x+m>y&&(d.style.bottom="12px");var D=Object(c.a)(),k=Object(c.a)(),P=Object(c.a)(),S=Object(c.a)(),A=Object(c.a)();return k.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),P.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),S.addElement(d).beforeStyles({top:E.top+"px",left:E.left+"px","transform-origin":o+" "+l}).fromTo("transform","scale(0.001)","scale(1)"),A.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),D.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([k,P,S,A])},O=function(e){var t=Object(c.a)(),n=Object(c.a)(),r=Object(c.a)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([n,r])},j=function(){function e(e){var t=this;Object(o.l)(this,e),this.presented=!1,this.mode=Object(o.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onBackdropTap=function(){t.dismiss(void 0,l.a)},this.onLifecycle=function(e){var n=t.usersElement,r=x[e.type];if(n&&r){var o=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});n.dispatchEvent(o)}},Object(l.e)(this.el),this.didPresent=Object(o.d)(this,"ionPopoverDidPresent",7),this.willPresent=Object(o.d)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(o.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(o.d)(this,"ionPopoverDidDismiss",7)}return e.prototype.present=function(){return Object(r.a)(this,void 0,void 0,(function(){var e,data,t;return Object(r.c)(this,(function(n){switch(n.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return data=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),t=this,[4,Object(f.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],data)];case 1:return t.usersElement=n.sent(),[4,Object(v.a)(this.usersElement)];case 2:return n.sent(),[2,Object(l.f)(this,"popoverEnter",m,w,this.event)]}}))}))},e.prototype.dismiss=function(data,e){return Object(r.a)(this,void 0,void 0,(function(){var t;return Object(r.c)(this,(function(n){switch(n.label){case 0:return[4,Object(l.g)(this,data,e,"popoverLeave",y,O,this.event)];case 1:return(t=n.sent())?[4,Object(f.b)(this.delegate,this.usersElement)]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2,t]}}))}))},e.prototype.onDidDismiss=function(){return Object(l.h)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(l.h)(this.el,"ionPopoverWillDismiss")},e.prototype.render=function(){var e,t=Object(o.e)(this),n=this.onLifecycle;return Object(o.i)(o.a,{"aria-modal":"true","no-router":!0,style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(d.b)(this.cssClass)),(e={},e[t]=!0,e["popover-translucent"]=this.translucent,e)),onIonPopoverDidPresent:n,onIonPopoverWillPresent:n,onIonPopoverWillDismiss:n,onIonPopoverDidDismiss:n,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(o.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(o.i)("div",{class:"popover-wrapper"},Object(o.i)("div",{class:"popover-arrow"}),Object(o.i)("div",{class:"popover-content"})))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"},enumerable:!0,configurable:!0}),e}(),x={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return f}));var r=n(16),o=function(e,t){return null!==t.closest(e)},c=function(e){var t;return"string"==typeof e&&e.length>0?((t={"ion-color":!0})["ion-color-"+e]=!0,t):void 0},l=function(e){var map={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return map[e]=!0})),map},d=/^[a-z][a-z0-9+\-.]*:/,f=function(e,t,n){return Object(r.a)(void 0,void 0,void 0,(function(){var o;return Object(r.c)(this,(function(r){return null!=e&&"#"!==e[0]&&!d.test(e)&&(o=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,o.push(e,n)]):[2,!1]}))}))}},267:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return w})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return y})),n.d(t,"i",(function(){return m})),n.d(t,"j",(function(){return h})),n.d(t,"k",(function(){return o}));var r=n(16),o=function(e){return"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e)},c=function(e){return!!e.shadowRoot&&!!e.attachShadow},l=function(e){var t=e.closest("ion-item");return t?t.querySelector("ion-label"):null},d=function(e,t,n,r,o){if(e||c(t)){var input=t.querySelector("input.aux-input");input||((input=t.ownerDocument.createElement("input")).type="hidden",input.classList.add("aux-input"),t.appendChild(input)),input.disabled=o,input.name=n,input.value=r||""}},f=function(e,t,n){return Math.max(e,Math.min(t,n))},v=function(e,t){if(!e){var n="ASSERT: "+t;throw console.error(n),new Error(n)}},m=function(e){return e.timeStamp||Date.now()},h=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},y=function(e){var t="rtl"===document.dir;switch(e){case"start":return t;case"end":return!t;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}},w=function(e,t){var n=e._original||e;return{_original:e,emit:O(n.emit.bind(n),t)}},O=function(e,t){var n;return void 0===t&&(t=0),function(){for(var o=[],c=0;c<arguments.length;c++)o[c]=arguments[c];clearTimeout(n),n=setTimeout.apply(void 0,Object(r.d)([e,t],o))}}},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return W})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return x})),n.d(t,"g",(function(){return E})),n.d(t,"h",(function(){return P})),n.d(t,"i",(function(){return y})),n.d(t,"j",(function(){return A})),n.d(t,"k",(function(){return O})),n.d(t,"l",(function(){return j})),n.d(t,"m",(function(){return v})),n.d(t,"n",(function(){return C}));var r=n(16),o=n(5),c=0,l=function(e){return{create:function(t){return y(e,t)},dismiss:function(data,t,n){return O(document,data,t,e,n)},getTop:function(){return Object(r.a)(this,void 0,void 0,(function(){return Object(r.c)(this,(function(t){return[2,j(document,e)]}))}))}}},d=l("ion-alert"),f=l("ion-action-sheet"),v=l("ion-picker"),m=l("ion-popover"),h=function(e){var t=document;w(t);var n=c++;e.overlayIndex=n,e.hasAttribute("id")||(e.id="ion-overlay-"+n)},y=function(e,t){return customElements.whenDefined(e).then((function(){var n=document,element=n.createElement(e);return element.classList.add("overlay-hidden"),Object.assign(element,t),D(n).appendChild(element),element.componentOnReady()}))},w=function(e){0===c&&(c=1,e.addEventListener("focusin",(function(t){var n=j(e);if(n&&n.backdropDismiss&&!L(n,t.target)){var r=n.querySelector("input,button");r&&r.focus()}})),e.addEventListener("ionBackButton",(function(t){var n=j(e);n&&n.backdropDismiss&&t.detail.register(100,(function(){return n.dismiss(void 0,W)}))})),e.addEventListener("keyup",(function(t){if("Escape"===t.key){var n=j(e);n&&n.backdropDismiss&&n.dismiss(void 0,W)}})))},O=function(e,data,t,n,r){var o=j(e,n,r);return o?o.dismiss(data,t):Promise.reject("overlay does not exist")},j=function(e,t,n){var r=function(e,t){return void 0===t&&(t="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(e.querySelectorAll(t)).filter((function(e){return e.overlayIndex>0}))}(e,t);return void 0===n?r[r.length-1]:r.find((function(e){return e.id===n}))},x=function(e,t,n,c,l){return Object(r.a)(void 0,void 0,void 0,(function(){var d;return Object(r.c)(this,(function(r){switch(r.label){case 0:return e.presented?[2]:(e.presented=!0,e.willPresent.emit(),d=e.enterAnimation?e.enterAnimation:o.b.get(t,"ios"===e.mode?n:c),[4,k(e,d,e.el,l)]);case 1:return r.sent()&&e.didPresent.emit(),[2]}}))}))},E=function(e,data,t,n,c,l,d){return Object(r.a)(void 0,void 0,void 0,(function(){var f,v;return Object(r.c)(this,(function(r){switch(r.label){case 0:if(!e.presented)return[2,!1];e.presented=!1,r.label=1;case 1:return r.trys.push([1,3,,4]),e.willDismiss.emit({data:data,role:t}),f=e.leaveAnimation?e.leaveAnimation:o.b.get(n,"ios"===e.mode?c:l),[4,k(e,f,e.el,d)];case 2:return r.sent(),e.didDismiss.emit({data:data,role:t}),[3,4];case 3:return v=r.sent(),console.error(v),[3,4];case 4:return e.el.remove(),[2,!0]}}))}))},D=function(e){return e.querySelector("ion-app")||e.body},k=function(e,t,c,l){return Object(r.a)(void 0,void 0,void 0,(function(){var d,f,v,m,h;return Object(r.c)(this,(function(r){switch(r.label){case 0:if(e.animation)return e.animation.destroy(),e.animation=void 0,[2,!1];c.classList.remove("overlay-hidden"),d=c.shadowRoot||e.el,v=!0,r.label=1;case 1:return r.trys.push([1,4,,5]),[4,n.e(6).then(n.bind(null,269))];case 2:return[4,r.sent().create(t,d,l)];case 3:return f=r.sent(),[3,5];case 4:return r.sent(),(f=t(d,l)).fill("both"),v=!1,[3,5];case 5:return e.animation=f,e.animated&&o.b.getBoolean("animated",!0)||f.duration(0),e.keyboardClose&&f.beforeAddWrite((function(){var e=c.ownerDocument.activeElement;e&&e.matches("input, ion-input, ion-textarea")&&e.blur()})),[4,f.playAsync()];case 6:return m=r.sent(),h=void 0===m||f.hasCompleted,v&&f.destroy(),e.animation=void 0,[2,h]}}))}))},P=function(element,e){var t,n=new Promise((function(e){return t=e}));return S(element,e,(function(e){t(e.detail)})),n},S=function(element,e,t){var n=function(r){element.removeEventListener(e,n),t(r)};element.addEventListener(e,n)},A=function(e){return"cancel"===e||e===W},L=function(e,t){for(;t;){if(t===e)return!0;t=t.parentElement}return!1},T=function(e){return e()},C=function(e,t){if("function"==typeof e)return o.b.get("_zoneGate",T)((function(){try{return e(t)}catch(e){console.error(e)}}))},W="backdrop"},272:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return d}));var r="ionViewWillEnter",o="ionViewDidEnter",c="ionViewWillLeave",l="ionViewDidLeave",d="ionViewWillUnload"},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var r=n(16),o=function(e,t,component,n,o){return Object(r.a)(void 0,void 0,void 0,(function(){var c;return Object(r.c)(this,(function(r){switch(r.label){case 0:if(e)return[2,e.attachViewToDom(t,component,o,n)];if("string"!=typeof component&&!(component instanceof HTMLElement))throw new Error("framework delegate is missing");return c="string"==typeof component?t.ownerDocument&&t.ownerDocument.createElement(component):component,n&&n.forEach((function(e){return c.classList.add(e)})),o&&Object.assign(c,o),t.appendChild(c),c.componentOnReady?[4,c.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,c]}}))}))},c=function(e,element){if(element){if(e){var t=element.parentElement;return e.removeViewFromDom(t,element)}element.remove()}return Promise.resolve()}},275:function(e,t,n){"use strict";n.d(t,"a",(function(){return P})),n.d(t,"b",(function(){return L})),n.d(t,"c",(function(){return D})),n.d(t,"d",(function(){return S})),n.d(t,"e",(function(){return l}));var r=n(16),o=n(42),c=n(272),l=function(e){return new Promise((function(t,n){Object(o.m)((function(){d(e),f(e).then((function(n){n.animation&&n.animation.destroy(),v(e),t(n)}),(function(t){v(e),n(t)}))}))}))},d=function(e){var t=e.enteringEl,n=e.leavingEl;A(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),S(t,!1),n&&S(n,!1)},f=function(e){return Object(r.a)(void 0,void 0,void 0,(function(){var t;return Object(r.c)(this,(function(n){switch(n.label){case 0:return[4,m(e)];case 1:return t=n.sent(),[2,t?h(t,e):y(e)]}}))}))},v=function(e){var t=e.enteringEl,n=e.leavingEl;t.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},m=function(e){return Object(r.a)(void 0,void 0,void 0,(function(){var t;return Object(r.c)(this,(function(r){switch(r.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,Promise.all([n.e(0),n.e(96)]).then(n.bind(null,279))]:[2,void 0];case 1:return t=r.sent().iosTransitionAnimation,[3,4];case 2:return[4,Promise.all([n.e(0),n.e(97)]).then(n.bind(null,280))];case 3:t=r.sent().mdTransitionAnimation,r.label=4;case 4:return[2,t]}}))}))},h=function(e,t){return Object(r.a)(void 0,void 0,void 0,(function(){var o,c;return Object(r.c)(this,(function(r){switch(r.label){case 0:return[4,w(t,!0)];case 1:r.sent(),r.label=2;case 2:return r.trys.push([2,5,,6]),[4,n.e(6).then(n.bind(null,269))];case 3:return[4,r.sent().create(e,t.baseEl,t)];case 4:return o=r.sent(),[3,6];case 5:return r.sent(),o=e(t.baseEl,t),[3,6];case 6:return x(t.enteringEl,t.leavingEl),[4,j(o,t)];case 7:return c=r.sent(),t.progressCallback&&t.progressCallback(void 0),c&&E(t.enteringEl,t.leavingEl),[2,{hasCompleted:c,animation:o}]}}))}))},y=function(e){return Object(r.a)(void 0,void 0,void 0,(function(){var t,n;return Object(r.c)(this,(function(r){switch(r.label){case 0:return t=e.enteringEl,n=e.leavingEl,[4,w(e,!1)];case 1:return r.sent(),x(t,n),E(t,n),[2,{hasCompleted:!0}]}}))}))},w=function(e,t){return Object(r.a)(void 0,void 0,void 0,(function(){var n,o;return Object(r.c)(this,(function(r){switch(r.label){case 0:return n=void 0!==e.deepWait?e.deepWait:t,o=n?[P(e.enteringEl),P(e.leavingEl)]:[k(e.enteringEl),k(e.leavingEl)],[4,Promise.all(o)];case 1:return r.sent(),[4,O(e.viewIsReady,e.enteringEl)];case 2:return r.sent(),[2]}}))}))},O=function(e,t){return Object(r.a)(void 0,void 0,void 0,(function(){return Object(r.c)(this,(function(n){switch(n.label){case 0:return e?[4,e(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))},j=function(e,t){var n=t.progressCallback,r=new Promise((function(t){e.onFinish((function(n){"number"==typeof n?t(1===n):void 0!==e.hasCompleted&&t(e.hasCompleted)}))}));return n?(e.progressStart(!0),n(e)):e.play(),r},x=function(e,t){D(t,c.c),D(e,c.a)},E=function(e,t){D(e,c.b),D(t,c.d)},D=function(e,t){if(e){var n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}},k=function(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()},P=function(e){return Object(r.a)(void 0,void 0,void 0,(function(){var element;return Object(r.c)(this,(function(t){switch(t.label){case 0:return(element=e)?null==element.componentOnReady?[3,2]:[4,element.componentOnReady()]:[3,4];case 1:if(null!=t.sent())return[2];t.label=2;case 2:return[4,Promise.all(Array.from(element.children).map(P))];case 3:t.sent(),t.label=4;case 4:return[2]}}))}))},S=function(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},A=function(e,t,n){void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")},L=function(element){if(element.classList.contains("ion-page"))return element;var e=element.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return e||element}}}]);