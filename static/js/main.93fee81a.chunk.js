(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={App:"App_App__nAIgf"}},,,function(e,t,a){e.exports={Task:"Task_Task__16Qnl"}},function(e,t,a){e.exports={ToDo:"ToDoList_ToDo__2ctlm"}},function(e,t,a){e.exports={Filter:"Filter_Filter__WqJ18"}},function(e,t,a){e.exports={NewTask:"NewTask_NewTask__2XPj2"}},,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(3),o=a.n(r),c=(a(22),a(1)),i=a(4),l=a(5),u=a(15),d=a(13),k=a(6),h=a.n(k),p=a(7),m=a(8),f=a(14),E=a(16),T=a(9),v=a.n(T),w=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={taskName:e.props.task,isDone:e.props.done},e.inputChangeHandler=function(t){e.setState((function(e){return{isDone:!e.isDone}}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t={};return!0===this.props.done&&(t={textDecoration:"line-through"}),s.a.createElement("div",{className:v.a.Task},s.a.createElement("input",{type:"checkbox",checked:this.state.isDone,onChange:this.inputChangeHandler,onClick:function(){return e.props.check(e.state.taskName)}}),s.a.createElement("p",{style:t},this.props.task))}}]),a}(n.Component),N=a(10),g=a.n(N),H=function(e){var t=e.tasks.map((function(t,a){return e.ifHide&&t.done?null:s.a.createElement(w,{task:t.taskName,key:a,check:e.check,done:t.done})}));return s.a.createElement("div",{className:g.a.ToDo},t)},b=a(11),y=a.n(b),_=function(e){return s.a.createElement("div",{className:y.a.Filter},s.a.createElement("input",{type:"checkbox",onClick:e.ifDone}),s.a.createElement("p",null,"hide completed"),s.a.createElement("button",{onClick:e.clearList},s.a.createElement("i",{className:"fas fa-trash"})))},C=a(12),D=a.n(C),O=function(e){return s.a.createElement("div",{className:D.a.NewTask},s.a.createElement("input",{type:"text",onChange:function(t){return e.inputChange(t)},placeholder:"Add new task...",value:e.inputValue}),s.a.createElement("button",{onClick:e.addTask},s.a.createElement("i",{className:"fas fa-plus-circle"})))},j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={tasks:[],newTask:{taskName:""},hide:!1},e.inputChangeHandler=function(t){e.setState({newTask:{taskName:t.target.value}})},e.addTaskHandler=function(){var t=e.state.newTask.taskName;""==!t&&e.setState({tasks:[].concat(Object(c.a)(e.state.tasks),[{taskName:t,done:!1}]),newTask:{taskName:""}})},e.addTaskOnEnterHandler=function(t){"Enter"===t.key&&e.addTaskHandler()},e.checkTaskHandler=function(t){var a=Object(c.a)(e.state.tasks);a.forEach((function(e){e.taskName===t&&(!1===e.done?e.done=!0:e.done=!1)})),e.setState({tasks:a})},e.hideDoneTasksHandler=function(){e.setState((function(e){return{hide:!e.hide}}))},e.clearListHandler=function(){e.setState({tasks:[]})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.tasks.length;return window.addEventListener("keyup",this.addTaskOnEnterHandler),s.a.createElement("div",{className:h.a.App},s.a.createElement(_,{ifDone:this.hideDoneTasksHandler,clearList:this.clearListHandler}),s.a.createElement("hr",null),e?s.a.createElement(H,{tasks:this.state.tasks,check:this.checkTaskHandler,ifHide:this.state.hide}):s.a.createElement("p",{style:{fontSize:"2rem"}},"Nothing to do..."),s.a.createElement("hr",null),s.a.createElement(O,{inputChange:this.inputChangeHandler,addTask:this.addTaskHandler,inputValue:this.state.newTask.taskName}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.93fee81a.chunk.js.map