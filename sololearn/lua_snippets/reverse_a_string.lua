-- Task: Reverse a string without using built-in reverse
-- Tests understanding of loops and string manipulation

function reverseString(str)
  local reversed = ""
  for i = #str, 1, -1 do
    reversed = reversed .. str:sub(i, i)
  end
  return reversed
end
