const acc_Id = 10432
let acc_mail = "hello@gmail.com"
var acc_pass = "ab123"
acc_city = "chandigarh"
let acc_state;  // will give the output "undefined"
// acc_Id = 2 // not allowed
acc_mail = "word@gmail.com"
acc_pass = "34rht1"
acc_city = "gujrat"
console.log(acc_Id);
console.table([acc_Id, acc_mail, acc_pass, acc_city, acc_state])
/*
Prefer not to use var
because of issue in block scope and functional scope
*/