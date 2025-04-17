import Footer from "../components/footer";
export default function TermsPage() {
    return (
      <>
      <section className="px-4 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        <p className="mb-4">Welcome to JCP Tactical!</p>
  
        <p className="mb-2 font-semibold">1. General Use</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>The website is intended for E-commerce purposes.</li>
          <li>You must be at least 18 years old to make purchases.</li>
        </ul>
  
        <p className="mb-2 font-semibold">2. Orders & Payments</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Orders are subject to acceptance and availability.</li>
          <li>All payments must be made securely through approved methods listed on our site.</li>
        </ul>
  
        <p className="mb-2 font-semibold">3. Returns & Refunds</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Refer to our Return Policy for detailed instructions.</li>
          <li>Refunds are issued to the original payment method.</li>
        </ul>
  
        <p className="mb-2 font-semibold">4. Intellectual Property</p>
        <p className="mb-4 text-gray-700">All content on this website, including logos, images, and text, is owned by JCP Tactical and is protected by copyright laws.</p>
  
        <p className="mb-2 font-semibold">5. Limitation of Liability</p>
        <p className="text-gray-700">JCP Tactical is not responsible for indirect or consequential damages resulting from your use of the site.</p>
      </section>
      <Footer />
      </>
    );
  }