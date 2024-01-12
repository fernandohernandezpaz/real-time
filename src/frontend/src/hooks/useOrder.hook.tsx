import { useEffect, useState } from 'react';
import { socket } from '@/utils/socket';

interface Order {
    _id: string;
    customer: string;
    address: string;
    price: number;
    createdAt: string;
    updatedAt: string;
}

const GET_ORDERS_URL = 'http://localhost:3001/order';

const useOrderHook = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await fetch(GET_ORDERS_URL);
            const data: Order[] = await response.json();
            setOrders(data);
        };

        fetchOrders();
    }, []);

    useEffect(() => {
        socket.on('order-added', (newData: Order) => {
            setOrders((preData) => [...preData, newData]);
        });
    }, []);

    return {
        orders,
    };
}

export default useOrderHook;


