import { DashboardLayout } from '@/layout';
import { SectionScores, SectionStatistics } from '@/components/dashboard/sentiment-analytics';

export function PageSentimentAnalytics() {
  return (
    <DashboardLayout
      title={'Sentiment Analytics'}
      gap={{ base: '5rem', xl: '2rem' }}
    >
      <SectionStatistics />
      <SectionScores />
    </DashboardLayout>
  );
}
