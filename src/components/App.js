import React from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
  const[id,setId] = useState(0);
  const[photo,setPhoto] = useState('null');
  console.log(photo)
  useEffect(()=>{
    if(id === 0) return;
    console.log("Hi Alok")
      setPhoto(null)
      fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then((response)=>{
        return response.json()
      }).then(result=>{
        setPhoto(result)
      })
  },[id])
  return (
    <div className="App">
      <input type="number" onChange={(event)=>{
        setId(event.target.value)
      }}/>
      {photo ? <PhotoFrame title={photo.title} url={photo.url}/>  : <Loader/>}
    </div>
  );
}


export default App;
