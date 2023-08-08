// Simulated course data (replace with actual data from a database)
const courses = [
    { title: "Introduction to Web Development", price: "$99" },
    { title: "Graphic Design Basics", price: "$79" },
    { title: "Python Programming 101", price: "$149" }
];

// Populate course cards dynamically
const coursesSection = document.querySelector(".courses");

courses.forEach(course => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");
    courseCard.innerHTML = `
        <h3>${course.title}</h3>
        <p>Price: ${course.price}</p>
        <button class="buy-btn">Buy Now</button>
    `;
    coursesSection.appendChild(courseCard);
});