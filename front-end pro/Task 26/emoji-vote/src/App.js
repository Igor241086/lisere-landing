import { useState } from "react";

const emojis = [
  { id: 1, symbol: "😀", votes: 0 },
  { id: 2, symbol: "😊", votes: 0 },
  { id: 3, symbol: "😎", votes: 0 },
  { id: 4, symbol: "🤩", votes: 0 },
  { id: 5, symbol: "😍", votes: 0 },
];

export default function EmojiVoting() {
  const [emojiList, setEmojiList] = useState(emojis);
  const [showResults, setShowResults] = useState(false);

  const handleVote = (id) => {
    setEmojiList((prev) =>
      prev.map((emoji) =>
        emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
      )
    );
  };

  const handleReset = () => {
    setEmojiList(emojis.map((emoji) => ({ ...emoji, votes: 0 })));
    setShowResults(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Голосування за найкращий смайлик</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        {emojiList.map(({ id, symbol, votes }) => (
          <button
            key={id}
            onClick={() => handleVote(id)}
            style={{ fontSize: "40px", padding: "15px", backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "10px", cursor: "pointer" }}
          >
            {symbol} <span style={{ display: "block", fontSize: "14px", marginTop: "5px" }}>{votes}</span>
          </button>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleReset}
          style={{ padding: "10px 20px", fontSize: "16px", fontWeight: "bold", cursor: "pointer", backgroundColor: "red", color: "white", border: "none", borderRadius: "5px", marginRight: "10px" }}
        >
          Скинути голоси
        </button>
        <button
          onClick={() => setShowResults(true)}
          style={{ padding: "10px 20px", fontSize: "16px", fontWeight: "bold", cursor: "pointer", backgroundColor: "green", color: "white", border: "none", borderRadius: "5px" }}
        >
          Показати результати
        </button>
      </div>
      {showResults && (
        <div>
          <h2 style={{ fontSize: "20px", fontWeight: "600", marginTop: "20px" }}>Результати:</h2>
          <p style={{ fontSize: "18px", marginTop: "10px" }}>
            Лідер: {emojiList.reduce((max, emoji) => (emoji.votes > max.votes ? emoji : max), emojiList[0]).symbol}
          </p>
        </div>
      )}
    </div>
  );
}