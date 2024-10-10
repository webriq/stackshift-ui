import { createContext, ReactNode, useContext } from "react";

// Define the type for the components object
interface Components {
  [key: string]: React.ComponentType<any>;
}

// Create a context for components
const ComponentContext = createContext<Components>({});

// Create a provider that allows passing custom components
interface ComponentProviderProps {
  components: Components;
  children: ReactNode;
}

export const StackShiftUIProvider: React.FC<ComponentProviderProps> = ({
  components,
  children,
}) => {
  return <ComponentContext.Provider value={components}>{children}</ComponentContext.Provider>;
};

// Hook to use the components
export const useStackShiftUIComponents = () => useContext(ComponentContext);
