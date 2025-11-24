# Allpase 대시보드 과제

## 프로젝트 개요
PG 결제/가맹점 관련 데이터를 시각화하는 대시보드 페이지를 구현한 React + TypeScript + Vite 프로젝트입니다.  
API 서버가 현재 정상 동작하지 않아, 실제 호출 대신 Mock 데이터를 사용했습니다.

## 기술 스택
- React 18 + TypeScript
- Vite
- MUI(Material UI) 컴포넌트
- Axios (Mock 데이터 사용)

## 구현 페이지
1. **대시보드 화면**
   - 총 거래 건수, 총 결제 금액 표시
   - 차트 컴포넌트 (추후 추가 가능)
2. **거래 내역 리스트 화면**
   - 거래 ID, 가맹점, 금액, 상태, 날짜 표 형태로 표시
   - TransactionTable 컴포넌트 사용
3. **추가 페이지**
   - 과제 요구사항 외 페이지는 MockUp 페이지로 구성

## Mock 데이터
```ts
export const mockTransactions: Transaction[] = [
  { id: "one", merchantName: "가맹점A", amount: 12000, status: "success", date: "2025-11-24" },
  { id: "two", merchantName: "가맹점B", amount: 35000, status: "failed", date: "2025-11-23" },
  { id: "three", merchantName: "가맹점C", amount: 7800, status: "success", date: "2025-11-22" },
  { id: "four", merchantName: "가맹점D", amount: 15000, status: "pending", date: "2025-11-21" },
];
```

## 디자인/레이아웃
- **MUI 기본 컴포넌트 사용**
- `CardSummary`, `TransactionTable` 등 재사용 가능한 컴포넌트 활용
- 색상, 간격, 카드 레이아웃 등 **깔끔하고 직관적인 대시보드**

## 사용한 템플릿/라이브러리
- **MUI (Material UI)**: [https://mui.com/](https://mui.com/)
  - 그대로 사용한 부분: Table, Grid, Card 등 기본 컴포넌트
  - 커스터마이징: 색상, 크기, 간격 조정

## 실행 방법
1. **저장소 클론**
```bash
git clone https://github.com/yuriuser126/allpase.git
```
2.**패키지 설치**
```bash
npm install
```
3.**개발서버 실행**
```bash
npm run dev
```
4.**브라우저 접속**
```bash
[npm install](http://localhost:5173
)
```
현재 API 서버 문제로 실제 데이터 호출은 실패하며, Mock 데이터를 기반으로 UI/UX를 확인할 수 있습니다.



