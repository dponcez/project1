window.onload = function () {
  const toggle = document.querySelector(".toggle");
  const items = document.querySelectorAll(".item");
  const links = document.querySelectorAll("a");
  let isActive = false;
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    if ( toggle && items ) {
      items.forEach(( item, index ) => {
        if ( index > -1 ) {
          item.classList.toggle("active");
        }
      });
    }

    links.forEach( link => {
      if ( !isActive ) {
        link.classList.toggle("remove");
      }
    });
  });
};
