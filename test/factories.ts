import * as Factory from "./factory";
import * as api from "../src/api";

export const budgetSummaryFactory = Factory.makeFactory<api.BudgetSummary>({
  id: Factory.each(i => `${i}`),
  name: Factory.each(i => `Budget ${i}`),
  last_accessed_on: new Date().toISOString(),
  date_format: { locale: "en-us" },
  currency_format: { locale: "en-us" }
});

export const budgetSummaryResponseFactory = Factory.makeFactory<
  api.BudgetSummaryResponse
>({
  data: {
    budgets: budgetSummaryFactory.buildList(3)
  }
});

export const accountFactory = Factory.makeFactory({
  id: Factory.each(i => `AccountID${i}`),
  name: Factory.each(i => `Account ${i}`),
  type: api.Account.TypeEnum.Checking,
  on_budget: true,
  closed: false,
  note: Factory.each(i => `Note #${i}`),
  balance: 5000
});

export const accountsResponseFactory = Factory.makeFactory<
  api.AccountsResponse
>({
  data: Factory.makeFactory({
    accounts: accountFactory.buildList(5)
  })
});

export const accountResponseFactory = Factory.makeFactory({
  data: Factory.makeFactory<api.AccountWrapper>({
    account: accountFactory.build()
  })
});

export const categoryFactory = Factory.makeFactory<api.Category>({
  id: Factory.each(i => `ID#${i}`),
  name: Factory.each(i => `Name ${i}`),
  category_group_id: Factory.each(i => `CategoryGroupID#${i}`),
  hidden: false,
  note: Factory.each(i => `Note#${i}`),
  budgeted: Factory.each(i => i * 1000),
  activity: Factory.each(i => i * 1000),
  balance: Factory.each(i => i * 1000)
});

export const categoryGroupWithCategoriesFactory = Factory.makeFactory<
  api.CategoryGroupWithCategories
>({
  id: Factory.each(i => `ID#${i}`),
  name: Factory.each(i => `Name ${i}`),
  hidden: false,
  categories: categoryFactory.buildList(3)
});

export const categoriesResponseFactory = Factory.makeFactory<
  api.CategoriesResponse
>({
  data: Factory.makeFactory({
    category_groups: categoryGroupWithCategoriesFactory.buildList(3)
  })
});

export const categoryResponseFactory = Factory.makeFactory<
  api.CategoryResponse
>({
  data: Factory.makeFactory({
    category: categoryFactory.build()
  })
});

export const monthSummaryFactory = Factory.makeFactory<api.MonthSummary>({
  month: "2017-01-01",
  note: Factory.each(i => `Note #${i}`),
  to_be_budgeted: Factory.each(i => i * 2000),
  age_of_money: Factory.each(i => i)
});

export const monthSummariesResponseFactory = Factory.makeFactory<
  api.MonthSummariesResponse
>({
  data: Factory.makeFactory({
    months: monthSummaryFactory.buildList(5)
  })
});

export const monthDetailFactory = Factory.makeFactory<api.MonthDetail>({
  month: "2017-01-01",
  note: Factory.each(i => `Note #${i}`),
  to_be_budgeted: Factory.each(i => i * 2000),
  age_of_money: Factory.each(i => i),
  categories: categoryFactory.buildList(3)
});

export const monthDetailResponseFactory = Factory.makeFactory<
  api.MonthDetailResponse
>({
  data: Factory.makeFactory({
    month: monthDetailFactory.build()
  })
});

export const payeeFactory = Factory.makeFactory<api.Payee>({
  id: Factory.each(i => `id #${i}`),
  name: Factory.each(i => `name #${i}`),
  transfer_account_id: Factory.each(i => `Transfer_account_id #${i}`)
});

export const payeesResponseFactory = Factory.makeFactory<api.PayeesResponse>({
  data: Factory.makeFactory({
    payees: payeeFactory.buildList(5)
  })
});

export const payeeResponseFactory = Factory.makeFactory<api.PayeeResponse>({
  data: Factory.makeFactory({
    payee: payeeFactory.build()
  })
});

export const payeeLocationFactory = Factory.makeFactory<api.PayeeLocation>({
  id: Factory.each(i => `id #${i}`),
  payee_id: Factory.each(i => `name #${i}`),
  latitude: Factory.each(i => `lat #${i}`),
  longitude: Factory.each(i => `lon #${i}`)
});

export const payeeLocationsResponseFactory = Factory.makeFactory<
  api.PayeeLocationsResponse
>({
  data: Factory.makeFactory({
    payee_locations: payeeLocationFactory.buildList(5)
  })
});

export const payeeLocationResponseFactory = Factory.makeFactory<
  api.PayeeLocationResponse
>({
  data: Factory.makeFactory({
    payee_location: payeeLocationFactory.build()
  })
});

export const subTransactionFactory = Factory.makeFactory<api.SubTransaction>({
  id: Factory.each(i => `id #${i}`),
  amount: Factory.each(i => i * 1000),
  memo: Factory.each(i => `memo #${i}`),
  transaction_id: Factory.each(i => `transaction_id #${i}`),
  payee_id: Factory.each(i => `payee_id #${i}`),
  category_id: Factory.each(i => `category_id #${i}`),
  transfer_account_id: Factory.each(i => `transfer_account_id #${i}`)
});

export const transactionFactory = Factory.makeFactory<
  api.TransactionDetail
