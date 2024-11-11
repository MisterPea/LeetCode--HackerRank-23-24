class Solution(object):
    """
    Given a string s, find the length of the longest
    substring without repeating characters.
    Time complexity for both is: O(n)
    Space complexity for both is: O(1)
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

    def lengthOfLongestSubstring_2(self, s):
        seen = {}
        max_len = 0
        l = 0
        for r, c in enumerate(s):
            if c in seen:
                # If we encounter a match we then move l (left measure) to the max between l and 1 past what we've seen
                l = max(l, seen[c] + 1)
            seen[c] = r
            max_len = max(max_len, r - l + 1)
        return max_len

