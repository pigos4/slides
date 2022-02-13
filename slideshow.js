// Write your code here
(function () {
  let changePhoto = (direction, actualPhoto) => {
    const arrayOfPath = [
      "./img/20191022_144923.jpg",
      "./img/20191022_145635.jpg",
      "./img/20191022_154521.jpg",
      "./img/20191031_163727.jpg",
    ];

    if (direction === "fo" && actualPhoto < 4) {
      return {
        path: arrayOfPath[+actualPhoto],
        numberPhoto: +actualPhoto,
      };
    } else if (direction === "fo" && actualPhoto > 3) {
      return {
        path: arrayOfPath[0],
        numberPhoto: 0,
      };
    } else if (direction === "back" && actualPhoto >= 0) {
      return {
        path: arrayOfPath[+actualPhoto],
        numberPhoto: +actualPhoto,
      };
    } else if (direction === "back" && actualPhoto === -1) {
      return {
        path: arrayOfPath[3],
        numberPhoto: 3,
      };
    }
  };
  const root = document.querySelector("#root");

  const title = document.createElement("p");
  const img = document.createElement("img");
  const numberPhoto = document.createElement("p");
  const divButton = document.createElement("div");
  const buttonAutoBack = document.createElement("button");
  const buttonBack = document.createElement("button");
  const buttonStop = document.createElement("button");
  const buttonForward = document.createElement("button");
  const buttonAutoForward = document.createElement("button");
  let intervalIdBack;
  let intervalIdForward;

  title.innerText = "My pictures";
  buttonForward.innerText = "Forward";
  buttonBack.innerText = "Back";
  numberPhoto.innerText = 0;
  img.src = "./img/20191022_144923.jpg";
  buttonAutoBack.innerText = "Auto Back";
  buttonAutoForward.innerText = "Auto Forward";
  buttonStop.innerText = "Stop";

  const forwardPhoto = () => {
    const nextPhoto = changePhoto("fo", +numberPhoto.innerText + 1);
    img.src = nextPhoto.path;
    numberPhoto.innerText = nextPhoto.numberPhoto;
  };
  const backPhoto = () => {
    const nextPhoto = changePhoto("back", +numberPhoto.innerText - 1);
    img.src = nextPhoto.path;
    numberPhoto.innerText = nextPhoto.numberPhoto;
  };
  function intervalBack(stop) {
    if (stop) {
      clearInterval(intervalIdBack);
    } else {
      clearInterval(intervalIdForward);
      intervalIdBack = setInterval(backPhoto, 1000);
    }
  }
  function intervalForward(stop) {
    if (stop) {
      clearInterval(intervalIdForward);
    } else {
      clearInterval(intervalIdBack);
      intervalIdForward = setInterval(forwardPhoto, 1000);
    }
  }
  buttonForward.addEventListener("click", forwardPhoto);
  buttonBack.addEventListener("click", backPhoto);
  buttonAutoBack.addEventListener("click", () => intervalBack());
  buttonStop.addEventListener("click", () => {
    intervalBack(true);
    intervalForward(true);
  });
  buttonAutoForward.addEventListener("click", () => intervalForward());

  root.appendChild(title);
  root.appendChild(img);
  root.appendChild(numberPhoto);
  root.appendChild(buttonAutoBack);

  root.appendChild(buttonBack);
  root.appendChild(buttonStop);
  root.appendChild(buttonForward);
  root.appendChild(buttonAutoForward);
})();
