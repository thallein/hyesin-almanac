const characters = {
  'Kanera': [
    {
      id: 1,
      name: 'Liv',
      description: "Back in Haercleft, Liv is trying to balance her life a little better. A year on the island has given her time to think, reflect and slow down. It's clear to her that she needs both Shay and Roan in her life, but she understand that it isn't as easy as that.",
      image: 'liv.png',
      attributes: {
        beliefs: [
          "I feel like I'm always dealing with everyone else's problems so that I can achieve my goals",
          "I'm gonna think before I kill",
          "I just want to get back to my ship now - it's cold here"
        ],
        instincts: [
          "When I'm around powerful people, I will pull my punches",
          'When people are being difficult, my impatience gets the better of me',
          "If my friends are threatened, I'll defend them"
        ],
        traits: [
          'Oikofugic',
          'Vocal',
          'Never to Blame',
          'Mark of Privilege',
          'Affinity with horses',
          'Stubborn'
        ]
      }
    },
    {
      id: 2,
      name: 'Rayvn',
      description: 'Looks : tall, dark hair, dark eyes handsome and charming, smiles a lot even when dispensing death. Skills: fighting, carousing, weapon skills',
      image: 'rayvn.jpg',
      attributes: {
        beliefs: [
          'I will avoid fighting and conflict until I am not injured.',
          'Protect Alice , I have a job to do and she has been the only one loyal to me when my friends abandoned me',
          'Find out more about death cults while I am away'
        ],
        instincts: [
          'I feel like I always have to save the rest of the crew from themselves.',
          'I will always try to make some money or a deal here to get what I want',
          "I can't help having a smart mouth around people I dislike or don't respect  and there is not a lot of people I respect or like."
        ],
        traits: [
          'Arcane',
          'Blunt tool',
          'Reluctant Leader',
          'Outlaw',
          'Marked by Dawn',
          'Driven'
        ]
      }
    },
    {
      id: 3,
      name: 'Pavlov',
      description: 'Hobo-monk; who has turned his back on his religion to proctect his sister.',
      image: '',
      attributes: {
        beliefs: [
          'My morals are flexible depending on the circumstance',
          'I have no need for material riches or wealth.',
          'I am celibate and do not engage in sins of the flesh.'
        ],
        instincts: [
          'If we are under attack I will do anything to protect myself even if it means placing others in the way of harm.',
          'When there is the threat of violence I will try and reach compromise or a peaceful resolution.',
          'When in a noisy or crowded place for too long I will seek solitude and a place to meditate.'
        ],
        traits: [
          'Thug',
          'Delusion of grandeur',
          'Chosen One',
          'Believer',
          'Exhausted',
          'Apostate'
        ]
      }
    },
    {
      id: 4,
      name: 'Adelaide',
      description: "An apiarist who was thrust into to world of pirates and mercenaries, after her father's lands were overrun by bee killing exotic plants.",
      image: '',
      attributes: {
        beliefs: [
          'I have a responsibility to look out for people in trouble',
          'I can look after myself and my dad without help',
          "I can't trust the people in power to do the right thing"
        ],
        instincts: [
          'Curiosity never killed the cat',
          "I'll always try to talk myself out of a situation without resorting to violence",
          'When nobles get self important I get passive aggressive'
        ],
        traits: [
          'Stung once (Once)',
          'Dependable',
          'Rabble Rouser',
          'Loyal',
          'Buxom',
          'Beespeaker',
          'Geometric',
          'Light Weight',
          'Aura of Innocence'
        ]
      }
    },
    {
      id: 5,
      name: 'Eliza',
      description: 'Fey-blooded Huntress who has befriended a Greatwolf. Now working aboard the Emphira',
      image: '',
      attributes: {
        beliefs: [
          'Pavlov will get himself killed unless I help him.',
          "My identity and beliefs are constantly changing,  I don't know who I am or what i fight for anymore.",
          'I sent an innocent and peaceful man to his grave. This will haunt me until I make it right. '
        ],
        instincts: [
          'The best plans...are no plans at all. I always wing it.',
          "I don't draw first blood, but if attacked, I will defend myself.",
          'I freeze up around aggressive or dark mages.'
        ],
        traits: [
          'Patient',
          'Vile Language',
          'Fey Blood - Orc',
          'Wounded in the Hand',
          'Wounded in the Leg',
          'Palsy',
          'Lame',
          'Mortally Wounded in the Arm',
          'Quick Wit'
        ]
      }
    }
  ],
  'Shattered Islands': [
    {
      id: 1,
      name: 'Aerick',
      description: 'A mage who just wants everyone to be their friends.',
      image: 'aerick.png',
      attributes: {
        beliefs: [
          "Everyone is best friends, they just don't know it yet.",
          'No one hates hamsters.',
          'My new island best friends are just narrowly misguided and ABSOLUTELY Good people.',
          'Demons are friends.'
        ],
        instincts: [
          'I always have enough food for my hamsters',
          'When I get into combat or fighting situations, I compulsively summon my eldritch friends for aid.',
          "I can't help but try to find the fae that belong to whatever fairy ring I find."
        ],
        traits: [
          'Agreeable',
          "Extremely Respectful of One's Betters",
          'Always in the Way',
          'Cursed',
          'Gifted',
          'Touched by Fi',
          'Lame'
        ]
      }
    },
    {
      id: 2,
      name: 'Nin',
      description: "She joined her family in their revolution and tried to kill Hawk's brother again.  She has taken some of her money and resources with her due to her noble status.",
      image: 'nin.jpg',
      attributes: {
        beliefs: [
          'I am going to  encourage Aerick to do dangerous stuff  which could include  summoning all the time  for my own amusement',
          'I need to save my Freakshow from evil elves',
          'Society needs to be burned down and started again. The old prejudices need to be eliminated. '
        ],
        instincts: [
          'I must fight my Orc heat. The urge for a baby is  making  makes me a little crazy.',
          'I will seek out big spiders and if I see any other vile creature I will talk to them',
          "I will 'protect' Hawk and Freakshow from all other females and males."
        ],
        traits: [
          'Bastard',
          'Rabble Rouser',
          'Desperate',
          'Obsessed',
          'Mark of privilege',
          'Vile Language',
          'Fey Blood - Orc'
        ]
      }
    },
    {
      id: 3,
      name: 'Amos',
      description: 'Adopted member of the noble family that lead a revolution against the Empress. He failed and is now stuck on an island with a bunch of weirdos.',
      image: 'amos.jpg',
      attributes: {
        beliefs: [
          'I fear Freakshow is becoming more and more a burden to our cause. We have need of her, but will the need outweigh the risk?',
          "The revolution is not dead! We shall rebuild, and I shall oversee its' resurgence!",
          'In these trying times it is important to maintain the friendships that you have.',
          'House Samson convinced me that there are no gods, that I have wasted precious time on silly rituals. No more!'
        ],
        instincts: [
          'If somebody even mentions my affiliation to the Mikula family, I will challenge them to a duel.',
          'I will always ask for a second opinion on a matter',
          'I will never back down from a duel!'
        ],
        traits: [
          'Homesick',
          'Driven',
          'Mark of Privilege',
          'Lost Faith'
        ]
      }
    },
    {
      id: 4,
      name: 'Freakshow',
      description: 'Ex-jester of the court. Was thrown on this island for insulting the Empress.',
      image: 'freakshow.jpg',
      attributes: {
        beliefs: [
          'We all shall die, why not cause a bit of chaos in the process?',
          'I am sane. I am the most sane person here. Why do people not find things as funny as I do? Maybe I just need to make them feel.',
          'Amos is far too calm. He needs to be shown the disparity and depravity of the situation we are in.'
        ],
        instincts: [
          'I try to piss people off at the worst possible moment.',
          "I am gone at the first sign of combat, knives don't do well with me.",
          'I will bone down whenever I think someone is interested in me.'
        ],
        traits: [
          'Batshit',
          'Scapegoat',
          'Tolerant',
          'Ineffable Feature: Strange mark on her hand.',
          'Broken',
          'Louis Wu',
          'Aura of innocence',
          'Charismatic',
          'Resigned to death',
          'Mind-numbing work'
        ]
      }
    }
  ],
  'Crying Heaven': [
    {
      id: 1,
      name: 'Bogrim',
      description: '',
      image: '',
      attributes: {
        beliefs: [],
        instincts: [],
        traits: []
      }
    },
    {
      id: 2,
      name: 'Zach',
      description: '',
      image: '',
      attributes: {
        beliefs: [],
        instincts: [],
        traits: []
      }
    },
    {
      id: 3,
      name: 'Amos',
      description: '',
      image: '',
      attributes: {
        beliefs: [],
        instincts: [],
        traits: []
      }
    },
    {
      id: 4,
      name: 'Freakshow',
      description: '',
      image: '',
      attributes: {
        beliefs: [],
        instincts: [],
        traits: []
      }
    }
  ],
  'Zumat': [
    {
      id: 1,
      name: 'Vi',
      description: '',
      image: '',
      attributes: {
        beliefs: [],
        instincts: [],
        traits: []
      }
    }
  ]
}

export default characters
