(this.webpackJsonpimages=this.webpackJsonpimages||[]).push([[0],{14:function(e,a,t){},25:function(e,a,t){e.exports=t.p+"static/media/default.695b8016.png"},37:function(e,a,t){e.exports=t.p+"static/media/s20_logo.8861a56c.png"},43:function(e,a,t){e.exports=t(65)},48:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);t(20);var n=t(0),r=t.n(n),l=t(16),o=t.n(l),i=(t(48),t(14),t(24));t(66),t(49);i.initializeApp({apiKey:"AIzaSyCvzTRIbsUGn5LswZjEQ3S5q0n0-syCL_s",authDomain:"sushi-7c58c.firebaseapp.com",databaseURL:"https://sushi-7c58c.firebaseio.com/",projectId:"sushi-7c58c",storageBucket:"sushi-7c58c.appspot.com",messagingSenderId:"723643017410",appId:"1:723643017410:web:197eda27b80544d40a335b"});var s=i,c=t(25),u=t.n(c),m=[],h=[{original:u.a,thumbnail:u.a}];function p(e){var a=e.original;m.includes(a)||(m.push(a),h.splice(1,0,e))}function d(e){for(var a=e.val(),t=Object.keys(a),n=0;n<t.length;n++){var r=a[t[n]];p({original:r.imageURL,thumbnail:r.imageURL,description:r.caption,thumbnailLabel:r.person,originalClass:"customimage"})}}function g(e){console.log(e)}var E=function(){return s.database().ref("images").on("value",d,g),h},v=t(30),f=t.n(v);var b=function(){return r.a.createElement("div",{style:{}},r.a.createElement(f.a,{items:E(),showFullscreenButton:!1,showPlayButton:!0,autoPlay:!1,infinite:!0,slideInterval:5e3}))},w=t(31),C=t(32),S=t(9),U=t(39),y=t(41),I=t(69),N=t(35),P=t(36),A=t(7),O=t(11),T=function(e){Object(y.a)(t,e);var a=Object(U.a)(t);function t(){var e;return Object(w.a)(this,t),(e=a.call(this)).handleUpload=function(){var a=e.state.image;(null===a&&e.setState({showUploadError:!0}),""===e.state.inputCaption&&""===e.state.inputPerson)?e.setState({showInputError:!0}):(s.storage().ref().child("images/".concat(e.state.inputPerson.replace(/[^a-zA-Z ]/g,"")+"_"+e.state.inputCaption.replace(/[^a-zA-Z ]/g,""))).put(a).on("state_changed",(function(e){console.log(e)}),(function(a){console.log(a),e.setState({showServerError:!0})}),(function(){s.storage().ref().child("images/".concat(e.state.inputPerson.replace(/[^a-zA-Z ]/g,"")+"_"+e.state.inputCaption.replace(/[^a-zA-Z ]/g,""))).getDownloadURL().then((function(a){var t={imageURL:a,caption:e.state.inputCaption,person:e.state.inputPerson};s.database().ref("images").push(t)}))})),e.state.showServerError||e.setState({showUploadSuccess:!0}))},e.state={image:null,fileText:"Find an image...",inputCaption:"",inputPerson:"",showUploadError:!1,showUploadSuccess:!1,showInputError:!1,showServerError:!1},e.handleFileChange=e.handleFileChange.bind(Object(S.a)(e)),e.handleCapChange=e.handleCapChange.bind(Object(S.a)(e)),e.handlePplChange=e.handlePplChange.bind(Object(S.a)(e)),e.handleUpload=e.handleUpload.bind(Object(S.a)(e)),e}return Object(C.a)(t,[{key:"handleCapChange",value:function(e){this.setState({inputCaption:e.target.value})}},{key:"handlePplChange",value:function(e){this.setState({inputPerson:e.target.value})}},{key:"handleFileChange",value:function(e){if(e.target.files[0]){var a=e.target.files[0];this.setState((function(){return{image:a}})),this.setState({fileText:a.name})}}},{key:"render",value:function(){var e=this;return this.state.showUploadError&&this.state.showInputError?r.a.createElement("div",{className:"Alert"},r.a.createElement(O.a,{variant:"warning",onClose:function(){return e.setState({showUploadError:!1,showInputError:!1})},dismissible:!0},r.a.createElement("div",{className:"alertText"}," ",r.a.createElement("b",null,"NO INPUTS:")," Please use these forms to input an image caption, your name, and an image!"))):this.state.showUploadError?r.a.createElement("div",{className:"Alert"},r.a.createElement(O.a,{variant:"danger",onClose:function(){return e.setState({showUploadError:!1})},dismissible:!0},r.a.createElement("div",{className:"alertText"}," ",r.a.createElement("b",null,"NO IMAGE:")," Select an image first to upload."))):this.state.showServerError?r.a.createElement("div",{className:"Alert"},r.a.createElement(O.a,{variant:"warning",onClose:function(){return e.setState({showServerError:!1})},dismissible:!0},r.a.createElement("div",{className:"alertText"}," ",r.a.createElement("b",null,"DID NOT UPLOAD:")," Something went wrong with uploading the image to the server. This will be fixed soon!"))):this.state.showInputError?r.a.createElement("div",{className:"Alert"},r.a.createElement(O.a,{variant:"danger",onClose:function(){return e.setState({showInputError:!1})},dismissible:!0},r.a.createElement("div",{className:"alertText"}," ",r.a.createElement("b",null,"NO TEXT:")," Please input a description/caption for your image, as well as your name/nickname."))):this.state.showUploadSuccess?r.a.createElement("div",{className:"Alert"},r.a.createElement(O.a,{variant:"success",onClose:function(){return e.setState({showUploadSuccess:!1})},dismissible:!0}," ",r.a.createElement("b",null,"SUCCESSFUL UPLOAD: ")," Scroll to see your picture in the slide show :-)")):r.a.createElement("div",{className:"ButtonContainer"},r.a.createElement("div",{style:{paddingTop:"7vh",paddingBottom:"2vh",left:"30%",width:"40%",fontSize:"min(2.75vw,1.8vh)",position:"relative"}},r.a.createElement(A.a,null,r.a.createElement(I.a,null,r.a.createElement(N.a,null,r.a.createElement(A.a.Group,{onChange:this.handlePplChange,controlId:"formPerson"},r.a.createElement(A.a.Control,{placeholder:"Name / Alias"}))),r.a.createElement(N.a,null,r.a.createElement(A.a,{onChange:function(a){return e.handleFileChange(a)}},r.a.createElement(A.a.File,{label:this.state.fileText,lang:"en",custom:!0}))),r.a.createElement(N.a,null,r.a.createElement(P.a,{variant:"danger",onClick:this.handleUpload,block:!0},"Click Here To Upload")))),r.a.createElement(I.a,null,r.a.createElement(N.a,null,r.a.createElement("span",{className:"otherForm"},r.a.createElement(A.a.Group,{onChange:function(a){return e.handleCapChange(a)},controlId:"formCaption"},r.a.createElement(A.a.Control,{placeholder:"Image Description"})))))))}}]),t}(n.Component),k=t(37),L=t.n(k);var j=function(){return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"SCS Image Share"," ",r.a.createElement("img",{src:L.a,style:{height:"15vh"},alt:""}))),r.a.createElement(b,null),r.a.createElement(T,null),r.a.createElement("div",{className:"footer"},r.a.createElement("a",{href:"https://github.com/lenghuang/cmu-imageshare"},"Made by Len Huang \xa9 March 2020")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.1d858a63.chunk.js.map