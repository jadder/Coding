from ValidateBraces import ValidateBraces

data = [ "(){}[]", "([{}])", "(}", "[(])", "[({})](]" ]

vb = ValidateBraces()

for d in data:
  # print(f"Data: {d}")
  print(vb.valid_braces(d))


