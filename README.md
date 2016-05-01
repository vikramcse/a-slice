# a-slice
JavaScript native array slice alternative

## Install

```sh
$ npm install --save a-slice
```

## Example

```js
var slice = require('a-slice');
console.log(slice([1, 2, 3, 4, 5], 1, 4));
// - > [ 2, 3, 4 ]

console.log(slice([1, 2, 3, 4, 5], -2, 5));
// -> [4, 5]
```

### `require('a-slice')(array, start, end)`

**Arguments**:

- `array`: An array that to be sliced
- `start`: start point of array slicing. It can be negative
- `end`: end point of array slicing. It can be negative

**Returns**: Returns a new array with sliced contend of original array

## License

&copy; 2016 Vikram Jadhav. MIT License
