const budgetInputAreaLi = document.querySelector(".budget-input-area ul");
const budgetContHeader = document.querySelector(".budget-cont-header ul");
const todoInputsContainer = document.querySelector(".todo-inputs-container");
const clearDiary = document.querySelector(".Clear-diary");
const shoppingContainer = document.querySelector(".shopping-container");
const saveDayBtn = document.querySelector("#save-day-btn");
const snippetsContainer = document.querySelector(".snippets-container");
const budgetInputArea = document.querySelector(".budget-input-area");
const income_items_list = document.querySelector(".income-items-list");
const budget_items_list = document.querySelector(".budget-items-list");
const registrationPage = document.querySelector(".registration-page");
const budOutHead = document.querySelectorAll(".bud-out-head button");
const budOutDivUl = document.getElementsByClassName("bud-out-div-li");
const profileInpSide = document.querySelector(".profile-inp-side");
const profileOutSide = document.querySelector(".profile-out-side");
const account_balance = document.querySelector("#account_balance");
const todoIntake = document.getElementsByClassName("todo-intake");
const nonsalariedCnt = document.querySelector(".nonsalaried-cnt");
const Registration = document.querySelector(".registration-form");
const calendar_today = document.querySelector("#calendar_today");
const account_circle = document.querySelector("#account_circle");
const incomeTracking = document.querySelector(".incometracking");
const budgetContent = document.querySelector(".budget-content");
const deleteAccount = document.querySelector(".delete-account");
const activityInput = document.getElementById("activity-input");
const ideaspreviews = document.querySelector(".ideaspreviews");
const my_todo_lists = document.querySelector(".my-todo-lists");
const changePasswrd = document.querySelector(".change-paswrd");
const deleteAccountbutton = document.querySelector("#del-acc");
const subContainer = document.querySelector(".sub-container");
const shoppingTodo = document.querySelector(".shopping-todo");
const closeProfile = document.querySelector(".close-profile");
const targetIntake = document.querySelector(".target-intake");
const specDateDiv = document.querySelector(".spec-date-div");
const ideasIntake = document.querySelector(".ideas-intake");
const salariedCnt = document.querySelector(".salaried-cnt");
const contButt = document.querySelector("#cont-butt");
const targetPanel = document.querySelector(".target-panel");
const showProfile = document.querySelector(".show-profile");
const nextSection = document.querySelector("#next-section");
const clearanceAlert = document.querySelector(".clearanceAlert");
const clrListButt = document.querySelector("#clrListButt");
const cancelButt = document.querySelector("#cancel-butt");
const targetInput = document.getElementById("target-input");
const notpreviews = document.querySelector(".notpreviews");
const incSrcType = document.querySelector("#inc-src-type");
const changePass = document.querySelector("#change-pass");
const dayPeriods = document.querySelector("#day-periods");
const spanNexts = document.querySelector("#nxt-elements");
const noteIntake = document.querySelector(".note-intake");
const addNewNote = document.querySelector("#addNewNote");
const todo_input = document.querySelector(".todo-input");
const SignUpBtn = document.querySelector("#Sign-Up-btn");
const add_td_btn = document.getElementById("add-td-btn");
const todoItems = document.querySelector(".todo-items");
const Tcategory = document.getElementById("T-category");
const addTarget = document.querySelector("#add-target");
const Irregular = document.querySelector("#Irregular");
const toDoList = document.querySelector("#to-do-list");
const mybudgets = document.querySelector(".mybudgets");
const todoMenu = document.querySelector(".todo-menu ");
const edit_note = document.querySelector("#edit_note");
const ideaBtnx = document.querySelector(".idea-btnx");
const noteSect = document.querySelector(".note-sect");
const loginBtn = document.querySelector("#login-btn");
const pDetails = document.querySelector("#p-details");
const timeline = document.getElementById("timeline");
const dropIdea = document.querySelector("#dropIdea");
const category = document.getElementById("category");
const AddToDo = document.querySelector("#Add-to-do");
const TagType = document.getElementById("Tag-Type");
const regIreg = document.querySelector("#Reg-Ireg");
const dueDate = document.querySelector("#due-date");
const dueTime = document.querySelector("#due-time");
const closedtg = document.getElementById("closed");
const profile = document.querySelector("#profile");
const Regular = document.querySelector("#Regular");
const myNotes = document.querySelector("#myNotes");
const dayMapping = document.querySelector("#dayMapping");
const myIdeasBox = document.querySelector("#myIdeasBox");
const bud_clr_butts = document.getElementsByClassName("bud-clr-butts");
const dateDiv = document.querySelector(".dateDiv");
const clear_grapgh = document.querySelector(".clear_grapgh");
const editPf = document.querySelector("#edit-pf");
const saveDet = document.querySelector("#sv-det");
const logReg = document.querySelector(".log-reg");
const crtBtn = document.querySelector(".crt-btn");
const trkBtn = document.querySelector(".trk-btn");
const dueDat = document.querySelector("#due-dat");
const idnBtn = document.querySelector(".idn-btn");
const opened = document.getElementById("opened");
const T_Type = document.querySelector("#T-Type");
const logout = document.querySelector("#logout");
const login = document.querySelector("#login");
const today = document.querySelector("#today");
const Ideas = document.querySelector("#Ideas");
const Notes = document.querySelector("#Notes");
const todoSide = document.querySelector(".todoSide");
const targetSide = document.querySelector(".targetSide");
const myNoteIntake = document.querySelector(".noteIntake");
const myideasIntake = document.querySelector(".ideasIntake");
const myShoppinglist = document.querySelector(".my-shopping-list");
const noteprevs = document.querySelector(".noteprevs");
const ideaprevs = document.querySelector(".ideaprevs");
const From = document.getElementById("from");
const flag = document.querySelector("#flag");
const home = document.querySelector("#home");
const saveIdea = document.querySelector("#saveIdea");
const saveNote = document.querySelector("#saveNote");
const eventscontainer = document.querySelector(".eventscontainer");
const todoSnippet = document.querySelectorAll(".eventscontainer .todo-snippet");

