// Lấy mảng xe từ localStorage (nếu có) và chuyển đổi thành mảng JavaScript
let cars = JSON.parse(localStorage.getItem('cars')) || [];

muaxe = (xe) => {
    console.log(xe)
    const newCar = { name: 'BMW X7', price: 2000000000, image: 'bmw-x7.jpg' };
    cars.push(newCar);

    // Lưu mảng xe mới vào localStorage
    localStorage.setItem('cars', JSON.stringify(cars));
}



// Lấy mảng sản phẩm từ localStorage (nếu có) và chuyển đổi thành mảng JavaScript
