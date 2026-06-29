const previewWindow = document.getElementById("previewWindow");

const previewButtons = document.querySelectorAll(".preview-btn");

async function loadPreview(name) {
  const response = await fetch(`previews/${name}/${name}.html`);

  const html = await response.text();

  previewWindow.innerHTML = html;

  if (name === "dashboard") {
    initializeDashboardChart();
  }
  if(name==="landing"){
    initializeHeroCarousel();
  }
}

previewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    previewButtons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    loadPreview(button.dataset.preview);
  });
});

function initializeDashboardChart() {
  const salesChartCTX = document.getElementById("salesChart");

  new Chart(salesChartCTX, {
    type: "line",

    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],

      datasets: [
        {
          data: [10000, 28000, 20000, 30000, 25000, 35000, 40000],

          tension: 0.4,
          borderWidth: 3,
          borderColor: "#bb86fc",
          pointRadius: 0
        }
      ]
    },

    options: {
      responsive: true,

      plugins: {
        legend: {
          display: false
        }
      },

      scales: {
        x: {
          grid: {
            display: false
          }
        },

        y: {
          beginAtZero: true,

          grid: {
            color: "#2d2d2d"
          }
        }
      }
    }
  });
}

function initializeHeroCarousel() {
  const dots = document.querySelectorAll(".dot");

  let currentSlide = 0;

  setInterval(() => {
    dots[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= dots.length) {
      currentSlide = 0;
    }

    dots[currentSlide].classList.add("active");
  }, 2500);

}

loadPreview("dashboard");
