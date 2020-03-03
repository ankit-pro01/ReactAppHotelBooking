import React from "react";
import classes from "./landingPage.module.css";
import Aux from "../../HOC/Auxc/Auxi";
import TravelPlanImg from "../../assets/img/draw/travelPlans.svg";
import BookedImg from "../../assets/img/draw/booked.svg";

const landingPage = (props) => {
    return(
        <Aux>
            <section className = {classes.section}>
                <div>
                    <h1>WELCOME TO HUMSATHI...</h1>
                    <p>Eiusmod cillum proident anim excepteur et veniam et exercitation minim amet incididunt reprehenderit. Esse minim in id magna exercitation. Deserunt sint aliqua Lorem ea deserunt. Quis mollit excepteur eu reprehenderit ullamco esse labore.</p>
                    <p></p>
                    <img src = {BookedImg}></img>
                    <p>Voluptate esse laboris nulla proident sint aliquip nulla fugiat laboris anim elit reprehenderit reprehenderit. Pariatur veniam culpa irure ullamco consequat voluptate aliqua excepteur in. Adipisicing aute nostrud ullamco sunt minim nulla eu enim ut qui commodo dolore. Voluptate pariatur irure aliquip elit do. Ipsum anim aute nisi magna esse qui velit veniam aute ea id. Ea consectetur aute Lorem nostrud ad quis exercitation. Deserunt minim voluptate minim ex consectetur cillum aute sint quis et est incididunt.

                    Do ipsum cupidatat culpa cupidatat ad. Irure veniam ut eiusmod esse ullamco aute aliquip labore est laboris sit voluptate. Deserunt consectetur mollit reprehenderit nostrud aliquip nisi est duis id dolore.

                    Ex voluptate quis sit sit pariatur cillum consequat sint aliquip elit fugiat in. Quis do commodo Lorem commodo Lorem tempor laboris cillum adipisicing consectetur fugiat nulla consectetur. Eu culpa exercitation qui consequat ullamco pariatur adipisicing aute elit. Proident incididunt cupidatat consectetur qui deserunt fugiat. Nostrud deserunt incididunt sunt laborum exercitation sit eiusmod et veniam id est. Velit eu deserunt proident pariatur id in tempor voluptate. Incididunt dolor magna culpa do ea nulla deserunt deserunt ex deserunt irure ex.</p>
                    <img src= {TravelPlanImg}></img>
                </div>
               
            </section>  
        </Aux>

    )
}


export default landingPage;