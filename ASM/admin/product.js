fetch("http://localhost:3000/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        // Kiểm tra xem dữ liệu trả về có tồn tại và có mảng sản phẩm không
        if (data && Array.isArray(data)) {
            // Lấy mảng sản phẩm từ dữ liệu JSON
            let products = data;

            const cate_hot = document.getElementById("table");

            // Initialize an empty string to store the HTML
            let productHTML = '';

            // Lặp qua mảng sản phẩm và tạo HTML cho mỗi sản phẩm
            products.forEach(function (product) {
                productHTML = `<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Danh mục</th>
                                            <th>Ảnh</th>
                                            <th>Giá</th>
                                            <th>Hành động</th>
                                        </tr>
                                    </thead>`
                                    for (let {name, cate_id, image,price} of products){
                                        productHTML += `<tbody>
                                        <tr>
                                            <td>${name}</td>
                                            <td>${cate_id}</td>
                                            <td><img src="../site/img/${image}" alt="" style="width: 80px; height: auto;"></td>
                                            <td>${price} đ</td>
                                            <td>###</td>
                                        </tr>
                                    </tbody>`
                                    }

                productHTML += `</table>`;
            });

            // Wrap the generated productHTML in a container with the class "row"
            cate_hot.innerHTML = productHTML;
        } else {
            console.error("Dữ liệu từ API không hợp lệ.");
        }
    })
    .catch(function (error) {
        console.log("Dữ liệu từ API:", data);
        console.error("Có lỗi xảy ra khi gọi API:", error);
    });