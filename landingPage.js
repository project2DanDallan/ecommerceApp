const ecommerceApp = {};

ecommerceApp.url = 'https://fakestoreapi.com/products';

ecommerceApp.products = '';
ecommerceApp.callApi = () => {
    fetch(ecommerceApp.url)
        .then(res=>res.json())
        .then(json=> {
            ecommerceApp.products = json;


            // WE ADD WHATEVER WE NEED TO THIS!
            ecommerceApp.consoleLog()

        })
        .catch(function(error) {
            console.log(error);
        });
}

ecommerceApp.consoleLog = function() {
    console.log(ecommerceApp.products)
}

ecommerceApp.init = function() {
    ecommerceApp.callApi();
}






const button = document.querySelector('.coolLoader')
const toggleRotate = function() {
    const border = document.querySelector('.buttonBorder')
    border.classList.toggle('rotate')
}
button.addEventListener('mouseover', function() {
    const border = document.querySelector('.buttonBorder')
    border.classList.toggle('rotate')
})
button.addEventListener('mouseout', function() {
    const border = document.querySelector('.buttonBorder')
    border.classList.toggle('rotate')
})





// const toggleRotate = function() {
//     const border = document.querySelector('.buttonBorder')
//     border.classList.toggle('rotate')
// }
// button.addEventListener('mouseover', toggleRotate())
// button.addEventListener('mouseout', toggleRotate())
