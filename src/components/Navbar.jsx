import React, { useEffect } from 'react'
// icons import
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
// syncfusion components
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
// image import
import avatar from '../data/avatar.jpg'
// components import
import { Cart, Chat, Notification, UserProfile } from './'
// useContext
import { useStateContext } from '../context/ContextProvider'

// 
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button
            onClick={customFunc}
            style={{ color }}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
            <span
                style={{ background: dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            >
            </span>
            {icon}
        </button>
    </TooltipComponent>
)

const Navbar = () => {
    const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize,setScreenSize } = useStateContext();

    useEffect(()=>{
        const handleResize = ()=> setScreenSize(window.innerWidth)
        window.addEventListener('resize',handleResize);

        handleResize();

        return ()=> window.removeEventListener('resize', handleClick);
    }, [])
    useEffect(()=>{
        if(screenSize <=900){
            setActiveMenu(false);
        }else{
            setActiveMenu(true);
        }
    }, [screenSize])

    return (
        <div className='flex justify-between p-2 md:mx-6 relative'>
            {/* left nav */}
            <div className='flex'>
                <NavButton
                    title="Menu"
                    customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                    icon={<AiOutlineMenu />}
                    color="blue"
                />
            </div>
            {/* right nav */}
            <div className='flex'>
                <NavButton
                    title="Cart"
                    customFunc={() => handleClick('cart')}
                    icon={<FiShoppingCart />}
                    color="blue"
                />
                <NavButton
                    title="Chat"
                    dotColor="#03c9d7"
                    customFunc={() => handleClick('chat')}
                    icon={<BsChatLeft />}
                    color="blue"
                />
                <NavButton
                    title="Notifications"
                    dotColor="#03c9d7"
                    customFunc={() => handleClick('notification')}
                    icon={<RiNotification3Line />}
                    color="blue"
                />
                <TooltipComponent content="profile" position='BottomCenter'>
                    <div
                        className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
                        onClick={() => handleClick('userProfile')}
                    >
                        <img src={avatar} alt="" className='rounded-full w-8 h-8' />
                        <p>
                            <span className='text-gray-400 text-14'>Hi, </span>{' '}
                            <span className='text-gray-400 font-bold ml-1 text-14'>Abdoul</span>
                        </p>
                        <MdKeyboardArrowDown className='text-gray-400 text-14'/>
                    </div>
                </TooltipComponent>

                {isClicked.cart && <Cart/>}
                {isClicked.chat && <Chat/>}
                {isClicked.notification && <Notification/>}
                {isClicked.userProfile && <UserProfile/>}
            </div>
        </div>
    )
}

export default Navbar
