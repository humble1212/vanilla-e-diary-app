//tracking income

var IncomeListFnx = (IncomeObject) => `
<li>
    <div>
      <p>${IncomeObject.mainSrc} ⇒ <strong>$${IncomeObject.mainAmt} USD</strong></p>
    </div>
    <div>
      <span>Received on: <em>${IncomeObject.recDate}</em></span>
    </div>
    <div>
      <span>Date: <em>${fullDate} @ ${IncomeObject.timeStamp}</em></span>
    </div>
    <div class="editIncome">
      <div>
        <img class="share-Inc" src="images/share_white_24dp.svg" alt="" />
        <img class="pin-to-top" src="images/push_pin_white_24dp.svg" alt="" />
        <img class="delete-Inc" src="images/delete_white_24dp.svg" alt="" />
        <img class="customize-Inc" src="images/settings_white_24dp.svg" alt="" />
      </div>
    </div>
</li>
`;

var totArray = [];
var objectFxn = () => {
  IncomeObject = {
    mainSrc: mainSrc.value,
    mainAmt: mainAmt.value,
    recDate: recDate.value,
    timeStamp,
  };

  incomeCanvasArray.push(mainAmt.value);
  canvasMainSrc.push(mainSrc.value);

  totArray.push(mainAmt.value);
  IncomeArray.push(IncomeObject);

  localStorage.setItem("IncomeArray", JSON.stringify(IncomeArray));
  localStorage.setItem("canvasMainSrc", JSON.stringify(canvasMainSrc));
  localStorage.setItem("incomeCanvasArray", JSON.stringify(incomeCanvasArray));

  listOfIncome.innerHTML += IncomeListFnx(IncomeObject);
  income_items_list.innerHTML += IncomeListFnx(IncomeObject);
  listOfIncome.scrollTop = listOfIncome.scrollHeight;

  mainSrc.value = "";
  mainAmt.value = "";
};

let totInc = 0;
addTrkButt.addEventListener("click", () => {
  objectFxn();
  for (mainAmt.value in totArray) {
    totInc += Math.round(parseFloat(totArray));
    grossTotal = totInc;

    totAnualInc.innerText = `$${totInc} USD`;
    localStorage.setItem("grossTotal", JSON.stringify(grossTotal));

    grossIncomSnipArray.push(grossTotal);
    totArray.splice(0, 1);
  }
});

var expenseObjFnx = (ExpenseDetailObject) => `
<li>  
    <div>
      <p>${ExpenseDetailObject.expDetItem} ⇒ <strong>$${ExpenseDetailObject.expDetAmt} USD</strong></p>
    </div>
    <div>
      <span>Purchased on: <em>${ExpenseDetailObject.to_dt_pk}</em></span>
    </div>
    <div>
      <span>Date: <em>${fullDate} @ ${ExpenseDetailObject.timeStamp}</em></span>
    </div>
    <div class="editIncome">
      <div>
        <img class="share-Inc" src="images/share_white_24dp.svg" alt="" />
        <img class="pin-to-top" src="images/push_pin_white_24dp.svg" alt="" />
        <img class="delete-Exp" src="images/delete_white_24dp.svg" alt="" />
        <img class="customize-Inc" src="images/settings_white_24dp.svg" alt="" />
      </div>
    </div>
</li>
`;

var totExpArray = [];
var totExp = 0;
var expDetFnx = () => {
  ExpenseDetailObject = {
    expDetItem: expDetItem.value,
    expDetAmt: expDetAmt.value,
    to_dt_pk: to_dt_pk.value,
    timeStamp,
  };

  canvasExpSrc.push(expDetItem.value);
  expCanvasArray.push(expDetAmt.value);

  totExpArray.push(expDetAmt.value);
  itemsArray.push(ExpenseDetailObject);

  localStorage.setItem("itemsArray", JSON.stringify(itemsArray));
  localStorage.setItem("canvasExpSrc", JSON.stringify(canvasExpSrc));
  localStorage.setItem("expCanvasArray", JSON.stringify(expCanvasArray));

  listOfExpenses.innerHTML += expenseObjFnx(ExpenseDetailObject);
  listOfExpenses.scrollTop = listOfExpenses.scrollHeight;
};

addExpDetails.onclick = () => {
  expDetFnx();
  for (expDetAmt.value in totExpArray) {
    totExp += Math.round(parseFloat(totExpArray));
    grossExp = totExp;
    sum_of_det.innerText = `$${totExp} USD`;

    localStorage.setItem("grossExp", JSON.stringify(grossExp));

    totExpArray.splice(0, 1);
  }
};

//shoping section
var shoppingListFucntion = (shoppingObject) => `
<li>  
  <div class="textManu">
    <span>
      <strong>
        ${shoppingObject.count}. ${shoppingObject.itemsToBuy}
      </strong>
    </span>
    <span>
      <strong>Est. Price: $${shoppingObject.amt_per_item} USD</strong>
    </span>
    <span>
      <p class="itenaryCheck">Reminder: ${shoppingObject.dueShopTime} ⇩</p>
    </span>
  </div>
  <div class="shopping-ticks">
    <div>
      <label for="purchsed-items">Purchased</label>
      <input
        type="checkbox"
        id="purchsed-items"
        name="purchsed-items"
        class="purchsed-items" />
    </div>
    <div>
      <label for="rem-purchased">Remove Purchased</label>
      <input
        type="checkbox"
        name="check-shopping"
        id="CompletedId"
        class="check-shopping" />
    </div>
  </div>
 <section class="itenaryMenu">
  <p class = "pTexts">Venue: ${shoppingObject.todoVenue};</p>
  <p class = "pTexts">Due Date: ${shoppingObject.dueShopDate};</p>
  <p class = "pTexts">Reminder: ${shoppingObject.dueShopTime}</p>
 </section>
</li>
`;

