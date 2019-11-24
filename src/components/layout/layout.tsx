import  React from "react"
//import CustomButton from "../button/button"
import  "./layout.css"
import image1 from "./layoutImages/img1.jpg"
import image2 from "./layoutImages/img2.png"
import image3 from "./layoutImages/img3.jpg"
import image4 from "./layoutImages/img4.jpg"
import image5 from "./layoutImages/img5.jpg"
import image6 from "./layoutImages/img6.jpg"


const Layout: React.FC = () => {


    const names:string[] = ["VEREIN", "ABTEILUNGEN", "VEREIN", "KURZ & KNACKIG","PROFIS","VEREIN","AKTION"];
    const buttonItems = names.map((name:string) => <button className={"container__fluid__button"} key={Math.random()*10}>{name}</button>);
    const articles_right:{image:any,name:string,description:string,description2:string,tag:string}[]=[
        {name:"name5",description:"Pauli gab es nach dem 1:1-Unentschieden beim VfL Osnabrück nur ein Thema. Youba", description2:"Beim FC St. Pauli gab es nach dem 1:1-Unentschieden beim VfL Osnabrück nur ein Thema. Youba Diarra flog 17 Minuten nach seiner Einwechslung vom Platz.",tag:"tag",image:image5},
        {name:"name6",description:"Beim FC St. Pauli gab es nach dem 1:1-Unentschieden beim VfL Osnabrück nur ein Thema. Youba Diarra flog 17 Minuten nach seiner Einwechslung vom Platz.",description2:"Beim FC St. Pauli gab es nach dem 1:1-Unentschieden beim VfL Osnabrück nur ein Thema. Youba Diarra flog 17 Minuten nach seiner Einwechslung vom Platz.",tag:"tag",image:image6},
        {name:"name7",description:"Beim FC St. Pauli gab es nach dem 1:1-Unentschieden beim VfL Osnabrück nur ein Thema. Youba Diarra flog 17 Minuten nach seiner Einwechslung vom Platz.",description2:"desc2",tag:"tag",image:image2},
        {name:"name8",description:"Beim FC St. Pauli gab es nach dem 1:1-Unentschieden beim VfL Osnabrück nur ein Thema. Youba Diarra flog 17 Minuten nach seiner Einwechslung vom Platz.",description2:"desc2",tag:"tag",image:image3},
        ]

    const articleList_right=articles_right.map((list)=>(
        <div key={list.name} className="card_right">
            <img src={list.image}  alt="Avatar"  className={"avatar"}/>
                <div className="container">
                    <h1 className={"redColor"}><b>{list.name}</b></h1>
                    <p>{list.description2}</p>
                    <p className={"redColor"}>{list.tag}</p>
                    <p>{list.description}</p>
                </div>
        </div>
 ))



    const articles_left:{image:any,name:string,description:string,description2:string,tag:string}[]=[
        {name:"name1",description:"Beim FC St. Pauli gab es nach dem 1:1-Unentschieden beim VfL Osnabrück nur ein Thema. Youba Diarra flog 17 Minuten nach seiner Einwechslung vom Platz.",description2:"Beim FC St. Pauli gab es nach dem 1:1-Unentschieden beim VfL Osnabrück nur ein Thema. Youba Diarra flog 17 Minuten nach seiner Einwechslung vom Platz.",tag:"tag",image:image1},
        {name:"name2",description:"Beim FC St. Pauli gab es nach dem 1:1-Unentschieden beim VfL Osnabrück nur ein Thema. Youba Diarra flog 17 Minuten nach seiner Einwechslung vom Platz.",description2:"Beim FC St. Pauli gab es nach dem 1:1-Unentschieden beim VfL Osnabrück nur ein Thema. Youba Diarra flog 17 Minuten nach seiner Einwechslung vom Platz.",tag:"tag",image:image2},
        {name:"name3",description:"Beim FC St. Pauli gab es nach dem 1:1-Unentschieden beim VfL Osnabrück nur ein Thema. Youba Diarra flog 17 Minuten nach seiner Einwechslung vom Platz.",description2:"Beim FC St. Pauli gab es nach dem 1:1-Unentschieden beim VfL Osnabrück nur ein Thema. Youba Diarra flog 17 Minuten nach seiner Einwechslung vom Platz.",tag:"tag",image:image3},
        {name:"name4",description:"Beim FC St. Pauli gab es nach dem 1:1-Unentschieden beim VfL Osnabrück nur ein Thema. Youba Diarra flog 17 Minuten nach seiner Einwechslung vom Platz.",description2:"Beim FC St. Pauli gab es nach dem 1:1-Unentschieden beim VfL Osnabrück nur ein Thema. Youba Diarra flog 17 Minuten nach seiner Einwechslung vom Platz.",tag:"tag",image:image4},

    ]
    const articleList_left=articles_left.map((list)=>(
        <div key={list.name} className="card_left">
            <img src={list.image}  alt="Avatar"  className={"avatar"}/>
            <div className="container">
                <h1 className={"redColor"}><b>{list.name}</b></h1>
                <p>{list.description2}</p>
                <p className={"redColor"}>{list.tag}</p>
                <p>{list.description}</p>
            </div>
        </div>
    ))
    return(
        <div className={"layout"}>
                <div className={"main__photo"}>
                        <div className={"slider__photo"}>
                                 <div  className={"container__fluid"}>
                                     {buttonItems}
                                </div>
                                <div>
                                        <h1 className={"container__fluid__text"}>
                                                <span>ZAHLEN, DATEN & FAKTEN ZUR SAISON 2017/18 - TEIL 2</span>
                                        </h1>
                                </div>
                        </div>
                </div>
                <main className={"row"}>
                        <div className={"left__mansory"}>
                            {articleList_left}
                        </div>
                        <div className={'right__mansory'}>
                            {articleList_right}
                        </div>
                </main>
        </div>


    )
}
export default Layout