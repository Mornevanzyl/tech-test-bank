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
    this._balance -= amount;
  }
}
