(this.webpackJsonpimages=this.webpackJsonpimages||[]).push([[0],{14:function(e,a,t){},25:function(e,a,t){e.exports=t.p+"static/media/default.695b8016.png"},37:function(e,a,t){e.exports=t.p+"static/media/s20_logo.8861a56c.png"},43:function(e,a,t){e.exports=t(65)},48:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);t(20);var n=t(0),o=t.n(n),r=t(16),l=t.n(r),s=(t(48),t(14),t(24));t(66),t(49);s.initializeApp({apiKey:"AIzaSyCvzTRIbsUGn5LswZjEQ3S5q0n0-syCL_s",authDomain:"sushi-7c58c.firebaseapp.com",databaseURL:"https://sushi-7c58c.firebaseio.com/",projectId:"sushi-7c58c",storageBucket:"sushi-7c58c.appspot.com",messagingSenderId:"723643017410",appId:"1:723643017410:web:197eda27b80544d40a335b"});var i=s,c=t(25),u=t.n(c),h=[],m=[{original:u.a,thumbnail:u.a}];function p(e){var a=e.original;h.includes(a)||(h.push(a),m.splice(1,0,e))}function d(e){for(var a=e.val(),t=Object.keys(a),n=0;n<t.length;n++){var o=a[t[n]];p({original:o.imageURL,thumbnail:o.imageURL,description:o.caption+" ["+o.date+"]",thumbnailLabel:o.person,originalClass:"customimage"})}}function g(e){console.log(e)}var E=function(){return i.database().ref("images").on("value",d,g),m},v=t(30),f=t.n(v);var w=function(){return o.a.createElement("div",{style:{}},o.a.createElement(f.a,{items:E(),showFullscreenButton:!1,showPlayButton:!0,autoPlay:!1,infinite:!0,slideInterval:5e3,lazyLoad:!0}))},b=t(31),C=t(32),S=t(9),U=t(39),y=t(41),I=t(69),N=t(35),P=t(36),A=t(7),O=t(11),k=function(e){Object(y.a)(t,e);var a=Object(U.a)(t);function t(){var e;return Object(b.a)(this,t),(e=a.call(this)).handleUpload=function(){var a=e.state.image;(null===a&&e.setState({showUploadError:!0}),""===e.state.inputPerson)?e.setState({showInputError:!0}):i.storage().ref().child("images/".concat(e.state.inputPerson.replace(/[^a-zA-Z ]/g,"")+"_"+e.state.inputCaption.replace(/[^a-zA-Z ]/g,""))).put(a).on("state_changed",(function(e){console.log(e)}),(function(a){console.log(a),e.setState({showUploadSuccess:!1}),e.setState({showServerError:!0})}),(function(){i.storage().ref().child("images/".concat(e.state.inputPerson.replace(/[^a-zA-Z ]/g,"")+"_"+e.state.inputCaption.replace(/[^a-zA-Z ]/g,""))).getDownloadURL().then((function(a){var t=(new Date).toDateString().substring(4),n={imageURL:a,caption:e.state.inputCaption,person:e.state.inputPerson,date:t};i.database().ref("images").push(n),e.setState({showUploadSuccess:!e.state.showUploadError})}))}))},e.state={image:null,fileText:"",inputCaption:"",inputPerson:"",showUploadError:!1,showUploadSuccess:!1,showInputError:!1,showServerError:!1},e.handleFileChange=e.handleFileChange.bind(Object(S.a)(e)),e.handleCapChange=e.handleCapChange.bind(Object(S.a)(e)),e.handlePplChange=e.handlePplChange.bind(Object(S.a)(e)),e.handleUpload=e.handleUpload.bind(Object(S.a)(e)),e}return Object(C.a)(t,[{key:"handleCapChange",value:function(e){this.setState({inputCaption:e.target.value})}},{key:"handlePplChange",value:function(e){this.setState({inputPerson:e.target.value})}},{key:"handleFileChange",value:function(e){if(e.target.files[0]){var a=e.target.files[0];this.setState((function(){return{image:a}})),this.setState({fileText:a.name})}}},{key:"render",value:function(){var e=this;return this.state.showUploadError&&this.state.showInputError?o.a.createElement("div",{className:"Alert"},o.a.createElement(O.a,{variant:"warning",onClose:function(){return e.setState({showUploadError:!1,showInputError:!1})},dismissible:!0},o.a.createElement("div",{className:"alertText"}," ",o.a.createElement("b",null,"NO INPUTS:")," Please use these forms to input an image caption, your name, and an image!"))):this.state.showUploadError?o.a.createElement("div",{className:"Alert"},o.a.createElement(O.a,{variant:"danger",onClose:function(){return e.setState({showUploadError:!1})},dismissible:!0},o.a.createElement("div",{className:"alertText"}," ",o.a.createElement("b",null,"NO IMAGE:")," Select an image first to upload."))):this.state.showServerError?o.a.createElement("div",{className:"Alert"},o.a.createElement(O.a,{variant:"warning",onClose:function(){return e.setState({showUploadSuccess:!1,showServerError:!1})},dismissible:!0},o.a.createElement("div",{className:"alertText"}," ",o.a.createElement("b",null,"DID NOT UPLOAD:")," Please upload a valid image that's less than 5MB!"))):this.state.showInputError?o.a.createElement("div",{className:"Alert"},o.a.createElement(O.a,{variant:"danger",onClose:function(){return e.setState({showInputError:!1})},dismissible:!0},o.a.createElement("div",{className:"alertText"}," ",o.a.createElement("b",null,"GUESS WHO:")," Please put a name / nickname so we know how cool you are!"))):this.state.showUploadSuccess?o.a.createElement("div",{className:"Alert"},o.a.createElement(O.a,{variant:"success",onClose:function(){return e.setState({showUploadSuccess:!1})},dismissible:!0}," ",o.a.createElement("b",null,"SUCCESSFUL UPLOAD: ")," Scroll to see your picture in the slide show :-)")):o.a.createElement("div",{className:"ButtonContainer"},o.a.createElement("div",{style:{paddingTop:"7vh",paddingBottom:"2vh",left:"30%",width:"40%",fontSize:"min(2.75vw,1.8vh)",position:"relative"}},o.a.createElement(A.a,null,o.a.createElement(I.a,null,o.a.createElement(N.a,null,o.a.createElement(A.a.Group,{onChange:this.handlePplChange,controlId:"formPerson"},o.a.createElement(A.a.Control,{type:"text",placeholder:"Name"}))),o.a.createElement(N.a,null,o.a.createElement(A.a,{onChange:function(a){return e.handleFileChange(a)}},o.a.createElement(A.a.File,{label:this.state.fileText,lang:"en",custom:!0}))))),o.a.createElement(I.a,null,o.a.createElement(N.a,null,o.a.createElement("span",{className:"otherForm"},o.a.createElement(A.a.Group,{onChange:function(a){return e.handleCapChange(a)},controlId:"formCaption"},o.a.createElement(A.a.Control,{type:"text",placeholder:"Description (Optional)"})))),o.a.createElement(N.a,null,o.a.createElement(P.a,{variant:"danger",onClick:this.handleUpload,block:!0},"Upload")))))}}]),t}(n.Component),L=t(37),x=t.n(L);var j=function(){return o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"CMU Image Share"," ",o.a.createElement("img",{src:x.a,style:{height:"15vh"},alt:""})),o.a.createElement("div",{className:"intro"}," ","A platform to see and share the daily happenings of fellow"," ",o.a.createElement("a",{href:"https://www.youtube.com/watch?v=nyHnU123Iew"},"Carnegie Mellon Students"),". Hit arrows on the sides to scroll through images and the bottom right to autoplay! Upload your pictures below!")),o.a.createElement(w,null),o.a.createElement(k,null),o.a.createElement("div",{className:"disclaim"}," ",o.a.createElement("b",null,"DISCLAIMER: ")," Uploaded pictures are publicly visible. By uploading, you agree that you have permission to redistribute this photo from any involved party, including but not limited to: photo creator, people in the photo, people associated with the photo, etc."),o.a.createElement("div",{className:"footer"},o.a.createElement("a",{href:"https://github.com/lenghuang/cmu-imageshare"},"Made by Len Huang \xa9 March 2020")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.4c122fe6.chunk.js.map