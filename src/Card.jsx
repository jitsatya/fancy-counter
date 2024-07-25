import { useEffect, useState } from "react";
import Counter from "./Count";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Space") {
        setCount((prev) => {
          if (prev > 4) {
            return prev;
          } else {
            return prev + 1;
          }
        });
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);
  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Counter count={count} />
      <ResetButton setCount={setCount} />
      {/* Solving prop drilling using children pattern */}
      <ButtonContainer>
        <CountButton setCount={setCount} type="minus" locked={locked} />
        <CountButton setCount={setCount} type="plus" locked={locked} />
      </ButtonContainer>
    </div>
  );
}
