import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Phone, Droplets, Calendar, ArrowRight } from 'lucide-react';
import { UserInfo } from '@/types';

interface UserInfoPageProps {
  onSubmit: (info: UserInfo) => void;
}

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

const UserInfoPage = ({ onSubmit }: UserInfoPageProps) => {
  const [form, setForm] = useState<UserInfo>({
    fullName: '',
    address: '',
    phone: '',
    bloodGroup: '',
    age: 0,
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.address || !form.phone || !form.bloodGroup || !form.age) {
      setError('Please fill in all fields');
      return;
    }
    onSubmit(form);
  };

  const update = (field: keyof UserInfo, value: string | number) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground";

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 w-full max-w-md relative z-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center">
            <User className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground">User Information</h2>
            <p className="text-muted-foreground text-sm">Complete your profile to proceed</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground/80 mb-2">
              <User className="w-4 h-4 text-primary" /> Full Name
            </label>
            <input
              type="text"
              value={form.fullName}
              onChange={(e) => update('fullName', e.target.value)}
              className={inputClass}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground/80 mb-2">
              <MapPin className="w-4 h-4 text-primary" /> Address
            </label>
            <textarea
              value={form.address}
              onChange={(e) => update('address', e.target.value)}
              className={inputClass + " resize-none"}
              rows={2}
              placeholder="Enter your address"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground/80 mb-2">
                <Phone className="w-4 h-4 text-primary" /> Phone
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                className={inputClass}
                placeholder="+91-XXXXXXXXXX"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground/80 mb-2">
                <Calendar className="w-4 h-4 text-primary" /> Age
              </label>
              <input
                type="number"
                min={1}
                max={120}
                value={form.age || ''}
                onChange={(e) => update('age', parseInt(e.target.value) || 0)}
                className={inputClass}
                placeholder="Age"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground/80 mb-2">
              <Droplets className="w-4 h-4 text-primary" /> Blood Group
            </label>
            <div className="grid grid-cols-4 gap-2">
              {bloodGroups.map(bg => (
                <button
                  key={bg}
                  type="button"
                  onClick={() => update('bloodGroup', bg)}
                  className={`py-2 rounded-lg text-sm font-medium transition-all ${
                    form.bloodGroup === bg
                      ? 'gold-gradient text-primary-foreground glow-gold'
                      : 'bg-secondary text-foreground/70 hover:bg-muted border border-border'
                  }`}
                >
                  {bg}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-destructive text-sm">
              {error}
            </motion.p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-lg gold-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-gold flex items-center justify-center gap-2"
          >
            Continue to Assistant <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default UserInfoPage;
