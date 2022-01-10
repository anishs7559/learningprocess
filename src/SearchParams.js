import React,{useState} from 'react'
 const ANIMAL =['bird','cat','dog','reptile','rabbit']
function Searchparams() {
    const[ location,setLocation ]= useState('seatle,WA')
    const [ animal,setanimal ] = useState("")
    return (
        <div className='search-params'>
           <form>
            <label htmlFor='location'>
                location
                <input  id='location' onChange={(e)=>{setLocation(e.target.value)}} value={location} placeholder='location' />  
            </label>
            <select  id="animal" onChange={(e)=>{setanimal(e.target.value)}} value={animal}>
                <option />
            {ANIMAL.map(animal=>(
                <option value={animal} key={animal}> {animal} </option>
            ))}
            </select>
            <button>submit</button>
                </form> 
        </div>
    )
}

export default Searchparams
