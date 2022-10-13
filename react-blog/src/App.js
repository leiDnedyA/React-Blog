import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Navbar from './elements/Navbar';
import { getAllArticles, getRecentArticles, getArticle } from './services/ArticleService';
import { useEffect, useState } from 'react';

// const sampleArticleBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi sit amet mauris commodo quis. Gravida quis blandit turpis cursus in. Platea dictumst vestibulum rhoncus est pellentesque. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Nibh mauris cursus mattis molestie a iaculis at. Varius morbi enim nunc faucibus a pellentesque sit amet. Lectus proin nibh nisl condimentum id venenatis a. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Nibh mauris cursus mattis molestie a iaculis at.  Elementum nibh tellus molestie nunc non blandit massa enim. Vel orci porta non pulvinar neque laoreet. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Ut sem nulla pharetra diam sit amet nisl suscipit. Urna et pharetra pharetra massa massa ultricies. Aliquet risus feugiat in ante metus dictum at tempor commodo. Odio morbi quis commodo odio aenean. Elementum integer enim neque volutpat ac tincidunt. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Bibendum enim facilisis gravida neque convallis a cras semper.  Condimentum lacinia quis vel eros donec ac odio tempor. Faucibus pulvinar elementum integer enim. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Tincidunt nunc pulvinar sapien et. Amet nisl suscipit adipiscing bibendum est ultricies integer. In cursus turpis massa tincidunt dui ut ornare lectus sit. Egestas integer eget aliquet nibh praesent tristique. Sed enim ut sem viverra aliquet. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Eu consequat ac felis donec et odio pellentesque. Erat pellentesque adipiscing commodo elit at imperdiet. Lorem ipsum dolor sit amet consectetur.  Nec dui nunc mattis enim ut. At quis risus sed vulputate odio ut. Est placerat in egestas erat. Scelerisque eu ultrices vitae auctor eu augue ut. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Nulla at volutpat diam ut venenatis tellus in. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Nam."

const HOMEPAGE_ARTICLE_COUNT = 5;

const randomInt = (min, max) => {
  let n = Math.floor((Math.random() * (max - min)) + min);
  return n
}

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getRecentArticles(HOMEPAGE_ARTICLE_COUNT).then(res => {
      setIsLoaded(true);
      setArticles(res.recentArticles);
    })
  }, [])

  if (error) {
    return <div> Error... </div>
  } else if (!isLoaded) {
    return <div> Loading... </div>
  } else {
    return (
      <div className="app">
        <Router>
          <Navbar
            links={
              [
                { label: 'Home', address: '/' },
                { label: 'Create Post', address: '/createpost' },
                { label: 'Login', address: '/login' }
              ]}
            title="Ayden's React Blog"
          />
          <div className="body">
            <Routes>
              <Route path="/" element={<Home articles={articles} />} />
              <Route path="/createpost" element={<CreatePost />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }


}

export default App;
