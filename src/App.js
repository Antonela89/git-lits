import { useState, useEffect } from 'react';
import Layout from './components/Layout.jsx';
import Profile from './components/Profile.jsx';
import Filter from './components/Filter.jsx';
import RepoList from './components/Repo-List.jsx';
import Search from './components/Search.jsx';
import { getUser, getReposUser } from './services/users';
import { useParams } from 'react-router-dom';
import Modal from './components/modal.jsx';
import './App.css';


function App() {
  const params = useParams();
  let username = !params.user ? 'leonidasesteban' : params.user;
  
  const [ user, setUser ] = useState({});
  const [ repos, setRepos ] = useState([]);
  const [ isVisible, setIsVisible] = useState(false);
  const [ search, setSearch] = useState("")

  useEffect(() => {
    getUser(username).then(({data, isError}) => {
      if(isError) {
        console.log('No hemos encontrado a este usuario');
        return;
      } 
      setUser(data)
    })

    getReposUser(username).then(({data, isError}) => {
      if(isError ) {
        console.log('No hemos encotrado repositorios del usuario');
        return;
      }
      setRepos(data);
      // console.log(data)
    })
  }, [username])


  return (
    <Layout>
      <Modal visibility={isVisible} setIsVisible = {setIsVisible}/>
      <Profile {...user}/>
      <Filter setSearch={setSearch} repoListCount={repos.length}/>
      <RepoList repoList={repos} search={search}/>
      <Search setIsVisible = {setIsVisible}/>
    </Layout>
  );
}

export default App;
