qx.$$packageData['1024']={"locales":{},"resources":{},"translations":{"de":{},"en":{}}};
qx.Part.$$notifyLoad("1024", function() {
(function(){var a='TR064_calllist',b='<audio preload="none">',c='audio_play',d='String',e='resource/plugins/tr064/soap.php?device=',f='type;date;nameOrCaller;tam',g='control_reload',h=';',j='',k='timer',l='tam',m='&uri=',n='interval',o='%26max=',p=': ',q='cv.plugins.tr064.CallList',r='tr064ListRefreshed',s='</td>',t='phone_answering',u='nameOrCaller',v='resource/plugins/tr064/proxy.php?device=',w='phone_ring_out',x='phone_call_end_in',y='resource/plugins/tr064/tr064.css',z='update',A='initial',B="text/xml",C="calllist",D='*',E='text_question_mark',F='phone_call_in',G='</tr>',H='<div class="actor"><table class="TR064_calllist"><tr><td>Loading TR-064...</td></tr></table></div>',I='<source src="resource/plugins/tr064/proxy.php?device=',J='</audio>',K='date',L='</div>',M='ended',N='phone_ring_in',O=' failed with status ',P='">',Q='&location=upnp/control/x_contact&uri=urn:dslforum-org:service:X_AVM-DE_OnTel:1&fn=GetCallList',R='<xml/>',S='name',T='Error: reading URL "',U='type',V='qx.event.type.Event',W='phone_call_out',X='getCallListURI',Y='<fail>',bo="click",bp='%26sid=',bq='phone_missed_in',bk='caller',bl='<td>',bm='Number',bn='<tr>',br='Call',bs='TR-064 refreshCalllist() error:',bt='<div class="tam clickable">';qx.Class.define(q,{extend:cv.ui.structure.AbstractWidget,include:[cv.ui.common.Refresh,cv.ui.common.Update],statics:{parse:function(bu,by,bw,bv){var bx=cv.parser.WidgetParser.parseElement(this,bu,by,bw,bv,this.getAttributeToPropertyMappings());cv.parser.WidgetParser.parseFormat(bu,by);cv.parser.WidgetParser.parseAddress(bu,by);cv.parser.WidgetParser.parseRefresh(bu,by);return bx;},getAttributeToPropertyMappings:function(){return {'device':{},'max':{transform:function(bz){return +bz;}},'columns':{'default':f},'TAM':{'default':t},'TAMColor':{'default':j},'TAMwait':{'default':g},'TAMwaitColor':{'default':j},'TAMplay':{'default':c},'TAMplayColor':{'default':j},'TAMstop':{'default':t},'TAMstopColor':{'default':j},'typeIncoming':{'default':F},'typeIncomingColor':{'default':j},'typeMissed':{'default':bq},'typeMissedColor':{'default':j},'typeOutgoing':{'default':W},'typeOutgoingColor':{'default':j},'typeActiveIncoming':{'default':N},'typeActiveIncomingColor':{'default':j},'typeRejectedIncoming':{'default':x},'typeRejectedIncomingColor':{'default':j},'typeActiveOutgoing':{'default':w},'typeActiveOutgoingColor':{'default':j},'typeUnknown':{'default':E},'typeUnknownColor':{'default':j}};}},events:{'tr064ListRefreshed':V},properties:{device:{check:d,init:j},max:{check:bm,init:0},columns:{check:d},TAM:{check:d},TAMColor:{check:d},TAMwait:{check:d},TAMwaitColor:{check:d},TAMplay:{check:d},TAMplayColor:{check:d},TAMstop:{check:d},TAMstopColor:{check:d},typeIncoming:{check:d},typeIncomingColor:{check:d},typeMissed:{check:d},typeMissedColor:{check:d},typeOutgoing:{check:d},typeOutgoingColor:{check:d},typeActiveIncoming:{check:d},typeActiveIncomingColor:{check:d},typeRejectedIncoming:{check:d},typeRejectedIncomingColor:{check:d},typeActiveOutgoing:{check:d},typeActiveOutgoingColor:{check:d},typeUnknown:{check:d},typeUnknownColor:{check:d}},members:{__tY:j,__ua:undefined,__ub:false,__uc:{},_getInnerDomString:function(){this.refreshCalllist(A);return H;},_setupRefreshAction:function(){this._timer=new qx.event.Timer(this.getRefresh());this._timer.addListener(n,function(){if(!this.__ub){this.refreshCalllist(k);};},this);this._timer.start();},_update:function(bB,bA){if(!this.__ub){this.refreshCalllist(z);};},_displayCalllist:function(){var self=this,bC=this.getDomElement().getElementsByClassName(a)[0],bF=this.__tY?this.__tY.replace(/.*sid=/,j):j,bE=j,bG={'0':{name:this.getTypeUnknown(),color:this.getTypeUnknownColor()},'1':{name:this.getTypeIncoming(),color:this.getTypeIncomingColor()},'2':{name:this.getTypeMissed(),color:this.getTypeMissedColor()},'3':{name:this.getTypeOutgoing(),color:this.getTypeOutgoingColor()},'9':{name:this.getTypeActiveIncoming(),color:this.getTypeActiveIncomingColor()},'10':{name:this.getTypeRejectedIncoming(),color:this.getTypeRejectedIncomingColor()},'11':{name:this.getTypeActiveOutgoing(),color:this.getTypeActiveOutgoingColor()}};this.__ua.forEach(function(bJ){var bH=j,bI=(bJ.Type in bG)?bG[bJ.Type]:bG[0];if(bJ.Path){bH=b+I+self.getDevice()+m+bJ.Path+bp+bF+P+J+bt+cv.IconHandler.getInstance().getIconText(self.getTAM(),D,D,self.getTAMColor())+L;};bE+=bn;self.getColumns().split(h).forEach(function(bK){switch(bK){case U:bE+=bl+cv.IconHandler.getInstance().getIconText(bI.name,D,D,bI.color)+s;break;case K:bE+=bl+bJ.Date+s;break;case S:bE+=bl+bJ.Name+s;break;case bk:bE+=bl+bJ.Caller+s;break;case u:if(bJ.Name!==j){bE+=bl+bJ.Name+s;}else {bE+=bl+bJ.Caller+s;};break;case l:bE+=bl+bH+s;break;};});bE+=G;});bC.innerHTML=bE;var bD=bC.getElementsByClassName(l);for(var i=0;i<bD.length;i++ ){bD[i].addEventListener(bo,function(){self.__ud(this);});};},_getCallListURI:function(){var self=this,bL=e+this.getDevice()+Q;window.fetch(bL).then(function(bM){if(bM.ok){return bM.json();};console.error(T+bM.url+O+bM.status+p+bM.statusText);self.__tY=Y;}).then(function(bN){self.__tY=bN;self.refreshCalllist(X);});},refreshCalllist:function(bP){this.__ub=true;if(this.__tY===Y){return;};if(this.__tY===j){this._getCallListURI();return;};var self=this,bO=v+this.getDevice()+m+this.__tY+o+this.getMax();window.fetch(bO).then(function(bQ){if(bQ.ok){return bQ.text();};console.error(T+bQ.url+O+bQ.status+p+bQ.statusText);return R;}).then(function(bR){return (new window.DOMParser()).parseFromString(bR,B);}).then(function(bW){self.__ua=[];var bU=bW.getElementsByTagName(br);for(var i=0;i<bU.length;i++ ){var bT=bU[i].children,bV={};for(var bS=0;bS<bT.length;bS++ ){bV[bT[bS].nodeName]=bT[bS].textContent;};self.__ua.push(bV);};self._displayCalllist();self.__ub=false;self.fireEvent(r);}).catch(function(bX){console.error(bs,bX);});},__ud:function(cb){var self=this,bY=cb.previousElementSibling;if(!this.__uc[bY]){bY.addEventListener(M,function(){self.__ug(cb);});this.__uc[bY]=true;};if(bY.readyState<4){this.__ue(cb);};if(bY.paused){var ca=bY.play();if(ca!==undefined){ca.then(function(){self.__uf(cb);}).catch(function(){});};}else {bY.pause();bY.currentTime=0;this.__ug(cb);};},__ue:function(cc){cc.innerHTML=cv.IconHandler.getInstance().getIconText(this.getTAMwait(),D,D,this.getTAMwaitColor());},__uf:function(cd){cd.innerHTML=cv.IconHandler.getInstance().getIconText(this.getTAMplay(),D,D,this.getTAMplayColor());},__ug:function(ce){ce.innerHTML=cv.IconHandler.getInstance().getIconText(this.getTAMstop(),D,D,this.getTAMstopColor());}},defer:function(cf){var cg=cv.util.ScriptLoader.getInstance();cg.addStyles(y);cv.parser.WidgetParser.addHandler(C,cv.plugins.tr064.CallList);cv.ui.structure.WidgetFactory.registerClass(C,cf);}});})();
});