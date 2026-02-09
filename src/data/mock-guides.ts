import type { GuideItem, GuideSectionMeta } from '@/types'

// ── セクションメタ情報 ──────────────────────────────
export const GUIDE_SECTIONS: GuideSectionMeta[] = [
  {
    key: 'onboarding',
    label: '入会後すぐの方へ',
    icon: 'Rocket',
    description: 'まずはこちらを確認してください',
  },
  {
    key: 'first-week',
    label: '入会後1週間課題',
    icon: 'CalendarCheck',
    description: '入会から1週間以内に完了しましょう',
  },
  {
    key: 'daily',
    label: '本日からの毎日課題',
    icon: 'Repeat',
    description: '毎日の習慣として取り組みましょう',
  },
]

// ── A. 導入・オンボーディング（2件） ────────────────
const onboardingItems: GuideItem[] = [
  {
    id: 'p0-02',
    section: 'onboarding',
    title: 'オープンチャットに入室',
    description: '仲間と繋がるLINEオープンチャットに参加しましょう。',
    sortOrder: 0,
    links: [
      { label: '全体チャット', url: 'https://line.me/ti/g2/MTXPIrmD2_kUhRwtzerdn-64i2CkuhJExkkwjg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default', type: 'line' },
      { label: 'パッション&ユーモア', url: 'https://line.me/ti/g2/kh1hIQFIrB4Q7el52VLxv7W3OSPin1-XBwYGKA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default', type: 'line' },
      { label: 'プロフ添削', url: 'https://line.me/ti/g2/Nx8zBfFZTQGBMPq7NGjIpAnQCIPd7dwtXXv3tw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default', type: 'line' },
      { label: 'メッセ・LINE倉庫', url: 'https://line.me/ti/g2/c8vxTjNa2UhcJLn9pIvd6OZRIPbUxM_tBpzG0Q?utm_source=invitation&utm_medium=link_copy&utm_campaign=default', type: 'line' },
      { label: '電話録音音声倉庫', url: 'https://line.me/ti/g2/Zx0i6eajSxybqUFdife1mwesu9IXSf_0j2GXDQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default', type: 'line' },
      { label: 'アポ報告グループ', url: 'https://line.me/ti/g2/BsNPVS_1XGGfzH7GyIKD0lSOP2FnAsTWe5GkXg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default', type: 'line' },
    ],
  },
  {
    id: 'p0-04',
    section: 'onboarding',
    title: '1on1コーチング予約',
    description: '1週間課題の進捗確認や、それ以降の取り組みについてLINE通話で15分ほどお話しします。入会から約1週間後の日程を選んで予約してください。',
    sortOrder: 1,
    links: [
      { label: '予約ページを開く', url: 'https://app.aitemasu.me/u/malianai204/15', type: 'aitemasu' },
    ],
  },
]