var amtOfItemArray = [];
let calTot = 0;
let count = 0;
var shopObjectFunction = () => {
  shoppingObject = {
    itemsToBuy: itemsToBuy.value,
    amt_per_item: amt_per_item.value,
    todoVenue: todoVenue.value,
    dueShopDate: dueShopDate.value,
    dueShopTime: dueShopTime.value,
    count: count++,
  };

  shopItemCanvasArr.push(itemsToBuy.value);
  shopAmntCanvasArr.push(amt_per_item.value);

  shoppingListArray.push(shoppingObject);
  amtOfItemArray.push(Math.round(parseFloat(amt_per_item.value)));

  localStorage.setItem("shoppingListArray", JSON.stringify(shoppingListArray));
  localStorage.setItem("shopItemCanvasArr", JSON.stringify(shopItemCanvasArr));
  localStorage.setItem("shopAmntCanvasArr", JSON.stringify(shopAmntCanvasArr));

  outputlistItems.innerHTML += shoppingListFucntion(shoppingObject);

  for (amt_per_item.value in amtOfItemArray) {
    calTot += Math.round(parseFloat(amtOfItemArray));
    calTotH1.innerText = `$${calTot} USD`;
    amtOfItemArray.splice(0, 1);
  }
  return { calTot };
};

appendShopList.onclick = () => {
  shopObjectFunction();
};

crtShopList.onclick = () => {
  let shopTot = calTot;
  allFund = shopFund.value;
  localStorage.setItem("shopTot", JSON.stringify(shopTot));
  totalExp.innerText = `$${shopTot} USD`;
  alt_funt.innerText = `$${shopFund.value}USD`;

  let shoppingBalance = Math.round(parseFloat(shopFund.value - calTot));
  shopDiff.innerText = `$${shoppingBalance}USD`;
  localStorage.setItem("shoppingBalance", JSON.stringify(shoppingBalance));
  localStorage.setItem("allFund", JSON.stringify(allFund));
};

//daily budget preparation
var BudgetListFucntion = (BudgetObject) => `
<li>
  <div class="budgetItems">
    <strong>
      ${BudgetObject.count}. ${BudgetObject.bud_items}
    </strong>
    <strong>
      ${"Allocated Amount: "} $${BudgetObject.bud_amnt} USD
    </strong>
  </div>
  <div class="budget-ticks">
   <span>
    <label for="purchsed-items">Expired</label>
      <input
        type="checkbox"
        id="purchsed-items"
        name="purchsed-items"
        class="purchsed-items" />
   </span>
    <p class="check-shopping">
      <h1 class="material-symbols-outlined">delete</h1>
    </p>
  </div>
</li>
`;

var budgetAmtArray = [];
let dailyBudgetTotal = 0;
var dayCount = 0;
var budgetFunction = () => {
  BudgetObject = {
    bud_amnt: bud_amnt.value,
    bud_items: bud_items.value,
    count: dayCount++,
  };

  dailyBudgetListArray.push(BudgetObject);
  budgetAmtArray.push(Math.round(parseFloat(bud_amnt.value)));

  localStorage.setItem(
    "dailyBudgetListArray",
    JSON.stringify(dailyBudgetListArray)
  );

  dayListUl.innerHTML += BudgetListFucntion(BudgetObject);

  for (bud_amnt.value in budgetAmtArray) {
    dailyBudgetTotal += Math.round(parseFloat(budgetAmtArray));
    totalText.innerText = `→ Total: $${dailyBudgetTotal} USD`;
    totalCanvas.push(dailyBudgetTotal);
    budgetAmtArray.splice(0, 1);
  }

  return { dailyBudgetTotal };
};

add_daily.onclick = () => {
  budgetFunction();
};

daySelection.addEventListener("click", (event) => {
  days = event.target.innerText;
  localStorage.setItem("days", JSON.stringify(days));
  return { days };
});

