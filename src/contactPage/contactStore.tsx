import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactReducer";
const contactStore=configureStore({
    reducer: contactReducer
});
export default contactStore;
