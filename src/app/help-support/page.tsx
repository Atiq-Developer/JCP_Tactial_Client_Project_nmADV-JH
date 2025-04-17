import Footer from "../components/footer";
export default function HelpPage() {
    return (
      <>
      <section className="px-4 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Help & Support</h1>
        <p className="text-lg mb-6">
          Welcome to JCP Tactical Help & Support! We’re here to assist you with any inquiries or issues you may have.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-2">How Can We Help You?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Order Support:</strong> Need help with tracking, modifying, or canceling an order? Contact us directly.</li>
          <li><strong>Product Information:</strong> Questions about a product? Check our detailed product descriptions or contact us directly.</li>
          <li><strong>Returns & Refunds:</strong> Learn about our return policy and initiate a return.</li>
          <li><strong>Shipping Information:</strong> Understand our shipping options, costs, and delivery timelines.</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h2>
        <p>Email: <a href="mailto:support@jcptactical.com" className="text-blue-600">support@jcptactical.com</a></p>
        <p>Phone: <a href="tel:+15053500696" className="text-blue-600">+1 (505) 350-0696</a></p>
  <p className="mt-8 text-gray-600">We’re committed to providing exceptional service and ensuring your satisfaction with JCP Tactical.</p>
      </section>
      <Footer />
      </>
    );
  }