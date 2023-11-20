import { useRouter } from "next/router";

const PortfoloiProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>Portfoli Project Page</h1>
    </div>
  );
};

export default PortfoloiProjectPage;
