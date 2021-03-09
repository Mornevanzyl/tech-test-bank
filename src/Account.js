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

  deposit(amount) {
    if (!(amount > 0)) {
      throw new Error('Only positive amounts are accepted for deposits');
    }
    this._transactions.push([this.formatDate(new Date()), amount]);
    this._balance += amount;
  }

  withdraw(amount) {
    if (!(amount > 0)) {
      throw new Error('Only positive values are accepted for withdrawals');
    }
    if (this.insuffientFunds(amount)) {
      throw new Error('Insufficient funds in account for requested withdrawal');
    }
    this._transactions.push([this.formatDate(new Date()), -amount]);
    this._balance -= amount;
  }

  transactions() {
    return this._transactions;
  }

  insuffientFunds(amount) {
    return (this._balance - amount < 0);
  }

  formatDate(date) {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString()}`;
  }
}
