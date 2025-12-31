import { useState } from 'react'
import './App.css'
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import Modal from './components/Modal';

function App() {
  const { width, height } = useWindowSize();
  const [open, setOpen] = useState(false);

  return (
    <div className="page">
      <Confetti
        width={width}
        height={height}
        numberOfPieces={200}
        wind={.01}
      >
      </Confetti>

      <header className="hero">
        <img src="/images/yeli.jpeg" alt="freundin" className="hero-photo" />
        <h1 className="title">¡Feliz cumple, Yeli! 🎂</h1>
        <p className="subtitle">🌷 Ya eres una medusilla grande 💪</p>
        <div className="actions">
          <button className="btn pink"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}

          > ¡Un botón 😼! </button>
        </div>
      </header>
      <main className="content">
        <section className="gallery">
          <h2>Fotitos tiernas</h2>
          <div className="grid">
            <img src="/images/meme1.jpeg" alt="meme1" />
            <img src="/images/darkchicken.jpeg" alt="meme2" />
            <img src="/images/meme3.jpeg" alt="meme3" />
          </div>
        </section>

      </main>

      <Modal isOpen={open} onClose={() => setOpen(false)}
        imageSrc="/images/meme2.jpeg"
        imageAlt="un meme"
      />

    </div>


  );
}

export default App
