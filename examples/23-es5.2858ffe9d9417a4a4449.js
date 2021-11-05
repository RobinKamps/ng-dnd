function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,o){return n&&_defineProperties(e.prototype,n),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{iv4e:function(e,n,o){"use strict";o.r(n),o.d(n,"NestedSourcesModule",(function(){return O}));var t,r=o("2kYt"),c=o("sEIs"),s=o("JqZp"),i=o("Qq0t"),a=o("m3KN"),l={BLUE:"BLUE",YELLOW:"YELLOW"},p=o("EM62"),u=o("8dL6"),g=o("xBIF"),b=[[["app-blue-or-yellow"]]],d=["app-blue-or-yellow"],f=((t=function(){function e(n){var o=this;_classCallCheck(this,e),this.dnd=n,this.Colors=l,this.source=this.dnd.dragSource(null,{beginDrag:function(){return{}},canDrag:function(){return!o.forbid}}),this.isDragging$=this.source.listen((function(e){return e.isDragging()})),this.forbid=!1}return _createClass(e,[{key:"color",set:function(e){switch(this.source.setType(e),e){case l.YELLOW:this.backgroundColor="lightgoldenrodyellow";break;case l.BLUE:this.backgroundColor="lightblue"}}},{key:"toggle",value:function(){this.forbid=!this.forbid}},{key:"ngOnDestroy",value:function(){this.source.unsubscribe()}}]),e}()).\u0275fac=function(e){return new(e||t)(p.Lb(i.c))},t.\u0275cmp=p.Fb({type:t,selectors:[["app-blue-or-yellow"]],inputs:{color:"color",forbid:"forbid"},ngContentSelectors:d,decls:6,vars:7,consts:[[1,"pushright",3,"dragSource"],["type","checkbox","value","forbid","name","toggle",3,"change"]],template:function(e,n){1&e&&(p.fc(b),p.Rb(0,"div",0),p.cc(1,"async"),p.Rb(2,"label"),p.Rb(3,"input",1),p.Zb("change",(function(){return n.toggle()})),p.Qb(),p.tc(4," Forbid drag "),p.Qb(),p.ec(5),p.Qb()),2&e&&(p.qc("background-color",n.backgroundColor),p.Cb("dragging",p.dc(1,5,n.isDragging$)),p.gc("dragSource",n.source))},directives:[g.c],pipes:[r.b],styles:["[_nghost-%COMP%] { display: block; color: #777; }\n    .pushright[_ngcontent-%COMP%] {\n      margin-top: 15px;\n      padding: 15px;\n      border: 1px dashed #777;\n    }\n    .dragging[_ngcontent-%COMP%] {\n      opacity: 0.5;\n    }"]}),t),h=o("YtkY");function C(e,n){if(1&e&&(p.Pb(0),p.Rb(1,"p"),p.tc(2),p.Qb(),p.Ob()),2&e){var o=p.bc();p.zb(1),p.qc("background-color",o.backgroundColor)("padding",5,"px"),p.zb(1),p.vc("Last dropped: ",o.lastDroppedColor,"")}}var y,w,L,k=((L=function(){function e(n){var o=this;_classCallCheck(this,e),this.dnd=n,this.Colors=l,this.target=this.dnd.dropTarget([l.BLUE,l.YELLOW],{drop:function(e){o.lastDroppedColor=e.getItemType()}}),this.canDrop$=this.target.listen((function(e){return e.canDrop()})),this.fade$=this.target.listen((function(e){return e.canDrop()&&!e.isOver()})),this.draggingColor$=this.target.listen((function(e){return e.getItemType()})).pipe(Object(h.a)((function(e){return o.cssColor(e)})))}return _createClass(e,[{key:"cssColor",value:function(e){switch(e){case l.YELLOW:return"lightgoldenrodyellow";case l.BLUE:return"lightblue";default:return"#fff"}}},{key:"ngOnDestroy",value:function(){this.target.unsubscribe()}}]),e}()).\u0275fac=function(e){return new(e||L)(p.Lb(i.c))},L.\u0275cmp=p.Fb({type:L,selectors:[["app-nested-source-targetbox"]],decls:7,vars:12,consts:[[1,"box",3,"dropTarget"],[4,"ngIf"]],template:function(e,n){1&e&&(p.Rb(0,"div",0),p.cc(1,"async"),p.cc(2,"async"),p.Rb(3,"p"),p.tc(4,"Drop here."),p.Qb(),p.rc(5,C,3,5,"ng-container",1),p.cc(6,"async"),p.Qb()),2&e&&(p.qc("background-color",p.dc(1,6,n.draggingColor$)),p.Cb("fade",p.dc(2,8,n.fade$)),p.gc("dropTarget",n.target),p.zb(5),p.gc("ngIf",!p.dc(6,10,n.canDrop$)&&null!=n.lastDroppedColor))},directives:[g.d,r.l],pipes:[r.b],styles:[".box[_ngcontent-%COMP%] {\n      font-size: 120%;\n      color: #777;\n      margin-top: 15px;\n      max-width: 300px;\n      height: 200px;\n      padding: 20px;\n      border: 1px dashed #777;\n      text-align: center;\n    }\n    .fade[_ngcontent-%COMP%] {\n      opacity: 0.5;\n    }"]}),L),v=((w=function e(){_classCallCheck(this,e),this.Colors=l}).\u0275fac=function(e){return new(e||w)},w.\u0275cmp=p.Fb({type:w,selectors:[["app-sources"]],decls:9,vars:6,consts:[["path","nested/sources"],[1,"nested-sources-wrapper"],[3,"color"]],template:function(e,n){1&e&&(p.Mb(0,"app-example-link",0),p.Rb(1,"div",1),p.Rb(2,"app-blue-or-yellow",2),p.Rb(3,"app-blue-or-yellow",2),p.Mb(4,"app-blue-or-yellow",2),p.Mb(5,"app-blue-or-yellow",2),p.Qb(),p.Rb(6,"app-blue-or-yellow",2),p.Mb(7,"app-blue-or-yellow",2),p.Qb(),p.Qb(),p.Mb(8,"app-nested-source-targetbox"),p.Qb()),2&e&&(p.zb(2),p.gc("color",n.Colors.BLUE),p.zb(1),p.gc("color",n.Colors.YELLOW),p.zb(1),p.gc("color",n.Colors.YELLOW),p.zb(1),p.gc("color",n.Colors.BLUE),p.zb(1),p.gc("color",n.Colors.BLUE),p.zb(1),p.gc("color",n.Colors.YELLOW))},directives:[u.a,f,k],styles:[".nested-sources-wrapper[_ngcontent-%COMP%] {\n        display: flex;\n    }\n    .nested-sources-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n      flex: 1;\n    }\n    .nested-sources-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n        margin-right: 20px;\n    }"]}),w),O=((y=function e(){_classCallCheck(this,e)}).\u0275mod=p.Jb({type:y}),y.\u0275inj=p.Ib({factory:function(e){return new(e||y)},imports:[[r.c,s.a,i.b,a.a,c.d.forChild([{path:"",component:v}])]]}),y)}}]);