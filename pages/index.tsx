import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-100">
      <Head>
        <title>4Padel</title>
        <meta name="description" content="Web-App für Padel-Spielpartner weltweit" />
      </Head>

      <header className="bg-[#1E1E1E] py-4 px-6 shadow flex justify-between items-center">
        <h1 className="text-yellow-400 text-2xl font-bold">4Padel</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:text-yellow-400">Start</a>
          <a href="#" className="hover:text-yellow-400">Matches</a>
          <a href="#" className="hover:text-yellow-400">Padel-Orte</a>
          <a href="#" className="hover:text-yellow-400">Login</a>
        </nav>
      </header>

      <main className="p-8">
        <section className="text-center my-12">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">Finde deinen Padel-Partner</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            4Padel verbindet Spieler weltweit: Starte Spiele, finde Gruppen, entdecke Plätze und bewerte Zuverlässigkeit.
          </p>
          <button className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-300 transition">Jetzt loslegen</button>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 border-t border-gray-700 mt-20 p-6">
        © 2025 4Padel – Alle Rechte vorbehalten
      </footer>
    </div>
  );
}
