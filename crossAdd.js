//Big 0
// O (n^2)
function crossAdd(input){
    var answer = [];
    for (var i = 0; i < input.length; i++){
        var goingUp = input[i];
        var goingDown = input[input.length - 1 - i];
        answer.push(goingUp + goingDown);
    }
    return answer;
}