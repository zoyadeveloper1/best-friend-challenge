import { useState } from "react";
import API from "../api/axios";

function CreateRoom() {
  const [roomCode, setRoomCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const createRoom = async () => {
    setLoading(true);
    setError("");
    try {
      const randomCode = Math.random()
        .toString(36)
        .substring(2, 8)
        .toUpperCase();

      const response = await API.post("/rooms/", {
        room_code: randomCode,
      });

      setRoomCode(response.data.room_code);
      localStorage.setItem("roomId", response.data.id);
      console.log("Room ID:", response.data.id);
    } catch (err) {
      console.log(err);
      setError("Failed to create room. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyRoomCode = () => {
    navigator.clipboard.writeText(roomCode);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInCode {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-container {
          animation: slideUp 0.6s ease-out;
          background: white;
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          padding: 48px 40px;
          max-width: 500px;
          width: 100%;
        }

        .card-title {
          font-size: 28px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 12px 0;
          letter-spacing: -0.5px;
        }

        .card-subtitle {
          font-size: 14px;
          color: #666;
          margin: 0 0 32px 0;
          line-height: 1.5;
        }

        .btn-create {
          width: 100%;
          padding: 14px 24px;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
        }

        .btn-create:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        .btn-create:active:not(:disabled) {
          transform: translateY(0);
        }

        .btn-create:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .room-code-section {
          animation: slideInCode 0.5s ease-out 0.3s both;
          margin-top: 32px;
          padding-top: 32px;
          border-top: 1px solid #e5e5e5;
        }

        .code-label {
          font-size: 12px;
          font-weight: 600;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin: 0 0 12px 0;
        }

        .code-display {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 24px;
          border-radius: 12px;
          text-align: center;
          margin: 0 0 16px 0;
          animation: scaleIn 0.5s ease-out 0.4s both;
        }

        .code-text {
          font-size: 32px;
          font-weight: 700;
          color: white;
          letter-spacing: 2px;
          font-family: monospace;
          margin: 0;
        }

        .btn-copy {
          width: 100%;
          padding: 12px 20px;
          font-size: 14px;
          font-weight: 600;
          border: 2px solid #667eea;
          border-radius: 10px;
          background: white;
          color: #667eea;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .btn-copy:hover {
          background: #667eea;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.2);
        }

        .btn-copy:active {
          transform: translateY(0);
        }

        .copy-feedback {
          padding: 8px 12px;
          background: #e8f5e9;
          color: #2e7d32;
          border-radius: 8px;
          text-align: center;
          font-size: 13px;
          font-weight: 500;
          animation: slideUp 0.3s ease-out;
        }

        .error-message {
          padding: 12px 16px;
          background: #ffebee;
          color: #c62828;
          border-radius: 8px;
          font-size: 14px;
          margin-top: 16px;
          animation: slideUp 0.3s ease-out;
        }

        .loading-skeleton {
          height: 24px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
          border-radius: 4px;
        }

        @keyframes loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @media (max-width: 600px) {
          .card-container {
            padding: 32px 24px;
          }

          .card-title {
            font-size: 24px;
          }

          .code-text {
            font-size: 24px;
            letter-spacing: 1px;
          }
        }
      `}</style>

      <div className="card-container">
        <h2 className="card-title">🎮 Create Quiz Room</h2>
        <p className="card-subtitle">
          Start a new multiplayer quiz session and share the code with friends
        </p>

        <button
          className="btn-create"
          onClick={createRoom}
          disabled={loading}
        >
          {loading && <div className="spinner"></div>}
          <span>{loading ? "Creating Room..." : "Create Room"}</span>
        </button>

        {error && <div className="error-message">{error}</div>}

        {roomCode && (
          <div className="room-code-section">
            <p className="code-label">Your Room Code</p>

            <div className="code-display">
              <p className="code-text">{roomCode}</p>
            </div>

            <button
              className="btn-copy"
              onClick={copyRoomCode}
              title="Copy room code to clipboard"
            >
              <span>{copied ? "✓ Copied!" : "📋 Copy Code"}</span>
            </button>

            {copied && (
              <div className="copy-feedback">
                Room code copied to clipboard!
              </div>
            )}

            <div
              style={{
                marginTop: "20px",
                padding: "14px",
                background: "#f5f5f5",
                borderRadius: "8px",
                fontSize: "13px",
                color: "#666",
                textAlign: "center",
              }}
            >
              Share this code with others to join your quiz
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateRoom;