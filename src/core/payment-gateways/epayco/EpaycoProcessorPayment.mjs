// import { Observable, fromEvent } from 'rxjs';
// import { filter } from 'rxjs/operators';
// import HandlerPayment from './HandlerPayment';
// import { EVENTS_EPAYCO, URL_EPAYCO } from './utils/constants';

// let onResponseHandled = false;
// let subscription;

const EpaycoProcessorPayment = (publicKey='c548c4b29f1c630212c2c4615b892a73', lang='ES', test=true) => {

  // Cargar script ePayco
  const script = document.createElement('script');
  script.src = 'https://checkout.epayco.co/checkout.js';
  script.async = true;
  script.onload = () => {
    // Carga la configuración ePayco - opciones de ePayco
    window.ePayco.checkout.configure({
      key: publicKey,
      lang,
      test: test
    });
  };

  document.body.appendChild(script);

//   const handleMessage = (event) => {
//     // Verifica que el evento provenga del modal de ePayco
//     if (event.origin === URL_EPAYCO) {
//       // Manejo respuestas
//       handleEventsEpayco(event);
//     }
//   };

//   const handleEventsEpayco = async ({ data }) => {
    // const response = await data;
    // switch (response?.event) {
    //   case EVENTS_EPAYCO.ON_RESPONSE:
    //     if (!onResponseHandled) {
    //       handleResponseEpayco(data?.response);
    //     }
    //     break;

    //   case EVENTS_EPAYCO.ON_LOAD:
    //     handleLoad(data?.response);
    //     break;

    //   case EVENTS_EPAYCO.ON_ERROR:
    //     handleError(data?.response);
    //     break;

    //   default:
    //     break;
    // }
//   };

//   const messageEvent$ = new Observable((subscriber) => {
//     const handleMessageEvent = (event) => {
//       if (event.origin === URL_EPAYCO) {
//         subscriber.next(event);
//       }
//     };

//     window.addEventListener('message', handleMessageEvent);

//     return () => {
//       window.removeEventListener('message', handleMessageEvent);
//     };
//   }).pipe(filter(() => !onResponseHandled));

//   subscription = messageEvent$.subscribe((event) => {
//     handleMessage(event);
//   });

//   const handleResponseEpayco = (response) => {
//     const handlerPayment = new HandlerPayment();

//     switch (response?.estado) {
//       case EVENTS_EPAYCO.SUCCESS:
//         handlerPayment.handleSuccess(response);
//         break;
//       case EVENTS_EPAYCO.REJECTED:
//         console.log('rechazada: ', response);
//         break;
//       case EVENTS_EPAYCO.FAILED:
//         handlerPayment.handleFailed(response);
//         break;
//       case EVENTS_EPAYCO.PENDING:
//         console.log('Pendiente: ', response);
//         break;
//       default:
//         break;
//     }
//     onResponseHandled = true;
//     subscription.unsubscribe();
//   };

//   const handleLoad = (response) => {
//     // TODO spinner
//     console.log('Load: ', response);
//   };

//   const handleError = (response) => {
//     // TODO manejar error -> llamada a pasarela
//     console.log('Error: ', response);
//   };
};

export default EpaycoProcessorPayment;
