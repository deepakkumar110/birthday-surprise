import { useEffect, useState } from "react";


function App() {
  const [surprise, setSurprise] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.className = "floating-heart";
      heart.innerHTML = "♥";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 4 + Math.random() * 5 + "s";
      heart.style.fontSize = 12 + Math.random() * 18 + "px";

      document.querySelector(".hearts-container")?.appendChild(heart);

      setTimeout(() => heart.remove(), 9000);
    };

    const interval = setInterval(createHeart, 700);

    return () => clearInterval(interval);
  }, []);

  const handleSurprise = () => {
    setSurprise(true);

    for (let i = 0; i < 35; i++) {
      setTimeout(() => {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.innerHTML = ["❤️", "✨", "💖", "🎉", "🌸"][
          Math.floor(Math.random() * 5)
        ];

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = 2 + Math.random() * 3 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
      }, i * 60);
    }
  };

  return (
    <div className="app">
      <div className="hearts-container"></div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="small-text">A little surprise for someone special ✨</p>

          <h1>
            Hey <span>Khushboo</span> ❤️
          </h1>

          <p className="hero-subtitle">
            Today isn't just another day...
            <br />
            It's the day someone very special was born.
          </p>

          <button
            className="surprise-btn"
            onClick={() =>
              document
                .getElementById("birthday")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Open Your Surprise 🎁
          </button>
        </div>

        <div className="scroll-down">↓</div>
      </section>

      {/* BIRTHDAY */}
      <section className="birthday" id="birthday">
        <div className="section-container">
          <p className="section-label">THE SPECIAL DAY</p>

          <h2>
            Happy Birthday
            <br />
            <span>Khushboo ❤️</span>
          </h2>

          {/* PHOTO PLACEHOLDER */}
          <div className="photo-wrapper">
            <div className="photo-frame">
              <div className="photo-placeholder">
                <span>📸</span>
                <p>Khushboo's Photo</p>
                <small>Photo will be added here ❤️</small>
              </div>
            </div>
          </div>

          <p className="birthday-text">
            May your smile always be this beautiful,
            <br />
            your heart always stay this pure,
            <br />
            and every dream of yours come true. ✨
          </p>
        </div>
      </section>

      {/* MESSAGE */}
      <section className="message-section">
        <div className="glass-card">
          <div className="quote">“</div>

          <p className="section-label">A MESSAGE FROM DEEPAK</p>

          <h2>For You, Khushboo 💌</h2>

          {!showMessage ? (
            <>
              <p className="message-preview">
                There are some things that are difficult to say...
                <br />
                so today, I decided to write them instead.
              </p>

              <button
                className="read-btn"
                onClick={() => setShowMessage(true)}
              >
                Read My Message 💌
              </button>
            </>
          ) : (
            <div className="full-message">
              <p>
                Dear Khushboo,
              </p>

              <p>
                On your special day, I just want to wish you a life full of
                happiness, beautiful moments, and endless reasons to smile.
              </p>

              <p>
                You deserve all the good things life has to offer.
                Never stop being the amazing person you are.
              </p>

              <p>
                And whenever life feels difficult, I hope you remember that
                there will always be someone wishing the best for you.
              </p>

              <p className="signature">
                Happy Birthday once again ❤️
                <br />
                <strong>— Deepak Malviya</strong>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* WHY SPECIAL */}
      <section className="special-section">
        <div className="section-container">
          <p className="section-label">JUST A FEW THINGS</p>

          <h2>
            Why You're <span>Special</span> ✨
          </h2>

          <div className="cards">
            <div className="special-card">
              <div className="card-icon">😊</div>
              <h3>Your Smile</h3>
              <p>
                Some smiles can make an ordinary day feel a little more
                beautiful.
              </p>
            </div>

            <div className="special-card">
              <div className="card-icon">🌸</div>
              <h3>Your Heart</h3>
              <p>
                Stay kind, stay genuine and never change the beautiful person
                you are.
              </p>
            </div>

            <div className="special-card">
              <div className="card-icon">✨</div>
              <h3>Your Presence</h3>
              <p>
                Some people simply make moments more memorable by being there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SURPRISE */}
      <section className="surprise-section">
        <div className="surprise-content">
          <div className="gift">🎁</div>

          <p className="section-label">ONE LAST THING</p>

          <h2>
            I Have a <span>Surprise</span> For You
          </h2>

          <p>
            Because birthdays deserve a little extra magic...
          </p>

          <button className="magic-btn" onClick={handleSurprise}>
            {surprise ? "✨ Happy Birthday! ✨" : "Click For Magic ✨"}
          </button>

          {surprise && (
            <div className="final-message">
              <h3>🎉 HAPPY BIRTHDAY KHUSHBOO 🎉</h3>

              <p>
                May this new chapter of your life be
                <br />
                happier, brighter and more beautiful than ever. ❤️
              </p>

              <div className="final-heart">❤️</div>

              <p className="from">
                With lots of good wishes
                <br />
                <strong>Deepak Malviya</strong>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        Made with ❤️ by <strong>Deepak Malviya</strong>
        <br />
        <span>For Khushboo's Special Day ✨</span>
      </footer>
    </div>
  );
}

export default App;