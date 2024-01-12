import React from "react";

// Language Provider
import { useLanguage } from "../../../../../../providers/LanguageProvider";

// Text
import text from "../../../../../../text/books.json";

// Components
import PageWrapper from "../wrappers/PageWrapper";
import Title from "../Title";
import HowMany from "../HowMany";
import Books from "../Books";

// Mock data
import { readingNow } from "../../../../../../localdatabase/books";

const ReadingNow = () => {
  const { language } = useLanguage();

  return (
    <PageWrapper>
      <Title title={text.readingNow[language]} />
      <HowMany books={readingNow} />
      <Books books={readingNow} />
    </PageWrapper>
  );
};

export default ReadingNow;
