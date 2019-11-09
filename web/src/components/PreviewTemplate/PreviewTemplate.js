import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
// Temporary
import HomePage from '../../pages/index';


const PreviewTemplate = (props) => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(undefined);

	useEffect(() => {
		// Parse from location prop
		const query = new URLSearchParams(props.location.search);
		// Get pageId and isDraft
		const { pageId, isDraft } = query;

		const fetchData = async () => {
			const sanityData = {};
			// const sanityData = await fetchDataFromSanity(pageId, isDraft);

			if (sanityData) {
				setData(sanityData);
			}

			setIsLoading(false);
		}

		if (isDraft) {}
			fetchData();
			// the subscribeToData helper function runs sanity-client's listen
      // method to create an observable that runs a callback function
      // every time the data is changed (in this case, this.fetchData)
      // subscribeToData(pageId, this.fetchData);
	}, []);

	if (isLoading) return <p>LOADING...</p>;

	if (!data) {
		console.log('No data found');
		navigate('/');
		return null;
	}


	// Finally, if it's not loading and there's data, render the desired
	// PageTemplate. Here you could do conditionals on the document type
	// and render different templates as needed ;)
	// return <PageTemplate data={data} />;
	return <HomePage data={data}></HomePage>
}

PreviewTemplate.propTypes = {};
PreviewTemplate.defaultProps = {};

export default PreviewTemplate;