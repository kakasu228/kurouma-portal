import { Flame, Zap, Trophy, Crown, Star } from 'lucide-react'

export interface LevelDef {
  min: number
  label: string
  icon: typeof Star
  color: string
  bg: string
  bar: string
  message: string
}

/** レベル定義: 完了数に応じてランクアップ */
export const LEVELS: LevelDef[] = [
  { min: 0, label: 'スタート', icon: Star, color: 'text-gray-400', bg: 'bg-gray-100', bar: 'bg-gray-300', message: 'さあ、始めましょう！' },
  { min: 1, label: 'ビギナー', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-100', bar: 'bg-orange-400', message: '最初の一歩を踏み出しました！' },
  { min: 3, label: 'ファイター', icon: Zap, color: 'text-blue-500', bg: 'bg-blue-100', bar: 'bg-blue-500', message: 'いい調子です！この勢いで突き進もう！' },
  { min: 6, label: 'エース', icon: Trophy, color: 'text-purple-500', bg: 'bg-purple-100', bar: 'bg-purple-500', message: '半分以上クリア！あなたはもうエースです！' },
  { min: 8, label: 'マスター', icon: Crown, color: 'text-amber-500', bg: 'bg-amber-100', bar: 'bg-gradient-to-r from-amber-400 to-amber-500', message: '残りわずか！マスターの称号を手に入れました！' },
  { min: 10, label: 'レジェンド', icon: Crown, color: 'text-emerald-500', bg: 'bg-emerald-100', bar: 'bg-gradient-to-r from-emerald-400 to-emerald-500', message: '全タスク完了！あなたは伝説です！' },
]

export function getLevel(count: number): LevelDef {
  let level = LEVELS[0]
  for (const l of LEVELS) {
    if (count >= l.min) level = l
  }
  return level
}

export function getNextLevel(count: number): LevelDef | null {
  for (const l of LEVELS) {
    if (count < l.min) return l
  }
  return null
}
