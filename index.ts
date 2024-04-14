import inquirer from "inquirer";

const currency:any = {
    USD:1,
    EUR:0.97,
    GBP:0.76,
    INR:74.57,
    PRK:280,
};
let user_answer:any = await inquirer.prompt([
    {
        name:"from",
        message:"Enter your currency",
        type:"list",
        choices:['USD','EUR','GBP','INR','PRK']
    },
    {
        name:"to",
        message:"Enter to currency",
        type:"list",
        choices:['USD','EUR','GBP','INR','PRK']
    },
    {
        name:"amount",
        message:"Enter your amount",
        type:"number"
    }
])

let fromCurrency = currency[user_answer.from];
let toCurrency = currency[user_answer.to];
let amount1 = user_answer.amount;
let baseCurrency = amount1 / fromCurrency;
let currencyConverter = baseCurrency * toCurrency;
console.log(currencyConverter);



