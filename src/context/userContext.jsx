import { useEffect, createContext, useReducer } from "react";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isLoading: false,
    error: null
};

export const UserContext = createContext(INITIAL_STATE);

const UserReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isLoading: true,
                error: null
            };

        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isLoading: false,
                error: null
            };

        case "LOGIN_FAILURE":
            return {
                user: null,
                isLoading: false,
                error: action.payload
            };

        case "LOGOUT":
            return INITIAL_STATE

        default:
            return state;
    }
};

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])

    return (
        <UserContext.Provider value={{
            user: state.user,
            isLoading: state.isLoading,
            error: state.error,
            dispatch
        }}>
            {children}
        </UserContext.Provider>
    );
};
