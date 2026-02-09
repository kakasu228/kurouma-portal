import type { FaqItem, ContactInfo } from '@/types'

export const FAQ_ITEMS: FaqItem[] = [
  // 一般
  {
    id: 'faq-01',
    question: 'プログラムの期間はどのくらいですか？',
    answer: '基本プログラムは3ヶ月間です。Phase 1（自己理解）、Phase 2（スキルアップ）、Phase 3（実践）の3段階で構成されています。延長プランもご用意しております。',
    category: 'general',
    sortOrder: 1,
  },
  {
    id: 'faq-02',
    question: 'どんな人が受講していますか？',
    answer: '20代〜30代の男性が中心です。「恋愛経験が少ない」「コミュニケーションに自信がない」「マッチングアプリで上手くいかない」といった悩みをお持ちの方が多いです。',
    category: 'general',
    sortOrder: 2,
  },
  {
    id: 'faq-03',
    question: '途中でやめることはできますか？',
    answer: 'ご事情による途中退会は可能ですが、返金ポリシーについては契約内容をご確認ください。まずはコーチにご相談いただくことをお勧めします。',
    category: 'general',
    sortOrder: 3,
  },

  // お支払い
  {
    id: 'faq-04',
    question: '支払い方法を教えてください。',
    answer: '銀行振込、クレジットカード（一括・分割）に対応しています。分割払いの場合、最大12回まで選択可能です。詳しくは担当者にお問い合わせください。',
    category: 'billing',
    sortOrder: 1,
  },
  {
    id: 'faq-05',
    question: '領収書は発行してもらえますか？',
    answer: 'はい、ご希望の方には領収書を発行いたします。メールまたはLINEでご連絡ください。',
    category: 'billing',
    sortOrder: 2,
  },

  // 技術的
  {
    id: 'faq-06',
    question: 'Zoomの使い方がわかりません。',
    answer: 'セッション参加にはZoomアプリが必要です。スマートフォンの場合はApp StoreまたはGoogle Playからダウンロードしてください。参加ボタンを押すと自動的にZoomが起動します。初回はアカウント登録なしでも参加できます。',
    category: 'technical',
    sortOrder: 1,
  },
  {
    id: 'faq-07',
    question: '動画が再生できません。',
    answer: 'Wi-Fi環境での視聴を推奨します。再生できない場合は、ブラウザのキャッシュをクリアするか、別のブラウザをお試しください。それでも解決しない場合はLINEでご連絡ください。',
    category: 'technical',
    sortOrder: 2,
  },

  // コーチング
  {
    id: 'faq-08',
    question: 'コーチはどんな人ですか？',
    answer: '恋愛コンサルティングの実績豊富なプロのコーチが担当します。全員が認定カウンセラーの資格を持ち、定期的に研修を受けています。',
    category: 'coaching',
    sortOrder: 1,
  },
  {
    id: 'faq-09',
    question: '個別セッションの頻度は？',
    answer: '基本プランでは月2回の個別セッション（各45分）が含まれています。追加セッションをご希望の場合は、別途お申し込みいただけます。',
    category: 'coaching',
    sortOrder: 2,
  },
  {
    id: 'faq-10',
    question: 'グループレッスンを欠席した場合は？',
    answer: 'グループレッスンは録画を共有しますので、後から視聴可能です。録画リンクはレッスン翌日までにポータルに掲載されます。',
    category: 'coaching',
    sortOrder: 3,
  },
  {
    id: 'faq-11',
    question: 'コーチに相談できる内容に制限はありますか？',
    answer: '恋愛に関することであれば幅広くご相談いただけます。ファッション、コミュニケーション、デートプラン、マッチングアプリなど、何でもお気軽にご相談ください。',
    category: 'coaching',
    sortOrder: 4,
  },
]

export const CONTACT_INFO: ContactInfo = {
  lineUrl: 'https://line.me/R/ti/p/@kurouma-support',
  lineId: '@kurouma-support',
  email: 'support@kurouma-example.com',
  responseTime: '24時間以内',
}

export const FAQ_CATEGORY_LABELS: Record<string, string> = {
  general: '一般',
  billing: '料金',
  technical: '技術',
  coaching: 'コーチング',
}
