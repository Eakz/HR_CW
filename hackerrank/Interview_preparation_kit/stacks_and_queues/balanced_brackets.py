def isBalanced(s):
    n = None
    while (len(s) != n):
        n = len(s)
        s = s.replace("()", "")
        s = s.replace("[]", "")
        s = s.replace("{}", "")

    if len(s) == 0:
        return "YES"
    else:
        return "NO"
