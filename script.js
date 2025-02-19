// Initialize the map
const map = L.map('map', {
    crs: L.CRS.Simple, // Use simple coordinates
    minZoom: -2 // Allow zooming out
});

// Get your image dimensions (replace these with your PNG's actual size)
const imageWidth = 5635; // Your PNG width in pixels
const imageHeight = 6667; // Your PNG height in pixels

// Define the image boundaries
const imageBounds = [
    [0, 0], // Bottom-left corner
    [imageHeight, imageWidth] // Top-right corner (note: height comes first)
];

// Add the image overlay
L.imageOverlay('map.png', imageBounds).addTo(map);

// Set the view to show the entire image
map.fitBounds(imageBounds);

// Add a simple marker (example)
const marker = L.marker([imageHeight/2, imageWidth/2]).addTo(map);
marker.bindPopup("<b>Center Point!</b><br>This is the middle of the map");