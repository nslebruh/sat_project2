import { threads } from "./util"
import { useState, useEffect, Fragment } from "react"
import {Menu, Transition} from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

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
    <div className="h-screen bg-neutral-400">
      <div className="h-20 bg-neutral-600">
        <div>
          <label htmlFor="search">Search</label>
          <input id="search" onInput={(e) => onSearchInput(e)} value={searchValue}/>
        </div>
        <button className="" onClick={() => changeSortType(0)}>Floss</button>
        <button className="" onClick={() => changeSortType(1)}>Name</button>
        <button className="" onClick={() => changeSortType(2)}>Hex</button>
        <button className="" onClick={() => changeSortType(3)}>Amount</button>
        <button className="" onClick={() => changeSortType(4)}>Do I have it?</button>
        <MyMenu />
      </div>
      <div>
      Hello world
      </div>
      <ul className="bg-neutral-400">
        {threads_list.map((thread, index) => (
          <li key={index} className="flex items-center h-16 mx-4 my-2 rounded-lg bg-neutral-300">
            <div style={{"backgroundColor": `${thread.color}`}} className="w-16 h-full"/>
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

export function MyMenu() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
          <ChevronDownIcon className="w-5 h-5 -mr-1 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Edit
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Duplicate
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Archive
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Move
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Share
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Add to favorites
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Delete
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default MainPage