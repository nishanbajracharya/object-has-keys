const expect = require('chai').expect;

const hasKeys = require('./index');

describe('Simple Positive Test', () => {
  it('should return true', () => {
    const object = { key: 'value' };

    const result = hasKeys(object, 'key');

    expect(result).to.equal(true);
  })
});
