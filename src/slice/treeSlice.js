import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { basicUrl, treeName } from '../config/baseVariables';

const initialState = {
  tree: {},
  error: false,
  loading: false,
}

export const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    SetTree: (state, action) => {
      state.tree = action.payload;
    },
    SetError: (state, action) => {
      state.error = action.payload;
    },
    SetLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { SetTree, SetError, SetLoading  } = treeSlice.actions;

// Selectors
export const selectTree = (state) => state.tree.tree;
export const selectError = (state) => state.tree.error;
export const selectLoading = (state) => state.tree.loading;

// Thunk actions 
export const getTree = () => {
  return async (dispatch) => {
    dispatch(SetLoading(true));
    try{
      const res = await axios.get(`${basicUrl}/api.user.tree.get?treeName=${treeName}`);
      dispatch(SetTree(res.data));
      dispatch(SetLoading(false));
    } catch {
      dispatch(SetError(true));
    }
  }
};

export const renameItem = (id, newName) => {
  return async (dispatch) => {
    try{
      await axios.post(`${basicUrl}/api.user.tree.node.rename?treeName=${treeName}&nodeId=${id}&newNodeName=${newName}`);
      dispatch(getTree());
    } catch {
      dispatch(SetError(true));
    }
  }
};

export const createItem = (id, name) => {
  return async (dispatch) => {
    try{
      await axios.post(`${basicUrl}/api.user.tree.node.create?treeName=${treeName}&parentNodeId=${id}&nodeName=${name}`);
      dispatch(getTree());
    } catch {
      dispatch(SetError(true));
    }
  }
};

export const deleteItem = (id) => {
  return async (dispatch) => {
    try{
      await axios.post(`${basicUrl}/api.user.tree.node.delete?treeName=${treeName}&nodeId=${id}`);
      dispatch(getTree());
    } catch {
      dispatch(SetError(true));
    }
  }
};

export default treeSlice.reducer;
