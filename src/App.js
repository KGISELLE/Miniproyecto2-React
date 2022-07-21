import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favotites';
import Layout from './components/layout/Layout';
// import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <Layout>
      {/* <MainNavigation /> */}
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup' exact>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites' exact>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
