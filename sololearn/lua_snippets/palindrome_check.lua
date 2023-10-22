-- Task: Check if a string reads the same forward and backward
-- Common string logic interview question

function isPalindrome(str)
  local i, j = 1, #str
  while i < j do
    if str:sub(i, i) ~= str:sub(j, j) then
      return false
    end
    i = i + 1
    j = j - 1
  end
  return true
end
