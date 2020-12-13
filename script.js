let $navbar = document.getElementById('nav');
let $icon = document.getElementById("icon");

function switchNavbar(rmClass, addclass, icon) {
    $navbar.classList.remove(rmClass);
	$navbar.classList.add(addclass);
	$icon.src= icon;
}

if (document.querySelector('.trigger')) { 
    window.addEventListener('scroll', () => {
        let $trigger = document.querySelector('.trigger').offsetTop - $navbar.offsetHeight;
        
        (document.body.scrollTop >= $trigger || document.documentElement.scrollTop >= $trigger) ? 
        switchNavbar("dark-nav", 'light-nav',"/img/blackLogo_DWWM.png") :
        switchNavbar("light-nav", "dark-nav", "/img/logo_DWWM.png");
    });
} else {
    switchNavbar("dark-nav", 'light-nav',"/img/blackLogo_DWWM.png");
}


// Background blur on toggle (mobile navigation)
let $toggleBtn = document.querySelector('.toggle-btn');
let $header = document.querySelector('.header')

$toggleBtn.addEventListener("click", () => $header.classList.toggle("blur"));