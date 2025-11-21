"use client"

import { useState, useEffect } from "react"
import { Facebook, Instagram, Youtube, Play, RefreshCw, ExternalLink } from "lucide-react"
import Script from "next/script"

// Social Media Feed Component
export default function FollowOnSocialPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Initialize Facebook SDK after script loads
    if (typeof window !== 'undefined' && (window as any).FB) {
      (window as any).FB.XFBML.parse()
    }
  }, [])

  // YouTube Channel ID - Replace with your actual channel ID
  const YOUTUBE_CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || "UC_YOUR_CHANNEL_ID"
  const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || ""
  
  // Facebook Page URL - Replace with your actual page URL
  const FACEBOOK_PAGE_URL = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_URL || "https://www.facebook.com/YourPageName"
  const FACEBOOK_PAGE_NAME = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_NAME || "YourPageName"
  
  // Instagram Username - Replace with your actual username
  const INSTAGRAM_USERNAME = process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || "yourusername"
  // Instagram Post IDs - Comma-separated list of post IDs (e.g., "ABC123,XYZ789,DEF456")
  const INSTAGRAM_POST_IDS = process.env.NEXT_PUBLIC_INSTAGRAM_POST_IDS 
    ? process.env.NEXT_PUBLIC_INSTAGRAM_POST_IDS.split(',').map(id => id.trim()).filter(Boolean)
    : []

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Facebook SDK Script */}
      <Script
        id="facebook-jssdk"
        strategy="lazyOnload"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0"
        onLoad={() => {
          if (typeof window !== 'undefined' && (window as any).FB) {
            (window as any).FB.init({
              xfbml: true,
              version: 'v18.0'
            })
            // Re-parse after init
            setTimeout(() => {
              if ((window as any).FB) {
                (window as any).FB.XFBML.parse()
              }
            }, 100)
          }
        }}
      />

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_SOCIAL_BG_IMAGE || '/social.jpg'})`,
        }}
      ></div>

      {/* Header */}
      <div className="relative z-10 text-center py-6 sm:py-8 md:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-4 drop-shadow-lg">
          Follow On Social
        </h1>
      </div>

      {/* Main Content - Three Column Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-8 sm:pb-12 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          
          {/* Facebook Section */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-blue-600 text-white p-4 text-center">
              <Facebook className="w-6 h-6 mx-auto mb-2" />
              <h2 className="text-xl font-bold">Facebook</h2>
            </div>
            
            <div className="h-96 overflow-y-auto p-4">
              {/* Facebook Page Plugin */}
              {mounted ? (
                <div className="min-h-[350px]">
                  <div
                    className="fb-page"
                    data-href={FACEBOOK_PAGE_URL}
                    data-tabs="timeline"
                    data-width="300"
                    data-height="350"
                    data-small-header="true"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                  ></div>
                </div>
              ) : (
                <div className="min-h-[350px] flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <RefreshCw className="w-8 h-8 mx-auto mb-2 animate-spin" />
                    <p className="text-sm">Loading Facebook feed...</p>
                  </div>
                </div>
              )}
              
              <div className="mt-4 text-center">
                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-semibold"
                >
                  Visit Page
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 text-center">
              <Instagram className="w-6 h-6 mx-auto mb-2" />
              <h2 className="text-xl font-bold">Instagram</h2>
            </div>
            
            <div className="h-96 overflow-y-auto p-4">
              <InstagramFeedCompact postIds={INSTAGRAM_POST_IDS} username={INSTAGRAM_USERNAME} />
            </div>
          </div>

          {/* YouTube Section */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-red-600 text-white p-4 text-center">
              <Youtube className="w-6 h-6 mx-auto mb-2" />
              <h2 className="text-xl font-bold">YouTube</h2>
            </div>
            
            <div className="h-96 overflow-y-auto p-4">
              <YouTubeFeedCompact channelId={YOUTUBE_CHANNEL_ID} apiKey={YOUTUBE_API_KEY} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {mounted && (
        <div className="fixed bottom-4 right-4 z-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

// Instagram Feed Component (Compact for sidebar)
function InstagramFeedCompact({ postIds, username }: { postIds: string[]; username: string }) {
  if (postIds.length === 0) {
    return (
      <div className="space-y-4">
        <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white">
          <div className="text-center p-4">
            <Instagram className="w-10 h-10 mx-auto mb-2" />
            <p className="text-xs font-semibold">No posts configured</p>
            <p className="text-xs mt-2 opacity-90">Add post IDs in .env</p>
          </div>
        </div>
        <div className="text-center">
          <a
            href={`https://www.instagram.com/${username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 text-sm font-semibold"
          >
            View Profile
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {postIds.slice(0, 3).map((postId, index) => (
        <div key={postId || index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <iframe
            src={`https://www.instagram.com/p/${postId}/embed`}
            className="w-full h-full border-0"
            allowTransparency
            allow="encrypted-media"
            title={`Instagram Post ${index + 1}`}
            loading="lazy"
          ></iframe>
        </div>
      ))}
      <div className="text-center">
        <a
          href={`https://www.instagram.com/${username}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 text-sm font-semibold"
        >
          View all posts
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
}

// YouTube Feed Component (Compact for sidebar)
function YouTubeFeedCompact({ channelId, apiKey }: { channelId: string; apiKey: string }) {
  const [videos, setVideos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!apiKey || !channelId || channelId === "UC_YOUR_CHANNEL_ID") {
      setLoading(false)
      setError("Configure YouTube API in .env")
      return
    }

    const fetchVideos = async () => {
      try {
        // First, get the uploads playlist ID from the channel
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
        )
        
        if (!channelResponse.ok) {
          throw new Error('Failed to fetch channel data')
        }
        
        const channelData = await channelResponse.json()
        const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads

        if (!uploadsPlaylistId) {
          throw new Error('Could not find uploads playlist')
        }

        // Then, get the videos from the uploads playlist
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=3&key=${apiKey}`
        )

        if (!videosResponse.ok) {
          throw new Error('Failed to fetch videos')
        }

        const videosData = await videosResponse.json()
        setVideos(videosData.items || [])
        setLoading(false)
      } catch (err: any) {
        setError(err.message || 'Failed to load YouTube videos')
        setLoading(false)
      }
    }

    fetchVideos()
  }, [channelId, apiKey])

  if (loading) {
    return (
      <div className="text-center py-4">
        <RefreshCw className="w-6 h-6 mx-auto mb-2 animate-spin text-gray-400" />
        <p className="text-xs text-gray-500">Loading videos...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-4">
        <div className="aspect-video bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center text-white">
          <div className="text-center p-4">
            <Youtube className="w-10 h-10 mx-auto mb-2" />
            <p className="text-xs font-semibold">Configure API</p>
            <p className="text-xs mt-2 opacity-90">Add keys in .env</p>
          </div>
        </div>
        <div className="text-center">
          <a
            href={`https://www.youtube.com/channel/${channelId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 text-sm font-semibold"
          >
            Visit Channel
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    )
  }

  if (videos.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500">
        <Youtube className="w-8 h-8 mx-auto mb-2 text-gray-400" />
        <p className="text-xs">No videos found</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {videos.map((video) => {
        const videoId = video.snippet.resourceId?.videoId || video.id?.videoId
        const thumbnail = video.snippet.thumbnails?.medium?.url || video.snippet.thumbnails?.default?.url
        
        return (
          <a
            key={videoId}
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-full">
              <Image
                src={thumbnail}
                alt={video.snippet.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <p className="text-white text-xs font-semibold line-clamp-2">
                  {video.snippet.title}
                </p>
              </div>
            </div>
          </a>
        )
      })}
      <div className="text-center">
        <a
          href={`https://www.youtube.com/channel/${channelId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 text-sm font-semibold"
        >
          View Channel
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
}
