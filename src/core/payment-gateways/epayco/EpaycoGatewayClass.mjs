
import PaymentGatewayClass from "../../PaymentGatewayClass.mjs";
import EpaycoProcessorPayment from "./EpaycoProcessorPayment.mjs";

class EpaycoGatewayClass extends PaymentGatewayClass {

    constructor(requestData) {
        super();
        this.data = {
            //Parametros(obligatorios)
            name: requestData?.name,
            description: requestData?.description,
            invoice: requestData?.bill,
            currency: requestData?.badge,
            amount: requestData?.quantity,
            tax_base: requestData?.baseRate,
            tax: requestData?.rate,
            country: requestData?.country,
            lang: requestData?.lang,            
            confirmation: requestData?.webhook,            
            method: 'POST',
            response: requestData?.response, 
            // pk de la orden
            extra1: requestData?.extra1,

            //Atributos cliente
            name_billing: requestData?.fullName,
            address_billing: requestData?.address,
            type_doc_billing: requestData?.typeDoc,
            mobilephone_billing: requestData?.cellphone,
            number_doc_billing: requestData?.docNumber,
            email: requestData?.receptor_email,
        };

        if (EpaycoGatewayClass.instance && (requestData?.bill && this.#getInvoice() === requestData?.bill)) {
            return EpaycoGatewayClass.instance;
        }

        EpaycoGatewayClass.instance = this;
    };

    getInstance = () => this.vendor

    #getInfo() {
        return this.data;
    };

    #getInvoice() {
        return this.data?.invoice;
    };

    static #configure() {
        return EpaycoProcessorPayment();
    };
    
    static configurePayment() {
        return this.#configure();
    };

    async initCheckout() {
        await window?.ePayco?.checkout?.open(this.#getInfo());
    };

    handleSuccess(data) {
        this.#handlerPaymentSuccess(data);
    };

    async #handlerPaymentSuccess(data) {
        // estructura que espera el back (forma antigua)
        const info = {
            bill: data?.factura,
            transaction_id: data?.transactionId,
            ref_payco: data?.ref_payco,
            ref_apet: data?.extras?.extra1, // id de orden 'id_order'
            description: data?.descripcion,
            value: data?.valor,
            iva: data?.iva,
            ico: data?.ico, // Impuesto Nacional al Consumo
            base_iva: data?.baseiva,
            worth_value: data?.valorneto,
            currency:data?.moneda,
            bank: data?.banco,
            status_epayco: data?.estado,
            response_epayco: data?.respuesta,
            autorization_epayco: data?.autorizacion,
            receipt: data?.recibo,
            date: data?.fecha,
            franchise: data?.franquicia,
            cod_response: data?.cod_respuesta,
            cod_error: data?.cod_error,
            ip: data?.ip,
            test: data?.enpruebas,
            doc_type: data?.tipo_doc,
            document: data?.documento,
            names: data?.nombres,
            surnames: data?.apellidos,
            email: data?.email,
            city: data?.ciudad,
            address: data?.direccion,
            ind_city: data?.ind_pais,
            country_card: data?.country_card,
            franquicie:  data?.franquicie,
            lastNumbers: data?.lastNumbers,
            movil: data?.movil,
        };

    };

    // handleFailed(data) {
    //     this.#handlerPaymentFailed(data)
    // };

    // #handlerPaymentFailed(data) {
    // };
};

export default EpaycoGatewayClass;