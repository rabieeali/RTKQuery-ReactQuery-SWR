import { useState } from "react"
import './App.css'
import { useUsersQuery } from './app/api/usersApi'
import AddNewUser from "./components/AddNewUser";
import SingleUser from './components/SingleUser';

function App() {
  const [userId, setUserId] = useState<number | null>(null)
  const { data: users, error, isLoading, isFetching, isSuccess } = useUsersQuery();

  const clickHandler = (id: number) => setUserId(id)

  return (
    <div className="App">
      {isLoading && <p>Loading ...</p>}
      {isFetching && <p>fetching ...</p>}
      {error && <p>something is wrong ...</p>}
      {isSuccess && users?.map(u => <p onClick={() => clickHandler(u.id)} key={u.id}>{u.name}</p>)}
      <hr />
      {userId && <SingleUser id={userId} />}
      <hr />
      <AddNewUser />
    </div>

  )
}

export default App
