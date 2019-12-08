(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{241:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_reorder",(function(){return c})),r.d(e,"ion_reorder_group",(function(){return d}));var n=r(16),o=r(42),l=(r(5),r(276)),c=function(){function t(t){Object(o.l)(this,t)}return t.prototype.onClick=function(t){t.preventDefault(),t.stopImmediatePropagation()},t.prototype.render=function(){return Object(o.i)(o.a,{class:Object(o.e)(this)},Object(o.i)("slot",null,Object(o.i)("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"})))},Object.defineProperty(t,"style",{get:function(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:31px;opacity:.3}"},enumerable:!0,configurable:!0}),t}(),d=function(){function t(t){Object(o.l)(this,t),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=Object(o.d)(this,"ionItemReorder",7)}return t.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.connectedCallback=function(){return Object(n.a)(this,void 0,void 0,(function(){var t,e,o,l=this;return Object(n.c)(this,(function(n){switch(n.label){case 0:return(t=this.el.closest("ion-content"))?(e=this,[4,t.getScrollElement()]):[3,2];case 1:e.scrollEl=n.sent(),n.label=2;case 2:return o=this,[4,r.e(1).then(r.bind(null,271))];case 3:return o.gesture=n.sent().createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(t){return l.canStart(t)},onStart:function(t){return l.onStart(t)},onMove:function(t){return l.onMove(t)},onEnd:function(){return l.onEnd()}}),this.disabledChanged(),[2]}}))}))},t.prototype.disconnectedCallback=function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.complete=function(t){return Promise.resolve(this.completeSync(t))},t.prototype.canStart=function(t){if(this.selectedItemEl||0!==this.state)return!1;var e=t.event.target.closest("ion-reorder");if(!e)return!1;var r=f(e,this.el);return!!r&&(t.data=r,!0)},t.prototype.onStart=function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data,r=this.cachedHeights;r.length=0;var n=this.el,o=n.children;if(o&&0!==o.length){for(var c=0,i=0;i<o.length;i++){var d=o[i];c+=d.offsetHeight,r.push(c),d.$ionIndex=i}var f=n.getBoundingClientRect();if(this.containerTop=f.top,this.containerBottom=f.bottom,this.scrollEl){var v=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=v.top+m,this.scrollElBottom=v.bottom-m}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=h(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(y),Object(l.a)()}},t.prototype.onMove=function(t){var e=this.selectedItemEl;if(e){var r=this.autoscroll(t.currentY),n=this.containerTop-r,o=this.containerBottom-r,c=Math.max(n,Math.min(t.currentY,o)),d=r+c-t.startY,f=c-n,m=this.itemIndexForTop(f);if(m!==this.lastToIndex){var v=h(e);this.lastToIndex=m,Object(l.b)(),this.reorderMove(v,m)}e.style.transform="translateY("+d+"px)"}},t.prototype.onEnd=function(){var t=this.selectedItemEl;if(this.state=2,t){var e=this.lastToIndex,r=h(t);e===r?this.completeSync():this.ionItemReorder.emit({from:r,to:e,complete:this.completeSync.bind(this)}),Object(l.c)()}else this.state=0},t.prototype.completeSync=function(t){var e=this.selectedItemEl;if(e&&2===this.state){var r=this.el.children,n=r.length,o=this.lastToIndex,l=h(e);if(o!==l&&(!t||!0===t)){var c=l<o?r[o+1]:r[o];this.el.insertBefore(e,c)}Array.isArray(t)&&(t=E(t,l,o));for(var i=0;i<n;i++)r[i].style.transform="";e.style.transition="",e.classList.remove(y),this.selectedItemEl=void 0,this.state=0}return t},t.prototype.itemIndexForTop=function(t){var e=this.cachedHeights,i=0;for(i=0;i<e.length&&!(e[i]>t);i++);return i},t.prototype.reorderMove=function(t,e){for(var r=this.selectedItemHeight,n=this.el.children,i=0;i<n.length;i++){var o="";i>t&&i<=e?o="translateY("+-r+"px)":i<t&&i>=e&&(o="translateY("+r+"px)"),n[i].style.transform=o}},t.prototype.autoscroll=function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-v:t>this.scrollElBottom&&(e=v),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial},t.prototype.render=function(){var t,e=Object(o.e)(this);return Object(o.i)(o.a,{class:(t={},t[e]=!0,t["reorder-enabled"]=!this.disabled,t["reorder-list-active"]=0!==this.state,t)})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"},enumerable:!0,configurable:!0}),t}(),h=function(element){return element.$ionIndex},f=function(t,e){for(var r;t;){if((r=t.parentElement)===e)return t;t=r}},m=60,v=10,y="reorder-selected",E=function(t,e,r){var element=t[e];return t.splice(e,1),t.splice(r,0,element),t.slice()}},276:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return c})),r.d(e,"d",(function(){return n}));var n=function(){var t=window.TapticEngine;t&&t.selection()},o=function(){var t=window.TapticEngine;t&&t.gestureSelectionStart()},l=function(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()},c=function(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}}}]);