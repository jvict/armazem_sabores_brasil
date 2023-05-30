import { useRouter } from "next/router";

export const Item = () => {
    const route = useRouter()
    return (
        <>
            <div className={"container-item"} >
                <img
                    src="./cesta-de-compras.svg"
                // src={isTaskFinished ? '/checked.svg' : '/not-checked.svg'}
                // alt={isTaskFinished ? 'Tarefa concluída' : 'Tarefa em aberto'}
                />
                <div onClick={() => route.push('/budget')}>
                    <p>
                        Orçamento 1
                    </p>
                    <span>{new Date().getFullYear()}</span>
                </div>
            </div>
        </>
    )
}