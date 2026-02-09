import type { MediaEmbed } from '@/types'

interface VideoEmbedProps {
  media: MediaEmbed
}

export function VideoEmbed({ media }: VideoEmbedProps) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg">
      <iframe
        src={media.url}
        title="動画"
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
