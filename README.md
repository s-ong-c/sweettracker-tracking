# sweettracker-tracking

## [frontend]

### Start

```sh
cd frontend //frontend 디렉토리에서
yarn
yarn start
```

### Environment

- React
- Typescript
- Redux (reduktoolkit)
- Styled-components

```
src
├── components
│    ├── base (페이지 템플릿)
│    ├── common (공통 컴포넌트)
│    └── delivery
│           ├── TrackingInput (트래킹 인풋)
│           └── TrackingStatus(상태카드)
├── containers
│    └── TrackingContainer (trackingInfo)
├── lib
│    ├── api (tracking.ts)
│    ├── hooks
│    └── styles
│        ├── media
│        └──palette
│
├── modules (redux)
├── pages (HomePage.tsx)
└── App.tsx
```

# backend

### Start (localhost:5001)

cd backend //backend 디렉토리에서

```sh
yarn 모듈설치
yarn dev
```

### Environment

- Node
- Typescript
- KOA
- axios
- https://tracking.sweettracker.co.kr/ API 사용

```
src
├── lib
│    └── sweettracker.ts (Open Api 연결)
│
├── routes
│    └── api  (RestApi localhost:5001/api/)
│
│
├── app.ts
├── env.ts
└── server.ts
```
