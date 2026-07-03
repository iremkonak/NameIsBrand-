import type { Metadata } from "next";
import { ConsultationFlow } from "@/components/consultation-flow";

export const metadata: Metadata = {
  title: "Ön Görüşme | Name is Brand",
  description:
    "Name is Brand ön analiz deneyimi. Kişisel marka, itibar ve AI görünürlük ihtiyaçlarınızı kısaca paylaşın.",
};

export default function ConsultationPage() {
  return <ConsultationFlow />;
}
