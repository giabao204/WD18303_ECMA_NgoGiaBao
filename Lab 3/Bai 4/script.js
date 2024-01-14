const convertTemperature = (temperature, unit) => {
    if (unit === "C") {
        // Chuyển từ Celsius sang Fahrenheit
        return (temperature * 9/5) + 32;
    } else if (unit === "F") {
        // Chuyển từ Fahrenheit sang Celsius
        return (temperature - 32) * 5/9;
    } else {
        // Trường hợp không xác định đơn vị
        return "Đơn vị nhiệt độ không hợp lệ";
    }
};

// Ví dụ sử dụng
const celsiusTemperature = 30;
const fahrenheitTemperature = 86;

console.log(`30 độ Celsius bằng ${convertTemperature(celsiusTemperature, "C")} độ Fahrenheit`);
console.log(`86 độ Fahrenheit bằng ${convertTemperature(fahrenheitTemperature, "F")} độ Celsius`);
