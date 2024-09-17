    let myNav = document.querySelector('#myNav');
    let navbar = document.querySelector('.navbar');
      myNav.onclick = () => {
          myNav.classList.toggle('myNav');

          navbar.classList.toggle('active');
        };