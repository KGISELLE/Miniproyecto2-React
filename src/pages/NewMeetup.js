import { useHistory } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(props) {
  const history = useHistory(); 

  function addMeetupHandler(meetupData) {
    const URL = 'https://react-udemy-started-default-rtdb.firebaseio.com/meetups.json';
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'applications/json'
      }
    }).then(() => {
      history.replace('/')
    });
  }

  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  );
}

export default NewMeetupPage;