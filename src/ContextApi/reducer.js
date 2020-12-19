export const initialState = {
  user: null,
  playlists: [],
  playlist: {},
  nowPlaying: null,
  item: null,
  token: null
};

const reducer = (state, action) => {
  console.log(action.nowPlaying)

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      };
    case 'SET_PLAYLIST':
      return {
        ...state,
        playlist: action.playlist
      };
    case 'SET_NOW_PLAYING':
      return {
        ...state,
        nowPlaying: action.nowPlaying
      }
    default:
      return state;
  }
}

export default reducer;