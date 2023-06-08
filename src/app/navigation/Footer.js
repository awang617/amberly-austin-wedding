import { ChatBubbleLeftRightIcon, EnvelopeIcon, HashtagIcon, SparklesIcon } from "@heroicons/react/24/outline";
import React from "react";

function Footer(props) {
    return(
        <div>
            <div className="mt-32 content-container font-alegreya pb-10">
                <hr />
                <div className="mt-5 grid-cols-3 grid">
                    <div className="col-span-2 md:col-span-1">
                        <div>
                            <SparklesIcon className="w-6 h-6 inline mr-2"/>
                            Make a wish, it's 11.11.
                        </div>
                        <div className="md:hidden">
                            <a href="https://discord.gg/2gadwjqDNR">
                                <ChatBubbleLeftRightIcon className="w-6 h-6 inline mr-2" />
                                Join our Discord
                            </a>
                        </div>
                        <div className="md:hidden">
                            <a href="mailto:sonya@eventsbysonya.com">
                                <EnvelopeIcon className="w-6 h-6 inline mr-2" />
                                Contact Sonya
                            </a>
                        </div>
                        <div>
                            <HashtagIcon className="w-6 h-6 inline mr-2"/>
                            ChoifullyEverAfter
                        </div>
                    </div>

                    <div className="text-right md:text-center">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/rsvp">Rsvp</a></li>
                            <li><a href="/our-story">Our Story</a></li>
                            <li><a href="/wedding-party">Wedding Party</a></li>
                            <li><a href="/schedule">Schedule</a></li>
                            <li><a href="/travel">Travel</a></li>
                            <li><a href="/registry">Registry</a></li>
                            <li><a href="/faqs">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="text-center md:text-right hidden md:block">
                        <div>
                            <a href="https://discord.gg/2gadwjqDNR">
                                <ChatBubbleLeftRightIcon className="w-6 h-6 inline mr-2" />
                                Join our Discord
                            </a>
                        </div>
                        <div>
                            <a href="mailto:sonya@eventsbysonya.com">
                                <EnvelopeIcon className="w-6 h-6 inline mr-2" />
                                Contact Sonya
                            </a>
                        </div>
                    </div>

                </div>
                <div className="text-center mt:5 md:mt-7">
                    created and designed by<br/>Amberly Wang 2023
                </div>
            </div>
        </div>
    )
}

export default Footer;