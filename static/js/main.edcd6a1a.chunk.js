(this.webpackJsonpproj6=this.webpackJsonpproj6||[]).push([[0],{23:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(14),i=n.n(r),o=n(4),c=n(5),l=n(7),u=n(6),m=n(8),d=(n(28),n(10)),p=n(11),b=n(15);var f=function(e){var t=e.fiftyFifty,n=e.isAvailable,a=e.loaderIcon,r=n?"":"btn-disabled",i=a?"none":"inline-block";return s.a.createElement("div",{className:"prompt"},s.a.createElement("button",{style:{display:"".concat(i)},className:"btn btn-prompt "+r,onClick:function(){return t(n)}},"50:50"))};var h=function(e){var t=e.deleteOne,n=e.isAvailable,a=e.loaderIcon,r=n?"":"btn-disabled",i=a?"none":"inline-block";return s.a.createElement("div",{className:"prompt"},s.a.createElement("button",{style:{display:"".concat(i)},className:"btn btn-prompt "+r,onClick:function(){return t(n)}},"Delete one"))};var w=function(e){var t=e.question,n=e.currentQuestion,a=e.isAnswerChosen,r=e.isAvailableFiftyFifty,i=e.isAvailableDeleteOne,o=e.fiftyFifty,c=e.deleteOne,l=e.loaderIcon,u=l?"none":"flex",m=a?"warning error":"warning";return s.a.createElement("div",{className:"question-panel"},s.a.createElement("div",{className:"quiz-information"},s.a.createElement(f,{loaderIcon:l,fiftyFifty:o,isAvailable:r}),s.a.createElement("span",{style:{display:"".concat(u)},className:" question-counter"},s.a.createElement("span",null,n,"/10")),s.a.createElement(h,{loaderIcon:l,deleteOne:c,isAvailable:i})),s.a.createElement("div",{style:{display:"".concat(u)},className:"question-container"},s.a.createElement("h1",{className:"question-heading"},t.quest)),s.a.createElement("p",{className:m},"Please select an answer!"))},y=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectAnswer,n=e.answerText,a=e.id,r=e.answerSubmitedClass;return s.a.createElement("div",{className:"answer h1 "+r,onClick:t,id:a},n)}}]),t}(a.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.answers,n=e.isSubmitted,a=e.selectAnswer,r=e.isAnswerChosen,i=n?null:a,o=t.map((function(e){return s.a.createElement(y,{key:e.id,id:e.id,answerText:e.text,selectAnswer:i,answerClass:r,answerSubmitedClass:e.submitedAnswerClass})}));return s.a.createElement("div",{className:"answers-panel"},o)}}]),t}(a.Component);var v=function(e){var t=e.getNextQuestion,n=e.currentQuestion,a=e.quizLength;return s.a.createElement("div",null,s.a.createElement("button",{style:{display:n===a?"none":""},className:"btn btn-next-question",onClick:t},"Next question"))};var E=function(e){var t=e.loaderIcon?"block":"none";return s.a.createElement("div",{style:{display:"".concat(t)},className:"loader-icon"})},A=function(e){var t=e.points,n=e.currentQuestion,a=e.isSubmitted,r=e.quizLength,i=function(){return n===r?"":"none"};return s.a.createElement(s.a.Fragment,null,a?s.a.createElement(d.b,{to:{pathname:"/statistics",state:{points:t}}},s.a.createElement("button",{style:{display:i()},className:"btn btn-finish-quiz",points:t},"Finish Quiz")):s.a.createElement("button",{disabled:!0,style:{display:i()},className:"btn btn-finish-quiz btn-disabled",points:t},"Finish Quiz"))},C=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={apiURL:n.props.location.state.apiURL,questions:[],answers:[],actualQuestion:"",actualAnswers:[],isAnswerChosen:!1,submitAnswer:!1,deleteOneHint:!0,fiftyFiftyHint:!0,currentQuestion:1,points:0,loaderIcon:!0},n.componentDidMount=function(){var e=n.state.apiURL;fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){return{quest:n.htmlDecode(e.question)}})),a=e.results.map((function(e){var t=Object(b.a)(e.incorrect_answers);t.splice(Math.floor(4*Math.random()),0,e.correct_answer);var a=function(n){return t[n]===e.correct_answer};return t.map((function(e,s){return{id:s+1,text:n.htmlDecode(t[s]),isCorrect:a(s),isMarked:!1,submitedAnswerClass:"answer-hover"}}))}));n.setState({questions:Object(b.a)(t),answers:Object(b.a)(a)}),n.setState({actualQuestion:n.state.questions[0],actualAnswers:n.state.answers[0],loaderIcon:!1})}))},n.htmlDecode=function(e){return(new DOMParser).parseFromString(e,"text/html").documentElement.textContent},n.selectAnswer=function(e){var t=n.state.actualAnswers,a=parseInt(e.target.id);n.setState(t.map((function(e){return a===e.id?e.isMarked=!0:e}))),n.submitAnswer()},n.submitAnswer=function(){var e=n.state,t=e.submitAnswer,a=e.actualAnswers,s=e.points;t||(n.setState(a.map((function(e){var t=e.isMarked,a=e.isCorrect;return t&&!a?e.submitedAnswerClass=" wrong":t&&a?(e.submitedAnswerClass=" correct",n.setState({points:s+1})):e.submitedAnswerClass=a?" correct":" "}))),n.setState({isAnswerChosen:!1,submitAnswer:!0}))},n.showWarningSelectAnswer=function(){n.setState({isAnswerChosen:!0})},n.getNextQuestion=function(){var e=n.state,t=e.submitAnswer,a=e.currentQuestion,s=e.questions,r=e.answers;if(t){if(a<s.length){var i=a;n.setState({actualQuestion:s[i],actualAnswers:r[i],currentQuestion:a+1}),n.setState({submitAnswer:!1})}}else n.showWarningSelectAnswer()},n.getRandomNumber=function(e){return Math.floor(Math.random()*e)},n.deleteAnswer=function(e){var t=n.state.actualAnswers;if(e){var a=t.filter((function(e){return!1===e.isCorrect})).filter((function(e){return"wrong"!==e.submitedAnswerClass})),s=n.getRandomNumber(a.length),r=a.map((function(e,t){return t===s?(e.submitedAnswerClass="wrong",e.isMarked=!0):e}));n.setState(r)}},n.deleteOneAnswer=function(e){n.deleteAnswer(e),n.setState({deleteOneHint:!1})},n.deleteTwoAnswers=function(e){n.deleteAnswer(e),n.deleteAnswer(e),n.setState({fiftyFiftyHint:!1})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.loaderIcon,n=e.actualQuestion,a=e.currentQuestion,r=e.points,i=e.isAnswerChosen,o=e.submitAnswer,c=e.actualAnswers,l=e.fiftyFiftyHint,u=e.deleteOneHint,m=e.questions,d=this.selectAnswer,p=this.deleteOneAnswer,b=this.deleteTwoAnswers,f=this.getNextQuestion;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"main-panel quiz-panel"},s.a.createElement(E,{loaderIcon:t}),s.a.createElement(w,{question:n,currentQuestion:a,isAnswerChosen:i,isAvailableDeleteOne:u,isAvailableFiftyFifty:l,deleteOne:p,fiftyFifty:b,loaderIcon:t}),s.a.createElement(g,{isSubmitted:o,selectAnswer:d,answers:c}),s.a.createElement(v,{getNextQuestion:f,currentQuestion:a,quizLength:m.length,loaderIcon:t}),s.a.createElement(A,{points:r,currentQuestion:a,isSubmitted:o,quizLength:m.length})))}}]),t}(a.Component);var O=function(e){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"main-panel h1 statistics-panel"},s.a.createElement("h1",null,"Congratulations!"),s.a.createElement("p",null,"You got ",e.location.state.points," out of 10 points in quiz. Would you like to try again?"),s.a.createElement(d.b,{to:"/"},s.a.createElement("button",{className:"btn btn-statistics"},"Try again?"))))},N=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={apiURL:"https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",category:"General Knowledge"},n.changeCategory=function(e){var t=e.target.options[e.target.selectedIndex].text;n.setState({apiURL:e.target.value,category:t})},n.getCategoryURL=function(e){return"https://opentdb.com/api.php?amount=10&category=".concat(e,"&difficulty=easy&type=multiple")},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.apiURL,n=e.category;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"main-panel"},s.a.createElement("h1",{className:"big"},"Quiz App"),s.a.createElement(d.b,{to:{pathname:"/quiz",state:{apiURL:t,category:n}},className:"btn btn-start"},"Start Quiz"),s.a.createElement("div",{className:"categories"},s.a.createElement("label",{htmlFor:"categories",className:"categories-label"},"Category:"),s.a.createElement("select",{id:"categories",className:"categories",onChange:this.changeCategory},s.a.createElement("option",{value:this.getCategoryURL(9)},"General Knowledge"),s.a.createElement("option",{value:this.getCategoryURL(11)},"Films"),s.a.createElement("option",{value:this.getCategoryURL(15)},"Video Games"),s.a.createElement("option",{value:this.getCategoryURL(18)},"Computers"),s.a.createElement("option",{value:this.getCategoryURL(21)},"Sports"),s.a.createElement("option",{value:this.getCategoryURL(27)},"Animals")))))}}]),t}(a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement(p.a,{exact:!0,path:"/"},s.a.createElement(N,null)),s.a.createElement(p.a,{path:"/quiz",component:C}),s.a.createElement(p.a,{path:"/statistics",component:O}))}}]),t}(a.Component),q=j;i.a.render(s.a.createElement(j,null),document.getElementById("root")),i.a.render(s.a.createElement(q,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.edcd6a1a.chunk.js.map