budCrtButts.onclick = () => {
  let dayCatObject = {
    add_Cat: add_Cat.value,
    add_date: add_date.value,
  };
  dayCatArray.push(dayCatObject);
  dailyMinutes.innerHTML = `
  <section class="minuteMenu">
    <p class = "minuteTexts"> <span>→</span>  Category: ${dayCatObject.add_Cat}</p>
    <p class = "minuteTexts"> <span>→</span>  Date: ${dayCatObject.add_date}</p>
    <p class = "minuteTexts"> <span>→</span>  day: ${days}</p>
  </section>`;
  localStorage.setItem("dayCatArray", JSON.stringify(dayCatArray));

  let budgeTotal = dailyBudgetTotal;
  budgetFund = av_fund.value;

  totexpinc.innerText = `$${budgeTotal} USD`;
  totinc.innerText = `$${budgetFund}USD`;

  let BudgetBalance = Math.round(parseFloat(av_fund.value - dailyBudgetTotal));
  totsaveinc.innerText = `$${BudgetBalance}USD`;

  percSave = Math.round(parseFloat((BudgetBalance / budgetFund) * 100));
  saveInc.innerText = `${percSave}%`;

  if (percSave < 10) {
    ratingText = "Percentage savings too low, consider review";
    remarksText.innerText = ratingText;
  } else if (percSave > 10 && percSave <= 20) {
    ratingText = "moderate savings, looks good";
    remarksText.innerText = ratingText;
  } else {
    ratingText = "excellent budget";
    remarksText.innerText = ratingText;
  }

  localStorage.setItem("percSave", JSON.stringify(percSave));
  localStorage.setItem("BudgetBalance", JSON.stringify(BudgetBalance));
  localStorage.setItem("budgetFund", JSON.stringify(budgetFund));
  localStorage.setItem("budgeTotal", JSON.stringify(budgeTotal));
  localStorage.setItem("ratingText", JSON.stringify(ratingText));
};

//Weekly budget preparation
var weeklyListFucntion = (WeeklyBudgetObject) => `
<li>
  <div class="budgetItems">
    <strong>
      ${WeeklyBudgetObject.count}. ${WeeklyBudgetObject.wk_bud_items}
    </strong>
    <strong>
      ${"Allocated Amount: "} $${WeeklyBudgetObject.wk_bud_amnt} USD
    </strong>
  </div>
  <div class="budget-ticks">
   <span>
    <label for="purchsed-items">Expired</label>
      <input
        type="checkbox"
        id="purchsed-items"
        name="purchsed-items"
        class="purchsed-items" />
   </span>
  <p class="check-shopping">
    <h1 class="material-symbols-outlined">delete</h1>
  </p>
  </div>
</li>
`;

var weekAmtArray = [];
let weeklyBudgetTotal = 0;
var weekCount = 0;

var weeklyBudgetFucntion = () => {
  let WeeklyBudgetObject = {
    wk_bud_items: wk_bud_items.value,
    wk_bud_amnt: wk_bud_amnt.value,
    count: weekCount++,
  };

  weekAmtArray.push(Math.round(parseFloat(wk_bud_amnt.value)));

  weeklBudgetListArray.push(WeeklyBudgetObject);
  weekListUl.innerHTML += weeklyListFucntion(WeeklyBudgetObject);
  localStorage.setItem(
    "weeklBudgetListArray",
    JSON.stringify(weeklBudgetListArray)
  );

  for (wk_bud_amnt.value in weekAmtArray) {
    weeklyBudgetTotal += Math.round(parseFloat(weekAmtArray));
    totAllWeekly.innerText = `→ Total: $${weeklyBudgetTotal} USD`;
    totalCanvas.push(weeklyBudgetTotal);
    weekAmtArray.splice(0, 1);
  }

  return { weeklyBudgetTotal };
};

addWeeklybutt.onclick = () => {
  weeklyBudgetFucntion();
};

weekSelection.addEventListener("click", (event) => {
  weeks = event.target.innerText;
  localStorage.setItem("weeks", JSON.stringify(weeks));
  return { weeks };
});

var weeklySummaryFucntion = (weekCatObject) =>
  `
  <section class="minuteMenu">
    <p class = "minuteTexts"> <span>→</span>  Category: ${
      weekCatObject.wk_Cat
    }</p>
    <p class = "minuteTexts"> <span>→</span>  Quarter: ${weeks}</p>
    <p class = "minuteTexts"> <span>→</span>  ${"Bi-Weekly Budget"}</p>
    <p class = "minuteTexts"> <span>→</span>  From: ${
      weekCatObject.from_wk
    }-To: ${weekCatObject.To_wk}</p>
    <p class = "minuteTexts"> <span>→</span>  ${"Custom Period"}</p>
    <p class = "minuteTexts"> <span>→</span>  From: ${
      weekCatObject.Frm_date
    }-To: ${weekCatObject.To_date}</p>
  </section>`;

crt_wk_bgt.onclick = () => {
  let weekCatObject = {
    wk_Cat: wk_Cat.value,
    from_wk: from_wk.value,
    To_wk: To_wk.value,
    Frm_date: Frm_date.value,
    To_date: To_date.value,
  };
  weekCatObjectArray.push(weekCatObject);
  totAllWeeklySummary.innerHTML = weeklySummaryFucntion(weekCatObject);

  localStorage.setItem(
    "weekCatObjectArray",
    JSON.stringify(weekCatObjectArray)
  );

  let weekbudgeTotal = weeklyBudgetTotal;
  weekbudgetFund = all_fund.value;

  totExpwkInc.innerText = `$${weekbudgeTotal} USD`;
  totwkAvInc.innerText = `$${weekbudgetFund}USD`;

  let weekBalance = Math.round(parseFloat(all_fund.value - weekbudgeTotal));
  totweekSaved.innerText = `$${weekBalance}USD`;

  weeklyPercSave = Math.round(parseFloat((weekBalance / weekbudgetFund) * 100));

  weeklypercentage.innerText = `${weeklyPercSave}%`;

  if (weeklyPercSave < 10) {
    weekRatingText = "Percentage savings too low, consider review";
    remarksTextA.innerText = weekRatingText;
  } else if (weeklyPercSave > 10 && weeklyPercSave <= 20) {
    weekRatingText = "moderate savings, looks good";
    remarksTextA.innerText = weekRatingText;
  } else {
    weekRatingText = "excellent budget";
    remarksTextA.innerText = weekRatingText;
  }

  localStorage.setItem("weeklyPercSave", JSON.stringify(weeklyPercSave));
  localStorage.setItem("weekbudgetFund", JSON.stringify(weekbudgetFund));
  localStorage.setItem("weekbudgeTotal", JSON.stringify(weekbudgeTotal));
  localStorage.setItem("weekBalance", JSON.stringify(weekBalance));
  localStorage.setItem("weekRatingText", JSON.stringify(weekRatingText));
};

