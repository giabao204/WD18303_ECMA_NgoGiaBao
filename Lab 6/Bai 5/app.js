import CommentService from './CommentService.js';

// Sử dụng ví dụ
const apiCaller = new CommentService('http://localhost:3000');

apiCaller.getAll().then(comments => console.log('Tất cả Bình luận:', comments));

apiCaller.getOne(1).then(comment => console.log('Bình luận 1:', comment));

// const newComment = { text: 'Đây là một bình luận mới' };
// apiCaller.create(newComment).then(createdComment => console.log('Bình luận Đã tạo:', createdComment));

// const updatedComment = { text: 'Văn bản bình luận đã được cập nhật' };
// apiCaller.update(8, updatedComment).then(updated => console.log('Bình luận Đã cập nhật:', updated));

apiCaller.delete(1).then(deletedComment => console.log('Bình luận Đã xóa:', deletedComment));
