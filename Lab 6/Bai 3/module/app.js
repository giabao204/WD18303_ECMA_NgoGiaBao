// Import tất cả các hàm từ module chứa đoạn mã bạn đã xuất
import * as stringFunctions from "./export.js"; // Thay đổi 'export.js' bằng tên thực tế của file

// Sử dụng hàm uppercaseString
let uppercaseResult = stringFunctions.uppercaseString('Hello World');
console.log(uppercaseResult); // In ra: HELLO WORLD

// Sử dụng hàm lowercaseString
let lowercaseResult = stringFunctions.lowercaseString('Hello World');
console.log(lowercaseResult); // In ra: hello world

let result = stringFunctions.subtract(7, 4);
console.log(result); // 3