const BASE_URL =  "https://v6.exchangerate-api.com/v6/fda0a5513519cd6f19c93d54/latest/USD";

const getCurrencyCodes = async () =>{
    console.log ('Getting Currency Codes');
    getdata = await fetch(BASE_URL);
    data = await getdata.json();
    cur = data.conversion_rates.PKR;
    bel = 5*cur
    console.log(bel);
}