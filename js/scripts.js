function BankUser(userName,initialDeposit,balance){
this.userName=userName;
this.initialDeposit=initialDeposit;
this.balance=balance;
this.deposit=function(amount){
  this.balance+=amount;
};
this.withdraw=function(amount){
  if(this.balance<amount){
    this.balance-=10;
    $("#listDisplay").html("<li> It is not sufficiant Fund and thus we charge $10 overDrafts "+this.balance+"</li>");
  }else{
    this.balance-=amount;
    $("#listDisplay").html("<li>"+this.balance+"</li>");
        }
};


}

var totalUser=new Array();



$(document).ready(function(){
$("#newUser-form").submit(function(event){
event.preventDefault();

var signUpUser=$("#accountHolderName").val();//yi
var signUpAmmount=parseInt($("#initialDeposit").val());//300
var newAccountHolder=new BankUser(signUpUser,signUpAmmount,signUpAmmount);
totalUser.push(newAccountHolder);
$("#listDisplay").html("<li>"+signUpUser+"Thank you for joining us! </li>"+
"<li> Your current balance is"+signUpAmmount+"</li>");
console.log(newAccountHolder);
console.log(totalUser);
});


$("#returnUser-form").submit(function(event){
event.preventDefault();

var signInUser=$("#accountHolderName").val();//yi
var depositAmmount=parseInt($("#returnDeposit").val());//300
var withdrawAmount=parseInt($("#returnWithdraw").val());

if(depositAmmount>0&&withdrawAmount===0){
  for (var i = 0; i < totalUser.length; i=i+1) {
    if(signInUser===totalUser[i].userName){
      totalUser[i].deposit(depositAmmount);
      console.log(  totalUser[i].balance);
      $("#listDisplay").html("<li>"+signInUser+"Thank you for joining us! </li>"+
      "<li> Your current balance is"+totalUser[i].balance+"</li>");
    }
  }
}else if(withdrawAmount>0&&depositAmmount===0){
    for (var i = 0; i < totalUser.length; i=i+1) {
      if(signInUser===totalUser[i].userName){
        totalUser[i].withdraw(withdrawAmount);
        console.log( totalUser[i].balance);
        $("#listDisplay").html("<li>"+signInUser+"Thank you for joining us! </li>"+
        "<li> Your current balance is"+totalUser[i].balance+"</li>");
      }
    }
  }else{
    $("#listDisplay").html("<li>I am sorry! Something wrong. You might not in our system</li>");
}
});

$("#closeRequest-form").submit(function(event){
  event.preventDefault();
  var colseAccountUser=$("#closeName").val();//yi
  var closeConfirm=$("#confirmationToClose").val();
  for (var i = 0; i < totalUser.length; i=i+1) {
    if(colseAccountUser===totalUser[i].userName&&closeConfirm==="1"){
      $("#listDisplay").html("<li> You are successful to close account </li>"+
      "<li> Your  balance is $ "+totalUser[i].balance+" will sent to your home</li>");
      totalUser.splice(i,0);
      console.log(totalUser);
    }
  }

});

$("#balanceCheck-form").submit(function(event){
  event.preventDefault();
  var checkName=$("#checkBalanceName").val();//yi
  for (var i = 0; i < totalUser.length; i=i+1) {
    if(checkName===totalUser[i].userName){
      $("#listDisplay").html("<li> Hello, "+checkName+"! </li>"+
      "<li> Your  balance is $  "+totalUser[i].balance+" </li>");
    }
    debugger;
  }

});

});
