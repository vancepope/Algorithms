var nums = [2, 9, 0, 4, 5, 8, 1];
const quickSort = (nums) =>{
    if (nums.length <= 1) return nums;

    const pivot = nums[nums.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < nums.length - 1; i ++){
        if( nums[i] < pivot){
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    var quick = [...quickSort(left), pivot, ...quickSort(right)];
    console.log(quick);
    return quick;
}
quickSort(nums);