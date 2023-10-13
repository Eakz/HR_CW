-- Task: Determine if two strings are anagrams
-- Uses hash tables for counting

function areAnagrams(a, b)
  if #a ~= #b then return false end

  local count = {}
  for i = 1, #a do
    local c = a:sub(i, i)
    count[c] = (count[c] or 0) + 1
  end

  for i = 1, #b do
    local c = b:sub(i, i)
    if not count[c] or count[c] == 0 then
      return false
    end
    count[c] = count[c] - 1
  end

  return true
end
