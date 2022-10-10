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


        const sum = transformedData.map((item) => {
            const T = item.price * item.amount;
            return T;
        })
        //Total Price
        const totalPrice = sum.reduce((partialSum, a) => partialSum + a, 0);

        //Qunatity
        const quantity = transformedData.length;


        //Deep clone is required
        var Tb = JSON.parse(JSON.stringify(transformedData));

        let new_obj = {}
        // or
        // let new_obj = new Object();
        for (let transaction of Tb) {
            if (new_obj[transaction.name]) {

                new_obj[transaction.name].amount += transaction.amount;
            } else {
                new_obj[transaction.name] = { ...transaction }
            }

        }
        let newArr = Object.values(new_obj);

        return {
            newArr,
            totalPrice,
            quantity
        }


    }
);


