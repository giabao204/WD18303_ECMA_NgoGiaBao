// Import thư viện Axios


class APICaller {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get(endpoint) {
        const response = await fetch(`${this.baseUrl}/${endpoint}`);
        const data = await response.json();
        return data;
    }

    async post(endpoint, body) {
        const response = await fetch(`${this.baseUrl}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
    }

    async put(endpoint, body) {
        const response = await fetch(`${this.baseUrl}/${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
    }

    async delete(endpoint) {
        const response = await fetch(`${this.baseUrl}/${endpoint}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        return data;
    }
}

class CommentService extends APICaller {
    constructor(baseUrl) {
        super(baseUrl);
        this.endpoint = 'comments';
    }

    async getAll() {
        const comments = await this.get(this.endpoint);
        return comments;
    }

    async getOne(commentId) {
        const comment = await this.get(`${this.endpoint}/${commentId}`);
        return comment;
    }

    async create(comment) {
        const newComment = await axios.post(`${this.baseUrl}/${this.endpoint}`, comment);
        return newComment.data;
    }

    async update(commentId, updatedComment) {
        const updated = await axios.put(`${this.baseUrl}/${this.endpoint}/${commentId}`, updatedComment);
        return updated.data;
    }

    async delete(commentId) {
        const deletedComment = await axios.delete(`${this.baseUrl}/${this.endpoint}/${commentId}`);
        return deletedComment.data;
    }
}

// Ví dụ sử dụng
const apiCaller = new CommentService('http://localhost:3000');

apiCaller.getAll().then(comments => console.log('Tất cả Bình luận:', comments));

apiCaller.getOne(1).then(comment => console.log('Bình luận 1:', comment));

const newComment = { text: 'Đây là một bình luận mới' };
apiCaller.create(newComment).then(createdComment => console.log('Bình luận Đã tạo:', createdComment));

const updatedComment = { text: 'Văn bản bình luận đã được cập nhật' };
apiCaller.update(3, updatedComment).then(updated => console.log('Bình luận Đã cập nhật:', updated));

// apiCaller.delete(6).then(deletedComment => console.log('Bình luận Đã xóa:', deletedComment));
