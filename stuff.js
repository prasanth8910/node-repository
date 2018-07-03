var counter = function (arr){

// console.log('THe  total element in the array is '+arr.length);

console.log( 'There are '+ arr.length+' elements in the array') ;

}   

var adder = function(a,b){

    return `The sum of the two number  is ${a+b}`;
}

var  pi = 3.14152;


module.exports.counter  = counter;
module.exports.adder  = adder;
module.exports.adder  = pi;


module.exports = {

    counter : counter,
    adder : adder,
    pi : pi
}