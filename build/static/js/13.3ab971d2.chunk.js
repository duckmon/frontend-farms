(this["webpackJsonpduck-frontend"]=this["webpackJsonpduck-frontend"]||[]).push([[13],{699:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return le}));var c,a,r,i,s,o,j,u,b,l,d,O,p=n(51),f=n(0),x=n(3),h=n(38),m=n(171),g=n(176),v=n(4),k=n.n(v),w=n(15),S=n(21),y=n(66),z=n(13),B=n.n(z),C=n(676),Q=n(16),A=n(32),E=n(40),N=n(73),R=n(675),D=n(130),F=function(){var e=Object(f.useState)([]),t=Object(S.a)(e,2),n=t[0],c=t[1],a=Object(y.m)().account,r=Object(D.a)().fastRefresh;return Object(f.useEffect)((function(){a&&function(){var e=Object(w.a)(k.a.mark((function e(){var t,n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=R.a.map((function(e){return{address:Object(E.d)(),name:"pendingDuck",params:[e.pid,a]}})),e.next=3,Object(A.a)(N,t);case 3:n=e.sent,r=R.a.map((function(e,t){return Object(Q.a)(Object(Q.a)({},e),{},{balance:new B.a(n[t])})})),c(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},U=n(677),H=n(685),T=n(12),K=function(e){var t=e.value,n=e.decimals,c=e.fontSize,a=void 0===c?"40px":c,r=e.prefix,i=Object(H.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),s=i.countUp,o=i.update,j=Object(f.useRef)(o);return Object(f.useEffect)((function(){j.current(t)}),[t,j]),Object(T.jsxs)(h.B,{bold:!0,fontSize:a,children:[r,s]})},L=function(e){var t=e.earningsSum,n=Object(m.a)();return Object(y.m)().account?Object(T.jsx)(K,{value:t}):Object(T.jsx)(h.B,{color:"textDisabled",style:{lineHeight:"60px"},children:n(298,"Locked")})},M=function(e){var t=e.cakeBalance,n=Object(m.a)();return Object(y.m)().account?Object(T.jsx)(K,{value:t,fontSize:"24px"}):Object(T.jsx)(h.B,{color:"textDisabled",style:{lineHeight:"36px"},children:n(298,"Locked")})},$=n(109),W=n(270),J=n(85),P=n(678),V=function(e){var t=Object(f.useState)(new B.a(0)),n=Object(S.a)(t,2),c=n[0],a=n[1],r=Object(y.m)(),i=r.account,s=r.ethereum,o=Object(D.a)().fastRefresh;return Object(f.useEffect)((function(){i&&s&&function(){var t=Object(w.a)(k.a.mark((function t(){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(P.b)(s,e,i);case 2:n=t.sent,a(new B.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[i,s,e,o]),c},Y=function(){var e=Object(f.useState)([]),t=Object(S.a)(e,2),n=t[0],c=t[1],a=Object(y.m)().account,r=Object(D.a)().fastRefresh;return Object(f.useEffect)((function(){a&&function(){var e=Object(w.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=R.a.map((function(e){return{address:Object(E.d)(),name:"pendingDuck",params:[e.pid,a]}})),e.next=3,Object(A.a)(N,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},_=n(666),q=Object(x.e)(h.h)(c||(c=Object(p.a)(["\n  background-image: url('/images/egg/2a.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),G=x.e.div(a||(a=Object(p.a)(["\n  margin-bottom: 16px;\n"]))),I=x.e.img(r||(r=Object(p.a)(["\n  margin-bottom: 16px;\n"]))),X=x.e.div(i||(i=Object(p.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),Z=x.e.div(s||(s=Object(p.a)(["\n  margin-top: 24px;\n"]))),ee=function(){var e=Object(f.useState)(!1),t=Object(S.a)(e,2),n=t[0],c=t[1],a=Object(y.m)().account,r=Object(m.a)(),i=F(),s=Object(_.a)(V(Object(E.a)())),o=Object($.f)().toNumber(),j=Y().reduce((function(e,t){return e+new B.a(t).div(new B.a(10).pow(18)).toNumber()}),0),u=i.filter((function(e){return e.balance.toNumber()>0})),b=Object(C.a)(u.map((function(e){return e.pid}))).onReward,l=Object(f.useCallback)(Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,b();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[b]);return Object(T.jsx)(q,{children:Object(T.jsxs)(h.i,{children:[Object(T.jsx)(h.n,{size:"xl",mb:"24px",children:r(542,"Farms & Staking")}),Object(T.jsx)(h.n,{size:"lg",mb:"24px",color:"primary",children:Object(T.jsx)("a",{rel:"noreferrer",href:"https://bscscan.com/block/countdown/5397352",target:"_blank",children:"\u23f2 Countdown to Start"})}),Object(T.jsx)(I,{src:"/images/egg/2.png",alt:"cake logo",width:64,height:64}),Object(T.jsxs)(G,{children:[Object(T.jsx)(X,{children:r(544,"QUACK to Harvest")}),Object(T.jsx)(L,{earningsSum:j}),Object(T.jsxs)(X,{children:["~$",(o*j).toFixed(2)]})]}),Object(T.jsxs)(G,{children:[Object(T.jsx)(X,{children:r(546,"QUACK in Wallet")}),Object(T.jsx)(M,{cakeBalance:s}),Object(T.jsxs)(X,{children:["~$",(o*s).toFixed(2)]})]}),Object(T.jsx)(Z,{children:a?Object(T.jsx)(h.d,{id:"harvest-all",disabled:u.length<=0||n,onClick:l,fullWidth:!0,children:n?r(548,"Collecting QUACK"):r(999,"Harvest all (".concat(u.length,")"))}):Object(T.jsx)(U.a,{fullWidth:!0})})]})})},te=n(673),ne=Object(x.e)(h.h)(o||(o=Object(p.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ce=x.e.div(j||(j=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ae=function(){var e=Object(m.a)(),t=function(){var e=Object(D.a)().slowRefresh,t=Object(f.useState)(),n=Object(S.a)(t,2),c=n[0],a=n[1];return Object(f.useEffect)((function(){function e(){return(e=Object(w.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(J.a)(W,Object(E.a)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,a(new B.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c}(),n=function(e){var t=Object(f.useState)(new B.a(0)),n=Object(S.a)(t,2),c=n[0],a=n[1],r=Object(D.a)().slowRefresh;return Object(f.useEffect)((function(){!function(){var e=Object(w.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(J.a)(W,Object(E.a)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=e.sent,a(new B.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,r]),c}(Object(E.a)()),c=Object($.c)(),a=Object($.f)(),r=t?t.minus(n):new te.a(0),i=Object(_.a)(r),s=a.times(r),o=0;return c&&c[0]&&c[0].duckPerBlock&&(o=new te.a(c[0].duckPerBlock).div(new te.a(10).pow(18)).toNumber()),Object(T.jsx)(ne,{children:Object(T.jsxs)(h.i,{children:[Object(T.jsx)(h.n,{size:"xl",mb:"24px",children:e(534,"Quack Stats")}),Object(T.jsxs)(ce,{children:[Object(T.jsx)(h.B,{fontSize:"14px",children:e(10005,"Market Cap")}),Object(T.jsx)(K,{fontSize:"14px",value:Object(_.a)(s),decimals:0,prefix:"$"})]}),Object(T.jsxs)(ce,{children:[Object(T.jsx)(h.B,{fontSize:"14px",children:e(536,"Total Minted")}),t&&Object(T.jsx)(K,{fontSize:"14px",value:Object(_.a)(t),decimals:0})]}),Object(T.jsxs)(ce,{children:[Object(T.jsx)(h.B,{fontSize:"14px",children:e(538,"Total Burned")}),Object(T.jsx)(K,{fontSize:"14px",value:Object(_.a)(n),decimals:0})]}),Object(T.jsxs)(ce,{children:[Object(T.jsx)(h.B,{fontSize:"14px",children:e(10004,"Circulating Supply")}),i&&Object(T.jsx)(K,{fontSize:"14px",value:i,decimals:0})]}),Object(T.jsxs)(ce,{children:[Object(T.jsx)(h.B,{fontSize:"14px",children:e(540,"New QUACK/block")}),Object(T.jsx)(h.B,{bold:!0,fontSize:"14px",children:o})]})]})})},re=Object(x.e)(h.h)(u||(u=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),ie=function(){var e=Object(m.a)(),t=Object($.g)();return Object(T.jsx)(re,{children:Object(T.jsxs)(h.i,{children:[Object(T.jsx)(h.n,{size:"lg",mb:"24px",children:e(999,"Total Value Locked (TVL)")}),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(K,{value:t.toNumber(),prefix:"$",decimals:2}),Object(T.jsx)(h.B,{color:"textSubtle",children:e(999,"Across all Farms and Money Bins")})]})]})})},se=n(696),oe=Object(x.e)(h.h)(b||(b=Object(p.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),je=(x.e.div(l||(l=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),function(){var e=Object(m.a)();return Object(T.jsx)(oe,{children:Object(T.jsxs)(h.i,{children:[Object(T.jsx)(h.n,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(T.jsx)(se.a,{dataSource:{sourceType:"profile",screenName:"duckmoneydefi"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})}),ue=x.e.div(d||(d=Object(p.a)(["\n  align-items: center;\n  background-image: url('/images/egg/3.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/egg/3.png'), url('/images/egg/3b.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),be=Object(x.e)(h.b)(O||(O=Object(p.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),le=function(){var e=Object(m.a)();return Object(T.jsxs)(g.a,{children:[Object(T.jsxs)(ue,{children:[Object(T.jsx)(h.n,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:e(576,"Duck Money")}),Object(T.jsx)(h.B,{children:e(999,"Have a Quacking blast!")}),Object(T.jsx)(h.B,{fontSize:"12px",children:e(999,"A very new Yield Farming platform!")})]}),Object(T.jsx)("div",{children:Object(T.jsxs)(be,{children:[Object(T.jsx)(ee,{}),Object(T.jsx)(je,{}),Object(T.jsx)(ae,{}),Object(T.jsx)(ie,{})]})})]})}}}]);
//# sourceMappingURL=13.3ab971d2.chunk.js.map