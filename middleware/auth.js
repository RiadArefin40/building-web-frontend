export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
    const token = localStorage.getItem('authToken');
    if (!token && to.name !== 'sign-in') {
      return navigateTo('/sign-in');
    }}
  });
  