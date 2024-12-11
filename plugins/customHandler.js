export default defineNuxtPlugin(() => {
    const SETTINGS = {
      navBarTravelling: false,
      navBarTravelDirection: "",
      navBarTravelDistance: 150,
    };
  
    const colours = {
      0: "#fead00", // Add more colors if needed
    };
  
    // Initialize script when the document is ready
    const initializeProductNav = () => {
      const AdvancerLeft = document.getElementById("AdvancerLeft");
      const AdvancerRight = document.getElementById("AdvancerRight");
      const Indicator = document.getElementById("Indicator");
      const ProductNav = document.getElementById("ProductNav");
      const ProductNavContents = document.getElementById("ProductNavContents");
  
      const determineOverflow = (content, container) => {
        const containerMetrics = container.getBoundingClientRect();
        const contentMetrics = content.getBoundingClientRect();
        if (
          containerMetrics.left > contentMetrics.left &&
          containerMetrics.right < contentMetrics.right
        ) {
          return "both";
        } else if (contentMetrics.left < containerMetrics.left) {
          return "left";
        } else if (contentMetrics.right > containerMetrics.right) {
          return "right";
        } else {
          return "none";
        }
      };
  
      const moveIndicator = (item, color) => {
        const textPosition = item.getBoundingClientRect();
        const container = ProductNavContents.getBoundingClientRect().left;
        const distance = textPosition.left - container;
        const scroll = ProductNavContents.scrollLeft;
        Indicator.style.transform = `translateX(${distance + scroll}px) scaleX(${textPosition.width * 0.01})`;
        if (color) {
          Indicator.style.backgroundColor = color;
        }
      };
  
      // Add other event listeners and logic
      AdvancerLeft?.addEventListener("click", () => {
        // Your click logic
      });
  
      AdvancerRight?.addEventListener("click", () => {
        // Your click logic
      });
  
      ProductNavContents?.addEventListener("click", (e) => {
        const links = Array.from(document.querySelectorAll("#ProductNavContents .ProductNav_Link"));
        links.forEach((item) => item.setAttribute("aria-selected", "false"));
        e.target.setAttribute("aria-selected", "true");
        moveIndicator(e.target, colours[links.indexOf(e.target)]);
      });
    };
  
    // Ensure it runs only on client-side
    if (process.client) {
      window.addEventListener("load", initializeProductNav);
    }
  });
  