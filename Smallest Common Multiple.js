// S1
function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);// thêm vào mảng những phần tử lớn nhất giảm dần nhưng vân không nhỏ hơn số thứ 2 (mảng lấp đầy những phần tử giảm dần từ a đến b)
  }

  
  
  var quot = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    console.log("ok",n)
    quot = newArr[0] * loop * newArr[1];// phần tử lớn nhất * loop ^1 * phần tử lớn nhì
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {// nếu  tích không chia hết cho phần tử thứ n ^3
        break;// không lặp for nữa chạy tiếp loop++ ngược lại thì tăng n lên và kiểm tra tiếp         
      }
    }
    loop++;// tăng loop lên cho đến khi tích chia hết cho mọi phần tử
  } while (n !== newArr.length);// n = newArr.length do vẫn chạy vì do trước while (quot chưa chia hết cho phần tử cuối cùng thì vẫn do)

  return quot;
}

// test here
smallestCommons([1, 7]);

// S2 
function smallestCommons(arr) {
  var range = [];//
              // tìm số lớn // 
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);// mảng chứa các số từ lớn xuống nhỏ
  }
  // can use reduce() in place of this block
  var lcm = range[0];// lấy số lớn nhất
  for (i = 1; i < range.length; i++) {// cho i chay qua các phần tử 
    var GCD = gcd(lcm, range[i]);// số  chia 
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;

  function gcd(x, y) {
    // Implements the Euclidean Algorithm
    if (y === 0) return x;
    else return gcd(y, x % y);// trả về  y nếu x chia hết cho y
  }
}

// test here
smallestCommons([1, 5]);

//S3
function smallestCommons(arr) {
  // Euclidean algorithm for the greatest common divisor.// thuật toán ước chung lớn nhất
  // ref: https://en.wikipedia.org/wiki/Euclidean_algorithm
  // tìm ước chung lớn nhất của 2 số 
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));// hàm đệ quy
  

  // Least Common Multiple for two numbers based on GCD
  // tìm bội chung nhỏ nhất của 2 số
  const lcm = (a, b) => (a * b) / gcd(a, b);

  // range
  let [min, max] = arr.sort((a, b) => a - b);// đây là cách đặt tên nhiều biến bằng mảng
  let currentLCM = min;// giả sử min = max thì lấy luôn giá trị min làm bội chung nhỏ nhất
  // tăng min đến khi bằng max để tìm bội chung nhỏ nhất của dãy số tăng dần
  while (min < max) {
    currentLCM = lcm(currentLCM, ++min);
  }

  return currentLCM;
}

// test here
smallestCommons([1, 5]);

// S4

const smallestCommons = arr => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  // Initially the solution is assigned to the highest value of the array
  let sol = max;
  let dem = 1;
// điểm đặc biệt của vòng lặp for là khi gán lại biến đếm i thì for được reset chạy lại từ đầu
  for (let i = max - 1; i >= min; i--) {
    console.log("vòng lặp thứ:",dem++);
    // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    // to increment 'max' to our solution and restart the loop
    if (sol % i) {// nếu chia cho số 0 or số dư = 0 thì tương đương false
      console.log("if",sol,i,"tăng sol và i gán lại =5")
      sol += max;// tăng sol lên max 
      i = max;// cũng gán lại i lên max 
    }
    console.log("#",sol,i)
  }
  return sol;
};

// test here
smallestCommons([1,5]);

// S5
// đây là hàm tạo object chứa các thừa số nguyên tố với số lần xuât hiện nhiều nhất trong từng số nguyên tố 
const smallestCommons = (arr) => {
  let primeFactors = {};
  
  for (let i = Math.max(Math.min(...arr), 2); i <= Math.max(...arr); i++) {
    let primes = getPrimeFactors(i);
    for (let j in primes) {
      if (!primeFactors[j] || primes[j] > primeFactors[j]) {// nếu chưa có hoặc số lần xuất hiện nhiều hơn thì thay thế nó
        primeFactors[j] = primes[j]
      }
    }
  }
  console.log(primeFactors);
  let result = 1;
  for (let i in primeFactors) {
    result *= i ** primeFactors[i]
  }
  return result;
}
// tách sô num thành các thừa số nguyên tố dạng object
const getPrimeFactors = (num) => {
  const primes = {};
  for (let factor = 2; factor <= num; factor++) {
    while ((num % factor) === 0) {
      primes[factor] = (primes[factor]) ? primes[factor] + 1 : 1;
      num /= factor;
    }
  }
  return primes;
}
smallestCommons([1,5]);



