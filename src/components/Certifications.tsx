import { motion } from 'framer-motion';
import { ShieldCheck, Award, FileCheck, CheckCircle } from 'lucide-react';

export const Certifications = () => {
  const certs = [
    {
      id: 1,
      title: "SATAT Initiative",
      desc: "Aligned with the Govt. of India's Sustainable Alternative Towards Affordable Transportation scheme.",
      icon: <ShieldCheck size={28} className="text-brand-green" />
    },
    {
      id: 2,
      title: "ISO 9001:2015",
      desc: "Certified quality management across plant operations and process control.",
      icon: <Award size={28} className="text-brand-blue" />,
      pdfLink: "/assets/SHAW AGRIVOLT GAS PRIVATE LIMITED-QMS (2) (1).pdf",
      image: "/assets/cert-qms.jpg"
    },
    {
      id: 3,
      title: "ISO 14001:2015",
      desc: "Certified environmental management for sustainable, compliant operations.",
      icon: <CheckCircle size={28} className="text-brand-green" />,
      pdfLink: "/assets/SHAW AGRIVOLT GAS PRIVATE LIMITED-EMS (2).pdf",
      image: "/assets/cert-ems.jpg"
    },
    {
      id: 4,
      title: "FCO Compliance",
      desc: "Fertiliser (Control) Order compliance for certified organic fertiliser output.",
      icon: <FileCheck size={28} className="text-brand-blue" />
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-brand-green text-sm font-bold tracking-widest uppercase mb-3">
            Certifications & Compliance
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy max-w-3xl mx-auto leading-tight">
            Built and operated to the standards our buyers and regulators expect.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bento-panel-light p-8 flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 shrink-0">
                {cert.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">{cert.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{cert.desc}</p>
              
              {cert.image && cert.pdfLink ? (
                <a 
                  href={cert.pdfLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full mt-auto group block overflow-hidden rounded-lg border border-gray-100 bg-gray-50"
                >
                  <div className="relative aspect-[1/1.1] w-full overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={`${cert.title} Certificate`} 
                      className="object-cover object-top w-full h-full transform group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/10 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-brand-navy text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                        View PDF
                      </span>
                    </div>
                  </div>
                </a>
              ) : (
                <p className="text-xs text-gray-400 font-medium tracking-wide uppercase mt-auto">Reg. no. — available on request</p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
