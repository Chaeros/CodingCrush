function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

// 드롭다운 외의 영역을 클릭하면 드롭다운 닫기
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function performSearch() {
  // 검색 카테고리
  var category = document.getElementById("searchCategory").value;
  
  // 검색어
  var searchTerm = document.getElementById("searchInput").value;

  // 여기에서 검색 기능을 구현하거나, 필요에 따라 다른 동작을 수행할 수 있습니다.
  // 예를 들면, 검색 결과를 서버로 전송하거나 다른 페이지로 리다이렉션할 수 있습니다.

  // 간단히 콘솔에 검색 정보 출력
  console.log("검색 카테고리:", category);
  console.log("검색어:", searchTerm);
}