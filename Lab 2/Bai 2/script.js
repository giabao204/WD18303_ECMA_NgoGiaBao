const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    const [, , ...arr] = list; // Thay đổi code ở đây
    return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);      // Kết quả mong muốn: [3, 4, 5, 6, 7, 8, 9, 10]
console.log(source);   // Kết quả mong muốn: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

