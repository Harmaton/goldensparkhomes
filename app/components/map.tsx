import React from "react";
console.log("MapPage component loaded");
const MapPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-50 py-12">
    <h2 className="text-2xl font-bold mb-4">Our Locations</h2>
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
      {/* Staybridge Apartments Map */}
      <div className="flex-1 bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold mb-2">Staybridge Apartments</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.683019004538!2d37.058772163410296!3d-1.0323068916499898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4f4b1ad582e1%3A0x42d9e77b1f622684!2sStaybridge%20Apartments!5e0!3m2!1sen!2ske!4v1749724489767!5m2!1sen!2ske"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Staybridge Apartments Location"
        ></iframe>
      </div>
      {/* Sunrise Twin Apartment Map */}
      <div className="flex-1 bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold mb-2">Sunrise Twin Apartment</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.171883846991!2d37.073132635412655!3d-1.0314065091531797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4fcec0db5a09%3A0xe21d6e512f44962e!2sSUNRISE%20TWINS%20APARTMENT%20-%20THIKA!5e0!3m2!1sen!2ske!4v1749805699621!5m2!1sen!2ske"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sunrise Twin Apartment Location"
        ></iframe>
      </div>
    </div>
  </div>
);

export default MapPage;