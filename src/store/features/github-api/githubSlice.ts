import { LS_FAV_KEY } from '@/src/lib/constants'
import { getFromLocalStorage } from '@/src/lib/utils'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface GithubState {
  favourites: string[]
}

const initialState: GithubState = {
  favourites: getFromLocalStorage(LS_FAV_KEY)
    ? JSON.parse(getFromLocalStorage(LS_FAV_KEY) || '[]')
    : [],
}

export const githubSlice = createSlice({
  name: 'github-api',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload)
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter(
        (fav) => fav !== action.payload
      )
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
    },
  },
})

export const { addFavorite, removeFavorite } = githubSlice.actions

export const githubReducer = githubSlice.reducer
