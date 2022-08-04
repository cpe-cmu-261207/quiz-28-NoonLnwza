async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  const Imgprofile = document.getElementById("img-profile");
  const Gendericon = document.getElementById("span-gender-icon");
  const Name = document.getElementById("p-name");
  if (resp.data.results[0].gender == "male") {
    Gendericon.innerText = "👨";
  } else {
    Gendericon.innerText = "👩";
  }
  Name.innerText = resp.data.results[0].name;
  alert(resp.results[0]);
  Imgprofile.src = resp.data.results[0].picture.large;
}

callApi();

const btnRandom = document.getElementById("btn-random");
btnRandom.onclick = async = () => {
  callApi();
};
