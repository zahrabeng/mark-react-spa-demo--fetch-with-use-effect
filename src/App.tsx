import { useEffect, useState } from "react";

interface Quote {
  quote:string;
}

function App() {
  const [quote, setQuote] = useState<Quote |string>();

  // useEffect(() => {
  //   const fetchQuote = async () => {
  //     const response = await fetch(
  //       "https://api.kanye.rest"
  //     );
  //     const jsonBody: Quote = await response.json();
  //     setQuote(jsonBody.quote);
  //   };

  //   fetchQuote();
  // }, []);

  useEffect(() => {
    fetch("https://api.kanye.rest")
      .then(response => response.json())
      .then((jsonBody: Quote) => setQuote(jsonBody.quote));
  }, [])

  return (
    <>
      <h1>Kanye quote app</h1>
      {console.log(quote)}
      {quote && (
        // This is a conditional rendering strategy
        //  using 'short-circuiting': if the left-hand
        //  side of an && is false, then JavaScript
        //  doesn't bother to evaluate the right-hand
        //  side (since the overall expression is false
        //  regardless)
        //
        // Exploiting that feature to conditional render JSX!
        <>
          <p>
            <b>{quote}</b>
          </p>
        </>
      )}
    </>
  );
}

export default App;