const shopFund = document.querySelector("#shop-fund");
const todoVenue = document.querySelector("#todo-venue");
const dueShopDate = document.querySelector("#due-shop-date");
const dueShopTime = document.querySelector("#due-shop-time");
const itemsToBuy = document.querySelector("#items-to-buy");
const amt_per_item = document.querySelector("#amt-per-item");
const appendShopList = document.querySelector("#appendShopList");
const outputlistItems = document.querySelector(".output-list-items");
const alt_funt = document.querySelector("#alt-funt");
const crtShopList = document.querySelector("#crt-shop-list");
const calTotH1 = document.querySelector(".cal-tot h1");

const totAnualInc = document.querySelector(".tot-anual-inc");
const Inc_exp_tracker = document.getElementsByClassName("Inc-exp-tracker");
const To = document.getElementById("To");
const totalExp = document.getElementById("tot-exp");
const shopDiff = document.getElementById("shop-diff");

const gotoBudgetPage = document.getElementsByClassName("gotoBudgetPage");
const note_snips = document.querySelector("#note-snips");
const idea_snips = document.querySelector("#idea-snips");
const listOfIncome = document.querySelector("#listOfIncome");
const trkTotButt = document.querySelector("#trk-tot-butt");
const GrossTrkInc = document.querySelector("#Gross-trk-Inc");
const totDailyInc = document.querySelector(".tot-daily-inc");
const totWklyInc = document.querySelector(".tot-wkly-inc");
const totMntlyInc = document.querySelector(".tot-mntly-inc");
const SaveIncEarn = document.querySelector(".Save-Inc-earn");
const nonsal_cntItemli = document.querySelector(".nonsal-cnt-item-li");
const allIncList = document.querySelectorAll(".income-items-list li");
const totAmtSpnt = document.querySelector(".tot-amt-spnt");

