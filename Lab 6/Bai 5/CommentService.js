// CommentService.js
import APICaller from './APICaller.js';

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
        const newComment = await this.post(this.endpoint, comment);
        return newComment;
    }

    async update(commentId, updatedComment) {
        const updated = await this.put(`${this.endpoint}/${commentId}`, updatedComment);
        return updated;
    }

    async delete(commentId) {
        const deletedComment = await this.delete(`${this.endpoint}/${commentId}`);
        return deletedComment;
    }
}

export default CommentService;
