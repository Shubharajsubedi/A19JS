const customer = [
    {customerid : 1, name: 'John Doe', bought :[{id:2, name: 'Laptop', price: 1200}, {id:6, name: 'Mouse', price: 25}]},
    {customerid : 2, name: 'Asmit', bought :[{id:2, name: 'Laptop', price: 1200}, {id:7, name: 'Cat', price: 25}]},
    {customerid : 3, name: 'Tripal', bought :[{id:3, name: 'Keyboard', price: 1200}, {id:8, name: 'House', price: 25}]},
    {customerid : 4, name: 'Saroj', bought :[{id:4, name: 'touchpad', price: 1200}, {id:9, name: 'Land', price: 25}]},
    {customerid : 5, name: 'Aatish', bought :[{id:4, name: 'touchpad', price: 1200}, {id:10, name: 'TV', price: 25}]},
]
console.log("new feature addedS")
const customerAPIresponse = {
    status: 200,
    message: "Customer data fetched successfully",
    data: customer
};

const getproductname = ()=>{
    if (customerAPIresponse.status ===200){
        let boughtProducts = [];
        customerAPIresponse.data.forEach((customer)=>{
            customer.bought.map((item)=>{
                boughtProducts.unshift(item.name)
            })
        });
        return boughtProducts;
    }
};

console.log(getproductname());

const data = {
    laptop: 2,
    keyboard: 1,
    touchpad:2
};

const getproductcount = (productName) => {
    if (customerAPIresponse.status === 200) {
        let productCount = {};
        customerAPIresponse.data.forEach((customer) => {
            customer.bought.map((item) => {
                if (productCount[item.id]) {
                    productCount[item.name]+=1;
                }else{
                    productCount[item.name] = 1;
                }
            });
        });
        return productCount;
    }
}

console.log(getproductcount()); 
