
const BASE_URL = 'http://localhost:3000/products';


// Hàm để lấy danh sách sản phẩm từ API
export async function getProducts() {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Đã có lỗi xảy ra khi lấy danh sách sản phẩm:', error);
        throw error;
    }
}

export async function getProductById(productId) {
    try {
        const response = await axios.get(`${BASE_URL}/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`Đã có lỗi xảy ra khi lấy thông tin sản phẩm có ID ${productId}:`, error);
        throw error;
    }
}

// Hàm để thêm sản phẩm mới vào danh sách
export async function addProduct(productData) {
    try {
        const response = await axios.post(BASE_URL, productData);
        return response.data;
    } catch (error) {
        console.error('Đã có lỗi xảy ra khi thêm sản phẩm:', error);
        throw error;
    }
}

// Hàm để cập nhật thông tin của sản phẩm
export async function updateProduct(productId, updatedData) {
    try {
        const response = await axios.put(`${BASE_URL}/${productId}`, updatedData);
        return response.data;
    } catch (error) {
        console.error(`Đã có lỗi xảy ra khi cập nhật sản phẩm ${productId}:`, error);
        throw error;
    }
}

// Hàm để xóa sản phẩm khỏi danh sách
export async function deleteProduct(productId) {
    try {
        const response = await axios.delete(`${BASE_URL}/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`Đã có lỗi xảy ra khi xóa sản phẩm ${productId}:`, error);
        throw error;
    }
}
