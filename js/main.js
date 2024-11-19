// <div id="video-gallery">
    <!-- Videos will be dynamically added here -->
</div> const videos = [
    {
        title: "Action Movie",
        src: "action-movie.mp4",
        description: "A thrilling action short film.",
        tags: ["#Action", "#Thriller"]
    },
    {
        title: "Tiny Slut Enjoys Big Cock",
        src: "romantic-movie.mp4",
        description: "A heartwarming romantic short film.",
        tags: ["#Blow Job", "#Pov"]
    }
];

const gallery = document.getElementById('video-gallery');

videos.forEach(video => {
    const videoSection = document.createElement('section');
    videoSection.classList.add('video');

    videoSection.innerHTML = `
        <h2>${video.title}</h2>
        <video controls>
            <source src="${video.src}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <p class="description">${video.description}</p>
        <div class="tags">
            ${video.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
    `;

    gallery.appendChild(videoSection);
});Add all your JS here