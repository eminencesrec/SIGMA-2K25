// Disable right-click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disable text selection
document.addEventListener("selectstart", (event) => event.preventDefault());
document.addEventListener("mousedown", (event) => event.preventDefault());

// Disable keyboard shortcuts for Developer Tools
document.addEventListener("keydown", (event) => {
    if (
        event.ctrlKey && 
        (event.key === "u" || event.key === "U" ||   // Ctrl + U (View Source)
         event.key === "s" || event.key === "S" ||   // Ctrl + S (Save Page)
         event.key === "c" || event.key === "C" ||   // Ctrl + C (Copy)
         event.key === "x" || event.key === "X" ||   // Ctrl + X (Cut)
         event.key === "v" || event.key === "V" ||   // Ctrl + V (Paste)
         event.key === "p" || event.key === "P" ||   // Ctrl + P (Print)
         event.key === "i" || event.key === "I" ||   // Ctrl + Shift + I (DevTools)
         event.key === "j" || event.key === "J" ||   // Ctrl + Shift + J (Console)
         event.key === "k" || event.key === "K" ||   // Ctrl + Shift + K (Firefox DevTools)
         event.key === "h" || event.key === "H")     // Ctrl + Shift + H (Browser History)
    ) {
        event.preventDefault();
    }
    
    if (
        event.ctrlKey && event.shiftKey && 
        (event.key === "I" || event.key === "J" || event.key === "K")
    ) {
        event.preventDefault();
    }

    if (event.key === "F12") {
        event.preventDefault();
    }
});

// Prevent F12, Ctrl + Shift + I, and Ctrl + Shift + J (DevTools)
document.addEventListener("keydown", (event) => {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J"))) {
        event.preventDefault();
    }
});

// Detect if DevTools is open
setInterval(() => {
    const before = new Date().getTime();
    debugger;
    const after = new Date().getTime();
    if (after - before > 200) {
        alert("Developer Tools detected! Please close it.");
        window.location.href = "about:blank"; // Redirects to a blank page
    }
}, 1000);
