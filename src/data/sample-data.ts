// Interface: Commentable (Object can be commented on) comments, commentCount, commenter
// Interface: Voteable (Object can be voted on) upvotes, upvoteCount, hidden, hiddenCount,
// Data Type: Comment, can be on a news item or another comment
// Every time an upvote/downvote/comment is made, update the count

import { CommentModel, NewsItemModel, UserModel } from './models';

export const sampleData: {
  comments: CommentModel[];
  top: number[];
  new: number[];
  topStoriesCache: NewsItemModel[];
  newStoriesCache: NewsItemModel[];
  newsItems: NewsItemModel[];
  users: UserModel[];
} = {
  /* A ranking of the hottest posts */
  top: [
    1224,
    1225,
    1226,
    1222,
    1223,
    1227,
    1228,
    1229,
    1230,
    1231,
    1232,
    1233,
    1234,
    1235,
    1236,
    1237,
    1238,
    1239,
    1240,
    1241,
    1242,
    1243,
    1244,
    1245,
    1246,
    1247,
    1248,
    1249,
    1250,
    1251,
  ],
  new: [
    1251,
    1250,
    1249,
    1248,
    1247,
    1246,
    1245,
    1244,
    1243,
    1242,
    1241,
    1240,
    1239,
    1238,
    1237,
    1236,
    1235,
    1234,
    1233,
    1232,
    1231,
    1230,
    1229,
    1228,
    1227,
    1226,
    1225,
    1224,
    1223,
    1222,
  ],
  topStoriesCache: [
    {
      id: 1224,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: '“Learning How to Learn,” the most popular course on Coursera',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [15289630, 15289567],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1225,
      creationTime: 1504740146516,
      submitterId: 'luu',
      title: 'Weird Python Integers',
      text: null,
      url: 'https://kate.io/blog/2017/08/22/weird-python-integers/',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 38,
      upvoteCount: 125,
    },
  ],
  newStoriesCache: [
    {
      id: 2000,
      creationTime: new Date().valueOf(),
      submitterId: 'new_user',
      title: 'I love graphQL!!',
      text: null,
      url: 'https://www.graphql.org',
      upvotes: [],
      // upvoteCount: 1,
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
  ],
  newsItems: [
    {
      id: 1224,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: '“Learning How to Learn,” the most popular course on Coursera',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1225,
      creationTime: 1504740146516,
      submitterId: 'luu',
      title: 'Weird Python Integers',
      text: null,
      url: 'https://kate.io/blog/2017/08/22/weird-python-integers/',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 38,
      upvoteCount: 125,
    },
    {
      id: 1226,
      creationTime: 1504740146516,
      submitterId: 'aLee',
      title: 'I spent my career in tech and wasn’t prepared for its effect on my kids',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 101,
      upvoteCount: 90,
    },
    {
      id: 1222,
      creationTime: 1504740146516,
      submitterId: 'clintonwoo',
      title: 'Clinton wins again',
      text: null,
      url: 'https://www.shavelikeaboss.com.au',
      upvotes: ['clintonwoo', 'john'],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 0,
      upvoteCount: 122,
    },
    {
      id: 1223,
      creationTime: 1504740146516,
      submitterId: 'john',
      title: 'Clinton wins yet another time',
      text: "It's unbelievable.",
      url: undefined,
      upvotes: [],
      // upvoteCount: 0,
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [123331],
      commentCount: 1,
      upvoteCount: 20,
    },
    {
      id: 1227,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'Water Found Deep Inside the Moon',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 455,
    },
    {
      id: 1228,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'How did “Handbook for Mortals” get on the NYT bestseller list?',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 331,
    },
    {
      id: 1229,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'Titan in depth: Security in plaintext',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1230,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'The Librem 5: A Matrix-Native FLOSS Smartphone',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1231,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'Generic GPU Kernels in Julia',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1232,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'VW Strike in Slovakia Exposes a European Divide',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1233,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'Gtk-rs: The huge and long awaited release is finally here',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1234,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: "Rich Hickey's Greatest Hits",
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1235,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'Tesla’s Push to Build a Self-Driving Car Sparks Dissent Among Its Engineers',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1236,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'How Redlining’s Racist Effects Lasted for Decades',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1237,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'Uber, Mired in Corporate Scandals, Sees Uptick in Bookings',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1238,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'Feather: Open-source icons',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1239,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'Spacex Launch Webcast: Formosat-5 Mission',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1240,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'Ask HN: What is your favorite CS paper?',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1241,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'Launch HN: Life Bot (YC S17) – Voice app to help with daily activities',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1242,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'Debian reproducibility statistics',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1243,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'The Scotsmen Who Invented Modernity',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1244,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'Deterministic Browser',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1245,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'Deep Learning for Siri’s Voice',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1246,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: "I'm giving up on HPKP",
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1247,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'Introducing App Engine Firewall',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1248,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'Profiling Internet Users in Africa: Insights from the Google Play Store',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1249,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'Turing.jl: A Fresh Approach to Probabilistic Programming in Julia',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1250,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'GCC tiny',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },
    {
      id: 1251,
      creationTime: 1504740146516,
      submitterId: 'hvo',
      title: 'Tesorio is hiring engineers and a product designer to modernize finance teams',
      text: null,
      url:
        'https://www.nytimes.com/2017/08/04/education/edlife/learning-how-to-learn-barbara-oakley.html?hpw&rref=education&action=click&pgtype=Homepage&module=well-region&region=bottom-well&WT.nav=bottom-well',
      upvotes: [],
      hides: [],
      hidden: false,
      hiddenCount: 0,
      comments: [],
      commentCount: 44,
      upvoteCount: 171,
    },

    // 4.
    // Water Found Deep Inside the Moon (nationalgeographic.com)
    // 231 points by chenster 6 hours ago | hide | 121 comments
    // 5.
    // How did “Handbook for Mortals” get on the NYT bestseller list? (pajiba.com)
    // 48 points by cratermoon 1 hour ago | hide | 14 comments
    // 6.
    // Titan in depth: Security in plaintext (googleblog.com)
    // 39 points by nealmueller 1 hour ago | hide | 4 comments
    // 7.
    // The Librem 5: A Matrix-Native FLOSS Smartphone (matrix.org)
    // 307 points by Arathorn 6 hours ago | hide | 103 comments
    // 8.
    // Generic GPU Kernels in Julia (mikeinnes.github.io)
    // 60 points by one-more-minute 2 hours ago | hide | 1 comment
    // 9.
    // VW Strike in Slovakia Exposes a European Divide (bloomberg.com)
    // 41 points by CrocodileStreet 2 hours ago | hide | 9 comments
    // 10.
    // Gtk-rs: The huge and long awaited release is finally here (gtk-rs.org)
    // 19 points by trextrex 1 hour ago | hide | 2 comments
    // 11.
    // Rich Hickey's Greatest Hits (changelog.com)
    // 30 points by tosh 2 hours ago | hide | discuss
    // 12.
    // Tesla’s Push to Build a Self-Driving Car Sparks Dissent Among Its Engineers (wsj.com)
    // 112 points by dcgudeman 3 hours ago | hide | 137 comments
    // 13.
    // How Redlining’s Racist Effects Lasted for Decades (nytimes.com)
    // 11 points by zonotope 1 hour ago | hide | 1 comment
    // 14.
    // Uber, Mired in Corporate Scandals, Sees Uptick in Bookings (nytimes.com)
    // 63 points by carlchenet 4 hours ago | hide | 64 comments
    // 15.
    // Feather: Open-source icons (feathericons.com)
    // 669 points by mcone 7 hours ago | hide | 109 comments
    // 16.
    // Spacex Launch Webcast: Formosat-5 Mission (spacex.com)
    // 51 points by cjnicholls 1 hour ago | hide | 38 comments
    // 17.
    // Ask HN: What is your favorite CS paper?
    // 492 points by lainon 8 hours ago | hide | 165 comments
    // 18.
    // Launch HN: Life Bot (YC S17) – Voice app to help with daily activities
    // 34 points by MerryOscar 3 hours ago | hide | 28 comments
    // 19.
    // Debian reproducibility statistics (reproducible-builds.org)
    // 157 points by lamby 9 hours ago | hide | 63 comments
    // 20.
    // The Scotsmen Who Invented Modernity (nationalinterest.org)
    // 34 points by pepys 3 hours ago | hide | 3 comments
    // 21.
    // Deterministic Browser (arxiv.org)
    // 34 points by lainon 4 hours ago | hide | 1 comment
    // 22.
    // Deep Learning for Siri’s Voice (apple.com)
    // 168 points by Yossi_Frenkel 9 hours ago | hide | 54 comments
    // 23.
    // I'm giving up on HPKP (scotthelme.co.uk)
    // 95 points by el_duderino 8 hours ago | hide | 58 comments
    // 24.
    // Introducing App Engine Firewall (googleblog.com)
    // 77 points by artsandsci 6 hours ago | hide | 25 comments
    // 25.
    // Detailed study of fatalities and litigation involving police use of stun guns (reuters.com)
    // 52 points by hownottowrite 6 hours ago | hide | 31 comments
    // 26.
    // Why it’s healthy to take a break from your online persona (2016) (theguardian.com)
    // 33 points by Tomte 5 hours ago | hide | 7 comments
    // 27.
    // Profiling Internet Users in Africa: Insights from the Google Play Store (afridigest.com)
    // 29 points by prance 5 hours ago | hide | 1 comment
    // 28.
    // Turing.jl: A Fresh Approach to Probabilistic Programming in Julia (turing.guru)
    // 79 points by indescions_2017 8 hours ago | hide | 10 comments
    // 29.
    // GCC tiny (thinkingeek.com)
    // 89 points by ingve 9 hours ago | hide | 11 comments
    // 30.   Tesorio is hiring engineers and a product designer to modernize finance teams (tesorio.com)
    // 3 hours ago | hide
  ],
  comments: [
    {
      id: 15289630,
      creationTime: 1505863796000,
      comments: [],
      submitterId: 'megous',
      text:
        'It is part of it in this case. You&#x27;ve just eliminated most of non-targeted scanners. Your log is much more readable and what is left will probably be dedicated attackers.<p>This might help in forensic investigation afterwards. Less crap to wade through.',
      parent: 1,
      upvotes: [],
    },
    {
      id: 15289567,
      creationTime: 1505863042000,
      comments: [15290063],
      submitterId: 'NeutronBoy',
      parent: 1,
      upvotes: [],
      text:
        '&gt; Security through obscurity is not the solution, though<p>Security is about layers. Nothing is foolproof. It&#x27;s about implementing layers of controls to reduce your attack surface to an acceptable level, with the trade-off that many controls increase the complexity of your setup or compromises the convenience for your users.<p>For example, for SSH, this probably includes<p>* changing the default port<p>* enforcing SSH key authentication<p>* enforcing passwords on SSH keys<p>* implementing fail2ban<p>* installing jump hosts for internal machines<p>* implementing a VPN rather than external facing hosts (and with that comes all the additional layers for the VPN)<p>* etc...',
    },
    {
      comments: [],
      creationTime: 1504740146516,
      id: 123331,
      parent: 1,
      submitterId: 'clintonwoo',
      text: 'I know this might come accross as bragging, but I just won the internet again.',
      upvotes: ['clintonwoo', 'john'],
    },
  ],
  users: [
    {
      id: 'clintonwoo', // Aka. username
      about: 'I am a software engineer who lives in New York.',
      creationTime: 1506024614000,
      dateOfBirth: 723618000000,
      email: 'clinton@hotmail.com',
      firstName: 'Clinton',
      hashedPassword: 'abc123',
      passwordSalt: '123',
      hides: [],
      karma: 3,
      lastName: "D'Annolfo",
      likes: [],
      posts: [1222],
    },
    {
      id: 'john', // Aka. username
      about: 'Just a bloke',
      creationTime: 1506024554000,
      dateOfBirth: 554875200000,
      email: 'john@doe.com',
      firstName: 'John',
      hashedPassword: '123',
      passwordSalt: 'abc',
      hides: [],
      karma: 1,
      lastName: 'Doe',
      likes: [],
      posts: [1223],
    },
  ],
};
