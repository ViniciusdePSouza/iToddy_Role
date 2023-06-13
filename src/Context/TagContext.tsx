import { ReactNode, createContext, useEffect, useState } from "react";

interface ProducerContextType {
  tag: string | null | undefined;
  saveCurrentTagInContext: (tag: string) => void;
  activeTags: string[];
  handleStoreTitle: (variant: string, title: string) => void;
}

interface TagProviderProps {
  children: ReactNode;
}

export const TagContext = createContext({} as ProducerContextType);

export function TagProvider({ children }: TagProviderProps) {
  const [tag, setTag] = useState<string | null | undefined>();
  const [activeTags, setActiveTags] = useState<string[]>([]);

  function handleStoreTitle(variant: string, title: string) {
    if (variant === 'ACTIVE') {
        setActiveTags((prevState) => [...prevState, title]);
    }
  }

  async function saveCurrentTagInContext(tag: string) {
    setTag(tag);
  }

  return (
    <TagContext.Provider
      value={{ tag, saveCurrentTagInContext, activeTags, handleStoreTitle }}
    >
      {children}
    </TagContext.Provider>
  );
}
