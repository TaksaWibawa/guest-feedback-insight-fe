import { SectionStatistics, SectionTable } from "@/components/dashboard/section";
import { DashboardLayout } from "@/layout";

export function GuestReviewPage() {
	return (
		<DashboardLayout
			title={"Guest Review"}
			gap={"1.5rem"}
		>
			<SectionStatistics />
			<SectionTable />
		</DashboardLayout>
	);
}
