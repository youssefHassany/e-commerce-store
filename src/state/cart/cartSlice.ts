import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "@/types/cartItem";

interface InitialStateType {
  value: CartItemType[];
}

const initialState: InitialStateType = {
  value: [],
};

const cartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, cart: PayloadAction<CartItemType>) => {
      const newItem = cart.payload;
      newItem.capacity = 1;
      const existingItem = state.value.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.value = [...state.value, newItem];
      }
    },

    removeItemFromCart: (state, cart: PayloadAction<CartItemType>) => {
      const newCart = state.value.filter((item) => item.id !== cart.payload.id);
      state.value = newCart;
    },

    increaseItemCapacity: (state, item: PayloadAction<CartItemType>) => {
      const selectedItem = item.payload;
      selectedItem.capacity = selectedItem.capacity + 1;

      for (let i = 0; i < state.value.length; i++) {
        if (state.value[i].id === selectedItem.id) {
          state.value[i].capacity = selectedItem.capacity;
        }
      }
    },

    decreaseItemCapacity: (state, item: PayloadAction<CartItemType>) => {
      if (item.payload.capacity > 1) {
        const selectedItem = item.payload;
        selectedItem.capacity = selectedItem.capacity - 1;

        for (let i = 0; i < state.value.length; i++) {
          if (state.value[i].id === selectedItem.id) {
            state.value[i].capacity = selectedItem.capacity;
          }
        }
      }
    },

    clearCart: (state) => {
      state.value = [];
    },
  },
});

export const {
  addItemToCart,
  decreaseItemCapacity,
  increaseItemCapacity,
  removeItemFromCart,
  clearCart,
} = cartSlicer.actions;
export default cartSlicer.reducer;
