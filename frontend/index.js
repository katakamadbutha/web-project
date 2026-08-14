// alert("hello from js")
const users = [
    {
        name: "John Doe",
        gender: "Male",
        image: "john.png"
    },
    {
        name: "Jane Doe",
        gender: "Female",
        image: "jane.png"
    }
];

let curIndex = 0;

function toggle() {

    if (curIndex === 0) {
        curIndex = 1;
    } else {
        curIndex = 0;
    }

    document.getElementById("user-card-image").src = users[curIndex].image;
    document.getElementById("user-card-name").innerText = users[curIndex].name;
    document.getElementById("user-card-gender").innerText = users[curIndex].gender;
}


function random() {

    fetch("https://randomuser.me/api/")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            const detail = data.results[0];

            document.getElementById("user-card-image").src = detail.picture.large;

            document.getElementById("user-card-gender").innerText = detail.gender;

            const fullname =
                detail.name.title + " " +
                detail.name.first + " " +
                detail.name.last;

            document.getElementById("user-card-name").innerText = fullname;
        })
        .catch(function(error) {
            console.log("Error:", error);
        });
}