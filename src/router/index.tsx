import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { AppLayout } from '@/components/layout/AppLayout'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

const HomePage = lazy(() => import('@/pages/HomePage'))
const LessonsPage = lazy(() => import('@/pages/LessonsPage'))
const LessonDetailPage = lazy(() => import('@/pages/LessonDetailPage'))
const SchedulePage = lazy(() => import('@/pages/SchedulePage'))
const FaqPage = lazy(() => import('@/pages/FaqPage'))
const ProfilePage = lazy(() => import('@/pages/ProfilePage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function Wrap({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
}

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Wrap><HomePage /></Wrap> },
      { path: 'lessons', element: <Wrap><LessonsPage /></Wrap> },
      { path: 'lessons/:lessonId', element: <Wrap><LessonDetailPage /></Wrap> },
      { path: 'schedule', element: <Wrap><SchedulePage /></Wrap> },
      { path: 'faq', element: <Wrap><FaqPage /></Wrap> },
      { path: 'profile', element: <Wrap><ProfilePage /></Wrap> },
    ],
  },
  { path: '*', element: <Wrap><NotFoundPage /></Wrap> },
])
