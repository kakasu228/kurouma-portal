import { useState } from 'react'
import { ChevronDown, MessageSquare } from 'lucide-react'
import { cn } from '@/utils/cn'

interface Template {
  title: string
  body: string
}

const TEMPLATES: Template[] = [
  {
    title: '個別で質問するとき',
    body: `おはようございます！
一点相談、<質問・相談・報告>があり連絡しました。

# 質問・相談・報告内容
電話で相手から下記質問をされたときの回答を相談できればと思います。
「アプリで会った人と会わなくなった理由は？」

実際の事を言うと下記になります。
- メッセージのやり取りが途絶える
- 打診ができなくて諦め

# 自分が考えたこと・実際した行動
いつも自分が言っているのは下記です。
- 話しているときの楽しさや居心地のよさが、合わなかった

# 質問・相談・報告内容
「アプリで会った人と会わなくなった理由は？」に対する
- 回答の考え方、
- 無難な回答
があればご教示いただけますと幸いです。

ご確認よろしくお願いいたします！`,
  },
  {
    title: 'リマインドするとき',
    body: `おつかれさまです！

プロフ添削ラインでもお願いしましたが、
プロフを添削いただけますと幸いです。

お忙しいところ大変恐縮ですが
ご対応よろしくお願いいたします`,
  },
  {
    title: 'アポ振り返り報告',
    body: `5/2 アポ振返り
目標） シーシャでイチャコラ キスぐらいまで
評価）50点　目標未達
状況）2回目 居酒屋
話題) 伊勢丹ラウンジ 5月の予定 尊敬できる先輩 美術館 上野 など

■相手
態度表情） 打ち解け あきらか気持ち緩んでる

■自分
意識した事）自信あり余裕感 価値提供
良かった事） 余裕感を持って接する
問題気づき）
今後の課題） 押す時は押す

■感想
2件目有りで計画立てたが、結果早期解散
→翌日僕が仕事なので、相手が気遣ってくれた
イレギュラー対応の切り返し考えられず引っ張れなかった
次回は博物館アポになりそう
雰囲気は良いけど、なんか消化不良`,
  },
  {
    title: 'アプリ運用報告',
    body: `<3/10〜3/16>
・マッチ数:5
・返答数:2
・電話数：0
・アポ数：0
・勝利数：0

<3/17〜3/23>
・マッチ数:10
・返答数:4
・目標電話数：1
・目標アポ数：1
・目標勝利数：0

◆反省点
短文構成と即答性を意識して実行
→2通目、3通目に繋がらず

◆コメント（目標など）
・ポイントを押させたコメントを送れていたのか、返信したいと思えるコメとなるよう最善する
・とにかく数、失敗も経験との想いで向かう`,
  },
]

function TemplateItem({ template }: { template: Template }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-lg border border-gray-100 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-3 py-2.5 text-left active:bg-gray-50 transition-colors"
      >
        <span className="text-[13px] font-medium text-gray-900">
          {template.title}
        </span>
        <ChevronDown
          size={16}
          className={cn(
            'shrink-0 text-gray-400 transition-transform',
            open && 'rotate-180',
          )}
        />
      </button>
      {open && (
        <div className="border-t border-gray-100 px-3 py-3">
          <pre className="whitespace-pre-wrap text-[12px] leading-relaxed text-gray-600 font-[inherit]">
            {template.body}
          </pre>
        </div>
      )}
    </div>
  )
}

export function MessageTemplates() {
  return (
    <div className="px-4 pt-6">
      <div className="flex items-center gap-2 mb-3">
        <MessageSquare size={18} className="text-blue-500" />
        <h2 className="text-base font-semibold text-gray-900">
          質問・報告テンプレート
        </h2>
      </div>
      <div className="space-y-2">
        {TEMPLATES.map((t) => (
          <TemplateItem key={t.title} template={t} />
        ))}
      </div>
    </div>
  )
}
