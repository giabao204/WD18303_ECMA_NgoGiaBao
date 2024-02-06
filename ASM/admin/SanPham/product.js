// // productList.js
// import { fetchProducts, deleteProduct } from './productService.js';
//
// // Function to render product list
// export async function renderProductList() {
//     try {
//         const data = await fetchProducts();
//
//         // Kiểm tra xem dữ liệu trả về có tồn tại và có mảng sản phẩm không
//         if (data && Array.isArray(data)) {
//             // Lấy mảng sản phẩm từ dữ liệu JSON
//             let products = data;
//
//             const cate_hot = document.getElementById("table");
//
//             // Initialize an empty string to store the HTML
//             let productHTML = '';
//
//             // Generate HTML for each product
//             productHTML = `<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
//                                 <thead>
//                                     <tr>
//                                         <th>Name</th>
//                                         <th>Danh mục</th>
//                                         <th>Ảnh</th>
//                                         <th>Giá</th>
//                                         <th>Hành động</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>`;
//
//             products.forEach(function (product) {
//                 productHTML += `<tr>
//                                     <td>${product.name}</td>
//                                     <td>${product.cate_id}</td>
//                                     <td><img src="../site/img/${product.image}" alt="" style="width: 80px; height: auto;"></td>
//                                     <td>${product.price} đ</td>
//                                     <td>
//                                         <button onclick="deleteProductHandler(${product.id})">Xóa</button>
//                                     </td>
//                                 </tr>`;
//             });
//
//             productHTML += `</tbody></table>`;
//
//             // Set the generated HTML to the container
//             cate_hot.innerHTML = productHTML;
//         } else {
//             console.error("Dữ liệu từ API không hợp lệ.");
//         }
//     } catch (error) {
//         console.error("Có lỗi xảy ra khi gọi API:", error);
//     }
// }
//
// // Handler function for delete product button
// function deleteProductHandler(productId) {
//     deleteProduct(productId)
//         .then(() => {
//             // Fetch products again after deletion
//             renderProductList();
//         })
//         .catch(error => {
//             console.error("Có lỗi xảy ra khi xóa sản phẩm:", error);
//         });
// }

// fetch("http://localhost:3000/products")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//
//         // Kiểm tra xem dữ liệu trả về có tồn tại và có mảng sản phẩm không
//         if (data && Array.isArray(data)) {
//             // Lấy mảng sản phẩm từ dữ liệu JSON
//             let products = data;
//
//             const cate_hot = document.getElementById("table");
//
//             // Initialize an empty string to store the HTML
//             let productHTML = '';
//
//             // Lặp qua mảng sản phẩm và tạo HTML cho mỗi sản phẩm
//             products.forEach(function (product) {
//                 productHTML = `<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
//                                     <thead>
//                                         <tr>
//                                             <th>Name</th>
//                                             <th>Danh mục</th>
//                                             <th>Ảnh</th>
//                                             <th>Giá</th>
//                                             <th>Hành động</th>
//                                         </tr>
//                                     </thead>`
//                 for (let {name, cate_id, image,price} of products){
//                     productHTML += `<tbody>
//                                         <tr>
//                                             <td>${name}</td>
//                                             <td>${cate_id}</td>
//                                             <td><img src="../site/img/${image}" alt="" style="width: 80px; height: auto;"></td>
//                                             <td>${price} đ</td>
//                                             <td>###</td>
//                                         </tr>
//                                     </tbody>`
//                 }
//
//                 productHTML += `</table>`;
//             });
//
//             // Wrap the generated productHTML in a container with the class "row"
//             cate_hot.innerHTML = productHTML;
//         } else {
//             console.error("Dữ liệu từ API không hợp lệ.");
//         }
//     })
//     .catch(function (error) {
//         console.log("Dữ liệu từ API:", data);
//         console.error("Có lỗi xảy ra khi gọi API:", error);
//     });

import { getProducts, deleteProduct } from './CallAPI.js';


// Hàm để gọi API và đổ dữ liệu ra ngoài
async function fetchAndRenderProducts() {
    try {
        // Gọi API để lấy danh sách sản phẩm
        const products = await getProducts();

        // Kiểm tra xem dữ liệu trả về có tồn tại và có mảng sản phẩm không
        if (products && Array.isArray(products)) {
            // Lấy thẻ div để render dữ liệu sản phẩm
            const productContainer = document.getElementById("table");

            // Khởi tạo một chuỗi rỗng để lưu HTML
            let productHTML = '';

            // Lặp qua mảng sản phẩm và tạo HTML cho mỗi sản phẩm
            productHTML += `<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Danh mục</th>
                                        <th>Ảnh</th>
                                        <th>Giá</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>`;
            for (let { id, name, cate_id, image, price } of products) {
                productHTML += `<tbody>
                                    <tr>
                                        <td>${name}</td>
                                        <td>${cate_id}</td>
                                        <td><img src="../site/img/${image}" alt="" style="width: 80px; height: auto;"></td>
                                        <td>${price} đ</td>
                                        <td>
                                        <button class="btn-edit btn-primary" data-id="${id}">Sửa</button>
                                        <button class="btn-delete btn-primary" data-id="${id}">Xóa</button></td>
                                    </tr>
                                </tbody>`;
            }
            productHTML += `</table>`;

            // Render HTML vào trong thẻ div
            productContainer.innerHTML = productHTML;

            // Gắn sự kiện nghe cho nút Xóa
            const deleteButtons = document.querySelectorAll('.btn-delete');
            deleteButtons.forEach(button => {
                button.addEventListener('click', async function() {
                    const productId = button.getAttribute('data-id');
                    // Hiển thị hộp thoại xác nhận trước khi thực hiện xóa
                    const confirmed = confirm("Bạn chắc chắn muốn xóa sản phẩm này?");
                    if (confirmed) {
                        try {
                            await deleteProduct(productId);
                            // Sau khi xóa sản phẩm thành công, gọi lại hàm fetchAndRenderProducts để cập nhật giao diện
                            await fetchAndRenderProducts();
                        } catch (error) {
                            console.error('Đã có lỗi xảy ra khi xóa sản phẩm:', error);
                        }
                    }
                });
            });

            const editButtons = document.querySelectorAll('.btn-edit');
            editButtons.forEach(button => {
                button.addEventListener('click', async function() {
                    const productId = button.getAttribute('data-id');
                    // Chuyển hướng sang trang chỉnh sửa sản phẩm với productId được truyền qua URL
                    window.location.href = `update.html?id=${productId}`;
                });
            });

        } else {
            console.error("Dữ liệu từ API không hợp lệ.");
        }
    } catch (error) {
        console.error("Có lỗi xảy ra khi gọi API:", error);
    }
}

// Gọi hàm để gọi API và render dữ liệu ra ngoài
fetchAndRenderProducts();

