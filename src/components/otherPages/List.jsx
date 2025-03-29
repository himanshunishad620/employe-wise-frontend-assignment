import { useState, useEffect } from "react";
import { useData } from "../../utils/useData";
import ReactPaginate from "react-paginate";
import ListItem from "./ListItem";

const List = () => {
  const {fetchData,data,error,totalPages}=useData()
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText,setSearchText]=useState("")
  useEffect(() => {
     fetchData(currentPage+1);   
  }, [currentPage]);
  return (
    <div className="p-0 lg:p-5 w-full lg:w-3/5 m-auto  ">
      <div className="px-5 w-full h-13 flex justify-between items-center bg-[#7900BA]">
        <p className="hidden lg:block text-white font-semibold">User List</p>
      <input
            className="px-5 w-full lg:w-70 outline-none text-[#666666] text-sm bg-[#F7F8F9] h-8 border-1 border-[#D3D3D39C] rounded placeholder:font-urbanist placeholder:text-[#8391A1] placeholder:text-[13px] "
            value={searchText}
            type="text"
            placeholder="search"
            onChange={(e) => setSearchText(e.target.value)}
          />
      </div>
        {error && <p className="text-center text-red-500">{error}</p>}
      <div className=" w-full">
      <ul className="w-full">
        {data?.map((item,i) => (
          <ListItem key={i} searchText={searchText} user={item}/>
        ))}
      </ul>
      </div>
      {/* Pagination Controls */}
      <div className="flex gap-2 mt-4 justify-center ">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        forcePage={currentPage}
        pageCount={totalPages}
        onPageChange={(e)=>setCurrentPage(e.selected)}
        containerClassName={"flex gap-2 mt-4"}
        pageLinkClassName="flex cursor-pointer justify-center items-centr w-6 h-6 border-[1px] border-gray-300 hover:bg-[#7900BA]  hover:text-white transition"
        previousLinkClassName="cursor-pointer px-2 border-1 border-gray-400 text-white bg-[#7900BA]  hover:bg-[#7900BA]  hover:text-white transition"
        nextLinkClassName="cursor-pointer px-2 border-1 border-gray-400 text-white bg-[#7900BA] hover:bg-[#7900BA]  hover:text-white transition"
        activeClassName="w-6 h-6 bg-[#7900BA] text-white  "
        disableInitialCallback={true} 
      />
      </div>
    </div>
  );
};

export default List;
