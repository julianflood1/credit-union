// Business Logic

function Account(initial ,withdraw, deposit) {
  this.initial = initial;
  this.withdraw = withdraw;
  this.deposit = deposit;
}

Account.prototype.newBalance = function() {
  var total = initial
  if (this.withdraw) {
    return (total - this.withdraw);
  } else if (this.deposit) {
    return (this.deposit + total);
  } else {
    return total;
  }
};


//User Input

$(document).ready(function() {


  $('form#newAccount').submit(function(event) {
    event.preventDefault();
    var inputtedIntial = parseInt($('#initial').val());
    $('#total').show();
    $('#total h2').text(inputtedIntial);
    });

  $('form#accountChange').submit(function(event) {
    event.preventDefault();
    var inputtedIntial = parseInt($('#initial').val());
    var inputtedDeposit = parseInt($('#deposit').val());
    var inputtedWithdrawal = parseInt($('#withdraw').val());

    var operation = new Account(inputtedInitial, inputtedWithdrawal, inputtedDeposit);

    $('#total').show();
    $('#total h2').text(total);


    var total = operation.newBalance();
  });
});
