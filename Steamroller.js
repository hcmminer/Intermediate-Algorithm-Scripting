// S1

function steamrollArray(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  // khai báo hàm tự tạo 
  // hàm này kiểm tra phần tử truyền vào là dạng string hay array
  // dùng đệ quy rất hay là có thể chọc vào tham số nhiều lần để lấy ra cái trong cùng
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);// nếu không phải là một mảng thì chèn các tham số vào cuối mảng rỗng
    } else {
      for (var a in arg) {
        flatten(arg[a]);// nếu là mảng thì gọi lại hàm tác động lên từng phần tử của mảng
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);// dùng hàm tự tạo tác động lên mảng truyền vào
  return flattenedArray;
}

// test here
steamrollArray([1, [2], [3, [[4]]]]);

//S2 
function steamrollArray(arr) {
    let flat = [].concat(...arr);// gộp các phần tử vào một mảng rỗng (lưu ý là ... lấy từng phần tử của mảng để  xử lý value của nó)
    // some kiểm tra ít nhất 1 phần  tử thỏa mãn 
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);

// S3
function steamrollArray(arr) {
    return arr
      .toString()// chuyển mảng về string (bỏ mản rỗng [] và mảng chứa nhiều [[]])
      .replace(",,", ",") // "1,2,,3" => "1,2,3" // ,, do mảng rỗng để  lại
      .split(",") // ['1','2','3']// cắt chuỗi thành mảng
      .map(function(v) {
        if (v == "[object Object]") {// nếu trong môt object có key value thì loại bỏ chúng
          // bring back empty objects
          return {};
        } else if (isNaN(v)) {// nếu là string thì giữ nguyên
          // if not a number (string)
          return v;
        } else {
          return parseInt(v); // if a number in a string, convert it// nếu là số dạng chuỗi
        }
      });
  }

  steamrollArray([1,2,[],{5:7},"a","7",[[5]]])

// S4
function steamrollArray(val,flatArr=[]) {
    val.forEach(item => {
      if (Array.isArray(item)) steamrollArray(item, flatArr);// nếu phần tử là mảng thì lại  tiếp tục chọc vào
      else flatArr.push(item);// nếu không thì chèn vào cuối mảng rỗng
    });
    return flatArr;
  }
  steamrollArray([1, [2], [3, [[4]]]]);

// S5
console.log("a" ? 6:7)
function steamrollArray(arr, flatArr = []) {
  const elem = arr.pop();//  phần tử cuối mảng arr
  return elem// nếu elem true (tồn tại gía trị) thì kiểm tra tiếp 
    ? (!Array.isArray(elem) // nó có là mảng không
      ? steamrollArray(arr, [elem, ...flatArr])// nếu không là mảng thì cho nó đứng đầu mảng và tiếp tục gọi lại hàm và chọc vào phần tử cuối mảng tiếp theo
      : steamrollArray(arr.concat(elem), flatArr))// nếu là mảng thì tiếp tục gọi lại với mảng mới là mảng cũ gộp với elem và đương nhiên elem bị chọc vào trong và elem đứng cuối mảng để kiểm tra tiếp có còn [] không]
    : flatArr;// nếu elem không tồn tại
}
steamrollArray([1,2,3,{1:"5"},4,[[5]]])

