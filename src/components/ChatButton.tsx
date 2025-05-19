
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, sender: 'user' | 'bot', timestamp: Date}[]>([
    { text: "Bonjour ! Comment puis-je vous aider aujourd'hui ?", sender: 'bot', timestamp: new Date() }
  ]);
  const [userInput, setUserInput] = useState('');

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userInput.trim()) return;
    
    // Add user message
    const newUserMessage = { text: userInput, sender: 'user' as const, timestamp: new Date() };
    setMessages([...messages, newUserMessage]);
    setUserInput('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      let botResponse = "Merci pour votre message. Un de nos conseillers vous répondra dans les plus brefs délais.";
      
      // Basic automated responses based on keywords
      const lowerCaseInput = userInput.toLowerCase();
      if (lowerCaseInput.includes('bonjour') || lowerCaseInput.includes('salut') || lowerCaseInput.includes('hello')) {
        botResponse = "Bonjour ! Comment puis-je vous aider aujourd'hui ?";
      } else if (lowerCaseInput.includes('contact') || lowerCaseInput.includes('joindre')) {
        botResponse = "Vous pouvez nous contacter par email à contact@teknetgroup.com ou par téléphone au +261 20 22 233 98.";
      } else if (lowerCaseInput.includes('horaire') || lowerCaseInput.includes('ouvert')) {
        botResponse = "Nous sommes ouverts du lundi au vendredi de 8h30 à 17h30.";
      } else if (lowerCaseInput.includes('prix') || lowerCaseInput.includes('tarif') || lowerCaseInput.includes('coût')) {
        botResponse = "Nos tarifs varient selon les services. N'hésitez pas à nous demander un devis personnalisé.";
      } else if (lowerCaseInput.includes('merci')) {
        botResponse = "C'est avec plaisir ! Y a-t-il autre chose que je puisse faire pour vous ?";
      } else if (lowerCaseInput.includes('service')) {
        botResponse = "Nous offrons des solutions en cybersécurité, développement informatique, systèmes d'information, badges et cartes, et plus encore. Que recherchez-vous spécifiquement ?";
      } else if (lowerCaseInput.includes('localisation') || lowerCaseInput.includes('adresse') || lowerCaseInput.includes('où')) {
        botResponse = "Notre siège social est situé à Antananarivo, Madagascar. Vous pouvez consulter toutes nos implantations sur la page 'Nos Implantations'.";
      }
      
      const newBotMessage = { text: botResponse, sender: 'bot' as const, timestamp: new Date() };
      setMessages(prevMessages => [...prevMessages, newBotMessage]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat window */}
      <div className={cn(
        "bg-white rounded-lg shadow-xl w-[350px] max-h-[500px] flex flex-col absolute bottom-16 right-0 transition-all duration-300 mb-2",
        isChatOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      )}>
        {/* Chat header */}
        <div className="bg-teknet-red text-white p-4 rounded-t-lg flex justify-between items-center">
          <h3 className="font-semibold">Chat TeknetGroup</h3>
          <button onClick={toggleChat} className="text-white hover:bg-red-700 rounded-full p-1">
            <X size={18} />
          </button>
        </div>
        
        {/* Messages area */}
        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 min-h-[300px] max-h-[350px]">
          {messages.map((msg, idx) => (
            <div key={idx} className={cn(
              "rounded-lg p-3 max-w-[85%]",
              msg.sender === 'user' 
                ? "bg-blue-100 self-end text-gray-800" 
                : "bg-gray-100 self-start text-gray-800"
            )}>
              <p>{msg.text}</p>
              <span className="text-xs text-gray-500 mt-1 block">
                {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </span>
            </div>
          ))}
        </div>
        
        {/* Input area */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 flex">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Tapez votre message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teknet-red focus:border-transparent"
          />
          <button 
            type="submit"
            className="bg-teknet-red text-white px-4 rounded-r-lg hover:bg-red-700 transition-colors"
          >
            Envoyer
          </button>
        </form>
      </div>
      
      {/* Chat button */}
      <Button 
        onClick={toggleChat} 
        className={cn(
          "h-14 w-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300",
          isChatOpen ? "bg-gray-600 hover:bg-gray-700" : "bg-teknet-red hover:bg-red-700 pulse-animation"
        )}
      >
        <MessageCircle size={24} />
      </Button>
    </div>
  );
};

export default ChatButton;
