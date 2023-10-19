document.addEventListener("DOMContentLoaded", function () {
    const playButtonOverlay = document.querySelector('.play-button-overlay');
    const videoLinks = [
        'https://www.youtube.com/watch?v=VIDEO_ID1',
        'https://www.youtube.com/watch?v=VIDEO_ID2',
        'https://www.youtube.com/watch?v=VIDEO_ID3',
        // Add more video links here
    ];

    playButtonOverlay.addEventListener("click", function () {
        // Get a random index to choose a random video
        const randomIndex = Math.floor(Math.random() * videoLinks.length);
        const randomVideoUrl = videoLinks[randomIndex];

        // Open the random video in a new tab
        window.open(randomVideoUrl, '_blank');
    });

    // Add a hover effect to show the play button overlay
    document.querySelector('.video').addEventListener("mouseenter", function () {
        playButtonOverlay.style.opacity = 1;
    });

    // Remove the play button overlay on mouseout
    document.querySelector('.video').addEventListener("mouseleave", function () {
        playButtonOverlay.style.opacity = 0;
    });
});
