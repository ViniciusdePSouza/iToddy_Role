import { ReactNode, createContext, useState } from "react";
import { ProducerType } from "../@types/producer";

interface ProducerContextType {
    producer: ProducerType | null | undefined,
    saveCurrentProducerInContext: (producer: ProducerType) => void
}

interface ProducerProviderProps {
    children: ReactNode
}

export const ProducerContext = createContext({} as ProducerContextType)

export function ProducerProvider({children}: ProducerProviderProps) {
    const [producer, setProducer] = useState<ProducerType | null | undefined>()

    async function saveCurrentProducerInContext(producer: ProducerType) {
        setProducer(producer)
    }

    return (
        <ProducerContext.Provider value={{ producer, saveCurrentProducerInContext }}>
            {children}
        </ProducerContext.Provider>
    )
}