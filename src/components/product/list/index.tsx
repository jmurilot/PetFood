import './styles.css';

const Product = () => {
    return (
        <div className="product-list col-12">
            <div className="row">
                <div className="col-3">
                        <img
                         src="https://images.tcdn.com.br/img/img_prod/1126897/90_racao_nero_premium_para_caes_adultos_carne_com_batatas_15kg_2801_2_821104293dba065f2a7991a6c0901842.jpg" 
                         className="img-fluid"/>
                    </div>
                    <div className="col-6">
                        <h6>
                            <label className='badge text-bg-primary'>R$ 30,00</label>
                        </h6>
                        <small>
                            <b>
                                Ração umida nestle purina Dog 
                                Chow Extra Life Sache
                                para Cães filhotes - 100g
                            </b>
                        </small>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-secondary rounded-circle">-</button>
                    </div>
                </div>
            </div>
    )
}

export default Product;