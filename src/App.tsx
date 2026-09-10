import { useState } from 'react'
import { Logo } from './components/Logo'
import { BottomNavBar } from '@/components/ui/bottom-nav-bar'
import { Home } from '@/pages/Home'
import { Discover } from '@/pages/Discover'
import { MySpace } from '@/pages/MySpace'
import { Settings } from './pages/Settings'

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0: return <Home />;
      case 1: return <Discover />;
      case 2: return <MySpace />;
      case 4: return <Settings />;
      // Fallback for Notifications (3) until built
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 w-full relative overflow-x-hidden">
      <header className="fixed top-0 left-0 w-full px-8 py-6 flex items-start justify-between z-50 pointer-events-none">
        {/* Logo at the top left */}
        <div className="pointer-events-auto">
          <Logo />
        </div>

        {/* Floating Top Dock */}
        <div className="pointer-events-auto absolute left-1/2 top-6 -translate-x-1/2">
          <BottomNavBar 
            stickyBottom={false} 
            activeIndex={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </header>

      {renderContent()}
    </div>
  )
}

export default App
