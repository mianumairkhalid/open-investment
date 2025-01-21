import { navLinks } from '../data/navlinks'
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect, useRef } from 'react';
import logo from "../asset/logo.svg"
import card from "../asset/card.png"
import icon1 from "../asset/icon1.png"
import icon2 from "../asset/icon2.png"
import icon3 from "../asset/icon3.png"
import icon4 from "../asset/icon4.png"
import chain from "../asset/chain.png"
import tab1 from "../asset/tab1.png"
import tab2 from "../asset/tab2.png"
import topDots from "../asset/topDots.png"
import tab3 from "../asset/tab3.png"
import contract from "../asset/contract.png"
import tabImg2 from "../asset/tabImg2.png"
import tabImg3 from "../asset/tabImg3.png"
import check from "../asset/check.png"
import cards from "../asset/cards.webp"
import walletIntegrations from "../asset/walletIntegrations.png"
import coinbase from "../asset/coinbase.png"
import metaMask from "../asset/metaMask.png"
import openWallet from "../asset/openWallet.png"
import leftDots from "../asset/leftDots.webp"
import openLogo from "../asset/openLogo.png"
import escrow from "../asset/escrow.png"
import email from "../asset/email.png"
import phone from "../asset/phone.png"
import icp from "../asset/icp.png"
import location from "../asset/location.png"
import tradingInvesting from "../asset/tradingInvesting.png"
import currenies from "../asset/currencies.webp"
import rightCard from "../asset/right-card.png"
import personalWallet from "../asset/personalWallet.png"