//monthly budget
var monthlyBudgetListFunction = (monthlyBudgetObject) => `
<li>
  <div class="budgetItems">
    <strong>
      ${monthlyBudgetObject.count}. ${monthlyBudgetObject.mt_bud_items}
    </strong>
    <strong>
      ${"Allocated Amount: "} $${monthlyBudgetObject.mt_bud_amnt} USD
    </strong>
  </div>
  <div class="budget-ticks">
   <span>
    <label for="purchsed-items">Expired</label>
      <input
        type="checkbox"
        id="purchsed-items"
        name="purchsed-items"
        class="purchsed-items" />
   </span>
  <p class="check-shopping">
    <h1 class="material-symbols-outlined">delete</h1>
  </p>
  </div>
</li>
`;

var monthlyAmtArray = [];
let monthlyBudgetTotal = 0;
var monthCount = 0;

var monthlyBudgetFucntion = () => {
  let monthlyBudgetObject = {
    mt_bud_items: mt_bud_items.value,
    mt_bud_amnt: mt_bud_amnt.value,
    count: monthCount++,
  };

  monthlyAmtArray.push(Math.round(parseFloat(mt_bud_amnt.value)));

  monthlyBudgetListArray.push(monthlyBudgetObject);
  monthListUl.innerHTML += monthlyBudgetListFunction(monthlyBudgetObject);

  localStorage.setItem(
    "monthlyBudgetListArray",
    JSON.stringify(monthlyBudgetListArray)
  );

  for (mt_bud_amnt.value in monthlyAmtArray) {
    monthlyBudgetTotal += Math.round(parseFloat(monthlyAmtArray));
    totAlMonthly.innerText = `→ Total: $${monthlyBudgetTotal} USD`;
    totalCanvas.push(monthlyBudgetTotal);
    monthlyAmtArray.splice(0, 1);
  }

  return { monthlyBudgetTotal };
};

addMonthlyButt.onclick = () => {
  monthlyBudgetFucntion();
};

var monthlySummaryFucntion = (monthlyCatObject) =>
  `
  <section class="minuteMenu">
    <p class = "minuteTexts"> <span>→</span>  Category: ${
      monthlyCatObject.mt_Cat
    }</p>
    <p class = "minuteTexts"> <span>→</span>  Month: ${
      monthlyCatObject.selectedMonth
    }</p>
    <p class = "minuteTexts"> <span>→</span>  ${"Custom Period"}</p>
    <p class = "minuteTexts"> <span>→</span>  From: ${
      monthlyCatObject.Frm_mt
    }-To: ${monthlyCatObject.To_mt}</p>
  </section>`;

crt_mt_bgt.onclick = () => {
  let monthlyCatObject = {
    mt_Cat: mt_Cat.value,
    selectedMonth: selectedMonth.value,
    Frm_mt: Frm_mt.value,
    To_mt: To_mt.value,
  };
  monthlySummaryArray.push(monthlyCatObject);
  totAllMonthlySummary.innerHTML = monthlySummaryFucntion(monthlyCatObject);

  localStorage.setItem(
    "monthlySummaryArray",
    JSON.stringify(monthlySummaryArray)
  );

  let monthTotal = monthlyBudgetTotal;
  monthlybudgetFund = all_mt_fund.value;

  monthlybudgettotal.innerText = `$${monthTotal} USD`;
  totalMonthlyBudget.innerText = `$${monthlybudgetFund}USD`;

  let monthlyBalance = Math.round(parseFloat(all_mt_fund.value - monthTotal));
  monthlySavings.innerText = `$${monthlyBalance}USD`;

  MonthylyPercSave = Math.round(
    parseFloat((monthlyBalance / monthlybudgetFund) * 100)
  );

  monthlyPerc.innerText = `${MonthylyPercSave}%`;

  if (MonthylyPercSave < 10) {
    monthRatingText = "Percentage savings too low, consider review";
    remarksTextB.innerText = monthRatingText;
  } else if (MonthylyPercSave > 10 && MonthylyPercSave <= 20) {
    monthRatingText = "moderate savings, looks good";
    remarksTextB.innerText = monthRatingText;
  } else {
    monthRatingText = "excellent budget";
    remarksTextB.innerText = monthRatingText;
  }

  localStorage.setItem("MonthylyPercSave", JSON.stringify(MonthylyPercSave));
  localStorage.setItem("monthlybudgetFund", JSON.stringify(monthlybudgetFund));
  localStorage.setItem("monthTotal", JSON.stringify(monthTotal));
  localStorage.setItem("monthlyBalance", JSON.stringify(monthlyBalance));
  localStorage.setItem("monthRatingText", JSON.stringify(monthRatingText));
};

