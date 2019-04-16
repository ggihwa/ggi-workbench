import React, {useState, useEffect} from 'react';


const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const apiCall = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setData(data);
    } catch(error) {
      setLoading(false);
      setError(error)
    }
  }

  useEffect(() => {
    apiCall(url);
  }, []);

  return {loading, data, error}
}

const GithubList = () => {
  const {loading, data: users, error} = useFetch('https://jsonplaceholder.typicode.com/users');

  const renderUserWithLoading = renderUser(loading);

  return (
    <div>
      {loading && <div>loading</div>}
      {users && users.map(renderUserWithLoading)}
      {users && <Users users={users} />}
      {error && <div>error</div>}
    </div>
  );
};

const renderUser = loading => user => <div key={user.id}>{loading.toString()}{user.id}</div>

const Users = ({users}) => users.map(user => <div key={user.id}>{user.id}</div>)

export default GithubList;
