import { useState, useEffect } from 'react';
import Layout from './components/Layout.jsx';
import Profile from './components/Profile.jsx';
import Filter from './components/Filter.jsx';
import RepoList from './components/Repo-List.jsx';
import Search from './components/Search.jsx';
import { getUser, getReposUser } from './services/users';
import { useParams } from 'react-router-dom';
import './App.css';


function App() {
  const params = useParams();
  let username = !params.user ? 'leonidasesteban' : params.user;
  
  // if(!username) {
  //   username = 'leonidasesteban'
  // }  
  
  const [ user, setUser ] = useState({})
  const [ repos, setRepos ] = useState([])

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
      <Profile {...user}/>
      <Filter/>
      <RepoList repoList={repos}/>
      {/* <Search/> */}
    </Layout>
  );
}

export default App;
