import React from "react";
import { Item } from "./Item";
import { useRouter } from "next/router";

export const List = () =>{
    const router = useRouter();
    return(
        <>
            <div className="container-list">
                <Item/>
                <button onClick={()=> router.push("/budget")}>
                    <span>+</span> 
                    Criar Orçamento
                </button>
            </div>
        </>
    )
}