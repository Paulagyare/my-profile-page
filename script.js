// Get the elements to be observed
const textElement = document.querySelector('#text-container p');
const imgElement = document.querySelector('#text-container img.profile-pic');

// Set up the Intersection Observer
const observerLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'in-view-left' class when the text is in the viewport
            textElement.classList.add('in-view-left');
            // Stop observing once the animation is triggered
            observerLeft.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold as needed

const observerRight = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'in-view-right' class when the image is in the viewport
            imgElement.classList.add('in-view-right');
            // Stop observing once the animation is triggered
            observerRight.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold as needed

// Start observing the elements
observerLeft.observe(textElement);
observerRight.observe(imgElement);

function loadMoreProjects() {
    // Implement your logic to load more projects here
    console.log('Loading more projects...');
}
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Simple email validation
      if (!validateEmail(email)) {
        responseMessage.textContent = 'Please enter a valid email address.';
        return;
      }
  
      // You can perform additional validation here if needed
  
      // Simulating sending message
      setTimeout(function() {
        responseMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        contactForm.reset();
      }, 1000);
    });
  
    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  });
  