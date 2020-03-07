import React from 'react';

const defaultState = {
	activeSpotId: null,
	activePostId: null
}

const OnePageContext = React.createContext(defaultState);

export const OnePageContextProvider = OnePageContext.Provider;
export const OnePageContextConsumer = OnePageContext.Consumer;
export default OnePageContext;