var iFrame  = document.createElement ("iframe");
// var iFrame2  = document.createElement ("iframe");
// iFrame.id ="myCamera";
iFrame.style.width ="320px";
iFrame.style.height ="240px";
iFrame.style.position ="fixed";
iFrame.style.overflow ="hidden";
iFrame.allow = 'microphone; camera';
// iFrame.allow = 'microphone';
iFrame.src  = chrome.extension.getURL ("Embedded_Hello_world.html");
// iFrame.src  = "https://www.youtube.com/embed/W7qWa52k-nE";

// iFrame2.id = "myResult";

document.body.insertBefore (iFrame, document.body.firstChild);
console.log('HARBR IS HERE');
