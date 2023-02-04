import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    topArtistsList: [],
    topAlbums:[],
    topTracks:[],
    loading: false,
    error: "",
    hasMore: true,
    page : 1

}

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

export const getTopArtists = createAsyncThunk(
    'topArtists/getTopArtists', async ({page}) => {

        const res = await axios(`${API_URL}?method=chart.gettopartists&api_key=${API_KEY}&format=json&limit=10&page=${page}`);
        // console.log(res)
        return res;

    }
)

export const getTopAlbums = createAsyncThunk(
    'topAlbums/getTopAlbums', async ({id}) => {

        const res = await axios(`${API_URL}?method=artist.gettopalbums&mbid=${id}&api_key=${API_KEY}&format=json&limit=10`);
        // console.log(res.data)
        return res;

    }
)

export const getTopTracks = createAsyncThunk(
    'topTracks/getTopTracks', async ({id}) => {

        const res = await axios(`${API_URL}?method=artist.gettoptracks&mbid=${id}&api_key=${API_KEY}&format=json&limit=10`);
        console.log(res.data)
        return res;

    }
)

export const topArtistSlice = createSlice({
    name: 'topArtists',
    initialState,
    reducers: {

    },
    extraReducers({ addCase }) {
        addCase(getTopArtists.pending, (state) => {
            state.loading = true;
        });
        addCase(getTopArtists.fulfilled, (state, action) => {
            console.log("before func", state.topArtistsList);
            if(action.payload.data.artists.artist.length < 10 ) {
                state.topArtistsList = [...state.topArtistsList,...action.payload.data.artists.artist]
            }else{
                state.topArtistsList = action.payload.data.artists.artist;
            }           
            console.log("after func", state.topArtistsList);
            if(action.payload.data.artists.artist.length === 0 || action.payload.data.artists.artist.length < 10){
                state.hasMore = false
            }
            state.page = state.page + 1
            state.loading = false;
        });
        addCase(getTopArtists.rejected, (state) => {
            state.loading = false
            state.error = "error";
        });
        addCase(getTopAlbums.pending, (state) => {
                state.loading = true;
            });
        addCase(getTopAlbums.fulfilled, (state, action) => {
            // console.log(action.payload.data)
            state.topAlbums = action.payload.data.topalbums.album;
            state.loading = false;
        });
        addCase(getTopAlbums.rejected, (state) => {
            state.loading = false
            state.error = "error";
        });
        addCase(getTopTracks.pending, (state) => {
                state.loading = true;
            });
        addCase(getTopTracks.fulfilled, (state, action) => {
            // console.log(action.payload.data.toptracks.track)
            state.topTracks = action.payload.data.toptracks.track;
            state.loading = false;
        });
        addCase(getTopTracks.rejected, (state) => {
            state.loading = false
            state.error = "error";
        });
    }
})


// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = topArtistSlice.actions

export default topArtistSlice.reducer