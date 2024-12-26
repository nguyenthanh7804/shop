let cart = [];

function addToCart(productName, price) {
    const product = {
        name: productName,
        price: price
    };
    cart.push(product);
    updateCartInfo();
    alert(`${productName} đã được thêm vào giỏ hàng!`);
}

function updateCartInfo() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    const totalItems = cart.length;
    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = totalPrice.toLocaleString() + ' VND';
}

function viewCart() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn hiện tại đang trống.");
    } else {
        let cartDetails = 'Giỏ hàng của bạn:\n\n';
        cart.forEach((product, index) => {
            cartDetails += `${index + 1}. ${product.name} - ${product.price.toLocaleString()} VND\n`;
        });
        const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
        cartDetails += `\nTổng: ${totalPrice.toLocaleString()} VND`;
        alert(cartDetails);
    }
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log("Thông tin liên hệ:");
    console.log("Tên: " + name);
    console.log("Email: " + email);
    console.log("Lời nhắn: " + message);

    alert("Cảm ơn bạn đã liên hệ với chúng tôi! Chúng tôi sẽ phản hồi sớm.");
});
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCartInfo();
    }
}

window.onload = loadCartFromLocalStorage;
window.onbeforeunload = saveCartToLocalStorage;
const products = [
    { name: "Táo", price: 30000, image: "./cam.jpg" },
    { name: "Chuối", price: 20000, image: "./chuoi.jpg" },
    { name: "Cam", price: 25000, image: "./tao.jpg" },
    { name: "Dưa Hấu", price: 40000, image: "./duahau.jpg" },
    { name: "Nho", price: 60000, image: "./nho.jpg" },
    { name: "Kiwi", price: 50000, image: "./wiki.jpg" },
    { name: "Lê", price: 35000, image: "./le.jpg" },
    { name: "Mận", price: 55000, image: "./man.jpg" },
    { name: "Xoài", price: 45000, image: "./xoai.jpg" },
    { name: "Dâu Tây", price: 70000, image: "./dautay.jpg" },
    { name: "Dưa Lưới", price: 80000, image: "./dualuoi.jpg" },
    { name: "Sầu Riêng", price: 150000, image: "./saurieng.jpg" },
    { name: "Bơ", price: 60000, image: "./bo.jpg" },
    { name: "Quýt", price: 30000, image: "./quyt.jpg" },
    { name: "Măng Cụt", price: 120000, image: "./mangcut.jpg" },
    { name: "Bưởi Da Xanh", price: 40000, image: "./buoi.jpg" },
    { name: "Hồng", price: 35000, image: "./hong.jpg" },
    { name: "Ổi", price: 30000, image: "./oi.jpg" },
    { name: "Chôm Chôm", price: 50000, image: "./chom.jpg" },
    { name: "Mẵng Cầu", price: 20000, image: "./mangcau.jpg" }
];

// Hàm hiển thị sản phẩm
function displayProducts() {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = ''; // Làm sạch danh sách hiện tại
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Giá: ${product.price.toLocaleString()} VND/kg</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Thêm vào giỏ</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Hàm thêm sản phẩm vào giỏ

function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    updateCartInfo();
    alert(`${productName} đã được thêm vào giỏ hàng!`);
}

function updateCartInfo() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    const totalItems = cart.length;
    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = totalPrice.toLocaleString() + ' VND';
}

// Hàm xem giỏ hàng
function viewCart() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn hiện tại đang trống.");
    } else {
        let cartDetails = 'Giỏ hàng của bạn:\n\n';
        cart.forEach((product, index) => {
            cartDetails += `${index + 1}. ${product.name} - ${product.price.toLocaleString()} VND\n`;
        });
        const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
        cartDetails += `\nTổng: ${totalPrice.toLocaleString()} VND`;
        alert(cartDetails);
    }
}

// Gọi hàm hiển thị sản phẩm khi trang tải
window.onload = displayProducts;
function searchProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const productList = document.querySelector('.product-list');
    productList.innerHTML = ''; // Xóa danh sách hiện tại

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchInput)
    );

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Giá: ${product.price.toLocaleString()} VND/kg</p>
                <button onclick="addToCart('${product.name}', ${product.price})">Thêm vào giỏ</button>
            `;
            productList.appendChild(productDiv);
        });
    } else {
        productList.innerHTML = `<p>Không tìm thấy sản phẩm nào.</p>`;
    }
}
function viewCart() {
    const cartTableBody = document.querySelector('#cart-table tbody');
    cartTableBody.innerHTML = ''; // Xóa nội dung hiện tại

    if (cart.length === 0) {
        cartTableBody.innerHTML = `<tr><td colspan="5">Giỏ hàng của bạn hiện tại đang trống.</td></tr>`;
    } else {
        let totalPrice = 0;

        cart.forEach((product, index) => {
            const totalItemPrice = product.price;
            totalPrice += totalItemPrice;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.price.toLocaleString()} VND</td>
                <td>1</td>
                <td>${totalItemPrice.toLocaleString()} VND</td>
                <td>
                    <button onclick="removeFromCart(${index})">Xóa</button>
                </td>
            `;
            cartTableBody.appendChild(row);
        });

        document.getElementById('cart-total-display').textContent = totalPrice.toLocaleString() + ' VND';
    }

    document.getElementById('cart-modal').style.display = 'block';
}

function closeCartModal() {
    document.getElementById('cart-modal').style.display = 'none';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartInfo();
    viewCart();
}

function checkout() {
    alert('Chức năng thanh toán đang được phát triển.');
    closeCartModal();
}
