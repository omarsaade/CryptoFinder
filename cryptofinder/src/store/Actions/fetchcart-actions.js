import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWalletData = createAsyncThunk(
    'wallet/fetchWallet',
    async () => {
        const response = await fetch(`https://crypto-44df7-default-rtdb.firebaseio.com/cart.json`);
        if (!response.ok) throw new Error();
        const data = await response.json();
        const transformedData = [];

        for (const key in data) {
            const dato = {
                id: key,
                ...data[key],
            };

            transformedData.push(dato);
        }



        //                Deep clone
        var Tb = JSON.parse(JSON.stringify(transformedData));


        let new_obj = {}
        for (let transaction of Tb) {
            if (new_obj[transaction.name]) {

                new_obj[transaction.name].amount += transaction.amount;
            } else {
                new_obj[transaction.name] = { ...transaction }
            }
        }
        // console.log(new_obj);
        let new_arr = Object.values(new_obj)
        console.log(new_arr);





        // console.log("Afterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");


        // const l = [
        //     { id: 0, amount: 3, name: 'Bitcoin', price: 19592 },
        //     { id: 0, amount: 2, name: 'Etherum', price: 19592 },
        //     { id: 3, amount: 1, name: 'USD Coin', price: 1 },
        //     { id: 4, amount: 2, name: 'BNB', price: 286 },

        // ];





        // const sum = transformedData.map((item, index) => {
        //     const T = item.price * item.amount;
        //     return T;
        // })
        // const totalPrice = sum.reduce((partialSum, a) => partialSum + a, 0); //41291
        // const Quantity = transformedData.length;

        // (4)[{… }, {… }, {… }, {… }]
        // { id: 0, amount: 1, name: 'Bitcoin', price: 19592 }
        // { id: 0, amount: 1, name: 'Bitcoin', price: 19592 }
        // { id: 1, amount: 1, name: 'Ethereum', price: 1322 }
        // { id: 1, amount: 1, name: 'Ethereum', price: 1322 }



    }
);


