import {Route,Switch,Redirect} from 'react-router-dom'
import Layout from './Layout/Layout';
import ParentForm from './Forms/ParentForm';
import Preview from './Preview/Preview';
import ChildenForm from './Forms/ChildrenForm';

function App() {
  return (
    <Layout>
      <Switch>
     <Route path='/main'>
       <ParentForm/>
     </Route>
     <Route path='/children'>
       <ChildenForm/>
     </Route>
     <Route path='/preview'>
        <Preview/>
     </Route>
     <Route path='/' exact>
     <Redirect to='/main'/>
     </Route>
     </Switch>
    </Layout>
  );
}

export default App;
