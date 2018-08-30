function reduceFunction(){
    var list = ["a","b","c"];
    list.reduce(function(accumulator, letter){
        return accumulator + letter.toUpperCase();
    }); //returns aBC since a becomes the seed value
    list.reduce(function(accumulator, letter){
        return accumulator + letter.toUpperCase();
    }, ''); //returns ABC since '' starts as the seed
}