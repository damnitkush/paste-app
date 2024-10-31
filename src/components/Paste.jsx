import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';


export const Paste = () => {

  const pastes = useSelector((state) => (state.paste.pastes));
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const filterData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(search.toLowerCase()));

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));

  }


  return (
    <div>
      List of Paste

      <input
        className='p-2 rounded-2xl mt-5'
        type='search'
        placeholder='search here'
        value={search}
        onChange={(e) => setSearch(e.target.value)}

      />
      <div>
        {
          filterData.length > 0 &&
          filterData.map(
            (paste) => {
              return (
                <div>
                  <div>
                    {paste.title}
                  </div>

                  <br />
                  <div>
                    {paste.content}
                  </div>

                  <button>
                    Edit
                  </button>

                  <button>
                    View
                  </button>

                  <button
                    onClick={() => handleDelete(paste?._id)}>
                    Delete
                  </button>

                  <button>
                    Share
                  </button>

                  <button>
                    Copy
                  </button>
                </div>

              )
            }
          )
        }
      </div>
    </div>
  )
}
