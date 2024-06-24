import React from 'react'

const Filter = ({filterData,category,setCategory}) => {

  function filterCategory(title){
    setCategory(title);
  }

  return (
    <div className=' w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 py-4 mx-auto justify-center '>
        {
            filterData.map( (data) =>{
                return(<button key={data.id} 
                className={` text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                ${category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"} `} 
                onClick={() => filterCategory(data.title)}>
                {data.title}</button>)
            })
        }
    </div>
  )
}

export default Filter
