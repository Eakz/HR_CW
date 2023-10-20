-- Task: Generate nth Fibonacci number
-- Iterative solution avoids recursion overhead

function fibonacci(n)
  if n <= 1 then return n end
  local a, b = 0, 1
  for _ = 2, n do
    a, b = b, a + b
  end
  return b
end
