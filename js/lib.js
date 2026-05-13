// Dữ liệu sản phẩm ban đầu
const productDatabase = [
    { id: 1, name: "Hoa cúc trắng", price: 200000, img: "../assets/images/hoa-cuc-trang.jpg", productLink:"detail.html", desc: "Hoa cúc trắng mang vẻ đẹp tinh khôi..." },
    { id: 2, name: "Hoa hồng nhung", price: 150000, img: "../assets/images/hoa-hong-nhung.jpg", productLink:"detail.html", desc: "Hoa hồng nhung là nữ hoàng của các loài hoa..." },
    { id: 3, name: "Hoa lưu ly", price: 230000, img: "../assets/images/hoa-luu-ly.jpg", productLink:"detail.html", desc: "Hoa lưu ly - Forget Me Not thủy chung..." },
    { id: 4, name: "Hoa tulip", price: 180000, img: "../assets/images/hoa-tulip.jpg", productLink:"detail.html", desc: "Hoa tulip mang vẻ đẹp kiêu sa Hà Lan..." },
    { id: 5, name: "Hoa hướng dương", price: 340000, img: "../assets/images/hoa-huong-duong.jpg", productLink:"detail.html", desc: "Hoa hướng dương luôn hướng về mặt trời..." },
    { id: 6, name: "Hoa cẩm tú cầu", price: 220000, img: "../assets/images/hoa-cam-tu-cau.jpg", productLink:"detail.html", desc: "Hoa cẩm tú cầu tượng trưng cho lòng biết ơn..." },
    { id: 7, name: "Hoa hải đường", price: 380000, img: "../assets/images/hoa-hai-duong.jpg", productLink:"detail.html", desc: "Hoa hải đường mang lại phú quý ngày Tết..." },
    { id: 8, name: "Hoa linh lan", price: 999000, img: "../assets/images/hoa-linh-lan.jpg", productLink:"detail.html", desc: "Hoa linh lan xa xỉ và thanh khiết..." }
];

// Hàm hiển thị danh sách
function loadProducts(products) {
    const list = document.getElementById("product-list");
    if (!list) return;
    list.innerHTML = "";
    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "col-sm-6 col-md-4 col-lg-3 g-4";
        div.innerHTML = `
            <div class="card h-100 shadow-sm text-center">
                <img src="${product.img}" class="card-img-top" style="height:200px; object-fit:cover;">
                <div class="card-body">
                    <h5 class="fw-bold">${product.name}</h5>
                    <p class="text-danger fw-bold">${product.price.toLocaleString()} VND</p>
                    <div class="d-flex justify-content-center gap-1">
                        <a href="detail.html?id=${product.id}" class="btn btn-sm btn-success">Xem</a>
                        <button class="btn btn-sm btn-warning" onclick="openEditModal(${product.id})">Sửa</button>
                        <button class="btn btn-sm btn-danger" onclick="deleteProduct(${product.id})">Xóa</button>
                    </div>
                </div>
            </div>`;
        list.appendChild(div);
    });
}

// Logic Mở Modal
function openAddModal() {
    document.getElementById("productForm").reset();
    document.getElementById("edit-id").value = "";
    document.getElementById("modalTitle").innerText = "Thêm sản phẩm mới";
    new bootstrap.Modal(document.getElementById('productModal')).show();
}

function openEditModal(id) {
    const item = productDatabase.find(p => p.id === id);
    if(item) {
        document.getElementById("edit-id").value = item.id;
        document.getElementById("p-name").value = item.name;
        document.getElementById("p-price").value = item.price;
        document.getElementById("p-img").value = item.img;
        document.getElementById("p-desc").value = item.desc;
        document.getElementById("modalTitle").innerText = "Sửa sản phẩm";
        new bootstrap.Modal(document.getElementById('productModal')).show();
    }
}

// Xóa sản phẩm
function deleteProduct(id) {
    if(confirm("Xác nhận xóa?")) {
        const idx = productDatabase.findIndex(p => p.id === id);
        productDatabase.splice(idx, 1);
        loadProducts(productDatabase);
    }
}

// Chạy khi trang Page7 tải xong
document.addEventListener("DOMContentLoaded", () => {
    loadProducts(productDatabase);
    const form = document.getElementById("productForm");
    if(form) {
        form.onsubmit = function(e) {
            e.preventDefault();
            const idVal = document.getElementById("edit-id").value;
            const name = document.getElementById("p-name").value;
            const price = parseInt(document.getElementById("p-price").value);
            const img = document.getElementById("p-img").value || "../assets/images/default.jpg";
            const desc = document.getElementById("p-desc").value;

            if (idVal) {
                const idx = productDatabase.findIndex(p => p.id == idVal);
                productDatabase[idx] = { ...productDatabase[idx], name, price, img, desc };
            } else {
                const newId = productDatabase.length > 0 ? productDatabase[productDatabase.length - 1].id + 1 : 1;
                productDatabase.push({ id: newId, name, price, img, desc, productLink: "detail.html" });
            }
            loadProducts(productDatabase);
            bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
        };
    }
});