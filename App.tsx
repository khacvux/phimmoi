import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { Provider as ReduxProvider } from "react-redux";
import Store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <ReduxProvider store={Store}>
                <PersistGate loading={null} persistor={persistor}>
                    <SafeAreaProvider>
                        <Navigation colorScheme={colorScheme} />
                        <StatusBar />
                    </SafeAreaProvider>
                </PersistGate>
            </ReduxProvider>
        );
    }
}
