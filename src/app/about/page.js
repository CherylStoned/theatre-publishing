'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import Footer from '../components/footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-green-600 text-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/" className="w-48 relative h-16">
              <Image
                src="/logo.jpg"
                alt="Frog Valley Publishing Logo"
                width={175}
                height={150}
                className="object-contain"
                priority
              />
            </Link>
            <div>
              <p className="text-lg text-green-100">Educational Theatre Publishing</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-green-800 text-white">
        <div className="max-w-6xl mx-auto p-4">
          <ul className="flex gap-6">
            <li className="hover:text-green-200 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-green-200 cursor-pointer">
              <Link href="/#plays">Plays</Link>
            </li>
            <li className="hover:text-green-200 cursor-pointer font-semibold">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-green-200 cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="space-y-8">
          {/* About Company Section */}
          <section>
            <h1 className="text-3xl font-bold text-green-800 mb-6">About Frog Valley Publishing</h1>
            <Card>
              <CardContent className="p-8">
                <p className="text-gray-600">
                  Frog Valley Publishing is dedicated to providing high-quality theatrical works for educational and competitive settings. Since 1999, we've been publishing award-winning plays that have enriched theater programs across the country.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* About the Author Section */}
          <section>
            <h2 className="text-3xl font-bold text-green-800 mb-6">About the Author</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-gray-600">
                    John Wells, an award-winning playwright and educator, dedicated nearly four decades to shaping young theatrical minds at Loudoun County High School before his retirement in 2020. His journey as a playwright began in 1991 with "Competition Piece," which was promptly published by Samuel French (now Concord Theatricals). This marked the beginning of a prolific writing career that yielded nearly 20 plays of varying lengths and themes.
                  </p>

                  <p className="text-gray-600">
                    A celebrated figure in Virginia's theatrical education landscape, Wells garnered numerous prestigious accolades. He won both the Virginia Theatre Association and Southeast Theatre Conference High School play competitions twice (1995/96 and 1999/2000). His original work "Invisible Man" became a cornerstone of Virginia high school theater, achieving the distinction of being the most-produced one-act at the Virginia High School League (VHSL) State level competition between 2002 and 2013, with six productions during this period.
                  </p>

                  <p className="text-gray-600">
                    Wells' impact on educational theater extended beyond his personal achievements. In a remarkable demonstration of his influence, three of the sixteen plays produced at the 2010 VHSL A/AA State level competition were his original works. His mentorship inspired generations of young playwrights, with nearly 20 of his students being selected for the New Voices for Theatre Summer Playwriting Institute between 1989 and 2019.
                  </p>

                  <p className="text-gray-600">
                    His excellence in education received wide recognition. Wells was named an "Agnes Meyer Teacher of the Year" Finalist in both 2000 and 2007, and received the Virginia Theatre Association's prestigious "Lifetime Achievement Award" in 2006. In 2019, he achieved another milestone by becoming one of the first Certified Master Educators named by the Virginia Theatre Association.
                  </p>

                  <p className="text-gray-600">
                    While primarily focusing on productions with his students at LCHS, Wells also wrote several commissioned pieces throughout his career. Today, he continues to reside with his wife in Round Hill, Virginia, having left behind a lasting legacy in educational theater and playwriting.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-800">Awards & Recognition</h3>
                    <ul className="list-disc list-inside text-gray-600 ml-4">
                      <li>Virginia Theatre Association "Lifetime Achievement Award" (2006)</li>
                      <li>Agnes Meyer Teacher of the Year Finalist (2000, 2007)</li>
                      <li>Certified Master Educator - Virginia Theatre Association (2019)</li>
                      <li>Two-time winner of VTA and SETC High School play competitions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}