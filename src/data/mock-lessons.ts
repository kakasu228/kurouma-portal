import type { Lesson, LessonCategory } from '@/types'

export const CATEGORY_META: Record<
  LessonCategory,
  { label: string; icon: string; color: string; bgColor: string }
> = {
  mindset: { label: 'マインドセット', icon: 'Brain', color: '#8b5cf6', bgColor: '#f5f3ff' },
  communication: { label: 'コミュニケーション', icon: 'MessageCircle', color: '#3b82f6', bgColor: '#eff6ff' },
  fashion: { label: 'ファッション', icon: 'Shirt', color: '#ec4899', bgColor: '#fdf2f8' },
  dating: { label: 'デーティング', icon: 'Heart', color: '#ef4444', bgColor: '#fef2f2' },
  'self-improvement': { label: '自分磨き', icon: 'Sparkles', color: '#10b981', bgColor: '#ecfdf5' },
}

export const LESSONS: Lesson[] = [
  // マインドセット
  {
    id: 'lesson-01',
    category: 'mindset',
    title: '自信を育てる3つの習慣',
    description: '日々の小さな行動で自信を積み上げる方法を学びます。',
    durationMinutes: 10,
    body: `
      <h2>自信とは何か</h2>
      <p>自信とは「自分にはできる」という感覚です。これは生まれ持ったものではなく、<strong>小さな成功体験の積み重ね</strong>で育てていくものです。</p>
      <h3>習慣1: 毎日の小さな挑戦</h3>
      <p>毎日1つ、普段やらないことに挑戦しましょう。コンビニで店員さんに「ありがとう」と言う、新しいランチのお店に行く、など些細なことでOKです。</p>
      <h3>習慣2: 成功日記をつける</h3>
      <p>寝る前に、その日「うまくいったこと」を3つ書き出しましょう。どんなに小さなことでも構いません。</p>
      <h3>習慣3: 姿勢を正す</h3>
      <p>背筋を伸ばし、胸を張るだけで、脳は「自信がある状態」だと認識します。これは心理学で<strong>エンボディメント</strong>と呼ばれています。</p>
      <blockquote>自信は結果ではなく、プロセスです。毎日の小さな一歩が、大きな変化につながります。</blockquote>
    `,
    media: [
      { type: 'youtube', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
    attachments: [],
    featured: true,
    sortOrder: 1,
  },
  {
    id: 'lesson-02',
    category: 'mindset',
    title: '目標設定の技術',
    description: 'SMARTゴールで3ヶ月後の自分をデザインする。',
    durationMinutes: 15,
    body: `
      <h2>SMARTゴール設定</h2>
      <p>目標は以下の5つの条件を満たすべきです：</p>
      <ul>
        <li><strong>Specific</strong>（具体的）: 何をするか明確に</li>
        <li><strong>Measurable</strong>（測定可能）: 達成度を数値化</li>
        <li><strong>Achievable</strong>（達成可能）: 現実的な範囲で</li>
        <li><strong>Relevant</strong>（関連性）: 自分の目的と合致</li>
        <li><strong>Time-bound</strong>（期限付き）: いつまでに達成するか</li>
      </ul>
      <h3>実践ワーク</h3>
      <p>3ヶ月後の目標を3つ、SMARTの形式で書き出してみましょう。</p>
    `,
    media: [],
    attachments: [
      { title: '目標設定ワークシート', url: 'https://docs.google.com/document/d/example1', type: 'google-docs' },
    ],
    featured: false,
    sortOrder: 2,
  },
  {
    id: 'lesson-03',
    category: 'mindset',
    title: 'ネガティブ思考の手放し方',
    description: '認知の歪みを理解し、思考パターンを書き換える方法。',
    durationMinutes: 12,
    body: `
      <h2>認知の歪みとは</h2>
      <p>私たちは無意識のうちに、現実を歪めて解釈してしまうことがあります。これを<strong>認知の歪み</strong>と呼びます。</p>
      <h3>よくある認知の歪み</h3>
      <ul>
        <li><strong>全か無か思考</strong>: 「完璧でなければ失敗だ」</li>
        <li><strong>一般化のしすぎ</strong>: 「いつもこうなる」</li>
        <li><strong>心のフィルター</strong>: 良いことを無視して悪いことだけ見る</li>
      </ul>
      <h3>書き換えの練習</h3>
      <p>ネガティブな考えが浮かんだら、「本当にそうだろうか？」と自問してみましょう。</p>
    `,
    media: [],
    attachments: [],
    featured: false,
    sortOrder: 3,
  },

  // コミュニケーション
  {
    id: 'lesson-04',
    category: 'communication',
    title: 'LINE返信の基本テクニック',
    description: '既読スルーされないLINEの書き方を実例で学ぶ。',
    durationMinutes: 15,
    body: `
      <h2>LINEの基本ルール</h2>
      <ul>
        <li>長文を送りすぎない（相手と同じくらいの長さ）</li>
        <li>質問で終わらせて会話を続ける</li>
        <li>絵文字は適度に使う（多すぎると逆効果）</li>
      </ul>
      <h2>シーン別テンプレート</h2>
      <h3>マッチング後の最初のメッセージ</h3>
      <p>「はじめまして！プロフィール見て〇〇が気になりました。僕も〇〇が好きなんですが、最近は何かされてますか？」</p>
      <h3>デートの誘い方</h3>
      <p>「〇〇さんの話聞いてたら、〇〇のお店思い出しました！今度一緒に行きませんか？」</p>
      <blockquote>大事なのは「自然な流れ」で誘うこと。唐突な誘いは警戒されやすいです。</blockquote>
    `,
    media: [
      { type: 'youtube', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
    attachments: [
      { title: 'LINEテンプレート集', url: 'https://docs.google.com/document/d/example2', type: 'google-docs' },
    ],
    featured: true,
    sortOrder: 4,
  },
  {
    id: 'lesson-05',
    category: 'communication',
    title: '会話を広げる質問力',
    description: '相手が話したくなる質問テクニックを身につける。',
    durationMinutes: 12,
    body: `
      <h2>会話の3つの基本</h2>
      <ol>
        <li><strong>傾聴</strong>: 相手の話を最後まで聞く</li>
        <li><strong>質問</strong>: 相手に興味を持って質問する</li>
        <li><strong>共感</strong>: 相手の感情に寄り添う</li>
      </ol>
      <h2>オープンクエスチョンを使おう</h2>
      <p>「はい/いいえ」で終わる質問ではなく、相手が自由に答えられる質問をしましょう。</p>
      <ul>
        <li>✕「映画好きですか？」→ ○「最近観て良かった映画って何ですか？」</li>
        <li>✕「料理しますか？」→ ○「得意料理とかあったりしますか？」</li>
      </ul>
    `,
    media: [],
    attachments: [],
    featured: false,
    sortOrder: 5,
  },
  {
    id: 'lesson-06',
    category: 'communication',
    title: '関係構築の心理学',
    description: '信頼関係を深めるための心理テクニックと実践方法。',
    durationMinutes: 18,
    body: `
      <h2>返報性の法則</h2>
      <p>人は何かをしてもらうと、お返しをしたくなります。まず自分から自己開示をすることで、相手も心を開きやすくなります。</p>
      <h2>ミラーリング</h2>
      <p>相手の仕草やペースに合わせることで、無意識レベルで親近感を生み出します。</p>
      <h3>実践のコツ</h3>
      <ul>
        <li>相手が飲み物を飲んだら、自分も飲む</li>
        <li>話すスピードを相手に合わせる</li>
        <li>相手の言葉を繰り返す（オウム返し）</li>
      </ul>
    `,
    media: [
      { type: 'youtube', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
    attachments: [],
    featured: false,
    sortOrder: 6,
  },

  // ファッション
  {
    id: 'lesson-07',
    category: 'fashion',
    title: '清潔感を作る基本アイテム',
    description: 'まず揃えるべきファッションアイテムと選び方のポイント。',
    durationMinutes: 20,
    body: `
      <h2>まず揃えるべき4アイテム</h2>
      <ul>
        <li><strong>白のTシャツ</strong>（サイズ感が命。ユニクロUがおすすめ）</li>
        <li><strong>ネイビーのジャケット</strong>（カジュアルでもキレイめにも使える万能選手）</li>
        <li><strong>黒のスキニーパンツ</strong>（シルエットがスッキリ見える）</li>
        <li><strong>白のスニーカー</strong>（清潔感の象徴。常にキレイに保つこと）</li>
      </ul>
      <h2>サイズ選びのポイント</h2>
      <p>日本人男性に多い「大きすぎるサイズ」を避け、ジャストサイズを選びましょう。肩の縫い目が肩の端に来るのが正解です。</p>
    `,
    media: [
      { type: 'youtube', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
    attachments: [
      { title: 'おすすめアイテムリスト', url: 'https://docs.google.com/spreadsheets/d/example1', type: 'google-sheets' },
    ],
    featured: false,
    sortOrder: 7,
  },
  {
    id: 'lesson-08',
    category: 'fashion',
    title: 'デート服コーディネート集',
    description: 'シーン別のコーディネート例を写真付きで解説。',
    durationMinutes: 15,
    body: `
      <h2>カフェデートの場合</h2>
      <p>キレイめカジュアルが正解。ジャケット+Tシャツ+スキニーパンツの王道コーデ。</p>
      <h2>水族館デートの場合</h2>
      <p>歩き回るのでスニーカー必須。ニット+チノパンで大人カジュアルに。</p>
      <h2>ディナーデートの場合</h2>
      <p>少しフォーマルに。シャツ+ジャケット+スラックスで清潔感を演出。</p>
    `,
    media: [],
    attachments: [],
    featured: false,
    sortOrder: 8,
  },

  // デーティング
  {
    id: 'lesson-09',
    category: 'dating',
    title: '初回デートの会話プラン',
    description: '初デートで好印象を残す会話の組み立て方。',
    durationMinutes: 20,
    body: `
      <h2>初デートの鉄則</h2>
      <ul>
        <li>カフェやランチなど、<strong>短時間で気軽なプラン</strong>にする</li>
        <li>予約は必ず取る（段取り力のアピール）</li>
        <li>2軒目の候補も考えておく</li>
      </ul>
      <h2>会話の流れ</h2>
      <ol>
        <li>軽い話題で緊張をほぐす（天気、最近の出来事）</li>
        <li>共通点を見つける（趣味、食べ物、旅行）</li>
        <li>少し深い話題へ（将来の夢、大切にしていること）</li>
        <li>次のデートの伏線を張る</li>
      </ol>
      <blockquote>初デートのゴールは「また会いたい」と思ってもらうこと。完璧を目指さず、楽しむことが大切です。</blockquote>
    `,
    media: [],
    attachments: [
      { title: '会話トピック集', url: 'https://docs.google.com/document/d/example3', type: 'google-docs' },
    ],
    featured: true,
    sortOrder: 9,
  },
  {
    id: 'lesson-10',
    category: 'dating',
    title: 'マッチングアプリ攻略法',
    description: 'プロフィール作成からマッチング率を上げるテクニックまで。',
    durationMinutes: 25,
    body: `
      <h2>プロフィール写真の選び方</h2>
      <p>メイン写真は明るい場所で、自然な笑顔の写真を選びましょう。<strong>自撮りは避け</strong>、友人に撮ってもらった写真がベストです。</p>
      <h3>写真の構成</h3>
      <ul>
        <li>1枚目: 顔がはっきり写った笑顔の写真</li>
        <li>2枚目: 全身が分かる写真</li>
        <li>3枚目: 趣味が分かる写真</li>
      </ul>
      <h2>プロフィール文のテンプレート</h2>
      <p>150〜200文字で、趣味・仕事・性格を簡潔に。ネガティブな表現は避けましょう。</p>
    `,
    media: [],
    attachments: [
      { title: 'プロフィール添削チェックリスト', url: 'https://docs.google.com/forms/d/example1', type: 'google-forms' },
    ],
    featured: false,
    sortOrder: 10,
  },

  // 自分磨き
  {
    id: 'lesson-11',
    category: 'self-improvement',
    title: '自己分析ワークシート',
    description: '自分の強みと弱みを明確にし、改善ポイントを特定します。',
    durationMinutes: 30,
    body: `
      <h2>このレッスンの目標</h2>
      <p>自分の強みと弱みを明確にし、改善すべきポイントを特定します。</p>
      <h3>ステップ1: 自分の強みを書き出す</h3>
      <p>以下の質問に答えてください：</p>
      <ul>
        <li>友人や同僚からよく褒められることは何ですか？</li>
        <li>自分が得意だと感じることは何ですか？</li>
        <li>過去に成功した経験を3つ挙げてください。</li>
      </ul>
      <h3>ステップ2: 改善ポイントの特定</h3>
      <p>次に、改善したい点を具体的に書き出しましょう。抽象的ではなく、<strong>行動レベルで書く</strong>ことが大切です。</p>
    `,
    media: [],
    attachments: [
      { title: '自己分析ワークシート', url: 'https://docs.google.com/document/d/example4', type: 'google-docs' },
      { title: '自己分析テンプレート', url: 'https://docs.google.com/forms/d/example2', type: 'google-forms' },
    ],
    featured: false,
    sortOrder: 11,
  },
  {
    id: 'lesson-12',
    category: 'self-improvement',
    title: '筋トレ入門ガイド',
    description: '自信と見た目を変える、初心者向けのトレーニングプラン。',
    durationMinutes: 15,
    body: `
      <h2>なぜ筋トレが重要か</h2>
      <p>筋トレは見た目の改善だけでなく、<strong>テストステロンの増加</strong>による自信の向上にも効果があります。</p>
      <h3>初心者向け週3プラン</h3>
      <ul>
        <li><strong>月曜</strong>: 腕立て伏せ10回×3セット + スクワット15回×3セット</li>
        <li><strong>水曜</strong>: プランク30秒×3セット + 腹筋15回×3セット</li>
        <li><strong>金曜</strong>: 全身メニュー（月水の組み合わせ）</li>
      </ul>
      <p>まずは2週間続けることを目標にしましょう。</p>
    `,
    media: [
      { type: 'youtube', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    ],
    attachments: [],
    featured: false,
    sortOrder: 12,
  },

  // ── 削除候補（Classroom投稿での裏付けなし） ─────────
  {
    id: 'p2-05',
    category: 'fashion',
    title: 'スキンケア・身だしなみの基本',
    description: '清潔感を底上げするスキンケアルーティンとグルーミングの基本。',
    durationMinutes: 12,
    body: `
      <h2>スキンケアの3ステップ</h2>
      <p>洗顔→化粧水→乳液の基本を押さえましょう。</p>
      <h3>洗顔のポイント</h3>
      <p>朝晩2回、ぬるま湯でしっかり泡立てて優しく洗います。ゴシゴシ洗いはNGです。</p>
      <h3>身だしなみチェックリスト</h3>
      <ul>
        <li>眉毛を整える（美容院で相談がおすすめ）</li>
        <li>鼻毛チェック</li>
        <li>爪は短く清潔に</li>
        <li>口臭ケア（舌磨き+マウスウォッシュ）</li>
      </ul>
    `,
    media: [],
    attachments: [],
    featured: false,
    sortOrder: 13,
    deletionCandidate: true,
  },
  {
    id: 'p2-06',
    category: 'dating',
    title: 'デートプランニング実践ガイド',
    description: 'シーン別のデートプラン作成と予約の段取り。',
    durationMinutes: 15,
    body: `
      <h2>デートプランの組み立て方</h2>
      <p>初回は<strong>カフェ or ランチ</strong>の短時間プラン、2回目以降は体験型デート（水族館・美術館など）がおすすめです。</p>
      <h3>予約のコツ</h3>
      <ul>
        <li>必ず予約を入れる（段取り力のアピール）</li>
        <li>個室 or 隣席のカウンターを選ぶ</li>
        <li>2軒目の候補も事前に調べておく</li>
      </ul>
      <h3>プラン例</h3>
      <p>14:00 カフェ → 15:30 散歩 → 16:30 解散（次回の約束を取り付ける）</p>
    `,
    media: [],
    attachments: [],
    featured: false,
    sortOrder: 14,
    deletionCandidate: true,
  },
  {
    id: 'p2-07',
    category: 'communication',
    title: '告白・関係進展の心理学',
    description: '好意の伝え方とタイミングの見極め方。',
    durationMinutes: 18,
    body: `
      <h2>告白のタイミング</h2>
      <p>3〜5回目のデートが目安です。相手の好意サインを読み取りましょう。</p>
      <h3>好意サインのチェックポイント</h3>
      <ul>
        <li>相手からLINEが来る頻度が増えた</li>
        <li>次のデートを相手から提案してくる</li>
        <li>ボディタッチが増えた</li>
        <li>将来の話をするようになった</li>
      </ul>
      <h3>告白の伝え方</h3>
      <p>シンプルに、誠実に。「〇〇さんのことが好きです。付き合ってください。」回りくどい表現は避けましょう。</p>
    `,
    media: [],
    attachments: [],
    featured: false,
    sortOrder: 15,
    deletionCandidate: true,
  },
]
