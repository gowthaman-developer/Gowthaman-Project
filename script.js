//Write the logic to Get the data
var data;
var staticUrl = "https://cataas.com/cat/";
var result;
async function init() {
  let users;

  try {
    const data = await fetch("https://cataas.com/api/cats?tags=cute", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    users = await data.json();
    // console.log(users);
  } catch (error) {
    console.log(error);
  }
  return users;
}

// getUser();

async function displayUser() {
  var users = await init();
  console.log(users);
  this.data = users;
}

displayUser();

function openSearch() {
  var inputCatName = document.getElementById("CatName").value;
  var info = [];
  info = this.data;
  var catId;
  for (var i = 0; i < info.length; i++) {
    //console.log(info[i]);
    if (info[i].tags.includes(inputCatName)) {
      catId = info[i].id;
      break; // skip
    }
  }
  result = this.staticUrl.concat(catId);
  if (result != null && result != undefined && result != "") {
    document.getElementById("myImage").src = result;
  }
  console.log("--result--" + result);
}