const Welcome = () => {
    const [hamburger, setHamburger] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Check if we're scrolling down or up
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                if (headerRef.current) {
                    headerRef.current.style.opacity = '0';
                }
            } else {
                // Scrolling up
                if (headerRef.current) {
                    headerRef.current.style.opacity = '1';
                }
            }
            // Update last scroll position
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    const headerClassName = isScrolled ?
        'fixed z-40 top-0 left-0 py-[15px] md:py-[30px] px-5 md:px-[70px] sm:px-8 w-full flex items-center transition-all duration-300 bg-white' :
        'fixed z-40 top-0 left-0 py-[15px] md:py-[30px] px-5 md:px-[70px] sm:px-8 w-full flex items-center border-b-[#4F7770] border-b-[1px] transition-all duration-300';

    const tabs = [
        {
            title: "Payments & Receivables",
            content: "Raise invoices and receive instant payment in the form of tokenised shares to your personal wallet. Make payments for goods and services with no banking fees or capital risk.",
            image: tabImg3,
            icon: tab1
        },
        {
            title: "Immutable Transaction History",
            content: "All trading and transaction history will be logged into the blockchain providing information on all live holdings and trades whilst still maintaining user anonymity.",
            image: tabImg2,
            icon: tab2
        },
        {
            title: "Digital Currency to Equity Options",
            content: "Buy, sell and swap digital currency for a wide range of fractional equity options reflecting Stock Exchange market results. Gain profits as stock options climb from real utility.",
            image: tabImg3,
            icon: tab3
        }
    ];

    return (
        <div className="w-full">

            <header
                style={{
                    transition: "0.5s ease",
                }}
                ref={headerRef} className={`${headerClassName} z-[101] duration-300 shadow-sm`}>
                <div className='w-full mx-auto flex items-center justify-between px-2'>
                    <div className='flex items-center justify-between w-full '>
                        <img src={logo} alt="" className='md:h-[70px] h-[26px]' />
                        <ul className='hidden lg:flex space-x-12'>
                            {
                                navLinks.map((item, key) => (
                                    <li className='' key={`pc-nav${key}`}>
                                        <ScrollLink
                                            to={item.href}
                                            smooth={true}
                                            duration={300}
                                            className={`text-${isScrolled ? 'green' : 'white'} hover:text-${isScrolled ? 'primary' : '#573f7e'} dark:hover:text-[#573f7e] font-semibold font-popp pr-4 cursor-pointer`}>
                                            {item.title}
                                        </ScrollLink>
                                    </li>
                                ))
                            }
                        </ul>
                        <div style={{
                            backgroundColor: isScrolled ? '#277768' : '#fff',
                        }} className={`bg-${isScrolled ? '[#277768]' : '[#fff]'} text-${isScrolled ? '[#E1FFA0]' : '[#000]'} cursor-pointer h-[44px] w-[135px] lg:flex justify-center items-center text-[16px] font-bold rounded-md hidden`}>
                            Open App
                        </div>
                        <div className="w-[40px] h-[40px] flex flex-col justify-center items-center cursor-pointer lg:hidden transition-all duration-300" onClick={() => setHamburger(prev => !prev)}>
                            <div style={{
                                backgroundColor: isScrolled ? '#000' : '#fff',
                            }} className={` w-[20px] h-[2px] transition-all duration-500 ${hamburger ? '-rotate-45 translate-y-[8px] delay-200 bg-black' : 'rotate-0 translate-y-0 '}`}></div>
                            <div style={{
                                backgroundColor: isScrolled ? '#000' : '#fff',
                            }} className={` h-[2px] my-[6px] transition-all duration-300 ${hamburger ? 'w-0' : 'w-[14px] delay-300'}`}></div>
                            <div style={{
                                backgroundColor: isScrolled ? '#000' : '#fff',
                            }} className={`w-[20px] h-[2px] transition-all duration-500 ${hamburger ? 'rotate-45 -translate-y-[8px] delay-200 bg-black' : 'rotate-0 translate-y-0 '}`}></div>
                        </div>

                    </div>

                </div>
            </header>
            <div className={`lg:hidden bg-white  fixed z-[100] w-full transition-all duration-500 ${hamburger ? 'translate-y-[70px] h-screen pt-[0px] md:pt-[100px]' : '-translate-y-[300px]'}`}>
                <ul className={`w-auto h-auto py-4 px-2  mx-0 outline-4 `}>
                    {
                        navLinks.map((item, key) => (
                            <li className='px-5 md:px-[70px] w-full ' key={`mobile-nav${key}`}>
                                <ScrollLink
                                    to={item.href}
                                    smooth={true}
                                    duration={300}
                                    onClick={() => setHamburger(false)} className='rounded-md py-2 block font-medium text-black border-[1px] border-transparent hover:border-white transition-all duration-200 cursor-pointer'>{item.title}</ScrollLink>
                            </li>
                        ))
                    }

                </ul>

            </div>
            <div className="wave-animation-container top-section relative overflow-visible h-auto lg:min-h-screen w-full pt-[120px] md:pt-[200px] lg:pt-[200px] bg-[#174743] text-white flex justify-center">
                <div className="wave-animation" style={{
                    background: 'linear-gradient(to right, #679977 0%, #517768 30%, rgba(39, 119, 104, 0.3) 50%, #517768 70%, #679977 100%)',
                    backgroundSize: '200% 100%',
                    animation: 'waveAnimation 13s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                    height: '100%',
                    position: 'absolute',
                }}>
                </div>

                <style jsx>{`
        .wave-animation-container {
            width: 100%;
            overflow: hidden;
        }

        .wave-animation {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            animation-fill-mode: both; 
            opacity: 0.5;
        }

        /* Keyframe for horizontal wave effect */
        @keyframes waveAnimation {
            0% {
                background-position: 200% 0;
            }
            50% {
                background-position: 100% 0;
            }
            100% {
                background-position: 0 0;
            }
        }

        /* Keyframe for vertical bounce effect */
        @keyframes bounceAnimation {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(10px);
            }
        }
    `}</style>

                <div className='w-full flex flex-col items-center z-50 sm:pb-0 pb-10 '>
                    <div className="text-center px-10 md:px-[120px] xl:px-[25%]">
                        <p className="sm:text-base text-sm font-inter font-semibold text-[#E1FFA0]">All-in-one personal banking and investing solutions.</p>
                        <h1 className="lg:text-[72px] sm:text-[56px] text-[42px] text-white font-inter font-bold leading-none mt-2">Open App.</h1>
                        <p className="sm:text-lg text-sm text-[#FFFFFF8F] font-semibold mt-3">
                            Open Investment is a revolutionary app that allows users to trade digital currency
                            for stock and commodities options in a decentralized and immutable exchange.
                        </p>
                    </div>

                    <div className="lg:w-[33%] md:w-[50%] w-[90%] lg:mt-20 sm:mt-16 mt-10  sm:flex items-center border-[4px] border-[#528879] rounded-lg">
                        <input
                            type="text"
                            placeholder="The Future of Banking & Investing"
                            className="p-4 font-inter w-full rounded-l-md bg-white text-gray-700 placeholder-gray-500 focus:outline-none"
                        />
                        <button className="p-4 font-inter rounded-r-md sm:mt-0 mt-3 w-full sm:w-[115px] bg-[#134341] hover:bg-[#268580] text-white font-semibold">
                            Join us
                        </button>
                    </div>

                    <div className="flex justify-center relative mt-5">
                        <img src={card} className="sm:w-[60%] w-[85%] sm:mb-0 -mb-5 z-50" alt="" />
                        <img src={topDots} className='absolute top-0 left-50' alt="" />
                    </div>
                </div>
            </div>




            <div
                id='overview'
                style={{
                    backgroundColor: 'transparent',
                    backgroundImage: 'linear-gradient(180deg, #0C231F 0%, #134341 100%)',
                }}
                className="text-center sm:rounded-t-[60px] rounded-t-[30px] sm:py-[120px] py-[70px] z-[51] relative lg:-mt-20 -mt-10 flex flex-col items-center justify-center"
            >

                <div className='lg:w-[38%] md:w-[60%]'>
                    <p className='font-semibold font-inter text-[#E1FFA0] font-base mb-5'>Why Open Investment?</p>
                    <h2 className='font-bold font-inter lg:text-[48px] md:text-[36px] text-[26px]  text-white leading-none'>The only fintech app you’ll ever need.</h2>
                    <p className='mt-3 font-medium text-[#FFFFFF8F] text-base'>Our online trading and banking protocol is user-friendly and easy to navigate.</p>
                </div>
                <div className='lg:w-[85%] md:w-[95%] w-full sm:mt-28 mt-5'>
                    <div className='flex flex-wrap sm:gap-16 justify-center'>
                        <div className='lg:w-[20%] sm:w-[40%] w-full sm:mt-0 mt-5 sm:px-0 px-5 flex flex-col justify-start items-center'>
                            <div className='bg-[#284D3D] w-20 h-20 p-3 rounded-full mb-5'>
                                <div className='bg-[#517353] w-full h-full rounded-full p-2 flex items-center justify-center'>
                                    <img src={icon1} className='w-full' alt="" />
                                </div>
                            </div>
                            <h3 className='text-white text-lg font-inter mb-1 font-semibold'>Personal Custodian</h3>
                            <p className='text-[#FFFFFF8F] text-base font-medium'>Store & swap fractional equities in your personal wallet to pay for services or accumulate gains.</p>
                        </div>


                        <div className='lg:w-[20%] sm:w-[40%] w-full sm:mt-0 mt-5 sm:px-0 px-5 flex flex-col justify-start items-center'>
                            <div className='bg-[#284D3D] w-20 h-20 p-3 rounded-full mb-5'>
                                <div className='bg-[#517353] w-full h-full rounded-full p-2 flex items-center justify-center'>
                                    <img src={icon2} className='w-full' alt="" />
                                </div>
                            </div>
                            <h3 className='text-white text-lg font-inter mb-1 font-semibold'>Decentralised Ledger</h3>
                            <p className='text-[#FFFFFF8F] text-base font-medium'>A secure, transparent and immutable blockchain ledger will record all results and transactions.</p>
                        </div>



                        <div className='lg:w-[20%] sm:w-[40%] w-full sm:mt-0 mt-5 sm:px-0 px-5 flex flex-col justify-start items-center'>
                            <div className='bg-[#284D3D] w-20 h-20 p-3 rounded-full mb-5'>
                                <div className='bg-[#517353] w-full h-full rounded-full p-2 flex items-center justify-center'>
                                    <img src={icon3} className='w-full' alt="" />
                                </div>
                            </div>
                            <h3 className='text-white text-lg font-inter mb-1 font-semibold'>Escrow Security</h3>
                            <p className='text-[#FFFFFF8F] text-base font-medium'>All equity share offering will hold maintain locked value in escrow funds for full amount.</p>
                        </div>




                        <div className='lg:w-[20%] sm:w-[40%] w-full sm:mt-0 mt-5 sm:px-0 px-5 flex flex-col justify-start items-center'>
                            <div className='bg-[#284D3D] w-20 h-20 p-3 rounded-full mb-5'>
                                <div className='bg-[#517353] w-full h-full rounded-full p-2 flex items-center justify-center'>
                                    <img src={icon4} className='w-full' alt="" />
                                </div>
                            </div>
                            <h3 className='text-white text-lg font-inter mb-1 font-semibold'>Digital to Stocks</h3>
                            <p className='text-[#FFFFFF8F] text-base font-medium'>Use Bitcoin and Etherium to purchase stocks such as Tesla, Meta and many more options.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#FDFEFD] flex justify-center sm:pt-36 pt-24 sm:px-0 px-7'>
                <div className='lg:w-[85%] md:w-[95%] w-full'>
                    <div className='sm:flex justify-between'>
                        <div className='sm:w-[45%]'>
                            <h2 className='text-[#0C231F] leading-none lg:text-[48px] md:text-[36px] text-[26px]  font-inter font-semibold'>Seamless trading and banking solutions.</h2>
                            <p className='text-[#0c231F99] sm:text-base text-sm font-medium font-inter sm:mt-10 mt-5'>Experience the ultimate financial revolution as you escrow your digital assets to buy stock and commodities options seamlessly.</p>
                            <p className='text-[#0c231F99] sm:text-base text-sm font-medium font-inter mt-5'>With our user-friendly platform, you can trade, swap, and sell tokenised shares with ease, all within a secure and transparent environment. Embrace the power of DeFi and diversify your digital investments to enjoy potential gains from traditional stock markets. Join us now and unlock a world of limitless possibilities in the exciting realm of decentralised finance. </p>
                            <p className='text-[#0c231F99] sm:text-base text-sm font-medium font-inter mt-10'>Trusted by the world’s most ambitious companies</p>
                            <img src={chain} className='sm:w-[85%] w-full mt-5' alt="" />
                        </div>
                        <div className='sm:w-[45%]'>
                            <img className='sm:block hidden' src={rightCard} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-20 sm:px-0 px-7' id='features'>
                <div className='lg:w-[85%] md:w-[95%] w-full'>
                    <div className='sm:w-[67%]'>
                        <h2 className='text-[#0C231F] leading-none lg:text-[48px] md:text-[36px] text-[26px]  font-inter font-semibold'>Global unity, the future made easy.</h2>
                        <p className='text-[#0c231F99] text-justify text-base font-medium font-inter mt-4'>Fractional equity shares allow investors to own a portion or sliceof of a share rather than having to purchase whole shares, instantly and from anywhere in the world. These equity shares will be represented as digital tokens on the blockchain and secured in their personal wallet, providing the benefits of transparency, security and ease of transfer.</p>
                    </div>
                </div>

            </div>
            <div className='flex justify-center mt-10 tabs-sections sm:px-0 px-7'>
                <div className='lg:w-[85%] md:w-[95%] w-full'>
                    <div className='sm:flex justify-between items-center'>
                        <div className='sm:w-[45%]' w-full>
                            {tabs.map((tab, index) => (
                                <div key={index}
                                    style={{
                                        backgroundColor: activeTab === index ? '#F1FFD2' : '#fff',
                                    }}
                                    className={` border-l-[4px] border-${activeTab === index ? '[#0C231F]' : '[#F1F3F3]'} px-10 py-7 cursor-pointer`}
                                    onClick={() => setActiveTab(index)}>
                                    <div className='flex gap-3'>
                                        <img src={tab.icon} className='w-4 h-4' alt="" />
                                        <h3 className='text-[#134341] leading-none text-lg font-inter font-medium'>{tab.title}</h3>
                                    </div>
                                    <p className='text-[#0c231F99] font-medium text-base font-inter mt-2'>{tab.content}</p>
                                </div>
                            ))}
                        </div>
                        <div className='sm:w-[49%] sm:mt-0 mt-5 shadow-xl py-[60px] px-[80px] flex justify-center items-center rounded-2xl'
                            style={{
                                backgroundColor: 'transparent',
                                backgroundImage: 'linear-gradient(180deg, #134341 0%, #277768 100%)',
                            }}>
                            <img src={tabs[activeTab].image} alt={tabs[activeTab].title} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center sm:mt-20 mt-10 tabs-sections sm:px-0 px-7'>
                <div className='lg:w-[85%] md:w-[95%] w-full'>
                    <div className='flex sm:flex-row flex-col-reverse justify-between items-center'>
                        <div className='shadow-lg sm:mt-0 mt-5 sm:w-[49%] pt-[60px] px-[80px] flex justify-center items-center rounded-2xl'
                            style={{
                                backgroundColor: 'transparent',
                                backgroundImage: 'linear-gradient(180deg, #134341 0%, #277768 100%)',
                            }}>
                            <img src={personalWallet} className='rounded-t-2xl' />
                        </div>
                        <div className='sm:w-[45%] sm:mt-0'>
                            <h2 className='text-[#0C231F] lg:leading-none leading-snug lg:text-[48px] md:text-[34px] text-[26px] font-inter font-semibold'>Complete control over your wealth.</h2>
                            <p className='text-[#0c231F99] text-justify text-base font-medium font-inter mt-4'>Unlike traditional financial systems where a third party, such as a bank, manages your funds, an online wallet allows you to be your own bank. You have the ability to send, receive and manage your Digital assets and fractional shares independently without relying on intermediaries.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-20 tabs-sections sm:px-0 px-7'>
                <div className='lg:w-[85%] md:w-[95%] w-full'>
                    <div className='sm:flex justify-between items-center'>
                        <div className='sm:w-[45%]'>
                            <h2 className='text-[#0C231F] lg:leading-none leading-snug lg:text-[48px] md:text-[34px] text-[26px] font-inter font-semibold'>New and traditional financial synergy.</h2>
                            <p className='text-[#0c231F99] text-justify text-base font-medium font-inter mt-4'>Fractional shares as a means of payment offers global accessibility, wealth diversification, potential appreciation and lower transaction costs. Additional benefits include capital gains tax optimisation, currency conversion saving and no external interventions to freeze personal wealth.</p>
                        </div>
                        <div className='shadow-lg sm:mt-0 mt-5 sm:w-[49%] pt-[60px] px-[80px] flex justify-center items-center rounded-2xl'
                            style={{
                                backgroundColor: 'transparent',
                                backgroundImage: 'linear-gradient(180deg, #134341 0%, #277768 100%)',
                            }}>
                            <img src={currenies} className='rounded-t-2xl' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center sm:mt-28 mt-10 tabs-sections border-b-[4px] border-[#23645E] sm:px-0 px-7'>
                <div className='lg:w-[85%] md:w-[95%] w-full'>
                    <div className='flex sm:flex-row flex-col-reverse gap-10 justify-between items-end'>
                        <div className='sm:w-[49%]'>
                            <img src={cards} alt="" />
                        </div>
                        <div className='sm:w-[49%] sm:pb-14'>
                            <h2 className='lg:text-[48px] md:text-[30px] text-[28px] text-[#0C231F] font-semibold leading-none font-inter'>All-in-one decentralised digital app.</h2>
                            <div className='sm:mt-10 mt-6 grid sm:grid-cols-2 sm:gap-5 gap-5 lg:pb-0 md:pb-5'>
                                <div className='flex gap-2 items-center'>
                                    <img src={check} className='w-3 h-3' alt="" />
                                    <p className='lg:text-[17px] text-sm font-inter leading-none font-medium text-[#0C231F]'>Easy-to-Use Interface</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <img src={check} className='w-3 h-3' alt="" />
                                    <p className='lg:text-[17px] text-sm font-inter leading-none font-medium text-[#0C231F]'>Full Escrow Assurance</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <img src={check} className='w-3 h-3' alt="" />
                                    <p className='lg:text-[17px] text-sm font-inter leading-none font-medium text-[#0C231F]'>Digital to Equity Opions
                                    </p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <img src={check} className='w-3 h-3' alt="" />
                                    <p className='lg:text-[17px] text-sm font-inter leading-none font-medium text-[#0C231F]'>Community DOA</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex justify-center lg:mt-28 md:mt-16 mt-10 sm:px-0 px-7'>
                <div className='lg:w-[85%] md:w-[95%] w-full'>
                    <div className='sm:flex gap-10 justify-between items-center'>
                        <div className='sm:w-[49%]'>
                            <h2 className='text-[#0C231F] leading-none sm:text-[48px] md:text-[40px] text-[26px] font-inter font-semibold'>About Us</h2>
                            <p className='text-[#0c231F99] sm:text-base text-sm font-medium font-inter sm:mt-10 mt-3'>Our innovative approach provides users with exposure to traditional stock markets without the need to convert their digital assets into traditional currencies - fiat. By keeping their funds within the escrow contract, users avoid extra fees and complexities associated with transferring funds between different accounts. Additionally, this integration allows for seamless and instantaneous trading between tokenised shares and fiat, enabling users to capitalise on market opportunities swiftly. Moreover, users can diversify their investment portfolio effectively, balancing the potential gains from digital assets with the stability of traditional shares. Overall, this streamlined process ensures that users’ money never leaves the platform, allowing them to enjoy worry-free, state-of-the-art security, enhanced convenience, and financial flexibility in one cohesive solution. </p>
                        </div>
                        <div className='sm:w-[49%] sm:mt-0 mt-10 flex items-center justify-center'>
                            <img src={logo} className='sm:w-[60%] w-[60%]' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center lg:mt-28 md:mt-10 mt-10 sm:px-0 px-7'>
                <div className='lg:w-[85%] md:w-[95%] w-full'>
                    <div className='sm:flex gap-10 justify-between items-center'>
                        <div className='sm:w-[49%] flex items-center justify-center  bg-[#F1F3F3] py-5 px-14 rounded-2xl border-[3px] border-[#23645E]'>
                            <img src={contract} alt="" />
                        </div>
                        <div className='sm:w-[49%] sm:pl-10'>
                            <h2 className='text-[#0C231F] sm:mt-0 mt-5 leading-none lg:text-[48px] md:text-[36px] text-[26px]  font-inter font-semibold'>Smart contract automation.</h2>
                            <p className='text-[#0c231F99] text-base font-medium font-inter sm:mt-5 mt-3'>Smart contracts are at the heart of this groundbreaking approach to tokenised shares and secure transactions. Leveraging the power of smart contracts, Open App secures the ability to trade and invest in tokenised shares seamlessly, without the need for traditional intermediaries. When users initiate a trade of their digital currency for tokenised shares, the smart contract escrow lock ensures that the funds are held securely until the predetermined conditions are met.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex justify-center lg:mt-28 md:mt-10 mt-10 sm:px-0 px-7'>
                <div className='lg:w-[85%] md:w-[95%] w-full'>
                    <div className='flex sm:flex-row flex-col-reverse gap-10 justify-between items-center'>

                        <div className='sm:w-[49%] sm:pr-10'>
                            <h2 className='text-[#0C231F] leading-none lg:text-[48px] md:text-[36px] text-[26px]  font-inter font-semibold'>Escrow assurance and security.</h2>
                            <p className='text-[#0c231F99] text-base font-medium font-inter mt-5'>Our innovative approach provides users with exposure to traditional stock markets without the need to convert their digital assets into fiat. By keeping their funds within the platform, users avoid extra fees and complexities associated with transferring funds between different accounts. Additionally, this integration allows for seamless and instantaneous trading between tokenized shares and fiat, enabling users to capitalize on market opportunities swiftly. </p>
                        </div>
                        <div className='sm:w-[49%] flex items-center justify-center  bg-[#F1F3F3] py-5 px-14 rounded-2xl border-[3px] border-[#23645E]'>
                            <img src={escrow} className='w-[70%]' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center sm:mt-28 mt-10 sm:px-0 px-7'>
                <div className='lg:w-[85%] md:w-[95%] w-full'>
                    <div className='sm:flex gap-10 justify-between items-center'>
                        <div className='sm:w-[45%] flex items-center justify-center  bg-[#F1F3F3] p-8 border-[3px] border-[#23645E]'>
                            <img src={tradingInvesting} className='w-full' alt="" />
                        </div>
                        <div className='sm:w-[54%] sm:pl-3 sm:mt-0 mt-5 flex flex-col items-start'>
                            <h2 className='text-[#0C231F] lg:leading-none leading-snug lg:text-[48px] md:text-[34px] text-[26px] font-inter font-semibold'>Swap your currencies into equity in just one click.</h2>
                            <p className='text-[#0c231F99] text-base font-medium font-inter sm:mt-5 mt-3'>Welcome to Open, where digital trading meets stock market. Our cutting-edge platform is designed to provide you with the best experience, with a wide range of features that cater to every investor’s needs.</p>
                            <a href='https://wguj2-hyaaa-aaaah-aq5oq-cai.raw.icp0.io/blobs/79023993437974540667589361053914346238' className='hover:bg-[#E1FFA0] hover:text-[#35816C] bg-[#35816C] text-[#E1FFA0] transition sm:px-8 sm:py-3.5 px-6 py-2.5 text-base rounded-lg mt-5  font-semibold font-inter '>Learn More</a>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex justify-center sm:mt-28 mt-10 sm:px-0 px-7'>
                <div className='lg:w-[85%] md:w-[95%] w-full bg-[#134341] rounded-[20px] shadow-lg'>
                    <div className='sm:flex gap-10 justify-between items-start'>
                        <div className='sm:w-[35%] flex justify-center items-center sm:min-h-[300px] min-h-[150px] relative'
                            style={{
                                backgroundColor: 'transparent',
                                backgroundImage: 'radial-gradient(at top left, #E1FFA091 0%, #E1FFA000 70%)',
                            }}>
                            <img src={openLogo} className='w-[40%] sm:pt-0 pt-5 z-10' alt="" />
                            <div className='w-full h-full absolute left-0 top-0' style={{
                                backgroundColor: 'transparent',
                                backgroundImage: `url(${leftDots})`,
                                backgroundSize: 'cover',
                            }}></div>
                        </div>
                        <div className='sm:w-[60%] sm:pt-[70px] sm:pr-[70px] pr-[20px] sm:pl-0 pl-[20px] sm:pb-0 pb-[20px]'>
                            <p className='font-inter lg:text-lg text-base font-semibold text-white'>
                                "We believe that integrating tokenised fractional shares as a means of payment has the potential to revolutionise the financial landscape. We strive for financial inclusion, where anyone, regardless of their financial means, can leverage their fractional ownership to transact and thrive in a borderless and equitable world"
                            </p>
                            <h4 className='font-inter text-base text-[#E1FFA0] font-medium mt-5'>
                                - Open Investment Team
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#F1F3F3] flex justify-center -mt-36 lg:pb-[350px] md:pb-[200px] pb-[120px] lg:pt-[350px] md:pt-[250px] pt-[200px] sm:px-0 px-7'>
                <div id='integrations' className='lg:w-[85%] md:w-[95%] w-full'>
                    <div className='sm:flex justify-between items-start'>
                        <div className='sm:w-[40%] flex flex-col items-start'>
                            <img src={walletIntegrations} className='sm:w-[13%] w-[20%]' alt="" />
                            <h2 className='text-[#0C231F] leading-none lg:text-[48px] md:text-[36px] text-[26px]  font-inter font-semibold mt-5'>Wallet Integrations</h2>
                            <p className='text-[rgba(12, 35, 31, 0.6)] lg:text-base text-sm font-medium font-inter mt-5'>Wallet integration combines diverse digital assets into a single interface, offering users seamless management and control. With enhanced security measures and accessibility across devices, users can conveniently send, receive and participate in DeFi activities. The integration provides valuable insight into asset performance, empowering users to make informed decisions while ensuring their funds are protected.</p>
                            <a href='https://wguj2-hyaaa-aaaah-aq5oq-cai.raw.icp0.io/blobs/79023993437974540667589361053914346238' className='hover:bg-[#E1FFA0] hover:text-[#35816C] bg-[#0C231F] text-[#E1FFA0] transition px-7 py-2.5 rounded-lg mt-5 text-base font-semibold font-inter '>Learn More</a>
                        </div>
                        <div className='sm:w-[50%] sm:mt-0 mt-8 grid grid-cols-2 sm:gap-10 gap-3'>
                            <div>
                                <img src={coinbase} className='lg:w-[30%] w-[50%]' alt="" />
                                <p className='text-[#0C231F] sm:text-base text-sm font-medium font-inter mt-5'>Make secure payments online, and transfer digital currency with just a touch of your device.</p>
                            </div>
                            <div>
                                <img src={metaMask} className='lg:w-[30%] w-[50%]' alt="" />
                                <p className='text-[#0C231F] sm:text-base text-sm font-medium font-inter mt-5'>Easily link your personal wallet account to our platform for seamless and secure trading.</p>
                            </div>
                            <div>
                                <img src={icp} className='lg:w-[20%] w-[30%]' alt="" />
                                <p className='text-[#0C231F] sm:text-base text-sm font-medium font-inter mt-5'>ICP ensures secure connections, safeguarding your interactions with robust privacy measures.</p>
                            </div>
                            <div>
                                <img src={openWallet} className='lg:w-[30%] w-[50%]' alt="" />
                                <p className='text-[#0C231F] sm:text-base text-sm font-medium font-inter mt-5'>Coming Soon! Open wallet with additional security features and escrow assurance of funds.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#134341] -mt-[100px] rounded-t-[45px] sm:py-[50px] py-[10px] relative sm:px-0 px-7'>
                <div className='opacity-[0.3] w-full h-full absolute top-0 left-0' style={{
                    backgroundColor: 'transparent',
                    backgroundImage: 'radial-gradient(at top center, #FFFFFF94 0%, #FFFFFF00 70%)',
                }}></div>
                <div className='flex justify-center border-b border-[#FFFFFF1F] pb-[50px]'>
                    <div className='lg:w-[85%] md:w-[95%] w-full mt-[50px] z-50'>
                        <div className='sm:flex justify-between items-center'>
                            <div className='sm:w-[35%]'>
                                <h2 className='font-inter sm:text-[36px] text-[26px] font-semibold text-white'>Contact Information</h2>
                                <p className='text-[#FFFFFF5C] sm:text-lg text-sm font-sem font-inter'>We would love to hear from you! If you have any questions, suggestions, or inquiries, please don’t hesitate to contact us. You can reach us through the following channels:</p>
                            </div>
                            <div className='sm:w-[35%] sm:mt-0 mt-5 sm:space-y-3 space-y-1.5'>
                                <div className='flex gap-3 items-center'>
                                    <img src={email} className='w-[15px]' alt="" />
                                    <p className='font-inter sm:text-base text-sm text-white font-semibold'>Info@openinvestment.co.uk</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={phone} className='w-[15px]' alt="" />
                                    <p className='font-inter sm:text-base text-sm text-white font-semibold'>(0044) 795-8069-323</p>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <img src={location} className='w-[15px]' alt="" />
                                    <p className='font-inter sm:text-base text-sm text-white font-semibold'>5St Bride Street, London, EC4A 4AS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:pt-[70px] pt-[50px] border-b border-[#FFFFFF1F] pb-[50px] flex justify-center z-50 relative'>
                    <div className='lg:w-[85%] md:w-[95%] w-full sm:gap-0 gap-5 flex sm:flex-nowrap flex-wrap justify-between'>
                        <div className='sm:w-[20%] w-[40%] flex flex-col'>
                            <h4 className='text-[#FFFFFF5C] text-sm font-semibold font-inter'>Product</h4>
                            <p className='font-inter sm:text-lg text-sm text-white font-medium sm:mt-5 mt-2'>Overview</p>
                            <p className='font-inter sm:text-lg text-sm text-white font-medium sm:mt-3 mt-1'>Features</p>
                            <p className='font-inter sm:text-lg text-sm text-white font-medium sm:mt-3 mt-1'>Solutions</p>
                        </div>
                        <div className='sm:w-[20%] w-[40%] flex flex-col'>
                            <h4 className='text-[#FFFFFF5C] text-sm font-semibold font-inter'>Company</h4>
                            <a href='https://wguj2-hyaaa-aaaah-aq5oq-cai.raw.icp0.io/blobs/79023993439628405340827665793437048426' className='font-inter sm:text-lg text-sm text-white font-medium sm:mt-5 mt-2'>About us</a>
                            <a href='https://wguj2-hyaaa-aaaah-aq5oq-cai.raw.icp0.io/blobs/79023993439628405340827665793437048426' className='font-inter sm:text-lg text-sm text-white font-medium sm:mt-3 mt-1'>Contact</a>
                        </div>
                        <div className='sm:w-[20%] w-[40%] flex flex-col'>
                            <h4 className='text-[#FFFFFF5C] text-sm font-semibold font-inter'>Resources</h4>
                            <a href='https://oc.app/community/exg3j-cqaaa-aaaar-a4frq-cai/channel/117201654407067676294753699638752874140/?ref=t6orw-qyaaa-aaaar-axbua-cai' className='font-inter sm:text-lg text-sm text-white font-medium sm:mt-5 mt-2'>Education Material</a>
                            <a href="https://t.me/open_investment_dapp" className='font-inter sm:text-lg text-sm text-white font-medium sm:mt-3 mt-1'>Help center</a>
                            <p className='font-inter sm:text-lg text-sm text-white font-medium sm:mt-3 mt-1'>Support</p>
                        </div>
                        <div className='sm:w-[20%] w-[40%] flex flex-col'>
                            <h4 className='text-[#FFFFFF5C] text-sm font-semibold font-inter'>Social</h4>
                            <a href='https://x.com/openinvestment_?s=21' className='font-inter sm:text-lg text-sm text-white font-medium sm:mt-5 mt-2'>Twitter</a>
                            <a href='https://www.linkedin.com/company/open-investment-group' className='font-inter sm:text-lg text-sm text-white font-medium sm:mt-3 mt-1'>LinkedIn</a>
                            <p className='font-inter sm:text-lg text-sm text-white font-medium sm:mt-3 mt-1'>Facebook</p>
                            <a href='https://www.instagram.com/openinvestmentapp?igsh=anF4dzBsMmw5MGhm' className='font-inter sm:text-lg text-sm text-white font-medium sm:mt-3 mt-1'>Instagram</a>
                        </div>
                        <div className='sm:w-[20%] w-[40%] flex flex-col'>
                            <h4 className='text-[#FFFFFF5C] text-sm font-semibold font-inter'>Legal</h4>
                            <p className='font-inter sm:text-lg text-sm text-white font-medium sm:mt-5 mt-2'>Terms</p>
                            <a href=' https://finance.ec.europa.eu/document/download/8ba9c73e-53ee-4ea0-94c4-bdca5850f138_en?filename=finance-events-240611-privacy-statement_en.pdf&prefLang=fi' className='font-inter sm:text-lg text-sm text-white font-medium sm:mt-3 mt-1'>Privacy</a>
                            <a href='https://tokeny.com/wp-content/uploads/2023/08/Tokenization-Legal-Kit-Checklist.pdf' className='font-inter sm:text-lg text-sm text-white font-medium sm:mt-3 mt-1'>Legals</a>
                        </div>
                    </div>
                </div>
                <div className='sm:pt-[40px] pb-[px] flex justify-center'>
                    <div className='lg:w-[85%] sm:py-0 py-4 md:w-[95%] w-full sm:flex justify-between items-center'>
                        <div className='sm:w-[50%] flex sm:gap-12 gap-7 items-center sm:pb-0 pb-5'>
                            <img src={logo} className='lg:w-[15%] md:w-[35%] w-[30%]' alt="" />
                            <div className='flex gap-3 items-center'>
                                <img src={icp} className='w-[13%] h-auto' alt="" />
                                <h4 className='font-inter text-sm text-white font-medium'>Powered by Internet Computer</h4>
                            </div>
                        </div>
                        <div className='sm:w-[50%]'>
                            <p className='font-inter sm:text-lg text-sm text-white font-medium'>Copyright: © 2025 Open Investment by Eni Koci. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
