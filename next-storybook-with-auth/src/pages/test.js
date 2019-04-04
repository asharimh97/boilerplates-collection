import React, { useState } from "react";

const Test = () => {
  const [isActive, setActive] = useState(false);

  return (
    <div>
      Ini halaman test
      <p>{isActive ? "aktif" : "ngga aktif"}</p>
      <button onClick={() => setActive(!isActive)}>toggle active</button>
    </div>
  );
};

export default Test;
