"use client"

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { CodeBlock, atomOneDark, atomOneLight } from 'react-code-blocks';

const Code = ({language, text}: {language: string, text: string}) => {
  const {theme} = useTheme();
  const [codeTheme, setCodeTheme] = useState(theme);

  useEffect(() => {
    let newTheme = theme;

    if (newTheme === "system") {
      const darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
      newTheme = darkThemeQuery.matches ? "dark" : "light";
    }

    setCodeTheme(newTheme);
    console.log(newTheme);
  }, [theme])

  return (
    <div>
      <CodeBlock
        theme={codeTheme === "dark" ? atomOneDark : atomOneLight}
        language={language}
        text={text}
      />
    </div>
  )
}

export default Code