        document.addEventListener("DOMContentLoaded", function () {
    // Xác định đường dẫn tới header.html
    let path = '';

    // Kiểm tra xem đang ở trong thư mục child_pages hay không
    if (window.location.pathname.includes("child_pages")) {
        path = "header.html"; // Nếu ở trong child_pages, dùng đường dẫn tương đối
    } else {
        path = "child_pages/header.html"; // Nếu ở ngoài, cần đường dẫn tuyệt đối
    }

    // Tải tệp header.html và chèn vào trang
    fetch(path)
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;

            let myNav = document.querySelector('#myNav');
                    let navbar = document.querySelector('.navbar');
                    if (myNav && navbar) {
                        myNav.onclick = () => {
                            myNav.classList.toggle('myNav');
                            navbar.classList.toggle('active');
                        };
                    }
            
        })
        .catch(error => console.error("Không thể tải header:", error));
});
        
        
        