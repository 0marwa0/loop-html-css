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

document.addEventListener("DOMContentLoaded", function () {
  const features = [
    {
      title: "EXPERIENCED CREW",
      text: "Our Seasoned Crew Members Are Your Guides To Seamless And Enjoyable Voyages. Trust In Their Expertise For A Worry-free Exploration.",
    },
    {
      title: "CUSTOMIZABLE EXPERIENCES",
      text: "Tailor your yachting adventure to your desires. From personalized itineraries to unique onboard experiences, we turn your dreams into a reality.",
    },
    {
      title: "24/7 CUSTOMER SUPPORT",
      text: "Your peace of mind is our priority. Our round-the-clock customer support ensures assistance whenever you need it, making your journey seamless and stress-free.",
    },
  ];

  const featuresContainer = document.querySelector(".features-container");

  features.forEach((feature) => {
    const featureCard = document.createElement("div");
    featureCard.classList.add("feature-card");
    featureCard.innerHTML = `
            <div class="feature-title">${feature.title}</div>
            <div class="feature-text">${feature.text}</div>
        `;
    featuresContainer.appendChild(featureCard);
  });

  let scrollDirection = "up";
  let scrollPosition = 0;

  const handleScroll = () => {
    const currentPosition = window.scrollY;

    if (currentPosition > scrollPosition) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    scrollPosition = currentPosition;

    featuresContainer.classList.remove("up", "down");
    featuresContainer.classList.add(scrollDirection);
  };

  window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const exploreBg = document.getElementById("explore-boats-section-move");

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
    exploreBg.classList.remove("up", "down");
    exploreBg.classList.add(scrollDirection);
  }

  window.addEventListener("scroll", handleScroll);

  // Cleanup the event listener when the component unmounts
  window.addEventListener("beforeunload", function () {
    window.removeEventListener("scroll", handleScroll);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const card1_move = document.getElementById("card1-move");
  const card2_move = document.getElementById("card2-move");
  const card3_move = document.getElementById("card3-move");
  const card4_move = document.getElementById("card4-move");
  const card5_move = document.getElementById("card5-move");

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
    card1_move.classList.remove("up", "down");
    card1_move.classList.add(scrollDirection);

    card2_move.classList.remove("up", "down");
    card2_move.classList.add(scrollDirection);

    card3_move.classList.remove("up", "down");
    card3_move.classList.add(scrollDirection);

    card4_move.classList.remove("up", "down");
    card4_move.classList.add(scrollDirection);

    card5_move.classList.remove("up", "down");
    card5_move.classList.add(scrollDirection);
  }

  window.addEventListener("scroll", handleScroll);

  // Cleanup the event listener when the component unmounts
  window.addEventListener("beforeunload", function () {
    window.removeEventListener("scroll", handleScroll);
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 5,
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      1000: {
        items: 4,
      },
      767: {
        items: 2,
      },
      640: {
        items: 1,
      },
    },
  });

  // Manually bind the custom buttons
  $(".owl-next").click(function () {
    $(".owl-carousel").trigger("next.owl.carousel");
  });
  $(".owl-prev").click(function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });
});