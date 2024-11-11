class Solution(object):
    # Time complexity: O(n) where n is the length of the string
    # Space complexity: O(1) we're not using extra space
    def myAtoi(self, s):
        """
        :type s: str
        :rtype: int
        """
        s = s.strip()
        if len(s) == 0:
            return 0

        neg_or_pos = None
        collected_nums = ''
        valid_set = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-'}
        for char in s:
            if char in valid_set:
                if char == '-' or char == '+':
                    if neg_or_pos is None and len(collected_nums) == 0:
                        neg_or_pos = char
                    else:
                        break
                else:
                    collected_nums += char
            else:
                break
        if len(collected_nums) == 0:
            return 0

        sign = -1 if neg_or_pos == '-' else 1
        raw_int = sign * int(collected_nums)
        if raw_int > 0:
            return min((2 ** 31) - 1, raw_int)
        return max(-2 ** 31, raw_int)

s = Solution()
print(s.myAtoi('22342344 423 asf12')) # -> 22342344