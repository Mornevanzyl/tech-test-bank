/* eslint-disable no-param-reassign */
/* eslint-disable padded-blocks */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line no-unused-vars
class Account {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  balance() {
    return this._balance;
  }

  deposit(amount, date = this.formatDate(new Date())) {

    amount = this.validateInput(amount, 'deposits');

    this._balance += amount;
    this._transactions.push([date, amount, this._balance]);
  }

  withdraw(amount, date = this.formatDate(new Date())) {

    amount = this.validateInput(amount, 'withdrawals');

    if (this.hasInsuffientFunds(amount)) {
      throw new Error('Insufficient funds in account for requested withdrawal');
    }
    this._balance -= amount;
    this._transactions.push([date, -amount, this._balance]);
  }

  printAccountStatement() {
    let outputString = 'date || credit || debit || balance\n';
    this.reverseTransactions().forEach((trn) => {
      // eslint-disable-next-line prefer-template
      outputString += `${trn[0]} ||${trn[1] > 0 ? (' ' + trn[1].toFixed(2) + ' ') : ' '}||${trn[1] < 0 ? (' ' + ((trn[1] * -1).toFixed(2)) + ' ') : ' '}|| ${trn[2].toFixed(2)}\n`;
    });
    // eslint-disable-next-line no-console
    console.log(outputString);
    return outputString;
  }

  transactions() {
    return this._transactions;
  }

  reverseTransactions() {
    const transactions = [...this.transactions()];
    return transactions.reverse();
  }

  hasInsuffientFunds(amount) {
    return (this._balance - amount < 0);
  }

  formatDate(date) {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString()}`;
  }

  validateInput(value, errorPostFix) {
    const exp = /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;

    value = parseFloat(value); // Convert valid numbers in string format to float

    if (Number.isNaN(value)) {
      throw new Error('Invalid input: Only valid numbers are accepted');
    }

    if (!exp.test(value)) {
      throw new Error('Invalid input: Only numbers with maximum 2 decimal places are allowed');
    }

    if (!(value > 0)) {
      throw new Error(`Only positive values are accepted for ${errorPostFix}`);
    }
    return value;
  }
}
