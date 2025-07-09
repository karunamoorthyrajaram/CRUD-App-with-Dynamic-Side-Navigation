import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavItem {
  id: number;
  title: string;
}

interface NavState {
  items: NavItem[];
}

const initialState: NavState = {
  items: [],
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push({ id: Date.now(), title: action.payload });
    },
    updateItem: (state, action: PayloadAction<{ id: number; title: string }>) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) item.title = action.payload.title;
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
  },
});

export const { addItem, updateItem, deleteItem } = navSlice.actions;
