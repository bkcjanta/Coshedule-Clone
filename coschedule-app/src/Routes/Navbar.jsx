import React from "react";
export default function Navbar() {
    return (
        <>
            <div id="navbar" className="navbar">
                <div className="navbar">
                    <div className="navbar">
                        <img src="data:image/png;base64,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" alt="" />
                        <div className="navbar">
                            <div id="menu-1">
                                <h4>Products</h4>
                                <div id="product-hover" className="pro-hover">
                                    <div className="pro-hover-left">
                                        <h4>CONTENT CALENDARS</h4>
                                        <div>
                                            <img src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-calendar-product-icon.png&w=48&q=75" alt="" />
                                            <div>
                                                <h2>Marketing Calendar</h2>
                                                <p>A calendar that helps you see, schedule, and share your marketing.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-suite-product-icon.png&w=48&q=75" alt="" />
                                            <div>
                                                <h2>Marketing Suite</h2>
                                                <p>A family of agile marketing products to coordinate your team, projects, and process.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pro-hover-right">
                                        <h4>CONTENT OPTIMIZATION</h4>
                                        <div>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgu3FV8u0EI_7lrDZkiEZcmqVDQBLt_BVUOAZWcYvNkw&s" alt="" />
                                            <h4>Headline Studio</h4>
                                        </div>
                                        <h4>MARKETING EDUCATION</h4>
                                        <div>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSg8iW2KrTZfA3GDfNNfTHg5nkSLqy0sE5gY9C19NRUQ&s" alt="" />
                                            <h4>Actionable Marketing Institute</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4>Why CoSchedule</h4>
                            <h4>Resources</h4>
                            <h4>Pricing</h4>
                        </div>
                    </div>
                </div>
                <div className="navbar">
                    <h4>Sign In</h4>
                    <h4>Get A Demo</h4>
                    <h4 className="create" style={{ color: "white" }}>Craete My Calculator</h4>
                </div>
            </div>
            <div className="mid">
                <h1 className="tag">Organize All Of Your Marketing In One Place. From Any Place.</h1>
                <p style={{ fontSize: "18px" }}>Get more done in less time with the only work management software for marketers.</p>
                <h4 className="create" style={{ width: "150px" }}>Get Started Free</h4>
                <p style={{ fontSize: "14px", marginTop: "20px" }}>Why not? It's free forever.</p>
            </div>

            <div className="client">
                <img id="mid-img" src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhome-calendar.png&w=3840&q=75" alt="img" />
                <h2>30,000 marketers start their day with CoSchedule</h2>
                <div className="client-img">
                    <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fforbes-logo.webp&w=384&q=75" alt="" />
                    <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fyamaha-logo.webp&w=384&q=75" alt="" />
                    <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Funicef-logo.webp&w=384&q=75" alt="" />
                    <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fvericast-logo2.webp&w=384&q=75" alt="" />
                    <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fwalgreens-logo.webp&w=384&q=75" alt="" />
                    <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fdictionary-com-logo.webp&w=384&q=75" alt="" />
                    <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fp-and-g-logo.webp&w=384&q=75" alt="" />
                    <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fschwans-logo.webp&w=384&q=75" alt="" />
                </div>
            </div>
            <div className="products-section">
                <h1 style={{ textAlign: "center" }}>Our Products</h1>
                <div className="product-container">
                    <div className="product">
                        <img src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1920&q=100" alt="" />
                        <div className="p-details">
                            <h2>Marketing Calendar</h2>
                            <p>A calendar that helps you see, schedule, and share your marketing.</p>
                            <ul className="ul-1">
                                <li>See everything together in one place</li>
                                <li>Share your progress with higher-ups</li>
                                <li>Show what your marketing is doing</li>
                            </ul>
                            <h4 className="exp-1">Explore More</h4>
                        </div>
                    </div>
                    <div className="product">
                        <img src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fsuite-product-background.png&w=1920&q=100" alt="" />
                        <div className="p-details">
                            <h2>Marcketing Suite</h2>
                            <p>A family of agile marketing products to coordinate your team, projects, and process.</p>
                            <ul className="ul-1">
                                <li>Manage marketing requests</li>
                                <li>Eliminate content bottlenecks</li>
                                <li>Maximize resources to increase output</li>
                            </ul>
                            <h4 className="exp-1">Explore More</h4>
                        </div>
                    </div>
                    <div className="product">
                        <img src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhs-product-background.png&w=1920&q=100" alt="" />
                        <div className="p-details">
                            <h2>Headline Studio</h2>
                            <p>Write better headlines that will boost your traffic.</p>
                            <ul className="ul-2">
                                <li>Share your progress with higher-ups</li>
                                <li>Improve headlines with smart suggestions</li>
                                <li>Find the high-scoring words instantly</li>
                            </ul>
                            <h4 className="exp-2">Explore More</h4>
                        </div>
                    </div>
                    <div className="product">
                        <img src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fami-product-background.png&w=1920&q=100" alt="" />
                        <div className="p-details">
                            <h2>Actionable Marketing Institute</h2>
                            <p>Develop new marketing skills in 30 minutes (or less).</p>
                            <ul className="ul-2">
                                <li>Improve your marketing with fluff-free training</li>
                                <li>Spend less time learning & more time doing</li>
                                <li>Learn from industry pros you trust</li>
                            </ul>
                            <h4 id="h" className="exp-2">Explore More</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grow-section">
                <h1>The fastest growing marketing work management software</h1>
                <p>CoSchedule is trusted by 30,000 marketers in 100+ countries.</p>
                <div className="grow-container">
                    <div className="grow">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_wMKQgtm91Oldg-9TNLDAr3fHa5qojZ_2Zep2-W5aeXFo9qmiesbZzLUoF_Q63UY0w&usqp=CAU" alt="" />
                        <p>The Gartner Magic Quadrant™ for Content Marketing Platforms 2022</p>
                    </div>
                    <div className="grow">
                        <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Finc-5000-logo.png&w=384&q=75" alt="" />
                        <p>The Gartner Magic Quadrant™ for Content Marketing Platforms 2022</p>
                    </div>
                    <div className="grow">
                        <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fg2crowd-badge.png&w=256&q=75" alt="" />
                        <p>The Gartner Magic Quadrant™ for Content Marketing Platforms 2022</p>
                    </div>
                </div>
            </div>
            <div className="org-section">
                <h1>Organize all of your marketing in one place</h1>
                <h4 id="get-start" style={{ width: "180px", backgroundColor: "white", color: "#f37e5d", cursor: "pointer" }}>Get Started Free</h4>
            </div>
            <div id="footer">
                <div className="left-footer">
                    <img src="data:image/png;base64,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" alt="" />
                    <p>Sign Up</p>
                    <p>Request A Demo</p>
                    <p>Sign In</p>
                    <div className="img-logo">
                        <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fg2crowd-badge.png&w=96&q=75" alt="" />
                        <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fgartner-badge.png&w=128&q=75" alt="" />
                        <img src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fforbes-badge.png&w=96&q=75" alt="" />
                    </div>
                </div>


                <div className="right-footer">
                    <div>
                        <h3>PRODUCTS</h3>
                        <div className="footer-icon">
                            <img src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-calendar-product-icon.png&w=48&q=75" alt="" />
                            <p>Marketing Calendar</p>
                        </div>
                        <div className="footer-icon">
                            <img src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-suite-product-icon.png&w=48&q=75" alt="" />
                            <p>Marketing Suite</p>
                        </div>
                        <div className="footer-icon">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgu3FV8u0EI_7lrDZkiEZcmqVDQBLt_BVUOAZWcYvNkw&s" alt="" />
                            <p>Headline Studio</p>
                        </div>
                        <div className="footer-icon">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSg8iW2KrTZfA3GDfNNfTHg5nkSLqy0sE5gY9C19NRUQ&s" alt="" />
                            <p>Actionable Marketing Institute</p>
                        </div>
                    </div>
                    <div>
                        <h3>WHY COSCHEDULE</h3>
                        <p>Customer Stories</p>
                        <p>Support</p>
                        <p>Product Announcements</p>
                        <p>Pricing</p>
                    </div>
                    <div>
                        <h3>COMPANY</h3>
                        <p>About</p>
                        <p>Jobs</p>
                        <p>Press</p>
                        <p>Contact Us</p>
                    </div>
                    <div>
                        <h3>RESOURCES</h3>
                        <p>Marketing Blog</p>
                        <p>CoSchedule Guide</p>
                        <p>Marketing Strategy Report</p>
                    </div>
                    <div>
                        <h3>TOPIC LIBRARIES</h3>
                        <p>Marketing</p>
                        <p>Marketing Ideas</p>
                        <p>Marketing Strategy</p>
                        <p>Content Marketing</p>
                    </div>
                    <div>
                        <h3>TOOLS</h3>
                        <p>Headline Analyzer</p>
                        <p>Email Subject Line Tester</p>
                        <p>Social Message Optimizer</p>
                        <p>Marketing Dictionary</p>
                    </div>
                </div>
            </div>

            <div className="why-container">
                <div className="why">
                    <h4>Customer Stories</h4>
                    <p>See how CoSchedule customers have found success.</p>
                </div>
                <div className="why">
                    <h4>Build Your Case for CoSchedule</h4>
                    <p>Get your custom ROI report & see what your team could save by switching to CoSchedule!</p>
                </div>
            </div>



        </>


    )
}