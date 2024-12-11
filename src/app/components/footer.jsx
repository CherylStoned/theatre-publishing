'use client'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-12">
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Frog Valley</h3>
            <p className="text-green-100">
              Publishing award-winning educational theatre since 1999.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-green-200 cursor-pointer">
                <Link href="/contact">Licensing Info</Link>
              </li>
              <li className="hover:text-green-200 cursor-pointer">
                <Link href="/contact">Submit a Play</Link>
              </li>
              <li className="hover:text-green-200 cursor-pointer">
                <Link href="/contact#faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-green-100">
              Email: FrogValleyPublishing@gmail.com<br />
              Phone: (540) 338-3224
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-green-700 text-center text-green-100">
          © 2024 Frog Valley Publishing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}