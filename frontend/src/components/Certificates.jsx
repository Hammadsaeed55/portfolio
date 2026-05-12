export default function Certificates() {
  const certificates = [
    {
      title: "Web Development Certificate",
      issuer: "The Website Maker",
      image: "/src/assets/web Development certificate_page-0001.jpg",
      link: "https://github.com/Hammadsaeed55/certificates/blob/main/web%20Development%20certificate.pdf",
    },
    {
      title: "Python Training Certificate",
      issuer: "Teerthanker Mahaveer University",
      image:
        "/src/assets/WhatsApp Image 2026-05-11 at 5.12.06 AM.jpeg",
      link: "https://github.com/Hammadsaeed55/certificates/blob/main/python%20certificate.pdf",
    },
    {
      title: " Workshop Completion Certificate",
      issuer: "SOFTPRO INDIA",
      image:
        "/src/assets/Hammad saeed _certificate (1)_page-0001.jpg",
      link: "https://github.com/Hammadsaeed55/certificates/blob/main/Hammad%20saeed%20_certificate%20(1).pdf",
    },
  ];

  return (
   <section
  id="certificates"
  className="min-h-screen w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-16 px-6 md:px-16 scroll-mt-20"
>
  <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-400 text-center mb-12">
    My Certificates
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
    {certificates.map((item, index) => (
      <div
        key={index}
        className="bg-gray-800 border border-gray-700 shadow-lg overflow-hidden 
        transform transition duration-500 hover:scale-105 rounded rounded-sm hover:shadow-yellow-400/40 hover:-translate-y-2"
      >
        <div className="w-full h-[180px] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain bg-white p-2 hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-yellow-300 mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-400 mb-5">
              Issued By: {item.issuer}
            </p>
          </div>

          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center px-4 py-2 bg-yellow-400 text-black 
            font-semibold shadow-md transition-all duration-300 
            hover:bg-yellow-300 hover:scale-105"
          >
            View Certificate
          </a>
        </div>
      </div>
    ))}
  </div>

  <div
    className="w-11/12 md:w-full lg:w-full h-[2px] mt-10 mx-auto
    rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200"
  ></div>
</section>
  );
}
