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
