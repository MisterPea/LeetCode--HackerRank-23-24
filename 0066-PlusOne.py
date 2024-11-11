"""
You are given a large integer represented as an integer array digits, 
where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. 
The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.
Time complexity: O(n)
Space complexity: O(1) - we're not using extra space

Solution:
We start with a carry = 1 and pop() off the last digit of the original list. 
If the carry + popped digit > 9 we set carry to 1 and change (carry+popped) to 0.
If there is a carry left over it means we have exhausted the digits list, there for we can return 
and change digits to [1], which is concatenated to the list_to_append (carry + popped)
"""

class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        list_to_append = []
        carry = 1
        while carry > 0 and len(digits):
            add_one = digits.pop() + carry
            if add_one > 9:
                carry = 1
                add_one = 0
            else:
                carry = 0
            list_to_append.insert(0, add_one)
        if carry == 1:
            digits = [1]
        return digits + list_to_append
