import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { LawAct } from '@/types';

interface LawActCardProps {
  law: LawAct;
  index: number;
}

const LawActCard = ({ law, index }: LawActCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.08 }}
    className="glass-card p-4"
  >
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
        <BookOpen className="w-4 h-4 text-primary" />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-foreground">{law.name}</h4>
        <span className="text-xs font-medium text-primary">{law.section}</span>
        <p className="text-xs text-muted-foreground mt-1">{law.description}</p>
        {law.penalty && (
          <p className="text-xs text-warning mt-1.5 font-medium">
            ⚠ Penalty: {law.penalty}
          </p>
        )}
      </div>
    </div>
  </motion.div>
);

export default LawActCard;
