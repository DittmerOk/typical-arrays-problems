exports.min = function min(array) {
    if (!array || !(array[0] !== undefined && array.every((item) => typeof (item) === "number"))) {


        return Number('0');
    } else {
    let min = array[0];

    array.forEach(function (elem, index) {

        if (index > 0) {
            if (min > elem) {
                min = elem;
            }

        }
    });
    return min;
  } 
  }

exports.max = function max(array) {

    if (!array || !(array[0] !== undefined && array.every((item) => typeof (item) === "number"))) {

        return Number('0');
    } else {
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

  }




exports.avg = function avg(array) {
      if (!array || !(array[0] !== undefined && array.every((item) => typeof (item) === "number"))) {
 
 
 return Number('0');
}
    else 

  {
      for (var i = 0, sum = 0; i < array.length; i++) {
          sum += array[i];
      }
     return sum / i;
  }

  }
