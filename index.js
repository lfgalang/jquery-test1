page(); // Start the router

// Add an event listener to handle route changes
page('*', function() {
  console.log('Route not found');
  // Code to handle 404 page or redirect as needed
});