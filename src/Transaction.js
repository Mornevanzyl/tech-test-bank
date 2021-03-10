/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line no-unused-vars
class Transaction {
  constructor(value, date = this.formatDate(new Date())) {
    this._value = this.validateInput(value);
    this._date = date;
    this._balance = 0;
  }

  value() {
    return this._value;
  }

  date() {
    return this._date;
  }

  balance() {
    return this._balance;
  }

  setBalance(value) {
    this._balance = value;
  }

  formatDate(date) {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString()}`;
  }

  validateInput(value) {
    const exp = /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;

    // eslint-disable-next-line no-param-reassign
    value = parseFloat(value); // Convert valid numbers in string format to float

    if (Number.isNaN(value)) {
      throw new Error('Invalid input: Only valid numbers are accepted');
    }

    if (!exp.test(value)) {
      throw new Error('Invalid input: Only numbers with maximum 2 decimal places are allowed');
    }

    return value;
  }
}
