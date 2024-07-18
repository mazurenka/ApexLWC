function checkIsSuccess(data) {
  return new Promise(function (resolve, reject) {
    if (data === "success") {
      return resolve("successfully executed");
    } else {
      return reject("unsuccessfully executed");
    }
  });
}

checkIsSuccess("success")
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error(error);
  });

console.log(checkIsSuccess("success"));

fetch("https://api.github.com/users/mazurenka")
  .then(function (result) {
    return result.json();
  })
  .then(function (response) {
    console.log(response);
  });
