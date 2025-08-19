import Header from "../../components/header";
import Product from "../../components/product/list";
import './styles.css'

const Checkout = () => {
    return (
    <div className="h-100">
        <Header whiteversion={false}/>
        <div className="container mt-4">
            <div className="row">
                <div className="col-6">
                    <span className="section-title">Dados de entrega</span>
                    <div className="row mb-3">
                        <div className="col-12">
                            <input 
                            type="text"
                            placeholder="CEP"
                            className="form-control form-control-lg"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">
                            <input 
                            type="text"
                            placeholder="Cidade"
                            className="form-control form-control-lg"/>
                        </div>
                        <div className="col-6 ps-0">
                            <input 
                            type="text"
                            placeholder="Logradouro"
                            className="form-control form-control-lg"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-5">
                            <input 
                            type="number"
                            placeholder="Numero"
                            className="form-control form-control-lg"/>
                        </div>
                        <div className="col-5 ps-0">
                            <input 
                            type="text"
                            placeholder="Bairro"
                            className="form-control form-control-lg"/>
                        </div>
                        <div className="col-2 ps-0">
                            <input 
                            type="text"
                            placeholder="UF"
                            className="form-control form-control-lg"/>
                        </div>
                    </div>

                    <span className="section-title">Dados de Pagamento</span>
                    <div className="row mb-3">
                        <div className="col-12">
                            <input 
                            type="text"
                            placeholder="Numero do cartao"
                            className="form-control form-control-lg"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">
                            <input 
                            type="text"
                            placeholder="Validade"
                            className="form-control form-control-lg"/>
                        </div>
                        <div className="col-6 ps-0">
                            <input 
                            type="text"
                            placeholder="CVV"
                            className="form-control form-control-lg"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">
                            <input 
                            type="text"
                            placeholder="Nome do titular"
                            className="form-control form-control-lg"/>
                        </div>
                        <div className="col-6 ps-0">
                            <input 
                            type="text"
                            placeholder="CPF / CNPJ do titular"
                            className="form-control form-control-lg"/>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <b>Total:</b>
                            <h3>R$79,90</h3>
                        </div>
                        <div className="col-12">
                            <button className="btn  btn-lg btn-primary w-100">Finalizar Compra</button>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div 
                    className="box col mb-4 box-sidebar">
                        <h4>Minha Sacola (5)</h4>

                        <div className="row products">
                            {[1,2,3,4,5,6,7,8,9].map ((p) => (
                                <Product />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Checkout;