const GITHUB_URL = "https://api.github.com/users/Shadasaadi";
let initialMarkerCordsIdx = 0;
let map;
const initialPreviousCardClasses = 'card-button button-orange';
const mapCords = [
  {
    lat: 32.5460435745253,
    long: 35.155401234229316,
  },
  {
    lat: 32.11263942326838,
    long: 34.79895969483696,
  },
  {
    lat: 49.22748730787587,
    long: -122.97957033213928,
  },
  {
    lat: 35.742176924375364,
    long:139.53900531231497
  },
];
fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("my-name");
    profileImage.src = data.avatar_url;
    profileName.innerText = data.name;
  });

window.addEventListener("load", () => {
const langsArr = ['HTML','Css','Javascript'];
document.getElementById("lang").innerText = langsArr.toString();

  this.map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: new google.maps.LatLng(
      mapCords[initialMarkerCordsIdx].lat,
      mapCords[initialMarkerCordsIdx].long
    ),
  });

  for (let i = 0; i < mapCords.length; i++){
    addMarker(mapCords[i]);
  }
  if (initialMarkerCordsIdx == 0) {
    document.getElementById("previous-button").className = "hidden";
  }
});
const nextLocation = (next) => {
  if (initialMarkerCordsIdx < 3 && next) {
    initialMarkerCordsIdx++;
    document.getElementById("previous-button").className = initialPreviousCardClasses;
    this.map.setCenter(
      new google.maps.LatLng(
        mapCords[initialMarkerCordsIdx].lat,
        mapCords[initialMarkerCordsIdx].long
      )
    );
  } else if (initialMarkerCordsIdx > 0 && !next) {
    initialMarkerCordsIdx--;
    this.map.setCenter(
      new google.maps.LatLng(
        mapCords[initialMarkerCordsIdx].lat,
        mapCords[initialMarkerCordsIdx].long
      )
    );
  }
  if (initialMarkerCordsIdx == 0) {
    document.getElementById("previous-button").className = "hidden";
  }
  if (initialMarkerCordsIdx === mapCords.length - 1) {
    document.getElementById("next-button").className = "hidden";
  } else {
    document.getElementById("next-button").className = "card-button button-blue js-message-btn";
  }
}; 

function addMarker(location) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(location.lat, location.long),
    map: this.map
});
}
function printInfo(){
 const firstName = document.getElementById("fname").value;
 const lastName = document.getElementById("lname").value;
 const email = document.getElementById("email").value;
 const phoneNumber = document.getElementById("phonenumber").value;
 const comment = document.getElementById("comment2").value;

 console.log(`First Name: ${firstName}, Last Name: ${lastName},
  Email: ${email},Phone Number: ${phoneNumber}
  Comment: ${comment}`);
}

function checkForm()
{
    const formElements = document.forms["contact-form"].elements;
    let canSubmit = true;
    for (let i = 0; i < formElements.length; i++) 
    {
      console.log('home',formElements[i].id, formElements[i].required)
        if ( formElements[i].required && formElements[i].value < 1 ) canSubmit = false;
    }
    if (canSubmit) {
        document.getElementById('submit-button').disabled = false;
        document.getElementById('submit-button').className = 'card-button button-blue new-mg js-message-bt';
    }
}

 function openCV()
 {
   window.open('https://drive.google.com/file/d/1y_JYZKKTQAdQxNM1G-XDBU40ydMwZ1q7/view?usp=sharing')
 }

 function openEmail()
 {
   window.location.assign("mailto:shanatdg@gmail.com");
 }