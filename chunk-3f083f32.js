(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f083f32"],{"0922":function(t,e,s){},"0d43":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container container-padding grid-md"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column col-6 col-sm-12"},[s("balance"),s("dashboard")],1),s("div",{staticClass:"column col-6 col-sm-12"},[s("tinterface")],1)])])},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section"},[s("div",{staticClass:"section-item section-item-filled"},[s("div",{staticClass:"toast mb"},[s("div",{staticClass:"mb05"},[t._v("Mining "),s("span",{staticClass:"text-primary"},[t._v("1 SVX")]),t._v(" Burns "),s("span",{staticClass:"text-warning text-semibold"},[t._v(t._s(t.miningCost)+" SOV")])]),s("ul",{staticClass:"text-sm"},[s("li",[t._v("Reward per action: "),s("span",{staticClass:"text-primary"},[t._v(t._s(t.miningRate))]),t._v(" SVX")]),s("li",[t._v("Reward per transaction: "),s("span",{staticClass:"text-primary"},[t._v(t._s(t.total.miningRate))]),t._v(" SVX")]),s("li",[t._v("Total Burn per ransaction: "),s("span",{staticClass:"text-error"},[t._v(t._s(t.total.burn))]),t._v(" SOV")]),s("li",[t._v("Bonus for staking SVX: "),s("span",{class:[t.miningBonus>=50?"text-success":"text-warning"]},[t._v(t._s(t.miningBonus)+"%")])])])]),s("div",{staticClass:"form-group mb05"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.targetMiningRate,expression:"targetMiningRate"}],staticClass:"form-input",attrs:{type:"number",min:"0",step:"0.01",required:""},domProps:{value:t.targetMiningRate},on:{input:function(e){e.target.composing||(t.targetMiningRate=e.target.value)}}}),s("label",[t._v("Mining rate")])]),s("div",{staticClass:"text-sm text-secondary mb"},[t._v(" Mine when single action reward is ≥ "+t._s(t.targetMiningRate)+" ")]),s("button",{staticClass:"btn btn-primary btn-block mb05",on:{click:t.submit}},[t._v(" Burn mine x"+t._s(t.range)+" ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.range,expression:"range"}],staticClass:"slider mb",attrs:{type:"range",min:"1",max:"200",step:"1"},domProps:{value:t.range},on:{__r:function(e){t.range=e.target.value}}}),s("label",{staticClass:"form-switch flex-centered-vertical"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.isAuto,expression:"isAuto"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isAuto)?t._i(t.isAuto,null)>-1:t.isAuto},on:{change:function(e){var s=t.isAuto,i=e.target,a=!!i.checked;if(Array.isArray(s)){var n=null,o=t._i(s,n);i.checked?o<0&&(t.isAuto=s.concat([n])):o>-1&&(t.isAuto=s.slice(0,o).concat(s.slice(o+1)))}else t.isAuto=a}}}),s("i",{staticClass:"form-icon"}),s("span",{staticClass:"text-secondary text-sm ml05"},[t._v("Auto mine")])]),s("bars",{attrs:{isAuto:t.isAuto}})],1),s("div",{staticClass:"text-sm text-secondary text-center"},[t._v("Bundled mining actions per transaction")])])},o=[],r=s("2f62"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{staticStyle:{height:"10px",width:"100%","margin-top":"1rem"}},[s("rect",{staticStyle:{"border-radius":"5px 0 0 5px"},attrs:{id:"rect1",x:"0",y:"0",width:"9%",height:"10",fill:t.color}}),s("rect",{attrs:{id:"rect2",x:"10%",y:"0",width:"9%",height:"10",fill:t.color}}),s("rect",{attrs:{id:"rect3",x:"20%",y:"0",width:"9%",height:"10",fill:t.color}}),s("rect",{attrs:{id:"rect4",x:"30%",y:"0",width:"9%",height:"10",fill:t.color}}),s("rect",{attrs:{id:"rect5",x:"40%",y:"0",width:"9%",height:"10",fill:t.color}}),s("rect",{attrs:{id:"rect6",x:"50%",y:"0",width:"9%",height:"10",fill:t.color}}),s("rect",{attrs:{id:"rect7",x:"60%",y:"0",width:"9%",height:"10",fill:t.color}}),s("rect",{attrs:{id:"rect8",x:"70%",y:"0",width:"9%",height:"10",fill:t.color}}),s("rect",{attrs:{id:"rect9",x:"80%",y:"0",width:"9%",height:"10",fill:t.color}}),s("rect",{attrs:{id:"rect10",x:"90%",y:"0",width:"9%",height:"10",fill:t.color}})])},l=[],u={props:["isAuto"],data:()=>({color:"rgba(255,255,255,.1)",count:0}),mounted(){this.$bus.$on("tick",()=>{this.isAuto&&this.tick()})},methods:{tick(){this.count+=1,this.count=this.count<=11?this.count:1,this.count<=10&&document.getElementById("rect"+this.count).setAttribute("fill","#fff"),this.count>=2&&document.getElementById("rect"+(this.count-1)).setAttribute("fill",this.color)}}},m=u,h=s("2877"),d=Object(h["a"])(m,c,l,!1,null,null,null),g=d.exports,p={data:()=>({targetMiningRate:0,quantity:150,range:1,isAuto:!1,miningRate:0,miningBonus:0,pollingIsAuto:null,polling:null}),computed:{...Object(r["b"])({eos:t=>t.blockchain.eos,scatter:t=>t.blockchain.scatter}),total(){return{miningRate:parseFloat((this.miningRate*this.range).toFixed(4))||0,burn:parseFloat((.014*this.quantity*this.range).toFixed(2))||0}},miningCost(){const t=(this.total.burn/this.total.miningRate).toFixed(4);return t==1/0?0:t}},watch:{scatter(t){t&&this.getData()},isAuto(t){if(t)return this.submit(),this.pollingIsAuto=setInterval(()=>this.submit(),5e3),this.$notice.info("Auto mine <b>start</b>"),!1;this.pollingIsAuto&&(clearInterval(this.pollingIsAuto),this.$notice.warning("Auto mine <b>stop</b>"))}},mounted(){this.polling=setInterval(()=>this.getData(),1e3)},methods:{getData(){const t=this.eos.getTableRows({json:"true",code:"svxmintofeos",scope:"svxmintofeos",table:"accounts"}),e=this.eos.getTableRows({json:"true",code:"svxmintofeos",scope:"SVX",table:"stat"}),s=this.eos.getTableRows({json:"true",code:"svxmintofeos",scope:this.scatter.name,table:"accounts"});Promise.all([t,e,s]).then(t=>{const e=parseFloat(t[0].rows[0].balance),s=parseFloat(t[1].rows[0].supply),i=parseFloat(t[2].rows[0].svxpower);let a=i/s*1e4;a=a>50?50:Math.floor(parseFloat(a).toFixed(2));let n=e/2e4*(1+a/100)*1;this.miningRate=parseFloat(n.toFixed(4)),this.miningBonus=a})},submit(){const t=this.range,e={account:"sovmintofeos",name:"transfer",authorization:[{actor:this.scatter.name,permission:"active"}],data:{from:this.scatter.name,to:"sovdexrelays",quantity:"150.0000 SOV",memo:"mine SVX"}};this.miningRate>this.targetMiningRate&&console.log("======================"),console.log(e);for(var s=[],i=0;i<t;i++)s[i]=e;console.log(s),this.eos.transaction({actions:s}).then(()=>{console.log("[mine] Success"),this.isAuto||this.$notice.success("Mine success"),this.$bus.$emit("tick")}).catch(t=>console.error(t))}},beforeDestroy(){this.polling&&clearInterval(this.polling)},components:{bars:g}},v=p,b=(s("c721"),Object(h["a"])(v,n,o,!1,null,"5a6dc5a7",null)),f=b.exports,x={components:{tinterface:f}},_=x,w=Object(h["a"])(_,i,a,!1,null,null,null);e["default"]=w.exports},c721:function(t,e,s){"use strict";var i=s("0922"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-3f083f32.js.map