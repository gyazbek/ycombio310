"use strict";const StorageUtil=function(){return{local:function(){return{get:function(t){return localStorage.getItem(t)},set:function(t,e){try{return localStorage.setItem(t,e),!0}catch(r){return!1}},"delete":function(t){try{return localStorage.removeItem(t),!0}catch(e){return!1}}}}()}}();