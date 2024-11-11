"""
Given an integer n, return a string array answer (1-indexed) where:
answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
"""


class Solution(object):
    def fizzBuzz(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        out_list = []
        for i in range(1, n + 1):
            out = ""
            if i % 3 == 0:
                out += "Fizz"
            if i % 5 == 0:
                out += "Buzz"
            if out == "":
                out = str(i)
            out_list.append(out)
        return out_list
