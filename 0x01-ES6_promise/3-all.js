import uploadPhoto from './utils.js';
import createUser from './utils.js';

export default function handleProfileSignup() {
  return new Promise((resolve, reject) => {
    uploadPhoto()
      .then((response) => {
        const profileBody = response.body
      })
      .catch((error) => {
        new Error('Signup system offline');
      });
 
    createdUser()
      .then((response) => {
       returnString = `${returnString} + ${response.firstName} + ${response.lastName}`;
      })
      .catch((error) => {
        new Error('Signup system offline');
      })
      .finally(() => console.log(returnString))
  });
}
