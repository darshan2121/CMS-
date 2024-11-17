import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WorkSheets from '../screens/WorkSheets';
import Reports from '../screens/Reports';
import Payments from '../screens/Payments';
import ProjectDrawing from '../screens/ProjectDrawing';
import TestingReports from '../screens/TestingReports';
import ManageMaterials from '../screens/ManageMaterials';
import Header from '../components/Header'; // Import Header

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarScrollEnabled: true, tabBarLabelStyle: { fontSize: 12 } }}>
      <Tab.Screen name="WorkSheets" component={WorkSheetsWithHeader} />
      <Tab.Screen name="Reports" component={ReportsWithHeader} />
      <Tab.Screen name="Payments" component={PaymentsWithHeader} />
      <Tab.Screen name="ProjectDrawing" component={ProjectDrawingWithHeader} />
      <Tab.Screen name="TestingReports" component={TestingReportsWithHeader} />
      <Tab.Screen name="ManageMaterials" component={ManageMaterialsWithHeader} />
    </Tab.Navigator>
  );
};

// Example: WorkSheets screen with Header
const WorkSheetsWithHeader = () => (
  <>
    <Header />
    <WorkSheets />
  </>
);

// Repeat for other screens like Reports, Payments, etc.
const ReportsWithHeader = () => (
  <>
    <Header />
    <Reports />
  </>
);

const PaymentsWithHeader = () => (
  <>
    <Header />
    <Payments />
  </>
);

const ProjectDrawingWithHeader = () => (
  <>
    <Header />
    <ProjectDrawing />
  </>
);

const TestingReportsWithHeader = () => (
  <>
    <Header />
    <TestingReports />
  </>
);

const ManageMaterialsWithHeader = () => (
  <>
    <Header />
    <ManageMaterials />
  </>
);

export default TabNavigation;
