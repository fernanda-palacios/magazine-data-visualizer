//tealium universal tag - utag.456 ut4.0.201702221808, Copyright 2017 Tealium.com Inc. All Rights Reserved.
var __reach_config={};try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1};u.qsp_delim="&";u.kvp_delim="=";u.pid="538890ee97b0c992bf00006b";u.base_url="//d8rk54i4mohrb.cloudfront.net/js/reach.js";u.map={"meta.og:title":"title","publish_date":"date","authors":"authors","site_section1":"channels","tag_keywords":"tags"};u.extend=[];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!="undefined"){__reach_config={};for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(b[d]instanceof Array){__reach_config[e[f]]=b[d].slice(0);}else if((e[f]=="authors"||e[f]=="channels"||e[f]=="tags")&&b[d].indexOf("|")){__reach_config[e[f]]=b[d].split("|");}else{__reach_config[e[f]]=b[d];}}}}
if(u.pid!=""&&typeof __reach_config.pid=="undefined"){__reach_config.pid=u.pid;}
d='tealium_tag_19041';if(document.getElementById(d)){SPR.Reach.collect(__reach_config);}else{c=document.createElement('script');c.type='text/javascript';c.async=true;c.id=d;c.src=u.base_url;f=document.getElementsByTagName('head')[0];f.appendChild(c);}}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('456','timeinc.fortune.com');}catch(e){}