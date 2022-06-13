document.addEventListener('submit', postFormHandler);


const newPost = async(e) => {
    e.preventDefault();
    const blog_title = document.querySelector('#post-title').value.trim();
    const blog_conent = document.querySelector('#post-content').value.trim()
}