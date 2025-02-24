import {cart} from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/delieveryoptions.js';
import {formatCurrency} from '../utils/money.js';

export function renderPaymentSummary() {  // steps to create payment status *loop the cart *for each product,price*quantity *Add everything together.
    let productPriceCents = 0;
    let shippingPriceCents = 0;

    cart.forEach((cartItem)=>{
        const product=getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;
        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents
    });
    const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    const taxCents = totalBeforeTaxCents*0.1;
    const totalCents = totalBeforeTaxCents + taxCents;

// To calculate the shipping & handling charge 1) loop through the cart
                                          //   2) Add all the shipping costs together
                                          
// view, to generate the html we create a new variable ie.,
const paymentSummaryHTML =`
    <div class="payment-summary-title">
    Order Summary
    </div>

    <div class="payment-summary-row">
    <div>Items (3):</div>
    <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
    </div>

    <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
    </div>

    <div class="payment-summary-row">
    <div>Estimated tax (10%):</div>
    <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
    </div>

    <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
    </div>

    <button class="place-order-button button-primary">
    Place your order
    </button>
`;
document.querySelector('.js-payment-summary')
    .innerHTML = paymentSummaryHTML;
}

// make it interactive - CONTROLLER
