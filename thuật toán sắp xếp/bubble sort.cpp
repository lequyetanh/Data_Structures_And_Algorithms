void BubbleSort(int A[], int n)
{
  for (int i = 0; i < n - 1; i++)
    for (int j = 0; j < n - i - 1; j++)
      if (A[j] > A[j + 1])
        swap(A[j], A[j + 1]); // đổi chỗ A[j] và A[j + 1]
}