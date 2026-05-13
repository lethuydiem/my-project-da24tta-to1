// 1. Cơ sở dữ liệu sản phẩm (Đã thêm mô tả chi tiết)
const productDatabase = [
    { 
        id: 1, 
        name: "Hoa cúc trắng", 
        price: 200000, 
        img: "../assets/images/hoa-cuc-trang.jpg", 
        productLink:"detail.html",
        desc: "Hoa cúc trắng mang vẻ đẹp tinh khôi và thuần khiết, là biểu tượng của sự chân thành và lòng hiếu thảo trong văn hóa Việt Nam. Với những cánh hoa nhỏ xếp khít nhau bao quanh nhị vàng rực rỡ, loài hoa này mang lại cảm giác bình yên và thư thái cho bất kỳ không gian nào. Trong phong thủy, hoa cúc trắng còn tượng trưng cho sự thanh cao, giúp xua tan những năng lượng tiêu cực và mang lại may mắn cho gia chủ. Sản phẩm của chúng tôi được tuyển chọn kỹ lưỡng từ những vườn hoa uy tín nhất tại Đà Lạt, đảm bảo độ tươi mới và giữ được hương thơm dịu nhẹ trong thời gian dài. Bạn có thể dùng hoa cúc trắng để cắm bình trang trí phòng khách, bàn làm việc hoặc làm quà tặng ý nghĩa cho người thân trong các dịp lễ. Mỗi đóa hoa là một lời chúc sức khỏe và bình an gửi đến người nhận. Chúng tôi cam kết hoa tươi trên 7 ngày nếu được chăm sóc đúng cách trong môi trường thoáng mát."
    },
    { 
        id: 2, 
        name: "Hoa hồng nhung", 
        price: 150000, 
        img: "../assets/images/hoa-hong-nhung.jpg", 
        productLink:"detail.html",
        desc: "Hoa hồng nhung từ lâu đã được mệnh danh là nữ hoàng của các loài hoa nhờ sắc đỏ rực rỡ và hương thơm nồng nàn quyến rũ. Cánh hoa dày, mịn màng như nhung, mang lại vẻ đẹp sang trọng và đẳng cấp cho mọi không gian trang trí. Đây là món quà hoàn hảo nhất để thể hiện tình yêu nồng cháy, sự lãng mạn và lòng ngưỡng mộ sâu sắc đối với người phụ nữ bạn yêu thương. Sản phẩm hoa hồng nhung tại cửa hàng được chăm sóc theo quy trình hữu cơ nghiêm ngặt, không sử dụng hóa chất bảo quản độc hại, giữ nguyên vẻ đẹp tự nhiên nhất. Hoa có kích thước bông lớn, cành chắc khỏe, dễ dàng phối hợp với nhiều loại lá phụ để tạo nên những bó hoa nghệ thuật đầy ấn tượng. Đặc biệt, dòng hoa hồng này có độ bền rất cao, phù hợp cho các dịp kỷ niệm ngày cưới, lễ tình nhân hoặc trang trí các buổi tiệc tối sang trọng dưới ánh nến."
    },
    { 
        id: 3, 
        name: "Hoa lưu ly", 
        price: 230000, 
        img: "../assets/images/hoa-luu-ly.jpg", 
        productLink:"detail.html",
        desc: "Hoa lưu ly, hay còn được biết đến với tên gọi tiếng Anh lãng mạn là 'Forget Me Not', mang sắc xanh huyền bí và thông điệp về một tình yêu thủy chung, vĩnh cửu. Những cụm hoa nhỏ nhắn, xinh xắn với sắc xanh đặc trưng tạo nên một vẻ đẹp dịu dàng và đầy sức cuốn hút. Loài hoa này thường gắn liền với những câu chuyện tình cảm động, nhắc nhở chúng ta luôn trân trọng những kỷ niệm bền chặt. Hoa lưu ly rất thích hợp để trang trí ban công, góc học tập hoặc những không gian nhỏ cần sự tinh tế. Sắc xanh của hoa giúp làm dịu mắt, giảm căng thẳng sau những giờ làm việc mệt mỏi. Sản phẩm được cung cấp dưới dạng chậu cây đã có sẵn nụ, giúp bạn dễ dàng chăm sóc và chứng kiến hoa nở rộ. Với khả năng thích nghi tốt, hoa lưu ly là lựa chọn tuyệt vời cho những người mới bắt đầu yêu thích việc trồng hoa tại nhà nhưng không có quá nhiều thời gian chăm bón cầu kỳ."
    },
    { 
        id: 4, 
        name: "Hoa tulip", 
        price: 180000, 
        img: "../assets/images/hoa-tulip.jpg", 
        productLink:"detail.html",
        desc: "Hoa tulip mang vẻ đẹp kiêu sa và hiện đại, là biểu tượng đặc trưng của đất nước Hà Lan xinh đẹp. Với hình dáng giống như một chiếc chén úp ngược, hoa tulip tượng trưng cho sự nổi tiếng, giàu có và một tình yêu hoàn hảo. Mỗi màu sắc của tulip lại mang một ý nghĩa riêng biệt, nhưng nhìn chung chúng đều đại diện cho sự tươi mới và khởi đầu tốt đẹp. Sản phẩm hoa tulip của chúng tôi được nhập khẩu trực tiếp và bảo quản trong môi trường lạnh chuyên dụng để giữ được độ tươi và màu sắc rực rỡ nhất. Cành hoa cứng cáp, lá xanh mướt tạo nên sự tương phản tuyệt vời với những cánh hoa rực rỡ. Tulip rất phù hợp để trang trí trong các không gian nội thất tối giản hoặc mang phong cách châu Âu hiện đại. Đặt một bình hoa tulip trên bàn ăn sẽ khiến không gian trở nên tràn đầy sức sống và sang trọng. Đây cũng là lựa chọn hàng đầu cho các bó hoa cầm tay của cô dâu trong ngày trọng đại nhờ sự thanh lịch và gọn gàng."
    },
    { 
        id: 5, 
        name: "Hoa hướng dương", 
        price: 340000, 
        img: "../assets/images/hoa-huong-duong.jpg", 
        productLink:"detail.html",
        desc: "Hoa hướng dương với sắc vàng rực rỡ luôn hướng về phía mặt trời, là biểu tượng mạnh mẽ của niềm hy vọng, sự kiên định và lòng trung thành. Những cánh hoa vàng óng ả bao quanh nhị nâu lớn tạo nên một vẻ đẹp đầy năng lượng và ấm áp. Tặng hoa hướng dương giống như gửi đi một thông điệp về sự khích lệ, tinh thần lạc quan và lời chúc mừng thành công rực rỡ. Chính vì thế, loài hoa này thường được ưu tiên lựa chọn trong các dịp lễ tốt nghiệp, khai trương hoặc mừng thọ. Sản phẩm hoa hướng dương của cửa hàng được tuyển chọn từ những giống hoa cao sản, bông to, đường kính lớn và cánh hoa dày dặn. Hoa có đặc tính rất bền và chịu được điều kiện thời tiết khắc nghiệt tốt hơn nhiều loài hoa khác. Chỉ cần một vài cành hướng dương đơn giản kết hợp cùng giấy gói mộc mạc cũng đủ tạo nên một món quà ấn tượng và đầy ý nghĩa. Hãy để sắc vàng của hướng dương làm bừng sáng không gian sống và tiếp thêm động lực cho ngày mới của bạn."
    },
    { 
        id: 6, 
        name: "Hoa cẩm tú cầu", 
        price: 220000, 
        img: "../assets/images/hoa-cam-tu-cau.jpg", 
        productLink:"detail.html",
        desc: "Hoa cẩm tú cầu gây ấn tượng bởi những đóa hoa hình cầu khổng lồ được kết hợp từ vô số cánh hoa nhỏ li ti như những cánh bướm. Điểm đặc biệt nhất của loài hoa này là khả năng đổi màu sắc tùy thuộc vào độ pH của đất, tạo nên các dải màu từ xanh lam, hồng phấn đến tím mơ màng. Cẩm tú cầu tượng trưng cho sự biết ơn và những cảm xúc chân thành xuất phát từ trái tim. Với vẻ đẹp bồng bềnh và lãng mạn, loài hoa này thường được sử dụng làm hoa chủ đạo trong các lễ cưới sang trọng hoặc trang trí sảnh khách sạn. Hoa cẩm tú cầu tại cửa hàng chúng tôi được cắt trực tiếp từ vườn vào sáng sớm để đảm bảo các cánh hoa vẫn giữ được độ mọng nước và màu sắc tươi tắn nhất. Do đặc tính ưa nước, hoa cần được cắm trong bình nhiều nước để duy trì độ tươi lâu. Đây là món quà tuyệt vời dành tặng cho những người có tâm hồn nghệ sĩ và yêu thích vẻ đẹp cổ điển, lãng mạn của những vùng đất ôn đới như Đà Lạt hay nước Pháp xa xôi."
    },
    { 
        id: 7, 
        name: "Hoa hải đường", 
        price: 380000, 
        img: "../assets/images/hoa-hai-duong.jpg", 
        productLink:"detail.html",
        desc: "Hoa hải đường là loài hoa quý thường nở rộ vào dịp Tết đến xuân về, mang theo ý nghĩa của sự giàu sang, phú quý và gia đình hòa hợp. Cánh hoa hải đường dày, bóng mượt với màu đỏ hồng thắm, bao bọc lấy nhị vàng tươi, trông vừa rực rỡ vừa sang trọng. Theo quan niệm truyền thống, trồng hoa hải đường trong nhà sẽ giúp gia chủ chiêu tài đón lộc, gắn kết tình cảm giữa các thành viên trong gia đình. Khác với nhiều loài hoa khác, hải đường mang một vẻ đẹp đằm thắm, không quá phô trương nhưng lại rất có chiều sâu. Sản phẩm của chúng tôi là những chậu hải đường được tạo dáng bonsai đẹp mắt, phù hợp để đặt tại phòng khách hoặc trước hiên nhà. Cây có sức sống mãnh liệt, ít sâu bệnh và có thể ra hoa liên tục nếu được chăm sóc tốt. Lá hải đường xanh đậm, dày dặn cũng là một điểm nhấn trang trí tuyệt vời ngay cả khi cây chưa nở hoa. Đây chắc chắn là món quà tết thượng hạng và đầy thành ý dành cho đối tác hoặc cấp trên để thắt chặt mối quan hệ."
    },
    { 
        id: 8, 
        name: "Hoa linh lan", 
        price: 999000, 
        img: "../assets/images/hoa-linh-lan.jpg", 
        productLink:"detail.html",
        desc: "Hoa linh lan, hay còn gọi là hoa chuông trắng (Lily of the Valley), là một trong những loài hoa hiếm và đắt đỏ nhất thế giới. Những đóa hoa nhỏ màu trắng tinh khôi hình chiếc chuông xinh xắn mọc dọc theo cuống hoa, tỏa ra hương thơm thanh khiết, sang trọng mà không loài hoa nào có được. Linh lan là biểu tượng của sự trở về của hạnh phúc và vẻ đẹp của sự khiêm nhường. Do mùa vụ ngắn và yêu cầu kỹ thuật chăm sóc cực kỳ khắt khe, hoa linh lan luôn nằm trong danh sách các loài hoa xa xỉ được giới thượng lưu săn đón. Đây là loài hoa yêu thích của các hoàng gia châu Âu và thường xuyên xuất hiện trong các đám cưới hoàng tộc. Sản phẩm hoa linh lan tại cửa hàng được nhập khẩu trực tiếp bằng đường hàng không, đảm bảo từng đóa hoa chuông vẫn giữ được hình dáng hoàn hảo và hương thơm nguyên bản. Với giá trị cao và vẻ đẹp độc bản, linh lan không chỉ là một bó hoa đơn thuần, mà còn là biểu tượng của sự tinh tế và đẳng cấp vượt trội dành cho những dịp trọng đại nhất trong đời."
    },
];
// Hàm render bám sát code gốc của bạn
function addProduct_v2(product) {
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item col-sm-3 g-4");

    const myDiv1 = document.createElement("div");
    myDiv1.setAttribute("class", "product-image");
    
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.img);
    productImg.setAttribute("alt", product.name);
    productImg.style.width = "100%"; 
    myDiv1.appendChild(productImg);

    const myDiv2 = document.createElement("div");
    myDiv2.setAttribute("class", "product-info text-center");

    const productName = document.createElement("p");
    productName.appendChild(document.createTextNode(product.name));

    const productPrice = document.createElement("p");
    productPrice.appendChild(document.createTextNode(product.price.toLocaleString() + " VND"));

    const productLink = document.createElement("a");
    productLink.appendChild(document.createTextNode("Xem chi tiết"));
    productLink.setAttribute("class", "btn btn-success");
    
    // Gắn ID vào link để trang detail có thể đọc
    productLink.setAttribute("href", product.productLink + "?id=" + product.id);

    myDiv2.appendChild(productName);
    myDiv2.appendChild(productPrice);
    myDiv2.appendChild(productLink);

    myDiv.appendChild(myDiv1);
    myDiv.appendChild(myDiv2);

    document.getElementById("product-list").appendChild(myDiv);
}

function loadProducts(products){
    for (let i = 0; i < products.length; i++) {
        addProduct_v2(products[i]);
    }
}