export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    const newObj = {
      status: 200,
      body: success,
    };
    promise
      .then(() => {
        console.log('Got a response from the API');
        resolve(newObj);
    })
      .catch((error) => {
        const Error = {};
        reject(Error);
      });
  )};
}