//annual budget
var annualBudgetListFunction = (annualBudgetObject) => `
<li>
  <div class="budgetItems">
    <strong>
      ${annualBudgetObject.count}. ${annualBudgetObject.yr_bud_items}
    </strong>
    <strong>
      ${"Allocated Amount: "} $${annualBudgetObject.yr_bud_amnt} USD
    </strong>
  </div>
  <div class="budget-ticks">
   <span>
    <label for="purchsed-items">Expired</label>
      <input
        type="checkbox"
        id="purchsed-items"
        name="purchsed-items"
        class="purchsed-items" />
   </span>
    <p class="check-shopping">
      <h1 class="material-symbols-outlined">delete</h1>
    </p>
  </div>
</li>
`;

var annualAmtArray = [];
let annualBudgetTotal = 0;
var annualCount = 0;

var annaulBudgetFucntion = () => {
  let annualBudgetObject = {
    yr_bud_items: yr_bud_items.value,
    yr_bud_amnt: yr_bud_amnt.value,
    count: annualCount++,
  };

  annualAmtArray.push(Math.round(parseFloat(yr_bud_amnt.value)));

  annualBudgetListArray.push(annualBudgetObject);
  annualListUl.innerHTML += annualBudgetListFunction(annualBudgetObject);

  localStorage.setItem(
    "annualBudgetListArray",
    JSON.stringify(annualBudgetListArray)
  );

  for (yr_bud_amnt.value in annualAmtArray) {
    annualBudgetTotal += Math.round(parseFloat(annualAmtArray));
    totAlAnnual.innerText = `→ Total: $${annualBudgetTotal} USD`;
    totalCanvas.push(annualBudgetTotal);
    annualAmtArray.splice(0, 1);
  }

  return { annualBudgetTotal };
};

addAnnualButt.onclick = () => {
  annaulBudgetFucntion();
};

annualQuarterPicker.addEventListener("click", (event) => {
  quarter = event.target.innerText;
  localStorage.setItem("quarter", JSON.stringify(quarter));
  return { quarter };
});
halfAnnualPicks.addEventListener("click", (event) => {
  halfPicks = event.target.innerText;
  localStorage.setItem("halfPicks", JSON.stringify(halfPicks));
  return { halfPicks };
});

var annualSummaryFucntion = (anualCatObject) =>
  `
  <section class="minuteMenu">
    <p class = "minuteTexts"> <span>→</span>  Category: ${
      anualCatObject.yr_Cat
    }</p>
    <p class = "minuteTexts"> <span>→</span>  Year: ${
      anualCatObject.slct_yr
    }</p>
    <p class = "minuteTexts"> <span>→</span>  Quarter: ${quarter}</p>
    <p class = "minuteTexts"> <span>→</span>  ${"Quarter Period: "}</p>
     <p class = "minuteTexts"> <span>→</span>  From: ${
       anualCatObject.from_qtr_yr
     }-To: ${anualCatObject.To_qtr_yr}</p>
    <p class = "minuteTexts"> <span>→</span>  ${halfPicks}</p>
     <p class = "minuteTexts"> <span>→</span>  From: ${
       anualCatObject.from_half_yr
     }-To: ${anualCatObject.To_half_yr}</p>

    <p class = "minuteTexts"> <span>→</span>  ${"Custom Period"}</p>
    <p class = "minuteTexts"> <span>→</span>  From: ${
      anualCatObject.FrmA_pd
    }-To: ${anualCatObject.ToA_pd}</p>
  </section>`;

crt_yr_bgt.onclick = () => {
  let anualCatObject = {
    ToA_pd: ToA_pd.value,
    yr_Cat: yr_Cat.value,
    slct_yr: slct_yr.value,
    FrmA_pd: FrmA_pd.value,
    To_qtr_yr: To_qtr_yr.value,
    To_half_yr: To_half_yr.value,
    from_qtr_yr: from_qtr_yr.value,
    from_half_yr: from_half_yr.value,
  };

  annualSummaryArray.push(anualCatObject);
  totAlAnnualSummary.innerHTML = annualSummaryFucntion(anualCatObject);

  localStorage.setItem(
    "annualSummaryArray",
    JSON.stringify(annualSummaryArray)
  );

  let annualTotal = annualBudgetTotal;
  availableAnnualFund = all_yr_fund.value;

  totalAnnualExpense.innerText = `$${annualTotal} USD`;
  AvAnnualFund.innerText = `$${availableAnnualFund}USD`;

  let annualBalance = Math.round(parseFloat(all_yr_fund.value - annualTotal));
  annualSavings.innerText = `$${annualBalance}USD`;

  annualPercSave = Math.round(
    parseFloat((annualBalance / availableAnnualFund) * 100)
  );

  annualPercentage.innerText = `${annualPercSave}%`;

  if (annualPercSave < 10) {
    annualRatingText = "Percentage savings too low, consider review";
    remarksTextC.innerText = annualRatingText;
  } else if (annualPercSave > 10 && annualPercSave <= 20) {
    annualRatingText = "moderate savings, looks good";
    remarksTextC.innerText = annualRatingText;
  } else {
    annualRatingText = "excellent budget";
    remarksTextC.innerText = annualRatingText;
  }

  localStorage.setItem("annualPercSave", JSON.stringify(annualPercSave));
  localStorage.setItem(
    "availableAnnualFund",
    JSON.stringify(availableAnnualFund)
  );
  localStorage.setItem("annualTotal", JSON.stringify(annualTotal));
  localStorage.setItem("annualBalance", JSON.stringify(annualBalance));
  localStorage.setItem("annualRatingText", JSON.stringify(annualRatingText));
};

