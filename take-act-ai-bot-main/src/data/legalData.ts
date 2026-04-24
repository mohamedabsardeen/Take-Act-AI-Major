import { LawAct, NearbyService } from '@/types';

export const lawDatabase: Record<string, LawAct[]> = {
  accident: [
    { name: "Motor Vehicles Act, 1988", section: "Section 134", description: "Duty of driver in case of accident to stop, give information, and render help.", penalty: "Imprisonment up to 3 months or fine up to ₹500 or both" },
    { name: "Motor Vehicles Act, 1988", section: "Section 166", description: "Application for compensation arising out of an accident.", penalty: "Claim before Motor Accident Claims Tribunal" },
    { name: "Indian Penal Code", section: "Section 279", description: "Rash driving or riding on a public way.", penalty: "Imprisonment up to 6 months or fine up to ₹1000 or both" },
    { name: "Indian Penal Code", section: "Section 304A", description: "Causing death by negligence.", penalty: "Imprisonment up to 2 years or fine or both" },
    { name: "Indian Penal Code", section: "Section 338", description: "Causing grievous hurt by act endangering life or personal safety.", penalty: "Imprisonment up to 2 years or fine up to ₹1000 or both" },
  ],
  theft: [
    { name: "Indian Penal Code", section: "Section 378", description: "Whoever intending to take dishonestly any moveable property.", penalty: "Imprisonment up to 3 years or fine or both" },
    { name: "Indian Penal Code", section: "Section 379", description: "Punishment for theft.", penalty: "Imprisonment up to 3 years or fine or both" },
    { name: "Indian Penal Code", section: "Section 380", description: "Theft in dwelling house.", penalty: "Imprisonment up to 7 years and fine" },
    { name: "Indian Penal Code", section: "Section 411", description: "Dishonestly receiving stolen property.", penalty: "Imprisonment up to 3 years or fine or both" },
  ],
  assault: [
    { name: "Indian Penal Code", section: "Section 351", description: "Definition of assault.", penalty: "As per related sections" },
    { name: "Indian Penal Code", section: "Section 352", description: "Punishment for assault or criminal force.", penalty: "Imprisonment up to 3 months or fine up to ₹500 or both" },
    { name: "Indian Penal Code", section: "Section 323", description: "Punishment for voluntarily causing hurt.", penalty: "Imprisonment up to 1 year or fine up to ₹1000 or both" },
    { name: "Indian Penal Code", section: "Section 325", description: "Punishment for voluntarily causing grievous hurt.", penalty: "Imprisonment up to 7 years and fine" },
  ],
  fraud: [
    { name: "Indian Penal Code", section: "Section 420", description: "Cheating and dishonestly inducing delivery of property.", penalty: "Imprisonment up to 7 years and fine" },
    { name: "Indian Penal Code", section: "Section 463", description: "Forgery.", penalty: "Imprisonment up to 2 years or fine or both" },
    { name: "Information Technology Act, 2000", section: "Section 66D", description: "Punishment for cheating by personation using computer resource.", penalty: "Imprisonment up to 3 years and fine up to ₹1 lakh" },
  ],
  property: [
    { name: "Transfer of Property Act, 1882", section: "Section 54", description: "Sale of immoveable property.", penalty: "Civil remedy" },
    { name: "Indian Penal Code", section: "Section 441", description: "Criminal trespass.", penalty: "Imprisonment up to 3 months or fine up to ₹500 or both" },
    { name: "Indian Penal Code", section: "Section 447", description: "Punishment for criminal trespass.", penalty: "Imprisonment up to 3 months or fine up to ₹500 or both" },
  ],
  domestic: [
    { name: "Protection of Women from Domestic Violence Act, 2005", section: "Section 3", description: "Definition of domestic violence including physical, sexual, verbal, emotional and economic abuse.", penalty: "Protection orders, residence orders, monetary relief" },
    { name: "Indian Penal Code", section: "Section 498A", description: "Husband or relative of husband subjecting woman to cruelty.", penalty: "Imprisonment up to 3 years and fine" },
    { name: "Indian Penal Code", section: "Section 304B", description: "Dowry death.", penalty: "Imprisonment not less than 7 years, may extend to life" },
  ],
};

