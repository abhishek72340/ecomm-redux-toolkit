import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: null,
  loading: false,
  isCart: [],
  input: "",
  quantity: {},
};

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const result = await res.json();
    return result.products;
  } catch (err) {
    throw new Error(err);
  }
});
const fetchProductSlice = createSlice({
  name: "fetchProduct",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.data.find((item) => item.id === action.payload);
      if (product) {
        state.isCart.push(product);
        if (!state.quantity[product.id]) {
          state.quantity[product.id] = 1;
        }
      }
    },
    removeFromCart: (state, action) => {
      state.isCart = state.isCart.filter((item) => item.id !== action.payload);
      delete state.quantity[action.payload];
    },
    setInput: (state, action) => {
      state.input = action.payload;
    },
    increaseQuantity: (state, action) => {
      if (state.quantity[action.payload]) {
        state.quantity[action.payload] += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      if (
        state.quantity[action.payload] &&
        state.quantity[action.payload] > 1
      ) {
        state.quantity[action.payload] -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export const {
  addToCart,
  removeFromCart,
  setInput,
  increaseQuantity,
  decreaseQuantity,
} = fetchProductSlice.actions;
export default fetchProductSlice.reducer;
