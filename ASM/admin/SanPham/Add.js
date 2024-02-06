// import { addProduct } from './CallAPI.js'; // Import hàm thêm sản phẩm từ file CallAPI.js
//
// // Lắng nghe sự kiện submit của form
// document.getElementById('addProductForm').addEventListener('submit', async function(event) {
//     event.preventDefault(); // Ngăn chặn việc gửi form một cách tự động
//
//     // Lấy giá trị từ các trường input trong form
//     const productName = document.getElementById('productName').value;
//     const category = document.getElementById('category').value;
//     const image = document.getElementById('image').value; // Lấy URL ảnh
//     const price = document.getElementById('price').value;
//
//     // Tạo đối tượng sản phẩm từ dữ liệu thu thập được
//     const productData = {
//         name: productName,
//         cate_id: category,
//         image: image,
//         price: parseFloat(price) // Chuyển giá thành số
//     };
//
//     try {
//         // Gọi hàm thêm sản phẩm từ file CallAPI.js
//         const newProduct = await addProduct(productData);
//         console.log('Sản phẩm đã được thêm:', newProduct);
//         // Thực hiện các hành động sau khi thêm sản phẩm thành công, ví dụ: chuyển hướng trang
//     } catch (error) {
//         console.error('Đã có lỗi xảy ra khi thêm sản phẩm:', error);
//         // Xử lý lỗi nếu có
//     }
// });


import { addProduct } from './CallAPI.js'; // Import hàm thêm sản phẩm từ file CallAPI.js

// Lắng nghe sự kiện submit của form
document.getElementById('addProductForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Ngăn chặn việc gửi form một cách tự động

    // Lấy giá trị từ các trường input trong form
    const productName = document.getElementById('productName').value;
    const category = document.getElementById('category').value;
    const image = document.getElementById('image').value; // Lấy URL ảnh
    const price = document.getElementById('price').value;

    // Tạo đối tượng sản phẩm từ dữ liệu thu thập được
    const productData = {
        name: productName,
        cate_id: category,
        image: image,
        price: parseFloat(price) // Chuyển giá thành số
    };

    try {
        // Gọi hàm thêm sản phẩm từ file CallAPI.js
        const newProduct = await addProduct(productData);
        console.log('Sản phẩm đã được thêm:', newProduct);

        // Hiển thị thông báo thành công
        document.getElementById('successMessage').style.display = 'block';

        // Xóa dữ liệu khỏi các trường nhập trong form
        document.getElementById('addProductForm').reset();

        // Thực hiện các hành động sau khi thêm sản phẩm thành công, ví dụ: chuyển hướng trang
    } catch (error) {
        console.error('Đã có lỗi xảy ra khi thêm sản phẩm:', error);
        // Xử lý lỗi nếu có
    }
});
