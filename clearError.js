//Improved error handling in Firebase Authentication

function handleAuthError(error) {
  switch (error.code) {
    case 'auth/invalid-email':
      console.error('Invalid email address:', error);
      // ... user-friendly message
      break;
    case 'auth/user-disabled':
      console.error('User account disabled:', error);
      // ... user-friendly message
      break;
    case 'auth/network-request-failed':
      console.error('Network request failed. Please check your internet connection.', error);
      // ... user-friendly message
      break;
    // Add more specific error cases here
    default:
      console.error('An unexpected error occurred:', error);
      // ... user-friendly message and optional fallback handling
      break;
  }
}

//Example usage:
firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(handleAuthError); 