"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { submitConsultationRequest } from "@/app/on-gorusme/actions";
import { BrandLogo } from "./brand-logo";
import { ArrowRight, ArrowUpRight, CloseIcon } from "./icons";

type FormState = {
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

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  profession: "",
  category: "",
  country: "",
  needs: [],
  goal: "",
  links: "",
  contactPreference: "",
  privacyAccepted: false,
};

const steps = [
  "Başlangıç",
  "Kimlik",
  "Uzmanlık",
  "İhtiyaç",
  "Hedef",
  "Dijital İz",
  "Tercih",
  "Özet",
];

const categories = [
  "Doktor",
  "Siyasetçi",
  "Avukat",
  "İş İnsanı",
  "Sanatçı",
  "Sporcu",
  "Akademisyen",
  "Danışman",
  "Diğer",
];

const needOptions = [
  "Kişisel Marka",
  "Kişisel İtibar",
  "AI Görünürlük",
  "Web Sitesi",
  "Sosyal Medya",
  "Hepsi",
];

const contactOptions = ["WhatsApp", "Telefon", "E-posta"];

const turkishCities = [
  "Adana",
  "Adıyaman",
  "Afyonkarahisar",
  "Ağrı",
  "Amasya",
  "Ankara",
  "Antalya",
  "Artvin",
  "Aydın",
  "Balıkesir",
  "Bilecik",
  "Bingöl",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Çanakkale",
  "Çankırı",
  "Çorum",
  "Denizli",
  "Diyarbakır",
  "Edirne",
  "Elazığ",
  "Erzincan",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Giresun",
  "Gümüşhane",
  "Hakkari",
  "Hatay",
  "Isparta",
  "Mersin",
  "İstanbul",
  "İzmir",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kırklareli",
  "Kırşehir",
  "Kocaeli",
  "Konya",
  "Kütahya",
  "Malatya",
  "Manisa",
  "Kahramanmaraş",
  "Mardin",
  "Muğla",
  "Muş",
  "Nevşehir",
  "Niğde",
  "Ordu",
  "Rize",
  "Sakarya",
  "Samsun",
  "Siirt",
  "Sinop",
  "Sivas",
  "Tekirdağ",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Şanlıurfa",
  "Uşak",
  "Van",
  "Yozgat",
  "Zonguldak",
  "Aksaray",
  "Bayburt",
  "Karaman",
  "Kırıkkale",
  "Batman",
  "Şırnak",
  "Bartın",
  "Ardahan",
  "Iğdır",
  "Yalova",
  "Karabük",
  "Kilis",
  "Osmaniye",
  "Düzce",
];

