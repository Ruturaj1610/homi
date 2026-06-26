import { useState } from 'react'
import { faqs } from './landingData'
import SectionHeading from './SectionHeading'
import { cn } from '../../utils/cn'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="homi-section scroll-mt-24 bg-white">
      <div className="homi-container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions before your next move"
            description="Clear answers for students and young professionals exploring Homi for the first time."
            align="left"
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <article key={faq.question} className="homi-card-muted homi-card-interactive overflow-hidden p-0">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-slate-900">{faq.question}</span>
                    <span
                      className={cn(
                        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition duration-300',
                        isOpen && 'rotate-45 bg-slate-900 text-white ring-slate-900',
                      )}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="homi-subtitle px-6 pb-5">{faq.answer}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
