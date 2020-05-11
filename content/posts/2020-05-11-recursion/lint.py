def mystery(n):
    if n == 0:
        return 0
    return 2 + mystery(n - 1)
