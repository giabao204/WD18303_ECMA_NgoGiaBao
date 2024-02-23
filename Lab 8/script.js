



//Cau 3
const API_URL ="https://onthiecma-edf55-default-rtdb.asia-southeast1.firebasedatabase.app/";

let getProduct = async () => {
    let response = await fetch(API_URL + 'products.json');

    return await response.json();
}

//gọi hàm in cái bảng ra màn hình
getProduct().then((products) =>{
    let html = '';
    let tbody = document.getElementById('danhsach');

    Object.entries(products).forEach(([key, element]) => {
        html+=`
        <tr class="">
                <td>${element.name}</td>
                <td>${element.cate_id}</td>
                <td>${element.price}</td>
                <td><button class="btn btn-primary" onclick="productEdit('${key}')" >Sửa</button></td>
                <td><button class="btn btn-danger" onclick="productDelete('${key}')" >Xoá</button></td>
                <td></td>
            </tr>
        `;
    });
    tbody.innerHTML= html;
}).catch((error) => {

});


// let createProducts = (form) => {
//     let data = new FormData(form);
//     // console.log(data.values());
//     let object = {
//         name : data.get("name"),
//         cate_id : data.get("cate_id"),
//         price : data.get("price")
//     };
//     fetch(API_URL + "products.json", {
//         method: "POST",
//         body: JSON.stringify(object),
//     })
// }

let productDelete = (productID) => {
    // Hiển thị hộp thoại xác nhận trước khi xóa
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
        fetch(API_URL + `products/${productID}.json`, {
            method: 'DELETE'
        })
            .then(response => {
                if(response.ok) {
                    // Tải lại trang sau khi xóa thành công
                    location.reload();
                } else {
                    throw new Error('Xóa sản phẩm không thành công');
                }
            })
            .catch(error => {
                console.error('Lỗi khi xóa sản phẩm:', error);
            });
    }
}


let productEdit = async (productID) => {
    let response = await fetch(API_URL + `products/${productID}.json`);
    let productData = await response.json();

    document.getElementById('productId').value = productID;
    document.getElementById('productName').value = productData.name;
    document.getElementById('productDescription').value = productData.cate_id;
    document.getElementById('productPrice').value = productData.price;
}

// hàm để xử lý việc tạo mới hoặc cập nhật sản phẩm
let createOrUpdateProduct = (event) => {
    event.preventDefault(); // Ngăn chặn biểu mẫu gửi đi một cách truyền thống

    let form = event.target;
    let data = new FormData(form);
    let object = {
        name: data.get("name"),
        cate_id: data.get("cate_id"),
        price: data.get("price")
    };

    let productId = document.getElementById('productId').value;
    let method = productId ? 'PUT' : 'POST'; // Nếu có productId, thì sử dụng PUT (cập nhật), ngược lại, sử dụng POST (tạo mới)

    fetch(API_URL + `products/${productId || ''}.json`, {
        method: method,
        body: JSON.stringify(object),
    })
        .then(response => {
            if(response.ok) {
                // Tải lại trang sau khi thêm/cập nhật thành công
                location.reload();
            } else {
                throw new Error('Lỗi khi lưu sản phẩm');
            }
        })
        .catch(error => {
            console.error('Lỗi khi lưu sản phẩm:', error);
        });
}