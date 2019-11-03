import React, { useState } from "react";

const noop = () => {};

export default function Counter({ defaultValue = 0, onChange = noop }) {
  const [count, setCount] = useState(defaultValue);

  const decrease = () => {
    const nextCount = count - 1;
    setCount(nextCount);
    onChange && onChange(nextCount);
  };
  const increase = () => {
    const nextCount = count + 1;
    setCount(nextCount);
    onChange && onChange(nextCount);
  };

  return (
    <div className="counter">
      <button type="button" className="counter__minus" onClick={decrease}>
        -
      </button>
      <em className="counter__value" data-testid="count">
        {count}
      </em>
      <button type="button" className="counter__plus" onClick={increase}>
        +
      </button>
    </div>
  );
}
