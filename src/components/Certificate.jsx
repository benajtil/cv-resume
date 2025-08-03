import React from "react";

const Certificate = () => {
  return (
    <section>
      <div className="container mx-auto p-6 overflow-hidden">
        <h1 className="text-3xl font-bold text-center mb-8">Certificates</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example certificate items */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Certificate Title</h2>
            <p className="text-gray-600">Issued by: Organization Name</p>
            <p className="text-gray-500">Date: January 2023</p>
            <p className="text-gray-700 mt-2">
              Description of the certificate and what it entails. This could
              include skills learned, projects completed, or any other relevant
              information.
            </p>
            <a href="#" className="text-blue-500 hover:underline mt-2 block">
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