//input variables
const mainSrc = document.getElementById("main-src");
const mainAmt = document.getElementById("main-amt");
const trkDate = document.getElementById("trk-date");
const recDate = document.getElementById("rec-date");
const addTrkButt = document.getElementById("add-trk-butt");
const mul_dt_pk = document.getElementById("mul-dt-pk");
const avgExpAm = document.getElementById("avg-exp-amt");
const listOfExpenses = document.getElementById("listOfExpenses");
const rec_dt_pk = document.getElementById("rec-dt-pk");
const to_dt_pk = document.getElementById("to-dt-pk");
const addDisc = document.getElementById("add-disc");
const expDetItem = document.getElementById("exp-det-item");
const expDetAmt = document.getElementById("exp-det-amt");
const addExpDetails = document.getElementById("add-exp-details");
const sum_of_det = document.querySelector(".sum-of-det");
const diff_of_det = document.querySelector(".diff-of-det");
const grossIncomSnip = document.querySelector(".grossIncomSnip");
const grossExpSnip = document.querySelector(".grossExpSnip");
const add_Cat = document.querySelector("#add_Cat");
const add_date = document.querySelector("#add-date");
const av_fund = document.querySelector("#av-fund");
const bud_amnt = document.querySelector("#bud-amnt");
const bud_items = document.querySelector("#bud-items");
const add_daily = document.querySelector("#add_daily");
const dayListUl = document.querySelector("#dayListUl");
const dailyMinutes = document.querySelector("#dailyMinutes");
const daySelection = document.querySelector(".daySelection");
const showNav = document.querySelector(".show-nav");
const navTabs = document.querySelector(".nav-tabs");
const budOutAss = document.querySelector(".budget-output");
const budCrtButts = document.querySelector(".bud-crt-butts");
const totalText = document.querySelector(".totalText");
const totinc = document.querySelector(".totinc");
const totexpinc = document.querySelector(".totexpinc");
const totsaveinc = document.querySelector(".totsaveinc");
const saveInc = document.querySelector(".percentageSaveinc");
const remarksText = document.querySelector(".remarksText");
const wk_bud_items = document.querySelector("#wk-bud-items");
const wk_bud_amnt = document.querySelector("#wk_bud_amnt");
const weekListUl = document.querySelector("#weekList");
const totAllWeekly = document.querySelector("#totAllWeekly");
const addWeeklybutt = document.querySelector("#addWeeklybutt");
const wk_Cat = document.querySelector("#wk_Cat");
const weekSelection = document.querySelector("#week-selection");
const from_wk = document.querySelector("#from-wk");
const Frm_mt = document.querySelector("#Frm-mt");
const To_mt = document.querySelector("#To-mt");
const To_wk = document.querySelector("#To-wk");
const crt_mt_bgt = document.querySelector("#crt-mt-bgt");
const all_mt_fund = document.querySelector("#all-mt-fund");
const totalMonthlyBudget = document.querySelector("#totalMonthlyBudget");
const monthlybudgettotal = document.querySelector("#monthlybudgettotal");
const monthlySavings = document.querySelector("#monthlySavings");
const monthlyPerc = document.querySelector("#monthlyPerc");
const Frm_date = document.querySelector("#Frm-date");
const To_date = document.querySelector("#To-date");
const all_fund = document.querySelector("#all-fund");
const totwkAvInc = document.querySelector(".totwkAvInc");
const crt_wk_bgt = document.querySelector("#crt-wk-bgt");
const totweekSaved = document.querySelector(".totweekSaved");
const totExpwkInc = document.querySelector(".totExpwkInc");
const weeklypercentage = document.querySelector(".weeklypercentage");
const my_budget_list = document.querySelector(".my-budget-list");
const mt_Cat = document.querySelector("#mt_Cat");
const selectedMonth = document.querySelector("#selected-month");
const monthListUl = document.querySelector("#monthList");
const annualListUl = document.querySelector("#annualList");
const mt_bud_items = document.querySelector("#mt-bud-items");
const mt_bud_amnt = document.querySelector("#mt-bud-amnt");
const addMonthlyButt = document.querySelector("#addMonthlyButt");
const totAllWeeklySummary = document.querySelector("#totAllWeeklySummary");
const yr_bud_amnt = document.querySelector("#yr-bud-amnt");
const yr_bud_items = document.querySelector("#yr-bud-items");
const addAnnualButt = document.querySelector("#addAnnualButt");
const totAlAnnual = document.querySelector("#totAlAnnual");
const yr_Cat = document.querySelector("#yr_Cat");
const slct_yr = document.querySelector("#slct-yr");
const annualQuarterPicker = document.querySelector("#annualQuarterPicker");
const from_qtr_yr = document.querySelector("#from-qtr-yr");
const To_qtr_yr = document.querySelector("#To-qtr-yr");
const from_half_yr = document.querySelector("#from-half-yr");
const To_half_yr = document.querySelector("#To-half-yr");
const FrmA_pd = document.querySelector("#Frm-A-pd");
const ToA_pd = document.querySelector("#To-A-pd");
const crt_yr_bgt = document.querySelector("#crt-yr-bgt");
const totAlAnnualSummary = document.querySelector("#totAlAnnualSummary");
const AvAnnualFund = document.querySelector("#AvAnnualFund");
const all_yr_fund = document.querySelector("#all-yr-fund");
const totalAnnualExpense = document.querySelector("#totalAnnualExpense");
const annualSavings = document.querySelector("#annualSavings");
const annualPercentage = document.querySelector("#annualPercentage");
const remarksTextA = document.querySelector(".remarksTextA");
const remarksTextB = document.querySelector(".remarksTextB");
const remarksTextC = document.querySelector(".remarksTextC");
const returnBack = document.querySelectorAll(".return-back");
const go_to_Input = document.querySelectorAll(".go-to-Input");
const view_trk_butt = document.getElementsByClassName("view-trk-butt");
const sal_cnt_items = document.querySelector(".sal-cnt-items");
const nonsal_cnt_items = document.querySelectorAll(".nonsal-cnt-items");

