(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(26)},18:function(e,t,n){},19:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(12),c=n.n(i),l=(n(18),n(2)),s=n(6),r=n(4),u=n(3),h=n(5),m=(n(19),n(20),function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{onClick:this.props.comingSoon?null:this.props.onClick,style:{border:"4px solid black",width:"150px",height:"150px",borderRadius:"100%",position:"relative",backgroundColor:"#1cc71b",cursor:this.props.comingSoon?"default":"pointer",opacity:this.props.comingSoon?"0.55":"1"}},a.a.createElement("div",{style:{position:"absolute",top:"50%",transform:"translateY(-50%)",textAlign:"center",width:"100%"}},this.props.buttonTitle),this.props.comingSoon?a.a.createElement("div",{style:{position:"absolute",bottom:"-30px",width:"100%",textAlign:"center",fontStyle:"italic",fontSize:"16px"}},"Coming soon..."):null)}}]),t}(o.Component)),p=n(8),d=n(10),b=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(n=Object(r.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).getQandA=function(){return a.a.createElement("div",{style:{display:"flex",width:"100%",height:"100%",pointerEvents:"none",justifyContent:"center",position:"absolute",top:0,right:0,left:0,bottom:0,alignItems:"center"}},a.a.createElement("div",{style:{width:"80%",height:"80%",border:"4px solid black",display:"flex",flexDirection:"column",justifyContent:"space-evenly",backgroundColor:"#1cc71b",position:"absolute",zIndex:15,pointerEvents:"all"}},a.a.createElement("span",{style:{position:"absolute",top:"10px",right:"10px",cursor:"pointer"},onClick:n.closeQandA},"Close ",a.a.createElement(p.a,{icon:d.b})),a.a.createElement("div",null,"Question: ",n.state.question.q),a.a.createElement("div",null,"Answer: ",n.state.question.a)))},n.closeQandA=function(){n.setState({question:null})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",flexGrow:1,position:"relative"}},a.a.createElement("div",{style:{zIndex:5,flexGrow:0,textAlign:"left",padding:"8px 0 0 28px"}},a.a.createElement("span",{style:{cursor:"pointer"},onClick:this.props.backToCategories},a.a.createElement(p.a,{icon:d.a})," Back to Categories")),a.a.createElement("div",{style:{zIndex:5,width:"100%",flexGrow:1,justifyContent:"center",display:"flex"}},this.state.question?a.a.createElement("div",{style:{zIndex:10,width:"100%",height:"100%",position:"absolute",top:0,right:0,bottom:0,left:0,backgroundColor:"black",opacity:"0.4"},onClick:this.closeQandA}):null,this.state.question?this.getQandA():null,this.getQuestions()))}}]),t}(o.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getChildren",value:function(){return a.a.createElement("div",null,"Coming Soon!")}}]),t}(b),g=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getChildren",value:function(){return a.a.createElement("div",null,"Coming Soon!")}}]),t}(b),f=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getChildren",value:function(){return a.a.createElement("div",null,"Coming Soon!")}}]),t}(b),k={q:"What is a muscle?",a:"Muscles are a special type of cell that can contract."},C={q:"What kinds of muscles are there?",a:"There are voluntary muscles which you can control (like in your arms and legs), and involuntary muscles that you can't control (like in your eyes or your stomach). You can also divide muscles into skeletal, smooth, and cardiac muscles. Skeletal muscles are for moving your body. Smooth muscles are in your stomach and blood vessels. Cardiac muscles are in your heart. There are even smooth muscles in your skin attached to each hair to make them stand up!"},v={q:"How do muscles work?",a:"Muscles work using special molecules called actin and myosin. When the brain sends a signal to contract, the myosin filaments pull on the actin filaments, causing the muscle to get shorter."},j={q:"How many muscles do you have?",a:"More than 600! Some major ones are the biceps, triceps, pectorals, deltoids, abdominals, quadriceps, and gluteus maximus. Also, the tongue is a majorly important muscle used for eating and talking."},E={q:"How do you get hiccups?",a:"Hiccups happen when the big muscle at the bottom of your ribcage (the diaphragm) gets irritated. It suddenly pulls air into your lungs and causes your vocal cords to snap shut, making that silly hiccup sound."},w={q:"Why do muscles get cramps?",a:"A cramp happens when a voluntary muscle contracts involuntarily. A chemical imbalance (such as too much lactic acid) causes the muscle to get stuck in a contracted state."},x={q:"Why should you stretch?",a:"Loosening the muscles and increasing blood flow may help limit muscle injuries. It also feels really good!"},O={q:"What is the biggest muscle?",a:"The biggest muscle is the gluteus maximus, which is the main muscle used for walking and standing upright. And it's also used for sitting on!"},T={q:"What is the smallest muscle?",a:"The smallest muscle is the stapedius, which is located inside the ear and helps to support the smallest bone in the body, the stapes."},q={q:"Why do your muscles get sore ?",a:"Muscles get sore when they work harder than usual because of microscopic damage to the muscles. Although it hurts, it usually means the muscles are getting stronger."},S=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(r.a)(this,Object(u.a)(t).call(this))).getQuestions=function(){return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%",justifyContent:"center"}},a.a.createElement("div",{style:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-evenly",margin:"25px 0"}},a.a.createElement(m,{buttonTitle:k.q,onClick:function(){return e.onClick(k)}}),a.a.createElement(m,{buttonTitle:C.q,onClick:function(){return e.onClick(C)}}),a.a.createElement(m,{buttonTitle:v.q,onClick:function(){return e.onClick(v)}}),a.a.createElement(m,{buttonTitle:j.q,onClick:function(){return e.onClick(j)}}),a.a.createElement(m,{buttonTitle:E.q,onClick:function(){return e.onClick(E)}})),a.a.createElement("div",{style:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-evenly",margin:"25px 0"}},a.a.createElement(m,{buttonTitle:w.q,onClick:function(){return e.onClick(w)}}),a.a.createElement(m,{buttonTitle:x.q,onClick:function(){return e.onClick(x)}}),a.a.createElement(m,{buttonTitle:O.q,onClick:function(){return e.onClick(O)}}),a.a.createElement(m,{buttonTitle:T.q,onClick:function(){return e.onClick(T)}}),a.a.createElement(m,{buttonTitle:q.q,onClick:function(){return e.onClick(q)}})))},e.onClick=function(t){e.setState({question:t})},e.state={question:null},e}return Object(h.a)(t,e),t}(b),A=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"getChildren",value:function(){return a.a.createElement("div",null,"Coming Soon!")}}]),t}(b),W=function(e){function t(){return Object(l.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){switch(this.props.page){case"circulatory":return a.a.createElement(y,{backToCategories:this.props.backToCategories});case"respiratory":return a.a.createElement(g,{backToCategories:this.props.backToCategories});case"digestive":return a.a.createElement(f,{backToCategories:this.props.backToCategories});case"muscular":return a.a.createElement(S,{backToCategories:this.props.backToCategories});case"skeletal":return a.a.createElement(A,{backToCategories:this.props.backToCategories})}}}]),t}(o.Component),D=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this))).buttonClick=function(e){n.setState({page:e})},n.backToCategories=function(){n.setState({page:null})},n.state={page:null},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App",style:{display:"flex",flexDirection:"column"}},a.a.createElement("header",{class:"bw-header",style:{flexGrow:0}},a.a.createElement("p",{style:{textAlign:"center",fontSize:"48px"}},"Body Works"),a.a.createElement("p",{style:{textAlign:"center"}},"All about how the body works!")),a.a.createElement("div",{className:"bw-body"},this.state.page?a.a.createElement(W,{page:this.state.page,backToCategories:this.backToCategories}):a.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",width:"100%"}},a.a.createElement(m,{onClick:function(){return e.buttonClick("circulatory")},buttonTitle:"Circulatory System",comingSoon:!0}),a.a.createElement(m,{onClick:function(){return e.buttonClick("respiratory")},buttonTitle:"Respiratory System",comingSoon:!0}),a.a.createElement(m,{onClick:function(){return e.buttonClick("digestive")},buttonTitle:"Digestive System",comingSoon:!0}),a.a.createElement(m,{onClick:function(){return e.buttonClick("muscular")},buttonTitle:"Muscular System"}),a.a.createElement(m,{onClick:function(){return e.buttonClick("skeletal")},buttonTitle:"Skeletal System",comingSoon:!0}))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.e14c9691.chunk.js.map