qx.$$packageData['1027901']={"locales":{},"resources":{},"translations":{"de":{},"en":{}}};
qx.Part.$$notifyLoad("1027901", function() {
(function(){var a=" ",b="cv.ui.common.HasStyling",c="String",d=' ',f='.actor:has(".value")';qx.Mixin.define(b,{properties:{styling:{check:c,init:null,nullable:true}},members:{applyStyling:function(h){var g=cv.Config.getStyling(this.getStyling());if(g){var e=qx.bom.Selector.query(f,this.getDomElement())[0];qx.bom.element.Class.removeClasses(e,g.classnames.split(a));if(!this._findValue(h,false,e,g)&&g.defaultValue!==undefined){this._findValue(g.defaultValue,true,e,g);};};},_findValue:function(k,o,l,j){if(undefined===k){return false;};if(j[k]){qx.bom.element.Class.addClasses(l,j[k].split(d));return true;}else {var m=j.range;if(o&&m[k]){qx.bom.element.Class.addClasses(l,m[k][1].split(d));return true;};var n=parseFloat(k);for(var i in m){if(i>n){continue;};if(m[i][0]<n){continue;};qx.bom.element.Class.addClasses(l,m[i][1].split(d));return true;};};return false;}}});})();(function(){var a='x',b="Boolean",c="changeVisible",d='" ',e="longtap",f='',g='.widget',h="Object",i='</div>',j='<div class="',k='width',m='.actor',n="visible",o="qx.event.type.Event",p="String",q='y',r='scale',s="pointerup",t="_applyVisible",u='>',v="",w="page",x="_",y=".value",z="pointerdown",A='cv.ui.structure.AbstractWidget',B="domReady",C="abstract",D="Number",E="longtapable",F="setup.dom.finished",G="navbar",H="string2number",I="tap";qx.Class.define(A,{extend:cv.ui.structure.AbstractBasicWidget,include:cv.ui.common.HasStyling,type:C,construct:function(K){cv.ui.structure.AbstractBasicWidget.call(this,K);var J=this.getPath().split(x);J.shift();if(cv.TemplateEngine.getInstance().isDomFinished()){this._onDomFinished();}else {qx.event.message.Bus.subscribe(F,this._onDomFinished,this);};new qx.util.DeferredCall(function(){if(cv.Config.lazyLoading===true&&!this.getParentWidget()){var L=cv.util.Tree.getParentData(K.path);if(L){var parent=cv.ui.structure.WidgetFactory.createInstance(L.$$type,L);this.setParentWidget(parent);};};var M=this.get$$type()===w||this.get$$type()===G?null:this.getVisibilityParent();if(M){M.bind(n,this,n);};},this).schedule();},properties:{anonymous:{check:b,init:false},flavour:{check:p,init:f,nullable:true},layout:{check:h,nullable:true},label:{check:p,init:f,nullable:true},bindClickToWidget:{check:b,init:false},mapping:{check:p,nullable:true},align:{check:p,nullable:true},classes:{check:p,init:f,nullable:true},style:{check:p,init:f},colspan:{check:D,init:6,transform:H},colspanM:{check:D,init:6,transform:H},colspanS:{check:D,init:6,transform:H},rowspanClass:{check:p,init:v},containerClass:{check:p,nullable:true},visible:{check:b,init:false,event:c,apply:t},responsive:{check:b,init:false}},events:{"domReady":o},members:{$$domReady:null,__rk:null,__rl:null,_skipNextEvent:null,_applyVisible:function(O,N){},getResponsiveLayout:function(P){if(!this.isResponsive()){return this.getLayout();};if(!P){P=cv.ui.layout.Manager.getAvailableWidth();};var Q=this.getLayout();var R=cv.ui.layout.Manager.getLayoutSuffix(P);if(R){var l={};[a,q,k,r].forEach(function(S){if(Q[S]){l[S]=Q[S];};if(Q[S+R]){l[S]=Q[S+R];};});return l;};return Q;},string2number:function(T){return parseFloat(T);},downaction:function(U){},action:function(V){},_onDomFinished:function(){if(!this.isVisible()){this.addListenerOnce(c,this._onDomFinished,this);return;};this._onDomReady();},_onDomReady:function(){if(!this.$$domReady){this.initListeners();this.fireEvent(B);this.$$domReady=true;};},getActor:function(){return qx.bom.Selector.query(m,this.getDomElement())[0];},getValueElement:function(){return qx.bom.Selector.query(y,this.getDomElement())[0];},getWidgetElement:function(){return qx.bom.Selector.query(g,this.getDomElement())[0];},getInteractionElement:function(){return this.isBindClickToWidget()?this.getDomElement():this.getActor();},initListeners:function(){this.addElementListener(I,this.action,this);if(this.buttonPressed){this.addElementListener(z,this._onPointerDown,this);};},_onPointerDown:function(W){this.__rk=W.getCurrentTarget();this.__rl=Date.now();qx.event.Registration.addListener(document,s,this._onPointerUp,this);},_onPointerUp:function(X){qx.event.Registration.removeListener(document,s,this._onPointerUp,this);var Y=X.getTarget();while(Y&&Y!==this.__rk){Y=Y.parentNode;if(Y===this.getDomElement()){break;};};if(Y&&Y===this.__rk){X.setCurrentTarget(Y);if(this._onLongTap&&qx.Class.hasMixin(this.constructor,cv.ui.common.HandleLongpress)&&this.getShortThreshold()>0&&(Date.now()-this.__rl)>=this.getShortThreshold()){this._onLongTap(X);}else {this.action(X);};this._skipNextEvent=I;};this.__rl=null;},addElementListener:function(bc,ba,bd){if(this.isAnonymous()){return;};var bb=this.getInteractionElement();if(bb){qx.bom.element.Dataset.set(bb,E,bc!==e);return qx.event.Registration.addListener(bb,bc,ba,bd);};return null;},removeElementListener:function(bg,be,bh){if(this.isAnonymous()){return;};var bf=this.getInteractionElement();if(bf){return qx.event.Registration.removeListener(bf,bg,be,bh);};return false;},getDomString:function(){return j+this.getClasses()+d+this.getStyle()+u+this.getLabel()+this._getInnerDomString()+i;},_getInnerDomString:function(){return v;}},destruct:function(){qx.event.Registration.removeListener(document,s,this._onPointerUp,this);}});})();(function(){var a="Number",b="cv.ui.common.HandleLongpress",c="Boolean";qx.Mixin.define(b,{properties:{shortThreshold:{check:a,init:-1},shortDefault:{check:c,init:false}}});})();
});