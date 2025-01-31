import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Adivina El Número Subnormal!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again">Otra Vez!</button>
        <div className="number">?</div>
      </header>
      <main>
        <section className="left">
          <input type="number" className="guess" />
          <button className="btn check">Check!</button>
        </section>
        <section className="right">
          <p className="message">Dale caña...</p>
          <p className="label-score">
            💯 Score: <span className="score">20</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">0</span>
          </p>
        </section>
      </main>
      <script src="script.js"></script>
    </>
  );
}

export default App;
