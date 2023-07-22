import Link from 'next/link'

const Home = () => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white ">
      <div className="w-full max-w-[1000px] max-auto">
        <h1 className="text-6xl mb-6">
          Elevate Your Chatting Experience with your friends.
        </h1>
        <p className="text-2xl text-white/50 mb-2">
          Best app for chatting and sharing your thoughts with your friends.
        </p>
        <div>
          <Link href={'/'}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
