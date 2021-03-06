# YNAB API Javascript (Node) Library

[![Build Status](https://travis-ci.org/ynab/ynab-sdk-js.svg?branch=master)](https://travis-ci.org/ynab/ynab-sdk-js)
[![NPM Package](https://img.shields.io/npm/v/ynab.svg)](https://www.npmjs.com/package/ynab) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

**NOTE: The YNAB API is currently only available to Early Access users.  If you are interested in requesting access before the API is generally available, please fill out [this form](https://docs.google.com/forms/d/17plY-CE39Xl3pe2GqyVH1Unre8TjYKs-tkI6jVC4ko4/edit).**

The YNAB API JavaScript library provides access to the YNAB API from
applications written in Node.js / JavaScript.

Please read the [YNAB API documentation](https://api.youneedabudget.com) for an
overview of using the API and a complete list of the available resources.

## Installation

```shell
npm install ynab
```

## Usage

To use this client, you must
[obtain an access token](https://api.youneedabudget.com/#authentication) from
the [My Account](https://app.youneedabudget.com/settings) area of the YNAB web
application.

```typescript
const ynabApi = require("ynab");
const accessToken = "b43439eaafe2_this_is_fake_b43439eaafe2";
const ynab = new ynabApi(accessToken);

async function listBudgets(){
  const budgetsResponse = await ynab.budgets.getBudgets();
  const budgets = budgetsResponse.data.budgets;
  for(let budget of budgets) {
    console.log(`Budget Name: ${budget.name}`);
  }
}

listBudgets();
```

### Error Handling

If a response is returned with a code >= 300, instead of returning the response,
the response will be "thrown" as an error to be caught.

```typescript
const ynabApi = require("ynab-sdk-js");
const accessToken = "invalid_token";
const ynab = new ynabApi(accessToken);

const budgetsResponse = ynab.budgets.getBudgets()
  .then(budgetsResponse => {
    // Won't get here because an error will be thrown
  })
  .catch(e => {
    console.log(e);
    // {
    //   error: {
    //    id: "401",
    //    name: "unauthorized",
    //    detail: "Unauthorized"
    //   }
    // }
  });
```

### Utilities

There are several utilities available on the `ynab.utils` object to make working
with [ISO dates and milliunits](https://api.youneedabudget.com/#formats) a bit
easier.

```typescript
// Returns the current month (system timezone) in ISO 8601 format (i.e. '2015-12-01')
getCurrentMonthInISOFormat(): string;
// Returns the current date (system timezone) in ISO 8601 format (i.e. '2015-12-15')
getCurrentDateInISOFormat(): string;
// Converts an ISO 8601 formatted string to a JS date object
convertFromISODateString(isoDateString: string): Date;
// Converts a milliunits amount to a currency amount
convertMilliUnitsToCurrencyAmount(milliunits: number, currencyDecimalDigits: number): number;
```

## Examples

See the [examples](https://github.com/ynab/ynab-sdk-js/tree/master/examples)
folder for example usage scenarios.

## Development

To build and compile:

```shell
npm install
npm run build
```

To run tests:

```shell
npm test
```

## License

Copyright (c) 2018 You Need A Budget, LLC

Licensed under the Apache-2.0 license
