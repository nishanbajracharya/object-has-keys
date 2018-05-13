const expect = require('chai').expect;

const hasKeys = require('./index');

describe('Simple Positive Test', () => {
  it('should return true for single string key', () => {
    const object = { key: 'value' };

    const result = hasKeys(object, 'key');

    expect(result).to.equal(true);
  });

  it('should return true for array of single key', () => {
    const object = { key: 'value' };

    const result = hasKeys(object, ['key']);

    expect(result).to.equal(true);
  });

  it('should return true for array of keys', () => {
    const object = { key1: 'value', key2: 'value' };

    const result = hasKeys(object, ['key1', 'key2']);

    expect(result).to.equal(true);
  });
});
