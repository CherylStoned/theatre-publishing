import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, Theater, Award, Sparkles } from 'lucide-react';
import { use } from 'react';

const plays = [
  {
    title: "Invisible Man",
    genre: "Comedy/Drama",
    duration: "30-40 minutes",
    cast: {
      female: 10,
      male: 9,
      total: 19
    },
    description: "The play follows a day in the life of a mute, homeless man who is forced, literally, to beg for change in the subway. On this day, however, through some interaction with a young girl and her pushy stage mother, he finds a spark of inspiration and, through a series of touching, comic, violent, and very truthful scenes, begins to re-establish contact with the rest of the world.",
    awards: ["Virginia Theatre Association Winner", "Southeastern Theatre Conference Winner"],
    set: "Minimal"
  },
  {
    title: "A Tale of Nine Princesses",
    genre: "Comedy",
    duration: "90 minutes",
    cast: {
      female: 35,
      male: 35,
      total: 70
    },
    description: "This play has a king, a queen, a herd of princes and princesses, clowns, hand puppets, a giant fairy godmother, people with gigantic noses, and a three-headed monster named Mad Marsha…and everybody speaks! Each of nine princesses has some unpleasant character flaw.",
    set: "Multiple scenes",
    features: "Puppetry and physical comedy"
  },
  {
    title: "He Hears Voices",
    genre: "Drama",
    duration: "25-30 minutes",
    cast: {
      female: 6,
      male: 6,
      total: 12
    },
    description: "A tour bus driver from a small town in Mexico falls asleep at the wheel and wrecks the bus. All the passengers die, but he survives. Although he bears tremendous guilt, in his village, he's treated as someone touched by God and elevated to celebrity status.",
    set: "Minimal",
    features: "Mask work performance"
  },
  {
    title: "Wives Tales",
    genre: "Comedy",
    duration: "30 minutes",
    cast: {
      female: "8-11",
      male: 5,
      total: "13-16"
    },
    description: "The play chronicles the outrageous, ridiculous, and occasionally painful experiences of five different couples as they experience the magic and mystery of pregnancy. From conception to birth, with all the delightful moments in between.",
    awards: ["2nd Place Virginia Theatre Association", "3rd Place Virginia High School League State Theatre"],
    set: "Multiple scenes"
  },
  {
    title: "Chained to a Maniac",
    genre: "Comedy with dance",
    duration: "25-30 minutes",
    cast: {
      female: "7-10",
      male: 3,
      total: "10-13"
    },
    description: "Brian is the skinny guy without a girl. Malia, a girl, is his best friend. But Brian lusts after Emma, the cool popular girl, who barely knows his name. In his efforts to impress and get next to Emma, Brian keeps finding himself in situations he finds horrible and awkward, nearly all of which involve dance.",
    features: "Dance performances",
    set: "Flexible staging"
  },
  {
    title: "Six Days to Melissa",
    genre: "Comedy",
    duration: "30-35 minutes",
    cast: {
      female: 12,
      male: 6,
      total: 18
    },
    description: "Ethan wants to marry Melissa. Now! But a trip to the theatre turns into a life lesson on 'patience as a necessary virtue' when he is drawn from the anonymity of the audience onto the stage and into the glare of the spotlights.",
    set: "Minimal",
    features: "Interactive elements"
  },
  {
    title: "Love Lessons",
    genre: "Comedy",
    duration: "30-35 minutes",
    cast: {
      female: 7,
      male: 4,
      total: 11
    },
    description: "Carolyn, a young woman who always seems to fall for the wrong man, decides to give up men and falls in love with the statue of David. She manages to spend the night in the museum to be closer to him, only to find that he and several other statues come to life at closing!",
    awards: ["Showcase Production for Virginia Theatre Association Convention 2000"],
    set: "Museum setting"
  },
  {
    title: "Rehearsal for Life",
    genre: "Comedy",
    duration: "30 minutes",
    cast: {
      female: "8-11",
      male: 3,
      total: "11-14"
    },
    description: "There's an unusual theory that before being born, humans have ultimate knowledge of all things. With this odd premise in mind, Jackson, a young man about to be born, is treated to a preview of his life by a very special group of actors.",
    awards: ["Advanced to VHSL Regional 2002", "Advanced to State 2007"],
    set: "Abstract setting"
  },
  {
    title: "Worth the Wait",
    genre: "Comedy",
    duration: "30 minutes",
    cast: {
      female: 8,
      male: 4,
      total: 12
    },
    description: "A lot can happen while waiting online in the grocery store…Late at night…When the only open check-out lane is the self-serve with the talking computer…that has an attitude and a mind of its own. Love begins, ends, and is rediscovered, as everyone waits…and waits…and waits online.",
    set: "Grocery store setting",
    features: "Interactive computer character"
  },
  {
    title: "Othello in Blue",
    genre: "Drama w/ music",
    duration: "30-35 minutes",
    cast: {
      female: 2,
      male: 4,
      total: 6
    },
    description: "Shakespeare's classic Othello told in modern language through dialogue and blues music in 30 minutes.",
    awards: ["3rd Place Virginia High School League State Theatre 1992"],
    features: "Musical elements",
    set: "Minimal with music area"
  },
  {
    title: "Mr. Hastings Final Day",
    genre: "Black Comedy",
    duration: "30 minutes",
    cast: {
      female: 8,
      male: 2,
      total: 10
    },
    description: "Mary's scholarship to the very exclusive Bedinger Academy for Girls is threatened when her bitter, pompous teacher, Mr. Hastings, accuses her of plagiarism. Innocent of the accusation, but faced with possible expulsion, Mary and her friends scheme to prove her innocence and get rid of the evil Mr. Hastings for good.",
    set: "Classroom setting"
  },
  {
    title: "It Can't Happen to Me",
    genre: "Comedy",
    duration: "25-30 minutes",
    cast: {
      female: 9,
      male: 9,
      total: 18
    },
    description: "Commissioned by the City of Harrisonburg/Rockingham County Public Schools in conjunction with the Virginia Department of Health to combat teen pregnancy, this play was designed to be performed by high school students for middle school students.",
    set: "Minimal",
    features: "Educational content"
  },
  {
    title: "The Ladykiller",
    genre: "Comedy",
    duration: "30 minutes",
    cast: {
      female: 1,
      male: 1,
      total: 2
    },
    description: "This play features 2 actors playing 9 different roles and tells the wacky story of a serial killer whose signature targets are vegetarian women. A tour-de-force for a pair of actors with strong improvisational backgrounds who love broad, ridiculous characters.",
    features: "Multiple role-playing",
    set: "Minimal with quick changes"
  },
  {
    title: "This Close!",
    genre: "Comedy",
    duration: "45-55 minutes",
    cast: {
      female: 6,
      male: 5,
      total: 11
    },
    description: "Commissioned by the University of South Carolina as a short play to be performed for all incoming freshmen to inform and deter dangerous, immature, or naïve behavior resulting, primarily from alcohol abuse.",
    set: "Minimal",
    features: "Educational content"
  }
];

