import{d as l,r as i,o as p,c as _,a as t,F as h,i as g,f as m,h as s,e as n,t as x}from"./index-y-liIJ7T.js";const f={class:"text-white py-6"},u=t("div",{class:"flex items-center justify-center font-bold xs:text-[4.5rem] lg:text-[3rem] xs:[text-shadow:_0_15px_30px_rgb(99_102_241_/_0.8)] [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"}," Vendors ",-1),b=t("div",{class:"px-[5rem] text-center font-bold xs:text-[3rem] xs:font-400 lg:text-[1.6rem] xs:[text-shadow:_0_15px_30px_rgb(99_102_241_/_0.8)] [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"}," We invited these vendors coming to Toronto Heartcon! ",-1),w={class:"px-[5rem] lg:px-[8rem] py-12 grid lg:grid-cols-2 gap-6"},v=["id"],k={class:"grid lg:grid-cols-2 gap-2 bg-[#392348]/40 hover:bg-[#392348]/60 rounded-xl"},y=["src"],C={class:"py-3 lg:px-1 sm:px-[3rem] xs:px-[1rem]"},N={class:"xs:text-[3rem] font-black lg:text-[1.5rem] xs:[text-shadow:_0_15px_30px_rgb(99_102_241_/_0.8)] [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"},B=["onClick"],G={class:"xs:text-[2.3rem] sm:text-[2rem] lg:text-[0.95rem] py-3"},F=l({__name:"vendor",setup(T){const d=i([]);i("");async function a(){const o=await m("mbraf4u9whtga4b/records?where=where%3D%28status%2Ceq%2C1%29&limit=25&shuffle=0&offset=0","GET");d.value=o.list}p(()=>{a()});function c(o){var r;(r=window.open(o,"_blank"))==null||r.focus()}return(o,r)=>(s(),_("div",f,[u,b,t("div",w,[(s(!0),_(h,null,g(d.value,e=>(s(),_("div",{key:e,id:e.id},[t("div",k,[t("div",null,[e.photo&&e.photo.length>0?(s(),_("img",{key:0,class:"w-[100%] rounded-xl",src:e.photo[0].thumbnails.card_cover.signedUrl},null,8,y)):n("",!0)]),t("div",C,[t("div",N,x(e.name),1),e.igName?(s(),_("div",{key:0,onClick:V=>c(e.igUrl),class:"underline font-black xs:text-[2.5rem] lg:text-[1.1rem] xs:[text-shadow:_0_15px_30px_rgb(99_102_241_/_0.8)] [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"}," @"+x(e.igName),9,B)):n("",!0),t("div",G,x(e.description),1)])])],8,v))),128))])]))}});export{F as default};