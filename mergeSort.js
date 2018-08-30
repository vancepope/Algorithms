//Big O 
// O(n log n)
var nums = [2,0,6,8,3,1,5,9];
function mergeSort(nums){
    if (nums.length < 2){
        return nums;
    }
    
    const length = nums.length;
    const middle = length/2;
    const left = nums.slice(0, middle);
    const right = nums.slice(middle, length);
    var list1, list2;

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right); 

    return stitch(sortedLeft, sortedRight);
}
function stitch(left, right){
    const results = [];
    while(left.length && right.length){
        if (left[0] < right[0]){
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    var sorted = [...results, ...left, ...right];
        console.log(sorted);
    return sorted;
}
mergeSort(nums);