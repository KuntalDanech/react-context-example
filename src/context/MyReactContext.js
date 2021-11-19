import React from 'react';
const MyReactContext = React.createContext();

const MyReactContextProvider = MyReactContext.Provider;
const MyReactContextConsumer = MyReactContext.Consumer;

export {MyReactContextProvider, MyReactContextConsumer, MyReactContext}