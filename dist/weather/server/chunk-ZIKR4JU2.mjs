import './polyfills.server.mjs';
import{$ as w,Dc as mt,Fa as rt,Fb as v,Hb as y,Hc as ft,Ic as U,Ja as ct,Ka as lt,La as ut,Lc as j,Ma as ht,Mb as G,Mc as N,Nc as W,Pa as r,Qa as _,W as C,Wa as Z,Wb as E,_ as nt,_a as D,aa as p,bb as O,ca as k,cb as l,db as A,f as g,fb as m,fc as q,ga as P,ha as V,kb as d,lb as f,lc as J,mb as S,na as ot,nb as $,ob as z,pb as K,ra as M,rb as dt,tb as R,tc as pt,ub as h,ya as at,za as L}from"./chunk-YDHRK2YT.mjs";import{a,b as u}from"./chunk-VVCT4QZE.mjs";var vt=Symbol("STATE_SIGNAL");function b(s,...n){s[vt].update(e=>n.reduce((t,i)=>a(a({},t),typeof i=="function"?i(t):i),e))}function gt(s){let n=ht(()=>s());return Dt(n)?new Proxy(s,{get(e,t){return t in n?(ct(e[t])||Object.defineProperty(e,t,{value:lt(()=>e()[t]),configurable:!0}),gt(e[t])):e[t]}}):s}function Dt(s){return s?.constructor===Object}function Tt(s){let n=ut(s),e=gt(n.asReadonly());return Object.defineProperty(e,vt,{value:n}),e}var te=(()=>{let n=class n{constructor(){this.apiKey="FS9etrBst86DERXJcqAuzJDSMq3EFgid",this.http=p(pt),this.wsState=Tt({id:"",city:"",temp:"",weatherText:"",img:"",favorites:[],favorite:!1,forecast:[]}),this.favoritesArr=[]}getLocation(t){return t=t.replaceAll(" ","%20"),this.http.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${t}`)}getCurrentConditions(t){return this.http.get(`https://dataservice.accuweather.com/currentconditions/v1/${t}?apikey=${this.apiKey}`)}setLocationKey(t,i){b(this.wsState,o=>u(a({},o),{id:t,city:i}))}setCurrentConditions(t,i,o){b(this.wsState,c=>u(a({},c),{id:t,city:i,temp:o.Temperature.Metric.Value,weatherText:o.WeatherText,img:`https://www.accuweather.com/images/weathericons/${o.WeatherIcon}.svg`}))}getForecast(t){return this.http.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${t}?metric=true&apikey=${this.apiKey}`)}setForecast(t){b(this.wsState,i=>u(a({},i),{forecast:t}))}addToFavorite(t){this.wsState.favorites().length?this.wsState.favorites().find(o=>o.id===t)||this.favoritesArr.push({id:t,city:this.wsState.city(),temp:this.wsState.temp(),img:this.wsState.img()}):this.favoritesArr.push({id:t,city:this.wsState.city(),temp:this.wsState.temp(),img:this.wsState.img()}),b(this.wsState,i=>u(a({},i),{favorite:!0,favorites:this.favoritesArr}))}removeFromFavorite(t){if(!this.wsState.favorites())return;let i=this.wsState.favorites().findIndex(o=>o.id===t);this.favoritesArr.splice(i,1),b(this.wsState,o=>u(a({},o),{favorite:!1,favorites:this.favoritesArr}))}isFavorite(t){let o=!!this.wsState.favorites().find(c=>c.id===t);b(this.wsState,c=>u(a({},c),{favorite:o}))}};n.\u0275fac=function(i){return new(i||n)},n.\u0275prov=C({token:n,factory:n.\u0275fac,providedIn:"root"});let s=n;return s})();var _t=["toast-component",""];function At(s,n){if(s&1){let e=K();d(0,"button",5),R("click",function(){P(e);let i=h();return V(i.remove())}),d(1,"span",6),v(2,"\xD7"),f()()}}function St(s,n){if(s&1&&($(0),v(1),z()),s&2){let e=h(2);r(),y("[",e.duplicatesCount+1,"]")}}function Rt(s,n){if(s&1&&(d(0,"div"),v(1),D(2,St,2,1,"ng-container",4),f()),s&2){let e=h();m(e.options.titleClass),O("aria-label",e.title),r(),y(" ",e.title," "),r(),l("ngIf",e.duplicatesCount)}}function Ht(s,n){if(s&1&&S(0,"div",7),s&2){let e=h();m(e.options.messageClass),l("innerHTML",e.message,L)}}function Mt(s,n){if(s&1&&(d(0,"div",8),v(1),f()),s&2){let e=h();m(e.options.messageClass),O("aria-label",e.message),r(),y(" ",e.message," ")}}function Et(s,n){if(s&1&&(d(0,"div"),S(1,"div",9),f()),s&2){let e=h();r(),A("width",e.width+"%")}}function jt(s,n){if(s&1){let e=K();d(0,"button",5),R("click",function(){P(e);let i=h();return V(i.remove())}),d(1,"span",6),v(2,"\xD7"),f()()}}function Nt(s,n){if(s&1&&($(0),v(1),z()),s&2){let e=h(2);r(),y("[",e.duplicatesCount+1,"]")}}function Ft(s,n){if(s&1&&(d(0,"div"),v(1),D(2,Nt,2,1,"ng-container",4),f()),s&2){let e=h();m(e.options.titleClass),O("aria-label",e.title),r(),y(" ",e.title," "),r(),l("ngIf",e.duplicatesCount)}}function Bt(s,n){if(s&1&&S(0,"div",7),s&2){let e=h();m(e.options.messageClass),l("innerHTML",e.message,L)}}function kt(s,n){if(s&1&&(d(0,"div",8),v(1),f()),s&2){let e=h();m(e.options.messageClass),O("aria-label",e.message),r(),y(" ",e.message," ")}}function Pt(s,n){if(s&1&&(d(0,"div"),S(1,"div",9),f()),s&2){let e=h();r(),A("width",e.width+"%")}}var X=class{_attachedHost;component;viewContainerRef;injector;constructor(n,e){this.component=n,this.injector=e}attach(n,e){return this._attachedHost=n,n.attach(this,e)}detach(){let n=this._attachedHost;if(n)return this._attachedHost=void 0,n.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Q=class{_attachedPortal;_disposeFn;attach(n,e){return this._attachedPortal=n,this.attachComponentPortal(n,e)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(n){this._disposeFn=n}},Y=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new g;_activate=new g;_manualClose=new g;_resetTimeout=new g;_countDuplicate=new g;constructor(n){this._overlayRef=n}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(n,e){n&&this._resetTimeout.next(),e&&this._countDuplicate.next(++this.duplicatesCount)}},I=class{toastId;config;message;title;toastType;toastRef;_onTap=new g;_onAction=new g;constructor(n,e,t,i,o,c){this.toastId=n,this.config=e,this.message=t,this.title=i,this.toastType=o,this.toastRef=c,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(n){this._onAction.next(n)}onAction(){return this._onAction.asObservable()}},yt={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},bt=new nt("ToastConfig"),tt=class extends Q{_hostDomElement;_componentFactoryResolver;_appRef;constructor(n,e,t){super(),this._hostDomElement=n,this._componentFactoryResolver=e,this._appRef=t}attachComponentPortal(n,e){let t=this._componentFactoryResolver.resolveComponentFactory(n.component),i;return i=t.create(n.injector),this._appRef.attachView(i.hostView),this.setDisposeFn(()=>{this._appRef.detachView(i.hostView),i.destroy()}),e?this._hostDomElement.insertBefore(this._getComponentRootNode(i),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(i)),i}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},Vt=(()=>{class s{_document=p(q);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=this._document.createElement("div");e.classList.add("overlay-container"),e.setAttribute("aria-live","polite"),this._document.body.appendChild(e),this._containerElement=e}static \u0275fac=function(t){return new(t||s)};static \u0275prov=C({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),et=class{_portalHost;constructor(n){this._portalHost=n}attach(n,e=!0){return this._portalHost.attach(n,e)}detach(){return this._portalHost.detach()}},Lt=(()=>{class s{_overlayContainer=p(Vt);_componentFactoryResolver=p(rt);_appRef=p(E);_document=p(q);_paneElements=new Map;create(e,t){return this._createOverlayRef(this.getPaneElement(e,t))}getPaneElement(e="",t){return this._paneElements.get(t)||this._paneElements.set(t,{}),this._paneElements.get(t)[e]||(this._paneElements.get(t)[e]=this._createPaneElement(e,t)),this._paneElements.get(t)[e]}_createPaneElement(e,t){let i=this._document.createElement("div");return i.id="toast-container",i.classList.add(e),i.classList.add("toast-container"),t?t.getContainerElement().appendChild(i):this._overlayContainer.getContainerElement().appendChild(i),i}_createPortalHost(e){return new tt(e,this._componentFactoryResolver,this._appRef)}_createOverlayRef(e){return new et(this._createPortalHost(e))}static \u0275fac=function(t){return new(t||s)};static \u0275prov=C({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),Ct=(()=>{class s{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(e,t,i,o,c){this.overlay=t,this._injector=i,this.sanitizer=o,this.ngZone=c,this.toastrConfig=a(a({},e.default),e.config),e.config.iconClasses&&(this.toastrConfig.iconClasses=a(a({},e.default.iconClasses),e.config.iconClasses))}show(e,t,i={},o=""){return this._preBuildNotification(o,e,t,this.applyConfig(i))}success(e,t,i={}){let o=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(o,e,t,this.applyConfig(i))}error(e,t,i={}){let o=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(o,e,t,this.applyConfig(i))}info(e,t,i={}){let o=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(o,e,t,this.applyConfig(i))}warning(e,t,i={}){let o=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(o,e,t,this.applyConfig(i))}clear(e){for(let t of this.toasts)if(e!==void 0){if(t.toastId===e){t.toastRef.manualClose();return}}else t.toastRef.manualClose()}remove(e){let t=this._findToast(e);if(!t||(t.activeToast.toastRef.close(),this.toasts.splice(t.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let i=this.toasts[this.currentlyActive].toastRef;i.isInactive()||(this.currentlyActive=this.currentlyActive+1,i.activate())}return!0}findDuplicate(e="",t="",i,o){let{includeTitleDuplicates:c}=this.toastrConfig;for(let T of this.toasts){let H=c&&T.title===e;if((!c||H)&&T.message===t)return T.toastRef.onDuplicate(i,o),T}return null}applyConfig(e={}){return a(a({},this.toastrConfig),e)}_findToast(e){for(let t=0;t<this.toasts.length;t++)if(this.toasts[t].toastId===e)return{index:t,activeToast:this.toasts[t]};return null}_preBuildNotification(e,t,i,o){return o.onActivateTick?this.ngZone.run(()=>this._buildNotification(e,t,i,o)):this._buildNotification(e,t,i,o)}_buildNotification(e,t,i,o){if(!o.toastComponent)throw new Error("toastComponent required");let c=this.findDuplicate(i,t,this.toastrConfig.resetTimeoutOnDuplicate&&o.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&i||t)&&this.toastrConfig.preventDuplicates&&c!==null)return c;this.previousToastMessage=t;let T=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(T=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let H=this.overlay.create(o.positionClass,this.overlayContainer);this.index=this.index+1;let it=t;t&&o.enableHtml&&(it=this.sanitizer.sanitize(at.HTML,t));let x=new Y(H),F=new I(this.index,o,it,i,e,x),wt=[{provide:I,useValue:F}],It=M.create({providers:wt,parent:this._injector}),xt=new X(o.toastComponent,It),st=H.attach(xt,o.newestOnTop);x.componentInstance=st.instance;let B={toastId:this.index,title:i||"",message:t||"",toastRef:x,onShown:x.afterActivate(),onHidden:x.afterClosed(),onTap:F.onTap(),onAction:F.onAction(),portal:st};return T||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{B.toastRef.activate()})),this.toasts.push(B),B}static \u0275fac=function(t){return new(t||s)(w(bt),w(Lt),w(M),w(mt),w(Z))};static \u0275prov=C({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})(),Zt=(()=>{class s{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=-1;toastClasses="";state;get displayStyle(){if(this.state.value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(e,t,i){this.toastrService=e,this.toastPackage=t,this.ngZone=i,this.message=t.message,this.title=t.title,this.options=t.config,this.originalTimeout=t.config.timeOut,this.toastClasses=`${t.toastType} ${t.config.toastClass}`,this.sub=t.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=t.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=t.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=t.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o}),this.state={value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}}}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state=u(a({},this.state),{value:"active"}),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width===0||this.width===100||!this.options.timeOut)return;let e=new Date().getTime(),t=this.hideTime-e;this.width=t/this.options.timeOut*100,this.options.progressAnimation==="increasing"&&(this.width=100-this.width),this.width<=0&&(this.width=0),this.width>=100&&(this.width=100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state=u(a({},this.state),{value:"active"}),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width=-1,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state.value!=="removed"&&(clearTimeout(this.timeout),this.state=u(a({},this.state),{value:"removed"}),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state.value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state.value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width=0)}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state.value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width=-1,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(e,t){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(e),t)):this.timeout=setTimeout(()=>e(),t)}outsideInterval(e,t){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(e),t)):this.intervalId=setInterval(()=>e(),t)}runInsideAngular(e){this.ngZone?this.ngZone.run(()=>e()):e()}static \u0275fac=function(t){return new(t||s)(_(Ct),_(I),_(Z))};static \u0275cmp=k({type:s,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(t,i){t&1&&R("click",function(){return i.tapToast()})("mouseenter",function(){return i.stickAround()})("mouseleave",function(){return i.delayedHideToast()}),t&2&&(dt("@flyInOut",i.state),m(i.toastClasses),A("display",i.displayStyle))},standalone:!0,features:[G],attrs:_t,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(t,i){t&1&&D(0,At,3,0,"button",0)(1,Rt,3,5,"div",1)(2,Ht,1,3,"div",2)(3,Mt,2,4,"div",3)(4,Et,2,2,"div",4),t&2&&(l("ngIf",i.options.closeButton),r(),l("ngIf",i.title),r(),l("ngIf",i.message&&i.options.enableHtml),r(),l("ngIf",i.message&&!i.options.enableHtml),r(),l("ngIf",i.options.progressBar))},dependencies:[J],encapsulation:2,data:{animation:[ft("flyInOut",[N("inactive",j({opacity:0})),N("active",j({opacity:1})),N("removed",j({opacity:0})),W("inactive => active",U("{{ easeTime }}ms {{ easing }}")),W("active => removed",U("{{ easeTime }}ms {{ easing }}"))])]}})}return s})(),$t=u(a({},yt),{toastComponent:Zt}),_e=(s={})=>ot([{provide:bt,useValue:{default:$t,config:s}}]);var zt=(()=>{class s{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=-1;toastClasses="";get displayStyle(){return this.state==="inactive"?"none":null}state="inactive";timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(e,t,i){this.toastrService=e,this.toastPackage=t,this.appRef=i,this.message=t.message,this.title=t.title,this.options=t.config,this.originalTimeout=t.config.timeOut,this.toastClasses=`${t.toastType} ${t.config.toastClass}`,this.sub=t.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=t.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=t.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=t.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state="active",!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width===0||this.width===100||!this.options.timeOut)return;let e=new Date().getTime(),t=this.hideTime-e;this.width=t/this.options.timeOut*100,this.options.progressAnimation==="increasing"&&(this.width=100-this.width),this.width<=0&&(this.width=0),this.width>=100&&(this.width=100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state="active",this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width=-1,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state!=="removed"&&(clearTimeout(this.timeout),this.state="removed",this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width=0)}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width=-1,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(t){return new(t||s)(_(Ct),_(I),_(E))};static \u0275cmp=k({type:s,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(t,i){t&1&&R("click",function(){return i.tapToast()})("mouseenter",function(){return i.stickAround()})("mouseleave",function(){return i.delayedHideToast()}),t&2&&(m(i.toastClasses),A("display",i.displayStyle))},standalone:!0,features:[G],attrs:_t,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(t,i){t&1&&D(0,jt,3,0,"button",0)(1,Ft,3,5,"div",1)(2,Bt,1,3,"div",2)(3,kt,2,4,"div",3)(4,Pt,2,2,"div",4),t&2&&(l("ngIf",i.options.closeButton),r(),l("ngIf",i.title),r(),l("ngIf",i.message&&i.options.enableHtml),r(),l("ngIf",i.message&&!i.options.enableHtml),r(),l("ngIf",i.options.progressBar))},dependencies:[J],encapsulation:2})}return s})(),ye=u(a({},yt),{toastComponent:zt});export{te as a,Ct as b,_e as c};