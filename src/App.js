import Header from './components/Header';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Home from './pages/Home';
import NewBlog from './pages/NewBlog';
import BlogPage from './components/BlogPage';
import EditBlog from './components/EditBlog';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './components/SignUp';
import Missing from './components/Missing';
import Footer from './components/Footer';
import {Switch, Route} from 'react-router-dom';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <div id="App" className="text-black flex flex-col flex-start overflow-y-auto">
      <AppProvider>
        <Header />
        <Nav />
        <Banner />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/blog' component={NewBlog} />
          <Route path='/edit/:id' component={EditBlog} />
          <Route path='/blog/:id' component={BlogPage} />
          <Route path='/about' component={About}/>
          <Route path='*' component={Missing} />
        </Switch>
        <Footer />  
      </AppProvider> 
    </div>
  );
}

export default App;
