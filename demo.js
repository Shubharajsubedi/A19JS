// const customer = [
//     {customerid : 1, name: 'John Doe', bought :[{id:2, name: 'Laptop', price: 1200}, {id:6, name: 'Mouse', price: 25}]},
//     {customerid : 2, name: 'Asmit', bought :[{id:2, name: 'Laptop', price: 1200}, {id:7, name: 'Cat', price: 25}]},
//     {customerid : 3, name: 'Tripal', bought :[{id:3, name: 'Keyboard', price: 1200}, {id:8, name: 'House', price: 25}]},
//     {customerid : 4, name: 'Saroj', bought :[{id:4, name: 'touchpad', price: 1200}, {id:9, name: 'Land', price: 25}]},
//     {customerid : 5, name: 'Aatish', bought :[{id:4, name: 'touchpad', price: 1200}, {id:10, name: 'TV', price: 25}]},
// ]

// const customerAPIresponse = {
//     status: 200,
//     message: "Customer data fetched successfully",
//     data: customer
// };

// const getproductname = ()=>{
//     if (customerAPIresponse.status ===200){
//         let boughtProducts = [];
//         customerAPIresponse.data.forEach((customer)=>{
//             customer.bought.map((item)=>{
//                 boughtProducts.unshift(item.name)
//             })
//         });
//         return boughtProducts;
//     }
// };

// console.log(getproductname());

// const data = {
//     laptop: 2,
//     keyboard: 1,
//     touchpad:2
// };

// const getproductcount = (productName) => {
//     if (customerAPIresponse.status === 200) {
//         let productCount = {};
//         customerAPIresponse.data.forEach((customer) => {
//             customer.bought.map((item) => {
//                 if (productCount[item.id]) {
//                     productCount[item.name]+=1;
//                 }else{
//                     productCount[item.name] = 1;
//                 }
//             });
//         });
//         return productCount;
//     }
// }

// console.log(getproductcount()); 

const PotentialMatch = [
    {
        id: 1,
        Fname: 'shubharaj',
        Lname: 'subedi',
        gender: 'male',
        age: 22,
        martialStatus: 'single',
        location:[{
            country: 'Nepal',
            city: 'Kathmandu',
        },
         {
            country: 'Nepal',
            city: 'Kathmandu',
        }] 
    },
    {
        id: 2,
        Fname: 'Asmit',
        Lname: 'Chaulagain',
        gender: 'female',
        age: 28,
        martialStatus: 'single',
        location: [ {
            country: 'America',
            city: 'bhaktapur',
        }, {
            country: 'America',
            city: 'Kavre',
        }]
    },
    {
        id: 3,
        Fname: 'Tripal',
        Lname: 'Bayalkoti',
        gender: 'male',
        age: 35,
        martialStatus: 'married',
        partnerName: 'Sujita Achhami',
        location: [  { country: 'Nepal', city: 'Kathmandu',
        },
        { country: 'America', city: 'Newyork', }]
    }
       
];

const shadiwebAPIresponse = {
    status: 200,
    message: "User data fetched successfully",
    data: PotentialMatch,
}

const getMyPerfectMatch = () => {
    if (shadiwebAPIresponse.status === 200) {
        const matches = shadiwebAPIresponse.data.filter(candidate => 
            candidate.gender === 'female' &&
            candidate.martialStatus === 'single' &&
            candidate.age > 20 &&
            candidate.age < 30 &&
            candidate.location.country === 'America'
        );
        if(matches.length) {
            matches.forEach(candidate => {
                console.log(`My perfect match is ${candidate.Fname} ${candidate.Lname} from ${candidate.currentLocation.city}, ${candidate.currentLocation.country}`);
            });
        } else {
            console.log("No perfect match found in America");
        }
        return matches;
    }
}

// getMyPerfectMatch();

const getCountryNames = () => {
    let countryNames = [];
    shadiwebAPIresponse.data.forEach(candidate => {
        candidate.location.forEach(loc => {
            if (!countryNames.includes(loc.country)) {
                countryNames.push(loc.country);
            }
        });
        const result = countryNames.filter((country, index) => {
        return countryNames.indexOf(country) === index}); 
    });
    return result;
            
   
};

console.log(getCountryNames());