import { ReactNode, createContext, useState } from "react";

import { TagButtonVariantColor } from "../components/TagButton/styles";

interface ProducerContextType {
  tag: string | null | undefined;
  saveCurrentTagInContext: (tag: string) => void;
  activeTags: string[];
  handleStoreTitle: (variant: TagButtonVariantColor, title: string) => void;
}

interface TagProviderProps {
  children: ReactNode;
}

export const TagContext = createContext({} as ProducerContextType);

export function TagProvider({ children }: TagProviderProps) {
  const [tag, setTag] = useState<string | null | undefined>();
  const [activeTags, setActiveTags] = useState<string[]>([]);

  function handleStoreTitle(variant: TagButtonVariantColor, title: string) {
    if (variant === "ACTIVE") {
      if (!activeTags.includes(title)) {
        setActiveTags((prevState) => [...prevState, title]);
      }
    } else if (variant === "NOTACTIVE") {
        setActiveTags((prevState) => prevState.filter(tag => tag !== title));
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
