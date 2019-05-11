var iFrame  = document.createElement ("iframe");
// var iFrame2  = document.createElement ("iframe");
// iFrame.id ="myCamera";
iFrame.style.width ="200px";
iFrame.style.height ="200px";
iFrame.style.position ="fixed";
iFrame.style.overflow ="hidden";
iFrame.src  = chrome.extension.getURL ("Embedded_Hello_world.html");

// iFrame2.id = "myResult";

document.body.insertBefore (iFrame, document.body.firstChild);
console.log('HARBR IS HERE');
