const  formateCurrency = (num) => {
    return "₹ " + Number(num.toFixed(1)).toLocaleString() + " ";
}
export default formateCurrency;