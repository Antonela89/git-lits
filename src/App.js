import { useState, useEffect } from 'react';
import Layout from './components/layout.jsx';
import Profile from './components/profile.jsx';
import Filter from './components/filter.jsx';
import RepoList from './components/repo-List.jsx';
import Search from './components/search.jsx';
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
  const [ search, setSearch] = useState("");
  const [ type, setType] = useState("");
  const [ language, setLanguage ] = useState("");
  const [ sort, setSort ] = useState("");

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
      <Filter setSearch={setSearch} setType={setType} setLanguage={setLanguage} setSort={setSort} repoListCount={repos.length}/>
      <RepoList repoList={repos} search={search} type={type} language={language} sort={sort}/>
      <Search setIsVisible = {setIsVisible}/>
    </Layout>
  );
}

export default App;
