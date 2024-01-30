// Import các hàm từ module chứa đoạn mã bạn đã xuất
import { uppercaseString, lowercaseString } from "./export.js"; // Thay đổi 'ten_file.js' bằng tên thực tế của file

// Sử dụng hàm uppercaseString
let uppercaseResult = uppercaseString('Hello World');
console.log(uppercaseResult); // In ra: HELLO WORLD

// Sử dụng hàm lowercaseString
let lowercaseResult = lowercaseString('Hello World');
console.log(lowercaseResult); // In ra: hello world
