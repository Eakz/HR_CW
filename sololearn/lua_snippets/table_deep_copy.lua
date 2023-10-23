-- Task: Create a deep copy of a table
-- Important for Lua reference semantics

function deepCopy(tbl)
  local copy = {}
  for k, v in pairs(tbl) do
    if type(v) == "table" then
      copy[k] = deepCopy(v)
    else
      copy[k] = v
    end
  end
  return copy
end
