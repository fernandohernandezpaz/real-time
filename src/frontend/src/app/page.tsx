import OrdersList from '@/components/ordersList';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="font-bold text-2xl text-center mt-3">Orders</h1>
            <OrdersList/>
        </main>
    )
}
