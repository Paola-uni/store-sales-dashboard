const statusFilter = document.getElementById("statusFilter");
const ordersList = document.getElementById("ordersList");

function displayOrders() {
    const selectedStatus = statusFilter.value;

    const filteredOrders = orders.filter(order => {
        return selectedStatus === "All Statuses" ||
               order.status === selectedStatus;
    });

    ordersList.innerHTML = "";

    filteredOrders.forEach(order => {
        const li = document.createElement("li");

        li.textContent = `Order #${order.id} - ${order.status}`;

        ordersList.appendChild(li);
    });
}

statusFilter.addEventListener("change", displayOrders);

displayOrders();