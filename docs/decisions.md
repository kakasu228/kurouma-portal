# 決定ログ

## 技術スタック

- **Vite 5 + React 18 + TypeScript**（Node 18 環境）
- **Tailwind CSS v4** — CSS-based config（`@theme`, `@import "tailwindcss"`, `@plugin`）
- **React Router v7**, lucide-react, clsx + tailwind-merge
- `tailwind.config.ts` は不要 — 設定は `src/index.css` に記述

## アーキテクチャ

- パスエイリアス：`@/` → `src/`（vite.config.ts + tsconfig.app.json で設定）
- コンポーネント 3 層構造：`layout/` → `ui/` → `features/`
- ページは React Router で lazy-load + `ProtectedRoute` で保護
- ボトムナビ：5 タブ（ホーム, 教材, 課題, 予定, その他）

## データ・認証

- **AuthContext** — localStorage 永続化、モック認証情報は `src/data/mock-user.ts`
- **TaskContext** — localStorage 永続化（`useLocalStorage` フック使用）
- レッスン進捗 — `useLessons` フックで localStorage 管理
- モックデータは `src/data/mock-*.ts` に分離（将来の API 置換を想定）

## モックログイン

- Email: `tanaka@example.com` / Password: `password123`

## 既知の制約

- Node 18 で react-router v7 の EBADENGINE 警告が出る（動作には問題なし）
- `create-vite@5` を使用（最新版は Node >=20 が必要なため）