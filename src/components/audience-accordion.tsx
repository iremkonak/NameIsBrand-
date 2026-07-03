"use client";

import { useState } from "react";
import { ArrowUpRight } from "./icons";

type Audience = {
  title: string;
  need: string;
  outcome: string;
  tags: string[];
};

export function AudienceAccordion({ audiences }: { audiences: Audience[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="audience-list">
      {audiences.map((audience, index) => {
        const isOpen = openIndex === index;

        return (
          <div className={`audience-item ${isOpen ? "is-open" : ""}`} key={audience.title}>
            <button
              aria-expanded={isOpen}
              className="audience-trigger"
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>0{index + 1}</span>
              <strong>{audience.title}</strong>
              <ArrowUpRight />
            </button>

            {isOpen && (
              <div className="audience-panel">
                <div>
                  <span>Neden İhtiyaç Duyar?</span>
                  <p>{audience.need}</p>
                </div>
                <div>
                  <span>NAB Ne Sağlar?</span>
                  <p>{audience.outcome}</p>
                </div>
                <div className="audience-tags">
                  {audience.tags.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
