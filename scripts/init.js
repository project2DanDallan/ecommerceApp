// creating the ecommerceApp object
const ecommerceApp = {};

// storing our api url
ecommerceApp.url = 'https://fakestoreapi.com/products';

ecommerceApp.products = '';

// fetch and store data using api call
ecommerceApp.callApi = () => {
    fetch(ecommerceApp.url)
        .then(res=>res.json())
        .then(json=> {
            ecommerceApp.products = json;

            
            ecommerceApp.consoleLog()
            
            // if user is on product.html
            if(typeof ecommerceApp.checkProduct === "function") {
                // run the function only if function exists
                ecommerceApp.checkProduct()
            }
            
        })
        // catch and log any errors related to api call
        .catch(function(error) {
            console.log(error);
        });
}

// function to redirect the page to another file
ecommerceApp.redirect = function(page) {
    window.location.assign(`./${page}.html`);
}

// perform api call
ecommerceApp.init = function() {
    ecommerceApp.callApi();
    
}

// when the document is ready, call and init the app
ecommerceApp.init()