-- Task: Find maximum number in an array
-- Tests table iteration

function maxValue(arr)
  local max = arr[1]
  for _, v in ipairs(arr) do
    if v > max then
      max = v
    end
  end
  return max
end
