import { configureStore } from '@reduxjs/toolkit';
import tree from './slice/treeSlice';

const store = configureStore({
  reducer: {
    tree
  }
});

export default store;