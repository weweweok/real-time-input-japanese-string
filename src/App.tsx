import React, { useState, ChangeEvent, CompositionEvent } from "react";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isComposing, setIsComposing] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCompositionStart = (e: CompositionEvent<HTMLInputElement>) => {
    console.log("isComposing", isComposing);
    setIsComposing(true);
  };

  const handleCompositionUpdate = (e: CompositionEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleCompositionEnd = (e: CompositionEvent<HTMLInputElement>) => {
    console.log("isComposing", isComposing);
    setIsComposing(false);
    setInputValue(e.currentTarget.value); // 入力確定時に値を更新
  };

  return (
    <div>
      <h1>日本語入力フォーム</h1>
      <p>入力内容: {inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onCompositionStart={handleCompositionStart}
        onCompositionUpdate={handleCompositionUpdate}
        onCompositionEnd={handleCompositionEnd}
      />
    </div>
  );
};

export default App;
