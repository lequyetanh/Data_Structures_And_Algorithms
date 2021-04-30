// Hàm trộn hai mảng con vào nhau theo đúng thứ tự
void Merge(int A[], int left, int mid, int right)
{
    int n1 = mid - left + 1; // Số phần tử của mảng thứ nhất
    int n2 = right - mid; // Số phần tử của mảng thứ hai

    // Tạo hai mảng tạm để lưu hai mảng con
    int *LeftArr = new int[n1];
    int *RightArr = new int[n2];

    // Sao chép phần tử 2 mảng con vào mảng tạm
    for (int i = 0; i < n1; i++)
        LeftArr[i] = A[left + i];
    for (int i = 0; i < n2; i++)
        RightArr[i] = A[mid + 1 + i];

    // current là vị trí hiện tại trong mảng A
    int i = 0, j = 0, current = left;

    // Trộn hai mảng vào nhau theo đúng thứ tự
    while (i < n1 && j < n2)
        if (LeftArr[i] <= RightArr[j])
            A[current++] = LeftArr[i++];
        else
            A[current++] = RightArr[j++];

    // Nếu mảng thứ nhất còn phần tử thì copy nó vào mảng A
    while (i < n1)
        A[current++] = LeftArr[i++];

    // Nếu mảng thứ hai còn phần tử thì copy nó vào mảng A
    while (j < n2)
        A[current++] = RightArr[j++];

    // Xóa hai mảng tạm đi
    delete[] LeftArr, RightArr;
}

// Hàm chia đôi mảng và gọi hàm trộn
void _MergeSort(int A[], int left, int right)
{
    // Kiểm tra xem còn chia đôi mảng được không
    if (left < right)
    {
        // Tìm phần tử chính giữa
        // left + (right - left) / 2 tương đương với (left + right) / 2
        // việc này giúp tránh bị tràn số với left, right quá lớn
        int mid = left + (right - left) / 2;
 
        // Sắp xếp mảng thứ nhất
        _MergeSort(A, left, mid);
        // Sắp xếp mảng thứ hai
        _MergeSort(A, mid + 1, right);

        // Trộn hai mảng đã sắp xếp
        Merge(A, left, mid, right);
    }
}

// Hàm sắp xếp chính, được gọi khi dùng merge sort
void MergeSort(int A[], int n)
{
    _MergeSort(A, 0, n - 1);
}