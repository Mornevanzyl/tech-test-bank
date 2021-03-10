/* eslint-disable no-undef */
describe('Transaction', () => {
  let transaction;

  beforeEach(() => {
    transaction = new Transaction();
  });

  it('is an instance of the Transaction class', () => {
    expect(transaction).toBeInstanceOf(Transaction);
  });
});
