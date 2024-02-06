// // EditProduct.js
//
// import { getProductById, updateProduct } from './CallAPI.js';
//
// // Hàm để hiển thị form sửa sản phẩm với thông tin của sản phẩm đã chọn
// export async function showEditForm(productId) {
//     try {
//         // Gọi API để lấy thông tin của sản phẩm cần sửa
//         const product = await getProductById(productId);
//
//         // Đảm bảo rằng sản phẩm đã được tìm thấy
//         if (!product) {
//             console.error("Không tìm thấy sản phẩm có ID:", productId);
//             return;
//         }
//
//         // Đổ dữ liệu từ sản phẩm vào các trường input của form sửa sản phẩm
//         document.getElementById('editProductName').value = product.name;
//         document.getElementById('editCategory').value = product.category;
//         document.getElementById('editPrice').value = product.price;
//         // Tương tự cho các trường dữ liệu khác
//
//         // Hiển thị form sửa sản phẩm
//         document.getElementById('editProductForm').style.display = 'block';
//     } catch (error) {
//         console.error("Đã có lỗi xảy ra khi lấy thông tin sản phẩm:", error);
//     }
// }
//
// // Hàm để cập nhật thông tin sản phẩm sau khi chỉnh sửa
// export async function updateProductInfo(productId, updatedData) {
//     try {
//         // Gọi API để cập nhật thông tin của sản phẩm
//         const updatedProduct = await updateProduct(productId, updatedData);
//         console.log('Thông tin sản phẩm đã được cập nhật:', updatedProduct);
//         // Hiển thị thông báo hoặc thực hiện các hành động sau khi cập nhật thành công
//     } catch (error) {
//         console.error('Đã có lỗi xảy ra khi cập nhật sản phẩm:', error);
//         // Xử lý lỗi nếu có
//     }
// }

import { getProductById, updateProduct } from './CallAPI.js';

document.addEventListener('DOMContentLoaded', async function() {
    // Lấy productId từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    // Lấy dữ liệu sản phẩm từ API và đổ vào form để chỉnh sửa
    await loadProductData(id);
});

// Hàm để lấy dữ liệu sản phẩm từ API và đổ vào form để chỉnh sửa
async function loadProductData(productId) {
    try {
        // Gọi API để lấy thông tin sản phẩm dựa trên productId
        const product = await getProductById(productId);

        // Đổ dữ liệu sản phẩm vào form để chỉnh sửa
        document.getElementById('productName').value = product.name;
        document.getElementById('category').value = product.cate_id;
        document.getElementById('price').value = product.price;
        // Đổ dữ liệu khác từ sản phẩm vào các trường form tương ứng

    } catch (error) {
        console.error('Đã có lỗi xảy ra khi lấy dữ liệu sản phẩm:', error);
    }
}

// Lắng nghe sự kiện submit của form để cập nhật sản phẩm
const updateProductForm = document.getElementById('updateProductForm');
updateProductForm.addEventListener('submit', async function(event) {
    event.preventDefault(); // Ngăn chặn việc gửi form mặc định

    // Lấy dữ liệu từ form
    const formData = new FormData(updateProductForm);

    try {
        // Tạo một object chứa dữ liệu sản phẩm cần cập nhật từ form
        const updatedProductData = {
            name: formData.get('name'),
            cate_id: formData.get('category'),
            image: formData.get('image'),
            price: formData.get('price')
        };

        // Gọi hàm để cập nhật sản phẩm
        await updateProduct(productId, updatedProductData);

        // Hiển thị thông báo hoặc thực hiện các hành động khác sau khi cập nhật thành công

        // Chuyển hướng người dùng về trang danh sách sản phẩm hoặc trang khác
        window.location.href = 'tables.html';
    } catch (error) {
        console.error('Đã có lỗi xảy ra khi cập nhật sản phẩm:', error);
    }
});



