/**
 * Takes an object and checks if given key exists in the object.
 *
 * @param {Object} object
 * @param {String|Array} keys
 *
 * @returns Boolean
 */
function hasKeys(object, keys) {
  if (!(object instanceof Array) && object instanceof Object) {

    const keyArray = Array.isArray(keys) ? keys : [keys];

    if (!keyArray.length) return true;

    for (let key of keyArray) {
      if (!object.hasOwnProperty(key)) return false;
    }

    return true;
  }

  throw new Error('Expected object for input: ' + JSON.stringify(object));
}

module.exports = hasKeys;
