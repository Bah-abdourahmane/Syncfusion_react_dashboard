import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// context
import { useStateContext } from './context/ContextProvider'
// Icons import
import { FiSettings } from 'react-icons/fi'
// sycfusion components
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
// components import
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
// Style import
import './App.css'

const App = () => {
    const { activeMenu } = useStateContext();
    return (
        <div>
            <BrowserRouter>
                <div className='flex realtive dark:bg-main-dark-bg'>
                    {/* button settings */}
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Settings" position="Top">
                            <button className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white rounded-full'
                                style={{ background: 'blue' }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {/* Sidebar */}
                    <div>
                        {activeMenu ? (
                            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg'>
                                <Sidebar />
                            </div>
                        ) : (
                            <div className='w-0 dark:bg-secondary-dark-bg'>
                                <Sidebar />
                            </div>
                        )}
                    </div>
                    {/* Navbar */}
                    <div
                        className={`dark:bg-main-bg bg-main-bg min-h-screen 
                        ${activeMenu ? 'md:ml-72 w-full ' : ' w-full flex-2'}`}
                    >
                        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            <Navbar />
                        </div>
                        {/* routes */}
                        <Routes>
                            {/* Dashboard */}
                            <Route path='/' element={<Ecommerce />} />
                            <Route path='/eCommerce' element={<Ecommerce />} />

                            {/* Pages */}
                            <Route path='/orders' element={<Orders />} />
                            <Route path='/employees' element={<Employees />} />
                            <Route path='/customers' element={<Customers />} />

                            {/* Apps */}
                            <Route path='/kanban' element={<Kanban />} />
                            <Route path='/editor' element={<Editor />} />
                            <Route path='/calendar' element={<Calendar />} />
                            <Route path='/color-picker' element={<ColorPicker />} />

                            {/* Charts */}
                            <Route path='/line' element={<Line />} />
                            <Route path='/area' element={<Area />} />
                            <Route path='/bar' element={<Bar />} />
                            <Route path='/pie' element={<Pie />} />
                            <Route path='/financial' element={<Financial />} />
                            <Route path='/color-mappin' element={<ColorMapping />} />
                            <Route path='/pyramid' element={<Pyramid />} />
                            <Route path='/stacked' element={<Stacked />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
