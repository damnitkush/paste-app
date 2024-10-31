import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes , updateToPastes} from '../redux/pasteSlice'

const Home = () => {

    const [title,setTitle] = useState('');
    const [value,setValue] = useState('');
    const [searchParams , setsearchParams] =  useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();

    function createPaste(){
        const paste = {
            title: title,
            content : value,
            _id : pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }
        console.log("value of paste", paste);

        if(pasteId){

            dispatch(updateToPastes(paste));
            
        }else{

            dispatch(addToPastes(paste));

        }

        setTitle('');
        setValue('');
        setsearchParams({});
    }

  return (

    <div>
        <div className='flex flex-row gap-7 place-content-between'>

            <input 
            type="text"
            className='p-2 rounded-2xl mt-2'
            placeholder='enter title here' 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <button onClick={createPaste}>
                {
                    pasteId ? "Update My Paste":
                    "Create My Paste"
                }
            </button>

            </div>

            <div>
                <textarea 
                className='rounded-xl mt-4 min-w-[500px]'
                value={value}
                placeholder='enter content here'
                onChange={(e) => setValue(e.target.value)}
                rows={20}
                ></textarea>
            </div>


    </div>

  )
}

export default Home