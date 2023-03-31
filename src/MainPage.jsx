import { threads } from "./util"
import { useState, useEffect } from "react"
function MainPage() {
  const defaultSort = [
    {
      name: "floss",
      // type 0: no sort, 1: ascending, 2: descending
      type: 0
    },
    {
      name: "name",
      type: 0
    },
    {
      name: "hex",
      type: 0
    },
    {
      name: "amount",
      type: 0
    },
    {
      name: "has",
      // 1: doesn't have it, 2: has it
      type: 0
    }
  ]

  let [threads_list, setThreadsList] = useState(threads)
  let [searchValue, setSearchValue] = useState("")
  let [searchType, setSearchType] = useState(0)
  let [sortType, setSortType] = useState(defaultSort)

  useEffect(() => {
    console.log("sort type changed")
    let new_threads = threads
    for (let i = 0; i < sortType.length; i++) {
      
    }
  }, [sortType])

  function onSearchInput(e) {
    console.log(e.currentTarget.value)
    setSearchValue(e.currentTarget.value)
  }

  function ChangeSearchType(value) {
    if (value > 5 || value < 1) {
      return
    }
    setSearchType(value)
  }

  function changeSortType(index) {
    let sort = sortType
    switch (sort[index].type) {
      case 0:
        sort[index].type = 1
        break;
      case 1:
        sort[index].type = 2
        break;
      case 2:
        sort[index].type = 0
      default:
        break;
    }
    console.log(sort)
    setSortType(sort)
  }


  return (
    <div className="bg-neutral-400 h-screen">
      <div className="bg-neutral-600 h-20">
        <div>
          <label htmlFor="search">Search</label>
          <input id="search" onInput={(e) => onSearchInput(e)} value={searchValue}/>
        </div>
        <button className="" onClick={() => changeSortType(0)}>Floss</button>
        <button className="" onClick={() => changeSortType(1)}>Name</button>
        <button className="" onClick={() => changeSortType(2)}>Hex</button>
        <button className="" onClick={() => changeSortType(3)}>Amount</button>
        <button className="" onClick={() => changeSortType(4)}>Do I have it?</button>
        
      </div>
      <div>
      Hello world
      </div>
      <ul className="bg-neutral-400">
        {threads_list.map((thread, index) => (
          <li key={index} className="flex h-16 bg-neutral-300 rounded-lg mx-4 items-center my-2">
            <div style={{"backgroundColor": `${thread.color}`}} className="h-full w-16"/>
            <div>
              {thread.floss}
            </div>
            <div>
              {thread.name}
            </div>
            <div>
              {thread.hex}
            </div>
            <div>
              {thread.amount}
            </div>
            <div>
              {thread.has}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MainPage