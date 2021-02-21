let blogs = {};

fetch('http://localhost:8000/blogs')
.then(res => res.json())
.then(data => {
    blogs = data; //additional features go here
})

const button = document.querySelector('h1');
//grab element <h1></h1>

//add event listener for click
button.addEventListener('click', () => {
    postBlogData();
});
// fire function 

function postBlogData() {
    fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(blogs)
    });
}