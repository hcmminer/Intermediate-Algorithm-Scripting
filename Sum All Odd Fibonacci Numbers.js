
// C1 cách này tạo ra dãy fibo bằng cách mô tả 2 số liền nhau trong dãy bằng 2 biến và sau đó update giá trị của 2 thằng qua mỗi vòng lặp while 
function sumFibs(num) {// truyền vào số giới hạn ban đầu
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;// tổng ban đầu
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;// tổng chỉ tăng lên với những số lẻ 
    }

    currNumber += prevNumber;// số hiện tại được gán một trị  mới bằng với giá trị hiện tại cộng với giá trị đứng trước nó 
    prevNumber = currNumber - prevNumber;// sau khi thằng curent được update thì thằng pre cũng được update 
  }

  return result;
}

// test here
sumFibs(4);

// C2
function sumFibs(num) {
    // Perform checks for the validity of the input
    if (num <= 0) return 0;// kiểm tra xem số truyền vào hợp lệ
  
    // Create an array of fib numbers till num
    const arrFib = [1, 1];
    let nextFib = 0;
  
    // We put the new Fibonacci numbers to the front so we
    // don't need to calculate the length of the array on each
    // iteration
    while ((nextFib = arrFib[0] + arrFib[1]) <= num) {// phần tử chèn vào đầu mảng bằng tổng 2 phần tử liền sau nó
      arrFib.unshift(nextFib);// chèn vào đầu mảng (không thể dùng push thì vòng lặp vô hạn vì 2 phần tử đầu tiên của mảng cố định)
    }
    // We filter the array to get the odd numbers and reduce them to get their sum.
    return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);// lọc những phần tử lẻ và cộng các phàn tử lại với nhau thành số duy nhất
    
  }
  
  // test here
  sumFibs(4);
// sửa xem sao nha
