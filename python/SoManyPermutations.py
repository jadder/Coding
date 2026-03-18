# #https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/python
# present.
#
# Create as many "shufflings" as you can!
#
# Examples:
#
# With input 'a':
# Your function should return: ['a']
#
# With input 'ab':
# Your function should return ['ab', 'ba']
#
# With input 'abc':
# Your function should return ['abc','acb','bac','bca','cab','cba']
#
# With input 'aabb':
# Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

class ManyPermutation:
    def permutations(self, cadena):
        # Base case:
        # If the string has only one character,
        # the only permutation is the string itself
        if len(cadena) == 1:
            return [cadena]

        # Use a set to avoid duplicate permutations
        # (important when the string contains repeated characters like "aabb")
        result = set()

        # Iterate over each character and its index
        for index, char in enumerate(cadena):
            # Create a new string by removing the current character
            # Example: "abc" -> removing 'a' gives "bc"
            resto = cadena[:index] + cadena[index + 1:]

            # Recursively get permutations of the remaining string
            for permu in self.permutations(resto):
                # Add the current character to the front of each permutation
                # Example: 'a' + "bc" -> "abc"
                result.add(char + permu)

        # Return all unique permutations
        return result