export function restrictZoom() {

    function handleZoom() {
      const zoom = window.devicePixelRatio * 100;
  
      // Max 150%
      if (zoom > 150) {
        document.body.style.zoom = "150%";
      }
  
      // Min 60%
      if (zoom < 60) {
        document.body.style.zoom = "60%";
      }
    }
  
    // run on load
    handleZoom();
  
    // run on resize (zoom change detect)
    window.addEventListener("resize", handleZoom);
  }