'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var dataURItoBlob=exports.dataURItoBlob=function(a){for(var b=atob(a.split(',')[1]),c=a.split(',')[0].split(':')[1].split(';')[0],d=new ArrayBuffer(b.length),e=new Uint8Array(d),f=0;f<b.length;f++)e[f]=b.charCodeAt(f);return new Blob([d],{type:c})},getURLParams=exports.getURLParams=function(){return JSON.parse('{"'+decodeURI(window.location.search.substring(1)).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')};exports.default={dataURItoBlob:dataURItoBlob,getURLParams:getURLParams};