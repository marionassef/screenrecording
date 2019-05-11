var imported = document.createElement('script');
imported.src = 'webcam.js';
document.head.appendChild(imported);
Webcam.attach('#myCamera');
