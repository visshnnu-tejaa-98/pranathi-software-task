import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  error: "",
  loggedInUser: null,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      let data = response.data;
      let requiredData = [];
      for (let i = 0; i < data.length; i++) {
        let obj = {
          id: data[i].id,
          name: data[i].name,
          email: data[i].email,
          city: data[i]?.address?.city,
          phone: ((Math.random() + 1) * 1000000000).toString().split(".")[0],
          company: data[i]?.company?.name,
          salary: Number((Math.random() * 100).toFixed(2)) * 1000,
          website: data[i].website,
        };
        requiredData.unshift(obj);
      }
      return requiredData;
    });
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.loggedInUser = action.payload;
    },
    userLogout: (state, action) => {
      state.loggedInUser = null;
    },
    addUser: (state, action) => {
      state.users.unshift(action.payload);
    },
    removeUser: (state, action) => {
      let filteredUsers = state.users.filter(
        (user) => user.id != action.payload
      );
      state.users = filteredUsers;
    },
    editUser: (state, action) => {
      const { payload } = action;
      state.users.map((user) => {
        if (user.id === payload.id) {
          user.name = payload.name;
          user.email = payload.email;
          user.phone = payload.phone;
          user.city = payload.city;
          user.salary = payload.salary;
          user.company = payload.company;
          user.website = payload.website;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export const { addUser, removeUser, editUser, userLogin, userLogout } =
  userSlice.actions;
export default userSlice.reducer;
