import React from "react";
import classes from "./landingPage.module.css";
import Aux from "../../HOC/Auxc/Auxi";
import TravelPlanImg from "../../assets/img/draw/travelPlans.svg";
import BookedImg from "../../assets/img/draw/booked.svg";
import headImage from "../../assets/img/landingpage/landingImage3.jpg";
import image1 from "../../assets/img/rooms/room1.jpg";
import image2 from "../../assets/img/rooms/room10.jpg";
import image3 from "../../assets/img/rooms/room15.jpg";
import image4 from "../../assets/img/rooms/room7.jpg";
import image5 from "../../assets/img/rooms/room9.jpeg";
import image6 from "../../assets/img/rooms/room4.jpg";
import image7 from "../../assets/img/rooms/room5.jpg";
import image8 from "../../assets/img/rooms/room11.jpg";

const landingPage = () => {
    return(
        <Aux>
            <section className = {classes.section}>
                    <header className = {classes.heading}>
                        <div>
                            <h1>WELCOME TO KAKSHH...</h1>
                            <img src = {headImage}></img>
                        </div>
                    </header>
                    <main className = {classes.main}>
                        <p>Sit cupidatat pariatur commodo incididunt ex culpa do ex aliqua do enim culpa. Aliquip et pariatur do occaecat velit culpa dolor deserunt tempor laboris qui enim minim. Laboris pariatur consequat fugiat nulla tempor adipisicing adipisicing qui. Tempor pariatur minim sit anim sunt labore eiusmod duis eu sunt.</p> 

                        <article>
                            <div>
                                <h2>Contents</h2>
                                <div className = {classes.rooms}>
                                    <div className = {classes.box}>
                                        <img src = {image1}></img>
                                        <p className = {classes.name}>single bed Room</p>
                                        <p>Nostrud sint voluptate eu deserunt et esse aliquip mollit nisi aute eiusmod eiusmod nostrud amet. </p>
                                    </div>
                                    <div className = {classes.box}>
                                        <img src = {image2}></img>
                                        <p className = {classes.name}>double bed Room</p>
                                        <p>Nostrud sint voluptate eu deserunt et esse aliquip mollit nisi aute eiusmod eiusmod nostrud amet. </p>
                                    </div>
                                    <div className = {classes.box}>
                                        <img src = {image3}></img>
                                        <p className = {classes.name}>luxury bed Room</p>
                                        <p>Nostrud sint voluptate eu deserunt et esse aliquip mollit nisi aute eiusmod eiusmod nostrud amet. </p>
                                    </div>
                                </div>
                                
                            </div>

                        </article>
                      

                        <div className = {classes.div1}>
                            <img src = {BookedImg}></img>
                            <p>Voluptate esse laboris nulla proident sint aliquip nulla fugiat laboris anim elit reprehenderit reprehenderit. Pariatur veniam culpa irure ullamco consequat voluptate aliqua excepteur in. Adipisicing aute nostrud ullamco sunt minim nulla eu enim ut qui commodo dolore.
                                Ipsum et ex consectetur sunt culpa qui magna mollit anim. Occaecat eu officia est consectetur voluptate. Cupidatat aliqua enim enim do veniam ullamco sit.
                                Consequat est aute culpa fugiat amet ut reprehenderit officia consectetur incididunt sunt. Exercitation qui aliqua nisi laborum exercitation aute consequat culpa. Quis excepteur in sint Lorem pariatur cillum sit. Adipisicing aute sit officia dolor est. Occaecat aliquip Lorem ea ex eiusmod proident occaecat veniam adipisicing. Nisi fugiat ea deserunt eiusmod commodo cillum tempor.
                            </p>
                        </div>
                        <h2>Gallery</h2>
                        <div className = {classes.sliderHood}>
                            <div className = {classes.slider}>
                                <img src= {image4}></img>
                                <img src= {image5}></img>
                                <img src= {image6}></img>
                                <img src= {image7}></img>
                                <img src= {image8}></img>
                            </div>
                        </div>
                        <div className = {classes.div2}>    
                            <p>Do ipsum cupidatat culpa cupidatat ad. Irure veniam ut eiusmod esse ullamco aute aliquip labore est laboris sit voluptate. Deserunt consectetur mollit reprehenderit nostrud aliquip nisi est duis id dolore.
                                Laboris esse do culpa non reprehenderit velit nisi esse magna eiusmod deserunt. Labore ea cupidatat velit eu labore consequat consectetur est commodo. Sint id nostrud enim id consequat sunt do voluptate. Qui tempor laborum ullamco tempor labore est. Reprehenderit ad quis adipisicing aliqua ut laborum mollit occaecat reprehenderit laborum cillum non veniam consequat. In laboris ad est laboris culpa id consequat duis qui officia elit qui.
                            Do elit aliquip incididunt nostrud. Nostrud ipsum sit id eiusmod deserunt eu. Et et reprehenderit esse nulla sunt culpa et reprehenderit nostrud sit Lorem anim. Anim esse sit aliqua excepteur.</p>
                            <img src= {TravelPlanImg}></img>
                        </div>
                        
                    </main>
            </section>  
            <footer>
                <div className = {classes.footer}>
                    <div>
                        <ul><strong>ABOUT US</strong>
                            <li>loreum</li>  
                            <li>loreum</li>    
                            <li>loreum</li> 
                            <li>loreum</li> 
                        </ul>
                    </div>
                    <div></div>
                    <ul><strong>FOLLOW US</strong>
                        <li><a href ="#">Insta</a></li>
                        <li><a href ="#"><i className="fab fa-facebook"></i>facebook</a></li>
                        <li><a href ="#">linkdin</a></li>
                    </ul>
                        
                    <div>
                        <ul><strong>CONTACT</strong>
                            <li>phone : 9999999</li>
                            <li>fax : 0000</li>
                            <li>mail : abc@gmail.com</li>
                        </ul>
                    </div>
                    <p>copyright all right reserved ::Ankit::</p>
                </div>
            </footer>
            
        </Aux>

    )
}


export default landingPage;