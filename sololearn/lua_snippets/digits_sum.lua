-- Task: Calculate sum of digits in a number
-- Tests math and loops

function sumDigits(n)
  local sum = 0
  while n > 0 do
    sum = sum + (n % 10)
    n = math.floor(n / 10)
  end
  return sum
end
