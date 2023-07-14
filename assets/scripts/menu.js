 //nav menu

 const navBtn = document.querySelector(
    "#es-sanofi.es-sanofi #es-magne.es-magne .es-kv__navBtn"
  );
  const navMenu = document.querySelector(
    "#es-sanofi.es-sanofi #es-magne.es-magne .es-kv__navCtn"
  );
  const navBarTop = document.querySelector(
    "#es-sanofi.es-sanofi #es-magne.es-magne .es-kv__navStroke--top"
  );
  const navBarMiddle = document.querySelector(
    "#es-sanofi.es-sanofi #es-magne.es-magne .es-kv__navStroke--middle"
  );
  const navBarBottom = document.querySelector(
    "#es-sanofi.es-sanofi #es-magne.es-magne .es-kv__navStroke--bottom"
  );

  const toggleMenu = () => {
    navMenu.classList.toggle("es-hide");
    if (!navMenu.classList.contains("es-hide")) {
      navBarTop.style.transform = "translate(0, 0) rotate(45deg)";
      navBarMiddle.style.opacity = "0";
      navBarBottom.style.transform = "translate(0, 0) rotate(-45deg)";
    } else {
      navBarTop.style.transform = "translate(0, -8px)";
      navBarMiddle.style.opacity = "1";
      navBarBottom.style.transform = "translate(0, 8px)";
    }
  };

  navBtn.addEventListener("click", () => toggleMenu());