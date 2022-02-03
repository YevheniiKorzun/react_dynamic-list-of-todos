(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var s=n(23),r=n.n(s),c=n(27),a=n(9),o=n(14),i=n(15),l=n(16),u=n(18),d=n(7),j=n.n(d),h=n(1),b=n.n(h),p=(n(33),n(34),n(35),n(3)),v=n.n(p),f=n(45),O=n(26),m=n(44),x=(n(36),n(0)),g=function(){return Object(x.jsx)("div",{className:"loader-container",children:Object(x.jsxs)("div",{className:"lds-spinner",children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})})},_=(n(38),function(e){var t=e.errorMessage;return Object(x.jsx)("div",{className:"error",children:Object(x.jsx)("h2",{className:"error__message",children:t})})}),U=function(e){var t=e.todos,n=e.selectedUserId,s=e.inputValue,r=e.selectValue,c=e.loading,a=e.errorMessage,o=e.selectUserHandler,i=e.changeInputValue,l=e.changeSelectValue,u=e.randomize;return Object(x.jsxs)("div",{className:"TodoList",children:[Object(x.jsx)("h2",{children:"Todos:"}),Object(x.jsx)("div",{children:Object(x.jsx)(f.a,{className:"mb-3",children:Object(x.jsxs)("div",{className:"TodoList__control-panel",children:[Object(x.jsx)("div",{className:"TodoList__input",children:Object(x.jsx)(O.a,{value:s,onChange:i,placeholder:"Search by title"})}),Object(x.jsx)("div",{className:"TodoList__select",children:Object(x.jsxs)(m.a.Select,{value:r,onChange:l,children:[Object(x.jsx)("option",{value:"all",children:"All"}),Object(x.jsx)("option",{value:"not completed",children:"Active"}),Object(x.jsx)("option",{value:"completed",children:"Completed"})]})}),Object(x.jsx)("button",{className:"button TodoList__button",type:"button",onClick:u,children:"Randomize"})]})})}),c?Object(x.jsx)(g,{}):Object(x.jsx)(x.Fragment,{children:a.length?Object(x.jsx)(_,{errorMessage:a}):Object(x.jsx)("div",{className:"TodoList__list-container",children:Object(x.jsx)("ul",{className:"TodoList__list",children:0!==t.length&&t.map((function(e){return Object(x.jsxs)("li",{className:v()("TodoList__item",{"TodoList__item--checked":e.completed,"TodoList__item--unchecked":!e.completed}),children:[Object(x.jsxs)("label",{htmlFor:e.id,children:[Object(x.jsx)("input",{id:e.id,type:"checkbox",checked:e.completed,readOnly:!0}),Object(x.jsx)("p",{children:e.title})]}),Object(x.jsx)("button",{className:v()("TodoList__user-button button",{"TodoList__user-button--selected":+e.userId===n}),type:"button",value:e.userId,onClick:function(){return o(e.userId)},children:"User #".concat(e.userId)})]},e.id)}))})})})]})},N=(n(41),"https://mate.academy/students-api");function y(e){var t;return t=void 0!==e?"".concat(N,"/todos?completed=").concat(e.toString()):"".concat(N,"/todos"),fetch(t).then((function(e){return e.json()}))}function k(e){var t="".concat(N,"/users/").concat(e);return fetch(t).then((function(e){return e.json()}))}var S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:null,isNoUserErrorVisible:!1,loading:!1},e.clear=function(){e.setState({user:null}),e.props.clearUser()},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.selectUser()}},{key:"componentDidUpdate",value:function(){var e=Object(a.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.userId===t.userId){e.next=3;break}return e.next=3,this.selectUser();case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"selectUser",value:function(){var e=Object(a.a)(j.a.mark((function e(){var t,n=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.prev=1,e.next=4,k(this.props.userId);case 4:t=e.sent,this.setState({user:t,isNoUserErrorVisible:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),this.setState({isNoUserErrorVisible:!0});case 11:return e.prev=11,setTimeout((function(){n.setState({loading:!1})}),500),e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.user,n=e.isNoUserErrorVisible;return e.loading?Object(x.jsx)(g,{}):Object(x.jsxs)("div",{className:"CurrentUser",children:[Object(x.jsx)("h2",{className:v()("CurrentUser__title",{"CurrentUser__title--error":n}),children:Object(x.jsx)("span",{children:n?"Error: Can not find the user!":"Selected user: ".concat(null===t||void 0===t?void 0:t.id)})}),!n&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h3",{className:"CurrentUser__name",children:null===t||void 0===t?void 0:t.name}),Object(x.jsx)("p",{className:"CurrentUser__email",children:null===t||void 0===t?void 0:t.email}),Object(x.jsx)("p",{className:"CurrentUser__phone",children:null===t||void 0===t?void 0:t.phone})]}),Object(x.jsx)("div",{className:"CurrentUser__button",children:Object(x.jsx)("button",{className:"button",type:"button",onClick:this.clear,children:"Clear"})})]})}}]),n}(b.a.PureComponent),V=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0,inputValue:"",selectValue:"all",loading:!1,errorMessage:""},e.getTodos=function(){var t=Object(a.a)(j.a.mark((function t(n){var s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.prev=1,t.next=4,y(n);case 4:s=t.sent,e.setState({todos:Object(c.a)(s)}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({errorMessage:"Oops... Server is not responding"});case 11:return t.prev=11,setTimeout((function(){e.setState({loading:!1})}),500),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(e){return t.apply(this,arguments)}}(),e.selectUserHandler=function(t){var n=+t;e.state.selectedUserId!==n&&e.setState({selectedUserId:n})},e.changeInputValue=function(t){var n=t.target.value;e.setState({inputValue:n})},e.changeSelectValue=function(t){var n=t.target.value;e.filterBySelect(n),e.setState({selectValue:n})},e.filterBySelect=function(){var t=Object(a.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({loading:!0}),t.t0=n,t.next="completed"===t.t0?4:"not completed"===t.t0?6:8;break;case 4:return e.getTodos(!0),t.abrupt("break",10);case 6:return e.getTodos(!1),t.abrupt("break",10);case 8:return e.getTodos(),t.abrupt("break",10);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getTodosFilteredByInput=function(t){var n=e.state.inputValue;return n.length?t.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})):t},e.shuffle=function(e){for(var t=e,n=t.length-1;n>0;n-=1){var s=Math.floor(Math.random()*(n+1)),r=[t[s],t[n]];t[n]=r[0],t[s]=r[1]}return t},e.randomize=function(){e.setState((function(t){return{todos:e.shuffle(t.todos)}}))},e.clearUser=function(){e.setState({selectedUserId:0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.getTodos()}},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,n=e.selectValue,s=e.todos,r=e.loading,c=e.errorMessage;return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("div",{className:"App__sidebar",children:Object(x.jsx)(U,{todos:this.getTodosFilteredByInput(s),selectedUserId:t,inputValue:this.state.inputValue,selectValue:n,loading:r,errorMessage:c,selectUserHandler:this.selectUserHandler,changeInputValue:this.changeInputValue,changeSelectValue:this.changeSelectValue,randomize:this.randomize})}),Object(x.jsx)("div",{className:"App__content",children:Object(x.jsx)("div",{className:"App__content-container",children:t?Object(x.jsx)(S,{userId:t,clearUser:this.clearUser}):"No user selected"})})]})}}]),n}(b.a.Component),I=V;r.a.render(Object(x.jsx)(I,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.940fdf67.chunk.js.map