(this["webpackJsonpemoji-game"]=this["webpackJsonpemoji-game"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(2),c=s.n(n),i=s(4),a=s.n(i),o=s(6),r=s(5),j=s(8),l=s(7),m=s(9),g=(s(14),s(15),s(0)),h=function(e){var t=e.score,s=e.topScore,n=e.result;return"Won"===n||"Lose"===n?Object(g.jsx)("div",{className:"navbar-container",children:Object(g.jsxs)("div",{className:"logo-container",children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/game-logo-img.png",alt:"emoji logo",className:"logo-img"}),Object(g.jsx)("h1",{className:"logo-heading",children:"Emoji Game"})]})}):Object(g.jsxs)("div",{className:"navbar-container",children:[Object(g.jsxs)("div",{className:"logo-container",children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/game-logo-img.png",alt:"emoji logo",className:"logo-img"}),Object(g.jsx)("h1",{className:"logo-heading",children:"Emoji Game"})]}),Object(g.jsxs)("div",{className:"scores-container",children:[Object(g.jsxs)("p",{className:"scores-para",children:["Score: ",t]}),Object(g.jsxs)("p",{className:"scores-para",children:["Top Score: ",s]})]})]})},d=(s(17),function(e){var t=e.emojisList,s=e.clickEvent;return Object(g.jsx)("li",{className:"emoji-card",onClick:function(){return s(t.id)},children:Object(g.jsx)("button",{type:"button",children:Object(g.jsx)("img",{src:t.emojiUrl,alt:t.emojiName,className:"emoj-img"})})})}),p=(s(18),function(e){var t=e.score,s=e.result,n=e.playAgainEvent;return console.log({playAgainEvent:n}),"Lose"===s?Object(g.jsxs)("div",{className:"won-or-lose-card",children:[Object(g.jsxs)("div",{children:[Object(g.jsxs)("h1",{className:"won-heading",children:["You ",s]}),Object(g.jsxs)("p",{className:"won-para",children:["Score ",Object(g.jsx)("br",{}),Object(g.jsxs)("span",{children:[t,"/12"]})]}),Object(g.jsx)("button",{type:"button",className:"play-again-button",onClick:n,children:"Play Again"})]}),Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/lose-game-img.png",alt:"win or lose",className:"won-or-lose-img"})]}):Object(g.jsxs)("div",{className:"won-or-lose-card",children:[Object(g.jsxs)("div",{children:[Object(g.jsxs)("h1",{className:"won-heading",children:["You ",s]}),Object(g.jsx)("p",{className:"won-para",children:"Best Score"}),Object(g.jsx)("p",{className:"para",children:"12/12"}),Object(g.jsx)("button",{type:"button",className:"play-again-button",onClick:n,children:"Play Again"})]}),Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/won-game-img.png",alt:"win or lose",className:"won-or-lose-img"})]})}),u=function(e){function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=Object(l.a)(this,t,[].concat(n))).state={score:0,topScore:0,clickedEmojList:[],result:""},e.shuffledEmojisList=function(){return e.props.emojisList.sort((function(){return Math.random()-.5}))},e.onEmojClick=function(t){var s=e.props.emojisList,n=e.state,c=n.score,i=n.clickedEmojList,a=s.find((function(e){return e.id===t}));i.some((function(e){return e.id===a.id}))?e.setState((function(e){return e.score>e.topScore?{result:"Lose",topScore:e.score}:{result:"Lose"}})):e.setState({clickedEmojList:[].concat(Object(o.a)(i),[a]),score:c+1},(function(){i.length+1===s.length&&e.setState((function(e){return e.score>e.topScore?{result:"Won",topScore:e.score}:{result:"Won"}}))}))},e.onPlayAgain=function(){console.log("hi"),e.setState({score:0,clickedEmojList:[],result:""})},e}return Object(m.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this,t=this.state,s=t.score,n=t.topScore,c=t.result,i=this.shuffledEmojisList();return"Won"===c||"Lose"===c?Object(g.jsxs)("div",{children:[Object(g.jsx)(h,{score:s,topScore:n,result:c}),Object(g.jsx)("div",{className:"game-container-for-result",children:Object(g.jsx)(p,{score:s,result:c,playAgainEvent:this.onPlayAgain})})]}):Object(g.jsxs)("div",{children:[Object(g.jsx)(h,{score:s,topScore:n}),Object(g.jsx)("ul",{className:"game-container",children:i.map((function(t){return Object(g.jsx)(d,{emojisList:t,clickEvent:e.onEmojClick},t.id)}))})]})}}])}(n.Component),b=u,f=(s(19),[{id:0,emojiName:"Face with stuck out tongue",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png"},{id:1,emojiName:"Face with head bandage",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png"},{id:2,emojiName:"Face with hugs",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png"},{id:3,emojiName:"Face with laughing",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png"},{id:4,emojiName:"Laughing face with hand in front of mouth",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png"},{id:5,emojiName:"Face with mask",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png"},{id:6,emojiName:"Face with silence",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png"},{id:7,emojiName:"Face with stuck out tongue and winked eye",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png"},{id:8,emojiName:"Grinning face with sweat",emojiUrl:"https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png"},{id:9,emojiName:"Smiling face with heart eyes",emojiUrl:"https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png"},{id:10,emojiName:"Grinning face",emojiUrl:"https://assets.ccbp.in/frontend/react-js/grinning-face-img.png"},{id:11,emojiName:"Smiling face with star eyes",emojiUrl:"https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png"}]),O=function(){return Object(g.jsx)(b,{emojisList:f})};a.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(O,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.c0b9d2c9.chunk.js.map