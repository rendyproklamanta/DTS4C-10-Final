import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import ArticleService from "../services/article.service";

const article = JSON.parse(localStorage.getItem("article"));

export const news = createAsyncThunk(
   "news/get",
   async (thunkAPI) => {
      try {
         const republika = await ArticleService.getNewsRepublika();
         const okezone = await ArticleService.getNewsRepublika();
         const cnn = await ArticleService.getNewsCnn();
         const cnbc = await ArticleService.getNewsCnbc();
         const suara = await ArticleService.getNewsSuara();
         return { article: [...republika, ...okezone, ...cnn, ...cnbc, ...suara] };
      } catch (error) {
         const message =
            (error.response &&
               error.response.data &&
               error.response.data.message) ||
            error.message ||
            error.toString();
         thunkAPI.dispatch(setMessage(message));
         return thunkAPI.rejectWithValue();
      }
   }
);

const initialState = article ? { article } : { article: null };

const articleSlice = createSlice({
   name: "article",
   initialState,
   extraReducers: {
      [news.fulfilled]: (state, action) => {
         state.article = action.payload.article;
      },
      [news.rejected]: (state, action) => {
         state.article = null;
      },
   },
});

const { reducer } = articleSlice;
export default reducer;
