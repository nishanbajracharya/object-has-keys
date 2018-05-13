'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Takes an object and checks if all given keys exist in the object.
 *
 * @param {Object} object
 * @param {String|Array} keys
 *
 * @returns Boolean
 */
var hasKeys = exports.hasKeys = function hasKeys(object, keys) {
  if (!(object instanceof Array) && object instanceof Object) {
    var keyArray = Array.isArray(keys) ? keys : [keys];

    if (!keyArray.length) return true;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = keyArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        if (!object.hasOwnProperty(key)) return false;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return true;
  }

  throw new Error('Expected object for input: ' + JSON.stringify(object));
};

/**
 * Takes an object and checks if any given keys exist in the object.
 *
 * @param {Object} object
 * @param {String|Array} keys
 *
 * @returns Boolean
 */
var hasAnyKey = exports.hasAnyKey = function hasAnyKey(object, keys) {
  if (!(object instanceof Array) && object instanceof Object) {
    var keyArray = Array.isArray(keys) ? keys : [keys];

    if (!keyArray.length) return true;

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = keyArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var key = _step2.value;

        if (object.hasOwnProperty(key)) return true;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return false;
  }

  throw new Error('Expected object for input: ' + JSON.stringify(object));
};

exports.default = hasKeys;


module.exports = { hasKeys: hasKeys, hasAnyKey: hasAnyKey };
