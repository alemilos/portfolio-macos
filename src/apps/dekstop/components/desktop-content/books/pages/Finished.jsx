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
import { finished } from "../../../../../../localdatabase/books";

const Finished = () => {
  const { language } = useLanguage();
  return (
    <PageWrapper>
      <Title title={text.finished[language]} />
      <HowMany books={finished} />
      <Books books={finished} />
    </PageWrapper>
  );
};

export default Finished;
