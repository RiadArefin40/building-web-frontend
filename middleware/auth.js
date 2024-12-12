export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const token = localStorage.getItem('authToken');

    // Check if the token is missing and the user is not navigating to the 'sign-in' page
    if (!token && to.name !== 'sign-in') {
      // Abort navigation by returning false
      localStorage.setItem('redirectTo', to.fullPath);
      const modalElement = document.getElementById('loginModal');

      if (modalElement) {
        // Use Bootstrap's native JavaScript API to show the modal
        $('#loginModal').modal('show');
      }

      // Abort the navigation by returning false
      return false;
    }
  }
});

  