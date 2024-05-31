document.addEventListener("DOMContentLoaded", function () {
  // Define slider configurations
  const sliderData = [
    {
      number: "01.",
      linkText: "LAS VEGAS CLUB CRAWL – WORLD CRAWL",
      href: "#",
      content:
        "PICK YOUR CHOICE OF LAS VEGAS NIGHTCLUBS & POOL PARTIES BELOW WHICH INCLUDE FREE ENTRY.",
    },
    {
      number: "02.",
      linkText: "AYU DAYCLUB OPEN BAR PACKAGES",
      href: "#",
      content:
        "GET AYU DAYCLUB OPEN BAR PACKAGES DIRECT 50% OFF USE CODE: NCNOB50 AT CHECKOUT BUY OPEN BAR PACKAGES FREE GUEST LIST BEST PRICE…",
    },
    {
      number: "03.",
      linkText: "ZOUK NIGHTCLUB OPEN BAR PACKAGES",
      href: "#",
      content:
        "GET ZOUK NIGHTCLUB OPEN BAR PACKAGES DIRECT 50% OFF USE CODE: NCNOB50 AT CHECKOUT BUY OPEN BAR PACKAGES FREE GUEST LIST     BEST PRICE…",
    },
    {
      number: "04.",
      linkText: "LAS VEGAS BACHELORETTE PARTY PACKAGES",
      href: "#",
      content:
        "PLANNING A BACHELORETTE PARTY IN LAS VEGAS CAN BE STRESSFUL, THERE IS NOT DOUBT ABOUT IT. THAT'S WHY WE CREATED OPTIONS FOR LAS VEGAS BACHELORETTE…",
    },
    {
      number: "05.",
      linkText: "LIV BEACH 2024 CASTING CALL",
      href: "#",
      content:
        "LIV BEACH AT THE FONTAINEBLEAU IN LAS VEGAS IS SET TO HOLD IT'S POOL PARTY CASTING CALL INTERVIEWS AND AUDITIONS FOR ALL POSITIONS ON JANUARY…",
    },
  ];

  const listEventField = document.getElementById("header");

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");

  // Create header-title div
  const headerTitle = document.createElement("div");
  headerTitle.classList.add("header-title");

  // Create link inside header-title div
  const logoLink = document.createElement("a");
  logoLink.setAttribute("href", "#");

  // Create logo image inside logoLink
  const logoImg = document.createElement("img");
  logoImg.setAttribute("src", "./assets/images/logo.png");
  logoImg.setAttribute("alt", "logo");
  logoImg.classList.add("logo");

  // Append logoImg to logoLink
  logoLink.appendChild(logoImg);

  // Append logoLink to header-title
  headerTitle.appendChild(logoLink);

  // Create slider div
  const slider = document.createElement("div");
  slider.classList.add("slider");

  // Create slider-container div
  const sliderContainer = document.createElement("div");
  sliderContainer.classList.add("slider-container");

  // Create slider-widget div
  const sliderWidget = document.createElement("div");
  sliderWidget.classList.add("slider-widget");

  // Create slider-number-container div
  const sliderNumberContainer = document.createElement("div");
  sliderNumberContainer.classList.add("slider-number-container");

  // Create slider-number div
  const sliderNumber = document.createElement("div");
  sliderNumber.classList.add("slider-number");
  sliderNumber.textContent = sliderData[0].number;

  // Append sliderNumber to sliderNumberContainer
  sliderNumberContainer.appendChild(sliderNumber);

  // Create slider-content div
  const sliderContent = document.createElement("div");
  sliderContent.classList.add("slider-content");

  // Create link inside slider-content div
  const linkText = document.createElement("a");
  linkText.classList.add("link-text");
  linkText.setAttribute("href", "#");
  linkText.textContent = sliderData[0].linkText;

  // Create span element for extra-text
  const extraText = document.createElement("span");
  extraText.classList.add("extra-text");
  extraText.textContent = sliderData[0].content;

  // Append linkText and extraText to sliderContent
  sliderContent.appendChild(linkText);
  sliderContent.appendChild(extraText);

  // Append sliderNumberContainer and sliderContent to sliderWidget
  sliderWidget.appendChild(sliderNumberContainer);
  sliderWidget.appendChild(sliderContent);

  // Create slider-button-container div
  const sliderButtonContainer = document.createElement("div");
  sliderButtonContainer.classList.add("slider-button-container");

  // Create prev-button div
  const prevButton = document.createElement("div");
  prevButton.setAttribute("id", "prev-button");
  prevButton.classList.add("slider-button");
  prevButton.textContent = "<<";

  // Create next-button div
  const nextButton = document.createElement("div");
  nextButton.setAttribute("id", "next-button");
  nextButton.classList.add("slider-button");
  nextButton.textContent = ">>";

  // Append prevButton and nextButton to sliderButtonContainer
  sliderButtonContainer.appendChild(prevButton);
  sliderButtonContainer.appendChild(nextButton);

  // Append sliderWidget and sliderButtonContainer to sliderContainer
  sliderContainer.appendChild(sliderWidget);
  sliderContainer.appendChild(sliderButtonContainer);

  // Append sliderContainer to slider
  slider.appendChild(sliderContainer);

  // Append headerTitle and slider to headerContainer
  headerContainer.appendChild(headerTitle);
  headerContainer.appendChild(slider);

  // Append headerContainer to body
  listEventField.appendChild(headerContainer);

  // Slider script
  function updateSlider(index) {
    const sliderNumber = document.querySelector(".slider-number");
    const linkText = document.querySelector(".link-text");
    const extraText = document.querySelector(".extra-text");

    sliderNumber.innerHTML = sliderData[index].number;
    linkText.setAttribute("href", sliderData[index].href);
    linkText.innerHTML = sliderData[index].linkText;
    extraText.innerHTML = sliderData[index].content;
  }

  let currentIndex = 0;

  // Next function
  function nextSlide() {
    currentIndex = (currentIndex + 1) % sliderData.length;
    updateSlider(currentIndex);
    timeout = 5000;
  }
  // Prev function
  function prevSlide() {
    currentIndex = (currentIndex + sliderData.length - 1) % sliderData.length;
    updateSlider(currentIndex);
  }

  const prevBtn = document.querySelector("#prev-button");
  prevBtn.addEventListener("click", prevSlide);

  const nextBtn = document.querySelector("#next-button");
  nextBtn.addEventListener("click", nextSlide);
});
