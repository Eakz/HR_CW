-- Task: Remove duplicates from an array
-- Tests set-like behavior using tables

function removeDuplicates(arr)
  local seen = {}
  local result = {}

  for _, v in ipairs(arr) do
    if not seen[v] then
      seen[v] = true
      table.insert(result, v)
    end
  end

  return result
end
