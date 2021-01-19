import headers from  "../../styles/headers.module.scss";
import React from "react";
import Image from "next/image";

export default function Headers(){
    return (
        <div className={headers.header}>
               <Image className ={headers.image} src="/img/profil.png" alt="" width={300} height={300}/>
            <p>
                I'm <span>493.649</span> Developer front , designer.
            </p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, corporis! Labore error sequi temporibus velit possimus incidunt quidem dolore omnis ducimus! Facere minus quos nulla! Eaque distinctio id minima nobis?
        </div>
    )
}