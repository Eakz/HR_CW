-- Task: Implement binary search on sorted array
-- Tests algorithmic thinking and edge cases

function binarySearch(arr, target)
  local left, right = 1, #arr

  while left <= right do
    local mid = math.floor((left + right) / 2)
    if arr[mid] == target then
      return mid
    elseif arr[mid] < target then
      left = mid + 1
    else
      right = mid - 1
    end
  end

  return -1
end
