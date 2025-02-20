import { configureStore } from '@reduxjs/toolkit'
import { githubApi } from './features/github-api/github.api'
import { githubReducer } from './features/github-api/githubSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      [githubApi.reducerPath]: githubApi.reducer,
      github: githubReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(githubApi.middleware),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
