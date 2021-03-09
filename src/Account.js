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
    this._balance += amount;
  }
}
