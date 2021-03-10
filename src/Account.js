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

  process(transaction) {
    if (this.hasInsuffientFunds(transaction.value())) {
      throw new Error('Insufficient funds in account for requested withdrawal');
    }
    this._balance += transaction.value();
    transaction.setBalance(this.balance());
    this._transactions.push(transaction);
  }

  printAccountStatement() {
    let outputString = 'date || credit || debit || balance\n';
    this.reverseTransactions().forEach((trn) => {
      // eslint-disable-next-line prefer-template
      outputString += `${trn.date()} ||${trn.value() > 0 ? (' ' + trn.value().toFixed(2) + ' ') : ' '}||${trn.value() < 0 ? (' ' + ((trn.value() * -1).toFixed(2)) + ' ') : ' '}|| ${trn.balance().toFixed(2)}\n`;
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
    return (this._balance + amount < 0);
  }
}
