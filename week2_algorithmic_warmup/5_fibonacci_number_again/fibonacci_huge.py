# Uses python3
import sys
# n : the nth of fibonacci
# m: mod by m (so not just 10, can be any integer)
def get_fibonacci_huge_naive(n, m):
    if n <= 1:
        return n

    previous = 0
    current  = 1

    for _ in range(n - 1):
        previous, current = current, previous + current

    return current % m

def get_fibonacci_huge(n, m):
    pisano_period_length = get_pisano_period_length(m)
    pisano_period_remainder = n % pisano_period_length

    last = 0
    second_last = 1

    fib = pisano_period_remainder

    for num in xrange(1, pisano_period_remainder):
        fib = (last + second_last) % m
        last = second_last
        second_last = fib

    return fib % m


def get_pisano_period_length(m):
    if m == 0:
        return 0
    pisano_period_second_last = 0
    pisano_period_last = 1
    
    for num in xrange(0, m * m):
        next_pisano = (pisano_period_second_last + pisano_period_last) % m
        pisano_period_second_last = pisano_period_last
        pisano_period_last = next_pisano
        if (pisano_period_second_last == 0 and pisano_period_last == 1):
            return num + 1

if __name__ == '__main__':
    input = sys.stdin.read();
    n, m = map(int, input.split())
    print(get_fibonacci_huge(n, m))
