document.addEventListener("DOMContentLoaded", function () {
  // Define input field configurations
  const inputFields = [
    {
      id: "firstName",
      name: "firstName",
      label: "Your First Name",
      type: "text",
      errorId: "firstNameError",
    },
    {
      id: "lastName",
      name: "lastName",
      label: "Your Last Name",
      type: "text",
      errorId: "lastNameError",
    },
    {
      id: "reservationDate",
      name: "reservationDate",
      label: "Date Attending (Pick From Calendar)",
      type: "date",
      errorId: "reservationDateError",
    },
    {
      id: "women",
      name: "women",
      label: "How many women?",
      type: "text",
      errorId: "womenError",
    },
    {
      id: "men",
      name: "men",
      label: "How many men?",
      type: "text",
      errorId: "menError",
    },
    {
      id: "email",
      name: "email",
      label: "Your Email",
      type: "text",
      errorId: "emailError",
    },
    {
      id: "Phone",
      name: "Phone",
      label: "Your Cell Phone Number",
      type: "text",
      errorId: "phoneError",
    },
    {
      id: "venue",
      name: "venue",
      label: "Venue",
      type: "text",
      errorId: "venueError",
    },
  ];
  // Define price table configurations
  const priceTable = [
    { type: "Females", price: "$30 - $75" },
    { type: "Males", price: "$50 - $100" },
    { type: "Females Guest List", price: "Free" },
    { type: "Males Guest List", price: "Free" },
  ];

  // Define event lists configurations
  const eventLists = [
    {
      month: "MAY",
      events: [
        {
          image: "./assets/images/Zouk-Nightclub-S.jpg",
          alt: "1",
          date: "15",
          name: "SLANDER",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/Illenium-Zouk-Profile.jpg",
          alt: "2",
          date: "16",
          name: "ILLENIUM",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/RL-Grime-Zouk-Profile.jpg",
          alt: "3",
          date: "17",
          name: "RL GRIME",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/Kaskade-Zouk-Profile.jpg",
          alt: "4",
          date: "18",
          name: "KASKADE",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/Kaskade-Zouk-Profile.jpg",
          alt: "5",
          date: "20",
          name: "KASKADE & DEADMAU5",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/Zouk-Nightclub-S.jpg",
          alt: "6",
          date: "23",
          name: "DAMANTE",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/Illenium-Zouk-Profile.jpg",
          alt: "7",
          date: "24",
          name: "ILLENIUM",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/DJ-Snake-Zouk-Profile.jpg",
          alt: "7",
          date: "25",
          name: "DJ SNAKE",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/Ludacris-Zouk-Profile.jpg",
          alt: "8",
          date: "26",
          name: "LUDACRIS",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/Zouk-Nightclub-S.jpg",
          alt: "9",
          date: "30",
          name: "SPECIAL GUEST",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/Illenium-Zouk-Profile.jpg",
          alt: "10",
          date: "31",
          name: "ILLENIUM",
          venue: "ZOUK NIGHTCLUB",
        },
      ],
    },
    {
      month: "JUNE",
      events: [
        {
          image: "./assets/images/Zouk-Nightclub-S.jpg",
          alt: "11",
          date: "01",
          name: "NICKY ROMERO",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/Cash-Cash-Zouk-Proflile.jpg",
          alt: "12",
          date: "06",
          name: "CASH CASH",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/Duke-Dumont-Profile.jpg",
          alt: "13",
          date: "07",
          name: "DUKE DUMONT",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/Illenium-Zouk-Profile.jpg",
          alt: "14",
          date: "08",
          name: "ILLENIUM",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/Zouk-Nightclub-S.jpg",
          alt: "15",
          date: "13",
          name: "SLANDER",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/Duke-Dumont-Profile.jpg",
          alt: "16",
          date: "14",
          name: "DUKE DUMONT",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/Illenium-Zouk-Profile.jpg",
          alt: "17",
          date: "15",
          name: "ILLENIUM",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/RL-Grime-Zouk-Profile.jpg",
          alt: "18",
          date: "20",
          name: "RL GRIME",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/James-Hype-Zouk-Profile.jpg",
          alt: "19",
          date: "21",
          name: "JAMES HYPE",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/Illenium-Zouk-Profile.jpg",
          alt: "20",
          date: "22",
          name: "ILLENIUM",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/Zouk-Nightclub-S.jpg",
          alt: "21",
          date: "27",
          name: "KROMI",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/DJ-Snake-Zouk-Profile.jpg",
          alt: "22",
          date: "28",
          name: "DJ SNAKE",
          venue: "ZOUK NIGHTCLUB",
        },
        {
          image: "./assets/images/Kaskade-Zouk-Profile.jpg",
          alt: "23",
          date: "29",
          name: "KASKADE",
          venue: "ZOUK NIGHTCLUB",
        },
      ],
    },
  ];

  // Function to create input areas dynamically

  const formContainer = document.getElementById("guestlistSignupForm");

  inputFields.forEach((field) => {
    const inputArea = document.createElement("div");
    inputArea.classList.add("input-area");

    const inputLabel = document.createElement("p");
    inputLabel.textContent = field.label;

    const inputField = document.createElement("input");
    inputField.setAttribute("id", field.id);
    inputField.setAttribute("name", field.name);
    inputField.setAttribute("type", field.type);
    inputField.classList.add("input-field");

    const errorElement = document.createElement("div");
    errorElement.setAttribute("id", field.errorId);
    errorElement.classList.add("error-field");

    inputArea.appendChild(inputLabel);
    inputArea.appendChild(errorElement);
    inputArea.appendChild(inputField);
    formContainer.appendChild(inputArea);
  });

  // Create submit button
  const buttonField = document.createElement("div");
  buttonField.classList.add("button-container");
  const submitButton = document.createElement("button");
  submitButton.setAttribute("id", "submit-button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "JOIN THE GUEST LIST";
  submitButton.classList.add("submit-button");
  buttonField.appendChild(submitButton);

  // Create spinner for loading
  const loader = document.createElement("div");
  loader.setAttribute("id", "loader");
  loader.classList.add("loader");
  buttonField.appendChild(loader);
  formContainer.appendChild(buttonField);

  // Create price table
  const table = document.getElementById("priceTable");

  priceTable.forEach((charge) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = charge.type;
    cell2.textContent = charge.price;
  });

  // Create list events
  const listEventField = document.getElementById("list-events");
  eventLists.forEach((list) => {
    const monthLabel = document.createElement("div");
    monthLabel.classList.add("event-month-title");
    monthLabel.textContent = list.month;
    const cardList = document.createElement("div");
    cardList.classList.add("month-event-list");
    list.events.forEach((event) => {
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("event-card");
      const imageField = document.createElement("img");
      imageField.classList.add("event-image");
      imageField.src = event.image;
      imageField.alt = event.alt;

      const dateField = document.createElement("div");
      const monthField = document.createElement("div");
      monthField.classList.add("event-month");
      monthField.textContent = list.month.substring(0, 3);
      const dayField = document.createElement("div");
      dayField.classList.add("event-date");
      dayField.textContent = event.date;
      dateField.classList.add("date-field");
      dateField.appendChild(dayField);
      dateField.appendChild(monthField);

      const extraField = document.createElement("div");
      const nameField = document.createElement("div");
      nameField.classList.add("event-name");
      nameField.textContent = event.name;
      const venueField = document.createElement("div");
      venueField.classList.add("event-venue");
      venueField.textContent = event.venue;
      extraField.appendChild(nameField);
      extraField.appendChild(venueField);

      cardContainer.appendChild(imageField);
      cardContainer.appendChild(dateField);
      cardContainer.appendChild(extraField);
      cardList.append(cardContainer);
    });
    listEventField.append(monthLabel);
    listEventField.append(cardList);
  });
});
