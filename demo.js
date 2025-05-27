const arr1 = [-3,-2,-1];
const arr2 = [0,1,2,3];

const addArrays = (arr1, arr2) => {
    const result = [...arr1,...arr2];
    return result;
}

const addArrayV2 = () => [...arr1, ...arr2];
// console.log(addArrays()); // [-3, -2, -1, 0, 1, 2, 3]

const userData = {
    name: "shubharaj subedi",
    age: 22,
    email: "shubharajsubedi8@gmail.com",
    address: "Kathmandu",
    phone: null,
    isActive: false,
    hobbies: undefined
}


const apiRouter = {
    status: 404,
    message:"not found",
    data:{}
}

const thisisFinalUderData ={}
const populationData = ()=>  {
    if (apiRouter.status === 200) {
       thisisFinalUderData = apiRouter
    }else{
        thisisFinalUderData=userData
    }
}

console.log(populationData()); // { name: 'shubharaj subedi', age: 22, email: '

    // const filterFalsyValues =()=> {
    //     const finalUserData = {}
    //     for (let key in userData) {
    //         if (userData[key]) {
    //             finalUserData[key] = userData[key];
    //         }
            
    //     }
    //     return finalUserData;
    // }


// console.log(filterFalsyValues()); // { name: 'shubharaj subedi', age: 22, email: '










