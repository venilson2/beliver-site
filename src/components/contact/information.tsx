import Map from "./Map"
import Form from "./form"

const Information = () => {
    return (
        <>
            <div id="content" className="site-content">
                <div className="wrapper">
                    <div className="entry-content">
                        <div className="block-columns text-center">
                            <div className="block-column">
                                <h4>Endereço</h4>
                                <p className="text-faded text-uppercase">Rua Henrique Muzzio, 396<br />Jardim Varginha<br /> São Paulo - SP, 04857-040</p>
                            </div>
                            <div className="block-column">
                                <h4>Nosso Email</h4>
                                <p className="text-faded text-uppercase">geracaosamuel@gmail.com</p>
                            </div>
                            {/* <div className="block-column">
                                <h4>Phone details</h4>
                                <p className="text-faded text-uppercase">+1 2345 678 910<br>+8 2234 835 199</p>
                            </div> */}
                        </div>
                        <Map />
                        <br />
                        <Form />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Information