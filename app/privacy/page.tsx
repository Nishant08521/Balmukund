import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Balmukund Super Steel",
  description: "Privacy Policy for Balmukund Super Steel and Balmukund Group",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-15 text-right">Privacy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <ul className="list-disc list-outside space-y-4 pl-6">
            <li>
            Balmukund Super Steel welcomes you to its website and looks forward to a meaningful interaction with you.
            </li>
            <li>
            Balmukund Group respects your right to privacy. Any personal information that you share with us, like your name, date of birth, address and the like, shall be kept confidential.
            </li>
            
           <li>Balmukund Group assures you that your personal information shall not be used/disclosed by it, save for the purpose of doing the intended business with you, or if required to be disclosed under the due process of law.</li>
           <li>Balmukund Group assures you that in the event of your personal information being shared with its subsidiaries, business associates etc., such sharing of information shall be for the purpose of doing the intended business with you.</li>
           <li>Balmukund Group reserves its rights to collect, analyze and disseminate aggregate site usage patterns of all its visitors with a view to enhancing services to its visitors. This includes sharing the information with its subsidiaries, and business associates as a general business practice.</li>
           <li>In the course of its business Balmukund Group may hold on-line contests and surveys as permitted by law and it reserves its right to use and disseminate the information so collected to enhance its services to the visitors. This shall also include sharing the information with its subsidiaries and business associates as a general business practice.</li>
            <li>
            If you have any questions or concerns regarding your privacy issues, please do not hesitate to contact Balmukund Group at{" "}
              <a href="mailto:balmukundsponge@gmail.com" className="text-blue-600 hover:underline">
                balmukundsponge@gmail.com
              </a>
            </li>
            <li>While Balmukund Group assures you that it will do its best to ensure the privacy and security of your personal information, it shall not be responsible in any manner whatsoever for any violation or misuse of your personal information by unauthorized persons consequent to misuse of the internet environment.</li>
            <li>Balmukund Group reserves its rights to revise this privacy policy from time to time at its discretion without prior notice with a view to making the policy more user  friendly.</li>
            <li>In the design of our website, we have taken care to draw your attention to this privacy policy so that you are aware of the terms under which you may decide to share your personal information with us. Accordingly, should you choose to share your personal information with us, Balmukund Group will assume that you have no objections to the terms of this privacy policy.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

