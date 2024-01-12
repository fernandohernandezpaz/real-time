import {ChangeEvent, FormEvent, useState} from 'react';

const InitialData = {
    customer: '',
    address: '',
    price: 0
};

const useCreateOrderHook = () => {
    const [data, setData] = useState(InitialData);
    const handleOnChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;
        setData((preData) => ({...preData, [name]: value}));
    }
    const handleOnSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (!data.address || !data.customer || !data.price) {
            return;
        }

        try {
            await fetch('http://localhost:3001/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            setData(InitialData);
        } catch (error) {
            console.error(error);
        }

    };

    return {
        handleOnChange,
        handleOnSubmit,
        data,
    }
}

export default useCreateOrderHook;