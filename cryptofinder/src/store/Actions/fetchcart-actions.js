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



        var Tb = JSON.parse(JSON.stringify(transformedData));
        // console.log(Tb);
        // const sum = transformedData.map((item, index) => {
        // const T = item.price * item.amount;
        // return T;
        // 
        // })
        // const totalPrice = sum.reduce((partialSum, a) => partialSum + a, 0); //41291
        // const Quantity = transformedData.length;



        // { id: 0, amount: 1, name: 'Bitcoin', price: 19325 }
        // { id: 0, amount: 1, name: 'Bitcoin', price: 19325 }
        // { id: 1, amount: 1, name: 'Ethereum', price: 1324 }
        // { id: 1, amount: 1, name: 'Ethereum', price: 1324 }

        // [{ id: 0, amount: 2, name: 'Bitcoin', price: 19325 }]
        var ourArray = [];
        // console.log(ourArray);
        for (var i = 0; i < Tb.length; i++) {
            for (var j = 0; j < Tb[i].length; j++) {
                var updatedItems = [];
                // console.log(i);
                // console.log(j);
                if (Tb[i].name === Tb[j].name) {
                    var updatedItem = {
                        ...Tb[j],
                        amount: Tb[j].amount++
                    };
                    updatedItems.push(updatedItem);
                } else {
                    updatedItems.push(Tb[j]);
                }
            }
        }
        console.log(updatedItems);
        console.log(ourArray);






        //     const existingCartItem = transformedData[existingCartItemIndex];
        //     let updatedItems;
        //     if (existingCartItem) {
        //         const updatedItem = {
        //             ...existingCartItem,
        //             amount: existingCartItem.amount + amount
        //         };
        //         updatedItems = [...transformedData];
        //         updatedItems[existingCartItemIndex] = updatedItem;
        //     }
        //     else {
        //         updatedItems = transformedData.concat(action.payload);
        //     }
        //     return {
        //         items: updatedItems,
        //         totalAmount: totalPrice,`
        //         quantities: Quantity
        //     };

        // }
        // getInfo();

    }
);











//
//
//
// import { createAsyncThunk } from '@reduxjs/toolkit';
//
// export const fetchWalletData = createAsyncThunk(
    // 'wallet/fetchWallet',
    // async () => {
        // const response = await fetch(`https://crypto-44df7-default-rtdb.firebaseio.com/cart.json`);
        // if (!response.ok) throw new Error();
        // const data = await response.json();
        // const transformedData = [];
//
        // for (const key in data) {
            // const dato = {
                // id: key,
                // ...data[key],
            // };
//
            // transformedData.push(dato);
        // }
        // console.log(transformedData);
        // return transformedData;
    // }
// );
//
// 