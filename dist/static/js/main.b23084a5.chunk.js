(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),u=a(6),s=a.n(u),i=a(10),l=a(73),d=a(74),p=a(84),m=a(83),f=a(13),v=a.n(f),h=a(224),b=a(228),E=a(225),y=a(226),g=a(32),x=a.n(g),C=a(33),_=a.n(C),O=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:v.a.container},r.a.createElement(h.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(h.a,{item:!0,xs:12,md:3,component:b.a,className:_()(v.a.card,v.a.infected)},r.a.createElement(E.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(y.a,{variant:"h5",component:"h2"},r.a.createElement(x.a,{start:0,end:a.value,duration:2.75,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2",component:"p"},"Number of active cases of COVID-19."))),r.a.createElement(h.a,{item:!0,xs:12,md:3,component:b.a,className:_()(v.a.card,v.a.recovered)},r.a.createElement(E.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(y.a,{variant:"h5",component:"h2"},r.a.createElement(x.a,{start:0,end:n.value,duration:2.75,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2",component:"p"},"Number of recoveries from COVID-19."))),r.a.createElement(h.a,{item:!0,xs:12,md:3,component:b.a,className:_()(v.a.card,v.a.deaths)},r.a.createElement(E.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(y.a,{variant:"h5",component:"h2"},r.a.createElement(x.a,{start:0,end:c.value,duration:2.75,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2",component:"p"},"Number of deaths caused by COVID-19."))))):"Loading..."},j=a(31),w=a(34),k=a.n(w),D="https://covid19.mathdro.id/api",S=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=a(45),B=a(80),U=a.n(B),A=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)({}),d=Object(j.a)(l,2),p=d[0],m=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?r.a.createElement(V.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,v=p[0]?r.a.createElement(V.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:U.a.container},u?f:v)},z=a(229),G=a(227),J=a(81),M=a.n(J),P=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(j.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(z.a,{className:M.a.formControl},r.a.createElement(G.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},Q=a(46),R=a.n(Q),q=a(82),L=a.n(q),Y=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a);case 2:n=t.sent,console.log(n),e.setState({data:n,country:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:R.a.container},r.a.createElement("img",{src:L.a,className:R.a.image,alt:"COVID-19"}),r.a.createElement(O,{data:t}),r.a.createElement(P,{handleCountryChange:this.handleCountryChange}),r.a.createElement(A,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(Y,null),document.getElementById("root"))},46:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},80:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},81:function(e,t,a){},82:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},87:function(e,t,a){e.exports=a(207)}},[[87,1,2]]]);