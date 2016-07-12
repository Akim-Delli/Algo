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
    for k in range(0, len(arr_a) + len(arr_b) - 1):
            if arr_a[i] < arr_b[j]:
                output_arr.append(arr_a[i])
                i += 1
            else:
                output_arr.append(arr_b[j])
                j += 1
                inversion_count += len(arr_a[i:])
                print(len(arr_a[i:]))

    return output_arr, inversion_count

test_case = [1, 3, 5, 2, 4, 6]

print(count_inversion(test_case))

print(merge_count_split_inv([1, 3, 5], [2, 4, 6]))
