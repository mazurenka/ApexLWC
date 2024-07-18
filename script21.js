document.addEventListener("hello", function (data) {
  console.log("hello has called and send", data.detail);
});

function callCustomMethod() {
  let event = new CustomEvent("hello", {
    detail: { name: "andre" },
  });
  document.dispatchEvent(event);
}

// function functionOnclick() {
//     console.log("Click Event")
// }

/*let btn = document.querySelector("button")
btn.addEventListener("click", onClickFoo)*/
