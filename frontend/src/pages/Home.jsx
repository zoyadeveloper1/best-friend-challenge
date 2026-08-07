import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Animated Background */}
      <div className="bg-glow glow-one"></div>
      <div className="bg-glow glow-two"></div>
      <div className="bg-glow glow-three"></div>

      {/* Floating Hearts */}
      <div className="floating-heart heart-one">💖</div>
      <div className="floating-heart heart-two">💜</div>
      <div className="floating-heart heart-three">💗</div>
      <div className="floating-heart heart-four">💙</div>

      {/* Navbar */}
      <nav className="home-navbar">

        <div className="brand">
          💖 <span>BFC Quiz</span>
        </div>

        <div className="player-badge">
          👥 2 Players&nbsp; | &nbsp;1 Goal
        </div>

      </nav>


      {/* Main Content */}
      <main className="home-content">

        <div className="hero-card">

          {/* Trophy */}
          <div className="trophy">
            🏆
          </div>

          <h1>
            Best Friend
            <br />
            <span>Challenge</span>
          </h1>

          <p className="hero-text">
            How well does your best friend
            <strong> really know you?</strong> 💕
          </p>


          {/* Features */}
          <div className="feature-row">

            <div className="feature">
              <div className="feature-icon">👥</div>
              <span>Create a Room</span>
            </div>

            <div className="feature">
              <div className="feature-icon">📝</div>
              <span>Add Questions</span>
            </div>

            <div className="feature">
              <div className="feature-icon">👑</div>
              <span>Challenge Friend</span>
            </div>

          </div>


          {/* Buttons */}

          <div className="home-actions">

            <Link
              to="/create"
              className="action-card create-room"
            >

              <div className="action-icon">
                🏠
              </div>

              <div className="action-content">
                <h3>Create Room</h3>
                <p>Start a new quiz room</p>
              </div>

              <div className="arrow">
                →
              </div>

            </Link>


            <Link
              to="/createquiz"
              className="action-card create-quiz"
            >

              <div className="action-icon">
                📝
              </div>

              <div className="action-content">
                <h3>Create Quiz</h3>
                <p>Add fun questions</p>
              </div>

              <div className="arrow">
                →
              </div>

            </Link>


            <Link
              to="/join"
              className="action-card join-quiz"
            >

              <div className="action-icon">
                👥
              </div>

              <div className="action-content">
                <h3>Join Quiz</h3>
                <p>Enter room code & play</p>
              </div>

              <div className="arrow">
                →
              </div>

            </Link>

          </div>


          {/* Bottom Text */}

          <div className="challenge-text">
            ✨ Let the challenge begin! 🚀
          </div>

        </div>

      </main>


      {/* Decorative Quiz Card */}

      <div className="floating-quiz-card">
        <div className="quiz-title">
          QUIZ
        </div>

        <div>☑ Question 1</div>
        <div>☑ Question 2</div>
        <div>☑ Question 3</div>
      </div>


      {/* Game Controller */}

      <div className="game-controller">
        🎮
      </div>


    </div>
  );
}

export default Home;