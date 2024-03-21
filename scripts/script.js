//info typically found on json file
const furnitureItems = [];
const monthlySales = [
    { name: 'Oak dining table', amount: 500, quantity: 2},
    { name: 'Leather Sofa', amount: 800, quantity: 1},
    { name: 'Modern Armchair', amount: 300, quantity: 3}
];


function calcTotalSales(salesArray){
    return salesArray.reduce((total, sale) => total + (sale.amount * sale.quantity), 0);
}

function displaySalesBreakdown(salesArray){

    const breakdownElement = document.getElementById('sales-breakdown-results');
    breakdownElement.innerHTML = '<h4>Sales Breakdown:</h4>'; //how to add static info thru js

    const list = document.createElement('ul');

    salesArray.forEach(sales => {
        const listItem = document.createElement('li');

        listItem.textContent = `${sales.name}: $${sales.amount} x ${sales.quantity}`;

        list.appendChild(listItem);
        
    });

    breakdownElement.appendChild(list);

}

class FurnitureItem {
    constructor(name, category, price){
        this.name = name;
        this.category = category;
        this.price = price;
    }
    displayInfo(){
        return `${this.name}, Category: ${this.category}, Price: $${this.price}`
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const displayArrayAsList = (array, elementID) => {
        const listElement = document.getElementById(elementID);
        listElement.innerHTML = '';

        array.forEach(item =>{
            const listItem = document.createElement('div');
            listItem.textContent = item.displayInfo ? item.displayInfo : item;
            listElement.appendChild(listItem);
        })
    }

    document.getElementById('sales-report-result').innerHTML = `<h4>Total Sales: $${calcTotalSales(monthlySales)}</h4>`
    displaySalesBreakdown(monthlySales);

    document.getElementById('add-furniture-btn').onclick = ( )=> {
        const name = document.getElementById('furniture-name-input').value;
        const category = document.getElementById('furniture-category-select').value;
        const price = parseFloat(document.getElementById('furniture-price-input').value);

        const furniture = new FurnitureItem (name, category, price);
        furnitureItems.push(furniture);

        displayArrayAsList(furnitureItems, 'furniture-catelog-reults');
    }
})