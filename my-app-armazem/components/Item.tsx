import React from "react";

export const Item = () =>{
    return(
        <>
            <div className={"container-item"} >
            <img
                src="./cesta-de-compras.svg"
                // src={isTaskFinished ? '/checked.svg' : '/not-checked.svg'}
                // alt={isTaskFinished ? 'Tarefa concluída' : 'Tarefa em aberto'}
            />
            <div>
                <p>
                    Orçamento 1
                </p>
                <span>{new Date().getFullYear()}</span>
            </div>
        </div>
        </>
    )
}