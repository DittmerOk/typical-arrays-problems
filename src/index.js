exports.min = function min(array) {
    if (array.length != 0) {
    let min = array[0];

    array.forEach(function (elem, index) {

        if (index > 0) {
            if (min > elem) {
                min = elem;
            }

        }
    });
    return min;}
   else {
       return Number('0');
   }

}

exports.max = function max(array) {

    if (array.length != 0) {
  let max = array[0];

  array.forEach(function (elem, index) {

      if (index > 0) {
          if (max < elem) {
              max = elem;
          }

      }
  });

    
    return max;}
    else {
        return Number('0');
    }

}

exports.avg = function avg(array) {
      if (array.length != 0) {
 for (var i = 0, sum = 0; i < array.length; i++) {
     sum += array[i];
 }
 return sum / i;}
 else {
     return Number('0');
 }
 }
