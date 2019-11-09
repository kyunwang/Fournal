import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { navigate, Match } from '@reach/router';

import Container from '../components/layout/Container';
import PreviewTemplate from '../components/PreviewTemplate/PreviewTemplate';

const PreviewPage = () => {
	return (
		<Container>
			{/* Avoid indexing of previews */}
			<Helmet>
				<meta name="robots" content="noindex, nofollow" />
			</Helmet>

			 {/*
        @reach/router offers a <Match /> component that passes down router-related props
        to a child function. We use this function to either render the template if we're in
        the proper path - and pass the location prop to it -, or navigate to the homepage
      */}
			<Match path="/preview">
				{props => {
					if (!props.match) {
						navigate('/');
						return null;
					} else {
						return <PreviewTemplate location={props.location} />
					}
				}}
			</Match>
		</Container>
	);
}

PreviewPage.propTypes = {};
PreviewPage.defaultProps = {};

export default PreviewPage;