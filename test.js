const expect = require('chai').expect;

const hasKeys = require('./index');

describe('Simple Positive Test', () => {
  it ('should return true for single string key', () => {
    const object = { key: 'value' };

    const result = hasKeys(object, 'key');

    expect(result).to.equal(true);
  });

  it ('should return true for array of single key', () => {
    const object = { key: 'value' };

    const result = hasKeys(object, ['key']);

    expect(result).to.equal(true);
  });

  it ('should return true for array of keys', () => {
    const object = { key1: 'value', key2: 'value' };

    const result = hasKeys(object, ['key1', 'key2']);

    expect(result).to.equal(true);
  });
});

describe('Simple Negative Test', () => {
  it ('should return false for single string key', () => {
    const object = { key: 'value' };

    const result = hasKeys(object, 'key1');

    expect(result).to.equal(false);
  });

  it ('should return false for array of single key', () => {
    const object = { key: 'value' };

    const result = hasKeys(object, ['key1']);

    expect(result).to.equal(false);
  });

  it ('should return true for array of keys', () => {
    const object = { key1: 'value', key2: 'value' };

    const result = hasKeys(object, ['key0', 'key3']);

    expect(result).to.equal(false);
  });
});

describe('Various use cases', () => {
  it ('should throw error when input is not object', () => {
    const object = 'Hello';

    expect(() => hasKeys(object, ['key'])).to.throw(Error);
  });

  it ('should return true when object has may keys and one key is called', () => {
    const object = { key1: 'value', key2: 'value' };

    const result = hasKeys(object, ['key1']);

    expect(result).to.equal(true);
  });

  it ('should return true when object has may keys and some keys are called', () => {
    const object = { key1: 'value', key2: 'value', key3: 'value' };

    const result = hasKeys(object, ['key1', 'key3']);

    expect(result).to.equal(true);
  });

  it ('should return false when object has may keys and no keys are called', () => {
    const object = { key1: 'value', key2: 'value' };

    const result = hasKeys(object, ['key3']);

    expect(result).to.equal(false);
  });

  it ('should return false when object has may keys and some keys are called and some aren\'t', () => {
    const object = { key1: 'value', key2: 'value' };

    const result = hasKeys(object, ['key1', 'key3']);

    expect(result).to.equal(false);
  });

  it ('should return false when called key is undefined', () => {
    const object = { key1: 'value', key2: 'value' };

    const result = hasKeys(object);

    expect(result).to.equal(false);
  });

  it ('should return false when called key is null', () => {
    const object = { key1: 'value', key2: 'value' };

    const result = hasKeys(object, null);

    expect(result).to.equal(false);
  });

  it ('should return true when called key is empty Array', () => {
    const object = { key1: 'value', key2: 'value' };

    const result = hasKeys(object, []);

    expect(result).to.equal(true);
  });

  it ('should return false when called key is object', () => {
    const object = { key1: 'value', key2: 'value' };

    const result = hasKeys(object, {key: 'value'});

    expect(result).to.equal(false);
  });

  it ('should return true when object has function', () => {
    const object = { key1: 'value', key2: 'value', key3: f => f };

    const result = hasKeys(object, 'key1');

    expect(result).to.equal(true);
  });

  it ('should return true when object has function and same key is called', () => {
    const object = { key1: 'value', key2: 'value', key3: f => f };

    const result = hasKeys(object, 'key3');

    expect(result).to.equal(true);
  });
});
