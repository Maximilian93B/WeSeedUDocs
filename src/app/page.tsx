export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div className="max-w-4xl mx-auto px-6 py-12 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 pb-6 border-b-4 border-black">
            WeSeedU Business Plan
          </h1>
        </header>

        <main className="space-y-12">
          {/* Executive Summary */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 pb-2 border-b border-black">
              Executive Summary
            </h2>
            <p className="text-justify leading-relaxed">
              WeSeedU is an early-stage investment platform focused on sustainable innovation and technology startups. The platform connects purpose-driven founders with values-aligned investors through a curated selection of high-quality, vetted opportunities. WeSeedU differentiates itself with a suite of features designed to foster transparency, trust, and engagement. These include secure investor communities, third-party startup evaluations, and an AI-powered news agent that delivers personalized insights. Additionally, verified users who complete KYC requirements will be able to open cash accounts and trade securities directly through the platform, with WeSeedU acting as the intermediary. This enables a seamless and compliant secondary marketplace that enhances liquidity for investors. With growing demand for ESG-aligned investment opportunities and limited trusted platforms available, WeSeedU is positioned to become a leading destination for sustainable private market investing.
            </p>
          </section>

          {/* Market Opportunity */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 pb-2 border-b border-black">
              Market Opportunity
            </h2>
            <ul className="space-y-3">
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Crowdfunding Market Growth</strong>: Global crowdfunding is projected to grow from $1.5B in 2023 to $5.4B by 2032 (15.4% CAGR).</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Investor Interest</strong>: 77% of investors seek market-rate returns plus social/environmental impact; 54% plan to increase sustainable investments.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Trust Gap</strong>: ESG greenwashing concerns highlight the need for transparent, credible platforms—WeSeedU fills this gap via third-party evaluations.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Alternative Funding Channels</strong>: Capital exists, but early-stage sustainable startups often lack access; WeSeedU enables that connection.</div>
               </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Momentum</strong>: Despite downturns, sustainable startups raised $9.6B in H1 2024 alone, showing sector resilience and interest.</div>
              </li>
            </ul>
          </section>

          {/* Product Overview */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 pb-2 border-b border-black">
              Product Overview
            </h2>
            <ul className="space-y-3">
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Curated Startups</strong>: Exclusive listings in sectors like renewable energy, clean tech, and sustainable agriculture. Each company is evaluated and mapped to UN SDGs.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Celebrity Ambassadors</strong>: Public figures advocate for each startup, driving trust and visibility.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Investor Communities</strong>: Social hubs allow investors to discuss startups, share insights, and peer-trade equity (within legal bounds).</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Third-Party Due Diligence</strong>: Independent reports from firms like KPMG enhance transparency and investor confidence.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>AI News Agent</strong>: Custom AI tool curates and summarizes relevant sector news for each investor. Available as a premium feature for subscribed users.</div>
              </li>
            </ul>
          </section>

          {/* Business Model */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 pb-2 border-b border-black">
              Business Model
            </h2>
            <p className="text-justify leading-relaxed mb-4">
              WeSeedU&apos;s revenue model is centered on a flexible 10% success fee per company, structured based on the amount of capital raised.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Tiered Success Fee Structure</strong>: The more a company raises, the lower the percentage WeSeedU charges—while smaller raises may incur a higher fee to offset onboarding and due diligence costs. This approach ensures fairness while supporting smaller, early-stage ventures.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div>
                  <strong>Fee Options</strong>:
                  <ul className="mt-2 ml-4 space-y-1">
                    <li className="flex">
                      <span className="font-bold mr-2">◦</span>
                      <div><strong>Hybrid Model</strong>: A mix of cash and equity (e.g., 5% in cash and 5% in equity).</div>
                    </li>
                    <li className="flex">
                      <span className="font-bold mr-2">◦</span>
                      <div><strong>Equity-Only Model</strong>: Taking a 10% equity stake in lieu of cash to align long-term interests.</div>
                    </li>
                    <li className="flex">
                      <span className="font-bold mr-2">◦</span>
                      <div><strong>Cash-Only Model</strong>: Charging a full 10% of the capital raised in cash.</div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Secondary Market Revenue</strong>: WeSeedU facilitates peer-to-peer security exchanges between verified investors. A transaction fee (e.g., 3–5%) will be charged for each trade, with WeSeedU handling compliance and execution.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Cash Account Integration</strong>: Users will be able to open cash accounts to purchase securities based on platform-defined investment minimums. This feature streamlines the investment process while ensuring regulatory compliance.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>AI News Agent Subscription</strong>: Access to the AI-powered news agent will be offered as a premium feature. Investors can subscribe on a monthly or annual basis to receive curated, real-time insights tailored to their portfolio and sustainability interests. This not only adds value for active users but also creates a recurring revenue stream independent of deal flow.</div>
              </li>
            </ul>
            <p className="text-justify leading-relaxed">
              This performance-driven model aligns WeSeedU&apos;s success with that of the startups it supports. The structure is designed to maximize platform value while maintaining fairness and accessibility across a wide range of deals.
            </p>
          </section>

          {/* Go-to-Market Strategy */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 pb-2 border-b border-black">
              Go-to-Market Strategy
            </h2>
            <ul className="space-y-3">
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Beta Launch</strong>: Closed beta with early users; refine UX, ensure compliance.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Launch Portfolio</strong>: 3–5 quality startups with traction and ambassadors.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Celebrity Campaigns</strong>: Coordinated PR and social content via high-profile advocates.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Community Content</strong>: Webinars, Q&As, thought leadership to build authority.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Strategic Partnerships</strong>: With firms (KPMG), networks (UN), and broker-dealers.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Investor Targeting</strong>: Focus on ESG-conscious retail investors, family offices, and wealth managers.</div>
              </li>
            </ul>
          </section>

          {/* Financial Plan */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 pb-2 border-b border-black">
              Financial Plan (First 6 Months)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-black">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-black px-4 py-3 text-left font-semibold">Expense Category</th>
                    <th className="border border-black px-4 py-3 text-left font-semibold">Monthly Cost</th>
                    <th className="border border-black px-4 py-3 text-left font-semibold">6-Month Total</th>
                    <th className="border border-black px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-gray-50">
                    <td className="border border-black px-4 py-3">Founder Compensation</td>
                    <td className="border border-black px-4 py-3">$5,000</td>
                    <td className="border border-black px-4 py-3">$30,000</td>
                    <td className="border border-black px-4 py-3">Includes CEO absorbing misc. travel/tools</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="border border-black px-4 py-3">Legal & Compliance</td>
                    <td className="border border-black px-4 py-3">N/A</td>
                    <td className="border border-black px-4 py-3">$15,000</td>
                    <td className="border border-black px-4 py-3">Incorporation, TOS, filings</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="border border-black px-4 py-3">Startup Evaluations</td>
                    <td className="border border-black px-4 py-3">N/A</td>
                    <td className="border border-black px-4 py-3">$20,000</td>
                    <td className="border border-black px-4 py-3">Two due diligence reports</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="border border-black px-4 py-3">Hosting & Infrastructure</td>
                    <td className="border border-black px-4 py-3">$500</td>
                    <td className="border border-black px-4 py-3">$3,000</td>
                    <td className="border border-black px-4 py-3">Cloud & AI API costs</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="border border-black px-4 py-3">Marketing & Partnerships</td>
                    <td className="border border-black px-4 py-3">Varies</td>
                    <td className="border border-black px-4 py-3">$5,000</td>
                    <td className="border border-black px-4 py-3">Organic campaigns, PR kits</td>
                  </tr>
                  <tr className="bg-gray-50 font-bold">
                    <td className="border border-black px-4 py-3"><strong>Total</strong></td>
                    <td className="border border-black px-4 py-3">—</td>
                    <td className="border border-black px-4 py-3"><strong>$73,000</strong></td>
                    <td className="border border-black px-4 py-3">Misc. admin costs absorbed by CEO</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Revenue Forecast */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 pb-2 border-b border-black">
              Revenue Forecast (Cash Portion Only)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-black">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-black px-4 py-3 text-left font-semibold">Year</th>
                    <th className="border border-black px-4 py-3 text-left font-semibold">Funded Startups</th>
                    <th className="border border-black px-4 py-3 text-left font-semibold">Avg. Raise</th>
                    <th className="border border-black px-4 py-3 text-left font-semibold">Total Raised</th>
                    <th className="border border-black px-4 py-3 text-left font-semibold">10% Fee</th>
                    <th className="border border-black px-4 py-3 text-left font-semibold">Est. Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-gray-50">
                    <td className="border border-black px-4 py-3">1</td>
                    <td className="border border-black px-4 py-3">10</td>
                    <td className="border border-black px-4 py-3">$500,000</td>
                    <td className="border border-black px-4 py-3">$5,000,000</td>
                    <td className="border border-black px-4 py-3">$500,000</td>
                    <td className="border border-black px-4 py-3">$500,000</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="border border-black px-4 py-3">2</td>
                    <td className="border border-black px-4 py-3">30</td>
                    <td className="border border-black px-4 py-3">$800,000</td>
                    <td className="border border-black px-4 py-3">$24,000,000</td>
                    <td className="border border-black px-4 py-3">$2.4M</td>
                    <td className="border border-black px-4 py-3">$2.4M</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="border border-black px-4 py-3">3</td>
                    <td className="border border-black px-4 py-3">60</td>
                    <td className="border border-black px-4 py-3">$1,000,000</td>
                    <td className="border border-black px-4 py-3">$60,000,000</td>
                    <td className="border border-black px-4 py-3">$6M</td>
                    <td className="border border-black px-4 py-3">$6M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Competitive Positioning */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 pb-2 border-b border-black">
              Competitive Positioning
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-black">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-black px-4 py-3 text-left font-semibold">Platform</th>
                    <th className="border border-black px-4 py-3 text-left font-semibold">Cash Fee</th>
                    <th className="border border-black px-4 py-3 text-left font-semibold">Equity</th>
                    <th className="border border-black px-4 py-3 text-left font-semibold">Investor Fee</th>
                    <th className="border border-black px-4 py-3 text-left font-semibold">Unique Features</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-gray-50">
                    <td className="border border-black px-4 py-3">WeSeedU</td>
                    <td className="border border-black px-4 py-3">~10%</td>
                    <td className="border border-black px-4 py-3">Optional</td>
                    <td className="border border-black px-4 py-3">Low/None</td>
                    <td className="border border-black px-4 py-3">AI Insights (Premium), Ambassador-backed Campaigns, KYC-Verified Secondary Market</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="border border-black px-4 py-3">Wefunder</td>
                    <td className="border border-black px-4 py-3">7.5–7.9%</td>
                    <td className="border border-black px-4 py-3">None</td>
                    <td className="border border-black px-4 py-3">2% (capped)</td>
                    <td className="border border-black px-4 py-3">Scale, open model</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="border border-black px-4 py-3">Republic</td>
                    <td className="border border-black px-4 py-3">6%</td>
                    <td className="border border-black px-4 py-3">2% SAFE</td>
                    <td className="border border-black px-4 py-3">None</td>
                    <td className="border border-black px-4 py-3">Crypto, curated tech</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="border border-black px-4 py-3">StartEngine</td>
                    <td className="border border-black px-4 py-3">7%</td>
                    <td className="border border-black px-4 py-3">2%</td>
                    <td className="border border-black px-4 py-3">5% on trades</td>
                    <td className="border border-black px-4 py-3">Secondary market</td>
                  </tr>
                  <tr className="even:bg-gray-50">
                    <td className="border border-black px-4 py-3">SeedInvest</td>
                    <td className="border border-black px-4 py-3">7.5%</td>
                    <td className="border border-black px-4 py-3">5%</td>
                    <td className="border border-black px-4 py-3">2% (capped)</td>
                    <td className="border border-black px-4 py-3">High vetting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Regulatory & Operational Readiness */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 pb-2 border-b border-black">
              Regulatory & Operational Readiness
            </h2>
            <ul className="space-y-3">
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Securities Compliance</strong>: Reg CF, Reg A+, or Reg D, depending on campaign structure.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Licensing Options</strong>: Operate as Funding Portal or partner with Broker-Dealer.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Secondary Market Setup</strong>: Explore ATS partnerships or custom P2P framework.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Investor KYC/AML</strong>: Third-party identity verification, investor limits enforced.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Fund Custody</strong>: Escrow via partner bank; no direct handling.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Cybersecurity</strong>: GDPR and PIPEDA compliance, encrypted infrastructure.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Content Vetting</strong>: Legal oversight for marketing materials, especially celebrity campaigns.</div>
              </li>
            </ul>
          </section>

          {/* Team */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 pb-2 border-b border-black">
              Team
            </h2>
            <ul className="space-y-3">
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div><strong>Founder/CEO</strong>: Maximilian Bosch – software developer, strategist, and fintech operator with a passion for sustainable innovation. Leads all tech, business, and growth functions.</div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div>
                  <strong>Advisors</strong>:
                  <ul className="mt-2 ml-4 space-y-1">
                    <li className="flex">
                      <span className="font-bold mr-2">◦</span>
                      <div><em>Compliance Advisor</em>: Ex-Big Four partner, supports evaluation structuring.</div>
                    </li>
                    <li className="flex">
                      <span className="font-bold mr-2">◦</span>
                      <div><em>Sustainability Advisor</em>: UN-aligned entrepreneur, helps with deal sourcing.</div>
                    </li>
                    <li className="flex">
                      <span className="font-bold mr-2">◦</span>
                      <div><em>Crowdfunding Expert</em>: Industry mentor guiding scale strategy.</div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <div>
                  <strong>Future Hires</strong>:
                  <ul className="mt-2 ml-4 space-y-1">
                    <li className="flex">
                      <span className="font-bold mr-2">◦</span>
                      <div>Head of Compliance/Operations</div>
                    </li>
                    <li className="flex">
                      <span className="font-bold mr-2">◦</span>
                      <div>Community & Marketing Manager</div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>

          {/* Closing Statement */}
          <section>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 pb-2 border-b border-black">
              Closing Statement
            </h2>
            <p className="text-justify leading-relaxed">
              WeSeedU combines the rigor of venture investing with the reach of digital crowdfunding. With curated listings, celebrity-powered communities, and a scalable tech foundation, it delivers value for investors, startups, and society. The platform is pre-revenue but operationally ready, lean by design, and built for impact. Maximilian Bosch&apos;s leadership and aligned advisory board ensure disciplined growth. Within 6–12 months, WeSeedU is poised to become a trusted marketplace for early-stage sustainable investment.
            </p>
          </section>

          {/* Contact Section */}
          <div className="mt-16 p-8 border-2 border-black bg-gray-50 text-center">
            <h3 className="text-xl font-semibold mb-4">
              For inquiries, partnerships, or early access:
            </h3>
            <p className="space-y-1">
              <span className="block">
                <strong>Contact:</strong> <a href="mailto:maximilian.bosch@weseedu.com" className="underline hover:no-underline">maximilian.bosch@weseedu.com</a>
              </span>
              <span className="block">
                <strong>Website:</strong> <a href="http://www.weseedu.com/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">www.weseedu.com</a>
              </span>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
