//Hàm xử lý checkbox
var buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    if (this.style.backgroundColor === "green") {
      this.style.backgroundColor = "white";
    } else {
      this.style.backgroundColor = "green";
    }
  };
}

//------------------------------------------------------------
//Hàm xử lý tháng
var month = document.getElementById("month");
var options = month.options;
var errorMonth = document.getElementById("errorMonth");
let indexMonth = 0;
document.addEventListener("click", function(months) {  //Thêm hàm xử lý click
  var isClickInside = month.contains(months.target); //Lấy giá trị vùng chọn
  if (!isClickInside && indexMonth == 1) {
    var checkOption = false;    //Kiểm tra option nào được chọn 
    for(var i = 1; i < options.length;i++){
      if (!options[i].selected) {
        checkOption = false;
      }
      else{
        checkOption = true;
        break;
      }
    }
    if(checkOption){
      errorMonth.style.display = "none";
      month.style.border = "2px solid gray";
    }
    else{
      errorMonth.style.display = "table-cell";
      month.style.border = "2px solid red";
    }
  }
  else if(isClickInside){
    indexMonth = 1;
    month.addEventListener("change", function() { // Thêm hàm xử lý textchange
      for (var i = 0; i < options.length; i++) {
      if (options[i].selected) {
        month.style.color = "black";
        errorMonth.style.display = "none";
        month.style.border = "2px solid gray";
        for(var i = 0; i < options.length; i++){
          options[i].style.color = "black";
        }
      }
    }
    })
  }
});

//------------------------------------------------------------
//Hàm xử lý ngày
var day = document.getElementById("day");
var errorDay = document.getElementById("errorDay");
let indexDay = 0;
document.addEventListener("click", function(days){ //Thêm hàm xử lý click
  var isClickInside = day.contains(days.target); //Lấy giá trị vùng chọn
  if (!isClickInside && indexDay == 1) { //Khi click ngoài vùng chọn
    if(day.value == "" || isNaN(day.value) || day.value < 0 || day.value > 31)
    {
      errorDay.style.display = "table-cell";
      day.style.border = "2px solid red";
    }
    else
    {
      errorDay.style.display = "none";
      day.style.border = "2px solid gray";
    }
  }
  else if(isClickInside){
    indexDay = 1; // Xử lý khi chọn trong vùng mới được lỗi
    day.addEventListener("input",function(){ // Thêm hàm xử lý textchange
      if(day.value == "" || isNaN(day.value) || day.value < 0 || day.value > 31)
      {
        errorDay.style.display = "table-cell";
        day.style.border = "2px solid red";
      }
      else
      {
        errorDay.style.display = "none";
        day.style.border = "2px solid gray";
      }
    })
  }
});

//------------------------------------------------------------
//Hàm xử lý năm
var year = document.getElementById("year");
var errorYear = document.getElementById("errorYear");
let indexYear = 0;
var datetime = new Date();
var currentyear = datetime.getFullYear();

document.addEventListener("click", function(years){ //Thêm hàm xử lý click
  var isClickInside = year.contains(years.target); //Lấy giá trị vùng chọn
  if (!isClickInside && indexYear == 1) { //Khi click ngoài vùng chọn
    if(year.value == "" || isNaN(year.value) || year.value < 0 || year.value > currentyear)
    {
      errorYear.style.display = "table-cell";
      year.style.border = "2px solid red";
    }
    else
    {
      errorYear.style.display = "none";
      year.style.border = "2px solid gray";
    }
  }
  else if(isClickInside){
    indexYear = 1; // Xử lý khi chọn trong vùng mới được lỗi
    year.addEventListener("input",function(){ // Thêm hàm xử lý textchange
      if(year.value == "" || isNaN(year.value) || year.value < 0 || year.value > currentyear)
      {
        errorYear.style.display = "table-cell";
        year.style.border = "2px solid red";
      }
      else
      {
        errorYear.style.display = "none";
        year.style.border = "2px solid gray";
      }
    })
  }
});

