// export default async function Home() {
//   return (
//     <main>
//       <Hero />
//       <div className="flex flex-col gap-44">
//         <Sponsors />
//         <Projects />
//         <Team />
//         <Testimonials />
//         <CallToAction />
//       </div>
//     </main>
//   );
// }

import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
