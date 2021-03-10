/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line no-unused-vars
class Transaction {
  constructor(value, date = this.formatDate(new Date())) {
    this._value = value;
    this._date = date;
  }

  value() {
    return this._value;
  }

  date() {
    return this._date;
  }

  formatDate(date) {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString()}`;
  }
}