>({
  id: Factory.each(i => `id #${i}`),
  date: "2017-01-02",
  amount: Factory.each(i => i * 1000),
  memo: Factory.each(i => `memo #${i}`),
  cleared: api.TransactionDetail.ClearedEnum.Cleared,
  approved: true,
  flag: "red",
  account_id: Factory.each(i => `account_id #${i}`),
  payee_id: Factory.each(i => `payee_id #${i}`),
  category_id: Factory.each(i => `category_id #${i}`),
  transfer_account_id: Factory.each(i => `transfer_account_id #${i}`),
  subtransactions: subTransactionFactory.buildList(3)
});

export const transactionResponseFactory = Factory.makeFactory<
  api.TransactionResponse
>({
  data: Factory.makeFactory({
    transaction: transactionFactory.build()
  })
});

// TODO: This is just like the transactionSummary, except for the subTransactions listed
export const transactionSummaryFactory = Factory.makeFactory<
  api.TransactionSummary
>({
  id: Factory.each(i => `id #${i}`),
  date: "2017-01-02",
  amount: Factory.each(i => i * 1000),
  memo: Factory.each(i => `memo #${i}`),
  cleared: api.TransactionDetail.ClearedEnum.Cleared,
  approved: true,
  flag: "red",
  account_id: Factory.each(i => `account_id #${i}`),
  payee_id: Factory.each(i => `payee_id #${i}`),
  category_id: Factory.each(i => `category_id #${i}`),
  transfer_account_id: Factory.each(i => `transfer_account_id #${i}`)
});

export const transactionsResponseFactory = Factory.makeFactory<
  api.TransactionsResponse
>({
  data: Factory.makeFactory({
    transactions: transactionFactory.buildList(5)
  })
});

export const scheduledSubTransactionFactory = Factory.makeFactory<
  api.ScheduledSubTransaction
>({
  id: Factory.each(i => `id #${i}`),
  amount: Factory.each(i => i * 1000),
  memo: Factory.each(i => `memo #${i}`),
  scheduled_transaction_id: Factory.each(i => `transaction_id #${i}`),
  payee_id: Factory.each(i => `payee_id #${i}`),
  category_id: Factory.each(i => `category_id #${i}`),
  transfer_account_id: Factory.each(i => `transfer_account_id #${i}`)
});

export const scheduledTransactionFactory = Factory.makeFactory<
  api.ScheduledTransactionDetail
>({
  id: Factory.each(i => `id #${i}`),
  date: "2017-01-02",
  amount: Factory.each(i => i * 1000),
  memo: Factory.each(i => `memo #${i}`),
  flag: "red",
  frequency: api.ScheduledTransactionDetail.FrequencyEnum.Daily,
  account_id: Factory.each(i => `account_id #${i}`),
  payee_id: Factory.each(i => `payee_id #${i}`),
  category_id: Factory.each(i => `category_id #${i}`),
  transfer_account_id: Factory.each(i => `transfer_account_id #${i}`),
  subtransactions: scheduledSubTransactionFactory.buildList(3)
});

export const scheduledTransactionDetailResponseFactory = Factory.makeFactory<
  api.ScheduledTransactionResponse
>({
  data: Factory.makeFactory({
    scheduled_transaction: scheduledTransactionFactory.build()
  })
});

export const scheduledTransactionSummaryFactory = Factory.makeFactory<
  api.ScheduledTransactionSummary
>({
  id: Factory.each(i => `id #${i}`),
  date: "2017-01-02",
  amount: Factory.each(i => i * 1000),
  memo: Factory.each(i => `memo #${i}`),
  flag: "red",
  frequency: api.ScheduledTransactionDetail.FrequencyEnum.Daily,
  account_id: Factory.each(i => `account_id #${i}`),
  payee_id: Factory.each(i => `payee_id #${i}`),
  category_id: Factory.each(i => `category_id #${i}`),
  transfer_account_id: Factory.each(i => `transfer_account_id #${i}`)
});

export const scheduledTransactionsResponseFactory = Factory.makeFactory<
  api.ScheduledTransactionsResponse
>({
  data: Factory.makeFactory({
    scheduled_transactions: scheduledTransactionFactory.buildList(5)
  })
});

export const budgetDetailFactory = Factory.makeFactory<api.BudgetDetail>({
  id: Factory.each(i => `${i}`),
  name: Factory.each(i => `Budget ${i}`),
  last_accessed_on: new Date().toISOString(),
  date_format: { locale: "en-us" },
  currency_format: { locale: "en-us" },
  accounts: accountFactory.buildList(5),
  payees: payeeFactory.buildList(10),
  payee_locations: payeeLocationFactory.buildList(3),
  category_groups: categoryFactory.buildList(5),
  categories: categoryFactory.buildList(10),
  months: monthDetailFactory.buildList(12),
  transactions: transactionFactory.buildList(10),
  subtransactions: subTransactionFactory.buildList(5),
  scheduled_transactions: scheduledTransactionFactory.buildList(5),
  scheduled_subtransactions: scheduledSubTransactionFactory.buildList(5)
});

export const budgetDetailResponseFactory = Factory.makeFactory<
  api.BudgetDetailResponse
>({
  data: Factory.makeFactory({
    server_knowledge: Factory.each(i => i),
    budget: budgetDetailFactory.build()
  })
});
