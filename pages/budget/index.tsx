import { Footer } from "@/components/Footer";
import { Form } from "@/components/Form";
import { Header } from "@/components/Header";


const Budget = () => {
    return (
        <div style={{
            height: '100%',
            width:'100%',
            fontFamily: 'Biennale Regular',
            display: 'flex',
            flexDirection:"column",
            justifyContent:"space-between"
        }}>
            <Header />
            <Form />
            <Footer />
        </div>
    )
}

export default Budget;