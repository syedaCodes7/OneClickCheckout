import { loadScript } from "@paypal/paypal-js";

let paypal;
let currencyValueObtained = 'GBP';
async function paypalProcessing() {
  try {
  paypal = await loadScript({ 
      //    "client-id": "AfbyAeJDwK1mAy_Aee5yr2h-FTR-E4-WX7VLTYpXKIIorvPv2wTq63GNYm64_2LMhZeLCSdoTlXmIJH7"
      "client-id": "test",
      "currency": currencyValueObtained,
      "enable-funding": "venmo",
      });
      if(paypal){

        try {
          const payButton = paypal.Buttons({
            createOrder: function(data, actions) {
              // Set up the transaction
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: '99.9'
                  }
                }]
              });
            }
          });
        payButton.render("#paypal-button-container");
      } catch (error) {
          console.error("failed to render the PayPal Buttons", error);
      }
          

          // const payButton = paypal.Buttons({
          //     createOrder: function() {
          //       var SETEC_URL = 'https://mystore.com/api/paypal/set-express-checkout';
            
          //       return fetch(SETEC_URL, {
          //         method: 'post',
          //         headers: {
          //           'content-type': 'application/json'
          //         }
          //       }).then(function(res) {
          //         return res.json();
          //       }).then(function(data) {
          //         return data.token;
          //       });
          //     }
          //   }).render('#paypal-button-container');
            
          console.log(paypal)
      }
    }
    catch (error) {
      console.error("failed to load the PayPal JS SDK script", error);
    }
}

paypalProcessing();




// loadScript({
//   "client-id": 'test',
//   "currency": currencyValueObtained,
//   "enable-funding": "venmo"
//  })
// .then((paypal) => {
//     // start to use the PayPal JS SDK script
//     const payButton = paypal.Buttons({
//       createOrder: function(data, actions) {
//         // Set up the transaction
//         return actions.order.create({
//           purchase_units: [{
//             amount: {
//               value: '99.9'
//             }
//           }]
//         });
//       }
//     });
//   payButton.render("#paypal-button-container");
// })
// .catch((err) => {
//     console.error("failed to load the PayPal JS SDK script", err);
// });