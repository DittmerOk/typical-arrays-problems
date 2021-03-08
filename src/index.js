exports.min = function min(array) {
    let min = array[0];

    array.forEach(function (elem, index) {

        if (index > 0) {
            if (min < elem) {
                min = elem;
            }

        }
    });
    return min;

}

exports.max = function max(array) {
  let max = array[0];

  array.forEach(function (elem, index) {

      if (index > 0) {
          if (max < elem) {
              max = elem;
          }

      }
  });

    
    return max;
}

exports.avg = function avg(array) {
 for (var i = 0, sum = 0; i < array.length; i++) {
     sum += array[i];
 }
 return sum / i;
 }
