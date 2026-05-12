// 1. Cơ sở dữ liệu sản phẩm
const productDatabase = [
    { id: 1, name: "Hoa cúc trắng", price: 200000, img: "../assets/images/hoa-cuc-trang.jpg" },
    { id: 2, name: "Hoa hồng nhung", price: 150000, img: "../assets/images/hoa-hong-nhung.jpg" },
    { id: 3, name: "Hoa lưu ly", price: 230000, img: "../assets/images/hoa-luu-ly.jpg" },
    { id: 4, name: "Hoa tulip", price: 180000, img: "../assets/images/hoa-tulip.jpg" },
    { id: 5, name: "Hoa hướng dương", price: 340000, img: "../assets/images/hoa-huong-duong.jpg" },
    { id: 6, name: "Hoa cẩm tú cầu", price: 220000, img: "../assets/images/hoa-cam-tu-cau.jpg" },
    { id: 7, name: "Hoa hải đường", price: 380000, img: "../assets/images/hoa-hai-duong.jpg" },
    { id: 8, name: "Hoa linh lan", price: 999000, img: "../assets/images/hoa-linh-lan.jpg" },
];

// 2. Hàm thêm 1 sản phẩm vào giao diện
function addProduct(imgSrc, name, price, linkUrl) {
    // Tạo khung chứa cha (col-sm-3 để chia 4 cột trên 1 hàng)
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item col-sm-3");

    // --- Khối 1: Hình ảnh ---
    const myDiv1 = document.createElement("div");
    myDiv1.setAttribute("class", "product-image");
    
    const productImg = document.createElement("img");
    productImg.setAttribute("src", imgSrc);
    productImg.setAttribute("alt", name);
    productImg.style.width = "100%"; // Giữ ảnh vừa khung
    
    myDiv1.appendChild(productImg);

    // --- Khối 2: Thông tin sản phẩm ---
    const myDiv2 = document.createElement("div");
    myDiv2.setAttribute("class", "product-info text-center");

    // Tên sản phẩm
    const productName = document.createElement("p");
    const productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);

    // Giá sản phẩm
    const productPrice = document.createElement("p");
    const productPriceText = document.createTextNode(price + " VND");
    productPrice.appendChild(productPriceText);

    // Nút Xem chi tiết
    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("Xem chi tiết");
    productLink.appendChild(productLinkText);
    productLink.setAttribute("class", "btn btn-success"); // Chỉnh btn-success để có màu xanh lá
    productLink.setAttribute("href", "detail.html?id=" + linkUrl);

    // Lắp ráp khối thông tin
    myDiv2.appendChild(productName);
    myDiv2.appendChild(productPrice);
    myDiv2.appendChild(productLink);

    // Lắp ráp vào khung cha
    myDiv.appendChild(myDiv1);
    myDiv.appendChild(myDiv2);

    // Đưa vào vùng chứa trên HTML
    document.getElementById("product-list").appendChild(myDiv);
}

// 3. Hàm load toàn bộ mảng
function loadAllProducts() {
    const container = document.getElementById("product-list");
    container.innerHTML = ""; // Xóa dữ liệu cũ (nếu có)

    // Dùng vòng lặp for như ảnh cuối bạn gửi
    for (let i = 0; i < productDatabase.length; i++) {
        addProduct(
            productDatabase[i].img, 
            productDatabase[i].name, 
            productDatabase[i].price, 
            productDatabase[i].id
        );
    }
}