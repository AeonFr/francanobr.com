"use client";

import React, { useState } from "react";

export default function Counter({ withInput = false, initialValue = 0 }) {
  const [count, setCount] = useState<number>(initialValue);

  return (
    <div>
      Counter was clicked {count} time{count !== 1 ? "s" : null}
      <br />
      <button onClick={() => setCount(count + 1)}>Increment 1</button>
      {withInput ? (
        <>
          <br />
          <input
            type="number"
            value={count}
            onChange={(event) => setCount(Number(event.target.value))}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
