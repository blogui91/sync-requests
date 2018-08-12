'use strict';var _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();Object.defineProperty(exports,'__esModule',{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var BaseModel=function(a){return function(b){function c(){_classCallCheck(this,c);var d=_possibleConstructorReturn(this,(c.__proto__||Object.getPrototypeOf(c)).call(this));return d.props=[],d.attributes={},d._isBeingDeleted=!1,d._isBeingCreated=!0,d._isDeleted=!1,d._exists=!1,d}return _inherits(c,b),_createClass(c,[{key:'defineColumns',value:function defineColumns(d){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return this.props=d,this._run(e),this}},{key:'save',value:function save(){var e=this,d=this.beforeSave();return this.attributes.id?this.update():(this._isBeingCreated=!0,new Promise(function(f,g){e.createResource(d).then(function(h){e.fill(e.dataToFillAfterSave(h)),e._setItemExistence(!0),e._isBeingCreated=!1,f(h)}).catch(function(h){e._isBeingCreated=!1,g(h)})}))}},{key:'update',value:function update(){var f=this,e=this.beforeUpdate(),d=e.id;return this._isBeingUpdated=!0,new Promise(function(g,h){f.updateResource(d,e).then(function(j){f._isBeingUpdated=!1,f.fill(f.dataToFillAfterUpdate(j)),g(j)}).catch(function(j){f._isBeingUpdated=!1,h(j)})})}},{key:'destroy',value:function destroy(){var f=this,e=this.beforeDestroy(),d=e.id;return this._isBeingDeleted=!0,new Promise(function(g,h){f.deleteResource(d).then(function(j){f._isBeingDeleted=!1,f._setItemExistence(!1),g(j)}).catch(function(j){f._isBeingDeleted=!1,h(j)})})}},{key:'fill',value:function fill(d){for(var e in this.attributes)'undefined'!=typeof d[e]&&(this.attributes[e]=d[e]);return this}},{key:'dataToFillAfterSave',value:function dataToFillAfterSave(d){return d.data}},{key:'dataToFillAfterUpdate',value:function dataToFillAfterUpdate(d){return d.data}},{key:'serialize',value:function serialize(){var d=this.beforeSerialize();return d}},{key:'beforeSerialize',value:function beforeSerialize(){return JSON.parse(JSON.stringify(this.attributes))}},{key:'beforeUpdate',value:function beforeUpdate(){return JSON.parse(JSON.stringify(this.attributes))}},{key:'beforeSave',value:function beforeSave(){return JSON.parse(JSON.stringify(this.attributes))}},{key:'beforeDestroy',value:function beforeDestroy(){return JSON.parse(JSON.stringify(this.attributes))}},{key:'itemExists',value:function itemExists(){return this.attributes.id||!1}},{key:'_checkExistence',value:function _checkExistence(d){d?this.itemExists()&&this._setItemExistence(!0):this._setItemExistence(!1)}},{key:'_setItemExistence',value:function _setItemExistence(){var d=0<arguments.length&&void 0!==arguments[0]&&arguments[0];d?(this._isBeingCreated=!1,this._isDeleted=!1,this._exists=!0):(this._isBeingCreated=!0,this._exists=!1,this._isDeleted=void 0)}},{key:'_run',value:function _run(d){var e=this;if(this.props.constructor===Array)0<this.props.length?(this.props.forEach(function(g){'undefined'==typeof e[g]&&(e._defineNewProperty(g),e.attributes[g]=null)}),d&&(this.fill(d),this.checkExistence(d))):console.warn('Please make sure of declaring the props for your model!');else if(this.props.constructor!==Object)console.warn('Please make sure of declaring the props for your model!');else if('{}'===JSON.stringify(this.props)){var f=Object.keys(this.props);f.forEach(function(g){e._defineNewProperty(g),e.props[g].default&&(e.attributes[g]=e.props[g].default)}),d&&(this.fill(d),this.checkExistence(d))}}},{key:'_defineNewProperty',value:function _defineNewProperty(d){var e=this;Object.defineProperty(this,d,{get:function(){return e.attributes[d]},set:function(h){e.attributes[d]=h},enumerable:!0})}}]),c}(a)};exports.default=BaseModel;