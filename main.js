document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('main > section');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetSectionId = this.getAttribute('data-section') + '-section';
      
      sections.forEach(section => {
        section.classList.remove('active-section');
        section.classList.add('hidden-section');
      });
      
      const targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        targetSection.classList.remove('hidden-section');
        targetSection.classList.add('active-section');
      }
    });
  });
  
  // Initially show the dashboard section
  const dashboardSection = document.getElementById('dashboard-section');
  if (dashboardSection) {
    dashboardSection.classList.remove('hidden-section');
    dashboardSection.classList.add('active-section');
  }
});

// Inside your script.js file

function fetchCrucialDiagnosesData() {
  fetch('/api/dashboard/crucial_diagnoses')
    .then(response => response.json())
    .then(data => {
      console.log("Crucial Diagnoses Data:", data);
      // Here you would process the data and update the graphs on the dashboard
      const diagnosisGraphsContainer = document.getElementById('crucial-diagnosis-graphs');
      if (diagnosisGraphsContainer) {
        diagnosisGraphsContainer.textContent = 'Data loaded. Implement graph rendering here.';
        // Example of how you might access the data:
        for (const diagnosis in data) {
          console.log(`${diagnosis}: Count - ${data[diagnosis].count}, Trend - ${data[diagnosis].trend}`);
        }
      }
    })
    .catch(error => {
      console.error("Error fetching crucial diagnoses data:", error);
      const diagnosisGraphsContainer = document.getElementById('crucial-diagnosis-graphs');
      if (diagnosisGraphsContainer) {
        diagnosisGraphsContainer.textContent = 'Error loading diagnosis data.';
      }
    });
}

// Call this function when the dashboard section is loaded or on page load
document.addEventListener('DOMContentLoaded', function() {
  // ... (your existing navigation JavaScript) ...
  if (window.location.hash === '#dashboard' || !window.location.hash) {
    fetchCrucialDiagnosesData();
  }
  // You might need to call fetchCrucialDiagnosesData() again when the dashboard
  // link is specifically clicked, depending on how you manage section visibility.
});

// Modify your navigation click handler to potentially trigger data fetching
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // ... (your existing navigation logic) ...
    if (this.getAttribute('data-section') === 'dashboard') {
      fetchCrucialDiagnosesData();
    }
  });
});