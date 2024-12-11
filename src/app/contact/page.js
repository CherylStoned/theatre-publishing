'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Mail, Phone, Clock, FileQuestion } from 'lucide-react';
import Footer from '../components/footer';

export default function Contact() {
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
            <li className="hover:text-green-200 cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-green-200 cursor-pointer font-semibold">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="space-y-8">
          {/* Contact Section */}
          <section>
            <h1 className="text-3xl font-bold text-green-800 mb-6">Contact Us</h1>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="text-green-600 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:frogvalleypublishing@gmail.com" className="text-green-600 hover:underline">
                          frogvalleypublishing@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="text-green-600 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <a href="tel:5403383324" className="text-green-600 hover:underline">
                          (540) 338-3324
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="text-green-600 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold">Response Time</h3>
                        <p className="text-gray-600">We typically respond within 1-2 business days</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Quick Contact Tips</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• For play quotes, please include your school/organization name</li>
                      <li>• Mention your preferred performance dates</li>
                      <li>• Include any specific questions about the play</li>
                      <li>• Let us know if you need any additional resources</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section id="faq">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Frequently Asked Questions</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">How do I license a play?</h3>
                    <p className="text-gray-600">
                      Contact us via email or phone with your play selection and performance dates. We'll provide you with a quote and licensing agreement.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">What if I don't know the performance dates?</h3>
                    <p className="text-gray-600">
                      We are able to provide a license with the dates To Be Determined (TBD). We must be informed of the performance dates as soon as possible.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">What's included with the license?</h3>
                    <p className="text-gray-600">
                      Each license includes a PDF of the script, performance rights for agreed dates, and permission to make copies for your cast and crew.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Can I modify the script?</h3>
                    <p className="text-gray-600">
                      Changing gender of major characters and making cuts to achieve specific time limits must be approved in advance. Altering language to make a play or references more "current" is acceptable.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">How far in advance should I license a play?</h3>
                    <p className="text-gray-600">
                      We recommend securing your license at least 2-3 months before rehearsals begin to ensure adequate preparation time.
                    </p>
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