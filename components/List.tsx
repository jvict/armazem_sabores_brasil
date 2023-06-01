import { useRouter } from "next/router";
import { Item } from "./Item";

export const List = () => {
    const router = useRouter();
    return (
        <>
            <div className="container-list">
                <Item />
                <button onClick={() => router.push("/budget")}>
                    <span>+</span>
                    Criar Orçamento.
                </button>
            </div>
        </>
    )
}