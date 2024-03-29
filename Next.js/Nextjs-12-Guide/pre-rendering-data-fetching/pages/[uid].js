import React from "react";

const UserIdPage = (props) => {
	return (
		<>
			<h1>{props.id}</h1>
		</>
	);
};

export default UserIdPage;

export const getServerSideProps = async (context) => {
	const { params, req, res } = context;
	const userId = params.uid;

	return {
		props: {
			id: "userid-" + userId,
		},
	};
};
