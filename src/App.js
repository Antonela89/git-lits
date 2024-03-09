import Layout from './components/Layout.jsx';
import Profile from './components/Profile.jsx';
import Filter from './components/Filter.jsx';
import RepoList from './components/Repo-List.jsx';
import Search from './components/Search.jsx';
import './App.css';


const repoList = [
  {
    name: "repo1",
    id: 123,
  },
  {
    name: "repo2",
    id: 124,
  }
]


function App() {
  return (
    <Layout>
      <Profile/>
      <Filter/>
      <RepoList repoList={repoList}/>
      {/* <Search/> */}
    </Layout>
  );
}

export default App;
