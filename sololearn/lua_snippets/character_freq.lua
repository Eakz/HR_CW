-- Task: Count frequency of characters in a string
-- Useful for anagram problems

function charFrequency(str)
  local freq = {}
  for i = 1, #str do
    local c = str:sub(i, i)
    freq[c] = (freq[c] or 0) + 1
  end
  return freq
end
