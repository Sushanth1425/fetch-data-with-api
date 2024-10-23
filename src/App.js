import { useState } from 'react';
import Comments from './Comments.js';
import Contents from './Contents.js';
import Posts from './Posts.js';
import Users from './Users.js';

function App() {

  const API_URL= 'https://jsonplaceholder.typicode.com'
  const [mainContent, setMainContent]=useState('select a button to fetch data')
  const [error,setError]= useState('')
  const [isLoading, setIsLoading] =useState(false)

  const apiRequest=async (url='', methodObject= null, errMsg=null)=>{
    try{
      const response= await fetch(url, methodObject)
      if (!response.ok) throw Error('RELOAD THE PAGE') 
      if (response) setIsLoading(false)
      const data = await response.json()
      return data
    }catch(err){
      errMsg=err.message
      setError(errMsg)
      return error
    }
  }

  const postOptions= { method: 'GET'}
  const fetchURL= async(page)=>{
    setIsLoading(true)
    const desiredURL= `${API_URL}/${page}`
    const response= await apiRequest(desiredURL,postOptions)
    if (response) setMainContent(response)
  }

  return (
    <div >
      <div style={{display:'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
        <Users fetchURL={fetchURL} setIsLoading={setIsLoading}/>
        <Posts fetchURL={fetchURL} setIsLoading={setIsLoading}/>
        <Comments fetchURL={fetchURL} setIsLoading={setIsLoading} />
      </div>
      {isLoading&& <p>THE SITE IS LOADING</p>}
      {!error && !isLoading && <Contents content={mainContent}/> }
      {error && !isLoading && <Contents content={error}/>}
    </div>
    
  );
}

export default App;
