'use client';
import React from 'react';
import useOrderHook from '@/hooks/useOrder.hook';

const OrdersList = () => {
    const { orders } = useOrderHook();

    return (
        <>
            <div className={'max-x-lg mx-auto'}>
                {
                    orders.map(({ _id, customer, price, address}) => (
                        <div key={`${_id}-${Math.random()}`} className={'p-2 rounded border-black border my-2'}>
                            <p>Customer: {customer}</p>
                            <p>Price: {price}</p>
                            <p>Address: {address}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default OrdersList;

