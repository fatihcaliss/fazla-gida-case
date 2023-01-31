import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    topArtistsList: [],
    topAlbums:[],
    topTracks:[],
    loading: false,
    error: "",
}

const API_KEY = process.env.API_KEY

export const getTopArtists = createAsyncThunk(
    'topArtists/getTopArtists', async () => {

        const res = await axios(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${"e8e5c2622f97316a948133b80643a11f"}&format=json&limit=20`);
        // console.log(res)
        return res;

    }
)

export const getTopAlbums = createAsyncThunk(
    'topAlbums/getTopAlbums', async ({id}) => {

        const res = await axios(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid=${id}&api_key=${"e8e5c2622f97316a948133b80643a11f"}&format=json&limit=10`);
        // console.log(res.data)
        return res;

    }
)

export const getTopTracks = createAsyncThunk(
    'topTracks/getTopTracks', async ({id}) => {

        const res = await axios(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=${id}&api_key=${"e8e5c2622f97316a948133b80643a11f"}&format=json&limit=10`);
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
            // console.log(action.payload)
            state.topArtistsList = action.payload.data.artists.artist;
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
        })
    }
})


// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = topArtistSlice.actions

export default topArtistSlice.reducer