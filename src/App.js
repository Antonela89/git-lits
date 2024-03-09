import Layout from './components/Layout.jsx';
import Profile from './components/Profile.jsx';
import Filter from './components/Filter.jsx';
import RepoList from './components/Repo-List.jsx';
import Search from './components/Search.jsx';
import './App.css';


function App() {
  return (
    <Layout>
      <Profile/>
      <Filter/>
      <RepoList/>
      {/* <Search/> */}
    </Layout>
  );
}

export default App;
