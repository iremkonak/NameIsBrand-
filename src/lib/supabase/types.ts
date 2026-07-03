export type ConsultationRequestInput = {
  fullName: string;
  email: string;
  phone: string;
  profession: string;
  category: string;
  country: string;
  needs: string[];
  goal: string;
  links: string;
  contactPreference: string;
  privacyAccepted: boolean;
};

export type ConsultationRequestRow = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  profession: string | null;
  category: string | null;
  country: string | null;
  needs: string[];
  goal: string | null;
  links: string | null;
  contact_preference: string | null;
  privacy_accepted: boolean;
  admin_note: string | null;
  status: string;
  created_at: string;
  updated_at: string;
};

export type ServicePackageRow = {
  id: string;
  sort_order: number;
  title: string;
  description: string | null;
  price: string | null;
  included_items: string[];
  status: string;
  created_at: string;
  updated_at: string;
};

export type AppointmentRow = {
  id: string;
  consultation_request_id: string | null;
  full_name: string;
  subject: string;
  appointment_date: string;
  appointment_time: string;
  note: string | null;
  status: string;
  created_at: string;
  updated_at: string;
};
