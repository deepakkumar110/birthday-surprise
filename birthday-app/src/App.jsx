import { useState, useEffect, useRef } from "react";
import "./index.css";

function App() {
  const [page, setPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [confetti, setConfetti] = useState([]);
  const [transitioning, setTransitioning] = useState(false);

  // ========================================
  // FINAL PAGE BIRTHDAY MUSIC
  // ========================================

  const birthdayAudioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/music/happy-birthday.mp3");
    audio.loop = false;
    audio.preload = "auto";
    birthdayAudioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
      birthdayAudioRef.current = null;
    };
  }, []);

  const stopBirthdayMusic = () => {
    if (birthdayAudioRef.current) {
      birthdayAudioRef.current.pause();
      birthdayAudioRef.current.currentTime = 0;
    }
  };

  const photos = [
    "/images/khushboo-1.jpg",
    "/images/khushboo-2.jpg",
    "/images/khushboo-3.jpg",
    "/images/khushboo-4.jpg",
    "/images/khushboo-5.jpg",
  ];

  // ========================================
  // SMOOTH PAGE CHANGE
  // ========================================

  const changePage = (newPage) => {
    if (newPage === page || transitioning) return;

    if (page === 5 && newPage !== 5) {
      stopBirthdayMusic();
    }

    if (newPage === 5 && birthdayAudioRef.current) {
      const audio = birthdayAudioRef.current;
      audio.currentTime = 0;

      audio.play().catch(() => {
        console.log("Browser blocked automatic music playback.");
      });
    }

    setTransitioning(true);

    setTimeout(() => {
      setPage(newPage);
      setSelectedPhoto(null);

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });

      setTimeout(() => {
        setTransitioning(false);
      }, 80);
    }, 300);
  };

  useEffect(() => {
    if (page !== 5) {
      stopBirthdayMusic();
    }
  }, [page]);

  // ========================================
  // CONFETTI
  // ========================================

  useEffect(() => {
    if (page !== 5) {
      setConfetti([]);
      return;
    }

    const pieces = Array.from({ length: 130 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      delay: Math.random() * 2.5,
      duration: 3 + Math.random() * 4,
      rotation: Math.random() * 360,
      size: 5 + Math.random() * 8,
    }));

    setConfetti(pieces);

    const timer = setTimeout(() => {
      setConfetti([]);
    }, 10000);

    return () => clearTimeout(timer);
  }, [page]);

  return (
    <div className="birthday-app">

      {/* ========================================
          PAGE TRANSITION
      ======================================== */}

      <div
        className={`page-transition ${
          transitioning ? "transition-active" : ""
        }`}
      >
        <div className="transition-star">✦</div>
      </div>


      {/* =====================================================
          PAGE 1
      ===================================================== */}

      {page === 1 && (
        <section className="page page-one page-enter">

          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>

          <div className="floating-heart heart-one">♡</div>
          <div className="floating-heart heart-two">♡</div>
          <div className="floating-heart heart-three">✦</div>
          <div className="floating-heart heart-four">✧</div>

          <div className="welcome-content">

            <div className="top-label">
              ✨ A LITTLE SURPRISE FOR YOU ✨
            </div>

            <p className="hello-text">
              Hey, Khushboo...
            </p>

            <h1 className="hero-name">
              <span>Khushboo</span>
              <strong>Malviya</strong>
            </h1>

            <div className="birthday-date">
              <span></span>
              02 · 09 · 2026
              <span></span>
            </div>

            <p className="hero-description">
              Today is a little more special...
              <br />
              because it's your day. 🎀
            </p>

            <button
              className="surprise-button"
              onClick={() => changePage(2)}
            >
              <span>Open Your Surprise</span>
              <b>→</b>
            </button>

          </div>

          <div className="bottom-note">
            <span>MADE WITH</span>
            <span className="bottom-star">✦</span>
            <span>FOR YOU</span>
          </div>

        </section>
      )}


      {/* =====================================================
          PAGE 2
      ===================================================== */}

      {page === 2 && (
        <section className="page page-two page-enter">

          <div className="page-two-glow glow-three"></div>
          <div className="page-two-glow glow-four"></div>

          <div className="decor-star star-one">✦</div>
          <div className="decor-star star-two">✧</div>
          <div className="decor-star star-three">✦</div>
          <div className="decor-star star-four">♡</div>

          <div className="mystery-content">

            <span className="mystery-label">
              ✦ SOMETHING IS WAITING ✦
            </span>

            <h2 className="mystery-title">
              Khushboo...
            </h2>

            <p className="mystery-subtitle">
              I made something
              <br />
              especially for you. 🎀
            </p>

            <div className="gift-area">

              <div className="gift-glow"></div>

              <div className="gift-box">

                <div className="gift-lid">
                  <div className="gift-ribbon"></div>
                </div>

                <div className="gift-body">
                  <div className="gift-ribbon vertical"></div>
                  <div className="gift-ribbon horizontal"></div>
                </div>

                <div className="gift-bow">
                  <span></span>
                  <span></span>
                  <i></i>
                </div>

              </div>

              <div className="gift-spark spark-a">✦</div>
              <div className="gift-spark spark-b">✧</div>
              <div className="gift-spark spark-c">♡</div>
              <div className="gift-spark spark-d">✦</div>

            </div>

            <p className="tap-hint">
              Go on... tap the button ✨
            </p>

            <button
              className="open-gift-button"
              onClick={() => changePage(3)}
            >
              <span>Open It</span>
              <b>✦</b>
            </button>

            <button
              className="back-to-welcome"
              onClick={() => changePage(1)}
            >
              ← Back
            </button>

          </div>

        </section>
      )}


      {/* =====================================================
          PAGE 3
      ===================================================== */}

      {page === 3 && (
        <section className="page page-three page-enter">

          <div className="gallery-glow gallery-glow-one"></div>
          <div className="gallery-glow gallery-glow-two"></div>

          <div className="gallery-decor decor-left">
            ✦
          </div>

          <div className="gallery-decor decor-right">
            ♡
          </div>

          <div className="gallery-content">

            <div className="gallery-heading">

              <span className="gallery-label">
                ✦ A LITTLE GALLERY ✦
              </span>

              <h2>
                Moments worth
                <span>remembering</span>
              </h2>

              <p>
                A few beautiful moments of you... ✨
              </p>

            </div>

            <div className="photo-grid">

              {photos.map((photo, index) => (
                <div
                  className={`photo-card photo-card-${index + 1}`}
                  key={photo}
                  onClick={() => setSelectedPhoto(index)}
                >

                  <div className="photo-inner">

                    <img
                      src={photo}
                      alt={`Khushboo ${index + 1}`}
                    />

                    <div className="photo-overlay">
                      <span>
                        View ✦
                      </span>
                    </div>

                  </div>

                </div>
              ))}

            </div>

            <p className="gallery-message">
              Every picture has its own little story. 💗
            </p>

            <div className="gallery-buttons">

              <button
                className="gallery-back"
                onClick={() => changePage(2)}
              >
                ← Back
              </button>

              <button
                className="gallery-next"
                onClick={() => changePage(4)}
              >
                There's a message for you
                <span>→</span>
              </button>

            </div>

          </div>


          {/* PHOTO MODAL */}

          {selectedPhoto !== null && (
            <div
              className="photo-modal"
              onClick={() => setSelectedPhoto(null)}
            >

              <button
                className="close-modal"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhoto(null);
                }}
              >
                ×
              </button>

              <button
                className="photo-nav photo-prev"
                onClick={(e) => {
                  e.stopPropagation();

                  setSelectedPhoto(
                    selectedPhoto === 0
                      ? photos.length - 1
                      : selectedPhoto - 1
                  );
                }}
              >
                ←
              </button>

              <div
                className="modal-image-wrapper"
                onClick={(e) => e.stopPropagation()}
              >

                <img
                  src={photos[selectedPhoto]}
                  alt={`Khushboo ${selectedPhoto + 1}`}
                />

                <div className="photo-counter">
                  {selectedPhoto + 1} / {photos.length}
                </div>

              </div>

              <button
                className="photo-nav photo-next"
                onClick={(e) => {
                  e.stopPropagation();

                  setSelectedPhoto(
                    selectedPhoto === photos.length - 1
                      ? 0
                      : selectedPhoto + 1
                  );
                }}
              >
                →
              </button>

            </div>
          )}

        </section>
      )}


      {/* =====================================================
          PAGE 4
      ===================================================== */}

      {page === 4 && (
        <section className="page page-four page-enter">

          <div className="letter-glow letter-glow-one"></div>
          <div className="letter-glow letter-glow-two"></div>

          <div className="letter-decor letter-heart-one">
            ♡
          </div>

          <div className="letter-decor letter-heart-two">
            ✦
          </div>

          <div className="letter-decor letter-heart-three">
            ♡
          </div>

          <div className="letter-content">

            <span className="letter-label">
              ✦ A LITTLE MESSAGE ✦
            </span>

            <h2 className="letter-heading">
              Dear <span>Khushboo,</span>
            </h2>

            <div className="letter-card">

              <div className="letter-top">
                <span>
                  For you
                </span>

                <span>
                  ♡
                </span>
              </div>

              <div className="letter-text">

                <p>
                  First of all...
                </p>

                <p>
                  <strong>
                    Happy Birthday! 🎂✨
                  </strong>
                </p>

                <p>
                  I could have simply sent you a normal
                  “Happy Birthday” message, but I thought
                  your day deserved a little more effort.
                </p>

                <p>
                  So, I made this little surprise just for you.
                  I hope it brings a smile to your face. 😊
                </p>

                <p>
                  May this new year of your life bring you
                  lots of happiness, success, beautiful
                  memories and countless reasons to smile.
                </p>

                <p>
                  Keep smiling, keep being yourself,
                  and always remember that you deserve
                  wonderful things in life. ✨
                </p>

              </div>

              <div className="letter-signature">

                <span>
                  With lots of good wishes,
                </span>

                <strong>
                  Deepak Malviya
                </strong>

                <small>
                  ✦
                </small>

              </div>

            </div>

            <div className="letter-navigation">

              <button
                className="letter-back"
                onClick={() => changePage(3)}
              >
                ← Back
              </button>

              <button
                className="letter-next"
                onClick={() => changePage(5)}
              >
                One Last Surprise
                <span>→</span>
              </button>

            </div>

          </div>

        </section>
      )}


      {/* =====================================================
          PAGE 5 — FINAL WOW MOMENT
      ===================================================== */}

      {page === 5 && (
        <section className="page page-five page-enter">

          {/* ========================================
              CONFETTI
          ======================================== */}

          <div className="confetti-container">
            {confetti.map((piece) => (
              <span
                key={piece.id}
                className="confetti-piece"
                style={{
                  left: `${piece.left}%`,
                  animationDelay: `${piece.delay}s`,
                  animationDuration: `${piece.duration}s`,
                  width: `${piece.size}px`,
                  height: `${piece.size * 1.5}px`,
                  transform: `rotate(${piece.rotation}deg)`,
                }}
              ></span>
            ))}
          </div>


          {/* ========================================
              BACKGROUND GLOW
          ======================================== */}

          <div className="final-glow final-glow-one"></div>
          <div className="final-glow final-glow-two"></div>
          <div className="final-glow final-glow-three"></div>


          {/* ========================================
              DECORATIONS
          ======================================== */}

          <div className="final-decor final-star-one">
            ✦
          </div>

          <div className="final-decor final-star-two">
            ✧
          </div>

          <div className="final-decor final-star-three">
            ✦
          </div>

          <div className="final-decor final-heart-one">
            ♡
          </div>

          <div className="final-decor final-heart-two">
            ♡
          </div>


          {/* ========================================
              BALLOONS
          ======================================== */}

          <div className="balloon balloon-one">
            <span>♥</span>
            <i></i>
          </div>

          <div className="balloon balloon-two">
            <span>✦</span>
            <i></i>
          </div>

          <div className="balloon balloon-three">
            <span>♡</span>
            <i></i>
          </div>

          <div className="balloon balloon-four">
            <span>♥</span>
            <i></i>
          </div>

          <div className="balloon balloon-five">
            <span>✦</span>
            <i></i>
          </div>

          <div className="balloon balloon-six">
            <span>♡</span>
            <i></i>
          </div>


          {/* ========================================
              FINAL CONTENT
          ======================================== */}

          <div className="final-content">

            <span className="final-label">
              ✦ THE FINAL SURPRISE ✦
            </span>

            <p className="final-small-title">
              Once again...
            </p>

            <h1 className="final-title">
              Happy Birthday
              <span>
                Khushboo
              </span>
            </h1>


            {/* ========================================
                FINAL PHOTO
            ======================================== */}

            <div className="final-photo-wrapper">

              <div className="final-photo-ring"></div>

              <div className="final-photo-glow"></div>

              <div className="final-photo">

                <img
                  src="/images/khushboo-final.jpg"
                  alt="Khushboo"
                />

              </div>

              <div className="photo-spark spark-one">
                ✦
              </div>

              <div className="photo-spark spark-two">
                ✧
              </div>

              <div className="photo-spark spark-three">
                ♡
              </div>

              <div className="photo-spark spark-four">
                ✦
              </div>

            </div>


            {/* ========================================
                CAKE
            ======================================== */}

            <div className="cake-area">

              <div className="cake-glow"></div>

              <div className="cake">

                <div className="candle">
                  <div className="flame"></div>
                </div>

                <div className="cake-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="cake-body">

                  <div className="cake-cream"></div>

                  <div className="cake-decoration">
                    <span>♡</span>
                    <span>✦</span>
                    <span>♡</span>
                  </div>

                </div>

                <div className="cake-plate"></div>

              </div>

            </div>


            {/* ========================================
                FINAL MESSAGE
            ======================================== */}

            <div className="final-message">

              <p>
                May your smile always be as beautiful
                as it is today. ✨
              </p>

              <p>
                Wishing you a year full of happiness,
                success, laughter and beautiful memories.
              </p>

              <strong>
                Stay happy. Stay amazing. 💗
              </strong>

            </div>


            {/* No signature here as requested */}


            {/* ========================================
                BUTTONS
            ======================================== */}

            <div className="final-buttons">

              <button
                className="final-back"
                onClick={() => changePage(4)}
              >
                ← Back
              </button>

              <button
                className="replay-button"
                onClick={() => changePage(1)}
              >
                Replay Surprise
                <span>↻</span>
              </button>

            </div>

          </div>

        </section>
      )}

    </div>
  );
}

export default App;