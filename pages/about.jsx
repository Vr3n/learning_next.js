import React from 'react';
import Navbar from '../components/Navbar';



const about = () => {
    return (
        <div>
            <Navbar />

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam autem sapiente atque dolores consequuntur. Quod, in modi. Magnam, aliquam, sequi molestias perspiciatis laudantium numquam, at ratione voluptate accusamus quis veniam.</p>

            <style jsx>
                {`p {
                    color: indigo;
                    font-size: 20px;
                }
                span {
                    border-left: 5px solid black;
                    color: red;
                    cursor: pointer;
                }
                `}
            </style>

        </div>
    )
}

export default about
