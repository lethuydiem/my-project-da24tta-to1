// File: js/lib.js
function addProduct(imageSrc, imageAlt, name, price, linkHref) {
    const productItem = document.createElement("div");
    productItem.className = "product-item";

    const productImage = document.createElement("div");
    productImage.className = "product-image";
    
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = imageAlt;
    productImage.appendChild(img);

   
    const productInfo = document.createElement("div");
    productInfo.className = "product-info";

    const nameElement = document.createElement("p"); // Bạn có thể dùng h3 hoặc p tùy CSS
    nameElement.textContent = name;

    const priceElement = document.createElement("p");
    priceElement.textContent = price;

    const linkElement = document.createElement("a");
    linkElement.href = linkHref;
    linkElement.textContent = "Xem chi tiết";

    // Lắp ráp phần thông tin
    productInfo.appendChild(nameElement);
    productInfo.appendChild(priceElement);
    productInfo.appendChild(linkElement);

    // Lắp ráp toàn bộ vào thẻ cha
    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    // Gắn vào div có sẵn trên giao diện
    const container = document.getElementById("product-list");
    if (container) {
        container.appendChild(productItem);
    }
}