# CodingCrush
싸피 11기생들의 코딩 뽀개기 레포지토리입니다.
---

### github에 feature 새로 파서 push하는법
1. 작업할 local 컴퓨터 폴더 위치로 이동
   ```
   git clone <주소>
   ```
2. git clone이 끝나면 **로컬 컴퓨터의** (main)브랜치에 있는 상황인지 확인. **로컬 컴퓨터에서** 다른 브랜치를 파야 함
3. 로컬에서 새로운 브랜치 제작 및 이동
   ```
   git checkout -b [name_of_your_new_branch] // 아직 로컬에만 새 브랜치 만듦. github에 안 생김
   ```
4. ```
   git push origin [name_of_your_new_branch]  //3에서 정한 브랜치 이름으로 push. origin은 로컬 컴퓨터에서 사용하는 github의 명칭인 듯 한데 잘 모르겠음
   ```   
5. github에서 새로운 브랜치에 내가 파일 수정한 것이 올라갔는지 확인
