function fibonacci(n){
    if ( n < 2) {
        return 1;
    } else {
        return fibonacci(n- 1) * fibonacci(n - 2);
    }
}
function factorial(n){
    if (n < 2){
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}