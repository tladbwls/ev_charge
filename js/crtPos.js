var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  //좌표를 알아낼 수 있는데, 여기서 알아낸 좌표를 kakaoAPI url에 사용할 것이다.
  // console.log("위도 : " + position.coords.latitude);
  // console.log("경도: " + position.coords.longitude);
  lat = crd.latitude;
  lon = crd.longitude;
  // console.log(lat);
  // console.log(lon);

  if (typeof getCrtNm == "function") {
    getCrtNm(lat, lon);
  }
  if (typeof getCrtLists == "function") {
    let prn = 1;
    getCrtLists(lat, lon, prn);
    const ldmr = document.querySelector(".item-list button");
    ldmr.addEventListener("click", function () {
      prn++;
      getCrtLists(lat, lon, prn);
    });
  }
}

function error(err) {
  console.warn("ERROR(" + err.code + "): " + err.message);
}

navigator.geolocation.getCurrentPosition(success, error, options);
