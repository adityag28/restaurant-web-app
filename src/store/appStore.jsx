import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { combineReducers } from 'redux';
import menuReducer from './menuSlice';
import customerReducer from './customerSlice';
import orderReducer from './orderSlice'
import userReducer from './userSlice'
import qrReducer from './qrSlice'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['menu', 'customer', 'order', 'user'],
};

const rootReducer = combineReducers({
    menu: menuReducer,
    customer: customerReducer,
    order: orderReducer,
    user: userReducer,
    qr: qrReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const appStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(appStore);
