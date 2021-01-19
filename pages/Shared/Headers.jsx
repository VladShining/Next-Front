import headers from  "../../styles/headers.module.scss";
import profil from "../../public/img/profil.png";
import React from "react";

export default function Headers(){
    return (
        <div className={headers.header}>
            <img src={profil} alt=""/>
            <p>
                I'm <span>493.649</span> Developer front , designer.
            </p>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, corporis! Labore error sequi temporibus velit possimus incidunt quidem dolore omnis ducimus! Facere minus quos nulla! Eaque distinctio id minima nobis?
        </div>
    )
}