import Footer from "../components/footer";


export default function PrivacyPage() {
    return (
      <>
      <section className="px-4 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-6">Your Privacy Matters to Us</p>
  
        <h2 className="text-2xl font-semibold mb-2">What Information Do We Collect?</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Personal Information: Name, email address, phone number, and billing/shipping information.</li>
          <li>Non-Personal Information: Browser type, IP address, and device data for analytics.</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mb-2">How Do We Use Your Information?</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>To process and deliver your orders.</li>
          <li>To provide customer service and respond to inquiries.</li>
          <li>To improve website functionality and personalize your experience.</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mb-2">Do We Share Your Information?</h2>
        <p className="mb-6 text-gray-700">
          We do not sell your information to third parties. However, we may share data with trusted partners to process payments, ship orders, or comply with legal requirements.
        </p>
  
        <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
        <p className="text-gray-700">
          You can request to view, update, or delete your personal data at any time.
        </p>
      </section>
      <Footer />
      </>
    );
  }
  