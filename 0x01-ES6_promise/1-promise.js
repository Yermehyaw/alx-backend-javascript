export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const newObj = {
      status: 200,
      body: 'Success',
    };
    if (success) {
      resolve(newObj);
    } else {
      reject(new Error('The fake API is not working currently')):
    }
  )};
}
