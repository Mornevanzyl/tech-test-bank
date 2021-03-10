/* eslint-disable no-undef */
describe('Transaction', () => {
  let transaction;

  beforeEach(() => {
    transaction = new Transaction(100);
  });

  it('is an instance of the Transaction class', () => {
    expect(transaction).toBeInstanceOf(Transaction);
  });

  it('has a value', () => {
    expect(transaction.value()).toEqual(100);
  });
});
