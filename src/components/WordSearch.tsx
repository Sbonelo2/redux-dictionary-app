import React, { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { fetchWordDefinition } from "../Features/Dictionary/dictionarySlice";

export const WordSearch: React.FC = () => {
  const [word, setWord] = useState("");
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (word.trim()) {
      dispatch(fetchWordDefinition(word.trim()));
    }
  };

  return (
    <div className="word-search">
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
