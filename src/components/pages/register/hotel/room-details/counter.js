import { useEffect, useState } from "react";

const Counter = ({ defaultValue, handleOnChange, name }) => {
  const [count, setCount] = useState(defaultValue ? defaultValue : 0);

  useEffect(() => {
    handleOnChange({
      target: {
        name,
        value: count,
      },
    });
  }, [count]);
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4 border p-2 text-center rounded-md">
        <button
          className={`w-full ${count === 0 && "cursor-not-allowed"}`}
          onClick={() => count > 0 && setCount(count - 1)}
          disabled={count === 0}
        >
          -
        </button>
        <p className="font-medium">{count}</p>
        <button className="w-full" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
