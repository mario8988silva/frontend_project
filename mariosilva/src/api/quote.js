
/* api-ninja quotes torna-se paga a partir de x semanas... */
/*
export const getQuote = async () => {
  const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
    method: "GET",
    headers: {
      "X-Api-Key": "HahELkESlhpb+54t9FM0kQ==qR4tN7PHWMClRuFv",
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error(`Fetch error: ${response.statusText}`);
  }

  const data = await response.json();
  return data[0];
};
*/

export const getQuote = async () => {
  const response = await fetch("https://api.quotable.io/random");

  if (!response.ok) {
    throw new Error(`Fetch error: ${response.statusText}`);
  }

  const data = await response.json();
  return {
    quote: data.content,
    author: data.author,
  };
};