// deleting events
window.addEventListener("click", (event) => {
  let deletTarget = event.target;
  let deltnt = deletTarget.parentElement.parentElement.parentElement;

  if (
    deletTarget.className === "delete-Inc" ||
    deletTarget.className === "check-shopping" ||
    deletTarget.className === "delete-Exp"
  ) {
    deltnt.style.animationPlayState = "running";
    deltnt.addEventListener("animationend", () => {
      deltnt.remove();
    });
    if (deltnt.parentElement.id === "listOfIncome") {
      for (IncomeObject in IncomeArray) {
        IncomeArray.splice(0, 1);
        localStorage.removeItem("IncomeArray");
        localStorage.setItem("IncomeArray", JSON.stringify(IncomeArray));
        break;
      }
    } else if (deltnt.parentElement.className === "output-list-items") {
      for (shoppingObject in shoppingListArray) {
        shoppingListArray.splice(0, 1);
        localStorage.removeItem("shoppingListArray");
        localStorage.setItem(
          "shoppingListArray",
          JSON.stringify(shoppingListArray)
        );
        break;
      }
    } else if (deltnt.parentElement.id === "listOfExpenses") {
      for (ExpenseDetailObject in itemsArray) {
        itemsArray.splice(0, 1);
        localStorage.removeItem("itemsArray");
        localStorage.setItem("itemsArray", JSON.stringify(itemsArray));
        break;
      }
    }
  }

  if (deletTarget.className === "material-symbols-outlined") {
    let deltnt = deletTarget.parentElement.parentElement;
    deltnt.style.animationPlayState = "running";
    deltnt.addEventListener("animationend", () => {
      deltnt.remove();
    });
    if (deltnt.parentElement.id === "dayListUl") {
      for (BudgetObject in dailyBudgetListArray) {
        dailyBudgetListArray.splice(0, 1);
        localStorage.removeItem("dailyBudgetListArray");
        localStorage.setItem(
          "dailyBudgetListArray",
          JSON.stringify(dailyBudgetListArray)
        );
        break;
      }
    } else if (deltnt.parentElement.id === "weekList") {
      for (WeeklyBudgetObject in weeklBudgetListArray) {
        weeklBudgetListArray.splice(0, 1);
        localStorage.removeItem("weeklBudgetListArray");
        localStorage.setItem(
          "weeklBudgetListArray",
          JSON.stringify(weeklBudgetListArray)
        );
        break;
      }
    } else if (deltnt.parentElement.id === "monthList") {
      for (monthlyBudgetObject in monthlyBudgetListArray) {
        monthlyBudgetListArray.splice(0, 1);
        localStorage.removeItem("monthlyBudgetListArray");
        localStorage.setItem(
          "monthlyBudgetListArray",
          JSON.stringify(monthlyBudgetListArray)
        );
        break;
      }
    } else if (deltnt.parentElement.id === "annualList") {
      for (annualBudgetObject in annualBudgetListArray) {
        annualBudgetListArray.splice(0, 1);
        localStorage.removeItem("annualBudgetListArray");
        localStorage.setItem(
          "annualBudgetListArray",
          JSON.stringify(annualBudgetListArray)
        );
        break;
      }
    }
  } else if (deletTarget.className === "purchsed-items") {
    let eventStyle = deletTarget.parentElement.parentElement.parentElement;

    if (eventStyle.style.textDecoration !== "line-through") {
      eventStyle.style.textDecoration = "line-through";
    } else {
      eventStyle.style.textDecoration = "";
    }
  } else if (deletTarget.className === "itenaryCheck") {
    let eventStyle = deletTarget.parentElement.parentElement.parentElement;
    eventStyle.children[2].classList.toggle("showItenary");
  } else if (deletTarget.id === "clrListButt") {
    clearanceAlert.classList.add("showclearance");
    contButt.addEventListener("click", () => {
      outputlistItems.innerHTML = "";
      calTotH1.innerText = `$${0.0} USD`;
      totalExp.innerText = `$${0.0} USD`;
      alt_funt.innerText = `$${0.0}USD`;
      shopDiff.innerText = `$${0.0}USD`;
      localStorage.removeItem("allFund");
      localStorage.removeItem("shoppingBalance");
      localStorage.removeItem("shoppingListArray");
      localStorage.removeItem("shopItemCanvasArr");
      localStorage.removeItem("shopAmntCanvasArr");
      clearanceAlert.classList.remove("showclearance");
    });
  }
});

