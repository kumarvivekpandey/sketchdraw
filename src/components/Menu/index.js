import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import styles from './YourStyles.module.css';

const Menu=()=>{
  return (
    <div className='absolute px-5 py-1 flex justify-between w-1/4 left-1/2 top-10 rounded-md;'>
      <div className='cursor-pointer flex justify-center items-center h-10 w-10 rounded-md;'>
       <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
       <div className='cursor-pointer flex justify-center items-center h-10 w-10 rounded-md;'>
       <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
       <div className='cursor-pointer flex justify-center items-center h-10 w-10 rounded-md;'>
       <FontAwesomeIcon icon={faRotateLeft} className={styles.icon}  />
      </div>
       <div className='cursor-pointer flex justify-center items-center h-10 w-10 rounded-md;'>
       <FontAwesomeIcon icon={faRotateRight}  className={styles.icon} />
      </div>
       <div className='cursor-pointer flex justify-center items-center h-10 w-10 rounded-md;'>
       <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
      </div>
    </div>
  )
}
export default Menu;