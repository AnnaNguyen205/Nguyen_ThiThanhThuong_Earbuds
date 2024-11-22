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
      image: "./images/feature-1.svg",
      name: "Noise Cancellation",
      description:
        "Advanced noise-canceling technology filters out background noise, allowing for immersive listening in any environment.",
    },
    {
      image: "./images/feature-2.svg",
      name: "Magnetic Logo",
      description:
        "Unique magnetic logo design for easy attachment and storage, adding a touch of style and functionality to your earbuds.",
    },
    {
      image: "./images/feature-3.svg",
      name: "Volume Control",
      description:
        "Easily adjust the volume with touch-sensitive controls, giving you seamless control over your audio experience.",
    },
    {
      image: "./images/feature-4.svg",
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

  // X-ray Slider
  const divisor = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");

  function moveDivisor() {
    console.log(slider.value);
    divisor.style.width = slider.value + "%";
  }
  slider.addEventListener("input", moveDivisor);

  // SCROLLING EARBUDS

  const canvas = document.querySelector("#explode-view");
  const context = canvas.getContext("2d");

  canvas.width = 1920;
  canvas.height = 1200;

  const frameCount = 450; // how many frame do we have

  const images = []; //array to hold all of our images

  //create an object called buds to hold the current frame
  const buds = {
    frame: 0,
  };

  //run a for loop to populate image array
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = `images/heart-earbuds${(i + 1).toString().padStart(4, "0")}.png`;
    images.push(img);
  }

  //   console.table(images);

  gsap.to(buds, {
    frame: 449,
    snap: "frame",
    scrollTrigger: {
      trigger: "#explode-view",
      pin: true,
      scrub: 1,
      markers: false,
      start: "top top",
    },
    onUpdate: render,
  });

  images[0].addEventListener("load", render);

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    // console.log(buds.frame);
    console.log(images[buds.frame]);
    context.drawImage(images[buds.frame], 0, 0);
  }

  // COLORS
  const earbuds = document.querySelector("#ear-buds");
  const button = document.querySelectorAll("#color-con button");

  function swapColor(e) {
    console.log(e.currentTarget.id);
    const selected = e.currentTarget.id;
    earbuds.src = `images/color-${selected}.png`;
  }

  button.forEach((button) => {
    button.addEventListener("click", swapColor);
  });

  // Video Player
  const player = new Plyr("video");
})();