for (let i = 0; i < bud_clr_butts.length; i++) {
  bud_clr_butts[0].onclick = () => {
    clearanceAlert.classList.add("showclearance");
    contButt.addEventListener("click", () => {
      localStorage.removeItem("dailyBudgetListArray");
      dayListUl.innerHTML = "";
      totalText.innerText = `→ Total: $${0.0} USD`;
      dailyMinutes.innerHTML = "";
      localStorage.removeItem("dayCatArray");
      totexpinc.innerText = `$${0.0} USD`;
      totinc.innerText = `$${0.0}USD`;
      totsaveinc.innerText = `$${0.0}USD`;
      saveInc.innerText = `${0.0}%`;
      remarksText.innerText = "";

      localStorage.removeItem("percSave");
      localStorage.removeItem("budgetFund");
      localStorage.removeItem("budgeTotal");
      localStorage.removeItem("ratingText");
      localStorage.removeItem("BudgetBalance");
      clearanceAlert.classList.remove("showclearance");
    });
  };

  bud_clr_butts[1].onclick = () => {
    clearanceAlert.classList.add("showclearance");
    contButt.addEventListener("click", () => {
      weekListUl.innerHTML = "";
      remarksTextA.innerText = "";
      totAllWeeklySummary.innerHTML = "";

      totwkAvInc.innerText = `$${0.0}USD`;
      totExpwkInc.innerText = `$${0.0} USD`;
      totweekSaved.innerText = `$${0.0}USD`;
      weeklypercentage.innerText = `${0.0}%`;
      totAllWeekly.innerText = `→ Total: $${0.0} USD`;

      localStorage.removeItem("dailyBudgetListArray");
      localStorage.removeItem("weeklBudgetListArray");
      localStorage.removeItem("weekCatObjectArray");
      localStorage.removeItem("weeklyPercSave");
      localStorage.removeItem("weekbudgetFund");
      localStorage.removeItem("weekbudgeTotal");
      localStorage.removeItem("weekBalance");
      localStorage.removeItem("weekRatingText");

      clearanceAlert.classList.remove("showclearance");
    });
  };

  bud_clr_butts[2].onclick = () => {
    clearanceAlert.classList.add("showclearance");
    contButt.addEventListener("click", () => {
      remarksTextB.innerText = "";
      monthListUl.innerHTML = "";
      totAllMonthlySummary.innerHTML = "";

      totAlMonthly.innerText = `→ Total: $${0.0} USD`;
      monthlybudgettotal.innerText = `$${0.0} USD`;
      totalMonthlyBudget.innerText = `$${0.0}USD`;
      monthlySavings.innerText = `$${0.0}USD`;
      monthlyPerc.innerText = `${0.0}%`;

      localStorage.removeItem("MonthylyPercSave");
      localStorage.removeItem("monthlyBudgetListArray");
      localStorage.removeItem("monthlySummaryArray");
      localStorage.removeItem("monthlybudgetFund");
      localStorage.removeItem("monthTotal");
      localStorage.removeItem("monthlyBalance");
      localStorage.removeItem("monthRatingText");

      clearanceAlert.classList.remove("showclearance");
    });
  };
  bud_clr_butts[3].onclick = () => {
    clearanceAlert.classList.add("showclearance");
    contButt.addEventListener("click", () => {
      annualListUl.innerHTML = "";
      totAlAnnualSummary.innerHTML = "";
      remarksTextC.innerText = "";

      totAlAnnual.innerText = `→ Total: $${0.0} USD`;
      totalAnnualExpense.innerText = `$${0.0} USD`;
      AvAnnualFund.innerText = `$${0.0}USD`;
      annualSavings.innerText = `$${0.0}USD`;
      annualPercentage.innerText = `${0.0}%`;

      localStorage.removeItem("annualBudgetListArray");
      localStorage.removeItem("annualSummaryArray");
      localStorage.removeItem("annualPercSave");
      localStorage.removeItem("availableAnnualFund");
      localStorage.removeItem("annualTotal");
      localStorage.removeItem("annualBalance");
      localStorage.removeItem("annualRatingText");

      clearanceAlert.classList.remove("showclearance");
    });
  };
}

for (let i = 0; i < Inc_exp_tracker.length; i++) {
  Inc_exp_tracker[0].onclick = () => {
    clearanceAlert.classList.add("showclearance");
    contButt.addEventListener("click", () => {
      localStorage.removeItem("IncomeArray");
      localStorage.removeItem("canvasMainSrc");
      localStorage.removeItem("incomeCanvasArray");
      listOfIncome.innerHTML = "";
      income_items_list.innerHTML = "";
      totAnualInc.innerText = `$${0.0} USD`;
      localStorage.removeItem("grossTotal");
      clearanceAlert.classList.remove("showclearance");
    });
  };

  Inc_exp_tracker[1].onclick = () => {
    clearanceAlert.classList.add("showclearance");
    contButt.addEventListener("click", () => {
      localStorage.removeItem("itemsArray");
      localStorage.removeItem("canvasExpSrc");
      localStorage.removeItem("expCanvasArray");
      listOfExpenses.innerHTML = "";
      sum_of_det.innerText = `$${0.0} USD`;
      localStorage.removeItem("grossExp");
      clearanceAlert.classList.remove("showclearance");
    });
  };
}

