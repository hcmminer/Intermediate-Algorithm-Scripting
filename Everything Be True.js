// S1
function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;// số true
  // Check for each object
  for (var c in collection) {// kiêm tra từng {} //c = index của mảng 
  console.log(c)
    // If it is has property and value is truthy
    // nếu object chứa thuộc tính pre // và giá trị của thuộc tính đó không rỗng
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;// biến đếm tăng lên 1
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;// kiểm tra xem tất cacr các {} có thuộc tính đó không 
}

// test here
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);

// S2
function truthCheck(collection, pre) {
    return collection.every(function(element) {// kiểm tra từng phần tử dùng every rất gọn
      return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
  }
  
  // test here
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ],
    "sex"
  );

//S3
function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(obj => obj[pre]);// check all  object và return về  true hay false// hàm every trả về boolean
  }
  
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ],
    "sex"
  );
