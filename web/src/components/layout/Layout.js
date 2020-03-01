import '../../styles/global.css';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

// import favicon
// import navigation
import { OnePageContextProvider } from '../context/OnePageContext';

const Layout = ({ children }) => {
	const [activeSpotId, setActiveSpotId] = useState(null);
	const [activePostId, setActivePostId] = useState(null);

	return (
		<OnePageContextProvider value={{
				activeSpotId, setActiveSpotId, activePostId, setActivePostId
			}}
		>
			<Helmet>
				<html lang="en" />
				{/* <link rel="icon" href={favicon} /> */}
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Helmet>
			<main>{children}</main>
		</OnePageContextProvider>
	);
}

export default Layout;
