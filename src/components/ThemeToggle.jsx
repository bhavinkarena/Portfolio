import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeToggle = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme !== 'light';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative w-10 h-10 rounded-full border border-border hover:border-primary bg-card/50 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 overflow-hidden group ${className}`}
    >
      {/* Glow on hover */}
      <span className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Sun (shown in dark mode -> click to go light) */}
      <Sun
        size={18}
        className={`absolute transition-all duration-500 ${
          mounted && isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
        }`}
      />
      {/* Moon (shown in light mode -> click to go dark) */}
      <Moon
        size={18}
        className={`absolute transition-all duration-500 ${
          mounted && !isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
