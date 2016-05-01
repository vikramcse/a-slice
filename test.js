var expect = require('chai').expect;
var slice = require('./index.js');

describe('test of slice with one argument', function() {
  it('should return whole array', function() {
    var a = [1, 2, 3, [], "vikram"];
    var result = slice(a);

    expect(result.length).to.be.eql(a.length);
    expect(result).to.eql(a);
  });
});

describe('test of slice with only start argument', function() {
  it('should return an array between start to length of array', function() {
    var a = [1, 2, 3, [], "vikram"];
    var result = slice(a, 1);

    expect(result.length).to.be.eql(4);
    expect(result).to.eql([2, 3, [], "vikram"]);
  });
});

describe('test of slice with all arguments', function() {
  it('should return an array between start and end points', function() {
    var a = [1, 2, 3, [], "vikram"];
    var result = slice(a, 1, 4);

    expect(result.length).to.be.eql(3);
    expect(result).to.eql([2, 3, []]);
  });
});

describe('test of slice with only negative start', function() {
  it('should return an array between second last position to length of array', function() {
    var a = [1, 2, 3, [], "vikram"];
    var result = slice(a, -2);

    expect(result.length).to.be.eql(2);
    expect(result).to.eql([[], "vikram"]);
  });

  it('should return an whole array', function() {
    var a = [1, 2, 3, [], "vikram"];
    var result = slice(a, -5);

    expect(result.length).to.be.eql(5);
    expect(result).to.eql([1, 2, 3, [], "vikram"]);
  });
});

describe('test of slice with negative start and positive end', function() {
  it('should return an array between second postion from start to end', function() {
    var a = [1, 2, 3, [], "vikram"];
    var result = slice(a, -2, 5);

    expect(result.length).to.be.eql(2);
    expect(result).to.eql([[], "vikram"]);
  });
});

describe('test of slice with negative start and negative end', function() {
  it('should return an array between third postion from start to second last from end', function() {
    var a = [1, 2, 3, [], "vikram"];
    var result = slice(a, -3, -1);

    expect(result.length).to.be.eql(2);
    expect(result).to.eql([3, []]);
  });
});
