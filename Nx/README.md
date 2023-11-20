### 워크스페이스 설치

---

```jsx
//생성
npx create-nx-workspace

```

### 추가세팅

---

```jsx
//next.js
npm install --save-dev @nx/next
//tailwind
nx g @nx/react:setup-tailwind

```

### 프로젝트/라이브러리 명령어

---

```jsx

'주의 : 라이브러리 생성해서 app에 넣으면 바로 읽지못함 app 재실행필요.'
//생성
	npx nx g @nx/react:app prname --directory=apps/prname
	npx nx g @nx/next:app prname
	npx nx g @nx/react:library products --directory=libs/products --unitTestRunner=vitest --bundler=none
	npx nx g @nx/react:library shared-ui --directory=libs/shared/ui --unitTestRunner=vitest --bundler=none
	npx nx g @nx/next:library nextUI --directory=libs/nextUI --unitTestRunner=vitest --bundler=none
//실행
	npx nx serve prname
//삭제
	npx nx generate @nx/workspace:remove --projectName=prname
//빌드
	npx nx build prname

```

-

## 폴더구조

---

- [best pracitce](https://nx.dev/concepts/more-concepts/monorepo-nx-enterprise)

## 공식문서

---

- [사용방법](https://nx.dev/getting-started/intro)
- [Nx 사용법한글](https://code-logs.github.io/nx-build-system-%EB%A7%9B%EB%B3%B4%EA%B8%B0)
- [tailwind 설정](https://nx.dev/recipes/react/using-tailwind-css-in-react#step-1-install-tailwind-dependencies)
