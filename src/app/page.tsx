export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
      {/* Header */}
      <div className="text-center mb-16 pt-8">
        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 animate-pulse">
          Next.js
        </h1>
      </div>

      {/* First ID - Top Left with floating animation */}
      <div className="absolute top-10 left-10 hover:scale-110 transition-transform">
        <div className="bg-glass p-4 rounded-lg backdrop-blur-sm bg-white/10">
          <span className="text-3xl font-bold text-pink-300 animate-float">66023096</span>
        </div>
      </div>

      {/* Second ID - Top Right with rotating glow */}
      <div className="absolute top-10 right-10">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur animate-spin-slow"></div>
          <div className="relative bg-black p-4 rounded-lg">
            <span className="text-3xl font-bold text-blue-300">66023096</span>
          </div>
        </div>
      </div>

      {/* Third ID - Bottom Left with bounce */}
      <div className="absolute bottom-10 left-10">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 p-[2px] rounded-lg animate-bounce">
          <div className="bg-black p-4 rounded-lg">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              66023096
            </span>
          </div>
        </div>
      </div>

      {/* Fourth ID - Bottom Right with typing effect */}
      <div className="absolute bottom-10 right-10">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg shadow-neon animate-pulse">
          <span className="text-3xl font-bold text-white typewriter">66023096</span>
        </div>
      </div>

      {/* Center Content */}
      <div className="flex justify-center items-center h-[80vh]">
        <div className="bg-glass p-8 rounded-xl backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all">
          <h2 className="text-4xl font-bold text-white mb-4">Welcome to My Portfolio</h2>
          <p className="text-gray-300">Interactive design showcase</p>
        </div>
      </div>
    </main>
  );
}
