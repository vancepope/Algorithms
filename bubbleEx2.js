function bubbleSort (nums) {
    nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
  for (var i = 0; i < nums.length; i++){
      for(var j = 1; j < (nums.length- i); j++){
          if (nums[j - 1] > nums[j]){
              const temp = nums[j - 1];
              nums[j - 1] = nums[j];
              nums[j] = temp;
          }
      }
  }
  console.log(nums);
}
bubbleSort();