async function getPlayBySlug(slug) {
  return Promise.resolve(plays.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === slug));
}

export default function Page({ params }) {
  const play = use(getPlayBySlug(params.slug));

  if (!play) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-600">Play not found</h1>
          <Link href="/" className="text-green-600 hover:underline mt-4 block">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="bg-gradient-to-r from-green-700 to-green-600 text-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <Link href="/" className="w-48 relative">
              <Image
                src="/logo.jpg"
                alt="Frog Valley Publishing Logo"
                width={175}
                height={150}
                priority
                className="object-contain"
              />
            </Link>
            <div>
              <p className="text-lg text-green-100">Educational Theatre Publishing</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <Link href="/" className="text-green-600 hover:underline mb-6 inline-flex items-center gap-2">
          ← Back to All Plays
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-green-800 mb-2">{play.title}</h1>
          <div className="text-lg text-green-600 mb-6">{play.genre}</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-green-600" />
              <span>{play.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} className="text-green-600" />
              <span>{play.cast.total} roles ({play.cast.female}F, {play.cast.male}M)</span>
            </div>
            <div className="flex items-center gap-2">
              <Theater size={20} className="text-green-600" />
              <span>{play.set}</span>
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <h2 className="text-xl font-bold text-green-800 mb-4">Description</h2>
            <p className="text-gray-600 whitespace-pre-line">{play.description}</p>
          </div>

          {play.awards && play.awards.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <Award size={20} className="text-green-600" />
                Awards & Recognition
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                {play.awards.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
            </div>
          )}

          {play.features && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <Sparkles size={20} className="text-green-600" />
                Special Features
              </h2>
              <p className="text-gray-600">{play.features}</p>
            </div>
          )}

          <div className="flex items-center justify-end mt-8 pt-8 border-t border-gray-200">
            <Link 
              href={`mailto:frogvalleypublishing@gmail.com?subject=Quote Request: ${play.title}`}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-lg"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>

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
                <li className="hover:text-green-200 cursor-pointer">Licensing Info</li>
                <li className="hover:text-green-200 cursor-pointer">Submit a Play</li>
                <li className="hover:text-green-200 cursor-pointer">FAQ</li>
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
    </div>
  );
}