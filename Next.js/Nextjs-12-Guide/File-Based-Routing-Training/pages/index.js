import Link from "next/link";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <ul></ul>
      <EventList items={featuredEvents} />
      <Link href="/events">events</Link>
    </div>
  );
};

export default HomePage;
