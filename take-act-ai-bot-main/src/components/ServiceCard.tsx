import { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Star, ExternalLink, Shield, Scale, ChevronDown, ChevronUp } from 'lucide-react';
import { NearbyService } from '@/types';

interface ServiceCardProps {
  service: NearbyService;
  index: number;
}

const ServiceCard = forwardRef<HTMLDivElement, ServiceCardProps>(({ service, index }, ref) => {
  const isPolice = service.type === 'police';
  const [showMap, setShowMap] = useState(false);

  const embedUrl = service.lat && service.lng
    ? `https://www.google.com/maps?q=${service.lat},${service.lng}&z=15&output=embed`
    : `https://www.google.com/maps?q=${encodeURIComponent(service.name + ' ' + service.address)}&output=embed`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-4 hover:border-primary/30 transition-all"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isPolice ? 'bg-accent-blue/20' : 'bg-primary/20'}`}>
            {isPolice ? <Shield className="w-4 h-4 text-accent-blue" /> : <Scale className="w-4 h-4 text-primary" />}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">{service.name}</h4>
            <span className="text-xs text-muted-foreground">{service.distance} away</span>
          </div>
        </div>
        {service.rating && (
          <div className="flex items-center gap-1 text-primary text-xs">
            <Star className="w-3 h-3 fill-primary" />
            {service.rating}
          </div>
        )}
      </div>

      <div className="space-y-1.5 text-xs text-muted-foreground ml-10">
        <div className="flex items-center gap-2">
          <MapPin className="w-3 h-3 flex-shrink-0" />
          <span>{service.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-3 h-3 flex-shrink-0" />
          <a href={`tel:${service.phone}`} className="text-accent-blue hover:underline">{service.phone}</a>
        </div>
      </div>

      <div className="mt-3 ml-10 flex items-center gap-3">
        <a
          href={service.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
        >
          <ExternalLink className="w-3 h-3" /> Open in Google Maps
        </a>
        <button
          onClick={() => setShowMap(!showMap)}
          className="inline-flex items-center gap-1 text-xs text-accent-blue hover:text-accent-blue/80 transition-colors"
        >
          {showMap ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          {showMap ? 'Hide Map' : 'Show Map'}
        </button>
      </div>

      {showMap && (
        <div className="mt-3 ml-10 rounded-lg overflow-hidden border border-border/30">
          <iframe
            src={embedUrl}
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map - ${service.name}`}
          />
        </div>
      )}
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
