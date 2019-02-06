(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(module,__webpack_exports__,__webpack_require__){"use strict";var objectSpread=__webpack_require__(28),objectWithoutProperties=__webpack_require__(60),classCallCheck=__webpack_require__(93),createClass=__webpack_require__(94),possibleConstructorReturn=__webpack_require__(96),getPrototypeOf=__webpack_require__(95),inherits=__webpack_require__(97),assertThisInitialized=__webpack_require__(10),defineProperty=__webpack_require__(29),react=__webpack_require__(0),browser=__webpack_require__(134),browser_default=__webpack_require__.n(browser),INSTANCE_MAP=new Map,OBSERVER_MAP=new Map,ROOT_IDS=new WeakMap,consecutiveRootId=0;function observe(element,callback){var options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};options.threshold||(options.threshold=0);var root=options.root,rootMargin=options.rootMargin,threshold=options.threshold;if(browser_default()(!INSTANCE_MAP.has(element),"react-intersection-observer: Trying to observe %s, but it's already being observed by another instance.\nMake sure the `ref` is only used by a single <Observer /> instance.\n\n%s",element),element){var observerId=function(root){return root?ROOT_IDS.has(root)?ROOT_IDS.get(root):(consecutiveRootId+=1,ROOT_IDS.set(root,consecutiveRootId.toString()),ROOT_IDS.get(root)+"_"):""}(root)+(rootMargin?"".concat(threshold.toString(),"_").concat(rootMargin):threshold.toString()),observerInstance=OBSERVER_MAP.get(observerId);observerInstance||(observerInstance=new IntersectionObserver(onChange,options),observerId&&OBSERVER_MAP.set(observerId,observerInstance));var instance={callback:callback,inView:!1,observerId:observerId,observer:observerInstance};return INSTANCE_MAP.set(element,instance),observerInstance.observe(element),instance}}function unobserve(element){if(element){var instance=INSTANCE_MAP.get(element);if(instance){var _observerId=instance.observerId,_observer=instance.observer;_observer.unobserve(element);var itemsLeft=!1;_observerId&&INSTANCE_MAP.forEach(function(item,key){item&&item.observerId===_observerId&&key!==element&&(itemsLeft=!0)}),_observer&&!itemsLeft&&_observer.disconnect(),INSTANCE_MAP.delete(element)}}}function onChange(changes){changes.forEach(function(intersection){var isIntersecting=intersection.isIntersecting,intersectionRatio=intersection.intersectionRatio,target=intersection.target,instance=INSTANCE_MAP.get(target);if(instance&&intersectionRatio>=0){var _inView=instance.observer.thresholds.some(function(threshold){return instance.inView?intersectionRatio>threshold:intersectionRatio>=threshold});void 0!==isIntersecting&&(_inView=_inView&&isIntersecting),instance.inView=_inView,instance.callback(_inView,intersection)}})}var slicedToArray=__webpack_require__(136);function useInView(ref){return function(ref){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_React$useState=react.useState(!1),_React$useState2=Object(slicedToArray.a)(_React$useState,2),isInView=_React$useState2[0],setInView=_React$useState2[1],_React$useState3=react.useState(void 0),_React$useState4=Object(slicedToArray.a)(_React$useState3,2),entry=_React$useState4[0],setIntersectionEntry=_React$useState4[1];return react.useEffect(function(){return ref.current&&observe(ref.current,function(inView,intersection){setInView(inView),setIntersectionEntry(intersection),inView&&options.triggerOnce&&unobserve(ref.current)},options),function(){unobserve(ref.current)}},[options.threshold,options.root,options.rootMargin]),{inView:isInView,entry:entry}}(ref,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).inView}__webpack_require__.d(__webpack_exports__,"b",function(){return useInView});var src_InView=function(_React$Component){function InView(){var _getPrototypeOf2,_this;Object(classCallCheck.a)(this,InView);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(possibleConstructorReturn.a)(this,(_getPrototypeOf2=Object(getPrototypeOf.a)(InView)).call.apply(_getPrototypeOf2,[this].concat(args))),Object(defineProperty.a)(Object(assertThisInitialized.a)(Object(assertThisInitialized.a)(_this)),"state",{inView:!1,entry:void 0}),Object(defineProperty.a)(Object(assertThisInitialized.a)(Object(assertThisInitialized.a)(_this)),"node",null),Object(defineProperty.a)(Object(assertThisInitialized.a)(Object(assertThisInitialized.a)(_this)),"handleNode",function(node){_this.node&&unobserve(_this.node),_this.node=node||null,_this.observeNode()}),Object(defineProperty.a)(Object(assertThisInitialized.a)(Object(assertThisInitialized.a)(_this)),"handleChange",function(inView,entry){_this.setState({inView:inView,entry:entry}),_this.props.onChange&&_this.props.onChange(inView,entry)}),_this}return Object(inherits.a)(InView,_React$Component),Object(createClass.a)(InView,[{key:"componentDidMount",value:function(){0}},{key:"componentDidUpdate",value:function(prevProps,prevState){prevProps.rootMargin===this.props.rootMargin&&prevProps.root===this.props.root&&prevProps.threshold===this.props.threshold||(unobserve(this.node),this.observeNode()),prevState.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(unobserve(this.node),this.node=null)}},{key:"componentWillUnmount",value:function(){this.node&&(unobserve(this.node),this.node=null)}},{key:"observeNode",value:function(){if(this.node){var _this$props=this.props,threshold=_this$props.threshold,root=_this$props.root,rootMargin=_this$props.rootMargin;observe(this.node,this.handleChange,{threshold:threshold,root:root,rootMargin:rootMargin})}}},{key:"render",value:function(){var _this$props2=this.props,children=_this$props2.children,as=_this$props2.as,tag=_this$props2.tag,props=(_this$props2.triggerOnce,_this$props2.threshold,_this$props2.root,_this$props2.rootMargin,Object(objectWithoutProperties.a)(_this$props2,["children","as","tag","triggerOnce","threshold","root","rootMargin"])),_this$state=this.state,inView=_this$state.inView,entry=_this$state.entry;return"function"==typeof children?children({inView:inView,entry:entry,ref:this.handleNode}):react.createElement(as||tag||"div",Object(objectSpread.a)({ref:this.handleNode},props),children)}}]),InView}(react.Component);Object(defineProperty.a)(src_InView,"defaultProps",{threshold:0,triggerOnce:!1});__webpack_exports__.a=src_InView},135:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(28),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(93),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(94),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(96),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(95),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(97),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(29),react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),style={margin:"64px",backgroundColor:"slategrey",overflowY:"scroll",position:"absolute",top:"0",left:"0",right:"0",bottom:"0"},RootComponent=function(_React$PureComponent){function RootComponent(){var _getPrototypeOf2,_this;Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,RootComponent);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,(_getPrototypeOf2=Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(RootComponent)).call.apply(_getPrototypeOf2,[this].concat(args))),Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.a)(Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(_this)),"state",{node:null}),Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.a)(Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(_this)),"handleNode",function(node){_this.setState({node:node})}),_this}return Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(RootComponent,_React$PureComponent),Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(RootComponent,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_8__.createElement("div",{ref:this.handleNode,style:Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},style,this.props.style)},this.state.node?this.props.children(this.state.node):null)}}]),RootComponent}(react__WEBPACK_IMPORTED_MODULE_8__.PureComponent);__webpack_exports__.a=RootComponent},216:function(module,exports,__webpack_require__){__webpack_require__(217),__webpack_require__(296),module.exports=__webpack_require__(297)},297:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(0);var _storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(59),_storybook_addon_options__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(215),_package_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(98);__webpack_require__(398),__webpack_require__(399);Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_2__.withOptions)({name:_package_json__WEBPACK_IMPORTED_MODULE_3__.name,url:_package_json__WEBPACK_IMPORTED_MODULE_3__.repository?_package_json__WEBPACK_IMPORTED_MODULE_3__.repository.url:null});var req=__webpack_require__(404);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(function(){req.keys().forEach(req)},module)}.call(this,__webpack_require__(113)(module))},399:function(module,exports,__webpack_require__){var content=__webpack_require__(400);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(402)(content,options);content.locals&&(module.exports=content.locals)},400:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(401)(!1)).push([module.i,"body {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\n  padding: 0;\n  margin: 0;\n  color: #0c0c0c;\n  font-size: 16px;\n}\n\nh1 {\n  font-size: 2rem;\n}\n",""])},404:function(module,exports,__webpack_require__){var map={"./Hooks.story.tsx":405,"./Observer.story.tsx":510};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=404},405:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(28),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(60),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(59),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(18),_src_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11),_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(5),HookComponent=function(_ref){var options=_ref.options,style=_ref.style,children=_ref.children,rest=Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(_ref,["options","style","children"]),ref=react__WEBPACK_IMPORTED_MODULE_2__.useRef(null),inView=Object(_src_index__WEBPACK_IMPORTED_MODULE_5__.b)(ref,options);return Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("Inview")(inView),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",Object.assign({ref:ref,style:Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({display:"flex",minHeight:"25vh",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",background:"lightcoral",color:"azure"},style)},rest),react__WEBPACK_IMPORTED_MODULE_2__.createElement("h2",null,children||"Header is inside the viewport",": ",inView.toString()))};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("useInView hook",module).add("Basic",function(){return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_2__.createElement(HookComponent,null))}).add("Start in view",function(){return react__WEBPACK_IMPORTED_MODULE_2__.createElement(HookComponent,null)}).add("Taller then viewport",function(){return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_2__.createElement(HookComponent,{style:{height:"150vh"}}))}).add("With threshold 100%",function(){return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_2__.createElement(HookComponent,{options:{threshold:1}},"Header is fully inside the viewport"))}).add("With threshold 50%",function(){return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_2__.createElement(HookComponent,{options:{threshold:.5}},"Header is 50% inside the viewport"))}).add("Taller then viewport with threshold 100%",function(){return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_6__.a,null,react__WEBPACK_IMPORTED_MODULE_2__.createElement(HookComponent,{options:{threshold:1},style:{height:"150vh"}},"Header is fully inside the viewport"))})}.call(this,__webpack_require__(113)(module))},5:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(28),_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(60),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),style={height:"101vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"papayawhip"};__webpack_exports__.a=function(_ref){var children=_ref.children,props=Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(_ref,["children"]);return react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",props,react__WEBPACK_IMPORTED_MODULE_2__.createElement("section",{style:Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},style)},react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1",null,"⬇ Scroll Down ⬇")),children,react__WEBPACK_IMPORTED_MODULE_2__.createElement("section",{style:Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({},style)},react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1",null,"⬆︎ Scroll up ⬆︎")))}},510:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(28),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(59),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(18),_src_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(11),_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5),_Root_index__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(135),Header=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(props,ref){return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{ref:ref,style:Object(_home_travis_build_thebuilder_react_intersection_observer_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({display:"flex",minHeight:"25vh",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",background:"lightcoral",color:"azure"},props.style)},react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2",null,props.children))});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Intersection Observer",module).add("Basic",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref){var inView=_ref.inView,ref=_ref.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref},"Header inside viewport: ",inView.toString())}))}).add("Start in view",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref2){var inView=_ref2.inView,ref=_ref2.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref},"Header inside viewport: ",inView.toString())})}).add("Plain children",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,null,"Plain children")))}).add("Taller then viewport",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref3){var inView=_ref3.inView,ref=_ref3.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,style:{height:"150vh"}},"Header is inside the viewport: ",inView.toString())}))}).add("With threshold 100%",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:1,onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref4){var inView=_ref4.inView,ref=_ref4.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref},"Header is fully inside the viewport: ",inView.toString())}))}).add("With threshold 50%",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:.5,onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref5){var inView=_ref5.inView,ref=_ref5.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref},"Header is 50% inside the viewport: ",inView.toString())}))}).add("Taller then viewport with threshold 100%",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:1},function(_ref6){var inView=_ref6.inView,ref=_ref6.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,style:{height:"150vh"}},"Header is fully inside the viewport: ",inView.toString())}))}).add("With threshold array",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:[0,.25,.5,.75,1],onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Hit threshold trigger")},function(_ref7){var inView=_ref7.inView,ref=_ref7.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref},"Header is inside threshold: ",inView.toString()," - onChange triggers multiple times.")}))}).add("With root",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Root_index__WEBPACK_IMPORTED_MODULE_6__.a,null,function(node){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:0,root:node,rootMargin:"64px",onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref8){var inView=_ref8.inView,ref=_ref8.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref},"Header is inside the root viewport: ",inView.toString())}))})}).add("With root and rootMargin",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Root_index__WEBPACK_IMPORTED_MODULE_6__.a,{style:{padding:64}},function(node){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:0,root:node,rootMargin:"64px",onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref9){var inView=_ref9.inView,ref=_ref9.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref},"Header is inside the root viewport: ",inView.toString())}))})}).add("Trigger once",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:1,triggerOnce:!0,onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref10){var inView=_ref10.inView,ref=_ref10.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref},"Header was fully inside the viewport: ",inView.toString())}))}).add("Multiple observers",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper_index__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:1,onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref11){var inView=_ref11.inView,ref=_ref11.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref},"Header 1 is fully inside the viewport: ",inView.toString())}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:1,onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Child Observer inview")},function(_ref12){var inView=_ref12.inView,ref=_ref12.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref},"Header 2 is fully inside the viewport: ",inView.toString())}))})}.call(this,__webpack_require__(113)(module))},98:function(module){module.exports={name:"react-intersection-observer",version:"7.0.0",description:"Monitor if a component is inside the viewport, using IntersectionObserver API",main:"dist/react-intersection-observer.cjs.js",module:"dist/react-intersection-observer.esm.js",unpkg:"dist/react-intersection-observer.umd.min.js",author:"Daniel Schmidt",typings:"dist/typings/index.d.ts",files:["dist/*"],repository:{type:"git",url:"https://github.com/thebuilder/react-intersection-observer.git"},license:"MIT",keywords:["react","component","viewport","intersection","inview"],prettier:{singleQuote:!0,semi:!1,trailingComma:"all",proseWrap:"always"},eslintIgnore:["*.snap","dist/**","lib/**","webpack.config.js"],scripts:{coveralls:"cat ./coverage/lcov.info | coveralls",build:"rm -rf dist && yarn run build:lib && tsc","build:lib":"rollup -c","build:storybook":"build-storybook --output-dir example",dev:"concurrently -k -r 'jest --watch' 'yarn run storybook'","docz:dev":"docz dev","docz:build":"docz build",lint:"eslint . --ext js,ts,tsx","now-build":"docz build",preversion:"yarn build",pretty:"prettier '**/*.{js,ts,tsx,md,json,yml,html}' --write",storybook:"start-storybook -p 9000",test:"jest"},husky:{hooks:{"pre-commit":"tsc && lint-staged"}},"lint-staged":{"*.{js,json,css,md,ts,tsx}":["prettier --write","git add"],"src/**/*.{ts,tsx}":["eslint","jest --findRelatedTests"]},eslintConfig:{extends:["react-app"],parser:"@typescript-eslint/parser",plugins:["@typescript-eslint"],settings:{react:{version:"detect"}},rules:{"no-unused-vars":0}},jest:{testEnvironment:"jsdom",snapshotSerializers:["enzyme-to-json/serializer"],setupFiles:["<rootDir>/scripts/jest-setup.js"],coveragePathIgnorePatterns:["/node_modules/","jest-setup.js"]},dependencies:{"@babel/runtime":"^7.2.0",invariant:"^2.2.4"},peerDependencies:{react:"^15.0.0 || ^16.0.0 || ^17.0.0"},devDependencies:{"@babel/cli":"^7.2.3","@babel/core":"^7.2.2","@babel/plugin-proposal-class-properties":"^7.2.3","@babel/plugin-transform-runtime":"^7.2.0","@babel/preset-env":"^7.2.3","@babel/preset-flow":"^7.0.0","@babel/preset-react":"^7.0.0","@babel/preset-typescript":"^7.1.0","@emotion/cache":"^10.0.0","@emotion/core":"^10.0.6","@emotion/styled-base":"^10.0.5","@storybook/addon-actions":"^4.1.4","@storybook/addon-options":"^4.1.4","@storybook/react":"^4.1.4","@types/jest":"^24.0.0","@types/react":"^16.7.22","@types/storybook__addon-actions":"^3.4.1","@types/storybook__addon-links":"^3.3.3","@types/storybook__react":"^4.0.0","@typescript-eslint/eslint-plugin":"^1.1.1","@typescript-eslint/parser":"^1.1.1","babel-core":"^7.0.0-bridge.0","babel-eslint":"10.0.1","babel-jest":"^24.0.0","babel-loader":"^8.0.5",concurrently:"4.1.0",coveralls:"^3.0.2",docz:"0.13.7","docz-theme-default":"0.13.7",enzyme:"^3.8.0","enzyme-adapter-react-16":"^1.8.0","enzyme-to-json":"^3.3.5","error-overlay-webpack-plugin":"^0.1.6",eslint:"5.x","eslint-config-react-app":"^3.0.6","eslint-plugin-flowtype":"^3.2.1","eslint-plugin-import":"2.16.0","eslint-plugin-jsx-a11y":"6.x","eslint-plugin-react":"7.x",husky:"^1.3.1","intersection-observer":"^0.5.1",jest:"^24.0.0","jest-dom":"^3.0.1","lint-staged":"^8.1.1","npm-run-all":"^4.1.5",prettier:"^1.16.2",react:"^16.8.0","react-dom":"^16.8.0","react-spring":"^7.2.10","react-test-renderer":"^16.8.0",rollup:"^1.0.2","rollup-plugin-babel":"^4.2.0","rollup-plugin-commonjs":"^9.2.0","rollup-plugin-node-resolve":"^4.0.0","rollup-plugin-replace":"^2.1.0","rollup-plugin-uglify":"^6.0.2",typescript:"^3.2.4","typescript-eslint-parser":"^22.0.0"},resolutions:{"@types/react":"16.7.22"}}}},[[216,1,2]]]);
//# sourceMappingURL=main.ad015bbd30937a65fc24.bundle.js.map