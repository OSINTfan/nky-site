export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">nky.fm</h1>
        <p className="text-xl md:text-2xl mb-6 max-w-xl">
          Launch coins. Earn fees. Save lives.
        </p>
        <p className="text-md max-w-md mb-10 text-gray-400">
          A Solana memecoin launchpad that shares trading fees with suicide prevention causes.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-xl font-medium hover:bg-gray-200 transition">
            Launch a Coin
          </button>
          <button className="border border-white px-6 py-2 rounded-xl font-medium hover:bg-white hover:text-black transition">
            Why Suicide Prevention?
          </button>
        </div>
      </section>

      <section className="bg-gray-900 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">🚀 Launch</h3>
            <p>Create a Solana token in seconds. No coding, no friction.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">💰 Earn</h3>
            <p>Collect trading fees from your coin’s volume, auto-sent to your wallet.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🤝 Give</h3>
            <p>A portion of trading fees supports suicide prevention orgs.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📈 Transparent</h3>
            <p>All fee flows and donations are tracked on-chain. Nothing hidden.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Suicide Prevention?</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          We joke about rugs, depression, and vanishing mid-cycle. But too many of us don’t make it.
          Every token launched on nky.fm gives back to real-world causes that help people keep going.
          This isn’t charity for clout—it’s crypto with heart.
        </p>
      </section>

      <footer className="bg-black border-t border-gray-800 py-8 px-6 text-center text-sm text-gray-500">
        <p>
          Built with memes and meaning · <a href="https://x.com/nkyfm" className="underline">@nkyfm</a>
        </p>
      </footer>
    </main>
  );
}
