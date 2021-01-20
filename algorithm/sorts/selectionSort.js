const selectionSort = (data) => {
  let list = [...data];
  let i, j, minIndex, len = list.length;

  for (i = 0; i < len - 1; i++) {
    minIndex = i;

    for (j = i + 1; j < len; j++) {
      // 比较 j 与 minIndex 而不是j 与 i
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }
    
    [list[i], list[minIndex]] = [list[minIndex], list[i]];
  }

  return list;
}
