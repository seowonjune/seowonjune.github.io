# 웹사이트 올리는 법 (약 15분)

## 1. 직접 바꿔야 하는 것 (3개)
1. **GitHub 아이디**: 아래 두 곳의 `seowonjune`을 본인 아이디로 변경
   - `astro.config.mjs` → `site: 'https://아이디.github.io'`
   - `src/config/site.ts` → `website`
   - `src/config/social.ts` → GitHub 링크
2. **프로필 사진**: 이미 들어가 있음 (public/profile.jpg). 바꾸려면 같은 이름으로 덮어쓰기
3. **CV PDF**: Overleaf에서 뽑은 CV를 `public/cv.pdf`로 넣기 (CV 페이지 다운로드 링크가 이 파일을 가리킴)

## 2. GitHub에 올리기
1. GitHub에서 새 저장소를 **`아이디.github.io`** 이름으로 만들기 (Public)
2. 이 폴더 안의 파일 전부를 그 저장소에 올리기
   ```bash
   cd 이 폴더
   git init && git add . && git commit -m "init site"
   git branch -M main
   git remote add origin https://github.com/아이디/아이디.github.io.git
   git push -u origin main
   ```
3. 저장소 **Settings → Pages → Source**를 **GitHub Actions**로 변경
4. Actions 탭에서 배포가 끝나면(2~3분) `https://아이디.github.io` 접속

## 3. 내용 고치기
- 소개글/뉴스: `src/content/bio.md`
- 논문: `src/content/publications/*.md` (파일 하나 = 논문 하나)
- CV 페이지: `src/content/cv.md`
- 고친 뒤 push하면 자동으로 다시 배포됨

## 로컬에서 미리 보기 (선택)
Node.js 22 이상 필요
```bash
npm install
npm run dev   # http://localhost:4321
```
