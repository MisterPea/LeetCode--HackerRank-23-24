class Solution(object):
    """
    Given a string s, find the length of the longest
    substring without repeating characters.
    """
    def lengthOfLongestSubstring(self, s):
        seen = {}
        l = 0
        max_len = 0
        for r in range(0, len(s)):
            if s[r] in seen and seen[s[r]] >= l:
                l = seen[s[r]] + 1
            seen[s[r]] = r
            max_len = max(r - l + 1, max_len)
        return max_len
