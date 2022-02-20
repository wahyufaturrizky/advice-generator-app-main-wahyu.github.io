import CardQuote from "components/CardQuote";
import React, { useCallback, useEffect, useState } from "react";
import "./App.css";

const URL = "https://api.adviceslip.com/advice";

export interface StateQuoteInterface {
  advice: string;
  id: number;
}

function App() {
  const [stateQuote, setStateQuote] = useState<StateQuoteInterface>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchDataAdvice = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch(URL);
      const response = await res.json();
      setStateQuote(response.slip);
    } catch (error) {
      window.alert(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDataAdvice();
  }, [fetchDataAdvice]);
  return (
    <main className="container-layout">
      <CardQuote
        onClick={fetchDataAdvice}
        isLoading={isLoading}
        stateQuote={stateQuote}
      />
      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a
            rel="noreferrer"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/wahyu-fatur-rizky"
            target="_blank"
          >
            Wahyu Fatur Rizki
          </a>
          .
        </div>
      </footer>
    </main>
  );
}

export default App;
