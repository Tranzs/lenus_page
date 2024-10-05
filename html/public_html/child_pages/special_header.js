document.addEventListener("DOMContentLoaded", function () {
    // Kiểm tra xem special-header đã được thêm chưa
    if (!document.querySelector('special-header')) {
        const specialHeader = document.createElement('special-header');
        document.body.insertBefore(specialHeader, document.body.firstChild);
    }
});


class SpecialHeader extends HTMLElement{
    connectedCallback(){
        // Xác định đường dẫn tới hình ảnh
        let imagePath = '';

        // Kiểm tra xem đang ở trong thư mục child_pages hay không
        if (window.location.pathname.includes("child_pages")) {
            imagePath = "./Công ty Cổ phần Lenus_files/Logo_-_Avatar-removebg-preview (5).png"; // Đường dẫn khi ở trong child_pages
        } else {
            imagePath = "./child_pages/Công ty Cổ phần Lenus_files/Logo_-_Avatar-removebg-preview (5).png"; // Đường dẫn khi ở ngoài
        }
        this.innerHTML = `
        <header class="hd__screen bg-white z-10 top-0 w-full">
            <div>
                <div class="flex items-center ">
                    <a href="http://127.0.0.1/lenus_page/html/public_html/index.html" target="_blank"
                        class="flex items-center">
                        <img
                            src="${imagePath}"
                            class="img-responsive"
                            alt="lenus" />
<label class="ml-3 uppercase leading-4 text-lenus"><span
                                class="block font-bold">CÔNG TY CỔ PHẦN LENUS VIỆT NAM</span>
                            LENUS VIET NAM JOINT STOCK COMPANY
                        </label></a>

                    <div class="ml-auto relative" id="myNav">
                        <div class="nav-button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="black"></path>
                            </svg>
                        </div>
                        <ul id="navToggle" class="flex navbar">
                            <li>
                                <a id="home" href="http://127.0.0.1/lenus_page/html/public_html/index.html" target="_blank"
                                    class="border-transparent block text-lenus uppercase px-6 py-2 rounded-full border hover:border-lenus">Trang
                                    chủ</a>
                            </li>
                            <li>
                                <a id="intro" href="http://127.0.0.1/lenus_page/html/public_html/child_pages/intro.html"
                                    target="_blank"
                                    class="border-transparent block text-lenus uppercase px-6 py-2 rounded-full border hover:border-lenus">Giới
                                    thiệu</a>
                            </li>
                            <li>
                                <a href="http://127.0.0.1/lenus_page/html/public_html/child_pages/product.html" target="_blank"
                                    class="border-transparent block text-lenus uppercase px-6 py-2 rounded-full border hover:border-lenus">Sản
                                    phẩm</a>
                            </li>
                            <li>
                                <a href="http://127.0.0.1/lenus_page/html/public_html/child_pages/news.html" target="_blank"
                                    class="border-transparent block text-lenus uppercase px-6 py-2 rounded-full border hover:border-lenus">Tin
                                    tức & sự kiện</a>
                            </li>
                            <li>
                                <a href="http://127.0.0.1/lenus_page/html/public_html/child_pages/contact.html" target="_blank"
                                    class="border-transparent block text-lenus uppercase px-6 py-2 rounded-full border hover:border-lenus">Liên
                                    hệ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                    <div>
                    <style type="text/css">
                    /*----- Init Css -----*/
                    .side_nav {
                        display: none;
                    }

                    /*----- Genreral Css -----*/
                    body .hd__screen.p-4 {
                        background-size: cover;
                        background-color: rgba(1, 64, 34, 0.7) !important;
                    }

                    /*----- Header -----*/
                    .navbar-brand span {
                        color: #0a8203;
                        font-size: 14px;
                    }
                    .navbar-brand img {
                        height: 28px;
                        margin: 0 !important;
                    }

                    /*----- Footer -----*/
                    body .page-footer {
                        padding-top: 10px;
                        padding-bottom: 10px;
                        background-color: #02672d;
                        color: white;
                        position: relative;
                        width: 100%;
                        font-size: 14px;
                        background-size: cover;
                    }
                    body .sitename {
                        background-color: #163255;
                        color: white;
                        padding: 10px 0;
                        text-transform: uppercase;
                        font-weight: bold;
                    }
                    body .page-footer .owner {
                        font-weight: bold;
                        text-transform: uppercase;
                        margin-bottom: 10px;
                    }
                    body .page-footer p {
                        line-height: 20px;
                    }

                    @media screen and (min-width: 768px) {
                        body .page-footer .sm6:last-child {
                        margin-top: -2px;
                        }
                    }

                    /*----- Content -----*/
                    .main-title {
                    }
                    .bg-green-transparent {
                        background-color: rgba(1, 64, 34, 0.7);
                    }

                    table.bg-white,
                    table tbody.bg-white {
                        background-color: transparent;
                    }
                    .vuejx__table.border__table {
                        border: 0 !important;
                    }
                    table.bg-white,
                    table.bg-white * {
                        border: 0 !important;
                        color: rgb(10, 10, 10) !important;
                    }
                    </style>
                </div> 
        </header>`

       
        let myNav = document.querySelector('#myNav');
        let navbar = document.querySelector('.navbar');
        myNav.onclick = () => {
            myNav.classList.toggle('myNav');

            navbar.classList.toggle('active');
        };
                
    }
}

class SpecialFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer class="hd__screen relative footer-normal">
            <div bis_skin_checked="1">
              <div class="p-4 text-white" bis_skin_checked="1">
                <div class="uppercase leading-6 font-black">
                  VĂN PHÒNG ĐẠI DIỆN
                </div>
                <div class="contact-info">
                  <p class="flex items-start my-2">
                    <svg
                      class="flex-shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.99992 1.3335C5.41992 1.3335 3.33325 3.42016 3.33325 6.00016C3.33325 9.50016 7.99992 14.6668 7.99992 14.6668C7.99992 14.6668 12.6666 9.50016 12.6666 6.00016C12.6666 3.42016 10.5799 1.3335 7.99992 1.3335ZM4.66659 6.00016C4.66659 4.16016 6.15992 2.66683 7.99992 2.66683C9.83992 2.66683 11.3333 4.16016 11.3333 6.00016C11.3333 7.92016 9.41325 10.7935 7.99992 12.5868C6.61325 10.8068 4.66659 7.90016 4.66659 6.00016Z"
                        fill="white"
                      ></path>
                      <path
                        d="M7.99992 7.66683C8.92039 7.66683 9.66658 6.92064 9.66658 6.00016C9.66658 5.07969 8.92039 4.3335 7.99992 4.3335C7.07944 4.3335 6.33325 5.07969 6.33325 6.00016C6.33325 6.92064 7.07944 7.66683 7.99992 7.66683Z"
                        fill="white"
                      ></path></svg
                    ><span class="ml-2">
                      Tòa nhà 319 Bộ Quốc Phòng - Số 63 đường Lê Văn Lương,
                      Phường Trung Hòa, Quận Cầu Giấy, Thành phố Hà Nội</span
                    >
                  </p>
                  <p class="flex items-start my-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 8H11.3333C11.3333 6.16 9.84 4.66667 8 4.66667V6C9.10667 6 10 6.89333 10 8ZM12.6667 8H14C14 4.68667 11.3133 2 8 2V3.33333C10.58 3.33333 12.6667 5.42 12.6667 8ZM13.3333 10.3333C12.5 10.3333 11.7 10.2 10.9533 9.95333C10.8867 9.93333 10.8133 9.92 10.7467 9.92C10.5733 9.92 10.4067 9.98667 10.2733 10.1133L8.80667 11.58C6.92 10.62 5.37333 9.08 4.41333 7.18667L5.88 5.71333C6.06667 5.54 6.12 5.28 6.04667 5.04667C5.8 4.3 5.66667 3.5 5.66667 2.66667C5.66667 2.3 5.36667 2 5 2H2.66667C2.3 2 2 2.3 2 2.66667C2 8.92667 7.07333 14 13.3333 14C13.7 14 14 13.7 14 13.3333V11C14 10.6333 13.7 10.3333 13.3333 10.3333ZM3.35333 3.33333H4.35333C4.4 3.92 4.5 4.5 4.65333 5.05333L3.85333 5.86C3.58667 5.05333 3.41333 4.21333 3.35333 3.33333ZM12.6667 12.6467C11.7867 12.5867 10.9333 12.4133 10.1333 12.14L10.9333 11.34C11.5 11.5 12.08 11.6 12.6667 11.64V12.6467Z"
                        fill="white"
                      ></path></svg
                    ><span class="ml-2">(+84) 912 316 923</span>
                  </p>
                  <p class="flex items-start my-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3333 2.6665H2.66668C1.93334 2.6665 1.34001 3.2665 1.34001 3.99984L1.33334 11.9998C1.33334 12.7332 1.93334 13.3332 2.66668 13.3332H13.3333C14.0667 13.3332 14.6667 12.7332 14.6667 11.9998V3.99984C14.6667 3.2665 14.0667 2.6665 13.3333 2.6665ZM13.3333 11.9998H2.66668V5.33317L8.00001 8.6665L13.3333 5.33317V11.9998ZM8.00001 7.33317L2.66668 3.99984H13.3333L8.00001 7.33317Z"
                        fill="white"
                      ></path></svg
                    ><span class="ml-2">info@lenusvn.com</span>
                  </p>
                </div>
                <div class="uppercase leading-6 font-black mt-4">
                  Trụ sở chính:
                </div>
                <div>
                  <p class="flex items-start my-2">
                    <svg
                      class="flex-shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.99992 1.3335C5.41992 1.3335 3.33325 3.42016 3.33325 6.00016C3.33325 9.50016 7.99992 14.6668 7.99992 14.6668C7.99992 14.6668 12.6666 9.50016 12.6666 6.00016C12.6666 3.42016 10.5799 1.3335 7.99992 1.3335ZM4.66659 6.00016C4.66659 4.16016 6.15992 2.66683 7.99992 2.66683C9.83992 2.66683 11.3333 4.16016 11.3333 6.00016C11.3333 7.92016 9.41325 10.7935 7.99992 12.5868C6.61325 10.8068 4.66659 7.90016 4.66659 6.00016Z"
                        fill="white"
                      ></path>
                      <path
                        d="M7.99992 7.66683C8.92039 7.66683 9.66658 6.92064 9.66658 6.00016C9.66658 5.07969 8.92039 4.3335 7.99992 4.3335C7.07944 4.3335 6.33325 5.07969 6.33325 6.00016C6.33325 6.92064 7.07944 7.66683 7.99992 7.66683Z"
                        fill="white"
                      ></path></svg
                    ><span class="ml-2"
                      >111 Láng Hạ, Phường Láng Hạ, Quận Đống Đa, Hà Nội</span
                    >
                  </p>
                </div>
                <div class="copyright italic text-lenus mt-6">
                  Bản quyền thuộc về Công ty Cổ phần LENUS VIỆT NAM ©2024
                </div>
              </div>
              <div class="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6152388578093!2d105.80348288885497!3d21.008055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad9f394fd473%3A0xa4c67fe72c49cac!2zVG_DoCBOaMOgIDMxOSBC4buZIFF14buRYyBQaMOybmc!5e0!3m2!1svi!2s!4v1726105921170!5m2!1svi!2s"
                  width="600"
                  height="260"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </footer>
          <footer class="hd__screen relative footer-contact">
            <div
              class="mx-auto py-2 px-4 italic"
              style="max-width: 1366px; color: rgb(0, 129, 252)"
            >
              <div>Bản quyền thuộc về Công ty Cổ phần LENUS VIỆT NAM ©2024</div>
            </div>
          </footer>
        `          
    }
}

customElements.define('special-header', SpecialHeader )
customElements.define('special-footer', SpecialFooter )

