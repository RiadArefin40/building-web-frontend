import { ref } from 'vue';

export default function useAuth() {
    const authToken = ref(null)
    const isAuthenticated = ref(false);
    const authUser = ref(false);
    if (process.client) {
        authToken.value = localStorage.getItem('authToken');
        authUser.value = localStorage.getItem('authUser');
        console.log('authUser.value',authUser.value)
        isAuthenticated.value = !!authToken.value; }

  const login = (token, authData) => {
  
    localStorage.setItem('authToken', token);
    localStorage.setItem('authUser', authData.name);
    authUser.value = authData.name;
    authToken.value = token;
    isAuthenticated.value = true;
    console.log(token, authData)}


  const logout = () => {

    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    authToken.value = null;
    isAuthenticated.value = false;
    authUser.value = null;}
 
   
  return {
    authToken,
    authUser,
    isAuthenticated,
    login,
    logout,
  };
}