// ── B. 入会後1週間課題（6件） ───────────────────────
const firstWeekItems: GuideItem[] = [
  {
    id: 'fw-01',
    section: 'first-week',
    title: '①共通マインド確認',
    description: 'Loom動画で黒馬プログラムのマインドセットを確認しましょう。',
    sortOrder: 1,
    media: [
      { type: 'loom', url: 'https://www.loom.com/embed/placeholder-mindset' },
    ],
  },
  {
    id: 'fw-02',
    section: 'first-week',
    title: '②目標達成シートを提出する',
    description: '3ヶ月後の目標をシートに記入して提出しましょう。',
    sortOrder: 2,
    media: [
      { type: 'google-drive', url: 'https://drive.google.com/file/d/1ofMSNjhWqNizT1EsJQab4j1WGFQVG6Nf/view?usp=sharing', label: 'スマホでの編集方法（動画）' },
    ],
    links: [
      { label: '目標達成シート', url: 'https://docs.google.com/document/d/placeholder-goal', type: 'google-sheets' },
    ],
    note: '※ スマートフォンから編集する場合は上の動画をご確認ください',
  },
  {
    id: 'fw-03',
    section: 'first-week',
    title: '③自己理解シートを提出する',
    description: '自分の強み・弱みを整理して提出しましょう。',
    sortOrder: 3,
    media: [
      { type: 'google-drive', url: 'https://drive.google.com/file/d/1ofMSNjhWqNizT1EsJQab4j1WGFQVG6Nf/view?usp=sharing', label: 'スマホでの編集方法（動画）' },
    ],
    links: [
      { label: '自己理解シート', url: 'https://docs.google.com/document/d/placeholder-self', type: 'google-sheets' },
    ],
    note: '※ スマートフォンから編集する場合は上の動画をご確認ください',
  },
  {
    id: 'fw-04',
    section: 'first-week',
    title: '④必読書を購入して読破する',
    description: '漫画なのですぐ読めます。3巻すべて読みましょう。',
    sortOrder: 4,
    links: [
      { label: '必読書①', url: 'https://amzn.asia/d/9kMYMTg', type: 'amazon' },
      { label: '必読書②', url: 'https://amzn.asia/d/hCYuOoH', type: 'amazon' },
      { label: '必読書③', url: 'https://amzn.asia/d/g9ebPbu', type: 'amazon' },
    ],
  },
  {
    id: 'fw-05',
    section: 'first-week',
    title: '⑤マッチングアプリのプロフィールを添削グループに送る',
    description: 'プロフィール写真と文章をグループに投稿してフィードバックをもらいましょう。',
    sortOrder: 5,
    links: [
      { label: 'プロフ添削グループ', url: 'https://line.me/placeholder-profile', type: 'line' },
    ],
  },
  {
    id: 'fw-06',
    section: 'first-week',
    title: '⑥Googleドキュメントでノートを作成・共有',
    description: '学びのアウトプット用ノートを作成して共有しましょう。',
    sortOrder: 6,
    links: [
      { label: 'テンプレートをコピー', url: 'https://docs.google.com/document/d/placeholder-note', type: 'google-docs' },
    ],
    note: '※ Googleドキュメントのため、PCからの操作を推奨します',
  },
]

// ── C. 毎日課題（3件） ──────────────────────────────
const dailyItems: GuideItem[] = [
  {
    id: 'dt-02',
    section: 'daily',
    title: '①マインドセットプログラム14日分を実施',
    description: 'AI連携のマインドセットプログラムに毎日取り組みましょう。',
    sortOrder: 1,
    links: [
      { label: 'プログラムを開始', url: 'https://placeholder-ai-mindset.com', type: 'external' },
    ],
  },
  {
    id: 'dt-01',
    section: 'daily',
    title: '②毎朝パッション動画を投稿する',
    description: '①のマインドセットプログラムの内容をもとにアウトプットしましょう。表現力を鍛える、毎日継続する自信をつける、自分の課題を解決させるなど、目的を持って実践してください。自分の動画を見直すのはもちろんのこと、周りの人たちの動画を見ることで、メタ認知能力が鍛えられます。「自分はどう見られるのか？どのように表現したら見た人が面白いと感じるのか？」を考えて実践していきましょう。',
    sortOrder: 2,
    media: [
      { type: 'google-drive', url: 'https://drive.google.com/file/d/1vovJ2QN4Q_lJ-rGM-RkAvfOZ7syVHcts/view?usp=sharing', label: 'まずこちらの詳細説明を確認してください' },
    ],
    links: [
      { label: 'パッション動画グループ', url: 'https://line.me/placeholder-passion', type: 'line' },
    ],
    note: '※ 初投稿の動画は消さずに保存しておいてください！成長してから過去のものを比較できます。',
  },
]

// ── 全ガイドアイテム ────────────────────────────────
export const GUIDE_ITEMS: GuideItem[] = [
  ...onboardingItems,
  ...firstWeekItems,
  ...dailyItems,
]
