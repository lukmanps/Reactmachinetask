import React, { createContext, useContext, useState } from 'react';
import {
  ArrowLeftCircle,
  ArrowRightCircle
} from 'lucide-react';

const SideBarContext = createContext();

const SideBar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className='h-screen'>
      <nav className={`h-full flex flex-col bg-white border-r shadow-md max-w-xs ${
        expanded ? 'lg:w-64' : 'w-16'
      } transition-all`}>
        <div className='p-4 pb-2 flex justify-between items-center gap-5 '>
          

          <button onClick={() => setExpanded(prevState => !prevState)} className='mr-3 p-1.5 hover:bg-slate-200 rounded-full'>
            {expanded ? <ArrowLeftCircle /> : <ArrowRightCircle />}
          </button>
        </div>

        <SideBarContext.Provider value={{expanded}}>
          <ul className='flex-1 px-3 bg-white'>{children}</ul>
        </SideBarContext.Provider>


      </nav>

    </aside>
  )
}

export default SideBar;

export const SideBarItems = ({ icon, text, active }) => {
  const {expanded} = useContext(SideBarContext)
  return (
    <li className={`
    relative flex items-center py-2 px-3 my-1
    font-medium rounded-md cursor-pointer
    transition-colors group
    ${active
        ? "bg-slate-300"
        : "hover:bg-slate-200 text-gray-600"
      }
`}>
      {icon}
      <span className={`overflow-hidden transition-all ${
        expanded ? "w-52 ml-3" : "w-0"
      }`}>{text}</span>
    </li>
  )
}
