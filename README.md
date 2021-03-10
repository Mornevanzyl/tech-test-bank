```
   ||====================================================================||
   ||//$\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//$\\||
   ||(100)==================| FEDERAL RESERVE NOTE |================(100)||
   ||\\$//        ~         '------========--------'                \\$//||
   ||<< /        /$\              // ____ \\                         \ >>||
   ||>>|  12    //L\\            // ///..) \\         L38036133B   12 |<<||
   ||<<|        \\ //           || <||  >\  ||                        |>>||
   ||>>|         \$/            ||  $$ --/  ||        One Hundred     |<<||
||====================================================================||>||
||//$\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//$\\||<||
||(100)==================| FEDERAL RESERVE NOTE |================(100)||>||
||\\$//        ~         '------========--------'                \\$//||\||
||<< /        /$\              // ____ \\                         \ >>||)||
||>>|  12    //L\\            // ///..) \\         L38036133B   12 |<<||/||
||<<|        \\ //           || <||  >\  ||                        |>>||=||
||>>|         \$/            ||  $$ --/  ||        One Hundred     |<<||
||<<|      L38036133B        *\\  |\_/  //* series                 |>>||
||>>|  12                     *\\/___\_//*   1989                  |<<||
||<<\      Treasurer     ______/Franklin\________     Secretary 12 />>||
||//$\                 ~|UNITED STATES OF AMERICA|~               /$\\||
||(100)===================  ONE HUNDRED DOLLARS =================(100)||
||\\$//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\$//||
||====================================================================||
```

# BANK (Tech Test)

## User Stories
```
As a person who is tired of hiding my money under my mattress,
So that I can be seen as a responsible adult,
I want to open a bank account
```
```
As a person who is serious about their money,
So that I can ensure that my money is safely kept,
I want to make a deposit into my bank account
```
```
As a person who likes the finer things in life,
So that I can treat myself with life's little luxuries,
I want to withdraw money from my bank account
```
```
As a person who always keeps an eye on 'The Man',
So that I can confirm my money is being correctly managed,
I want to print a statement showing my balance and transaction history
```

## Approach
I decided on a [KISS](https://en.wikipedia.org/wiki/KISS_principle) approach to satisfying the user requirements. As a result I decided on a single `Account` class and required methods. Since transactions for this test stored only a date, value and ongoing balance, I decided not to implement a separate `Transaction` class.

The `Acccount` class provides the required `deposit`, `withdraw` and `printAccountStatement` methods.

In order to pass the user's ***Acceptance Criteria***, I provided the facility to pass an optional date to the `deposit` and `withdraw` methods.

## Installation
```bash
git clone git@github.com:Mornevanzyl/tech-test-bank.git

open SpecRunner.html
```

## Usage

```Javascript
// Open Javascript Console:

// Create a new Account
account = new Account();

// Make Deposits
account.deposit(value [, date]); // date format dd/mm/ccyy

// Withdraw Funds
account.withdraw(value [, date]); // date format dd/mm/ccyy

// Print Account Statement
account.printAccountStatement();
```
## Suggested Improvement
- Transactions, currently stored as three-element arrays, can be converted to objects which would improve code readability somewhat.
- More rigorous validation can be added for the optional date input argument. 
## Acknowledgements

- Thanks to [ASCII Art Archive](https://www.asciiart.eu/miscellaneous/money) for hosting the excellent banner image used in this project.
