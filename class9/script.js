let mainBtn = document.querySelector("#mainBtn");
let form = document.querySelector(".form");
let userForm = document.querySelector("form");
let container = document.querySelector(".container");

let cuForm = document.querySelector("#cuform");

let users = JSON.parse(localStorage.getItem("users")) || [];

let renderUi = () => {
  container.innerHTML = "";
  users.forEach((elem, index) => {
    container.innerHTML += `
          <div class="card">
                  <div class="img">
                    <img
                      src="${elem.url}"
                      alt="Image"
                    />
                  </div>
                  <div class="content">
                    <h4>${elem.name}</h4>
                    <p>${elem.email}</p>
                    <p>${elem.mobile}</p>
                  </div>
                  <button onclick="deleteUser(${index})">Delete</button>
                </div>
          `;
  });
};

mainBtn.addEventListener("click", () => {
  form.style.display = "flex";
});

cuForm.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.id === "cuform") {
    form.style.display = "none";
  }
});

userForm.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
  let name = e.target[0].value;
  let email = e.target[1].value;
  let mobile = e.target[2].value;
  let url = e.target[3].value;

  if (!name || !email || !mobile || !url) {
    alert("all fields are required");
    return;
  }

  let obj = {
    name,
    email,
    mobile,
    url,
  };

  users.push(obj);

  localStorage.setItem("users", JSON.stringify(users));

  form.style.display = "none";

  userForm.reset();
  renderUi();
});

let deleteUser = (index) => {
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  renderUi();
};

renderUi();
