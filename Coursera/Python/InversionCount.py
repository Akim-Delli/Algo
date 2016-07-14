import math


# sort and Count
def count_inversion(arr):
    if len(arr) == 1:
        return arr, 0
    else:
        mid_point = int(math.floor(len(arr)/2))
        first_half_arr, inv1 = count_inversion(arr[:mid_point])
        # print(arr[:mid_point])

        second_half_arr, inv2 = count_inversion(arr[mid_point:])

        merged_arr, split_inv = merge_count_split_inv(first_half_arr, second_half_arr)
        return merged_arr, inv1 + inv2 + split_inv


def merge_count_split_inv(arr_a, arr_b):
    """ arr_a: list
        arr_b: list
    """
    output_arr = []
    inversion_count = 0
    i = 0
    j = 0
    while i < len(arr_a) and j < len(arr_b):

            if arr_a[i] < arr_b[j]:

                output_arr.append(arr_a[i])
                if i != (len(arr_a)):
                    i += 1
            else:
                output_arr.append(arr_b[j])

                inversion_count += len(arr_a[i:])
                if j != (len(arr_b)):
                    j += 1

    if arr_a[i:]:
        output_arr += arr_a[i:]
    if arr_b[j:]:
        output_arr += arr_b[j:]

    return output_arr, inversion_count

test_case = [1, 3, 5, 2, 4, 6]
test_case2 = [9, 12, 3, 1, 6, 8, 2, 5, 14, 13, 11, 7, 10, 4, 0]
test_case3 = [4, 80, 70, 23, 9, 60, 68, 27, 66, 78, 12, 40, 52, 53, 44, 8, 49, 28, 18, 46, 21, 39, 51, 7, 87, 99, 69, 62, 84, 6, 79, 67, 14, 98, 83, 0, 96, 5, 82, 10, 26, 48, 3, 2, 15, 92, 11, 55, 63, 97, 43, 45, 81, 42, 95, 20, 25, 74, 24, 72, 91, 35, 86, 19, 75, 58, 71, 47, 76, 59, 64, 93, 17, 50, 56, 94, 90, 89, 32, 37, 34, 65, 1, 73, 41, 36, 57, 77, 30, 22, 13, 29, 38, 16, 88, 61, 31, 85, 33, 54]
test_case4 = [37, 7, 2, 14, 35, 47, 10, 24, 44, 17, 34, 11, 16, 48, 1, 39, 6, 33, 43, 26, 40, 4, 28, 5, 38, 41, 42, 12, 13, 21, 29, 18, 3, 19, 0, 32, 46, 27, 31, 25, 15, 36, 20, 8, 9, 49, 22, 23, 30, 45]

print("Number Of Inversion for test case 1: ", count_inversion(test_case)[1])
print("Number Of Inversion for test case 2: ", count_inversion(test_case2)[1])
print("Number Of Inversion for test case 3: ", count_inversion(test_case3)[1])
print("Number Of Inversion for test case 4: ", count_inversion(test_case4)[1])

# print("merge count 1", merge_count_split_inv([1, 3, 5], [2, 4, 6]))

integerFile = open('IntegerArray.txt', 'r')
integersList = [line for line in integerFile.readlines()]

print("Integer list", len(integersList))

print("Number Of Inversion for the 100,000 Integer: ", count_inversion(integersList)[1])

