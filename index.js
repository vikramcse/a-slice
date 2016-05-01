'use strict';

module.exports = function(args, origin, dest) {
  var result = [];

  var len = args.length;
  var start, end;
  var index = 0;

  if (len === 0) return result;

  if (origin < 0) {
    start =  Math.max(0, len + origin);
  } else {
    start = origin || 0;
  }

  if (dest !== undefined) {
    if (dest < 0) {
      end = len + dest;
    } else {
      end = dest;
    }
  } else {
    end = dest || len;
  }

  for (var i = start; i < end; i++) {
    result[index++] = args[i];
  }

  return result;
};
