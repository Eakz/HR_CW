-- Task: Check if a number is prime
-- Common math interview problem

function isPrime(n)
  if n < 2 then return false end
  for i = 2, math.sqrt(n) do
    if n % i == 0 then
      return false
    end
  end
  return true
end
