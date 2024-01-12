import React, { useEffect, useState, useRef } from "react";
import { useSafari } from "../providers/SafariProvider";

// Lang
import text from "../../../../text/safari.json";
import { useLanguage } from "../../../../providers/LanguageProvider";
import { colors } from "../../../../colors";

const SearchBar = ({}) => {
  const { changePage, history, historyIndex, checkMatchingRoutes } =
    useSafari();
  const { language } = useLanguage();

  const [focus, setFocus] = useState(false);
  const inputRef = useRef(null);

  const [suggestions, setSuggestions] = useState([]);

  function submitSearch() {
    changePage(inputRef.current.value);
    setSuggestions([]);
  }

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  // Make the search when Enter is Clicked
  useEffect(() => {
    function handleEnterClick(e) {
      if (e.key === "Enter") {
        submitSearch();
        inputRef.current.blur();
      }
    }

    if (focus) document.addEventListener("keydown", handleEnterClick);
    return () => {
      document.removeEventListener("keydown", handleEnterClick);
    };
  }, [focus]);

  // set the searchbar text to current position in history
  // each time the history index changes
  useEffect(() => {
    inputRef.current.value = history[historyIndex];
  }, [historyIndex]);

  // set the searchbar text to current position in history
  useEffect(() => {
    inputRef.current.value = history[historyIndex];
  }, []);

  function handleChange(e) {
    setSuggestions(checkMatchingRoutes(e.target.value));
    inputRef.current.value = e.target.value;
  }

  function updateSearchBySuggestion(suggestion) {
    inputRef.current.value = suggestion;
    setSuggestions(checkMatchingRoutes(suggestion));
  }

  return (
    <div className="">
      <input
        style={{ backgroundColor: colors.safari.searchBar.bg }}
        className="w-80 rounded-md placeholder:text-sm h-7 px-2 placeholder:text-center text-white text-sm"
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
        onChange={handleChange}
        placeholder={`🔍  ${text.searchBar.placeholder[language]}`}
      />
      <ProgressBar />
      <Suggestions
        suggestions={suggestions}
        updateSearch={updateSearchBySuggestion}
      />
    </div>
  );
};

const ProgressBar = () => {
  const { loading } = useSafari();
  const [progress, setProgress] = useState(0);

  let progressStyle = {
    width: `${progress < 100 ? progress : 100}%`,
    backgroundColor: colors.safari.searchBar.outline,
  };

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        if (progress < 100) {
          setProgress((prev) => prev + 1.5);
        }
      }, 100);

      return () => {
        setProgress(0);
        clearInterval(interval);
      };
    }
  }, [loading]);

  return (
    loading && (
      <div className="absolute h-1 rounded-lg w-full">
        <div style={progressStyle} className="h-full rounded-lg"></div>
      </div>
    )
  );
};

const Suggestions = ({ suggestions, updateSearch }) => {
  let suggestionsBg = {
    backgroundColor: colors.safari.suggestions.bg,
  };

  function handleSuggestionClick(e) {
    updateSearch(e.target.innerHTML);
  }

  return (
    suggestions.length > 0 && (
      <ul
        style={suggestionsBg}
        className="absolute w-80 text-s px-2 py-1 rounded-lg"
      >
        {suggestions.slice(0, 8).map((suggestion, index) => (
          <li
            onClick={handleSuggestionClick}
            key={index}
            className="text-white cursor-pointer"
          >
            {suggestion}
          </li>
        ))}
      </ul>
    )
  );
};

export default SearchBar;
