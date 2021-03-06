import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMusic
} from '@fortawesome/free-solid-svg-icons';


const  Nav = ({setLibraryClass, libraryClass}) => {



  return (
    <nav>
      <h2>Waves</h2>
      <button onClick={()=> setLibraryClass(!libraryClass)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  )
}

export default Nav
