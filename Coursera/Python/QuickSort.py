count = 0


def quick_sort(arr):
    """ Quick sort sorting Algorithm """

    global count

    if len(arr) == 1 or len(arr) == 0:
        return arr

    # TODO choose pivot
    pivot = arr[0]

    left = []
    right = []
    for val in arr[1:]:
        if pivot < val:
            left.append(val)
        else:
            right.append(val)

    count += len(arr[1:])

    return quick_sort(right) + [pivot] + quick_sort(left)


test_case = [3, 9, 8, 4, 6, 10, 2, 5, 7, 1]
# print(quick_sort(test_case))
# print("Count :", count)

integerFile = open('quicksortTestCase', 'r')
integersList = [int(line.strip()) for line in integerFile.readlines()]

print("Integer list", quick_sort(integersList))
print("Count :", count)

