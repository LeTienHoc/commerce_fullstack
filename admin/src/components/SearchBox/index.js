import { IoSearch } from "react-icons/io5";


const SearchBox = () => {
  return (
    <div className='searchBox positon-relative d-flex align-items-center'>
        <IoSearch className="mr-2"/>
        <input type='text' placeholder='Tìm kiếm...'/>
    </div>
  )
}

export default SearchBox