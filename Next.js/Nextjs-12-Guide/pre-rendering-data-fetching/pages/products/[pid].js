import fs from "fs/promises";
import path from "path";

const ProductDetailPage = (props) => {
	const { loadedProduct } = props; // 변수 이름을 loadedProduct로 수정

	if (!loadedProduct) {
		return <p>loading...</p>;
	}

	return (
		<>
			<h1>{loadedProduct.title}</h1>
			<p>{loadedProduct.description}</p>
		</>
	);
};

const getData = async () => {
	const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);

	return data;
};

export const getStaticProps = async (context) => {
	const { params } = context;
	const productId = params.pid;
	const data = await getData();
	const product = data.products.find((product) => product.id === productId);

	return {
		props: {
			loadedProduct: product,
		},
	};
};

export const getStaticPaths = async () => {
	const data = await getData();

	const ids = data.products.map((product) => product.id);
	const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

	return {
		paths: pathsWithParams,
		fallback: false,
	};
};

export default ProductDetailPage;