export const policeStations: NearbyService[] = [
  { name: "Central Police Station", type: "police", address: "MG Road, City Center", phone: "+91-100", distance: "1.2 km", mapUrl: "https://www.google.com/maps/search/Central+Police+Station", rating: 4.2, lat: 17.3850, lng: 78.4867 },
  { name: "Traffic Police Station", type: "police", address: "NH-44, Highway Junction", phone: "+91-103", distance: "2.5 km", mapUrl: "https://www.google.com/maps/search/Traffic+Police+Station", rating: 3.8, lat: 17.3950, lng: 78.4767 },
  { name: "Women's Help Desk", type: "police", address: "Civil Lines, Block A", phone: "+91-1091", distance: "3.1 km", mapUrl: "https://www.google.com/maps/search/Women+Help+Desk+Police", rating: 4.5, lat: 17.3750, lng: 78.4967 },
  { name: "Cyber Crime Cell", type: "police", address: "Tech Park, Sector 15", phone: "+91-1930", distance: "4.8 km", mapUrl: "https://www.google.com/maps/search/Cyber+Crime+Cell", rating: 4.0, lat: 17.4050, lng: 78.5067 },
];

export const advocates: NearbyService[] = [
  { name: "Adv. Rajesh Kumar & Associates", type: "advocate", address: "Court Complex, Room 201", phone: "+91-9876543210", distance: "0.8 km", mapUrl: "https://www.google.com/maps/search/Rajesh+Kumar+Advocates", rating: 4.7, lat: 17.3870, lng: 78.4890 },
  { name: "Legal Aid Society", type: "advocate", address: "Bar Council Building, 2nd Floor", phone: "+91-9876543211", distance: "1.5 km", mapUrl: "https://www.google.com/maps/search/Legal+Aid+Society", rating: 4.3, lat: 17.3800, lng: 78.4800 },
  { name: "Adv. Priya Sharma (Criminal Law)", type: "advocate", address: "High Court Road, Office 305", phone: "+91-9876543212", distance: "2.2 km", mapUrl: "https://www.google.com/maps/search/Priya+Sharma+Advocate", rating: 4.8, lat: 17.3920, lng: 78.4950 },
  { name: "Justice First Law Firm", type: "advocate", address: "Gandhi Nagar, Main Street", phone: "+91-9876543213", distance: "3.0 km", mapUrl: "https://www.google.com/maps/search/Justice+First+Law+Firm", rating: 4.1, lat: 17.4000, lng: 78.5000 },
];

const keywords: Record<string, string[]> = {
  accident: ['accident', 'crash', 'collision', 'hit', 'vehicle', 'car', 'bike', 'road', 'traffic', 'injury', 'injured'],
  theft: ['theft', 'stolen', 'steal', 'rob', 'robbery', 'burglar', 'burglary', 'snatch', 'pickpocket', 'loot'],
  assault: ['assault', 'attack', 'beat', 'hit', 'punch', 'fight', 'violence', 'hurt', 'slap', 'abuse'],
  fraud: ['fraud', 'cheat', 'scam', 'fake', 'forgery', 'cyber', 'online', 'phishing', 'money', 'bank'],
  property: ['property', 'land', 'house', 'trespass', 'encroach', 'boundary', 'possession', 'tenant'],
  domestic: ['domestic', 'wife', 'husband', 'dowry', 'marriage', 'family', 'home violence', 'cruelty'],
};

export function detectCategory(text: string): string | null {
  const lower = text.toLowerCase();
  let bestMatch: string | null = null;
  let bestScore = 0;

  for (const [category, words] of Object.entries(keywords)) {
    const score = words.filter(w => lower.includes(w)).length;
    if (score > bestScore) {
      bestScore = score;
      bestMatch = category;
    }
  }

  return bestScore > 0 ? bestMatch : null;
}

