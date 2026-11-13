import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout.jsx';
import { DashboardPage } from '../features/dashboard/DashboardPage.jsx';
import { SubjectListPage } from '../features/subjects/SubjectListPage.jsx';
import { SubjectDetailPage } from '../features/subjects/SubjectDetailPage.jsx';
import { FlashcardsPage } from '../features/flashcards/FlashcardsPage.jsx';
import { LearningPage } from '../features/learning/LearningPage.jsx';
import { TestRunnerPage } from '../features/tests/TestRunnerPage.jsx';
import { TestResultPage } from '../features/tests/TestResultPage.jsx';
import { TestReviewPage } from '../features/tests/TestReviewPage.jsx';
import { AnalyticsPage } from '../features/analytics/AnalyticsPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'subjects', element: <SubjectListPage /> },
      { path: 'subjects/:subjectId', element: <SubjectDetailPage /> },
      { path: 'subjects/:subjectId/flashcards', element: <FlashcardsPage /> },
      { path: 'subjects/:subjectId/learn', element: <LearningPage /> },
      { path: 'tests/:testId', element: <TestRunnerPage /> },
      { path: 'tests/:testId/result', element: <TestResultPage /> },
      { path: 'tests/:testId/review', element: <TestReviewPage /> },
      { path: 'analytics', element: <AnalyticsPage /> },
      { path: '*', element: <Navigate to="/" replace /> }
    ]
  }
]);

export default router;

