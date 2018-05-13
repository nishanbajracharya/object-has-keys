function hasKeys(object, keys) {
  if (!(object instanceof Array) && object instanceof Object) {

    const keyArray = Array.isArray(keys) ? keys : [keys];

    if (!keyArray.length) return true;

    for (let key of keyArray) {
      if (!object.hasOwnProperty(key)) return false;
    }

    return true;

  }

  throw new Error('Expected object for' + object);
}

module.exports = hasKeys;
