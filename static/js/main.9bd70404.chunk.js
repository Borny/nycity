(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/imgOne.909a66ef.jpg"},13:function(e,t,a){e.exports=a.p+"static/media/imgTwo.31ff32f8.jpg"},14:function(e,t,a){e.exports=a.p+"static/media/imgThree.d1ba0fb3.jpg"},15:function(e,t,a){e.exports=a.p+"static/media/imgFour.441d080f.jpg"},16:function(e,t,a){e.exports=a.p+"static/media/imgFive.d8128a4f.jpg"},17:function(e,t,a){e.exports=a.p+"static/media/imgSix.dc600b71.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/imgSeven.8d989eb3.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/imgEight.0e27794c.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/imgNine.29282565.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/imgOne.6fa2007f.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/imgTwo.4e2ab3fa.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/imgThree.9778e454.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/imgFour.0146a4b3.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/imgFive.062efb95.jpg"},39:function(e,t,a){e.exports=a(76)},73:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(23),l=a.n(i),s=a(3),c=a(4),o=a(6),m=a(5),u=a(7),d=a(79),h=a(81),p=a(80),g=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){!function(e){var t,a,n,r;e=new Date(e).getTime(),isNaN(e)||setInterval(function(){var i=new Date;i=i.getTime();var l=parseInt((e-i)/1e3);l>=0&&(t=parseInt(l/86400),l%=86400,console.log(t),a=parseInt(l/3600),l%=3600,console.log(a),n=parseInt(l/60),l%=60,console.log(n),r=parseInt(l),console.log(r),document.getElementById("days").innerHTML=parseInt(t,10),document.getElementById("hours").innerHTML=("0"+a).slice(-2),document.getElementById("minutes").innerHTML=("0"+n).slice(-2),document.getElementById("seconds").innerHTML=("0"+r).slice(-2))},1e3)}("10/26/2018 11:30:00 PM")}},{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"countdown countdown_ny"},r.a.createElement("header",{className:"header_countdown header_ny"},r.a.createElement("h1",null,"New York City here we come!!")),r.a.createElement("p",{className:"timer timer_ny"},r.a.createElement("span",{id:"days"}),"Day",r.a.createElement("span",{id:"hours"}),"Hours",r.a.createElement("span",{id:"minutes"}),"Minutes",r.a.createElement("br",null),r.a.createElement("span",{id:"seconds"}),"Seconds")))}}]),t}(n.Component),v=a(11),y=a.n(v);y.a.initializeApp({apiKey:"AIzaSyBFZzHhjYXYSQ8XCIRc-MNqZ6RWRse1Vpg",authDomain:"nycity-15b5a.firebaseapp.com",databaseURL:"https://nycity-15b5a.firebaseio.com",projectId:"nycity-15b5a",storageBucket:"nycity-15b5a.appspot.com",messagingSenderId:"11466953563"});var f=new y.a.auth.GoogleAuthProvider,b=y.a.auth(),E=y.a,S=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={cards:[],cardsUrls:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.database().ref("article_content").on("value",function(t){var a=t.val(),n=[];for(var r in a)n.push({id:r,title:a[r].title,dayNumberArticle:a[r].dayNumberArticle,summary:a[r].summary,dayStory:a[r].dayStory});e.setState({cards:n})});var t={cardOne:"dayOne",cardTwo:"dayTwo",cardThree:"dayThree",cardFour:"dayFour",cardFive:"dayFive",cardSix:"daySix"},a=[];for(var n in t){var r=E.storage().ref().child("photos/".concat(t[n],"/").concat(n,".jpg")).getDownloadURL().then(function(e){return e}).catch(function(e){});a.push(r)}var i=[];Promise.all(a).then(function(t){t.map(function(t){i.push(t),e.setState({cardsUrls:i})})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t="cards";return this.props.hide&&(t="cards hide"),r.a.createElement("div",{className:t},r.a.createElement("ul",null,this.state.cards.map(function(t,a){return r.a.createElement("li",{className:"card",key:a,id:a},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"post-it"},t.dayNumberArticle),r.a.createElement("img",{src:e.state.cardsUrls[a],id:"img".concat(a),alt:"new york",onClick:e.props.hideClick}),r.a.createElement("div",{className:"card-text"},r.a.createElement("p",null,t.title))))})))}}]),t}(n.Component),w=a(29),N=a.n(w),O=(a(70),a(12)),j=a.n(O),k=a(13),x=a.n(k),C=a(14),T=a.n(C),F=a(15),D=a.n(F),A=a(16),H=a.n(A),I=a(17),M=a.n(I),L=a(30),U=a.n(L),P=a(31),R=a.n(P),_=a(32),z=a.n(_),B=a(33),q=a.n(B),W=a(34),G=a.n(W),V=a(35),J=a.n(V),Y=a(36),X=a.n(Y),Z=a(37),K=a.n(Z),Q=[j.a,x.a,T.a,D.a,H.a,M.a,U.a,R.a,z.a],$=[q.a,G.a,J.a,X.a,K.a],ee=[j.a,x.a,T.a,D.a,H.a,M.a],te=[j.a,x.a,T.a,D.a,H.a,M.a],ae=[j.a,x.a,T.a,D.a,H.a,M.a],ne=[j.a,x.a,T.a,D.a,H.a,M.a],re=[j.a,x.a,T.a,D.a,H.a,M.a],ie=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={photoIndex:0,isOpen:!1,articles:[],articlesUrls:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.database().ref("article_content").on("value",function(t){var a=t.val(),n=[];for(var r in a)n.push({id:r,title:a[r].title,dayNumberArticle:a[r].dayNumberArticle,summary:a[r].summary,dayStory:a[r].dayStory});e.setState({articles:n})});var t={cardOne:"dayOne",cardTwo:"dayTwo",cardThree:"dayThree",cardFour:"dayFour",cardFive:"dayFive",articlesix:"daySix",articleseven:"daySeven"},a=[];for(var n in t){var r=E.storage().ref().child("photos/".concat(t[n],"/").concat(n,".jpg")).getDownloadURL().then(function(e){return e}).catch(function(e){});a.push(r)}var i=[];Promise.all(a).then(function(t){t.map(function(t){i.push(t),e.setState({articlesUrls:i})})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t="article";this.props.show&&(t="article show");var a=this.state,n=a.photoIndex,i=a.isOpen,l=[];return this.props.articleOne?l=Q:this.props.articleTwo?l=$:this.props.articleThree?l=ee:this.props.articleFour?l=te:this.props.articleFive?l=ae:this.props.articleSix?l=ne:this.props.articleSeven&&(l=re),r.a.createElement("div",{className:t},i&&r.a.createElement(N.a,{mainSrc:l[n],nextSrc:l[(n+1)%l.length],prevSrc:l[(n+l.length-1)%l.length],onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(n+l.length-1)%l.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(n+1)%l.length})}}),this.state.articles.map(function(t,a){var n="article-content";n=e.props.articleOne&&0===a||e.props.articleTwo&&1===a||e.props.articleThree&&2===a||e.props.articleFour&&3===a||e.props.articleFive&&4===a||e.props.articleSix&&5===a||e.props.articleSeven&&6===a?"article-content block":"article-content";var i=[];return 0===a?i=Q:1===a?i=$:2===a?i=ee:3===a?i=te:4===a?i=ae:5===a?i=ne:6===a&&(i=re),r.a.createElement("div",{className:n,id:"article".concat(a),key:a},r.a.createElement("header",null,r.a.createElement("p",null,t.title),r.a.createElement("button",{className:"btn btn-tertiary btn-close",onClick:e.props.hideClick},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17.107",height:"22.589"},r.a.createElement("path",{d:"M16.254 9.539L3.147.362A2 2 0 1 0 .853 3.639l10.934 7.656L.854 18.95a2.001 2.001 0 0 0 2.295 3.276l13.105-9.177a1.99 1.99 0 0 0 .844-1.755 1.992 1.992 0 0 0-.844-1.755z"})))),r.a.createElement("main",null,r.a.createElement("img",{className:"article-img-title",src:e.state.articlesUrls[a],alt:"new york"}),r.a.createElement("p",{className:"article-summary"},t.summary),r.a.createElement("p",{className:"article-text"},t.dayStory),r.a.createElement("div",{className:"img-container"},i.map(function(t,a){return r.a.createElement("div",{key:a},r.a.createElement("img",{src:t,alt:t,onClick:function(){return e.setState({isOpen:!0})}}))}))))}))}}]),t}(n.Component),le=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).articlesOpenHandler=function(t){console.log(t.target.id),"img0"===t.target.id?e.setState(function(e){return{articleOne:!0,cardsHide:!e.cardsHide,articleShow:!e.articleShow}}):"img1"===t.target.id?e.setState(function(e){return{articleTwo:!0,cardsHide:!e.cardsHide,articleShow:!e.articleShow}}):"img2"===t.target.id?e.setState(function(e){return{articleThree:!0,cardsHide:!e.cardsHide,articleShow:!e.articleShow}}):"img3"===t.target.id?e.setState(function(e){return{articleFour:!0,cardsHide:!e.cardsHide,articleShow:!e.articleShow}}):"img4"===t.target.id?e.setState(function(){return{articleFive:!0}}):"img5"===t.target.id?e.setState(function(){return{articleSix:!0}}):"img6"===t.target.id&&e.setState(function(){return{articleSeven:!0}}),e.setState(function(e){return{}})},e.closeArticleHandler=function(t){e.setState({cardsHide:!1,articleShow:!1,articleOne:!1,articleTwo:!1,articleThree:!1,articleFour:!1,articleFive:!1,articleSix:!1,articleSeven:!1})},e.state={cardsHide:!1,articleShow:!1,articleOne:!1,articleTwo:!1,articleThree:!1,articleFour:!1,articleFive:!1,articleSix:!1,articleSeven:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="blog";return this.props.open&&(e="blog open"),r.a.createElement("div",{className:e},r.a.createElement("header",{className:"header"},r.a.createElement("h1",null),r.a.createElement("button",{className:"btn btn-tertiary btn-comment",onClick:this.props.commentClickHandler},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"25"},r.a.createElement("path",{fill:"#FFF",d:"M26 0H4a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h3v6.766L12.5 18H26a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4z"})))),r.a.createElement(g,null),r.a.createElement(ie,{hideClick:this.closeArticleHandler,show:this.state.articleShow,articleOne:this.state.articleOne,articleTwo:this.state.articleTwo,articleThree:this.state.articleThree,articleFour:this.state.articleFour,articleFive:this.state.articleFive,articleSix:this.state.articleSix,articleSeven:this.state.articleSeven}),r.a.createElement("main",{className:"main"},r.a.createElement(S,{hideClick:this.articlesOpenHandler,hide:this.state.cardsHide})))}}]),t}(n.Component),se=a(20),ce=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={username:"",comment:"",photo:"",user:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(se.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){if(""===this.refs.comment.value)alert("you cannot publish nothing");else{var t=E.database().ref("messages"),a={comment:this.state.comment,user:this.state.user.displayName,photo:this.state.user.photoURL,sentAt:E.database.ServerValue.TIMESTAMP};t.push(a),this.setState({comment:"",username:""})}e.preventDefault()}},{key:"componentDidMount",value:function(){var e=this;b.onAuthStateChanged(function(t){t&&e.setState({user:t})})}},{key:"login",value:function(){var e=this;b.signInWithPopup(f).then(function(t){var a=t.user;e.setState({user:a})}).catch(console.log("Could not connect to Google"))}},{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},this.state.user&&this.props.userState?r.a.createElement("form",{className:"form-add",onSubmit:this.handleSubmit.bind(this)},r.a.createElement("input",{className:"hidden",type:"text",name:"username",ref:"username",onChange:this.handleChange.bind(this),value:this.state.username}),r.a.createElement("input",{className:"input-send",type:"text",name:"comment",ref:"comment",placeholder:"Say something!",onChange:this.handleChange.bind(this),value:this.state.comment}),r.a.createElement("button",{className:"btn btn-secondary"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20"},r.a.createElement("path",{d:"M0 0v7.014L10 10 0 12.986V20l20-10z"})))):r.a.createElement("button",{className:"btn btn-primary",onClick:this.login.bind(this)},"Login with Google"))}}]),t}(n.Component),oe=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={messagesList:[],user:null,userType:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.database().ref("messages").on("value",function(t){var a=t.val(),n=[];for(var r in a)n.push({id:r,comment:a[r].comment,user:a[r].user,firstName:a[r].user.split(" ")[0],firstLetter:a[r].user.split(" ")[0].charAt(0),photo:a[r].photo,sentAt:a[r].sentAt,day:new Intl.DateTimeFormat("fr-FR",{year:"numeric",month:"short",day:"2-digit"}).format(a[r].sentAt),time:new Intl.DateTimeFormat("fr-FR",{hour:"2-digit",minute:"2-digit"}).format(a[r].sentAt)});e.setState({messagesList:n});var i=document.querySelector(".message-list");i.scrollTop=i.scrollHeight}),b.onAuthStateChanged(function(t){t&&e.setState({user:t})})}},{key:"logout",value:function(){var e=this;b.signOut().then(function(){e.setState({user:null})})}},{key:"render",value:function(){var e="comments";this.props.open&&(e="comments open");var t="message-block";return r.a.createElement("div",{className:e},r.a.createElement("header",{className:"header"},r.a.createElement("button",{className:"btn btn-tertiary btn-close",onClick:this.props.close},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17.107",height:"22.589"},r.a.createElement("path",{d:"M16.254 9.539L3.147.362A2 2 0 1 0 .853 3.639l10.934 7.656L.854 18.95a2.001 2.001 0 0 0 2.295 3.276l13.105-9.177a1.99 1.99 0 0 0 .844-1.755 1.992 1.992 0 0 0-.844-1.755z"}))),r.a.createElement("h2",null,"Express yourself !"),r.a.createElement("button",{className:"btn btn-tertiary btn-logout",onClick:this.logout.bind(this)},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 26.85"},r.a.createElement("defs",null),r.a.createElement("g",{id:"logout",transform:"translate(-305 -95)"},r.a.createElement("path",{id:"Soustraction_2","data-name":"Soustraction 2",d:"M-743-15.15a11.753 11.753 0 0 1-8.485-3.617A12.452 12.452 0 0 1-755-27.5a12.454 12.454 0 0 1 3.515-8.733A11.85 11.85 0 0 1-747-39.15v2.669a9.94 9.94 0 0 0-5.6 8.981 9.754 9.754 0 0 0 9.6 9.88 9.754 9.754 0 0 0 9.6-9.88 9.94 9.94 0 0 0-5.6-8.981v-2.669a11.85 11.85 0 0 1 4.486 2.918A12.453 12.453 0 0 1-731-27.5a12.451 12.451 0 0 1-3.514 8.732A11.753 11.753 0 0 1-743-15.15z",transform:"translate(1060 137)"}),r.a.createElement("rect",{id:"Rectangle_26","data-name":"Rectangle 26",width:"2",height:"10",rx:"1",transform:"translate(316 95)"}))))),r.a.createElement("div",{className:"message-list"},r.a.createElement("ul",null,this.state.messagesList.map(function(e){return t="Tristan Deloris"===e.user||"Jonathan Naeck"===e.user?"message-block admin":"message-block",r.a.createElement("li",{className:t,key:e.id},r.a.createElement("div",{className:"message-photo"},r.a.createElement("img",{src:e.photo,alt:e.firstLetter})),r.a.createElement("div",{className:"message-data"},r.a.createElement("p",{className:"message-username"},e.firstName," - ",e.day),r.a.createElement("p",{className:"message-comment"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"25"},r.a.createElement("path",{d:"M0 0h10v25S8.797.031 0 0z"})),e.comment,r.a.createElement("span",{className:"message-comment-time"},e.time))))}))),r.a.createElement(ce,{userState:this.state.user}))}}]),t}(n.Component),me=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).commentToggleHandler=function(){e.setState(function(e){return{commentOpen:!e.commentOpen}})},e.commentCloseHandler=function(){e.setState({commentOpen:!1})},e.state={messagesList:[],user:null,commentOpen:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement(le,{commentClickHandler:this.commentToggleHandler,open:this.state.commentOpen}),r.a.createElement(oe,{open:this.state.commentOpen,close:this.commentCloseHandler}))}}]),t}(n.Component),ue=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={title:"",dayNumberPhoto:"",dayNumberArticle:"",summary:"",dayStory:"",user:null,selectedFile:"",completedMessage:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.onAuthStateChanged(function(t){t&&e.setState({user:t})})}},{key:"login",value:function(){var e=this;b.signInWithPopup(f).then(function(t){var a=t.user;e.setState({user:a})}).catch(console.log("Could not connect to Google"))}},{key:"fileSelectedHandler",value:function(e){this.setState({selectedFile:e.target.files,dayNumberPhoto:this.state.dayNumberPhoto})}},{key:"handlePhotoSelectChange",value:function(e){this.setState({dayNumberArticle:[e.target.value]})}},{key:"handleUpload",value:function(e){if(""===this.refs.selectDay.value)alert("choose a fucking day you dumbass!!!!");else for(var t=this.state.selectedFile,a=0;a<t.length;a++){Object(v.storage)().ref("photos/".concat(this.state.dayNumberPhoto,"/").concat(t[a].name)).put(t[a]).on("state_changed",function(){},function(e){},function(){alert("completed"),console.log("completed")})}e.preventDefault()}},{key:"handleSubmit",value:function(e){if(""===this.refs.dayNumberArticle.value||""===this.refs.title.value||""===this.refs.summary.value||""===this.refs.dayStory.value)alert("you cannot publish nothing");else{var t=E.database().ref("article_content"),a={title:this.state.title,dayNumberArticle:this.state.dayNumberArticle,summary:this.state.summary,dayStory:this.state.dayStory};t.push(a),this.setState({title:"",dayNumberArticle:"",summary:"",dayStory:""})}e.preventDefault()}},{key:"handleChange",value:function(e){this.setState(Object(se.a)({},e.target.name,[e.target.value]))}},{key:"handleSelectChange",value:function(e){this.setState({dayNumberPhoto:[e.target.value]})}},{key:"handleTextareaChange",value:function(e){this.setState({summary:[e.target.value]})}},{key:"handleTextareaDayStoryChange",value:function(e){this.setState({dayStory:[e.target.value]})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"admin_page"},!this.state.user||"tristan.deloris@gmail.com"!==this.state.user.email&&"jon.naeck@gmail.com"!==this.state.user.email?r.a.createElement("button",{className:"btn btn-go",onClick:this.login.bind(this)},"Login"):r.a.createElement("div",null,r.a.createElement("div",{className:"upload-form"},r.a.createElement("h2",null,"Upload articles images"),r.a.createElement("label",{className:"label-admin"},"Day number",r.a.createElement("select",{className:"select-admin",value:this.state.value,onChange:this.handleSelectChange.bind(this),ref:"selectDay"},r.a.createElement("option",{value:""},"Select a day"),r.a.createElement("option",{value:"dayOne"},"Day one"),r.a.createElement("option",{value:"dayTwo"},"Day two"),r.a.createElement("option",{value:"dayThree"},"Day three"),r.a.createElement("option",{value:"dayFour"},"Day four"),r.a.createElement("option",{value:"dayFive"},"Day five"),r.a.createElement("option",{value:"daySix"},"Day six"),r.a.createElement("option",{value:"daySeven"},"Day seven"))),r.a.createElement("label",{className:"admin-upload-picture"},r.a.createElement("input",{className:"hidden",type:"file",onChange:this.fileSelectedHandler.bind(this),ref:function(t){return e.fileInput=t},multiple:!0}),r.a.createElement("div",null,r.a.createElement("p",null,"Rename the photo by the day number",r.a.createElement("br",null),'(i.e : "cardOne.jpg")'),r.a.createElement("button",{onClick:function(){return e.fileInput.click()},className:"btn btn-go",ref:"pickfile"},"Pick file")),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleUpload.bind(this),className:"btn btn-warning"},"Upload"),this.state.completedMessage?r.a.createElement("p",null,"Upload complete"):null))),r.a.createElement("form",{className:"form-admin",onSubmit:this.handleSubmit.bind(this)},r.a.createElement("h2",null,"Upload text"),r.a.createElement("label",{className:"label-admin"},"Day number",r.a.createElement("select",{className:"select-admin",value:this.state.value,onChange:this.handlePhotoSelectChange.bind(this),ref:"dayNumberArticle"},r.a.createElement("option",{value:""},"Select a day"),r.a.createElement("option",{value:"day one"},"Day one"),r.a.createElement("option",{value:"day two"},"Day two"),r.a.createElement("option",{value:"day three"},"Day three"),r.a.createElement("option",{value:"day four"},"Day four"),r.a.createElement("option",{value:"day five"},"Day five"),r.a.createElement("option",{value:"day six"},"Day six"),r.a.createElement("option",{value:"day seven"},"Day seven"))),r.a.createElement("label",{className:"label-admin"},"Article title",r.a.createElement("input",{className:"input-admin",type:"text",name:"title",ref:"title",placeholder:"Enter a title",onChange:this.handleChange.bind(this),value:this.state.title})),r.a.createElement("label",{className:"label-admin"},"Enter a summary",r.a.createElement("textarea",{className:"textarea-admin",name:"summary",ref:"summary",placeholder:"Enter a summary",onChange:this.handleTextareaChange.bind(this),value:this.state.summary})),r.a.createElement("label",{className:"label-admin"},"Write what happened today",r.a.createElement("textarea",{className:"textarea-admin",name:"dayStory",ref:"dayStory",placeholder:"What happened today?",onChange:this.handleTextareaDayStoryChange.bind(this),value:this.state.dayStory})),r.a.createElement("button",{className:"btn btn-warning"},"Upload article"))))}}]),t}(n.Component),de=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Error: path does not exist"))}}]),t}(n.Component),he=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(p.a,{path:"/",component:me,exact:!0,strict:!0}),r.a.createElement(p.a,{path:"/admin",component:ue,exact:!0,strict:!0}),r.a.createElement(p.a,{path:"/error",component:de}))))}}]),t}(n.Component);a(73);l.a.render(r.a.createElement(he,null),document.getElementById("root"))}},[[39,2,1]]]);
//# sourceMappingURL=main.9bd70404.chunk.js.map