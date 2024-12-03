import { resolve } from "path";

export default async function Contact() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000)
  })
  return (
    <div>
    <header className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-semibold"> For contact </h1>
        </div>
      </header>
      <main className="bg-home-back bg-cover h-screen"></main>
      </div>
  );
}
