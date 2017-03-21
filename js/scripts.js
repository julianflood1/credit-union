// Business Logic

function Account(withdraw, deposit) {
  this.withdraw = withdraw;
  this.deposit = deposit;
}

//User Input

$(document).ready(function(event) {
  event.preventDefault();

  $('form#newAccount').submit(function() {
    var inputtedIntial = parseInt($('#initial').val());
  });

  $('form#accountChange').submit(function() {
    var inputtedDeposit = parseInt($('#deposit').val());
    var inputtedWithdrawal = parseInt($('#withdraw').val());
  });
});
