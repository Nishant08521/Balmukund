"use client";

/**
 * Social Media Feed Embedding - NO CREDENTIALS REQUIRED!
 * 
 * This component embeds Instagram and Facebook feeds without requiring API credentials.
 * 
 * HOW IT WORKS:
 * 
 * 1. INSTAGRAM:
 *    - Uses Instagram's public oEmbed API (no credentials needed)
 *    - Just provide post URLs in .env: NEXT_PUBLIC_INSTAGRAM_POST_URLS="url1,url2,url3"
 *    - Example: https://www.instagram.com/p/ABC123xyz/
 * 
 * 2. FACEBOOK:
 *    - Option A: Use Facebook Page Plugin (no credentials needed)
 *      Just provide your page URL in .env: NEXT_PUBLIC_FACEBOOK_PAGE_URL
 *    - Option B: Use Facebook's public oEmbed API with post URLs
 *      Add post URLs in .env: NEXT_PUBLIC_FACEBOOK_POST_URLS="url1,url2,url3"
 * 
 * 3. YOUTUBE:
 *    - Option A: Use YouTube Data API v3 (requires API key)
 *      Provide API key, URL, and channel/playlist ID in .env
 *    - Option B: Use static video URLs (no credentials needed)
 *      Just provide video URLs in .env: NEXT_PUBLIC_YOUTUBE_VIDEO_URLS="url1,url2,url3"
 *    - Example: https://www.youtube.com/watch?v=ABC123
 * 
 * SETUP:
 * Add to your .env.local file:
 * 
 * NEXT_PUBLIC_INSTAGRAM_USERNAME=your_username
 * NEXT_PUBLIC_INSTAGRAM_POST_URLS=https://www.instagram.com/p/ABC123/,https://www.instagram.com/p/XYZ789/
 * 
 * NEXT_PUBLIC_FACEBOOK_PAGE_URL=https://www.facebook.com/yourpage
 * NEXT_PUBLIC_FACEBOOK_POST_URLS=https://www.facebook.com/permalink.php?story_fbid=...
 * 
 * NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key (required for API fetching)
 * NEXT_PUBLIC_YOUTUBE_API_URL=https://www.googleapis.com/youtube/v3 (default API URL)
 * NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=UC_xxxxx (channel ID for fetching videos)
 * NEXT_PUBLIC_YOUTUBE_VIDEO_URLS=https://www.youtube.com/watch?v=ABC123,https://www.youtube.com/watch?v=XYZ789 (fallback option)
 */

import { useState, useEffect, useRef } from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import Script from "next/script";
import Image from "next/image";

