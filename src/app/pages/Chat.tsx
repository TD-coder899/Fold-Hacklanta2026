import { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your CBT companion. I'm here to help you work through gambling urges using evidence-based techniques. How are you feeling today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);

    // TODO: Integrate with your actual chatbot API
    // Mock bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I understand you're experiencing an urge. Let's work through this together. Can you rate your urge intensity from 1-10?",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputMessage('');
  };

  return (
    <div className="h-[calc(100vh-280px)] flex flex-col">
      <Card className="flex-1 bg-zinc-900 border-2 shadow-lg flex flex-col overflow-hidden" style={{ borderColor: '#6B5010' }}>
        {/* Chat Header */}
        <div className="bg-red-950 p-4 border-b-2" style={{ borderColor: '#6B5010' }}>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8B6914' }}>
              <Bot className="w-6 h-6" style={{ color: '#18130A' }} />
            </div>
            <div>
              <h3 className="text-lg font-bold" style={{ color: '#B8860B' }}>CBT Companion Bot</h3>
              <p className="text-xs" style={{ color: '#8B6914' }}>Always here to help</p>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-zinc-800/30">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`flex items-start space-x-2 max-w-[70%] ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0`}
                  style={{ backgroundColor: message.sender === 'user' ? '#8B6914' : '#7f1d1d' }}
                >
                  {message.sender === 'user' ? (
                    <User className="w-5 h-5" style={{ color: '#18130A' }} />
                  ) : (
                    <Bot className="w-5 h-5" style={{ color: '#B8860B' }} />
                  )}
                </div>
                <div>
                  <div
                    className={`rounded-lg p-4 shadow-lg ${
                      message.sender === 'user'
                        ? 'text-zinc-950'
                        : ''
                    }`}
                    style={message.sender === 'user' 
                      ? { backgroundColor: '#8B6914' }
                      : { backgroundColor: '#450a0a', color: '#D4A82E' }
                    }
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <p className="text-xs mt-1 px-2" style={{ color: '#B8860B' }}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-red-950 p-4 border-t-2" style={{ borderColor: '#6B5010' }}>
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <Input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 bg-zinc-800 text-white placeholder:text-zinc-400"
              style={{ borderColor: '#6B5010' }}
            />
            <Button
              type="submit"
              className="text-zinc-950 px-6"
              style={{ backgroundColor: '#8B6914' }}
            >
              <Send className="w-5 h-5" />
            </Button>
          </form>
          <p className="text-xs mt-2 text-center" style={{ color: '#8B6914' }}>
            💬 TODO: Connect to your chatbot API or AI service
          </p>
        </div>
      </Card>

      {/* CBT Tips Card */}
      <Card className="mt-4 bg-red-950 border-2 p-4 shadow-lg" style={{ borderColor: '#6B5010' }}>
        <h4 className="text-sm font-bold mb-2" style={{ color: '#B8860B' }}>💡 CBT Quick Tips</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs" style={{ color: '#8B6914' }}>
          <div className="bg-zinc-900/50 p-2 rounded">
            <strong>Identify:</strong> Recognize the urge trigger
          </div>
          <div className="bg-zinc-900/50 p-2 rounded">
            <strong>Challenge:</strong> Question automatic thoughts
          </div>
          <div className="bg-zinc-900/50 p-2 rounded">
            <strong>Replace:</strong> Use healthier coping strategies
          </div>
        </div>
      </Card>
    </div>
  );
}
