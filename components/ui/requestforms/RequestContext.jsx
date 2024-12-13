"use client";

import { createContext, useContext } from "react";

const RequestContext = createContext(null);

export const useRequestContext = () => useContext(RequestContext);

export const RequestProvider = ({ children, value }) => (
    <RequestContext.Provider value={value}>{children}</RequestContext.Provider>
);
