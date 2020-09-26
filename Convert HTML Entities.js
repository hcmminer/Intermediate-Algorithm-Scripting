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
  function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // dùng [] trong regex để khớp một trong các ký tự 
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }
  
  // test here
  convertHTML("Dolce & Gabbana");

  // S3
  function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str
      .split("")
      .map(entity => htmlEntities[entity] || entity)// nếu không tìm thấy thì giữ nguyên
      .join("");
  }
  
  // test here
  convertHTML("Dolce & Gabbana");
