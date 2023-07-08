// tạo đối tượng kết nối mạng thành công
var dt_Internet_Connected = document.querySelector(`div[id="da_ket_noi"]`);

// tạo đối tượng mất kết nối mạng
var dt_Internet_Disconnect = document.querySelector(`div[id="mat_ket_noi"]`);

console.log(dt_Internet_Connected);
console.log(dt_Internet_Disconnect);

// dùng window để bắt các sự kiện
// trên cửa sổ trình duyệt
window.addEventListener("offline", function(){
    Object.assign(dt_Internet_Disconnect.style, {
        display: "block"
    })

    Object.assign(dt_Internet_Connected.style, {
        display: "none"
    })

    // sau 3 giây thì ẩn luôn cái thông báo mất kết nối
    this.setTimeout(function(){
        Object.assign(dt_Internet_Disconnect.style, {
            display: "none"
        })
    }, 3000);
});

window.addEventListener("online", function(){
    Object.assign(dt_Internet_Connected.style, {
        display: "block"
    })

    Object.assign(dt_Internet_Disconnect.style, {
        display: "none"
    })

    // sau 3 giây thì ẩn luôn cái thông báo kết nối thành công
    this.setTimeout(function(){
        Object.assign(dt_Internet_Connected.style, {
            display: "none"
        })
    }, 3000);
});