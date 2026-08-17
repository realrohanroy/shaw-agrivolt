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
      icon: <Award size={28} className="text-brand-blue" />
    },
    {
      id: 3,
      title: "ISO 14001:2015",
      desc: "Certified environmental management for sustainable, compliant operations.",
      icon: <CheckCircle size={28} className="text-brand-green" />
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
              <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
                {cert.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">{cert.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{cert.desc}</p>
              <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">Reg. no. — available on request</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#docs" className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-blue transition-colors uppercase tracking-wide text-sm">
            Download compliance documentation <span className="text-xl leading-none">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
