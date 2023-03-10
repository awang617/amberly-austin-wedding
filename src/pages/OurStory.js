import React, {useState} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ourStory1 from "../assets/our-story1.jpg";
import ourStory2 from "../assets/our-story2.jpg";
import ourStory3 from "../assets/our-story3.jpg";
import ourStory4 from "../assets/our-story4.jpg";

function OurStory() {
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);
    const [showStory, setShowStory] = useState(false);
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({delay:6000})])

    const handleClick = (event) => {
        setShowStory(true);
        if (event.target.name === "left" && !showLeft){
            setShowLeft(!showLeft);
            setShowRight(showLeft);
        }
        if (event.target.name === "right" && !showRight) {
            setShowLeft(showRight);
            setShowRight(!showRight);
        }
    }
    return(
        <div>
            <h2 className="text-center font-alegreya">Our Story</h2>
            {/* <img src={`${showStory ? ourStory2 : ourStory1}`} /> */}
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <img
                            src={`${ourStory1}`} 
                            title="Ready for something fun?"
                            alt="Amberly and Austin stand with their back to the camera, holding hands."
                        />
                    </div>
                    <div className="embla__slide">
                        <img
                            src={`${ourStory2}`}
                            title="What?? It's a carousel!"
                            alt="Amberly and Austin have their backs to the camera, holding hands. They are looking over their shoulders to the camera and smiling."
                        />
                    </div>
                    <div className="embla__slide">
                        <img
                            src={`${ourStory3}`}
                            title="A great way to showcase multiple photos!"
                            alt="A closer shot of Amberly and Austin's hands."
                        />
                    </div>
                    <div className="embla__slide">
                        <img
                            src={`${ourStory4}`} 
                            title="That was an amazing carousel huh? Now go see our story!"
                            alt="A black and white shot of the pose where Amberly and Austin have their backs to the camera."
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 text-center font-abhaya">
                <div><button id="amberly" name="left" className={`link text-xl md:text-3xl ${showLeft ? "font-bold no-hover underline" : ""}`} onClick={handleClick}>Her version</button></div>
                <div><button id="austin" name="right" className={`link text-xl md:text-3xl ${showRight? "font-bold no-hover underline" : ""}`} onClick={handleClick}>His version</button></div>
            </div>
            <div className="content-container">
                <div className={`${showStory ? "hidden" : ""}`}>
                    <p>
                        tl:dr We met in September 2014 during the first week college on our first year hall. After a month, we started dating and have been together ever since!
                    </p>
                    <p className="text-center">
                        Want to know more? 
                        <span className="lg:hidden"> Tap</span><span className="hidden lg:inline"> Click</span> to see the two sides of how we met!
                    </p>
                </div>
                <div className={`${showLeft && showStory ? "" : "hidden"}`}>
                    <p>My first impression of Austin was actually that he was a bit annoying! We were at one of our mandated orientation week activities, some icebreaker games in the gym, when he came over and tried to start a conversation. At first I was pretty happy to be approached by a potential new friend, but the conversation didn&apos;t inspire any friendship or affection (from my side). In fact, I even ended up forgetting his name.</p>

                    <p>So of course I was shocked when he asked me to be his homecoming date a couple days later! Our RAs just finished explaining what homecoming was like at our school and I suddenly heard a loud voice from the other side of the floor...</p>

                    <p>&quot;WHERE&apos;S AMBERLYYYY? I NEED TO TALK TO AMBERLYYYYYYY.&quot;</p>

                    <p>There was Austin, barreling down the hall in a wheely chair, pushed by one of his hallmates.</p>

                    <p>&quot;Will you go to Homecoming to me?&quot; he asked excitedly.</p>

                    <p>Everyone was riveted. Meanwhile, my soul just left my body and was halfway to the moon. After a few moments, I collected myself enough and said sure. All the boys cheered and ran back to their side of the floor. All the girls immediately turned to ask me who that was. I had to sheepishly admit that I didn&apos;t know his name. Thankfully, someone else knew him and told me his name was Austin.</p>

                    <p>Now that I was stuck with this slightly annoying person as a date for the next weekend, I decided I might as well get to know him better. We decided to explore a little bit and get burgers from our campus cafe. I wasn&apos;t sure what to expect but thank goodness for second impressions because we ended up talking for hours. I remember glancing at the clock wishing time would go more slowly because I was having so much fun! It felt like I could talk to him about anything and we ended up discovering we had a bunch of things in common.</p>

                    <p>We were both from California. We had a mutual love for Starcraft (and video games in general). Our sibling order was the same, two boys, one girl, (plus Aiden on Austin&apos;s side). All of our names start with &quot;A&quot;. I had the same birthday as his dad. He had the same name as my brother. Plus we were both Catholic.</p>

                    <p>Time passed and we continued to hang out. At some point there was even an ice cream date (that I was in denial about being a date). Each time was the same, I loved talking and hanging out with Austin. He seemed to as well. I might have had a bit of a crush on him, but didn&apos;t really see it turning into a relationship.</p>

                    <p>So once again, he surprised me when he asked if I wanted to be his girlfriend. Some of you might be reading this story thinking that this is so obvious, how could you not know Amberly? and honestly... you&apos;re not wrong. I tried to sidestep the big question and put it off for about a week before I finally agreed haha.</p>

                    <p>Years went by, we graduated, were long distance for a year, and weathered the pandemic together. In the fall of 2021, we returned to our college for an alumni reunion. Even though it should have been fairly obvious (again!), I had no idea he was going to propose that weekend. My best friend (now maid of honor!) Catherine, walked me around town to distract me until we finally came to the school&apos;s front lawn. Austin proposed, and this time I said yes right away!</p>
                    
                    <div className="text-right">
                        <a name="right" className="link underline" onClick={handleClick} href="/our-story#austin">
                            See Austin's version!
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-6 h-6 inline">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className={`${showRight && showStory ? "" : "hidden"}`}>
                    <p>
                        It will have been 9 full years of us together. Come 2024, we will have been together for 10 years. That&apos;s 37% of my life; soon to be the rest of my life. We&apos;ve been together longer than some marriages! And my brother Aiden doesn&apos;t know a life without Amberly. Like WHAT?! What happened and how do we keep this energy going?
                    </p>
                    <p>
                        Well, I don&apos;t really know. From the moment I met her, she was cold to me and was not the excited, fun-loving person she is today (bet you didn&apos;t see that coming). I struggled to understand who she was and connect with her. The first time I met her, she didn&apos;t even make eye contact with me! Although, understandably, a stranger you are forced to meet in college is pretty intimidating.
                    </p>
                    <p>
                        Yet here we are! Past our bumps on the road here and stronger than ever in our relationship.
                    </p>
                    <p>
                        I could tell you all about our journey together and how we overcame the most difficult of times or the best of times. But, I&apos;d like to focus on why I decided to continue this journey with her and to commit my life with her. 
                    </p>
                    <p>
                        It&apos;s important to always assess where you are in life, be it in your career, mental well-being, hobbies and so much more. A relationship is complicated. You have to work together. You have to understand each other. You must grow together.
                    </p>
                    <p>
                        I kept my mind on that last part. Every year, I asked “Did my love for her grow?” It should plateau at some point right? Nothing grows forever! 
                    </p>
                    <p>
                        And yet, it kept going… and going… and going… and going up. Every year, I was shocked at myself but smiled so hard thinking about all the joyous moments that year I spent with her. 
                    </p>
                    <p>
                        At a certain point, it was far long enough. My love for her had grown for seven years straight. That is a high bar to clear for anyone. I will not find someone like her ever again. And here we are!
                    </p>
                    <p>
                        The best advice I heard was “Marriage will be difficult. You can&apos;t do anything to change that. But, taking more time to grow your relationship will help transition to marriage.” I guess I took this too seriously.
                    </p>
                    <p>
                        Now here we are! I can&apos;t even imagine what&apos;s next! 
                    </p>
                    <div className="text-left">
                        <a name="left" className="link underline" onClick={handleClick} href="/our-story#amberly">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-1 w-6 h-6 inline">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            See Amberly's version!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurStory;