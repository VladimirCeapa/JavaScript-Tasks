/**Create an array called shoppinglist and add some products you want to buy.
Write a function called sortAlphabet that sorts the shopping list alphabetically and displays it.
Write a function called lookupProduct that takes a product as an argument and returns its index in the list or a message if not found.
Write a function called addProduct that receives a product as an argument and if it is not already in the list adds it to the shopping list.
Write a function called removeProduct that takes a product as an argument and removes it from the shopping list.
Show both the initial list and the number of products in it and the final list and the number of products in it. */



let shoppinglist = ['kiwi', 'orange', 'strawberry', 'banana'];
let initialArray = shoppinglist.slice();

//sorts the shopping list alphabetically and displays it

function sortAlphabet(list) {
    console.log(list.sort());
}
sortAlphabet(shoppinglist);

//takes a product as an argument and returns its index in the list or a message if not found.
function lookupProduct(product) {
    let index = shoppinglist.includes(product);

    if (index) {
        return shoppinglist.indexOf(product);
    } else {
        console.log('Product not found');
    }
}


//product as an argument and if it is not already in the list adds it to the shopping list.
function addProduct(product) {
    shoppinglist.includes(product);
    if (!shoppinglist.includes(product)) {
        shoppinglist.push(product);
    }
}
addProduct('batat')

//product as an argument and removes it from the shopping list.
function removeProduct(product) {
    let index = shoppinglist.indexOf(product);
    if (index) {
        shoppinglist.splice(index, 1)
        return;
    } else {
        console.log('Error')
    }
}
removeProduct('kiwi');

//Show both the initial list and the number of products in it and the final list and the number of products in it

console.log(`${initialArray} - initial Array  and the number of products ${initialArray.length} `);
console.log(`${shoppinglist} - Shopping list  and the number of products ${shoppinglist.length} `);