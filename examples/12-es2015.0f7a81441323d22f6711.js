(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"6tfF":function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var n=s("EM62"),i=s("Qq0t"),r=s("HHHL"),c=s("Lty/"),o=s("2kYt");function a(t,e){1&t&&n.Nb(0)}const d=function(t){return{$implicit:t}};function h(t,e){if(1&t&&(n.Pb(0),n.rc(1,a,1,0,"ng-container",1),n.Ob()),2&t){const t=e.$implicit,s=e.index,i=n.bc();n.zb(1),n.gc("ngTemplateOutlet",i.template)("ngTemplateOutletContext",n.ic(2,d,i.contextFor(t,s)))}}let l=(()=>{class t extends c.a{constructor(t,e,s){super(t,e,s),this.trackById=(t,e)=>this.spec&&this.spec.trackBy(e)}set renderTemplates(t){t.length>0&&(this.template=t.first)}ngAfterContentInit(){if(!this.template)throw new Error('You must provide a <ng-template cardTemplate> as a content child, or with [template]="myTemplateRef"')}ngOnInit(){super.ngOnInit()}ngAfterViewInit(){super.ngAfterViewInit()}ngOnChanges(t){super.ngOnChanges(t)}ngOnDestroy(){super.ngOnDestroy()}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(i.c),n.Lb(n.l),n.Lb(n.h))},t.\u0275cmp=n.Fb({type:t,selectors:[["dnd-sortable-list"]],contentQueries:function(t,e,s){var i;1&t&&n.Db(s,r.a,!1,n.K),2&t&&n.lc(i=n.ac())&&(e.renderTemplates=i)},inputs:{template:"template"},features:[n.yb([{provide:c.a,useExisting:t}]),n.wb,n.xb],decls:1,vars:2,consts:[[4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,e){1&t&&n.rc(0,h,2,4,"ng-container",0),2&t&&n.gc("ngForOf",e.children)("ngForTrackBy",e.trackById)},directives:[o.k,o.p],styles:["[_nghost-%COMP%] {\n      display: block;\n    }"],changeDetection:0}),t})()},"8Kv9":function(t,e,s){"use strict";s.d(e,"b",(function(){return n.a})),s.d(e,"d",(function(){return i})),s.d(e,"c",(function(){return d})),s.d(e,"e",(function(){return g})),s.d(e,"a",(function(){return m})),s("Lty/"),s("6tfF"),s("HHHL");var n=s("whu5"),i=(s("HNCh"),s("iIRS"),function(t){return t.BeginDrag="BeginDrag",t.Hover="Hover",t.Drop="Drop",t.EndDrag="EndDrag",t}({}));class r{constructor(t,e){this.type=t,this.item=e,this.event=i.BeginDrag}}class c{constructor(t,e){this.type=t,this.item=e,this.event=i.Hover}}class o{constructor(t,e){this.type=t,this.item=e,this.event=i.Drop}}class a{constructor(t,e){this.type=t,this.item=e,this.event=i.EndDrag}}class d{constructor(t,e,s){this.store=t,this.actionType=e,this.beginDrag=(t,e)=>{this.store.dispatch(new r(this.actionType,t))},this.hover=(t,e)=>{this.store.dispatch(new c(this.actionType,t))},this.drop=(t,e)=>{this.store.dispatch(new o(this.actionType,t))},this.endDrag=(t,e)=>{this.store.dispatch(new a(this.actionType,t))},void 0!==s.type&&(this.type=s.type),void 0!==s.accepts&&(this.accepts=s.accepts),void 0!==s.trackBy&&(this.trackBy=s.trackBy),void 0!==s.getList&&(this.getList=s.getList),void 0!==s.canDrag&&(this.canDrag=s.canDrag),void 0!==s.canDrop&&(this.canDrop=s.canDrop),void 0!==s.isDragging&&(this.isDragging=s.isDragging),void 0!==s.createData&&(this.createData=s.createData)}}var h=s("ZTXN"),l=s("Ohay"),u=s("xVbo");const p=Symbol("SPILLED_LIST_ID");function g(t,e,s){const n=t=>t?(t.hover={listId:p,index:-1},Object.assign({},t)):null,i=new h.a,r=t.dropTarget(e,{hover:t=>{if(t.canDrop()&&t.isOver({shallow:!0})){const e=n(t.getItem());i.next(e)}else i.next(null)},drop:s.drop&&(t=>{const e=n(t.getItem());t.didDrop()||s.drop&&e&&s.drop(e)})||void 0}),c=i.pipe(Object(l.a)(),Object(u.a)(t=>!!t)).subscribe(t=>{s.hover&&t&&s.hover(t)});return r.add(c),r}var b=s("2kYt"),f=s("Qq0t"),y=s("EM62");let m=(()=>{class t{}return t.\u0275mod=y.Jb({type:t}),t.\u0275inj=y.Ib({factory:function(e){return new(e||t)},imports:[[b.c,f.b]]}),t})()},HHHL:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var n=s("EM62");let i=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.Gb({type:t,selectors:[["","dndSortableTemplate",""]]}),t})()},HNCh:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var n=s("Qq0t"),i=s("iIRS"),r=s("EM62");const c=Symbol("EXTERNAL_LIST_ID");let o=(()=>{class t{constructor(t,e){this.dnd=t,this.el=e,this.source=this.dnd.dragSource(null,{canDrag:t=>!this.spec||!this.spec.canDrag||this.spec.canDrag(void 0,void 0,t),beginDrag:()=>{if("function"!=typeof this.spec.createData)throw new Error("spec.createData must be a function");return{type:this.spec.type,data:this.spec.createData(),hover:{index:-1,listId:c},isInternal:!1,index:-1,listId:c,size:this.size()}},endDrag:t=>{const e=t.getItem();e&&this.spec&&this.spec.endDrag&&this.spec.endDrag(e,t)}})}size(){const t=this.el.nativeElement.getBoundingClientRect();return new i.b(t.width||t.right-t.left,t.height||t.bottom-t.top)}ngOnChanges(){this.source.setType(this.spec.type)}ngOnDestroy(){this.source.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(n.c),r.Lb(r.l))},t.\u0275dir=r.Gb({type:t,selectors:[["","dndSortableExternal",""]],inputs:{spec:["dndSortableExternal","spec"]},exportAs:["dndSortableExternal"],features:[r.xb]}),t})()},"Lty/":function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var n=s("C05f"),i=s("bwdy"),r=s("Qq0t"),c=s("iIRS"),o=s("EM62");let a=(()=>{class t{constructor(t,e,s){this.dnd=t,this.el=e,this.cdr=s,this.listId=Math.random().toString(),this.horizontal=!1,this.hoverTrigger=c.a.halfway,this.childrenSubject$=new n.a([]),this.children$=this.childrenSubject$,this.subs=new i.a,this.listSubs=new i.a,this.target=this.dnd.dropTarget(null,{canDrop:t=>{if(!this.acceptsType(t.getItemType()))return!1;const e=t.getItem();return!!e&&this.getCanDrop(e,t)},drop:t=>{const e=t.getItem();return e&&this.getCanDrop(e,t)&&this.spec&&this.spec.drop&&this.spec.drop(e,t),{}},hover:t=>{const e=t.getItem();this.children&&function(t){for(let e of t)return!1;return!0}(this.children)&&e&&this.getCanDrop(e,t)&&t.isOver({shallow:!0})&&this.callHover(e,t,{listId:this.listId,index:0})}},this.subs)}updateSubscription(){if(null!=this.listId&&this.spec&&(this.listSubs&&(this.subs.remove(this.listSubs),this.listSubs.unsubscribe()),this.spec.getList)){const t=this.spec.getList(this.listId);this.listSubs=t&&t.subscribe(t=>{t&&(this.childrenSubject$.next(t),this.children=t,this.cdr.markForCheck())}),this.subs.add(this.listSubs)}}contextFor(t,e){return{data:t,index:e,listId:this.listId,spec:this.spec,horizontal:this.horizontal,hoverTrigger:this.hoverTrigger}}getCanDrop(t,e,s=!0){return this.spec&&this.spec.canDrop?this.spec.canDrop(t,e):s}callHover(t,e,s){s&&(t.hover=s,t=Object.assign({},t)),this.spec&&this.spec.hover&&this.spec.hover(t,e)}ngOnInit(){this.updateSubscription(),this.target.setTypes(this.getTargetType())}getTargetType(){return Array.isArray(this.spec.accepts)?this.spec.accepts:this.spec.accepts||this.spec.type}acceptsType(t){return null!=t&&(Array.isArray(this.spec.accepts)?-1!==this.spec.accepts.indexOf(t):t==this.getTargetType())}ngOnChanges({spec:t,listId:e}){e&&this.updateSubscription(),t&&this.updateSubscription(),this.target.setTypes(this.getTargetType())}ngAfterViewInit(){if(!this.el)throw new Error("dndSortable directive must have ElementRef");this.target.connectDropTarget(this.el.nativeElement)}ngOnDestroy(){this.subs.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(r.c),o.Lb(o.l),o.Lb(o.h))},t.\u0275dir=o.Gb({type:t,selectors:[["","dndSortable",""]],inputs:{listId:"listId",horizontal:"horizontal",spec:"spec",children:"children",hoverTrigger:"hoverTrigger"},exportAs:["dndSortable"],features:[o.xb]}),t})()},X2TC:function(t,e,s){"use strict";s.r(e),s.d(e,"KeyboardModule",(function(){return $}));var n=s("2kYt"),i=s("sEIs"),r=s("Qq0t"),c=s("m3KN"),o=s("8Kv9"),a=s("sN6X"),d=s("SUNJ"),h=s("JqZp"),l=s("EM62"),u=s("8dL6");function p(t){let e=5381;for(let s=0;s<t.length;s++)e=(e<<5)+e+t.charCodeAt(s);return e}const g=Object(a.h)("simple-ngrx"),b=Object(a.i)(g,t=>{const{flying:e}=t,s=t.draggingList||t.list;if(null!=e){const{hover:t,data:n}=e;return s.insert(t.index,n)}return s}),f=Object(a.i)(g,t=>t.list),y=t=>p(t.map(t=>""+t.id+t.hash.toString()).toArray().join(" ")),m=Object(a.i)(b,y),x=Object(a.i)(f,y),v=Object(a.i)(g,t=>t.kbSelected),D=Object(a.i)(g,t=>t.kbLifted?t.kbSelected:-1);let w=(()=>{class t{constructor(t){this.store=t,this.unstable$=this.store.select(m),this.stable$=this.store.select(x)}}return t.\u0275fac=function(e){return new(e||t)(l.Lb(a.b))},t.\u0275cmp=l.Fb({type:t,selectors:[["rxsort-summary"]],decls:10,vars:6,template:function(t,e){1&t&&(l.Rb(0,"p"),l.tc(1," Hash of the unstable list: "),l.Rb(2,"code"),l.tc(3),l.cc(4,"async"),l.Qb(),l.Mb(5,"br"),l.tc(6," Hash of the stable list: "),l.Rb(7,"code"),l.tc(8),l.cc(9,"async"),l.Qb(),l.Qb()),2&t&&(l.zb(3),l.uc(l.dc(4,2,e.unstable$)),l.zb(5),l.uc(l.dc(9,4,e.stable$)))},pipes:[n.b],styles:["p[_ngcontent-%COMP%] { margin-top: 0; }"]}),t})();var I=s("og7C");let O=(()=>{class t extends(Object(I.b)({id:0,hash:p(""),content:""})){static create(e){return new t({id:t.nextId++,content:e,hash:p(e)})}}return t.nextId=0,t})();var S=s("Mrh4"),T=function(t){return t.SORT="[simple-ngrx] SORT",t.KB_SELECT="[simple-ngrx] KB_SELECT",t.KB_LIFT="[simple-ngrx] KB_LIFT",t.KB_DROP="[simple-ngrx] KB_DROP",t.KB_UP="[simple-ngrx] KB_UP",t.KB_DOWN="[simple-ngrx] KB_DOWN",t}({});class k{constructor(t){this.id=t,this.type=T.KB_SELECT}}class L{constructor(){this.type=T.KB_LIFT}}class R{constructor(){this.type=T.KB_DROP}}class C{constructor(){this.type=T.KB_UP}}class B{constructor(){this.type=T.KB_DOWN}}const _=()=>S.fake("/home/mezcal/{{system.fileName}}");class E extends(Object(I.b)({list:Object(I.a)(Array.from(new Array(6),_).map(O.create)),draggingList:null,flying:null,kbSelected:0,kbLifted:!1})){}function M(t){return t.list.findIndex(e=>e.id===t.kbSelected)}function Q(t,e,s){if(s=Math.max(0,Math.min(t.list.count()-1,s)),!t.kbLifted)return t.set("kbSelected",t.list.get(s).id);const n=t.list.get(e);return t.update("list",t=>t.remove(e).insert(s,n))}function F(t=new E,e){switch(e.type){case T.SORT:return function(t=new E,e){const{index:s,hover:n,data:i}=e.item;switch(e.event){case o.d.BeginDrag:return t.set("draggingList",t.list.remove(s)).set("flying",e.item).set("kbSelected",e.item.data.id).set("kbLifted",!1);case o.d.Hover:return t.set("flying",e.item);case o.d.Drop:return t.set("list",t.draggingList.insert(n.index,i)).delete("draggingList").delete("flying").set("kbSelected",e.item.data.id).set("kbLifted",!1);case o.d.EndDrag:return t.delete("draggingList").delete("flying").set("kbSelected",e.item.data.id).set("kbLifted",!1);default:return t}}(t,e);case T.KB_SELECT:return t.set("kbSelected",e.id);case T.KB_LIFT:return t.set("kbLifted",!t.kbLifted);case T.KB_DROP:return t.set("kbLifted",!1);case T.KB_UP:{const e=M(t);return Q(t,e,e-1)}case T.KB_DOWN:{const e=M(t);return Q(t,e,e+1)}}return t}var K=s("Lty/"),P=s("whu5"),j=s("xBIF");function z(t,e){if(1&t){const t=l.Sb();l.Rb(0,"tr",3,4),l.Zb("click",(function(){l.nc(t);const s=e.$implicit;return l.bc().click(s)})),l.cc(2,"async"),l.cc(3,"async"),l.cc(4,"async"),l.Rb(5,"td",5),l.Rb(6,"code"),l.tc(7),l.Qb(),l.Qb(),l.Rb(8,"td"),l.tc(9),l.Qb(),l.Qb()}if(2&t){const t=e.$implicit,s=e.index,n=l.mc(1),i=l.bc(),r=l.mc(1);l.Cb("blob--placeholder",l.dc(2,10,n.isDragging$))("blob--selected",t.id===l.dc(3,12,i.selected$))("blob--lifted",t.id===l.dc(4,14,i.lifted$)),l.gc("dndSortableRender",r.contextFor(t,s))("dragSource",n.source),l.zb(7),l.uc(t.hash),l.zb(2),l.uc(t.content)}}let A=(()=>{class t{constructor(t,e){this.store=t,this.hotkeys=e,this.rxSpec=new o.c(this.store,T.SORT,{type:"BLOB",trackBy:t=>t.id,getList:t=>this.store.select(b)}),this.selected$=this.store.select(v),this.lifted$=this.store.select(D),this.hotkeys.add(new d.a("enter",t=>(this.store.dispatch(new L),!1),[],"Lift up or put down selected item")),this.hotkeys.add(new d.a("up",t=>(this.store.dispatch(new C),!1),[],"Move selection or lifted item up")),this.hotkeys.add(new d.a("down",t=>(this.store.dispatch(new B),!1),[],"Move selection or lifted item down")),this.hotkeys.add(new d.a("esc",t=>(this.store.dispatch(new R),!1),[],"Put down lifted item"))}click(t){this.store.dispatch(new k(t.id))}}return t.\u0275fac=function(e){return new(e||t)(l.Lb(a.b),l.Lb(d.d))},t.\u0275cmp=l.Fb({type:t,selectors:[["rxsort-sortable"]],decls:11,vars:4,consts:[["dndSortable","",1,"list",3,"spec"],["sortable","dndSortable"],[3,"dndSortableRender","dragSource","blob--placeholder","blob--selected","blob--lifted","click",4,"ngFor","ngForOf"],[3,"dndSortableRender","dragSource","click"],["render","dndSortableRender"],[1,"hash"]],template:function(t,e){if(1&t&&(l.Rb(0,"table",0,1),l.Rb(2,"thead"),l.Rb(3,"tr"),l.Rb(4,"th"),l.tc(5,"Hash"),l.Qb(),l.Rb(6,"th"),l.tc(7,"Filename"),l.Qb(),l.Qb(),l.Qb(),l.Rb(8,"tbody"),l.rc(9,z,10,16,"tr",2),l.cc(10,"async"),l.Qb(),l.Qb()),2&t){const t=l.mc(1);l.gc("spec",e.rxSpec),l.zb(9),l.gc("ngForOf",l.dc(10,2,t.children$))}},directives:[K.a,n.k,P.a,j.c],pipes:[n.b],styles:["tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{cursor:move;color:#b73030;background:rgba(142,174,15,.1)}td[_ngcontent-%COMP%]{padding:4px}.blob--selected[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#d6ddbe}tr.blob--lifted[_ngcontent-%COMP%]{-ms-transform:translateX(8px);transform:translateX(8px)}tr.blob--lifted[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:#f9d456}td.hash[_ngcontent-%COMP%]{background:rgba(142,174,15,.3);text-align:right}td.hash[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:none}.blob--placeholder[_ngcontent-%COMP%]{opacity:.4}"],changeDetection:0}),t})(),H=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Fb({type:t,selectors:[["rxsort-container"]],decls:24,vars:0,consts:[["path","sortable/keyboard"],[1,"sep"]],template:function(t,e){1&t&&(l.Mb(0,"app-example-link",0),l.Rb(1,"p"),l.tc(2,"This one uses an "),l.Rb(3,"code"),l.tc(4,"@ngrx/store"),l.Qb(),l.tc(5," with Immutable.js data. This is very convenient, since Immutable.js has its own 'insert' and 'remove' operations."),l.Qb(),l.Rb(6,"p"),l.tc(7,"It also is a demo for"),l.Qb(),l.Rb(8,"ul"),l.Rb(9,"li"),l.tc(10,"Sorting overlaid on bare HTML table rows using the "),l.Rb(11,"code"),l.tc(12,"dndSortable"),l.Qb(),l.tc(13," directive, without intermediate DOM nodes."),l.Qb(),l.Rb(14,"li"),l.tc(15,"Keyboard driven sorting, using "),l.Rb(16,"code"),l.tc(17,"angular2-mousetrap"),l.Qb(),l.tc(18,". Try using the arrow keys and enter to lift/put down."),l.Qb(),l.Rb(19,"li"),l.tc(20,"Selectors based on the 'unstable' / 'in-flight' rendered list, and the 'stable' / 'saved' one."),l.Qb(),l.Qb(),l.Mb(21,"rxsort-summary"),l.Mb(22,"div",1),l.Mb(23,"rxsort-sortable"))},directives:[u.a,w,A],styles:[".sep[_ngcontent-%COMP%] {\n        border-bottom: 1px solid #999;\n        margin-bottom: 8px;\n        max-width: 700px;\n    }"]}),t})(),$=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(e){return new(e||t)},imports:[[n.c,h.a,r.b,c.a,o.a,a.d.forFeature("simple-ngrx",F),i.d.forChild([{path:"",component:H}]),d.b]]}),t})()},iIRS:function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"a",(function(){return i}));class n{constructor(t,e){this.width=t,this.height=e}style(){return{width:this.width+"px",height:this.height+"px"}}}var i=function(t){return t.halfway="halfway",t.fixed="fixed",t}({})},whu5:function(t,e,s){"use strict";s.d(e,"a",(function(){return h}));var n=s("Qq0t"),i=s("bwdy"),r=s("iIRS");function c(t,e,s,n){const{hover:i}=e,r=(t.horizontal?n.x:n.y)<(t.horizontal?s.left:s.top)+(t.horizontal?s.width||s.right-s.left:s.height||s.bottom-s.top)/2;let c;return c=t.listId===i.listId?t.index<i.index?r?t.index:t.index+1:r?t.index-1:t.index:r?t.index:t.index+1,c}function o(t){return t.index}var a=s("EM62");const d=requestAnimationFrame||webkitRequestAnimationFrame||(t=>setTimeout(t,0));let h=(()=>{class t{constructor(t,e){this.dnd=t,this.el=e,this.subs=new i.a,this.sameIds=(t,e)=>t&&e.data&&this.spec.trackBy(t)===this.spec.trackBy(e.data),this.target=this.dnd.dropTarget(null,{canDrop:()=>!1,hover:t=>{this.hover(t)}},this.subs),this.source=this.dnd.dragSource(null,{canDrag:t=>this.getCanDrag(t),isDragging:t=>this.isDragging(t.getItem()),beginDrag:t=>{const e=this.createItem();return this.spec&&this.spec.beginDrag&&d(()=>{this.spec&&this.spec.beginDrag&&this.spec.beginDrag(e,t)}),e},endDrag:t=>{const e=t.getItem();e&&this.spec&&this.spec.endDrag&&this.spec.endDrag(e,t)}},this.subs),this.isDragging$=this.source.listen(t=>t.isDragging())}get data(){return this.context.data}get index(){return this.context.index}get type(){return this.context.spec&&this.context.spec.type}get listId(){return this.context.listId}get accepts(){const t=this.context.spec;return t?Array.isArray(t.accepts)?t.accepts:t.accepts||t.type:[]}get spec(){return this.context.spec}createItem(){return{data:this.data,index:this.index,size:this.size(),type:this.type,isInternal:!0,listId:this.listId,hover:{index:this.index,listId:this.listId}}}getCanDrag(t){return!this.spec||!this.spec.canDrag||this.spec.canDrag(this.data,this.listId,t)}isDragging(t){return this.spec&&this.spec.isDragging?t&&this.spec.isDragging(this.data,t)||!1:t&&this.sameIds(this.data,t)||!1}hover(t){const e=t.getItem(),s=t.getClientOffset();if(null==e||null==s)return;if(this.isDragging(e)&&this.index===e.hover.index&&this.listId===e.hover.listId)return;const{hover:n}=e;let i=function(t){switch(t){case r.a.fixed:return o;default:return c}}(this.context.hoverTrigger)(this.context,e,this.rect(),s);if(i<0)throw new Error("@ng-dnd/sortable: Cannot move a card to an index < 0.");if(i!==n.index||this.listId!==n.listId){if(e.hover={index:i,listId:this.listId},this.spec&&this.spec.canDrop&&!this.spec.canDrop(e,t))return;this.spec&&this.spec.hover&&this.spec.hover(Object.assign({},e),t)}}rect(){if(!this.el)throw new Error("@ng-dnd/sortable: [dndSortableRender] expected to be attached to a real DOM element");return this.el.nativeElement.getBoundingClientRect()}size(){const t=this.rect();return new r.b(t.width||t.right-t.left,t.height||t.bottom-t.top)}ngOnInit(){this.target.setTypes(this.accepts),this.source.setType(this.type)}ngAfterViewInit(){this.el&&this.target.connectDropTarget(this.el.nativeElement)}ngOnChanges(){this.target.setTypes(this.accepts),this.source.setType(this.type)}ngOnDestroy(){this.subs.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(n.c),a.Lb(a.l))},t.\u0275dir=a.Gb({type:t,selectors:[["","dndSortableRender",""]],inputs:{context:["dndSortableRender","context"]},exportAs:["dndSortableRender"],features:[a.xb]}),t})()}}]);