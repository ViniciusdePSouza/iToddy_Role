import { ReactNode, createContext, useState } from "react";

interface ProducerContextType {
    tag: string | null | undefined
    saveCurrentTagInContext: (tag: string) => void
}

interface TagProviderProps {
    children: ReactNode
}

export const TagContext = createContext({} as ProducerContextType)

export function TagProvider({children}: TagProviderProps) {
    const [tag, setTag] = useState<string | null | undefined>()

    async function saveCurrentTagInContext(tag: string) {
        setTag(tag)
    }

    return (
        <TagContext.Provider value={{ tag, saveCurrentTagInContext }}>
            {children}
        </TagContext.Provider>
    )
}