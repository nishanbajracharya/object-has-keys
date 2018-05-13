/**
 * Takes an object and checks if all given keys exist in the object.
 *
 * @param {Object} object
 * @param {String|Array} keys
 *
 * @returns Boolean
 */
export const hasKeys = (object, keys) => {
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

/**
 * Takes an object and checks if any given keys exist in the object.
 *
 * @param {Object} object
 * @param {String|Array} keys
 *
 * @returns Boolean
 */
export const hasAnyKey = (object, keys) => {
  if (!(object instanceof Array) && object instanceof Object) {
    const keyArray = Array.isArray(keys) ? keys : [keys];

    if (!keyArray.length) return true;

    for (let key of keyArray) {
      if (object.hasOwnProperty(key)) return true;
    }

    return false;
  }

  throw new Error('Expected object for input: ' + JSON.stringify(object));
}

export default hasKeys;

module.exports = { hasKeys, hasAnyKey };
