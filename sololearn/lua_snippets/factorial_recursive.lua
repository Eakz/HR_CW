-- Task: Compute factorial using recursion
-- Tests recursion and base cases

function factorial(n)
  if n == 0 then
    return 1
  end
  return n * factorial(n - 1)
end
