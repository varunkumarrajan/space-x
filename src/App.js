// React
import React from 'react';
// Shared components
import Layout from 'shared/components/Layout/Layout';
// Containers
import Dashboard from 'containers/Dashboard/Dashboard';
// Labels
import labels from 'config/Labels';

// Destructuring
const { layout } = labels;

/**
 * @description Root component
 */
const App = () => (
  <Layout content={layout}>
    <Dashboard />
  </Layout>
);

// Default export
export default App;
