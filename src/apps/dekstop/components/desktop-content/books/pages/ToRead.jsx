import React from "react";

// Hooks
import { useLanguage } from "../../../../../../providers/LanguageProvider";

// Text
import text from "../../../../../../text/books.json";

// Components
import Title from "../Title";
import PageWrapper from "../wrappers/PageWrapper";
import HowMany from "../HowMany";
import Books from "../Books";

// Mock Data
import { toRead } from "../../../../../../localdatabase/books";

const ToRead = () => {
  const { language } = useLanguage();

  return (
    <PageWrapper>
      <Title title={text.toRead[language]} />
      <HowMany books={toRead} />
      <Books books={toRead} />
    </PageWrapper>
  );
};

export default ToRead;
