import React from "react";

export default function HomePage() {
  const [isFetching, setIsFetching] = React.useState(true);
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.text())
      .then((data) => {
        setName(data || "ERROR NO DATA RETURNED");
        setIsFetching(false);
      });
  }, []);

  if (isFetching) return <h1>Loading...</h1>;

  return <h1>Hello, {name}!</h1>;
}
