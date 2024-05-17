const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good After Noon";
} else {
  greeting = "Good evening";
}
document.getElementById('time').innerHTML = greeting;

// Initial display settings for project categories
const htmlProjects = document.querySelectorAll('.col-md-3#html');
const phpProjects = document.querySelectorAll('.col-md-3#php');
const jsProjects = document.querySelectorAll('.col-md-3#javascript');

// Function to show all projects or filter by category
function filterProjects(category) {
  if (category === 'all') {
    // Show all projects
    showProjects(htmlProjects);
    showProjects(phpProjects);
    showProjects(jsProjects);
  } else if (category === 'html') {
    // Show HTML projects and hide others
    showProjects(htmlProjects);
    hideProjects(phpProjects);
    hideProjects(jsProjects);
  } else if (category === 'php') {
    // Show PHP projects and hide others
    showProjects(phpProjects);
    hideProjects(htmlProjects);
    hideProjects(jsProjects);
  } else if (category === 'javascript') {
    // Show JavaScript projects and hide others
    showProjects(jsProjects);
    hideProjects(htmlProjects);
    hideProjects(phpProjects);
  }
}

// Helper function to show projects
function showProjects(projects) {
  projects.forEach(project => {
    project.style.display = 'block';
  });
}

// Helper function to hide projects
function hideProjects(projects) {
  projects.forEach(project => {
    project.style.display = 'none';
  });
}

// Initial display - Show all projects
filterProjects('all');