function incomeFnx() {
  //canvas function
  var ctx = document.getElementById("myIncChart");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: canvasMainSrc,
      datasets: [
        {
          data: incomeCanvasArray,
          label: "Income Sources",
          borderWidth: 1,
          fill: true,
          backgroundColor: "lightblue",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          responsive: true,
        },
      },
    },
  });
}

function expenditureFnx() {
  //canvas function
  var ctx = document.getElementById("myExpChart");
  labels = new Chart(ctx, {
    type: "line",
    data: {
      labels: canvasExpSrc,
      datasets: [
        {
          label: "Expenditure Tracking",
          data: expCanvasArray,
          borderWidth: 1,
          fill: true,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          responsive: true,
        },
      },
    },
  });
}

function shopingFnx() {
  //canvas function
  var ctx = document.getElementById("myShopChart");

  labels = new Chart(ctx, {
    type: "bar",
    data: {
      labels: shopItemCanvasArr,
      datasets: [
        {
          label: "Shopping Chart (Item/Amount)",
          data: shopAmntCanvasArr,
          borderWidth: 1,
          fill: true,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          responsive: true,
        },
      },
    },
  });
}

function budgetChartFnx() {
  //canvas function
  var ctx = document.getElementById("myBudgetChart");
  labels = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Daily", "Weekly", "Monthly", "Annual"],
      datasets: [
        {
          label: "Budget Chart",
          data: totalCanvas,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          responsive: true,
        },
      },
    },
  });
  localStorage.setItem("totalCanvas", JSON.stringify(totalCanvas));
}

const slidePrev = document.getElementById("slidePrev");
const slideNext = document.getElementById("slideNext");

const graphContainer = document.querySelector(".graphContainer");
const budgetChart = document.querySelectorAll(".graphContainer .budget-chart");

const slideBackwards = document.getElementById("slideBackwards");
const slideForwards = document.getElementById("slideForwards");

const adds_box = document.querySelector(".adds-box");
const welcomeText = document.querySelectorAll(".adds-box li");

let translatePrev = eventscontainer.clientWidth;
let slideCount = 0;

slideNext.addEventListener("click", () => {
  slideCount++;
  todoSnippet.forEach((todoSnippet) => {
    todoSnippet.style.transition = "transform 650ms ease-in-out";
    todoSnippet.style.transform =
      "translateX(" + -slideCount * translatePrev + "px)";
  });
  if (slideCount === todoSnippet.length) {
    slideCount = 0;
    todoSnippet.forEach((todoSnippet) => {
      todoSnippet.style.transition = "none";
      todoSnippet.style.transform = "none";
    });
  }
});

slidePrev.addEventListener("click", () => {
  slideCount--;
  if (slideCount > 0 && slideCount < todoSnippet.length) {
    todoSnippet.forEach((todoSnippet) => {
      todoSnippet.style.transition = "transform 650ms ease-in-out";
      todoSnippet.style.transform =
        "translateX(" + -slideCount * translatePrev + "px)";
    });
  } else if (slideCount <= 0) {
    slideCount = 0;
    todoSnippet.forEach((todoSnippet) => {
      todoSnippet.style.transition = "transform 650ms ease-in-out";
      todoSnippet.style.transform = "";
    });
  }
});

let prevGraph = graphContainer.clientWidth;
let grapheCount = 0;

slideForwards.addEventListener("click", () => {
  grapheCount++;
  budgetChart.forEach((budgetChart) => {
    budgetChart.style.transition = "transform 650ms ease-in-out";
    budgetChart.style.transform =
      "translateX(" + -grapheCount * prevGraph + "px)";
  });
  if (grapheCount === budgetChart.length) {
    grapheCount = 0;
    budgetChart.forEach((budgetChart) => {
      budgetChart.style.transition = "none";
      budgetChart.style.transform = "none";
    });
  }
});

slideBackwards.addEventListener("click", () => {
  grapheCount--;
  if (grapheCount > 0 && grapheCount < budgetChart.length) {
    budgetChart.forEach((budgetChart) => {
      budgetChart.style.transition = "transform 650ms ease-in-out";
      budgetChart.style.transform =
        "translateX(" + -grapheCount * prevGraph + "px)";
    });
  } else if (grapheCount <= 0) {
    grapheCount = 0;
    budgetChart.forEach((budgetChart) => {
      budgetChart.style.transition = "transform 650ms ease-in-out";
      budgetChart.style.transform = "";
    });
  }
});

let imgSlide = adds_box.clientWidth;
let imageCount = 0;

// async function
function tranSlide() {
  imageCount++;
  welcomeText.forEach((li) => {
    li.style.transition = "transform 650ms ease-in-out";
    li.style.transform = "translateX(" + -imageCount * imgSlide + "px)";
  });
  if (imageCount === welcomeText.length) {
    imageCount = 0;
    welcomeText.forEach((li) => {
      li.style.transition = "none";
      li.style.transform = "none";
    });
  }
}

setInterval(() => {
  tranSlide();
}, 5000);
