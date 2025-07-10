import { createContext, useContext, useState } from "react";

interface AppContextType {
  isChatOpen: boolean;
  setIsChatOpen: (isOpen: boolean) => void;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);
  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (
    <AppContext.Provider
      value={{
        isChatOpen,
        setIsChatOpen,
        openChat,
        closeChat,
        toggleChat,
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
