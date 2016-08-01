count = 0


def partition(arr, l, r):
    pivot = arr[l]
    i = l+1
    for j in range(l, r):
        if arr[j] < pivot:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1

    arr[l], arr[i-1] = arr[i-1], arr[l]
    return i, l, r


def quick_sort(arr, initial, length):
    """ QuickSort sorting Algorithm """

    if length == 1:
        return

    partition_index, l, r = partition(arr, initial, length)
    quick_sort(arr, partition_index + 1, r)
    quick_sort(arr, l, partition_index - 1)


test_case = [3, 9, 8, 4, 6, 10, 2, 5, 7, 1]
# print(quick_sort(test_case))
# print("Count :", count)

integerFile = open('quicksortTestCase', 'r')
integersList = [int(line.strip()) for line in integerFile.readlines()]

# print("Integer list", quick_sort(integersList))
# print("Count :", count)

quick_sort(test_case, 0, len(test_case))
print(test_case)