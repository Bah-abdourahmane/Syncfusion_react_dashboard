import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// Icon import
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
// Syncfusion component
import { Tooltip, TooltipComponent } from '@syncfusion/ej2-react-popups'
// data
import { links } from '../data/dummy'
// useContext
import { useStateContext } from '../context/ContextProvider'

const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize } = useStateContext();
    const handleCloseSideBar = () =>{
        if(activeMenu && screenSize <=900){
            setActiveMenu(false);
        }
    }

    const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
    const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md  text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2"

    return (
        <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
            {activeMenu && (
                <div>
                    {/* Side logo && cancel icon */}
                    <div className='flex justify-between items-center'>
                        <Link to="/" className='flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold dark:text-white' onClick={() => setActiveMenu(false)}>
                            <SiShopware /> <span>Shoppy</span>
                        </Link>
                        <TooltipComponent content="Menu" position='BottomCenter'>
                            <button
                                className="text-xl p-3 hover:bg-light-gray mt-4 block md:hidden"
                                onClick={handleCloseSideBar}>
                                <MdOutlineCancel />
                            </button>
                        </TooltipComponent>
                    </div>
                    {/* side menu liste */}
                    <div>
                        {links?.map((link, i) => (
                            <div key={i}>
                                <p className="text-gray-400 m-3 mt-4 uppercase">
                                    {link.title}
                                </p>
                                {link?.links.map((item, i) => (
                                    <NavLink
                                        to={`${item.name}`}
                                        key={i}
                                        onClick={handleCloseSideBar}
                                        className={({ isActive }) => isActive ? activeLink : normalLink}
                                    >
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Sidebar
