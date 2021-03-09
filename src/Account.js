/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line no-unused-vars
class Account {
  constructor() {
    this._balance = 0;
  }

  balance() {
    return this._balance;
  }

  deposit(amount) {
    if (!(amount > 0)) {
      throw new Error('Only positive amounts are accepted for deposits');
    }
    this._balance += amount;
  }

  withdraw(amount) {
    if (!(amount > 0)) {
      throw new Error('Only positive values are accepted for withdrawals');
    }
    if (this.insuffientFunds(amount)) {
      throw new Error('Insufficient funds in account for requested withdrawal');
    }
    this._balance -= amount;
  }

  insuffientFunds(amount) {
    return (this._balance - amount < 0);
  }
}
