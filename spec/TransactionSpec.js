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

  it('accepts only valid numerics for transaction values', () => {
    expect(() => { new Transaction('ten'); }).toThrowError('Invalid input: Only valid numbers are accepted');
  });

  it('accepts values in strings/integer/float format with a maximum of 2 decimal places', () => {
    expect(() => { new Transaction(10.001); }).toThrowError('Invalid input: Only numbers with maximum 2 decimal places are allowed');
  });
});
