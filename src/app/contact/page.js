import React from 'react';
import { Mail, Phone, Clock, FileText, Calendar, Book, Settings, AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ContactFAQ = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-800">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-green-600" size={20} />
              <div>
                <div className="font-semibold">Email</div>
                <a href="mailto:FrogValleyPublishing@gmail.com" className="text-green-600 hover:underline">
                  FrogValleyPublishing@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="text-green-600" size={20} />
              <div>
                <div className="font-semibold">Phone</div>
                <a href="tel:+15403383224" className="text-green-600 hover:underline">(540) 338-3224</a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Clock className="text-green-600" size={20} />
              <div>
                <div className="font-semibold">Response Time</div>
                <p>We typically respond within 1-2 business days</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-800">Quick Contact Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="mt-1 min-w-[20px]">•</div>
                <span>For play quotes, please include your school/organization name</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 min-w-[20px]">•</div>
                <span>Mention your preferred performance dates</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 min-w-[20px]">•</div>
                <span>Include any specific questions about the play</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 min-w-[20px]">•</div>
                <span>Let us know if you need any additional resources</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <FileText className="text-green-600" size={20} />
              <h3 className="text-xl font-semibold">How do I license a play?</h3>
            </div>
            <p className="text-gray-600 ml-8">Contact us via email or phone with your play selection and performance dates. We'll provide you with a quote and licensing agreement. Please note that scripts must be purchased separately from the performance license.</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Book className="text-green-600" size={20} />
              <h3 className="text-xl font-semibold">What's included with the license?</h3>
            </div>
            <p className="text-gray-600 ml-8">The license grants performance rights for agreed dates only. Scripts are not included with the license and must be purchased separately for each cast and crew member. One review copy of the script will be provided with your license quote.</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="text-green-600" size={20} />
              <h3 className="text-xl font-semibold">What if I don't know the performance dates?</h3>
            </div>
            <p className="text-gray-600 ml-8">We can provide a license with the dates To Be Determined (TBD). You must inform us of the final performance dates as soon as they are confirmed.</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Settings className="text-green-600" size={20} />
              <h3 className="text-xl font-semibold">Can I modify the script?</h3>
            </div>
            <p className="text-gray-600 ml-8">Minor modifications for content appropriateness are allowed. Please discuss any significant changes with us during the licensing process.</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="text-green-600" size={20} />
              <h3 className="text-xl font-semibold">How far in advance should I license a play?</h3>
            </div>
            <p className="text-gray-600 ml-8">We recommend securing your license at least 2-3 months before rehearsals begin to ensure adequate preparation time and script availability.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFAQ;