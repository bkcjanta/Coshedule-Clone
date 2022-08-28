export default function Footer(){
    return (
        <>
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
        </>
    )
}