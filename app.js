// Example JavaScript code (you can add more functionality as needed)
document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript logic here
  // For instance, handle click events on the navigation icons
  const feedIcon = document.querySelector(".icon:nth-child(1)");
  const tipIcon = document.querySelector(".icon:nth-child(2)");
  const servicesIcon = document.querySelector(".icon:nth-child(3)");
  const chatIcon = document.querySelector(".icon:nth-child(4)");

  feedIcon.addEventListener("click", () => {
    // Handle feed section click
    console.log("Feed section clicked");
  });

  tipIcon.addEventListener("click", () => {
    // Handle tip section click
    console.log("Tip section clicked");
  });

  // Add similar event listeners for services and chat sections
});
