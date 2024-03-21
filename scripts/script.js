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
    breakdownElement.innerHTML = '<h4>Sales Breakdown:</h4>'; //how to add stackic info thru js

    const list = document.createElement('ul');

    salesArray.forEach(sales => {
        const listItem = document.createElement('li');

        listItem.textContent = `${sales.name}: $${sale.amount} x ${sale.quantity}`;

        list.appendChild(listItem);
        
    });

    breakdownElement.appendChild(list);

}
