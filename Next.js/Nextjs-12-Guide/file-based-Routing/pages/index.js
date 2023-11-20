import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <li>
        <Link replace href="/portfolio">
          portfolio
        </Link>
      </li>
      <li>
        <Link href="/clients">clients</Link>
      </li>
      <li></li>
      <li></li>
    </div>
  );
};

export default HomePage;
