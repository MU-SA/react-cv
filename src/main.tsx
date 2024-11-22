import { createRoot } from 'react-dom/client';
import './index.css';

import HomePage from './pages/builder';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<HomePage />);
