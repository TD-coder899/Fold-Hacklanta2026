import { Calendar, Clock, TrendingUp, Filter } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

interface HistoryEntry {
  id: string;
  date: Date;
  type: 'urge' | 'coping' | 'chat';
  intensity?: number;
  description: string;
  copingTool?: string;
}

// Mock data - Replace with your actual data
const historyData: HistoryEntry[] = [
  {
    id: '1',
    date: new Date('2026-03-28T14:30:00'),
    type: 'urge',
    intensity: 7,
    description: 'Felt strong urge after seeing casino advertisement',
  },
  {
    id: '2',
    date: new Date('2026-03-28T14:45:00'),
    type: 'coping',
    description: 'Used breathing exercise to manage urge',
    copingTool: 'Deep Breathing',
  },
  {
    id: '3',
    date: new Date('2026-03-28T10:15:00'),
    type: 'chat',
    description: 'Had CBT session about identifying triggers',
  },
  {
    id: '4',
    date: new Date('2026-03-27T19:20:00'),
    type: 'urge',
    intensity: 5,
    description: 'Weekend evening urge while watching TV',
  },
  {
    id: '5',
    date: new Date('2026-03-27T19:30:00'),
    type: 'coping',
    description: 'Used progressive muscle relaxation',
    copingTool: 'Muscle Relaxation',
  },
  {
    id: '6',
    date: new Date('2026-03-27T09:00:00'),
    type: 'chat',
    description: 'Morning check-in with CBT bot',
  },
  {
    id: '7',
    date: new Date('2026-03-26T16:45:00'),
    type: 'urge',
    intensity: 4,
    description: 'Mild urge during lunch break',
  },
  {
    id: '8',
    date: new Date('2026-03-26T16:50:00'),
    type: 'coping',
    description: 'Went for a 10-minute walk',
    copingTool: 'Physical Activity',
  },
];

export function History() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'urge':
        return { backgroundColor: '#7f1d1d', color: '#8B6914' };
      case 'coping':
        return { backgroundColor: '#6B5010', color: '#18130A' };
      case 'chat':
        return { backgroundColor: '#8B6914', color: '#18130A' };
      default:
        return { backgroundColor: '#3f3f46', color: '#ffffff' };
    }
  };

  const getIntensityColor = (intensity: number) => {
    if (intensity >= 8) return '#991b1b';
    if (intensity >= 5) return '#B8860B';
    return '#166534';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold" style={{ color: '#B8860B' }}>Activity History</h2>
          <p className="mt-1" style={{ color: '#8B6914' }}>Track your journey to recovery</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 text-zinc-950 font-bold rounded-lg shadow-lg transition-all" style={{ backgroundColor: '#8B6914' }}>
          <Filter className="w-4 h-4" />
          <span>Filter History</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-red-950 border-2 border-red-900 p-4 shadow-lg">
          <p className="text-sm" style={{ color: '#8B6914' }}>Total Urges Logged</p>
          <p className="text-3xl font-bold mt-1" style={{ color: '#B8860B' }}>142</p>
        </Card>
        <Card className="border-2 p-4 shadow-lg" style={{ backgroundColor: '#6B5010', borderColor: '#8B6914' }}>
          <p className="text-sm" style={{ color: '#18130A' }}>Coping Tools Used</p>
          <p className="text-3xl font-bold text-zinc-950 mt-1">98</p>
        </Card>
        <Card className="border-2 p-4 shadow-lg" style={{ backgroundColor: '#8B6914', borderColor: '#B8860B' }}>
          <p className="text-sm" style={{ color: '#18130A' }}>CBT Sessions</p>
          <p className="text-3xl font-bold text-zinc-950 mt-1">56</p>
        </Card>
      </div>

      {/* History Timeline */}
      <Card className="bg-zinc-900 border-2 p-6 shadow-lg" style={{ borderColor: '#6B5010' }}>
        <h3 className="text-xl font-bold mb-6 flex items-center" style={{ color: '#B8860B' }}>
          <Calendar className="w-6 h-6 mr-2" />
          Recent Activity
        </h3>

        <div className="space-y-4">
          {historyData.map((entry) => (
            <div
              key={entry.id}
              className="bg-zinc-800/50 border-l-4 rounded-lg p-4 hover:bg-zinc-800/70 transition-all duration-200"
              style={{ borderColor: '#8B6914' }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge style={getTypeColor(entry.type)}>
                      {entry.type.toUpperCase()}
                    </Badge>
                    {entry.intensity && (
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4" style={{ color: getIntensityColor(entry.intensity) }} />
                        <span className="font-bold" style={{ color: getIntensityColor(entry.intensity) }}>
                          {entry.intensity}/10
                        </span>
                      </div>
                    )}
                    {entry.copingTool && (
                      <Badge style={{ backgroundColor: '#6B5010', color: '#D4A82E' }}>
                        {entry.copingTool}
                      </Badge>
                    )}
                  </div>
                  <p style={{ color: '#D4A82E' }}>{entry.description}</p>
                </div>
                <div className="flex items-center space-x-2 text-sm" style={{ color: '#B8860B' }}>
                  <Clock className="w-4 h-4" />
                  <span>{entry.date.toLocaleDateString()}</span>
                  <span>{entry.date.toLocaleTimeString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button className="px-6 py-2 text-zinc-950 font-bold rounded-lg shadow-lg transition-all" style={{ backgroundColor: '#8B6914' }}>
            Load More History
          </button>
        </div>

        <p className="text-sm mt-4 text-center" style={{ color: '#8B6914' }}>
          📋 TODO: Connect to your history database
        </p>
      </Card>

      {/* Export Options */}
      <Card className="bg-red-950 border-2 p-4 shadow-lg" style={{ borderColor: '#6B5010' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-medium" style={{ color: '#B8860B' }}>Export your data for personal records or therapy</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-zinc-950 font-bold rounded-lg transition-all" style={{ backgroundColor: '#8B6914' }}>
              Export as PDF
            </button>
            <button className="px-4 py-2 text-zinc-950 font-bold rounded-lg transition-all" style={{ backgroundColor: '#8B6914' }}>
              Export as CSV
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
