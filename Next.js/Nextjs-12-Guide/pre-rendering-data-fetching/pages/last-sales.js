import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = async (url) => {
	const response = await fetch(url);
	return response.json();
};

const LastSalesPage = () => {
	const [sales, setSales] = useState();

	const { data, error } = useSWR(
		"https://next-js-course-3b53d-default-rtdb.firebaseio.com/sales.json",
		fetcher
	);

	useEffect(() => {
		const transforedSales = [];
		for (const key in data) {
			transforedSales.push({
				id: key,
				username: data[key].username,
				volume: data[key].volume,
			});
		}
		console.log(transforedSales);
		setSales(transforedSales);
	}, [data]);

	if (error) return <p>failed to load.</p>;
	if (!data || !sales) return <p>Loading...</p>;

	return (
		<>
			{sales.map((sale) => (
				<li key={sale.id}>
					{sale.username}-{sale.volume}
				</li>
			))}
		</>
	);
};

export default LastSalesPage;
