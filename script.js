// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// GitHub Information Update Function
function updateGitHubInfo() {
  const githubDetailsElement = document.getElementById('github-details');
  
  fetch('https://api.github.com/users/lewiskirega')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Extract useful information from the GitHub API response
      const bio = data.bio || 'Front-end Web Developer and Cybersecurity Expert';
      const repoCount = data.public_repos || 0;
      const followers = data.followers || 0;
      const location = data.location || 'Kenya';
      
      // Create a formatted message with the GitHub information
      const githubInfo = `
        I am Lewis Kirega, a ${bio} based in ${location}. 
        I design intuitive, responsive web interfaces and secure digital systems. 
        My expertise includes HTML, CSS, JavaScript, Python, and C++, along with a strong focus on 
        vulnerability assessments and secure system design to protect digital assets.
        I have ${repoCount} public repositories on GitHub and ${followers} followers.
      `;
      
      // Update the element with the new information
      if (githubDetailsElement) {
        githubDetailsElement.innerHTML = githubInfo;
      }
    })
    .catch(error => {
      console.error('Error fetching GitHub information:', error);
      // Keep the existing content in case of an error
      if (githubDetailsElement) {
        console.log('Failed to update GitHub information. Using default content.');
      }
    });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', updateGitHubInfo);
