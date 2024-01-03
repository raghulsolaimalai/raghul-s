// FAQ.js
import React from 'react';

const FAQ = () => {
  return (
    <div>
      <h2>Frequently Asked Questions</h2>

      <h3>1. How can I track my order?</h3>
      <p>
        You can track your order by logging into your Glammart account and navigating to the
        "Order History" section. There, you will find the tracking information for your recent orders.
      </p>

      <h3>2. What payment methods do you accept?</h3>
      <p>
        We accept a variety of payment methods, including credit/debit cards (Visa, MasterCard, American Express),
        PayPal, and other secure payment options. You can select your preferred payment method during checkout.
      </p>

      <h3>3. How do I return a product?</h3>
      <p>
        If you're not satisfied with your purchase, you can initiate a return by contacting our customer support team
        at <a href="mailto:returns@glammart.com">returns@glammart.com</a>. Please include your order number and
        reason for the return in your email.
      </p>

      <h3>4. Do you ship internationally?</h3>
      <p>
        Yes, we offer international shipping to select destinations. International shipping rates and times vary.
        You can view the available shipping options during the checkout process.
      </p>

      <h3>5. How can I contact customer support?</h3>
      <p>
        You can reach our customer support team by emailing us at <a href="mailto:support@glammart.com">support@glammart.com</a>.
        We aim to respond to inquiries within 24 hours during business days.
      </p>
    </div>
  );
};

export default FAQ;