import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";


function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-udemy-started-default-rtdb.firebaseio.com/meetups.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };

        meetups.push(meetup);
      }

      setIsLoading(false)
      setLoadedMeetups(meetups);
    });
  }, [])


  if(isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups}/>
      {/* al pasar los datos de forma dinamica ya podemos eliminar const DUMMY_DATA = [] */}
      {/* <MeetupList meetups={DUMMY_DATA}/> */}
      {/* <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>
        })}
      </ul> */}
    </section>
  );
}

export default AllMeetupsPage;