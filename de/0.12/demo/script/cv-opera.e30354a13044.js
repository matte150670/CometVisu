qx.$$packageData['4096']={"locales":{},"resources":{},"translations":{"de":{},"en":{}}};
qx.Part.$$notifyLoad("4096", function() {
(function(){var a="Timeout Set to : ",b="interval",c="Boolean",d="Target Page: ",e='cv.plugins.Timeout',f="Number",g="__kC",h="id_",i=")",j="true",k=" div > h1",l="#",m="TIMEOUT: Got Timeout - Now Goto Page ",n="TIMEOUT: Got Trigger (",o="TIMEOUT: Already on page ",p="timeout",q="String",r="path.pageChanged",s="useraction";qx.Class.define(e,{extend:cv.ui.structure.AbstractBasicWidget,construct:function(t){cv.ui.structure.AbstractBasicWidget.call(this,t);this.__tU=0;this.__nL();},statics:{parse:function(u,x,w,v){return cv.parser.WidgetParser.parseElement(this,u,x,w,v,this.getAttributeToPropertyMappings());},getAttributeToPropertyMappings:function(){return {'target':{"default":h},'time':{"default":600,transform:parseFloat},'debug':{"default":false,transform:function(y){return y===j;}}};}},properties:{target:{check:q,init:h},time:{check:f,init:600},debug:{check:c,init:false}},members:{__tU:null,__tV:null,__tW:null,__tX:null,__kC:null,__nL:function(){if(this.isDebug()){this.debug(a+this.getTime());this.debug(d+this.getTarget());};var z=this.getTime()*100;this.__kC=new qx.event.Timer(z);this.__kC.addListener(b,this.timeoutTrigger,this);this.__kC.start();qx.event.Registration.addListener(window,s,this._onUserAction,this);qx.event.message.Bus.subscribe(r,function(B){var A=B.getData();this.__tV=A;this.__tW=qx.dom.Node.getText(qx.bom.Selector.query(l+A+k)[0]);this.__tU=0;},this);},_onUserAction:function(){this.__tU=0;},timeoutTrigger:function(){if(this.isDebug()){this.debug(n+this.__tU+i);};this.__tU++ ;this.__tX=this.getTarget();if(this.__tU>=10){this.__tU=0;var C=cv.TemplateEngine.getInstance();if(this.__tV!==this.__tX&&this.__tW!==this.__tX){if(this.isDebug()){this.debug(m+this.__tX);};C.scrollToPage(this.__tX);C.getCurrentPage().getDomElement().scrollTop=0;}else {if(this.isDebug()){this.debug(o+this.__tX);};C.getCurrentPage().getDomElement().scrollTop=0;};};}},destruct:function(){this._disposeObjects(g);},defer:function(D){cv.parser.WidgetParser.addHandler(p,cv.plugins.Timeout);cv.ui.structure.WidgetFactory.registerClass(p,D);}});})();
});