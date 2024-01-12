'use client';
import useCreateOrderHook from '@/hooks/useCreateOrder.hook';

const orderCreateForm = () => {
    const {handleOnSubmit, handleOnChange, data} = useCreateOrderHook();

    return (
        <>
            <form
                onSubmit={handleOnSubmit}
                className={'bg-teal-900 rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col p-3 space-y-3 w-1/2'}
            >
                <input type="text" name={'customer'} onChange={handleOnChange} value={data.customer}
                       className={'bg-slate-300 p-2 outline-none'} autoComplete="off" placeholder={'customer'}/>

                <input type="text" name={'address'} onChange={handleOnChange} value={data.address}
                       className={'bg-slate-300 p-2 outline-none'} autoComplete="off" placeholder={'address'}/>
                <input type="text" name={'price'} onChange={handleOnChange} value={data.price}
                       className={'bg-slate-300 p-2 outline-none'} autoComplete="off" placeholder={'price'}/>

                <button type={"submit"} className={'py-2 rounded bg-slate-100'}>Submit</button>
            </form>
        </>
    );
}

export default orderCreateForm;