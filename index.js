document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");

  const popup = document.getElementById("popup");

  let isOpen = false;

  const toggleModal = () => {
    isOpen = !isOpen;
    popup.style.display = isOpen ? "block" : "none";
  };

  menuButton.addEventListener("click", toggleModal);

  const popupBooking = document.getElementById("popupBooking");
  const compassIcon = document.getElementById("compassIcon");
  const shipIcon = document.getElementById("shipIcon");
  const yachtIcon = document.getElementById("yachtIcon");

  let scrollDirection = "up";
  let scrollPosition = 0;

  function handleScroll() {
    const currentPosition = window.scrollY;

    if (currentPosition > scrollPosition) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    scrollPosition = currentPosition;

    // Update UI based on scroll direction
    compassIcon.classList.remove("up", "down");
    compassIcon.classList.add(scrollDirection);

    yachtIcon.classList.remove("up", "down");
    yachtIcon.classList.add(scrollDirection);
  }

  window.addEventListener("scroll", handleScroll);

  // Cleanup the event listener when the component unmounts
  window.addEventListener("beforeunload", function () {
    window.removeEventListener("scroll", handleScroll);
  });

  // Trigger popup on background click
  popupBooking.addEventListener("click", function () {
    // Call the function to show the booking popup
    showBookingPopup();
  });

  // location section scroll
});
document.addEventListener("DOMContentLoaded", function () {
  const primeLocationSection = document.getElementById("primeLocationSection");
  const playIcon = document.getElementById("playIcon");

  let scrollDirection = "up";
  let scrollPosition = 0;

  function handleScroll() {
    const currentPosition = window.scrollY;

    if (currentPosition > scrollPosition) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    scrollPosition = currentPosition;

    // Update UI based on scroll direction
    primeLocationSection.classList.remove("up", "down");
    primeLocationSection.classList.add(scrollDirection);

    playIcon.classList.remove("up", "down");
    playIcon.classList.add(scrollDirection);
  }

  window.addEventListener("scroll", handleScroll);

  // Cleanup the event listener when the component unmounts
  window.addEventListener("beforeunload", function () {
    window.removeEventListener("scroll", handleScroll);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const dayCard = document.getElementById("dayCard");
  const weekCard = document.getElementById("weekCard");
  const monthCard = document.getElementById("monthCard");

  let scrollDirection = "up";
  let scrollPosition = 0;

  function handleScroll() {
    const currentPosition = window.scrollY;

    if (currentPosition > scrollPosition) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    scrollPosition = currentPosition;

    // Update UI based on scroll direction
    dayCard.classList.remove("up", "down");
    dayCard.classList.add(scrollDirection);

    weekCard.classList.remove("up", "down");
    weekCard.classList.add(scrollDirection);

    monthCard.classList.remove("up", "down");
    monthCard.classList.add(scrollDirection);
  }

  window.addEventListener("scroll", handleScroll);

  // Cleanup the event listener when the component unmounts
  window.addEventListener("beforeunload", function () {
    window.removeEventListener("scroll", handleScroll);
  });
});
