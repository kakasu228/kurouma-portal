export type SessionType = 'coaching' | 'group' | 'workshop'

export interface ScheduleEvent {
  id: string
  title: string
  description?: string
  date: string
  startTime: string
  endTime: string
  type: SessionType
  coachName: string
  zoomUrl: string
}
