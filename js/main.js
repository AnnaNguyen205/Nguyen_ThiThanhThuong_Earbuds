console.log("JavaScript is connected.");

// Menu Animation
function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

(() => {
  console.log("IIFE Fired");

  // Variables
  const hotspots = document.querySelectorAll(".Hotspot");

  // Features
  const features = [
    {
      image: "./images/feature-1.png",
      name: "Noise Cancellation",
      description:
        "Advanced noise-canceling technology filters out background noise, allowing for immersive listening in any environment.",
    },
    {
      image: "./images/feature-2.png",
      name: "Magnetic Logo",
      description:
        "Unique magnetic logo design for easy attachment and storage, adding a touch of style and functionality to your earbuds.",
    },
    {
      image: "./images/feature-3.png",
      name: "Volume Control",
      description:
        "Easily adjust the volume with touch-sensitive controls, giving you seamless control over your audio experience.",
    },
    {
      image: "./images/feature-4.png",
      name: "Bluetooth Connectivity",
      description:
        "Reliable Bluetooth connection with extended range, ensuring uninterrupted audio streaming and fast device pairing.",
    },
  ];

  function loadInfo() {
    features.forEach((feature, index) => {
      const selected = document.querySelector(
        `.Hotspot[slot="hotspot-${index + 1}"]`
      );
      console.log(selected);

      if (selected) {
        const featureImage = document.createElement("img");
        featureImage.src = feature.image;

        const featureName = document.createElement("h3");
        featureName.textContent = feature.name;

        const featureDescription = document.createElement("p");
        featureDescription.textContent = feature.description;

        selected
          .querySelector(".HotspotAnnotation")
          .append(featureImage, featureName, featureDescription);
      }
    });
  }

  loadInfo();

  // Show and hide hotspots
  function showInfo(e) {
    const selected = e.currentTarget.querySelector(".HotspotAnnotation");
    if (selected) {
      gsap.to(selected, { autoAlpha: 1, duration: 0.5 });
    }
  }

  function hideInfo(e) {
    const selected = e.currentTarget.querySelector(".HotspotAnnotation");
    if (selected) {
      gsap.to(selected, { autoAlpha: 0, duration: 0.5 });
    }
  }

  // Add event listeners for showing and hiding info
  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
})();
