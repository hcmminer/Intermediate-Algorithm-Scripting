
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
