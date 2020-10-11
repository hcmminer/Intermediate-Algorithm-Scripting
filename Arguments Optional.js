function addTogether() {
  // Function to check if a number is actually a number
  // and return undefined otherwise.
  // hàm kiểm tra num có phải số không
  var checkNum = function(num) {
    if (typeof num !== "number") {
      return undefined;
    } else return num;
  };

  // Check if we have two parameters, check if they are numbers
  // handle the case where one is not
  // returns the addition.
  if (arguments.length > 1) {// độ dài đối số truyền vào phải từ 2 phần tử 
    var a = checkNum(arguments[0]);// kiểm tra tra đối số thứ nhất
    var b = checkNum(arguments[1]);// thứ 2
    if (a === undefined || b === undefined) {// nếu 1 trong 2 không phải số
      return undefined;
    } else {
      return a + b;
    }
  } else {// nếu chỉ có 1 
    // If only one parameter was found, returns a new function that expects two
    // Store first argument before entering the new function scope
    var c = arguments[0];

    // Check the number again, must be outside the function to about returning an object
    // instead of undefined.
    if (checkNum(c)) {// nếu c là số
      // Return function that expect a second argument.
      return function(arg2) {// nếu hàm chỉ có 1 tham số thì kiêm tra tiếp tham số 2
        // Check for non-numbers
        if (c === undefined || checkNum(arg2) === undefined) {// nếu c không xác đinh or tham số truyền vào không xác định
          return undefined;
        } else {
          // if numbers then add them.
          return c + arg2;
        }
      };
    }
  }
}

// test here
//addTogether(2,4);
addTogether(2)(6);

// S2
function addTogether(first, second) {
  if (typeof first !== "number") {// nếu số đầu tiên không phải số
    return undefined;
  }
  const sum = second =>
    typeof second === "number" ? first + second : undefined;
  // nếu chỉ có một tham số kiểm tra tiếp tham số 2 
  // nếu kiểu nó là không xác định// thì 
  return typeof second === "undefined" ? second => sum(second) : sum(second);
}
// test here
addTogether(2, 3);

// S2
function addTogether(first, second) {
    // kiểm tra tham số đầu
    if (typeof first !== "number") {
      return undefined;// tất cả kiểu không phải số đều coi là undifined
    }
    // tạo hàm phụ
    const sum = second =>
      typeof second === "number" ? first + second : undefined;
    
    // kiểm tra tham số 2 và dùng hàm phụ xử lý
    // nếu tham số 2 là không xác định (không có) thì tiếp tục 
    return typeof second === "undefined" ? second => sum(second) : sum(second);// một cái là định nghĩa hàm một cái là gọi hàm (# nhau hoàn toàn)
  
  }
  // test here
  addTogether(2)(5);

// S3
//jshint esversion: 6
function addTogether() {
    var args = Array.from(arguments);// lấy arg dạng mảng
    console.log(args)
    return args.some(n => typeof n !== "number")// chỉ cần một phần tử không phải số
      ? undefined
      : args.length > 1// nếu không mảng phải có 2 phần tử
      ? args.reduce((acc, n) => (acc += n), 0)//  n là giá trị đang xử lý ,0 là giá trị khởi tạo ban đầu của acc
      // nếu chỉ có 1 ptham số thì tiếp tục định nghĩa hàm để kiểm tra tham số tiếp theo 
      : n => (typeof n === "number" ? n + args[0] : undefined);// n + tham số đầu
  }
  
  // test here
  addTogether(2)(3);