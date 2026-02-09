import { useMemo } from 'react'
import { SCHEDULE_EVENTS } from '@/data/mock-schedule'
import { isUpcoming } from '@/utils/date'

export function useSchedule() {
  const events = SCHEDULE_EVENTS

  const upcomingEvents = useMemo(
    () =>
      events
        .filter((e) => isUpcoming(e.date))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    [events],
  )

  const pastEvents = useMemo(
    () =>
      events
        .filter((e) => !isUpcoming(e.date))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [events],
  )

  const nextEvent = useMemo(() => upcomingEvents[0] ?? null, [upcomingEvents])

  const nextCoaching = useMemo(
    () => upcomingEvents.find((e) => e.type === 'coaching') ?? null,
    [upcomingEvents],
  )

  return { events, upcomingEvents, pastEvents, nextEvent, nextCoaching }
}
