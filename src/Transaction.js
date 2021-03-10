/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line no-unused-vars
class Transaction {
  constructor(value) {
    this._value = value;
  }

  value() {
    return this._value;
  }
}
