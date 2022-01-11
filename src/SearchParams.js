import React,{useState,useEffect} from 'react'
import Pet from './Pet'
 const ANIMAL =['bird','cat','dog','reptile','rabbit']
function Searchparams() {
    const[ location,setLocation ]= useState('seatle,WA')
    const [ animal,setanimal ] = useState("dog")
    const [ breed,setBreed ] = useState('')
    const [ pets,setPets] = useState([])
    const breeds =[]

    useEffect(()=>{
        requestPets()
    },[])

    async function requestPets(){
        const res = await fetch(
           ` https://pokeapi.co/api/v2/pokemon/ditto`
        )
        const json =await res.json()
        console.log(json)
        setPets(json.pets)
    }

    return (
        <div className='search-params'>
<form onSubmit={(e)=>{
    e.preventDefault()
    requestPets()

}}>
<label htmlFor='location'>
     location
    <input  id='location' onChange={(e)=>{setLocation(e.target.value)}} value={location} placeholder='location' />  
  </label>
<label htmlFor="animal">ANIMAL
 <select  id="animal" onChange={(e)=>{setanimal(e.target.value)}} value={animal}>
     <option />
 {ANIMAL.map(animal=>(
     <option value={animal} key={animal}> {animal} </option>
  ))}
</select>
 </label>
 <label htmlFor="breed">Breed
 <select  id="breed" onChange={(e)=>{setBreed(e.target.value)}} value={breed}>
    <option />
{breeds.map(breed=>(
     <option value={breed} key={breed}> {breed} </option>
  ))}
</select>
 </label>
            <button>submit</button>
                </form> 
                <Pet name='luna' animal='dog' breed ='havanese'/>
                <Pet name='njago' animal='dog' breed ='german'/>
                <Pet name='beam' animal='dog' breed ='wheaten Terrier'/>
        </div>
    )
}

export default Searchparams
