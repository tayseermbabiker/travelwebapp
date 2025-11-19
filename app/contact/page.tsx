export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We're here to help with your travel planning needs
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Get in Touch</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Have questions, feedback, or need assistance? We'd love to hear from you!
            </p>
          </section>

          <section className="bg-teal-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Email</h3>
            <a
              href="mailto:Eterna.General@gmail.com"
              className="text-xl text-teal-600 hover:text-teal-700 font-semibold"
            >
              Eterna.General@gmail.com
            </a>
            <p className="text-sm text-gray-600 mt-2">
              We typically respond within 24-48 hours
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">What You Can Contact Us About</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Technical support and assistance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Feedback and suggestions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Partnership inquiries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Privacy and data questions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>General inquiries about our service</span>
              </li>
            </ul>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-600 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
