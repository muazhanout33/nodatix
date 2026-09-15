"use client";

import { useState, useCallback } from "react";
import { useReveal } from "../hooks/useReveal";
import { Icon } from "../SxIcons";

interface RequestFormProps {
  t: (k: string) => string;
}

const WA_LINK =
  "https://wa.me/201105920342?text=Hello%2C%20I'm%20interested%20in%20a%20CRM%20%2B%20ERP%20system%20for%20my%20business";

const BTYPE_OPTIONS = ["opt1", "opt2", "opt3", "opt4", "opt5", "opt6"];

interface FormData {
  name: string;
  company: string;
  btype: string;
  email: string;
  phone: string;
  systems: string;
  problem: string;
  sources: string;
  reporting: string;
  automate: string;
  msg: string;
}

interface FormErrors {
  name?: boolean;
  company?: boolean;
  btype?: boolean;
  email?: boolean;
  phone?: boolean;
  problem?: boolean;
}

export default function RequestFormSection({ t }: RequestFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [ref, setRef] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    btype: "",
    email: "",
    phone: "",
    systems: "",
    problem: "",
    sources: "",
    reporting: "",
    automate: "",
    msg: "",
  });

  const headRef = useReveal();
  const formRef = useReveal();

  const updateField = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: FormErrors = {};

      if (!formData.name.trim()) newErrors.name = true;
      if (!formData.company.trim()) newErrors.company = true;
      if (!formData.btype) newErrors.btype = true;
      if (
        !formData.email.trim() ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      )
        newErrors.email = true;
      if (
        !formData.phone.trim() ||
        !/^[+0-9 ()-]{7,}$/.test(formData.phone)
      )
        newErrors.phone = true;
      if (!formData.problem.trim()) newErrors.problem = true;

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      const newRef =
        "SX-" +
        Math.random()
          .toString(36)
          .slice(2, 7)
          .toUpperCase();

      try {
        const leads = JSON.parse(localStorage.getItem("sx_leads") || "[]");
        leads.push({ ...formData, ref: newRef });
        localStorage.setItem("sx_leads", JSON.stringify(leads));
      } catch {}

      setRef(newRef);
      setSubmitted(true);
    },
    [formData]
  );

  if (submitted) {
    return (
      <section className="sx-sec alt" id="request">
        <div className="sx-wrap">
          <div className="sx-sec-head">
            <span className="sx-kicker">{t("rq_kicker")}</span>
            <h2>{t("rq_title")}</h2>
            <p>{t("rq_sub")}</p>
          </div>
          <div style={{ maxWidth: 820 }}>
            <div className="sx-card sx-pad">
              <div className="sx-success-box">
                <Icon name="i-check" size={34} color="#0E8A5F" />
                <div className="big">
                  {t("rq_ok_t")} {ref}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--ink2)",
                    maxWidth: 440,
                    margin: "0 auto",
                  }}
                >
                  {t("rq_ok_b")}
                </p>
                <a
                  className="sx-btn wa"
                  style={{ marginTop: 18 }}
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener"
                >
                  {t("rq_ok_cta")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="sx-sec alt" id="request">
      <div className="sx-wrap">
        <div className="sx-sec-head" ref={headRef}>
          <span className="sx-kicker">{t("rq_kicker")}</span>
          <h2>{t("rq_title")}</h2>
          <p>{t("rq_sub")}</p>
        </div>
        <div style={{ maxWidth: 820 }} ref={formRef}>
          <div className="sx-card sx-pad">
            <form onSubmit={handleSubmit} noValidate>
              <h3 style={{ fontSize: 17, marginBottom: 4 }}>{t("rq_head")}</h3>
              <p
                style={{
                  fontSize: 13.5,
                  color: "var(--mut)",
                  marginBottom: 22,
                }}
              >
                {t("rq_head_s")}
              </p>
              <div className="sx-form-grid">
                <div className={`sx-field${errors.name ? " bad" : ""}`}>
                  <label>
                    {t("f_name")} <span className="req">*</span>
                  </label>
                  <input
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                  />
                  <div className="err">{t("e_req")}</div>
                </div>
                <div className={`sx-field${errors.company ? " bad" : ""}`}>
                  <label>
                    {t("f_company")} <span className="req">*</span>
                  </label>
                  <input
                    value={formData.company}
                    onChange={(e) => updateField("company", e.target.value)}
                  />
                  <div className="err">{t("e_req")}</div>
                </div>
                <div className={`sx-field${errors.btype ? " bad" : ""}`}>
                  <label>
                    {t("f_btype")} <span className="req">*</span>
                  </label>
                  <select
                    value={formData.btype}
                    onChange={(e) => updateField("btype", e.target.value)}
                  >
                    <option value="">{t("ph_btype")}</option>
                    {BTYPE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {t(opt)}
                      </option>
                    ))}
                  </select>
                  <div className="err">{t("e_req")}</div>
                </div>
                <div className={`sx-field${errors.email ? " bad" : ""}`}>
                  <label>
                    {t("f_email")} <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                  <div className="err">{t("e_email")}</div>
                </div>
                <div className={`sx-field${errors.phone ? " bad" : ""}`}>
                  <label>
                    {t("f_phone")} <span className="req">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                  />
                  <div className="err">{t("e_req")}</div>
                </div>
                <div className="sx-field">
                  <label>{t("f_systems")}</label>
                  <input
                    placeholder={t("ph_systems")}
                    value={formData.systems}
                    onChange={(e) => updateField("systems", e.target.value)}
                  />
                </div>
                <div
                  className={`sx-field${errors.problem ? " bad" : ""}`}
                  style={{ gridColumn: "1 / -1" }}
                >
                  <label>
                    {t("f_problem")} <span className="req">*</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder={t("ph_problem")}
                    value={formData.problem}
                    onChange={(e) => updateField("problem", e.target.value)}
                  />
                  <div className="err">{t("e_problem")}</div>
                </div>
                <div className="sx-field">
                  <label>{t("f_sources")}</label>
                  <input
                    placeholder={t("ph_sources")}
                    value={formData.sources}
                    onChange={(e) => updateField("sources", e.target.value)}
                  />
                </div>
                <div className="sx-field">
                  <label>{t("f_reporting")}</label>
                  <input
                    placeholder={t("ph_reporting")}
                    value={formData.reporting}
                    onChange={(e) => updateField("reporting", e.target.value)}
                  />
                </div>
                <div className="sx-field" style={{ gridColumn: "1 / -1" }}>
                  <label>{t("f_automate")}</label>
                  <input
                    placeholder={t("ph_automate")}
                    value={formData.automate}
                    onChange={(e) => updateField("automate", e.target.value)}
                  />
                </div>
                <div className="sx-field" style={{ gridColumn: "1 / -1" }}>
                  <label>{t("f_msg")}</label>
                  <textarea
                    rows={2}
                    value={formData.msg}
                    onChange={(e) => updateField("msg", e.target.value)}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <button className="sx-btn blue" type="submit">
                  {t("rq_submit")}
                </button>
                <a
                  className="sx-btn wa"
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener"
                >
                  <Icon name="i-wa" size={15} />
                  <span>{t("cta_wa")}</span>
                </a>
                <span className="sx-req-note">{t("rq_note")}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
