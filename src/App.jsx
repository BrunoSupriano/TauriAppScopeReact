import React, { useState } from 'react';
import TitleBar from './components/TitleBar';
import Button from './components/Button';
import Popup from './components/Popup';
import colors from './theme/colors';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center bg-transparent rounded-lg text-white font-['Outfit']">
      {/* TitleBar */}
      <TitleBar />

      {/* Background Animated Mesh */}
      <div className="absolute inset-0 z-[-1] animate-[pulseMesh_10s_infinite_alternate]"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(118, 75, 162, 0.4), transparent 60%), radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.4), transparent 40%)`,
          filter: 'blur(60px)'
        }}
      />

      {/* Main Glass Container */}
      <main className="w-[90%] max-w-[800px] min-h-[500px] bg-glass-bg backdrop-blur-md rounded-3xl border border-glass-border shadow-glass p-10 flex flex-col gap-8 transition-transform duration-300 hover:-translate-y-1">
        <header>
          <h1 className="text-5xl font-semibold mb-2 bg-gradient-to-r from-white to-[#b4c6ff] bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-lg text-text-muted">Experience the future of UI design.</p>
        </header>

        <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 transition-all duration-300 cursor-pointer hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-medium">Analytics</h3>
            <p className="text-sm text-text-muted">Real-time data visualization.</p>
            <div className="h-[50px] mt-4 rounded-lg bg-gradient-to-r from-white/10 via-white/20 to-white/10"></div>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 transition-all duration-300 cursor-pointer hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-2 text-xl font-medium">Settings</h3>
            <p className="text-sm text-text-muted">Customize your experience.</p>
          </div>
        </section>

        <footer className="mt-auto text-center">
          <Button onClick={() => setIsPopupOpen(true)} variant="primary">
            Open Popup
          </Button>
        </footer>
      </main>

      {/* Popup */}
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title="Special Offer"
      >
        <p>Unlock premium features with our glassmorphism UI kit today.</p>
        <div className="mt-6">
          <Button onClick={() => console.log('Get Started')} variant="secondary" className="text-[#302b63] font-bold">
            Get Started
          </Button>
        </div>
      </Popup>
    </div>
  );
}

export default App;
