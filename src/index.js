exports.min = function min(array) {
   for (var i = 0; i < array.length; i++) {
       if (array[i] < array[0]) {
           array[0] = array[i];
       }

   }
    return min;

}

exports.max = function max(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > array[0]) {
            array[0] = array[i];
        }

    }
    return max;
}

exports.avg = function avg(array) {
 for (var i = 0, sum = 0; i < array.length; i++) {
     sum += array[i];
 }
 return sum / i;
 }
