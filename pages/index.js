import React from 'react';
import { async } from 'regenerator-runtime';

import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client';

const Home = ({products, bannerData}) => {
	return (
		<>
			<HeroBanner heroBanner = {bannerData[0]} />

			<div className='products-heading'>
				<h2>Best Selling Products</h2>
				<p>Speakers of many variations</p>
			</div>

			<div className='products-container'>
				{products.map((product) => (
					<Product key = {product._id} product = {product} />
				))}
			</div>

			<FooterBanner />
		</>
	);
};

export const getServerSideProps = async () => {
	const query = '*[_type == "product"]'
	const bannerQuery = '*[_type == "banner"]'

	const products = await client.fetch(query)
	const banner = await client.fetch(bannerQuery)

	return {
		props: {
			products: products,
			bannerData: banner
		}
	}
}

export default Home;
