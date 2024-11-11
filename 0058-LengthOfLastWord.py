class Solution(object):
    def lengthOfLastWord(self, s):
        """
        Given a string s consisting of words and spaces, return the length of the last word in the string.
        A word is a maximal substring consisting of non-space characters only.
        Time complexity: O(n)
        Space complexity: O(1)
        """
        s = s.strip()
        length = len(s)
        for i in range(len(s) - 1, 0, -1):
            if s[i] == " ":
                return length - i - 1
        return length