export function generateResponse(message: string, mode: 'offender' | 'defender'): {
  reply: string;
  laws: LawAct[];
  category: string | null;
} {
  const category = detectCategory(message);

  if (!category) {
    return {
      reply: mode === 'defender'
        ? "🛡️ I understand your concern. Could you provide more details about the incident? Mention keywords like accident, theft, assault, fraud, property dispute, or domestic violence so I can suggest the right legal provisions and nearby help."
        : "⚖️ Please describe the situation in more detail. Include specifics about what happened — was it an accident, theft, assault, fraud, property issue, or domestic matter?",
      laws: [],
      category: null,
    };
  }

  const laws = lawDatabase[category] || [];

  const defenderReplies: Record<string, string> = {
    accident: "🛡️ **Defense Strategy for Accident Case:**\n\nBased on your situation, here are your rights:\n1. You have the right to file an FIR at the nearest police station\n2. You can claim compensation under the Motor Vehicles Act\n3. Medical expenses can be claimed from the at-fault party\n4. Document everything — photos, witness statements, medical reports\n\n**Immediate Steps:**\n- Get medical attention first\n- File an FIR within 24 hours\n- Collect witness contact details\n- Preserve all medical bills",
    theft: "🛡️ **Defense Strategy for Theft Case:**\n\n1. File an FIR immediately at the nearest police station\n2. List all stolen items with approximate values\n3. Check for CCTV footage in the area\n4. If online theft — report to Cyber Crime Cell\n\n**Your Rights:**\n- Police must register your FIR (Zero FIR provision)\n- You can track your complaint status online\n- Insurance claims can be filed with the FIR copy",
    assault: "🛡️ **Defense Strategy for Assault Case:**\n\n1. Get immediate medical examination (Medico-Legal Case)\n2. File an FIR with injury details\n3. Photograph all injuries\n4. Identify witnesses\n\n**Legal Protection:**\n- You can file for a protection order\n- Anticipatory bail is available if counter-complaint is filed\n- Compensation can be claimed",
    fraud: "🛡️ **Defense Strategy for Fraud Case:**\n\n1. Preserve all evidence — messages, emails, transaction records\n2. Report to Cyber Crime Portal (cybercrime.gov.in)\n3. Inform your bank immediately to freeze transactions\n4. File FIR with all documentation\n\n**Key Actions:**\n- Screenshot all communications\n- Don't delete any messages\n- Report within 24 hours for best chance of fund recovery",
    property: "🛡️ **Defense Strategy for Property Dispute:**\n\n1. Verify all property documents\n2. Check encumbrance certificate\n3. File a civil suit if necessary\n4. Apply for stay order if trespass is ongoing\n\n**Legal Options:**\n- File complaint under Section 441/447 IPC\n- Seek injunction from civil court\n- Revenue court remedies available",
    domestic: "🛡️ **Defense Strategy for Domestic Violence:**\n\n1. Call Women's Helpline: 181\n2. File complaint at Women's Help Desk\n3. Apply for Protection Order under DV Act\n4. Seek shelter home if needed\n\n**Immediate Help:**\n- National Commission for Women: 7827-170-170\n- Police Emergency: 100/112\n- Free legal aid is available",
  };

  const offenderReplies: Record<string, string> = {
    accident: "⚖️ **Prosecution Arguments for Accident Case:**\n\n1. Evidence of negligence or rash driving (Sec 279 IPC)\n2. Failure to stop and report (Sec 134 MVA)\n3. Driving under influence (if applicable)\n4. Violation of traffic rules\n\n**Prosecution Strategy:**\n- Obtain traffic camera footage\n- Get breathalyzer/blood test reports\n- Witness testimony of reckless behavior\n- Vehicle fitness certificate check",
    theft: "⚖️ **Prosecution Arguments for Theft Case:**\n\n1. Establishing intent to steal (Sec 378 IPC)\n2. Evidence of breaking and entering\n3. Recovery of stolen goods\n4. Identification by witnesses/CCTV\n\n**Building the Case:**\n- Chain of custody of evidence\n- Digital evidence (phone location, etc.)\n- Prior criminal record check",
    assault: "⚖️ **Prosecution Arguments for Assault Case:**\n\n1. Medical evidence of injuries\n2. Witness statements\n3. Motive establishment\n4. Prior threats or history\n\n**Evidence Collection:**\n- MLR (Medico Legal Report)\n- CCTV/phone recordings\n- Communication records showing threats",
    fraud: "⚖️ **Prosecution Arguments for Fraud Case:**\n\n1. Trail of money/transactions\n2. False representations made\n3. Digital evidence trail\n4. Pattern of fraudulent behavior\n\n**Technical Evidence:**\n- IP address logs\n- Bank transaction records\n- Communication evidence",
    property: "⚖️ **Prosecution Arguments for Property Dispute:**\n\n1. Title deed verification\n2. Survey records\n3. Witness to trespass\n4. Revenue records\n\n**Legal Proceedings:**\n- Civil suit for possession\n- Criminal complaint for trespass\n- Revenue court petition",
    domestic: "⚖️ **Prosecution Arguments for Domestic Violence:**\n\n1. Medical evidence of abuse\n2. Witness testimony\n3. Communication evidence\n4. Financial abuse documentation\n\n**Building the Case:**\n- Incident reports from neighbors\n- Hospital/medical records\n- Financial records showing abuse",
  };

  const reply = mode === 'defender' ? defenderReplies[category] : offenderReplies[category];

  return {
    reply: reply || "I'll analyze your case. Please provide more details.",
    laws,
    category,
  };
}
