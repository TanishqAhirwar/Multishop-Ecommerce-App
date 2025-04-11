export default function Orders() {
    const orders = [
        {
            id: "12345",
            date: "2025-03-01",
            status: "Delivered",
            total: 250.99,
            items: [
                { id: "1", name: "Wireless Headphones", quantity: 1, price: 99.99, image: "https://via.placeholder.com/50" },
                { id: "2", name: "Smartwatch", quantity: 1, price: 150.00, image: "https://via.placeholder.com/50" }
            ]
        },
        {
            id: "12346",
            date: "2025-03-05",
            status: "Shipped",
            total: 180.50,
            items: [
                { id: "3", name: "Bluetooth Speaker", quantity: 1, price: 80.50, image: "https://via.placeholder.com/50" },
                { id: "4", name: "Gaming Mouse", quantity: 1, price: 100.00, image: "https://via.placeholder.com/50" }
            ]
        }
    ];

    return (
        <div className="min-h-screen p-4">
            <div className="max-w-6xl mx-auto bg-gray-50 shadow-lg rounded-lg p-4">
                <h4 className="text-sm font-semibold mb-3">My Orders</h4>
                {orders.length === 0 ? (
                    <p className="text-center text-gray-500 text-sm">No orders found.</p>
                ) : (
                    <div className="space-y-3">
                        {orders.map(order => (
                            <div key={order.id} className="border p-3 rounded-md shadow-md">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h6 className="text-sm font-semibold">Order #{order.id}</h6>
                                        <p className="text-gray-500 text-xs">Placed on: {new Date(order.date).toLocaleDateString()}</p>
                                    </div>
                                    <p className={`text-xs font-semibold px-2 py-1 rounded-full ${order.status === "Delivered" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"}`}>
                                        {order.status}
                                    </p>
                                </div>
                                <div className="mt-2">
                                    {order.items.map(item => (
                                        <div key={item.id} className="flex items-center gap-3 border-b pb-2 mb-2">
                                            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
                                            <div>
                                                <h5 className="text-xs font-medium">{item.name}</h5>
                                                <p className="text-gray-500 text-xs">Qty: {item.quantity} | Price: ${item.price.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-2 text-gray-700 font-semibold text-sm">
                                    <p>Total: ${order.total.toFixed(2)}</p>
                                    <button className="bg-yellow-300 text-dark text-xs px-2 py-2 rounded-md hover:bg-yellow-200">View Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
