function transpose(nums, row, col) {
    for (let i = 0; i < row; i++) {
        for (let j = i; j < col; j++) {
            let temp = nums[j][i];
            nums[j][i]=nums[i][j];
            nums[i][j]=temp;
        }
    }
    console.log(nums);
}
const nums=[[1,2,3],[4,5,6],[7,8,9]];
transpose(nums, 3, 3);
