import courseDetails from "./data.js";

var renderHTML = '';
function displayCourses(){
    courseDetails.forEach((course) => {
        let courseHtml = `
            <div class="card">
                <img src="${course.image}" class="card-image">
                <p class="course-name">${course.name}</p>
                <p class="course-price">${course.price}</p>
                <button>Buy</button>
            </div>
            `
        renderHTML += courseHtml
})

document.querySelector('.js-container').innerHTML = renderHTML;

}

displayCourses();