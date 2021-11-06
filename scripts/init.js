const ecommerceApp = {};

ecommerceApp.url = 'https://fakestoreapi.com/products';

ecommerceApp.products = '';
ecommerceApp.callApi = () => {
    fetch(ecommerceApp.url)
        .then(res=>res.json())
        .then(json=> {
            ecommerceApp.products = json;

            
            
        })
        .catch(function(error) {
            console.log(error);
        });
}



ecommerceApp.init = function() {
    ecommerceApp.callApi();
}

ecommerceApp.init()