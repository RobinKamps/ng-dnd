(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{MDZo:function(t,e,n){"use strict";n.r(e),n.d(e,"NativeTypesModule",(function(){return y}));var p=n("2kYt"),s=n("sEIs"),c=n("JqZp"),r=n("Qq0t"),i=n("m3KN"),o=n("N6NL"),a=n("EM62"),d=n("8dL6"),b=n("xBIF");function g(t,e){if(1&t&&(a.Rb(0,"pre"),a.tc(1),a.cc(2,"json"),a.Qb()),2&t){const t=a.bc();a.zb(1),a.uc(a.dc(2,1,t.dropped))}}const l=["*"];let u=(()=>{class t{constructor(t){this.dnd=t,this.droppedType=null,this.dropped=null,this.target=this.dnd.dropTarget(null,{drop:t=>{this.droppedType=t.getItemType();const e=t.getItem();if(t.getItemType()===o.b.FILE){const t=e.files.map(t=>"File named "+t.name);this.dropped={files:t}}else this.dropped=e}})}ngOnDestroy(){this.target.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(r.c))},t.\u0275cmp=a.Fb({type:t,selectors:[["native-target"]],inputs:{type:"type"},ngContentSelectors:l,decls:7,vars:4,consts:[[1,"target",3,"dropTarget","dropTargetTypes"],[4,"ngIf"]],template:function(t,e){1&t&&(a.fc(),a.Rb(0,"div",0),a.Rb(1,"p"),a.tc(2,"Accepts "),a.Rb(3,"code"),a.tc(4),a.Qb(),a.Qb(),a.ec(5),a.rc(6,g,3,3,"pre",1),a.Qb()),2&t&&(a.gc("dropTarget",e.target)("dropTargetTypes",e.type),a.zb(4),a.uc(e.type),a.zb(2),a.gc("ngIf",e.dropped))},directives:[b.d,p.l],pipes:[p.f],styles:["[_nghost-%COMP%] {\n        min-width: 200px;\n    }\n    .target[_ngcontent-%COMP%] {\n        padding: 8px;\n        background: #ddd;\n        min-height: 140px;\n        min-width: 0;\n    }\n    pre[_ngcontent-%COMP%] { overflow-x: auto; min-width: 0; }"]}),t})(),f=(()=>{class t{constructor(){this.NativeTypes=o.b}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Fb({type:t,selectors:[["native-container"]],decls:13,vars:3,consts:[["path","html5/native-types"],[1,"flex"],[3,"type"]],template:function(t,e){1&t&&(a.Mb(0,"app-example-link",0),a.Rb(1,"p"),a.tc(2," When you are using the HTML5 backend, you can accept three native types: files, URLs, and text. "),a.Qb(),a.Rb(3,"div",1),a.Rb(4,"native-target",2),a.Rb(5,"p"),a.tc(6,"Receives a list of native JavaScript File objects."),a.Qb(),a.Qb(),a.Rb(7,"native-target",2),a.Rb(8,"p"),a.tc(9,"Receives a list of URLs as strings."),a.Qb(),a.Qb(),a.Rb(10,"native-target",2),a.Rb(11,"p"),a.tc(12,"Receives a string of the text you dropped."),a.Qb(),a.Qb(),a.Qb()),2&t&&(a.zb(4),a.gc("type",e.NativeTypes.FILE),a.zb(3),a.gc("type",e.NativeTypes.URL),a.zb(3),a.gc("type",e.NativeTypes.TEXT))},directives:[d.a,u],styles:[".flex[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: wrap;\n        margin: -8px;\n    }\n    .flex[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] { flex: 1; }\n    .flex[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] { margin: 8px; }"]}),t})(),y=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[p.c,c.a,r.b,i.a,s.d.forChild([{path:"",component:f}])]]}),t})()}}]);