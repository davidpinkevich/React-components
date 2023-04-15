import { configureStore } from '@reduxjs/toolkit';

import home from '../components/Home/homeSlice';
import { apiSlice } from '../components/Home/apiSlice/apiSlice';

const store = configureStore({
  reducer: { home, [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
