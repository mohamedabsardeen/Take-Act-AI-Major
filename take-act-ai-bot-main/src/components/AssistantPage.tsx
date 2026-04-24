import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Shield, Swords, Scale, BookOpen, MapPin, LogOut } from 'lucide-react';
import { ChatMessage, Mode, LawAct } from '@/types';
import { generateResponse, policeStations, advocates } from '@/data/legalData';
import LawActCard from './LawActCard';
import ServiceCard from './ServiceCard';

interface AssistantPageProps {
  username: string;
  onLogout: () => void;
}

const AssistantPage = ({ username, onLogout }: AssistantPageProps) => {
  const [mode, setMode] = useState<Mode>('defender');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: '⚖️ Welcome to TAKE ACT AI Legal Assistant. Describe your legal situation and I will suggest relevant law acts, nearby police stations, and advocate offices to help you.',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [currentLaws, setCurrentLaws] = useState<LawAct[]>([]);
  const [showServices, setShowServices] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'laws' | 'services'>('chat');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);

    const { reply, laws } = generateResponse(input, mode);

    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: reply,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMsg]);

      if (laws.length > 0) {
        setCurrentLaws(laws);
        setShowServices(true);
      }
    }, 600);

    setInput('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border px-4 py-3 flex items-center justify-between backdrop-blur-xl bg-card/60">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl gold-gradient flex items-center justify-center">
            <Scale className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-heading font-bold gold-text">TAKE ACT AI</h1>
            <p className="text-xs text-muted-foreground">Welcome, {username}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Mode Toggle */}
          <div className="flex rounded-lg border border-border overflow-hidden">
            <button
              onClick={() => setMode('defender')}
              className={`px-3 py-2 text-xs font-medium flex items-center gap-1.5 transition-all ${
                mode === 'defender' ? 'bg-accent-blue/20 text-accent-blue' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Shield className="w-3.5 h-3.5" /> Defender
            </button>
            <button
              onClick={() => setMode('offender')}
              className={`px-3 py-2 text-xs font-medium flex items-center gap-1.5 transition-all ${
                mode === 'offender' ? 'bg-destructive/20 text-destructive' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Swords className="w-3.5 h-3.5" /> Offender
            </button>
          </div>

          <button onClick={onLogout} className="text-muted-foreground hover:text-foreground transition-colors p-2">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Tab bar */}
      <div className="flex border-b border-border bg-card/30">
        {[
          { id: 'chat' as const, label: 'Chat', icon: Scale },
          { id: 'laws' as const, label: `Law Acts${currentLaws.length ? ` (${currentLaws.length})` : ''}`, icon: BookOpen },
          { id: 'services' as const, label: 'Nearby Help', icon: MapPin },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 text-xs font-medium flex items-center justify-center gap-1.5 transition-all border-b-2 ${
              activeTab === tab.id ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <tab.icon className="w-3.5 h-3.5" /> {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === 'chat' && (
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col h-full"
              style={{ height: 'calc(100vh - 130px)' }}
            >
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map(msg => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap ${
                        msg.role === 'user'
                          ? 'gold-gradient text-primary-foreground rounded-br-md'
                          : 'bg-secondary text-foreground rounded-bl-md'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border bg-card/60 backdrop-blur-xl">
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={mode === 'defender' ? 'Describe your situation for defense strategy...' : 'Describe the case for prosecution arguments...'}
                    className="flex-1 px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground text-sm placeholder:text-muted-foreground"
                  />
                  <button
                    onClick={handleSend}
                    className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center hover:opacity-90 transition-opacity glow-gold"
                  >
                    <Send className="w-5 h-5 text-primary-foreground" />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Try: "I met with an accident", "Someone stole my phone", "I was assaulted"
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'laws' && (
            <motion.div
              key="laws"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 space-y-3 overflow-y-auto"
              style={{ height: 'calc(100vh - 130px)' }}
            >
              {currentLaws.length > 0 ? (
                <>
                  <h3 className="text-sm font-heading font-semibold text-foreground">Applicable Law Acts</h3>
                  {currentLaws.map((law, i) => (
                    <LawActCard key={i} law={law} index={i} />
                  ))}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <BookOpen className="w-12 h-12 mb-3 opacity-30" />
                  <p className="text-sm">Describe your case in the chat to see relevant law acts</p>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 space-y-4 overflow-y-auto"
              style={{ height: 'calc(100vh - 130px)' }}
            >
              {showServices ? (
                <>
                  <div>
                    <h3 className="text-sm font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-accent-blue" /> Nearby Police Stations
                    </h3>
                    <div className="space-y-2">
                      {policeStations.map((s, i) => (
                        <ServiceCard key={i} service={s} index={i} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Scale className="w-4 h-4 text-primary" /> Nearby Advocates
                    </h3>
                    <div className="space-y-2">
                      {advocates.map((s, i) => (
                        <ServiceCard key={i} service={s} index={i} />
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <MapPin className="w-12 h-12 mb-3 opacity-30" />
                  <p className="text-sm">Describe your case first to see nearby help</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AssistantPage;
