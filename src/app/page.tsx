export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
    

      <header className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Welcome to My Home Page</h1>
        </div>
      </header>
      <main className="flex-1 flex flex-col justify-center items-center text-center py-12 px-4 sm:px-6 lg:px-8 bg-home-back bg-cover" >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Accurate Books</h2>
        <p className="text-lg text-gray-600 max-w-prose">
        At Accurate Books, we simplify accounting for individuals and businesses. From bookkeeping to tax preparation, our team provides reliable, personalized services to meet your unique needs. We focus on accuracy and transparency, giving you peace of mind to manage your finances while you focus on what matters most.
        </p>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <p className="text-center">&copy; 2024 My Tailwind Next.js Site</p>
      </footer>
    </div>
    
  )
};
