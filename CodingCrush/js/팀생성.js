let addBtn = document.getElementById("team-add");
console.log(addBtn);
var contentId = 1;
if (addBtn != null) {
    
    addBtn.onclick = function () {
        
        let content = document.getElementById("team-view");
        let originalDiv = content.querySelector(`#team-plus`);
        let newDiv = document.createElement("div");
        newDiv.id = `team${contentId}list`;
        newDiv.innerHTML = `
            <h2 class="team-name">${contentId}팀</h2>
            <button class="delete" id="team${contentId}">x</button>
            <div class ="team-box">${contentId}팀 인원을 올 공간</div>
        `;

        content.insertBefore(newDiv,content.children[contentId-1]);

        contentId++;
        console.dir(content);

        // 삭제버튼 눌렀을 때 작동
        let deleteBtn = document.getElementsByClassName("delete");

        for (let i = 0; i < deleteBtn.length; i++) {
            console.log("i", i)
            deleteBtn[i].onclick = function (e) {
                console.log(e.target.id);
                let deleteContent = document.getElementById(`${e.target.id}list`);
                console.dir(deleteContent);
                deleteContent.remove();
                contentId--;
            };
        }
    };
};

let popUpBtn = document.getElementById("팀생성-popup창");

popUpBtn.onclick = function () {
    window.open("팀생성_팝업창.html","_blank","width=400px,height=500px");
}