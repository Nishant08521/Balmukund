"use client"

import { ArrowLeft, Play } from "lucide-react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

// Helper function to extract video ID from YouTube URL
function getYouTubeVideoId(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
}

// Helper function to convert YouTube URL to embed URL
function getYouTubeEmbedUrl(url: string): string {
  const videoId = getYouTubeVideoId(url);
  // Extract time parameter if present
  const timeMatch = url.match(/[?&]t=(\d+)/);
  const timeParam = timeMatch ? `&start=${timeMatch[1]}` : '';
  return `https://www.youtube.com/embed/${videoId}${timeParam}`;
}

// Helper function to get YouTube thumbnail URL
function getYouTubeThumbnail(url: string): string {
  const videoId = getYouTubeVideoId(url);
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

export default function VideoGalleryPage() {

  // Video data with YouTube URLs
  const videos = [
    { id: 1, title: "3 Smart Ways to Protect Your TMT Bars On-Site | Build Strong with Balmukund Super Steel", youtubeUrl: "https://youtu.be/dE1MKeMv2OA" },
    { id: 2, title: "Video 2", youtubeUrl: "https://youtu.be/_cug6204VEM" },
    { id: 3, title: "Video 3", youtubeUrl: "https://youtu.be/kvPglldJMns" },
    { id: 4, title: "Video 4", youtubeUrl: "https://youtu.be/UMborFtKbe0" },
    { id: 5, title: "Video 5", youtubeUrl: "https://youtu.be/ona_fZCuD-A" },
    { id: 6, title: "Video 6", youtubeUrl: "https://youtu.be/0PzEz7kwzkI" },
    { id: 7, title: "Video 7", youtubeUrl: "https://youtu.be/wefVQouusZg" },
    { id: 8, title: "Video 8", youtubeUrl: "https://youtu.be/DYz_im9-820" },
    { id: 9, title: "Video 9", youtubeUrl: "https://youtu.be/DYz_im9-820" },
    { id: 10, title: "Video 10", youtubeUrl: "https://youtu.be/uhlqlcJ571g" },
    { id: 11, title: "Video 11", youtubeUrl: "https://youtu.be/RI5o2f2WE5E" },
    { id: 12, title: "Video 12", youtubeUrl: "https://youtu.be/h76664uf-u8" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Gallery</span>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Video Gallery</h1>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-8 bg-background pb-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {videos.map((video) => {
              const embedUrl = getYouTubeEmbedUrl(video.youtubeUrl);
              const thumbnailUrl = getYouTubeThumbnail(video.youtubeUrl);
              
              return (
                <Dialog key={video.id}>
                  <DialogTrigger asChild>
                    <div
                      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    >
                      <div className="aspect-video relative min-h-[280px]">
                        <img
                          src={thumbnailUrl}
                          alt={video.title}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            // Fallback to a lower quality thumbnail if maxresdefault fails
                            const videoId = getYouTubeVideoId(video.youtubeUrl);
                            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <h3 className="text-lg font-bold mb-1">{video.title}</h3>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-orange-500 ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-black border-0">
                    <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                      <iframe
                        src={embedUrl}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video.title}
                      ></iframe>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

