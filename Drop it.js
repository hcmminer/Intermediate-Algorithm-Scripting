//S1 
function dropElements(arr, func) {
    // drop them elements.
    var times = arr.length;// độ dài mảng
    //kiểm tra từng phần tử đầu tiên của mảng nếu không thỏa mãn thì cắt
    for (var i = 0; i < times; i++) {
      if (func(arr[0])) {// nếu hàm func trả về true thì thoát vòng lặp
        break;
      } else {
        arr.shift();// nếu không thì cắt phần tử đầu tiên của mảng
      }
    }
    return arr;
  }
  
  // test here
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  });
// S2
function dropElements(arr, func) {
    // cắt ra những phần tử thỏa mãn // tìm chỉ số của phần tử đầu tiên thỏa mãn hàm và cắt ra từ vị trí đó
    return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
  }
  
  // test here
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  });

// S3
function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
  }
  
  // test here
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  });
  
// S4 dùng đệ quy thực chất cũng lặp qua từ phàn tử đầu tiên
function dropElements(arr, func, i = 0) {
    console.log(i)
    return i < arr.length && !func(arr[i])// phần tử đầu tiên mà false thì
      ? (dropElements(arr.slice(i + 1), func, i))// gọi lại hàm với tham số truyền vào là mảng ngắn hơn mảng ban đầu một phần tử đầu tiên 
      : arr;// nếu true thì giữ nguyên arr và trả về
  }
  
  // test here
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  });
  