const IncomeArray = JSON.parse(localStorage.getItem("IncomeArray")) || [];
const dayCatArray = JSON.parse(localStorage.getItem("dayCatArray")) || [];

const annualSummaryArray =
  JSON.parse(localStorage.getItem("annualSummaryArray")) || [];
const annualBudgetListArray =
  JSON.parse(localStorage.getItem("annualBudgetListArray")) || [];

const monthlySummaryArray =
  JSON.parse(localStorage.getItem("monthlySummaryArray")) || [];

const monthlyBudgetListArray =
  JSON.parse(localStorage.getItem("monthlyBudgetListArray")) || [];

const weeklBudgetListArray =
  JSON.parse(localStorage.getItem("weeklBudgetListArray")) || [];

const weekCatObjectArray =
  JSON.parse(localStorage.getItem("weekCatObjectArray")) || [];

const dailyBudgetListArray =
  JSON.parse(localStorage.getItem("dailyBudgetListArray")) || [];
const shoppingListArray =
  JSON.parse(localStorage.getItem("shoppingListArray")) || [];
const itemsArray = JSON.parse(localStorage.getItem("itemsArray")) || [];
const grossIncomSnipArray =
  JSON.parse(localStorage.getItem("grossIncomSnipArray")) || [];
const grossExpSnipArray =
  JSON.parse(localStorage.getItem("grossExpSnipArray")) || [];

const incomeCanvasArray =
  JSON.parse(localStorage.getItem("incomeCanvasArray")) || [];
const canvasMainSrc = JSON.parse(localStorage.getItem("canvasMainSrc")) || [];

const expCanvasArray = JSON.parse(localStorage.getItem("expCanvasArray")) || [];
const canvasExpSrc = JSON.parse(localStorage.getItem("canvasExpSrc")) || [];

const shopAmntCanvasArr =
  JSON.parse(localStorage.getItem("shopAmntCanvasArr")) || [];
const shopItemCanvasArr =
  JSON.parse(localStorage.getItem("shopItemCanvasArr")) || [];

const totalCanvas = JSON.parse(localStorage.getItem("totalCanvas")) || [];

var grossTotal = JSON.parse(localStorage.getItem("grossTotal"));
var grossExp = JSON.parse(localStorage.getItem("grossExp"));
var shopTot = JSON.parse(localStorage.getItem("shopTot"));
var allFund = JSON.parse(localStorage.getItem("allFund"));
var budgeTotal = JSON.parse(localStorage.getItem("budgeTotal"));
var shoppingBalance = JSON.parse(localStorage.getItem("shoppingBalance"));
var budgetFund = JSON.parse(localStorage.getItem("budgetFund"));
var BudgetBalance = JSON.parse(localStorage.getItem("BudgetBalance"));
var percSave = JSON.parse(localStorage.getItem("percSave"));
var days = JSON.parse(localStorage.getItem("days"));
var halfPicks = JSON.parse(localStorage.getItem("halfPicks"));
var quarter = JSON.parse(localStorage.getItem("quarter"));
var weeks = JSON.parse(localStorage.getItem("weeks"));

var weekbudgeTotal = JSON.parse(localStorage.getItem("weekbudgeTotal"));
var weekbudgetFund = JSON.parse(localStorage.getItem("weekbudgetFund"));
var weeklyPercSave = JSON.parse(localStorage.getItem("weeklyPercSave"));
var weekBalance = JSON.parse(localStorage.getItem("weekBalance"));

var MonthylyPercSave = JSON.parse(localStorage.getItem("MonthylyPercSave"));
var monthlybudgetFund = JSON.parse(localStorage.getItem("monthlybudgetFund"));
var monthTotal = JSON.parse(localStorage.getItem("monthTotal"));
var monthlyBalance = JSON.parse(localStorage.getItem("monthlyBalance"));
var weekBalance = JSON.parse(localStorage.getItem("weekBalance"));
var canvasObject = JSON.parse(localStorage.getItem("canvasObject"));
var eventdays = JSON.parse(localStorage.getItem("eventdays"));

