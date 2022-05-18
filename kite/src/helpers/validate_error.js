export function validate_error(err) {
  if (err.response) {
    console.log(err.response.data);
  } else if (err.request) {
    console.log(err.request);
  } else {
    console.log("Error", err.message);
  }
  return [];
}
