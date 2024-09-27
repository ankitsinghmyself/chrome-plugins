// Function to trigger image download
function downloadImage(url, fileName) {
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName || "image"; // Use a default name if fileName is not provided
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  console.log("Image download triggered for:", fileName);
}

// Function to add download icons to each image on the page
function addDownloadIconsToImages() {
  // Select img elements inside ._aagv class
  const images = document.querySelectorAll("img");

  [...images].forEach((img, index) => {
    // Get the image dimensions to set the wrapper size correctly
    const imgWidth = img.width || img.naturalWidth;
    const imgHeight = img.height || img.naturalHeight;

    // Create a wrapper div around the image to hold the icon
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative"; // To allow absolute positioning of the icon
    wrapper.style.display = 'inline-block'; // Ensure it wraps tightly around the image
    wrapper.style.width = `${imgWidth}px`;  // Set wrapper width to image width
    wrapper.style.height = `${imgHeight}px`; // Set wrapper height to image height

    // Insert the wrapper before the image and move the image into the wrapper
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);

    // Ensure the image is displayed correctly
    img.style.display = 'block'; // Ensure image takes full width in the wrapper

    // Create the download icon element
    const downloadIcon = document.createElement("div");
    downloadIcon.innerHTML = "⬇"; // Simple text icon or use an image/font-awesome icon
    downloadIcon.title = "Download Image";
    downloadIcon.style.position = "absolute";
    downloadIcon.style.top = "10px"; // Adjust positioning as needed
    downloadIcon.style.right = "10px";
    downloadIcon.style.backgroundColor = "green";
    downloadIcon.style.color = "white";
    downloadIcon.style.padding = "5px";
    downloadIcon.style.cursor = "pointer";
    downloadIcon.style.zIndex = "999999"; // Ensure it stays above the image
    downloadIcon.style.textDecoration = "none";

    // Handle the download action
    downloadIcon.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent triggering any parent click events
      const imgUrl = img.src;
      const fileName = img.alt || `image-${index + 1}.jpg`; // Generate a unique filename

      // Check if the image URL is valid
      if (imgUrl) {
        downloadImage(imgUrl, fileName);
      } else {
        console.error("Image URL not found for:", img);
      }
    });

    // Append the icon to the wrapper
    wrapper.appendChild(downloadIcon);
  });
}

// Call the function to add download icons when the script runs
addDownloadIconsToImages();
