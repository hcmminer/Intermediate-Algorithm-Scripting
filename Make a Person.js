var Person = function(firstAndLast) {// truyền vào fullname
  var fullName = firstAndLast;// khai baó biến và gán bằng tham số
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };
  console.log(fullName)

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person("Bob Ross");// giống như gọi hàm (# callback)
bob.setFirstName("bản")
bob.getFullName();

