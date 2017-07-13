webpackHotUpdate(0,{

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(563),
    baseEach = __webpack_require__(553),
    baseIteratee = __webpack_require__(175),
    baseReduce = __webpack_require__(728),
    isArray = __webpack_require__(22);

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;


/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/lib/AutoControlledComponent.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_difference__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_difference___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_difference__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_startsWith__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_startsWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_startsWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_filter__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isEmpty__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_keys__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_intersection__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_intersection___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_intersection__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_has__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_each__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_each__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_react__);














 /* eslint-disable no-console */
/**
 * Why choose inheritance over a HOC?  Multiple advantages for this particular use case.
 * In short, we need identical functionality to setState(), unless there is a prop defined
 * for the state key.  Also:
 *
 * 1. Single Renders
 *    Calling trySetState() in constructor(), componentWillMount(), or componentWillReceiveProps()
 *    does not cause two renders. Consumers and tests do not have to wait two renders to get state.
 *    See www.react.run/4kJFdKoxb/27 for an example of this issue.
 *
 * 2. Simple Testing
 *    Using a HOC means you must either test the undecorated component or test through the decorator.
 *    Testing the undecorated component means you must mock the decorator functionality.
 *    Testing through the HOC means you can not simply shallow render your component.
 *
 * 3. Statics
 *    HOC wrap instances, so statics are no longer accessible.  They can be hoisted, but this is more
 *    looping over properties and storing references.  We rely heavily on statics for testing and sub
 *    components.
 *
 * 4. Instance Methods
 *    Some instance methods may be exposed to users via refs.  Again, these are lost with HOC unless
 *    hoisted and exposed by the HOC.
 */



var getDefaultPropName = function getDefaultPropName(prop) {
  return 'default' + (prop[0].toUpperCase() + prop.slice(1));
};

/**
 * Return the auto controlled state value for a give prop. The initial value is chosen in this order:
 *  - regular props
 *  - then, default props
 *  - then, initial state
 *  - then, `checked` defaults to false
 *  - then, `value` defaults to '' or [] if props.multiple
 *  - else, undefined
 *
 *  @param {string} propName A prop name
 *  @param {object} [props] A props object
 *  @param {object} [state] A state object
 *  @param {boolean} [includeDefaults=false] Whether or not to heed the default props or initial state
 */
var getAutoControlledStateValue = function getAutoControlledStateValue(propName, props, state) {
  var includeDefaults = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  // regular props
  var propValue = props[propName];
  if (propValue !== undefined) return propValue;

  if (includeDefaults) {
    // defaultProps
    var defaultProp = props[getDefaultPropName(propName)];
    if (defaultProp !== undefined) return defaultProp;

    // initial state - state may be null or undefined
    if (state) {
      var initialState = state[propName];
      if (initialState !== undefined) return initialState;
    }
  }

  // React doesn't allow changing from uncontrolled to controlled components,
  // default checked/value if they were not present.
  if (propName === 'checked') return false;
  if (propName === 'value') return props.multiple ? [] : '';

  // otherwise, undefined
};

var AutoControlledComponent = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(AutoControlledComponent, _Component);

  function AutoControlledComponent() {
    var _ref;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, AutoControlledComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = AutoControlledComponent.__proto__ || Object.getPrototypeOf(AutoControlledComponent)).call.apply(_ref, [this].concat(args)));

    _initialiseProps.call(_this);

    var autoControlledProps = _this.constructor.autoControlledProps;

    var state = __WEBPACK_IMPORTED_MODULE_14_lodash_invoke___default.a(_this, 'getInitialState', _this.props) || {};

    if (true) {
      var _this$constructor = _this.constructor,
          defaultProps = _this$constructor.defaultProps,
          name = _this$constructor.name,
          propTypes = _this$constructor.propTypes;
      // require static autoControlledProps

      if (!autoControlledProps) {
        console.error('Auto controlled ' + name + ' must specify a static autoControlledProps array.');
      }

      // require propTypes
      __WEBPACK_IMPORTED_MODULE_13_lodash_each___default.a(autoControlledProps, function (prop) {
        var defaultProp = getDefaultPropName(prop);
        // regular prop
        if (!__WEBPACK_IMPORTED_MODULE_12_lodash_has___default.a(propTypes, defaultProp)) {
          console.error(name + ' is missing "' + defaultProp + '" propTypes validation for auto controlled prop "' + prop + '".');
        }
        // its default prop
        if (!__WEBPACK_IMPORTED_MODULE_12_lodash_has___default.a(propTypes, prop)) {
          console.error(name + ' is missing propTypes validation for auto controlled prop "' + prop + '".');
        }
      });

      // prevent autoControlledProps in defaultProps
      //
      // When setting state, auto controlled props values always win (so the parent can manage them).
      // It is not reasonable to decipher the difference between props from the parent and defaultProps.
      // Allowing defaultProps results in trySetState always deferring to the defaultProp value.
      // Auto controlled props also listed in defaultProps can never be updated.
      //
      // To set defaults for an AutoControlled prop, you can set the initial state in the
      // constructor or by using an ES7 property initializer:
      // https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers
      var illegalDefaults = __WEBPACK_IMPORTED_MODULE_11_lodash_intersection___default.a(autoControlledProps, __WEBPACK_IMPORTED_MODULE_10_lodash_keys___default.a(defaultProps));
      if (!__WEBPACK_IMPORTED_MODULE_9_lodash_isEmpty___default.a(illegalDefaults)) {
        console.error(['Do not set defaultProps for autoControlledProps. You can set defaults by', 'setting state in the constructor or using an ES7 property initializer', '(https://babeljs.io/blog/2015/06/07/react-on-es6-plus#property-initializers)', 'See ' + name + ' props: "' + illegalDefaults + '".'].join(' '));
      }

      // prevent listing defaultProps in autoControlledProps
      //
      // Default props are automatically handled.
      // Listing defaults in autoControlledProps would result in allowing defaultDefaultValue props.
      var illegalAutoControlled = __WEBPACK_IMPORTED_MODULE_8_lodash_filter___default.a(autoControlledProps, function (prop) {
        return __WEBPACK_IMPORTED_MODULE_7_lodash_startsWith___default.a(prop, 'default');
      });
      if (!__WEBPACK_IMPORTED_MODULE_9_lodash_isEmpty___default.a(illegalAutoControlled)) {
        console.error(['Do not add default props to autoControlledProps.', 'Default props are automatically handled.', 'See ' + name + ' autoControlledProps: "' + illegalAutoControlled + '".'].join(' '));
      }
    }

    // Auto controlled props are copied to state.
    // Set initial state by copying auto controlled props to state.
    // Also look for the default prop for any auto controlled props (foo => defaultFoo)
    // so we can set initial values from defaults.
    var initialAutoControlledState = autoControlledProps.reduce(function (acc, prop) {
      acc[prop] = getAutoControlledStateValue(prop, _this.props, state, true);

      if (true) {
        var defaultPropName = getDefaultPropName(prop);
        var _name = _this.constructor.name;
        // prevent defaultFoo={} along side foo={}

        if (!__WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined___default.a(_this.props[defaultPropName]) && !__WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined___default.a(_this.props[prop])) {
          console.error(_name + ' prop "' + prop + '" is auto controlled. Specify either ' + defaultPropName + ' or ' + prop + ', but not both.');
        }
      }

      return acc;
    }, {});

    _this.state = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, state, initialAutoControlledState);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(AutoControlledComponent, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var autoControlledProps = this.constructor.autoControlledProps;

      // Solve the next state for autoControlledProps

      var newState = autoControlledProps.reduce(function (acc, prop) {
        var isNextUndefined = __WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined___default.a(nextProps[prop]);
        var propWasRemoved = !__WEBPACK_IMPORTED_MODULE_6_lodash_isUndefined___default.a(_this2.props[prop]) && isNextUndefined;

        // if next is defined then use its value
        if (!isNextUndefined) acc[prop] = nextProps[prop];

        // reinitialize state for props just removed / set undefined
        else if (propWasRemoved) acc[prop] = getAutoControlledStateValue(prop, nextProps);

        return acc;
      }, {});

      if (Object.keys(newState).length > 0) this.setState(newState);
    }

    /**
     * Safely attempt to set state for props that might be controlled by the user.
     * Second argument is a state object that is always passed to setState.
     * @param {object} maybeState State that corresponds to controlled props.
     * @param {object} [state] Actual state, useful when you also need to setState.
     */

  }]);

  return AutoControlledComponent;
}(__WEBPACK_IMPORTED_MODULE_15_react__["Component"]);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.trySetState = function (maybeState, state) {
    var autoControlledProps = _this3.constructor.autoControlledProps;

    if (true) {
      var name = _this3.constructor.name;
      // warn about failed attempts to setState for keys not listed in autoControlledProps

      var illegalKeys = __WEBPACK_IMPORTED_MODULE_5_lodash_difference___default.a(__WEBPACK_IMPORTED_MODULE_10_lodash_keys___default.a(maybeState), autoControlledProps);
      if (!__WEBPACK_IMPORTED_MODULE_9_lodash_isEmpty___default.a(illegalKeys)) {
        console.error([name + ' called trySetState() with controlled props: "' + illegalKeys + '".', 'State will not be set.', 'Only props in static autoControlledProps will be set on state.'].join(' '));
      }
    }

    var newState = Object.keys(maybeState).reduce(function (acc, prop) {
      // ignore props defined by the parent
      if (_this3.props[prop] !== undefined) return acc;

      // ignore props not listed in auto controlled props
      if (autoControlledProps.indexOf(prop) === -1) return acc;

      acc[prop] = maybeState[prop];
      return acc;
    }, {});

    if (state) newState = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, newState, state);

    if (Object.keys(newState).length > 0) _this3.setState(newState);
  };
};

/* harmony default export */ var AutoControlledComponent_defaultExport = (AutoControlledComponent);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js
var childrenUtils_namespaceObject = {};
__webpack_require__.d(childrenUtils_namespaceObject, "someByType", function() { return someByType; });
__webpack_require__.d(childrenUtils_namespaceObject, "findByType", function() { return findByType; });
__webpack_require__.d(childrenUtils_namespaceObject, "isNil", function() { return isNil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_find__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_some__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_some___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_some__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);





/**
 * Determine if child by type exists in children.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {Boolean}
 */
var someByType = function someByType(children, type) {
  return __WEBPACK_IMPORTED_MODULE_1_lodash_some___default.a(__WEBPACK_IMPORTED_MODULE_2_react__["Children"].toArray(children), { type: type });
};

/**
 * Find child by type.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {undefined|Object}
 */
var findByType = function findByType(children, type) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash_find___default.a(__WEBPACK_IMPORTED_MODULE_2_react__["Children"].toArray(children), { type: type });
};

/**
 * Tests if children are nil in React and Preact.
 * @param {Object} children The children prop of a component.
 * @returns {Boolean}
 */
var isNil = function isNil(children) {
  return children === null || children === undefined || Array.isArray(children) && children.length === 0;
};
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/lib/numberToWord.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

var numberToWordMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen'

  /**
   * Return the number word for numbers 1-16.
   * Returns strings or numbers as is if there is no corresponding word.
   * Returns an empty string if value is not a string or number.
   * @param {string|number} value The value to convert to a word.
   * @returns {string}
   */
};function numberToWord(value) {
  var type = typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default.a(value);
  if (type === 'string' || type === 'number') {
    return numberToWordMap[value] || value;
  }

  return '';
}
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js
/* harmony import */ var classNameBuilders___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(107);
/* harmony import */ var classNameBuilders___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(classNameBuilders___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);



/*
 * There are 3 prop patterns used to build up the className for a component.
 * Each utility here is meant for use in a classnames() argument.
 *
 * There is no util for valueOnly() because it would simply return val.
 * Use the prop value inline instead.
 *   <Label size='big' />
 *   <div class="ui big label"></div>
 */

/**
 * Props where only the prop key is used in the className.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example
 * <Label tag />
 * <div class="ui tag label"></div>
 */
var useKeyOnly = function useKeyOnly(val, key) {
  return val && key;
};

/**
 * Props that require both a key and value to create a className.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example
 * <Label corner='left' />
 * <div class="ui left corner label"></div>
 */
var useValueAndKey = function useValueAndKey(val, key) {
  return val && val !== true && val + ' ' + key;
};

/**
 * Props whose key will be used in className, or value and key.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example Key Only
 * <Label pointing />
 * <div class="ui pointing label"></div>
 *
 * @example Key and Value
 * <Label pointing='left' />
 * <div class="ui left pointing label"></div>
 */
var useKeyOrValueAndKey = function useKeyOrValueAndKey(val, key) {
  return val && (val === true ? key : val + ' ' + key);
};

//
// Prop to className exceptions
//

/**
 * The "only" prop implements control of visibility classes for Grid subcomponents.
 *
 * @param {*} val The value of the "only" prop
 *
 * @example
 * <Grid.Row only='mobile' />
 * <Grid.Row only='mobile tablet' />
 * <div class="mobile only row"></div>
 * <div class="mobile only tablet only row"></div>
 */
var useOnlyProp = function useOnlyProp(val) {
  if (!val || val === true) return null;

  return val.replace('large screen', 'large-screen').split(' ').map(function (prop) {
    return prop.replace('-', ' ') + ' only';
  }).join(' ');
};

/**
 * The "textAlign" prop follows the useValueAndKey except when the value is "justified'.
 * In this case, only the class "justified" is used, ignoring the "aligned" class.
 * @param {*} val The value of the "textAlign" prop
 *
 * @example
 * <Container textAlign='justified' />
 * <div class="ui justified container"></div>
 *
 * @example
 * <Container textAlign='left' />
 * <div class="ui left aligned container"></div>
 */
var useTextAlignProp = function useTextAlignProp(val) {
  return val === 'justified' ? 'justified' : useValueAndKey(val, 'aligned');
};

/**
 * The "verticalAlign" prop follows the useValueAndKey.
 *
 * @param {*} val The value of the "verticalAlign" prop
 *
 * @example
 * <Grid verticalAlign='middle' />
 * <div class="ui middle aligned grid"></div>
 */
var useVerticalAlignProp = function useVerticalAlignProp(val) {
  return useValueAndKey(val, 'aligned');
};

/**
 * Create "X", "X wide" and "equal width" classNames.
 * "X" is a numberToWord value and "wide" is configurable.
 * @param {*} val The prop value
 * @param {string} [widthClass=''] The class
 * @param {boolean} [canEqual=false] Flag that indicates possibility of "equal" value
 *
 * @example
 * <Grid columns='equal' />
 * <div class="ui equal width grid"></div>
 *
 * <Form widths='equal' />
 * <div class="ui equal width form"></div>
 *
 * <FieldGroup widths='equal' />
 * <div class="equal width fields"></div>
 *
 * @example
 * <Grid columns={4} />
 * <div class="ui four column grid"></div>
 */
var classNameBuilders_useWidthProp = function useWidthProp(val) {
  var widthClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var canEqual = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (canEqual && val === 'equal') {
    return 'equal width';
  }
  var valType = typeof val === 'undefined' ? 'undefined' : classNameBuilders___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default.a(val);
  if ((valType === 'string' || valType === 'number') && widthClass) {
    return numberToWord(val) + ' ' + widthClass;
  }
  return numberToWord(val);
};
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/lib/leven.js
// Copy of sindre's leven, wrapped in dead code elimination for production
// https://github.com/sindresorhus/leven/blob/master/index.js

var leven = function leven() {
  return 0;
};

if (true) {
  /* eslint-disable complexity, no-nested-ternary */
  var arr = [];
  var charCodeCache = [];

  leven = function leven(a, b) {
    if (a === b) return 0;

    var aLen = a.length;
    var bLen = b.length;

    if (aLen === 0) return bLen;
    if (bLen === 0) return aLen;

    var bCharCode = void 0;
    var ret = void 0;
    var tmp = void 0;
    var tmp2 = void 0;
    var i = 0;
    var j = 0;

    while (i < aLen) {
      charCodeCache[i] = a.charCodeAt(i);
      arr[i] = ++i;
    }

    while (j < bLen) {
      bCharCode = b.charCodeAt(j);
      tmp = j++;
      ret = j;

      for (i = 0; i < aLen; i++) {
        tmp2 = bCharCode === charCodeCache[i] ? tmp : tmp + 1;
        tmp = arr[i];
        ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
      }
    }

    return ret;
  };
}

/* harmony default export */ var leven_defaultExport = (leven);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/lib/customPropTypes.js
var customPropTypes_namespaceObject = {};
__webpack_require__.d(customPropTypes_namespaceObject, "as", function() { return customPropTypes_as; });
__webpack_require__.d(customPropTypes_namespaceObject, "suggest", function() { return customPropTypes_suggest; });
__webpack_require__.d(customPropTypes_namespaceObject, "disallow", function() { return disallow; });
__webpack_require__.d(customPropTypes_namespaceObject, "every", function() { return every; });
__webpack_require__.d(customPropTypes_namespaceObject, "some", function() { return some; });
__webpack_require__.d(customPropTypes_namespaceObject, "givenProps", function() { return givenProps; });
__webpack_require__.d(customPropTypes_namespaceObject, "demand", function() { return demand; });
__webpack_require__.d(customPropTypes_namespaceObject, "onlyProp", function() { return onlyProp; });
__webpack_require__.d(customPropTypes_namespaceObject, "contentShorthand", function() { return contentShorthand; });
__webpack_require__.d(customPropTypes_namespaceObject, "itemShorthand", function() { return itemShorthand; });
__webpack_require__.d(customPropTypes_namespaceObject, "collectionShorthand", function() { return collectionShorthand; });
__webpack_require__.d(customPropTypes_namespaceObject, "deprecate", function() { return deprecate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_fp_difference__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_fp_difference___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_fp_difference__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_fp_trim__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_fp_trim___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_fp_trim__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_fp_isObject__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_fp_isObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_fp_isObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_fp_pick__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_fp_pick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_fp_pick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_fp_keys__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_fp_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_fp_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_fp_isPlainObject__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_fp_isPlainObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_fp_isPlainObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_fp_isFunction__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_fp_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_fp_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_fp_compact__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_fp_compact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_fp_compact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_fp_take__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_fp_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_fp_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_fp_sortBy__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_fp_sortBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_fp_sortBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_fp_sum__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_fp_sum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_fp_sum__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_fp_min__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_fp_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_fp_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_fp_map__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_fp_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_fp_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_fp_flow__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_fp_flow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash_fp_flow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_fp_includes__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_fp_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_lodash_fp_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_fp_isNil__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_fp_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_lodash_fp_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_prop_types__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_prop_types__);





















var typeOf = function typeOf() {
  var _Object$prototype$toS;

  return (_Object$prototype$toS = Object.prototype.toString).call.apply(_Object$prototype$toS, arguments);
};

/**
 * Ensure a component can render as a give prop value.
 */
var customPropTypes_as = function as() {
  return __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.func]).apply(undefined, arguments);
};

/**
 * Similar to PropTypes.oneOf but shows closest matches.
 * Word order is ignored allowing `left chevron` to match `chevron left`.
 * Useful for very large lists of options (e.g. Icon name, Flag name, etc.)
 * @param {string[]} suggestions An array of allowed values.
 */
var customPropTypes_suggest = function suggest(suggestions) {
  return function (props, propName, componentName) {
    if (!Array.isArray(suggestions)) {
      throw new Error(['Invalid argument supplied to suggest, expected an instance of array.', ' See `' + propName + '` prop in `' + componentName + '`.'].join(''));
    }
    var propValue = props[propName];

    // skip if prop is undefined or is included in the suggestions
    if (__WEBPACK_IMPORTED_MODULE_16_lodash_fp_isNil___default.a(propValue) || propValue === false || __WEBPACK_IMPORTED_MODULE_15_lodash_fp_includes___default.a(propValue, suggestions)) return;

    // find best suggestions
    var propValueWords = propValue.split(' ');

    /* eslint-disable max-nested-callbacks */
    var bestMatches = __WEBPACK_IMPORTED_MODULE_14_lodash_fp_flow___default.a(__WEBPACK_IMPORTED_MODULE_13_lodash_fp_map___default.a(function (suggestion) {
      var suggestionWords = suggestion.split(' ');

      var propValueScore = __WEBPACK_IMPORTED_MODULE_14_lodash_fp_flow___default.a(__WEBPACK_IMPORTED_MODULE_13_lodash_fp_map___default.a(function (x) {
        return __WEBPACK_IMPORTED_MODULE_13_lodash_fp_map___default.a(function (y) {
          return leven_defaultExport(x, y);
        }, suggestionWords);
      }), __WEBPACK_IMPORTED_MODULE_13_lodash_fp_map___default.a(__WEBPACK_IMPORTED_MODULE_12_lodash_fp_min___default.a), __WEBPACK_IMPORTED_MODULE_11_lodash_fp_sum___default.a)(propValueWords);

      var suggestionScore = __WEBPACK_IMPORTED_MODULE_14_lodash_fp_flow___default.a(__WEBPACK_IMPORTED_MODULE_13_lodash_fp_map___default.a(function (x) {
        return __WEBPACK_IMPORTED_MODULE_13_lodash_fp_map___default.a(function (y) {
          return leven_defaultExport(x, y);
        }, propValueWords);
      }), __WEBPACK_IMPORTED_MODULE_13_lodash_fp_map___default.a(__WEBPACK_IMPORTED_MODULE_12_lodash_fp_min___default.a), __WEBPACK_IMPORTED_MODULE_11_lodash_fp_sum___default.a)(suggestionWords);

      return { suggestion: suggestion, score: propValueScore + suggestionScore };
    }), __WEBPACK_IMPORTED_MODULE_10_lodash_fp_sortBy___default.a(['score', 'suggestion']), __WEBPACK_IMPORTED_MODULE_9_lodash_fp_take___default.a(3))(suggestions);
    /* eslint-enable max-nested-callbacks */

    // skip if a match scored 0
    // since we're matching on words (classNames) this allows any word order to pass validation
    // e.g. `left chevron` vs `chevron left`
    if (bestMatches.some(function (x) {
      return x.score === 0;
    })) return;

    return new Error(['Invalid prop `' + propName + '` of value `' + propValue + '` supplied to `' + componentName + '`.', '\n\nInstead of `' + propValue + '`, did you mean:', bestMatches.map(function (x) {
      return '\n  - ' + x.suggestion;
    }).join(''), '\n'].join(''));
  };
};

/**
 * Disallow other props form being defined with this prop.
 * @param {string[]} disallowedProps An array of props that cannot be used with this prop.
 */
var disallow = function disallow(disallowedProps) {
  return function (props, propName, componentName) {
    if (!Array.isArray(disallowedProps)) {
      throw new Error(['Invalid argument supplied to disallow, expected an instance of array.', ' See `' + propName + '` prop in `' + componentName + '`.'].join(''));
    }

    // skip if prop is undefined
    if (__WEBPACK_IMPORTED_MODULE_16_lodash_fp_isNil___default.a(props[propName]) || props[propName] === false) return;

    // find disallowed props with values
    var disallowed = disallowedProps.reduce(function (acc, disallowedProp) {
      if (!__WEBPACK_IMPORTED_MODULE_16_lodash_fp_isNil___default.a(props[disallowedProp]) && props[disallowedProp] !== false) {
        return [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default.a(acc), [disallowedProp]);
      }
      return acc;
    }, []);

    if (disallowed.length > 0) {
      return new Error(['Prop `' + propName + '` in `' + componentName + '` conflicts with props: `' + disallowed.join('`, `') + '`.', 'They cannot be defined together, choose one or the other.'].join(' '));
    }
  };
};

/**
 * Ensure a prop adherers to multiple prop type validators.
 * @param {function[]} validators An array of propType functions.
 */
var every = function every(validators) {
  return function (props, propName, componentName) {
    for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    if (!Array.isArray(validators)) {
      throw new Error(['Invalid argument supplied to every, expected an instance of array.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
    }

    var errors = __WEBPACK_IMPORTED_MODULE_14_lodash_fp_flow___default.a(__WEBPACK_IMPORTED_MODULE_13_lodash_fp_map___default.a(function (validator) {
      if (typeof validator !== 'function') {
        throw new Error('every() argument "validators" should contain functions, found: ' + typeOf(validator) + '.');
      }
      return validator.apply(undefined, [props, propName, componentName].concat(rest));
    }), __WEBPACK_IMPORTED_MODULE_8_lodash_fp_compact___default.a)(validators);

    // we can only return one error at a time
    return errors[0];
  };
};

/**
 * Ensure a prop adherers to at least one of the given prop type validators.
 * @param {function[]} validators An array of propType functions.
 */
var some = function some(validators) {
  return function (props, propName, componentName) {
    for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    if (!Array.isArray(validators)) {
      throw new Error(['Invalid argument supplied to some, expected an instance of array.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
    }

    var errors = __WEBPACK_IMPORTED_MODULE_8_lodash_fp_compact___default.a(__WEBPACK_IMPORTED_MODULE_13_lodash_fp_map___default.a(validators, function (validator) {
      if (!__WEBPACK_IMPORTED_MODULE_7_lodash_fp_isFunction___default.a(validator)) {
        throw new Error('some() argument "validators" should contain functions, found: ' + typeOf(validator) + '.');
      }
      return validator.apply(undefined, [props, propName, componentName].concat(rest));
    }));

    // fail only if all validators failed
    if (errors.length === validators.length) {
      var error = new Error('One of these validators must pass:');
      error.message += '\n' + __WEBPACK_IMPORTED_MODULE_13_lodash_fp_map___default.a(errors, function (err, i) {
        return '[' + (i + 1) + ']: ' + err.message;
      }).join('\n');
      return error;
    }
  };
};

/**
 * Ensure a validator passes only when a component has a given propsShape.
 * @param {object} propsShape An object describing the prop shape.
 * @param {function} validator A propType function.
 */
var givenProps = function givenProps(propsShape, validator) {
  return function (props, propName, componentName) {
    for (var _len3 = arguments.length, rest = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
      rest[_key3 - 3] = arguments[_key3];
    }

    if (!__WEBPACK_IMPORTED_MODULE_6_lodash_fp_isPlainObject___default.a(propsShape)) {
      throw new Error(['Invalid argument supplied to givenProps, expected an object.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
    }

    if (typeof validator !== 'function') {
      throw new Error(['Invalid argument supplied to givenProps, expected a function.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
    }

    var shouldValidate = __WEBPACK_IMPORTED_MODULE_5_lodash_fp_keys___default.a(propsShape).every(function (key) {
      var val = propsShape[key];
      // require propShape validators to pass or prop values to match
      return typeof val === 'function' ? !val.apply(undefined, [props, key, componentName].concat(rest)) : val === props[propName];
    });

    if (!shouldValidate) return;

    var error = validator.apply(undefined, [props, propName, componentName].concat(rest));

    if (error) {
      // poor mans shallow pretty print, prevents JSON circular reference errors
      var prettyProps = '{ ' + __WEBPACK_IMPORTED_MODULE_5_lodash_fp_keys___default.a(__WEBPACK_IMPORTED_MODULE_4_lodash_fp_pick___default.a(__WEBPACK_IMPORTED_MODULE_5_lodash_fp_keys___default.a(propsShape), props)).map(function (key) {
        var val = props[key];
        var renderedValue = val;
        if (typeof val === 'string') renderedValue = '"' + val + '"';else if (Array.isArray(val)) renderedValue = '[' + val.join(', ') + ']';else if (__WEBPACK_IMPORTED_MODULE_3_lodash_fp_isObject___default.a(val)) renderedValue = '{...}';

        return key + ': ' + renderedValue;
      }).join(', ') + ' }';

      error.message = 'Given props ' + prettyProps + ': ' + error.message;
      return error;
    }
  };
};

/**
 * Define prop dependencies by requiring other props.
 * @param {string[]} requiredProps An array of required prop names.
 */
var demand = function demand(requiredProps) {
  return function (props, propName, componentName) {
    if (!Array.isArray(requiredProps)) {
      throw new Error(['Invalid `requiredProps` argument supplied to require, expected an instance of array.', ' See `' + propName + '` prop in `' + componentName + '`.'].join(''));
    }

    // skip if prop is undefined
    if (props[propName] === undefined) return;

    var missingRequired = requiredProps.filter(function (requiredProp) {
      return props[requiredProp] === undefined;
    });
    if (missingRequired.length > 0) {
      return new Error('`' + propName + '` prop in `' + componentName + '` requires props: `' + missingRequired.join('`, `') + '`.');
    }
  };
};

/**
 * Ensure an only prop contains a string with only possible values.
 * @param {string[]} possible An array of possible values to prop.
 */
var onlyProp = function onlyProp(possible) {
  return function (props, propName, componentName) {
    if (!Array.isArray(possible)) {
      throw new Error(['Invalid argument supplied to some, expected an instance of array.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
    }

    var propValue = props[propName];

    // skip if prop is undefined
    if (__WEBPACK_IMPORTED_MODULE_16_lodash_fp_isNil___default.a(propValue) || propValue === false) return;

    var values = propValue.replace('large screen', 'large-screen').split(' ').map(function (val) {
      return __WEBPACK_IMPORTED_MODULE_2_lodash_fp_trim___default.a(val).replace('-', ' ');
    });
    var invalid = __WEBPACK_IMPORTED_MODULE_1_lodash_fp_difference___default.a(values, possible);

    // fail only if there are invalid values
    if (invalid.length > 0) {
      return new Error('`' + propName + '` prop in `' + componentName + '` has invalid values: `' + invalid.join('`, `') + '`.');
    }
  };
};

/**
 * Ensure a component can render as a node passed as a prop value in place of children.
 */
var contentShorthand = function contentShorthand() {
  return every([disallow(['children']), __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.node]).apply(undefined, arguments);
};

/**
 * Item shorthand is a description of a component that can be a literal,
 * a props object, or an element.
 */
var itemShorthand = function itemShorthand() {
  return every([disallow(['children']), __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.object])]).apply(undefined, arguments);
};

/**
 * Collection shorthand ensures a prop is an array of item shorthand.
 */
var collectionShorthand = function collectionShorthand() {
  return every([disallow(['children']), __WEBPACK_IMPORTED_MODULE_17_prop_types___default.a.arrayOf(itemShorthand)]).apply(undefined, arguments);
};

/**
 * Show a deprecated warning for component props with a help message and optional validator.
 * @param {string} help A help message to display with the deprecation warning.
 * @param {function} [validator] A propType function.
 */
var deprecate = function deprecate(help, validator) {
  return function (props, propName, componentName) {
    for (var _len4 = arguments.length, args = Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
      args[_key4 - 3] = arguments[_key4];
    }

    if (typeof help !== 'string') {
      throw new Error(['Invalid `help` argument supplied to deprecate, expected a string.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
    }

    // skip if prop is undefined
    if (props[propName] === undefined) return;

    // deprecation error and help
    var error = new Error('The `' + propName + '` prop in `' + componentName + '` is deprecated.');
    if (help) error.message += ' ' + help;

    // add optional validation error message
    if (validator) {
      if (typeof validator === 'function') {
        var validationError = validator.apply(undefined, [props, propName, componentName].concat(args));
        if (validationError) {
          error.message = error.message + ' ' + validationError.message;
        }
      } else {
        throw new Error(['Invalid argument supplied to deprecate, expected a function.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
      }
    }

    return error;
  };
};
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/lib/isBrowser.js
/* harmony import */ var isBrowser___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(107);
/* harmony import */ var isBrowser___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(isBrowser___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);

var hasDocument = (typeof document === 'undefined' ? 'undefined' : isBrowser___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default.a(document)) === 'object' && document !== null;
var hasWindow = (typeof window === 'undefined' ? 'undefined' : isBrowser___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default.a(window)) === 'object' && window !== null && window.self === window;

/* harmony default export */ var isBrowser_defaultExport = (hasDocument && hasWindow);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/lib/debug.js

var _debug = void 0;
var noop = function noop() {
  return undefined;
};

if (isBrowser_defaultExport && "development" !== 'production' && "development" !== 'test') {
  // Heads Up!
  // https://github.com/visionmedia/debug/pull/331
  //
  // debug now clears storage on load, grab the debug settings before require('debug').
  // We try/catch here as Safari throws on localStorage access in private mode or with cookies disabled.
  var DEBUG = void 0;
  try {
    DEBUG = window.localStorage.debug;
  } catch (e) {
    /* eslint-disable no-console */
    console.error('Semantic-UI-React could not enable debug.');
    console.error(e);
    /* eslint-enable no-console */
  }

  _debug = __webpack_require__(706);

  // enable what ever settings we got from storage
  _debug.enable(DEBUG);
} else {
  _debug = function _debug() {
    return noop;
  };
}

/**
 * Create a namespaced debug function.
 * @param {String} namespace Usually a component name.
 * @example
 * import { makeDebugger } from 'src/lib'
 * const debug = makeDebugger('namespace')
 *
 * debug('Some message')
 * @returns {Function}
 */
var makeDebugger = function makeDebugger(namespace) {
  return _debug('semanticUIReact:' + namespace);
};

/**
 * Default debugger, simple log.
 * @example
 * import { debug } from 'src/lib'
 * debug('Some message')
 */
var debug = makeDebugger('log');
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/lib/factories.js
/* harmony import */ var factories___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var factories___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(factories___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_uniq__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_uniq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isFunction__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isArray__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isPlainObject__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isPlainObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isPlainObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isNumber__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isNumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isNumber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isString__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isString___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isString__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isBoolean__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isBoolean___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isBoolean__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isNil__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react__);














// ============================================================
// Factories
// ============================================================

/**
 * A more robust React.createElement. It can create elements from primitive values.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @param {string|object|function} val The value to create a ReactElement from
 * @param {Object} [options={}]
 * @param {object} [options.defaultProps={}] Default props object
 * @param {object|function} [options.overrideProps={}] Override props object or function (called with regular props)
 * @returns {object|null}
 */
function createShorthand(Component, mapValueToProps, val) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.');
  }
  // short circuit noop values
  if (__WEBPACK_IMPORTED_MODULE_9_lodash_isNil___default.a(val) || __WEBPACK_IMPORTED_MODULE_8_lodash_isBoolean___default.a(val)) return null;

  var valIsString = __WEBPACK_IMPORTED_MODULE_7_lodash_isString___default.a(val);
  var valIsNumber = __WEBPACK_IMPORTED_MODULE_6_lodash_isNumber___default.a(val);

  var isReactElement = __WEBPACK_IMPORTED_MODULE_11_react__["isValidElement"](val);
  var isPropsObject = __WEBPACK_IMPORTED_MODULE_5_lodash_isPlainObject___default.a(val);
  var isPrimitiveValue = valIsString || valIsNumber || __WEBPACK_IMPORTED_MODULE_4_lodash_isArray___default.a(val);

  // unhandled type return null
  /* eslint-disable no-console */
  if (!isReactElement && !isPropsObject && !isPrimitiveValue) {
    if (true) {
      console.error(['Shorthand value must be a string|number|array|object|ReactElement.', ' Use null|undefined|boolean for none', ' Received ' + (typeof val === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default.a(val)) + '.'].join(''));
    }
    return null;
  }
  /* eslint-enable no-console */

  // ----------------------------------------
  // Build up props
  // ----------------------------------------
  var _options$defaultProps = options.defaultProps,
      defaultProps = _options$defaultProps === undefined ? {} : _options$defaultProps;

  // User's props

  var usersProps = isReactElement && val.props || isPropsObject && val || isPrimitiveValue && mapValueToProps(val);

  // Override props
  var _options$overrideProp = options.overrideProps,
      overrideProps = _options$overrideProp === undefined ? {} : _options$overrideProp;

  overrideProps = __WEBPACK_IMPORTED_MODULE_3_lodash_isFunction___default.a(overrideProps) ? overrideProps(factories___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, defaultProps, usersProps)) : overrideProps;

  // Merge props
  /* eslint-disable react/prop-types */
  var props = factories___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, defaultProps, usersProps, overrideProps);

  // Merge className
  if (defaultProps.className || overrideProps.className || usersProps.className) {
    var mergedClassesNames = __WEBPACK_IMPORTED_MODULE_10_classnames___default.a(defaultProps.className, overrideProps.className, usersProps.className);
    props.className = __WEBPACK_IMPORTED_MODULE_2_lodash_uniq___default.a(mergedClassesNames.split(' ')).join(' ');
  }

  // Merge style
  if (defaultProps.style || overrideProps.style || usersProps.style) {
    props.style = factories___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, defaultProps.style, usersProps.style, overrideProps.style);
  }

  // ----------------------------------------
  // Get key
  // ----------------------------------------

  // Use key, childKey, or generate key
  if (__WEBPACK_IMPORTED_MODULE_9_lodash_isNil___default.a(props.key)) {
    var childKey = props.childKey;


    if (!__WEBPACK_IMPORTED_MODULE_9_lodash_isNil___default.a(childKey)) {
      // apply and consume the childKey
      props.key = typeof childKey === 'function' ? childKey(props) : childKey;
      delete props.childKey;
    } else if (valIsString || valIsNumber) {
      // use string/number shorthand values as the key
      props.key = val;
    }
  }
  /* eslint-enable react/prop-types */

  // ----------------------------------------
  // Create Element
  // ----------------------------------------

  // Clone ReactElements
  if (isReactElement) return __WEBPACK_IMPORTED_MODULE_11_react__["cloneElement"](val, props);

  // Create ReactElements from built up props
  if (isPrimitiveValue || isPropsObject) return __WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(Component, props);
}

// ============================================================
// Factory Creators
// ============================================================

/**
 * Creates a `createShorthand` function that is waiting for a value and options.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @returns {function} A shorthand factory function waiting for `val` and `defaultProps`.
 */
createShorthand.handledProps = [];
function createShorthandFactory(Component, mapValueToProps) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.');
  }

  return function (val, options) {
    return createShorthand(Component, mapValueToProps, val, options);
  };
}

// ============================================================
// HTML Factories
// ============================================================
var createHTMLDivision = createShorthandFactory('div', function (val) {
  return { children: val };
});
var createHTMLImage = createShorthandFactory('img', function (val) {
  return { src: val };
});
var createHTMLInput = createShorthandFactory('input', function (val) {
  return { type: val };
});
var createHTMLLabel = createShorthandFactory('label', function (val) {
  return { children: val };
});
var createHTMLParagraph = createShorthandFactory('p', function (val) {
  return { children: val };
});
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js
/**
 * Returns an object consisting of props beyond the scope of the Component.
 * Useful for getting and spreading unknown props from the user.
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @returns {{}} A shallow copy of the prop object
 */
var getUnhandledProps = function getUnhandledProps(Component, props) {
  // Note that `handledProps` are generated automatically during build with `babel-plugin-transform-react-handled-props`
  var _Component$handledPro = Component.handledProps,
      handledProps = _Component$handledPro === undefined ? [] : _Component$handledPro;


  return Object.keys(props).reduce(function (acc, prop) {
    if (prop === 'childKey') return acc;
    if (handledProps.indexOf(prop) === -1) acc[prop] = props[prop];
    return acc;
  }, {});
};

/* harmony default export */ var getUnhandledProps_defaultExport = (getUnhandledProps);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/lib/getElementType.js
/**
 * Returns a createElement() type based on the props of the Component.
 * Useful for calculating what type a component should render as.
 *
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @param {function} [getDefault] A function that returns a default element type.
 * @returns {string|function} A ReactElement type
 */
function getElementType(Component, props, getDefault) {
  var _Component$defaultPro = Component.defaultProps,
      defaultProps = _Component$defaultPro === undefined ? {} : _Component$defaultPro;

  // ----------------------------------------
  // user defined "as" element type

  if (props.as && props.as !== defaultProps.as) return props.as;

  // ----------------------------------------
  // computed default element type

  if (getDefault) {
    var computedDefault = getDefault();
    if (computedDefault) return computedDefault;
  }

  // ----------------------------------------
  // infer anchor links

  if (props.href) return 'a';

  // ----------------------------------------
  // use defaultProp or 'div'

  return defaultProps.as || 'div';
}

/* harmony default export */ var getElementType_defaultExport = (getElementType);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/lib/htmlInputPropsUtils.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_includes__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_forEach__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_forEach___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_forEach__);




var htmlInputAttrs = [
// REACT
'selected', 'defaultValue', 'defaultChecked',

// LIMITED HTML PROPS
'autoCapitalize', 'autoComplete', 'autoCorrect', 'autoFocus', 'checked', 'disabled', 'form', 'id', 'list', 'max', 'maxLength', 'min', 'minLength', 'multiple', 'name', 'pattern', 'placeholder', 'readOnly', 'required', 'step', 'type', 'value'];

var htmlInputEvents = [
// EVENTS
// keyboard
'onKeyDown', 'onKeyPress', 'onKeyUp',

// focus
'onFocus', 'onBlur',

// form
'onChange', 'onInput',

// mouse
'onClick', 'onContextMenu', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp',

// selection
'onSelect',

// touch
'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart'];

var htmlInputPropsUtils_htmlInputProps = [].concat(htmlInputAttrs, htmlInputEvents);

/**
 * Returns an array of objects consisting of: props of html input element and rest.
 * @param {object} props A ReactElement props object
 * @param {Object} [options={}]
 * @param {Array} [options.htmlProps] An array of html input props
 * @param {boolean} [options.includeAria] Includes all input props that starts with "aria-"
 * @returns {[{}, {}]} An array of objects
 */
var partitionHTMLInputProps = function partitionHTMLInputProps(props) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$htmlProps = options.htmlProps,
      htmlProps = _options$htmlProps === undefined ? htmlInputPropsUtils_htmlInputProps : _options$htmlProps,
      _options$includeAria = options.includeAria,
      includeAria = _options$includeAria === undefined ? true : _options$includeAria;

  var inputProps = {};
  var rest = {};

  __WEBPACK_IMPORTED_MODULE_1_lodash_forEach___default.a(props, function (val, prop) {
    var possibleAria = includeAria && (/^aria-.*$/.test(prop) || prop === 'role');
    var target = __WEBPACK_IMPORTED_MODULE_0_lodash_includes___default.a(htmlProps, prop) || possibleAria ? inputProps : rest;
    target[prop] = val;
  });

  return [inputProps, rest];
};
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/lib/META.js
var META_namespaceObject = {};
__webpack_require__.d(META_namespaceObject, "TYPES", function() { return TYPES; });
__webpack_require__.d(META_namespaceObject, "isMeta", function() { return isMeta; });
__webpack_require__.d(META_namespaceObject, "isType", function() { return isType; });
__webpack_require__.d(META_namespaceObject, "isAddon", function() { return isAddon; });
__webpack_require__.d(META_namespaceObject, "isCollection", function() { return isCollection; });
__webpack_require__.d(META_namespaceObject, "isElement", function() { return isElement; });
__webpack_require__.d(META_namespaceObject, "isView", function() { return isView; });
__webpack_require__.d(META_namespaceObject, "isModule", function() { return isModule; });
__webpack_require__.d(META_namespaceObject, "isParent", function() { return isParent; });
__webpack_require__.d(META_namespaceObject, "isChild", function() { return isChild; });
__webpack_require__.d(META_namespaceObject, "isPrivate", function() { return isPrivate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_fp_startsWith__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_fp_startsWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_fp_startsWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_fp_has__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_fp_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_fp_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_fp_eq__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_fp_eq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_fp_eq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_fp_flow__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_fp_flow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_fp_flow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_fp_curry__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_fp_curry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_fp_curry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_fp_get__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_fp_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_fp_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_fp_includes__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_fp_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_fp_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_fp_values__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_fp_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_fp_values__);










var TYPES = {
  ADDON: 'addon',
  BEHAVIOR: 'behavior',
  COLLECTION: 'collection',
  ELEMENT: 'element',
  VIEW: 'view',
  MODULE: 'module'
};

var TYPE_VALUES = __WEBPACK_IMPORTED_MODULE_7_lodash_fp_values___default.a(TYPES);

/**
 * Determine if an object qualifies as a META object.
 * It must have the required keys and valid values.
 * @private
 * @param {Object} _meta A proposed component _meta object.
 * @returns {Boolean}
 */
var isMeta = function isMeta(_meta) {
  return __WEBPACK_IMPORTED_MODULE_6_lodash_fp_includes___default.a(__WEBPACK_IMPORTED_MODULE_5_lodash_fp_get___default.a('type', _meta), TYPE_VALUES);
};

/**
 * Extract a component's _meta object and optional key.
 * Handles literal _meta objects, classes with _meta, objects with _meta
 * @private
 * @param {function|object} metaArg A class, a component instance, or meta object..
 * @returns {object|string|undefined}
 */
var getMeta = function getMeta(metaArg) {
  // literal
  if (isMeta(metaArg)) return metaArg;

  // from prop
  else if (isMeta(__WEBPACK_IMPORTED_MODULE_5_lodash_fp_get___default.a('_meta', metaArg))) return metaArg._meta;

    // from class
    else if (isMeta(__WEBPACK_IMPORTED_MODULE_5_lodash_fp_get___default.a('constructor._meta', metaArg))) return metaArg.constructor._meta;
};

var metaHasKeyValue = __WEBPACK_IMPORTED_MODULE_4_lodash_fp_curry___default.a(function (key, val, metaArg) {
  return __WEBPACK_IMPORTED_MODULE_3_lodash_fp_flow___default.a(getMeta, __WEBPACK_IMPORTED_MODULE_5_lodash_fp_get___default.a(key), __WEBPACK_IMPORTED_MODULE_2_lodash_fp_eq___default.a(val))(metaArg);
});
var isType = metaHasKeyValue('type');

// ----------------------------------------
// Export
// ----------------------------------------

// type
var isAddon = isType(TYPES.ADDON);
var isCollection = isType(TYPES.COLLECTION);
var isElement = isType(TYPES.ELEMENT);
var isView = isType(TYPES.VIEW);
var isModule = isType(TYPES.MODULE);

// parent
var isParent = __WEBPACK_IMPORTED_MODULE_3_lodash_fp_flow___default.a(getMeta, __WEBPACK_IMPORTED_MODULE_1_lodash_fp_has___default.a('parent'), __WEBPACK_IMPORTED_MODULE_2_lodash_fp_eq___default.a(false));
var isChild = __WEBPACK_IMPORTED_MODULE_3_lodash_fp_flow___default.a(getMeta, __WEBPACK_IMPORTED_MODULE_1_lodash_fp_has___default.a('parent'));

// other
var isPrivate = __WEBPACK_IMPORTED_MODULE_3_lodash_fp_flow___default.a(getMeta, __WEBPACK_IMPORTED_MODULE_5_lodash_fp_get___default.a('name'), __WEBPACK_IMPORTED_MODULE_0_lodash_fp_startsWith___default.a('_'));
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/lib/SUI.js
var SUI_namespaceObject = {};
__webpack_require__.d(SUI_namespaceObject, "COLORS", function() { return COLORS; });
__webpack_require__.d(SUI_namespaceObject, "FLOATS", function() { return FLOATS; });
__webpack_require__.d(SUI_namespaceObject, "SIZES", function() { return SIZES; });
__webpack_require__.d(SUI_namespaceObject, "TEXT_ALIGNMENTS", function() { return TEXT_ALIGNMENTS; });
__webpack_require__.d(SUI_namespaceObject, "VERTICAL_ALIGNMENTS", function() { return VERTICAL_ALIGNMENTS; });
__webpack_require__.d(SUI_namespaceObject, "VISIBILITY", function() { return VISIBILITY; });
__webpack_require__.d(SUI_namespaceObject, "WIDTHS", function() { return WIDTHS; });
__webpack_require__.d(SUI_namespaceObject, "WEB_CONTENT_ICONS", function() { return WEB_CONTENT_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "USER_ACTIONS_ICONS", function() { return USER_ACTIONS_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "MESSAGES_ICONS", function() { return MESSAGES_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "USERS_ICONS", function() { return USERS_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "GENDER_SEXUALITY_ICONS", function() { return GENDER_SEXUALITY_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "ACCESSIBILITY_ICONS", function() { return ACCESSIBILITY_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "VIEW_ADJUSTMENT_ICONS", function() { return VIEW_ADJUSTMENT_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "LITERAL_OBJECTS_ICONS", function() { return LITERAL_OBJECTS_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "SHAPES_ICONS", function() { return SHAPES_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "ITEM_SELECTION_ICONS", function() { return ITEM_SELECTION_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "MEDIA_ICONS", function() { return MEDIA_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "POINTERS_ICONS", function() { return POINTERS_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "MOBILE_ICONS", function() { return MOBILE_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "COMPUTER_ICONS", function() { return COMPUTER_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "FILE_SYSTEM_ICONS", function() { return FILE_SYSTEM_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "TECHNOLOGIES_ICONS", function() { return TECHNOLOGIES_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "RATING_ICONS", function() { return RATING_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "AUDIO_ICONS", function() { return AUDIO_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "MAP_LOCATIONS_TRANSPORTATION_ICONS", function() { return MAP_LOCATIONS_TRANSPORTATION_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "TABLES_ICONS", function() { return TABLES_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "TEXT_EDITOR_ICONS", function() { return TEXT_EDITOR_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "CURRENCY_ICONS", function() { return CURRENCY_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "PAYMENT_OPTIONS_ICONS", function() { return PAYMENT_OPTIONS_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "NETWORKS_AND_WEBSITE_ICONS", function() { return NETWORKS_AND_WEBSITE_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "ICONS", function() { return ICONS; });
__webpack_require__.d(SUI_namespaceObject, "ICON_ALIASES", function() { return ICON_ALIASES; });
__webpack_require__.d(SUI_namespaceObject, "ICONS_AND_ALIASES", function() { return ICONS_AND_ALIASES; });
__webpack_require__.d(SUI_namespaceObject, "COMPONENT_CONTEXT_SPECIFIC_ICONS", function() { return COMPONENT_CONTEXT_SPECIFIC_ICONS; });
__webpack_require__.d(SUI_namespaceObject, "ALL_ICONS_IN_ALL_CONTEXTS", function() { return ALL_ICONS_IN_ALL_CONTEXTS; });
/* harmony import */ var SUI___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(96);
/* harmony import */ var SUI___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(SUI___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_values__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_keys__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_keys__);






var COLORS = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
var FLOATS = ['left', 'right'];
var SIZES = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'];
var TEXT_ALIGNMENTS = ['left', 'center', 'right', 'justified'];
var VERTICAL_ALIGNMENTS = ['bottom', 'middle', 'top'];

var VISIBILITY = ['mobile', 'tablet', 'computer', 'large screen', 'widescreen'];

var WIDTHS = [].concat(SUI___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default.a(__WEBPACK_IMPORTED_MODULE_2_lodash_keys___default.a(numberToWordMap)), SUI___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default.a(__WEBPACK_IMPORTED_MODULE_2_lodash_keys___default.a(numberToWordMap).map(Number)), SUI___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default.a(__WEBPACK_IMPORTED_MODULE_1_lodash_values___default.a(numberToWordMap)));

// Generated from:
// https://github.com/Semantic-Org/Semantic-UI/blob/master/dist/components/icon.css
var WEB_CONTENT_ICONS = ['search', 'mail outline', 'signal', 'setting', 'home', 'inbox', 'browser', 'tag', 'tags', 'image', 'calendar', 'comment', 'shop', 'comments', 'external', 'privacy', 'settings', 'comments', 'external', 'trophy', 'payment', 'feed', 'alarm outline', 'tasks', 'cloud', 'lab', 'mail', 'dashboard', 'comment outline', 'comments outline', 'sitemap', 'idea', 'alarm', 'terminal', 'code', 'protect', 'calendar outline', 'ticket', 'external square', 'bug', 'mail square', 'history', 'options', 'text telephone', 'find', 'wifi', 'alarm mute', 'alarm mute outline', 'copyright', 'at', 'eyedropper', 'paint brush', 'heartbeat', 'mouse pointer', 'hourglass empty', 'hourglass start', 'hourglass half', 'hourglass end', 'hourglass full', 'hand pointer', 'trademark', 'registered', 'creative commons', 'add to calendar', 'remove from calendar', 'delete calendar', 'checked calendar', 'industry', 'shopping bag', 'shopping basket', 'hashtag', 'percent', 'address book', 'address book outline', 'address card', 'address card outline', 'id badge', 'id card', 'id card outline', 'podcast', 'window close', 'window close outline', 'window maximize', 'window minimize', 'window restore'];
var USER_ACTIONS_ICONS = ['wait', 'download', 'repeat', 'refresh', 'lock', 'bookmark', 'print', 'write', 'adjust', 'theme', 'edit', 'external share', 'ban', 'mail forward', 'share', 'expand', 'compress', 'unhide', 'hide', 'random', 'retweet', 'sign out', 'pin', 'sign in', 'upload', 'call', 'remove bookmark', 'call square', 'unlock', 'configure', 'filter', 'wizard', 'undo', 'exchange', 'cloud download', 'cloud upload', 'reply', 'reply all', 'erase', 'unlock alternate', 'write square', 'share square', 'archive', 'translate', 'recycle', 'send', 'send outline', 'share alternate', 'share alternate square', 'add to cart', 'in cart', 'add user', 'remove user', 'object group', 'object ungroup', 'clone', 'talk', 'talk outline'];
var MESSAGES_ICONS = ['help circle', 'info circle', 'warning circle', 'warning sign', 'announcement', 'help', 'info', 'warning', 'birthday', 'help circle outline'];
var USERS_ICONS = ['user', 'users', 'doctor', 'handicap', 'student', 'child', 'spy', 'user circle', 'user circle outline', 'user outline'];
var GENDER_SEXUALITY_ICONS = ['female', 'male', 'woman', 'man', 'non binary transgender', 'intergender', 'transgender', 'lesbian', 'gay', 'heterosexual', 'other gender', 'other gender vertical', 'other gender horizontal', 'neuter', 'genderless'];
var ACCESSIBILITY_ICONS = ['universal access', 'wheelchair', 'blind', 'audio description', 'volume control phone', 'braille', 'asl', 'assistive listening systems', 'deafness', 'sign language', 'low vision'];
var VIEW_ADJUSTMENT_ICONS = ['block layout', 'grid layout', 'list layout', 'zoom', 'zoom out', 'resize vertical', 'resize horizontal', 'maximize', 'crop'];
var LITERAL_OBJECTS_ICONS = ['cocktail', 'road', 'flag', 'book', 'gift', 'leaf', 'fire', 'plane', 'magnet', 'lemon', 'world', 'travel', 'shipping', 'money', 'legal', 'lightning', 'umbrella', 'treatment', 'suitcase', 'bar', 'flag outline', 'flag checkered', 'puzzle', 'fire extinguisher', 'rocket', 'anchor', 'bullseye', 'sun', 'moon', 'fax', 'life ring', 'bomb', 'soccer', 'calculator', 'diamond', 'sticky note', 'sticky note outline', 'law', 'hand peace', 'hand rock', 'hand paper', 'hand scissors', 'hand lizard', 'hand spock', 'tv', 'thermometer empty', 'thermometer full', 'thermometer half', 'thermometer quarter', 'thermometer three quarters', 'bath', 'snowflake outline'];
var SHAPES_ICONS = ['crosshairs', 'asterisk', 'square outline', 'certificate', 'square', 'quote left', 'quote right', 'spinner', 'circle', 'ellipsis horizontal', 'ellipsis vertical', 'cube', 'cubes', 'circle notched', 'circle thin'];
var ITEM_SELECTION_ICONS = ['checkmark', 'remove', 'checkmark box', 'move', 'add circle', 'minus circle', 'remove circle', 'check circle', 'remove circle outline', 'check circle outline', 'plus', 'minus', 'add square', 'radio', 'minus square', 'minus square outline', 'check square', 'selected radio', 'plus square outline', 'toggle off', 'toggle on'];
var MEDIA_ICONS = ['film', 'sound', 'photo', 'bar chart', 'camera retro', 'newspaper', 'area chart', 'pie chart', 'line chart'];
var POINTERS_ICONS = ['arrow circle outline down', 'arrow circle outline up', 'chevron left', 'chevron right', 'arrow left', 'arrow right', 'arrow up', 'arrow down', 'chevron up', 'chevron down', 'pointing right', 'pointing left', 'pointing up', 'pointing down', 'arrow circle left', 'arrow circle right', 'arrow circle up', 'arrow circle down', 'caret down', 'caret up', 'caret left', 'caret right', 'angle double left', 'angle double right', 'angle double up', 'angle double down', 'angle left', 'angle right', 'angle up', 'angle down', 'chevron circle left', 'chevron circle right', 'chevron circle up', 'chevron circle down', 'toggle down', 'toggle up', 'toggle right', 'long arrow down', 'long arrow up', 'long arrow left', 'long arrow right', 'arrow circle outline right', 'arrow circle outline left', 'toggle left'];
var MOBILE_ICONS = ['tablet', 'mobile', 'battery full', 'battery high', 'battery medium', 'battery low', 'battery empty'];
var COMPUTER_ICONS = ['power', 'trash outline', 'disk outline', 'desktop', 'laptop', 'game', 'keyboard', 'plug'];
var FILE_SYSTEM_ICONS = ['trash', 'file outline', 'folder', 'folder open', 'file text outline', 'folder outline', 'folder open outline', 'level up', 'level down', 'file', 'file text', 'file pdf outline', 'file word outline', 'file excel outline', 'file powerpoint outline', 'file image outline', 'file archive outline', 'file audio outline', 'file video outline', 'file code outline'];
var TECHNOLOGIES_ICONS = ['qrcode', 'barcode', 'rss', 'fork', 'html5', 'css3', 'rss square', 'openid', 'database', 'server', 'usb', 'bluetooth', 'bluetooth alternative', 'microchip'];
var RATING_ICONS = ['heart', 'star', 'empty star', 'thumbs outline up', 'thumbs outline down', 'star half', 'empty heart', 'smile', 'frown', 'meh', 'star half empty', 'thumbs up', 'thumbs down'];
var AUDIO_ICONS = ['music', 'video play outline', 'volume off', 'volume down', 'volume up', 'record', 'step backward', 'fast backward', 'backward', 'play', 'pause', 'stop', 'forward', 'fast forward', 'step forward', 'eject', 'unmute', 'mute', 'video play', 'closed captioning', 'pause circle', 'pause circle outline', 'stop circle', 'stop circle outline'];
var MAP_LOCATIONS_TRANSPORTATION_ICONS = ['marker', 'coffee', 'food', 'building outline', 'hospital', 'emergency', 'first aid', 'military', 'h', 'location arrow', 'compass', 'space shuttle', 'university', 'building', 'paw', 'spoon', 'car', 'taxi', 'tree', 'bicycle', 'bus', 'ship', 'motorcycle', 'street view', 'hotel', 'train', 'subway', 'map pin', 'map signs', 'map outline', 'map'];
var TABLES_ICONS = ['table', 'columns', 'sort', 'sort descending', 'sort ascending', 'sort alphabet ascending', 'sort alphabet descending', 'sort content ascending', 'sort content descending', 'sort numeric ascending', 'sort numeric descending'];
var TEXT_EDITOR_ICONS = ['font', 'bold', 'italic', 'text height', 'text width', 'align left', 'align center', 'align right', 'align justify', 'list', 'outdent', 'indent', 'linkify', 'cut', 'copy', 'attach', 'save', 'content', 'unordered list', 'ordered list', 'strikethrough', 'underline', 'paste', 'unlinkify', 'superscript', 'subscript', 'header', 'paragraph', 'text cursor'];
var CURRENCY_ICONS = ['euro', 'pound', 'dollar', 'rupee', 'yen', 'ruble', 'won', 'bitcoin', 'lira', 'shekel'];
var PAYMENT_OPTIONS_ICONS = ['paypal', 'google wallet', 'visa', 'mastercard', 'discover', 'american express', 'paypal card', 'stripe', 'japan credit bureau', 'diners club', 'credit card alternative'];
var NETWORKS_AND_WEBSITE_ICONS = ['twitter square', 'facebook square', 'linkedin square', 'github square', 'twitter', 'facebook f', 'github', 'pinterest', 'pinterest square', 'google plus square', 'google plus', 'linkedin', 'github alternate', 'maxcdn', 'youtube square', 'youtube', 'xing', 'xing square', 'youtube play', 'dropbox', 'stack overflow', 'instagram', 'flickr', 'adn', 'bitbucket', 'bitbucket square', 'tumblr', 'tumblr square', 'apple', 'windows', 'android', 'linux', 'dribble', 'skype', 'foursquare', 'trello', 'gittip', 'vk', 'weibo', 'renren', 'pagelines', 'stack exchange', 'vimeo square', 'slack', 'wordpress', 'yahoo', 'google', 'reddit', 'reddit square', 'stumbleupon circle', 'stumbleupon', 'delicious', 'digg', 'pied piper', 'pied piper alternate', 'drupal', 'joomla', 'behance', 'behance square', 'steam', 'steam square', 'spotify', 'deviantart', 'soundcloud', 'vine', 'codepen', 'jsfiddle', 'rebel', 'empire', 'git square', 'git', 'hacker news', 'tencent weibo', 'qq', 'wechat', 'slideshare', 'twitch', 'yelp', 'lastfm', 'lastfm square', 'ioxhost', 'angellist', 'meanpath', 'buysellads', 'connectdevelop', 'dashcube', 'forumbee', 'leanpub', 'sellsy', 'shirtsinbulk', 'simplybuilt', 'skyatlas', 'facebook', 'pinterest', 'whatsapp', 'viacoin', 'medium', 'y combinator', 'optinmonster', 'opencart', 'expeditedssl', 'gg', 'gg circle', 'tripadvisor', 'odnoklassniki', 'odnoklassniki square', 'pocket', 'wikipedia', 'safari', 'chrome', 'firefox', 'opera', 'internet explorer', 'contao', '500px', 'amazon', 'houzz', 'vimeo', 'black tie', 'fonticons', 'reddit alien', 'microsoft edge', 'codiepie', 'modx', 'fort awesome', 'product hunt', 'mixcloud', 'scribd', 'gitlab', 'wpbeginner', 'wpforms', 'envira gallery', 'glide', 'glide g', 'viadeo', 'viadeo square', 'snapchat', 'snapchat ghost', 'snapchat square', 'pied piper hat', 'first order', 'yoast', 'themeisle', 'google plus circle', 'font awesome', 'bandcamp', 'eercast', 'etsy', 'free code camp', 'grav', 'imdb', 'linode', 'meetup', 'quora', 'ravelry', 'superpowers', 'telegram', 'wpexplorer'];
var ICONS = [].concat(WEB_CONTENT_ICONS, USER_ACTIONS_ICONS, MESSAGES_ICONS, USERS_ICONS, GENDER_SEXUALITY_ICONS, ACCESSIBILITY_ICONS, VIEW_ADJUSTMENT_ICONS, LITERAL_OBJECTS_ICONS, SHAPES_ICONS, ITEM_SELECTION_ICONS, MEDIA_ICONS, POINTERS_ICONS, MOBILE_ICONS, COMPUTER_ICONS, FILE_SYSTEM_ICONS, TECHNOLOGIES_ICONS, RATING_ICONS, AUDIO_ICONS, MAP_LOCATIONS_TRANSPORTATION_ICONS, TABLES_ICONS, TEXT_EDITOR_ICONS, CURRENCY_ICONS, PAYMENT_OPTIONS_ICONS, NETWORKS_AND_WEBSITE_ICONS);
var ICON_ALIASES = ['like', 'favorite', 'video', 'check', 'close', 'cancel', 'delete', 'x', 'zoom in', 'magnify', 'shutdown', 'clock', 'time', 'play circle outline', 'headphone', 'camera', 'video camera', 'picture', 'pencil', 'compose', 'point', 'tint', 'signup', 'plus circle', 'question circle', 'dont', 'minimize', 'add', 'exclamation circle', 'attention', 'eye', 'exclamation triangle', 'shuffle', 'chat', 'cart', 'shopping cart', 'bar graph', 'key', 'cogs', 'discussions', 'like outline', 'dislike outline', 'heart outline', 'log out', 'thumb tack', 'winner', 'phone', 'bookmark outline', 'phone square', 'credit card', 'hdd outline', 'bullhorn', 'bell outline', 'hand outline right', 'hand outline left', 'hand outline up', 'hand outline down', 'globe', 'wrench', 'briefcase', 'group', 'linkify', 'chain', 'flask', 'sidebar', 'bars', 'list ul', 'list ol', 'numbered list', 'magic', 'truck', 'currency', 'triangle down', 'dropdown', 'triangle up', 'triangle left', 'triangle right', 'envelope', 'conversation', 'rain', 'clipboard', 'lightbulb', 'bell', 'ambulance', 'medkit', 'fighter jet', 'beer', 'plus square', 'computer', 'circle outline', 'gamepad', 'star half full', 'broken chain', 'question', 'exclamation', 'eraser', 'microphone', 'microphone slash', 'shield', 'target', 'play circle', 'pencil square', 'eur', 'gbp', 'usd', 'inr', 'cny', 'rmb', 'jpy', 'rouble', 'rub', 'krw', 'btc', 'gratipay', 'zip', 'dot circle outline', 'try', 'graduation', 'circle outline', 'sliders', 'weixin', 'tty', 'teletype', 'binoculars', 'power cord', 'wifi', 'visa card', 'mastercard card', 'discover card', 'amex', 'american express card', 'stripe card', 'bell slash', 'bell slash outline', 'area graph', 'pie graph', 'line graph', 'cc', 'sheqel', 'ils', 'plus cart', 'arrow down cart', 'detective', 'venus', 'mars', 'mercury', 'intersex', 'venus double', 'female homosexual', 'mars double', 'male homosexual', 'venus mars', 'mars stroke', 'mars alternate', 'mars vertical', 'mars stroke vertical', 'mars horizontal', 'mars stroke horizontal', 'asexual', 'facebook official', 'user plus', 'user times', 'user close', 'user cancel', 'user delete', 'user x', 'bed', 'yc', 'ycombinator', 'battery four', 'battery three', 'battery three quarters', 'battery two', 'battery half', 'battery one', 'battery quarter', 'battery zero', 'i cursor', 'jcb', 'japan credit bureau card', 'diners club card', 'balance', 'hourglass outline', 'hourglass zero', 'hourglass one', 'hourglass two', 'hourglass three', 'hourglass four', 'grab', 'hand victory', 'tm', 'r circle', 'television', 'five hundred pixels', 'calendar plus', 'calendar minus', 'calendar times', 'calendar check', 'factory', 'commenting', 'commenting outline', 'edge', 'ms edge', 'wordpress beginner', 'wordpress forms', 'envira', 'question circle outline', 'assistive listening devices', 'als', 'ald', 'asl interpreting', 'deaf', 'american sign language interpreting', 'hard of hearing', 'signing', 'new pied piper', 'theme isle', 'google plus official', 'fa', 'bathtub', 'drivers license', 'drivers license outline', 's15', 'thermometer', 'times rectangle', 'times rectangle outline', 'vcard', 'vcard outline'];
var ICONS_AND_ALIASES = [].concat(SUI___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default.a(ICONS), ICON_ALIASES);

// Some icon names are not part of icons.css.
// These are only valid as children of other components.
// Their CSS rules are defined by a specific component's CSS.
// We don't want to show name warnings for those usages so we add them as valid names here.
var COMPONENT_CONTEXT_SPECIFIC_ICONS = ['left dropdown'];
var ALL_ICONS_IN_ALL_CONTEXTS = [].concat(SUI___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default.a(ICONS_AND_ALIASES), COMPONENT_CONTEXT_SPECIFIC_ICONS);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/lib/keyboardKey.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_times__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_times___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_times__);

 /**
                                    * All previous KeyboardEvent key identifying properties are deprecated in favor of `key`.
                                    * Unfortunately, `key` is not yet fully supported.
                                    * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
                                    */

var codes = {
  // ----------------------------------------
  // By Code
  // ----------------------------------------
  3: 'Cancel',
  6: 'Help',
  8: 'Backspace',
  9: 'Tab',
  12: 'Clear',
  13: 'Enter',
  16: 'Shift',
  17: 'Control',
  18: 'Alt',
  19: 'Pause',
  20: 'CapsLock',
  27: 'Escape',
  28: 'Convert',
  29: 'NonConvert',
  30: 'Accept',
  31: 'ModeChange',
  32: ' ',
  33: 'PageUp',
  34: 'PageDown',
  35: 'End',
  36: 'Home',
  37: 'ArrowLeft',
  38: 'ArrowUp',
  39: 'ArrowRight',
  40: 'ArrowDown',
  41: 'Select',
  42: 'Print',
  43: 'Execute',
  44: 'PrintScreen',
  45: 'Insert',
  46: 'Delete',
  48: ['0', ')'],
  49: ['1', '!'],
  50: ['2', '@'],
  51: ['3', '#'],
  52: ['4', '$'],
  53: ['5', '%'],
  54: ['6', '^'],
  55: ['7', '&'],
  56: ['8', '*'],
  57: ['9', '('],
  91: 'OS',
  93: 'ContextMenu',
  144: 'NumLock',
  145: 'ScrollLock',
  181: 'VolumeMute',
  182: 'VolumeDown',
  183: 'VolumeUp',
  186: [';', ':'],
  187: ['=', '+'],
  188: [',', '<'],
  189: ['-', '_'],
  190: ['.', '>'],
  191: ['/', '?'],
  192: ['`', '~'],
  219: ['[', '{'],
  220: ['\\', '|'],
  221: [']', '}'],
  222: ["'", '"'],
  224: 'Meta',
  225: 'AltGraph',
  246: 'Attn',
  247: 'CrSel',
  248: 'ExSel',
  249: 'EraseEof',
  250: 'Play',
  251: 'ZoomOut'

  // Function Keys (F1-24)
};__WEBPACK_IMPORTED_MODULE_1_lodash_times___default.a(24, function (i) {
  return codes[112 + i] = 'F' + (i + 1);
});

// Alphabet (a-Z)
__WEBPACK_IMPORTED_MODULE_1_lodash_times___default.a(26, function (i) {
  var n = i + 65;
  codes[n] = [String.fromCharCode(n + 32), String.fromCharCode(n)];
});

var keyboardKey = {
  codes: codes,

  /**
   * Get the `keyCode` or `which` value from a keyboard event or `key` name.
   * @param {string|object} name A keyboard event like object or `key` name.
   * @param {string} [name.key] If object, it must have one of these keys.
   * @param {string} [name.keyCode] If object, it must have one of these keys.
   * @param {string} [name.which] If object, it must have one of these keys.
   * @returns {*}
   */
  getCode: function getCode(name) {
    if (__WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default.a(name)) {
      return name.keyCode || name.which || this[name.key];
    }
    return this[name];
  },


  /**
   * Get the key name from a keyboard event, `keyCode`, or `which` value.
   * @param {number|object} code A keyboard event like object or key name.
   * @param {number} [code.keyCode] If object, it must have one of these keys.
   * @param {number} [code.which] If object, it must have one of these keys.
   * @param {number} [code.shiftKey] If object, it must have one of these keys.
   * @returns {*}
   */
  getName: function getName(code) {
    var isEvent = __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default.a(code);
    var name = codes[isEvent ? code.keyCode || code.which : code];

    if (Array.isArray(name)) {
      if (isEvent) {
        name = name[code.shiftKey ? 1 : 0];
      } else {
        name = name[0];
      }
    }

    return name;
  },


  // ----------------------------------------
  // By Name
  // ----------------------------------------
  // declare these manually for static analysis
  Cancel: 3,
  Help: 6,
  Backspace: 8,
  Tab: 9,
  Clear: 12,
  Enter: 13,
  Shift: 16,
  Control: 17,
  Alt: 18,
  Pause: 19,
  CapsLock: 20,
  Escape: 27,
  Convert: 28,
  NonConvert: 29,
  Accept: 30,
  ModeChange: 31,
  ' ': 32,
  PageUp: 33,
  PageDown: 34,
  End: 35,
  Home: 36,
  ArrowLeft: 37,
  ArrowUp: 38,
  ArrowRight: 39,
  ArrowDown: 40,
  Select: 41,
  Print: 42,
  Execute: 43,
  PrintScreen: 44,
  Insert: 45,
  Delete: 46,
  0: 48, ')': 48,
  1: 49, '!': 49,
  2: 50, '@': 50,
  3: 51, '#': 51,
  4: 52, $: 52,
  5: 53, '%': 53,
  6: 54, '^': 54,
  7: 55, '&': 55,
  8: 56, '*': 56,
  9: 57, '(': 57,
  a: 65, A: 65,
  b: 66, B: 66,
  c: 67, C: 67,
  d: 68, D: 68,
  e: 69, E: 69,
  f: 70, F: 70,
  g: 71, G: 71,
  h: 72, H: 72,
  i: 73, I: 73,
  j: 74, J: 74,
  k: 75, K: 75,
  l: 76, L: 76,
  m: 77, M: 77,
  n: 78, N: 78,
  o: 79, O: 79,
  p: 80, P: 80,
  q: 81, Q: 81,
  r: 82, R: 82,
  s: 83, S: 83,
  t: 84, T: 84,
  u: 85, U: 85,
  v: 86, V: 86,
  w: 87, W: 87,
  x: 88, X: 88,
  y: 89, Y: 89,
  z: 90, Z: 90,
  OS: 91,
  ContextMenu: 93,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  F13: 124,
  F14: 125,
  F15: 126,
  F16: 127,
  F17: 128,
  F18: 129,
  F19: 130,
  F20: 131,
  F21: 132,
  F22: 133,
  F23: 134,
  F24: 135,
  NumLock: 144,
  ScrollLock: 145,
  VolumeMute: 181,
  VolumeDown: 182,
  VolumeUp: 183,
  ';': 186, ':': 186,
  '=': 187, '+': 187,
  ',': 188, '<': 188,
  '-': 189, _: 189,
  '.': 190, '>': 190,
  '/': 191, '?': 191,
  '`': 192, '~': 192,
  '[': 219, '{': 219,
  '\\': 220, '\|': 220,
  ']': 221, '}': 221,
  "'": 222, '"': 222,
  Meta: 224,
  AltGraph: 225,
  Attn: 246,
  CrSel: 247,
  ExSel: 248,
  EraseEof: 249,
  Play: 250,
  ZoomOut: 251

  // ----------------------------------------
  // By Alias
  // ----------------------------------------
  // provide dot-notation accessible keys for all key names
};keyboardKey.Spacebar = keyboardKey[' '];
keyboardKey.Digit0 = keyboardKey['0'];
keyboardKey.Digit1 = keyboardKey['1'];
keyboardKey.Digit2 = keyboardKey['2'];
keyboardKey.Digit3 = keyboardKey['3'];
keyboardKey.Digit4 = keyboardKey['4'];
keyboardKey.Digit5 = keyboardKey['5'];
keyboardKey.Digit6 = keyboardKey['6'];
keyboardKey.Digit7 = keyboardKey['7'];
keyboardKey.Digit8 = keyboardKey['8'];
keyboardKey.Digit9 = keyboardKey['9'];
keyboardKey.Tilde = keyboardKey['~'];
keyboardKey.GraveAccent = keyboardKey['`'];
keyboardKey.ExclamationPoint = keyboardKey['!'];
keyboardKey.AtSign = keyboardKey['@'];
keyboardKey.PoundSign = keyboardKey['#'];
keyboardKey.PercentSign = keyboardKey['%'];
keyboardKey.Caret = keyboardKey['^'];
keyboardKey.Ampersand = keyboardKey['&'];
keyboardKey.PlusSign = keyboardKey['+'];
keyboardKey.MinusSign = keyboardKey['-'];
keyboardKey.EqualsSign = keyboardKey['='];
keyboardKey.DivisionSign = keyboardKey['/'];
keyboardKey.MultiplicationSign = keyboardKey['*'];
keyboardKey.Comma = keyboardKey[','];
keyboardKey.Decimal = keyboardKey['.'];
keyboardKey.Colon = keyboardKey[':'];
keyboardKey.Semicolon = keyboardKey[';'];
keyboardKey.Pipe = keyboardKey['|'];
keyboardKey.BackSlash = keyboardKey['\\'];
keyboardKey.QuestionMark = keyboardKey['?'];
keyboardKey.SingleQuote = keyboardKey['"'];
keyboardKey.DoubleQuote = keyboardKey['"'];
keyboardKey.LeftCurlyBrace = keyboardKey['{'];
keyboardKey.RightCurlyBrace = keyboardKey['}'];
keyboardKey.LeftParenthesis = keyboardKey['('];
keyboardKey.RightParenthesis = keyboardKey[')'];
keyboardKey.LeftAngleBracket = keyboardKey['<'];
keyboardKey.RightAngleBracket = keyboardKey['>'];
keyboardKey.LeftSquareBracket = keyboardKey['['];
keyboardKey.RightSquareBracket = keyboardKey[']'];

/* harmony default export */ var keyboardKey_defaultExport = (keyboardKey);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/lib/objectDiff.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isEqual__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_has__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_transform__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_transform___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_transform__);





/**
 * Naive and inefficient object difference, intended for development / debugging use only.
 * Deleted keys are shown as [DELETED].
 * @param {{}} source The source object
 * @param {{}} target The target object.
 * @returns {{}} A new object containing new/modified/deleted keys.
 * @example
 * import { objectDiff } from 'src/lib'
 *
 * const a = { key: 'val', foo: 'bar' }
 * const b = { key: 'val', foo: 'baz' }
 *
 * objectDiff(a, b)
 * //=> { foo: 'baz' }
 */
var objectDiff = function objectDiff(source, target) {
  return __WEBPACK_IMPORTED_MODULE_2_lodash_transform___default.a(source, function (res, val, key) {
    // deleted keys
    if (!__WEBPACK_IMPORTED_MODULE_1_lodash_has___default.a(target, key)) res[key] = '[DELETED]';
    // new keys / changed values
    else if (!__WEBPACK_IMPORTED_MODULE_0_lodash_isEqual___default.a(val, target[key])) res[key] = target[key];
  }, {});
};
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/lib/index.js






























// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Icon/IconGroup.js
/* harmony import */ var IconGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var IconGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(IconGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);









/**
 * Several icons can be used together as a group.
 */
function IconGroup(props) {
  var children = props.children,
      className = props.className,
      size = props.size;

  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default.a(size, 'icons', className);
  var rest = getUnhandledProps_defaultExport(IconGroup, props);
  var ElementType = getElementType_defaultExport(IconGroup, props);

  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    ElementType,
    IconGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

IconGroup.handledProps = ['as', 'children', 'className', 'size'];
IconGroup._meta = {
  name: 'IconGroup',
  parent: 'Icon',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? IconGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Size of the icon group. */
  size: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_1_lodash_without___default.a(SUI_namespaceObject.SIZES, 'medium'))
} : void 0;

IconGroup.defaultProps = {
  as: 'i'
};

/* harmony default export */ var IconGroup_defaultExport = (IconGroup);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js
/* harmony import */ var Icon___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Icon___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Icon___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Icon___WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(544);
/* harmony import */ var Icon___WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(Icon___WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var Icon___WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(543);
/* harmony import */ var Icon___WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(Icon___WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var Icon___WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(542);
/* harmony import */ var Icon___WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(Icon___WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var Icon___WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(11);
/* harmony import */ var Icon___WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(Icon___WEBPACK_IMPORTED_MODULE_4_react__);










/**
 * An icon is a glyph used to represent something else.
 * @see Image
 */
function Icon(props) {
  var bordered = props.bordered,
      circular = props.circular,
      className = props.className,
      color = props.color,
      corner = props.corner,
      disabled = props.disabled,
      fitted = props.fitted,
      flipped = props.flipped,
      inverted = props.inverted,
      link = props.link,
      loading = props.loading,
      name = props.name,
      rotated = props.rotated,
      size = props.size;


  var classes = Icon___WEBPACK_IMPORTED_MODULE_2_classnames___default.a(color, name, size, useKeyOnly(bordered, 'bordered'), useKeyOnly(circular, 'circular'), useKeyOnly(corner, 'corner'), useKeyOnly(disabled, 'disabled'), useKeyOnly(fitted, 'fitted'), useKeyOnly(inverted, 'inverted'), useKeyOnly(link, 'link'), useKeyOnly(loading, 'loading'), useValueAndKey(flipped, 'flipped'), useValueAndKey(rotated, 'rotated'), 'icon', className);
  var rest = getUnhandledProps_defaultExport(Icon, props);
  var ElementType = getElementType_defaultExport(Icon, props);

  return Icon___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, Icon___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { 'aria-hidden': 'true', className: classes }));
}

Icon.handledProps = ['as', 'bordered', 'circular', 'className', 'color', 'corner', 'disabled', 'fitted', 'flipped', 'inverted', 'link', 'loading', 'name', 'rotated', 'size'];
Icon.Group = IconGroup_defaultExport;

Icon._meta = {
  name: 'Icon',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? Icon.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Formatted to appear bordered. */
  bordered: Icon___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Icon can formatted to appear circular. */
  circular: Icon___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Additional classes. */
  className: Icon___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Color of the icon. */
  color: Icon___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.COLORS),

  /** Icons can display a smaller corner icon. */
  corner: Icon___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Show that the icon is inactive. */
  disabled: Icon___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Fitted, without space to left or right of Icon. */
  fitted: Icon___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Icon can flipped. */
  flipped: Icon___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['horizontally', 'vertically']),

  /** Formatted to have its colors inverted for contrast. */
  inverted: Icon___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Icon can be formatted as a link. */
  link: Icon___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Icon can be used as a simple loader. */
  loading: Icon___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Name of the icon. */
  name: customPropTypes_namespaceObject.suggest(SUI_namespaceObject.ALL_ICONS_IN_ALL_CONTEXTS),

  /** Icon can rotated. */
  rotated: Icon___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['clockwise', 'counterclockwise']),

  /** Size of the icon. */
  size: Icon___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(Icon___WEBPACK_IMPORTED_MODULE_1_lodash_without___default.a(SUI_namespaceObject.SIZES, 'medium'))
} : void 0;

Icon.defaultProps = {
  as: 'i'
};

Icon.create = createShorthandFactory(Icon, function (value) {
  return { name: value };
});

/* harmony default export */ var Icon_defaultExport = (Icon);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/addons/Portal/Portal.js
/* harmony import */ var Portal___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Portal___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Portal___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Portal___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Portal___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Portal___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Portal___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Portal___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(Portal___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var Portal___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Portal___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Portal___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Portal___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Portal___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(Portal___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom__);













var Portal_debug = makeDebugger('portal');

/**
 * A component that allows you to render children outside their parent.
 * @see Modal
 * @see Popup
 * @see Dimmer
 * @see Confirm
 */

var Portal_Portal = function (_Component) {
  Portal___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(Portal, _Component);

  function Portal() {
    var _ref;

    var _temp, _this, _ret;

    Portal___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, Portal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Portal___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Portal.__proto__ || Object.getPrototypeOf(Portal)).call.apply(_ref, [this].concat(args))), _this), _this.handleDocumentClick = function (e) {
      var _this$props = _this.props,
          closeOnDocumentClick = _this$props.closeOnDocumentClick,
          closeOnRootNodeClick = _this$props.closeOnRootNodeClick;


      if (!_this.rootNode // not mounted
      || !_this.portalNode // no portal
      || __WEBPACK_IMPORTED_MODULE_5_lodash_invoke___default.a(_this, 'triggerNode.contains', e.target) // event happened in trigger (delegate to trigger handlers)
      || __WEBPACK_IMPORTED_MODULE_5_lodash_invoke___default.a(_this, 'portalNode.contains', e.target) // event happened in the portal
      ) return; // ignore the click

      var didClickInRootNode = _this.rootNode.contains(e.target);

      if (closeOnDocumentClick && !didClickInRootNode || closeOnRootNodeClick && didClickInRootNode) {
        Portal_debug('handleDocumentClick()');

        _this.close(e);
      }
    }, _this.handleEscape = function (e) {
      if (!_this.props.closeOnEscape) return;
      if (keyboardKey_defaultExport.getCode(e) !== keyboardKey_defaultExport.Escape) return;

      Portal_debug('handleEscape()');

      _this.close(e);
    }, _this.handlePortalMouseLeave = function (e) {
      var _this$props2 = _this.props,
          closeOnPortalMouseLeave = _this$props2.closeOnPortalMouseLeave,
          mouseLeaveDelay = _this$props2.mouseLeaveDelay;


      if (!closeOnPortalMouseLeave) return;

      Portal_debug('handlePortalMouseLeave()');
      _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
    }, _this.handlePortalMouseEnter = function (e) {
      // In order to enable mousing from the trigger to the portal, we need to
      // clear the mouseleave timer that was set when leaving the trigger.
      var closeOnPortalMouseLeave = _this.props.closeOnPortalMouseLeave;


      if (!closeOnPortalMouseLeave) return;

      Portal_debug('handlePortalMouseEnter()');
      clearTimeout(_this.mouseLeaveTimer);
    }, _this.handleTriggerBlur = function (e) {
      var _this$props3 = _this.props,
          trigger = _this$props3.trigger,
          closeOnTriggerBlur = _this$props3.closeOnTriggerBlur;

      // Call original event handler

      __WEBPACK_IMPORTED_MODULE_5_lodash_invoke___default.a(trigger, 'props.onBlur', e);

      // do not close if focus is given to the portal
      var didFocusPortal = __WEBPACK_IMPORTED_MODULE_5_lodash_invoke___default.a(_this, 'rootNode.contains', e.relatedTarget);

      if (!closeOnTriggerBlur || didFocusPortal) return;

      Portal_debug('handleTriggerBlur()');
      _this.close(e);
    }, _this.handleTriggerClick = function (e) {
      var _this$props4 = _this.props,
          trigger = _this$props4.trigger,
          closeOnTriggerClick = _this$props4.closeOnTriggerClick,
          openOnTriggerClick = _this$props4.openOnTriggerClick;
      var open = _this.state.open;

      // Call original event handler

      __WEBPACK_IMPORTED_MODULE_5_lodash_invoke___default.a(trigger, 'props.onClick', e);

      if (open && closeOnTriggerClick) {
        Portal_debug('handleTriggerClick() - close');

        _this.close(e);
      } else if (!open && openOnTriggerClick) {
        Portal_debug('handleTriggerClick() - open');

        _this.open(e);
      }
    }, _this.handleTriggerFocus = function (e) {
      var _this$props5 = _this.props,
          trigger = _this$props5.trigger,
          openOnTriggerFocus = _this$props5.openOnTriggerFocus;

      // Call original event handler

      __WEBPACK_IMPORTED_MODULE_5_lodash_invoke___default.a(trigger, 'props.onFocus', e);

      if (!openOnTriggerFocus) return;

      Portal_debug('handleTriggerFocus()');
      _this.open(e);
    }, _this.handleTriggerMouseLeave = function (e) {
      clearTimeout(_this.mouseEnterTimer);

      var _this$props6 = _this.props,
          trigger = _this$props6.trigger,
          closeOnTriggerMouseLeave = _this$props6.closeOnTriggerMouseLeave,
          mouseLeaveDelay = _this$props6.mouseLeaveDelay;

      // Call original event handler

      __WEBPACK_IMPORTED_MODULE_5_lodash_invoke___default.a(trigger, 'props.onMouseLeave', e);

      if (!closeOnTriggerMouseLeave) return;

      Portal_debug('handleTriggerMouseLeave()');
      _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
    }, _this.handleTriggerMouseEnter = function (e) {
      clearTimeout(_this.mouseLeaveTimer);

      var _this$props7 = _this.props,
          trigger = _this$props7.trigger,
          mouseEnterDelay = _this$props7.mouseEnterDelay,
          openOnTriggerMouseEnter = _this$props7.openOnTriggerMouseEnter;

      // Call original event handler

      __WEBPACK_IMPORTED_MODULE_5_lodash_invoke___default.a(trigger, 'props.onMouseEnter', _this.handleTriggerMouseEnter);

      if (!openOnTriggerMouseEnter) return;

      Portal_debug('handleTriggerMouseEnter()');
      _this.mouseEnterTimer = _this.openWithTimeout(e, mouseEnterDelay);
    }, _this.open = function (e) {
      Portal_debug('open()');

      var onOpen = _this.props.onOpen;

      if (onOpen) onOpen(e, _this.props);

      _this.trySetState({ open: true });
    }, _this.openWithTimeout = function (e, delay) {
      Portal_debug('openWithTimeout()', delay);
      // React wipes the entire event object and suggests using e.persist() if
      // you need the event for async access. However, even with e.persist
      // certain required props (e.g. currentTarget) are null so we're forced to clone.
      var eventClone = Portal___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, e);
      return setTimeout(function () {
        return _this.open(eventClone);
      }, delay || 0);
    }, _this.close = function (e) {
      Portal_debug('close()');

      var onClose = _this.props.onClose;

      if (onClose) onClose(e, _this.props);

      _this.trySetState({ open: false });
    }, _this.closeWithTimeout = function (e, delay) {
      Portal_debug('closeWithTimeout()', delay);
      // React wipes the entire event object and suggests using e.persist() if
      // you need the event for async access. However, even with e.persist
      // certain required props (e.g. currentTarget) are null so we're forced to clone.
      var eventClone = Portal___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, e);
      return setTimeout(function () {
        return _this.close(eventClone);
      }, delay || 0);
    }, _this.mountPortal = function () {
      if (!isBrowser_defaultExport || _this.rootNode) return;

      Portal_debug('mountPortal()');

      var _this$props8 = _this.props,
          _this$props8$mountNod = _this$props8.mountNode,
          mountNode = _this$props8$mountNod === undefined ? isBrowser_defaultExport ? document.body : null : _this$props8$mountNod,
          prepend = _this$props8.prepend;


      _this.rootNode = document.createElement('div');

      if (prepend) {
        mountNode.insertBefore(_this.rootNode, mountNode.firstElementChild);
      } else {
        mountNode.appendChild(_this.rootNode);
      }

      document.addEventListener('click', _this.handleDocumentClick);
      document.addEventListener('keydown', _this.handleEscape);

      var onMount = _this.props.onMount;

      if (onMount) onMount(null, _this.props);
    }, _this.unmountPortal = function () {
      if (!isBrowser_defaultExport || !_this.rootNode) return;

      Portal_debug('unmountPortal()');

      __WEBPACK_IMPORTED_MODULE_8_react_dom___default.a.unmountComponentAtNode(_this.rootNode);
      _this.rootNode.parentNode.removeChild(_this.rootNode);

      _this.portalNode.removeEventListener('mouseleave', _this.handlePortalMouseLeave);
      _this.portalNode.removeEventListener('mouseenter', _this.handlePortalMouseEnter);

      _this.rootNode = null;
      _this.portalNode = null;

      document.removeEventListener('click', _this.handleDocumentClick);
      document.removeEventListener('keydown', _this.handleEscape);

      var onUnmount = _this.props.onUnmount;

      if (onUnmount) onUnmount(null, _this.props);
    }, _this.handleRef = function (c) {
      _this.triggerNode = __WEBPACK_IMPORTED_MODULE_8_react_dom___default.a.findDOMNode(c);
    }, _temp), Portal___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Portal___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      Portal_debug('componentDidMount()');
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      Portal_debug('componentDidUpdate()');
      // NOTE: Ideally the portal rendering would happen in the render() function
      // but React gives a warning about not being pure and suggests doing it
      // within this method.

      // If the portal is open, render (or re-render) the portal and child.
      this.renderPortal();

      if (prevState.open && !this.state.open) {
        Portal_debug('portal closed');
        this.unmountPortal();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unmountPortal();

      // Clean up timers
      clearTimeout(this.mouseEnterTimer);
      clearTimeout(this.mouseLeaveTimer);
    }

    // ----------------------------------------
    // Document Event Handlers
    // ----------------------------------------

    // ----------------------------------------
    // Component Event Handlers
    // ----------------------------------------

    // ----------------------------------------
    // Behavior
    // ----------------------------------------

  }, {
    key: 'renderPortal',
    value: function renderPortal() {
      var _this2 = this;

      if (!this.state.open) return;
      Portal_debug('renderPortal()');

      var _props = this.props,
          children = _props.children,
          className = _props.className;


      this.mountPortal();

      // Server side rendering
      if (!isBrowser_defaultExport) return null;

      this.rootNode.className = className || '';

      // when re-rendering, first remove listeners before re-adding them to the new node
      if (this.portalNode) {
        this.portalNode.removeEventListener('mouseleave', this.handlePortalMouseLeave);
        this.portalNode.removeEventListener('mouseenter', this.handlePortalMouseEnter);
      }

      __WEBPACK_IMPORTED_MODULE_8_react_dom___default.a.unstable_renderSubtreeIntoContainer(this, __WEBPACK_IMPORTED_MODULE_7_react__["Children"].only(children), this.rootNode, function () {
        _this2.portalNode = _this2.rootNode.firstElementChild;

        _this2.portalNode.addEventListener('mouseleave', _this2.handlePortalMouseLeave);
        _this2.portalNode.addEventListener('mouseenter', _this2.handlePortalMouseEnter);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var trigger = this.props.trigger;


      if (!trigger) return null;

      return __WEBPACK_IMPORTED_MODULE_7_react__["cloneElement"](trigger, {
        ref: this.handleRef,
        onBlur: this.handleTriggerBlur,
        onClick: this.handleTriggerClick,
        onFocus: this.handleTriggerFocus,
        onMouseLeave: this.handleTriggerMouseLeave,
        onMouseEnter: this.handleTriggerMouseEnter
      });
    }
  }]);

  return Portal;
}(AutoControlledComponent_defaultExport);

Portal_Portal.defaultProps = {
  closeOnDocumentClick: true,
  closeOnEscape: true,
  openOnTriggerClick: true
};
Portal_Portal.autoControlledProps = ['open'];
Portal_Portal._meta = {
  name: 'Portal',
  type: META_namespaceObject.TYPES.ADDON
};
Portal_Portal.handledProps = ['children', 'className', 'closeOnDocumentClick', 'closeOnEscape', 'closeOnPortalMouseLeave', 'closeOnRootNodeClick', 'closeOnTriggerBlur', 'closeOnTriggerClick', 'closeOnTriggerMouseLeave', 'defaultOpen', 'mountNode', 'mouseEnterDelay', 'mouseLeaveDelay', 'onClose', 'onMount', 'onOpen', 'onUnmount', 'open', 'openOnTriggerClick', 'openOnTriggerFocus', 'openOnTriggerMouseEnter', 'prepend', 'trigger'];
 true ? Portal_Portal.propTypes = {
  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node.isRequired,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /** Controls whether or not the portal should close when the document is clicked. */
  closeOnDocumentClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Controls whether or not the portal should close when escape is pressed is displayed. */
  closeOnEscape: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * Controls whether or not the portal should close when mousing out of the portal.
   * NOTE: This will prevent `closeOnTriggerMouseLeave` when mousing over the
   * gap from the trigger to the portal.
   */
  closeOnPortalMouseLeave: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * Controls whether or not the portal should close on a click on the portal background.
   * NOTE: This differs from closeOnDocumentClick:
   * - DocumentClick - any click not within the portal
   * - RootNodeClick - a click not within the portal but within the portal's wrapper
   */
  closeOnRootNodeClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Controls whether or not the portal should close on blur of the trigger. */
  closeOnTriggerBlur: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Controls whether or not the portal should close on click of the trigger. */
  closeOnTriggerClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Controls whether or not the portal should close when mousing out of the trigger. */
  closeOnTriggerMouseLeave: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Initial value of open. */
  defaultOpen: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** The node where the portal should mount. */
  mountNode: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,

  /** Milliseconds to wait before opening on mouse over */
  mouseEnterDelay: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,

  /** Milliseconds to wait before closing on mouse leave */
  mouseLeaveDelay: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,

  /**
   * Called when a close event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Called when the portal is mounted on the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Called when an open event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Called when the portal is unmounted from the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /** Controls whether or not the portal is displayed. */
  open: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Controls whether or not the portal should open when the trigger is clicked. */
  openOnTriggerClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Controls whether or not the portal should open on focus of the trigger. */
  openOnTriggerFocus: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Controls whether or not the portal should open when mousing over the trigger. */
  openOnTriggerMouseEnter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Controls whether the portal should be prepended to the mountNode instead of appended. */
  prepend: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Element to be rendered in-place where the portal is defined. */
  trigger: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node
} : void 0;


/* harmony default export */ var Portal_defaultExport = (Portal_Portal);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/addons/Portal/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Dimmer/DimmerDimmable.js
/* harmony import */ var DimmerDimmable___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var DimmerDimmable___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(DimmerDimmable___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A dimmable sub-component for Dimmer.
 */
function DimmerDimmable(props) {
  var blurring = props.blurring,
      className = props.className,
      children = props.children,
      dimmed = props.dimmed;


  var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default.a(useKeyOnly(blurring, 'blurring'), useKeyOnly(dimmed, 'dimmed'), 'dimmable', className);
  var rest = getUnhandledProps_defaultExport(DimmerDimmable, props);
  var ElementType = getElementType_defaultExport(DimmerDimmable, props);

  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    DimmerDimmable___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

DimmerDimmable.handledProps = ['as', 'blurring', 'children', 'className', 'dimmed'];
DimmerDimmable._meta = {
  name: 'DimmerDimmable',
  type: META_namespaceObject.TYPES.MODULE,
  parent: 'Dimmer'
};

 true ? DimmerDimmable.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A dimmable element can blur its contents. */
  blurring: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Controls whether or not the dim is displayed. */
  dimmed: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : void 0;

/* harmony default export */ var DimmerDimmable_defaultExport = (DimmerDimmable);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Dimmer/Dimmer.js
/* harmony import */ var Dimmer___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Dimmer___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Dimmer___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Dimmer___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Dimmer___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Dimmer___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Dimmer___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Dimmer___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(Dimmer___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var Dimmer___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Dimmer___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Dimmer___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Dimmer___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Dimmer___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(Dimmer___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var Dimmer___WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(542);
/* harmony import */ var Dimmer___WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(Dimmer___WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var Dimmer___WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(11);
/* harmony import */ var Dimmer___WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(Dimmer___WEBPACK_IMPORTED_MODULE_7_react__);













/**
 * A dimmer hides distractions to focus attention on particular content.
 */

var Dimmer_Dimmer = function (_Component) {
  Dimmer___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(Dimmer, _Component);

  function Dimmer() {
    var _ref;

    var _temp, _this, _ret;

    Dimmer___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, Dimmer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Dimmer___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Dimmer.__proto__ || Object.getPrototypeOf(Dimmer)).call.apply(_ref, [this].concat(args))), _this), _this.handlePortalMount = function () {
      if (isBrowser_defaultExport) document.body.classList.add('dimmed', 'dimmable');
    }, _this.handlePortalUnmount = function () {
      if (isBrowser_defaultExport) document.body.classList.remove('dimmed', 'dimmable');
    }, _this.handleClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onClickOutside = _this$props.onClickOutside;


      if (onClick) onClick(e, _this.props);
      if (_this.centerRef && _this.centerRef !== e.target && _this.centerRef.contains(e.target)) return;
      if (onClickOutside) onClickOutside(e, _this.props);
    }, _this.handleCenterRef = function (c) {
      return _this.centerRef = c;
    }, _temp), Dimmer___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Dimmer___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(Dimmer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          content = _props.content,
          disabled = _props.disabled,
          inverted = _props.inverted,
          page = _props.page,
          simple = _props.simple;


      var classes = __WEBPACK_IMPORTED_MODULE_5_classnames___default.a('ui', useKeyOnly(active, 'active transition visible'), useKeyOnly(disabled, 'disabled'), useKeyOnly(inverted, 'inverted'), useKeyOnly(page, 'page'), useKeyOnly(simple, 'simple'), 'dimmer', className);
      var rest = getUnhandledProps_defaultExport(Dimmer, this.props);
      var ElementType = getElementType_defaultExport(Dimmer, this.props);

      var childrenContent = childrenUtils_namespaceObject.isNil(children) ? content : children;

      var dimmerElement = Dimmer___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        ElementType,
        Dimmer___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, onClick: this.handleClick }),
        childrenContent && Dimmer___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          { className: 'content' },
          Dimmer___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'div',
            { className: 'center', ref: this.handleCenterRef },
            childrenContent
          )
        )
      );

      if (page) {
        return Dimmer___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          Portal_defaultExport,
          {
            closeOnEscape: false,
            closeOnDocumentClick: false,
            onMount: this.handlePortalMount,
            onUnmount: this.handlePortalUnmount,
            open: active,
            openOnTriggerClick: false
          },
          dimmerElement
        );
      }

      return dimmerElement;
    }
  }]);

  return Dimmer;
}(Dimmer___WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

Dimmer_Dimmer._meta = {
  name: 'Dimmer',
  type: META_namespaceObject.TYPES.MODULE
};
Dimmer_Dimmer.Dimmable = DimmerDimmable_defaultExport;
Dimmer_Dimmer.handledProps = ['active', 'as', 'children', 'className', 'content', 'disabled', 'inverted', 'onClick', 'onClickOutside', 'page', 'simple'];
/* harmony default export */ var Dimmer_defaultExport = (Dimmer_Dimmer);
 true ? Dimmer_Dimmer.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** An active dimmer will dim its parent container. */
  active: Dimmer___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Primary content. */
  children: Dimmer___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node,

  /** Additional classes. */
  className: Dimmer___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** A disabled dimmer cannot be activated */
  disabled: Dimmer___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: Dimmer___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Handles click outside Dimmer's content, but inside Dimmer area.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClickOutside: Dimmer___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /** A dimmer can be formatted to have its colors inverted. */
  inverted: Dimmer___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** A dimmer can be formatted to be fixed to the page. */
  page: Dimmer___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** A dimmer can be controlled with simple prop. */
  simple: Dimmer___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool
} : void 0;


Dimmer_Dimmer.create = createShorthandFactory(Dimmer_Dimmer, function (value) {
  return { content: value };
});
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Dimmer/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Image/ImageGroup.js
/* harmony import */ var ImageGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ImageGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ImageGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ImageGroup___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var ImageGroup___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(ImageGroup___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var ImageGroup___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var ImageGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(ImageGroup___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var ImageGroup___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var ImageGroup___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(ImageGroup___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A group of images.
 */
function ImageGroup(props) {
  var children = props.children,
      className = props.className,
      size = props.size;

  var classes = ImageGroup___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('ui', size, className, 'images');
  var rest = getUnhandledProps_defaultExport(ImageGroup, props);
  var ElementType = getElementType_defaultExport(ImageGroup, props);

  return ImageGroup___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    ImageGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

ImageGroup.handledProps = ['as', 'children', 'className', 'size'];
ImageGroup._meta = {
  name: 'ImageGroup',
  parent: 'Image',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? ImageGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: ImageGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: ImageGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** A group of images can be formatted to have the same size. */
  size: ImageGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.SIZES)
} : void 0;

/* harmony default export */ var ImageGroup_defaultExport = (ImageGroup);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Image/Image.js
/* harmony import */ var Image___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Image___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Image___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isNil__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isNil__);
/* harmony import */ var Image___WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(543);
/* harmony import */ var Image___WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(Image___WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var Image___WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(542);
/* harmony import */ var Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(Image___WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var Image___WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(11);
/* harmony import */ var Image___WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(Image___WEBPACK_IMPORTED_MODULE_4_react__);













/**
 * An image is a graphic representation of something.
 * @see Icon
 */
function Image(props) {
  var alt = props.alt,
      avatar = props.avatar,
      bordered = props.bordered,
      centered = props.centered,
      children = props.children,
      className = props.className,
      dimmer = props.dimmer,
      disabled = props.disabled,
      floated = props.floated,
      fluid = props.fluid,
      height = props.height,
      hidden = props.hidden,
      href = props.href,
      inline = props.inline,
      label = props.label,
      shape = props.shape,
      size = props.size,
      spaced = props.spaced,
      src = props.src,
      verticalAlign = props.verticalAlign,
      width = props.width,
      wrapped = props.wrapped,
      ui = props.ui;


  var classes = Image___WEBPACK_IMPORTED_MODULE_2_classnames___default.a(useKeyOnly(ui, 'ui'), size, shape, useKeyOnly(avatar, 'avatar'), useKeyOnly(bordered, 'bordered'), useKeyOnly(centered, 'centered'), useKeyOnly(disabled, 'disabled'), useKeyOnly(fluid, 'fluid'), useKeyOnly(hidden, 'hidden'), useKeyOnly(inline, 'inline'), useKeyOrValueAndKey(spaced, 'spaced'), useValueAndKey(floated, 'floated'), useVerticalAlignProp(verticalAlign, 'aligned'), 'image', className);
  var rest = getUnhandledProps_defaultExport(Image, props);
  var ElementType = getElementType_defaultExport(Image, props, function () {
    if (!__WEBPACK_IMPORTED_MODULE_1_lodash_isNil___default.a(dimmer) || !__WEBPACK_IMPORTED_MODULE_1_lodash_isNil___default.a(label) || !__WEBPACK_IMPORTED_MODULE_1_lodash_isNil___default.a(wrapped) || !childrenUtils_namespaceObject.isNil(children)) return 'div';
  });

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return Image___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      ElementType,
      Image___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  var rootProps = Image___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes });
  var imgTagProps = { alt: alt, src: src, height: height, width: width };

  if (ElementType === 'img') return Image___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(ElementType, Image___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rootProps, imgTagProps));

  return Image___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    ElementType,
    Image___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rootProps, { href: href }),
    Dimmer_defaultExport.create(dimmer),
    Label_defaultExport.create(label),
    Image___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('img', imgTagProps)
  );
}

Image.handledProps = ['alt', 'as', 'avatar', 'bordered', 'centered', 'children', 'className', 'dimmer', 'disabled', 'floated', 'fluid', 'height', 'hidden', 'href', 'inline', 'label', 'shape', 'size', 'spaced', 'src', 'ui', 'verticalAlign', 'width', 'wrapped'];
Image.Group = ImageGroup_defaultExport;

Image._meta = {
  name: 'Image',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? Image.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Alternate text for the image specified. */
  alt: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** An image may be formatted to appear inline with text as an avatar. */
  avatar: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** An image may include a border to emphasize the edges of white or transparent content. */
  bordered: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** An image can appear centered in a content block. */
  centered: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Primary content. */
  children: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** An image can show that it is disabled and cannot be selected. */
  disabled: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Shorthand for Dimmer. */
  dimmer: customPropTypes_namespaceObject.itemShorthand,

  /** An image can sit to the left or right of other content. */
  floated: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.FLOATS),

  /** An image can take up the width of its container. */
  fluid: customPropTypes_namespaceObject.every([Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, customPropTypes_namespaceObject.disallow(['size'])]),

  /** The img element height attribute. */
  height: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number, Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string]),

  /** An image can be hidden. */
  hidden: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Renders the Image as an <a> tag with this href. */
  href: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** An image may appear inline. */
  inline: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Shorthand for Label. */
  label: customPropTypes_namespaceObject.itemShorthand,

  /** An image may appear rounded or circular. */
  shape: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['rounded', 'circular']),

  /** An image may appear at different sizes. */
  size: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.SIZES),

  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['left', 'right'])]),

  /** Specifies the URL of the image. */
  src: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Whether or not to add the ui className. */
  ui: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** An image can specify its vertical alignment. */
  verticalAlign: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.VERTICAL_ALIGNMENTS),

  /** The img element width attribute. */
  width: Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string, Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number]),

  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
  wrapped: customPropTypes_namespaceObject.every([Image___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  // these props wrap the image in an a tag already
  customPropTypes_namespaceObject.disallow(['href'])])
} : void 0;

Image.defaultProps = {
  as: 'img',
  ui: true
};

Image.create = createShorthandFactory(Image, function (value) {
  return { src: value };
});

/* harmony default export */ var Image_defaultExport = (Image);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Label/LabelDetail.js
/* harmony import */ var LabelDetail___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var LabelDetail___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(LabelDetail___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var LabelDetail___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var LabelDetail___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(LabelDetail___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var LabelDetail___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var LabelDetail___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(LabelDetail___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var LabelDetail___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var LabelDetail___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(LabelDetail___WEBPACK_IMPORTED_MODULE_3_react__);







function LabelDetail(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = LabelDetail___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('detail', className);
  var rest = getUnhandledProps_defaultExport(LabelDetail, props);
  var ElementType = getElementType_defaultExport(LabelDetail, props);

  return LabelDetail___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    LabelDetail___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

LabelDetail.handledProps = ['as', 'children', 'className', 'content'];
LabelDetail._meta = {
  name: 'LabelDetail',
  parent: 'Label',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? LabelDetail.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: LabelDetail___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: LabelDetail___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand
} : void 0;

/* harmony default export */ var LabelDetail_defaultExport = (LabelDetail);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Label/LabelGroup.js
/* harmony import */ var LabelGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var LabelGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(LabelGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var LabelGroup___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var LabelGroup___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(LabelGroup___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var LabelGroup___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var LabelGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(LabelGroup___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var LabelGroup___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var LabelGroup___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(LabelGroup___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A label can be grouped.
 */
function LabelGroup(props) {
  var children = props.children,
      circular = props.circular,
      className = props.className,
      color = props.color,
      size = props.size,
      tag = props.tag;


  var classes = LabelGroup___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('ui', color, size, useKeyOnly(circular, 'circular'), useKeyOnly(tag, 'tag'), 'labels', className);
  var rest = getUnhandledProps_defaultExport(LabelGroup, props);
  var ElementType = getElementType_defaultExport(LabelGroup, props);

  return LabelGroup___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    LabelGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

LabelGroup.handledProps = ['as', 'children', 'circular', 'className', 'color', 'size', 'tag'];
LabelGroup._meta = {
  name: 'LabelGroup',
  parent: 'Label',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? LabelGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: LabelGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Labels can share shapes. */
  circular: LabelGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Additional classes. */
  className: LabelGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Label group can share colors together. */
  color: LabelGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.COLORS),

  /** Label group can share sizes together. */
  size: LabelGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.SIZES),

  /** Label group can share tag formatting. */
  tag: LabelGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : void 0;

/* harmony default export */ var LabelGroup_defaultExport = (LabelGroup);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Label/Label.js
/* harmony import */ var Label___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Label___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Label___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Label___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Label___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Label___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Label___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Label___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(Label___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var Label___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Label___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Label___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Label___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Label___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(Label___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isUndefined__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);


















/**
 * A label displays content classification.
 */

var Label_Label = function (_Component) {
  Label___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(Label, _Component);

  function Label() {
    var _ref;

    var _temp, _this, _ret;

    Label___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, Label);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Label___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Label.__proto__ || Object.getPrototypeOf(Label)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;


      if (onClick) onClick(e, _this.props);
    }, _this.handleIconOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e) {
          __WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(predefinedProps, 'onClick', e);
          __WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(_this.props, 'onRemove', e, _this.props);
        }
      };
    }, _temp), Label___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Label___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(Label, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          attached = _props.attached,
          basic = _props.basic,
          children = _props.children,
          circular = _props.circular,
          className = _props.className,
          color = _props.color,
          content = _props.content,
          corner = _props.corner,
          detail = _props.detail,
          empty = _props.empty,
          floating = _props.floating,
          horizontal = _props.horizontal,
          icon = _props.icon,
          image = _props.image,
          onRemove = _props.onRemove,
          pointing = _props.pointing,
          removeIcon = _props.removeIcon,
          ribbon = _props.ribbon,
          size = _props.size,
          tag = _props.tag;


      var pointingClass = pointing === true && 'pointing' || (pointing === 'left' || pointing === 'right') && pointing + ' pointing' || (pointing === 'above' || pointing === 'below') && 'pointing ' + pointing;

      var classes = __WEBPACK_IMPORTED_MODULE_7_classnames___default.a('ui', color, pointingClass, size, useKeyOnly(active, 'active'), useKeyOnly(basic, 'basic'), useKeyOnly(circular, 'circular'), useKeyOnly(empty, 'empty'), useKeyOnly(floating, 'floating'), useKeyOnly(horizontal, 'horizontal'), useKeyOnly(image === true, 'image'), useKeyOnly(tag, 'tag'), useKeyOrValueAndKey(corner, 'corner'), useKeyOrValueAndKey(ribbon, 'ribbon'), useValueAndKey(attached, 'attached'), 'label', className);
      var rest = getUnhandledProps_defaultExport(Label, this.props);
      var ElementType = getElementType_defaultExport(Label, this.props);

      if (!childrenUtils_namespaceObject.isNil(children)) {
        return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
          ElementType,
          Label___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, onClick: this.handleClick }),
          children
        );
      }

      var removeIconShorthand = __WEBPACK_IMPORTED_MODULE_5_lodash_isUndefined___default.a(removeIcon) ? 'delete' : removeIcon;

      return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        ElementType,
        Label___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({ className: classes, onClick: this.handleClick }, rest),
        Icon_defaultExport.create(icon),
        typeof image !== 'boolean' && Image_defaultExport.create(image),
        content,
        createShorthand(LabelDetail_defaultExport, function (val) {
          return { content: val };
        }, detail),
        onRemove && Icon_defaultExport.create(removeIconShorthand, { overrideProps: this.handleIconOverrides })
      );
    }
  }]);

  return Label;
}(__WEBPACK_IMPORTED_MODULE_9_react__["Component"]);

Label_Label._meta = {
  name: 'Label',
  type: META_namespaceObject.TYPES.ELEMENT
};
Label_Label.Detail = LabelDetail_defaultExport;
Label_Label.Group = LabelGroup_defaultExport;
Label_Label.handledProps = ['active', 'as', 'attached', 'basic', 'children', 'circular', 'className', 'color', 'content', 'corner', 'detail', 'empty', 'floating', 'horizontal', 'icon', 'image', 'onClick', 'onRemove', 'pointing', 'removeIcon', 'ribbon', 'size', 'tag'];
/* harmony default export */ var Label_defaultExport = (Label_Label);
 true ? Label_Label.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A label can be active. */
  active: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A label can attach to a content segment. */
  attached: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right']),

  /** A label can reduce its complexity. */
  basic: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.node,

  /** A label can be circular. */
  circular: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,

  /** Color of the label. */
  color: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(SUI_namespaceObject.COLORS),

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** A label can position itself in the corner of an element. */
  corner: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(['left', 'right'])]),

  /** Shorthand for LabelDetail. */
  detail: customPropTypes_namespaceObject.itemShorthand,

  /** Formats the label as a dot. */
  empty: customPropTypes_namespaceObject.every([__WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool, customPropTypes_namespaceObject.demand(['circular'])]),

  /** Float above another element in the upper right corner. */
  floating: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Shorthand for Icon. */
  icon: customPropTypes_namespaceObject.itemShorthand,

  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool, customPropTypes_namespaceObject.itemShorthand]),

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /**
   * Adds an "x" icon, called when "x" is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onRemove: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /** A label can point to content next to it. */
  pointing: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(['above', 'below', 'left', 'right'])]),

  /** Shorthand for Icon to appear as the last child and trigger onRemove. */
  removeIcon: customPropTypes_namespaceObject.itemShorthand,

  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(['right'])]),

  /** A label can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(SUI_namespaceObject.SIZES),

  /** A label can appear as a tag. */
  tag: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool
} : void 0;


Label_Label.create = createShorthandFactory(Label_Label, function (value) {
  return { content: value };
});
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Button/ButtonContent.js
/* harmony import */ var ButtonContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ButtonContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ButtonContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ButtonContent___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var ButtonContent___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(ButtonContent___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var ButtonContent___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var ButtonContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(ButtonContent___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var ButtonContent___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var ButtonContent___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(ButtonContent___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * Used in some Button types, such as `animated`.
 */
function ButtonContent(props) {
  var children = props.children,
      className = props.className,
      hidden = props.hidden,
      visible = props.visible;

  var classes = ButtonContent___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(useKeyOnly(visible, 'visible'), useKeyOnly(hidden, 'hidden'), 'content', className);
  var rest = getUnhandledProps_defaultExport(ButtonContent, props);
  var ElementType = getElementType_defaultExport(ButtonContent, props);

  return ButtonContent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    ButtonContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

ButtonContent.handledProps = ['as', 'children', 'className', 'hidden', 'visible'];
ButtonContent._meta = {
  name: 'ButtonContent',
  parent: 'Button',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? ButtonContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: ButtonContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: ButtonContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Initially hidden, visible on hover. */
  hidden: ButtonContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Initially visible, hidden on hover. */
  visible: ButtonContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : void 0;

/* harmony default export */ var ButtonContent_defaultExport = (ButtonContent);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Button/ButtonGroup.js
/* harmony import */ var ButtonGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ButtonGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ButtonGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ButtonGroup___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var ButtonGroup___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(ButtonGroup___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var ButtonGroup___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var ButtonGroup___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(ButtonGroup___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * Buttons can be grouped.
 */
function ButtonGroup(props) {
  var attached = props.attached,
      basic = props.basic,
      children = props.children,
      className = props.className,
      color = props.color,
      compact = props.compact,
      floated = props.floated,
      fluid = props.fluid,
      icon = props.icon,
      inverted = props.inverted,
      labeled = props.labeled,
      negative = props.negative,
      positive = props.positive,
      primary = props.primary,
      secondary = props.secondary,
      size = props.size,
      toggle = props.toggle,
      vertical = props.vertical,
      widths = props.widths;


  var classes = ButtonGroup___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('ui', color, size, useKeyOnly(basic, 'basic'), useKeyOnly(compact, 'compact'), useKeyOnly(fluid, 'fluid'), useKeyOnly(icon, 'icon'), useKeyOnly(inverted, 'inverted'), useKeyOnly(labeled, 'labeled'), useKeyOnly(negative, 'negative'), useKeyOnly(positive, 'positive'), useKeyOnly(primary, 'primary'), useKeyOnly(secondary, 'secondary'), useKeyOnly(toggle, 'toggle'), useKeyOnly(vertical, 'vertical'), useValueAndKey(attached, 'attached'), useValueAndKey(floated, 'floated'), classNameBuilders_useWidthProp(widths), 'buttons', className);
  var rest = getUnhandledProps_defaultExport(ButtonGroup, props);
  var ElementType = getElementType_defaultExport(ButtonGroup, props);

  return ButtonGroup___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    ButtonGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

ButtonGroup.handledProps = ['as', 'attached', 'basic', 'children', 'className', 'color', 'compact', 'floated', 'fluid', 'icon', 'inverted', 'labeled', 'negative', 'positive', 'primary', 'secondary', 'size', 'toggle', 'vertical', 'widths'];
ButtonGroup._meta = {
  name: 'ButtonGroup',
  parent: 'Button',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? ButtonGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A button can be attached to the top or bottom of other content. */
  attached: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['left', 'right', 'top', 'bottom']),

  /** Groups can be less pronounced. */
  basic: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Primary content. */
  children: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Groups can have a shared color. */
  color: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.COLORS),

  /** Groups can reduce their padding to fit into tighter spaces. */
  compact: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Groups can be aligned to the left or right of its container. */
  floated: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.FLOATS),

  /** Groups can take the width of their container. */
  fluid: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Groups can be formatted as icons. */
  icon: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Groups can be formatted to appear on dark backgrounds. */
  inverted: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Groups can be formatted as labeled icon buttons. */
  labeled: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Groups can hint towards a negative consequence. */
  negative: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Groups can hint towards a positive consequence. */
  positive: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Groups can be formatted to show different levels of emphasis. */
  primary: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Groups can be formatted to show different levels of emphasis. */
  secondary: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Groups can have different sizes. */
  size: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.SIZES),

  /** Groups can be formatted to toggle on and off. */
  toggle: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Groups can be formatted to appear vertically. */
  vertical: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Groups can have their widths divided evenly. */
  widths: ButtonGroup___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.WIDTHS)
} : void 0;

/* harmony default export */ var ButtonGroup_defaultExport = (ButtonGroup);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Button/ButtonOr.js
/* harmony import */ var ButtonOr___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ButtonOr___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ButtonOr___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ButtonOr___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var ButtonOr___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(ButtonOr___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var ButtonOr___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var ButtonOr___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(ButtonOr___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var ButtonOr___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var ButtonOr___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(ButtonOr___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * Button groups can contain conditionals.
 */
function ButtonOr(props) {
  var className = props.className,
      text = props.text;

  var classes = ButtonOr___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('or', className);
  var rest = getUnhandledProps_defaultExport(ButtonOr, props);
  var ElementType = getElementType_defaultExport(ButtonOr, props);

  return ButtonOr___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, ButtonOr___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, 'data-text': text }));
}

ButtonOr.handledProps = ['as', 'className', 'text'];
ButtonOr._meta = {
  name: 'ButtonOr',
  parent: 'Button',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? ButtonOr.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Additional classes. */
  className: ButtonOr___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Or buttons can have their text localized, or adjusted by using the text prop. */
  text: ButtonOr___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([ButtonOr___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number, ButtonOr___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string])
} : void 0;

/* harmony default export */ var ButtonOr_defaultExport = (ButtonOr);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Button/Button.js
/* harmony import */ var Button___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(96);
/* harmony import */ var Button___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(Button___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var Button___WEBPACK_IMPORTED_MODULE_6_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var Button___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default = __webpack_require__.n(Button___WEBPACK_IMPORTED_MODULE_6_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isNil__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);




















/**
 * A Button indicates a possible user action.
 * @see Form
 * @see Icon
 * @see Label
 */

var Button_Button = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default.a(Button, _Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default.a(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.computeElementType = function () {
      var _this$props = _this.props,
          attached = _this$props.attached,
          label = _this$props.label;


      if (!__WEBPACK_IMPORTED_MODULE_7_lodash_isNil___default.a(attached) || !__WEBPACK_IMPORTED_MODULE_7_lodash_isNil___default.a(label)) return 'div';
    }, _this.computeTabIndex = function (ElementType) {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;


      if (!__WEBPACK_IMPORTED_MODULE_7_lodash_isNil___default.a(tabIndex)) return tabIndex;
      if (disabled) return -1;
      if (ElementType === 'div') return 0;
    }, _this.focus = function () {
      return Button___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(_this.ref, 'focus');
    }, _this.handleClick = function (e) {
      var disabled = _this.props.disabled;


      if (disabled) {
        e.preventDefault();
        return;
      }

      Button___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(_this.props, 'onClick', e, _this.props);
    }, _this.handleRef = function (c) {
      return _this.ref = c;
    }, _this.hasIconClass = function () {
      var _this$props3 = _this.props,
          labelPosition = _this$props3.labelPosition,
          children = _this$props3.children,
          content = _this$props3.content,
          icon = _this$props3.icon;


      if (icon === true) return true;
      return icon && (labelPosition || childrenUtils_namespaceObject.isNil(children) && __WEBPACK_IMPORTED_MODULE_7_lodash_isNil___default.a(content));
    }, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default.a(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          animated = _props.animated,
          attached = _props.attached,
          basic = _props.basic,
          children = _props.children,
          circular = _props.circular,
          className = _props.className,
          color = _props.color,
          compact = _props.compact,
          content = _props.content,
          disabled = _props.disabled,
          floated = _props.floated,
          fluid = _props.fluid,
          icon = _props.icon,
          inverted = _props.inverted,
          label = _props.label,
          labelPosition = _props.labelPosition,
          loading = _props.loading,
          negative = _props.negative,
          positive = _props.positive,
          primary = _props.primary,
          secondary = _props.secondary,
          size = _props.size,
          toggle = _props.toggle;


      var baseClasses = __WEBPACK_IMPORTED_MODULE_8_classnames___default.a(color, size, useKeyOnly(active, 'active'), useKeyOnly(basic, 'basic'), useKeyOnly(circular, 'circular'), useKeyOnly(compact, 'compact'), useKeyOnly(fluid, 'fluid'), useKeyOnly(this.hasIconClass(), 'icon'), useKeyOnly(inverted, 'inverted'), useKeyOnly(loading, 'loading'), useKeyOnly(negative, 'negative'), useKeyOnly(positive, 'positive'), useKeyOnly(primary, 'primary'), useKeyOnly(secondary, 'secondary'), useKeyOnly(toggle, 'toggle'), useKeyOrValueAndKey(animated, 'animated'), useKeyOrValueAndKey(attached, 'attached'));
      var labeledClasses = __WEBPACK_IMPORTED_MODULE_8_classnames___default.a(useKeyOrValueAndKey(labelPosition || !!label, 'labeled'));
      var wrapperClasses = __WEBPACK_IMPORTED_MODULE_8_classnames___default.a(useKeyOnly(disabled, 'disabled'), useValueAndKey(floated, 'floated'));

      var rest = getUnhandledProps_defaultExport(Button, this.props);
      var ElementType = getElementType_defaultExport(Button, this.props, this.computeElementType);
      var tabIndex = this.computeTabIndex(ElementType);

      if (!__WEBPACK_IMPORTED_MODULE_7_lodash_isNil___default.a(label)) {
        var buttonClasses = __WEBPACK_IMPORTED_MODULE_8_classnames___default.a('ui', baseClasses, 'button', className);
        var containerClasses = __WEBPACK_IMPORTED_MODULE_8_classnames___default.a('ui', labeledClasses, 'button', className, wrapperClasses);
        var labelElement = Label_defaultExport.create(label, { defaultProps: {
            basic: true,
            pointing: labelPosition === 'left' ? 'right' : 'left'
          } });

        return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          ElementType,
          __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, rest, { className: containerClasses, onClick: this.handleClick }),
          labelPosition === 'left' && labelElement,
          __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
            'button',
            { className: buttonClasses, disabled: disabled, ref: this.handleRef, tabIndex: tabIndex },
            Icon_defaultExport.create(icon),
            ' ',
            content
          ),
          (labelPosition === 'right' || !labelPosition) && labelElement
        );
      }

      var classes = __WEBPACK_IMPORTED_MODULE_8_classnames___default.a('ui', baseClasses, wrapperClasses, labeledClasses, 'button', className);
      var hasChildren = !childrenUtils_namespaceObject.isNil(children);

      return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
        ElementType,
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, rest, {
          className: classes,
          disabled: disabled && ElementType === 'button' || undefined,
          onClick: this.handleClick,
          ref: this.handleRef,
          tabIndex: tabIndex
        }),
        hasChildren && children,
        !hasChildren && Icon_defaultExport.create(icon),
        !hasChildren && content
      );
    }
  }]);

  return Button;
}(__WEBPACK_IMPORTED_MODULE_10_react__["Component"]);

Button_Button.defaultProps = {
  as: 'button'
};
Button_Button._meta = {
  name: 'Button',
  type: META_namespaceObject.TYPES.ELEMENT
};
Button_Button.Content = ButtonContent_defaultExport;
Button_Button.Group = ButtonGroup_defaultExport;
Button_Button.Or = ButtonOr_defaultExport;
Button_Button.handledProps = ['active', 'animated', 'as', 'attached', 'basic', 'children', 'circular', 'className', 'color', 'compact', 'content', 'disabled', 'floated', 'fluid', 'icon', 'inverted', 'label', 'labelPosition', 'loading', 'negative', 'onClick', 'positive', 'primary', 'secondary', 'size', 'tabIndex', 'toggle'];
 true ? Button_Button.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A button can show it is currently the active user selection. */
  active: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** A button can animate to show hidden content. */
  animated: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(['fade', 'vertical'])]),

  /** A button can be attached to the top or bottom of other content. */
  attached: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(['left', 'right', 'top', 'bottom']),

  /** A basic button is less pronounced. */
  basic: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Primary content. */
  children: customPropTypes_namespaceObject.every([__WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.node, customPropTypes_namespaceObject.disallow(['label']), customPropTypes_namespaceObject.givenProps({
    icon: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string.isRequired, __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.object.isRequired, __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.element.isRequired])
  }, customPropTypes_namespaceObject.disallow(['icon']))]),

  /** A button can be circular. */
  circular: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string,

  /** A button can have different colors */
  color: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf([].concat(Button___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default.a(SUI_namespaceObject.COLORS), ['facebook', 'google plus', 'instagram', 'linkedin', 'twitter', 'vk', 'youtube'])),

  /** A button can reduce its padding to fit into tighter spaces. */
  compact: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** A button can show it is currently unable to be interacted with. */
  disabled: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** A button can be aligned to the left or right of its container. */
  floated: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(SUI_namespaceObject.FLOATS),

  /** A button can take the width of its container. */
  fluid: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Add an Icon by name, props object, or pass an <Icon />. */
  icon: customPropTypes_namespaceObject.some([__WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.element]),

  /** A button can be formatted to appear on dark backgrounds. */
  inverted: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Add a Label by text, props object, or pass a <Label />. */
  label: customPropTypes_namespaceObject.some([__WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.element]),

  /** A labeled button can format a Label or Icon to appear on the left or right. */
  labelPosition: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(['right', 'left']),

  /** A button can show a loading indicator. */
  loading: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** A button can hint towards a negative consequence. */
  negative: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /**
   * Called after user's click.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func,

  /** A button can hint towards a positive consequence. */
  positive: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** A button can be formatted to show different levels of emphasis. */
  primary: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** A button can be formatted to show different levels of emphasis. */
  secondary: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** A button can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(SUI_namespaceObject.SIZES),

  /** A button can receive focus. */
  tabIndex: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string]),

  /** A button can be formatted to toggle on and off. */
  toggle: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool
} : void 0;


Button_Button.create = createShorthandFactory(Button_Button, function (value) {
  return { content: value };
});

/* harmony default export */ var Button_defaultExport = (Button_Button);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Button/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Icon/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Modal/ModalHeader.js
/* harmony import */ var ModalHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ModalHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ModalHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ModalHeader___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var ModalHeader___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(ModalHeader___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var ModalHeader___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var ModalHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(ModalHeader___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var ModalHeader___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var ModalHeader___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(ModalHeader___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A modal can have a header.
 */
function ModalHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = ModalHeader___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(className, 'header');
  var rest = getUnhandledProps_defaultExport(ModalHeader, props);
  var ElementType = getElementType_defaultExport(ModalHeader, props);

  return ModalHeader___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    ModalHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

ModalHeader.handledProps = ['as', 'children', 'className', 'content'];
ModalHeader._meta = {
  name: 'ModalHeader',
  type: META_namespaceObject.TYPES.MODULE,
  parent: 'Modal'
};

 true ? ModalHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: ModalHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: ModalHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand
} : void 0;

ModalHeader.create = createShorthandFactory(ModalHeader, function (content) {
  return { content: content };
});

/* harmony default export */ var ModalHeader_defaultExport = (ModalHeader);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Modal/ModalContent.js
/* harmony import */ var ModalContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ModalContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ModalContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ModalContent___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var ModalContent___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(ModalContent___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var ModalContent___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var ModalContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(ModalContent___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var ModalContent___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var ModalContent___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(ModalContent___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A modal can contain content.
 */
function ModalContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      image = props.image;


  var classes = ModalContent___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(className, useKeyOnly(image, 'image'), 'content');
  var rest = getUnhandledProps_defaultExport(ModalContent, props);
  var ElementType = getElementType_defaultExport(ModalContent, props);

  return ModalContent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    ModalContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

ModalContent.handledProps = ['as', 'children', 'className', 'content', 'image'];
ModalContent._meta = {
  name: 'ModalContent',
  type: META_namespaceObject.TYPES.MODULE,
  parent: 'Modal'
};

 true ? ModalContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: ModalContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: ModalContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** A modal can contain image content. */
  image: ModalContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : void 0;

ModalContent.create = createShorthandFactory(ModalContent, function (content) {
  return { content: content };
});

/* harmony default export */ var ModalContent_defaultExport = (ModalContent);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Modal/ModalActions.js
/* harmony import */ var ModalActions___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ModalActions___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ModalActions___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ModalActions___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var ModalActions___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(ModalActions___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var ModalActions___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var ModalActions___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(ModalActions___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var ModalActions___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var ModalActions___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(ModalActions___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var ModalActions___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var ModalActions___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(ModalActions___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_map__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_map__);
/* harmony import */ var ModalActions___WEBPACK_IMPORTED_MODULE_6_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var ModalActions___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default = __webpack_require__.n(ModalActions___WEBPACK_IMPORTED_MODULE_6_lodash_invoke__);
/* harmony import */ var ModalActions___WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(543);
/* harmony import */ var ModalActions___WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(ModalActions___WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var ModalActions___WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(542);
/* harmony import */ var ModalActions___WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(ModalActions___WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var ModalActions___WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(11);
/* harmony import */ var ModalActions___WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(ModalActions___WEBPACK_IMPORTED_MODULE_9_react__);















/**
 * A modal can contain a row of actions.
 */

var ModalActions_ModalActions = function (_Component) {
  ModalActions___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(ModalActions, _Component);

  function ModalActions() {
    var _ref;

    var _temp, _this, _ret;

    ModalActions___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, ModalActions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = ModalActions___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = ModalActions.__proto__ || Object.getPrototypeOf(ModalActions)).call.apply(_ref, [this].concat(args))), _this), _this.handleButtonOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e, buttonProps) {
          ModalActions___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(predefinedProps, 'onClick', e, buttonProps);
          ModalActions___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(_this.props, 'onActionClick', e, buttonProps);
        }
      };
    }, _temp), ModalActions___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  ModalActions___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(ModalActions, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          actions = _props.actions,
          children = _props.children,
          className = _props.className;

      var classes = ModalActions___WEBPACK_IMPORTED_MODULE_7_classnames___default.a('actions', className);
      var rest = getUnhandledProps_defaultExport(ModalActions, this.props);
      var ElementType = getElementType_defaultExport(ModalActions, this.props);

      if (!childrenUtils_namespaceObject.isNil(children)) return ModalActions___WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        ElementType,
        ModalActions___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
        children
      );

      return ModalActions___WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        ElementType,
        ModalActions___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
        __WEBPACK_IMPORTED_MODULE_5_lodash_map___default.a(actions, function (action) {
          return Button_defaultExport.create(action, { overrideProps: _this2.handleButtonOverrides });
        })
      );
    }
  }]);

  return ModalActions;
}(ModalActions___WEBPACK_IMPORTED_MODULE_9_react__["Component"]);

ModalActions_ModalActions._meta = {
  name: 'ModalActions',
  type: META_namespaceObject.TYPES.MODULE,
  parent: 'Modal'
};
ModalActions_ModalActions.handledProps = ['actions', 'as', 'children', 'className', 'onActionClick'];
/* harmony default export */ var ModalActions_defaultExport = (ModalActions_ModalActions);
 true ? ModalActions_ModalActions.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Elements to render as Modal action buttons. */
  actions: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['children']), ModalActions___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.arrayOf(customPropTypes_namespaceObject.itemShorthand)]),

  /** Primary content. */
  children: ModalActions___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.node,

  /** Additional classes. */
  className: ModalActions___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,

  /**
   * onClick handler for an action. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onActionClick: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['children']), ModalActions___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func])
} : void 0;


ModalActions_ModalActions.create = createShorthandFactory(ModalActions_ModalActions, function (actions) {
  return { actions: actions };
});
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Modal/ModalDescription.js
/* harmony import */ var ModalDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ModalDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ModalDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ModalDescription___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var ModalDescription___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(ModalDescription___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var ModalDescription___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var ModalDescription___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(ModalDescription___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var ModalDescription___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var ModalDescription___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(ModalDescription___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A modal can have a header.
 */
function ModalDescription(props) {
  var children = props.children,
      className = props.className;

  var classes = ModalDescription___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('description', className);
  var rest = getUnhandledProps_defaultExport(ModalDescription, props);
  var ElementType = getElementType_defaultExport(ModalDescription, props);

  return ModalDescription___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    ModalDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

ModalDescription.handledProps = ['as', 'children', 'className'];
ModalDescription._meta = {
  name: 'ModalDescription',
  type: META_namespaceObject.TYPES.MODULE,
  parent: 'Modal'
};

 true ? ModalDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: ModalDescription___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: ModalDescription___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : void 0;

/* harmony default export */ var ModalDescription_defaultExport = (ModalDescription);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Modal/Modal.js
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Modal___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Modal___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(Modal___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Modal___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(Modal___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_pick__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_pick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_pick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_omit__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_omit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_omit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_invoke__);
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(543);
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(Modal___WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_9_prop_types__ = __webpack_require__(542);
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default = __webpack_require__.n(Modal___WEBPACK_IMPORTED_MODULE_9_prop_types__);
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(11);
/* harmony import */ var Modal___WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(Modal___WEBPACK_IMPORTED_MODULE_10_react__);





















var Modal_debug = makeDebugger('modal');

/**
 * A modal displays content that temporarily blocks interactions with the main view of a site.
 * @see Confirm
 * @see Portal
 */

var Modal_Modal = function (_Component) {
  Modal___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    Modal___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Modal___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.getMountNode = function () {
      return isBrowser_defaultExport ? _this.props.mountNode || document.body : null;
    }, _this.handleActionsOverrides = function (predefinedProps) {
      return {
        onActionClick: function onActionClick(e, actionProps) {
          var triggerClose = actionProps.triggerClose;


          __WEBPACK_IMPORTED_MODULE_7_lodash_invoke___default.a(predefinedProps, 'onActionClick', e, actionProps);
          if (triggerClose) _this.handleClose(e);
        }
      };
    }, _this.handleClose = function (e) {
      Modal_debug('close()');

      var onClose = _this.props.onClose;

      if (onClose) onClose(e, _this.props);

      _this.trySetState({ open: false });
    }, _this.handleIconOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e) {
          __WEBPACK_IMPORTED_MODULE_7_lodash_invoke___default.a(predefinedProps, 'onClick', e);
          _this.handleClose(e);
        }
      };
    }, _this.handleOpen = function (e) {
      Modal_debug('open()');

      var onOpen = _this.props.onOpen;

      if (onOpen) onOpen(e, _this.props);

      _this.trySetState({ open: true });
    }, _this.handlePortalMount = function (e) {
      Modal_debug('handlePortalMount()');
      var dimmer = _this.props.dimmer;

      var mountNode = _this.getMountNode();

      if (dimmer) {
        Modal_debug('adding dimmer');
        mountNode.classList.add('dimmable', 'dimmed');

        if (dimmer === 'blurring') {
          Modal_debug('adding blurred dimmer');
          mountNode.classList.add('blurring');
        }
      }

      _this.setPosition();

      var onMount = _this.props.onMount;

      if (onMount) onMount(e, _this.props);
    }, _this.handlePortalUnmount = function (e) {
      Modal_debug('handlePortalUnmount()');

      // Always remove all dimmer classes.
      // If the dimmer value changes while the modal is open, then removing its
      // current value could leave cruft classes previously added.
      var mountNode = _this.getMountNode();
      mountNode.classList.remove('blurring', 'dimmable', 'dimmed', 'scrollable');

      cancelAnimationFrame(_this.animationRequestId);

      var onUnmount = _this.props.onUnmount;

      if (onUnmount) onUnmount(e, _this.props);
    }, _this.handleRef = function (c) {
      return _this.ref = c;
    }, _this.setPosition = function () {
      if (_this.ref) {
        var mountNode = _this.getMountNode();

        var _this$ref$getBounding = _this.ref.getBoundingClientRect(),
            height = _this$ref$getBounding.height;

        var marginTop = -Math.round(height / 2);
        var scrolling = height >= window.innerHeight;

        var newState = {};

        if (_this.state.marginTop !== marginTop) {
          newState.marginTop = marginTop;
        }

        if (_this.state.scrolling !== scrolling) {
          newState.scrolling = scrolling;

          if (scrolling) {
            mountNode.classList.add('scrolling');
          } else {
            mountNode.classList.remove('scrolling');
          }
        }

        if (Object.keys(newState).length > 0) _this.setState(newState);
      }

      _this.animationRequestId = requestAnimationFrame(_this.setPosition);
    }, _this.renderContent = function (rest) {
      var _this$props = _this.props,
          actions = _this$props.actions,
          basic = _this$props.basic,
          children = _this$props.children,
          className = _this$props.className,
          closeIcon = _this$props.closeIcon,
          content = _this$props.content,
          header = _this$props.header,
          size = _this$props.size,
          style = _this$props.style;
      var _this$state = _this.state,
          marginTop = _this$state.marginTop,
          scrolling = _this$state.scrolling;


      var classes = Modal___WEBPACK_IMPORTED_MODULE_8_classnames___default.a('ui', size, useKeyOnly(basic, 'basic'), useKeyOnly(scrolling, 'scrolling'), 'modal transition visible active', className);
      var ElementType = getElementType_defaultExport(Modal, _this.props);

      var closeIconName = closeIcon === true ? 'close' : closeIcon;
      var closeIconJSX = Icon_defaultExport.create(closeIconName, { overrideProps: _this.handleIconOverrides });

      if (!childrenUtils_namespaceObject.isNil(children)) {
        return Modal___WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
          ElementType,
          Modal___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, style: Modal___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({ marginTop: marginTop }, style), ref: _this.handleRef }),
          closeIconJSX,
          children
        );
      }

      return Modal___WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
        ElementType,
        Modal___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, style: Modal___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({ marginTop: marginTop }, style), ref: _this.handleRef }),
        closeIconJSX,
        ModalHeader_defaultExport.create(header),
        ModalContent_defaultExport.create(content),
        ModalActions_defaultExport.create(actions, { overrideProps: _this.handleActionsOverrides })
      );
    }, _temp), Modal___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Modal___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(Modal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      Modal_debug('componentWillUnmount()');
      this.handlePortalUnmount();
    }

    // Do not access document when server side rendering

  }, {
    key: 'render',
    value: function render() {
      var open = this.state.open;
      var _props = this.props,
          closeOnDimmerClick = _props.closeOnDimmerClick,
          closeOnDocumentClick = _props.closeOnDocumentClick,
          dimmer = _props.dimmer;

      var mountNode = this.getMountNode();

      // Short circuit when server side rendering
      if (!isBrowser_defaultExport) return null;

      var unhandled = getUnhandledProps_defaultExport(Modal, this.props);
      var portalPropNames = Portal_defaultExport.handledProps;

      var rest = __WEBPACK_IMPORTED_MODULE_6_lodash_omit___default.a(unhandled, portalPropNames);
      var portalProps = __WEBPACK_IMPORTED_MODULE_5_lodash_pick___default.a(unhandled, portalPropNames);

      // wrap dimmer modals
      var dimmerClasses = !dimmer ? null : Modal___WEBPACK_IMPORTED_MODULE_8_classnames___default.a('ui', dimmer === 'inverted' && 'inverted', 'page modals dimmer transition visible active');

      // Heads up!
      //
      // The SUI CSS selector to prevent the modal itself from blurring requires an immediate .dimmer child:
      // .blurring.dimmed.dimmable>:not(.dimmer) { ... }
      //
      // The .blurring.dimmed.dimmable is the body, so that all body content inside is blurred.
      // We need the immediate child to be the dimmer to :not() blur the modal itself!
      // Otherwise, the portal div is also blurred, blurring the modal.
      //
      // We cannot them wrap the modalJSX in an actual <Dimmer /> instead, we apply the dimmer classes to the <Portal />.

      return Modal___WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
        Portal_defaultExport,
        Modal___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({
          closeOnDocumentClick: closeOnDocumentClick,
          closeOnRootNodeClick: closeOnDimmerClick
        }, portalProps, {
          className: dimmerClasses,
          mountNode: mountNode,
          open: open,
          onClose: this.handleClose,
          onMount: this.handlePortalMount,
          onOpen: this.handleOpen,
          onUnmount: this.handlePortalUnmount
        }),
        this.renderContent(rest)
      );
    }
  }]);

  return Modal;
}(AutoControlledComponent_defaultExport);

Modal_Modal.defaultProps = {
  dimmer: true,
  closeOnDimmerClick: true,
  closeOnDocumentClick: false
};
Modal_Modal.autoControlledProps = ['open'];
Modal_Modal._meta = {
  name: 'Modal',
  type: META_namespaceObject.TYPES.MODULE
};
Modal_Modal.Header = ModalHeader_defaultExport;
Modal_Modal.Content = ModalContent_defaultExport;
Modal_Modal.Description = ModalDescription_defaultExport;
Modal_Modal.Actions = ModalActions_defaultExport;
Modal_Modal.handledProps = ['actions', 'as', 'basic', 'children', 'className', 'closeIcon', 'closeOnDimmerClick', 'closeOnDocumentClick', 'content', 'defaultOpen', 'dimmer', 'header', 'mountNode', 'onClose', 'onMount', 'onOpen', 'onUnmount', 'open', 'size', 'style'];
 true ? Modal_Modal.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Elements to render as Modal action buttons. */
  actions: Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.arrayOf(customPropTypes_namespaceObject.itemShorthand),

  /** A modal can reduce its complexity */
  basic: Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Primary content. */
  children: Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.node,

  /** Additional classes. */
  className: Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string,

  /** Icon. */
  closeIcon: Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.node, Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.object, Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool]),

  /** Whether or not the Modal should close when the dimmer is clicked. */
  closeOnDimmerClick: Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Whether or not the Modal should close when the document is clicked. */
  closeOnDocumentClick: Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Simple text content for the Modal. */
  content: customPropTypes_namespaceObject.itemShorthand,

  /** Initial value of open. */
  defaultOpen: Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** A Modal can appear in a dimmer. */
  dimmer: Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool, Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(['inverted', 'blurring'])]),

  /** Modal displayed above the content in bold. */
  header: customPropTypes_namespaceObject.itemShorthand,

  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.any,

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func,

  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func,

  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func,

  /** Controls whether or not the Modal is displayed. */
  open: Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** A modal can vary in size */
  size: Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(['fullscreen', 'large', 'small']),

  /** Custom styles. */
  style: Modal___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.object

  /**
   * NOTE: Any unhandled props that are defined in Portal are passed-through
   * to the wrapping Portal.
   */
} : void 0;


/* harmony default export */ var Modal_defaultExport = (Modal_Modal);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Modal/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/addons/Confirm/Confirm.js
/* harmony import */ var Confirm___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Confirm___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Confirm___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Confirm___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Confirm___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Confirm___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Confirm___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Confirm___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(Confirm___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var Confirm___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Confirm___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Confirm___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Confirm___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Confirm___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(Confirm___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_has__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_has__);
/* harmony import */ var Confirm___WEBPACK_IMPORTED_MODULE_6_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var Confirm___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default = __webpack_require__.n(Confirm___WEBPACK_IMPORTED_MODULE_6_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);















/**
 * A Confirm modal gives the user a choice to confirm or cancel an action/
 * @see Modal
 */

var Confirm_Confirm = function (_Component) {
  Confirm___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(Confirm, _Component);

  function Confirm() {
    var _ref;

    var _temp, _this, _ret;

    Confirm___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, Confirm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Confirm___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call.apply(_ref, [this].concat(args))), _this), _this.handleCancel = function (e) {
      Confirm___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(_this.props, 'onCancel', e, _this.props);
    }, _this.handleCancelOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e, buttonProps) {
          Confirm___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(predefinedProps, 'onClick', e, buttonProps);
          _this.handleCancel(e);
        }
      };
    }, _this.handleConfirmOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e, buttonProps) {
          Confirm___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(predefinedProps, 'onClick', e, buttonProps);
          Confirm___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(_this.props, 'onConfirm', e, _this.props);
        }
      };
    }, _temp), Confirm___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Confirm___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(Confirm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cancelButton = _props.cancelButton,
          confirmButton = _props.confirmButton,
          content = _props.content,
          header = _props.header,
          open = _props.open;

      var rest = getUnhandledProps_defaultExport(Confirm, this.props);

      // `open` is auto controlled by the Modal
      // It cannot be present (even undefined) with `defaultOpen`
      // only apply it if the user provided an open prop
      var openProp = {};
      if (__WEBPACK_IMPORTED_MODULE_5_lodash_has___default.a(this.props, 'open')) openProp.open = open;

      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        Modal_defaultExport,
        Confirm___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, openProp, { size: 'small', onClose: this.handleCancel }),
        Modal_defaultExport.Header.create(header),
        Modal_defaultExport.Content.create(content),
        __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          Modal_defaultExport.Actions,
          null,
          Button_defaultExport.create(cancelButton, { overrideProps: this.handleCancelOverrides }),
          Button_defaultExport.create(confirmButton, {
            defaultProps: { primary: true },
            overrideProps: this.handleConfirmOverrides
          })
        )
      );
    }
  }]);

  return Confirm;
}(__WEBPACK_IMPORTED_MODULE_8_react__["Component"]);

Confirm_Confirm.defaultProps = {
  cancelButton: 'Cancel',
  confirmButton: 'OK',
  content: 'Are you sure?'
};
Confirm_Confirm._meta = {
  name: 'Confirm',
  type: META_namespaceObject.TYPES.ADDON
};
Confirm_Confirm.handledProps = ['cancelButton', 'confirmButton', 'content', 'header', 'onCancel', 'onConfirm', 'open'];
 true ? Confirm_Confirm.propTypes = {
  /** The cancel button text. */
  cancelButton: customPropTypes_namespaceObject.itemShorthand,

  /** The OK button text. */
  confirmButton: customPropTypes_namespaceObject.itemShorthand,

  /** The ModalContent text. */
  content: customPropTypes_namespaceObject.itemShorthand,

  /** The ModalHeader text. */
  header: customPropTypes_namespaceObject.itemShorthand,

  /**
   * Called when the Modal is closed without clicking confirm.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onCancel: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,

  /**
   * Called when the OK button is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onConfirm: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,

  /** Whether or not the modal is visible. */
  open: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool
} : void 0;


/* harmony default export */ var Confirm_defaultExport = (Confirm_Confirm);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/addons/Confirm/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Checkbox/Checkbox.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(Checkbox___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Checkbox___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(Checkbox___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Checkbox___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(Checkbox___WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_6_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default = __webpack_require__.n(Checkbox___WEBPACK_IMPORTED_MODULE_6_lodash_invoke__);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_7_lodash_isNil__ = __webpack_require__(549);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_7_lodash_isNil___default = __webpack_require__.n(Checkbox___WEBPACK_IMPORTED_MODULE_7_lodash_isNil__);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(543);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(Checkbox___WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types__ = __webpack_require__(542);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default = __webpack_require__.n(Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types__);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(11);
/* harmony import */ var Checkbox___WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(Checkbox___WEBPACK_IMPORTED_MODULE_10_react__);














var Checkbox_debug = makeDebugger('checkbox');

/**
 * A checkbox allows a user to select a value from a small set of options, often binary.
 * @see Form
 * @see Radio
 */

var Checkbox_Checkbox = function (_Component) {
  Checkbox___WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default.a(Checkbox, _Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    Checkbox___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default.a(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Checkbox___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.canToggle = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          radio = _this$props.radio,
          readOnly = _this$props.readOnly;
      var checked = _this.state.checked;


      return !disabled && !readOnly && !(radio && checked);
    }, _this.computeTabIndex = function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;


      if (!Checkbox___WEBPACK_IMPORTED_MODULE_7_lodash_isNil___default.a(tabIndex)) return tabIndex;
      return disabled ? -1 : 0;
    }, _this.handleInputRef = function (c) {
      return _this.inputRef = c;
    }, _this.handleClick = function (e) {
      Checkbox_debug('handleClick()');
      var _this$state = _this.state,
          checked = _this$state.checked,
          indeterminate = _this$state.indeterminate;


      if (!_this.canToggle()) return;

      Checkbox___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(_this.props, 'onClick', e, Checkbox___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, _this.props, { checked: !!checked, indeterminate: !!indeterminate }));
      Checkbox___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(_this.props, 'onChange', e, Checkbox___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, _this.props, { checked: !checked, indeterminate: false }));

      _this.trySetState({ checked: !checked, indeterminate: false });
    }, _this.handleMouseDown = function (e) {
      Checkbox_debug('handleMouseDown()');
      var _this$state2 = _this.state,
          checked = _this$state2.checked,
          indeterminate = _this$state2.indeterminate;


      Checkbox___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(_this.props, 'onMouseDown', e, Checkbox___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, _this.props, { checked: !!checked, indeterminate: !!indeterminate }));
      Checkbox___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(_this.inputRef, 'focus');

      e.preventDefault();
    }, _this.setIndeterminate = function () {
      var indeterminate = _this.state.indeterminate;


      if (_this.inputRef) _this.inputRef.indeterminate = !!indeterminate;
    }, _temp), Checkbox___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Checkbox___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default.a(Checkbox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setIndeterminate();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setIndeterminate();
    }

    // Note: You can't directly set the indeterminate prop on the input, so we
    // need to maintain a ref to the input and set it manually whenever the
    // component updates.

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          disabled = _props.disabled,
          label = _props.label,
          name = _props.name,
          radio = _props.radio,
          readOnly = _props.readOnly,
          slider = _props.slider,
          toggle = _props.toggle,
          type = _props.type,
          value = _props.value;
      var _state = this.state,
          checked = _state.checked,
          indeterminate = _state.indeterminate;


      var classes = Checkbox___WEBPACK_IMPORTED_MODULE_8_classnames___default.a('ui', useKeyOnly(checked, 'checked'), useKeyOnly(disabled, 'disabled'), useKeyOnly(indeterminate, 'indeterminate'),
      // auto apply fitted class to compact white space when there is no label
      // https://semantic-ui.com/modules/checkbox.html#fitted
      useKeyOnly(!label, 'fitted'), useKeyOnly(radio, 'radio'), useKeyOnly(readOnly, 'read-only'), useKeyOnly(slider, 'slider'), useKeyOnly(toggle, 'toggle'), 'checkbox', className);
      var unhandled = getUnhandledProps_defaultExport(Checkbox, this.props);
      var ElementType = getElementType_defaultExport(Checkbox, this.props);

      var _partitionHTMLInputPr = partitionHTMLInputProps(unhandled, { htmlProps: [] }),
          _partitionHTMLInputPr2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default.a(_partitionHTMLInputPr, 2),
          htmlInputProps = _partitionHTMLInputPr2[0],
          rest = _partitionHTMLInputPr2[1];

      return Checkbox___WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
        ElementType,
        Checkbox___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, rest, {
          className: classes,
          onChange: this.handleClick,
          onClick: this.handleClick,
          onMouseDown: this.handleMouseDown
        }),
        Checkbox___WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement('input', Checkbox___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, htmlInputProps, {
          checked: checked,
          className: 'hidden',
          name: name,
          readOnly: true,
          ref: this.handleInputRef,
          tabIndex: this.computeTabIndex(),
          type: type,
          value: value
        })),
        createHTMLLabel(label) || Checkbox___WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement('label', null)
      );
    }
  }]);

  return Checkbox;
}(AutoControlledComponent_defaultExport);

Checkbox_Checkbox.defaultProps = {
  type: 'checkbox'
};
Checkbox_Checkbox.autoControlledProps = ['checked', 'indeterminate'];
Checkbox_Checkbox._meta = {
  name: 'Checkbox',
  type: META_namespaceObject.TYPES.MODULE
};
Checkbox_Checkbox.handledProps = ['as', 'checked', 'className', 'defaultChecked', 'defaultIndeterminate', 'disabled', 'fitted', 'indeterminate', 'label', 'name', 'onChange', 'onClick', 'onMouseDown', 'radio', 'readOnly', 'slider', 'tabIndex', 'toggle', 'type', 'value'];
/* harmony default export */ var Checkbox_defaultExport = (Checkbox_Checkbox);
 true ? Checkbox_Checkbox.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Whether or not checkbox is checked. */
  checked: Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Additional classes. */
  className: Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string,

  /** The initial value of checked. */
  defaultChecked: Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Whether or not checkbox is indeterminate. */
  defaultIndeterminate: Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** A checkbox can appear disabled and be unable to change states */
  disabled: Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Removes padding for a label. Auto applied when there is no label. */
  fitted: Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Whether or not checkbox is indeterminate. */
  indeterminate: Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** The text of the associated label element. */
  label: customPropTypes_namespaceObject.itemShorthand,

  /** The HTML input name. */
  name: Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string,

  /**
   * Called when the user attempts to change the checked state.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed checked/indeterminate state.
   */
  onChange: Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func,

  /**
   * Called when the checkbox or label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onClick: Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func,

  /**
   * Called when the user presses down on the mouse.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onMouseDown: Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func,

  /** Format as a radio element. This means it is an exclusive option. */
  radio: customPropTypes_namespaceObject.every([Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool, customPropTypes_namespaceObject.disallow(['slider', 'toggle'])]),

  /** A checkbox can be read-only and unable to change states. */
  readOnly: Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Format to emphasize the current selection state. */
  slider: customPropTypes_namespaceObject.every([Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool, customPropTypes_namespaceObject.disallow(['radio', 'toggle'])]),

  /** A checkbox can receive focus. */
  tabIndex: Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.number, Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string]),

  /** Format to show an on or off choice. */
  toggle: customPropTypes_namespaceObject.every([Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool, customPropTypes_namespaceObject.disallow(['radio', 'slider'])]),

  /** HTML input type, either checkbox or radio. */
  type: Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(['checkbox', 'radio']),

  /** The HTML input value. */
  value: Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string, Checkbox___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.number])
} : void 0;
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Checkbox/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/addons/Radio/Radio.js
/* harmony import */ var Radio___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Radio___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Radio___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);






/**
 * A Radio is sugar for <Checkbox radio />.
 * Useful for exclusive groups of sliders or toggles.
 * @see Checkbox
 * @see Form
 */
function Radio(props) {
  var slider = props.slider,
      toggle = props.toggle,
      type = props.type;

  var rest = getUnhandledProps_defaultExport(Radio, props);
  // const ElementType = getElementType(Radio, props)
  // radio, slider, toggle are exclusive
  // use an undefined radio if slider or toggle are present
  var radio = !(slider || toggle) || undefined;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Checkbox_defaultExport, Radio___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { type: type, radio: radio, slider: slider, toggle: toggle }));
}

Radio.handledProps = ['slider', 'toggle', 'type'];
Radio._meta = {
  name: 'Radio',
  type: META_namespaceObject.TYPES.ADDON
};

 true ? Radio.propTypes = {
  /** Format to emphasize the current selection state. */
  slider: Checkbox_defaultExport.propTypes.slider,

  /** Format to show an on or off choice. */
  toggle: Checkbox_defaultExport.propTypes.toggle,

  /** HTML input type, either checkbox or radio. */
  type: Checkbox_defaultExport.propTypes.type
} : void 0;

Radio.defaultProps = {
  type: 'radio'
};

/* harmony default export */ var Radio_defaultExport = (Radio);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/addons/Radio/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Label/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownDivider.js
/* harmony import */ var DropdownDivider___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var DropdownDivider___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(DropdownDivider___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var DropdownDivider___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var DropdownDivider___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(DropdownDivider___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var DropdownDivider___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var DropdownDivider___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(DropdownDivider___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var DropdownDivider___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var DropdownDivider___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(DropdownDivider___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A dropdown menu can contain dividers to separate related content.
 */
function DropdownDivider(props) {
  var className = props.className;

  var classes = DropdownDivider___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('divider', className);
  var rest = getUnhandledProps_defaultExport(DropdownDivider, props);
  var ElementType = getElementType_defaultExport(DropdownDivider, props);

  return DropdownDivider___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, DropdownDivider___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }));
}

DropdownDivider.handledProps = ['as', 'className'];
DropdownDivider._meta = {
  name: 'DropdownDivider',
  parent: 'Dropdown',
  type: META_namespaceObject.TYPES.MODULE
};

 true ? DropdownDivider.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Additional classes. */
  className: DropdownDivider___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : void 0;

/* harmony default export */ var DropdownDivider_defaultExport = (DropdownDivider);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Flag/Flag.js
/* harmony import */ var Flag___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Flag___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Flag___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Flag___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var Flag___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(Flag___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var Flag___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var Flag___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(Flag___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var Flag___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var Flag___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(Flag___WEBPACK_IMPORTED_MODULE_3_react__);







var names = ['ad', 'andorra', 'ae', 'united arab emirates', 'uae', 'af', 'afghanistan', 'ag', 'antigua', 'ai', 'anguilla', 'al', 'albania', 'am', 'armenia', 'an', 'netherlands antilles', 'ao', 'angola', 'ar', 'argentina', 'as', 'american samoa', 'at', 'austria', 'au', 'australia', 'aw', 'aruba', 'ax', 'aland islands', 'az', 'azerbaijan', 'ba', 'bosnia', 'bb', 'barbados', 'bd', 'bangladesh', 'be', 'belgium', 'bf', 'burkina faso', 'bg', 'bulgaria', 'bh', 'bahrain', 'bi', 'burundi', 'bj', 'benin', 'bm', 'bermuda', 'bn', 'brunei', 'bo', 'bolivia', 'br', 'brazil', 'bs', 'bahamas', 'bt', 'bhutan', 'bv', 'bouvet island', 'bw', 'botswana', 'by', 'belarus', 'bz', 'belize', 'ca', 'canada', 'cc', 'cocos islands', 'cd', 'congo', 'cf', 'central african republic', 'cg', 'congo brazzaville', 'ch', 'switzerland', 'ci', 'cote divoire', 'ck', 'cook islands', 'cl', 'chile', 'cm', 'cameroon', 'cn', 'china', 'co', 'colombia', 'cr', 'costa rica', 'cs', 'cu', 'cuba', 'cv', 'cape verde', 'cx', 'christmas island', 'cy', 'cyprus', 'cz', 'czech republic', 'de', 'germany', 'dj', 'djibouti', 'dk', 'denmark', 'dm', 'dominica', 'do', 'dominican republic', 'dz', 'algeria', 'ec', 'ecuador', 'ee', 'estonia', 'eg', 'egypt', 'eh', 'western sahara', 'er', 'eritrea', 'es', 'spain', 'et', 'ethiopia', 'eu', 'european union', 'fi', 'finland', 'fj', 'fiji', 'fk', 'falkland islands', 'fm', 'micronesia', 'fo', 'faroe islands', 'fr', 'france', 'ga', 'gabon', 'gb', 'united kingdom', 'gd', 'grenada', 'ge', 'georgia', 'gf', 'french guiana', 'gh', 'ghana', 'gi', 'gibraltar', 'gl', 'greenland', 'gm', 'gambia', 'gn', 'guinea', 'gp', 'guadeloupe', 'gq', 'equatorial guinea', 'gr', 'greece', 'gs', 'sandwich islands', 'gt', 'guatemala', 'gu', 'guam', 'gw', 'guinea-bissau', 'gy', 'guyana', 'hk', 'hong kong', 'hm', 'heard island', 'hn', 'honduras', 'hr', 'croatia', 'ht', 'haiti', 'hu', 'hungary', 'id', 'indonesia', 'ie', 'ireland', 'il', 'israel', 'in', 'india', 'io', 'indian ocean territory', 'iq', 'iraq', 'ir', 'iran', 'is', 'iceland', 'it', 'italy', 'jm', 'jamaica', 'jo', 'jordan', 'jp', 'japan', 'ke', 'kenya', 'kg', 'kyrgyzstan', 'kh', 'cambodia', 'ki', 'kiribati', 'km', 'comoros', 'kn', 'saint kitts and nevis', 'kp', 'north korea', 'kr', 'south korea', 'kw', 'kuwait', 'ky', 'cayman islands', 'kz', 'kazakhstan', 'la', 'laos', 'lb', 'lebanon', 'lc', 'saint lucia', 'li', 'liechtenstein', 'lk', 'sri lanka', 'lr', 'liberia', 'ls', 'lesotho', 'lt', 'lithuania', 'lu', 'luxembourg', 'lv', 'latvia', 'ly', 'libya', 'ma', 'morocco', 'mc', 'monaco', 'md', 'moldova', 'me', 'montenegro', 'mg', 'madagascar', 'mh', 'marshall islands', 'mk', 'macedonia', 'ml', 'mali', 'mm', 'myanmar', 'burma', 'mn', 'mongolia', 'mo', 'macau', 'mp', 'northern mariana islands', 'mq', 'martinique', 'mr', 'mauritania', 'ms', 'montserrat', 'mt', 'malta', 'mu', 'mauritius', 'mv', 'maldives', 'mw', 'malawi', 'mx', 'mexico', 'my', 'malaysia', 'mz', 'mozambique', 'na', 'namibia', 'nc', 'new caledonia', 'ne', 'niger', 'nf', 'norfolk island', 'ng', 'nigeria', 'ni', 'nicaragua', 'nl', 'netherlands', 'no', 'norway', 'np', 'nepal', 'nr', 'nauru', 'nu', 'niue', 'nz', 'new zealand', 'om', 'oman', 'pa', 'panama', 'pe', 'peru', 'pf', 'french polynesia', 'pg', 'new guinea', 'ph', 'philippines', 'pk', 'pakistan', 'pl', 'poland', 'pm', 'saint pierre', 'pn', 'pitcairn islands', 'pr', 'puerto rico', 'ps', 'palestine', 'pt', 'portugal', 'pw', 'palau', 'py', 'paraguay', 'qa', 'qatar', 're', 'reunion', 'ro', 'romania', 'rs', 'serbia', 'ru', 'russia', 'rw', 'rwanda', 'sa', 'saudi arabia', 'sb', 'solomon islands', 'sc', 'seychelles', 'gb sct', 'scotland', 'sd', 'sudan', 'se', 'sweden', 'sg', 'singapore', 'sh', 'saint helena', 'si', 'slovenia', 'sj', 'svalbard', 'jan mayen', 'sk', 'slovakia', 'sl', 'sierra leone', 'sm', 'san marino', 'sn', 'senegal', 'so', 'somalia', 'sr', 'suriname', 'st', 'sao tome', 'sv', 'el salvador', 'sy', 'syria', 'sz', 'swaziland', 'tc', 'caicos islands', 'td', 'chad', 'tf', 'french territories', 'tg', 'togo', 'th', 'thailand', 'tj', 'tajikistan', 'tk', 'tokelau', 'tl', 'timorleste', 'tm', 'turkmenistan', 'tn', 'tunisia', 'to', 'tonga', 'tr', 'turkey', 'tt', 'trinidad', 'tv', 'tuvalu', 'tw', 'taiwan', 'tz', 'tanzania', 'ua', 'ukraine', 'ug', 'uganda', 'um', 'us minor islands', 'us', 'america', 'united states', 'uy', 'uruguay', 'uz', 'uzbekistan', 'va', 'vatican city', 'vc', 'saint vincent', 've', 'venezuela', 'vg', 'british virgin islands', 'vi', 'us virgin islands', 'vn', 'vietnam', 'vu', 'vanuatu', 'gb wls', 'wales', 'wf', 'wallis and futuna', 'ws', 'samoa', 'ye', 'yemen', 'yt', 'mayotte', 'za', 'south africa', 'zm', 'zambia', 'zw', 'zimbabwe'];

/**
 * A flag is is used to represent a political state.
 */
function Flag(props) {
  var className = props.className,
      name = props.name;

  var classes = Flag___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(name, 'flag', className);
  var rest = getUnhandledProps_defaultExport(Flag, props);
  var ElementType = getElementType_defaultExport(Flag, props);

  return Flag___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ElementType, Flag___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }));
}

Flag.handledProps = ['as', 'className', 'name'];
Flag._meta = {
  name: 'Flag',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? Flag.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Additional classes. */
  className: Flag___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Flag name, can use the two digit country code, the full name, or a common alias. */
  name: customPropTypes_namespaceObject.suggest(names)
} : void 0;

Flag.defaultProps = {
  as: 'i'
};

Flag.create = createShorthandFactory(Flag, function (value) {
  return { name: value };
});

/* harmony default export */ var Flag_defaultExport = (Flag);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Flag/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Image/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownItem.js
/* harmony import */ var DropdownItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var DropdownItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(DropdownItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var DropdownItem___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var DropdownItem___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(DropdownItem___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var DropdownItem___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var DropdownItem___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(DropdownItem___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var DropdownItem___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var DropdownItem___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(DropdownItem___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var DropdownItem___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var DropdownItem___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(DropdownItem___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isNil__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var DropdownItem___WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(542);
/* harmony import */ var DropdownItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(DropdownItem___WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var DropdownItem___WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(11);
/* harmony import */ var DropdownItem___WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(DropdownItem___WEBPACK_IMPORTED_MODULE_8_react__);

















/**
 * An item sub-component for Dropdown component.
 */

var DropdownItem_DropdownItem = function (_Component) {
  DropdownItem___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(DropdownItem, _Component);

  function DropdownItem() {
    var _ref;

    var _temp, _this, _ret;

    DropdownItem___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, DropdownItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = DropdownItem___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;


      if (onClick) onClick(e, _this.props);
    }, _temp), DropdownItem___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  DropdownItem___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(DropdownItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          content = _props.content,
          disabled = _props.disabled,
          description = _props.description,
          flag = _props.flag,
          icon = _props.icon,
          image = _props.image,
          label = _props.label,
          selected = _props.selected,
          text = _props.text;


      var classes = __WEBPACK_IMPORTED_MODULE_6_classnames___default.a(useKeyOnly(active, 'active'), useKeyOnly(disabled, 'disabled'), useKeyOnly(selected, 'selected'), 'item', className);
      // add default dropdown icon if item contains another menu
      var iconName = __WEBPACK_IMPORTED_MODULE_5_lodash_isNil___default.a(icon) ? childrenUtils_namespaceObject.someByType(children, 'DropdownMenu') && 'dropdown' : icon;
      var rest = getUnhandledProps_defaultExport(DropdownItem, this.props);
      var ElementType = getElementType_defaultExport(DropdownItem, this.props);
      var ariaOptions = {
        role: 'option',
        'aria-disabled': disabled,
        'aria-checked': active,
        'aria-selected': selected
      };

      if (!childrenUtils_namespaceObject.isNil(children)) {
        return DropdownItem___WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          ElementType,
          DropdownItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, ariaOptions, { className: classes, onClick: this.handleClick }),
          children
        );
      }

      var flagElement = Flag_defaultExport.create(flag);
      var iconElement = Icon_defaultExport.create(iconName);
      var imageElement = Image_defaultExport.create(image);
      var labelElement = Label_defaultExport.create(label);
      var descriptionElement = createShorthand('span', function (val) {
        return { children: val };
      }, description, { defaultProps: { className: 'description' } });
      var textElement = createShorthand('span', function (val) {
        return { children: val };
      }, content || text, { defaultProps: { className: 'text' } });

      return DropdownItem___WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        ElementType,
        DropdownItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, ariaOptions, { className: classes, onClick: this.handleClick }),
        imageElement,
        iconElement,
        flagElement,
        labelElement,
        descriptionElement,
        textElement
      );
    }
  }]);

  return DropdownItem;
}(DropdownItem___WEBPACK_IMPORTED_MODULE_8_react__["Component"]);

DropdownItem_DropdownItem._meta = {
  name: 'DropdownItem',
  parent: 'Dropdown',
  type: META_namespaceObject.TYPES.MODULE
};
DropdownItem_DropdownItem.handledProps = ['active', 'as', 'children', 'className', 'content', 'description', 'disabled', 'flag', 'icon', 'image', 'label', 'onClick', 'selected', 'text', 'value'];
 true ? DropdownItem_DropdownItem.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Style as the currently chosen item. */
  active: DropdownItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,

  /** Primary content. */
  children: DropdownItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.node,

  /** Additional classes. */
  className: DropdownItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** Additional text with less emphasis. */
  description: customPropTypes_namespaceObject.itemShorthand,

  /** A dropdown item can be disabled. */
  disabled: DropdownItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,

  /** Shorthand for Flag. */
  flag: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for Icon. */
  icon: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for Image. */
  image: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for Label. */
  label: customPropTypes_namespaceObject.itemShorthand,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: DropdownItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,

  /**
   * The item currently selected by keyboard shortcut.
   * This is not the active item.
   */
  selected: DropdownItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,

  /** Display text. */
  text: customPropTypes_namespaceObject.contentShorthand,

  /** Stored value. */
  value: DropdownItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOfType([DropdownItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number, DropdownItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string])
} : void 0;


DropdownItem_DropdownItem.create = createShorthandFactory(DropdownItem_DropdownItem, function (opts) {
  return opts;
});

/* harmony default export */ var DropdownItem_defaultExport = (DropdownItem_DropdownItem);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownHeader.js
/* harmony import */ var DropdownHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var DropdownHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(DropdownHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var DropdownHeader___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var DropdownHeader___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(DropdownHeader___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var DropdownHeader___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var DropdownHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(DropdownHeader___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var DropdownHeader___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var DropdownHeader___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(DropdownHeader___WEBPACK_IMPORTED_MODULE_3_react__);








/**
 * A dropdown menu can contain a header.
 */
function DropdownHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      icon = props.icon;


  var classes = DropdownHeader___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('header', className);
  var rest = getUnhandledProps_defaultExport(DropdownHeader, props);
  var ElementType = getElementType_defaultExport(DropdownHeader, props);

  if (!childrenUtils_namespaceObject.isNil(children)) return DropdownHeader___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    DropdownHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );

  return DropdownHeader___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    DropdownHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    Icon_defaultExport.create(icon),
    content
  );
}

DropdownHeader.handledProps = ['as', 'children', 'className', 'content', 'icon'];
DropdownHeader._meta = {
  name: 'DropdownHeader',
  parent: 'Dropdown',
  type: META_namespaceObject.TYPES.MODULE
};

 true ? DropdownHeader.propTypes = {
  /** An element type to render as (string or function) */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: DropdownHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: DropdownHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** Shorthand for Icon. */
  icon: customPropTypes_namespaceObject.itemShorthand
} : void 0;

DropdownHeader.create = createShorthandFactory(DropdownHeader, function (content) {
  return { content: content };
});

/* harmony default export */ var DropdownHeader_defaultExport = (DropdownHeader);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownMenu.js
/* harmony import */ var DropdownMenu___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var DropdownMenu___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(DropdownMenu___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var DropdownMenu___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var DropdownMenu___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(DropdownMenu___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var DropdownMenu___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var DropdownMenu___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(DropdownMenu___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var DropdownMenu___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var DropdownMenu___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(DropdownMenu___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A dropdown menu can contain a menu.
 */
function DropdownMenu(props) {
  var children = props.children,
      className = props.className,
      scrolling = props.scrolling;

  var classes = DropdownMenu___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(useKeyOnly(scrolling, 'scrolling'), 'menu transition', className);
  var rest = getUnhandledProps_defaultExport(DropdownMenu, props);
  var ElementType = getElementType_defaultExport(DropdownMenu, props);

  return DropdownMenu___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    DropdownMenu___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

DropdownMenu.handledProps = ['as', 'children', 'className', 'scrolling'];
DropdownMenu._meta = {
  name: 'DropdownMenu',
  parent: 'Dropdown',
  type: META_namespaceObject.TYPES.MODULE
};

 true ? DropdownMenu.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: DropdownMenu___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: DropdownMenu___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** A dropdown menu can scroll. */
  scrolling: DropdownMenu___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : void 0;

/* harmony default export */ var DropdownMenu_defaultExport = (DropdownMenu);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Dropdown/DropdownSearchInput.js
/* harmony import */ var DropdownSearchInput___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var DropdownSearchInput___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(DropdownSearchInput___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var DropdownSearchInput___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var DropdownSearchInput___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(DropdownSearchInput___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var DropdownSearchInput___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var DropdownSearchInput___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(DropdownSearchInput___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var DropdownSearchInput___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var DropdownSearchInput___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(DropdownSearchInput___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var DropdownSearchInput___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var DropdownSearchInput___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(DropdownSearchInput___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var DropdownSearchInput___WEBPACK_IMPORTED_MODULE_5_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var DropdownSearchInput___WEBPACK_IMPORTED_MODULE_5_lodash_invoke___default = __webpack_require__.n(DropdownSearchInput___WEBPACK_IMPORTED_MODULE_5_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_get__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_get__);
/* harmony import */ var DropdownSearchInput___WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(543);
/* harmony import */ var DropdownSearchInput___WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(DropdownSearchInput___WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var DropdownSearchInput___WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(542);
/* harmony import */ var DropdownSearchInput___WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(DropdownSearchInput___WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var DropdownSearchInput___WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(11);
/* harmony import */ var DropdownSearchInput___WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(DropdownSearchInput___WEBPACK_IMPORTED_MODULE_9_react__);














/**
 * A search item sub-component for Dropdown component.
 */

var DropdownSearchInput_DropdownSearchInput = function (_Component) {
  DropdownSearchInput___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(DropdownSearchInput, _Component);

  function DropdownSearchInput() {
    var _ref;

    var _temp, _this, _ret;

    DropdownSearchInput___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, DropdownSearchInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = DropdownSearchInput___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = DropdownSearchInput.__proto__ || Object.getPrototypeOf(DropdownSearchInput)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e) {
      var value = __WEBPACK_IMPORTED_MODULE_6_lodash_get___default.a(e, 'target.value');

      DropdownSearchInput___WEBPACK_IMPORTED_MODULE_5_lodash_invoke___default.a(_this.props, 'onChange', e, DropdownSearchInput___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, _this.props, { value: value }));
    }, _this.handleRef = function (c) {
      return DropdownSearchInput___WEBPACK_IMPORTED_MODULE_5_lodash_invoke___default.a(_this.props, 'inputRef', c);
    }, _temp), DropdownSearchInput___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  DropdownSearchInput___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(DropdownSearchInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          tabIndex = _props.tabIndex,
          type = _props.type,
          value = _props.value;

      var classes = DropdownSearchInput___WEBPACK_IMPORTED_MODULE_7_classnames___default.a('search', className);
      var rest = getUnhandledProps_defaultExport(DropdownSearchInput, this.props);

      return DropdownSearchInput___WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement('input', DropdownSearchInput___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, {
        'aria-autocomplete': 'list',
        autoComplete: 'off',
        className: classes,
        onChange: this.handleChange,
        ref: this.handleRef,
        tabIndex: tabIndex,
        type: type,
        value: value
      }));
    }
  }]);

  return DropdownSearchInput;
}(DropdownSearchInput___WEBPACK_IMPORTED_MODULE_9_react__["Component"]);

DropdownSearchInput_DropdownSearchInput.defaultProps = {
  type: 'text'
};
DropdownSearchInput_DropdownSearchInput._meta = {
  name: 'DropdownSearchInput',
  parent: 'Dropdown',
  type: META_namespaceObject.TYPES.MODULE
};
DropdownSearchInput_DropdownSearchInput.handledProps = ['as', 'className', 'inputRef', 'tabIndex', 'type', 'value'];
 true ? DropdownSearchInput_DropdownSearchInput.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Additional classes. */
  className: DropdownSearchInput___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,

  /** A ref handler for input. */
  inputRef: DropdownSearchInput___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /** An input can receive focus. */
  tabIndex: DropdownSearchInput___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([DropdownSearchInput___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.number, DropdownSearchInput___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string]),

  /** The HTML input type. */
  type: DropdownSearchInput___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,

  /** Stored value. */
  value: DropdownSearchInput___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([DropdownSearchInput___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.number, DropdownSearchInput___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string])
} : void 0;


DropdownSearchInput_DropdownSearchInput.create = createShorthandFactory(DropdownSearchInput_DropdownSearchInput, function (type) {
  return { type: type };
});

/* harmony default export */ var DropdownSearchInput_defaultExport = (DropdownSearchInput_DropdownSearchInput);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Dropdown/Dropdown.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var Dropdown___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Dropdown___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(Dropdown___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var Dropdown___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Dropdown___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Dropdown___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Dropdown___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Dropdown___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(Dropdown___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var Dropdown___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Dropdown___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Dropdown___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_compact__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_compact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_compact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_map__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_every__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_every___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_every__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_without__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_findIndex__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_findIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_findIndex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_find__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_reduce__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_some__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_some___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash_some__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_escapeRegExp__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_escapeRegExp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_lodash_escapeRegExp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_filter__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_lodash_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_isFunction__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_lodash_dropRight__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_lodash_dropRight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_lodash_dropRight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash_isEmpty__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash_union__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash_union___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_lodash_union__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_lodash_get__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_lodash_includes__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_lodash_isUndefined__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_lodash_has__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_lodash_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_lodash_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_lodash_isEqual__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_lodash_isNil__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_classnames__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_prop_types__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_react__);










































var Dropdown_debug = makeDebugger('dropdown');

var getKeyOrValue = function getKeyOrValue(key, value) {
  return __WEBPACK_IMPORTED_MODULE_27_lodash_isNil___default.a(key) ? value : key;
};

/**
 * A dropdown allows a user to select a value from a series of options.
 * @see Form
 * @see Select
 * @see Menu
 */

var Dropdown_Dropdown = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default.a(Dropdown, _Component);

  function Dropdown() {
    var _ref;

    var _temp, _this, _ret;

    Dropdown___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default.a(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Dropdown___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e, value) {
      Dropdown_debug('handleChange()', value);
      __WEBPACK_IMPORTED_MODULE_24_lodash_invoke___default.a(_this.props, 'onChange', e, Dropdown___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, _this.props, { value: value }));
    }, _this.closeOnChange = function (e) {
      var _this$props = _this.props,
          closeOnChange = _this$props.closeOnChange,
          multiple = _this$props.multiple;

      var shouldClose = __WEBPACK_IMPORTED_MODULE_23_lodash_isUndefined___default.a(closeOnChange) ? !multiple : closeOnChange;

      if (shouldClose) _this.close(e);
    }, _this.closeOnEscape = function (e) {
      if (keyboardKey_defaultExport.getCode(e) !== keyboardKey_defaultExport.Escape) return;
      e.preventDefault();
      _this.close();
    }, _this.moveSelectionOnKeyDown = function (e) {
      var _moves;

      Dropdown_debug('moveSelectionOnKeyDown()', keyboardKey_defaultExport.getName(e));

      var multiple = _this.props.multiple;

      var moves = (_moves = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default.a(_moves, keyboardKey_defaultExport.ArrowDown, 1), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default.a(_moves, keyboardKey_defaultExport.ArrowUp, -1), _moves);
      var move = moves[keyboardKey_defaultExport.getCode(e)];

      if (move === undefined) return;
      e.preventDefault();
      _this.moveSelectionBy(move);
      if (!multiple) _this.makeSelectedItemActive(e);
    }, _this.openOnSpace = function (e) {
      Dropdown_debug('openOnSpace()');

      if (keyboardKey_defaultExport.getCode(e) !== keyboardKey_defaultExport.Spacebar) return;
      if (_this.state.open) return;

      e.preventDefault();

      _this.open(e);
    }, _this.openOnArrow = function (e) {
      Dropdown_debug('openOnArrow()');

      var code = keyboardKey_defaultExport.getCode(e);
      if (!__WEBPACK_IMPORTED_MODULE_22_lodash_includes___default.a([keyboardKey_defaultExport.ArrowDown, keyboardKey_defaultExport.ArrowUp], code)) return;
      if (_this.state.open) return;

      e.preventDefault();

      _this.open(e);
    }, _this.makeSelectedItemActive = function (e) {
      var open = _this.state.open;
      var _this$props2 = _this.props,
          multiple = _this$props2.multiple,
          onAddItem = _this$props2.onAddItem;

      var item = _this.getSelectedItem();
      var value = __WEBPACK_IMPORTED_MODULE_21_lodash_get___default.a(item, 'value');

      // prevent selecting null if there was no selected item value
      // prevent selecting duplicate items when the dropdown is closed
      if (!value || !open) return;

      // notify the onAddItem prop if this is a new value
      if (onAddItem && item['data-additional']) {
        onAddItem(e, Dropdown___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, _this.props, { value: value }));
      }
      // notify the onChange prop that the user is trying to change value
      if (multiple) {
        // state value may be undefined
        var newValue = __WEBPACK_IMPORTED_MODULE_20_lodash_union___default.a(_this.state.value, [value]);
        _this.setValue(newValue);
        _this.handleChange(e, newValue);
      } else {
        _this.setValue(value);
        _this.handleChange(e, value);
      }
    }, _this.selectItemOnEnter = function (e) {
      Dropdown_debug('selectItemOnEnter()', keyboardKey_defaultExport.getName(e));
      var search = _this.props.search;


      if (keyboardKey_defaultExport.getCode(e) !== keyboardKey_defaultExport.Enter) return;
      e.preventDefault();

      if (search && __WEBPACK_IMPORTED_MODULE_19_lodash_isEmpty___default.a(_this.getMenuOptions())) return;
      _this.makeSelectedItemActive(e);
      _this.closeOnChange(e);
    }, _this.removeItemOnBackspace = function (e) {
      Dropdown_debug('removeItemOnBackspace()');
      Dropdown_debug(keyboardKey_defaultExport.getName(e));
      if (keyboardKey_defaultExport.getCode(e) !== keyboardKey_defaultExport.Backspace) return;

      var _this$props3 = _this.props,
          multiple = _this$props3.multiple,
          search = _this$props3.search;
      var _this$state = _this.state,
          searchQuery = _this$state.searchQuery,
          value = _this$state.value;


      if (searchQuery || !search || !multiple || __WEBPACK_IMPORTED_MODULE_19_lodash_isEmpty___default.a(value)) return;

      e.preventDefault();

      // remove most recent value
      var newValue = __WEBPACK_IMPORTED_MODULE_18_lodash_dropRight___default.a(value);

      _this.setValue(newValue);
      _this.handleChange(e, newValue);
    }, _this.closeOnDocumentClick = function (e) {
      Dropdown_debug('closeOnDocumentClick()');
      Dropdown_debug(e);

      // If event happened in the dropdown, ignore it
      if (_this.ref && __WEBPACK_IMPORTED_MODULE_17_lodash_isFunction___default.a(_this.ref.contains) && _this.ref.contains(e.target)) return;

      _this.close();
    }, _this.handleMouseDown = function (e) {
      Dropdown_debug('handleMouseDown()');

      _this.isMouseDown = true;
      __WEBPACK_IMPORTED_MODULE_24_lodash_invoke___default.a(_this.props, 'onMouseDown', e, _this.props);
      // Do not access document when server side rendering
      if (isBrowser_defaultExport) document.addEventListener('mouseup', _this.handleDocumentMouseUp);
    }, _this.handleDocumentMouseUp = function () {
      Dropdown_debug('handleDocumentMouseUp()');

      _this.isMouseDown = false;
      // Do not access document when server side rendering
      if (isBrowser_defaultExport) document.removeEventListener('mouseup', _this.handleDocumentMouseUp);
    }, _this.handleClick = function (e) {
      Dropdown_debug('handleClick()', e);

      var _this$props4 = _this.props,
          minCharacters = _this$props4.minCharacters,
          search = _this$props4.search;
      var _this$state2 = _this.state,
          open = _this$state2.open,
          searchQuery = _this$state2.searchQuery;


      __WEBPACK_IMPORTED_MODULE_24_lodash_invoke___default.a(_this.props, 'onClick', e, _this.props);
      // prevent closeOnDocumentClick()
      e.stopPropagation();

      if (!search) return _this.toggle(e);
      if (open) return;
      if (searchQuery.length >= minCharacters || minCharacters === 1) _this.open(e);
    }, _this.handleItemClick = function (e, item) {
      Dropdown_debug('handleItemClick()');
      Dropdown_debug(item);
      var _this$props5 = _this.props,
          multiple = _this$props5.multiple,
          onAddItem = _this$props5.onAddItem;
      var value = item.value;

      // prevent toggle() in handleClick()

      e.stopPropagation();
      // prevent closeOnDocumentClick() if multiple or item is disabled
      if (multiple || item.disabled) {
        e.nativeEvent.stopImmediatePropagation();
      }

      if (item.disabled) return;

      // notify the onAddItem prop if this is a new value
      if (onAddItem && item['data-additional']) {
        onAddItem(e, Dropdown___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, _this.props, { value: value }));
      }

      // notify the onChange prop that the user is trying to change value
      if (multiple) {
        var newValue = __WEBPACK_IMPORTED_MODULE_20_lodash_union___default.a(_this.state.value, [value]);
        _this.setValue(newValue);
        _this.handleChange(e, newValue);
      } else {
        _this.setValue(value);
        _this.handleChange(e, value);
      }
      _this.closeOnChange(e);
    }, _this.handleFocus = function (e) {
      Dropdown_debug('handleFocus()');
      var focus = _this.state.focus;


      if (focus) return;

      __WEBPACK_IMPORTED_MODULE_24_lodash_invoke___default.a(_this.props, 'onFocus', e, _this.props);
      _this.setState({ focus: true });
    }, _this.handleBlur = function (e) {
      Dropdown_debug('handleBlur()');

      // Heads up! Don't remove this.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/1315
      var currentTarget = __WEBPACK_IMPORTED_MODULE_21_lodash_get___default.a(e, 'currentTarget');
      if (currentTarget && currentTarget.contains(document.activeElement)) return;

      var _this$props6 = _this.props,
          closeOnBlur = _this$props6.closeOnBlur,
          multiple = _this$props6.multiple,
          onBlur = _this$props6.onBlur,
          selectOnBlur = _this$props6.selectOnBlur;
      // do not "blur" when the mouse is down inside of the Dropdown

      if (_this.isMouseDown) return;
      if (onBlur) onBlur(e, _this.props);
      if (selectOnBlur && !multiple) {
        _this.makeSelectedItemActive(e);
        if (closeOnBlur) _this.close();
      }
      _this.setState({ focus: false, searchQuery: '' });
    }, _this.handleSearchChange = function (e, _ref2) {
      var value = _ref2.value;

      Dropdown_debug('handleSearchChange()');
      Dropdown_debug(value);

      // prevent propagating to this.props.onChange()
      e.stopPropagation();

      var minCharacters = _this.props.minCharacters;
      var open = _this.state.open;

      var newQuery = value;

      __WEBPACK_IMPORTED_MODULE_24_lodash_invoke___default.a(_this.props, 'onSearchChange', e, newQuery);
      _this.setState({
        selectedIndex: 0,
        searchQuery: newQuery
      });

      // open search dropdown on search query
      if (!open && newQuery.length >= minCharacters) {
        _this.open();
        return;
      }
      // close search dropdown if search query is too small
      if (open && minCharacters !== 1 && newQuery.length < minCharacters) _this.close();
    }, _this.getMenuOptions = function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.options;
      var _this$props7 = _this.props,
          multiple = _this$props7.multiple,
          search = _this$props7.search,
          allowAdditions = _this$props7.allowAdditions,
          additionPosition = _this$props7.additionPosition,
          additionLabel = _this$props7.additionLabel;
      var searchQuery = _this.state.searchQuery;


      var filteredOptions = options;

      // filter out active options
      if (multiple) {
        filteredOptions = __WEBPACK_IMPORTED_MODULE_16_lodash_filter___default.a(filteredOptions, function (opt) {
          return !__WEBPACK_IMPORTED_MODULE_22_lodash_includes___default.a(value, opt.value);
        });
      }

      // filter by search query
      if (search && searchQuery) {
        if (__WEBPACK_IMPORTED_MODULE_17_lodash_isFunction___default.a(search)) {
          filteredOptions = search(filteredOptions, searchQuery);
        } else {
          var re = new RegExp(__WEBPACK_IMPORTED_MODULE_15_lodash_escapeRegExp___default.a(searchQuery), 'i');
          filteredOptions = __WEBPACK_IMPORTED_MODULE_16_lodash_filter___default.a(filteredOptions, function (opt) {
            return re.test(opt.text);
          });
        }
      }

      // insert the "add" item
      if (allowAdditions && search && searchQuery && !__WEBPACK_IMPORTED_MODULE_14_lodash_some___default.a(filteredOptions, { text: searchQuery })) {
        var additionLabelElement = __WEBPACK_IMPORTED_MODULE_30_react___default.a.isValidElement(additionLabel) ? __WEBPACK_IMPORTED_MODULE_30_react___default.a.cloneElement(additionLabel, { key: 'addition-label' }) : additionLabel || '';

        var addItem = {
          key: 'addition',
          // by using an array, we can pass multiple elements, but when doing so
          // we must specify a `key` for React to know which one is which
          text: [additionLabelElement, __WEBPACK_IMPORTED_MODULE_30_react___default.a.createElement(
            'b',
            { key: 'addition-query' },
            searchQuery
          )],
          value: searchQuery,
          className: 'addition',
          'data-additional': true
        };
        if (additionPosition === 'top') filteredOptions.unshift(addItem);else filteredOptions.push(addItem);
      }

      return filteredOptions;
    }, _this.getSelectedItem = function () {
      var selectedIndex = _this.state.selectedIndex;

      var options = _this.getMenuOptions();

      return __WEBPACK_IMPORTED_MODULE_21_lodash_get___default.a(options, '[' + selectedIndex + ']');
    }, _this.getEnabledIndices = function (givenOptions) {
      var options = givenOptions || _this.getMenuOptions();

      return __WEBPACK_IMPORTED_MODULE_13_lodash_reduce___default.a(options, function (memo, item, index) {
        if (!item.disabled) memo.push(index);
        return memo;
      }, []);
    }, _this.getItemByValue = function (value) {
      var options = _this.props.options;


      return __WEBPACK_IMPORTED_MODULE_12_lodash_find___default.a(options, { value: value });
    }, _this.getMenuItemIndexByValue = function (value, givenOptions) {
      var options = givenOptions || _this.getMenuOptions();

      return __WEBPACK_IMPORTED_MODULE_11_lodash_findIndex___default.a(options, ['value', value]);
    }, _this.getDropdownAriaOptions = function (ElementType) {
      var _this$props8 = _this.props,
          loading = _this$props8.loading,
          disabled = _this$props8.disabled,
          search = _this$props8.search,
          multiple = _this$props8.multiple;
      var open = _this.state.open;

      var ariaOptions = {
        role: search ? 'combobox' : 'listbox',
        'aria-busy': loading,
        'aria-disabled': disabled,
        'aria-expanded': !!open
      };
      if (ariaOptions.role === 'listbox') {
        ariaOptions['aria-multiselectable'] = multiple;
      }
      return ariaOptions;
    }, _this.setValue = function (value) {
      Dropdown_debug('setValue()');
      Dropdown_debug('value', value);
      var newState = {
        searchQuery: ''
      };

      var _this$props9 = _this.props,
          multiple = _this$props9.multiple,
          search = _this$props9.search;

      if (multiple && search && _this.searchRef) _this.searchRef.focus();

      _this.trySetState({ value: value }, newState);
      _this.setSelectedIndex(value);
    }, _this.setSelectedIndex = function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
      var optionsProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.options;
      var multiple = _this.props.multiple;
      var selectedIndex = _this.state.selectedIndex;

      var options = _this.getMenuOptions(value, optionsProps);
      var enabledIndicies = _this.getEnabledIndices(options);

      var newSelectedIndex = void 0;

      // update the selected index
      if (!selectedIndex || selectedIndex < 0) {
        var firstIndex = enabledIndicies[0];

        // Select the currently active item, if none, use the first item.
        // Multiple selects remove active items from the list,
        // their initial selected index should be 0.
        newSelectedIndex = multiple ? firstIndex : _this.getMenuItemIndexByValue(value, options) || enabledIndicies[0];
      } else if (multiple) {
        // multiple selects remove options from the menu as they are made active
        // keep the selected index within range of the remaining items
        if (selectedIndex >= options.length - 1) {
          newSelectedIndex = enabledIndicies[enabledIndicies.length - 1];
        }
      } else {
        var activeIndex = _this.getMenuItemIndexByValue(value, options);

        // regular selects can only have one active item
        // set the selected index to the currently active item
        newSelectedIndex = __WEBPACK_IMPORTED_MODULE_22_lodash_includes___default.a(enabledIndicies, activeIndex) ? activeIndex : undefined;
      }

      if (!newSelectedIndex || newSelectedIndex < 0) {
        newSelectedIndex = enabledIndicies[0];
      }

      _this.setState({ selectedIndex: newSelectedIndex });
    }, _this.handleLabelClick = function (e, labelProps) {
      Dropdown_debug('handleLabelClick()');
      // prevent focusing search input on click
      e.stopPropagation();

      _this.setState({ selectedLabel: labelProps.value });

      var onLabelClick = _this.props.onLabelClick;

      if (onLabelClick) onLabelClick(e, labelProps);
    }, _this.handleLabelRemove = function (e, labelProps) {
      Dropdown_debug('handleLabelRemove()');
      // prevent focusing search input on click
      e.stopPropagation();
      var value = _this.state.value;

      var newValue = __WEBPACK_IMPORTED_MODULE_10_lodash_without___default.a(value, labelProps.value);
      Dropdown_debug('label props:', labelProps);
      Dropdown_debug('current value:', value);
      Dropdown_debug('remove value:', labelProps.value);
      Dropdown_debug('new value:', newValue);

      _this.setValue(newValue);
      _this.handleChange(e, newValue);
    }, _this.moveSelectionBy = function (offset) {
      var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.selectedIndex;

      Dropdown_debug('moveSelectionBy()');
      Dropdown_debug('offset: ' + offset);

      var options = _this.getMenuOptions();
      var lastIndex = options.length - 1;

      // Prevent infinite loop
      if (__WEBPACK_IMPORTED_MODULE_9_lodash_every___default.a(options, 'disabled')) return;

      // next is after last, wrap to beginning
      // next is before first, wrap to end
      var nextIndex = startIndex + offset;
      if (nextIndex > lastIndex) nextIndex = 0;else if (nextIndex < 0) nextIndex = lastIndex;

      if (options[nextIndex].disabled) return _this.moveSelectionBy(offset, nextIndex);

      _this.setState({ selectedIndex: nextIndex });
      _this.scrollSelectedItemIntoView();
    }, _this.handleSearchRef = function (c) {
      return _this.searchRef = c;
    }, _this.handleSizerRef = function (c) {
      return _this.sizerRef = c;
    }, _this.handleRef = function (c) {
      return _this.ref = c;
    }, _this.computeSearchInputTabIndex = function () {
      var _this$props10 = _this.props,
          disabled = _this$props10.disabled,
          tabIndex = _this$props10.tabIndex;


      if (!__WEBPACK_IMPORTED_MODULE_27_lodash_isNil___default.a(tabIndex)) return tabIndex;
      return disabled ? -1 : 0;
    }, _this.computeSearchInputWidth = function () {
      var searchQuery = _this.state.searchQuery;


      if (_this.sizerRef && searchQuery) {
        // resize the search input, temporarily show the sizer so we can measure it

        _this.sizerRef.style.display = 'inline';
        _this.sizerRef.textContent = searchQuery;
        var searchWidth = Math.ceil(_this.sizerRef.getBoundingClientRect().width);
        _this.sizerRef.style.removeProperty('display');

        return searchWidth;
      }
    }, _this.computeTabIndex = function () {
      var _this$props11 = _this.props,
          disabled = _this$props11.disabled,
          search = _this$props11.search,
          tabIndex = _this$props11.tabIndex;


      if (!__WEBPACK_IMPORTED_MODULE_27_lodash_isNil___default.a(tabIndex)) return tabIndex;
      // don't set a root node tabIndex as the search input has its own tabIndex
      if (!search) return disabled ? -1 : 0;
    }, _this.scrollSelectedItemIntoView = function () {
      Dropdown_debug('scrollSelectedItemIntoView()');
      if (!_this.ref) return;
      var menu = _this.ref.querySelector('.menu.visible');
      if (!menu) return;
      var item = menu.querySelector('.item.selected');
      if (!item) return;
      Dropdown_debug('menu: ' + menu);
      Dropdown_debug('item: ' + item);
      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;

      if (isOutOfUpperView) {
        menu.scrollTop = item.offsetTop;
      } else if (isOutOfLowerView) {
        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
      }
    }, _this.open = function (e) {
      Dropdown_debug('open()');

      var _this$props12 = _this.props,
          disabled = _this$props12.disabled,
          onOpen = _this$props12.onOpen,
          search = _this$props12.search;

      if (disabled) return;
      if (search && _this.searchRef) _this.searchRef.focus();
      if (onOpen) onOpen(e, _this.props);

      _this.trySetState({ open: true });
      _this.scrollSelectedItemIntoView();
    }, _this.close = function (e) {
      Dropdown_debug('close()');

      var onClose = _this.props.onClose;

      if (onClose) onClose(e, _this.props);

      _this.trySetState({ open: false });
    }, _this.handleClose = function () {
      Dropdown_debug('handleClose()');
      var hasSearchFocus = document.activeElement === _this.searchRef;
      var hasDropdownFocus = document.activeElement === _this.ref;
      var hasFocus = hasSearchFocus || hasDropdownFocus;
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/627
      // Blur the Dropdown on close so it is blurred after selecting an item.
      // This is to prevent it from re-opening when switching tabs after selecting an item.
      if (!hasSearchFocus) {
        _this.ref.blur();
      }

      // We need to keep the virtual model in sync with the browser focus change
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/692
      _this.setState({ focus: hasFocus });
    }, _this.toggle = function (e) {
      return _this.state.open ? _this.close(e) : _this.open(e);
    }, _this.renderText = function () {
      var _this$props13 = _this.props,
          multiple = _this$props13.multiple,
          placeholder = _this$props13.placeholder,
          search = _this$props13.search,
          text = _this$props13.text;
      var _this$state3 = _this.state,
          searchQuery = _this$state3.searchQuery,
          value = _this$state3.value,
          open = _this$state3.open;

      var hasValue = multiple ? !__WEBPACK_IMPORTED_MODULE_19_lodash_isEmpty___default.a(value) : !__WEBPACK_IMPORTED_MODULE_27_lodash_isNil___default.a(value) && value !== '';

      var classes = __WEBPACK_IMPORTED_MODULE_28_classnames___default.a(placeholder && !hasValue && 'default', 'text', search && searchQuery && 'filtered');
      var _text = placeholder;
      if (searchQuery) {
        _text = null;
      } else if (text) {
        _text = text;
      } else if (open && !multiple) {
        _text = __WEBPACK_IMPORTED_MODULE_21_lodash_get___default.a(_this.getSelectedItem(), 'text');
      } else if (hasValue) {
        _text = __WEBPACK_IMPORTED_MODULE_21_lodash_get___default.a(_this.getItemByValue(value), 'text');
      }

      return __WEBPACK_IMPORTED_MODULE_30_react___default.a.createElement(
        'div',
        { className: classes },
        _text
      );
    }, _this.renderSearchInput = function () {
      var _this$props14 = _this.props,
          search = _this$props14.search,
          searchInput = _this$props14.searchInput;
      var searchQuery = _this.state.searchQuery;


      if (!search) return null;
      return DropdownSearchInput_defaultExport.create(searchInput, { defaultProps: {
          inputRef: _this.handleSearchRef,
          onChange: _this.handleSearchChange,
          style: { width: _this.computeSearchInputWidth() },
          tabIndex: _this.computeSearchInputTabIndex(),
          value: searchQuery
        } });
    }, _this.renderSearchSizer = function () {
      var _this$props15 = _this.props,
          search = _this$props15.search,
          multiple = _this$props15.multiple;


      if (!(search && multiple)) return null;
      return __WEBPACK_IMPORTED_MODULE_30_react___default.a.createElement('span', { className: 'sizer', ref: _this.handleSizerRef });
    }, _this.renderLabels = function () {
      Dropdown_debug('renderLabels()');
      var _this$props16 = _this.props,
          multiple = _this$props16.multiple,
          renderLabel = _this$props16.renderLabel;
      var _this$state4 = _this.state,
          selectedLabel = _this$state4.selectedLabel,
          value = _this$state4.value;

      if (!multiple || __WEBPACK_IMPORTED_MODULE_19_lodash_isEmpty___default.a(value)) {
        return;
      }
      var selectedItems = __WEBPACK_IMPORTED_MODULE_8_lodash_map___default.a(value, _this.getItemByValue);
      Dropdown_debug('selectedItems', selectedItems);

      // if no item could be found for a given state value the selected item will be undefined
      // compact the selectedItems so we only have actual objects left
      return __WEBPACK_IMPORTED_MODULE_8_lodash_map___default.a(__WEBPACK_IMPORTED_MODULE_7_lodash_compact___default.a(selectedItems), function (item, index) {
        var defaultProps = {
          active: item.value === selectedLabel,
          as: 'a',
          key: getKeyOrValue(item.key, item.value),
          onClick: _this.handleLabelClick,
          onRemove: _this.handleLabelRemove,
          value: item.value
        };

        return Label_defaultExport.create(renderLabel(item, index, defaultProps), { defaultProps: defaultProps });
      });
    }, _this.renderOptions = function () {
      var _this$props17 = _this.props,
          multiple = _this$props17.multiple,
          search = _this$props17.search,
          noResultsMessage = _this$props17.noResultsMessage;
      var _this$state5 = _this.state,
          selectedIndex = _this$state5.selectedIndex,
          value = _this$state5.value;

      var options = _this.getMenuOptions();

      if (noResultsMessage !== null && search && __WEBPACK_IMPORTED_MODULE_19_lodash_isEmpty___default.a(options)) {
        return __WEBPACK_IMPORTED_MODULE_30_react___default.a.createElement(
          'div',
          { className: 'message' },
          noResultsMessage
        );
      }

      var isActive = multiple ? function (optValue) {
        return __WEBPACK_IMPORTED_MODULE_22_lodash_includes___default.a(value, optValue);
      } : function (optValue) {
        return optValue === value;
      };

      return __WEBPACK_IMPORTED_MODULE_8_lodash_map___default.a(options, function (opt, i) {
        return DropdownItem_defaultExport.create(Dropdown___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({
          active: isActive(opt.value),
          onClick: _this.handleItemClick,
          selected: selectedIndex === i
        }, opt, {
          key: getKeyOrValue(opt.key, opt.value),
          // Needed for handling click events on disabled items
          style: Dropdown___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, opt.style, { pointerEvents: 'all' })
        }));
      });
    }, _this.renderMenu = function () {
      var _this$props18 = _this.props,
          children = _this$props18.children,
          header = _this$props18.header;
      var open = _this.state.open;

      var menuClasses = open ? 'visible' : '';
      var ariaOptions = _this.getDropdownMenuAriaOptions();

      // single menu child
      if (!childrenUtils_namespaceObject.isNil(children)) {
        var menuChild = __WEBPACK_IMPORTED_MODULE_30_react__["Children"].only(children);
        var className = __WEBPACK_IMPORTED_MODULE_28_classnames___default.a(menuClasses, menuChild.props.className);

        return __WEBPACK_IMPORTED_MODULE_30_react__["cloneElement"](menuChild, Dropdown___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({ className: className }, ariaOptions));
      }

      return __WEBPACK_IMPORTED_MODULE_30_react___default.a.createElement(
        DropdownMenu_defaultExport,
        Dropdown___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, ariaOptions, { className: menuClasses }),
        DropdownHeader_defaultExport.create(header),
        _this.renderOptions()
      );
    }, _temp), Dropdown___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Dropdown___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default.a(Dropdown, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      Dropdown_debug('componentWillMount()');
      var _state = this.state,
          open = _state.open,
          value = _state.value;


      this.setValue(value);
      if (open) this.open();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !__WEBPACK_IMPORTED_MODULE_26_lodash_isEqual___default.a(nextProps, this.props) || !__WEBPACK_IMPORTED_MODULE_26_lodash_isEqual___default.a(nextState, this.state);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get___default.a(Dropdown.prototype.__proto__ || Object.getPrototypeOf(Dropdown.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
      Dropdown_debug('componentWillReceiveProps()');
      // TODO objectDiff still runs in prod, stop it
      Dropdown_debug('to props:', objectDiff(this.props, nextProps));

      /* eslint-disable no-console */
      if (true) {
        // in development, validate value type matches dropdown type
        var isNextValueArray = Array.isArray(nextProps.value);
        var hasValue = __WEBPACK_IMPORTED_MODULE_25_lodash_has___default.a(nextProps, 'value');

        if (hasValue && nextProps.multiple && !isNextValueArray) {
          console.error('Dropdown `value` must be an array when `multiple` is set.' + (' Received type: `' + Object.prototype.toString.call(nextProps.value) + '`.'));
        } else if (hasValue && !nextProps.multiple && isNextValueArray) {
          console.error('Dropdown `value` must not be an array when `multiple` is not set.' + ' Either set `multiple={true}` or use a string or number value.');
        }
      }
      /* eslint-enable no-console */

      if (!__WEBPACK_IMPORTED_MODULE_26_lodash_isEqual___default.a(nextProps.value, this.props.value)) {
        Dropdown_debug('value changed, setting', nextProps.value);
        this.setValue(nextProps.value);
      }

      if (!__WEBPACK_IMPORTED_MODULE_26_lodash_isEqual___default.a(nextProps.options, this.props.options)) {
        this.setSelectedIndex(undefined, nextProps.options);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // eslint-disable-line complexity
      Dropdown_debug('componentDidUpdate()');
      // TODO objectDiff still runs in prod, stop it
      Dropdown_debug('to state:', objectDiff(prevState, this.state));

      // Do not access document when server side rendering
      if (!isBrowser_defaultExport) return;

      // focused / blurred
      if (!prevState.focus && this.state.focus) {
        Dropdown_debug('dropdown focused');
        if (!this.isMouseDown) {
          var _props = this.props,
              minCharacters = _props.minCharacters,
              openOnFocus = _props.openOnFocus,
              search = _props.search;

          var openable = !search || search && minCharacters === 1;

          Dropdown_debug('mouse is not down, opening');
          if (openOnFocus && openable) this.open();
        }
        if (!this.state.open) {
          document.addEventListener('keydown', this.openOnArrow);
          document.addEventListener('keydown', this.openOnSpace);
        } else {
          document.addEventListener('keydown', this.moveSelectionOnKeyDown);
          document.addEventListener('keydown', this.selectItemOnEnter);
        }
        document.addEventListener('keydown', this.removeItemOnBackspace);
      } else if (prevState.focus && !this.state.focus) {
        Dropdown_debug('dropdown blurred');
        var closeOnBlur = this.props.closeOnBlur;

        if (!this.isMouseDown && closeOnBlur) {
          Dropdown_debug('mouse is not down and closeOnBlur=true, closing');
          this.close();
        }
        document.removeEventListener('keydown', this.openOnArrow);
        document.removeEventListener('keydown', this.openOnSpace);
        document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
        document.removeEventListener('keydown', this.selectItemOnEnter);
        document.removeEventListener('keydown', this.removeItemOnBackspace);
      }

      // opened / closed
      if (!prevState.open && this.state.open) {
        Dropdown_debug('dropdown opened');
        document.addEventListener('keydown', this.closeOnEscape);
        document.addEventListener('keydown', this.moveSelectionOnKeyDown);
        document.addEventListener('keydown', this.selectItemOnEnter);
        document.addEventListener('keydown', this.removeItemOnBackspace);
        document.addEventListener('click', this.closeOnDocumentClick);
        document.removeEventListener('keydown', this.openOnArrow);
        document.removeEventListener('keydown', this.openOnSpace);
        this.scrollSelectedItemIntoView();
      } else if (prevState.open && !this.state.open) {
        Dropdown_debug('dropdown closed');
        this.handleClose();
        document.removeEventListener('keydown', this.closeOnEscape);
        document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
        document.removeEventListener('keydown', this.selectItemOnEnter);
        document.removeEventListener('click', this.closeOnDocumentClick);
        if (!this.state.focus) {
          document.removeEventListener('keydown', this.removeItemOnBackspace);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      Dropdown_debug('componentWillUnmount()');

      // Do not access document when server side rendering
      if (!isBrowser_defaultExport) return;

      document.removeEventListener('keydown', this.openOnArrow);
      document.removeEventListener('keydown', this.openOnSpace);
      document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
      document.removeEventListener('keydown', this.selectItemOnEnter);
      document.removeEventListener('keydown', this.removeItemOnBackspace);
      document.removeEventListener('keydown', this.closeOnEscape);
      document.removeEventListener('click', this.closeOnDocumentClick);
    }

    // ----------------------------------------
    // Document Event Handlers
    // ----------------------------------------

    // onChange needs to receive a value
    // can't rely on props.value if we are controlled


    // ----------------------------------------
    // Component Event Handlers
    // ----------------------------------------

    // ----------------------------------------
    // Getters
    // ----------------------------------------

    // There are times when we need to calculate the options based on a value
    // that hasn't yet been persisted to state.

  }, {
    key: 'getDropdownMenuAriaOptions',
    value: function getDropdownMenuAriaOptions() {
      var _props2 = this.props,
          search = _props2.search,
          multiple = _props2.multiple;

      var ariaOptions = {};

      if (search) {
        ariaOptions['aria-multiselectable'] = multiple;
        ariaOptions.role = 'listbox';
      }
      return ariaOptions;
    }

    // ----------------------------------------
    // Setters
    // ----------------------------------------

    // ----------------------------------------
    // Refs
    // ----------------------------------------

    // ----------------------------------------
    // Helpers
    // ----------------------------------------

    // ----------------------------------------
    // Behavior
    // ----------------------------------------

    // ----------------------------------------
    // Render
    // ----------------------------------------

  }, {
    key: 'render',
    value: function render() {
      Dropdown_debug('render()');
      Dropdown_debug('props', this.props);
      Dropdown_debug('state', this.state);

      var _props3 = this.props,
          basic = _props3.basic,
          button = _props3.button,
          className = _props3.className,
          compact = _props3.compact,
          disabled = _props3.disabled,
          error = _props3.error,
          fluid = _props3.fluid,
          floating = _props3.floating,
          icon = _props3.icon,
          inline = _props3.inline,
          item = _props3.item,
          labeled = _props3.labeled,
          loading = _props3.loading,
          multiple = _props3.multiple,
          pointing = _props3.pointing,
          search = _props3.search,
          selection = _props3.selection,
          scrolling = _props3.scrolling,
          simple = _props3.simple,
          trigger = _props3.trigger,
          upward = _props3.upward;
      var open = this.state.open;

      // Classes

      var classes = __WEBPACK_IMPORTED_MODULE_28_classnames___default.a('ui', useKeyOnly(open, 'active visible'), useKeyOnly(disabled, 'disabled'), useKeyOnly(error, 'error'), useKeyOnly(loading, 'loading'), useKeyOnly(basic, 'basic'), useKeyOnly(button, 'button'), useKeyOnly(compact, 'compact'), useKeyOnly(fluid, 'fluid'), useKeyOnly(floating, 'floating'), useKeyOnly(inline, 'inline'),
      // TODO: consider augmentation to render Dropdowns as Button/Menu, solves icon/link item issues
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/401#issuecomment-240487229
      // TODO: the icon class is only required when a dropdown is a button
      // useKeyOnly(icon, 'icon'),
      useKeyOnly(labeled, 'labeled'), useKeyOnly(item, 'item'), useKeyOnly(multiple, 'multiple'), useKeyOnly(search, 'search'), useKeyOnly(selection, 'selection'), useKeyOnly(simple, 'simple'), useKeyOnly(scrolling, 'scrolling'), useKeyOnly(upward, 'upward'), useKeyOrValueAndKey(pointing, 'pointing'), 'dropdown', className);
      var rest = getUnhandledProps_defaultExport(Dropdown, this.props);
      var ElementType = getElementType_defaultExport(Dropdown, this.props);
      var ariaOptions = this.getDropdownAriaOptions(ElementType, this.props);

      return __WEBPACK_IMPORTED_MODULE_30_react___default.a.createElement(
        ElementType,
        Dropdown___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, rest, ariaOptions, {
          className: classes,
          onBlur: this.handleBlur,
          onClick: this.handleClick,
          onMouseDown: this.handleMouseDown,
          onFocus: this.handleFocus,
          onChange: this.handleChange,
          tabIndex: this.computeTabIndex(),
          ref: this.handleRef
        }),
        this.renderLabels(),
        this.renderSearchInput(),
        this.renderSearchSizer(),
        trigger || this.renderText(),
        Icon_defaultExport.create(icon),
        this.renderMenu()
      );
    }
  }]);

  return Dropdown;
}(AutoControlledComponent_defaultExport);

Dropdown_Dropdown.defaultProps = {
  additionLabel: 'Add ',
  additionPosition: 'top',
  closeOnBlur: true,
  icon: 'dropdown',
  minCharacters: 1,
  noResultsMessage: 'No results found.',
  openOnFocus: true,
  renderLabel: function renderLabel(_ref3) {
    var text = _ref3.text;
    return text;
  },
  searchInput: 'text',
  selectOnBlur: true
};
Dropdown_Dropdown.autoControlledProps = ['open', 'selectedLabel', 'value'];
Dropdown_Dropdown._meta = {
  name: 'Dropdown',
  type: META_namespaceObject.TYPES.MODULE
};
Dropdown_Dropdown.Divider = DropdownDivider_defaultExport;
Dropdown_Dropdown.Header = DropdownHeader_defaultExport;
Dropdown_Dropdown.Item = DropdownItem_defaultExport;
Dropdown_Dropdown.Menu = DropdownMenu_defaultExport;
Dropdown_Dropdown.SearchInput = DropdownSearchInput_defaultExport;
Dropdown_Dropdown.handledProps = ['additionLabel', 'additionPosition', 'allowAdditions', 'as', 'basic', 'button', 'children', 'className', 'closeOnBlur', 'closeOnChange', 'compact', 'defaultOpen', 'defaultSelectedLabel', 'defaultValue', 'disabled', 'error', 'floating', 'fluid', 'header', 'icon', 'inline', 'item', 'labeled', 'loading', 'minCharacters', 'multiple', 'noResultsMessage', 'onAddItem', 'onBlur', 'onChange', 'onClick', 'onClose', 'onFocus', 'onLabelClick', 'onMouseDown', 'onOpen', 'onSearchChange', 'open', 'openOnFocus', 'options', 'placeholder', 'pointing', 'renderLabel', 'scrolling', 'search', 'searchInput', 'selectOnBlur', 'selectedLabel', 'selection', 'simple', 'tabIndex', 'text', 'trigger', 'upward', 'value'];
/* harmony default export */ var Dropdown_defaultExport = (Dropdown_Dropdown);
 true ? Dropdown_Dropdown.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Label prefixed to an option added by a user. */
  additionLabel: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.element, __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.string]),

  /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
  additionPosition: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.oneOf(['top', 'bottom']),

  /**
   * Allow user additions to the list of options (boolean).
   * Requires the use of `selection`, `options` and `search`.
   */
  allowAdditions: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.demand(['options', 'selection', 'search']), __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool]),

  /** A Dropdown can reduce its complexity. */
  basic: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /** Format the Dropdown to appear as a button. */
  button: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /** Primary content. */
  children: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['options', 'selection']), customPropTypes_namespaceObject.givenProps({ children: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.any.isRequired }, __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.element.isRequired)]),

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.string,

  /** Whether or not the menu should close when the dropdown is blurred. */
  closeOnBlur: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /**
   * Whether or not the menu should close when a value is selected from the dropdown.
   * By default, multiple selection dropdowns will remain open on change, while single
   * selection dropdowns will close on change.
   */
  closeOnChange: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /** A compact dropdown has no minimum width. */
  compact: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /** Initial value of open. */
  defaultOpen: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /** Currently selected label in multi-select. */
  defaultSelectedLabel: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.demand(['multiple']), __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.string])]),

  /** Initial value or value array if multiple. */
  defaultValue: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.number]))]),

  /** A disabled dropdown menu or item does not allow user interaction. */
  disabled: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /** An errored dropdown can alert a user to a problem. */
  error: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /** A dropdown menu can contain floated content. */
  floating: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /** A dropdown can take the full width of its parent */
  fluid: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /** A dropdown menu can contain a header. */
  header: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.node,

  /** Shorthand for Icon. */
  icon: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.object]),

  /** A dropdown can be formatted to appear inline in other content. */
  inline: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /** A dropdown can be formatted as a Menu item. */
  item: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /** A dropdown can be labeled. */
  labeled: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /** A dropdown can show that it is currently loading data. */
  loading: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /** The minimum characters for a search to begin showing results. */
  minCharacters: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.number,

  /** A selection dropdown can allow multiple selections. */
  multiple: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /** Message to display when there are no results. */
  noResultsMessage: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.string,

  /**
   * Called when a user adds a new item. Use this to update the options list.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and the new item's value.
   */
  onAddItem: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.func,

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.func,

  /**
   * Called when the user attempts to change the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.func,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.func,

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.func,

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.func,

  /**
   * Called when a multi-select label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All label props.
   */
  onLabelClick: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.func,

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.func,

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {string} value - Current value of search input.
   */
  onSearchChange: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.func,

  /** Controls whether or not the dropdown menu is displayed. */
  open: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /** Whether or not the menu should open when the dropdown is focused. */
  openOnFocus: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['children']), __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.shape(DropdownItem_defaultExport.propTypes))]),

  /** Placeholder text. */
  placeholder: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.string,

  /** A dropdown can be formatted so that its menu is pointing. */
  pointing: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.oneOf(['left', 'right', 'top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right'])]),

  /**
   * Mapped over the active items and returns shorthand for the active item Labels.
   * Only applies to `multiple` Dropdowns.
   *
   * @param {object} item - A currently active dropdown item.
   * @param {number} index - The current index.
   * @param {object} defaultLabelProps - The default props for an active item Label.
   * @returns {*} Shorthand for a Label.
   */
  renderLabel: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.func,

  /** A dropdown can have its menu scroll. */
  scrolling: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /**
   * A selection dropdown can allow a user to search through a large list of choices.
   * Pass a function here to replace the default search.
   */
  search: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.func]),

  /** A shorthand for a search input. */
  searchInput: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.object]),

  // TODO 'searchInMenu' or 'search='in menu' or ???  How to handle this markup and functionality?

  /** Define whether the highlighted item should be selected on blur. */
  selectOnBlur: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /** Currently selected label in multi-select. */
  selectedLabel: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.demand(['multiple']), __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.number])]),

  /** A dropdown can be used to select between choices in a form. */
  selection: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['children']), customPropTypes_namespaceObject.demand(['options']), __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool]),

  /** A simple dropdown can open without Javascript. */
  simple: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool,

  /** A dropdown can receive focus. */
  tabIndex: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.string]),

  /** The text displayed in the dropdown, usually for the active item. */
  text: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.string,

  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['selection', 'text']), __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.node]),

  /** Current value or value array if multiple. Creates a controlled component. */
  value: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.number]))]),

  /** A dropdown can open upward. */
  upward: __WEBPACK_IMPORTED_MODULE_29_prop_types___default.a.bool
} : void 0;
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Dropdown/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/addons/Select/Select.js
/* harmony import */ var Select___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Select___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Select___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Select___WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(11);
/* harmony import */ var Select___WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(Select___WEBPACK_IMPORTED_MODULE_1_react__);






/**
 * A Select is sugar for <Dropdown selection />.
 * @see Dropdown
 * @see Form
 */
function Select(props) {
  return Select___WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Dropdown_defaultExport, Select___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, props, { selection: true }));
}

Select.handledProps = [];
Select._meta = {
  name: 'Select',
  type: META_namespaceObject.TYPES.ADDON
};

Select.Divider = Dropdown_defaultExport.Divider;
Select.Header = Dropdown_defaultExport.Header;
Select.Item = Dropdown_defaultExport.Item;
Select.Menu = Dropdown_defaultExport.Menu;

/* harmony default export */ var Select_defaultExport = (Select);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/addons/Select/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/addons/TextArea/TextArea.js
/* harmony import */ var TextArea___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var TextArea___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(TextArea___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var TextArea___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var TextArea___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(TextArea___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var TextArea___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var TextArea___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(TextArea___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var TextArea___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var TextArea___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(TextArea___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var TextArea___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var TextArea___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(TextArea___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_sum__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_sum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_sum__);
/* harmony import */ var TextArea___WEBPACK_IMPORTED_MODULE_6_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var TextArea___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default = __webpack_require__.n(TextArea___WEBPACK_IMPORTED_MODULE_6_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_get__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_get__);
/* harmony import */ var TextArea___WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(542);
/* harmony import */ var TextArea___WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(TextArea___WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var TextArea___WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(11);
/* harmony import */ var TextArea___WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(TextArea___WEBPACK_IMPORTED_MODULE_9_react__);














/**
 * A TextArea can be used to allow for extended user input.
 * @see Form
 */

var TextArea_TextArea = function (_Component) {
  TextArea___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(TextArea, _Component);

  function TextArea() {
    var _ref;

    var _temp, _this, _ret;

    TextArea___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, TextArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = TextArea___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.focus = function () {
      return _this.ref.focus();
    }, _this.handleChange = function (e) {
      var value = __WEBPACK_IMPORTED_MODULE_7_lodash_get___default.a(e, 'target.value');

      TextArea___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(_this.props, 'onChange', e, TextArea___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, _this.props, { value: value }));
      _this.updateHeight();
    }, _this.handleRef = function (c) {
      return _this.ref = c;
    }, _this.removeAutoHeightStyles = function () {
      _this.ref.style.height = null;
      _this.ref.style.resize = null;
    }, _this.updateHeight = function () {
      var autoHeight = _this.props.autoHeight;

      if (!_this.ref || !autoHeight) return;

      var _window$getComputedSt = window.getComputedStyle(_this.ref),
          borderBottomWidth = _window$getComputedSt.borderBottomWidth,
          borderTopWidth = _window$getComputedSt.borderTopWidth,
          lineHeight = _window$getComputedSt.lineHeight,
          minHeight = _window$getComputedSt.minHeight,
          paddingBottom = _window$getComputedSt.paddingBottom,
          paddingTop = _window$getComputedSt.paddingTop;

      var boxModelHeight = __WEBPACK_IMPORTED_MODULE_5_lodash_sum___default.a([borderBottomWidth, borderTopWidth, paddingBottom, paddingTop].map(function (x) {
        return parseFloat(x);
      }));
      var textRows = Math.max(_this.ref.rows, _this.ref.value.split('\n').length);
      var textHeight = parseFloat(lineHeight) * textRows;

      // respect style.minHeight
      _this.setState(function (prevState, props) {
        return {
          height: Math.max(parseFloat(minHeight), Math.ceil(boxModelHeight + textHeight)) + 'px'
        };
      });
    }, _temp), TextArea___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  TextArea___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(TextArea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateHeight();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // removed autoHeight
      if (!this.props.autoHeight && prevProps.autoHeight) {
        this.removeAutoHeightStyles();
      }
      // added autoHeight or value changed
      if (this.props.autoHeight && !prevProps.autoHeight || prevProps.value !== this.props.value) {
        this.updateHeight();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          autoHeight = _props.autoHeight,
          rows = _props.rows,
          style = _props.style,
          value = _props.value;
      var height = this.state.height;


      var rest = getUnhandledProps_defaultExport(TextArea, this.props);
      var ElementType = getElementType_defaultExport(TextArea, this.props);

      var resize = autoHeight ? 'none' : '';

      return TextArea___WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(ElementType, TextArea___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, {
        onChange: this.handleChange,
        ref: this.handleRef,
        rows: rows,
        style: TextArea___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({ height: height, resize: resize }, style),
        value: value
      }));
    }
  }]);

  return TextArea;
}(TextArea___WEBPACK_IMPORTED_MODULE_9_react__["Component"]);

TextArea_TextArea._meta = {
  name: 'TextArea',
  type: META_namespaceObject.TYPES.ADDON
};
TextArea_TextArea.defaultProps = {
  as: 'textarea',
  rows: 3
};
TextArea_TextArea.handledProps = ['as', 'autoHeight', 'onChange', 'rows', 'style', 'value'];
 true ? TextArea_TextArea.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Indicates whether height of the textarea fits the content or not. */
  autoHeight: TextArea___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /**
   * Called on change.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onChange: TextArea___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /** Indicates row count for a TextArea. */
  rows: TextArea___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([TextArea___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.number, TextArea___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string]),

  /** Custom TextArea style. */
  style: TextArea___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object,

  /** The value of the textarea. */
  value: TextArea___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([TextArea___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.number, TextArea___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string])
} : void 0;


/* harmony default export */ var TextArea_defaultExport = (TextArea_TextArea);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/addons/TextArea/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/behaviors/Visibility/Visibility.js
/* harmony import */ var Visibility___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Visibility___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Visibility___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Visibility___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Visibility___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Visibility___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Visibility___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Visibility___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(Visibility___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var Visibility___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Visibility___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Visibility___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Visibility___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Visibility___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(Visibility___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_forEach__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_forEach___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_forEach__);
/* harmony import */ var Visibility___WEBPACK_IMPORTED_MODULE_6_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var Visibility___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default = __webpack_require__.n(Visibility___WEBPACK_IMPORTED_MODULE_6_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_includes__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_includes__);
/* harmony import */ var Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(542);
/* harmony import */ var Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var Visibility___WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(11);
/* harmony import */ var Visibility___WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(Visibility___WEBPACK_IMPORTED_MODULE_9_react__);














/**
 * Visibility provides a set of callbacks for when a content appears in the viewport.
 */

var Visibility_Visibility = function (_Component) {
  Visibility___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(Visibility, _Component);

  function Visibility() {
    var _ref;

    var _temp, _this, _ret;

    Visibility___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, Visibility);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Visibility___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Visibility.__proto__ || Object.getPrototypeOf(Visibility)).call.apply(_ref, [this].concat(args))), _this), _this.calculations = {
      topPassed: false,
      bottomPassed: false,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false
    }, _this.firedCallbacks = [], _this.execute = function (callback, name) {
      var _this$props = _this.props,
          continuous = _this$props.continuous,
          once = _this$props.once;


      if (!callback) return;
      // Reverse callbacks aren't fired continuously
      if (_this.calculations[name] === false) return;

      // Always fire callback if continuous = true
      if (continuous) {
        callback(null, Visibility___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, _this.props, { calculations: _this.calculations }));
        return;
      }

      // If once = true, fire callback only if it wasn't fired before
      if (once) {
        if (!__WEBPACK_IMPORTED_MODULE_7_lodash_includes___default.a(_this.firedCallbacks, name)) {
          _this.firedCallbacks.push(name);
          callback(null, Visibility___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, _this.props, { calculations: _this.calculations }));
        }

        return;
      }

      // Fire callback only if the value changed
      if (_this.calculations[name] !== _this.oldCalculations[name]) {
        callback(null, Visibility___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, _this.props, { calculations: _this.calculations }));
      }
    }, _this.fireOnPassed = function () {
      var _this$calculations = _this.calculations,
          percentagePassed = _this$calculations.percentagePassed,
          pixelsPassed = _this$calculations.pixelsPassed;
      var onPassed = _this.props.onPassed;


      __WEBPACK_IMPORTED_MODULE_5_lodash_forEach___default.a(onPassed, function (callback, passed) {
        var pixelsValue = Number(passed);

        if (pixelsValue && pixelsPassed >= pixelsValue) {
          _this.execute(callback, passed);
          return;
        }

        var matchPercentage = ('' + passed).match(/^(\d+)%$/);
        if (!matchPercentage) return;

        var percentageValue = Number(matchPercentage[1]) / 100;
        if (percentagePassed >= percentageValue) _this.execute(callback, passed);
      });
    }, _this.handleRef = function (c) {
      return _this.ref = c;
    }, _this.handleScroll = function () {
      var _this$ref$getBounding = _this.ref.getBoundingClientRect(),
          bottom = _this$ref$getBounding.bottom,
          height = _this$ref$getBounding.height,
          top = _this$ref$getBounding.top,
          width = _this$ref$getBounding.width;

      var topPassed = top < 0;
      var bottomPassed = bottom < 0;

      var pixelsPassed = bottomPassed ? 0 : Math.max(top * -1, 0);
      var percentagePassed = pixelsPassed / height;

      var bottomVisible = bottom >= 0 && bottom <= window.innerHeight;
      var topVisible = top >= 0 && top <= window.innerHeight;

      var fits = topVisible && bottomVisible;
      var passing = topPassed && !bottomPassed;

      var onScreen = (topVisible || topPassed) && !bottomPassed;
      var offScreen = !onScreen;

      _this.oldCalculations = _this.calculations;
      _this.calculations = {
        bottomPassed: bottomPassed,
        bottomVisible: bottomVisible,
        fits: fits,
        height: height,
        passing: passing,
        percentagePassed: percentagePassed,
        pixelsPassed: pixelsPassed,
        offScreen: offScreen,
        onScreen: onScreen,
        topPassed: topPassed,
        topVisible: topVisible,
        width: width
      };

      _this.fireCallbacks();
    }, _temp), Visibility___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Visibility___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(Visibility, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref2) {
      var continuous = _ref2.continuous,
          once = _ref2.once;

      var cleanOut = continuous !== this.props.continuous || once !== this.props.once;
      if (cleanOut) this.firedCallbacks = [];
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'fireCallbacks',
    value: function fireCallbacks() {
      var _this2 = this;

      var _props = this.props,
          onBottomPassed = _props.onBottomPassed,
          onBottomPassedReverse = _props.onBottomPassedReverse,
          onBottomVisible = _props.onBottomVisible,
          onBottomVisibleReverse = _props.onBottomVisibleReverse,
          onPassing = _props.onPassing,
          onPassingReverse = _props.onPassingReverse,
          onTopPassed = _props.onTopPassed,
          onTopPassedReverse = _props.onTopPassedReverse,
          onTopVisible = _props.onTopVisible,
          onTopVisibleReverse = _props.onTopVisibleReverse,
          onOffScreen = _props.onOffScreen,
          onOnScreen = _props.onOnScreen;

      var callbacks = {
        bottomPassed: onBottomPassed,
        bottomVisible: onBottomVisible,
        passing: onPassing,
        offScreen: onOffScreen,
        onScreen: onOnScreen,
        topPassed: onTopPassed,
        topVisible: onTopVisible
      };
      var reverse = {
        bottomPassed: onBottomPassedReverse,
        bottomVisible: onBottomVisibleReverse,
        passing: onPassingReverse,
        topPassed: onTopPassedReverse,
        topVisible: onTopVisibleReverse
      };

      Visibility___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(this.props, 'onUpdate', null, Visibility___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, this.props, { calculations: this.calculations }));
      this.fireOnPassed();

      __WEBPACK_IMPORTED_MODULE_5_lodash_forEach___default.a(callbacks, function (callback, name) {
        return _this2.execute(callback, name);
      });
      __WEBPACK_IMPORTED_MODULE_5_lodash_forEach___default.a(reverse, function (callback, name) {
        return _this2.execute(callback, name);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      var ElementType = getElementType_defaultExport(Visibility, this.props);
      var rest = getUnhandledProps_defaultExport(Visibility, this.props);

      return Visibility___WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        ElementType,
        Visibility___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { ref: this.handleRef }),
        children
      );
    }
  }]);

  return Visibility;
}(Visibility___WEBPACK_IMPORTED_MODULE_9_react__["Component"]);

Visibility_Visibility.defaultProps = {
  continuous: false,
  once: true
};
Visibility_Visibility._meta = {
  name: 'Visibility',
  type: META_namespaceObject.TYPES.BEHAVIOR
};
Visibility_Visibility.handledProps = ['as', 'children', 'continuous', 'onBottomPassed', 'onBottomPassedReverse', 'onBottomVisible', 'onBottomVisibleReverse', 'onOffScreen', 'onOnScreen', 'onPassed', 'onPassing', 'onPassingReverse', 'onTopPassed', 'onTopPassedReverse', 'onTopVisible', 'onTopVisibleReverse', 'onUpdate', 'once'];
/* harmony default export */ var Visibility_defaultExport = (Visibility_Visibility);
 true ? Visibility_Visibility.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.node,

  /**
   * When set to true a callback will occur anytime an element passes a condition not just immediately after the
   * threshold is met.
   */
  continuous: Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /**
   * Element's bottom edge has passed top of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomPassed: Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /**
   * Element's bottom edge has not passed top of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomPassedReverse: Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /**
   * Element's bottom edge has passed bottom of screen
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomVisible: Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /**
   * Element's bottom edge has not passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomVisibleReverse: Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /** When set to false a callback will occur each time an element passes the threshold for a condition. */
  once: Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Element is not visible on the screen. */
  onPassed: Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object,

  /**
   * Any part of an element is visible on screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onPassing: Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /**
   * Element's top has not passed top of screen but bottom has.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onPassingReverse: Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /**
   * Element is not visible on the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onOffScreen: Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /**
   * Element is visible on the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onOnScreen: Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /**
   * Element's top edge has passed top of the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopPassed: Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /**
   * Element's top edge has not passed top of the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopPassedReverse: Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /**
   * Element's top edge has passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopVisible: Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /**
   * Element's top edge has not passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopVisibleReverse: Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /**
   * Element's top edge has passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUpdate: Visibility___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func
} : void 0;
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/behaviors/Visibility/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Breadcrumb/BreadcrumbDivider.js
/* harmony import */ var BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_1_lodash_isNil__ = __webpack_require__(549);
/* harmony import */ var BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_1_lodash_isNil___default = __webpack_require__.n(BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_1_lodash_isNil__);
/* harmony import */ var BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(543);
/* harmony import */ var BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(542);
/* harmony import */ var BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(11);
/* harmony import */ var BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_4_react__);










/**
 * A divider sub-component for Breadcrumb component.
 */
function BreadcrumbDivider(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      icon = props.icon;


  var classes = BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_2_classnames___default.a('divider', className);
  var rest = getUnhandledProps_defaultExport(BreadcrumbDivider, props);
  var ElementType = getElementType_defaultExport(BreadcrumbDivider, props);

  if (!BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_1_lodash_isNil___default.a(icon)) return Icon_defaultExport.create(icon, { defaultProps: BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }) });
  if (!BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_1_lodash_isNil___default.a(content)) return BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    ElementType,
    BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    content
  );

  return BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    ElementType,
    BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? '/' : children
  );
}

BreadcrumbDivider.handledProps = ['as', 'children', 'className', 'content', 'icon'];
BreadcrumbDivider._meta = {
  name: 'BreadcrumbDivider',
  type: META_namespaceObject.TYPES.COLLECTION,
  parent: 'Breadcrumb'
};

 true ? BreadcrumbDivider.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: BreadcrumbDivider___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** Render as an `Icon` component with `divider` class instead of a `div`. */
  icon: customPropTypes_namespaceObject.itemShorthand
} : void 0;

BreadcrumbDivider.create = createShorthandFactory(BreadcrumbDivider, function (icon) {
  return { icon: icon };
});

/* harmony default export */ var BreadcrumbDivider_defaultExport = (BreadcrumbDivider);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Breadcrumb/BreadcrumbSection.js
/* harmony import */ var BreadcrumbSection___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var BreadcrumbSection___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(BreadcrumbSection___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var BreadcrumbSection___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var BreadcrumbSection___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(BreadcrumbSection___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var BreadcrumbSection___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var BreadcrumbSection___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(BreadcrumbSection___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var BreadcrumbSection___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var BreadcrumbSection___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(BreadcrumbSection___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var BreadcrumbSection___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var BreadcrumbSection___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(BreadcrumbSection___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var BreadcrumbSection___WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(543);
/* harmony import */ var BreadcrumbSection___WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(BreadcrumbSection___WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var BreadcrumbSection___WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(542);
/* harmony import */ var BreadcrumbSection___WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(BreadcrumbSection___WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var BreadcrumbSection___WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(11);
/* harmony import */ var BreadcrumbSection___WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(BreadcrumbSection___WEBPACK_IMPORTED_MODULE_7_react__);











/**
 * A section sub-component for Breadcrumb component.
 */

var BreadcrumbSection_BreadcrumbSection = function (_Component) {
  BreadcrumbSection___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(BreadcrumbSection, _Component);

  function BreadcrumbSection() {
    var _ref;

    var _temp, _this, _ret;

    BreadcrumbSection___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, BreadcrumbSection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = BreadcrumbSection___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = BreadcrumbSection.__proto__ || Object.getPrototypeOf(BreadcrumbSection)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;


      if (onClick) onClick(e, _this.props);
    }, _temp), BreadcrumbSection___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  BreadcrumbSection___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(BreadcrumbSection, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          content = _props.content,
          href = _props.href,
          link = _props.link,
          onClick = _props.onClick;


      var classes = BreadcrumbSection___WEBPACK_IMPORTED_MODULE_5_classnames___default.a(useKeyOnly(active, 'active'), 'section', className);
      var rest = getUnhandledProps_defaultExport(BreadcrumbSection, this.props);
      var ElementType = getElementType_defaultExport(BreadcrumbSection, this.props, function () {
        if (link || onClick) return 'a';
      });

      return BreadcrumbSection___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        ElementType,
        BreadcrumbSection___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, href: href, onClick: this.handleClick }),
        childrenUtils_namespaceObject.isNil(children) ? content : children
      );
    }
  }]);

  return BreadcrumbSection;
}(BreadcrumbSection___WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

BreadcrumbSection_BreadcrumbSection._meta = {
  name: 'BreadcrumbSection',
  type: META_namespaceObject.TYPES.COLLECTION,
  parent: 'Breadcrumb'
};
BreadcrumbSection_BreadcrumbSection.handledProps = ['active', 'as', 'children', 'className', 'content', 'href', 'link', 'onClick'];
/* harmony default export */ var BreadcrumbSection_defaultExport = (BreadcrumbSection_BreadcrumbSection);
 true ? BreadcrumbSection_BreadcrumbSection.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Style as the currently active section. */
  active: BreadcrumbSection___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Primary content. */
  children: BreadcrumbSection___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node,

  /** Additional classes. */
  className: BreadcrumbSection___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['link']), BreadcrumbSection___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string]),

  /** Render as an `a` tag instead of a `div`. */
  link: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['href']), BreadcrumbSection___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool]),

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: BreadcrumbSection___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
} : void 0;


BreadcrumbSection_BreadcrumbSection.create = createShorthandFactory(BreadcrumbSection_BreadcrumbSection, function (content) {
  return { content: content, link: true };
});
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Breadcrumb/Breadcrumb.js
/* harmony import */ var Breadcrumb___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Breadcrumb___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Breadcrumb___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Breadcrumb___WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(544);
/* harmony import */ var Breadcrumb___WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(Breadcrumb___WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_each__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_each__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);












/**
 * A breadcrumb is used to show hierarchy between content.
 */
function Breadcrumb(props) {
  var children = props.children,
      className = props.className,
      divider = props.divider,
      icon = props.icon,
      sections = props.sections,
      size = props.size;


  var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default.a('ui', size, 'breadcrumb', className);
  var rest = getUnhandledProps_defaultExport(Breadcrumb, props);
  var ElementType = getElementType_defaultExport(Breadcrumb, props);

  if (!childrenUtils_namespaceObject.isNil(children)) return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    ElementType,
    Breadcrumb___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );

  var childElements = [];

  __WEBPACK_IMPORTED_MODULE_2_lodash_each___default.a(sections, function (section, index) {
    // section
    var breadcrumbElement = BreadcrumbSection_defaultExport.create(section);
    childElements.push(breadcrumbElement);

    // divider
    if (index !== sections.length - 1) {
      var key = breadcrumbElement.key + '_divider' || JSON.stringify(section);
      childElements.push(BreadcrumbDivider_defaultExport.create({ content: divider, icon: icon, key: key }));
    }
  });

  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    ElementType,
    Breadcrumb___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childElements
  );
}

Breadcrumb.handledProps = ['as', 'children', 'className', 'divider', 'icon', 'sections', 'size'];
Breadcrumb._meta = {
  name: 'Breadcrumb',
  type: META_namespaceObject.TYPES.COLLECTION
};

 true ? Breadcrumb.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /** Shorthand for primary content of the Breadcrumb.Divider. */
  divider: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['icon']), customPropTypes_namespaceObject.contentShorthand]),

  /** For use with the sections prop. Render as an `Icon` component with `divider` class instead of a `div` in
   *  Breadcrumb.Divider. */
  icon: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['divider']), customPropTypes_namespaceObject.itemShorthand]),

  /** Shorthand array of props for Breadcrumb.Section. */
  sections: customPropTypes_namespaceObject.collectionShorthand,

  /** Size of Breadcrumb. */
  size: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(Breadcrumb___WEBPACK_IMPORTED_MODULE_1_lodash_without___default.a(SUI_namespaceObject.SIZES, 'medium'))
} : void 0;

Breadcrumb.Divider = BreadcrumbDivider_defaultExport;
Breadcrumb.Section = BreadcrumbSection_defaultExport;

/* harmony default export */ var Breadcrumb_defaultExport = (Breadcrumb);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Breadcrumb/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Form/FormField.js
/* harmony import */ var FormField___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var FormField___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(FormField___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isNil__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isNil__);
/* harmony import */ var FormField___WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(543);
/* harmony import */ var FormField___WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(FormField___WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var FormField___WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(542);
/* harmony import */ var FormField___WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(FormField___WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var FormField___WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(11);
/* harmony import */ var FormField___WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(FormField___WEBPACK_IMPORTED_MODULE_5_react__);












/**
 * A field is a form element containing a label and an input.
 * @see Form
 * @see Button
 * @see Checkbox
 * @see Dropdown
 * @see Input
 * @see Radio
 * @see Select
 * @see Visibility
 */
function FormField(props) {
  var children = props.children,
      className = props.className,
      control = props.control,
      disabled = props.disabled,
      error = props.error,
      inline = props.inline,
      label = props.label,
      required = props.required,
      type = props.type,
      width = props.width;


  var classes = FormField___WEBPACK_IMPORTED_MODULE_3_classnames___default.a(useKeyOnly(disabled, 'disabled'), useKeyOnly(error, 'error'), useKeyOnly(inline, 'inline'), useKeyOnly(required, 'required'), classNameBuilders_useWidthProp(width, 'wide'), 'field', className);
  var rest = getUnhandledProps_defaultExport(FormField, props);
  var ElementType = getElementType_defaultExport(FormField, props);

  // ----------------------------------------
  // No Control
  // ----------------------------------------

  if (__WEBPACK_IMPORTED_MODULE_2_lodash_isNil___default.a(control)) {
    if (__WEBPACK_IMPORTED_MODULE_2_lodash_isNil___default.a(label)) return FormField___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      ElementType,
      FormField___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );

    return FormField___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      ElementType,
      FormField___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      createHTMLLabel(label)
    );
  }

  // ----------------------------------------
  // Checkbox/Radio Control
  // ----------------------------------------
  var controlProps = FormField___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { children: children, required: required, type: type

    // wrap HTML checkboxes/radios in the label
  });if (control === 'input' && (type === 'checkbox' || type === 'radio')) {
    return FormField___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      ElementType,
      { className: classes },
      FormField___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'label',
        null,
        FormField___WEBPACK_IMPORTED_MODULE_5_react__["createElement"](control, controlProps),
        ' ',
        label
      )
    );
  }

  // pass label prop to controls that support it
  if (control === Checkbox_defaultExport || control === Radio_defaultExport) {
    return FormField___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      ElementType,
      { className: classes },
      FormField___WEBPACK_IMPORTED_MODULE_5_react__["createElement"](control, FormField___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, controlProps, { label: label }))
    );
  }

  // ----------------------------------------
  // Other Control
  // ----------------------------------------

  return FormField___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    ElementType,
    { className: classes },
    createHTMLLabel(label, { defaultProps: {
        htmlFor: __WEBPACK_IMPORTED_MODULE_1_lodash_get___default.a(controlProps, 'id') }
    }),
    FormField___WEBPACK_IMPORTED_MODULE_5_react__["createElement"](control, controlProps)
  );
}

FormField.handledProps = ['as', 'children', 'className', 'control', 'disabled', 'error', 'inline', 'label', 'required', 'type', 'width'];
FormField._meta = {
  name: 'FormField',
  parent: 'Form',
  type: META_namespaceObject.TYPES.COLLECTION
};

 true ? FormField.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: FormField___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,

  /** Additional classes. */
  className: FormField___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /**
   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
   * Extra FormField props are passed to the control component.
   * Mutually exclusive with children.
   */
  control: customPropTypes_namespaceObject.some([FormField___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func, FormField___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['button', 'input', 'select', 'textarea'])]),

  /** Individual fields may be disabled. */
  disabled: FormField___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Individual fields may display an error state. */
  error: FormField___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A field can have its label next to instead of above it. */
  inline: FormField___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  // Heads Up!
  // Do not disallow children with `label` shorthand
  // The `control` might accept a `label` prop and `children`
  /** Mutually exclusive with children. */
  label: FormField___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([FormField___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node, FormField___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object]),

  /** A field can show that input is mandatory. */
  required: FormField___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Passed to the control component (i.e. <input type='password' />) */
  type: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.demand(['control'])]
  // don't strictly validate HTML types
  // a control might be passed that uses a `type` prop with unknown values
  // let the control validate if for us
  ),

  /** A field can specify its width in grid columns */
  width: FormField___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(SUI_namespaceObject.WIDTHS)
} : void 0;

/* harmony default export */ var FormField_defaultExport = (FormField);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Form/FormButton.js
/* harmony import */ var FormButton___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var FormButton___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(FormButton___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var FormButton___WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(11);
/* harmony import */ var FormButton___WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(FormButton___WEBPACK_IMPORTED_MODULE_1_react__);







/**
 * Sugar for <Form.Field control={Button} />.
 * @see Button
 * @see Form
 */
function FormButton(props) {
  var control = props.control;

  var rest = getUnhandledProps_defaultExport(FormButton, props);
  var ElementType = getElementType_defaultExport(FormButton, props);

  return FormButton___WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ElementType, FormButton___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { control: control }));
}

FormButton.handledProps = ['as', 'control'];
FormButton._meta = {
  name: 'FormButton',
  parent: 'Form',
  type: META_namespaceObject.TYPES.COLLECTION
};

 true ? FormButton.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A FormField control prop. */
  control: FormField_defaultExport.propTypes.control
} : void 0;

FormButton.defaultProps = {
  as: FormField_defaultExport,
  control: Button_defaultExport
};

/* harmony default export */ var FormButton_defaultExport = (FormButton);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Form/FormCheckbox.js
/* harmony import */ var FormCheckbox___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var FormCheckbox___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(FormCheckbox___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var FormCheckbox___WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(11);
/* harmony import */ var FormCheckbox___WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(FormCheckbox___WEBPACK_IMPORTED_MODULE_1_react__);







/**
 * Sugar for <Form.Field control={Checkbox} />.
 * @see Checkbox
 * @see Form
 */
function FormCheckbox(props) {
  var control = props.control;

  var rest = getUnhandledProps_defaultExport(FormCheckbox, props);
  var ElementType = getElementType_defaultExport(FormCheckbox, props);

  return FormCheckbox___WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ElementType, FormCheckbox___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { control: control }));
}

FormCheckbox.handledProps = ['as', 'control'];
FormCheckbox._meta = {
  name: 'FormCheckbox',
  parent: 'Form',
  type: META_namespaceObject.TYPES.COLLECTION
};

 true ? FormCheckbox.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A FormField control prop. */
  control: FormField_defaultExport.propTypes.control
} : void 0;

FormCheckbox.defaultProps = {
  as: FormField_defaultExport,
  control: Checkbox_defaultExport
};

/* harmony default export */ var FormCheckbox_defaultExport = (FormCheckbox);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Form/FormDropdown.js
/* harmony import */ var FormDropdown___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var FormDropdown___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(FormDropdown___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var FormDropdown___WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(11);
/* harmony import */ var FormDropdown___WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(FormDropdown___WEBPACK_IMPORTED_MODULE_1_react__);







/**
 * Sugar for <Form.Field control={Dropdown} />.
 * @see Dropdown
 * @see Form
 */
function FormDropdown(props) {
  var control = props.control;

  var rest = getUnhandledProps_defaultExport(FormDropdown, props);
  var ElementType = getElementType_defaultExport(FormDropdown, props);

  return FormDropdown___WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ElementType, FormDropdown___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { control: control }));
}

FormDropdown.handledProps = ['as', 'control'];
FormDropdown._meta = {
  name: 'FormDropdown',
  parent: 'Form',
  type: META_namespaceObject.TYPES.COLLECTION
};

 true ? FormDropdown.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A FormField control prop. */
  control: FormField_defaultExport.propTypes.control
} : void 0;

FormDropdown.defaultProps = {
  as: FormField_defaultExport,
  control: Dropdown_defaultExport
};

/* harmony default export */ var FormDropdown_defaultExport = (FormDropdown);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Form/FormGroup.js
/* harmony import */ var FormGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(96);
/* harmony import */ var FormGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(FormGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var FormGroup___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var FormGroup___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(FormGroup___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var FormGroup___WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(543);
/* harmony import */ var FormGroup___WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(FormGroup___WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var FormGroup___WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(542);
/* harmony import */ var FormGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(FormGroup___WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var FormGroup___WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(11);
/* harmony import */ var FormGroup___WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(FormGroup___WEBPACK_IMPORTED_MODULE_4_react__);








/**
 * A set of fields can appear grouped together.
 * @see Form
 */
function FormGroup(props) {
  var children = props.children,
      className = props.className,
      grouped = props.grouped,
      inline = props.inline,
      widths = props.widths;


  var classes = FormGroup___WEBPACK_IMPORTED_MODULE_2_classnames___default.a(useKeyOnly(grouped, 'grouped'), useKeyOnly(inline, 'inline'), classNameBuilders_useWidthProp(widths, null, true), 'fields', className);
  var rest = getUnhandledProps_defaultExport(FormGroup, props);
  var ElementType = getElementType_defaultExport(FormGroup, props);

  return FormGroup___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    ElementType,
    FormGroup___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

FormGroup.handledProps = ['as', 'children', 'className', 'grouped', 'inline', 'widths'];
FormGroup._meta = {
  name: 'FormGroup',
  parent: 'Form',
  type: META_namespaceObject.TYPES.COLLECTION
};

 true ? FormGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: FormGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: FormGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Fields can show related choices. */
  grouped: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['inline']), FormGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool]),

  /** Multiple fields may be inline in a row. */
  inline: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['grouped']), FormGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool]),

  /** Fields Groups can specify their width in grid columns or automatically divide fields to be equal width. */
  widths: FormGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf([].concat(FormGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default.a(SUI_namespaceObject.WIDTHS), ['equal']))
} : void 0;

/* harmony default export */ var FormGroup_defaultExport = (FormGroup);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Input/Input.js
/* harmony import */ var Input___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(71);
/* harmony import */ var Input___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(Input___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var Input___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Input___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(Input___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var Input___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Input___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Input___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Input___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Input___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(Input___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var Input___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Input___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Input___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Input___WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Input___WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(Input___WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_includes__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_map__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_get__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_isNil__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react__);





















/**
 * An Input is a field used to elicit a response from a user.
 * @see Button
 * @see Form
 * @see Icon
 * @see Label
 */

var Input_Input = function (_Component) {
  Input___WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default.a(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    Input___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default.a(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Input___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.computeIcon = function () {
      var _this$props = _this.props,
          loading = _this$props.loading,
          icon = _this$props.icon;


      if (!__WEBPACK_IMPORTED_MODULE_10_lodash_isNil___default.a(icon)) return icon;
      if (loading) return 'spinner';
    }, _this.computeTabIndex = function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;


      if (!__WEBPACK_IMPORTED_MODULE_10_lodash_isNil___default.a(tabIndex)) return tabIndex;
      if (disabled) return -1;
    }, _this.focus = function () {
      return _this.inputRef.focus();
    }, _this.handleChange = function (e) {
      var onChange = _this.props.onChange;

      var value = __WEBPACK_IMPORTED_MODULE_9_lodash_get___default.a(e, 'target.value');

      onChange(e, Input___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, _this.props, { value: value }));
    }, _this.handleChildOverrides = function (child, defaultProps) {
      return Input___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, defaultProps, child.props, {
        ref: function ref(c) {
          __WEBPACK_IMPORTED_MODULE_8_lodash_invoke___default.a(child, 'ref', c);
          _this.handleInputRef(c);
        }
      });
    }, _this.handleInputRef = function (c) {
      return _this.inputRef = c;
    }, _this.partitionProps = function () {
      var _this$props3 = _this.props,
          disabled = _this$props3.disabled,
          onChange = _this$props3.onChange,
          type = _this$props3.type;


      var tabIndex = _this.computeTabIndex();
      var unhandled = getUnhandledProps_defaultExport(Input, _this.props);

      var _partitionHTMLInputPr = partitionHTMLInputProps(unhandled),
          _partitionHTMLInputPr2 = Input___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default.a(_partitionHTMLInputPr, 2),
          htmlInputProps = _partitionHTMLInputPr2[0],
          rest = _partitionHTMLInputPr2[1];

      htmlInputProps.ref = _this.handleInputRef;
      htmlInputProps.type = type;

      if (disabled) htmlInputProps.disabled = disabled;
      if (onChange) htmlInputProps.onChange = _this.handleChange;
      if (tabIndex) htmlInputProps.tabIndex = tabIndex;

      return [htmlInputProps, rest];
    }, _temp), Input___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Input___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default.a(Input, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          action = _props.action,
          actionPosition = _props.actionPosition,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          error = _props.error,
          fluid = _props.fluid,
          focus = _props.focus,
          icon = _props.icon,
          iconPosition = _props.iconPosition,
          input = _props.input,
          inverted = _props.inverted,
          label = _props.label,
          labelPosition = _props.labelPosition,
          loading = _props.loading,
          size = _props.size,
          transparent = _props.transparent,
          type = _props.type;


      var classes = __WEBPACK_IMPORTED_MODULE_11_classnames___default.a('ui', size, useKeyOnly(disabled, 'disabled'), useKeyOnly(error, 'error'), useKeyOnly(fluid, 'fluid'), useKeyOnly(focus, 'focus'), useKeyOnly(inverted, 'inverted'), useKeyOnly(loading, 'loading'), useKeyOnly(transparent, 'transparent'), useValueAndKey(actionPosition, 'action') || useKeyOnly(action, 'action'), useValueAndKey(iconPosition, 'icon') || useKeyOnly(icon || loading, 'icon'), useValueAndKey(labelPosition, 'labeled') || useKeyOnly(label, 'labeled'), 'input', className);
      var ElementType = getElementType_defaultExport(Input, this.props);

      var _partitionProps = this.partitionProps(),
          _partitionProps2 = Input___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default.a(_partitionProps, 2),
          htmlInputProps = _partitionProps2[0],
          rest = _partitionProps2[1];

      // Render with children
      // ----------------------------------------


      if (!childrenUtils_namespaceObject.isNil(children)) {
        // add htmlInputProps to the `<input />` child
        var childElements = __WEBPACK_IMPORTED_MODULE_7_lodash_map___default.a(__WEBPACK_IMPORTED_MODULE_13_react__["Children"].toArray(children), function (child) {
          if (child.type !== 'input') return child;
          return __WEBPACK_IMPORTED_MODULE_13_react__["cloneElement"](child, _this2.handleChildOverrides(child, htmlInputProps));
        });

        return __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(
          ElementType,
          Input___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
          childElements
        );
      }

      // Render Shorthand
      // ----------------------------------------
      var actionElement = Button_defaultExport.create(action);
      var iconElement = Icon_defaultExport.create(this.computeIcon());
      var labelElement = Label_defaultExport.create(label, {
        defaultProps: {
          className: __WEBPACK_IMPORTED_MODULE_11_classnames___default.a('label',
          // add 'left|right corner'
          __WEBPACK_IMPORTED_MODULE_6_lodash_includes___default.a(labelPosition, 'corner') && labelPosition)
        }
      });

      return __WEBPACK_IMPORTED_MODULE_13_react___default.a.createElement(
        ElementType,
        Input___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
        actionPosition === 'left' && actionElement,
        iconPosition === 'left' && iconElement,
        labelPosition !== 'right' && labelElement,
        createHTMLInput(input || type, { defaultProps: htmlInputProps }),
        actionPosition !== 'left' && actionElement,
        iconPosition !== 'left' && iconElement,
        labelPosition === 'right' && labelElement
      );
    }
  }]);

  return Input;
}(__WEBPACK_IMPORTED_MODULE_13_react__["Component"]);

Input_Input.defaultProps = {
  type: 'text'
};
Input_Input._meta = {
  name: 'Input',
  type: META_namespaceObject.TYPES.ELEMENT
};
Input_Input.handledProps = ['action', 'actionPosition', 'as', 'children', 'className', 'disabled', 'error', 'fluid', 'focus', 'icon', 'iconPosition', 'input', 'inverted', 'label', 'labelPosition', 'loading', 'onChange', 'size', 'tabIndex', 'transparent', 'type'];
 true ? Input_Input.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** An Input can be formatted to alert the user to an action they may perform. */
  action: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool, customPropTypes_namespaceObject.itemShorthand]),

  /** An action can appear along side an Input on the left or right. */
  actionPosition: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(['left']),

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string,

  /** An Input field can show that it is disabled. */
  disabled: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** An Input field can show the data contains errors. */
  error: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** Take on the size of it's container. */
  fluid: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** An Input field can show a user is currently interacting with it. */
  focus: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** Optional Icon to display inside the Input. */
  icon: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool, customPropTypes_namespaceObject.itemShorthand]),

  /** An Icon can appear inside an Input on the left or right. */
  iconPosition: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(['left']),

  /** Shorthand for creating the HTML Input. */
  input: customPropTypes_namespaceObject.itemShorthand,

  /** Format to appear on dark backgrounds. */
  inverted: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** Optional Label to display along side the Input. */
  label: customPropTypes_namespaceObject.itemShorthand,

  /** A Label can appear outside an Input on the left or right. */
  labelPosition: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(['left', 'right', 'left corner', 'right corner']),

  /** An Icon Input field can show that it is currently loading data. */
  loading: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /**
   * Called on change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.func,

  /** An Input can vary in size. */
  size: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOf(SUI_namespaceObject.SIZES),

  /** An Input can receive focus. */
  tabIndex: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string]),

  /** Transparent Input has no background. */
  transparent: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.bool,

  /** The HTML input type. */
  type: __WEBPACK_IMPORTED_MODULE_12_prop_types___default.a.string
} : void 0;


Input_Input.create = createShorthandFactory(Input_Input, function (type) {
  return { type: type };
});

/* harmony default export */ var Input_defaultExport = (Input_Input);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Input/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Form/FormInput.js
/* harmony import */ var FormInput___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var FormInput___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(FormInput___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var FormInput___WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(11);
/* harmony import */ var FormInput___WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(FormInput___WEBPACK_IMPORTED_MODULE_1_react__);







/**
 * Sugar for <Form.Field control={Input} />.
 * @see Form
 * @see Input
 */
function FormInput(props) {
  var control = props.control;

  var rest = getUnhandledProps_defaultExport(FormInput, props);
  var ElementType = getElementType_defaultExport(FormInput, props);

  return FormInput___WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ElementType, FormInput___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { control: control }));
}

FormInput.handledProps = ['as', 'control'];
FormInput._meta = {
  name: 'FormInput',
  parent: 'Form',
  type: META_namespaceObject.TYPES.COLLECTION
};

 true ? FormInput.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A FormField control prop. */
  control: FormField_defaultExport.propTypes.control
} : void 0;

FormInput.defaultProps = {
  as: FormField_defaultExport,
  control: Input_defaultExport
};

/* harmony default export */ var FormInput_defaultExport = (FormInput);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Form/FormRadio.js
/* harmony import */ var FormRadio___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var FormRadio___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(FormRadio___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var FormRadio___WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(11);
/* harmony import */ var FormRadio___WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(FormRadio___WEBPACK_IMPORTED_MODULE_1_react__);







/**
 * Sugar for <Form.Field control={Radio} />.
 * @see Form
 * @see Radio
 */
function FormRadio(props) {
  var control = props.control;

  var rest = getUnhandledProps_defaultExport(FormRadio, props);
  var ElementType = getElementType_defaultExport(FormRadio, props);

  return FormRadio___WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ElementType, FormRadio___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { control: control }));
}

FormRadio.handledProps = ['as', 'control'];
FormRadio._meta = {
  name: 'FormRadio',
  parent: 'Form',
  type: META_namespaceObject.TYPES.COLLECTION
};

 true ? FormRadio.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A FormField control prop. */
  control: FormField_defaultExport.propTypes.control
} : void 0;

FormRadio.defaultProps = {
  as: FormField_defaultExport,
  control: Radio_defaultExport
};

/* harmony default export */ var FormRadio_defaultExport = (FormRadio);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Form/FormSelect.js
/* harmony import */ var FormSelect___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var FormSelect___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(FormSelect___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var FormSelect___WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(11);
/* harmony import */ var FormSelect___WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(FormSelect___WEBPACK_IMPORTED_MODULE_1_react__);







/**
 * Sugar for <Form.Field control={Select} />.
 * @see Form
 * @see Select
 */
function FormSelect(props) {
  var control = props.control;

  var rest = getUnhandledProps_defaultExport(FormSelect, props);
  var ElementType = getElementType_defaultExport(FormSelect, props);

  return FormSelect___WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ElementType, FormSelect___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { control: control }));
}

FormSelect.handledProps = ['as', 'control'];
FormSelect._meta = {
  name: 'FormSelect',
  parent: 'Form',
  type: META_namespaceObject.TYPES.COLLECTION
};

 true ? FormSelect.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A FormField control prop. */
  control: FormField_defaultExport.propTypes.control
} : void 0;

FormSelect.defaultProps = {
  as: FormField_defaultExport,
  control: Select_defaultExport
};

/* harmony default export */ var FormSelect_defaultExport = (FormSelect);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Form/FormTextArea.js
/* harmony import */ var FormTextArea___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var FormTextArea___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(FormTextArea___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var FormTextArea___WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(11);
/* harmony import */ var FormTextArea___WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(FormTextArea___WEBPACK_IMPORTED_MODULE_1_react__);







/**
 * Sugar for <Form.Field control={TextArea} />.
 * @see Form
 * @see TextArea
 */
function FormTextArea(props) {
  var control = props.control;

  var rest = getUnhandledProps_defaultExport(FormTextArea, props);
  var ElementType = getElementType_defaultExport(FormTextArea, props);

  return FormTextArea___WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ElementType, FormTextArea___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { control: control }));
}

FormTextArea.handledProps = ['as', 'control'];
FormTextArea._meta = {
  name: 'FormTextArea',
  parent: 'Form',
  type: META_namespaceObject.TYPES.COLLECTION
};

 true ? FormTextArea.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A FormField control prop. */
  control: FormField_defaultExport.propTypes.control
} : void 0;

FormTextArea.defaultProps = {
  as: FormField_defaultExport,
  control: TextArea_defaultExport
};

/* harmony default export */ var FormTextArea_defaultExport = (FormTextArea);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Form/Form.js
/* harmony import */ var Form___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Form___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Form___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Form___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Form___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Form___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Form___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Form___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(Form___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var Form___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Form___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Form___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Form___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Form___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(Form___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var Form___WEBPACK_IMPORTED_MODULE_5_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var Form___WEBPACK_IMPORTED_MODULE_5_lodash_invoke___default = __webpack_require__.n(Form___WEBPACK_IMPORTED_MODULE_5_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_without__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_without__);
/* harmony import */ var Form___WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(543);
/* harmony import */ var Form___WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(Form___WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var Form___WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(542);
/* harmony import */ var Form___WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(Form___WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var Form___WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(11);
/* harmony import */ var Form___WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(Form___WEBPACK_IMPORTED_MODULE_9_react__);























/**
 * A Form displays a set of related user input fields in a structured way.
 * @see Button
 * @see Checkbox
 * @see Dropdown
 * @see Input
 * @see Message
 * @see Radio
 * @see Select
 * @see Visibility
 */

var Form_Form = function (_Component) {
  Form___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    Form___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Form___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), Form__initialiseProps.call(_this), _temp), Form___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Form___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(Form, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          error = _props.error,
          inverted = _props.inverted,
          loading = _props.loading,
          reply = _props.reply,
          size = _props.size,
          success = _props.success,
          warning = _props.warning,
          widths = _props.widths;


      var classes = Form___WEBPACK_IMPORTED_MODULE_7_classnames___default.a('ui', size, useKeyOnly(error, 'error'), useKeyOnly(inverted, 'inverted'), useKeyOnly(loading, 'loading'), useKeyOnly(reply, 'reply'), useKeyOnly(success, 'success'), useKeyOnly(warning, 'warning'), classNameBuilders_useWidthProp(widths, null, true), 'form', className);
      var rest = getUnhandledProps_defaultExport(Form, this.props);
      var ElementType = getElementType_defaultExport(Form, this.props);

      return Form___WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        ElementType,
        Form___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, onSubmit: this.handleSubmit }),
        children
      );
    }
  }]);

  return Form;
}(Form___WEBPACK_IMPORTED_MODULE_9_react__["Component"]);

Form_Form.defaultProps = {
  as: 'form'
};
Form_Form._meta = {
  name: 'Form',
  type: META_namespaceObject.TYPES.COLLECTION
};
Form_Form.Field = FormField_defaultExport;
Form_Form.Button = FormButton_defaultExport;
Form_Form.Checkbox = FormCheckbox_defaultExport;
Form_Form.Dropdown = FormDropdown_defaultExport;
Form_Form.Group = FormGroup_defaultExport;
Form_Form.Input = FormInput_defaultExport;
Form_Form.Radio = FormRadio_defaultExport;
Form_Form.Select = FormSelect_defaultExport;
Form_Form.TextArea = FormTextArea_defaultExport;
Form_Form.handledProps = ['action', 'as', 'children', 'className', 'error', 'inverted', 'loading', 'onSubmit', 'reply', 'size', 'success', 'warning', 'widths'];

var Form__initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleSubmit = function (e) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var action = _this2.props.action;

    // Heads up! Third party libs can pass own data as first argument, we need to check that it has preventDefault()
    // method.

    if (!action) Form___WEBPACK_IMPORTED_MODULE_5_lodash_invoke___default.a(e, 'preventDefault');
    Form___WEBPACK_IMPORTED_MODULE_5_lodash_invoke___default.a.apply(undefined, [_this2.props, 'onSubmit', e, _this2.props].concat(args));
  };
};

 true ? Form_Form.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** The HTML form action */
  action: Form___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,

  /** Primary content. */
  children: Form___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.node,

  /** Additional classes. */
  className: Form___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,

  /** Automatically show any error Message children. */
  error: Form___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A form can have its color inverted for contrast. */
  inverted: Form___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Automatically show a loading indicator. */
  loading: Form___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** The HTML form submit handler. */
  onSubmit: Form___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /** A comment can contain a form to reply to a comment. This may have arbitrary content. */
  reply: Form___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A form can vary in size. */
  size: Form___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_6_lodash_without___default.a(SUI_namespaceObject.SIZES, 'medium')),

  /** Automatically show any success Message children. */
  success: Form___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Automatically show any warning Message children .*/
  warning: Form___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Forms can automatically divide fields to be equal width. */
  widths: Form___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(['equal'])
} : void 0;


/* harmony default export */ var Form_defaultExport = (Form_Form);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Form/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Grid/GridColumn.js
/* harmony import */ var GridColumn___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var GridColumn___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(GridColumn___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var GridColumn___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var GridColumn___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(GridColumn___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var GridColumn___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var GridColumn___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(GridColumn___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var GridColumn___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var GridColumn___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(GridColumn___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A column sub-component for Grid.
 */
function GridColumn(props) {
  var children = props.children,
      className = props.className,
      computer = props.computer,
      color = props.color,
      floated = props.floated,
      largeScreen = props.largeScreen,
      mobile = props.mobile,
      only = props.only,
      stretched = props.stretched,
      tablet = props.tablet,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign,
      widescreen = props.widescreen,
      width = props.width;


  var classes = GridColumn___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(color, useKeyOnly(stretched, 'stretched'), useOnlyProp(only, 'only'), useTextAlignProp(textAlign), useValueAndKey(floated, 'floated'), useVerticalAlignProp(verticalAlign), classNameBuilders_useWidthProp(computer, 'wide computer'), classNameBuilders_useWidthProp(largeScreen, 'wide large screen'), classNameBuilders_useWidthProp(mobile, 'wide mobile'), classNameBuilders_useWidthProp(tablet, 'wide tablet'), classNameBuilders_useWidthProp(widescreen, 'wide widescreen'), classNameBuilders_useWidthProp(width, 'wide'), 'column', className);
  var rest = getUnhandledProps_defaultExport(GridColumn, props);
  var ElementType = getElementType_defaultExport(GridColumn, props);

  return GridColumn___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    GridColumn___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

GridColumn.handledProps = ['as', 'children', 'className', 'color', 'computer', 'floated', 'largeScreen', 'mobile', 'only', 'stretched', 'tablet', 'textAlign', 'verticalAlign', 'widescreen', 'width'];
GridColumn._meta = {
  name: 'GridColumn',
  parent: 'Grid',
  type: META_namespaceObject.TYPES.COLLECTION
};

 true ? GridColumn.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: GridColumn___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: GridColumn___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** A grid column can be colored. */
  color: GridColumn___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.COLORS),

  /** A column can specify a width for a computer. */
  computer: GridColumn___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.WIDTHS),

  /** A column can sit flush against the left or right edge of a row. */
  floated: GridColumn___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.FLOATS),

  /** A column can specify a width for a large screen device. */
  largeScreen: GridColumn___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.WIDTHS),

  /** A column can specify a width for a mobile device. */
  mobile: GridColumn___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.WIDTHS),

  /** A row can appear only for a specific device, or screen sizes. */
  only: customPropTypes_namespaceObject.onlyProp(SUI_namespaceObject.VISIBILITY),

  /** A column can stretch its contents to take up the entire grid or row height. */
  stretched: GridColumn___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** A column can specify a width for a tablet device. */
  tablet: GridColumn___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.WIDTHS),

  /** A column can specify its text alignment. */
  textAlign: GridColumn___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.TEXT_ALIGNMENTS),

  /** A column can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: GridColumn___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.VERTICAL_ALIGNMENTS),

  /** A column can specify a width for a wide screen device. */
  widescreen: GridColumn___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.WIDTHS),

  /** Represents width of column. */
  width: GridColumn___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.WIDTHS)
} : void 0;

/* harmony default export */ var GridColumn_defaultExport = (GridColumn);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Grid/GridRow.js
/* harmony import */ var GridRow___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(96);
/* harmony import */ var GridRow___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(GridRow___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var GridRow___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var GridRow___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(GridRow___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var GridRow___WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(543);
/* harmony import */ var GridRow___WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(GridRow___WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var GridRow___WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(542);
/* harmony import */ var GridRow___WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(GridRow___WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var GridRow___WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(11);
/* harmony import */ var GridRow___WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(GridRow___WEBPACK_IMPORTED_MODULE_4_react__);








/**
 * A row sub-component for Grid.
 */
function GridRow(props) {
  var centered = props.centered,
      children = props.children,
      className = props.className,
      color = props.color,
      columns = props.columns,
      divided = props.divided,
      only = props.only,
      reversed = props.reversed,
      stretched = props.stretched,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign;


  var classes = GridRow___WEBPACK_IMPORTED_MODULE_2_classnames___default.a(color, useKeyOnly(centered, 'centered'), useKeyOnly(divided, 'divided'), useKeyOnly(stretched, 'stretched'), useOnlyProp(only), useTextAlignProp(textAlign), useValueAndKey(reversed, 'reversed'), useVerticalAlignProp(verticalAlign), classNameBuilders_useWidthProp(columns, 'column', true), 'row', className);
  var rest = getUnhandledProps_defaultExport(GridRow, props);
  var ElementType = getElementType_defaultExport(GridRow, props);

  return GridRow___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    ElementType,
    GridRow___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

GridRow.handledProps = ['as', 'centered', 'children', 'className', 'color', 'columns', 'divided', 'only', 'reversed', 'stretched', 'textAlign', 'verticalAlign'];
GridRow._meta = {
  name: 'GridRow',
  parent: 'Grid',
  type: META_namespaceObject.TYPES.COLLECTION
};

 true ? GridRow.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A row can have its columns centered. */
  centered: GridRow___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Primary content. */
  children: GridRow___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: GridRow___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** A grid row can be colored. */
  color: GridRow___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.COLORS),

  /** Represents column count per line in Row. */
  columns: GridRow___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf([].concat(GridRow___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default.a(SUI_namespaceObject.WIDTHS), ['equal'])),

  /** A row can have dividers between its columns. */
  divided: GridRow___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A row can appear only for a specific device, or screen sizes. */
  only: customPropTypes_namespaceObject.onlyProp(SUI_namespaceObject.VISIBILITY),

  /** A row can specify that its columns should reverse order at different device sizes. */
  reversed: GridRow___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['computer', 'computer vertically', 'mobile', 'mobile vertically', 'tablet', 'tablet vertically']),

  /** A row can stretch its contents to take up the entire column height. */
  stretched: GridRow___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A row can specify its text alignment. */
  textAlign: GridRow___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.TEXT_ALIGNMENTS),

  /** A row can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: GridRow___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.VERTICAL_ALIGNMENTS)
} : void 0;

/* harmony default export */ var GridRow_defaultExport = (GridRow);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js
/* harmony import */ var Grid___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(96);
/* harmony import */ var Grid___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(Grid___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var Grid___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Grid___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(Grid___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var Grid___WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(543);
/* harmony import */ var Grid___WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(Grid___WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var Grid___WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(542);
/* harmony import */ var Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(Grid___WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var Grid___WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(11);
/* harmony import */ var Grid___WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(Grid___WEBPACK_IMPORTED_MODULE_4_react__);










/**
 * A grid is used to harmonize negative space in a layout.
 */
function Grid(props) {
  var celled = props.celled,
      centered = props.centered,
      children = props.children,
      className = props.className,
      columns = props.columns,
      container = props.container,
      divided = props.divided,
      doubling = props.doubling,
      inverted = props.inverted,
      padded = props.padded,
      relaxed = props.relaxed,
      reversed = props.reversed,
      stackable = props.stackable,
      stretched = props.stretched,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign;


  var classes = Grid___WEBPACK_IMPORTED_MODULE_2_classnames___default.a('ui', useKeyOnly(centered, 'centered'), useKeyOnly(container, 'container'), useKeyOnly(doubling, 'doubling'), useKeyOnly(inverted, 'inverted'), useKeyOnly(stackable, 'stackable'), useKeyOnly(stretched, 'stretched'), useKeyOrValueAndKey(celled, 'celled'), useKeyOrValueAndKey(divided, 'divided'), useKeyOrValueAndKey(padded, 'padded'), useKeyOrValueAndKey(relaxed, 'relaxed'), useTextAlignProp(textAlign), useValueAndKey(reversed, 'reversed'), useVerticalAlignProp(verticalAlign), classNameBuilders_useWidthProp(columns, 'column', true), 'grid', className);
  var rest = getUnhandledProps_defaultExport(Grid, props);
  var ElementType = getElementType_defaultExport(Grid, props);

  return Grid___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    ElementType,
    Grid___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

Grid.handledProps = ['as', 'celled', 'centered', 'children', 'className', 'columns', 'container', 'divided', 'doubling', 'inverted', 'padded', 'relaxed', 'reversed', 'stackable', 'stretched', 'textAlign', 'verticalAlign'];
Grid.Column = GridColumn_defaultExport;
Grid.Row = GridRow_defaultExport;

Grid._meta = {
  name: 'Grid',
  type: META_namespaceObject.TYPES.COLLECTION
};

 true ? Grid.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A grid can have rows divided into cells. */
  celled: Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['internally'])]),

  /** A grid can have its columns centered. */
  centered: Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Primary content. */
  children: Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Represents column count per row in Grid. */
  columns: Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf([].concat(Grid___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default.a(SUI_namespaceObject.WIDTHS), ['equal'])),

  /** A grid can be combined with a container to use the available layout and alignment. */
  container: Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A grid can have dividers between its columns. */
  divided: Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['vertically'])]),

  /** A grid can double its column width on tablet and mobile sizes. */
  doubling: Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A grid's colors can be inverted. */
  inverted: Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A grid can preserve its vertical and horizontal gutters on first and last columns. */
  padded: Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['horizontally', 'vertically'])]),

  /** A grid can increase its gutters to allow for more negative space. */
  relaxed: Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['very'])]),

  /** A grid can specify that its columns should reverse order at different device sizes. */
  reversed: Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['computer', 'computer vertically', 'mobile', 'mobile vertically', 'tablet', 'tablet vertically']),

  /** A grid can have its columns stack on-top of each other after reaching mobile breakpoints. */
  stackable: Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A grid can stretch its contents to take up the entire grid height. */
  stretched: Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A grid can specify its text alignment. */
  textAlign: Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.TEXT_ALIGNMENTS),

  /** A grid can specify its vertical alignment to have all its columns vertically centered. */
  verticalAlign: Grid___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.VERTICAL_ALIGNMENTS)
} : void 0;

/* harmony default export */ var Grid_defaultExport = (Grid);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Grid/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Menu/MenuHeader.js
/* harmony import */ var MenuHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var MenuHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(MenuHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var MenuHeader___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var MenuHeader___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(MenuHeader___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var MenuHeader___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var MenuHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(MenuHeader___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var MenuHeader___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var MenuHeader___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(MenuHeader___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A menu item may include a header or may itself be a header.
 */
function MenuHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = MenuHeader___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('header', className);
  var rest = getUnhandledProps_defaultExport(MenuHeader, props);
  var ElementType = getElementType_defaultExport(MenuHeader, props);

  return MenuHeader___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    MenuHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

MenuHeader.handledProps = ['as', 'children', 'className', 'content'];
MenuHeader._meta = {
  name: 'MenuHeader',
  type: META_namespaceObject.TYPES.COLLECTION,
  parent: 'Menu'
};

 true ? MenuHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: MenuHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: MenuHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand
} : void 0;

/* harmony default export */ var MenuHeader_defaultExport = (MenuHeader);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Menu/MenuItem.js
/* harmony import */ var MenuItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var MenuItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(MenuItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var MenuItem___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var MenuItem___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(MenuItem___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var MenuItem___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var MenuItem___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(MenuItem___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var MenuItem___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var MenuItem___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(MenuItem___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var MenuItem___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var MenuItem___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(MenuItem___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_startCase__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_startCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_startCase__);
/* harmony import */ var MenuItem___WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(543);
/* harmony import */ var MenuItem___WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(MenuItem___WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(542);
/* harmony import */ var MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var MenuItem___WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(11);
/* harmony import */ var MenuItem___WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(MenuItem___WEBPACK_IMPORTED_MODULE_8_react__);














/**
 * A menu can contain an item.
 */

var MenuItem_MenuItem = function (_Component) {
  MenuItem___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(MenuItem, _Component);

  function MenuItem() {
    var _ref;

    var _temp, _this, _ret;

    MenuItem___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, MenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = MenuItem___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;


      if (onClick) onClick(e, _this.props);
    }, _temp), MenuItem___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  MenuItem___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(MenuItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          color = _props.color,
          content = _props.content,
          disabled = _props.disabled,
          fitted = _props.fitted,
          header = _props.header,
          icon = _props.icon,
          link = _props.link,
          name = _props.name,
          onClick = _props.onClick,
          position = _props.position;


      var classes = MenuItem___WEBPACK_IMPORTED_MODULE_6_classnames___default.a(color, position, useKeyOnly(active, 'active'), useKeyOnly(disabled, 'disabled'), useKeyOnly(icon === true || icon && !(name || content), 'icon'), useKeyOnly(header, 'header'), useKeyOnly(link, 'link'), useKeyOrValueAndKey(fitted, 'fitted'), 'item', className);
      var ElementType = getElementType_defaultExport(MenuItem, this.props, function () {
        if (onClick) return 'a';
      });
      var rest = getUnhandledProps_defaultExport(MenuItem, this.props);

      if (!childrenUtils_namespaceObject.isNil(children)) {
        return MenuItem___WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          ElementType,
          MenuItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, onClick: this.handleClick }),
          children
        );
      }

      return MenuItem___WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        ElementType,
        MenuItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, onClick: this.handleClick }),
        Icon_defaultExport.create(icon),
        content || __WEBPACK_IMPORTED_MODULE_5_lodash_startCase___default.a(name)
      );
    }
  }]);

  return MenuItem;
}(MenuItem___WEBPACK_IMPORTED_MODULE_8_react__["Component"]);

MenuItem_MenuItem._meta = {
  name: 'MenuItem',
  type: META_namespaceObject.TYPES.COLLECTION,
  parent: 'Menu'
};
MenuItem_MenuItem.handledProps = ['active', 'as', 'children', 'className', 'color', 'content', 'disabled', 'fitted', 'header', 'icon', 'index', 'link', 'name', 'onClick', 'position'];
/* harmony default export */ var MenuItem_defaultExport = (MenuItem_MenuItem);
 true ? MenuItem_MenuItem.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A menu item can be active. */
  active: MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,

  /** Primary content. */
  children: MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.node,

  /** Additional classes. */
  className: MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,

  /** Additional colors can be specified. */
  color: MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOf(SUI_namespaceObject.COLORS),

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** A menu item can be disabled. */
  disabled: MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,

  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted: MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOfType([MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool, MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOf(['horizontally', 'vertically'])]),

  /** A menu item may include a header or may itself be a header. */
  header: MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,

  /** MenuItem can be only icon. */
  icon: MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOfType([MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool, customPropTypes_namespaceObject.itemShorthand]),

  /** MenuItem index inside Menu. */
  index: MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.number,

  /** A menu item can be link. */
  link: MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,

  /** Internal name of the MenuItem. */
  name: MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,

  /** A menu item can take right position. */
  position: MenuItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.oneOf(['right'])
} : void 0;


MenuItem_MenuItem.create = createShorthandFactory(MenuItem_MenuItem, function (val) {
  return { content: val, name: val };
});
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Menu/MenuMenu.js
/* harmony import */ var MenuMenu___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var MenuMenu___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(MenuMenu___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var MenuMenu___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var MenuMenu___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(MenuMenu___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var MenuMenu___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var MenuMenu___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(MenuMenu___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var MenuMenu___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var MenuMenu___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(MenuMenu___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A menu can contain a sub menu.
 */
function MenuMenu(props) {
  var children = props.children,
      className = props.className,
      position = props.position;


  var classes = MenuMenu___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(position, 'menu', className);
  var rest = getUnhandledProps_defaultExport(MenuMenu, props);
  var ElementType = getElementType_defaultExport(MenuMenu, props);

  return MenuMenu___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    MenuMenu___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

MenuMenu.handledProps = ['as', 'children', 'className', 'position'];
MenuMenu._meta = {
  name: 'MenuMenu',
  type: META_namespaceObject.TYPES.COLLECTION,
  parent: 'Menu'
};

 true ? MenuMenu.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: MenuMenu___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: MenuMenu___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** A sub menu can take right position. */
  position: MenuMenu___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['right'])
} : void 0;

/* harmony default export */ var MenuMenu_defaultExport = (MenuMenu);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Menu/Menu.js
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Menu___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Menu___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(Menu___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Menu___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(Menu___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_5_lodash_map__ = __webpack_require__(548);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_5_lodash_map___default = __webpack_require__.n(Menu___WEBPACK_IMPORTED_MODULE_5_lodash_map__);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_6_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default = __webpack_require__.n(Menu___WEBPACK_IMPORTED_MODULE_6_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_without__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_without__);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(543);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(Menu___WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_9_prop_types__ = __webpack_require__(542);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default = __webpack_require__.n(Menu___WEBPACK_IMPORTED_MODULE_9_prop_types__);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(11);
/* harmony import */ var Menu___WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(Menu___WEBPACK_IMPORTED_MODULE_10_react__);


















/**
 * A menu displays grouped navigation actions.
 * @see Dropdown
 */

var Menu_Menu = function (_Component) {
  Menu___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(Menu, _Component);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    Menu___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Menu___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.handleItemOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e, itemProps) {
          var index = itemProps.index;


          _this.trySetState({ activeIndex: index });

          Menu___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(predefinedProps, 'onClick', e, itemProps);
          Menu___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(_this.props, 'onItemClick', e, itemProps);
        }
      };
    }, _temp), Menu___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Menu___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(Menu, [{
    key: 'renderItems',
    value: function renderItems() {
      var _this2 = this;

      var items = this.props.items;
      var activeIndex = this.state.activeIndex;


      return Menu___WEBPACK_IMPORTED_MODULE_5_lodash_map___default.a(items, function (item, index) {
        return MenuItem_defaultExport.create(item, {
          defaultProps: {
            active: parseInt(activeIndex, 10) === index,
            index: index
          },
          overrideProps: _this2.handleItemOverrides
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          attached = _props.attached,
          borderless = _props.borderless,
          children = _props.children,
          className = _props.className,
          color = _props.color,
          compact = _props.compact,
          fixed = _props.fixed,
          floated = _props.floated,
          fluid = _props.fluid,
          icon = _props.icon,
          inverted = _props.inverted,
          pagination = _props.pagination,
          pointing = _props.pointing,
          secondary = _props.secondary,
          size = _props.size,
          stackable = _props.stackable,
          tabular = _props.tabular,
          text = _props.text,
          vertical = _props.vertical,
          widths = _props.widths;

      var classes = Menu___WEBPACK_IMPORTED_MODULE_8_classnames___default.a('ui', color, size, useKeyOnly(borderless, 'borderless'), useKeyOnly(compact, 'compact'), useKeyOnly(fluid, 'fluid'), useKeyOnly(inverted, 'inverted'), useKeyOnly(pagination, 'pagination'), useKeyOnly(pointing, 'pointing'), useKeyOnly(secondary, 'secondary'), useKeyOnly(stackable, 'stackable'), useKeyOnly(text, 'text'), useKeyOnly(vertical, 'vertical'), useKeyOrValueAndKey(attached, 'attached'), useKeyOrValueAndKey(floated, 'floated'), useKeyOrValueAndKey(icon, 'icon'), useKeyOrValueAndKey(tabular, 'tabular'), useValueAndKey(fixed, 'fixed'), classNameBuilders_useWidthProp(widths, 'item'), className, 'menu');
      var rest = getUnhandledProps_defaultExport(Menu, this.props);
      var ElementType = getElementType_defaultExport(Menu, this.props);

      return Menu___WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
        ElementType,
        Menu___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
        childrenUtils_namespaceObject.isNil(children) ? this.renderItems() : children
      );
    }
  }]);

  return Menu;
}(AutoControlledComponent_defaultExport);

Menu_Menu._meta = {
  name: 'Menu',
  type: META_namespaceObject.TYPES.COLLECTION
};
Menu_Menu.autoControlledProps = ['activeIndex'];
Menu_Menu.Header = MenuHeader_defaultExport;
Menu_Menu.Item = MenuItem_defaultExport;
Menu_Menu.Menu = MenuMenu_defaultExport;
Menu_Menu.handledProps = ['activeIndex', 'as', 'attached', 'borderless', 'children', 'className', 'color', 'compact', 'defaultActiveIndex', 'fixed', 'floated', 'fluid', 'icon', 'inverted', 'items', 'onItemClick', 'pagination', 'pointing', 'secondary', 'size', 'stackable', 'tabular', 'text', 'vertical', 'widths'];
 true ? Menu_Menu.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Index of the currently active item. */
  activeIndex: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.number, Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string]),

  /** A menu may be attached to other content segments. */
  attached: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool, Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(['top', 'bottom'])]),

  /** A menu item or menu can have no borders. */
  borderless: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Primary content. */
  children: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.node,

  /** Additional classes. */
  className: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string,

  /** Additional colors can be specified. */
  color: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(SUI_namespaceObject.COLORS),

  /** A menu can take up only the space necessary to fit its content. */
  compact: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Initial activeIndex value. */
  defaultActiveIndex: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.number, Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string]),

  /** A menu can be fixed to a side of its context. */
  fixed: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(['left', 'right', 'bottom', 'top']),

  /** A menu can be floated. */
  floated: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool, Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(['right'])]),

  /** A vertical menu may take the size of its container. */
  fluid: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** A menu may have just icons (bool) or labeled icons. */
  icon: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool, Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(['labeled'])]),

  /** A menu may have its colors inverted to show greater contrast. */
  inverted: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** Shorthand array of props for Menu. */
  items: customPropTypes_namespaceObject.collectionShorthand,

  /**
   * onClick handler for MenuItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['children']), Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func]),

  /** A pagination menu is specially formatted to present links to pages of content. */
  pagination: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** A menu can point to show its relationship to nearby content. */
  pointing: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** A menu can adjust its appearance to de-emphasize its contents. */
  secondary: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** A menu can vary in size. */
  size: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_7_lodash_without___default.a(SUI_namespaceObject.SIZES, 'medium', 'big')),

  /** A menu can stack at mobile resolutions. */
  stackable: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** A menu can be formatted to show tabs of information. */
  tabular: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool, Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(['right'])]),

  /** A menu can be formatted for text content. */
  text: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** A vertical menu displays elements vertically. */
  vertical: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** A menu can have its items divided evenly. */
  widths: Menu___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(SUI_namespaceObject.WIDTHS)
} : void 0;


Menu_Menu.create = createShorthandFactory(Menu_Menu, function (items) {
  return { items: items };
});

/* harmony default export */ var Menu_defaultExport = (Menu_Menu);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Menu/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Message/MessageContent.js
/* harmony import */ var MessageContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var MessageContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(MessageContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var MessageContent___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var MessageContent___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(MessageContent___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var MessageContent___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var MessageContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(MessageContent___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var MessageContent___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var MessageContent___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(MessageContent___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A message can contain a content.
 */
function MessageContent(props) {
  var children = props.children,
      className = props.className;

  var classes = MessageContent___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('content', className);
  var rest = getUnhandledProps_defaultExport(MessageContent, props);
  var ElementType = getElementType_defaultExport(MessageContent, props);

  return MessageContent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    MessageContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

MessageContent.handledProps = ['as', 'children', 'className'];
MessageContent._meta = {
  name: 'MessageContent',
  parent: 'Message',
  type: META_namespaceObject.TYPES.COLLECTION
};

 true ? MessageContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: MessageContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: MessageContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : void 0;

/* harmony default export */ var MessageContent_defaultExport = (MessageContent);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Message/MessageHeader.js
/* harmony import */ var MessageHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var MessageHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(MessageHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var MessageHeader___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var MessageHeader___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(MessageHeader___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var MessageHeader___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var MessageHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(MessageHeader___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var MessageHeader___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var MessageHeader___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(MessageHeader___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A message can contain a header.
 */
function MessageHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = MessageHeader___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('header', className);
  var rest = getUnhandledProps_defaultExport(MessageHeader, props);
  var ElementType = getElementType_defaultExport(MessageHeader, props);

  return MessageHeader___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    MessageHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

MessageHeader.handledProps = ['as', 'children', 'className', 'content'];
MessageHeader._meta = {
  name: 'MessageHeader',
  parent: 'Message',
  type: META_namespaceObject.TYPES.COLLECTION
};

 true ? MessageHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: MessageHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: MessageHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.itemShorthand
} : void 0;

MessageHeader.create = createShorthandFactory(MessageHeader, function (val) {
  return { content: val };
});

/* harmony default export */ var MessageHeader_defaultExport = (MessageHeader);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Message/MessageItem.js
/* harmony import */ var MessageItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var MessageItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(MessageItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var MessageItem___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var MessageItem___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(MessageItem___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var MessageItem___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var MessageItem___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(MessageItem___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var MessageItem___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var MessageItem___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(MessageItem___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A message list can contain an item.
 */
function MessageItem(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = MessageItem___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('content', className);
  var rest = getUnhandledProps_defaultExport(MessageItem, props);
  var ElementType = getElementType_defaultExport(MessageItem, props);

  return MessageItem___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    MessageItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

MessageItem.handledProps = ['as', 'children', 'className', 'content'];
MessageItem._meta = {
  name: 'MessageItem',
  parent: 'Message',
  type: META_namespaceObject.TYPES.COLLECTION
};

 true ? MessageItem.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: MessageItem___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: MessageItem___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.itemShorthand
} : void 0;

MessageItem.defaultProps = {
  as: 'li'
};

MessageItem.create = createShorthandFactory(MessageItem, function (content) {
  return { content: content };
});

/* harmony default export */ var MessageItem_defaultExport = (MessageItem);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Message/MessageList.js
/* harmony import */ var MessageList___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var MessageList___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(MessageList___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_map__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_map__);
/* harmony import */ var MessageList___WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(543);
/* harmony import */ var MessageList___WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(MessageList___WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var MessageList___WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(542);
/* harmony import */ var MessageList___WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(MessageList___WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var MessageList___WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(11);
/* harmony import */ var MessageList___WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(MessageList___WEBPACK_IMPORTED_MODULE_4_react__);










/**
 * A message can contain a list of items.
 */
function MessageList(props) {
  var children = props.children,
      className = props.className,
      items = props.items;

  var classes = MessageList___WEBPACK_IMPORTED_MODULE_2_classnames___default.a('list', className);
  var rest = getUnhandledProps_defaultExport(MessageList, props);
  var ElementType = getElementType_defaultExport(MessageList, props);

  return MessageList___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    ElementType,
    MessageList___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? __WEBPACK_IMPORTED_MODULE_1_lodash_map___default.a(items, MessageItem_defaultExport.create) : children
  );
}

MessageList.handledProps = ['as', 'children', 'className', 'items'];
MessageList._meta = {
  name: 'MessageList',
  parent: 'Message',
  type: META_namespaceObject.TYPES.COLLECTION
};

 true ? MessageList.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: MessageList___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: MessageList___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Shorthand Message.Items. */
  items: customPropTypes_namespaceObject.collectionShorthand
} : void 0;

MessageList.defaultProps = {
  as: 'ul'
};

MessageList.create = createShorthandFactory(MessageList, function (val) {
  return { items: val };
});

/* harmony default export */ var MessageList_defaultExport = (MessageList);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Message/Message.js
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Message___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Message___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(Message___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Message___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(Message___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_5_lodash_isNil__ = __webpack_require__(549);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_5_lodash_isNil___default = __webpack_require__.n(Message___WEBPACK_IMPORTED_MODULE_5_lodash_isNil__);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_6_lodash_without__ = __webpack_require__(544);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_6_lodash_without___default = __webpack_require__.n(Message___WEBPACK_IMPORTED_MODULE_6_lodash_without__);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(543);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(Message___WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(542);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(Message___WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(11);
/* harmony import */ var Message___WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(Message___WEBPACK_IMPORTED_MODULE_9_react__);



















/**
 * A message displays information that explains nearby content.
 * @see Form
 */

var Message_Message = function (_Component) {
  Message___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(Message, _Component);

  function Message() {
    var _ref;

    var _temp, _this, _ret;

    Message___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, Message);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Message___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Message.__proto__ || Object.getPrototypeOf(Message)).call.apply(_ref, [this].concat(args))), _this), _this.handleDismiss = function (e) {
      var onDismiss = _this.props.onDismiss;


      if (onDismiss) onDismiss(e, _this.props);
    }, _temp), Message___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Message___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(Message, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          attached = _props.attached,
          children = _props.children,
          className = _props.className,
          color = _props.color,
          compact = _props.compact,
          content = _props.content,
          error = _props.error,
          floating = _props.floating,
          header = _props.header,
          hidden = _props.hidden,
          icon = _props.icon,
          info = _props.info,
          list = _props.list,
          negative = _props.negative,
          onDismiss = _props.onDismiss,
          positive = _props.positive,
          size = _props.size,
          success = _props.success,
          visible = _props.visible,
          warning = _props.warning;


      var classes = Message___WEBPACK_IMPORTED_MODULE_7_classnames___default.a('ui', color, size, useKeyOnly(compact, 'compact'), useKeyOnly(error, 'error'), useKeyOnly(floating, 'floating'), useKeyOnly(hidden, 'hidden'), useKeyOnly(icon, 'icon'), useKeyOnly(info, 'info'), useKeyOnly(negative, 'negative'), useKeyOnly(positive, 'positive'), useKeyOnly(success, 'success'), useKeyOnly(visible, 'visible'), useKeyOnly(warning, 'warning'), useKeyOrValueAndKey(attached, 'attached'), 'message', className);

      var dismissIcon = onDismiss && Message___WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(Icon_defaultExport, { name: 'close', onClick: this.handleDismiss });
      var rest = getUnhandledProps_defaultExport(Message, this.props);
      var ElementType = getElementType_defaultExport(Message, this.props);

      if (!childrenUtils_namespaceObject.isNil(children)) {
        return Message___WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
          ElementType,
          Message___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
          dismissIcon,
          children
        );
      }

      return Message___WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        ElementType,
        Message___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
        dismissIcon,
        Icon_defaultExport.create(icon),
        (!Message___WEBPACK_IMPORTED_MODULE_5_lodash_isNil___default.a(header) || !Message___WEBPACK_IMPORTED_MODULE_5_lodash_isNil___default.a(content) || !Message___WEBPACK_IMPORTED_MODULE_5_lodash_isNil___default.a(list)) && Message___WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
          MessageContent_defaultExport,
          null,
          MessageHeader_defaultExport.create(header),
          MessageList_defaultExport.create(list),
          createHTMLParagraph(content)
        )
      );
    }
  }]);

  return Message;
}(Message___WEBPACK_IMPORTED_MODULE_9_react__["Component"]);

Message_Message._meta = {
  name: 'Message',
  type: META_namespaceObject.TYPES.COLLECTION
};
Message_Message.Content = MessageContent_defaultExport;
Message_Message.Header = MessageHeader_defaultExport;
Message_Message.List = MessageList_defaultExport;
Message_Message.Item = MessageItem_defaultExport;
Message_Message.handledProps = ['as', 'attached', 'children', 'className', 'color', 'compact', 'content', 'error', 'floating', 'header', 'hidden', 'icon', 'info', 'list', 'negative', 'onDismiss', 'positive', 'size', 'success', 'visible', 'warning'];
/* harmony default export */ var Message_defaultExport = (Message_Message);
 true ? Message_Message.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A message can be formatted to attach itself to other content. */
  attached: Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool, Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(['bottom'])]),

  /** Primary content. */
  children: Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.node,

  /** Additional classes. */
  className: Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,

  /** A message can be formatted to be different colors. */
  color: Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(SUI_namespaceObject.COLORS),

  /** A message can only take up the width of its content. */
  compact: Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** A message may be formatted to display a negative message. Same as `negative`. */
  error: Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A message can float above content that it is related to. */
  floating: Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Shorthand for MessageHeader. */
  header: customPropTypes_namespaceObject.itemShorthand,

  /** A message can be hidden. */
  hidden: Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A message can contain an icon. */
  icon: Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([customPropTypes_namespaceObject.itemShorthand, Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool]),

  /** A message may be formatted to display information. */
  info: Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Array shorthand items for the MessageList. Mutually exclusive with children. */
  list: customPropTypes_namespaceObject.collectionShorthand,

  /** A message may be formatted to display a negative message. Same as `error`. */
  negative: Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /**
   * A message that the user can choose to hide.
   * Called when the user clicks the "x" icon. This also adds the "x" icon.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onDismiss: Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /** A message may be formatted to display a positive message.  Same as `success`. */
  positive: Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A message can have different sizes. */
  size: Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(Message___WEBPACK_IMPORTED_MODULE_6_lodash_without___default.a(SUI_namespaceObject.SIZES, 'medium')),

  /** A message may be formatted to display a positive message.  Same as `positive`. */
  success: Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A message can be set to visible to force itself to be shown. */
  visible: Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A message may be formatted to display warning messages. */
  warning: Message___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool
} : void 0;
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Message/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Table/TableBody.js
/* harmony import */ var TableBody___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var TableBody___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(TableBody___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var TableBody___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var TableBody___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(TableBody___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var TableBody___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var TableBody___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(TableBody___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var TableBody___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var TableBody___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(TableBody___WEBPACK_IMPORTED_MODULE_3_react__);







function TableBody(props) {
  var children = props.children,
      className = props.className;

  var classes = TableBody___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(className);
  var rest = getUnhandledProps_defaultExport(TableBody, props);
  var ElementType = getElementType_defaultExport(TableBody, props);

  return TableBody___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    TableBody___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

TableBody.handledProps = ['as', 'children', 'className'];
TableBody._meta = {
  name: 'TableBody',
  type: META_namespaceObject.TYPES.COLLECTION,
  parent: 'Table'
};

TableBody.defaultProps = {
  as: 'tbody'
};

 true ? TableBody.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: TableBody___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: TableBody___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : void 0;

/* harmony default export */ var TableBody_defaultExport = (TableBody);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Table/TableCell.js
/* harmony import */ var TableCell___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var TableCell___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(TableCell___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var TableCell___WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(544);
/* harmony import */ var TableCell___WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(TableCell___WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var TableCell___WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(543);
/* harmony import */ var TableCell___WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(TableCell___WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var TableCell___WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(542);
/* harmony import */ var TableCell___WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(TableCell___WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var TableCell___WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(11);
/* harmony import */ var TableCell___WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(TableCell___WEBPACK_IMPORTED_MODULE_4_react__);










/**
 * A table row can have cells.
 */
function TableCell(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      collapsing = props.collapsing,
      content = props.content,
      disabled = props.disabled,
      error = props.error,
      icon = props.icon,
      negative = props.negative,
      positive = props.positive,
      selectable = props.selectable,
      singleLine = props.singleLine,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign,
      warning = props.warning,
      width = props.width;


  var classes = TableCell___WEBPACK_IMPORTED_MODULE_2_classnames___default.a(useKeyOnly(active, 'active'), useKeyOnly(collapsing, 'collapsing'), useKeyOnly(disabled, 'disabled'), useKeyOnly(error, 'error'), useKeyOnly(negative, 'negative'), useKeyOnly(positive, 'positive'), useKeyOnly(selectable, 'selectable'), useKeyOnly(singleLine, 'single line'), useKeyOnly(warning, 'warning'), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), classNameBuilders_useWidthProp(width, 'wide'), className);
  var rest = getUnhandledProps_defaultExport(TableCell, props);
  var ElementType = getElementType_defaultExport(TableCell, props);

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return TableCell___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      ElementType,
      TableCell___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  return TableCell___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    ElementType,
    TableCell___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    Icon_defaultExport.create(icon),
    content
  );
}

TableCell.handledProps = ['active', 'as', 'children', 'className', 'collapsing', 'content', 'disabled', 'error', 'icon', 'negative', 'positive', 'selectable', 'singleLine', 'textAlign', 'verticalAlign', 'warning', 'width'];
TableCell._meta = {
  name: 'TableCell',
  type: META_namespaceObject.TYPES.COLLECTION,
  parent: 'Table'
};

TableCell.defaultProps = {
  as: 'td'
};

 true ? TableCell.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A cell can be active or selected by a user. */
  active: TableCell___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Primary content. */
  children: TableCell___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: TableCell___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** A cell can be collapsing so that it only uses as much space as required. */
  collapsing: TableCell___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** A cell can be disabled. */
  disabled: TableCell___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A cell may call attention to an error or a negative value. */
  error: TableCell___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Add an Icon by name, props object, or pass an <Icon /> */
  icon: customPropTypes_namespaceObject.itemShorthand,

  /** A cell may let a user know whether a value is bad. */
  negative: TableCell___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A cell may let a user know whether a value is good. */
  positive: TableCell___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A cell can be selectable. */
  selectable: TableCell___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A cell can specify that its contents should remain on a single line and not wrap. */
  singleLine: TableCell___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A table cell can adjust its text alignment. */
  textAlign: TableCell___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(TableCell___WEBPACK_IMPORTED_MODULE_1_lodash_without___default.a(SUI_namespaceObject.TEXT_ALIGNMENTS, 'justified')),

  /** A table cell can adjust its text alignment. */
  verticalAlign: TableCell___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.VERTICAL_ALIGNMENTS),

  /** A cell may warn a user. */
  warning: TableCell___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A table can specify the width of individual columns independently. */
  width: TableCell___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.WIDTHS)
} : void 0;

TableCell.create = createShorthandFactory(TableCell, function (content) {
  return { content: content };
});

/* harmony default export */ var TableCell_defaultExport = (TableCell);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Table/TableHeader.js
/* harmony import */ var TableHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var TableHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(TableHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var TableHeader___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var TableHeader___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(TableHeader___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var TableHeader___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var TableHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(TableHeader___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var TableHeader___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var TableHeader___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(TableHeader___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A table can have a header.
 */
function TableHeader(props) {
  var children = props.children,
      className = props.className,
      fullWidth = props.fullWidth;

  var classes = TableHeader___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(useKeyOnly(fullWidth, 'full-width'), className);
  var rest = getUnhandledProps_defaultExport(TableHeader, props);
  var ElementType = getElementType_defaultExport(TableHeader, props);

  return TableHeader___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    TableHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

TableHeader.handledProps = ['as', 'children', 'className', 'fullWidth'];
TableHeader._meta = {
  name: 'TableHeader',
  type: META_namespaceObject.TYPES.COLLECTION,
  parent: 'Table'
};

TableHeader.defaultProps = {
  as: 'thead'
};

 true ? TableHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: TableHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: TableHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** A definition table can have a full width header or footer, filling in the gap left by the first column. */
  fullWidth: TableHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : void 0;

/* harmony default export */ var TableHeader_defaultExport = (TableHeader);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Table/TableFooter.js
/* harmony import */ var TableFooter___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var TableFooter___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(TableFooter___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var TableFooter___WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(11);
/* harmony import */ var TableFooter___WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(TableFooter___WEBPACK_IMPORTED_MODULE_1_react__);






/**
 * A table can have a footer.
 */
function TableFooter(props) {
  var as = props.as;

  var rest = getUnhandledProps_defaultExport(TableFooter, props);

  return TableFooter___WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TableHeader_defaultExport, TableFooter___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { as: as }));
}

TableFooter.handledProps = ['as'];
TableFooter._meta = {
  name: 'TableFooter',
  type: META_namespaceObject.TYPES.COLLECTION,
  parent: 'Table'
};

 true ? TableFooter.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as
} : void 0;

TableFooter.defaultProps = {
  as: 'tfoot'
};

/* harmony default export */ var TableFooter_defaultExport = (TableFooter);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Table/TableHeaderCell.js
/* harmony import */ var TableHeaderCell___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var TableHeaderCell___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(TableHeaderCell___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var TableHeaderCell___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var TableHeaderCell___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(TableHeaderCell___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var TableHeaderCell___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var TableHeaderCell___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(TableHeaderCell___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var TableHeaderCell___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var TableHeaderCell___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(TableHeaderCell___WEBPACK_IMPORTED_MODULE_3_react__);








/**
 * A table can have a header cell.
 */
function TableHeaderCell(props) {
  var as = props.as,
      className = props.className,
      sorted = props.sorted;

  var classes = TableHeaderCell___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(useValueAndKey(sorted, 'sorted'), className);
  var rest = getUnhandledProps_defaultExport(TableHeaderCell, props);

  return TableHeaderCell___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(TableCell_defaultExport, TableHeaderCell___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { as: as, className: classes }));
}

TableHeaderCell.handledProps = ['as', 'className', 'sorted'];
TableHeaderCell._meta = {
  name: 'TableHeaderCell',
  type: META_namespaceObject.TYPES.COLLECTION,
  parent: 'Table'
};

 true ? TableHeaderCell.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Additional classes. */
  className: TableHeaderCell___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** A header cell can be sorted in ascending or descending order. */
  sorted: TableHeaderCell___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['ascending', 'descending'])
} : void 0;

TableHeaderCell.defaultProps = {
  as: 'th'
};

/* harmony default export */ var TableHeaderCell_defaultExport = (TableHeaderCell);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Table/TableRow.js
/* harmony import */ var TableRow___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var TableRow___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(TableRow___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var TableRow___WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(544);
/* harmony import */ var TableRow___WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(TableRow___WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_map__);
/* harmony import */ var TableRow___WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(543);
/* harmony import */ var TableRow___WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(TableRow___WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var TableRow___WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(542);
/* harmony import */ var TableRow___WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(TableRow___WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var TableRow___WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(11);
/* harmony import */ var TableRow___WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(TableRow___WEBPACK_IMPORTED_MODULE_5_react__);











/**
 * A table can have rows.
 */
function TableRow(props) {
  var active = props.active,
      cellAs = props.cellAs,
      cells = props.cells,
      children = props.children,
      className = props.className,
      disabled = props.disabled,
      error = props.error,
      negative = props.negative,
      positive = props.positive,
      textAlign = props.textAlign,
      verticalAlign = props.verticalAlign,
      warning = props.warning;


  var classes = TableRow___WEBPACK_IMPORTED_MODULE_3_classnames___default.a(useKeyOnly(active, 'active'), useKeyOnly(disabled, 'disabled'), useKeyOnly(error, 'error'), useKeyOnly(negative, 'negative'), useKeyOnly(positive, 'positive'), useKeyOnly(warning, 'warning'), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), className);
  var rest = getUnhandledProps_defaultExport(TableRow, props);
  var ElementType = getElementType_defaultExport(TableRow, props);

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return TableRow___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      ElementType,
      TableRow___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  return TableRow___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    ElementType,
    TableRow___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    __WEBPACK_IMPORTED_MODULE_2_lodash_map___default.a(cells, function (cell) {
      return TableCell_defaultExport.create(cell, { defaultProps: { as: cellAs } });
    })
  );
}

TableRow.handledProps = ['active', 'as', 'cellAs', 'cells', 'children', 'className', 'disabled', 'error', 'negative', 'positive', 'textAlign', 'verticalAlign', 'warning'];
TableRow._meta = {
  name: 'TableRow',
  type: META_namespaceObject.TYPES.COLLECTION,
  parent: 'Table'
};

TableRow.defaultProps = {
  as: 'tr',
  cellAs: 'td'
};

 true ? TableRow.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A row can be active or selected by a user. */
  active: TableRow___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** An element type to render as (string or function). */
  cellAs: customPropTypes_namespaceObject.as,

  /** Shorthand array of props for TableCell. */
  cells: customPropTypes_namespaceObject.collectionShorthand,

  /** Primary content. */
  children: TableRow___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,

  /** Additional classes. */
  className: TableRow___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /** A row can be disabled. */
  disabled: TableRow___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A row may call attention to an error or a negative value. */
  error: TableRow___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A row may let a user know whether a value is bad. */
  negative: TableRow___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A row may let a user know whether a value is good. */
  positive: TableRow___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A table row can adjust its text alignment. */
  textAlign: TableRow___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(TableRow___WEBPACK_IMPORTED_MODULE_1_lodash_without___default.a(SUI_namespaceObject.TEXT_ALIGNMENTS, 'justified')),

  /** A table row can adjust its vertical alignment. */
  verticalAlign: TableRow___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(SUI_namespaceObject.VERTICAL_ALIGNMENTS),

  /** A row may warn a user. */
  warning: TableRow___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool
} : void 0;

TableRow.create = createShorthandFactory(TableRow, function (cells) {
  return { cells: cells };
});

/* harmony default export */ var TableRow_defaultExport = (TableRow);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Table/Table.js
/* harmony import */ var Table___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Table___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Table___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Table___WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(544);
/* harmony import */ var Table___WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(Table___WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var Table___WEBPACK_IMPORTED_MODULE_2_lodash_map__ = __webpack_require__(548);
/* harmony import */ var Table___WEBPACK_IMPORTED_MODULE_2_lodash_map___default = __webpack_require__.n(Table___WEBPACK_IMPORTED_MODULE_2_lodash_map__);
/* harmony import */ var Table___WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(543);
/* harmony import */ var Table___WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(Table___WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var Table___WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(542);
/* harmony import */ var Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(Table___WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var Table___WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(11);
/* harmony import */ var Table___WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(Table___WEBPACK_IMPORTED_MODULE_5_react__);
















/**
 * A table displays a collections of data grouped into rows.
 */
function Table(props) {
  var attached = props.attached,
      basic = props.basic,
      celled = props.celled,
      children = props.children,
      className = props.className,
      collapsing = props.collapsing,
      color = props.color,
      columns = props.columns,
      compact = props.compact,
      definition = props.definition,
      fixed = props.fixed,
      footerRow = props.footerRow,
      headerRow = props.headerRow,
      inverted = props.inverted,
      padded = props.padded,
      renderBodyRow = props.renderBodyRow,
      selectable = props.selectable,
      singleLine = props.singleLine,
      size = props.size,
      sortable = props.sortable,
      stackable = props.stackable,
      striped = props.striped,
      structured = props.structured,
      tableData = props.tableData,
      textAlign = props.textAlign,
      unstackable = props.unstackable,
      verticalAlign = props.verticalAlign;


  var classes = Table___WEBPACK_IMPORTED_MODULE_3_classnames___default.a('ui', color, size, useKeyOnly(celled, 'celled'), useKeyOnly(collapsing, 'collapsing'), useKeyOnly(definition, 'definition'), useKeyOnly(fixed, 'fixed'), useKeyOnly(inverted, 'inverted'), useKeyOnly(selectable, 'selectable'), useKeyOnly(singleLine, 'single line'), useKeyOnly(sortable, 'sortable'), useKeyOnly(stackable, 'stackable'), useKeyOnly(striped, 'striped'), useKeyOnly(structured, 'structured'), useKeyOnly(unstackable, 'unstackable'), useKeyOrValueAndKey(attached, 'attached'), useKeyOrValueAndKey(basic, 'basic'), useKeyOrValueAndKey(compact, 'compact'), useKeyOrValueAndKey(padded, 'padded'), useTextAlignProp(textAlign), useVerticalAlignProp(verticalAlign), classNameBuilders_useWidthProp(columns, 'column'), 'table', className);
  var rest = getUnhandledProps_defaultExport(Table, props);
  var ElementType = getElementType_defaultExport(Table, props);

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return Table___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      ElementType,
      Table___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  return Table___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    ElementType,
    Table___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    headerRow && Table___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      TableHeader_defaultExport,
      null,
      TableRow_defaultExport.create(headerRow, { defaultProps: { cellAs: 'th' } })
    ),
    Table___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      TableBody_defaultExport,
      null,
      renderBodyRow && Table___WEBPACK_IMPORTED_MODULE_2_lodash_map___default.a(tableData, function (data, index) {
        return TableRow_defaultExport.create(renderBodyRow(data, index));
      })
    ),
    footerRow && Table___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      TableFooter_defaultExport,
      null,
      TableRow_defaultExport.create(footerRow)
    )
  );
}

Table.handledProps = ['as', 'attached', 'basic', 'celled', 'children', 'className', 'collapsing', 'color', 'columns', 'compact', 'definition', 'fixed', 'footerRow', 'headerRow', 'inverted', 'padded', 'renderBodyRow', 'selectable', 'singleLine', 'size', 'sortable', 'stackable', 'striped', 'structured', 'tableData', 'textAlign', 'unstackable', 'verticalAlign'];
Table._meta = {
  name: 'Table',
  type: META_namespaceObject.TYPES.COLLECTION
};

Table.defaultProps = {
  as: 'table'
};

 true ? Table.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Attach table to other content */
  attached: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool, Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['top', 'bottom'])]),

  /** A table can reduce its complexity to increase readability. */
  basic: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['very']), Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool]),

  /** A table may be divided each row into separate cells. */
  celled: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Primary content. */
  children: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,

  /** Additional classes. */
  className: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /** A table can be collapsing, taking up only as much space as its rows. */
  collapsing: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A table can be given a color to distinguish it from other tables. */
  color: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(SUI_namespaceObject.COLORS),

  /** A table can specify its column count to divide its content evenly. */
  columns: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(SUI_namespaceObject.WIDTHS),

  /** A table may sometimes need to be more compact to make more rows visible at a time. */
  compact: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool, Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['very'])]),

  /** A table may be formatted to emphasize a first column that defines a rows content. */
  definition: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /**
   * A table can use fixed a special faster form of table rendering that does not resize table cells based on content
   */
  fixed: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Shorthand for a TableRow to be placed within Table.Footer. */
  footerRow: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for a TableRow to be placed within Table.Header. */
  headerRow: customPropTypes_namespaceObject.itemShorthand,

  /** A table's colors can be inverted. */
  inverted: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A table may sometimes need to be more padded for legibility. */
  padded: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool, Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['very'])]),

  /**
   * Mapped over `tableData` and should return shorthand for each Table.Row to be placed within Table.Body.
   *
   * @param {*} data - An element in the `tableData` array.
   * @param {number} index - The index of the current element in `tableData`.
   * @returns {*} Shorthand for a Table.Row.
   */
  renderBodyRow: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['children']), customPropTypes_namespaceObject.demand(['tableData']), Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func]),

  /** A table can have its rows appear selectable. */
  selectable: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A table can also be small or large. */
  size: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(Table___WEBPACK_IMPORTED_MODULE_1_lodash_without___default.a(SUI_namespaceObject.SIZES, 'mini', 'tiny', 'medium', 'big', 'huge', 'massive')),

  /** A table may allow a user to sort contents by clicking on a table header. */
  sortable: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A table can specify how it stacks table content responsively. */
  stackable: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
  striped: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A table can be formatted to display complex structured data. */
  structured: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Data to be passed to the renderBodyRow function. */
  tableData: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['children']), customPropTypes_namespaceObject.demand(['renderBodyRow']), Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.array]),

  /** A table can adjust its text alignment. */
  textAlign: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(Table___WEBPACK_IMPORTED_MODULE_1_lodash_without___default.a(SUI_namespaceObject.TEXT_ALIGNMENTS, 'justified')),

  /** A table can specify how it stacks table content responsively. */
  unstackable: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A table can adjust its text alignment. */
  verticalAlign: Table___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(SUI_namespaceObject.VERTICAL_ALIGNMENTS)
} : void 0;

Table.Body = TableBody_defaultExport;
Table.Cell = TableCell_defaultExport;
Table.Footer = TableFooter_defaultExport;
Table.Header = TableHeader_defaultExport;
Table.HeaderCell = TableHeaderCell_defaultExport;
Table.Row = TableRow_defaultExport;

/* harmony default export */ var Table_defaultExport = (Table);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/collections/Table/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Container/Container.js
/* harmony import */ var Container___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Container___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Container___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Container___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var Container___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(Container___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var Container___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var Container___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(Container___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var Container___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var Container___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(Container___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A container limits content to a maximum width.
 */
function Container(props) {
  var children = props.children,
      className = props.className,
      fluid = props.fluid,
      text = props.text,
      textAlign = props.textAlign;

  var classes = Container___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('ui', useKeyOnly(text, 'text'), useKeyOnly(fluid, 'fluid'), useTextAlignProp(textAlign), 'container', className);
  var rest = getUnhandledProps_defaultExport(Container, props);
  var ElementType = getElementType_defaultExport(Container, props);

  return Container___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    Container___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

Container.handledProps = ['as', 'children', 'className', 'fluid', 'text', 'textAlign'];
Container._meta = {
  name: 'Container',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? Container.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: Container___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: Container___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Container has no maximum width. */
  fluid: Container___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Reduce maximum width to more naturally accommodate text. */
  text: Container___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Align container text. */
  textAlign: Container___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.TEXT_ALIGNMENTS)
} : void 0;

/* harmony default export */ var Container_defaultExport = (Container);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Container/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Divider/Divider.js
/* harmony import */ var Divider___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Divider___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Divider___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Divider___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var Divider___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(Divider___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var Divider___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var Divider___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(Divider___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var Divider___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var Divider___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(Divider___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A divider visually segments content into groups.
 */
function Divider(props) {
  var children = props.children,
      className = props.className,
      clearing = props.clearing,
      fitted = props.fitted,
      hidden = props.hidden,
      horizontal = props.horizontal,
      inverted = props.inverted,
      section = props.section,
      vertical = props.vertical;


  var classes = Divider___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('ui', useKeyOnly(clearing, 'clearing'), useKeyOnly(fitted, 'fitted'), useKeyOnly(hidden, 'hidden'), useKeyOnly(horizontal, 'horizontal'), useKeyOnly(inverted, 'inverted'), useKeyOnly(section, 'section'), useKeyOnly(vertical, 'vertical'), 'divider', className);
  var rest = getUnhandledProps_defaultExport(Divider, props);
  var ElementType = getElementType_defaultExport(Divider, props);

  return Divider___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    Divider___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

Divider.handledProps = ['as', 'children', 'className', 'clearing', 'fitted', 'hidden', 'horizontal', 'inverted', 'section', 'vertical'];
Divider._meta = {
  name: 'Divider',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? Divider.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: Divider___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: Divider___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Divider can clear the content above it. */
  clearing: Divider___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Divider can be fitted without any space above or below it. */
  fitted: Divider___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Divider can divide content without creating a dividing line. */
  hidden: Divider___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Divider can segment content horizontally. */
  horizontal: Divider___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Divider can have it's colours inverted. */
  inverted: Divider___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Divider can provide greater margins to divide sections of content. */
  section: Divider___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Divider can segment content vertically. */
  vertical: Divider___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : void 0;

/* harmony default export */ var Divider_defaultExport = (Divider);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Divider/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Header/HeaderSubheader.js
/* harmony import */ var HeaderSubheader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var HeaderSubheader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(HeaderSubheader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var HeaderSubheader___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var HeaderSubheader___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(HeaderSubheader___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var HeaderSubheader___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var HeaderSubheader___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(HeaderSubheader___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var HeaderSubheader___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var HeaderSubheader___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(HeaderSubheader___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * Headers may contain subheaders.
 */
function HeaderSubheader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = HeaderSubheader___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('sub header', className);
  var rest = getUnhandledProps_defaultExport(HeaderSubheader, props);
  var ElementType = getElementType_defaultExport(HeaderSubheader, props);

  return HeaderSubheader___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    HeaderSubheader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

HeaderSubheader.handledProps = ['as', 'children', 'className', 'content'];
HeaderSubheader._meta = {
  name: 'HeaderSubheader',
  parent: 'Header',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? HeaderSubheader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: HeaderSubheader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: HeaderSubheader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand
} : void 0;

HeaderSubheader.create = createShorthandFactory(HeaderSubheader, function (content) {
  return { content: content };
});

/* harmony default export */ var HeaderSubheader_defaultExport = (HeaderSubheader);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Header/HeaderContent.js
/* harmony import */ var HeaderContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var HeaderContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(HeaderContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var HeaderContent___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var HeaderContent___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(HeaderContent___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var HeaderContent___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var HeaderContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(HeaderContent___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var HeaderContent___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var HeaderContent___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(HeaderContent___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * Header content wraps the main content when there is an adjacent Icon or Image.
 */
function HeaderContent(props) {
  var children = props.children,
      className = props.className;

  var classes = HeaderContent___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('content', className);
  var rest = getUnhandledProps_defaultExport(HeaderContent, props);
  var ElementType = getElementType_defaultExport(HeaderContent, props);

  return HeaderContent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    HeaderContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

HeaderContent.handledProps = ['as', 'children', 'className'];
HeaderContent._meta = {
  name: 'HeaderContent',
  parent: 'Header',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? HeaderContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: HeaderContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: HeaderContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : void 0;

/* harmony default export */ var HeaderContent_defaultExport = (HeaderContent);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Header/Header.js
/* harmony import */ var Header___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Header___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Header___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Header___WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(544);
/* harmony import */ var Header___WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(Header___WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var Header___WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(543);
/* harmony import */ var Header___WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(Header___WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var Header___WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(542);
/* harmony import */ var Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(Header___WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var Header___WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(11);
/* harmony import */ var Header___WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(Header___WEBPACK_IMPORTED_MODULE_4_react__);














/**
 * A header provides a short summary of content
 */
function Header(props) {
  var attached = props.attached,
      block = props.block,
      children = props.children,
      className = props.className,
      color = props.color,
      content = props.content,
      disabled = props.disabled,
      dividing = props.dividing,
      floated = props.floated,
      icon = props.icon,
      image = props.image,
      inverted = props.inverted,
      size = props.size,
      sub = props.sub,
      subheader = props.subheader,
      textAlign = props.textAlign;


  var classes = Header___WEBPACK_IMPORTED_MODULE_2_classnames___default.a('ui', color, size, useKeyOnly(block, 'block'), useKeyOnly(disabled, 'disabled'), useKeyOnly(dividing, 'dividing'), useValueAndKey(floated, 'floated'), useKeyOnly(icon === true, 'icon'), useKeyOnly(image === true, 'image'), useKeyOnly(inverted, 'inverted'), useKeyOnly(sub, 'sub'), useKeyOrValueAndKey(attached, 'attached'), useTextAlignProp(textAlign), 'header', className);
  var rest = getUnhandledProps_defaultExport(Header, props);
  var ElementType = getElementType_defaultExport(Header, props);

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return Header___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      ElementType,
      Header___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  var iconElement = Icon_defaultExport.create(icon);
  var imageElement = Image_defaultExport.create(image);
  var subheaderElement = HeaderSubheader_defaultExport.create(subheader);

  if (iconElement || imageElement) {
    return Header___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      ElementType,
      Header___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      iconElement || imageElement,
      (content || subheaderElement) && Header___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        HeaderContent_defaultExport,
        null,
        content,
        subheaderElement
      )
    );
  }

  return Header___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    ElementType,
    Header___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    content,
    subheaderElement
  );
}

Header.handledProps = ['as', 'attached', 'block', 'children', 'className', 'color', 'content', 'disabled', 'dividing', 'floated', 'icon', 'image', 'inverted', 'size', 'sub', 'subheader', 'textAlign'];
Header._meta = {
  name: 'Header',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? Header.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Attach header  to other content, like a segment. */
  attached: Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['top', 'bottom'])]),

  /** Format header to appear inside a content block. */
  block: Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Primary content. */
  children: Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Color of the header. */
  color: Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.COLORS),

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** Show that the header is inactive. */
  disabled: Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Divide header from the content below it. */
  dividing: Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Header can sit to the left or right of other content. */
  floated: Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.FLOATS),

  /** Add an icon by icon name or pass an Icon. */
  icon: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['image']), Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, customPropTypes_namespaceObject.itemShorthand])]),

  /** Add an image by img src or pass an Image. */
  image: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['icon']), Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, customPropTypes_namespaceObject.itemShorthand])]),

  /** Inverts the color of the header for dark backgrounds. */
  inverted: Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Content headings are sized with em and are based on the font-size of their container. */
  size: Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(Header___WEBPACK_IMPORTED_MODULE_1_lodash_without___default.a(SUI_namespaceObject.SIZES, 'big', 'massive')),

  /** Headers may be formatted to label smaller or de-emphasized content. */
  sub: Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Shorthand for Header.Subheader. */
  subheader: customPropTypes_namespaceObject.itemShorthand,

  /** Align header content. */
  textAlign: Header___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.TEXT_ALIGNMENTS)
} : void 0;

Header.Content = HeaderContent_defaultExport;
Header.Subheader = HeaderSubheader_defaultExport;

/* harmony default export */ var Header_defaultExport = (Header);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Header/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/List/ListDescription.js
/* harmony import */ var ListDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ListDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ListDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ListDescription___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var ListDescription___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(ListDescription___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var ListDescription___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var ListDescription___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(ListDescription___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var ListDescription___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var ListDescription___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(ListDescription___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A list item can contain a description.
 */
function ListDescription(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = ListDescription___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(className, 'description');
  var rest = getUnhandledProps_defaultExport(ListDescription, props);
  var ElementType = getElementType_defaultExport(ListDescription, props);

  return ListDescription___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    ListDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

ListDescription.handledProps = ['as', 'children', 'className', 'content'];
ListDescription._meta = {
  name: 'ListDescription',
  parent: 'List',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? ListDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: ListDescription___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: ListDescription___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand
} : void 0;

ListDescription.create = createShorthandFactory(ListDescription, function (content) {
  return { content: content };
});

/* harmony default export */ var ListDescription_defaultExport = (ListDescription);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/List/ListHeader.js
/* harmony import */ var ListHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ListHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ListHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ListHeader___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var ListHeader___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(ListHeader___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var ListHeader___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var ListHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(ListHeader___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var ListHeader___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var ListHeader___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(ListHeader___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A list item can contain a header.
 */
function ListHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = ListHeader___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('header', className);
  var rest = getUnhandledProps_defaultExport(ListHeader, props);
  var ElementType = getElementType_defaultExport(ListHeader, props);

  return ListHeader___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    ListHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

ListHeader.handledProps = ['as', 'children', 'className', 'content'];
ListHeader._meta = {
  name: 'ListHeader',
  parent: 'List',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? ListHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: ListHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: ListHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand
} : void 0;

ListHeader.create = createShorthandFactory(ListHeader, function (content) {
  return { content: content };
});

/* harmony default export */ var ListHeader_defaultExport = (ListHeader);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/List/ListContent.js
/* harmony import */ var ListContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ListContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ListContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ListContent___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var ListContent___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(ListContent___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var ListContent___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var ListContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(ListContent___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var ListContent___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var ListContent___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(ListContent___WEBPACK_IMPORTED_MODULE_3_react__);









/**
 * A list item can contain a content.
 */
function ListContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      floated = props.floated,
      header = props.header,
      verticalAlign = props.verticalAlign;


  var classes = ListContent___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(useValueAndKey(floated, 'floated'), useVerticalAlignProp(verticalAlign), 'content', className);
  var rest = getUnhandledProps_defaultExport(ListContent, props);
  var ElementType = getElementType_defaultExport(ListContent, props);

  if (!childrenUtils_namespaceObject.isNil(children)) return ListContent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    ListContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );

  return ListContent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    ListContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    ListHeader_defaultExport.create(header),
    ListDescription_defaultExport.create(description),
    content
  );
}

ListContent.handledProps = ['as', 'children', 'className', 'content', 'description', 'floated', 'header', 'verticalAlign'];
ListContent._meta = {
  name: 'ListContent',
  parent: 'List',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? ListContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: ListContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: ListContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** Shorthand for ListDescription. */
  description: customPropTypes_namespaceObject.itemShorthand,

  /** An list content can be floated left or right. */
  floated: ListContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.FLOATS),

  /** Shorthand for ListHeader. */
  header: customPropTypes_namespaceObject.itemShorthand,

  /** An element inside a list can be vertically aligned. */
  verticalAlign: ListContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.VERTICAL_ALIGNMENTS)
} : void 0;

ListContent.create = createShorthandFactory(ListContent, function (content) {
  return { content: content };
});

/* harmony default export */ var ListContent_defaultExport = (ListContent);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/List/ListIcon.js
/* harmony import */ var ListIcon___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ListIcon___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ListIcon___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ListIcon___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var ListIcon___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(ListIcon___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var ListIcon___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var ListIcon___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(ListIcon___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var ListIcon___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var ListIcon___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(ListIcon___WEBPACK_IMPORTED_MODULE_3_react__);








/**
 * A list item can contain an icon.
 */
function ListIcon(props) {
  var className = props.className,
      verticalAlign = props.verticalAlign;

  var classes = ListIcon___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(useVerticalAlignProp(verticalAlign), className);
  var rest = getUnhandledProps_defaultExport(ListIcon, props);

  return ListIcon___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Icon_defaultExport, ListIcon___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }));
}

ListIcon.handledProps = ['className', 'verticalAlign'];
ListIcon._meta = {
  name: 'ListIcon',
  parent: 'List',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? ListIcon.propTypes = {
  /** Additional classes. */
  className: ListIcon___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** An element inside a list can be vertically aligned. */
  verticalAlign: ListIcon___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.VERTICAL_ALIGNMENTS)
} : void 0;

ListIcon.create = createShorthandFactory(ListIcon, function (name) {
  return { name: name };
});

/* harmony default export */ var ListIcon_defaultExport = (ListIcon);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/List/ListItem.js
/* harmony import */ var ListItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ListItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ListItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ListItem___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var ListItem___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(ListItem___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var ListItem___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var ListItem___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(ListItem___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var ListItem___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var ListItem___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(ListItem___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var ListItem___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var ListItem___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(ListItem___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var ListItem___WEBPACK_IMPORTED_MODULE_5_lodash_isPlainObject__ = __webpack_require__(565);
/* harmony import */ var ListItem___WEBPACK_IMPORTED_MODULE_5_lodash_isPlainObject___default = __webpack_require__.n(ListItem___WEBPACK_IMPORTED_MODULE_5_lodash_isPlainObject__);
/* harmony import */ var ListItem___WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(543);
/* harmony import */ var ListItem___WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(ListItem___WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var ListItem___WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(542);
/* harmony import */ var ListItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(ListItem___WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var ListItem___WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(11);
/* harmony import */ var ListItem___WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(ListItem___WEBPACK_IMPORTED_MODULE_8_react__);



















/**
 * A list item can contain a set of items.
 */

var ListItem_ListItem = function (_Component) {
  ListItem___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(ListItem, _Component);

  function ListItem() {
    var _ref;

    var _temp, _this, _ret;

    ListItem___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, ListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = ListItem___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;


      if (onClick) onClick(e, _this.props);
    }, _temp), ListItem___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  ListItem___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(ListItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          content = _props.content,
          description = _props.description,
          disabled = _props.disabled,
          header = _props.header,
          icon = _props.icon,
          image = _props.image,
          value = _props.value;


      var ElementType = getElementType_defaultExport(ListItem, this.props);
      var classes = ListItem___WEBPACK_IMPORTED_MODULE_6_classnames___default.a(useKeyOnly(active, 'active'), useKeyOnly(disabled, 'disabled'), useKeyOnly(ElementType !== 'li', 'item'), className);
      var rest = getUnhandledProps_defaultExport(ListItem, this.props);
      var valueProp = ElementType === 'li' ? { value: value } : { 'data-value': value };

      if (!childrenUtils_namespaceObject.isNil(children)) {
        return ListItem___WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          ElementType,
          ListItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, valueProp, { role: 'listitem', className: classes, onClick: this.handleClick }),
          children
        );
      }

      var iconElement = ListIcon_defaultExport.create(icon);
      var imageElement = Image_defaultExport.create(image);

      // See description of `content` prop for explanation about why this is necessary.
      if (!ListItem___WEBPACK_IMPORTED_MODULE_8_react__["isValidElement"](content) && ListItem___WEBPACK_IMPORTED_MODULE_5_lodash_isPlainObject___default.a(content)) {
        return ListItem___WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          ElementType,
          ListItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, valueProp, { role: 'listitem', className: classes, onClick: this.handleClick }),
          iconElement || imageElement,
          ListContent_defaultExport.create(content, { header: header, description: description })
        );
      }

      var headerElement = ListHeader_defaultExport.create(header);
      var descriptionElement = ListDescription_defaultExport.create(description);
      if (iconElement || imageElement) {
        return ListItem___WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          ElementType,
          ListItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, valueProp, { role: 'listitem', className: classes, onClick: this.handleClick }),
          iconElement || imageElement,
          (content || headerElement || descriptionElement) && ListItem___WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
            ListContent_defaultExport,
            null,
            headerElement,
            descriptionElement,
            content
          )
        );
      }

      return ListItem___WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        ElementType,
        ListItem___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, valueProp, { role: 'listitem', className: classes, onClick: this.handleClick }),
        headerElement,
        descriptionElement,
        content
      );
    }
  }]);

  return ListItem;
}(ListItem___WEBPACK_IMPORTED_MODULE_8_react__["Component"]);

ListItem_ListItem._meta = {
  name: 'ListItem',
  parent: 'List',
  type: META_namespaceObject.TYPES.ELEMENT
};
ListItem_ListItem.handledProps = ['active', 'as', 'children', 'className', 'content', 'description', 'disabled', 'header', 'icon', 'image', 'onClick', 'value'];
 true ? ListItem_ListItem.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A list item can active. */
  active: ListItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,

  /** Primary content. */
  children: ListItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.node,

  /** Additional classes. */
  className: ListItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,

  /**
   * Shorthand for primary content.
   *
   * Heads up!
   *
   * This is handled slightly differently than the typical `content` prop since
   * the wrapping ListContent is not used when there's no icon or image.
   *
   * If you pass content as:
   * - an element/literal, it's treated as the sibling node to
   * header/description (whether wrapped in Item.Content or not).
   * - a props object, it forces the presence of Item.Content and passes those
   * props to it. If you pass a content prop within that props object, it
   * will be treated as the sibling node to header/description.
   */
  content: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for ListDescription. */
  description: customPropTypes_namespaceObject.itemShorthand,

  /** A list item can disabled. */
  disabled: ListItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,

  /** Shorthand for ListHeader. */
  header: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for ListIcon. */
  icon: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['image']), customPropTypes_namespaceObject.itemShorthand]),

  /** Shorthand for Image. */
  image: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['icon']), customPropTypes_namespaceObject.itemShorthand]),

  /** A ListItem can be clicked */
  onClick: ListItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func,

  /** A value for an ordered list. */
  value: ListItem___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string
} : void 0;


ListItem_ListItem.create = createShorthandFactory(ListItem_ListItem, function (content) {
  return { content: content };
});

/* harmony default export */ var ListItem_defaultExport = (ListItem_ListItem);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/List/ListList.js
/* harmony import */ var ListList___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ListList___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ListList___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ListList___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var ListList___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(ListList___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var ListList___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var ListList___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(ListList___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var ListList___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var ListList___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(ListList___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A list can contain a sub list.
 */
function ListList(props) {
  var children = props.children,
      className = props.className;


  var rest = getUnhandledProps_defaultExport(ListList, props);
  var ElementType = getElementType_defaultExport(ListList, props);
  var classes = ListList___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(useKeyOnly(ElementType !== 'ul' && ElementType !== 'ol', 'list'), className);

  return ListList___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    ListList___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

ListList.handledProps = ['as', 'children', 'className'];
ListList._meta = {
  name: 'ListList',
  parent: 'List',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? ListList.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: ListList___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: ListList___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : void 0;

/* harmony default export */ var ListList_defaultExport = (ListList);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/List/List.js
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(List___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(List___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(List___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(List___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(List___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_5_lodash_map__ = __webpack_require__(548);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_5_lodash_map___default = __webpack_require__.n(List___WEBPACK_IMPORTED_MODULE_5_lodash_map__);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_6_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default = __webpack_require__.n(List___WEBPACK_IMPORTED_MODULE_6_lodash_invoke__);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(543);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(List___WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(542);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(List___WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(11);
/* harmony import */ var List___WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(List___WEBPACK_IMPORTED_MODULE_9_react__);




















/**
 * A list groups related content.
 */

var List_List = function (_Component) {
  List___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(List, _Component);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    List___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = List___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.handleItemOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e, itemProps) {
          List___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(predefinedProps, 'onClick', e, itemProps);
          List___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a(_this.props, 'onItemClick', e, itemProps);
        }
      };
    }, _temp), List___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  List___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(List, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          animated = _props.animated,
          bulleted = _props.bulleted,
          celled = _props.celled,
          children = _props.children,
          className = _props.className,
          divided = _props.divided,
          floated = _props.floated,
          horizontal = _props.horizontal,
          inverted = _props.inverted,
          items = _props.items,
          link = _props.link,
          ordered = _props.ordered,
          relaxed = _props.relaxed,
          selection = _props.selection,
          size = _props.size,
          verticalAlign = _props.verticalAlign;


      var classes = List___WEBPACK_IMPORTED_MODULE_7_classnames___default.a('ui', size, useKeyOnly(animated, 'animated'), useKeyOnly(bulleted, 'bulleted'), useKeyOnly(celled, 'celled'), useKeyOnly(divided, 'divided'), useKeyOnly(horizontal, 'horizontal'), useKeyOnly(inverted, 'inverted'), useKeyOnly(link, 'link'), useKeyOnly(ordered, 'ordered'), useKeyOnly(selection, 'selection'), useKeyOrValueAndKey(relaxed, 'relaxed'), useValueAndKey(floated, 'floated'), useVerticalAlignProp(verticalAlign), 'list', className);
      var rest = getUnhandledProps_defaultExport(List, this.props);
      var ElementType = getElementType_defaultExport(List, this.props);

      if (!childrenUtils_namespaceObject.isNil(children)) {
        return List___WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
          ElementType,
          List___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { role: 'list', className: classes }),
          children
        );
      }

      return List___WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        ElementType,
        List___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { role: 'list', className: classes }),
        List___WEBPACK_IMPORTED_MODULE_5_lodash_map___default.a(items, function (item) {
          return ListItem_defaultExport.create(item, { overrideProps: _this2.handleItemOverrides });
        })
      );
    }
  }]);

  return List;
}(List___WEBPACK_IMPORTED_MODULE_9_react__["Component"]);

List_List._meta = {
  name: 'List',
  type: META_namespaceObject.TYPES.ELEMENT
};
List_List.Content = ListContent_defaultExport;
List_List.Description = ListDescription_defaultExport;
List_List.Header = ListHeader_defaultExport;
List_List.Icon = ListIcon_defaultExport;
List_List.Item = ListItem_defaultExport;
List_List.List = ListList_defaultExport;
List_List.handledProps = ['animated', 'as', 'bulleted', 'celled', 'children', 'className', 'divided', 'floated', 'horizontal', 'inverted', 'items', 'link', 'onItemClick', 'ordered', 'relaxed', 'selection', 'size', 'verticalAlign'];
 true ? List_List.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A list can animate to set the current item apart from the list. */
  animated: List___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A list can mark items with a bullet. */
  bulleted: List___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A list can divide its items into cells. */
  celled: List___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Primary content. */
  children: List___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.node,

  /** Additional classes. */
  className: List___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,

  /** A list can show divisions between content. */
  divided: List___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** An list can be floated left or right. */
  floated: List___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(SUI_namespaceObject.FLOATS),

  /** A list can be formatted to have items appear horizontally. */
  horizontal: List___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A list can be inverted to appear on a dark background. */
  inverted: List___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Shorthand array of props for ListItem. */
  items: customPropTypes_namespaceObject.collectionShorthand,

  /** A list can be specially formatted for navigation links. */
  link: List___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /**
   * onClick handler for ListItem. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onItemClick: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['children']), List___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func]),

  /** A list can be ordered numerically. */
  ordered: List___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A list can relax its padding to provide more negative space. */
  relaxed: List___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([List___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool, List___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(['very'])]),

  /** A selection list formats list items as possible choices. */
  selection: List___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** A list can vary in size. */
  size: List___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(SUI_namespaceObject.SIZES),

  /** An element inside a list can be vertically aligned. */
  verticalAlign: List___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(SUI_namespaceObject.VERTICAL_ALIGNMENTS)
} : void 0;


/* harmony default export */ var List_defaultExport = (List_List);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/List/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Loader/Loader.js
/* harmony import */ var Loader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Loader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Loader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Loader___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var Loader___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(Loader___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var Loader___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var Loader___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(Loader___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var Loader___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var Loader___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(Loader___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A loader alerts a user to wait for an activity to complete.
 * @see Dimmer
 */
function Loader(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      content = props.content,
      disabled = props.disabled,
      indeterminate = props.indeterminate,
      inline = props.inline,
      inverted = props.inverted,
      size = props.size;


  var classes = Loader___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('ui', size, useKeyOnly(active, 'active'), useKeyOnly(disabled, 'disabled'), useKeyOnly(indeterminate, 'indeterminate'), useKeyOnly(inverted, 'inverted'), useKeyOnly(children || content, 'text'), useKeyOrValueAndKey(inline, 'inline'), 'loader', className);
  var rest = getUnhandledProps_defaultExport(Loader, props);
  var ElementType = getElementType_defaultExport(Loader, props);

  return Loader___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    Loader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

Loader.handledProps = ['active', 'as', 'children', 'className', 'content', 'disabled', 'indeterminate', 'inline', 'inverted', 'size'];
Loader._meta = {
  name: 'Loader',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? Loader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A loader can be active or visible. */
  active: Loader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Primary content. */
  children: Loader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: Loader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** A loader can be disabled or hidden. */
  disabled: Loader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** A loader can show it's unsure of how long a task will take. */
  indeterminate: Loader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Loaders can appear inline with content. */
  inline: Loader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([Loader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, Loader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['centered'])]),

  /** Loaders can have their colors inverted. */
  inverted: Loader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Loaders can have different sizes. */
  size: Loader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.SIZES)
} : void 0;

/* harmony default export */ var Loader_defaultExport = (Loader);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Loader/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Rail/Rail.js
/* harmony import */ var Rail___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Rail___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Rail___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Rail___WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(544);
/* harmony import */ var Rail___WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(Rail___WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var Rail___WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(543);
/* harmony import */ var Rail___WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(Rail___WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var Rail___WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(542);
/* harmony import */ var Rail___WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(Rail___WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var Rail___WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(11);
/* harmony import */ var Rail___WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(Rail___WEBPACK_IMPORTED_MODULE_4_react__);









/**
 * A rail is used to show accompanying content outside the boundaries of the main view of a site.
 */
function Rail(props) {
  var attached = props.attached,
      children = props.children,
      className = props.className,
      close = props.close,
      dividing = props.dividing,
      internal = props.internal,
      position = props.position,
      size = props.size;


  var classes = Rail___WEBPACK_IMPORTED_MODULE_2_classnames___default.a('ui', position, size, useKeyOnly(attached, 'attached'), useKeyOnly(dividing, 'dividing'), useKeyOnly(internal, 'internal'), useKeyOrValueAndKey(close, 'close'), 'rail', className);
  var rest = getUnhandledProps_defaultExport(Rail, props);
  var ElementType = getElementType_defaultExport(Rail, props);

  return Rail___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    ElementType,
    Rail___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

Rail.handledProps = ['as', 'attached', 'children', 'className', 'close', 'dividing', 'internal', 'position', 'size'];
Rail._meta = {
  name: 'Rail',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? Rail.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A rail can appear attached to the main viewport. */
  attached: Rail___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Primary content. */
  children: Rail___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: Rail___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** A rail can appear closer to the main viewport. */
  close: Rail___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([Rail___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, Rail___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['very'])]),

  /** A rail can create a division between itself and a container. */
  dividing: Rail___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A rail can attach itself to the inside of a container. */
  internal: Rail___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A rail can be presented on the left or right side of a container. */
  position: Rail___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.FLOATS).isRequired,

  /** A rail can have different sizes. */
  size: Rail___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(Rail___WEBPACK_IMPORTED_MODULE_1_lodash_without___default.a(SUI_namespaceObject.SIZES, 'medium'))
} : void 0;

/* harmony default export */ var Rail_defaultExport = (Rail);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Rail/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Reveal/RevealContent.js
/* harmony import */ var RevealContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var RevealContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(RevealContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var RevealContent___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var RevealContent___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(RevealContent___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var RevealContent___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var RevealContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(RevealContent___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var RevealContent___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var RevealContent___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(RevealContent___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A content sub-component for the Reveal.
 */
function RevealContent(props) {
  var children = props.children,
      className = props.className,
      hidden = props.hidden,
      visible = props.visible;


  var classes = RevealContent___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('ui', useKeyOnly(hidden, 'hidden'), useKeyOnly(visible, 'visible'), 'content', className);
  var rest = getUnhandledProps_defaultExport(RevealContent, props);
  var ElementType = getElementType_defaultExport(RevealContent, props);

  return RevealContent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    RevealContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

RevealContent.handledProps = ['as', 'children', 'className', 'hidden', 'visible'];
RevealContent._meta = {
  name: 'RevealContent',
  parent: 'Reveal',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? RevealContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: RevealContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: RevealContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** A reveal may contain content that is visible before interaction. */
  hidden: RevealContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** A reveal may contain content that is hidden before user interaction. */
  visible: RevealContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : void 0;

/* harmony default export */ var RevealContent_defaultExport = (RevealContent);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Reveal/Reveal.js
/* harmony import */ var Reveal___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Reveal___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Reveal___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Reveal___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var Reveal___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(Reveal___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var Reveal___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var Reveal___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(Reveal___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var Reveal___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var Reveal___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(Reveal___WEBPACK_IMPORTED_MODULE_3_react__);








/**
 * A reveal displays additional content in place of previous content when activated.
 */
function Reveal(props) {
  var active = props.active,
      animated = props.animated,
      children = props.children,
      className = props.className,
      disabled = props.disabled,
      instant = props.instant;


  var classes = Reveal___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('ui', animated, useKeyOnly(active, 'active'), useKeyOnly(disabled, 'disabled'), useKeyOnly(instant, 'instant'), 'reveal', className);
  var rest = getUnhandledProps_defaultExport(Reveal, props);
  var ElementType = getElementType_defaultExport(Reveal, props);

  return Reveal___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    Reveal___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

Reveal.handledProps = ['active', 'animated', 'as', 'children', 'className', 'disabled', 'instant'];
Reveal._meta = {
  name: 'Reveal',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? Reveal.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** An active reveal displays its hidden content. */
  active: Reveal___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** An animation name that will be applied to Reveal. */
  animated: Reveal___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['fade', 'small fade', 'move', 'move right', 'move up', 'move down', 'rotate', 'rotate left']),

  /** Primary content. */
  children: Reveal___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: Reveal___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** A disabled reveal will not animate when hovered. */
  disabled: Reveal___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** An element can show its content without delay. */
  instant: Reveal___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : void 0;

Reveal.Content = RevealContent_defaultExport;

/* harmony default export */ var Reveal_defaultExport = (Reveal);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Reveal/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Segment/SegmentGroup.js
/* harmony import */ var SegmentGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var SegmentGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(SegmentGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var SegmentGroup___WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(544);
/* harmony import */ var SegmentGroup___WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(SegmentGroup___WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var SegmentGroup___WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(543);
/* harmony import */ var SegmentGroup___WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(SegmentGroup___WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var SegmentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(542);
/* harmony import */ var SegmentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(SegmentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var SegmentGroup___WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(11);
/* harmony import */ var SegmentGroup___WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(SegmentGroup___WEBPACK_IMPORTED_MODULE_4_react__);









/**
 * A group of segments can be formatted to appear together.
 */
function SegmentGroup(props) {
  var children = props.children,
      className = props.className,
      compact = props.compact,
      horizontal = props.horizontal,
      piled = props.piled,
      raised = props.raised,
      size = props.size,
      stacked = props.stacked;


  var classes = SegmentGroup___WEBPACK_IMPORTED_MODULE_2_classnames___default.a('ui', size, useKeyOnly(compact, 'compact'), useKeyOnly(horizontal, 'horizontal'), useKeyOnly(piled, 'piled'), useKeyOnly(raised, 'raised'), useKeyOnly(stacked, 'stacked'), 'segments', className);
  var rest = getUnhandledProps_defaultExport(SegmentGroup, props);
  var ElementType = getElementType_defaultExport(SegmentGroup, props);

  return SegmentGroup___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    ElementType,
    SegmentGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

SegmentGroup.handledProps = ['as', 'children', 'className', 'compact', 'horizontal', 'piled', 'raised', 'size', 'stacked'];
SegmentGroup._meta = {
  name: 'SegmentGroup',
  parent: 'Segment',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? SegmentGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: SegmentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: SegmentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** A segment may take up only as much space as is necessary. */
  compact: SegmentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Formats content to be aligned horizontally. */
  horizontal: SegmentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Formatted to look like a pile of pages. */
  piled: SegmentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A segment group may be formatted to raise above the page. */
  raised: SegmentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A segment group can have different sizes. */
  size: SegmentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SegmentGroup___WEBPACK_IMPORTED_MODULE_1_lodash_without___default.a(SUI_namespaceObject.SIZES, 'medium')),

  /** Formatted to show it contains multiple pages. */
  stacked: SegmentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool
} : void 0;

/* harmony default export */ var SegmentGroup_defaultExport = (SegmentGroup);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js
/* harmony import */ var Segment___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Segment___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Segment___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Segment___WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(544);
/* harmony import */ var Segment___WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(Segment___WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var Segment___WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(543);
/* harmony import */ var Segment___WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(Segment___WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var Segment___WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(542);
/* harmony import */ var Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(Segment___WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var Segment___WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(11);
/* harmony import */ var Segment___WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(Segment___WEBPACK_IMPORTED_MODULE_4_react__);










/**
 * A segment is used to create a grouping of related content.
 */
function Segment(props) {
  var attached = props.attached,
      basic = props.basic,
      children = props.children,
      circular = props.circular,
      className = props.className,
      clearing = props.clearing,
      color = props.color,
      compact = props.compact,
      disabled = props.disabled,
      floated = props.floated,
      inverted = props.inverted,
      loading = props.loading,
      padded = props.padded,
      piled = props.piled,
      raised = props.raised,
      secondary = props.secondary,
      size = props.size,
      stacked = props.stacked,
      tertiary = props.tertiary,
      textAlign = props.textAlign,
      vertical = props.vertical;


  var classes = Segment___WEBPACK_IMPORTED_MODULE_2_classnames___default.a('ui', color, size, useKeyOnly(basic, 'basic'), useKeyOnly(circular, 'circular'), useKeyOnly(clearing, 'clearing'), useKeyOnly(compact, 'compact'), useKeyOnly(disabled, 'disabled'), useKeyOnly(inverted, 'inverted'), useKeyOnly(loading, 'loading'), useKeyOnly(piled, 'piled'), useKeyOnly(raised, 'raised'), useKeyOnly(secondary, 'secondary'), useKeyOnly(stacked, 'stacked'), useKeyOnly(tertiary, 'tertiary'), useKeyOnly(vertical, 'vertical'), useKeyOrValueAndKey(attached, 'attached'), useKeyOrValueAndKey(padded, 'padded'), useTextAlignProp(textAlign), useValueAndKey(floated, 'floated'), 'segment', className);
  var rest = getUnhandledProps_defaultExport(Segment, props);
  var ElementType = getElementType_defaultExport(Segment, props);

  return Segment___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    ElementType,
    Segment___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

Segment.handledProps = ['as', 'attached', 'basic', 'children', 'circular', 'className', 'clearing', 'color', 'compact', 'disabled', 'floated', 'inverted', 'loading', 'padded', 'piled', 'raised', 'secondary', 'size', 'stacked', 'tertiary', 'textAlign', 'vertical'];
Segment.Group = SegmentGroup_defaultExport;

Segment._meta = {
  name: 'Segment',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? Segment.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Attach segment to other content, like a header. */
  attached: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['top', 'bottom'])]),

  /** A basic segment has no special formatting. */
  basic: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Primary content. */
  children: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** A segment can be circular. */
  circular: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Additional classes. */
  className: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** A segment can clear floated content. */
  clearing: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Segment can be colored. */
  color: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.COLORS),

  /** A segment may take up only as much space as is necessary. */
  compact: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A segment may show its content is disabled. */
  disabled: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Segment content can be floated to the left or right. */
  floated: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.FLOATS),

  /** A segment can have its colors inverted for contrast. */
  inverted: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A segment may show its content is being loaded. */
  loading: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A segment can increase its padding. */
  padded: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['very'])]),

  /** Formatted to look like a pile of pages. */
  piled: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A segment may be formatted to raise above the page. */
  raised: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A segment can be formatted to appear less noticeable. */
  secondary: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A segment can have different sizes. */
  size: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(Segment___WEBPACK_IMPORTED_MODULE_1_lodash_without___default.a(SUI_namespaceObject.SIZES, 'medium')),

  /** Formatted to show it contains multiple pages. */
  stacked: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A segment can be formatted to appear even less noticeable. */
  tertiary: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Formats content to be aligned as part of a vertical group. */
  textAlign: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(Segment___WEBPACK_IMPORTED_MODULE_1_lodash_without___default.a(SUI_namespaceObject.TEXT_ALIGNMENTS, 'justified')),

  /** Formats content to be aligned vertically. */
  vertical: Segment___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool
} : void 0;

/* harmony default export */ var Segment_defaultExport = (Segment);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Segment/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Step/StepDescription.js
/* harmony import */ var StepDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var StepDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(StepDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var StepDescription___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var StepDescription___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(StepDescription___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var StepDescription___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var StepDescription___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(StepDescription___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var StepDescription___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var StepDescription___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(StepDescription___WEBPACK_IMPORTED_MODULE_3_react__);







function StepDescription(props) {
  var children = props.children,
      className = props.className,
      description = props.description;

  var classes = StepDescription___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('description', className);
  var rest = getUnhandledProps_defaultExport(StepDescription, props);
  var ElementType = getElementType_defaultExport(StepDescription, props);

  return StepDescription___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    StepDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? description : children
  );
}

StepDescription.handledProps = ['as', 'children', 'className', 'description'];
StepDescription._meta = {
  name: 'StepDescription',
  parent: 'Step',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? StepDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: StepDescription___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: StepDescription___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  description: customPropTypes_namespaceObject.contentShorthand
} : void 0;

/* harmony default export */ var StepDescription_defaultExport = (StepDescription);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Step/StepTitle.js
/* harmony import */ var StepTitle___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var StepTitle___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(StepTitle___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var StepTitle___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var StepTitle___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(StepTitle___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var StepTitle___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var StepTitle___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(StepTitle___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var StepTitle___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var StepTitle___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(StepTitle___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A step can contain a title.
 */
function StepTitle(props) {
  var children = props.children,
      className = props.className,
      title = props.title;

  var classes = StepTitle___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('title', className);
  var rest = getUnhandledProps_defaultExport(StepTitle, props);
  var ElementType = getElementType_defaultExport(StepTitle, props);

  return StepTitle___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    StepTitle___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? title : children
  );
}

StepTitle.handledProps = ['as', 'children', 'className', 'title'];
StepTitle._meta = {
  name: 'StepTitle',
  parent: 'Step',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? StepTitle.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: StepTitle___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: StepTitle___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  title: customPropTypes_namespaceObject.contentShorthand
} : void 0;

/* harmony default export */ var StepTitle_defaultExport = (StepTitle);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Step/StepContent.js
/* harmony import */ var StepContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var StepContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(StepContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var StepContent___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var StepContent___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(StepContent___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var StepContent___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var StepContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(StepContent___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var StepContent___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var StepContent___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(StepContent___WEBPACK_IMPORTED_MODULE_3_react__);









/**
 * A step can contain a content.
 */
function StepContent(props) {
  var children = props.children,
      className = props.className,
      description = props.description,
      title = props.title;

  var classes = StepContent___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('content', className);
  var rest = getUnhandledProps_defaultExport(StepContent, props);
  var ElementType = getElementType_defaultExport(StepContent, props);

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return StepContent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      ElementType,
      StepContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  return StepContent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    StepContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    createShorthand(StepTitle_defaultExport, function (val) {
      return { title: val };
    }, title),
    createShorthand(StepDescription_defaultExport, function (val) {
      return { description: val };
    }, description)
  );
}

StepContent.handledProps = ['as', 'children', 'className', 'description', 'title'];
StepContent._meta = {
  name: 'StepContent',
  parent: 'Step',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? StepContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: StepContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: StepContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for StepDescription. */
  description: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for StepTitle. */
  title: customPropTypes_namespaceObject.itemShorthand
} : void 0;

/* harmony default export */ var StepContent_defaultExport = (StepContent);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Step/StepGroup.js
/* harmony import */ var StepGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var StepGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(StepGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var StepGroup___WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(544);
/* harmony import */ var StepGroup___WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(StepGroup___WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var StepGroup___WEBPACK_IMPORTED_MODULE_2_lodash_map__ = __webpack_require__(548);
/* harmony import */ var StepGroup___WEBPACK_IMPORTED_MODULE_2_lodash_map___default = __webpack_require__.n(StepGroup___WEBPACK_IMPORTED_MODULE_2_lodash_map__);
/* harmony import */ var StepGroup___WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(543);
/* harmony import */ var StepGroup___WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(StepGroup___WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var StepGroup___WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(542);
/* harmony import */ var StepGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(StepGroup___WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var StepGroup___WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(11);
/* harmony import */ var StepGroup___WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(StepGroup___WEBPACK_IMPORTED_MODULE_5_react__);











/**
 * A set of steps.
 */
function StepGroup(props) {
  var children = props.children,
      className = props.className,
      fluid = props.fluid,
      items = props.items,
      ordered = props.ordered,
      size = props.size,
      stackable = props.stackable,
      vertical = props.vertical;

  var classes = StepGroup___WEBPACK_IMPORTED_MODULE_3_classnames___default.a('ui', size, useKeyOnly(fluid, 'fluid'), useKeyOnly(ordered, 'ordered'), useKeyOnly(vertical, 'vertical'), useValueAndKey(stackable, 'stackable'), 'steps', className);
  var rest = getUnhandledProps_defaultExport(StepGroup, props);
  var ElementType = getElementType_defaultExport(StepGroup, props);

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return StepGroup___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      ElementType,
      StepGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  var content = StepGroup___WEBPACK_IMPORTED_MODULE_2_lodash_map___default.a(items, function (item) {
    var key = item.key || [item.title, item.description].join('-');
    return StepGroup___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Step_defaultExport, StepGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({ key: key }, item));
  });

  return StepGroup___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    ElementType,
    StepGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    content
  );
}

StepGroup.handledProps = ['as', 'children', 'className', 'fluid', 'items', 'ordered', 'size', 'stackable', 'vertical'];
StepGroup._meta = {
  name: 'StepGroup',
  parent: 'Step',
  type: META_namespaceObject.TYPES.ELEMENT
};

 true ? StepGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: StepGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,

  /** Additional classes. */
  className: StepGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /** A fluid step takes up the width of its container. */
  fluid: StepGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Shorthand array of props for Step. */
  items: customPropTypes_namespaceObject.collectionShorthand,

  /** A step can show a ordered sequence of steps. */
  ordered: StepGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Steps can have different sizes. */
  size: StepGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(StepGroup___WEBPACK_IMPORTED_MODULE_1_lodash_without___default.a(SUI_namespaceObject.SIZES, 'medium')),

  /** A step can stack vertically only on smaller screens. */
  stackable: StepGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['tablet']),

  /** A step can be displayed stacked vertically. */
  vertical: StepGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool
} : void 0;

/* harmony default export */ var StepGroup_defaultExport = (StepGroup);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Step/Step.js
/* harmony import */ var Step___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Step___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Step___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Step___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Step___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Step___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Step___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Step___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(Step___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var Step___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Step___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Step___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Step___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Step___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(Step___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var Step___WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(543);
/* harmony import */ var Step___WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(Step___WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var Step___WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(542);
/* harmony import */ var Step___WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(Step___WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var Step___WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(11);
/* harmony import */ var Step___WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(Step___WEBPACK_IMPORTED_MODULE_7_react__);

















/**
 * A step shows the completion status of an activity in a series of activities.
 */

var Step_Step = function (_Component) {
  Step___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(Step, _Component);

  function Step() {
    var _ref;

    var _temp, _this, _ret;

    Step___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, Step);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Step___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Step.__proto__ || Object.getPrototypeOf(Step)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;


      if (onClick) onClick(e, _this.props);
    }, _temp), Step___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Step___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(Step, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          completed = _props.completed,
          description = _props.description,
          disabled = _props.disabled,
          href = _props.href,
          icon = _props.icon,
          link = _props.link,
          onClick = _props.onClick,
          title = _props.title;


      var classes = Step___WEBPACK_IMPORTED_MODULE_5_classnames___default.a(useKeyOnly(active, 'active'), useKeyOnly(completed, 'completed'), useKeyOnly(disabled, 'disabled'), useKeyOnly(link, 'link'), 'step', className);
      var rest = getUnhandledProps_defaultExport(Step, this.props);
      var ElementType = getElementType_defaultExport(Step, this.props, function () {
        if (onClick) return 'a';
      });

      if (!childrenUtils_namespaceObject.isNil(children)) {
        return Step___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          ElementType,
          Step___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, href: href, onClick: this.handleClick }),
          children
        );
      }

      return Step___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        ElementType,
        Step___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, href: href, onClick: this.handleClick }),
        Icon_defaultExport.create(icon),
        Step___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(StepContent_defaultExport, { description: description, title: title })
      );
    }
  }]);

  return Step;
}(Step___WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

Step_Step._meta = {
  name: 'Step',
  type: META_namespaceObject.TYPES.ELEMENT
};
Step_Step.Content = StepContent_defaultExport;
Step_Step.Description = StepDescription_defaultExport;
Step_Step.Group = StepGroup_defaultExport;
Step_Step.Title = StepTitle_defaultExport;
Step_Step.handledProps = ['active', 'as', 'children', 'className', 'completed', 'description', 'disabled', 'href', 'icon', 'link', 'onClick', 'ordered', 'title'];
/* harmony default export */ var Step_defaultExport = (Step_Step);
 true ? Step_Step.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A step can be highlighted as active. */
  active: Step___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Primary content. */
  children: Step___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node,

  /** Additional classes. */
  className: Step___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /** A step can show that a user has completed it. */
  completed: Step___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Shorthand for StepDescription. */
  description: customPropTypes_namespaceObject.itemShorthand,

  /** Show that the Loader is inactive. */
  disabled: Step___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: Step___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /** Shorthand for Icon. */
  icon: customPropTypes_namespaceObject.itemShorthand,

  /** A step can be link. */
  link: Step___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: Step___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /** A step can show a ordered sequence of steps. Passed from StepGroup. */
  ordered: Step___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Shorthand for StepTitle. */
  title: customPropTypes_namespaceObject.itemShorthand
} : void 0;
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/elements/Step/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Accordion/AccordionContent.js
/* harmony import */ var AccordionContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var AccordionContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(AccordionContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var AccordionContent___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var AccordionContent___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(AccordionContent___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var AccordionContent___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var AccordionContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(AccordionContent___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var AccordionContent___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var AccordionContent___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(AccordionContent___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A content sub-component for Accordion component.
 */
function AccordionContent(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      content = props.content;

  var classes = AccordionContent___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('content', useKeyOnly(active, 'active'), className);
  var rest = getUnhandledProps_defaultExport(AccordionContent, props);
  var ElementType = getElementType_defaultExport(AccordionContent, props);

  return AccordionContent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    AccordionContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

AccordionContent.handledProps = ['active', 'as', 'children', 'className', 'content'];
 true ? AccordionContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Whether or not the content is visible. */
  active: AccordionContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Primary content. */
  children: AccordionContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: AccordionContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand
} : void 0;

AccordionContent._meta = {
  name: 'AccordionContent',
  type: META_namespaceObject.TYPES.MODULE,
  parent: 'Accordion'
};

AccordionContent.create = createShorthandFactory(AccordionContent, function (content) {
  return { content: content };
});

/* harmony default export */ var AccordionContent_defaultExport = (AccordionContent);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Accordion/AccordionTitle.js
/* harmony import */ var AccordionTitle___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var AccordionTitle___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(AccordionTitle___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var AccordionTitle___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var AccordionTitle___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(AccordionTitle___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var AccordionTitle___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var AccordionTitle___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(AccordionTitle___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var AccordionTitle___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var AccordionTitle___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(AccordionTitle___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var AccordionTitle___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var AccordionTitle___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(AccordionTitle___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var AccordionTitle___WEBPACK_IMPORTED_MODULE_5_lodash_isNil__ = __webpack_require__(549);
/* harmony import */ var AccordionTitle___WEBPACK_IMPORTED_MODULE_5_lodash_isNil___default = __webpack_require__.n(AccordionTitle___WEBPACK_IMPORTED_MODULE_5_lodash_isNil__);
/* harmony import */ var AccordionTitle___WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(543);
/* harmony import */ var AccordionTitle___WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(AccordionTitle___WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var AccordionTitle___WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__(542);
/* harmony import */ var AccordionTitle___WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(AccordionTitle___WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var AccordionTitle___WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(11);
/* harmony import */ var AccordionTitle___WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(AccordionTitle___WEBPACK_IMPORTED_MODULE_8_react__);















/**
 * A title sub-component for Accordion component.
 */

var AccordionTitle_AccordionTitle = function (_Component) {
  AccordionTitle___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(AccordionTitle, _Component);

  function AccordionTitle() {
    var _ref;

    var _temp, _this, _ret;

    AccordionTitle___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, AccordionTitle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = AccordionTitle___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = AccordionTitle.__proto__ || Object.getPrototypeOf(AccordionTitle)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;


      if (onClick) onClick(e, _this.props);
    }, _temp), AccordionTitle___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  AccordionTitle___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(AccordionTitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          content = _props.content;


      var classes = AccordionTitle___WEBPACK_IMPORTED_MODULE_6_classnames___default.a(useKeyOnly(active, 'active'), 'title', className);
      var rest = getUnhandledProps_defaultExport(AccordionTitle, this.props);
      var ElementType = getElementType_defaultExport(AccordionTitle, this.props);

      if (AccordionTitle___WEBPACK_IMPORTED_MODULE_5_lodash_isNil___default.a(content)) {
        return AccordionTitle___WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          ElementType,
          AccordionTitle___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, onClick: this.handleClick }),
          children
        );
      }

      return AccordionTitle___WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        ElementType,
        AccordionTitle___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, onClick: this.handleClick }),
        AccordionTitle___WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(Icon_defaultExport, { name: 'dropdown' }),
        content
      );
    }
  }]);

  return AccordionTitle;
}(AccordionTitle___WEBPACK_IMPORTED_MODULE_8_react__["Component"]);

AccordionTitle_AccordionTitle._meta = {
  name: 'AccordionTitle',
  type: META_namespaceObject.TYPES.MODULE,
  parent: 'Accordion'
};
AccordionTitle_AccordionTitle.handledProps = ['active', 'as', 'children', 'className', 'content', 'onClick'];
/* harmony default export */ var AccordionTitle_defaultExport = (AccordionTitle_AccordionTitle);
 true ? AccordionTitle_AccordionTitle.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Whether or not the title is in the open state. */
  active: AccordionTitle___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool,

  /** Primary content. */
  children: AccordionTitle___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.node,

  /** Additional classes. */
  className: AccordionTitle___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: AccordionTitle___WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func
} : void 0;


AccordionTitle_AccordionTitle.create = createShorthandFactory(AccordionTitle_AccordionTitle, function (content) {
  return { content: content };
});
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Accordion/Accordion.js
/* harmony import */ var Accordion___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Accordion___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Accordion___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var Accordion___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Accordion___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Accordion___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Accordion___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Accordion___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(Accordion___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var Accordion___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Accordion___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Accordion___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Accordion___WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Accordion___WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(Accordion___WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_keys__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_omit__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_omit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_omit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isFunction__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_each__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_each__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_has__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_without__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_includes__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_classnames__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_prop_types__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_prop_types__);
/* harmony import */ var Accordion___WEBPACK_IMPORTED_MODULE_15_react__ = __webpack_require__(11);
/* harmony import */ var Accordion___WEBPACK_IMPORTED_MODULE_15_react___default = __webpack_require__.n(Accordion___WEBPACK_IMPORTED_MODULE_15_react__);























/**
 * An accordion allows users to toggle the display of sections of content.
 */

var Accordion_Accordion = function (_Component) {
  Accordion___WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default.a(Accordion, _Component);

  function Accordion() {
    var _ref;

    var _temp, _this, _ret;

    Accordion___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default.a(this, Accordion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Accordion___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call.apply(_ref, [this].concat(args))), _this), _this.handleTitleClick = function (e, index) {
      var _this$props = _this.props,
          onTitleClick = _this$props.onTitleClick,
          exclusive = _this$props.exclusive;
      var activeIndex = _this.state.activeIndex;


      var newIndex = void 0;
      if (exclusive) {
        newIndex = index === activeIndex ? -1 : index;
      } else {
        // check to see if index is in array, and remove it, if not then add it
        newIndex = __WEBPACK_IMPORTED_MODULE_12_lodash_includes___default.a(activeIndex, index) ? __WEBPACK_IMPORTED_MODULE_11_lodash_without___default.a(activeIndex, index) : [].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default.a(activeIndex), [index]);
      }
      _this.trySetState({ activeIndex: newIndex });
      if (onTitleClick) onTitleClick(e, index);
    }, _this.isIndexActive = function (index) {
      var exclusive = _this.props.exclusive;
      var activeIndex = _this.state.activeIndex;

      return exclusive ? activeIndex === index : __WEBPACK_IMPORTED_MODULE_12_lodash_includes___default.a(activeIndex, index);
    }, _this.renderChildren = function () {
      var children = _this.props.children;

      var titleIndex = 0;
      var contentIndex = 0;

      return Accordion___WEBPACK_IMPORTED_MODULE_15_react__["Children"].map(children, function (child) {
        var isTitle = child.type === AccordionTitle_defaultExport;
        var isContent = child.type === AccordionContent_defaultExport;

        if (isTitle) {
          var currentIndex = titleIndex;
          var isActive = __WEBPACK_IMPORTED_MODULE_10_lodash_has___default.a(child, 'props.active') ? child.props.active : _this.isIndexActive(titleIndex);
          var onClick = function onClick(e) {
            _this.handleTitleClick(e, currentIndex);
            if (child.props.onClick) child.props.onClick(e, currentIndex);
          };
          titleIndex++;
          return Accordion___WEBPACK_IMPORTED_MODULE_15_react__["cloneElement"](child, Accordion___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, child.props, { active: isActive, onClick: onClick }));
        }

        if (isContent) {
          var _isActive = __WEBPACK_IMPORTED_MODULE_10_lodash_has___default.a(child, 'props.active') ? child.props.active : _this.isIndexActive(contentIndex);
          contentIndex++;
          return Accordion___WEBPACK_IMPORTED_MODULE_15_react__["cloneElement"](child, Accordion___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, child.props, { active: _isActive }));
        }

        return child;
      });
    }, _this.renderPanels = function () {
      var panels = _this.props.panels;

      var children = [];

      __WEBPACK_IMPORTED_MODULE_9_lodash_each___default.a(panels, function (panel, i) {
        var isActive = __WEBPACK_IMPORTED_MODULE_10_lodash_has___default.a(panel, 'active') ? panel.active : _this.isIndexActive(i);
        var onClick = function onClick(e) {
          _this.handleTitleClick(e, i);
          if (panel.onClick) panel.onClick(e, i);
        };

        // implement all methods of creating a key that are supported in factories
        var key = panel.key || __WEBPACK_IMPORTED_MODULE_8_lodash_isFunction___default.a(panel.childKey) && panel.childKey(panel) || panel.childKey && panel.childKey || panel.title;

        children.push(AccordionTitle_defaultExport.create({ active: isActive, onClick: onClick, key: key + '-title', content: panel.title }));
        children.push(AccordionContent_defaultExport.create({ active: isActive, key: key + '-content', content: panel.content }));
      });

      return children;
    }, _temp), Accordion___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Accordion___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default.a(Accordion, [{
    key: 'getInitialState',
    value: function getInitialState(_ref2) {
      var exclusive = _ref2.exclusive;

      return { activeIndex: exclusive ? -1 : [-1] };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          fluid = _props.fluid,
          inverted = _props.inverted,
          panels = _props.panels,
          styled = _props.styled;


      var classes = __WEBPACK_IMPORTED_MODULE_13_classnames___default.a('ui', useKeyOnly(fluid, 'fluid'), useKeyOnly(inverted, 'inverted'), useKeyOnly(styled, 'styled'), 'accordion', className);
      var rest = __WEBPACK_IMPORTED_MODULE_7_lodash_omit___default.a(this.props, __WEBPACK_IMPORTED_MODULE_6_lodash_keys___default.a(Accordion.propTypes));
      var ElementType = getElementType_defaultExport(Accordion, this.props);

      return Accordion___WEBPACK_IMPORTED_MODULE_15_react___default.a.createElement(
        ElementType,
        Accordion___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
        panels ? this.renderPanels() : this.renderChildren()
      );
    }
  }]);

  return Accordion;
}(AutoControlledComponent_defaultExport);

Accordion_Accordion.defaultProps = {
  exclusive: true
};
Accordion_Accordion.autoControlledProps = ['activeIndex'];
Accordion_Accordion._meta = {
  name: 'Accordion',
  type: META_namespaceObject.TYPES.MODULE
};
Accordion_Accordion.Content = AccordionContent_defaultExport;
Accordion_Accordion.Title = AccordionTitle_defaultExport;
Accordion_Accordion.handledProps = ['activeIndex', 'as', 'children', 'className', 'defaultActiveIndex', 'exclusive', 'fluid', 'inverted', 'onTitleClick', 'panels', 'styled'];
/* harmony default export */ var Accordion_defaultExport = (Accordion_Accordion);
 true ? Accordion_Accordion.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Index of the currently active panel. */
  activeIndex: __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.number), __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.number]),

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.string,

  /** Initial activeIndex value. */
  defaultActiveIndex: __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.number), __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.number]),

  /** Only allow one panel open at a time. */
  exclusive: __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.bool,

  /** Format to take up the width of it's container. */
  fluid: __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.bool,

  /** Format for dark backgrounds. */
  inverted: __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.bool,

  /**
   * Called when a panel title is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {number} index - The index of the clicked panel.
   */
  onTitleClick: __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.func,

  /**
   * Create simple accordion panels from an array of { text: <string>, content: <custom> } objects.
   * Object can optionally define an `active` key to open/close the panel.
   * Object can opitonally define a `key` key used for title and content nodes' keys.
   * Mutually exclusive with children.
   * TODO: AccordionPanel should be a sub-component
   */
  panels: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['children']), __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.shape({
    key: __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.string,
    active: __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.bool,
    title: customPropTypes_namespaceObject.contentShorthand,
    content: customPropTypes_namespaceObject.contentShorthand,
    onClick: __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.func
  }))]),

  /** Adds some basic styling to accordion panels. */
  styled: __WEBPACK_IMPORTED_MODULE_14_prop_types___default.a.bool
} : void 0;
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Embed/Embed.js
/* harmony import */ var Embed___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Embed___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Embed___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Embed___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Embed___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Embed___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Embed___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Embed___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(Embed___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var Embed___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Embed___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Embed___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Embed___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Embed___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(Embed___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var Embed___WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(543);
/* harmony import */ var Embed___WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(Embed___WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var Embed___WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(542);
/* harmony import */ var Embed___WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(Embed___WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var Embed___WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(11);
/* harmony import */ var Embed___WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(Embed___WEBPACK_IMPORTED_MODULE_7_react__);












/**
 * An embed displays content from other websites like YouTube videos or Google Maps.
 */

var Embed_Embed = function (_Component) {
  Embed___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(Embed, _Component);

  function Embed() {
    var _ref;

    var _temp, _this, _ret;

    Embed___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, Embed);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Embed___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Embed.__proto__ || Object.getPrototypeOf(Embed)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;
      var active = _this.state.active;


      if (onClick) onClick(e, Embed___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, _this.props, { active: true }));
      if (!active) _this.trySetState({ active: true });
    }, _temp), Embed___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Embed___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(Embed, [{
    key: 'getSrc',
    value: function getSrc() {
      var _props = this.props,
          _props$autoplay = _props.autoplay,
          autoplay = _props$autoplay === undefined ? true : _props$autoplay,
          _props$brandedUI = _props.brandedUI,
          brandedUI = _props$brandedUI === undefined ? false : _props$brandedUI,
          _props$color = _props.color,
          color = _props$color === undefined ? '#444444' : _props$color,
          _props$hd = _props.hd,
          hd = _props$hd === undefined ? true : _props$hd,
          id = _props.id,
          source = _props.source,
          url = _props.url;


      if (source === 'youtube') {
        return ['//www.youtube.com/embed/' + id, '?autohide=true', '&amp;autoplay=' + autoplay, '&amp;color=' + encodeURIComponent(color), '&amp;hq=' + hd, '&amp;jsapi=false', '&amp;modestbranding=' + brandedUI].join('');
      }

      if (source === 'vimeo') {
        return ['//player.vimeo.com/video/' + id, '?api=false', '&amp;autoplay=' + autoplay, '&amp;byline=false', '&amp;color=' + encodeURIComponent(color), '&amp;portrait=false', '&amp;title=false'].join('');
      }

      return url;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          aspectRatio = _props2.aspectRatio,
          className = _props2.className,
          icon = _props2.icon,
          placeholder = _props2.placeholder;
      var active = this.state.active;


      var classes = Embed___WEBPACK_IMPORTED_MODULE_5_classnames___default.a('ui', aspectRatio, useKeyOnly(active, 'active'), 'embed', className);
      var rest = getUnhandledProps_defaultExport(Embed, this.props);
      var ElementType = getElementType_defaultExport(Embed, this.props);

      return Embed___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        ElementType,
        Embed___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, onClick: this.handleClick }),
        Icon_defaultExport.create(icon),
        placeholder && Embed___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('img', { className: 'placeholder', src: placeholder }),
        this.renderEmbed()
      );
    }
  }, {
    key: 'renderEmbed',
    value: function renderEmbed() {
      var _props3 = this.props,
          children = _props3.children,
          source = _props3.source;
      var active = this.state.active;


      if (!active) return null;
      if (!childrenUtils_namespaceObject.isNil(children)) return Embed___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        { className: 'embed' },
        children
      );

      return Embed___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        { className: 'embed' },
        Embed___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('iframe', {
          title: 'Embedded content from ' + source + '.',
          allowFullScreen: '',
          frameBorder: '0',
          height: '100%',
          scrolling: 'no',
          src: this.getSrc(),
          width: '100%'
        })
      );
    }
  }]);

  return Embed;
}(AutoControlledComponent_defaultExport);

Embed_Embed.autoControlledProps = ['active'];
Embed_Embed.defaultProps = {
  icon: 'video play'
};
Embed_Embed._meta = {
  name: 'Embed',
  type: META_namespaceObject.TYPES.MODULE
};
Embed_Embed.handledProps = ['active', 'as', 'aspectRatio', 'autoplay', 'brandedUI', 'children', 'className', 'color', 'defaultActive', 'hd', 'icon', 'id', 'onClick', 'placeholder', 'source', 'url'];
/* harmony default export */ var Embed_defaultExport = (Embed_Embed);
 true ? Embed_Embed.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** An embed can be active. */
  active: Embed___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** An embed can specify an alternative aspect ratio. */
  aspectRatio: Embed___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(['4:3', '16:9', '21:9']),

  /** Setting to true or false will force autoplay. */
  autoplay: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.demand(['source']), Embed___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool]),

  /** Whether to show networks branded UI like title cards, or after video calls to action. */
  brandedUI: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.demand(['source']), Embed___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool]),

  /** Primary content. */
  children: Embed___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node,

  /** Additional classes. */
  className: Embed___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /** Specifies a default chrome color with Vimeo or YouTube. */
  color: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.demand(['source']), Embed___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string]),

  /** Initial value of active. */
  defaultActive: Embed___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Whether to show networks branded UI like title cards, or after video calls to action. */
  hd: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.demand(['source']), Embed___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool]),

  /** Specifies an icon to use with placeholder content. */
  icon: customPropTypes_namespaceObject.itemShorthand,

  /** Specifies an id for source. */
  id: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.demand(['source']), Embed___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string]),

  /**
   * Сalled on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onClick: Embed___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /** A placeholder image for embed. */
  placeholder: Embed___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /** Specifies a source to use. */
  source: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['sourceUrl']), Embed___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(['youtube', 'vimeo'])]),

  /** Specifies a url to use for embed. */
  url: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['source']), Embed___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string])
} : void 0;
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Embed/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Popup/PopupContent.js
/* harmony import */ var PopupContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var PopupContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(PopupContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var PopupContent___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var PopupContent___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(PopupContent___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var PopupContent___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var PopupContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(PopupContent___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var PopupContent___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var PopupContent___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(PopupContent___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A PopupContent displays the content body of a Popover.
 */
function PopupContent(props) {
  var children = props.children,
      className = props.className;

  var classes = PopupContent___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('content', className);
  var rest = getUnhandledProps_defaultExport(PopupContent, props);
  var ElementType = getElementType_defaultExport(PopupContent, props);

  return PopupContent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    PopupContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

PopupContent.handledProps = ['as', 'children', 'className'];
 true ? PopupContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** The content of the Popup */
  children: PopupContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Classes to add to the Popup content className. */
  className: PopupContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : void 0;

PopupContent._meta = {
  name: 'PopupContent',
  type: META_namespaceObject.TYPES.MODULE,
  parent: 'Popup'
};

PopupContent.create = createShorthandFactory(PopupContent, function (children) {
  return { children: children };
});
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Popup/PopupHeader.js
/* harmony import */ var PopupHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var PopupHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(PopupHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var PopupHeader___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var PopupHeader___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(PopupHeader___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var PopupHeader___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var PopupHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(PopupHeader___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var PopupHeader___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var PopupHeader___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(PopupHeader___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A PopupHeader displays a header in a Popover.
 */
function PopupHeader(props) {
  var children = props.children,
      className = props.className;

  var classes = PopupHeader___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('header', className);
  var rest = getUnhandledProps_defaultExport(PopupHeader, props);
  var ElementType = getElementType_defaultExport(PopupHeader, props);

  return PopupHeader___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    PopupHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

PopupHeader.handledProps = ['as', 'children', 'className'];
 true ? PopupHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: PopupHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: PopupHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : void 0;

PopupHeader._meta = {
  name: 'PopupHeader',
  type: META_namespaceObject.TYPES.MODULE,
  parent: 'Popup'
};

PopupHeader.create = createShorthandFactory(PopupHeader, function (children) {
  return { children: children };
});
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Popup/Popup.js
/* harmony import */ var Popup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Popup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Popup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Popup___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Popup___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Popup___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Popup___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Popup___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(Popup___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var Popup___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Popup___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Popup___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Popup___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Popup___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(Popup___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var Popup___WEBPACK_IMPORTED_MODULE_5_lodash_pick__ = __webpack_require__(577);
/* harmony import */ var Popup___WEBPACK_IMPORTED_MODULE_5_lodash_pick___default = __webpack_require__.n(Popup___WEBPACK_IMPORTED_MODULE_5_lodash_pick__);
/* harmony import */ var Popup___WEBPACK_IMPORTED_MODULE_6_lodash_omit__ = __webpack_require__(580);
/* harmony import */ var Popup___WEBPACK_IMPORTED_MODULE_6_lodash_omit___default = __webpack_require__.n(Popup___WEBPACK_IMPORTED_MODULE_6_lodash_omit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_assign__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_mapValues__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_mapValues___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_mapValues__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isNumber__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_isNumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_isNumber__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_includes__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_includes__);
/* harmony import */ var Popup___WEBPACK_IMPORTED_MODULE_11_lodash_without__ = __webpack_require__(544);
/* harmony import */ var Popup___WEBPACK_IMPORTED_MODULE_11_lodash_without___default = __webpack_require__.n(Popup___WEBPACK_IMPORTED_MODULE_11_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_classnames__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_prop_types__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react__);






















var Popup_debug = makeDebugger('popup');

var POSITIONS = ['top left', 'top right', 'bottom right', 'bottom left', 'right center', 'left center', 'top center', 'bottom center'];

/**
 * A Popup displays additional information on top of a page.
 */

var Popup_Popup = function (_Component) {
  Popup___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(Popup, _Component);

  function Popup() {
    var _ref;

    var _temp, _this, _ret;

    Popup___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Popup___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.hideOnScroll = function (e) {
      _this.setState({ closed: true });
      window.removeEventListener('scroll', _this.hideOnScroll);
      setTimeout(function () {
        return _this.setState({ closed: false });
      }, 50);
    }, _this.handleClose = function (e) {
      Popup_debug('handleClose()');
      var onClose = _this.props.onClose;

      if (onClose) onClose(e, _this.props);
    }, _this.handleOpen = function (e) {
      Popup_debug('handleOpen()');
      _this.coords = e.currentTarget.getBoundingClientRect();

      var onOpen = _this.props.onOpen;

      if (onOpen) onOpen(e, _this.props);
    }, _this.handlePortalMount = function (e) {
      Popup_debug('handlePortalMount()');
      if (_this.props.hideOnScroll) {
        window.addEventListener('scroll', _this.hideOnScroll);
      }

      var onMount = _this.props.onMount;

      if (onMount) onMount(e, _this.props);
    }, _this.handlePortalUnmount = function (e) {
      Popup_debug('handlePortalUnmount()');
      var onUnmount = _this.props.onUnmount;

      if (onUnmount) onUnmount(e, _this.props);
    }, _this.handlePopupRef = function (popupRef) {
      Popup_debug('popupMounted()');
      _this.popupCoords = popupRef ? popupRef.getBoundingClientRect() : null;
      _this.setPopupStyle();
    }, _temp), Popup___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Popup___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(Popup, [{
    key: 'computePopupStyle',
    value: function computePopupStyle(positions) {
      var style = { position: 'absolute'

        // Do not access window/document when server side rendering
      };if (!isBrowser_defaultExport) return style;

      var offset = this.props.offset;
      var _window = window,
          pageYOffset = _window.pageYOffset,
          pageXOffset = _window.pageXOffset;
      var _document$documentEle = document.documentElement,
          clientWidth = _document$documentEle.clientWidth,
          clientHeight = _document$documentEle.clientHeight;


      if (__WEBPACK_IMPORTED_MODULE_10_lodash_includes___default.a(positions, 'right')) {
        style.right = Math.round(clientWidth - (this.coords.right + pageXOffset));
        style.left = 'auto';
      } else if (__WEBPACK_IMPORTED_MODULE_10_lodash_includes___default.a(positions, 'left')) {
        style.left = Math.round(this.coords.left + pageXOffset);
        style.right = 'auto';
      } else {
        // if not left nor right, we are horizontally centering the element
        var xOffset = (this.coords.width - this.popupCoords.width) / 2;
        style.left = Math.round(this.coords.left + xOffset + pageXOffset);
        style.right = 'auto';
      }

      if (__WEBPACK_IMPORTED_MODULE_10_lodash_includes___default.a(positions, 'top')) {
        style.bottom = Math.round(clientHeight - (this.coords.top + pageYOffset));
        style.top = 'auto';
      } else if (__WEBPACK_IMPORTED_MODULE_10_lodash_includes___default.a(positions, 'bottom')) {
        style.top = Math.round(this.coords.bottom + pageYOffset);
        style.bottom = 'auto';
      } else {
        // if not top nor bottom, we are vertically centering the element
        var yOffset = (this.coords.height + this.popupCoords.height) / 2;
        style.top = Math.round(this.coords.bottom + pageYOffset - yOffset);
        style.bottom = 'auto';

        var _xOffset = this.popupCoords.width + 8;
        if (__WEBPACK_IMPORTED_MODULE_10_lodash_includes___default.a(positions, 'right')) {
          style.right -= _xOffset;
        } else {
          style.left -= _xOffset;
        }
      }

      if (offset) {
        if (__WEBPACK_IMPORTED_MODULE_9_lodash_isNumber___default.a(style.right)) {
          style.right -= offset;
        } else {
          style.left -= offset;
        }
      }

      return style;
    }

    // check if the style would display
    // the popup outside of the view port

  }, {
    key: 'isStyleInViewport',
    value: function isStyleInViewport(style) {
      var _window2 = window,
          pageYOffset = _window2.pageYOffset,
          pageXOffset = _window2.pageXOffset;
      var _document$documentEle2 = document.documentElement,
          clientWidth = _document$documentEle2.clientWidth,
          clientHeight = _document$documentEle2.clientHeight;


      var element = {
        top: style.top,
        left: style.left,
        width: this.popupCoords.width,
        height: this.popupCoords.height
      };
      if (__WEBPACK_IMPORTED_MODULE_9_lodash_isNumber___default.a(style.right)) {
        element.left = clientWidth - style.right - element.width;
      }
      if (__WEBPACK_IMPORTED_MODULE_9_lodash_isNumber___default.a(style.bottom)) {
        element.top = clientHeight - style.bottom - element.height;
      }

      // hidden on top
      if (element.top < pageYOffset) return false;
      // hidden on the bottom
      if (element.top + element.height > pageYOffset + clientHeight) return false;
      // hidden the left
      if (element.left < pageXOffset) return false;
      // hidden on the right
      if (element.left + element.width > pageXOffset + clientWidth) return false;

      return true;
    }
  }, {
    key: 'setPopupStyle',
    value: function setPopupStyle() {
      if (!this.coords || !this.popupCoords) return;
      var position = this.props.position;
      var style = this.computePopupStyle(position);

      // Lets detect if the popup is out of the viewport and adjust
      // the position accordingly
      var positions = Popup___WEBPACK_IMPORTED_MODULE_11_lodash_without___default.a(POSITIONS, position);
      for (var i = 0; !this.isStyleInViewport(style) && i < positions.length; i++) {
        style = this.computePopupStyle(positions[i]);
        position = positions[i];
      }

      // Append 'px' to every numerical values in the style
      style = __WEBPACK_IMPORTED_MODULE_8_lodash_mapValues___default.a(style, function (value) {
        return __WEBPACK_IMPORTED_MODULE_9_lodash_isNumber___default.a(value) ? value + 'px' : value;
      });
      this.setState({ style: style, position: position });
    }
  }, {
    key: 'getPortalProps',
    value: function getPortalProps() {
      var portalProps = {};

      var _props = this.props,
          on = _props.on,
          hoverable = _props.hoverable;


      if (hoverable) {
        portalProps.closeOnPortalMouseLeave = true;
        portalProps.mouseLeaveDelay = 300;
      }

      if (on === 'click') {
        portalProps.openOnTriggerClick = true;
        portalProps.closeOnTriggerClick = true;
        portalProps.closeOnDocumentClick = true;
      } else if (on === 'focus') {
        portalProps.openOnTriggerFocus = true;
        portalProps.closeOnTriggerBlur = true;
      } else if (on === 'hover') {
        portalProps.openOnTriggerMouseEnter = true;
        portalProps.closeOnTriggerMouseLeave = true;
        // Taken from SUI: https://git.io/vPmCm
        portalProps.mouseLeaveDelay = 70;
        portalProps.mouseEnterDelay = 50;
      }

      return portalProps;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          basic = _props2.basic,
          children = _props2.children,
          className = _props2.className,
          content = _props2.content,
          flowing = _props2.flowing,
          header = _props2.header,
          inverted = _props2.inverted,
          size = _props2.size,
          trigger = _props2.trigger,
          wide = _props2.wide;
      var _state = this.state,
          position = _state.position,
          closed = _state.closed;

      var style = __WEBPACK_IMPORTED_MODULE_7_lodash_assign___default.a({}, this.state.style, this.props.style);
      var classes = __WEBPACK_IMPORTED_MODULE_12_classnames___default.a('ui', position, size, useKeyOrValueAndKey(wide, 'wide'), useKeyOnly(basic, 'basic'), useKeyOnly(flowing, 'flowing'), useKeyOnly(inverted, 'inverted'), 'popup transition visible', className);

      if (closed) return trigger;

      var unhandled = getUnhandledProps_defaultExport(Popup, this.props);
      var portalPropNames = Portal_defaultExport.handledProps;

      var rest = Popup___WEBPACK_IMPORTED_MODULE_6_lodash_omit___default.a(unhandled, portalPropNames);
      var portalProps = Popup___WEBPACK_IMPORTED_MODULE_5_lodash_pick___default.a(unhandled, portalPropNames);
      var ElementType = getElementType_defaultExport(Popup, this.props);

      var popupJSX = __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
        ElementType,
        Popup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, style: style, ref: this.handlePopupRef }),
        children,
        childrenUtils_namespaceObject.isNil(children) && PopupHeader.create(header),
        childrenUtils_namespaceObject.isNil(children) && PopupContent.create(content)
      );

      var mergedPortalProps = Popup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, this.getPortalProps(), portalProps);
      Popup_debug('portal props:', mergedPortalProps);

      return __WEBPACK_IMPORTED_MODULE_14_react___default.a.createElement(
        Portal_defaultExport,
        Popup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, mergedPortalProps, {
          trigger: trigger,
          onClose: this.handleClose,
          onMount: this.handlePortalMount,
          onOpen: this.handleOpen,
          onUnmount: this.handlePortalUnmount
        }),
        popupJSX
      );
    }
  }]);

  return Popup;
}(__WEBPACK_IMPORTED_MODULE_14_react__["Component"]);

Popup_Popup.defaultProps = {
  position: 'top left',
  on: 'hover'
};
Popup_Popup._meta = {
  name: 'Popup',
  type: META_namespaceObject.TYPES.MODULE
};
Popup_Popup.Content = PopupContent;
Popup_Popup.Header = PopupHeader;
Popup_Popup.handledProps = ['basic', 'children', 'className', 'content', 'flowing', 'header', 'hideOnScroll', 'hoverable', 'inverted', 'offset', 'on', 'onClose', 'onMount', 'onOpen', 'onUnmount', 'position', 'size', 'style', 'trigger', 'wide'];
/* harmony default export */ var Popup_defaultExport = (Popup_Popup);
 true ? Popup_Popup.propTypes = {
  /** Display the popup without the pointing arrow. */
  basic: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.string,

  /** Simple text content for the popover. */
  content: customPropTypes_namespaceObject.itemShorthand,

  /** A flowing Popup has no maximum width and continues to flow to fit its content. */
  flowing: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** Takes up the entire width of its offset container. */
  // TODO: implement the Popup fluid layout
  // fluid: PropTypes.bool,

  /** Header displayed above the content in bold. */
  header: customPropTypes_namespaceObject.itemShorthand,

  /** Hide the Popup when scrolling the window. */
  hideOnScroll: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** Whether the popup should not close on hover. */
  hoverable: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** Invert the colors of the Popup. */
  inverted: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool,

  /** Horizontal offset in pixels to be applied to the Popup. */
  offset: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.number,

  /** Event triggering the popup. */
  on: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOf(['hover', 'click', 'focus']),

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.func,

  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.func,

  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.func,

  /** Position for the popover. */
  position: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOf(POSITIONS),

  /** Popup size. */
  size: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOf(Popup___WEBPACK_IMPORTED_MODULE_11_lodash_without___default.a(SUI_namespaceObject.SIZES, 'medium', 'big', 'massive')),

  /** Custom Popup style. */
  style: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.object,

  /** Element to be rendered in-place where the popup is defined. */
  trigger: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.node,

  /** Popup width. */
  wide: __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_13_prop_types___default.a.oneOf(['very'])])
} : void 0;
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Popup/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Progress/Progress.js
/* harmony import */ var Progress___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Progress___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Progress___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Progress___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Progress___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Progress___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Progress___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Progress___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(Progress___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var Progress___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Progress___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Progress___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Progress___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Progress___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(Progress___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_round__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_round___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_round__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_clamp__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_clamp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_clamp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isUndefined__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_without__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_prop_types__);
/* harmony import */ var Progress___WEBPACK_IMPORTED_MODULE_11_react__ = __webpack_require__(11);
/* harmony import */ var Progress___WEBPACK_IMPORTED_MODULE_11_react___default = __webpack_require__.n(Progress___WEBPACK_IMPORTED_MODULE_11_react__);
















/**
 * A progress bar shows the progression of a task.
 */

var Progress_Progress = function (_Component) {
  Progress___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(Progress, _Component);

  function Progress() {
    var _ref;

    var _temp, _this, _ret;

    Progress___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, Progress);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Progress___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Progress.__proto__ || Object.getPrototypeOf(Progress)).call.apply(_ref, [this].concat(args))), _this), _this.calculatePercent = function () {
      var _this$props = _this.props,
          percent = _this$props.percent,
          total = _this$props.total,
          value = _this$props.value;


      if (!__WEBPACK_IMPORTED_MODULE_7_lodash_isUndefined___default.a(percent)) return percent;
      if (!__WEBPACK_IMPORTED_MODULE_7_lodash_isUndefined___default.a(total) && !__WEBPACK_IMPORTED_MODULE_7_lodash_isUndefined___default.a(value)) return value / total * 100;
    }, _this.getPercent = function () {
      var precision = _this.props.precision;

      var percent = __WEBPACK_IMPORTED_MODULE_6_lodash_clamp___default.a(_this.calculatePercent(), 0, 100);

      if (__WEBPACK_IMPORTED_MODULE_7_lodash_isUndefined___default.a(precision)) return percent;
      return __WEBPACK_IMPORTED_MODULE_5_lodash_round___default.a(percent, precision);
    }, _this.isAutoSuccess = function () {
      var _this$props2 = _this.props,
          autoSuccess = _this$props2.autoSuccess,
          percent = _this$props2.percent,
          total = _this$props2.total,
          value = _this$props2.value;


      return autoSuccess && (percent >= 100 || value >= total);
    }, _this.renderLabel = function () {
      var _this$props3 = _this.props,
          children = _this$props3.children,
          label = _this$props3.label;


      if (!childrenUtils_namespaceObject.isNil(children)) return Progress___WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
        'div',
        { className: 'label' },
        children
      );
      return createHTMLDivision(label, { defaultProps: { className: 'label' } });
    }, _this.renderProgress = function (percent) {
      var _this$props4 = _this.props,
          precision = _this$props4.precision,
          progress = _this$props4.progress,
          total = _this$props4.total,
          value = _this$props4.value;


      if (!progress && __WEBPACK_IMPORTED_MODULE_7_lodash_isUndefined___default.a(precision)) return;
      return Progress___WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
        'div',
        { className: 'progress' },
        progress !== 'ratio' ? percent + '%' : value + '/' + total
      );
    }, _temp), Progress___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Progress___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(Progress, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          attached = _props.attached,
          className = _props.className,
          color = _props.color,
          disabled = _props.disabled,
          error = _props.error,
          indicating = _props.indicating,
          inverted = _props.inverted,
          size = _props.size,
          success = _props.success,
          warning = _props.warning;


      var classes = __WEBPACK_IMPORTED_MODULE_9_classnames___default.a('ui', color, size, useKeyOnly(active || indicating, 'active'), useKeyOnly(disabled, 'disabled'), useKeyOnly(error, 'error'), useKeyOnly(indicating, 'indicating'), useKeyOnly(inverted, 'inverted'), useKeyOnly(success || this.isAutoSuccess(), 'success'), useKeyOnly(warning, 'warning'), useValueAndKey(attached, 'attached'), 'progress', className);
      var rest = getUnhandledProps_defaultExport(Progress, this.props);
      var ElementType = getElementType_defaultExport(Progress, this.props);
      var percent = this.getPercent();

      return Progress___WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
        ElementType,
        Progress___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, 'data-percent': Math.floor(percent) }),
        Progress___WEBPACK_IMPORTED_MODULE_11_react___default.a.createElement(
          'div',
          { className: 'bar', style: { width: percent + '%' } },
          this.renderProgress(percent)
        ),
        this.renderLabel()
      );
    }
  }]);

  return Progress;
}(Progress___WEBPACK_IMPORTED_MODULE_11_react__["Component"]);

Progress_Progress._meta = {
  name: 'Progress',
  type: META_namespaceObject.TYPES.MODULE
};
Progress_Progress.handledProps = ['active', 'as', 'attached', 'autoSuccess', 'children', 'className', 'color', 'disabled', 'error', 'indicating', 'inverted', 'label', 'percent', 'precision', 'progress', 'size', 'success', 'total', 'value', 'warning'];
 true ? Progress_Progress.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A progress bar can show activity. */
  active: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** A progress bar can attach to and show the progress of an element (i.e. Card or Segment). */
  attached: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.oneOf(['top', 'bottom']),

  /** Whether success state should automatically trigger when progress completes. */
  autoSuccess: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string,

  /** A progress bar can have different colors. */
  color: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.oneOf(SUI_namespaceObject.COLORS),

  /** A progress bar be disabled. */
  disabled: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** A progress bar can show a error state. */
  error: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** An indicating progress bar visually indicates the current level of progress of a task. */
  indicating: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** A progress bar can have its colors inverted. */
  inverted: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /** Can be set to either to display progress as percent or ratio. */
  label: customPropTypes_namespaceObject.itemShorthand,

  /** Current percent complete. */
  percent: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['total', 'value']), __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string])]),

  /** Decimal point precision for calculated progress. */
  precision: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.number,

  /** A progress bar can contain a text value indicating current progress. */
  progress: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.oneOf(['percent', 'ratio'])]),

  /** A progress bar can vary in size. */
  size: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_8_lodash_without___default.a(SUI_namespaceObject.SIZES, 'mini', 'huge', 'massive')),

  /** A progress bar can show a success state. */
  success: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool,

  /**
   * For use with value.
   * Together, these will calculate the percent.
   * Mutually excludes percent.
   */
  total: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.demand(['value']), customPropTypes_namespaceObject.disallow(['percent']), __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string])]),

  /**
   * For use with total. Together, these will calculate the percent. Mutually excludes percent.
   */
  value: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.demand(['total']), customPropTypes_namespaceObject.disallow(['percent']), __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.string])]),

  /** A progress bar can show a warning state. */
  warning: __WEBPACK_IMPORTED_MODULE_10_prop_types___default.a.bool
} : void 0;


/* harmony default export */ var Progress_defaultExport = (Progress_Progress);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Progress/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Rating/RatingIcon.js
/* harmony import */ var RatingIcon___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var RatingIcon___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(RatingIcon___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var RatingIcon___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var RatingIcon___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(RatingIcon___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var RatingIcon___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var RatingIcon___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(RatingIcon___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var RatingIcon___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var RatingIcon___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(RatingIcon___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var RatingIcon___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var RatingIcon___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(RatingIcon___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var RatingIcon___WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(543);
/* harmony import */ var RatingIcon___WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(RatingIcon___WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var RatingIcon___WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(542);
/* harmony import */ var RatingIcon___WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(RatingIcon___WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var RatingIcon___WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(11);
/* harmony import */ var RatingIcon___WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(RatingIcon___WEBPACK_IMPORTED_MODULE_7_react__);











/**
 * An internal icon sub-component for Rating component
 */

var RatingIcon_RatingIcon = function (_Component) {
  RatingIcon___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(RatingIcon, _Component);

  function RatingIcon() {
    var _ref;

    var _temp, _this, _ret;

    RatingIcon___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, RatingIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = RatingIcon___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = RatingIcon.__proto__ || Object.getPrototypeOf(RatingIcon)).call.apply(_ref, [this].concat(args))), _this), _this.defaultProps = {
      as: 'i'
    }, _this.handleClick = function (e) {
      var onClick = _this.props.onClick;


      if (onClick) onClick(e, _this.props);
    }, _this.handleKeyUp = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onKeyUp = _this$props.onKeyUp;


      if (onKeyUp) onKeyUp(e, _this.props);

      if (onClick) {
        switch (keyboardKey_defaultExport.getCode(e)) {
          case keyboardKey_defaultExport.Enter:
          case keyboardKey_defaultExport.Spacebar:
            e.preventDefault();
            onClick(e, _this.props);
            break;
          default:
            return;
        }
      }
    }, _this.handleMouseEnter = function (e) {
      var onMouseEnter = _this.props.onMouseEnter;


      if (onMouseEnter) onMouseEnter(e, _this.props);
    }, _temp), RatingIcon___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  RatingIcon___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(RatingIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          className = _props.className,
          selected = _props.selected;

      var classes = RatingIcon___WEBPACK_IMPORTED_MODULE_5_classnames___default.a(useKeyOnly(active, 'active'), useKeyOnly(selected, 'selected'), 'icon', className);
      var rest = getUnhandledProps_defaultExport(RatingIcon, this.props);
      var ElementType = getElementType_defaultExport(RatingIcon, this.props);

      return RatingIcon___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(ElementType, RatingIcon___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, {
        className: classes,
        onClick: this.handleClick,
        onKeyUp: this.handleKeyUp,
        onMouseEnter: this.handleMouseEnter,
        tabIndex: 0,
        role: 'radio'
      }));
    }
  }]);

  return RatingIcon;
}(RatingIcon___WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

RatingIcon_RatingIcon._meta = {
  name: 'RatingIcon',
  parent: 'Rating',
  type: META_namespaceObject.TYPES.MODULE
};
RatingIcon_RatingIcon.handledProps = ['active', 'as', 'className', 'index', 'onClick', 'onKeyUp', 'onMouseEnter', 'selected'];
/* harmony default export */ var RatingIcon_defaultExport = (RatingIcon_RatingIcon);
 true ? RatingIcon_RatingIcon.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Indicates activity of an icon. */
  active: RatingIcon___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Additional classes. */
  className: RatingIcon___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /** An index of icon inside Rating. */
  index: RatingIcon___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: RatingIcon___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Called on keyup.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onKeyUp: RatingIcon___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Called on mouseenter.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseEnter: RatingIcon___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /** Indicates selection of an icon. */
  selected: RatingIcon___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool
} : void 0;
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Rating/Rating.js
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Rating___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Rating___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(Rating___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Rating___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(Rating___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_times__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_times___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_times__);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_6_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default = __webpack_require__.n(Rating___WEBPACK_IMPORTED_MODULE_6_lodash_invoke__);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_7_lodash_without__ = __webpack_require__(544);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_7_lodash_without___default = __webpack_require__.n(Rating___WEBPACK_IMPORTED_MODULE_7_lodash_without__);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__(543);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(Rating___WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_9_prop_types__ = __webpack_require__(542);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_9_prop_types___default = __webpack_require__.n(Rating___WEBPACK_IMPORTED_MODULE_9_prop_types__);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(11);
/* harmony import */ var Rating___WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(Rating___WEBPACK_IMPORTED_MODULE_10_react__);
















/**
 * A rating indicates user interest in content.
 */

var Rating_Rating = function (_Component) {
  Rating___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(Rating, _Component);

  function Rating() {
    var _ref;

    var _temp, _this, _ret;

    Rating___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, Rating);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Rating___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Rating.__proto__ || Object.getPrototypeOf(Rating)).call.apply(_ref, [this].concat(args))), _this), Rating__initialiseProps.call(_this), _temp), Rating___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Rating___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(Rating, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          disabled = _props.disabled,
          icon = _props.icon,
          maxRating = _props.maxRating,
          size = _props.size;
      var _state = this.state,
          rating = _state.rating,
          selectedIndex = _state.selectedIndex,
          isSelecting = _state.isSelecting;


      var classes = Rating___WEBPACK_IMPORTED_MODULE_8_classnames___default.a('ui', icon, size, useKeyOnly(disabled, 'disabled'), useKeyOnly(isSelecting && !disabled && selectedIndex >= 0, 'selected'), 'rating', className);
      var rest = getUnhandledProps_defaultExport(Rating, this.props);
      var ElementType = getElementType_defaultExport(Rating, this.props);

      return Rating___WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(
        ElementType,
        Rating___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, role: 'radiogroup', onMouseLeave: this.handleMouseLeave }),
        __WEBPACK_IMPORTED_MODULE_5_lodash_times___default.a(maxRating, function (i) {
          return Rating___WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(RatingIcon_defaultExport, {
            active: rating >= i + 1,
            'aria-checked': rating === i + 1,
            'aria-posinset': i + 1,
            'aria-setsize': maxRating,
            index: i,
            key: i,
            onClick: _this2.handleIconClick,
            onMouseEnter: _this2.handleIconMouseEnter,
            selected: selectedIndex >= i && isSelecting
          });
        })
      );
    }
  }]);

  return Rating;
}(AutoControlledComponent_defaultExport);

Rating_Rating.autoControlledProps = ['rating'];
Rating_Rating.defaultProps = {
  clearable: 'auto',
  maxRating: 1
};
Rating_Rating._meta = {
  name: 'Rating',
  type: META_namespaceObject.TYPES.MODULE
};
Rating_Rating.Icon = RatingIcon_defaultExport;
Rating_Rating.handledProps = ['as', 'className', 'clearable', 'defaultRating', 'disabled', 'icon', 'maxRating', 'onRate', 'rating', 'size'];

var Rating__initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.handleIconClick = function (e, _ref2) {
    var index = _ref2.index;
    var _props2 = _this3.props,
        clearable = _props2.clearable,
        disabled = _props2.disabled,
        maxRating = _props2.maxRating,
        onRate = _props2.onRate;
    var rating = _this3.state.rating;

    if (disabled) return;

    // default newRating is the clicked icon
    // allow toggling a binary rating
    // allow clearing ratings
    var newRating = index + 1;
    if (clearable === 'auto' && maxRating === 1) {
      newRating = +!rating;
    } else if (clearable === true && newRating === rating) {
      newRating = 0;
    }

    // set rating
    _this3.trySetState({ rating: newRating }, { isSelecting: false });
    if (onRate) onRate(e, Rating___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, _this3.props, { rating: newRating }));
  };

  this.handleIconMouseEnter = function (e, _ref3) {
    var index = _ref3.index;

    if (_this3.props.disabled) return;

    _this3.setState({ selectedIndex: index, isSelecting: true });
  };

  this.handleMouseLeave = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    Rating___WEBPACK_IMPORTED_MODULE_6_lodash_invoke___default.a.apply(undefined, [_this3.props, 'onMouseLeave'].concat(args));

    if (_this3.props.disabled) return;

    _this3.setState({ selectedIndex: -1, isSelecting: false });
  };
};

/* harmony default export */ var Rating_defaultExport = (Rating_Rating);
 true ? Rating_Rating.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Additional classes. */
  className: Rating___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string,

  /**
   * You can clear the rating by clicking on the current start rating.
   * By default a rating will be only clearable if there is 1 icon.
   * Setting to `true`/`false` will allow or disallow a user to clear their rating.
   */
  clearable: Rating___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([Rating___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool, Rating___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(['auto'])]),

  /** The initial rating value. */
  defaultRating: Rating___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([Rating___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.number, Rating___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string]),

  /** You can disable or enable interactive rating.  Makes a read-only rating. */
  disabled: Rating___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool,

  /** A rating can use a set of star or heart icons. */
  icon: Rating___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(['star', 'heart']),

  /** The total number of icons. */
  maxRating: Rating___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([Rating___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.number, Rating___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string]),

  /**
   * Called after user selects a new rating.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed rating.
   */
  onRate: Rating___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func,

  /** The current number of active icons. */
  rating: Rating___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOfType([Rating___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.number, Rating___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string]),

  /** A progress bar can vary in size. */
  size: Rating___WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.oneOf(Rating___WEBPACK_IMPORTED_MODULE_7_lodash_without___default.a(SUI_namespaceObject.SIZES, 'medium', 'big'))
} : void 0;
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Rating/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Search/SearchCategory.js
/* harmony import */ var SearchCategory___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var SearchCategory___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(SearchCategory___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var SearchCategory___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var SearchCategory___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(SearchCategory___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var SearchCategory___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var SearchCategory___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(SearchCategory___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var SearchCategory___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var SearchCategory___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(SearchCategory___WEBPACK_IMPORTED_MODULE_3_react__);







function SearchCategory(props) {
  var active = props.active,
      children = props.children,
      className = props.className,
      renderer = props.renderer;

  var classes = SearchCategory___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(useKeyOnly(active, 'active'), 'category', className);
  var rest = getUnhandledProps_defaultExport(SearchCategory, props);
  var ElementType = getElementType_defaultExport(SearchCategory, props);

  return SearchCategory___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    SearchCategory___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    SearchCategory___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'div',
      { className: 'name' },
      renderer(props)
    ),
    children
  );
}

SearchCategory.handledProps = ['active', 'as', 'children', 'className', 'name', 'renderer', 'results'];
SearchCategory._meta = {
  name: 'SearchCategory',
  parent: 'Search',
  type: META_namespaceObject.TYPES.MODULE
};

SearchCategory.defaultProps = {
  renderer: function renderer(_ref) {
    var name = _ref.name;
    return name;
  }
};

 true ? SearchCategory.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** The item currently selected by keyboard shortcut. */
  active: SearchCategory___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Primary content. */
  children: SearchCategory___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: SearchCategory___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Display name. */
  name: SearchCategory___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /**
   * Renders the category contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable category contents.
   */
  renderer: SearchCategory___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  /** Array of Search.Result props. */
  results: SearchCategory___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array
} : void 0;

/* harmony default export */ var SearchCategory_defaultExport = (SearchCategory);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Search/SearchResult.js
/* harmony import */ var SearchResult___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var SearchResult___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(SearchResult___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var SearchResult___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var SearchResult___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(SearchResult___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var SearchResult___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var SearchResult___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(SearchResult___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var SearchResult___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var SearchResult___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(SearchResult___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var SearchResult___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var SearchResult___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(SearchResult___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var SearchResult___WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(543);
/* harmony import */ var SearchResult___WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(SearchResult___WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var SearchResult___WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(542);
/* harmony import */ var SearchResult___WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(SearchResult___WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var SearchResult___WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(11);
/* harmony import */ var SearchResult___WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(SearchResult___WEBPACK_IMPORTED_MODULE_7_react__);











// Note: You technically only need the 'content' wrapper when there's an
// image. However, optionally wrapping it makes this function a lot more
// complicated and harder to read. Since always wrapping it doesn't affect
// the style in any way let's just do that.
//
// Note: To avoid requiring a wrapping div, we return an array here so to
// prevent rendering issues each node needs a unique key.
var SearchResult_defaultRenderer = function defaultRenderer(_ref) {
  var image = _ref.image,
      price = _ref.price,
      title = _ref.title,
      description = _ref.description;
  return [image && SearchResult___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
    'div',
    { key: 'image', className: 'image' },
    createHTMLImage(image)
  ), SearchResult___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
    'div',
    { key: 'content', className: 'content' },
    price && SearchResult___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
      'div',
      { className: 'price' },
      price
    ),
    title && SearchResult___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
      'div',
      { className: 'title' },
      title
    ),
    description && SearchResult___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
      'div',
      { className: 'description' },
      description
    )
  )];
};

SearchResult_defaultRenderer.handledProps = [];

var SearchResult_SearchResult = function (_Component) {
  SearchResult___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(SearchResult, _Component);

  function SearchResult() {
    var _ref2;

    var _temp, _this, _ret;

    SearchResult___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, SearchResult);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = SearchResult___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref2 = SearchResult.__proto__ || Object.getPrototypeOf(SearchResult)).call.apply(_ref2, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;


      if (onClick) onClick(e, _this.props);
    }, _temp), SearchResult___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  SearchResult___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(SearchResult, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          className = _props.className,
          renderer = _props.renderer;


      var classes = SearchResult___WEBPACK_IMPORTED_MODULE_5_classnames___default.a(useKeyOnly(active, 'active'), 'result', className);
      var rest = getUnhandledProps_defaultExport(SearchResult, this.props);
      var ElementType = getElementType_defaultExport(SearchResult, this.props);

      // Note: You technically only need the 'content' wrapper when there's an
      // image. However, optionally wrapping it makes this function a lot more
      // complicated and harder to read. Since always wrapping it doesn't affect
      // the style in any way let's just do that.
      return SearchResult___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        ElementType,
        SearchResult___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, onClick: this.handleClick }),
        renderer(this.props)
      );
    }
  }]);

  return SearchResult;
}(SearchResult___WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

SearchResult_SearchResult.defaultProps = {
  renderer: SearchResult_defaultRenderer
};
SearchResult_SearchResult._meta = {
  name: 'SearchResult',
  parent: 'Search',
  type: META_namespaceObject.TYPES.MODULE
};
SearchResult_SearchResult.handledProps = ['active', 'as', 'className', 'description', 'id', 'image', 'onClick', 'price', 'renderer', 'title'];
/* harmony default export */ var SearchResult_defaultExport = (SearchResult_SearchResult);
 true ? SearchResult_SearchResult.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** The item currently selected by keyboard shortcut. */
  active: SearchResult___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Additional classes. */
  className: SearchResult___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /** Additional text with less emphasis. */
  description: SearchResult___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /** A unique identifier. */
  id: SearchResult___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,

  /** Add an image to the item. */
  image: SearchResult___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: SearchResult___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /** Customized text for price. */
  price: SearchResult___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /**
   * Renders the result contents.
   *
   * @param {object} props - The SearchResult props object.
   * @returns {*} - Renderable result contents.
   */
  renderer: SearchResult___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /** Display title. */
  title: SearchResult___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string
} : void 0;
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Search/SearchResults.js
/* harmony import */ var SearchResults___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var SearchResults___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(SearchResults___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var SearchResults___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var SearchResults___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(SearchResults___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var SearchResults___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var SearchResults___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(SearchResults___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var SearchResults___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var SearchResults___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(SearchResults___WEBPACK_IMPORTED_MODULE_3_react__);







function SearchResults(props) {
  var children = props.children,
      className = props.className;

  var classes = SearchResults___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('results transition', className);
  var rest = getUnhandledProps_defaultExport(SearchResults, props);
  var ElementType = getElementType_defaultExport(SearchResults, props);

  return SearchResults___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    SearchResults___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

SearchResults.handledProps = ['as', 'children', 'className'];
SearchResults._meta = {
  name: 'SearchResults',
  parent: 'Search',
  type: META_namespaceObject.TYPES.MODULE
};

 true ? SearchResults.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: SearchResults___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: SearchResults___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : void 0;

/* harmony default export */ var SearchResults_defaultExport = (SearchResults);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Search/Search.js
/* harmony import */ var Search___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(71);
/* harmony import */ var Search___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(Search___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEmpty__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_partialRight__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_partialRight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_partialRight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_inRange__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_inRange___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_inRange__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_map__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_get__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_get__);
/* harmony import */ var Search___WEBPACK_IMPORTED_MODULE_13_lodash_reduce__ = __webpack_require__(619);
/* harmony import */ var Search___WEBPACK_IMPORTED_MODULE_13_lodash_reduce___default = __webpack_require__.n(Search___WEBPACK_IMPORTED_MODULE_13_lodash_reduce__);
/* harmony import */ var Search___WEBPACK_IMPORTED_MODULE_14_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var Search___WEBPACK_IMPORTED_MODULE_14_lodash_invoke___default = __webpack_require__.n(Search___WEBPACK_IMPORTED_MODULE_14_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_isEqual__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_without__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_classnames__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_prop_types__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_react__);




























var Search_debug = makeDebugger('search');

/**
 * A search module allows a user to query for results from a selection of data
 */

var Search_Search = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default.a(Search, _Component);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default.a(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.handleResultSelect = function (e, result) {
      Search_debug('handleResultSelect()');
      Search_debug(result);

      Search___WEBPACK_IMPORTED_MODULE_14_lodash_invoke___default.a(_this.props, 'onResultSelect', e, __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default.a({}, _this.props, { result: result }));
    }, _this.closeOnEscape = function (e) {
      if (keyboardKey_defaultExport.getCode(e) !== keyboardKey_defaultExport.Escape) return;
      e.preventDefault();
      _this.close();
    }, _this.moveSelectionOnKeyDown = function (e) {
      Search_debug('moveSelectionOnKeyDown()');
      Search_debug(keyboardKey_defaultExport.getName(e));
      switch (keyboardKey_defaultExport.getCode(e)) {
        case keyboardKey_defaultExport.ArrowDown:
          e.preventDefault();
          _this.moveSelectionBy(1);
          break;
        case keyboardKey_defaultExport.ArrowUp:
          e.preventDefault();
          _this.moveSelectionBy(-1);
          break;
        default:
          break;
      }
    }, _this.selectItemOnEnter = function (e) {
      Search_debug('selectItemOnEnter()');
      Search_debug(keyboardKey_defaultExport.getName(e));
      if (keyboardKey_defaultExport.getCode(e) !== keyboardKey_defaultExport.Enter) return;

      var result = _this.getSelectedResult();

      // prevent selecting null if there was no selected item value
      if (!result) return;

      e.preventDefault();

      // notify the onResultSelect prop that the user is trying to change value
      _this.setValue(result.title);
      _this.handleResultSelect(e, result);
      _this.close();
    }, _this.closeOnDocumentClick = function (e) {
      Search_debug('closeOnDocumentClick()');
      Search_debug(e);
      _this.close();
    }, _this.handleMouseDown = function (e) {
      Search_debug('handleMouseDown()');
      var onMouseDown = _this.props.onMouseDown;

      if (onMouseDown) onMouseDown(e, _this.props);
      _this.isMouseDown = true;
      // Do not access document when server side rendering
      if (!isBrowser_defaultExport) return;
      document.addEventListener('mouseup', _this.handleDocumentMouseUp);
    }, _this.handleDocumentMouseUp = function () {
      Search_debug('handleDocumentMouseUp()');
      _this.isMouseDown = false;
      // Do not access document when server side rendering
      if (!isBrowser_defaultExport) return;
      document.removeEventListener('mouseup', _this.handleDocumentMouseUp);
    }, _this.handleInputClick = function (e) {
      Search_debug('handleInputClick()', e);

      // prevent closeOnDocumentClick()
      e.nativeEvent.stopImmediatePropagation();

      _this.tryOpen();
    }, _this.handleItemClick = function (e, _ref2) {
      var id = _ref2.id;

      Search_debug('handleItemClick()');
      Search_debug(id);
      var result = _this.getSelectedResult(id);

      // prevent closeOnDocumentClick()
      e.nativeEvent.stopImmediatePropagation();

      // notify the onResultSelect prop that the user is trying to change value
      _this.setValue(result.title);
      _this.handleResultSelect(e, result);
      _this.close();
    }, _this.handleFocus = function (e) {
      Search_debug('handleFocus()');
      var onFocus = _this.props.onFocus;

      if (onFocus) onFocus(e, _this.props);
      _this.setState({ focus: true });
    }, _this.handleBlur = function (e) {
      Search_debug('handleBlur()');
      var onBlur = _this.props.onBlur;

      if (onBlur) onBlur(e, _this.props);
      _this.setState({ focus: false });
    }, _this.handleSearchChange = function (e) {
      Search_debug('handleSearchChange()');
      Search_debug(e.target.value);
      // prevent propagating to this.props.onChange()
      e.stopPropagation();
      var minCharacters = _this.props.minCharacters;
      var open = _this.state.open;

      var newQuery = e.target.value;

      Search___WEBPACK_IMPORTED_MODULE_14_lodash_invoke___default.a(_this.props, 'onSearchChange', e, __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default.a({}, _this.props, { value: newQuery }));

      // open search dropdown on search query
      if (newQuery.length < minCharacters) {
        _this.close();
      } else if (!open) {
        _this.tryOpen(newQuery);
      }

      _this.setValue(newQuery);
    }, _this.getFlattenedResults = function () {
      var _this$props = _this.props,
          category = _this$props.category,
          results = _this$props.results;


      return !category ? results : Search___WEBPACK_IMPORTED_MODULE_13_lodash_reduce___default.a(results, function (memo, categoryData) {
        return memo.concat(categoryData.results);
      }, []);
    }, _this.getSelectedResult = function () {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.selectedIndex;

      var results = _this.getFlattenedResults();
      return __WEBPACK_IMPORTED_MODULE_12_lodash_get___default.a(results, index);
    }, _this.setValue = function (value) {
      Search_debug('setValue()');
      Search_debug('value', value);

      var selectFirstResult = _this.props.selectFirstResult;


      _this.trySetState({ value: value }, { selectedIndex: selectFirstResult ? 0 : -1 });
    }, _this.moveSelectionBy = function (offset) {
      Search_debug('moveSelectionBy()');
      Search_debug('offset: ' + offset);
      var selectedIndex = _this.state.selectedIndex;


      var results = _this.getFlattenedResults();
      var lastIndex = results.length - 1;

      // next is after last, wrap to beginning
      // next is before first, wrap to end
      var nextIndex = selectedIndex + offset;
      if (nextIndex > lastIndex) nextIndex = 0;else if (nextIndex < 0) nextIndex = lastIndex;

      _this.setState({ selectedIndex: nextIndex });
      _this.scrollSelectedItemIntoView();
    }, _this.scrollSelectedItemIntoView = function () {
      Search_debug('scrollSelectedItemIntoView()');
      // Do not access document when server side rendering
      if (!isBrowser_defaultExport) return;
      var menu = document.querySelector('.ui.search.active.visible .results.visible');
      var item = menu.querySelector('.result.active');
      if (!item) return;
      Search_debug('menu (results): ' + menu);
      Search_debug('item (result): ' + item);
      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;

      if (isOutOfUpperView) {
        menu.scrollTop = item.offsetTop;
      } else if (isOutOfLowerView) {
        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
      }
    }, _this.tryOpen = function () {
      var currentValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;

      Search_debug('open()');

      var minCharacters = _this.props.minCharacters;

      if (currentValue.length < minCharacters) return;

      _this.open();
    }, _this.open = function () {
      Search_debug('open()');
      _this.trySetState({ open: true });
    }, _this.close = function () {
      Search_debug('close()');
      _this.trySetState({ open: false });
    }, _this.renderSearchInput = function (rest) {
      var _this$props2 = _this.props,
          icon = _this$props2.icon,
          input = _this$props2.input;
      var value = _this.state.value;


      return Input_defaultExport.create(input, { defaultProps: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default.a({}, rest, {
          icon: icon,
          input: { className: 'prompt', tabIndex: '0', autoComplete: 'off' },
          onBlur: _this.handleBlur,
          onChange: _this.handleSearchChange,
          onClick: _this.handleInputClick,
          onFocus: _this.handleFocus,
          value: value
        }) });
    }, _this.renderNoResults = function () {
      var _this$props3 = _this.props,
          noResultsDescription = _this$props3.noResultsDescription,
          noResultsMessage = _this$props3.noResultsMessage;


      return __WEBPACK_IMPORTED_MODULE_19_react___default.a.createElement(
        'div',
        { className: 'message empty' },
        __WEBPACK_IMPORTED_MODULE_19_react___default.a.createElement(
          'div',
          { className: 'header' },
          noResultsMessage
        ),
        noResultsDescription && __WEBPACK_IMPORTED_MODULE_19_react___default.a.createElement(
          'div',
          { className: 'description' },
          noResultsDescription
        )
      );
    }, _this.renderResult = function (_ref3, index, _array) {
      var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      var childKey = _ref3.childKey,
          result = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default.a(_ref3, ['childKey']);

      var resultRenderer = _this.props.resultRenderer;
      var selectedIndex = _this.state.selectedIndex;

      var offsetIndex = index + offset;

      return __WEBPACK_IMPORTED_MODULE_19_react___default.a.createElement(SearchResult_defaultExport, __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default.a({
        key: childKey || result.title,
        active: selectedIndex === offsetIndex,
        onClick: _this.handleItemClick,
        renderer: resultRenderer
      }, result, {
        id: offsetIndex // Used to lookup the result on item click
      }));
    }, _this.renderResults = function () {
      var results = _this.props.results;


      return __WEBPACK_IMPORTED_MODULE_11_lodash_map___default.a(results, _this.renderResult);
    }, _this.renderCategories = function () {
      var _this$props4 = _this.props,
          categoryRenderer = _this$props4.categoryRenderer,
          categories = _this$props4.results;
      var selectedIndex = _this.state.selectedIndex;


      var count = 0;

      return __WEBPACK_IMPORTED_MODULE_11_lodash_map___default.a(categories, function (_ref4, name, index) {
        var childKey = _ref4.childKey,
            category = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default.a(_ref4, ['childKey']);

        var categoryProps = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default.a({
          key: childKey || category.name,
          active: __WEBPACK_IMPORTED_MODULE_10_lodash_inRange___default.a(selectedIndex, count, count + category.results.length),
          renderer: categoryRenderer
        }, category);
        var renderFn = __WEBPACK_IMPORTED_MODULE_9_lodash_partialRight___default.a(_this.renderResult, count);

        count = count + category.results.length;

        return __WEBPACK_IMPORTED_MODULE_19_react___default.a.createElement(
          SearchCategory_defaultExport,
          categoryProps,
          category.results.map(renderFn)
        );
      });
    }, _this.renderMenuContent = function () {
      var _this$props5 = _this.props,
          category = _this$props5.category,
          showNoResults = _this$props5.showNoResults,
          results = _this$props5.results;


      if (__WEBPACK_IMPORTED_MODULE_8_lodash_isEmpty___default.a(results)) {
        return showNoResults ? _this.renderNoResults() : null;
      }

      return category ? _this.renderCategories() : _this.renderResults();
    }, _this.renderResultsMenu = function () {
      var open = _this.state.open;

      var resultsClasses = open ? 'visible' : '';
      var menuContent = _this.renderMenuContent();

      if (!menuContent) return;

      return __WEBPACK_IMPORTED_MODULE_19_react___default.a.createElement(
        SearchResults_defaultExport,
        { className: resultsClasses },
        menuContent
      );
    }, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default.a(Search, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      Search_debug('componentWillMount()');
      var _state = this.state,
          open = _state.open,
          value = _state.value;


      this.setValue(value);
      if (open) this.open();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !__WEBPACK_IMPORTED_MODULE_15_lodash_isEqual___default.a(nextProps, this.props) || !__WEBPACK_IMPORTED_MODULE_15_lodash_isEqual___default.a(nextState, this.state);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_get___default.a(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
      Search_debug('componentWillReceiveProps()');
      // TODO objectDiff still runs in prod, stop it
      Search_debug('changed props:', objectDiff(nextProps, this.props));

      if (!__WEBPACK_IMPORTED_MODULE_15_lodash_isEqual___default.a(nextProps.value, this.props.value)) {
        Search_debug('value changed, setting', nextProps.value);
        this.setValue(nextProps.value);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // eslint-disable-line complexity
      Search_debug('componentDidUpdate()');
      // TODO objectDiff still runs in prod, stop it
      Search_debug('to state:', objectDiff(prevState, this.state));

      // Do not access document when server side rendering
      if (!isBrowser_defaultExport) return;

      // focused / blurred
      if (!prevState.focus && this.state.focus) {
        Search_debug('search focused');
        if (!this.isMouseDown) {
          Search_debug('mouse is not down, opening');
          this.tryOpen();
        }
        if (this.state.open) {
          document.addEventListener('keydown', this.moveSelectionOnKeyDown);
          document.addEventListener('keydown', this.selectItemOnEnter);
        }
      } else if (prevState.focus && !this.state.focus) {
        Search_debug('search blurred');
        if (!this.isMouseDown) {
          Search_debug('mouse is not down, closing');
          this.close();
        }
        document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
        document.removeEventListener('keydown', this.selectItemOnEnter);
      }

      // opened / closed
      if (!prevState.open && this.state.open) {
        Search_debug('search opened');
        this.open();
        document.addEventListener('keydown', this.closeOnEscape);
        document.addEventListener('keydown', this.moveSelectionOnKeyDown);
        document.addEventListener('keydown', this.selectItemOnEnter);
        document.addEventListener('click', this.closeOnDocumentClick);
      } else if (prevState.open && !this.state.open) {
        Search_debug('search closed');
        this.close();
        document.removeEventListener('keydown', this.closeOnEscape);
        document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
        document.removeEventListener('keydown', this.selectItemOnEnter);
        document.removeEventListener('click', this.closeOnDocumentClick);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      Search_debug('componentWillUnmount()');

      // Do not access document when server side rendering
      if (!isBrowser_defaultExport) return;

      document.removeEventListener('keydown', this.moveSelectionOnKeyDown);
      document.removeEventListener('keydown', this.selectItemOnEnter);
      document.removeEventListener('keydown', this.closeOnEscape);
      document.removeEventListener('click', this.closeOnDocumentClick);
    }

    // ----------------------------------------
    // Document Event Handlers
    // ----------------------------------------

    // ----------------------------------------
    // Component Event Handlers
    // ----------------------------------------

    // ----------------------------------------
    // Getters
    // ----------------------------------------

    // ----------------------------------------
    // Setters
    // ----------------------------------------

    // ----------------------------------------
    // Behavior
    // ----------------------------------------

    // Open if the current value is greater than the minCharacters prop


    // ----------------------------------------
    // Render
    // ----------------------------------------

    /**
     * Offset is needed for determining the active item for results within a
     * category. Since the index is reset to 0 for each new category, an offset
     * must be passed in.
     */

  }, {
    key: 'render',
    value: function render() {
      Search_debug('render()');
      Search_debug('props', this.props);
      Search_debug('state', this.state);
      var _state2 = this.state,
          searchClasses = _state2.searchClasses,
          focus = _state2.focus,
          open = _state2.open;
      var _props = this.props,
          aligned = _props.aligned,
          category = _props.category,
          className = _props.className,
          fluid = _props.fluid,
          loading = _props.loading,
          size = _props.size;

      // Classes

      var classes = __WEBPACK_IMPORTED_MODULE_17_classnames___default.a('ui', open && 'active visible', size, searchClasses, useKeyOnly(category, 'category'), useKeyOnly(focus, 'focus'), useKeyOnly(fluid, 'fluid'), useKeyOnly(loading, 'loading'), useValueAndKey(aligned, 'aligned'), 'search', className);
      var unhandled = getUnhandledProps_defaultExport(Search, this.props);
      var ElementType = getElementType_defaultExport(Search, this.props);

      var _partitionHTMLInputPr = partitionHTMLInputProps(unhandled, {
        htmlProps: htmlInputAttrs
      }),
          _partitionHTMLInputPr2 = Search___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default.a(_partitionHTMLInputPr, 2),
          htmlInputProps = _partitionHTMLInputPr2[0],
          rest = _partitionHTMLInputPr2[1];

      return __WEBPACK_IMPORTED_MODULE_19_react___default.a.createElement(
        ElementType,
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default.a({}, rest, {
          className: classes,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onMouseDown: this.handleMouseDown
        }),
        this.renderSearchInput(htmlInputProps),
        this.renderResultsMenu()
      );
    }
  }]);

  return Search;
}(AutoControlledComponent_defaultExport);

Search_Search.defaultProps = {
  icon: 'search',
  input: 'text',
  minCharacters: 1,
  noResultsMessage: 'No results found.',
  showNoResults: true
};
Search_Search.autoControlledProps = ['open', 'value'];
Search_Search._meta = {
  name: 'Search',
  type: META_namespaceObject.TYPES.MODULE
};
Search_Search.Category = SearchCategory_defaultExport;
Search_Search.Result = SearchResult_defaultExport;
Search_Search.Results = SearchResults_defaultExport;
Search_Search.handledProps = ['aligned', 'as', 'category', 'categoryRenderer', 'className', 'defaultOpen', 'defaultValue', 'fluid', 'icon', 'input', 'loading', 'minCharacters', 'noResultsDescription', 'noResultsMessage', 'onBlur', 'onFocus', 'onMouseDown', 'onResultSelect', 'onSearchChange', 'open', 'resultRenderer', 'results', 'selectFirstResult', 'showNoResults', 'size', 'value'];
/* harmony default export */ var Search_defaultExport = (Search_Search);
 true ? Search_Search.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  // ------------------------------------
  // Behavior
  // ------------------------------------

  /** Initial value of open. */
  defaultOpen: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.bool,

  /** Initial value. */
  defaultValue: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.string,

  /** Shorthand for Icon. */
  icon: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.object]),

  /** Minimum characters to query for results */
  minCharacters: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.number,

  /** Additional text for "No Results" message with less emphasis. */
  noResultsDescription: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.node,

  /** Message to display when there are no results. */
  noResultsMessage: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.node,

  /** Controls whether or not the results menu is displayed. */
  open: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.bool,

  /**
   * One of:
   * - array of Search.Result props e.g. `{ title: '', description: '' }` or
   * - object of categories e.g. `{ name: '', results: [{ title: '', description: '' }]`
   */
  results: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.shape(SearchResult_defaultExport.propTypes)), __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.object]),

  /** Whether the search should automatically select the first result after searching. */
  selectFirstResult: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.bool,

  /** Whether a "no results" message should be shown if no results are found. */
  showNoResults: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.bool,

  /** Current value of the search input. Creates a controlled component. */
  value: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.string,

  // ------------------------------------
  // Rendering
  // ------------------------------------

  /**
   * Renders the SearchCategory contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable SearchCategory contents.
   */
  categoryRenderer: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.func,

  /**
   * Renders the SearchResult contents.
   *
   * @param {object} props - The SearchResult props object.
   * @returns {*} - Renderable SearchResult contents.
   */
  resultRenderer: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.func,

  // ------------------------------------
  // Callbacks
  // ------------------------------------

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.func,

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.func,

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.func,

  /**
   * Called when a result is selected.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onResultSelect: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.func,

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props, includes current value of search input.
   */
  onSearchChange: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.func,

  // ------------------------------------
  // Style
  // ------------------------------------

  /** A search can have its results aligned to its left or right container edge. */
  aligned: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.string,

  /** A search can display results from remote content ordered by categories. */
  category: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.bool,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.string,

  /** A search can have its results take up the width of its container. */
  fluid: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.bool,

  /** A search input can take up the width of its container. */
  input: customPropTypes_namespaceObject.itemShorthand,

  /** A search can show a loading indicator. */
  loading: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.bool,

  /** A search can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_18_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_16_lodash_without___default.a(SUI_namespaceObject.SIZES, 'medium'))
} : void 0;
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Search/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Sidebar/SidebarPushable.js
/* harmony import */ var SidebarPushable___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var SidebarPushable___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(SidebarPushable___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var SidebarPushable___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var SidebarPushable___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(SidebarPushable___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var SidebarPushable___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var SidebarPushable___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(SidebarPushable___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var SidebarPushable___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var SidebarPushable___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(SidebarPushable___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A pushable sub-component for Sidebar.
 */
function SidebarPushable(props) {
  var className = props.className,
      children = props.children;

  var classes = SidebarPushable___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('pushable', className);
  var rest = getUnhandledProps_defaultExport(SidebarPushable, props);
  var ElementType = getElementType_defaultExport(SidebarPushable, props);

  return SidebarPushable___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    SidebarPushable___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

SidebarPushable.handledProps = ['as', 'children', 'className'];
SidebarPushable._meta = {
  name: 'SidebarPushable',
  type: META_namespaceObject.TYPES.MODULE,
  parent: 'Sidebar'
};

 true ? SidebarPushable.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: SidebarPushable___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: SidebarPushable___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : void 0;

/* harmony default export */ var SidebarPushable_defaultExport = (SidebarPushable);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Sidebar/SidebarPusher.js
/* harmony import */ var SidebarPusher___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var SidebarPusher___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(SidebarPusher___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var SidebarPusher___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var SidebarPusher___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(SidebarPusher___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var SidebarPusher___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var SidebarPusher___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(SidebarPusher___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var SidebarPusher___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var SidebarPusher___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(SidebarPusher___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A pushable sub-component for Sidebar.
 */
function SidebarPusher(props) {
  var className = props.className,
      dimmed = props.dimmed,
      children = props.children;


  var classes = SidebarPusher___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('pusher', useKeyOnly(dimmed, 'dimmed'), className);
  var rest = getUnhandledProps_defaultExport(SidebarPusher, props);
  var ElementType = getElementType_defaultExport(SidebarPusher, props);

  return SidebarPusher___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    SidebarPusher___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

SidebarPusher.handledProps = ['as', 'children', 'className', 'dimmed'];
SidebarPusher._meta = {
  name: 'SidebarPusher',
  type: META_namespaceObject.TYPES.MODULE,
  parent: 'Sidebar'
};

 true ? SidebarPusher.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: SidebarPusher___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: SidebarPusher___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Controls whether or not the dim is displayed. */
  dimmed: SidebarPusher___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : void 0;

/* harmony default export */ var SidebarPusher_defaultExport = (SidebarPusher);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Sidebar/Sidebar.js
/* harmony import */ var Sidebar___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Sidebar___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Sidebar___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Sidebar___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Sidebar___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Sidebar___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Sidebar___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Sidebar___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(Sidebar___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var Sidebar___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Sidebar___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Sidebar___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Sidebar___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Sidebar___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(Sidebar___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var Sidebar___WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(543);
/* harmony import */ var Sidebar___WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(Sidebar___WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var Sidebar___WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(542);
/* harmony import */ var Sidebar___WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(Sidebar___WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var Sidebar___WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(11);
/* harmony import */ var Sidebar___WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(Sidebar___WEBPACK_IMPORTED_MODULE_7_react__);













/**
 * A sidebar hides additional content beside a page.
 */

var Sidebar_Sidebar = function (_Component) {
  Sidebar___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(Sidebar, _Component);

  function Sidebar() {
    var _ref;

    var _temp, _this, _ret;

    Sidebar___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, Sidebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Sidebar___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call.apply(_ref, [this].concat(args))), _this), _this.startAnimating = function () {
      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;

      clearTimeout(_this.stopAnimatingTimer);

      _this.setState({ animating: true });

      _this.stopAnimatingTimer = setTimeout(function () {
        return _this.setState({ animating: false });
      }, duration);
    }, _temp), Sidebar___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Sidebar___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(Sidebar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.visible !== this.props.visible) {
        this.startAnimating();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          animation = _props.animation,
          className = _props.className,
          children = _props.children,
          direction = _props.direction,
          visible = _props.visible,
          width = _props.width;
      var animating = this.state.animating;


      var classes = Sidebar___WEBPACK_IMPORTED_MODULE_5_classnames___default.a('ui', animation, direction, width, useKeyOnly(animating, 'animating'), useKeyOnly(visible, 'visible'), 'sidebar', className);

      var rest = getUnhandledProps_defaultExport(Sidebar, this.props);
      var ElementType = getElementType_defaultExport(Sidebar, this.props);

      return Sidebar___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        ElementType,
        Sidebar___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
        children
      );
    }
  }]);

  return Sidebar;
}(AutoControlledComponent_defaultExport);

Sidebar_Sidebar.defaultProps = {
  direction: 'left'
};
Sidebar_Sidebar.autoControlledProps = ['visible'];
Sidebar_Sidebar._meta = {
  name: 'Sidebar',
  type: META_namespaceObject.TYPES.MODULE
};
Sidebar_Sidebar.Pushable = SidebarPushable_defaultExport;
Sidebar_Sidebar.Pusher = SidebarPusher_defaultExport;
Sidebar_Sidebar.handledProps = ['animation', 'as', 'children', 'className', 'defaultVisible', 'direction', 'visible', 'width'];
 true ? Sidebar_Sidebar.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Animation style. */
  animation: Sidebar___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along']),

  /** Primary content. */
  children: Sidebar___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node,

  /** Additional classes. */
  className: Sidebar___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /** Initial value of visible. */
  defaultVisible: Sidebar___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Direction the sidebar should appear on. */
  direction: Sidebar___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(['top', 'right', 'bottom', 'left']),

  /** Controls whether or not the sidebar is visible on the page. */
  visible: Sidebar___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Sidebar width. */
  width: Sidebar___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(['very thin', 'thin', 'wide', 'very wide'])
} : void 0;


/* harmony default export */ var Sidebar_defaultExport = (Sidebar_Sidebar);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Sidebar/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Tab/TabPane.js
/* harmony import */ var TabPane___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var TabPane___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(TabPane___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var TabPane___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var TabPane___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(TabPane___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var TabPane___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var TabPane___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(TabPane___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var TabPane___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var TabPane___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(TabPane___WEBPACK_IMPORTED_MODULE_3_react__);








/**
 * A tab pane holds the content of a tab.
 */
function TabPane(props) {
  var children = props.children,
      className = props.className,
      loading = props.loading;


  var classes = TabPane___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(useKeyOnly(loading, 'loading'), 'active tab', className);
  var rest = getUnhandledProps_defaultExport(TabPane, props);
  var ElementType = getElementType_defaultExport(TabPane, props);

  var calculatedDefaultProps = {};
  if (ElementType === Segment_defaultExport) {
    calculatedDefaultProps.attached = 'bottom';
  }

  return TabPane___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    TabPane___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, calculatedDefaultProps, rest, { className: classes, loading: loading }),
    children
  );
}

TabPane.handledProps = ['as', 'children', 'className', 'loading'];
TabPane._meta = {
  name: 'TabPane',
  parent: 'Tab',
  type: META_namespaceObject.TYPES.MODULE
};

TabPane.defaultProps = {
  as: Segment_defaultExport
};

 true ? TabPane.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: TabPane___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: TabPane___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** A Tab.Pane can display a loading indicator. */
  loading: TabPane___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : void 0;

TabPane.create = createShorthandFactory(TabPane, function (children) {
  return { children: children };
});

/* harmony default export */ var TabPane_defaultExport = (TabPane);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Tab/Tab.js
/* harmony import */ var Tab___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Tab___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Tab___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Tab___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Tab___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Tab___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Tab___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Tab___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(Tab___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var Tab___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Tab___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Tab___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Tab___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Tab___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(Tab___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_get__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_map__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_map__);
/* harmony import */ var Tab___WEBPACK_IMPORTED_MODULE_7_lodash_invoke__ = __webpack_require__(547);
/* harmony import */ var Tab___WEBPACK_IMPORTED_MODULE_7_lodash_invoke___default = __webpack_require__.n(Tab___WEBPACK_IMPORTED_MODULE_7_lodash_invoke__);
/* harmony import */ var Tab___WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(542);
/* harmony import */ var Tab___WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(Tab___WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var Tab___WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(11);
/* harmony import */ var Tab___WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(Tab___WEBPACK_IMPORTED_MODULE_9_react__);
















/**
 * A Tab is a hidden section of content activated by a Menu.
 * @see Menu
 * @see Segment
 */

var Tab_Tab = function (_Component) {
  Tab___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(Tab, _Component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    Tab___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Tab___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.handleItemClick = function (e, _ref2) {
      var index = _ref2.index;

      Tab___WEBPACK_IMPORTED_MODULE_7_lodash_invoke___default.a(_this.props, 'onTabChange', e, Tab___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({ activeIndex: index }, _this.props));
      _this.trySetState({ activeIndex: index });
    }, _temp), Tab___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Tab___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(Tab, [{
    key: 'getInitialState',
    value: function getInitialState() {
      return { activeIndex: 0 };
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      var _props = this.props,
          menu = _props.menu,
          panes = _props.panes;
      var activeIndex = this.state.activeIndex;


      return Menu_defaultExport.create(menu, {
        overrideProps: {
          items: __WEBPACK_IMPORTED_MODULE_6_lodash_map___default.a(panes, 'menuItem'),
          onItemClick: this.handleItemClick,
          activeIndex: activeIndex
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var panes = this.props.panes;
      var activeIndex = this.state.activeIndex;


      var menu = this.renderMenu();
      var rest = getUnhandledProps_defaultExport(Tab, this.props);
      var ElementType = getElementType_defaultExport(Tab, this.props);

      return Tab___WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
        ElementType,
        rest,
        menu.props.attached !== 'bottom' && menu,
        Tab___WEBPACK_IMPORTED_MODULE_7_lodash_invoke___default.a(__WEBPACK_IMPORTED_MODULE_5_lodash_get___default.a(panes, '[' + activeIndex + ']'), 'render', this.props),
        menu.props.attached === 'bottom' && menu
      );
    }
  }]);

  return Tab;
}(AutoControlledComponent_defaultExport);

Tab_Tab.autoControlledProps = ['activeIndex'];
Tab_Tab.defaultProps = {
  menu: { attached: true, tabular: true }
};
Tab_Tab._meta = {
  name: 'Tab',
  type: META_namespaceObject.TYPES.MODULE
};
Tab_Tab.Pane = TabPane_defaultExport;
Tab_Tab.handledProps = ['activeIndex', 'as', 'defaultActiveIndex', 'menu', 'onTabChange', 'panes'];
 true ? Tab_Tab.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** The initial activeIndex. */
  defaultActiveIndex: Tab___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([Tab___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.number, Tab___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string]),

  /** Index of the currently active tab. */
  activeIndex: Tab___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOfType([Tab___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.number, Tab___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string]),

  /** Shorthand props for the Menu. */
  menu: Tab___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object,

  /**
   * Called on tab change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed new activeIndex.
   * @param {object} data.activeIndex - The new proposed activeIndex.
   */
  onTabChange: Tab___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /**
   * Array of objects describing each Menu.Item and Tab.Pane:
   * {
   *   menuItem: 'Home',
   *   render: () => <Tab.Pane>Welcome!</Tab.Pane>
   * }
   */
  panes: Tab___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.arrayOf(Tab___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.shape({
    menuItem: customPropTypes_namespaceObject.itemShorthand,
    render: Tab___WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired
  }))
} : void 0;


/* harmony default export */ var Tab_defaultExport = (Tab_Tab);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/modules/Tab/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Advertisement/Advertisement.js
/* harmony import */ var Advertisement___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Advertisement___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Advertisement___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Advertisement___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var Advertisement___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(Advertisement___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var Advertisement___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var Advertisement___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(Advertisement___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var Advertisement___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var Advertisement___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(Advertisement___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * An ad displays third-party promotional content.
 */
function Advertisement(props) {
  var centered = props.centered,
      children = props.children,
      className = props.className,
      test = props.test,
      unit = props.unit;


  var classes = Advertisement___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('ui', unit, useKeyOnly(centered, 'centered'), useKeyOnly(test, 'test'), 'ad', className);
  var rest = getUnhandledProps_defaultExport(Advertisement, props);
  var ElementType = getElementType_defaultExport(Advertisement, props);

  return Advertisement___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    Advertisement___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, 'data-text': test }),
    children
  );
}

Advertisement.handledProps = ['as', 'centered', 'children', 'className', 'test', 'unit'];
Advertisement._meta = {
  name: 'Advertisement',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? Advertisement.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Center the advertisement. */
  centered: Advertisement___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Primary content. */
  children: Advertisement___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: Advertisement___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Text to be displayed on the advertisement. */
  test: Advertisement___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([Advertisement___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool, Advertisement___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number, Advertisement___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string]),

  /** Varies the size of the advertisement. */
  unit: Advertisement___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['medium rectangle', 'large rectangle', 'vertical rectangle', 'small rectangle', 'mobile banner', 'banner', 'vertical banner', 'top banner', 'half banner', 'button', 'square button', 'small button', 'skyscraper', 'wide skyscraper', 'leaderboard', 'large leaderboard', 'mobile leaderboard', 'billboard', 'panorama', 'netboard', 'half page', 'square', 'small square']).isRequired

} : void 0;

/* harmony default export */ var Advertisement_defaultExport = (Advertisement);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Advertisement/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Card/CardDescription.js
/* harmony import */ var CardDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var CardDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(CardDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var CardDescription___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var CardDescription___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(CardDescription___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var CardDescription___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var CardDescription___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(CardDescription___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var CardDescription___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var CardDescription___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(CardDescription___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A card can contain a description with one or more paragraphs.
 */
function CardDescription(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = CardDescription___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(className, 'description');
  var rest = getUnhandledProps_defaultExport(CardDescription, props);
  var ElementType = getElementType_defaultExport(CardDescription, props);

  return CardDescription___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    CardDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

CardDescription.handledProps = ['as', 'children', 'className', 'content'];
CardDescription._meta = {
  name: 'CardDescription',
  parent: 'Card',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? CardDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: CardDescription___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: CardDescription___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand
} : void 0;

/* harmony default export */ var CardDescription_defaultExport = (CardDescription);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Card/CardHeader.js
/* harmony import */ var CardHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var CardHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(CardHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var CardHeader___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var CardHeader___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(CardHeader___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var CardHeader___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var CardHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(CardHeader___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var CardHeader___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var CardHeader___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(CardHeader___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A card can contain a header.
 */
function CardHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = CardHeader___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(className, 'header');
  var rest = getUnhandledProps_defaultExport(CardHeader, props);
  var ElementType = getElementType_defaultExport(CardHeader, props);

  return CardHeader___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    CardHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

CardHeader.handledProps = ['as', 'children', 'className', 'content'];
CardHeader._meta = {
  name: 'CardHeader',
  parent: 'Card',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? CardHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: CardHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: CardHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand
} : void 0;

/* harmony default export */ var CardHeader_defaultExport = (CardHeader);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Card/CardMeta.js
/* harmony import */ var CardMeta___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var CardMeta___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(CardMeta___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var CardMeta___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var CardMeta___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(CardMeta___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var CardMeta___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var CardMeta___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(CardMeta___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var CardMeta___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var CardMeta___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(CardMeta___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A card can contain content metadata.
 */
function CardMeta(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = CardMeta___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(className, 'meta');
  var rest = getUnhandledProps_defaultExport(CardMeta, props);
  var ElementType = getElementType_defaultExport(CardMeta, props);

  return CardMeta___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    CardMeta___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

CardMeta.handledProps = ['as', 'children', 'className', 'content'];
CardMeta._meta = {
  name: 'CardMeta',
  parent: 'Card',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? CardMeta.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: CardMeta___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: CardMeta___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand
} : void 0;

/* harmony default export */ var CardMeta_defaultExport = (CardMeta);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Card/CardContent.js
/* harmony import */ var CardContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var CardContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(CardContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var CardContent___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var CardContent___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(CardContent___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var CardContent___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var CardContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(CardContent___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var CardContent___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var CardContent___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(CardContent___WEBPACK_IMPORTED_MODULE_3_react__);










/**
 * A card can contain blocks of content or extra content meant to be formatted separately from the main content.
 */
function CardContent(props) {
  var children = props.children,
      className = props.className,
      description = props.description,
      extra = props.extra,
      header = props.header,
      meta = props.meta;


  var classes = CardContent___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(className, useKeyOnly(extra, 'extra'), 'content');
  var rest = getUnhandledProps_defaultExport(CardContent, props);
  var ElementType = getElementType_defaultExport(CardContent, props);

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return CardContent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      ElementType,
      CardContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  return CardContent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    CardContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    createShorthand(CardHeader_defaultExport, function (val) {
      return { content: val };
    }, header),
    createShorthand(CardMeta_defaultExport, function (val) {
      return { content: val };
    }, meta),
    createShorthand(CardDescription_defaultExport, function (val) {
      return { content: val };
    }, description)
  );
}

CardContent.handledProps = ['as', 'children', 'className', 'description', 'extra', 'header', 'meta'];
CardContent._meta = {
  name: 'CardContent',
  parent: 'Card',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? CardContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: CardContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: CardContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for CardDescription. */
  description: customPropTypes_namespaceObject.itemShorthand,

  /** A card can contain extra content meant to be formatted separately from the main content. */
  extra: CardContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Shorthand for CardHeader. */
  header: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for CardMeta. */
  meta: customPropTypes_namespaceObject.itemShorthand
} : void 0;

/* harmony default export */ var CardContent_defaultExport = (CardContent);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Card/CardGroup.js
/* harmony import */ var CardGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var CardGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(CardGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var CardGroup___WEBPACK_IMPORTED_MODULE_1_lodash_map__ = __webpack_require__(548);
/* harmony import */ var CardGroup___WEBPACK_IMPORTED_MODULE_1_lodash_map___default = __webpack_require__.n(CardGroup___WEBPACK_IMPORTED_MODULE_1_lodash_map__);
/* harmony import */ var CardGroup___WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(543);
/* harmony import */ var CardGroup___WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(CardGroup___WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var CardGroup___WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(542);
/* harmony import */ var CardGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(CardGroup___WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var CardGroup___WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(11);
/* harmony import */ var CardGroup___WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(CardGroup___WEBPACK_IMPORTED_MODULE_4_react__);










/**
 * A group of cards.
 */
function CardGroup(props) {
  var children = props.children,
      className = props.className,
      doubling = props.doubling,
      items = props.items,
      itemsPerRow = props.itemsPerRow,
      stackable = props.stackable;


  var classes = CardGroup___WEBPACK_IMPORTED_MODULE_2_classnames___default.a('ui', useKeyOnly(doubling, 'doubling'), useKeyOnly(stackable, 'stackable'), classNameBuilders_useWidthProp(itemsPerRow), className, 'cards');
  var rest = getUnhandledProps_defaultExport(CardGroup, props);
  var ElementType = getElementType_defaultExport(CardGroup, props);

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return CardGroup___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      ElementType,
      CardGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  var content = CardGroup___WEBPACK_IMPORTED_MODULE_1_lodash_map___default.a(items, function (item) {
    var key = item.key || [item.header, item.description].join('-');
    return CardGroup___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Card_defaultExport, CardGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({ key: key }, item));
  });

  return CardGroup___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    ElementType,
    CardGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    content
  );
}

CardGroup.handledProps = ['as', 'children', 'className', 'doubling', 'items', 'itemsPerRow', 'stackable'];
CardGroup._meta = {
  name: 'CardGroup',
  parent: 'Card',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? CardGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: CardGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: CardGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** A group of cards can double its column width for mobile. */
  doubling: CardGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Shorthand array of props for Card. */
  items: customPropTypes_namespaceObject.collectionShorthand,

  /** A group of cards can set how many cards should exist in a row. */
  itemsPerRow: CardGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.WIDTHS),

  /** A group of cards can automatically stack rows to a single columns on mobile devices. */
  stackable: CardGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool
} : void 0;

/* harmony default export */ var CardGroup_defaultExport = (CardGroup);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Card/Card.js
/* harmony import */ var Card___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Card___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Card___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Card___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(14);
/* harmony import */ var Card___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(Card___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var Card___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(15);
/* harmony import */ var Card___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(Card___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var Card___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(47);
/* harmony import */ var Card___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(Card___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var Card___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(48);
/* harmony import */ var Card___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(Card___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var Card___WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(543);
/* harmony import */ var Card___WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(Card___WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var Card___WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(542);
/* harmony import */ var Card___WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(Card___WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var Card___WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(11);
/* harmony import */ var Card___WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(Card___WEBPACK_IMPORTED_MODULE_7_react__);

















/**
 * A card displays site content in a manner similar to a playing card.
 */

var Card_Card = function (_Component) {
  Card___WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default.a(Card, _Component);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    Card___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default.a(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Card___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;


      if (onClick) onClick(e, _this.props);
    }, _temp), Card___WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default.a(_this, _ret);
  }

  Card___WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default.a(Card, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          centered = _props.centered,
          children = _props.children,
          className = _props.className,
          color = _props.color,
          description = _props.description,
          extra = _props.extra,
          fluid = _props.fluid,
          header = _props.header,
          href = _props.href,
          image = _props.image,
          link = _props.link,
          meta = _props.meta,
          onClick = _props.onClick,
          raised = _props.raised;


      var classes = Card___WEBPACK_IMPORTED_MODULE_5_classnames___default.a('ui', color, useKeyOnly(centered, 'centered'), useKeyOnly(fluid, 'fluid'), useKeyOnly(link, 'link'), useKeyOnly(raised, 'raised'), 'card', className);
      var rest = getUnhandledProps_defaultExport(Card, this.props);
      var ElementType = getElementType_defaultExport(Card, this.props, function () {
        if (onClick) return 'a';
      });

      if (!childrenUtils_namespaceObject.isNil(children)) {
        return Card___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          ElementType,
          Card___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, href: href, onClick: this.handleClick }),
          children
        );
      }

      return Card___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        ElementType,
        Card___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes, href: href, onClick: this.handleClick }),
        Image_defaultExport.create(image),
        (description || header || meta) && Card___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(CardContent_defaultExport, { description: description, header: header, meta: meta }),
        extra && Card___WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          CardContent_defaultExport,
          { extra: true },
          extra
        )
      );
    }
  }]);

  return Card;
}(Card___WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

Card_Card._meta = {
  name: 'Card',
  type: META_namespaceObject.TYPES.VIEW
};
Card_Card.Content = CardContent_defaultExport;
Card_Card.Description = CardDescription_defaultExport;
Card_Card.Group = CardGroup_defaultExport;
Card_Card.Header = CardHeader_defaultExport;
Card_Card.Meta = CardMeta_defaultExport;
Card_Card.handledProps = ['as', 'centered', 'children', 'className', 'color', 'description', 'extra', 'fluid', 'header', 'href', 'image', 'link', 'meta', 'onClick', 'raised'];
/* harmony default export */ var Card_defaultExport = (Card_Card);
 true ? Card_Card.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** A Card can center itself inside its container. */
  centered: Card___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Primary content. */
  children: Card___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node,

  /** Additional classes. */
  className: Card___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /** A Card can be formatted to display different colors. */
  color: Card___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(SUI_namespaceObject.COLORS),

  /** Shorthand for CardDescription. */
  description: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for primary content of CardContent. */
  extra: customPropTypes_namespaceObject.contentShorthand,

  /** A Card can be formatted to take up the width of its container. */
  fluid: Card___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Shorthand for CardHeader. */
  header: customPropTypes_namespaceObject.itemShorthand,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: Card___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /** A card can contain an Image component. */
  image: customPropTypes_namespaceObject.itemShorthand,

  /** A card can be formatted to link to other content. */
  link: Card___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /** Shorthand for CardMeta. */
  meta: customPropTypes_namespaceObject.itemShorthand,

  /**
   * Called on click. When passed, the component renders as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: Card___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /** A Card can be formatted to raise above the page. */
  raised: Card___WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool
} : void 0;
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Comment/CommentAction.js
/* harmony import */ var CommentAction___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var CommentAction___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(CommentAction___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var CommentAction___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var CommentAction___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(CommentAction___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var CommentAction___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var CommentAction___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(CommentAction___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var CommentAction___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var CommentAction___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(CommentAction___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A comment can contain an action.
 */
function CommentAction(props) {
  var active = props.active,
      className = props.className,
      children = props.children;


  var classes = CommentAction___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(useKeyOnly(active, 'active'), className);
  var rest = getUnhandledProps_defaultExport(CommentAction, props);
  var ElementType = getElementType_defaultExport(CommentAction, props);

  return CommentAction___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    CommentAction___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

CommentAction.handledProps = ['active', 'as', 'children', 'className'];
CommentAction._meta = {
  name: 'CommentAction',
  parent: 'Comment',
  type: META_namespaceObject.TYPES.VIEW
};

CommentAction.defaultProps = {
  as: 'a'
};

 true ? CommentAction.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Style as the currently active action. */
  active: CommentAction___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Primary content. */
  children: CommentAction___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: CommentAction___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : void 0;

/* harmony default export */ var CommentAction_defaultExport = (CommentAction);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Comment/CommentActions.js
/* harmony import */ var CommentActions___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var CommentActions___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(CommentActions___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var CommentActions___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var CommentActions___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(CommentActions___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var CommentActions___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var CommentActions___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(CommentActions___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var CommentActions___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var CommentActions___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(CommentActions___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A comment can contain an list of actions a user may perform related to this comment.
 */
function CommentActions(props) {
  var className = props.className,
      children = props.children;

  var classes = CommentActions___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('actions', className);
  var rest = getUnhandledProps_defaultExport(CommentActions, props);
  var ElementType = getElementType_defaultExport(CommentActions, props);

  return CommentActions___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    CommentActions___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

CommentActions.handledProps = ['as', 'children', 'className'];
CommentActions._meta = {
  name: 'CommentActions',
  parent: 'Comment',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? CommentActions.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: CommentActions___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: CommentActions___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : void 0;

/* harmony default export */ var CommentActions_defaultExport = (CommentActions);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Comment/CommentAuthor.js
/* harmony import */ var CommentAuthor___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var CommentAuthor___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(CommentAuthor___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var CommentAuthor___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var CommentAuthor___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(CommentAuthor___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var CommentAuthor___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var CommentAuthor___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(CommentAuthor___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var CommentAuthor___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var CommentAuthor___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(CommentAuthor___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A comment can contain an author.
 */
function CommentAuthor(props) {
  var className = props.className,
      children = props.children;

  var classes = CommentAuthor___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('author', className);
  var rest = getUnhandledProps_defaultExport(CommentAuthor, props);
  var ElementType = getElementType_defaultExport(CommentAuthor, props);

  return CommentAuthor___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    CommentAuthor___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

CommentAuthor.handledProps = ['as', 'children', 'className'];
CommentAuthor._meta = {
  name: 'CommentAuthor',
  parent: 'Comment',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? CommentAuthor.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: CommentAuthor___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: CommentAuthor___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : void 0;

/* harmony default export */ var CommentAuthor_defaultExport = (CommentAuthor);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Comment/CommentAvatar.js
/* harmony import */ var CommentAvatar___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var CommentAvatar___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(CommentAvatar___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var CommentAvatar___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var CommentAvatar___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(CommentAvatar___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var CommentAvatar___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var CommentAvatar___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(CommentAvatar___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var CommentAvatar___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var CommentAvatar___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(CommentAvatar___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A comment can contain an image or avatar.
 */
function CommentAvatar(props) {
  var className = props.className,
      src = props.src;

  var classes = CommentAvatar___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('avatar', className);
  var rest = getUnhandledProps_defaultExport(CommentAvatar, props);
  var ElementType = getElementType_defaultExport(CommentAvatar, props);

  return CommentAvatar___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    CommentAvatar___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    createHTMLImage(src)
  );
}

CommentAvatar.handledProps = ['as', 'className', 'src'];
CommentAvatar._meta = {
  name: 'CommentAvatar',
  parent: 'Comment',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? CommentAvatar.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Additional classes. */
  className: CommentAvatar___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Specifies the URL of the image. */
  src: CommentAvatar___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : void 0;

/* harmony default export */ var CommentAvatar_defaultExport = (CommentAvatar);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Comment/CommentContent.js
/* harmony import */ var CommentContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var CommentContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(CommentContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var CommentContent___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var CommentContent___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(CommentContent___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var CommentContent___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var CommentContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(CommentContent___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var CommentContent___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var CommentContent___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(CommentContent___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A comment can contain content.
 */
function CommentContent(props) {
  var className = props.className,
      children = props.children;

  var classes = CommentContent___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(className, 'content');
  var rest = getUnhandledProps_defaultExport(CommentContent, props);
  var ElementType = getElementType_defaultExport(CommentContent, props);

  return CommentContent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    CommentContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

CommentContent.handledProps = ['as', 'children', 'className'];
CommentContent._meta = {
  name: 'CommentContent',
  parent: 'Comment',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? CommentContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: CommentContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: CommentContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : void 0;

/* harmony default export */ var CommentContent_defaultExport = (CommentContent);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Comment/CommentGroup.js
/* harmony import */ var CommentGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var CommentGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(CommentGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var CommentGroup___WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(544);
/* harmony import */ var CommentGroup___WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(CommentGroup___WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var CommentGroup___WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(543);
/* harmony import */ var CommentGroup___WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(CommentGroup___WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var CommentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(542);
/* harmony import */ var CommentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(CommentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var CommentGroup___WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(11);
/* harmony import */ var CommentGroup___WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(CommentGroup___WEBPACK_IMPORTED_MODULE_4_react__);









/**
 * Comments can be grouped.
 */
function CommentGroup(props) {
  var className = props.className,
      children = props.children,
      collapsed = props.collapsed,
      minimal = props.minimal,
      size = props.size,
      threaded = props.threaded;


  var classes = CommentGroup___WEBPACK_IMPORTED_MODULE_2_classnames___default.a('ui', size, useKeyOnly(collapsed, 'collapsed'), useKeyOnly(minimal, 'minimal'), useKeyOnly(threaded, 'threaded'), 'comments', className);
  var rest = getUnhandledProps_defaultExport(CommentGroup, props);
  var ElementType = getElementType_defaultExport(CommentGroup, props);

  return CommentGroup___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    ElementType,
    CommentGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

CommentGroup.handledProps = ['as', 'children', 'className', 'collapsed', 'minimal', 'size', 'threaded'];
CommentGroup._meta = {
  name: 'CommentGroup',
  parent: 'Comment',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? CommentGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: CommentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: CommentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Comments can be collapsed, or hidden from view. */
  collapsed: CommentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Comments can hide extra information unless a user shows intent to interact with a comment. */
  minimal: CommentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Comments can have different sizes. */
  size: CommentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(CommentGroup___WEBPACK_IMPORTED_MODULE_1_lodash_without___default.a(SUI_namespaceObject.SIZES, 'medium')),

  /** A comment list can be threaded to showing the relationship between conversations. */
  threaded: CommentGroup___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool
} : void 0;

/* harmony default export */ var CommentGroup_defaultExport = (CommentGroup);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Comment/CommentMetadata.js
/* harmony import */ var CommentMetadata___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var CommentMetadata___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(CommentMetadata___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var CommentMetadata___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var CommentMetadata___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(CommentMetadata___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var CommentMetadata___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var CommentMetadata___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(CommentMetadata___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var CommentMetadata___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var CommentMetadata___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(CommentMetadata___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined.
 */
function CommentMetadata(props) {
  var className = props.className,
      children = props.children;

  var classes = CommentMetadata___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('metadata', className);
  var rest = getUnhandledProps_defaultExport(CommentMetadata, props);
  var ElementType = getElementType_defaultExport(CommentMetadata, props);

  return CommentMetadata___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    CommentMetadata___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

CommentMetadata.handledProps = ['as', 'children', 'className'];
CommentMetadata._meta = {
  name: 'CommentMetadata',
  parent: 'Comment',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? CommentMetadata.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: CommentMetadata___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: CommentMetadata___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : void 0;

/* harmony default export */ var CommentMetadata_defaultExport = (CommentMetadata);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Comment/CommentText.js
/* harmony import */ var CommentText___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var CommentText___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(CommentText___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var CommentText___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var CommentText___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(CommentText___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var CommentText___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var CommentText___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(CommentText___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var CommentText___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var CommentText___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(CommentText___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A comment can contain text.
 */
function CommentText(props) {
  var className = props.className,
      children = props.children;

  var classes = CommentText___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(className, 'text');
  var rest = getUnhandledProps_defaultExport(CommentText, props);
  var ElementType = getElementType_defaultExport(CommentText, props);

  return CommentText___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    CommentText___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

CommentText.handledProps = ['as', 'children', 'className'];
CommentText._meta = {
  name: 'CommentText',
  parent: 'Comment',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? CommentText.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: CommentText___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: CommentText___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
} : void 0;

/* harmony default export */ var CommentText_defaultExport = (CommentText);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Comment/Comment.js
/* harmony import */ var Comment___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Comment___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Comment___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Comment___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var Comment___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(Comment___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var Comment___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var Comment___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(Comment___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var Comment___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var Comment___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(Comment___WEBPACK_IMPORTED_MODULE_3_react__);















/**
 * A comment displays user feedback to site content.
 */
function Comment(props) {
  var className = props.className,
      children = props.children,
      collapsed = props.collapsed;


  var classes = Comment___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(useKeyOnly(collapsed, 'collapsed'), 'comment', className);
  var rest = getUnhandledProps_defaultExport(Comment, props);
  var ElementType = getElementType_defaultExport(Comment, props);

  return Comment___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    Comment___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );
}

Comment.handledProps = ['as', 'children', 'className', 'collapsed'];
Comment._meta = {
  name: 'Comment',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? Comment.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: Comment___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: Comment___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Comment can be collapsed, or hidden from view. */
  collapsed: Comment___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
} : void 0;

Comment.Author = CommentAuthor_defaultExport;
Comment.Action = CommentAction_defaultExport;
Comment.Actions = CommentActions_defaultExport;
Comment.Avatar = CommentAvatar_defaultExport;
Comment.Content = CommentContent_defaultExport;
Comment.Group = CommentGroup_defaultExport;
Comment.Metadata = CommentMetadata_defaultExport;
Comment.Text = CommentText_defaultExport;

/* harmony default export */ var Comment_defaultExport = (Comment);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Comment/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Feed/FeedDate.js
/* harmony import */ var FeedDate___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var FeedDate___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(FeedDate___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var FeedDate___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var FeedDate___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(FeedDate___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var FeedDate___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var FeedDate___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(FeedDate___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var FeedDate___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var FeedDate___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(FeedDate___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * An event or an event summary can contain a date.
 */
function FeedDate(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = FeedDate___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('date', className);
  var rest = getUnhandledProps_defaultExport(FeedDate, props);
  var ElementType = getElementType_defaultExport(FeedDate, props);

  return FeedDate___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    FeedDate___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

FeedDate.handledProps = ['as', 'children', 'className', 'content'];
FeedDate._meta = {
  name: 'FeedDate',
  parent: 'Feed',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? FeedDate.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: FeedDate___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: FeedDate___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand
} : void 0;

/* harmony default export */ var FeedDate_defaultExport = (FeedDate);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Feed/FeedExtra.js
/* harmony import */ var FeedExtra___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var FeedExtra___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(FeedExtra___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var FeedExtra___WEBPACK_IMPORTED_MODULE_1_lodash_map__ = __webpack_require__(548);
/* harmony import */ var FeedExtra___WEBPACK_IMPORTED_MODULE_1_lodash_map___default = __webpack_require__.n(FeedExtra___WEBPACK_IMPORTED_MODULE_1_lodash_map__);
/* harmony import */ var FeedExtra___WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(543);
/* harmony import */ var FeedExtra___WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(FeedExtra___WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var FeedExtra___WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(542);
/* harmony import */ var FeedExtra___WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(FeedExtra___WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var FeedExtra___WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(11);
/* harmony import */ var FeedExtra___WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(FeedExtra___WEBPACK_IMPORTED_MODULE_4_react__);









/**
 * A feed can contain an extra content.
 */
function FeedExtra(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      images = props.images,
      text = props.text;


  var classes = FeedExtra___WEBPACK_IMPORTED_MODULE_2_classnames___default.a(useKeyOnly(images, 'images'), useKeyOnly(content || text, 'text'), 'extra', className);
  var rest = getUnhandledProps_defaultExport(FeedExtra, props);
  var ElementType = getElementType_defaultExport(FeedExtra, props);

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return FeedExtra___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      ElementType,
      FeedExtra___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  // TODO need a "collection factory" to handle creating multiple image elements and their keys
  var imageElements = FeedExtra___WEBPACK_IMPORTED_MODULE_1_lodash_map___default.a(images, function (image, index) {
    var key = [index, image].join('-');
    return createHTMLImage(image, { key: key });
  });

  return FeedExtra___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    ElementType,
    FeedExtra___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    content,
    imageElements
  );
}

FeedExtra.handledProps = ['as', 'children', 'className', 'content', 'images', 'text'];
FeedExtra._meta = {
  name: 'FeedExtra',
  parent: 'Feed',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? FeedExtra.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: FeedExtra___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: FeedExtra___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** An event can contain additional information like a set of images. */
  images: customPropTypes_namespaceObject.every([customPropTypes_namespaceObject.disallow(['text']), FeedExtra___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([FeedExtra___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, customPropTypes_namespaceObject.collectionShorthand])]),

  /** An event can contain additional text information. */
  text: FeedExtra___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool
} : void 0;

/* harmony default export */ var FeedExtra_defaultExport = (FeedExtra);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Feed/FeedLike.js
/* harmony import */ var FeedLike___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var FeedLike___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(FeedLike___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var FeedLike___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var FeedLike___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(FeedLike___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var FeedLike___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var FeedLike___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(FeedLike___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var FeedLike___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var FeedLike___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(FeedLike___WEBPACK_IMPORTED_MODULE_3_react__);








/**
 * A feed can contain a like element.
 */
function FeedLike(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      icon = props.icon;


  var classes = FeedLike___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('like', className);
  var rest = getUnhandledProps_defaultExport(FeedLike, props);
  var ElementType = getElementType_defaultExport(FeedLike, props);

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return FeedLike___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      ElementType,
      FeedLike___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  return FeedLike___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    FeedLike___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    Icon_defaultExport.create(icon),
    content
  );
}

FeedLike.handledProps = ['as', 'children', 'className', 'content', 'icon'];
FeedLike._meta = {
  name: 'FeedLike',
  parent: 'Feed',
  type: META_namespaceObject.TYPES.VIEW
};

FeedLike.defaultProps = {
  as: 'a'
};

 true ? FeedLike.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: FeedLike___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: FeedLike___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** Shorthand for icon. Mutually exclusive with children. */
  icon: customPropTypes_namespaceObject.itemShorthand
} : void 0;

/* harmony default export */ var FeedLike_defaultExport = (FeedLike);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Feed/FeedMeta.js
/* harmony import */ var FeedMeta___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var FeedMeta___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(FeedMeta___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var FeedMeta___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var FeedMeta___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(FeedMeta___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var FeedMeta___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var FeedMeta___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(FeedMeta___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var FeedMeta___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var FeedMeta___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(FeedMeta___WEBPACK_IMPORTED_MODULE_3_react__);








/**
 * A feed can contain a meta.
 */
function FeedMeta(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      like = props.like;


  var classes = FeedMeta___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('meta', className);
  var rest = getUnhandledProps_defaultExport(FeedMeta, props);
  var ElementType = getElementType_defaultExport(FeedMeta, props);

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return FeedMeta___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      ElementType,
      FeedMeta___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  return FeedMeta___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    FeedMeta___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    createShorthand(FeedLike_defaultExport, function (val) {
      return { content: val };
    }, like),
    content
  );
}

FeedMeta.handledProps = ['as', 'children', 'className', 'content', 'like'];
FeedMeta._meta = {
  name: 'FeedMeta',
  parent: 'Feed',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? FeedMeta.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: FeedMeta___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: FeedMeta___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** Shorthand for FeedLike. */
  like: customPropTypes_namespaceObject.itemShorthand
} : void 0;

/* harmony default export */ var FeedMeta_defaultExport = (FeedMeta);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Feed/FeedUser.js
/* harmony import */ var FeedUser___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var FeedUser___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(FeedUser___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var FeedUser___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var FeedUser___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(FeedUser___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var FeedUser___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var FeedUser___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(FeedUser___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var FeedUser___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var FeedUser___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(FeedUser___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A feed can contain a user element.
 */
function FeedUser(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = FeedUser___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('user', className);
  var rest = getUnhandledProps_defaultExport(FeedUser, props);
  var ElementType = getElementType_defaultExport(FeedUser, props);

  return FeedUser___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    FeedUser___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

FeedUser.handledProps = ['as', 'children', 'className', 'content'];
FeedUser._meta = {
  name: 'FeedUser',
  parent: 'Feed',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? FeedUser.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: FeedUser___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: FeedUser___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand
} : void 0;

FeedUser.defaultProps = {
  as: 'a'
};

/* harmony default export */ var FeedUser_defaultExport = (FeedUser);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Feed/FeedSummary.js
/* harmony import */ var FeedSummary___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var FeedSummary___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(FeedSummary___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var FeedSummary___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var FeedSummary___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(FeedSummary___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var FeedSummary___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var FeedSummary___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(FeedSummary___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var FeedSummary___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var FeedSummary___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(FeedSummary___WEBPACK_IMPORTED_MODULE_3_react__);









/**
 * A feed can contain a summary.
 */
function FeedSummary(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      date = props.date,
      user = props.user;


  var classes = FeedSummary___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('summary', className);
  var rest = getUnhandledProps_defaultExport(FeedSummary, props);
  var ElementType = getElementType_defaultExport(FeedSummary, props);

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return FeedSummary___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      ElementType,
      FeedSummary___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  return FeedSummary___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    FeedSummary___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    createShorthand(FeedUser_defaultExport, function (val) {
      return { content: val };
    }, user),
    content,
    createShorthand(FeedDate_defaultExport, function (val) {
      return { content: val };
    }, date)
  );
}

FeedSummary.handledProps = ['as', 'children', 'className', 'content', 'date', 'user'];
FeedSummary._meta = {
  name: 'FeedSummary',
  parent: 'Feed',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? FeedSummary.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: FeedSummary___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: FeedSummary___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** Shorthand for FeedDate. */
  date: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for FeedUser. */
  user: customPropTypes_namespaceObject.itemShorthand
} : void 0;

/* harmony default export */ var FeedSummary_defaultExport = (FeedSummary);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Feed/FeedContent.js
/* harmony import */ var FeedContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var FeedContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(FeedContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var FeedContent___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var FeedContent___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(FeedContent___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var FeedContent___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var FeedContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(FeedContent___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var FeedContent___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var FeedContent___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(FeedContent___WEBPACK_IMPORTED_MODULE_3_react__);











function FeedContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      extraImages = props.extraImages,
      extraText = props.extraText,
      date = props.date,
      meta = props.meta,
      summary = props.summary;


  var classes = FeedContent___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('content', className);
  var rest = getUnhandledProps_defaultExport(FeedContent, props);
  var ElementType = getElementType_defaultExport(FeedContent, props);

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return FeedContent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      ElementType,
      FeedContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  return FeedContent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    FeedContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    createShorthand(FeedDate_defaultExport, function (val) {
      return { content: val };
    }, date),
    createShorthand(FeedSummary_defaultExport, function (val) {
      return { content: val };
    }, summary),
    content,
    createShorthand(FeedExtra_defaultExport, function (val) {
      return { text: true, content: val };
    }, extraText),
    createShorthand(FeedExtra_defaultExport, function (val) {
      return { images: val };
    }, extraImages),
    createShorthand(FeedMeta_defaultExport, function (val) {
      return { content: val };
    }, meta)
  );
}

FeedContent.handledProps = ['as', 'children', 'className', 'content', 'date', 'extraImages', 'extraText', 'meta', 'summary'];
FeedContent._meta = {
  name: 'FeedContent',
  parent: 'Feed',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? FeedContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: FeedContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: FeedContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** An event can contain a date. */
  date: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for FeedExtra with images. */
  extraImages: FeedExtra_defaultExport.propTypes.images,

  /** Shorthand for FeedExtra with text. */
  extraText: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for FeedMeta. */
  meta: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for FeedSummary. */
  summary: customPropTypes_namespaceObject.itemShorthand
} : void 0;

/* harmony default export */ var FeedContent_defaultExport = (FeedContent);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Feed/FeedLabel.js
/* harmony import */ var FeedLabel___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var FeedLabel___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(FeedLabel___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var FeedLabel___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var FeedLabel___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(FeedLabel___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var FeedLabel___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var FeedLabel___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(FeedLabel___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var FeedLabel___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var FeedLabel___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(FeedLabel___WEBPACK_IMPORTED_MODULE_3_react__);








/**
 * An event can contain an image or icon label.
 */
function FeedLabel(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      icon = props.icon,
      image = props.image;


  var classes = FeedLabel___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('label', className);
  var rest = getUnhandledProps_defaultExport(FeedLabel, props);
  var ElementType = getElementType_defaultExport(FeedLabel, props);

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return FeedLabel___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      ElementType,
      FeedLabel___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  return FeedLabel___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    FeedLabel___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    content,
    Icon_defaultExport.create(icon),
    createHTMLImage(image)
  );
}

FeedLabel.handledProps = ['as', 'children', 'className', 'content', 'icon', 'image'];
FeedLabel._meta = {
  name: 'FeedLabel',
  parent: 'Feed',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? FeedLabel.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: FeedLabel___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: FeedLabel___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** An event can contain icon label. */
  icon: customPropTypes_namespaceObject.itemShorthand,

  /** An event can contain image label. */
  image: customPropTypes_namespaceObject.itemShorthand
} : void 0;

/* harmony default export */ var FeedLabel_defaultExport = (FeedLabel);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Feed/FeedEvent.js
/* harmony import */ var FeedEvent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var FeedEvent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(FeedEvent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var FeedEvent___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var FeedEvent___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(FeedEvent___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var FeedEvent___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var FeedEvent___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(FeedEvent___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var FeedEvent___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var FeedEvent___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(FeedEvent___WEBPACK_IMPORTED_MODULE_3_react__);









/**
 * A feed contains an event.
 */
function FeedEvent(props) {
  var content = props.content,
      children = props.children,
      className = props.className,
      date = props.date,
      extraImages = props.extraImages,
      extraText = props.extraText,
      image = props.image,
      icon = props.icon,
      meta = props.meta,
      summary = props.summary;


  var classes = FeedEvent___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('event', className);
  var rest = getUnhandledProps_defaultExport(FeedEvent, props);
  var ElementType = getElementType_defaultExport(FeedEvent, props);

  var hasContentProp = content || date || extraImages || extraText || meta || summary;
  var contentProps = { content: content, date: date, extraImages: extraImages, extraText: extraText, meta: meta, summary: summary };

  return FeedEvent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    FeedEvent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    createShorthand(FeedLabel_defaultExport, function (val) {
      return { icon: val };
    }, icon),
    createShorthand(FeedLabel_defaultExport, function (val) {
      return { image: val };
    }, image),
    hasContentProp && FeedEvent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(FeedContent_defaultExport, contentProps),
    children
  );
}

FeedEvent.handledProps = ['as', 'children', 'className', 'content', 'date', 'extraImages', 'extraText', 'icon', 'image', 'meta', 'summary'];
FeedEvent._meta = {
  name: 'FeedEvent',
  parent: 'Feed',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? FeedEvent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: FeedEvent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: FeedEvent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for FeedContent. */
  content: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for FeedDate. */
  date: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for FeedExtra with images. */
  extraImages: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for FeedExtra with content. */
  extraText: customPropTypes_namespaceObject.itemShorthand,

  /** An event can contain icon label. */
  icon: customPropTypes_namespaceObject.itemShorthand,

  /** An event can contain image label. */
  image: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for FeedMeta. */
  meta: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for FeedSummary. */
  summary: customPropTypes_namespaceObject.itemShorthand
} : void 0;

/* harmony default export */ var FeedEvent_defaultExport = (FeedEvent);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Feed/Feed.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var Feed___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Feed___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(Feed___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_without__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_map__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);




















/**
 * A feed presents user activity chronologically.
 */
function Feed(props) {
  var children = props.children,
      className = props.className,
      events = props.events,
      size = props.size;


  var classes = __WEBPACK_IMPORTED_MODULE_4_classnames___default.a('ui', size, 'feed', className);
  var rest = getUnhandledProps_defaultExport(Feed, props);
  var ElementType = getElementType_defaultExport(Feed, props);

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
      ElementType,
      Feed___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  var eventElements = __WEBPACK_IMPORTED_MODULE_3_lodash_map___default.a(events, function (eventProps) {
    var childKey = eventProps.childKey,
        date = eventProps.date,
        meta = eventProps.meta,
        summary = eventProps.summary,
        eventData = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default.a(eventProps, ['childKey', 'date', 'meta', 'summary']);

    var finalKey = childKey || [date, meta, summary].join('-');

    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(FeedEvent_defaultExport, Feed___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({
      date: date,
      key: finalKey,
      meta: meta,
      summary: summary
    }, eventData));
  });

  return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
    ElementType,
    Feed___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    eventElements
  );
}

Feed.handledProps = ['as', 'children', 'className', 'events', 'size'];
Feed._meta = {
  name: 'Feed',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? Feed.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node,

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,

  /** Shorthand array of props for FeedEvent. */
  events: customPropTypes_namespaceObject.collectionShorthand,

  /** A feed can have different sizes. */
  size: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_2_lodash_without___default.a(SUI_namespaceObject.SIZES, 'mini', 'tiny', 'medium', 'big', 'huge', 'massive'))
} : void 0;

Feed.Content = FeedContent_defaultExport;
Feed.Date = FeedDate_defaultExport;
Feed.Event = FeedEvent_defaultExport;
Feed.Extra = FeedExtra_defaultExport;
Feed.Label = FeedLabel_defaultExport;
Feed.Like = FeedLike_defaultExport;
Feed.Meta = FeedMeta_defaultExport;
Feed.Summary = FeedSummary_defaultExport;
Feed.User = FeedUser_defaultExport;

/* harmony default export */ var Feed_defaultExport = (Feed);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Feed/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Item/ItemHeader.js
/* harmony import */ var ItemHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ItemHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ItemHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ItemHeader___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var ItemHeader___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(ItemHeader___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var ItemHeader___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var ItemHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(ItemHeader___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var ItemHeader___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var ItemHeader___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(ItemHeader___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * An item can contain a header.
 */
function ItemHeader(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = ItemHeader___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('header', className);
  var rest = getUnhandledProps_defaultExport(ItemHeader, props);
  var ElementType = getElementType_defaultExport(ItemHeader, props);

  return ItemHeader___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    ItemHeader___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

ItemHeader.handledProps = ['as', 'children', 'className', 'content'];
ItemHeader._meta = {
  name: 'ItemHeader',
  parent: 'Item',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? ItemHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: ItemHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: ItemHeader___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand
} : void 0;

ItemHeader.create = createShorthandFactory(ItemHeader, function (content) {
  return { content: content };
});

/* harmony default export */ var ItemHeader_defaultExport = (ItemHeader);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Item/ItemDescription.js
/* harmony import */ var ItemDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ItemDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ItemDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ItemDescription___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var ItemDescription___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(ItemDescription___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var ItemDescription___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var ItemDescription___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(ItemDescription___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var ItemDescription___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var ItemDescription___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(ItemDescription___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * An item can contain a description with a single or multiple paragraphs.
 */
function ItemDescription(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = ItemDescription___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('description', className);
  var rest = getUnhandledProps_defaultExport(ItemDescription, props);
  var ElementType = getElementType_defaultExport(ItemDescription, props);

  return ItemDescription___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    ItemDescription___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

ItemDescription.handledProps = ['as', 'children', 'className', 'content'];
ItemDescription._meta = {
  name: 'ItemDescription',
  parent: 'Item',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? ItemDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: ItemDescription___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: ItemDescription___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand
} : void 0;

ItemDescription.create = createShorthandFactory(ItemDescription, function (content) {
  return { content: content };
});

/* harmony default export */ var ItemDescription_defaultExport = (ItemDescription);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Item/ItemExtra.js
/* harmony import */ var ItemExtra___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ItemExtra___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ItemExtra___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ItemExtra___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var ItemExtra___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(ItemExtra___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var ItemExtra___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var ItemExtra___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(ItemExtra___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var ItemExtra___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var ItemExtra___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(ItemExtra___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * An item can contain extra content meant to be formatted separately from the main content.
 */
function ItemExtra(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = ItemExtra___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('extra', className);
  var rest = getUnhandledProps_defaultExport(ItemExtra, props);
  var ElementType = getElementType_defaultExport(ItemExtra, props);

  return ItemExtra___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    ItemExtra___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

ItemExtra.handledProps = ['as', 'children', 'className', 'content'];
ItemExtra._meta = {
  name: 'ItemExtra',
  parent: 'Item',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? ItemExtra.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: ItemExtra___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: ItemExtra___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand
} : void 0;

ItemExtra.create = createShorthandFactory(ItemExtra, function (content) {
  return { content: content };
});

/* harmony default export */ var ItemExtra_defaultExport = (ItemExtra);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Item/ItemMeta.js
/* harmony import */ var ItemMeta___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ItemMeta___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ItemMeta___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ItemMeta___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var ItemMeta___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(ItemMeta___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var ItemMeta___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var ItemMeta___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(ItemMeta___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var ItemMeta___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var ItemMeta___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(ItemMeta___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * An item can contain content metadata.
 */
function ItemMeta(props) {
  var children = props.children,
      className = props.className,
      content = props.content;

  var classes = ItemMeta___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('meta', className);
  var rest = getUnhandledProps_defaultExport(ItemMeta, props);
  var ElementType = getElementType_defaultExport(ItemMeta, props);

  return ItemMeta___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    ItemMeta___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? content : children
  );
}

ItemMeta.handledProps = ['as', 'children', 'className', 'content'];
ItemMeta._meta = {
  name: 'ItemMeta',
  parent: 'Item',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? ItemMeta.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: ItemMeta___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: ItemMeta___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand
} : void 0;

ItemMeta.create = createShorthandFactory(ItemMeta, function (content) {
  return { content: content };
});

/* harmony default export */ var ItemMeta_defaultExport = (ItemMeta);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Item/ItemContent.js
/* harmony import */ var ItemContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ItemContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ItemContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ItemContent___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var ItemContent___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(ItemContent___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var ItemContent___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var ItemContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(ItemContent___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var ItemContent___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var ItemContent___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(ItemContent___WEBPACK_IMPORTED_MODULE_3_react__);











/**
 * An item can contain content.
 */
function ItemContent(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      extra = props.extra,
      header = props.header,
      meta = props.meta,
      verticalAlign = props.verticalAlign;


  var classes = ItemContent___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(useVerticalAlignProp(verticalAlign), 'content', className);
  var rest = getUnhandledProps_defaultExport(ItemContent, props);
  var ElementType = getElementType_defaultExport(ItemContent, props);

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return ItemContent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      ElementType,
      ItemContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  return ItemContent___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    ItemContent___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    ItemHeader_defaultExport.create(header),
    ItemMeta_defaultExport.create(meta),
    ItemDescription_defaultExport.create(description),
    ItemExtra_defaultExport.create(extra),
    content
  );
}

ItemContent.handledProps = ['as', 'children', 'className', 'content', 'description', 'extra', 'header', 'meta', 'verticalAlign'];
ItemContent._meta = {
  name: 'ItemContent',
  parent: 'Item',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? ItemContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: ItemContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: ItemContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** Shorthand for ItemDescription component. */
  description: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for ItemExtra component. */
  extra: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for ItemHeader component. */
  header: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for ItemMeta component. */
  meta: customPropTypes_namespaceObject.itemShorthand,

  /** Content can specify its vertical alignment. */
  verticalAlign: ItemContent___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(SUI_namespaceObject.VERTICAL_ALIGNMENTS)
} : void 0;

/* harmony default export */ var ItemContent_defaultExport = (ItemContent);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Item/ItemGroup.js
/* harmony import */ var ItemGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(581);
/* harmony import */ var ItemGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(ItemGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var ItemGroup___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ItemGroup___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(ItemGroup___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var ItemGroup___WEBPACK_IMPORTED_MODULE_2_lodash_map__ = __webpack_require__(548);
/* harmony import */ var ItemGroup___WEBPACK_IMPORTED_MODULE_2_lodash_map___default = __webpack_require__.n(ItemGroup___WEBPACK_IMPORTED_MODULE_2_lodash_map__);
/* harmony import */ var ItemGroup___WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(543);
/* harmony import */ var ItemGroup___WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(ItemGroup___WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var ItemGroup___WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(542);
/* harmony import */ var ItemGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(ItemGroup___WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var ItemGroup___WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(11);
/* harmony import */ var ItemGroup___WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(ItemGroup___WEBPACK_IMPORTED_MODULE_5_react__);











/**
 * A group of items.
 */
function ItemGroup(props) {
  var children = props.children,
      className = props.className,
      divided = props.divided,
      items = props.items,
      link = props.link,
      relaxed = props.relaxed,
      unstackable = props.unstackable;


  var classes = ItemGroup___WEBPACK_IMPORTED_MODULE_3_classnames___default.a('ui', useKeyOnly(divided, 'divided'), useKeyOnly(link, 'link'), useKeyOnly(unstackable, 'unstackable'), useKeyOrValueAndKey(relaxed, 'relaxed'), 'items', className);
  var rest = getUnhandledProps_defaultExport(ItemGroup, props);
  var ElementType = getElementType_defaultExport(ItemGroup, props);

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return ItemGroup___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      ElementType,
      ItemGroup___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  var itemsJSX = ItemGroup___WEBPACK_IMPORTED_MODULE_2_lodash_map___default.a(items, function (item) {
    var childKey = item.childKey,
        itemProps = ItemGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default.a(item, ['childKey']);

    var finalKey = childKey || [itemProps.content, itemProps.description, itemProps.header, itemProps.meta].join('-');

    return ItemGroup___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Item_defaultExport, ItemGroup___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, itemProps, { key: finalKey }));
  });

  return ItemGroup___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    ElementType,
    ItemGroup___WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    itemsJSX
  );
}

ItemGroup.handledProps = ['as', 'children', 'className', 'divided', 'items', 'link', 'relaxed', 'unstackable'];
ItemGroup._meta = {
  name: 'ItemGroup',
  type: META_namespaceObject.TYPES.VIEW,
  parent: 'Item'
};

 true ? ItemGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: ItemGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,

  /** Additional classes. */
  className: ItemGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /** Items can be divided to better distinguish between grouped content. */
  divided: ItemGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Shorthand array of props for Item. */
  items: customPropTypes_namespaceObject.collectionShorthand,

  /** An item can be formatted so that the entire contents link to another page. */
  link: ItemGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A group of items can relax its padding to provide more negative space. */
  relaxed: ItemGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([ItemGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool, ItemGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['very'])]),

  /** Prevent items from stacking on mobile. */
  unstackable: ItemGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool
} : void 0;

/* harmony default export */ var ItemGroup_defaultExport = (ItemGroup);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Item/ItemImage.js
/* harmony import */ var ItemImage___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var ItemImage___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(ItemImage___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var ItemImage___WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(11);
/* harmony import */ var ItemImage___WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(ItemImage___WEBPACK_IMPORTED_MODULE_1_react__);






/**
 * An item can contain an image.
 */
function ItemImage(props) {
  var size = props.size;

  var rest = getUnhandledProps_defaultExport(ItemImage, props);

  return ItemImage___WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Image_defaultExport, ItemImage___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { size: size, ui: !!size, wrapped: true }));
}

ItemImage.handledProps = ['size'];
ItemImage._meta = {
  name: 'ItemImage',
  parent: 'Item',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? ItemImage.propTypes = {
  /** An image may appear at different sizes. */
  size: Image_defaultExport.propTypes.size
} : void 0;

ItemImage.create = createShorthandFactory(ItemImage, function (src) {
  return { src: src };
});

/* harmony default export */ var ItemImage_defaultExport = (ItemImage);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Item/Item.js
/* harmony import */ var Item___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Item___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Item___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Item___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var Item___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(Item___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var Item___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var Item___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(Item___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var Item___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var Item___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(Item___WEBPACK_IMPORTED_MODULE_3_react__);














/**
 * An item view presents large collections of site content for display.
 */
function Item(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      description = props.description,
      extra = props.extra,
      header = props.header,
      image = props.image,
      meta = props.meta;


  var classes = Item___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('item', className);
  var rest = getUnhandledProps_defaultExport(Item, props);
  var ElementType = getElementType_defaultExport(Item, props);

  if (!childrenUtils_namespaceObject.isNil(children)) {
    return Item___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      ElementType,
      Item___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
      children
    );
  }

  return Item___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    Item___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    ItemImage_defaultExport.create(image),
    Item___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ItemContent_defaultExport, {
      content: content,
      description: description,
      extra: extra,
      header: header,
      meta: meta
    })
  );
}

Item.handledProps = ['as', 'children', 'className', 'content', 'description', 'extra', 'header', 'image', 'meta'];
Item._meta = {
  name: 'Item',
  type: META_namespaceObject.TYPES.VIEW
};

Item.Content = ItemContent_defaultExport;
Item.Description = ItemDescription_defaultExport;
Item.Extra = ItemExtra_defaultExport;
Item.Group = ItemGroup_defaultExport;
Item.Header = ItemHeader_defaultExport;
Item.Image = ItemImage_defaultExport;
Item.Meta = ItemMeta_defaultExport;

 true ? Item.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: Item___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: Item___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for ItemContent component. */
  content: customPropTypes_namespaceObject.contentShorthand,

  /** Shorthand for ItemDescription component. */
  description: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for ItemExtra component. */
  extra: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for ItemHeader component. */
  header: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for ItemImage component. */
  image: customPropTypes_namespaceObject.itemShorthand,

  /** Shorthand for ItemMeta component. */
  meta: customPropTypes_namespaceObject.itemShorthand
} : void 0;

/* harmony default export */ var Item_defaultExport = (Item);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Item/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Statistic/StatisticGroup.js
/* harmony import */ var StatisticGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var StatisticGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(StatisticGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var StatisticGroup___WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(544);
/* harmony import */ var StatisticGroup___WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(StatisticGroup___WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var StatisticGroup___WEBPACK_IMPORTED_MODULE_2_lodash_map__ = __webpack_require__(548);
/* harmony import */ var StatisticGroup___WEBPACK_IMPORTED_MODULE_2_lodash_map___default = __webpack_require__.n(StatisticGroup___WEBPACK_IMPORTED_MODULE_2_lodash_map__);
/* harmony import */ var StatisticGroup___WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(543);
/* harmony import */ var StatisticGroup___WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(StatisticGroup___WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var StatisticGroup___WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(542);
/* harmony import */ var StatisticGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(StatisticGroup___WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var StatisticGroup___WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(11);
/* harmony import */ var StatisticGroup___WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(StatisticGroup___WEBPACK_IMPORTED_MODULE_5_react__);











/**
 * A group of statistics.
 */
function StatisticGroup(props) {
  var children = props.children,
      className = props.className,
      color = props.color,
      horizontal = props.horizontal,
      inverted = props.inverted,
      items = props.items,
      size = props.size,
      widths = props.widths;


  var classes = StatisticGroup___WEBPACK_IMPORTED_MODULE_3_classnames___default.a('ui', color, size, useKeyOnly(horizontal, 'horizontal'), useKeyOnly(inverted, 'inverted'), classNameBuilders_useWidthProp(widths), 'statistics', className);
  var rest = getUnhandledProps_defaultExport(StatisticGroup, props);
  var ElementType = getElementType_defaultExport(StatisticGroup, props);

  if (!childrenUtils_namespaceObject.isNil(children)) return StatisticGroup___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    ElementType,
    StatisticGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );

  var itemsJSX = StatisticGroup___WEBPACK_IMPORTED_MODULE_2_lodash_map___default.a(items, function (item) {
    return StatisticGroup___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(Statistic_defaultExport, StatisticGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({ key: item.childKey || [item.label, item.title].join('-') }, item));
  });

  return StatisticGroup___WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
    ElementType,
    StatisticGroup___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    itemsJSX
  );
}

StatisticGroup.handledProps = ['as', 'children', 'className', 'color', 'horizontal', 'inverted', 'items', 'size', 'widths'];
StatisticGroup._meta = {
  name: 'StatisticGroup',
  type: META_namespaceObject.TYPES.VIEW,
  parent: 'Statistic'
};

 true ? StatisticGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: StatisticGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,

  /** Additional classes. */
  className: StatisticGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /** A statistic group can be formatted to be different colors. */
  color: StatisticGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(SUI_namespaceObject.COLORS),

  /** A statistic group can present its measurement horizontally. */
  horizontal: StatisticGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** A statistic group can be formatted to fit on a dark background. */
  inverted: StatisticGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /** Array of props for Statistic. */
  items: customPropTypes_namespaceObject.collectionShorthand,

  /** A statistic group can vary in size. */
  size: StatisticGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(StatisticGroup___WEBPACK_IMPORTED_MODULE_1_lodash_without___default.a(SUI_namespaceObject.SIZES, 'big', 'massive', 'medium')),

  /** A statistic group can have its items divided evenly. */
  widths: StatisticGroup___WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(SUI_namespaceObject.WIDTHS)
} : void 0;

/* harmony default export */ var StatisticGroup_defaultExport = (StatisticGroup);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Statistic/StatisticLabel.js
/* harmony import */ var StatisticLabel___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var StatisticLabel___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(StatisticLabel___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var StatisticLabel___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var StatisticLabel___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(StatisticLabel___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var StatisticLabel___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var StatisticLabel___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(StatisticLabel___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var StatisticLabel___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var StatisticLabel___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(StatisticLabel___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A statistic can contain a label to help provide context for the presented value.
 */
function StatisticLabel(props) {
  var children = props.children,
      className = props.className,
      label = props.label;

  var classes = StatisticLabel___WEBPACK_IMPORTED_MODULE_1_classnames___default.a('label', className);
  var rest = getUnhandledProps_defaultExport(StatisticLabel, props);
  var ElementType = getElementType_defaultExport(StatisticLabel, props);

  return StatisticLabel___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    StatisticLabel___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? label : children
  );
}

StatisticLabel.handledProps = ['as', 'children', 'className', 'label'];
StatisticLabel._meta = {
  name: 'StatisticLabel',
  parent: 'Statistic',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? StatisticLabel.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: StatisticLabel___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: StatisticLabel___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Shorthand for primary content. */
  label: customPropTypes_namespaceObject.contentShorthand
} : void 0;

/* harmony default export */ var StatisticLabel_defaultExport = (StatisticLabel);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Statistic/StatisticValue.js
/* harmony import */ var StatisticValue___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var StatisticValue___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(StatisticValue___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var StatisticValue___WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(543);
/* harmony import */ var StatisticValue___WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(StatisticValue___WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var StatisticValue___WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(542);
/* harmony import */ var StatisticValue___WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(StatisticValue___WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var StatisticValue___WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(11);
/* harmony import */ var StatisticValue___WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(StatisticValue___WEBPACK_IMPORTED_MODULE_3_react__);







/**
 * A statistic can contain a numeric, icon, image, or text value.
 */
function StatisticValue(props) {
  var children = props.children,
      className = props.className,
      text = props.text,
      value = props.value;


  var classes = StatisticValue___WEBPACK_IMPORTED_MODULE_1_classnames___default.a(useKeyOnly(text, 'text'), 'value', className);
  var rest = getUnhandledProps_defaultExport(StatisticValue, props);
  var ElementType = getElementType_defaultExport(StatisticValue, props);

  return StatisticValue___WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    ElementType,
    StatisticValue___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    childrenUtils_namespaceObject.isNil(children) ? value : children
  );
}

StatisticValue.handledProps = ['as', 'children', 'className', 'text', 'value'];
StatisticValue._meta = {
  name: 'StatisticValue',
  parent: 'Statistic',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? StatisticValue.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: StatisticValue___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,

  /** Additional classes. */
  className: StatisticValue___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  /** Format the value with smaller font size to fit nicely beside number values. */
  text: StatisticValue___WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Primary content of the StatisticValue. Mutually exclusive with the children prop. */
  value: customPropTypes_namespaceObject.contentShorthand
} : void 0;

/* harmony default export */ var StatisticValue_defaultExport = (StatisticValue);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Statistic/Statistic.js
/* harmony import */ var Statistic___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(112);
/* harmony import */ var Statistic___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(Statistic___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var Statistic___WEBPACK_IMPORTED_MODULE_1_lodash_without__ = __webpack_require__(544);
/* harmony import */ var Statistic___WEBPACK_IMPORTED_MODULE_1_lodash_without___default = __webpack_require__.n(Statistic___WEBPACK_IMPORTED_MODULE_1_lodash_without__);
/* harmony import */ var Statistic___WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(543);
/* harmony import */ var Statistic___WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(Statistic___WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var Statistic___WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(542);
/* harmony import */ var Statistic___WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(Statistic___WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var Statistic___WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(11);
/* harmony import */ var Statistic___WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(Statistic___WEBPACK_IMPORTED_MODULE_4_react__);












/**
 * A statistic emphasizes the current value of an attribute.
 */
function Statistic(props) {
  var children = props.children,
      className = props.className,
      color = props.color,
      floated = props.floated,
      horizontal = props.horizontal,
      inverted = props.inverted,
      label = props.label,
      size = props.size,
      text = props.text,
      value = props.value;


  var classes = Statistic___WEBPACK_IMPORTED_MODULE_2_classnames___default.a('ui', color, size, useValueAndKey(floated, 'floated'), useKeyOnly(horizontal, 'horizontal'), useKeyOnly(inverted, 'inverted'), 'statistic', className);
  var rest = getUnhandledProps_defaultExport(Statistic, props);
  var ElementType = getElementType_defaultExport(Statistic, props);

  if (!childrenUtils_namespaceObject.isNil(children)) return Statistic___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    ElementType,
    Statistic___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    children
  );

  return Statistic___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    ElementType,
    Statistic___WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default.a({}, rest, { className: classes }),
    Statistic___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(StatisticValue_defaultExport, { text: text, value: value }),
    Statistic___WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(StatisticLabel_defaultExport, { label: label })
  );
}

Statistic.handledProps = ['as', 'children', 'className', 'color', 'floated', 'horizontal', 'inverted', 'label', 'size', 'text', 'value'];
Statistic._meta = {
  name: 'Statistic',
  type: META_namespaceObject.TYPES.VIEW
};

 true ? Statistic.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes_namespaceObject.as,

  /** Primary content. */
  children: Statistic___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,

  /** Additional classes. */
  className: Statistic___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** A statistic can be formatted to be different colors. */
  color: Statistic___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.COLORS),

  /** A statistic can sit to the left or right of other content. */
  floated: Statistic___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(SUI_namespaceObject.FLOATS),

  /** A statistic can present its measurement horizontally. */
  horizontal: Statistic___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** A statistic can be formatted to fit on a dark background. */
  inverted: Statistic___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Label content of the Statistic. */
  label: customPropTypes_namespaceObject.contentShorthand,

  /** A statistic can vary in size. */
  size: Statistic___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(Statistic___WEBPACK_IMPORTED_MODULE_1_lodash_without___default.a(SUI_namespaceObject.SIZES, 'big', 'massive', 'medium')),

  /** Format the StatisticValue with smaller font size to fit nicely beside number values. */
  text: Statistic___WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /** Value content of the Statistic. */
  value: customPropTypes_namespaceObject.contentShorthand
} : void 0;

Statistic.Group = StatisticGroup_defaultExport;
Statistic.Label = StatisticLabel_defaultExport;
Statistic.Value = StatisticValue_defaultExport;

/* harmony default export */ var Statistic_defaultExport = (Statistic);
// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/views/Statistic/index.js


// CONCATENATED MODULE: ./node_modules/semantic-ui-react/dist/es/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Confirm", function() { return Confirm_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Select", function() { return Select_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Visibility", function() { return Visibility_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return Breadcrumb_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BreadcrumbDivider", function() { return BreadcrumbDivider_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BreadcrumbSection", function() { return BreadcrumbSection_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Form", function() { return Form_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FormButton", function() { return FormButton_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FormCheckbox", function() { return FormCheckbox_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FormDropdown", function() { return FormDropdown_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FormField", function() { return FormField_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FormInput", function() { return FormInput_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FormRadio", function() { return FormRadio_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FormSelect", function() { return FormSelect_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FormTextArea", function() { return FormTextArea_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GridColumn", function() { return GridColumn_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GridRow", function() { return GridRow_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MenuHeader", function() { return MenuHeader_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MenuMenu", function() { return MenuMenu_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Message", function() { return Message_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MessageContent", function() { return MessageContent_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MessageHeader", function() { return MessageHeader_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MessageItem", function() { return MessageItem_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MessageList", function() { return MessageList_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Table", function() { return Table_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TableBody", function() { return TableBody_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TableCell", function() { return TableCell_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TableFooter", function() { return TableFooter_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TableHeader", function() { return TableHeader_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TableHeaderCell", function() { return TableHeaderCell_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TableRow", function() { return TableRow_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Button", function() { return Button_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ButtonContent", function() { return ButtonContent_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ButtonOr", function() { return ButtonOr_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Container", function() { return Container_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Divider", function() { return Divider_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Flag", function() { return Flag_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Header", function() { return Header_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "HeaderContent", function() { return HeaderContent_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "HeaderSubheader", function() { return HeaderSubheader_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IconGroup", function() { return IconGroup_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Image", function() { return Image_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ImageGroup", function() { return ImageGroup_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Input", function() { return Input_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Label", function() { return Label_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "LabelDetail", function() { return LabelDetail_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "LabelGroup", function() { return LabelGroup_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "List", function() { return List_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ListContent", function() { return ListContent_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ListDescription", function() { return ListDescription_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ListHeader", function() { return ListHeader_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ListIcon", function() { return ListIcon_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ListList", function() { return ListList_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Rail", function() { return Rail_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Reveal", function() { return Reveal_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "RevealContent", function() { return RevealContent_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Segment", function() { return Segment_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SegmentGroup", function() { return SegmentGroup_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Step", function() { return Step_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "StepContent", function() { return StepContent_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "StepDescription", function() { return StepDescription_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "StepGroup", function() { return StepGroup_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "StepTitle", function() { return StepTitle_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AccordionContent", function() { return AccordionContent_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AccordionTitle", function() { return AccordionTitle_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Dimmer", function() { return Dimmer_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DimmerDimmable", function() { return DimmerDimmable_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DropdownDivider", function() { return DropdownDivider_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DropdownHeader", function() { return DropdownHeader_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DropdownItem", function() { return DropdownItem_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return DropdownMenu_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DropdownSearchInput", function() { return DropdownSearchInput_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Embed", function() { return Embed_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ModalActions", function() { return ModalActions_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ModalContent", function() { return ModalContent_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ModalDescription", function() { return ModalDescription_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ModalHeader", function() { return ModalHeader_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PopupContent", function() { return PopupContent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "PopupHeader", function() { return PopupHeader; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Rating", function() { return Rating_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "RatingIcon", function() { return RatingIcon_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Search", function() { return Search_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SearchCategory", function() { return SearchCategory_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SearchResult", function() { return SearchResult_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SearchResults", function() { return SearchResults_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SidebarPushable", function() { return SidebarPushable_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SidebarPusher", function() { return SidebarPusher_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TabPane", function() { return TabPane_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Advertisement", function() { return Advertisement_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Card", function() { return Card_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CardContent", function() { return CardContent_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CardDescription", function() { return CardDescription_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CardGroup", function() { return CardGroup_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CardHeader", function() { return CardHeader_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CardMeta", function() { return CardMeta_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CommentAction", function() { return CommentAction_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CommentActions", function() { return CommentActions_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CommentAuthor", function() { return CommentAuthor_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CommentAvatar", function() { return CommentAvatar_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CommentContent", function() { return CommentContent_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CommentGroup", function() { return CommentGroup_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CommentMetadata", function() { return CommentMetadata_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CommentText", function() { return CommentText_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Feed", function() { return Feed_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FeedContent", function() { return FeedContent_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FeedDate", function() { return FeedDate_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FeedEvent", function() { return FeedEvent_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FeedExtra", function() { return FeedExtra_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FeedLabel", function() { return FeedLabel_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FeedLike", function() { return FeedLike_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FeedMeta", function() { return FeedMeta_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FeedSummary", function() { return FeedSummary_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FeedUser", function() { return FeedUser_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Item", function() { return Item_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ItemContent", function() { return ItemContent_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ItemDescription", function() { return ItemDescription_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ItemExtra", function() { return ItemExtra_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ItemGroup", function() { return ItemGroup_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ItemHeader", function() { return ItemHeader_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ItemImage", function() { return ItemImage_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ItemMeta", function() { return ItemMeta_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Statistic", function() { return Statistic_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "StatisticGroup", function() { return StatisticGroup_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "StatisticLabel", function() { return StatisticLabel_defaultExport; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "StatisticValue", function() { return StatisticValue_defaultExport; });
// Addons






// Behaviors


// Collections






































// Elements



















































// Modules













































// Views












































/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(155);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 751:
false,

/***/ 752:
false,

/***/ 753:
false,

/***/ 754:
false,

/***/ 755:
false,

/***/ 756:
false,

/***/ 757:
false,

/***/ 758:
false,

/***/ 759:
false,

/***/ 760:
false,

/***/ 761:
false,

/***/ 762:
false,

/***/ 763:
false,

/***/ 764:
false,

/***/ 765:
false,

/***/ 766:
false,

/***/ 767:
false,

/***/ 768:
false,

/***/ 769:
false,

/***/ 770:
false,

/***/ 771:
false,

/***/ 772:
false,

/***/ 773:
false,

/***/ 774:
false,

/***/ 775:
false,

/***/ 776:
false,

/***/ 777:
false

})