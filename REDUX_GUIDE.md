# Redux Toolkit - Complete Guide

## Redux Overview

Redux is a **Global State Management** library.

**In simple terms:** All application data is kept in a single large storage object that any component in the app can access.

---

## When to Use Redux

### Use Redux when:

- User authentication (login/logout) is needed across all pages
- Shopping cart item count must be visible in the header and on the cart page
- Theme (dark/light mode) must be applied across the entire app
- A notification system needs to be accessible from anywhere
- Complex form data must be shared across multiple steps

### Do NOT use Redux when:

- Small project (fewer than 5-10 pages)
- Data is only needed in a single component
- There is no props drilling problem
- Simple TODO app or blog

---

## Redux Structure

```
src/
├── store/
│   ├── store.js           ← Main Store (Storage Box)
│   └── slices/            ← Feature-wise data management
│       ├── authSlice.js   ← User login/logout
│       ├── themeSlice.js  ← Theme management
│       └── cartSlice.js   ← Shopping cart
```

---

---

## Core Concepts

### 1. **Store** = Application Data Storage

- A single large JavaScript object that holds all state
- Only one store exists per application

```javascript
const store = {
  auth: { user: {...}, isAuthenticated: true },
  theme: { mode: 'dark' },
  cart: { items: [...], total: 500 }
}
```

### 2. **Slice** = Data + Logic for a single Feature

- Auth Slice = Login/Logout logic + user data
- Theme Slice = Dark/Light mode logic + theme data
- Cart Slice = Cart management logic + cart items

### 3. **Actions** = What to do (Commands)

- `loginSuccess` = User has logged in
- `logout` = User is logging out
- `addToCart` = Add a product to cart
- `toggleTheme` = Change the theme

### 4. **Reducer** = How data changes (Logic)

- Defines how state updates in response to an action

### 5. **useSelector** = **Read** data from the store

```javascript
const user = useSelector((state) => state.auth.user);
const theme = useSelector((state) => state.theme.mode);
```

### 6. **useDispatch** = **Write** data to the store

```javascript
const dispatch = useDispatch();
dispatch(loginSuccess(userData)); // Send an action
dispatch(logout()); // Another action
```

---

## Step-by-Step Setup

### Step 1: Install dependencies

```bash
npm install @reduxjs/toolkit react-redux
```

### Step 2: Create a Slice

```javascript
// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, isAuthenticated: false },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
```

### Step 3: Create the Store

```javascript
// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
```

### Step 4: Add Provider in App.jsx

```javascript
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <YourComponents />
    </Provider>
  );
}
```

### Step 5: Use in a Component

```javascript
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess, logout } from '../store/slices/authSlice';

function LoginButton() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogin = () => {
    dispatch(
      loginSuccess({
        user: { name: 'John', email: 'john@example.com' },
      }),
    );
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

---

## Current Project Surfaces

### 1. **Authentication State**

- File: `src/store/slices/authSlice.js`
- Used by: `src/router/router.jsx`, `src/hooks/useSocket.js`, `src/services/axiosInstance.js`
- Features: login, logout, token persistence, user updates

### 2. **Theme State**

- File: `src/store/slices/themeSlice.js`
- Used by: `src/store/store.js`
- Features: dark/light mode, primary color persistence

### 3. **Shopping Cart State**

- File: `src/store/slices/cartSlice.js`
- Covered by: `src/store/slices/__tests__/cartSlice.test.js`
- Features: add to cart, quantity updates, totals

---

## Getting Started

1. **Run the development server:**

   ```bash
   npm start
   ```

2. **Open the app in your browser:**

```
http://localhost:5173
```

3. **Test the state flows that are wired into the app:**

- Log in through the existing auth flow and verify `authSlice`
- Trigger theme changes and confirm `themeSlice` persistence
- Run the slice tests for cart/auth/theme behavior

4. **Install Redux DevTools (optional but recommended):**
   - Chrome: Redux DevTools extension
   - Allows you to inspect the entire store state in real time

---

## Memory Aid

**Redux = Restaurant**

1. **Store** = The kitchen (where all the food is prepared)
2. **Slice** = A section of the menu (Chinese, Italian, Desserts)
3. **Action** = Placing an order ("I want a Pizza")
4. **Reducer** = The chef who prepares the food
5. **useSelector** = The waiter who brings your food
6. **useDispatch** = Giving the order to the waiter

**Flow:**

1. You place an order (dispatch action)
2. The waiter takes it to the kitchen
3. The chef prepares it (reducer)
4. The waiter delivers it to you (useSelector)

---

## Best Practices

1. **Slice naming:** Name by feature (auth, theme, cart, product)
2. **Keep slices small:** One slice = one feature
3. **Use selectors:** Use `selectUser()` instead of accessing `state.auth.user` directly in components
4. **Don't mutate state:** Redux Toolkit handles this automatically via Immer
5. **Persist important data:** Save tokens and theme preference through the existing Redux listener middleware and `localStorage`

---

## Common Errors and Solutions

### Error 1: "Cannot read property of undefined"

**Cause:** Wrong path used in `useSelector`
**Solution:** Verify that `state.auth.user` is the correct path in the store

### Error 2: "Actions must be plain objects"

**Cause:** Incorrect value passed to `dispatch()`
**Solution:** Call the action creator — `dispatch(loginSuccess(data))` not `dispatch({ type: ... })`

### Error 3: "Could not find react-redux context"

**Cause:** `Provider` was not added
**Solution:** Wrap your app with `<Provider store={store}>` in `App.jsx`

---

## Next Steps

1. **API Integration:** Use Redux Thunk or RTK Query for API calls
2. **Async Actions:** Fetch data from an API and save it to Redux
3. **Middleware:** Add custom logic between dispatch and reducer
4. **Redux Persist:** Retain state across page reloads

---

## Summary

- Redux = Global State Management
- Store = Data storage
- Slice = Feature-specific data + logic
- Actions = Commands (`loginSuccess`, `logout`)
- `useSelector` = Read data from the store
- `useDispatch` = Send actions to the store
- `Provider` = Connects the app to Redux

---

**Created:** February 3, 2026  
**Project:** React Webpack Tailwind App with Redux Toolkit
