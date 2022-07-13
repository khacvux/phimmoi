import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from "./reducers"


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const Store = createStore(persistedReducer)

export const persistor = persistStore(Store)

export default Store