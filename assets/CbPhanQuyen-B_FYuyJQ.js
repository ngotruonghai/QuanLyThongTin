import{d as v,T as i,B as f,A as I,c as n,o as s,e as b,a as l,ah as R,F as x,r as y,t as g}from"./index-fOVdEkyq.js";import{a as h}from"./data-provider-DQq8f4-V.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";const w={class:"combobox-container"},A=["value"],B=v({__name:"CbPhanQuyen",props:{RoleId:{}},emits:["update:RoleId"],setup(u,{emit:d}){const p=d,c=u,t=i(c.RoleId),r=i({succeeded:null,code:null,message:null,errors:null,data:[]});async function m(){try{const e=await h("/api/account/GetRole","GET",{},{timeout:15e3});r.value=e}catch(e){console.log(e)}}function _(){p("update:RoleId",t.value)}return f(()=>c.RoleId,e=>{t.value=e}),I(async()=>{await m()}),(e,o)=>(s(),n("div",w,[b(l("select",{id:"email",class:"combobox","onUpdate:modelValue":o[0]||(o[0]=a=>t.value=a),onChange:_},[o[1]||(o[1]=l("option",{value:"",key:"0"},null,-1)),(s(!0),n(x,null,y(r.value.data,(a,D)=>(s(),n("option",{key:a.id,value:a.id},g(a.name),9,A))),128))],544),[[R,t.value]]),o[2]||(o[2]=l("span",{class:"combobox-icon"},"▼",-1))]))}}),F=k(B,[["__scopeId","data-v-5bc01c20"]]);export{F as _};