//------------------------------------------------------------
//Hàm xử lý Email
var email = document.getElementById("email");
var errorEmail_rong = document.getElementById("errorEmail_rong");
var errorEmail = document.getElementById("errorEmail");
var checkEmail = /^[a-zA-Z]+[a-zA-Z0-9_]+@[a-zA-Z0-9-_]+\.[a-zA-Z]{2,}$/;
let indexEmail = 0;
document.addEventListener("click", function(emails){ //Thêm hàm xử lý click
  var isClickInside = email.contains(emails.target); //Lấy giá trị vùng chọn
  if (!isClickInside && indexEmail == 1) { //Khi click ngoài vùng chọn
    if(email.value == "")
    {
      errorEmail_rong.style.display = "table-cell";
      email.style.border = "2px solid red";
    }
    else
    {
      errorEmail_rong.style.display = "none";
      email.style.border = "2px solid gray";
    }
  }
  else if(isClickInside){
    indexEmail = 1; // Xử lý khi chọn trong vùng mới được lỗi
    email.addEventListener("input",function(){ // Thêm hàm xử lý textchange
      if(email.value == "")
      {
        errorEmail_rong.style.display = "table-cell";
        email.style.border = "2px solid red";
        errorEmail.style.display = "none";
        email.style.border = "2px solid grey";
      }
      else
      {
        errorEmail_rong.style.display = "none";
        email.style.border = "2px solid gray";
        if(!checkEmail.test(email.value)){
          errorEmail.style.display = "table-cell";
          email.style.border = "2px solid red";
        }
        else
        {
          errorEmail.style.display = "none";
          email.style.border = "2px solid grey";
        }
      }
    })
  }
});


//------------------------------------------------------------
//Hàm xử lý Xác Nhận Lại Email
var xn_email = document.getElementById("xn_email");
var error_XN_Email_rong = document.getElementById("error_XN_email_rong");
var error_XN_Email = document.getElementById("error_XN_email");
let index_XN_Email = 0;
document.addEventListener("click", function(xn_emails){ //Thêm hàm xử lý click
  var isClickInside = xn_email.contains(xn_emails.target); //Lấy giá trị vùng chọn
  if (!isClickInside && index_XN_Email == 1) { //Khi click ngoài vùng chọn
    if(xn_email.value == "")
    {
      error_XN_Email_rong.style.display = "table-cell";
      xn_email.style.border = "2px solid red";
    }
    else
    {
      error_XN_Email_rong.style.display = "none";
      xn_email.style.border = "2px solid gray";
    }
  }
  else if(isClickInside){
    index_XN_Email = 1; // Xử lý khi chọn trong vùng mới được lỗi
    xn_email.addEventListener("input",function(){ // Thêm hàm xử lý textchange
      if(xn_email.value == "")
      {
        error_XN_Email_rong.style.display = "table-cell";
        xn_email.style.border = "2px solid red";
        error_XN_Email.style.display = "none";
        xn_email.style.border = "2px solid grey";
      }
      else
      {
        error_XN_Email_rong.style.display = "none";
        xn_email.style.border = "2px solid gray";
        if(email.value != xn_email.value){
          error_XN_Email.style.display = "table-cell";
          xn_email.style.border = "2px solid red";
        }
        else
        {
          error_XN_Email.style.display = "none";
          xn_email.style.border = "2px solid grey";
        }
      }
    })
  }
});

//------------------------------------------------------------
//Hàm xử lý Password
var password = document.getElementById("password");
var errorPassword_rong = document.getElementById("errorPassword_rong");
var errorPassword = document.getElementById("errorPassword");
var error_Password_Weak = document.getElementById("error_Password_Weak");
let indexPassword = 0;
document.addEventListener("click", function(passwords){ //Thêm hàm xử lý click
  var isClickInside = password.contains(passwords.target); //Lấy giá trị vùng chọn
  if (!isClickInside && indexPassword == 1) { //Khi click ngoài vùng chọn
    if(password.value == "")
    {
      errorPassword_rong.style.display = "table-cell";
      password.style.border = "2px solid red";
    }
    else
    {
      errorPassword_rong.style.display = "none";
      password.style.border = "2px solid gray";
    }
  }
  else if(isClickInside){
    indexPassword = 1; // Xử lý khi chọn trong vùng mới được lỗi
    password.addEventListener("input",function(){ // Thêm hàm xử lý textchange
      if(password.value == "")
      {
        errorPassword_rong.style.display = "table-cell";
        password.style.border = "2px solid red";
        errorPassword.style.display = "none";
        password.style.border = "2px solid grey";
        error_Password_Weak.style.display = "none";
        password.style.border = "2px solid grey";
      }
      else
      {
        errorPassword_rong.style.display = "none";
        password.style.border = "2px solid gray";
        if(password.value.length < 8){
          errorPassword.style.display = "table-cell";
          password.style.border = "2px solid red";
          error_Password_Weak.style.display = "none";
          password.style.border = "2px solid grey";
        }
        else
        {
          errorPassword.style.display = "none";
          password.style.border = "2px solid grey";
          if(!isNaN(password.value)){
            error_Password_Weak.style.display = "table-cell";
            password.style.border = "2px solid red";
          }
          else{
            error_Password_Weak.style.display = "none";
            password.style.border = "2px solid grey";
          }
        }
      }
    })
  }
});

