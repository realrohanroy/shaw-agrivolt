import re

def update_file(filename, replacements, add_trans=False):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'useTranslation' not in content:
        if "import { motion } from 'framer-motion';" in content:
            imports = f"import {{ motion }} from 'framer-motion';\nimport {{ useTranslation{', Trans' if add_trans else ''} }} from 'react-i18next';"
            content = content.replace("import { motion } from 'framer-motion';", imports)
        elif 'import { ' in content:
            content = re.sub(r"(import \{ [^\}]+ \} from 'lucide-react';)", r"\1\nimport { useTranslation } from 'react-i18next';", content)
        
        content = re.sub(r'(export const \w+ = \(\) => {)', r"\1\n  const { t } = useTranslation();", content)

    for old, new in replacements.items():
        content = content.replace(old, new)
        
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

# ImpactMetrics
update_file('src/components/ImpactMetrics.tsx', {
    'ESG PERFORMANCE': "{t('impact.tagline')}",
    'Measurable <br /> Environmental <br /> Impact': '<Trans i18nKey="impact.title">Measurable <br /> Environmental <br /> Impact</Trans>',
    'Real-time sustainability metrics audited from our Howrah operations, setting a new benchmark for industrial eco-compliance.': "{t('impact.description')}",
    'Liters of Fossil Fuel Replaced': "{t('impact.fossilReplacedTitle')}",
    'Offsetting industrial reliance on conventional diesel and coal with high-purity Bio-CNG.': "{t('impact.fossilReplacedDesc')}",
    'Organic Waste Diverted from landfills': "{t('impact.wasteDivertedTitle')}",
    'Farmland Rejuvenated with bio-fertilizers': "{t('impact.farmlandTitle')}"
}, add_trans=True)

# Certifications
update_file('src/components/Certifications.tsx', {
    'title: "SATAT Initiative"': "title: t('certifications.satat')",
    'desc: "Aligned with the Govt. of India\\'s Sustainable Alternative Towards Affordable Transportation scheme."': "desc: t('certifications.satatDesc')",
    'title: "ISO 9001:2015"': "title: t('certifications.iso9001')",
    'desc: "Certified quality management across plant operations and process control."': "desc: t('certifications.iso9001Desc')",
    'title: "ISO 14001:2015"': "title: t('certifications.iso14001')",
    'desc: "Certified environmental management for sustainable, compliant operations."': "desc: t('certifications.iso14001Desc')",
    'title: "FCO Compliance"': "title: t('certifications.fco')",
    'desc: "Fertiliser (Control) Order compliance for certified organic fertiliser output."': "desc: t('certifications.fcoDesc')",
    'Certifications & Compliance\n          </p>': "{t('certifications.tagline')}\n          </p>",
    'Built and operated to the standards our buyers and regulators expect.\n          </h2>': "{t('certifications.title')}\n          </h2>",
    'Reg. no. — available on request': "{t('certifications.regNo')}",
    'View PDF': "{t('certifications.viewPdf')}"
})

# Partnerships
update_file('src/components/Partnerships.tsx', {
    'Partnerships\n          </p>': "{t('partnerships.tagline')}\n          </p>",
    'Supply. Distribute. Grow with us.\n          </h2>': "{t('partnerships.title')}\n          </h2>",
    'For biomass suppliers</h3>': "{t('partnerships.biomassSuppliers')}</h3>",
    'Long-term procurement of agricultural residue and dedicated feedstock</span>': "{t('partnerships.supplierPoint1')}</span>",
    'Quality parameters, grading, and volume planning agreed upfront</span>': "{t('partnerships.supplierPoint2')}</span>",
    'Predictable pricing model built around transparent, index-linked rates</span>': "{t('partnerships.supplierPoint3')}</span>",
    'Become a supplier <ArrowRight': "{t('partnerships.becomeSupplier')} <ArrowRight",
    'For dealers & distributors</h3>': "{t('partnerships.dealersDistributors')}</h3>",
    'Authorised territories with protected, exclusive distribution rights</span>': "{t('partnerships.dealerPoint1')}</span>",
    'Reliable product availability for Bio-CNG and organic fertiliser</span>': "{t('partnerships.dealerPoint2')}</span>",
    'Dedicated support, training, and marketing backing for partners</span>': "{t('partnerships.dealerPoint3')}</span>",
    'Apply as a dealer <ArrowRight': "{t('partnerships.applyDealer')} <ArrowRight"
})

# Contact
update_file('src/components/Contact.tsx', {
    'Ready to discuss your fuel or fertiliser requirements?': "{t('contact.title')}",
    'Send us a message or reach out directly.': "{t('contact.subtitle')}",
    'uppercase tracking-widest">Name</label>': 'uppercase tracking-widest">{t(\'contact.name\')}</label>',
    'placeholder="Your full name"': 'placeholder={t(\'contact.namePlaceholder\')}',
    'uppercase tracking-widest">Company</label>': 'uppercase tracking-widest">{t(\'contact.company\')}</label>',
    'placeholder="Company name"': 'placeholder={t(\'contact.companyPlaceholder\')}',
    'uppercase tracking-widest">Email</label>': 'uppercase tracking-widest">{t(\'contact.email\')}</label>',
    'placeholder="you@company.com"': 'placeholder={t(\'contact.emailPlaceholder\')}',
    'uppercase tracking-widest">Phone</label>': 'uppercase tracking-widest">{t(\'contact.phone\')}</label>',
    'placeholder="+91"': 'placeholder={t(\'contact.phonePlaceholder\')}',
    'uppercase tracking-widest">Interest</label>': 'uppercase tracking-widest">{t(\'contact.interest\')}</label>',
    '>Bio-CNG</option>': ">{t('contact.interestBioCng')}</option>",
    '>Organic fertiliser</option>': ">{t('contact.interestFertiliser')}</option>",
    '>Partnership</option>': ">{t('contact.interestPartnership')}</option>",
    '>Other</option>': ">{t('contact.interestOther')}</option>",
    'uppercase tracking-widest">Message</label>': 'uppercase tracking-widest">{t(\'contact.message\')}</label>',
    'placeholder="Tell us about your requirements"': 'placeholder={t(\'contact.messagePlaceholder\')}',
    'Send Inquiry <Send': "{t('contact.sendInquiry')} <Send",
    '>Director</p>': ">{t('contact.director')}</p>",
    '>Company HQ</p>': ">{t('contact.companyHq')}</p>"
})