export function ConsultationFlow() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [returnPath, setReturnPath] = useState("/#top");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nextReturnPath = params.get("returnTo");

    if (nextReturnPath?.startsWith("/admin")) {
      setReturnPath(nextReturnPath);
    }
  }, []);

  const progress = useMemo(
    () => Math.round(((step + 1) / steps.length) * 100),
    [step]
  );

  const canContinue = useMemo(() => {
    if (step === 1) {
      return form.fullName.trim() && form.email.trim() && form.phone.trim();
    }

    if (step === 2) {
      return form.profession.trim() && form.category && form.country.trim();
    }

    if (step === 3) {
      return form.needs.length > 0;
    }

    if (step === 4) {
      return form.goal.trim().length >= 20;
    }

    if (step === 6) {
      return form.contactPreference && form.privacyAccepted;
    }

    return true;
  }, [form, step]);

  const updateField = (field: keyof FormState, value: string | boolean) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const toggleNeed = (need: string) => {
    setForm((current) => {
      if (need === "Hepsi") {
        return {
          ...current,
          needs: current.needs.includes("Hepsi") ? [] : ["Hepsi"],
        };
      }

      const nextNeeds = current.needs.includes(need)
        ? current.needs.filter((item) => item !== need)
        : [...current.needs.filter((item) => item !== "Hepsi"), need];

      return {
        ...current,
        needs: nextNeeds,
      };
    });
  };

  const nextStep = () => {
    if (step < steps.length - 1 && canContinue) {
      setStep((current) => current + 1);
    }
  };

  const previousStep = () => {
    if (step > 0) {
      setStep((current) => current - 1);
    }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    const result = await submitConsultationRequest(form);

    setIsSubmitting(false);

    if (result.ok) {
      setSubmitted(true);
      return;
    }

    setSubmitError(result.message);
  };

  return (
    <main className="intake-page">
      <div className="intake-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress / 100})` }} />
      </div>

      <header className="intake-header">
        <a href={returnPath} aria-label="Geri dön">
          <BrandLogo />
        </a>
        <div className="intake-header-meta">
          <span>{progress}%</span>
          <a href={returnPath} aria-label="Ön görüşme ekranını kapat">
            <CloseIcon />
          </a>
        </div>
      </header>

      <form className="intake-shell" onSubmit={submit}>
        {!submitted ? (
          <>
            <aside className="intake-sidebar">
              <span className="section-index">Ön Analiz</span>
              <strong>{steps[step]}</strong>
              <small>Yaklaşık 3 dakika</small>
              <div className="intake-step-list">
                {steps.map((item, index) => (
                  <span
                    className={index <= step ? "is-active" : ""}
                    key={item}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                ))}
              </div>
            </aside>

            <section className="intake-card">
              {step === 0 && (
                <div className="intake-start">
                  <span className="section-index">Name is Brand</span>
                  <h1>Ön görüşmeden önce sizi kısaca tanıyalım.</h1>
                  <p>
                    Bu kısa ön analiz, görüşmeden önce ihtiyaçlarınızı,
                    görünürlük hedeflerinizi ve dijital varlıklarınızı anlamamıza
                    yardımcı olur.
                  </p>
                  <button className="button button-primary" type="button" onClick={nextStep}>
                    Başla
                    <ArrowUpRight />
                  </button>
                  <small>3 dakikalık premium ön analiz</small>
                </div>
              )}

              {step === 1 && (
                <Question title="Sizinle nasıl iletişime geçebiliriz?" number="01">
                  <div className="intake-grid">
                    <Field
                      label="Ad Soyad"
                      value={form.fullName}
                      onChange={(value) => updateField("fullName", value)}
                      placeholder="Örn. Ayşe Demir"
                    />
                    <Field
                      label="E-posta"
                      type="email"
                      value={form.email}
                      onChange={(value) => updateField("email", value)}
                      placeholder="mail@domain.com"
                    />
                    <Field
                      label="Telefon"
                      value={form.phone}
                      onChange={(value) => updateField("phone", value)}
                      placeholder="+90 ..."
                    />
                  </div>
                </Question>
              )}

              {step === 2 && (
                <Question title="Profesyonel profilinizi nasıl tanımlarsınız?" number="02">
                  <div className="intake-grid">
                    <Field
                      label="Meslek / Uzmanlık Alanı"
                      value={form.profession}
                      onChange={(value) => updateField("profession", value)}
                      placeholder="Örn. Dermatolog, CEO, Avukat"
                    />
                    <div className="field">
                      <label>Kategori</label>
                      <select
                        value={form.category}
                        onChange={(event) => updateField("category", event.target.value)}
                      >
                        <option value="">Seçiniz</option>
                        {categories.map((category) => (
                          <option value={category} key={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="field">
                      <label>Şehir</label>
                      <select
                        value={form.country}
                        onChange={(event) => updateField("country", event.target.value)}
                      >
                        <option value="">İl seçiniz</option>
                        {turkishCities.map((city) => (
                          <option value={`${city} / Türkiye`} key={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </Question>
              )}

              {step === 3 && (
                <Question title="En çok hangi alanda desteğe ihtiyacınız var?" number="03">
                  <div className="choice-grid">
                    {needOptions.map((need) => (
                      <button
                        className={form.needs.includes(need) ? "choice is-selected" : "choice"}
                        key={need}
                        type="button"
                        onClick={() => toggleNeed(need)}
                      >
                        {need}
                      </button>
                    ))}
                  </div>
                </Question>
              )}

              {step === 4 && (
                <Question
                  title="İki cümleyle hedefinizi ve en büyük görünürlük/itibar probleminizi anlatın."
                  number="04"
                  description="Örn. Alanımda daha güvenilir görünmek istiyorum. Dijitalde ismim arandığında güçlü ve profesyonel bir izlenim oluşmuyor."
                >
                  <textarea
                    value={form.goal}
                    onChange={(event) => updateField("goal", event.target.value)}
                    placeholder="Hedefinizi ve mevcut problemi kısaca yazın..."
                    rows={5}
                  />
                  <span className="field-hint">En az 20 karakter</span>
                </Question>
              )}

              {step === 5 && (
                <Question
                  title="Varsa dijital varlık linklerinizi paylaşın."
                  number="05"
                  description="Web sitesi, LinkedIn, Instagram, YouTube, X veya görünmesini istediğiniz diğer profiller."
                >
                  <textarea
                    value={form.links}
                    onChange={(event) => updateField("links", event.target.value)}
                    placeholder="Linkleri satır satır ekleyebilirsiniz..."
                    rows={5}
                  />
                </Question>
              )}

              {step === 6 && (
                <Question title="Görüşme için hangi iletişim kanalını tercih edersiniz?" number="06">
                  <div className="choice-grid contact-choice-grid">
                    {contactOptions.map((option) => (
                      <button
                        className={
                          form.contactPreference === option ? "choice is-selected" : "choice"
                        }
                        key={option}
                        type="button"
                        onClick={() => updateField("contactPreference", option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  <div className="privacy-reminder">
                    <strong>Son adımı tamamlamadan önce onay kutusunu işaretlemeyi unutmayın.</strong>
                    <span>
                      Bu onay yalnızca paylaştığınız bilgilerin ön görüşme ve ön analiz amacıyla
                      değerlendirilmesi içindir.
                    </span>
                  </div>
                  <label className="privacy-check">
                    <input
                      checked={form.privacyAccepted}
                      onChange={(event) =>
                        updateField("privacyAccepted", event.target.checked)
                      }
                      type="checkbox"
                    />
                    <span>
                      Paylaştığım bilgilerin ön görüşme ve ön analiz amacıyla
                      değerlendirilmesini kabul ediyorum.{" "}
                      <a href="/kvkk" target="_blank" rel="noreferrer">
                        KVKK ve gizlilik metnini okudum.
                      </a>
                    </span>
                  </label>
                </Question>
              )}

              {step === 7 && (
                <Question title="Ön analiz özetiniz hazır." number="07">
                  <div className="intake-summary">
                    <SummaryItem label="Ad Soyad" value={form.fullName} />
                    <SummaryItem label="Meslek" value={form.profession} />
                    <SummaryItem label="İhtiyaç" value={form.needs.join(", ")} />
                    <SummaryItem label="Tercih" value={form.contactPreference} />
                  </div>
                  <p className="summary-note">
                    Supabase bağlantısı eklendiğinde bu özet başvuru kaydı olarak
                    admin paneline düşecek.
                  </p>
                  <button className="button button-primary" type="submit">
                    {isSubmitting ? "Kaydediliyor..." : "Ön Analizi Tamamla"}
                    <ArrowUpRight />
                  </button>
                  {submitError && <p className="summary-note">{submitError}</p>}
                </Question>
              )}
            </section>

            {step > 0 && (
              <nav className="intake-navigation" aria-label="Form adımları">
                <button type="button" onClick={previousStep}>
                  <ArrowRight />
                </button>
                <button
                  disabled={!canContinue || step === steps.length - 1}
                  type="button"
                  onClick={nextStep}
                >
                  <ArrowRight />
                </button>
              </nav>
            )}
          </>
        ) : (
          <section className="intake-success">
            <BrandLogo compact />
            <span className="section-index">Başvurunuz Alındı</span>
            <h1>Teşekkür ederiz, ön analiz bilgileriniz hazır.</h1>
            <p>
              Başvurunuz güvenli şekilde alındı. Ekibimiz ön analiz bilgilerinizi
              inceleyip tercih ettiğiniz iletişim kanalından sizinle dönüş yapacak.
            </p>
            <a className="button button-primary" href={returnPath}>
              Geri Dön
              <ArrowUpRight />
            </a>
          </section>
        )}
      </form>
    </main>
  );
}

function Question({
  children,
  description,
  number,
  title,
}: {
  children: React.ReactNode;
  description?: string;
  number: string;
  title: string;
}) {
  return (
    <div className="question">
      <span className="question-number">{number}</span>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}

function Field({
  label,
  onChange,
  placeholder,
  type = "text",
  value,
}: {
  label: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  value: string;
}) {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value || "-"}</strong>
    </div>
  );
}
