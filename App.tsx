/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MonitorFrame } from './components/MonitorFrame';
import { Desktop } from './components/Desktop';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <MonitorFrame>
      <Desktop />
      <Analytics />
      <SpeedInsights />
    </MonitorFrame>
  );
}
