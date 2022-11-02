import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Navbar from './elements/Navbar';
import {getRecentArticles} from './services/ArticleService';
import { useEffect, useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import Logout from './pages/Logout';
import { Footer } from './elements/Footer';
import { Email } from './elements/Email';
import { SignUp } from './pages/SignUp';
import LoadingText from './elements/LoadingText';
import ArticlePage from './pages/ArticlePage';

const HOMEPAGE_ARTICLE_COUNT = 10;

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  const auth = useAuth();

  useEffect(()=>{
    setIsLoaded(true);
  }, [])

  if (error) {
    setError(error)
    return <div> Error... </div>
  } else if (!isLoaded) {
    return <LoadingText/>
  } else {
    return (
      <div className="app">
        <Navbar
          links={
            [
              { label: 'Home', address: '/' },
              { label: 'Create Post', address: '/createpost' },
              { label: 'Login', address: '/login' },
              { label: 'Logout', address: '/logout' }
            ]}
          title="Ayden's React Blog"
        />
        <div className="body" id="body">
          <Routes>
            <Route className="route" path="/" element={<Home articles={articles} />} />
            <Route path="/createpost" element={
              <ProtectedRoute user={auth.currentUser}>
                <CreatePost />
              </ProtectedRoute>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/article/:id" element={<ArticlePage/>}/>
            <Route path="loading" element={<LoadingText/>}/>
          </Routes>
        </div>
        <Footer>
          Contact me at <Email>aydendiel@gmail.com</Email>
        </Footer>
      </div>
    );
  }


}

export default App;
