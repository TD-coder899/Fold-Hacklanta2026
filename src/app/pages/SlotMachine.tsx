import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Brain, Activity, Coffee, Music } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

interface CopingMechanism {
  icon: typeof Heart;
  title: string;
  description: string;
  color: string;
}

const copingMechanisms: CopingMechanism[] = [
  {
    icon: Heart,
    title: 'Deep Breathing',
    description: 'Take 5 deep breaths. Inhale for 4 counts, hold for 4, exhale for 4.',
    color: '#7f1d1d',
  },
  {
    icon: Brain,
    title: 'Cognitive Reframing',
    description: 'Challenge the thought: "Is this urge a fact or just a feeling?"',
    color: '#6B5010',
  },
  {
    icon: Activity,
    title: 'Physical Activity',
    description: 'Do 10 jumping jacks or take a quick 5-minute walk.',
    color: '#450a0a',
  },
  {
    icon: Coffee,
    title: 'Grounding Technique',
    description: 'Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.',
    color: '#8B6914',
  },
  {
    icon: Music,
    title: 'Distraction Method',
    description: 'Listen to your favorite song or call a supportive friend.',
    color: '#7f1d1d',
  },
  {
    icon: Sparkles,
    title: 'Mindful Meditation',
    description: 'Sit quietly and observe your thoughts without judgment for 3 minutes.',
    color: '#6B5010',
  },
];

export function SlotMachine() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentMechanism, setCurrentMechanism] = useState<CopingMechanism | null>(null);
  const [spinCount, setSpinCount] = useState(0);

  const handleSpin = () => {
    setIsSpinning(true);
    setCurrentMechanism(null);

    // TODO: Integrate with your actual logic for tracking usage
    console.log('Slot machine pulled, count:', spinCount + 1);

    // Simulate spinning animation
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * copingMechanisms.length);
      setCurrentMechanism(copingMechanisms[randomIndex]);
      setIsSpinning(false);
      setSpinCount(spinCount + 1);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-2" style={{ color: '#B8860B' }}>🎰 Coping Mechanism Slots 🎰</h2>
        <p style={{ color: '#8B6914' }}>
          Pull the lever and discover a healthy coping strategy!
        </p>
      </div>

      {/* Slot Machine */}
      <Card className="bg-red-950 border-4 shadow-lg overflow-hidden" style={{ borderColor: '#6B5010' }}>
        {/* Casino Lights */}
        <div className="h-3" style={{ backgroundColor: '#6B5010' }}></div>

        <div className="p-8">
          {/* Display Area */}
          <div className="bg-zinc-900 rounded-xl border-4 p-8 mb-8 min-h-[300px] flex items-center justify-center" style={{ borderColor: '#8B6914' }}>
            {!currentMechanism && !isSpinning && (
              <div className="text-center">
                <Sparkles className="w-16 h-16 mx-auto mb-4" style={{ color: '#B8860B' }} />
                <p className="text-2xl font-bold" style={{ color: '#B8860B' }}>Ready to Spin?</p>
                <p className="mt-2" style={{ color: '#8B6914' }}>Pull the lever to get your coping tool!</p>
              </div>
            )}

            {isSpinning && (
              <motion.div
                className="text-center"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: 3 }}
              >
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 0.3, repeat: Infinity }}
                >
                  <Sparkles className="w-24 h-24 mx-auto" style={{ color: '#B8860B' }} />
                </motion.div>
                <p className="text-2xl font-bold mt-4" style={{ color: '#B8860B' }}>Spinning...</p>
              </motion.div>
            )}

            {currentMechanism && !isSpinning && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="text-center w-full"
              >
                <div
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 shadow-xl"
                  style={{ backgroundColor: currentMechanism.color }}
                >
                  <currentMechanism.icon className="w-12 h-12" style={{ color: '#B8860B' }} />
                </div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#B8860B' }}>
                  {currentMechanism.title}
                </h3>
                <p className="text-xl max-w-2xl mx-auto" style={{ color: '#D4A82E' }}>
                  {currentMechanism.description}
                </p>
                <div className="mt-6 flex justify-center gap-4">
                  <Button className="text-zinc-950 font-bold px-6 py-3" style={{ backgroundColor: '#8B6914' }}>
                    Mark as Completed
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 font-bold px-6 py-3"
                    style={{ borderColor: '#8B6914', color: '#B8860B' }}
                  >
                    Save for Later
                  </Button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Slot Machine Lever */}
          <div className="flex flex-col items-center">
            <Button
              onClick={handleSpin}
              disabled={isSpinning}
              className="relative w-32 h-32 rounded-full border-8 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              style={{ backgroundColor: '#7f1d1d', borderColor: '#8B6914' }}
            >
              <motion.div
                animate={isSpinning ? { rotate: 360 } : {}}
                transition={{ duration: 0.5, repeat: isSpinning ? Infinity : 0 }}
              >
                <Sparkles className="w-12 h-12" style={{ color: '#B8860B' }} />
              </motion.div>
            </Button>
            <p className="font-bold mt-4 text-lg" style={{ color: '#B8860B' }}>PULL!</p>
            <p className="text-sm mt-2" style={{ color: '#8B6914' }}>Tools Used Today: {spinCount}</p>
          </div>
        </div>

        {/* Casino Lights Bottom */}
        <div className="h-3" style={{ backgroundColor: '#6B5010' }}></div>
      </Card>

      {/* All Available Tools */}
      <Card className="bg-zinc-900 border-2 p-6 shadow-lg" style={{ borderColor: '#6B5010' }}>
        <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#B8860B' }}>
          All Available Coping Tools
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {copingMechanisms.map((mechanism, index) => {
            const Icon = mechanism.icon;
            return (
              <div
                key={index}
                className="bg-zinc-800/50 border-2 rounded-lg p-4 hover:bg-zinc-800 transition-all duration-200"
                style={{ borderColor: '#6B5010' }}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3"
                  style={{ backgroundColor: mechanism.color }}
                >
                  <Icon className="w-6 h-6" style={{ color: '#B8860B' }} />
                </div>
                <h4 className="text-lg font-bold mb-2" style={{ color: '#B8860B' }}>{mechanism.title}</h4>
                <p className="text-sm" style={{ color: '#8B6914' }}>{mechanism.description}</p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Information Card */}
      <Card className="bg-red-950 border-2 p-6 shadow-lg" style={{ borderColor: '#6B5010' }}>
        <h4 className="text-lg font-bold mb-3" style={{ color: '#B8860B' }}>💡 How This Works</h4>
        <p className="mb-3" style={{ color: '#8B6914' }}>
          Instead of pulling a slot machine lever for gambling, pull this lever to get a random,
          evidence-based coping mechanism! Each pull helps redirect that urge into something
          positive and healthy.
        </p>
        <p className="text-sm text-center mt-4" style={{ color: '#8B6914' }}>
          🎰 TODO: Connect to your tracking system to log tool usage
        </p>
      </Card>
    </div>
  );
}
