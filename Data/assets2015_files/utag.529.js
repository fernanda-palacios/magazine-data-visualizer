//tealium universal tag - utag.529 ut4.0.201706271530, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={"writekey":"writekey"};u.extend=[function(a,b,c,d,e,f,g){d=b['channel'];if(typeof d=='undefined')return;c=[{'coastal':'oLQxj2iibsDyTZ5R6Io8Lkz9cEqzhRUF'},{'cooking':'h9XROH71zMYYR2GiBVRRImU5VHxHlzGO'},{'dep':'5WRr3qaaV4VRjMDUgVVYa1yQWd2AeZVm'},{'ew':'BON3FBilt68aKr0pgANaJJW6i49R33qn'},{'essence':'1tK6oSR9d6OpCrXJZeG3EIJx2bq4rsiv'},{'extracrispy':'YYHbYKtAgp7bXHASvGPebuFmlNI0Z2ME'},{'fansided':'HiODwELLwwwIVn9UHCUh9st6r8sdyoB1'},{'fw':'8NpHEDgX8Hd2JBcbevqwVvW3CKssMaG8'},{'fortune':'S2RVIWEtnVwlQUlXfkCmR4K4CTTGoT2c'},{'fwx':'8NpHEDgX8Hd2JBcbevqwVvW3CKssMaG8'},{'golf':'eLRAvP3nlgHrDcyVNHuXtt7tSy0YWd1c'},{'health':'XjYNN1mV5ZwafZa6k60GonDxLfJ3BvP1'},{'hellogiggles':'ivyaLApVNFePnbiKR2QCWsg1Neyh9Wxo'},{'instant':'03Z3JpFds2pRoVMJHMAz8FVCsyTHaYtu'},{'instyle':'cAULcB6CAxnO49GO0JKjLts8OfZqAK8d'},{'money':'vwkDGW1h786nvA887oa073kNaIxlHfAw'},{'myrecipes':'GOHtmvx7P418NzMUhs4RsTlJDwGB9Ecz'},{'pespanol':'tmQzBRmdmwAf9dw4l54FcPGJMRbprxrU'},{'realsimple':'X0houmAvvEjVtnVcXufBpNzaNjdT8QM7'},{'southern':'XEYVIwXzXHF17MWHQXEZDoMRIy4uDd71'},{'si':'nS9MXqQP5fFFOZ9X23O4vHExpX9MCNDv'},{'sikids':'bI2SAQomDgs119GJcfPGU74RNyQrHIC9'},{'sunset':'2Doiu0RM2pxT2pqAtGv66vllq1nagqem'},{'the drive':'6iMTserUZoJIASV1XjA5b2slpPbxsWZk'},{'time':'Tjrt25JUOrbvQQX1cGykGGzC3GncV6F9'},{'timeedge':'KepvozfIS9sWQJr2uKIG3OMcGk6vmQoR'},{'timeforkids':'yepo1g9wQTUxxFmo7hDIHh7whiaouy1V'},{'tl':'p8yK4IF91abRJMWa0pXxGE4xk68GFwsX'},{'xojane':'jxmZIm9HF3XVX4hBt3KBb324X2QDBu7I'},{'test':'oLQxj2iibsDyTZ5R6Io8Lkz9cEqzhRU3'},{'motto':'Tjrt25JUOrbvQQX1cGykGGzC3GncV6F9'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['writekey']=c[e][f];m=true};};if(m)break};if(!m)b['writekey']='';},function(a,b){try{if((b['channel']=='people'&&b['dom.domain']=='people.com'&&b['dom.url'].toString().toLowerCase().indexOf('people.com/pen'.toLowerCase())<0)){b['writekey']='UPBFYM4INmSPtgVRi8bovFpjlLk7VN1r'}}catch(e){utag.DB(e)}},function(a,b){try{if((b['channel']=='people'&&b['dom.domain']=='people.com'&&b['dom.url'].toString().toLowerCase().indexOf('people.com/pen'.toLowerCase())>-1)){b['writekey']='RNvav7BZpYarAuXSxzgq7tYaLYfRFMGc'}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={writekey:""};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
console.log("writekey"+u.data.writekey);if(typeof(analytics)=='undefined'){!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";window.analytics.load(u.data.writekey);}}();analytics.page({timeIncApplication:'tealium'});}
}};utag.o[loader].loader.LOAD(id);})("529","timeinc.fortune.com");}catch(error){utag.DB(error);}
