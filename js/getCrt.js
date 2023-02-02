function getCrtNm(latitude, longitude) {
  $.ajax({
    url:
      "https://dapi.kakao.com/v2/local/geo/coord2address.json?x=" +
      longitude +
      "&y=" +
      latitude, //요청 엔드포인트
    type: "GET", // 요청 방식
    headers: {
      Authorization: "KakaoAK 4980a9a3fbaf0162dbdd8a893bba1377", // 승인 rest api key
    },
    success: function (data) {
      // console.log(data.documents[0].address.region_2depth_name);
      $(".crt-gu").text(data.documents[0].address.region_2depth_name);
      //지역 버튼 클릭시 데이터 전달
      $(".near-btns").on("click", function () {
        const region = $(".crt-gu").text();
        // console.log(region);
        location.href = `/ev_charge/pages/search_list.html?key=${region}`;
      });
    },
    error: function (e) {
      console.log(e);
    },
  });
}

const searchBtn = document.querySelector(".search-bar button");
searchBtn.addEventListener("click", function () {
  const searchParam = document.querySelector(".search-bar input").value;
  location.href = `/ev_charge/pages/search_list.html?key=${searchParam}`;
  console.log(searchParam);
});
