const levels = [{
    id: 1,
    title: "Jannat-ul-Mawa",
    description: "Foundation - Start your spiritual journey with the essentials of purity and intent.",
    topics: ["Wudu (Ablution)", "Niyyah (Intention)", "Physical Readiness", "Basic Focus"],
    unlocked: true,
    progress: 0,
    lessons: [{
        title: "The Architecture of Purity",
        objectives: ["Master the 10-step Wudu sequence", "Understand the spiritual power of Niyyah", "Internalize the 'Bismillah' opening"],
        content: "Wudu is more than physical washing; it is a spiritual reset. Level 1 ensures your foundation is solid before we build the House of Prayer.",
        postures: [{
            name: "Wudu: The Holy Intent",
            image: "wudu-steps",
            recitations: [{
                arabic: "بِسْمِ ٱللَّٰهِ",
                transliteration: "Bismillah",
                translation: "In the name of Allah",
                explanation: {
                    summary: "Start every act of worship with the name of the Creator.",
                    significance: "Invoking Allah's presence turns a routine wash into a sacred rite.",
                    spiritual_benefits: ["Heart Presence", "Barakah (Blessing)"]
                }
            }],
            practice_tips: {
                technical: "Focus on the water touching your skin. Ensure no area is left dry.",
                spiritual: "Imagine the water washing away your minor sins as it falls."
            }
        }, {
            name: "Wudu: Comprehensive Wash",
            image: "wudu-steps",
            recitations: [],
            explanation: {
                summary: "Wash hands, mouth, nose, face, arms, head, and feet.",
                steps: [
                    { description: "Mouth & Nose", details: "Rinse 3 times with thoroughness." },
                    { description: "Arms to Elbows", details: "Start with the right, then the left." },
                    { description: "Wipe Head", details: "Once, from front to back and return." }
                ]
            },
            practice_tips: {
                technical: "Use water sparingly but effectively. Don't waste.",
                spiritual: "Each step represents purifying an organ of the body from misuse."
            }
        }],
        quiz: [
            { question: "What is the primary purpose of Niyyah?", options: ["Showing off", "Setting spiritual focus", "Just a habit", "To tell others"], correct: 1 },
            { question: "Is Wudu required for every prayer?", options: ["Only on Fridays", "Yes, unless you already have it", "No", "Only for Fajr"], correct: 1 }
        ]
    }]
}, {
    id: 2,
    title: "Dar-us-Salam",
    description: "2-Rak'ah Prayers — Fajr, Jumu'ah, Sunnah Rawatib, Eid, Istikharah & Tahiyyat al-Masjid.",
    topics: ["2-Rak'ah Structure", "Al-Fatiha Mastery", "Surah Al-Ikhlas", "Fajr / Jumu'ah / Sunnah"],
    unlocked: true,
    progress: 0,
    lessons: [{
        title: "The Flow of Two Rak'ahs",
        objectives: [
            "Complete a full 2-Rak'ah prayer from Takbir to Tasleem",
            "Know every 2-Rak'ah salah: Fajr (Fard), Jumu'ah, Sunnah Rawatib, Eid, Istikharah, Tahiyyat al-Masjid",
            "Master Al-Fatiha verse by verse with transliteration",
            "Learn Surah Al-Ikhlas as the additional surah"
        ],
        content: "The 2-Rak'ah prayer is the fundamental building block. It is used in Fajr (the obligatory dawn prayer), Jumu'ah (Friday congregational prayer), all Sunnah Rawatib (voluntary prayers before/after obligatory ones), Eid prayers, Salat al-Istikharah (guidance prayer), and Tahiyyat al-Masjid (greeting the mosque). Mastering this structure unlocks all other prayer forms.",
        postures: [{
            name: "1. Opening Takbir (Takbirat al-Ihram)",
            image: "takbir",
            recitations: [{
                arabic: "ٱللَّٰهُ أَكْبَرُ",
                transliteration: "Allahu Akbar",
                translation: "Allah is the Greatest",
                explanation: { summary: "Raise both hands to ear level and declare Allah's greatness. This officially begins the prayer.", significance: "The world is cast behind you. Only the Creator remains." }
            }],
            practice_tips: { technical: "Fingers spread naturally, palms facing qiblah at ear level.", spiritual: "Feel the weight of the world leave your shoulders." }
        }, {
            name: "2. Standing (Qiyam) — Al-Fatiha",
            image: "qiyaam",
            recitations: [{
                arabic: "سُورَةُ ٱلْفَاتِحَةِ",
                transliteration: "Surat al-Fatiha",
                translation: "The Opening",
                explanation: {
                    summary: "The Seven Oft-Repeated Verses — recited in EVERY rak'ah of EVERY prayer.",
                    components: [{
                        component: "Verses of Al-Fatiha",
                        description: [
                            { verse: 1, arabic: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", transliteration: "Bismillahir-Rahmanir-Raheem", translation: "In the name of Allah, the Most Gracious, the Most Merciful." },
                            { verse: 2, arabic: "ٱلْحَمْدُ لِلَّٰهِ رَبِّ ٱلْعَٰلَمِينَ", transliteration: "Alhamdu lillahi Rabbil-'aalameen", translation: "All praise is due to Allah, Lord of the worlds." },
                            { verse: 3, arabic: "ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", transliteration: "Ar-Rahmaanir-Raheem", translation: "The Most Gracious, the Most Merciful." },
                            { verse: 4, arabic: "مَٰلِكِ يَوْمِ ٱلدِّينِ", transliteration: "Maaliki yawmid-Deen", translation: "Master of the Day of Judgment." },
                            { verse: 5, arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", transliteration: "Iyyaaka na'budu wa iyyaaka nasta'een", translation: "You alone we worship, and You alone we ask for help." },
                            { verse: 6, arabic: "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ", transliteration: "Ihdinas-siraatal-mustaqeem", translation: "Guide us to the straight path." },
                            { verse: 7, arabic: "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ", transliteration: "Siraatal-ladheena an'amta 'alayhim, ghayril-maghdoobi 'alayhim wa lad-daaalleen", translation: "The path of those You have blessed, not of those who earned anger, nor of those who went astray." }
                        ]
                    }]
                }
            }]
        }, {
            name: "3. Additional Surah — Al-Ikhlas (Rak'ah 1)",
            image: "qiyaam",
            recitations: [{
                arabic: "سُورَةُ ٱلْإِخْلَاصِ",
                transliteration: "Surat al-Ikhlas",
                translation: "The Sincerity (Chapter 112)",
                explanation: {
                    summary: "Recited after Al-Fatiha in the first two rak'ahs. Equal to one-third of the Quran.",
                    components: [{
                        component: "Verses of Al-Ikhlas",
                        description: [
                            { verse: 1, arabic: "قُلْ هُوَ ٱللَّٰهُ أَحَدٌ", transliteration: "Qul huwa Allahu Ahad", translation: "Say: He is Allah, the One." },
                            { verse: 2, arabic: "ٱللَّٰهُ ٱلصَّمَدُ", transliteration: "Allahus-Samad", translation: "Allah, the Eternal Refuge." },
                            { verse: 3, arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ", transliteration: "Lam yalid wa lam yoolad", translation: "He neither begets nor is born." },
                            { verse: 4, arabic: "وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌ", transliteration: "Wa lam yakun lahu kufuwan ahad", translation: "Nor is there to Him any equivalent." }
                        ]
                    }]
                }
            }]
        }, {
            name: "4. Ruku (Bowing)",
            image: "ruku",
            recitations: [{
                arabic: "سُبْحَانَ رَبِّيَ ٱلْعَظِيمِ",
                transliteration: "Subhaana Rabbiyal-'Adheem",
                translation: "Glory be to my Lord, the Magnificent",
                explanation: { summary: "Said 3 times. Back flat, hands on knees, eyes looking at the place of prostration." }
            }],
            practice_tips: { technical: "Back should be perfectly flat, like a table. Grip your knees.", spiritual: "Your ego bows before your Lord." }
        }, {
            name: "5. Rising from Ruku (I'tidal)",
            image: "qiyaam",
            recitations: [{
                arabic: "سَمِعَ ٱللَّٰهُ لِمَنْ حَمِدَهُ ۚ رَبَّنَا وَلَكَ ٱلْحَمْدُ",
                transliteration: "Sami'Allahu liman hamidah. Rabbana wa lakal-hamd",
                translation: "Allah hears those who praise Him. Our Lord, to You is all praise.",
                explanation: { summary: "Stand fully upright before going down to prostration." }
            }]
        }, {
            name: "6. First Sujud (Prostration)",
            image: "sujud",
            recitations: [{
                arabic: "سُبْحَانَ رَبِّيَ ٱلْأَعْلَىٰ",
                transliteration: "Subhaana Rabbiyal-A'laa",
                translation: "Glory be to my Lord, the Most High",
                explanation: { summary: "Said 3 times. Seven points of contact: forehead+nose, two palms, two knees, toes of both feet." }
            }],
            practice_tips: { technical: "Ensure 7 points of contact on the ground.", spiritual: "This is the closest you are to Allah. Make dua in your heart." }
        }, {
            name: "7. Sitting Between Sujud (Jalsa)",
            image: "jalsa",
            recitations: [{
                arabic: "رَبِّ ٱغْفِرْ لِي، رَبِّ ٱغْفِرْ لِي",
                transliteration: "Rabbighfir lee, Rabbighfir lee",
                translation: "My Lord, forgive me. My Lord, forgive me.",
                explanation: { summary: "Sit briefly on the left foot, right foot upright. Ask for forgiveness." }
            }]
        }, {
            name: "8. Second Sujud",
            image: "sujud",
            recitations: [{
                arabic: "سُبْحَانَ رَبِّيَ ٱلْأَعْلَىٰ",
                transliteration: "Subhaana Rabbiyal-A'laa",
                translation: "Glory be to my Lord, the Most High",
                explanation: { summary: "Identical to the first Sujud. This completes one full Rak'ah." }
            }]
        }, {
            name: "9. Rak'ah 2 — Fatiha + Surah Al-Falaq",
            image: "qiyaam",
            recitations: [{
                arabic: "سُورَةُ ٱلْفَلَقِ",
                transliteration: "Surat al-Falaq",
                translation: "The Daybreak (Chapter 113)",
                explanation: {
                    summary: "A different surah for the second rak'ah — the Protection Surah.",
                    components: [{
                        component: "Verses of Al-Falaq",
                        description: [
                            { verse: 1, arabic: "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ", transliteration: "Qul a'oodhu bi Rabbil-falaq", translation: "Say: I seek refuge in the Lord of daybreak." },
                            { verse: 2, arabic: "مِن شَرِّ مَا خَلَقَ", transliteration: "Min sharri maa khalaq", translation: "From the evil of that which He created." },
                            { verse: 3, arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ", transliteration: "Wa min sharri ghaasiqin idhaa waqab", translation: "And from the evil of darkness when it settles." },
                            { verse: 4, arabic: "وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلْعُقَدِ", transliteration: "Wa min sharrin-naffaathaati fil-'uqad", translation: "And from the evil of the blowers in knots." },
                            { verse: 5, arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", transliteration: "Wa min sharri haasidin idhaa hasad", translation: "And from the evil of an envier when he envies." }
                        ]
                    }]
                }
            }]
        }, {
            name: "10. Final Tashahhud + Salawat",
            image: "tashahhud",
            recitations: [{
                arabic: "ٱلتَّحِيَّاتُ لِلَّٰهِ وَٱلصَّلَوَاتُ وَٱلطَّيِّبَاتُ",
                transliteration: "At-tahiyyaatu lillaahi was-salawaatu wat-tayyibaat",
                translation: "All greetings, prayers, and pure words are for Allah.",
                explanation: { summary: "Full Tashahhud + Salawat Ibrahimiyyah in the final sitting of a 2-rak'ah prayer." }
            }],
            practice_tips: { technical: "Point index finger forward, eyes on it. Sit on left foot.", spiritual: "You are speaking directly to the Prophet ﷺ across time." }
        }, {
            name: "11. Tasleem (Ending the Prayer)",
            image: "salaam",
            recitations: [{
                arabic: "ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ",
                transliteration: "As-salaamu 'alaykum wa rahmatullaah",
                translation: "Peace and mercy of Allah be upon you",
                explanation: { summary: "Turn head to the right, then to the left. This exits the prayer." }
            }]
        }],
        quiz: [
            { question: "How many verses are in Al-Fatiha?", options: ["5", "6", "7", "8"], correct: 2 },
            { question: "Which of these is a 2-Rak'ah prayer?", options: ["Dhuhr", "Asr", "Fajr", "Isha"], correct: 2 },
            { question: "What surah equals one-third of the Quran?", options: ["Al-Falaq", "Al-Nas", "Al-Ikhlas", "Al-Kawthar"], correct: 2 },
            { question: "Name another 2-Rak'ah prayer besides Fajr.", options: ["Dhuhr", "Jumu'ah", "Maghrib", "Asr"], correct: 1 }
        ]
    }]
}, {
    id: 3,
    title: "Jannat-an-Naim",
    description: "3-Rak'ah Prayer — Maghrib: the unique odd-numbered obligatory prayer.",
    topics: ["Maghrib Structure", "3-Rak'ah Flow", "First Tashahhud", "Surah An-Nas"],
    unlocked: true,
    progress: 0,
    lessons: [{
        title: "Mastering the 3-Rak'ah Maghrib",
        objectives: [
            "Perform the complete 3-Rak'ah Maghrib prayer",
            "Understand why Maghrib is the only 3-Rak'ah obligatory prayer",
            "Master the First Tashahhud (middle sitting after Rak'ah 2)",
            "Learn Surah An-Nas as the additional surah"
        ],
        content: "Maghrib is the only obligatory prayer with 3 Rak'ahs. The first two rak'ahs are recited ALOUD (Jahr) with Al-Fatiha + an additional surah. The third rak'ah is recited SILENTLY with only Al-Fatiha. After Rak'ah 2, you sit for the First Tashahhud before rising for the final rak'ah. The Witr prayer (odd-numbered night prayer) can also be 3 rak'ahs.",
        postures: [{
            name: "1. Rak'ah 1 — Fatiha + Surah An-Nas (Aloud)",
            image: "qiyaam",
            recitations: [{
                arabic: "سُورَةُ ٱلنَّاسِ",
                transliteration: "Surat an-Nas",
                translation: "Mankind (Chapter 114)",
                explanation: {
                    summary: "Recited aloud in Maghrib. The final surah of the Quran — seeking refuge from all evil.",
                    components: [{
                        component: "Verses of An-Nas",
                        description: [
                            { verse: 1, arabic: "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ", transliteration: "Qul a'oodhu bi Rabbin-naas", translation: "Say: I seek refuge in the Lord of mankind." },
                            { verse: 2, arabic: "مَلِكِ ٱلنَّاسِ", transliteration: "Malikin-naas", translation: "The Sovereign of mankind." },
                            { verse: 3, arabic: "إِلَٰهِ ٱلنَّاسِ", transliteration: "Ilaahin-naas", translation: "The God of mankind." },
                            { verse: 4, arabic: "مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ", transliteration: "Min sharril-waswaasil-khannaas", translation: "From the evil of the retreating whisperer." },
                            { verse: 5, arabic: "ٱلَّذِي يُوَسْوِسُ فِي صُدُورِ ٱلنَّاسِ", transliteration: "Alladhee yuwaswisu fee sudoorin-naas", translation: "Who whispers in the hearts of mankind." },
                            { verse: 6, arabic: "مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ", transliteration: "Minal-jinnati wan-naas", translation: "From among the jinn and mankind." }
                        ]
                    }]
                }
            }],
            practice_tips: { technical: "Recite aloud with clear Tajweed.", spiritual: "Seek Allah's protection as the sun sets and darkness arrives." }
        }, {
            name: "2. Rak'ah 2 — Fatiha + Surah Al-Kawthar (Aloud)",
            image: "qiyaam",
            recitations: [{
                arabic: "سُورَةُ ٱلْكَوْثَرِ",
                transliteration: "Surat al-Kawthar",
                translation: "The Abundance (Chapter 108)",
                explanation: {
                    summary: "The shortest surah in the Quran — a gift of abundance from Allah.",
                    components: [{
                        component: "Verses of Al-Kawthar",
                        description: [
                            { verse: 1, arabic: "إِنَّآ أَعْطَيْنَٰكَ ٱلْكَوْثَرَ", transliteration: "Innaa a'taynakal-kawthar", translation: "Indeed, We have granted you Al-Kawthar (abundance)." },
                            { verse: 2, arabic: "فَصَلِّ لِرَبِّكَ وَٱنْحَرْ", transliteration: "Fasalli li Rabbika wanhar", translation: "So pray to your Lord and sacrifice." },
                            { verse: 3, arabic: "إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ", transliteration: "Inna shaani'aka huwal-abtar", translation: "Indeed, your enemy is the one cut off." }
                        ]
                    }]
                }
            }]
        }, {
            name: "3. First Tashahhud (Middle Sitting)",
            image: "tashahhud",
            recitations: [{
                arabic: "ٱلتَّحِيَّاتُ لِلَّٰهِ وَٱلصَّلَوَاتُ وَٱلطَّيِّبَاتُ، ٱلسَّلَامُ عَلَيْكَ أَيُّهَا ٱلنَّبِيُّ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ، ٱلسَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ ٱللَّٰهِ ٱلصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
                transliteration: "At-tahiyyaatu lillaahi was-salawaatu wat-tayyibaat. As-salaamu 'alayka ayyuhan-nabiyyu wa rahmatullaahi wa barakaatuh. As-salaamu 'alaynaa wa 'alaa 'ibaadillaahis-saaliheen. Ash-hadu an laa ilaaha illallaah, wa ash-hadu anna Muhammadan 'abduhu wa rasooluh.",
                translation: "All greetings, prayers, and good things are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and Messenger.",
                explanation: { summary: "Sit after the 2nd Rak'ah. Recite ONLY up to the Shahada, then rise for the 3rd Rak'ah. Do NOT add Salawat here.", significance: "A pause to testify faith before continuing." }
            }],
            practice_tips: { technical: "Point index finger, sit on left foot, right foot upright.", spiritual: "Greeting the Prophet ﷺ across time and space." }
        }, {
            name: "4. Rak'ah 3 — Fatiha Only (Silent)",
            image: "qiyaam",
            recitations: [{
                arabic: "سُورَةُ ٱلْفَاتِحَةِ فَقَطْ (سِرًّا)",
                transliteration: "Surat al-Fatiha faqat (Sirran)",
                translation: "Al-Fatiha only — recited silently",
                explanation: { summary: "In the 3rd rak'ah of Maghrib, recite ONLY Al-Fatiha, silently (moving lips without raising voice). No additional surah.", significance: "Inward focus deepens as the prayer nears its end." }
            }]
        }, {
            name: "5. Final Tashahhud + Salawat + Tasleem",
            image: "salaam",
            recitations: [{
                arabic: "ٱلتَّحِيَّاتُ + ٱلصَّلَاةُ ٱلْإِبْرَاهِيمِيَّةُ + ٱلسَّلَامُ",
                transliteration: "At-Tahiyyaat + As-Salaat al-Ibrahimiyyah + As-Salaam",
                translation: "Full Tashahhud + Abrahamic Prayer + Peace greeting",
                explanation: { summary: "In the final sitting: recite full Tashahhud, then add the Salawat Ibrahimiyyah, then end with Tasleem to both sides." }
            }]
        }],
        quiz: [
            { question: "How many rak'ahs is Maghrib?", options: ["2", "3", "4", "5"], correct: 1 },
            { question: "Are the first two rak'ahs of Maghrib loud or silent?", options: ["Silent", "Loud", "First loud, second silent", "Depends"], correct: 1 },
            { question: "What do you recite in the 3rd rak'ah of Maghrib?", options: ["Fatiha + Surah", "Only Fatiha", "Only a Surah", "Nothing"], correct: 1 }
        ]
    }]
}, {
    id: 4,
    title: "Dar-ul-Khuld",
    description: "4-Rak'ah Prayers — Dhuhr, Asr, Isha: the backbone of daily worship.",
    topics: ["4-Rak'ah Structure", "Dhuhr / Asr / Isha", "Loud vs Silent", "Surah Al-Asr & Al-Fil"],
    unlocked: true,
    progress: 0,
    lessons: [{
        title: "Mastering the 4-Rak'ah Prayers",
        objectives: [
            "Perform a complete 4-Rak'ah prayer (Dhuhr, Asr, or Isha)",
            "Understand Dhuhr & Asr are fully SILENT; Isha has 2 LOUD + 2 SILENT",
            "Master the First Tashahhud after Rak'ah 2",
            "Learn Surah Al-Asr and Surah Al-Fil as additional surahs"
        ],
        content: "Three of the five daily prayers are 4 Rak'ahs: Dhuhr (noon), Asr (afternoon), and Isha (night). Dhuhr and Asr are recited entirely in silence. Isha's first 2 rak'ahs are aloud, while the last 2 are silent. In all cases, the additional surah is only recited after Al-Fatiha in the first 2 rak'ahs. Rak'ahs 3 and 4 contain only Al-Fatiha.",
        postures: [{
            name: "1. Rak'ah 1 — Fatiha + Surah Al-Asr",
            image: "qiyaam",
            recitations: [{
                arabic: "سُورَةُ ٱلْعَصْرِ",
                transliteration: "Surat al-'Asr",
                translation: "The Time (Chapter 103)",
                explanation: {
                    summary: "A profound surah — Imam ash-Shafi'i said if only this surah were revealed, it would suffice mankind.",
                    components: [{
                        component: "Verses of Al-Asr",
                        description: [
                            { verse: 1, arabic: "وَٱلْعَصْرِ", transliteration: "Wal-'asr", translation: "By time." },
                            { verse: 2, arabic: "إِنَّ ٱلْإِنسَٰنَ لَفِى خُسْرٍ", transliteration: "Innal-insaana lafee khusr", translation: "Indeed, mankind is in loss." },
                            { verse: 3, arabic: "إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ وَتَوَاصَوْا۟ بِٱلْحَقِّ وَتَوَاصَوْا۟ بِٱلصَّبْرِ", transliteration: "Illal-ladheena aamanoo wa 'amilus-saalihaati wa tawaasow bil-haqqi wa tawaasow bis-sabr", translation: "Except those who believe, do good deeds, and advise each other to truth and patience." }
                        ]
                    }]
                }
            }]
        }, {
            name: "2. Rak'ah 2 — Fatiha + Surah Al-Fil",
            image: "qiyaam",
            recitations: [{
                arabic: "سُورَةُ ٱلْفِيلِ",
                transliteration: "Surat al-Fil",
                translation: "The Elephant (Chapter 105)",
                explanation: {
                    summary: "The story of Abraha's army and Allah's divine protection of the Ka'bah.",
                    components: [{
                        component: "Verses of Al-Fil",
                        description: [
                            { verse: 1, arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَٰبِ ٱلْفِيلِ", transliteration: "Alam tara kayfa fa'ala Rabbuka bi-ashaabil-feel", translation: "Have you not considered how your Lord dealt with the companions of the elephant?" },
                            { verse: 2, arabic: "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِى تَضْلِيلٍ", transliteration: "Alam yaj'al kaydahum fee tadleel", translation: "Did He not make their plan into misguidance?" },
                            { verse: 3, arabic: "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ", transliteration: "Wa arsala 'alayhim tayran abaabeel", translation: "And He sent against them birds in flocks." },
                            { verse: 4, arabic: "تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ", transliteration: "Tarmeehim bi-hijaaratim min sijjeel", translation: "Striking them with stones of baked clay." },
                            { verse: 5, arabic: "فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ", transliteration: "Faja'alahum ka'asfim ma'kool", translation: "And He made them like eaten straw." }
                        ]
                    }]
                }
            }]
        }, {
            name: "3. First Tashahhud (After Rak'ah 2)",
            image: "tashahhud",
            recitations: [{
                arabic: "ٱلتَّحِيَّاتُ لِلَّٰهِ...",
                transliteration: "At-Tahiyyaatu lillaahi...",
                translation: "All greetings are for Allah...",
                explanation: { summary: "After the 2nd rak'ah, sit and recite only the Tashahhud (no Salawat). Then rise for the 3rd rak'ah with Takbir.", significance: "A testimony of faith at the midpoint of prayer." }
            }],
            practice_tips: { technical: "Raise index finger during 'Ash-hadu'. Keep eyes on it.", spiritual: "Affirming your covenant with Allah mid-prayer." }
        }, {
            name: "4. Rak'ahs 3 & 4 — Fatiha Only (Silent)",
            image: "qiyaam",
            recitations: [{
                arabic: "سُورَةُ ٱلْفَاتِحَةِ فَقَطْ",
                transliteration: "Surat al-Fatiha faqat",
                translation: "Al-Fatiha only — no additional surah",
                explanation: { summary: "The last two rak'ahs contain ONLY Al-Fatiha, recited silently. This applies to Dhuhr, Asr, and the last two of Isha.", significance: "Reducing external recitation to deepen inward presence." }
            }]
        }, {
            name: "5. Final Tashahhud + Salawat + Tasleem",
            image: "salaam",
            recitations: [{
                arabic: "ٱلتَّحِيَّاتُ + ٱلصَّلَاةُ ٱلْإِبْرَاهِيمِيَّةُ + ٱلسَّلَامُ",
                transliteration: "At-Tahiyyaat + As-Salaat al-Ibrahimiyyah + As-Salaam",
                translation: "Complete Tashahhud + Abrahamic Prayer + Tasleem",
                explanation: { summary: "Recite the full Tashahhud, add Salawat Ibrahimiyyah, make personal dua, then say Tasleem to both sides." }
            }]
        }],
        quiz: [
            { question: "Which prayers are 4 Rak'ahs?", options: ["Fajr, Maghrib, Witr", "Dhuhr, Asr, Isha", "Only Dhuhr", "All five"], correct: 1 },
            { question: "Is Dhuhr recited aloud or silently?", options: ["Aloud", "Silently", "First rak'ah aloud", "Alternating"], correct: 1 },
            { question: "Do Rak'ahs 3 & 4 have an additional surah?", options: ["Yes", "No, only Fatiha", "Only in Isha", "Only in Dhuhr"], correct: 1 },
            { question: "Which rak'ahs of Isha are recited aloud?", options: ["All 4", "First 2 only", "Last 2 only", "None"], correct: 1 }
        ]
    }]
}, {
    id: 5,
    title: "Dar-us-Salam",
    description: "Eid Prayer — The festive 2-Rak'ah prayer with extra Takbirs.",
    topics: ["Eid al-Fitr / Eid al-Adha", "7+5 Extra Takbirs", "Surah Al-A'la", "Community Joy"],
    unlocked: true,
    progress: 0,
    lessons: [{
        title: "The Joy of Eid Salah",
        objectives: ["Perform the 7 extra Takbirs in Rak'ah 1", "Perform the 5 extra Takbirs in Rak'ah 2", "Learn Surah Al-A'la as the additional surah"],
        content: "Eid prayer is a special 2-Rak'ah prayer performed for Eid al-Fitr (after Ramadan) and Eid al-Adha (Festival of Sacrifice). It is unique because of the extra Takbirs: 7 in the first rak'ah (after the opening Takbir, before Fatiha) and 5 in the second rak'ah (after the standing Takbir, before Fatiha). It is prayed in congregation, aloud.",
        postures: [{
            name: "1. Opening Takbir + 7 Extra Takbirs",
            image: "takbir",
            recitations: [{
                arabic: "ٱللَّٰهُ أَكْبَرُ (× ٧ إضافية)",
                transliteration: "Allahu Akbar (7 extra times)",
                translation: "Allah is the Greatest — 7 additional times after the opening Takbir",
                explanation: { summary: "After the opening Takbirat al-Ihram, say 7 more Takbirs, raising hands each time. Then recite Fatiha + Surah." }
            }],
            practice_tips: { technical: "Raise hands to ears for every Takbir. Pause briefly between each.", spiritual: "Each Takbir is a declaration of Allah's supremacy over all worldly joy." }
        }, {
            name: "2. Rak'ah 1 — Fatiha + Surah Al-A'la (Aloud)",
            image: "qiyaam",
            recitations: [{
                arabic: "سُورَةُ ٱلْأَعْلَىٰ",
                transliteration: "Surat al-A'la",
                translation: "The Most High (Chapter 87)",
                explanation: {
                    summary: "The Prophet ﷺ used to recite this surah in Eid and Jumu'ah prayers.",
                    components: [{
                        component: "Selected Verses of Al-A'la",
                        description: [
                            { verse: 1, arabic: "سَبِّحِ ٱسْمَ رَبِّكَ ٱلْأَعْلَى", transliteration: "Sabbihisma Rabbikal-A'laa", translation: "Exalt the name of your Lord, the Most High." },
                            { verse: 2, arabic: "ٱلَّذِى خَلَقَ فَسَوَّىٰ", transliteration: "Alladhee khalaqa fasawwaa", translation: "Who created and proportioned." },
                            { verse: 3, arabic: "وَٱلَّذِى قَدَّرَ فَهَدَىٰ", transliteration: "Walladhee qaddara fahadaa", translation: "And who destined and then guided." }
                        ]
                    }]
                }
            }]
        }, {
            name: "3. Rak'ah 2 — 5 Extra Takbirs + Fatiha + Surah Al-Ghashiyah",
            image: "qiyaam",
            recitations: [{
                arabic: "سُورَةُ ٱلْغَاشِيَةِ",
                transliteration: "Surat al-Ghashiyah",
                translation: "The Overwhelming (Chapter 88)",
                explanation: {
                    summary: "Also commonly recited in Eid/Jumu'ah. After rising, say 5 extra Takbirs before Fatiha.",
                    components: [{
                        component: "Selected Verses of Al-Ghashiyah",
                        description: [
                            { verse: 1, arabic: "هَلْ أَتَىٰكَ حَدِيثُ ٱلْغَٰشِيَةِ", transliteration: "Hal ataaka hadeethul-ghaashiyah", translation: "Has there reached you the report of the Overwhelming?" },
                            { verse: 2, arabic: "وُجُوهٌ يَوْمَئِذٍ خَٰشِعَةٌ", transliteration: "Wujoohun yawma'idhin khaashi'ah", translation: "Some faces that Day will be humbled." },
                            { verse: 3, arabic: "عَامِلَةٌ نَّاصِبَةٌ", transliteration: "'Aamilatun naasibah", translation: "Working hard, exhausted." }
                        ]
                    }]
                }
            }]
        }],
        quiz: [
            { question: "How many extra Takbirs in Rak'ah 1 of Eid?", options: ["3", "5", "7", "9"], correct: 2 },
            { question: "How many extra Takbirs in Rak'ah 2 of Eid?", options: ["3", "5", "7", "9"], correct: 1 }
        ]
    }]
}, {
    id: 6,
    title: "Illiyyun",
    description: "Janazah (Funeral) Prayer — A standing-only prayer with 4 Takbirs for the departed.",
    topics: ["Janazah 4 Takbirs", "Dua for the Deceased", "Surah Al-Fatiha", "Standing Resilience"],
    unlocked: true,
    progress: 0,
    lessons: [{
        title: "Prayer for the Departed",
        objectives: ["Master the 4-Takbir standing-only sequence", "Learn the Dua for the deceased with transliteration", "Understand the communal obligation (Fard Kifayah)"],
        content: "Janazah is a unique prayer: no ruku, no sujud — only 4 Takbirs while standing. After Takbir 1: Al-Fatiha. After Takbir 2: Salawat Ibrahimiyyah. After Takbir 3: Dua for the deceased. After Takbir 4: Tasleem. It is a communal obligation (Fard Kifayah) — if enough people perform it, the obligation is lifted from the rest.",
        postures: [{
            name: "1. Takbir 1 — Al-Fatiha (Silent)",
            image: "takbir",
            recitations: [{
                arabic: "ٱللَّٰهُ أَكْبَرُ — ثم ٱلْفَاتِحَة",
                transliteration: "Allahu Akbar — then Al-Fatiha",
                translation: "Allah is Greatest — then recite The Opening silently",
                explanation: { summary: "After the first Takbir, recite Al-Fatiha silently. No additional surah." }
            }]
        }, {
            name: "2. Takbir 2 — Salawat Ibrahimiyyah",
            image: "takbir",
            recitations: [{
                arabic: "ٱللَّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
                transliteration: "Allahumma salli 'alaa Muhammadin wa 'alaa aali Muhammadin, kamaa sallayta 'alaa Ibraheema wa 'alaa aali Ibraheema, innaka Hameedun Majeed",
                translation: "O Allah, send prayers upon Muhammad and the family of Muhammad, as You sent prayers upon Ibrahim and the family of Ibrahim. You are Praiseworthy, Glorious.",
                explanation: { summary: "After the second Takbir, send prayers upon the Prophet ﷺ." }
            }]
        }, {
            name: "3. Takbir 3 — Dua for the Deceased",
            image: "takbir",
            recitations: [{
                arabic: "ٱللَّٰهُمَّ ٱغْفِرْ لَهُ وَٱرْحَمْهُ وَعَافِهِ وَٱعْفُ عَنْهُ وَأَكْرِمْ نُزُلَهُ وَوَسِّعْ مُدْخَلَهُ",
                transliteration: "Allahummagh-fir lahu warhamhu wa 'aafihi wa'fu 'anhu wa akrim nuzulahu wa wassi' mudkhalah",
                translation: "O Allah, forgive him, have mercy on him, grant him wellbeing, pardon him, honor his reception, and widen his entrance.",
                explanation: { summary: "The core supplication of the Janazah prayer — personal intercession for the departed soul.", significance: "This is the heart of the funeral prayer." }
            }]
        }, {
            name: "4. Takbir 4 — Tasleem",
            image: "salaam",
            recitations: [{
                arabic: "ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ",
                transliteration: "As-salaamu 'alaykum wa rahmatullaah",
                translation: "Peace and mercy of Allah be upon you",
                explanation: { summary: "After the 4th Takbir, pause briefly, then give a single Tasleem to the right (or both sides)." }
            }]
        }],
        quiz: [
            { question: "Does Janazah prayer have Ruku or Sujud?", options: ["Yes", "No — standing only"], correct: 1 },
            { question: "What is recited after the 2nd Takbir?", options: ["Al-Fatiha", "Salawat Ibrahimiyyah", "Dua for deceased", "Tasleem"], correct: 1 },
            { question: "Is Janazah Fard 'Ayn or Fard Kifayah?", options: ["Fard 'Ayn (on everyone)", "Fard Kifayah (communal)"], correct: 1 }
        ]
    }]
}, {
    id: 7,
    title: "Al-Firdous",
    description: "Mastery & Khushu — Perfecting every prayer with the spirit of Ihsan.",
    topics: ["Deep Khushu", "Prophet's ﷺ Prayer", "Tajweed Perfection", "Surah Ad-Duha"],
    unlocked: true,
    progress: 0,
    lessons: [{
        title: "The State of Ihsan",
        objectives: ["Achieve deep spiritual presence (Khushu) in every posture", "Perfect Arabic articulation points (Makharij)", "Internalize the meaning of every recitation", "Learn Surah Ad-Duha"],
        content: "Level 7 is not about new movements — it is about perfecting the ones you know. 'Ihsan' means worshipping Allah as if you see Him, and if you cannot see Him, knowing that He sees you. This level revisits the entire prayer with a focus on the quality of your connection, your breathing, your pauses, and the emotional weight of every word.",
        postures: [{
            name: "1. The Intentional Wudu",
            image: "wudu-steps",
            recitations: [{
                arabic: "بِسْمِ ٱللَّٰهِ",
                transliteration: "Bismillaah",
                translation: "In the name of Allah",
                explanation: { summary: "Washing with complete presence of mind. Every drop washes away a sin.", significance: "The journey to Ihsan begins before the prayer — in the purity of Wudu itself." }
            }],
            practice_tips: { technical: "No rushing. Feel the water on each body part.", spiritual: "Visualize the sins falling away with the water." }
        }, {
            name: "2. The Majestic Takbirat al-Ihram",
            image: "takbir",
            recitations: [{
                arabic: "ٱللَّٰهُ أَكْبَرُ",
                transliteration: "Allaahu Akbar",
                translation: "Allah is the Greatest",
                explanation: { summary: "Raise your hands and cast the entire world behind you.", significance: "The universe shrinks; only the Creator remains before you." }
            }]
        }, {
            name: "3. Qiyam — Surah Ad-Duha (The Morning Brightness)",
            image: "qiyaam",
            recitations: [{
                arabic: "سُورَةُ ٱلضُّحَىٰ",
                transliteration: "Surat ad-Duhaa",
                translation: "The Morning Brightness (Chapter 93)",
                explanation: {
                    summary: "A deeply personal surah — Allah's reassurance to His Prophet ﷺ during a time of hardship.",
                    components: [{
                        component: "Verses of Ad-Duha",
                        description: [
                            { verse: 1, arabic: "وَٱلضُّحَىٰ", transliteration: "Wad-duhaa", translation: "By the morning brightness." },
                            { verse: 2, arabic: "وَٱلَّيْلِ إِذَا سَجَىٰ", transliteration: "Wal-layli idhaa sajaa", translation: "And the night when it covers with darkness." },
                            { verse: 3, arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ", transliteration: "Maa wadda'aka Rabbuka wa maa qalaa", translation: "Your Lord has not taken leave of you, nor has He detested you." },
                            { verse: 4, arabic: "وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ ٱلْأُولَىٰ", transliteration: "Walal-aakhiratu khayrul-laka minal-oolaa", translation: "And the Hereafter is better for you than the first life." },
                            { verse: 5, arabic: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ", transliteration: "Wa lasawfa yu'teeka Rabbuka fatardaa", translation: "And your Lord is going to give you, and you will be satisfied." },
                            { verse: 6, arabic: "أَلَمْ يَجِدْكَ يَتِيمًا فَـَٔاوَىٰ", transliteration: "Alam yajidka yateeman fa-aawaa", translation: "Did He not find you an orphan and give you refuge?" },
                            { verse: 7, arabic: "وَوَجَدَكَ ضَآلًّا فَهَدَىٰ", transliteration: "Wa wajadaka daallan fahadaa", translation: "And He found you lost and guided you." },
                            { verse: 8, arabic: "وَوَجَدَكَ عَآئِلًا فَأَغْنَىٰ", transliteration: "Wa wajadaka 'aa'ilan fa-aghnaa", translation: "And He found you poor and made you self-sufficient." },
                            { verse: 9, arabic: "فَأَمَّا ٱلْيَتِيمَ فَلَا تَقْهَرْ", transliteration: "Fa-ammal-yateema falaa taqhar", translation: "So as for the orphan, do not oppress." },
                            { verse: 10, arabic: "وَأَمَّا ٱلسَّآئِلَ فَلَا تَنْهَرْ", transliteration: "Wa ammas-saa'ila falaa tanhar", translation: "And as for the petitioner, do not repel." },
                            { verse: 11, arabic: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ", transliteration: "Wa ammaa bi-ni'mati Rabbika fahaddith", translation: "But as for the favor of your Lord, report it." }
                        ]
                    }]
                }
            }],
            practice_tips: { technical: "Pause after every verse. Let the meaning settle.", spiritual: "Feel Allah speaking directly to your heart." }
        }, {
            name: "4. The Humble Ruku",
            image: "ruku",
            recitations: [{
                arabic: "سُبْحَانَ رَبِّيَ ٱلْعَظِيمِ",
                transliteration: "Subhaana Rabbiyal-'Adheem",
                translation: "Glory be to my Lord, the Magnificent",
                explanation: { summary: "Hold the position. A perfectly flat back. Hands gripping knees. Repeat 3+ times.", significance: "Bending the body until the ego bows too." }
            }]
        }, {
            name: "5. Sujud — The Station of Proximity",
            image: "sujud",
            recitations: [{
                arabic: "سُبْحَانَ رَبِّيَ ٱلْأَعْلَىٰ",
                transliteration: "Subhaana Rabbiyal-A'laa",
                translation: "Glory be to my Lord, the Most High",
                explanation: { summary: "The lowest point of the body is the highest point of the soul.", significance: "Whispering to the ground, heard in the Heavens. Make long personal dua here." }
            }]
        }, {
            name: "6. Final Tasleem — Spreading Peace",
            image: "salaam",
            recitations: [{
                arabic: "ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ",
                transliteration: "As-salaamu 'alaykum wa rahmatullaah",
                translation: "Peace and mercy of Allah be upon you",
                explanation: { summary: "Exiting the prayer with a heart full of light.", significance: "Returning from the audience with Allah to serve His creation." }
            }]
        }],
        quiz: [
            { question: "What is 'Ihsan' in worship?", options: ["Praying fast", "Worshipping as if you see Allah", "Moving a lot", "Talking during prayer"], correct: 1 },
            { question: "Which surah begins with 'By the morning brightness'?", options: ["Al-Ikhlas", "Al-Fatiha", "Ad-Duha", "Al-Asr"], correct: 2 }
        ]
    }]
}];

const postureImages = {
    'takbir': '<img src="https://cdn.vectorstock.com/i/500p/29/94/muslim-prayer-position-guide-step-vector-8652994.avif" alt="Takbir" class="posture-image">',
    'qiyaam': '<img src="https://cdn.vectorstock.com/i/500p/30/42/muslim-prayer-position-guide-step-vector-8653042.avif" alt="Qiyam" class="posture-image">',
    'ruku': '<img src="https://cdn.vectorstock.com/i/500p/31/04/muslim-prayer-position-guide-step-vector-8653104.avif" alt="Ruku" class="posture-image">',
    'sujud': '<img src="https://cdn.vectorstock.com/i/500p/31/55/muslim-prayer-position-guide-step-vector-8653155.avif" alt="Sujud" class="posture-image">',
    'jalsa': '<img src="https://cdn.vectorstock.com/i/500p/32/26/muslim-prayer-position-guide-step-vector-8653226.avif" alt="Jalsa" class="posture-image">',
    'tashahhud': '<img src="https://cdn.vectorstock.com/i/500p/32/78/muslim-prayer-position-guide-step-vector-8653278.avif" alt="Tashahhud" class="posture-image">',
    'salaam': '<img src="https://cdn.vectorstock.com/i/500p/33/66/muslim-prayer-position-guide-step-vector-8653366.avif" alt="Salaam" class="posture-image">',
    'dhikr': '<img src="https://cdn.vectorstock.com/i/2000v/70/30/muslim-hand-holding-prayer-beads-dhikr-vector-28387030.avif" alt="Dhikr" class="posture-image">',
    'dua': '<img src="https://cdn.vectorstock.com/i/2000v/80/77/young-muslim-man-praying-while-holding-rosary-vector-51608077.avif" alt="Dua" class="posture-image">',
    'wudu-steps': '<img src="https://cdn.vectorstock.com/i/750p/13/87/islam-ablutions-or-wudu-steps-tutorial-vector-24001387.avif" alt="Wudu Steps" class="posture-image">'
};
