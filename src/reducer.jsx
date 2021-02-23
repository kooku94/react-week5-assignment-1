const initialState = {
  regions: [],
  categories: [],
};

export default function reducer(state = initialState, action = { type: '' }) {
  if (action.type === 'setRegions') {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  }

  return state;
}
