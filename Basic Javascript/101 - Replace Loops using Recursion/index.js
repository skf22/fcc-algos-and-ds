const sum = (arr, n) => (n === 0 ? n : sum(arr, n - 1) + arr[n - 1]);
