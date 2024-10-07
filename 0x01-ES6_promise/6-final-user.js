import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const progress = new Array({
    status: '<pending>',
    // value:
  });

  signUpUser(firstName, lastName)
    .then((response) => {
      progress.status = '<resolved>';
      progress.value = response;
    })
    .catch((error) => {
      progress.status = '<rejected>';
      progress.value = error;
    });

  uploadPhoto(FileName)
      .then((response) => {
      progress.status = '<resolved>';
      progress.value = response;
    })
    .catch((error) => {
      progress.status = '<rejected>';
      progress.value = error;
    });

  return progress;
}
