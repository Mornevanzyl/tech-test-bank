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
My initial approach was to favour a [KISS](https://en.wikipedia.org/wiki/KISS_principle) approach to satisfying the user requirements. As a result I implemented a single `Account` class and required methods. After self-assessment and in the interest of SRP and 'leaner' methods I extracted transactions into its own class.

The `Transaction` class is initialised with a positive (deposit) or negative (withdrawal) value and well as an optional date. A default of today's date is used if none is supplied. The input is validated and loosely typed as per JS convention. It has to be a valid number with a maximum of 2 decimals though.

The `Acccount` class provides a `process` method which accepts a `Transaction`, as well as a `printAccountStatement` method to output an account statement, with newest transaction first.

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

// Create a new Transaction
transaction = new Transaction(value [, date]) // date format dd/mm/ccyy

// Make Deposits
var deposit = new Transaction(120)
account.process(deposit);

// Withdraw Funds
var withdrawal = new Transaction(-80)
account.process(withdrawal);

// Print Account Statement
account.printAccountStatement();
```
## Suggested Improvement
- More rigorous validation can be added for the optional date input argument. 
## Acknowledgements

- Thanks to [ASCII Art Archive](https://www.asciiart.eu/miscellaneous/money) for hosting the excellent banner image used in this project.
