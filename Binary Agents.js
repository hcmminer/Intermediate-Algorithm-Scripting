// S1
function binaryAgent(str) {
  var biString = str.split(" ");// cắt chuỗi bằng dấu cách
  console.log(biString)
  var uniString = [];// mảng rỗng

  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));// chuyển hệ số 2 sang hệ số 10
  }

  // we then simply join the string
  return uniString.join(""); // nối các phần tử thành chuỗi
}

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001"    
);
// S2

function binaryAgent(str) {
    // Separate the binary code by space.
    str = str.split(" ");// cắt thành mảng
    var power;
    var decValue = 0;
    var sentence = "";
  
    // Check each binary number from the array.
    for (var s = 0; s < str.length; s++) {// lặp qua mảng
      // Check each bit from binary number
      for (var t = 0; t < str[s].length; t++) {// lặp qua từng ký tự của mỗi phần tử
        // This only takes into consideration the active ones.
        if (str[s][t] == 1) {// nếu bít đó = 1 thì tính giá trị ra thập phân, nếu là 0 thì giá trị thập phân = 0
          // This is quivalent to 2 ** position
          power = Math.pow(2, +str[s].length - t - 1);// số mũ + cơ số 2 // số mũ giảm dần // số mũ tương ứng với giá trị tính ra thập phân
          decValue += power;// cộng từng bít lại với nhau ra code char
  
          // Record the decimal value by adding the number to the previous one.
        }
      }
  
      // After the binary number is converted to decimal, convert it to string and store
      sentence += String.fromCharCode(decValue);
  
      // Reset decimal value for next binary number.
      decValue = 0;// reset lại để dùng cho lần lặp tiếp theo
    }
  
    return sentence;
  }
  
  // test here
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  );
// S3

function binaryAgent(str) {
    console.log()
    return String.fromCharCode(
      // ...str chính là string chứa chuỗi tham số cách nhau khoảng trắng
      ...str.split(" ").map(function(char) {// chuyển tham số truyền vào thành mảng
        return parseInt(char, 2);// đổi sang cơ số 10
      })
    );
  }
  
  // test here
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  );