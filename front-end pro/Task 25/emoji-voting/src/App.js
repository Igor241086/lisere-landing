import React, { Component } from "react";

class EmojiVoting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: JSON.parse(localStorage.getItem("emojiVotes")) || {},
      emojis: ["😀", "😊", "😎", "🤩", "😍"],
      winner: null,
    };
  }

  vote = (emoji) => {
    this.setState((prevState) => {
      const votes = { ...prevState.votes, [emoji]: (prevState.votes[emoji] || 0) + 1 };
      localStorage.setItem("emojiVotes", JSON.stringify(votes));
      return { votes };
    });
  };

  showResults = () => {
    const { votes } = this.state;
    if (Object.keys(votes).length === 0) return;
    const winner = Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b));
    this.setState({ winner });
  };

  clearResults = () => {
    localStorage.removeItem("emojiVotes");
    this.setState({ votes: {}, winner: null });
  };

  render() {
    const { emojis, votes, winner } = this.state;
    return (
      <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
        <h2>Голосування за найкращий смайлик</h2>
        <div>
          {emojis.map((emoji) => (
            <button key={emoji} onClick={() => this.vote(emoji)} style={{ fontSize: "2rem", margin: "10px" }}>
              {emoji} {votes[emoji] || 0}
            </button>
          ))}
        </div>
        <button onClick={this.showResults} style={{ padding: "10px 20px", margin: "10px" }}>Показати результати</button>
        <button onClick={this.clearResults} style={{ padding: "10px 20px", margin: "10px", backgroundColor: "red", color: "white" }}>Очистити результати</button>
        {winner && (
          <div>
            <h3>Переможець:</h3>
            <p style={{ fontSize: "3rem" }}>{winner}</p>
          </div>
        )}
      </div>
    );
  }
}

export default EmojiVoting;