import React from 'react'
// icons import
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
// components import
import { Stacked, Pie, Button, SparkLine } from '../components'
// data
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
// useContext
import { useStateContext } from '../context/ContextProvider'

const Ecommerce = () => {
    return (
        <div className='mt-12'>
            <div className="flex flex-wrap lg:flex-nowrap justify-center">
                {/* left card */}
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center '>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className='font-bold text-gray-400'>Earnings</p>
                            <p className='text-2xl'>$63,448.78</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button
                            color="white"
                            bgColor="blue"
                            text="Download"
                            borderRadius="10px"
                            size="md"
                        />
                    </div>
                </div>
                {/* right icons card */}
                <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
                    {earningData?.map((item) => (
                        <div
                            key={item.title}
                            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
                        >
                            <button
                                type='button'
                                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                                className="text-2xl p-4 rounded-full hover:drop-shadow-xl"
                            >
                                {item.icon}
                            </button>
                            <p className="mt-3">
                                <span className="text-lg font-semibold">
                                    {item.amount}
                                </span>
                                <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
                            </p>
                            <p className='text-gray-400 mt-1'>{item.title} </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Reveneu section */}
            <div className="flex gap-10 flex-wrap justify-center">
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
                    {/* revenue heade */}
                    <div className="flex justify-between">
                        <p className='font-semibold text-xl'>Revenue Updates</p>
                        <div className='flex items-center gap-4'>
                            <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                                <span><GoPrimitiveDot/></span>
                                <span>Expense</span>
                            </p>
                            <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                                <span><GoPrimitiveDot/></span>
                                <span>Budget</span>
                            </p>
                        </div>
                    </div>
                    {/* chart review */}
                    <div className='flex flex-wrap justify-center gap-10 mt-10'>
                        {/* left side */}
                        <div className="border-r-1 border-color m-4 pr-10">
                            <div>
                                <p>
                                    <span className='text-3xl font-semibold'>$93,38</span>
                                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3'>23%</span>
                                </p>
                                <p className='text-gray-500 mt-1'>Budget</p>
                            </div>
                            <div className='mt-5'>
                                <p>
                                    <span className='text-3xl font-semibold'>$48,38</span>
                                </p>
                                <p className='text-gray-500 mt-1'>Expense</p>
                            </div>
                            {/* Sparkline */}
                            <div className='mt-5'>
                                <SparkLine
                                    currentColor="blue"
                                    id="line-sparkline"
                                    type="Line"
                                    height="80px"
                                    width="250px"
                                    data={SparklineAreaData}
                                    color="blue"
                                />
                            </div>
                            {/* button component */}
                            <div className='mt-10'>
                                <Button
                                    color="white"
                                    bgColor="blue"
                                    text='Download Report'
                                    borderRadius='10px'
                                />
                            </div>
                        </div>
                        {/* right side */}
                        <div>
                            <Stacked/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecommerce