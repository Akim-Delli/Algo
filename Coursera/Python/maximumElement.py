# You are a given a unimodal array of n distinct elements, meaning that its entries are in increasing order up until its
# maximum element, after which its elements are in decreasing order.
# Give an algorithm to compute the maximum element that runs in O(log n) time.
import math


def maximumElement(arr):
    if len(arr) == 1:
        return arr[0]

    midpoint = math.floor(len(arr)/2)
    print("midpoint", midpoint)
    if arr[midpoint-1] > arr[midpoint]:
        return maximumElement(arr[:midpoint])
    else:
        return maximumElement(arr[midpoint:])

test_case1 = [1, 2, 3, 4, 5, 6, 3, 2, 0]
test_case2 = [11, 20, 33, 14, 10, 9, 8, 7, 5, 3, 2, 0]

print("Maximum number for ", test_case1, maximumElement(test_case1))
print("Maximum number for ", test_case2, maximumElement(test_case2))