// Social Media Feed Component
export default function FollowOnSocialPage() {
  const [mounted, setMounted] = useState(false);
  const [facebookReady, setFacebookReady] = useState(false);
  const facebookScriptLoaded = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize Facebook SDK after script loads
  const initFacebookSDK = () => {
    if (typeof window !== "undefined" && (window as any).FB) {
      // Initialize Facebook SDK
      (window as any).FB.init({
        xfbml: true,
        version: "v18.0",
      });
      // Parse and render Facebook widgets
      (window as any).FB.XFBML.parse();
      setFacebookReady(true);
    } else {
      // Retry if FB is not available yet
      setTimeout(initFacebookSDK, 100);
    }
  };

  const handleFacebookScriptLoad = () => {
    if (!facebookScriptLoaded.current) {
      facebookScriptLoaded.current = true;
      initFacebookSDK();
    }
  };

  // YouTube API Configuration
  const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "AIzaSyDWvmS1GN6O_Jo4rhOkN_xjYPL6n_tUs6o";
  const YOUTUBE_API_URL = process.env.NEXT_PUBLIC_YOUTUBE_API_URL || "https://www.googleapis.com/youtube/v3/search";
  const YOUTUBE_CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || "UCklMHyJsn8nImN-iKH57jSQ";
  // YouTube Video URLs - Fallback option (NO CREDENTIALS NEEDED!)
  // Just copy the URLs from YouTube videos you want to display
  // Example: "https://www.youtube.com/watch?v=ABC123,https://www.youtube.com/watch?v=XYZ789"
  const YOUTUBE_VIDEO_URLS = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_URLS
    ? process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_URLS.split(",")
        .map((url) => url.trim())
        .filter(Boolean)
    : [];

  // Facebook Page URL - Replace with your actual page URL
  const FACEBOOK_PAGE_URL =
    process.env.NEXT_PUBLIC_FACEBOOK_PAGE_URL ||
    "https://www.facebook.com/profile.php?id=61557173077553";
  const FACEBOOK_PAGE_NAME =
    process.env.NEXT_PUBLIC_FACEBOOK_PAGE_NAME || "Balmukund Super";

  // Instagram Username - Replace with your actual username
  const INSTAGRAM_USERNAME =
    process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || "Balmukund Super";
  // Instagram Post URLs - Comma-separated list of post URLs (NO CREDENTIALS NEEDED!)
  // Just copy the URLs from Instagram posts you want to display
  // Example: "https://www.instagram.com/p/ABC123/,https://www.instagram.com/p/XYZ789/"
  const INSTAGRAM_POST_URLS = process.env.NEXT_PUBLIC_INSTAGRAM_POST_URLS
    ? process.env.NEXT_PUBLIC_INSTAGRAM_POST_URLS.split(",")
        .map((url) => url.trim())
        .filter(Boolean)
    : [];

  // Facebook Post URLs - Comma-separated list of post URLs (NO CREDENTIALS NEEDED!)
  // Optional: If provided, will show specific posts instead of the full page feed
  const FACEBOOK_POST_URLS = process.env.NEXT_PUBLIC_FACEBOOK_POST_URLS
    ? process.env.NEXT_PUBLIC_FACEBOOK_POST_URLS.split(",")
        .map((url) => url.trim())
        .filter(Boolean)
    : [];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Facebook SDK Script - No credentials needed for Page Plugin */}
      {mounted && (
        <Script
          id="facebook-jssdk"
          strategy="afterInteractive"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0"
          onLoad={handleFacebookScriptLoad}
          onReady={handleFacebookScriptLoad}
        />
      )}

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${
            process.env.NEXT_PUBLIC_SOCIAL_BG_IMAGE || "/social.jpg"
          })`,
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

            <div className="h-[600px] overflow-y-auto p-4">
              <FacebookFeedCompact
                pageUrl={FACEBOOK_PAGE_URL}
                postUrls={FACEBOOK_POST_URLS.length > 0 ? FACEBOOK_POST_URLS : []}
                mounted={mounted}
                facebookReady={facebookReady}
              />
            </div>
          </div>

          {/* Instagram Section - No credentials needed, just post URLs */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 text-center">
              <Instagram className="w-6 h-6 mx-auto mb-2" />
              <h2 className="text-xl font-bold">Instagram</h2>
            </div>
            
            <div className="h-[600px] overflow-y-auto p-4">
              <InstagramFeedCompact 
                postUrls={INSTAGRAM_POST_URLS.length > 0 ? INSTAGRAM_POST_URLS : []} 
                username={INSTAGRAM_USERNAME}
              />
            </div>
          </div>

          {/* YouTube Section - No credentials needed, just video URLs */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-red-600 text-white p-4 text-center">
              <Youtube className="w-6 h-6 mx-auto mb-2" />
              <h2 className="text-xl font-bold">YouTube</h2>
            </div>

            <div className="h-[600px] overflow-y-auto p-4">
              <YouTubeFeedCompact
                apiKey={YOUTUBE_API_KEY}
                apiUrl={YOUTUBE_API_URL}
                channelId={YOUTUBE_CHANNEL_ID}
                videoUrls={YOUTUBE_VIDEO_URLS.length > 0 ? YOUTUBE_VIDEO_URLS : []}
                mounted={mounted}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {mounted && (
        <div className="fixed bottom-4 right-4 z-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

// Facebook Feed Component using Facebook Graph API
// Fetches posts from your Facebook page using API credentials
function FacebookFeedCompact({
  pageUrl,
  postUrls,
  mounted,
  facebookReady,
}: {
  pageUrl: string;
  postUrls: string[];
  mounted: boolean;
  facebookReady: boolean;
}) {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (mounted) {
      fetchFacebookPosts();
    }
  }, [mounted]);

  const fetchFacebookPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://graph.facebook.com/243404738861900/feed?fields=permalink_url,full_picture,message,created_time&access_token=EAFkZABfrgbO4BQG1tCeP9gj4zHygaP6bPIJj3GnfZBsLPfhuxZA3bqBO2pG84BasYzZBoybjTSuQPo2XWHfATrZA6artM5JaqwXkAlRm4Q3UFsZCg8tOKao8Sk8QZBHiYcwasYSNwM6WbynQKD657BFSe106WKOHhrmZCxDL607jMimxVx22cH9KZAbf4iJlJ01XdwWPZBaqlWZCKbJGebuuYZAmBMP4V3yJJkRzav8vWgZDZD&limit=5`);
      const data = await response.json();
      
      if (response.ok && data.data) {
        setPosts(data.data);
      } else {
        setError(data.error || 'Failed to fetch Facebook posts');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch Facebook posts');
    } finally {
      setLoading(false);
    }
  };

  if (!mounted || loading) {
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <div className="text-center text-gray-500">
          <RefreshCw className="w-8 h-8 mx-auto mb-2 animate-spin" />
          <p className="text-sm">Loading Facebook posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <div className="text-center text-gray-500 p-4">
          <Facebook className="w-10 h-10 mx-auto mb-2 text-blue-600" />
          <p className="text-sm font-semibold mb-2">Error loading posts</p>
          <p className="text-xs mb-4">{error}</p>
          <button
            onClick={fetchFacebookPosts}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // If no posts available
  if (posts.length === 0) {
    return (
      <div className="space-y-4">
        <div className="bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 p-8">
          <div className="text-center">
            <Facebook className="w-10 h-10 mx-auto mb-2" />
            <p className="text-xs font-semibold">No posts available</p>
            <p className="text-xs mt-2 opacity-90">
              Check your Facebook API credentials
            </p>
          </div>
        </div>
        <div className="text-center">
          <a
            href={pageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-semibold"
          >
            Visit Page
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  // Render posts from Facebook API
  return (
    <div className="space-y-4">
      <div className="text-center pb-2 border-b border-gray-200">
        <p className="text-xs text-gray-600 font-semibold">
          {posts.length} {posts.length === 1 ? "post" : "posts"}
        </p>
      </div>
      {posts.map((post) => {
        const postDate = post.created_time 
          ? new Date(post.created_time).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })
          : '';
        
        // Get image from post
        // const postImage = post.permalink_url;

        return (
          <div key={post.id} className="border rounded-lg overflow-hidden bg-white shadow-sm">
            {/* Post Image */}
            {post.full_picture && (
              <div className="relative w-full aspect-video">
                <img
                  src={post.full_picture}
                  alt={post.message || 'Facebook post'}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Post Content */}
            <div className="p-3">
              {post.message && (
                <p className="text-xs text-gray-700 mb-2 line-clamp-4">
                  {post.message}
                </p>
              )}
              
              {/* {postDate && (
                <p className="text-xs text-gray-500 mb-2">{postDate}</p>
              )} */}
              
              {post.permalink_url && (
                <a
                  href={post.permalink_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-xs font-semibold"
                >
                  View on Facebook
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        );
      })}
      
      <div className="text-center">
        <a
          href={pageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-semibold"
        >
          Visit Page
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

// Instagram Feed Component using Instagram Graph API
// Fetches posts from your Instagram account using API credentials
function InstagramFeedCompact({
  postUrls,
  username,
}: {
  postUrls: string[];
  username: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    fetchInstagramPosts();
  }, []);

  const fetchInstagramPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://graph.instagram.com/17841465652366456/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=IGAAMFNV64ykFBZAFIyQ29aemFvcmVjTFdTRjBtRTNXRTJjLXUzWHF3YlBWVkRhc0NOd2dydjUxR0p6ZA000a1MtU3RUVC0zU20xZAEd0RXFwQVoxbTJJZAU1VdkljbGk4cVRKNzJkN0dKRm9Gcjh3cFRPcXM5MHJxUkIzX1JlYWxnSQZDZD&limit=5`);
      const data = await response.json();

      if (response.ok && data.data) {
        setPosts(data.data);
      } else {
        setError(data.error || 'Failed to fetch Instagram posts');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch Instagram posts');
    } finally {
      setLoading(false);
    }
  };

  if (!mounted || loading) {
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white p-8">
          <div className="text-center">
            <RefreshCw className="w-10 h-10 mx-auto mb-2 animate-spin" />
            <p className="text-xs font-semibold">Loading Instagram...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white p-8">
          <div className="text-center">
            <Instagram className="w-10 h-10 mx-auto mb-2" />
            <p className="text-xs font-semibold">Error loading posts</p>
            <p className="text-xs mt-2 opacity-90">{error}</p>
            <button
              onClick={fetchInstagramPosts}
              className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-semibold transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If no posts available
  if (posts.length === 0) {
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white p-8">
          <div className="text-center">
            <Instagram className="w-10 h-10 mx-auto mb-2" />
            <p className="text-xs font-semibold">No posts available</p>
            <p className="text-xs mt-2 opacity-90">
              Check your Instagram API credentials
            </p>
          </div>
        </div>
        <div className="text-center">
          <a
            href={`https://www.instagram.com/${username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 text-sm font-semibold"
          >
            Follow on Instagram
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    );
  }

  // Render posts from Instagram API
  return (
    <div className="space-y-4">
      <div className="text-center pb-2 border-b border-gray-200">
        <p className="text-xs text-gray-600 font-semibold">
          {posts.length} {posts.length === 1 ? "post" : "posts"}
        </p>
      </div>
      {posts.map((post) => {
        // Display Instagram post with image and caption
        return (
          <div key={post.id} className="border rounded-lg overflow-hidden bg-white">
            {post.media_url && (
              <div className="relative w-full aspect-square">
                <img
                  src={post.media_url}
                  alt={post.caption || 'Instagram post'}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {post.caption && (
              <div className="p-3">
                <p className="text-xs text-gray-700 line-clamp-3">{post.caption}</p>
              </div>
            )}
            {post.permalink && (
              <div className="p-3 border-t">
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 text-xs font-semibold"
                >
                  View on Instagram
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        );
      })}
      <div className="text-center">
        <a
          href={`https://www.instagram.com/${username}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 text-sm font-semibold"
        >
          Follow on Instagram
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

// YouTube Feed Component using YouTube Data API v3
// Fetches videos from YouTube channel using API credentials
function YouTubeFeedCompact({
  apiKey,
  apiUrl,
  channelId,
  videoUrls,
  mounted,
}: {
  apiKey: string;
  apiUrl: string;
  channelId: string;
  videoUrls: string[];
  mounted: boolean;
}) {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [youtubeMounted, setYoutubeMounted] = useState(false);

  useEffect(() => {
    setYoutubeMounted(true);
    if (mounted && apiKey && channelId) {
      fetchYouTubeVideos();
    } else if (mounted && videoUrls.length > 0) {
      // Fallback to static video URLs if API is not configured
      setLoading(false);
    } else if (mounted) {
      setLoading(false);
    }
  }, [mounted, apiKey, channelId]);

  const fetchYouTubeVideos = async () => {
    try {
      setLoading(true);
      setError(null);

      // let apiEndpoint = "";
      
      // if (channelId) {
      //   // First, get the uploads playlist ID from channel
      //   const channelResponse = await fetch(
      //     `${apiUrl}?key=${apiKey}&channelId=${channelId}&order=date&part=snippet`
      //   );
      //   const channelData = await channelResponse.json();

      //   if (channelData.items && channelData.items[0]?.contentDetails?.relatedPlaylists?.uploads) {
      //     const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
      //     apiEndpoint = `${apiUrl}/playlistItems?key=${apiKey}&playlistId=${uploadsPlaylistId}&part=snippet&maxResults=5`;
      //   } else {
      //     // Fallback: search for videos from channel
      //     apiEndpoint = `${apiUrl}/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&type=video&maxResults=5`;
      //   }
      // }

      const response = await fetch(`${apiUrl}?key=${apiKey}&channelId=${channelId}&order=date&part=snippet`);
      const data = await response.json();

      if (response.ok && data.items) {
        // Transform the data to a consistent format
        const transformedVideos = data.items.map((item: any) => {
          const videoId = item.snippet?.resourceId?.videoId || item.id?.videoId || item.id;
          return {
            id: videoId,
            title: item.snippet?.title || "",
            description: item.snippet?.description || "",
            thumbnail: item.snippet?.thumbnails?.medium?.url || item.snippet?.thumbnails?.default?.url || "",
            publishedAt: item.snippet?.publishedAt || "",
            videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
          };
        });
        setVideos(transformedVideos);
      } else {
        setError(data.error?.message || 'Failed to fetch YouTube videos');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch YouTube videos');
    } finally {
      setLoading(false);
    }
  };

  // Only render embeds after mount to prevent hydration mismatch
  if (!mounted || !youtubeMounted || loading) {
    return (
      <div className="text-center py-4">
        <RefreshCw className="w-6 h-6 mx-auto mb-2 animate-spin text-gray-400" />
        <p className="text-xs text-gray-500">Loading YouTube videos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-4">
        <div className="aspect-video bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center text-white">
          <div className="text-center p-4">
            <Youtube className="w-10 h-10 mx-auto mb-2" />
            <p className="text-xs font-semibold">Error loading videos</p>
            <p className="text-xs mt-2 opacity-90">{error}</p>
            <button
              onClick={fetchYouTubeVideos}
              className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-semibold transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
        {channelId && (
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
        )}
      </div>
    );
  }

  // Use API videos if available, otherwise fallback to static video URLs
  const videosToDisplay = videos.length > 0 ? videos : videoUrls.map((url, index) => {
    const getVideoId = (url: string) => {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;
    };
    const videoId = getVideoId(url);
    return videoId ? { id: videoId, videoUrl: url } : null;
  }).filter(Boolean);

  // If no videos available
  if (videosToDisplay.length === 0) {
    return (
      <div className="space-y-4">
        <div className="aspect-video bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center text-white">
          <div className="text-center p-4">
            <Youtube className="w-10 h-10 mx-auto mb-2" />
            <p className="text-xs font-semibold">No videos available</p>
            <p className="text-xs mt-2 opacity-90">
              {apiKey && channelId 
                ? "Check your YouTube API credentials" 
                : "Configure YouTube API key and channel ID"}
            </p>
          </div>
        </div>
        {channelId && (
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
        )}
      </div>
    );
  }

  // Render videos
  return (
    <div className="space-y-4">
      <div className="text-center pb-2 border-b border-gray-200">
        <p className="text-xs text-gray-600 font-semibold">
          {videosToDisplay.length} {videosToDisplay.length === 1 ? "video" : "videos"}
        </p>
      </div>
      {videosToDisplay.map((video: any, index: number) => {
        const videoId = video.id || (video.videoUrl ? video.videoUrl.split('v=')[1]?.split('&')[0] : null);
        
        if (!videoId) {
          return (
            <div key={index} className="text-center p-4 text-gray-500 text-xs">
              Invalid video
            </div>
          );
        }
        
        return (
          <div key={video.id || index} className="space-y-2">
            <div className="flex justify-center">
              <div className="w-full aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={video.title || "YouTube video player"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            {video.title && (
              <div className="p-2 bg-gray-50 rounded">
                <p className="text-xs text-gray-700 line-clamp-2 font-semibold">{video.title}</p>
                {video.publishedAt && (
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(video.publishedAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </p>
                )}
              </div>
            )}
            {video.videoUrl && (
              <div className="text-center">
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 text-xs font-semibold"
                >
                  Watch on YouTube
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        );
      })}
      <div className="text-center">
        <a
          href={
            channelId
              ? `https://www.youtube.com/channel/${channelId}`
              : "https://www.youtube.com"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 text-sm font-semibold"
        >
          Follow on YouTube
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}