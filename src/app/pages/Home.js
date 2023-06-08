import React from "react";
import landing from "../../assets/landing.jpg";
import { ChatBubbleLeftRightIcon, EnvelopeIcon, GiftIcon } from '@heroicons/react/24/outline';

function Home () {
    return(
        <div>
            <img 
                src={landing}
                title="Welcome to our website! We hope you enjoy your stay!"
                alt="Austin stands to the left side of Amberly, who is sitting down. They are gazing at each other while smiling."
                className="mb-6 md:w-1/2 md:mx-auto lg:w-full"/>
            <div className="content-container">
                <div className="text-center">
                    <h2 className="font-windsong">
                        Make a wish, it&apos;s...<br />
                    </h2>
                    <h2 className="font-abhaya tracking-widest">11 | 11<br />2023</h2>
                    <p>
                        We can&apos;t wait to see you at our wedding!
                    </p>
                    <div className="grid grid-cols-9 xs:grid-cols-7">
                        <div className="text-right col-span-2 xs:col-span-2 sm:col-span-3 font-alegreya">
                            <p>When:</p>
                            <p>Where:</p>
                            <p>Ceremony:</p>
                            <p>Reception:</p>
                        </div>
                        <div className="text-left col-span-7 xs:col-span-5 sm:col-span-4 ml-3">
                            <p>Saturday, November 11, 2023</p>
                            <p>San Jose, California</p>
                            <p>Five Wounds Church</p>
                            <p>Blanco, Urban Venue</p>
                        </div>
                    </div>
                    <p className="lg:w-4/5 mx-auto">
                        Come celebrate with us as we turn seven years of dating (and two years engaged)<br />into our first year as Mr. and Mrs.!<br/>Keep this website bookmarked as it'll be your one stop shop for everything you need to know! The wedding is quite far away but our excitement is only going UP FROM HERE!! 
                    </p>

                    <hr />
                </div>

                <h3 className="mt-3 font-abhaya text-center">In the meantime...</h3>
                <div className="text-left px-1.5 grid md:grid-cols-2 grid-cols-1 gap-4 lg:w-4/5 mx-auto">
                    <div>
                        <p className="mt-3 pl-7 indent-hanging-8">
                            <EnvelopeIcon className="w-6 h-6 inline mr-2" />
                            Remember to RSVP so we can count you in the celebration!
                        </p>
                        <div className="text-center">
                            <button className="btn secondary">
                                <a href="/rsvp" className="no-hover-btn-secondary">RVSP</a>    
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className="mt-3 pl-7 indent-hanging-8">
                            <GiftIcon className="w-6 h-6 inline mr-2"/>
                            Your presence is a gift, but if you'd like to send anything, please see our registry.
                        </p>
                        <div className="text-center">
                            <button className="btn secondary">
                                <a href="/registry" className="no-hover-btn-secondary">Registry</a>    
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-1.5 md:px-0 lg:w-4/5 mx-auto">
                    <p className="text-left mt-3 pl-7 indent-hanging-8">
                        <ChatBubbleLeftRightIcon className="w-6 h-6 inline mr-2" />
                        Check out our wedding discord! You'll find LIVE UPDATES from us and our wedding planner Sonya so you don't want to miss out! Also interact with other guests ahead of the wedding!
                    </p>
                    <div className="text-center">
                        <button id="discordLink" className="btn primary">
                            <a href="https://discord.gg/2gadwjqDNR" className="no-hover-btn">Join our Discord</a>
                        </button>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Home;