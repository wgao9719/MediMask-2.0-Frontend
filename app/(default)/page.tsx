export const metadata = {
  title: "Home - Creative",
  description: "Page description",
};

import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";

export default function Home() {
  return (
    <section>
      <div className="pt-32 pb-12 md:pt-44 md:pb-20">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title="Shielding Identities, Supporting Research."
            description="MediMask enables healthcare professionals and researchers to de-identify data sets."
          >
            Version 1
          </PageHeader>

          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
