document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    //console.log('Clicked')
    //Get name data
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let hobby = document.getElementById("hobbies").value;

    const user = {
      name: name,
      age: age,
      email: email,
      hobby: hobby,
    };

    const myJSON = JSON.stringify(user);
    console.log(user);
    console.log(myJSON);
    document.getElementById("jsonOutput").innerHTML = myJSON;
  });