var annualPercSave = JSON.parse(localStorage.getItem("annualPercSave"));
var availableAnnualFund = JSON.parse(
  localStorage.getItem("availableAnnualFund")
);
var annualTotal = JSON.parse(localStorage.getItem("annualTotal"));
var annualBalance = JSON.parse(localStorage.getItem("annualBalance"));
var weekBalance = JSON.parse(localStorage.getItem("weekBalance"));

var ratingText = JSON.parse(localStorage.getItem("ratingText"));
var weekRatingText = JSON.parse(localStorage.getItem("weekRatingText"));
var monthRatingText = JSON.parse(localStorage.getItem("monthRatingText"));
var annualRatingText = JSON.parse(localStorage.getItem("annualRatingText"));

window.addEventListener("load", () => {
  //list of all incomes
  IncomeArray.forEach((IncomeObject) => {
    listOfIncome.innerHTML += IncomeListFnx(IncomeObject);
    income_items_list.innerHTML += IncomeListFnx(IncomeObject);
  });

  itemsArray.forEach((ExpenseDetailObject) => {
    listOfExpenses.innerHTML += expenseObjFnx(ExpenseDetailObject);
  });
  shoppingListArray.forEach((shoppingObject) => {
    outputlistItems.innerHTML += shoppingListFucntion(shoppingObject);
  });

  dailyBudgetListArray.forEach((BudgetObject) => {
    dayListUl.innerHTML += BudgetListFucntion(BudgetObject);
  });

  weeklBudgetListArray.forEach((WeeklyBudgetObject) => {
    weekListUl.innerHTML += weeklyListFucntion(WeeklyBudgetObject);
  });

  monthlyBudgetListArray.forEach((monthlyBudgetObject) => {
    monthListUl.innerHTML += monthlyBudgetListFunction(monthlyBudgetObject);
  });

  annualBudgetListArray.forEach((annualBudgetObject) => {
    annualListUl.innerHTML += annualBudgetListFunction(annualBudgetObject);
  });

  annualSummaryArray.forEach((anualCatObject) => {
    totAlAnnualSummary.innerHTML = annualSummaryFucntion(anualCatObject);
  });

  dayCatArray.forEach((dayCatObject) => {
    dailyMinutes.innerHTML = `
    <section class="minuteMenu">
      <p class = "minuteTexts"> <span>→</span>  Category: ${dayCatObject.add_Cat}</p>
      <p class = "minuteTexts"> <span>→</span>  Date: ${dayCatObject.add_date}</p>
      <p class = "minuteTexts"> <span>→</span>  day: ${days}</p>
    </section>`;
  });
  weekCatObjectArray.forEach((weekCatObject) => {
    totAllWeeklySummary.innerHTML = weeklySummaryFucntion(weekCatObject);
  });

  monthlySummaryArray.forEach((monthlyCatObject) => {
    totAllMonthlySummary.innerHTML = monthlySummaryFucntion(monthlyCatObject);
  });

  shopDiff.innerText = `$${shoppingBalance}USD`;
  totAnualInc.innerText = `$${grossTotal} USD`;
  sum_of_det.innerText = `$${grossExp} USD`;
  totalExp.innerText = `$${shopTot} USD`;
  alt_funt.innerText = `$${allFund}USD`;

  saveInc.innerText = `${percSave}%`;
  totinc.innerText = `$${budgetFund}USD`;
  totexpinc.innerText = `$${budgeTotal} USD`;

  remarksText.innerText = ratingText;
  remarksTextA.innerText = weekRatingText;
  remarksTextB.innerText = monthRatingText;
  remarksTextC.innerText = annualRatingText;

  totsaveinc.innerText = `$${BudgetBalance}USD`;

  totExpwkInc.innerText = `$${weekbudgeTotal} USD`;
  totwkAvInc.innerText = `$${weekbudgetFund}USD`;
  totweekSaved.innerText = `$${weekBalance}USD`;
  weeklypercentage.innerText = `${weeklyPercSave}%`;

  monthlybudgettotal.innerText = `$${monthTotal} USD`;
  totalMonthlyBudget.innerText = `$${monthlybudgetFund}USD`;
  monthlySavings.innerText = `$${monthlyBalance}USD`;
  monthlyPerc.innerText = `${MonthylyPercSave}%`;

  totalAnnualExpense.innerText = `$${annualTotal} USD`;
  AvAnnualFund.innerText = `$${availableAnnualFund}USD`;
  annualSavings.innerText = `$${annualBalance}USD`;
  annualPercentage.innerText = `${annualPercSave}%`;

  incomeFnx();
  expenditureFnx();
  shopingFnx();
  budgetChartFnx();
});

const timeStamp = new Date().toLocaleString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});
