//Big 0
// O (n^2)
function makeTuples(input){
    for (var i = 0; i < input.length; i++){
        for (var j = 0; j < input.length; j++){
            answer.push([input[i], input[j]]);
        }
    }
}