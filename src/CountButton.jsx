import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
export default function CountButton({ setCount, type, locked }) {
  const handleMinus = () => {
    {
      setCount((previousValue) => {
        if (previousValue > 0) {
          return previousValue - 1;
        } else {
          return previousValue;
        }
      });
    }
  };

  const handlePlus = () => {
    setCount((previousValue) => {
      if (previousValue > 4) {
        return previousValue;
      } else {
        return previousValue + 1;
      }
    });
  };

  const handleClick = (event) => {
    type === "plus" && handlePlus();
    type === "minus" && handleMinus();
    event.currentTarget.blur();
  };

  return (
    <button onClick={handleClick} className="count-btn" disabled={locked}>
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
    </button>
  );
}
