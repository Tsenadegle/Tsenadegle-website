import { useState } from 'react';

export default function HomePage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-green-700 text-white py-6 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Tsenadegle of North America</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#events" className="hover:underline">Events</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <section id="about" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-lg">
            Tsenadegle of North America is a nonprofit organization dedicated to uniting and uplifting the Tsenadegle community through education, outreach, and annual cultural events. We aim to preserve our heritage, support youth, and build a stronger community network.
          </p>
        </section>

        <section id="events" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Annual Conference</h2>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2">2025 Tsenadegle Annual Conference</h3>
            <p>
              Our 2025 conference brought together hundreds of attendees, featuring keynote speakers, youth workshops, and cultural performances. The event served as a platform for community engagement, fundraising, and sharing of initiatives.
            </p>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Community Projects</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Youth mentorship and scholarship programs</li>
            <li>Annual fundraising and grant application efforts</li>
            <li>Health and wellness awareness outreach</li>
            <li>Local partnerships in Georgia and nationwide</li>
          </ul>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
          <form className="flex flex-col space-y-4 max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2"
            />
            <button type="submit" className="bg-green-700 text-white py-2 rounded">Subscribe to Newsletter</button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-100 py-6 px-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Tsenadegle of North America. All rights reserved.
      </footer>
    </div>
  );
}
