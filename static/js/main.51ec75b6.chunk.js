(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var s=n(24),r=n.n(s),c=n(12),a=n(14),o=n(15),i=n(16),l=n(18),u=n(1),d=n.n(u),h=(n(32),n(33),n(34),n(3)),j=n.n(h),p=n(43),b=n(27),f=n(42),m=n(0),v=function(e){var t=e.todos,n=e.selectedUserId,s=e.inputValue,r=e.selectValue,c=e.selectUserHandler,a=e.changeInputValue,o=e.changeSelectValue,i=e.randomize;return Object(m.jsxs)("div",{className:"TodoList",children:[Object(m.jsx)("h2",{children:"Todos:"}),Object(m.jsx)("div",{children:Object(m.jsx)(p.a,{className:"mb-3",children:Object(m.jsxs)("div",{className:"TodoList__control-panel",children:[Object(m.jsx)("div",{className:"TodoList__input",children:Object(m.jsx)(b.a,{value:s,onChange:a,placeholder:"Search by title"})}),Object(m.jsx)("div",{className:"TodoList__select",children:Object(m.jsxs)(f.a.Select,{value:r,onChange:o,children:[Object(m.jsx)("option",{value:"all",children:"All"}),Object(m.jsx)("option",{value:"completed",children:"Completed"}),Object(m.jsx)("option",{value:"not completed",children:"Not completed"})]})}),Object(m.jsx)("button",{className:"button TodoList__button",type:"button",onClick:i,children:"Randomize"})]})})}),Object(m.jsx)("div",{className:"TodoList__list-container",children:Object(m.jsx)("ul",{className:"TodoList__list",children:0!==t.length&&t.map((function(e){return Object(m.jsxs)("li",{className:j()("TodoList__item",{"TodoList__item--checked":e.completed},{"TodoList__item--unchecked":!e.completed}),children:[Object(m.jsxs)("label",{htmlFor:e.id,children:[Object(m.jsx)("input",{id:e.id,type:"checkbox",checked:e.completed,readOnly:!0}),Object(m.jsx)("p",{children:e.title})]}),Object(m.jsx)("button",{className:j()("TodoList__user-button button",{"TodoList__user-button--selected":+e.userId===n}),type:"button",value:e.userId,onClick:function(){return c(e.userId)},children:"User #".concat(e.userId)})]},e.id)}))})})]})},O=n(20),x=n(8),_=n.n(x);n(39);function U(){return fetch("https://mate.academy/students-api/todos").then((function(e){return e.json()}))}function y(e){var t="https://mate.academy/students-api/users/".concat(e);return fetch(t).then((function(e){return e.json()}))}function N(e){var t="https://mate.academy/students-api/todos?completed=".concat(e.toString());return fetch(t).then((function(e){return e.json()}))}var g=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:null,isNoUserErrorVisible:!1},e.clear=function(){e.setState({user:null}),e.props.clearUser()},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(O.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.selectUser();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(O.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.userId===t.userId){e.next=3;break}return e.next=3,this.selectUser();case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"selectUser",value:function(){var e=Object(O.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y(this.props.userId);case 3:t=e.sent,this.setState({user:t,isNoUserErrorVisible:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({isNoUserErrorVisible:!0});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.user,n=e.isNoUserErrorVisible;return Object(m.jsxs)("div",{children:[n&&Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:"CurrentUser__title CurrentUser__title--error",children:Object(m.jsx)("span",{children:"Error: Can not find the user!"})}),Object(m.jsx)("div",{className:"CurrentUser__button",children:Object(m.jsx)("button",{className:"button",type:"button",onClick:this.clear,children:"Clear"})})]}),!n&&Object(m.jsxs)("div",{className:"CurrentUser",children:[Object(m.jsx)("h2",{className:"CurrentUser__title",children:Object(m.jsx)("span",{children:"Selected user: ".concat(null===t||void 0===t?void 0:t.id)})}),Object(m.jsx)("h3",{className:"CurrentUser__name",children:null===t||void 0===t?void 0:t.name}),Object(m.jsx)("p",{className:"CurrentUser__email",children:null===t||void 0===t?void 0:t.email}),Object(m.jsx)("p",{className:"CurrentUser__phone",children:null===t||void 0===t?void 0:t.phone}),Object(m.jsx)("div",{className:"CurrentUser__button",children:Object(m.jsx)("button",{className:"button",type:"button",onClick:this.clear,children:"Clear"})})]})]})}}]),n}(d.a.PureComponent),S=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0,inputValue:"",selectValue:"all"},e.getTodosFromServer=function(){U().then((function(t){e.setState({todos:Object(c.a)(t)})}))},e.selectUserHandler=function(t){var n=+t;e.state.selectedUserId!==n&&e.setState({selectedUserId:n})},e.changeInputValue=function(t){var n=t.target.value;e.setState({inputValue:n})},e.changeSelectValue=function(t){var n=t.target.value;e.filterBySelect(n),e.setState({selectValue:n})},e.filterBySelect=function(t){switch(t){case"completed":N(!0).then((function(t){e.setState({todos:Object(c.a)(t)})}));break;case"not completed":N(!1).then((function(t){e.setState({todos:Object(c.a)(t)})}));break;default:U().then((function(t){e.setState({todos:Object(c.a)(t)})}))}},e.getTodosFilteredByInput=function(e,t){return t.length?e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})):e},e.shuffle=function(e){for(var t=e,n=t.length-1;n>0;n-=1){var s=Math.floor(Math.random()*(n+1)),r=[t[s],t[n]];t[n]=r[0],t[s]=r[1]}return t},e.randomize=function(){e.setState((function(t){return{todos:e.shuffle(t.todos)}}))},e.clearUser=function(){e.setState({selectedUserId:0})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getTodosFromServer()}},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,n=e.selectValue,s=e.inputValue,r=e.todos;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:"App__sidebar",children:Object(m.jsx)(v,{todos:this.getTodosFilteredByInput(r,s),selectedUserId:t,inputValue:this.state.inputValue,selectValue:n,selectUserHandler:this.selectUserHandler,changeInputValue:this.changeInputValue,changeSelectValue:this.changeSelectValue,randomize:this.randomize})}),Object(m.jsx)("div",{className:"App__content",children:Object(m.jsx)("div",{className:"App__content-container",children:t?Object(m.jsx)(g,{userId:t,clearUser:this.clearUser}):"No user selected"})})]})})}}]),n}(d.a.Component),k=S;r.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.51ec75b6.chunk.js.map