// PMRP Client-Side Script
document.addEventListener("DOMContentLoaded", () => {
    console.log("PMRP Website Loaded Successfully.");

    // Optional: Add smooth tracking or connection handling alerts if needed
    const connectBtn = document.querySelector(".btn-connect");
    
    connectBtn.addEventListener("click", (e) => {
        // This ensures the browser triggers the FiveM protocol handler smoothly
        console.log("Attempting to launch FiveM connection...");
    });
});
