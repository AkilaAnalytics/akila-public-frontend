import { createContext, useContext, useState } from "react";

interface AppContextType {
  isChatOpen: boolean;
  setIsChatOpen: (isOpen: boolean) => void;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
  showCalendly: boolean;
  setShowCalendly: (isOpen: boolean) => void;
  toggleCalendly: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // chat
  const [isChatOpen, setIsChatOpen] = useState(false);
  const openChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);
  const toggleChat = () => setIsChatOpen(!isChatOpen);

  // calendly
  const [showCalendly, setShowCalendly] = useState(false);
  const toggleCalendly = () => setShowCalendly(!showCalendly);

  return (
    <AppContext.Provider
      value={{
        isChatOpen,
        setIsChatOpen,
        openChat,
        closeChat,
        toggleChat,
        showCalendly,
        setShowCalendly,
        toggleCalendly,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}
