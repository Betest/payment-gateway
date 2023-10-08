import PaymentGatewayClass from "./core/PaymentGatewayClass.mjs";

export const createPaymentGateway = (paymentGatewayClass = class { }, args = null) => {
    const paymentGatewayInstance = new paymentGatewayClass(args)
    if (!paymentGatewayClass.prototype instanceof PaymentGatewayClass) throw new Error('La pasarela no implementa PaymentGatewayClass')
    return paymentGatewayInstance
};