//------------------------------------------------------------
//Hàm xử lý tên
var fullname = document.getElementById("name");
var errorName = document.getElementById("errorName");
let indexName = 0;
document.addEventListener("click", function(names){ //Thêm hàm xử lý click
  var isClickInside = fullname.contains(names.target); //Lấy giá trị vùng chọn
  if (!isClickInside && indexName == 1) { //Khi click ngoài vùng chọn
    if(fullname.value == "")
    {
      errorName.style.display = "table-cell";
      fullname.style.border = "2px solid red";
    }
    else
    {
      errorName.style.display = "none";
      fullname.style.border = "2px solid gray";
    }
  }
  else if(isClickInside){
    indexName = 1; // Xử lý khi chọn trong vùng mới được lỗi
    fullname.addEventListener("input",function(){ // Thêm hàm xử lý textchange
      if(fullname.value == "")
      {
        errorName.style.display = "table-cell";
        fullname.style.border = "2px solid red";
      }
      else
      {
        errorName.style.display = "none";
        fullname.style.border = "2px solid gray";
      }
    })
  }
});

//------------------------------------------------------------
//Hàm xử lý giới tính
var radio = document.getElementsByName("gender");
var errorGender = document.getElementById("errorGender");
var check_radio = false;

for (var i = 0; i < radio.length; i++) {
  radio[i].addEventListener("change", function() {
    check_radio = false;
    for (var j = 0; j < radio.length; j++) {
      if (radio[j].checked) {
        check_radio = true;
        break;
      }
    }
    if (check_radio) {
      errorGender.style.display = "none";
    } else {
      errorGender.style.display = "inline";
    }
  });
}

//---------------------------------------
//---------------------------------------
function Check_Radio(){
  for(var i =0;i<radio.length;i++)
  {
    if(radio[i].checked){
      check_radio = true;
      break;
    }
  }
  if(check_radio){
    errorGender.style.display = "none";
  }
  else{
    errorGender.style.display = "inline";
    window.scrollTo({
      top: 900,
      behavior: "smooth"
    })
  }
}
//---------------------------------------
//---------------------------------------
function Check_Month(){
  for(var i = 1; i < options.length;i++){
      if (!options[i].selected) {
      checkOption = false;
      }
      else{
      checkOption = true;
      break;
      }
  }
  if(checkOption){
      errorMonth.style.display = "none";
      month.style.border = "2px solid gray";
  }
  else{
      errorMonth.style.display = "table-cell";
      month.style.border = "2px solid red";
  }
}
//---------------------------------------
//---------------------------------------
function Check(error,input){
  var check;
  if(input.value == "")
  {
    error.style.display = "table-cell";
    input.style.border = "2px solid red";
    if(input == day || input == month || input == year){
      window.scrollTo({
        top: 750,
        behavior: "smooth"
    })}
    else if(input == fullname){
      window.scrollTo({
        top: 700,
        behavior: "smooth"
    })}
    else if(input == password){
      window.scrollTo({
        top: 600,
        behavior: "smooth"
    })}
    else if(input == xn_email){
      window.scrollTo({
        top: 500,
        behavior: "smooth"
    })}
    else if(input == email){
      window.scrollTo({
        top: 100,
        behavior: "smooth"
    })}
    check = false;
  }
  else
  {
    error.style.display = "none";
    input.style.border = "2px solid gray";
    check = true;
  }
  return check;
}
//---------------------------------------
//---------------------------------------
var sign = document.getElementById("sign");
sign.onclick = function(){
  if(Check(errorDay,day) && Check(errorYear,year) && Check(errorName,fullname) &&   Check(errorPassword_rong,password) && Check(error_XN_Email_rong,xn_email) && Check(errorEmail_rong,email)){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  })}
  Check_Radio();
  Check(errorDay,day);
  Check_Month();
  Check(errorYear,year);
  Check(errorName,fullname);
  Check(errorPassword_rong,password);
  Check(error_XN_Email_rong,xn_email);
  Check(errorEmail_rong,email);
}



