import { Facebook, Instagram, Youtube, Play, Share2, Heart, MessageCircle } from "lucide-react"

export default function FollowOnSocialPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800">
        {/* Floating Circles Animation */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/8 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-white/6 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-18 h-18 bg-white/7 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
        
        {/* Floating Social Icons */}
        <div className="absolute top-20 right-1/3 text-white/20 animate-pulse">
          <Facebook className="w-8 h-8" style={{ animationDelay: '0s' }} />
        </div>
        <div className="absolute top-1/3 left-1/3 text-white/15 animate-pulse">
          <Instagram className="w-6 h-6" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute bottom-1/4 left-1/2 text-white/25 animate-pulse">
          <Youtube className="w-7 h-7" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Animated Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent animate-pulse"></div>
        
        {/* Moving Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/35 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '2.5s' }}></div>
        
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
      </div>
      {/* Header */}
      <div className="relative z-10 text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4 drop-shadow-lg">
          Follow On Social
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Facebook Section */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-blue-600 text-white p-4 text-center">
              <Facebook className="w-6 h-6 mx-auto mb-2" />
              <h2 className="text-xl font-bold">Facebook</h2>
            </div>
            
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {/* Facebook Profile Card */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-20"></div>
                <div className="p-4 -mt-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                      BS
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Balmukund Super</h3>
                      <p className="text-sm text-gray-600">89,789 followers</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    बालमुकुन्द सुपर स्टील यानि मजबूती की सुप्रीम गारंटी
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded text-sm font-semibold">
                      Follow Page
                    </button>
                    <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded text-sm">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Video Post */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative bg-gradient-to-br from-orange-400 to-red-600 h-32 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl mb-2">🏹</div>
                    <div className="text-sm font-semibold">Lord Rama</div>
                  </div>
                  <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white" />
                </div>
                <div className="p-3">
                  <p className="text-sm text-gray-700">Festival greetings from Balmukund Super Steel</p>
                </div>
              </div>

              {/* Additional Posts */}
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600">More posts available...</p>
              </div>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 text-center">
              <Instagram className="w-6 h-6 mx-auto mb-2" />
              <h2 className="text-xl font-bold">Instagram</h2>
            </div>
            
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {/* Mountain Post */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-32 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl mb-1">🏔️</div>
                    <div className="text-xs">Mountain Range</div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-gray-600">1,234 likes</span>
                  </div>
                  <p className="text-sm text-gray-700">Beautiful landscapes from our journey</p>
                </div>
              </div>

              {/* Jagannath Post */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="h-32 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-lg font-bold mb-1">जय जगन्नाथ</div>
                    <div className="text-xs">BALMUKUND SUPER GROUP</div>
                    <div className="text-xs">रथ यात्रा</div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-gray-600">2,567 likes</span>
                  </div>
                  <p className="text-sm text-gray-700">Rath Yatra greetings from Balmukund Super Group</p>
                </div>
              </div>

              {/* Additional Posts */}
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600">More posts available...</p>
              </div>
            </div>
          </div>

          {/* YouTube Section */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-red-600 text-white p-4 text-center">
              <Youtube className="w-6 h-6 mx-auto mb-2" />
              <h2 className="text-xl font-bold">YouTube</h2>
            </div>
            
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {/* Vijayadashami Video */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative bg-gradient-to-br from-red-600 to-red-800 h-24 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-lg mb-1">👁️</div>
                    <div className="text-xs">विजयादशमी की शुभकामनाएं</div>
                  </div>
                  <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-white" />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold mb-1">Vijayadashami Greetings</p>
                  <p className="text-xs text-gray-600">Balmukund Super Group</p>
                  <div className="flex items-center gap-2 mt-2">
                    <MessageCircle className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-500">456 views</span>
                  </div>
                </div>
              </div>

              {/* Navadurga Video */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 h-24 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-lg mb-1">🦁</div>
                    <div className="text-xs">Navadurga</div>
                  </div>
                  <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-white" />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold mb-1">Navadurga Festival</p>
                  <p className="text-xs text-gray-600">Balmukund Super Group</p>
                  <div className="flex items-center gap-2 mt-2">
                    <MessageCircle className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-500">789 views</span>
                  </div>
                </div>
              </div>

              {/* Additional Videos */}
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600">More videos available...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  )
}
