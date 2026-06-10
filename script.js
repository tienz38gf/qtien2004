```javascript
// Thông báo khi trang web tải xong
window.addEventListener("load", function () {
    console.log("Website Tiến Táo đã sẵn sàng!");
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function () {

        const product = this.parentElement;

        const tenSanPham = product.querySelector('h3').innerText;
        const giaSanPham = product.querySelector('.price').innerText;

        alert(
            "Sản phẩm: " + tenSanPham +
            "\nGiá: " + giaSanPham +
            "\n\nCảm ơn bạn đã quan tâm!"
        );
    });
});

document.querySelectorAll('.product').forEach(product => {

    product.addEventListener('mouseenter', function () {
        this.style.transform = "translateY(-5px)";
    });

    product.addEventListener('mouseleave', function () {
        this.style.transform = "translateY(0)";
    });

});
```
