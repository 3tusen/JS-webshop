const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    let enterKeyCode = 13;
    let spaceKeyCode = 32;

    
    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');
        
        //Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }  
             
          });

          //Burger animation
          burger.classList.toggle('flip');
    }); 
    
    burger.addEventListener('keyup', (e) => {
        if (e.keyCode == enterKeyCode || e.keyCode == spaceKeyCode) {
           

            nav.classList.toggle('nav-active');
            //Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }  
             
          });

          //Burger animation
          burger.classList.toggle('flip');
        }
    });

}


navSlide();

//Function that controls img src for index thumbnails, if viewport == Ipad Pro, show src2

function controlImg(x) {
    const thumbNail1 = document.getElementById('thumbnail-1');
    const thumbNail2 = document.getElementById('thumbnail-2');
    const thumbNail3 = document.getElementById('thumbnail-3');
    const thumbNail4 = document.getElementById('thumbnail-4');

    if (x.matches) { // If media query matches
      thumbNail1.src = 'assets/specific-products/doa1-snowboards.jpg';
      thumbNail2.src = 'assets/specific-products/norronalofoten1-jackor.jpg';
      thumbNail3.src = 'assets/pants2.jpg';
      thumbNail4.src = 'assets/about2.jpg';
    } else {
        thumbNail1.src = 'assets/specific-products/doa1-400x600.jpg';
      thumbNail2.src = 'assets/specific-products/norronalofoten1.jpg';
      thumbNail3.src = 'assets/pants1.jpg';
      thumbNail4.src = 'assets/about1.jpg';
    }
  }
  
  let x = window.matchMedia("(max-width: 1024px)")
  controlImg(x) // Call listener function at run time
  x.addEventListener(myFunction) // Attach listener function on state changesy

