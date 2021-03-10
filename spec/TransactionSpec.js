/* eslint-disable no-undef */
describe('Transaction', () => {
  let transaction;

  beforeEach(() => {
    transaction = new Transaction(100, '01/01/2020');
  });

  it('is an instance of the Transaction class', () => {
    expect(transaction).toBeInstanceOf(Transaction);
  });

  it('has a value', () => {
    expect(transaction.value()).toEqual(100);
  });

  it('has a transaction date', () => {
    expect(transaction.date()).toEqual('01/01/2020');
  });
});
