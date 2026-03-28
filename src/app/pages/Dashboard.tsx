import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Award, AlertCircle } from 'lucide-react';
import { Card } from '../components/ui/card';

// Mock data - Replace with your actual data
const urgesBarData = [
  { day: 'Mon', count: 3 },
  { day: 'Tue', count: 5 },
  { day: 'Wed', count: 2 },
  { day: 'Thu', count: 4 },
  { day: 'Fri', count: 1 },
  { day: 'Sat', count: 3 },
  { day: 'Sun', count: 2 },
];

const cravingsLineData = [
  { time: '12 AM', intensity: 2 },
  { time: '4 AM', intensity: 1 },
  { time: '8 AM', intensity: 3 },
  { time: '12 PM', intensity: 5 },
  { time: '4 PM', intensity: 7 },
  { time: '8 PM', intensity: 4 },
  { time: '11 PM', intensity: 3 },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-2 p-6 shadow-lg" style={{ backgroundColor: '#6B5010', borderColor: '#8B6914' }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium" style={{ color: '#18130A' }}>Days Clean</p>
              <p className="text-4xl font-bold text-zinc-950">23</p>
            </div>
            <Award className="w-12 h-12 opacity-30" style={{ color: '#18130A' }} />
          </div>
        </Card>

        <Card className="bg-red-950 border-2 border-red-900 p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium" style={{ color: '#8B6914' }}>This Week's Urges</p>
              <p className="text-4xl font-bold" style={{ color: '#B8860B' }}>20</p>
            </div>
            <TrendingDown className="w-12 h-12 opacity-30" style={{ color: '#8B6914' }} />
          </div>
        </Card>

        <Card className="border-2 p-6 shadow-lg" style={{ backgroundColor: '#8B6914', borderColor: '#B8860B' }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium" style={{ color: '#18130A' }}>Avg Intensity</p>
              <p className="text-4xl font-bold text-zinc-950">3.5</p>
            </div>
            <TrendingUp className="w-12 h-12 opacity-30" style={{ color: '#18130A' }} />
          </div>
        </Card>

        <Card className="bg-red-900 border-2 p-6 shadow-lg" style={{ borderColor: '#6B5010' }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium" style={{ color: '#8B6914' }}>Tools Used</p>
              <p className="text-4xl font-bold" style={{ color: '#B8860B' }}>47</p>
            </div>
            <AlertCircle className="w-12 h-12 opacity-30" style={{ color: '#8B6914' }} />
          </div>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart - Urges */}
        <Card className="bg-zinc-900 border-2 p-6 shadow-lg" style={{ borderColor: '#6B5010' }}>
          <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#B8860B' }}>
            <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: '#8B6914' }}></span>
            Daily Urges This Week
          </h3>
          <div className="bg-zinc-800/50 rounded-lg p-4">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={urgesBarData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#6B5010" />
                <XAxis dataKey="day" stroke="#8B6914" />
                <YAxis stroke="#8B6914" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#6B5010',
                    border: '2px solid #8B6914',
                    borderRadius: '8px',
                    color: '#B8860B'
                  }}
                />
                <Legend wrapperStyle={{ color: '#8B6914' }} />
                <Bar dataKey="count" fill="#8B6914" name="Urge Count" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm mt-4 text-center" style={{ color: '#8B6914' }}>
            📊 TODO: Connect to your urge tracking data
          </p>
        </Card>

        {/* Line Chart - Cravings Over Time */}
        <Card className="bg-zinc-900 border-2 p-6 shadow-lg" style={{ borderColor: '#6B5010' }}>
          <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#B8860B' }}>
            <span className="w-3 h-3 bg-red-900 rounded-full mr-2"></span>
            Craving Intensity Over Time
          </h3>
          <div className="bg-zinc-800/50 rounded-lg p-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={cravingsLineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#6B5010" />
                <XAxis dataKey="time" stroke="#8B6914" />
                <YAxis stroke="#8B6914" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#6B5010',
                    border: '2px solid #8B6914',
                    borderRadius: '8px',
                    color: '#B8860B'
                  }}
                />
                <Legend wrapperStyle={{ color: '#8B6914' }} />
                <Line
                  type="monotone"
                  dataKey="intensity"
                  stroke="#991b1b"
                  strokeWidth={3}
                  name="Intensity (1-10)"
                  dot={{ fill: '#8B6914', r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm mt-4 text-center" style={{ color: '#8B6914' }}>
            📈 TODO: Connect to your craving intensity data
          </p>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-red-950 border-2 p-6 shadow-lg" style={{ borderColor: '#6B5010' }}>
        <h3 className="text-xl font-bold mb-4" style={{ color: '#B8860B' }}>Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="text-zinc-950 font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-200" style={{ backgroundColor: '#8B6914' }}>
            Log New Urge
          </button>
          <button className="bg-red-900 hover:bg-red-800 font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-200" style={{ color: '#B8860B' }}>
            Start Chat Session
          </button>
          <button className="text-zinc-950 font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-200" style={{ backgroundColor: '#8B6914' }}>
            Use Coping Tool
          </button>
        </div>
      </Card>
    </div>
  );
}
