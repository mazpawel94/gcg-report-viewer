(this["webpackJsonpgcg-report-viewer"]=this["webpackJsonpgcg-report-viewer"]||[]).push([[0],{202:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),i=n(54),o=n.n(i),s=n(18),l=n(23),u=(n(154),n(111)),d=n(17),j=a.a.createContext(),b=n(6),x=n(7),p=n(30),O={A:1,"\u0104":5,B:3,C:2,"\u0106":6,D:2,E:1,"\u0118":5,F:5,G:3,H:3,I:1,J:3,K:2,L:2,"\u0141":3,M:2,N:1,"\u0143":7,O:1,"\xd3":5,P:2,R:1,S:1,"\u015a":5,T:2,U:3,W:1,Y:2,Z:1,"\u0179":9,"\u017b":5},f={word2:{color:"#e8b442",text:"PODW\xd3JNA PREMIA S\u0141OWNA"},word3:{color:"#c02929",text:"POTR\xd3JNA PREMIA S\u0141OWNA"},letter2:{color:"#7590c7",text:"PODW\xd3JNA PREMIA LITEROWA"},letter3:{color:"#0078c1",text:"POTR\xd3JNA PREMIA LITEROWA"},middle:{color:"#e8b442",text:""}},h=[[1,1],[2,2],[3,3],[4,4],[10,10],[11,11],[12,12],[13,13],[1,13],[2,12],[3,11],[4,10],[10,4],[11,3],[12,2],[13,1]],v=[[0,0],[0,7],[0,14],[7,0],[7,14],[14,0],[14,7],[14,14]],g=[[0,3],[0,11],[2,6],[2,8],[3,0],[3,7],[3,14],[6,2],[6,6],[6,8],[6,12],[7,3],[7,11],[8,2],[8,6],[8,8],[8,12],[11,0],[11,7],[11,14],[12,6],[12,8],[14,3],[14,11]],m=[[1,5],[1,9],[5,1],[5,5],[5,9],[5,13],[9,1],[9,5],[9,9],[9,13],[13,5],[13,9]],y=38,w="#f8e8c7",C="#1ae825",k=function(e){var t=e.x,n=e.y,c=e.letter,a=e.transparent,i=e.newMove,o=c===c.toLowerCase(),s=i?C:w;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p.Rect,{x:t+1,y:n+1,width:36,height:36,fill:s,cornerRadius:4,opacity:a?0:1,"data-testid":"tile"}),Object(r.jsx)(p.Text,{x:t,y:n+8,width:y,height:y,fill:"#015b52",text:c.toUpperCase(),align:"center",fontSize:25,verticalAlign:"center",fontFamily:"Arial",fontStyle:"bold",opacity:a?0:o?.3:1,"data-testid":"letter"}),Object(r.jsx)(p.Text,{x:t+y-10,y:n+y-10,width:10,height:10,fill:"#015b52",text:O[c],align:"center",fontSize:9,verticalAlign:"center",fontFamily:"Arial",fontStyle:"bold",opacity:a?0:1,"data-testid":"points"})]})},I=["*xch","xch"],N=function(e){var t;return null===e||void 0===e||null===(t=e.choiceOptions)||void 0===t?void 0:t.find((function(e){return e.coordinates.includes("*")}))},E=function(e){var t=[];!function n(r){var c=e.indexOf("(",r),a=e.indexOf(")",r+1);-1!==a&&(t.push({start:c,end:a}),n(a))}(0);return e.split("").map((function(e,n){return["(",")"].includes(e)?void 0:(r=n,t.some((function(e){return e.start<r&&e.end>r})));var r})).filter((function(e){return void 0!==e}))},M=function(e){var t=e.isNewMove,n=e.letters,c=function(e){var t=e.split("").filter((function(e){return"*"!==e})).join("");return t.slice(-1)!==t.slice(-1).toLowerCase()?{x:t.slice(-1).charCodeAt()-65,y:t.slice(0,-1)-1,verticle:!1}:{x:t[0].charCodeAt()-65,y:t.slice(1)-1,verticle:!0}}(e.coordinates),a=c.x,i=c.y,o=c.verticle,s=E(n),l=n.split("").filter((function(e){return!["(",")"].includes(e)})).map((function(e,n){return Object(r.jsx)(k,{x:o?38*a:38*(a+n),y:o?38*(i+n):38*i,letter:e,transparent:s[n],newMove:t},n)}));return Object(r.jsx)(r.Fragment,{children:l})},A=function(){var e,t=Object(c.useContext)(j),n=t.moves,r=t.actualMoveIndex,a=t.actualOptionIndex;return{actualMove:null===n||void 0===n?void 0:n[r],actualOption:null===n||void 0===n||null===(e=n[r])||void 0===e?void 0:e.choiceOptions[a],currentMoves:null===n||void 0===n?void 0:n.slice(0,r),isLossMove:function(e){return n[e].pointsBefore===n[e+2].pointsBefore}}},R=function(){var e=A(),t=e.currentMoves,n=e.isLossMove;return Object(r.jsx)(r.Fragment,{children:t.map((function(e,t){var c=N(e),a=c.word,i=c.coordinates;return function(e){return I.some((function(t){return t===e}))}(i)||n(t)?null:Object(r.jsx)(M,{letters:a,coordinates:i},t)}))})},z=n(26);function P(){var e=Object(b.a)(["\n  height: calc(100% / 15);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return P=function(){return e},e}function T(){var e=Object(b.a)(["\n  width: calc(100% / 15);\n  text-align: center;\n"]);return T=function(){return e},e}function S(){var e=Object(b.a)(["\n  position: absolute;\n  color: white;\n  top: 30px;\n  left: 10px;\n  height: calc(100% - 80px);\n  width: 30px;\n  font-size: 11px;\n  display: flex;\n  flex-direction: column;\n"]);return S=function(){return e},e}function L(){var e=Object(b.a)(["\n  position: absolute;\n  color: white;\n  line-height: 30px;\n  left: 40px;\n  height: 30px;\n  width: calc(100% - 80px);\n  font-size: 11px;\n  display: flex;\n"]);return L=function(){return e},e}var B=x.b.div(L()),F=x.b.div(S()),D=x.b.div(T()),_=x.b.div(P()),W=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(B,{children:Object(z.a)(Array(15).keys()).map((function(e){return Object(r.jsx)(D,{children:e+1},e)}))}),Object(r.jsx)(F,{children:"ABCDEFGHIJKLMNO".split("").map((function(e){return Object(r.jsx)(_,{children:e},e)}))})]})},H=38,J=function(e){var t=e.x,n=e.y,c=e.type;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p.Rect,{x:t*H,y:n*H,width:H,height:H,fill:"#08763b",stroke:"#badce9","data-testid":"board-field"}),c?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p.Rect,{x:t*H+19,y:n*H-9.5+1,width:H,height:H,fill:f[c].color,rotation:45,"data-testid":"rotated-rect"}),Object(r.jsx)(p.Rect,{x:t*H,y:n*H,width:H,height:H,fill:f[c].color,stroke:"#badce9"}),Object(r.jsx)(p.Text,{x:t*H,y:n*H+8,width:H,height:H,text:f[c].text,align:"center",fontSize:7,verticalAlign:"center",fontFamily:"Calibri",padding:1}),"middle"===c&&Object(r.jsx)(p.Star,{x:t*H+19,y:n*H+19,numPoints:8,innerRadius:6.333333333333333,outerRadius:9.5,fill:"#DC9C10",opacity:1,"data-testid":"star"})]}):null]})},X=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(z.a)(Array(15).keys()).map((function(e){return Object(z.a)(Array(15).keys()).map((function(t){return Object(r.jsx)(J,{x:e,y:t},"".concat(e).concat(e).concat(t))}))})).flat(),[[h,"word2"],[v,"word3"],[g,"letter2"],[m,"letter3"],[[[7,7]],"middle"]].map((function(e){return t=e[0],n=e[1],t.map((function(e){return Object(r.jsx)(J,{x:e[0],y:e[1],type:n},e)}));var t,n}))]})},Z=(n(202),function(e){var t=e.top;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:t?"tridiv top":"tridiv ",children:Object(r.jsxs)("div",{className:"scene",children:[Object(r.jsxs)("div",{className:"shape prism-1 pri-1",children:[Object(r.jsx)("div",{className:"face ft",children:Object(r.jsx)("div",{className:"photon-shader bcg1"})}),Object(r.jsx)("div",{className:"face bk",children:Object(r.jsx)("div",{className:"photon-shader bcg2"})}),Object(r.jsx)("div",{className:"face-wrapper rt",children:Object(r.jsx)("div",{className:"face",children:Object(r.jsx)("div",{className:"photon-shader bcg2"})})}),Object(r.jsx)("div",{className:"face-wrapper lt",children:Object(r.jsx)("div",{className:"face",children:Object(r.jsx)("div",{className:"photon-shader bcg2"})})}),Object(r.jsx)("div",{className:"face bm",children:Object(r.jsx)("div",{className:"photon-shader bcg2"})})]}),Object(r.jsxs)("div",{className:"shape cuboid-1 cub-1",children:[Object(r.jsx)("div",{className:"face ft",children:Object(r.jsx)("div",{className:"photon-shader bcg2"})}),Object(r.jsx)("div",{className:"face bk",children:Object(r.jsx)("div",{className:"photon-shader bcg2"})}),Object(r.jsx)("div",{className:"face rt",children:Object(r.jsx)("div",{className:"photon-shader bcg2"})}),Object(r.jsx)("div",{className:"face lt",children:Object(r.jsx)("div",{className:"photon-shader bcg2"})}),Object(r.jsx)("div",{className:"face bm",children:Object(r.jsx)("div",{className:"photon-shader bcg2"})}),Object(r.jsx)("div",{className:"face tp",children:Object(r.jsx)("div",{className:"photon-shader bcg2"})})]})]})})})}),V=n(225),U=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],a=A(),i=a.currentMoves,o=a.isLossMove;return Object(c.useEffect)((function(){var e=i.filter((function(e,t){return!o(t)})).map((function(e){return N(e)})).reduce((function(e,t){var n=t.word;return[].concat(Object(z.a)(e),Object(z.a)(n.replaceAll(/\([^)]+\)/g,"").split("")))}),"");r(Object(z.a)(e))}),[i.length]),{usedLetters:n}};function Y(){var e=Object(b.a)(["\n  box-sizing: border-box;\n  text-align: center;\n  width: 30px;\n  height: 30px;\n  background-color: #f8e8c7;\n  border: 1px solid rgb(218, 193, 145);\n  color: #015b52;\n  border-radius: 3px;\n  font-size: 20px;\n  line-height: 30px;\n  opacity: ",";\n"]);return Y=function(){return e},e}function K(){var e=Object(b.a)(["\n  position: absolute;\n  display: flex;\n  flex-wrap: wrap;\n  width: 300px;\n  height: 300px;\n  user-select: none;\n  background-color: rgb(75, 75, 75);\n  z-index: 2;\n  top: 40px;\n  left: 20px;\n"]);return K=function(){return e},e}var G=x.b.div(K()),q=x.b.div(Y(),(function(e){return e.onBoard?.4:1})),Q=function(e){var t=Object(z.a)(e);return"AAAAAAAAA\u0104BBCCC\u0106DDDEEEEEEE\u0118FGGHHIIIIIIIIJJKKKLLL\u0141\u0141MMMNNNNN\u0143OOOOOO\xd3PPPRRRRSSSS\u015aTTTUUWWWWYYYYZZZZZ\u017b\u0179??".split("").map((function(e,n){var c=t.includes(e);return c&&t.splice(t.indexOf(e),1),Object(r.jsx)(q,{onBoard:c,children:e},n)}))},$=function(){var e=A().actualMove,t=Object(c.useState)([]),n=Object(l.a)(t,2),a=n[0],i=n[1],o=U().usedLetters;return Object(c.useEffect)((function(){i([].concat(Object(z.a)(o),Object(z.a)(e.letters)))}),[o,e]),Object(r.jsx)(G,{"data-testid":"deletion",children:Q(a)})},ee=n(224),te={moves:[],actualMoveIndex:void 0,actualOptionIndex:0,withoutNewMove:!1},ne="SET_MOVES_ARRAY",re="SET_MOVE_INDEX",ce="INCREMENT_MOVE_INDEX",ae="DECREMENT_MOVE_INDEX",ie="INCREMENT_OPTION_INDEX",oe="DECREMENT_OPTION_INDEX",se="SET_OPTION_INDEX",le="SET_WITHOUT_NEW_MOVE";function ue(e,t){var n=e.moves,r=e.actualMoveIndex,c=e.actualOptionIndex;switch(t.type){case ne:return Object(s.a)(Object(s.a)({},e),{},{moves:t.payload,actualMoveIndex:0,actualOptionIndex:N(t.payload[0]).index});case re:var a=t.payload>-1?t.payload:e.moves.length-1+t.payload;return Object(s.a)(Object(s.a)({},e),{},{actualMoveIndex:a,actualOptionIndex:N(n[a]).index});case ce:return n.length>r+2?Object(s.a)(Object(s.a)({},e),{},{actualMoveIndex:r+1,actualOptionIndex:N(n[r+1]).index}):e;case ae:return r>0?Object(s.a)(Object(s.a)({},e),{},{actualMoveIndex:r-1,actualOptionIndex:N(n[r-1]).index}):e;case se:return Object(s.a)(Object(s.a)({},e),{},{actualOptionIndex:t.payload});case ie:return c+1<n[r].choiceOptions.length?Object(s.a)(Object(s.a)({},e),{},{actualOptionIndex:c+1}):e;case oe:return 0!==e.actualOptionIndex?Object(s.a)(Object(s.a)({},e),{},{actualOptionIndex:e.actualOptionIndex-1}):e;case le:return Object(s.a)(Object(s.a)({},e),{},{withoutNewMove:t.payload})}}function de(){var e=Object(b.a)(["\n  position: absolute;\n  width: 500px;\n  top: 40px;\n  left: 10px;\n  z-index: 2;\n"]);return de=function(){return e},e}var je=x.b.div(de()),be=function(e){var t,n,c,a,i=parseInt(null===(t=N(e[0]))||void 0===t?void 0:t.movePoints)||0,o=parseInt(null===(n=N(e[1]))||void 0===n?void 0:n.movePoints)||0;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(ee.a.Cell,{"data-player":0,children:["+",i]}),Object(r.jsx)(ee.a.Cell,{"data-player":0,children:i+parseInt(null===(c=e[0])||void 0===c?void 0:c.pointsBefore)}),Object(r.jsxs)(ee.a.Cell,{"data-player":1,children:["+",o]}),Object(r.jsx)(ee.a.Cell,{"data-player":1,children:o+parseInt(null===(a=e[1])||void 0===a?void 0:a.pointsBefore)||""})]})},xe=function(){var e=Object(c.useContext)(j),t=e.moves,n=e.dispatch,a=t.slice(0,t.length-(t.length%2?2:1)),i=(t[t.length-1].letters-t[t.length-2].pointsBefore-parseInt(N(t[t.length-2]).movePoints))/2,o=parseInt(t[t.length-3].pointsBefore)+parseInt(N(t[t.length-3]).movePoints)-i,s=parseInt(t[t.length-2].pointsBefore)+parseInt(N(t[t.length-2]).movePoints)+i;return Object(r.jsxs)(r.Fragment,{children:[a.map((function(e,c){return c%2?null:Object(r.jsx)(ee.a.Row,{textAlign:"center",onClick:function(e){return n({type:re,payload:c+parseInt(e.target.dataset.player)})},children:be(t.slice(c,c+2))},c)})),Object(r.jsxs)(ee.a.Row,{textAlign:"center",children:[Object(r.jsxs)(ee.a.Cell,{"data-player":0,children:[t.length%2?"-":"+",i]}),Object(r.jsx)(ee.a.Cell,{"data-player":0,children:t.length%2?o:s}),Object(r.jsxs)(ee.a.Cell,{"data-player":1,children:[t.length%2?"+":"-",i]}),Object(r.jsx)(ee.a.Cell,{"data-player":1,children:t.length%2?s:o})]})]})},pe=function(){var e=Object(c.useContext)(j).moves;return Object(r.jsx)(je,{"data-testid":"full-result",children:Object(r.jsxs)(ee.a,{celled:!0,structured:!0,children:[Object(r.jsx)(ee.a.Header,{children:Object(r.jsxs)(ee.a.Row,{children:[Object(r.jsx)(ee.a.HeaderCell,{colSpan:"2",textAlign:"center",children:e[0].nick.replace("_"," ")}),Object(r.jsx)(ee.a.HeaderCell,{colSpan:"2",textAlign:"center",children:e[1].nick.replace("_"," ")})]})}),Object(r.jsx)(ee.a.Body,{children:Object(r.jsx)(xe,{})})]})})},Oe=n(113),fe=n.n(Oe),he=n(138),ve=function(){var e=Object(c.useContext)(j).actualMoveIndex,t=A(),n=t.currentMoves,r=t.actualMove;return{addDiagramCallback:function(){var t=Object(he.a)(fe.a.mark((function t(){var c;return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={moves:n,letters:r.letters,index:e,solutions:r},console.log(c),t.abrupt("return",new Promise((function(e,t){e({id:"476"})})));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}},ge=function(){var e=Object(c.useContext)(j),t=e.withoutNewMove,n=e.dispatch,r=Object(c.useState)(!1),a=Object(l.a)(r,2),i=a[0],o=a[1],s=Object(c.useState)(!1),u=Object(l.a)(s,2),d=u[0],b=u[1];Object(c.useEffect)((function(){i&&(!function(e){var t=document.createElement("a");t.download="image.png",t.href=e.current.toDataURL(),document.body.appendChild(t),t.click(),document.body.removeChild(t)}(d),o(!1),n({type:le,payload:!1}))}),[t,i]);return[function(e,t){n({type:le,payload:t}),o(!0),b(e)}]},me=n(222),ye=n(227),we=function(e){var t=e.id,n=e.closeCallback;return Object(r.jsxs)(me.a,{onClose:n,open:!0,children:[Object(r.jsx)(me.a.Header,{children:"Pomy\u015blnie dodano"}),Object(r.jsx)(me.a.Content,{children:Object(r.jsxs)(me.a.Description,{children:[Object(r.jsxs)(ye.a,{children:["Twoje zadanie jest dost\u0119pne pod adresem localhost:3000/zadania/",t]}),Object(r.jsx)("p",{children:"Je\u017celi doda\u0142e\u015b je przez przypadek, wci\u015bnij przycisk 'anuluj'"})]})}),Object(r.jsxs)(me.a.Actions,{children:[Object(r.jsx)(V.a,{negative:!0,onClick:n,children:"anuluj"}),Object(r.jsx)(V.a,{content:"akceptuj",labelPosition:"right",icon:"checkmark",onClick:n,positive:!0})]})]})};function Ce(){var e=Object(b.a)(["\n  background: #aba2a2 !important;\n  padding: 12px !important;\n"]);return Ce=function(){return e},e}function ke(){var e=Object(b.a)(["\n  display: flex;\n  width: 660px;\n  justify-content: space-between;\n"]);return ke=function(){return e},e}var Ie=x.b.div(ke()),Ne=Object(x.b)(V.a)(Ce()),Ee=function(e){var t=e.stageRef,n=Object(c.useState)(!1),a=Object(l.a)(n,2),i=a[0],o=a[1],s=Object(c.useState)(!1),u=Object(l.a)(s,2),d=u[0],j=u[1],b=Object(c.useState)(""),x=Object(l.a)(b,2),p=x[0],O=x[1],f=ge(),h=Object(l.a)(f,1)[0],v=ve().addDiagramCallback;return Object(r.jsxs)(Ie,{"data-testid":"buttons-wrapper",children:[Object(r.jsx)(Ne,{color:"teal",onClick:function(){return j(!d)},children:"Wykre\u015blanka"}),Object(r.jsx)(Ne,{color:"teal",onClick:function(){return o(!i)},children:"Pe\u0142ny zapis"}),Object(r.jsx)(Ne,{color:"teal",onClick:function(){return h(t,!0)},children:"Zapisz obraz (przed)"}),Object(r.jsx)(Ne,{color:"teal",onClick:function(){return h(t,!1)},children:"Zapisz obraz (po)"}),Object(r.jsx)(Ne,{color:"teal",onClick:function(){return v().then((function(e){return O(e.id)}))},children:"Dodaj jako zadanie"}),d?Object(r.jsx)($,{}):null,i?Object(r.jsx)(pe,{}):null,p?Object(r.jsx)(we,{id:p,closeCallback:function(){return O(null)}}):null]})};function Me(){var e=Object(b.a)(['\n  position: absolute;\n  top: 30px;\n  left: 40px;\n  height: calc(100% - 80px);\n  width: calc(100% - 80px);\n  z-index: 10;\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    background-color: #c02929;\n    width: calc(100% / 15);\n    height: calc(100% / 15);\n    transform: rotate(45deg);\n    left: 30x;\n    box-shadow: 80px 80px #7590c7, 188px 188px #c02929, 294px 294px #7590c7,\n      376px 376px #c02929, 80px -80px #7590c7, 188px -188px #c02929,\n      296px -296px #7590c7, 376px -376px #c02929, 456px -297px #7590c7,\n      564px -189px #c02929, 673px -80px #7590c7, 752px 0px #c02929,\n      673px 80px #7590c7, 564px 189px #c02929, 456px 297px #7590c7;\n  }\n  &::after {\n    content: "";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    box-shadow: 0px 0px 0px 1px #badce9;\n  }\n']);return Me=function(){return e},e}function Ae(){var e=Object(b.a)(["\n      transform: rotateX(0);\n    "]);return Ae=function(){return e},e}function Re(){var e=Object(b.a)(["\n  margin-top: 5px;\n  margin-bottom: 5px;\n  min-width: 650px;\n  height: 650px;\n  width: 650px;\n  box-sizing: content-box;\n  background-color: #08763b;\n  border: 3px solid rgb(34, 51, 51);\n  transform: translateX(65%) perspective(1000px) rotateX(70deg) rotateZ(-45deg);\n  transform-style: preserve-3d;\n  transition: 1s linear;\n  -webkit-transition: 1s linear;\n\n  ","\n"]);return Re=function(){return e},e}var ze=x.b.div(Re(),(function(e){return e.plainView&&Object(x.a)(Ae())})),Pe=x.b.div(Me()),Te=function(){var e,t=Object(c.useContext)(j),n=Object(c.useContext)(j),a=n.moves,i=n.withoutNewMove,o=Object(c.useRef)(null),s=A().actualOption;return Object(r.jsxs)(r.Fragment,{children:[(null===a||void 0===a?void 0:a.length)?Object(r.jsx)(Ee,{stageRef:o}):null,Object(r.jsxs)(ze,{plainView:!!s,"data-testid":"board",children:[!a.length&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Z,{}),Object(r.jsx)(Z,{top:!0})]}),Object(r.jsx)(W,{}),Object(r.jsx)(Pe,{children:Object(r.jsx)(p.Stage,{width:570,height:570,ref:o,children:Object(r.jsx)(j.Provider,{value:t,children:Object(r.jsxs)(p.Layer,{fill:"#08763b",children:[Object(r.jsx)(p.Rect,{width:570,height:570,fill:"#08763b"}),Object(r.jsx)(X,{}),s?Object(r.jsx)(R,{}):null,i||!s||(e=s,I.some((function(t){return t===e.coordinates})))?null:Object(r.jsx)(M,{letters:s.word,coordinates:s.coordinates,isNewMove:!0})]})})})})]})]})},Se=n(139),Le=n(140),Be=/->(\s*.*)/gi,Fe=/(->(\s*.*))| ((best)|(\d+\.\d*))(.*)/gi,De=/\(.+\)/g,_e=/[a-z \u0105\u0119\xf3\u015b\u0142\u017c\u017a\u0107\u0144]/g,We=function(){function e(){var t=this;Object(Se.a)(this,e),this.convertTextByRegex=function(e){return e.match(Fe)},this.findFreeLetters=function(e,t){var n=e.replace(De,"").replace(_e,"?").split(""),r=t.split("");return n.forEach((function(e){return r.splice(r.indexOf(e),1)})),r.join("")},this.pushMoveByLineToArray=function(e,n){var r=e.replace(/\*/g," *").split(/\s+/).filter((function(e){return""!==e}));if(e.match(Be))n.push({index:n.length,nick:r[1],letters:r[2],pointsBefore:r[3],move:e,choiceOptions:[]});else{var c=n.length-1;n[c].choiceOptions.push({index:n[c].choiceOptions.length,evaluate:r[0],coordinates:r[1],word:r[2],movePoints:r[3],percent:r.length>4?"%"===r[4][r[4].length-1]?r[4]:"0%":"",freeLetters:t.findFreeLetters(r[2],n[c].letters)})}},this.readReport=function(e,n){var r=[],c=e.target.files[0];if(!c)return 0;var a=new FileReader;a.onload=function(e){t.convertTextByRegex(e.target.result).forEach((function(e){return t.pushMoveByLineToArray(e,r)})),n(r)},a.readAsText(c)}}return Object(Le.a)(e,[{key:"showPossibilities",value:function(e){}}]),e}();function He(){var e=Object(b.a)(["\n  display: none;\n"]);return He=function(){return e},e}function Je(){var e=Object(b.a)(['\n  font-size: 35px;\n  display: block;\n  color: #3c4a3e;\n  text-transform: uppercase;\n  position: relative;\n  margin-left: 25px;\n  margin-right: 25px;\n  &:visited {\n    color: #3c4a3e;\n  }\n  &:hover {\n    color: #96b364;\n  }\n\n  &:hover:before {\n    opacity: 1;\n    width: 200px;\n  }\n\n  &:before {\n    position: absolute;\n    content: "";\n    width: 130px;\n    height: 2px;\n    background: #3c4a3e;\n    bottom: 70px;\n    left: 50%;\n    transform: translateX(-50%);\n    opacity: 0;\n    transition: 0.4s;\n  }\n  &:first-of-type::after {\n    content: "";\n    position: absolute;\n    width: 3px;\n    height: 80px;\n    transform: rotate(15deg);\n    background: #3c4a3e;\n    top: 60px;\n    right: -25px;\n  }\n']);return Je=function(){return e},e}function Xe(){var e=Object(b.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  height: 200px;\n  line-height: 200px;\n  z-index: 2;\n"]);return Xe=function(){return e},e}var Ze=x.b.div(Xe()),Ve=x.b.a(Je()),Ue=x.b.input(He()),Ye=function(){var e=Object(c.useContext)(j).dispatch,t=Object(c.useRef)(null),n=Object(d.f)(),a=function(t){e({type:ne,payload:Object(z.a)(t)}),n.push("/analiza")};return Object(r.jsxs)(Ze,{"data-testid":"home-menu",children:[Object(r.jsx)(Ue,{ref:t,type:"file",onInput:function(e){return(new We).readReport(e,a)}}),Object(r.jsx)(Ve,{href:"#",onClick:function(){return t.current.click()},children:"Analizuj parti\u0119"}),Object(r.jsx)(Ve,{onClick:function(){return n.push("/zadania")},children:"Rozwi\u0105zuj zadania"})]})};function Ke(){var e=Object(b.a)(["\ndisplay: flex;\nflex-wrap: wrap;\n"]);return Ke=function(){return e},e}var Ge=x.b.div(Ke()),qe=function(){return Object(r.jsxs)(Ge,{children:[Object(r.jsx)(Ye,{}),Object(r.jsx)(Te,{})]})};function Qe(){var e=Object(b.a)(["\n  cursor: pointer;\n"]);return Qe=function(){return e},e}function $e(){var e=Object(b.a)(["\n  flex-grow: 1;\n  width: 80%;\n\n  .ui.basic.striped.table tbody .active {\n    background-color: #d5faddad !important;\n  }\n"]);return $e=function(){return e},e}var et=x.b.div($e()),tt=Object(x.b)(ee.a.Row)(Qe()),nt=function(e){var t=e.params,n=e.selected,a=e.index,i=Object(c.useContext)(j).dispatch,o=t.evaluate,s=t.coordinates,l=t.word,u=t.movePoints,d=t.percent,b=t.freeLetters;return Object(r.jsxs)(tt,{active:n,onClick:function(){return i({type:se,payload:a})},children:[Object(r.jsx)(ee.a.Cell,{children:o}),Object(r.jsx)(ee.a.Cell,{children:s}),Object(r.jsx)(ee.a.Cell,{children:l}),Object(r.jsx)(ee.a.Cell,{children:u}),Object(r.jsx)(ee.a.Cell,{children:d}),Object(r.jsx)(ee.a.Cell,{children:b})]})},rt=function(){var e=Object(c.useContext)(j).actualOptionIndex,t=A().actualMove.choiceOptions.map((function(t,n){return Object(r.jsx)(nt,{index:n,params:t,selected:n===e},n)}));return Object(r.jsx)(et,{children:Object(r.jsxs)(ee.a,{basic:"very",striped:!0,children:[Object(r.jsx)(ee.a.Header,{children:Object(r.jsx)(ee.a.Row,{})}),Object(r.jsx)(ee.a.Body,{children:t})]})})};function ct(){var e=Object(b.a)(["\n        opacity: 0;\n    "]);return ct=function(){return e},e}function at(){var e=Object(b.a)(["\n        color: #015b5266;\n    "]);return at=function(){return e},e}function it(){var e=Object(b.a)(["\n        background-color: #1ae825;\n    "]);return it=function(){return e},e}function ot(){var e=Object(b.a)(["\n    background-color: #f8e8c7;\n    display: inline-block;\n    box-sizing: border-box;\n    color: #015b52;\n    font-size: 40px;\n    height: 65px;\n    min-width: 65px;\n    max-width: 65px;\n    line-height: 65px;\n    border-radius: 10%;\n    text-align: center;\n    cursor: pointer;\n    user-select: none;\n    font-family: Arial;\n    font-weight: bold;\n    position: relative;\n    margin: 6px;\n\n    ","\n    ","\n    ","\n"]);return ot=function(){return e},e}var st=x.b.div(ot(),(function(e){return e.played&&Object(x.a)(it())}),(function(e){return e.blank&&Object(x.a)(at())}),(function(e){return e.transparent&&Object(x.a)(ct())}));function lt(){var e=Object(b.a)(["\n    font-size: 15px;\n    position: absolute;\n    bottom: 12px;\n    right: 8px;\n"]);return lt=function(){return e},e}var ut=x.b.sub(lt()),dt=function(e){var t=e.letter,n=e.played,c=e.onBoard,a=e.transparent,i=t===t.toLowerCase();return Object(r.jsx)(r.Fragment,{children:["(",")"].includes(t)?null:Object(r.jsxs)(st,{played:n,onBoard:c,transparent:a,blank:i,children:[t.toUpperCase(),Object(r.jsx)(ut,{children:!i&&O[t]})]})})};function jt(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  width: 500px;\n"]);return jt=function(){return e},e}var bt=x.b.div(jt()),xt=function(){var e=A(),t=e.actualOption,n=e.actualMove;if(!t)return null;var c=t.freeLetters.split(""),a=function(e){var t=c.indexOf(e);return-1===t||(c.splice(t,1),!1)},i=n.letters.split("").map((function(e,t){return Object(r.jsx)(dt,{letter:e,played:a(e)},t)}));return Object(r.jsx)(bt,{"data-testid":"rack",children:i})},pt=function(){var e=Object(c.useContext)(j).dispatch,t=function(t){t.preventDefault(),39===t.keyCode&&e({type:ce}),37===t.keyCode&&e({type:ae}),38===t.keyCode&&e({type:oe}),40===t.keyCode&&e({type:ie})};return Object(c.useEffect)((function(){return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}),[]),null};function Ot(){var e=Object(b.a)(["\n  min-width: 80px;\n  margin-left: 20px;\n"]);return Ot=function(){return e},e}function ft(){var e=Object(b.a)(["\n  margin: auto;\n"]);return ft=function(){return e},e}var ht=x.b.div(ft()),vt=Object(x.b)(V.a)(Ot()),gt=function(){var e=Object(c.useContext)(j).dispatch;return pt(),Object(r.jsxs)(ht,{"data-testid":"game-navigation",children:[Object(r.jsx)(vt,{color:"teal",icon:"fast backward",onClick:function(){return e({type:re,payload:0})}}),Object(r.jsx)(vt,{color:"teal",icon:"backward",onClick:function(){return e({type:ae})}}),Object(r.jsx)(vt,{color:"teal",icon:"forward",onClick:function(){return e({type:ce})}}),Object(r.jsx)(vt,{color:"teal",icon:"fast forward",onClick:function(){return e({type:re,payload:-1})}})]})},mt=n(223),yt=n(228),wt=n(229),Ct=n(221);function kt(){var e=Object(b.a)(["\n    color: #e84717;\n    font-size: 11px;\n"]);return kt=function(){return e},e}function It(){var e=Object(b.a)(["\n    font-size: 17px;\n    font-weight: bold;\n"]);return It=function(){return e},e}function Nt(){var e=Object(b.a)(["\n    width: 200px;\n"]);return Nt=function(){return e},e}var Et=Object(x.b)(mt.a.Header)(Nt()),Mt=x.b.div(It()),At=x.b.div(kt()),Rt=function(e){var t,n,a=e.order,i=Object(c.useContext)(j),o=i.moves,s=i.actualMoveIndex,u=i.actualOptionIndex,d=Object(c.useState)(0),b=Object(l.a)(d,2),x=b[0],p=b[1],O=o[a].nick.replace("_"," ");return Object(c.useEffect)((function(){var e;p(a===s%2?o[s].pointsBefore:null===(e=o[s+1])||void 0===e?void 0:e.pointsBefore)}),[s,o,a]),Object(r.jsx)(yt.a.Column,{children:Object(r.jsx)(mt.a,{children:Object(r.jsxs)(mt.a.Content,{children:[Object(r.jsx)(Et,{as:"h3",children:O}),Object(r.jsx)(Mt,{children:x}),a===s%2?Object(r.jsxs)(At,{children:["+",null===(t=o[s])||void 0===t||null===(n=t.choiceOptions[u])||void 0===n?void 0:n.movePoints]}):Object(r.jsx)(At,{})]})})})},zt=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(wt.a,{compact:!0,children:[Object(r.jsxs)(yt.a,{columns:2,relaxed:"very",stackable:!0,textAlign:"center",children:[Object(r.jsx)(Rt,{order:0}),Object(r.jsx)(Rt,{order:1})]}),Object(r.jsx)(Ct.a,{vertical:!0,children:"Vs"})]})})};function Pt(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  flex-grow: 1;\n  margin-top: 15px;\n"]);return Pt=function(){return e},e}function Tt(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  min-width: 650px;\n  position: relative;\n  margin-left: 15px;\n  margin-top: 15px;\n"]);return Tt=function(){return e},e}function St(){var e=Object(b.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return St=function(){return e},e}var Lt=x.b.div(St()),Bt=x.b.div(Tt()),Ft=x.b.div(Pt()),Dt=function(){var e=Object(c.useContext)(j).actualMoveIndex;return Object(r.jsxs)(Lt,{children:[Object(r.jsxs)(Bt,{children:[Object(r.jsx)(Te,{}),Object(r.jsx)(gt,{})]}),void 0!==e&&Object(r.jsxs)(Ft,{"data-testid":"move-content",children:[Object(r.jsx)(zt,{}),Object(r.jsx)(rt,{}),Object(r.jsx)(xt,{})]})]})};function _t(){var e=Object(b.a)(["\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  min-height: 100%;\n  clip-path: polygon(81% 23%, 100% 10%, 100% 100%, 0 100%, 0 37%, 18% 30%);\n  background: rgb(129, 246, 166);\n  background: linear-gradient(\n    103deg,\n    rgba(129, 246, 166, 1) 0%,\n    rgba(78, 171, 107, 1) 36%,\n    rgba(41, 150, 75, 1) 100%\n  );\n"]);return _t=function(){return e},e}function Wt(){var e=Object(b.a)(["\n  width: 100vw;\n  min-height: 100vh;\n  position: relative;\n"]);return Wt=function(){return e},e}var Ht=x.b.div(Wt()),Jt=x.b.div(_t()),Xt=function(e){var t=e.children;return Object(r.jsxs)(Ht,{"data-testid":"main-template",children:[Object(r.jsx)(Jt,{"data-testid":"main-template-background"}),t]})},Zt=function(){var e=Object(c.useReducer)(ue,te),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(r.jsx)(j.Provider,{value:Object(s.a)(Object(s.a)({},n),{},{dispatch:a}),children:Object(r.jsx)(Xt,{children:Object(r.jsx)(u.a,{children:Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{exact:!0,path:"/",children:Object(r.jsx)(qe,{})}),Object(r.jsx)(d.a,{path:"/zadania",children:Object(r.jsx)(Dt,{})}),Object(r.jsx)(d.a,{path:"/analiza",children:Object(r.jsx)(Dt,{})})]})})})})};n(209);o.a.render(Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(Zt,{})}),document.getElementById("root"))}},[[210,1,2]]]);
//# sourceMappingURL=main.e094147e.chunk.js.map