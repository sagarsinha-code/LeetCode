class Solution {
    public int findDuplicate(int[] nums) {
        Arrays.sort(nums);
        for(int i = 0; i < nums.length-1; i++)
        {
            
            if(Math.abs(nums[i]) - Math.abs(nums[i+1]) == 0)
            {
                return nums[i];
            }
        }
        return 0;
    }
}