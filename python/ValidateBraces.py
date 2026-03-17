# https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/python
# Solution
# The problem can be solved using a stack-based approach.
# For every opening symbol, we expect a corresponding closing symbol.
#
# Approach:
# 1. Iterate through each character in the string.
# 2. When an opening bracket is found ('(', '{', '['),
#    push its corresponding closing bracket onto a stack.
# 3. When a closing bracket is found, check:
#    - If the stack is empty → invalid (no matching opening bracket).
#    - If the top of the stack does not match → invalid.
#    - Otherwise, pop the stack and continue.
#
# 4. After processing all characters:
#    - If the stack is empty → valid string.
#    - If not → invalid (there are unmatched opening brackets).
#
# This works because a stack follows LIFO (Last In, First Out),
# which naturally matches the nested structure of balanced brackets.

class ValidateBraces:
    def valid_braces(self, string : str)-> bool :
        if len(string) % 2 != 0:
            return False

        close = list()

        for c in string:
            if c == '(': close.append(")")
            elif c == '{': close.append("}")
            elif c == '[': close.append("]")
            else:
                if not close or c != close.pop():
                    return False

        if len(close) == 0:
            return True
        else:
            return False


# Ruun this Test
data = [ "(){}[]", "([{}])", "(}", "[(])", "[({})](]" ]
vb = ValidateBraces()

for d in data:
  print(vb.valid_braces(d))