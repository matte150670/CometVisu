qx.$$packageData['2050']={"locales":{},"resources":{},"translations":{"C":{},"de":{},"en":{}}};
qx.Part.$$notifyLoad("2050", function() {
(function(){var a="text",b="soft",c="",d="number",e="checkbox",f="select-one",g="input",h="option",j="value",k="off",m="select",n="radio",o="qx.bom.Input",p="textarea",q="auto";qx.Bootstrap.define(o,{statics:{__nr:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(t,r,u){{};var r=r?qx.lang.Object.clone(r):{};var s;if(t===p||t===m){s=t;}else {s=g;r.type=t;};return qx.dom.Element.create(s,r,u);},setValue:function(A,z){var B=A.nodeName.toLowerCase();var C=A.type;var w=qx.lang.Type;if(typeof z===d){z+=c;};if((C===e||C===n)){if(w.isArray(z)){A.checked=z.includes(A.value);}else {A.checked=A.value==z;};}else if(B===m){var v=w.isArray(z);var D=A.options;var x,y;for(var i=0,l=D.length;i<l;i++ ){x=D[i];y=x.getAttribute(j);if(y==null){y=x.text;};x.selected=v?z.includes(y):z==y;};if(v&&z.length==0){A.selectedIndex=-1;};}else if((C===a||C===p)&&true){A.$$inValueSet=true;A.value=z;A.$$inValueSet=null;}else {A.value=z;};},getValue:function(L){var J=L.nodeName.toLowerCase();if(J===h){return (L.attributes.value||{}).specified?L.value:L.text;};if(J===m){var E=L.selectedIndex;if(E<0){return null;};var K=[];var N=L.options;var I=L.type==f;var M=qx.bom.Input;var H;for(var i=I?E:0,G=I?E+1:N.length;i<G;i++ ){var F=N[i];if(F.selected){H=M.getValue(F);if(I){return H;};K.push(H);};};return K;}else {return (L.value||c).replace(/\r/g,c);};},setWrap:function(R,O){var Q=O?b:k;var P=O?q:c;R.wrap=Q;R.style.overflowY=P;}}});})();
});