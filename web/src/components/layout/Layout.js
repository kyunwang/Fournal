import '../../styles/global.css';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

// import favicon
// import navigation
import { OnePageContextProvider } from '../../context/OnePageContext';

const Layout = ({ children }) => {
	const [activeSpotId, setActiveSpotId] = useState(null);
	const [activePostId, setActivePostId] = useState(null);

	// useEffect(( ) => {
	// 	console.log('upadete');
		
	// }, [])

	return (
		<OnePageContextProvider
			value={{
				activeSpotId,
				setActiveSpotId,
				activePostId,
				setActivePostId,
			}}
		>
			<Helmet>
				<html lang="en" />
				{/* <link rel="icon" href={favicon} /> */}
				<meta charset="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Helmet>
			{children}
		</OnePageContextProvider>
	);
};

export default Layout;
