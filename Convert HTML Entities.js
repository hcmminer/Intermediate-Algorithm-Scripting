// S1
function convertHTML(str) {
    // Split by character to avoid problems.
  
    var temp = str.split("");// cắt ra thành từng phần tử
    console.log(temp)
  
    // Since we are only checking for a few HTML elements, use a switch
    // lặp qua từng phần tử và gán lại cho chúng thực thể html nếu có
    for (var i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case "<":
          temp[i] = "&lt;";
          break;
        case "&":
          temp[i] = "&amp;";
          break;
        case ">":
          temp[i] = "&gt;";
          break;
        case '"':
          temp[i] = "&quot;";
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
  
    temp = temp.join("");// sau đó join lại 
    return temp;
  }
  
  //test here
  convertHTML("Dolce & Gabbana");

  // S2
  