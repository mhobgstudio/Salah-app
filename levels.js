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
        practice: `<h3>Wudu Practice Checklist</h3><p>Perform Wudu following these steps in order. Check each one off mentally as you go:</p><ol><li><strong>Niyyah (Intention):</strong> Say "Bismillah" and set your intention to purify yourself for the sake of Allah.</li><li><strong>Wash Hands:</strong> Wash both hands up to the wrists 3 times, ensuring water reaches between the fingers.</li><li><strong>Rinse Mouth:</strong> Take water with the right hand and rinse mouth thoroughly, 3 times.</li><li><strong>Sniff Water:</strong> Sniff water into nostrils and blow out gently, 3 times.</li><li><strong>Wash Face:</strong> Wash from hairline to chin and ear to ear, 3 times.</li><li><strong>Wash Right Arm:</strong> From fingertips to elbow, 3 times.</li><li><strong>Wash Left Arm:</strong> From fingertips to elbow, 3 times.</li><li><strong>Wipe Head:</strong> Once — wet hands from forehead to back and return.</li><li><strong>Wipe Ears:</strong> Index fingers inside, thumbs outside, once.</li><li><strong>Wash Right Foot:</strong> Up to ankle including between toes, 3 times.</li><li><strong>Wash Left Foot:</strong> Up to ankle including between toes, 3 times.</li></ol><p><strong>Dua after Wudu:</strong> "Ash-hadu an laa ilaaha illallaah, wa ash-hadu anna Muhammadan 'abduhu wa rasooluh."</p>`,
        quiz: [
            { question: "What is the primary purpose of Niyyah?", options: ["Showing off", "Setting spiritual focus", "Just a habit", "To tell others"], correct: 1 },
            { question: "Is Wudu required for every prayer?", options: ["Only on Fridays", "Yes, unless you already have it", "No", "Only for Fajr"], correct: 1 },
            { question: "What do you say before starting Wudu?", options: ["Allahu Akbar", "Bismillah", "Subhanallah", "Alhamdulillah"], correct: 1 },
            { question: "How many times do you wash each hand?", options: ["Once", "Twice", "Three times", "Four times"], correct: 2 },
            { question: "Which arm do you wash first?", options: ["Left", "Right", "Both together", "Either"], correct: 1 },
            { question: "How many times do you wipe the head?", options: ["Three times", "Twice", "Once", "Four times"], correct: 2 },
            { question: "What is the correct order after washing the face?", options: ["Feet, then arms", "Head, then ears", "Arms, then head", "Ears, then arms"], correct: 2 },
            { question: "What breaks your Wudu?", options: ["Drinking water", "Sleeping deeply", "Eating food", "Walking"], correct: 1 }
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
            name: "0. Wudu Refresher — Quick Sequence",
            image: "wudu-steps",
            recitations: [{
                arabic: "بِسْمِ ٱللَّٰهِ",
                transliteration: "Bismillah",
                translation: "In the name of Allah",
                explanation: { summary: "Before every prayer, ensure you have Wudu. Quick reminder: Hands → Mouth → Nose → Face → Arms → Head → Ears → Feet. Say Bismillah before starting." }
            }],
            practice_tips: { technical: "Ensure no dry spots remain. Water must touch every required area.", spiritual: "Each limb washed is a sin forgiven." }
        }, {
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
            name: "10. Final Tashahhud",
            image: "tashahhud",
            recitations: [{
                arabic: "ٱلتَّحِيَّاتُ لِلَّٰهِ وَٱلصَّلَوَاتُ وَٱلطَّيِّبَاتُ، ٱلسَّلَامُ عَلَيْكَ أَيُّهَا ٱلنَّبِيُّ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ، ٱلسَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ ٱللَّٰهِ ٱلصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
                transliteration: "At-tahiyyaatu lillaahi was-salawaatu wat-tayyibaat. As-salaamu 'alayka ayyuhan-nabiyyu wa rahmatullaahi wa barakaatuh. As-salaamu 'alaynaa wa 'alaa 'ibaadillaahis-saaliheen. Ash-hadu an laa ilaaha illallaah, wa ash-hadu anna Muhammadan 'abduhu wa rasooluh.",
                translation: "All greetings, prayers, and good things are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and Messenger.",
                explanation: { summary: "The complete Tashahhud recited in the final sitting of the prayer." }
            }, {
                arabic: "ٱللَّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، ٱللَّٰهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
                transliteration: "Allahumma salli 'alaa Muhammadin wa 'alaa aali Muhammadin, kamaa sallayta 'alaa Ibraheema wa 'alaa aali Ibraheema, innaka Hameedun Majeed. Allahumma baarik 'alaa Muhammadin wa 'alaa aali Muhammadin, kamaa baarakta 'alaa Ibraheema wa 'alaa aali Ibraheema, innaka Hameedun Majeed.",
                translation: "O Allah, send prayers upon Muhammad and upon the family of Muhammad, as You sent prayers upon Ibrahim and upon the family of Ibrahim. You are Praiseworthy, Glorious. O Allah, bless Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim. You are Praiseworthy, Glorious.",
                explanation: { summary: "The Salawat Ibrahimiyyah — added ONLY in the final Tashahhud, after the Shahada." }
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
        practice: `<h3>2-Rak'ah Prayer Practice (Fajr Style)</h3><p>Pray a complete 2-Rak'ah prayer following this sequence:</p><ol><li><strong>Stand facing Qiblah.</strong> Make intention for Fajr (or any 2-rak'ah prayer).</li><li><strong>Takbirat al-Ihram:</strong> Raise hands and say "Allahu Akbar".</li><li><strong>Rak'ah 1:</strong><ul><li>Recite Al-Fatiha (all 7 verses) ending with "Aameen".</li><li>Recite Surah Al-Ikhlas (4 verses).</li><li>Say "Allahu Akbar" and go into Ruku — say "Subhaana Rabbiyal-'Adheem" 3 times.</li><li>Rise saying "Sami'Allahu liman hamidah. Rabbana wa lakal-hamd."</li><li>Go into Sujud — say "Subhaana Rabbiyal-A'laa" 3 times.</li><li>Sit briefly (Jalsa) — say "Rabbighfir lee" twice.</li><li>Second Sujud — say "Subhaana Rabbiyal-A'laa" 3 times.</li></ul></li><li><strong>Rak'ah 2:</strong><ul><li>Rise and recite Al-Fatiha again.</li><li>Recite Surah Al-Falaq (5 verses).</li><li>Ruku → I'tidal → Sujud → Jalsa → Sujud (same as Rak'ah 1).</li></ul></li><li><strong>Final Tashahhud:</strong> Sit and recite full Tashahhud + Salawat Ibrahimiyyah.</li><li><strong>Tasleem:</strong> Turn right saying "As-salaamu 'alaykum wa rahmatullaah", then left.</li></ol><h4>Prayers that use this 2-Rak'ah format:</h4><ul><li>Fajr (Obligatory dawn prayer)</li><li>Jumu'ah (Friday congregational)</li><li>Sunnah Rawatib (before/after obligatory prayers)</li><li>Salat al-Istikharah (guidance prayer)</li><li>Tahiyyat al-Masjid (greeting the mosque)</li><li>Eid prayers (with extra Takbirs — see Level 5)</li></ul>`,
        quiz: [
            { question: "How many verses are in Al-Fatiha?", options: ["5", "6", "7", "8"], correct: 2 },
            { question: "Which of these is a 2-Rak'ah prayer?", options: ["Dhuhr", "Asr", "Fajr", "Isha"], correct: 2 },
            { question: "What surah equals one-third of the Quran?", options: ["Al-Falaq", "Al-Nas", "Al-Ikhlas", "Al-Kawthar"], correct: 2 },
            { question: "Name another 2-Rak'ah prayer besides Fajr.", options: ["Dhuhr", "Jumu'ah", "Maghrib", "Asr"], correct: 1 },
            { question: "What do you say in Ruku?", options: ["Subhaana Rabbiyal-A'laa", "Subhaana Rabbiyal-'Adheem", "Allahu Akbar", "Rabbighfir lee"], correct: 1 },
            { question: "What do you say in Sujud?", options: ["Subhaana Rabbiyal-'Adheem", "Sami'Allahu liman hamidah", "Subhaana Rabbiyal-A'laa", "Allahu Akbar"], correct: 2 },
            { question: "How many points of contact in Sujud?", options: ["5", "6", "7", "8"], correct: 2 },
            { question: "What do you say when rising from Ruku?", options: ["Allahu Akbar", "Bismillah", "Sami'Allahu liman hamidah", "Subhanallah"], correct: 2 },
            { question: "Which surah is recited in Rak'ah 2 of this level?", options: ["Al-Ikhlas", "Al-Falaq", "An-Nas", "Al-Kawthar"], correct: 1 },
            { question: "What is Tahiyyat al-Masjid?", options: ["Funeral prayer", "Eid prayer", "Greeting the mosque prayer", "Night prayer"], correct: 2 }
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
            name: "0. Wudu Review — Washing Sequence with Sunnah Additions",
            image: "wudu-steps",
            recitations: [{
                arabic: "بِسْمِ ٱللَّٰهِ",
                transliteration: "Bismillah",
                translation: "In the name of Allah",
                explanation: { summary: "Ensure Wudu before Maghrib. Full sequence: Hands (3x) → Mouth (3x) → Nose (3x) → Face (3x) → Right Arm to elbow (3x) → Left Arm to elbow (3x) → Wipe Head (once, front to back and return) → Wipe Ears (once) → Right Foot to ankle (3x) → Left Foot to ankle (3x). Sunnah addition: Wash between toes with the little finger of the left hand." }
            }],
            practice_tips: { technical: "Start with the right side for arms and feet. Ensure water reaches between toes.", spiritual: "The Prophet ﷺ said: 'When a Muslim washes his face, every sin he looked at with his eyes comes off his face with the water.'" }
        }, {
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
            name: "5. Final Tashahhud, Salawat Ibrahimiyyah, and Tasleem",
            image: "tashahhud",
            recitations: [{
                arabic: "ٱلتَّحِيَّاتُ لِلَّٰهِ وَٱلصَّلَوَاتُ وَٱلطَّيِّبَاتُ، ٱلسَّلَامُ عَلَيْكَ أَيُّهَا ٱلنَّبِيُّ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ، ٱلسَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ ٱللَّٰهِ ٱلصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
                transliteration: "At-tahiyyaatu lillaahi was-salawaatu wat-tayyibaat. As-salaamu 'alayka ayyuhan-nabiyyu wa rahmatullaahi wa barakaatuh. As-salaamu 'alaynaa wa 'alaa 'ibaadillaahis-saaliheen. Ash-hadu an laa ilaaha illallaah, wa ash-hadu anna Muhammadan 'abduhu wa rasooluh.",
                translation: "All greetings, prayers, and good things are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and Messenger.",
                explanation: { summary: "The complete Tashahhud — recited in the final sitting." }
            }, {
                arabic: "ٱللَّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، ٱللَّٰهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
                transliteration: "Allahumma salli 'alaa Muhammadin wa 'alaa aali Muhammadin, kamaa sallayta 'alaa Ibraheema wa 'alaa aali Ibraheema, innaka Hameedun Majeed. Allahumma baarik 'alaa Muhammadin wa 'alaa aali Muhammadin, kamaa baarakta 'alaa Ibraheema wa 'alaa aali Ibraheema, innaka Hameedun Majeed.",
                translation: "O Allah, send prayers upon Muhammad and upon the family of Muhammad, as You sent prayers upon Ibrahim and upon the family of Ibrahim. You are Praiseworthy, Glorious. O Allah, bless Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim. You are Praiseworthy, Glorious.",
                explanation: { summary: "The Salawat Ibrahimiyyah — added after the Shahada in the final Tashahhud only." }
            }, {
                arabic: "ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ",
                transliteration: "As-salaamu 'alaykum wa rahmatullaah",
                translation: "Peace and mercy of Allah be upon you",
                explanation: { summary: "Turn head to the right, then to the left. This exits the prayer." }
            }]
        }],
        practice: `<h3>3-Rak'ah Maghrib Practice</h3><p>Perform the complete Maghrib prayer step by step:</p><ol><li><strong>Takbirat al-Ihram:</strong> "Allahu Akbar" — raise hands.</li><li><strong>Rak'ah 1 (ALOUD):</strong><ul><li>Al-Fatiha (all 7 verses) + "Aameen"</li><li>Surah An-Nas (6 verses)</li><li>Ruku → "Subhaana Rabbiyal-'Adheem" ×3</li><li>Rise → "Sami'Allahu liman hamidah"</li><li>Sujud → "Subhaana Rabbiyal-A'laa" ×3</li><li>Jalsa → "Rabbighfir lee" ×2</li><li>Sujud again</li></ul></li><li><strong>Rak'ah 2 (ALOUD):</strong><ul><li>Al-Fatiha + Surah Al-Kawthar (3 verses)</li><li>Same Ruku-Sujud sequence</li></ul></li><li><strong>First Tashahhud (Middle Sitting):</strong><ul><li>Recite Tashahhud up to the Shahada ONLY</li><li>Do NOT add Salawat Ibrahimiyyah here</li><li>Rise for the 3rd rak'ah with "Allahu Akbar"</li></ul></li><li><strong>Rak'ah 3 (SILENT):</strong><ul><li>Al-Fatiha ONLY — no additional surah</li><li>Recite silently (move lips, no voice)</li><li>Same Ruku-Sujud sequence</li></ul></li><li><strong>Final Tashahhud + Salawat + Tasleem:</strong><ul><li>Full Tashahhud + Salawat Ibrahimiyyah</li><li>Personal dua, then Tasleem to both sides</li></ul></li></ol><h4>Key Distinction:</h4><p>Maghrib is the ONLY obligatory prayer with 3 rak'ahs. The Witr prayer (voluntary night prayer) can also be 3 rak'ahs.</p>`,
        quiz: [
            { question: "How many rak'ahs is Maghrib?", options: ["2", "3", "4", "5"], correct: 1 },
            { question: "Are the first two rak'ahs of Maghrib loud or silent?", options: ["Silent", "Loud", "First loud, second silent", "Depends"], correct: 1 },
            { question: "What do you recite in the 3rd rak'ah of Maghrib?", options: ["Fatiha + Surah", "Only Fatiha", "Only a Surah", "Nothing"], correct: 1 },
            { question: "Do you add Salawat to the First Tashahhud?", options: ["Yes, always", "No, only Tashahhud up to Shahada", "Only in Maghrib", "Only on Fridays"], correct: 1 },
            { question: "How many verses are in Surah An-Nas?", options: ["4", "5", "6", "7"], correct: 2 },
            { question: "How many verses are in Surah Al-Kawthar?", options: ["2", "3", "4", "5"], correct: 1 },
            { question: "What is 'Jahr' recitation?", options: ["Silent", "Aloud", "Whisper", "In your head"], correct: 1 },
            { question: "Is the 3rd rak'ah of Maghrib silent or loud?", options: ["Loud", "Silent", "Either", "Depends on imam"], correct: 1 },
            { question: "Which other prayer can also be 3 rak'ahs?", options: ["Dhuhr", "Witr", "Fajr", "Isha"], correct: 1 }
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
            name: "0. Wudu — Detailed Sequence with Invalidators",
            image: "wudu-steps",
            recitations: [{
                arabic: "بِسْمِ ٱللَّٰهِ",
                transliteration: "Bismillah",
                translation: "In the name of Allah",
                explanation: { summary: "Complete Wudu sequence: (1) Say Bismillah. (2) Wash hands 3x. (3) Rinse mouth 3x. (4) Sniff water into nose and blow out 3x. (5) Wash face from hairline to chin, ear to ear, 3x. (6) Wash right arm fingertips to elbow 3x. (7) Wash left arm fingertips to elbow 3x. (8) Wipe head once front to back and return. (9) Wipe ears — index fingers inside, thumbs behind. (10) Wash right foot to ankle 3x including between toes. (11) Wash left foot to ankle 3x including between toes. Things that BREAK Wudu: using the bathroom, passing gas, deep sleep, vomiting, bleeding significantly. Dua after Wudu: Ash-hadu an laa ilaaha illallaah, wa ash-hadu anna Muhammadan 'abduhu wa rasooluh." }
            }],
            practice_tips: { technical: "Always start with the right side. Rub between fingers and toes. Don't waste water.", spiritual: "The Prophet ﷺ said: 'Whoever performs Wudu perfectly, his sins will depart from his body, even from beneath his nails.'" }
        }, {
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
                arabic: "ٱلتَّحِيَّاتُ لِلَّٰهِ وَٱلصَّلَوَاتُ وَٱلطَّيِّبَاتُ، ٱلسَّلَامُ عَلَيْكَ أَيُّهَا ٱلنَّبِيُّ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ، ٱلسَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ ٱللَّٰهِ ٱلصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
                transliteration: "At-tahiyyaatu lillaahi was-salawaatu wat-tayyibaat. As-salaamu 'alayka ayyuhan-nabiyyu wa rahmatullaahi wa barakaatuh. As-salaamu 'alaynaa wa 'alaa 'ibaadillaahis-saaliheen. Ash-hadu an laa ilaaha illallaah, wa ash-hadu anna Muhammadan 'abduhu wa rasooluh.",
                translation: "All greetings, prayers, and good things are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and Messenger.",
                explanation: { summary: "After the 2nd rak'ah, sit and recite the Tashahhud up to the Shahada. Do NOT add Salawat Ibrahimiyyah here. Then rise for the 3rd rak'ah with Takbir.", significance: "A testimony of faith at the midpoint of prayer." }
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
            name: "5. Final Tashahhud, Salawat Ibrahimiyyah, and Tasleem",
            image: "tashahhud",
            recitations: [{
                arabic: "ٱلتَّحِيَّاتُ لِلَّٰهِ وَٱلصَّلَوَاتُ وَٱلطَّيِّبَاتُ، ٱلسَّلَامُ عَلَيْكَ أَيُّهَا ٱلنَّبِيُّ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ، ٱلسَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ ٱللَّٰهِ ٱلصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
                transliteration: "At-tahiyyaatu lillaahi was-salawaatu wat-tayyibaat. As-salaamu 'alayka ayyuhan-nabiyyu wa rahmatullaahi wa barakaatuh. As-salaamu 'alaynaa wa 'alaa 'ibaadillaahis-saaliheen. Ash-hadu an laa ilaaha illallaah, wa ash-hadu anna Muhammadan 'abduhu wa rasooluh.",
                translation: "All greetings, prayers, and good things are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and Messenger.",
                explanation: { summary: "The complete Tashahhud — recited in the final sitting of the prayer." }
            }, {
                arabic: "ٱللَّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، ٱللَّٰهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
                transliteration: "Allahumma salli 'alaa Muhammadin wa 'alaa aali Muhammadin, kamaa sallayta 'alaa Ibraheema wa 'alaa aali Ibraheema, innaka Hameedun Majeed. Allahumma baarik 'alaa Muhammadin wa 'alaa aali Muhammadin, kamaa baarakta 'alaa Ibraheema wa 'alaa aali Ibraheema, innaka Hameedun Majeed.",
                translation: "O Allah, send prayers upon Muhammad and upon the family of Muhammad, as You sent prayers upon Ibrahim and upon the family of Ibrahim. You are Praiseworthy, Glorious. O Allah, bless Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim. You are Praiseworthy, Glorious.",
                explanation: { summary: "The Salawat Ibrahimiyyah — added after the Shahada in the final Tashahhud only." }
            }, {
                arabic: "ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ",
                transliteration: "As-salaamu 'alaykum wa rahmatullaah",
                translation: "Peace and mercy of Allah be upon you",
                explanation: { summary: "Turn head to the right, then to the left. This exits the prayer." }
            }]
        }],
        practice: `<h3>4-Rak'ah Prayer Practice (Dhuhr/Asr/Isha)</h3><p>Complete a full 4-rak'ah prayer:</p><ol><li><strong>Takbirat al-Ihram + Rak'ah 1:</strong><ul><li>Al-Fatiha + Surah Al-Asr (3 verses)</li><li>Ruku → I'tidal → Sujud → Jalsa → Sujud</li></ul></li><li><strong>Rak'ah 2:</strong><ul><li>Al-Fatiha + Surah Al-Fil (5 verses)</li><li>Ruku → I'tidal → Sujud → Jalsa → Sujud</li></ul></li><li><strong>First Tashahhud (Middle Sitting):</strong><ul><li>Tashahhud up to Shahada only — NO Salawat</li><li>Rise with Takbir for Rak'ah 3</li></ul></li><li><strong>Rak'ah 3:</strong><ul><li>Al-Fatiha ONLY — no surah, recited silently</li><li>Ruku → I'tidal → Sujud → Jalsa → Sujud</li></ul></li><li><strong>Rak'ah 4:</strong><ul><li>Al-Fatiha ONLY — no surah, recited silently</li><li>Ruku → I'tidal → Sujud → Jalsa → Sujud</li></ul></li><li><strong>Final Tashahhud + Salawat + Tasleem</strong></li></ol><h4>Recitation Rules by Prayer:</h4><table style='width:100%; border-collapse:collapse; margin-top:10px;'><tr style='background:rgba(6,78,59,0.1);'><th style='padding:8px; text-align:left;'>Prayer</th><th style='padding:8px;'>Rak'ahs 1-2</th><th style='padding:8px;'>Rak'ahs 3-4</th></tr><tr><td style='padding:8px;'>Dhuhr</td><td style='padding:8px;'>Silent</td><td style='padding:8px;'>Silent</td></tr><tr><td style='padding:8px;'>Asr</td><td style='padding:8px;'>Silent</td><td style='padding:8px;'>Silent</td></tr><tr><td style='padding:8px;'>Isha</td><td style='padding:8px;'>ALOUD</td><td style='padding:8px;'>Silent</td></tr></table>`,
        quiz: [
            { question: "Which prayers are 4 Rak'ahs?", options: ["Fajr, Maghrib, Witr", "Dhuhr, Asr, Isha", "Only Dhuhr", "All five"], correct: 1 },
            { question: "Is Dhuhr recited aloud or silently?", options: ["Aloud", "Silently", "First rak'ah aloud", "Alternating"], correct: 1 },
            { question: "Do Rak'ahs 3 & 4 have an additional surah?", options: ["Yes", "No, only Fatiha", "Only in Isha", "Only in Dhuhr"], correct: 1 },
            { question: "Which rak'ahs of Isha are recited aloud?", options: ["All 4", "First 2 only", "Last 2 only", "None"], correct: 1 },
            { question: "What is the translation of 'Wal-'Asr'?", options: ["By the night", "By time", "By the morning", "By the star"], correct: 1 },
            { question: "How many verses are in Surah Al-Fil?", options: ["3", "4", "5", "6"], correct: 2 },
            { question: "What is Surah Al-Asr about?", options: ["The elephant army", "Mankind being in loss except believers", "The morning light", "Allah's oneness"], correct: 1 },
            { question: "When do you add Salawat to the Tashahhud?", options: ["After every Tashahhud", "Only in the FINAL Tashahhud", "Never", "Only in Fajr"], correct: 1 },
            { question: "How is Asr different from Isha in recitation?", options: ["Asr is all silent; Isha first 2 are aloud", "They are the same", "Asr is aloud", "Isha is all silent"], correct: 0 },
            { question: "What do you do after the First Tashahhud in a 4-rak'ah prayer?", options: ["Say Tasleem", "Rise for the 3rd rak'ah", "Add Salawat", "Make dua"], correct: 1 }
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
            name: "0. Wudu — Full Sunnah Method with Dua",
            image: "wudu-steps",
            recitations: [{
                arabic: "بِسْمِ ٱللَّٰهِ",
                transliteration: "Bismillah",
                translation: "In the name of Allah",
                explanation: { summary: "Advanced Wudu for a special occasion: (1) Bismillah with full intention. (2) Wash hands 3x — ensure water between all fingers. (3) Rinse mouth with vigor (Madhmadhah) 3x. (4) Sniff water into both nostrils firmly (Istinshaq) and blow out (Istinthaar) 3x. (5) Wash face thoroughly from hairline to chin, ear to ear, 3x — include the beard if you have one by running wet fingers through it. (6) Right arm to elbow 3x, then left arm 3x — rub thoroughly. (7) Wipe head once: wet hands, pass from forehead to nape and back. (8) Wipe ears: insert index fingers, wipe behind with thumbs. (9) Right foot to ankle 3x, then left foot 3x — use left pinky finger between toes. Dua after: 'Ash-hadu an laa ilaaha illallaah wahdahu laa shareeka lah, wa ash-hadu anna Muhammadan 'abduhu wa rasooluh. Allahummaj'alnee minat-tawwaabeena waj'alnee minal-mutatohhireen.' (I bear witness there is no god but Allah alone, and Muhammad is His servant and Messenger. O Allah, make me of those who repent and make me of those who purify themselves.)" }
            }],
            practice_tips: { technical: "For Eid, perform Ghusl (full shower) if possible, which is Sunnah. Wear your best clothes.", spiritual: "Eid is a celebration of obedience. The purity of your body mirrors the purity of a month of fasting." }
        }, {
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
        practice: `<h3>Eid Prayer Practice</h3><p>Walk through the unique Eid sequence:</p><ol><li><strong>Opening Takbir:</strong> "Allahu Akbar" — this starts the prayer.</li><li><strong>7 Extra Takbirs:</strong> Say "Allahu Akbar" 7 more times, raising hands to ears each time. Pause between each one.</li><li><strong>Rak'ah 1:</strong><ul><li>Al-Fatiha (aloud)</li><li>Surah Al-A'la (aloud)</li><li>Regular Ruku → Sujud → Jalsa → Sujud sequence</li></ul></li><li><strong>Rise for Rak'ah 2 with Takbir.</strong></li><li><strong>5 Extra Takbirs:</strong> Say "Allahu Akbar" 5 more times with raised hands before Fatiha.</li><li><strong>Rak'ah 2:</strong><ul><li>Al-Fatiha (aloud)</li><li>Surah Al-Ghashiyah (aloud)</li><li>Regular Ruku → Sujud → Jalsa → Sujud sequence</li></ul></li><li><strong>Final Tashahhud + Salawat + Tasleem.</strong></li></ol><h4>Eid Prayer Types:</h4><ul><li><strong>Eid al-Fitr:</strong> After Ramadan. Given Zakat al-Fitr before the prayer.</li><li><strong>Eid al-Adha:</strong> Festival of Sacrifice. The Udhiyah (animal sacrifice) follows.</li></ul><p><strong>Note:</strong> Eid prayer has NO adhan and NO iqamah. It is followed by a khutbah (sermon).</p>`,
        quiz: [
            { question: "How many extra Takbirs in Rak'ah 1 of Eid?", options: ["3", "5", "7", "9"], correct: 2 },
            { question: "How many extra Takbirs in Rak'ah 2 of Eid?", options: ["3", "5", "7", "9"], correct: 1 },
            { question: "When are the extra Takbirs said?", options: ["After Fatiha", "Before Fatiha", "After Ruku", "During Sujud"], correct: 1 },
            { question: "Is there an Adhan for Eid prayer?", options: ["Yes", "No"], correct: 1 },
            { question: "How many rak'ahs is the Eid prayer?", options: ["1", "2", "3", "4"], correct: 1 },
            { question: "What comes AFTER the Eid prayer?", options: ["Another prayer", "A khutbah (sermon)", "Fasting", "Nothing"], correct: 1 },
            { question: "Which surah did the Prophet ﷺ recite in Eid?", options: ["Al-Ikhlas", "Al-A'la and Al-Ghashiyah", "Al-Falaq", "Yasin"], correct: 1 },
            { question: "What is Eid al-Fitr celebrating?", options: ["Hajj", "End of Ramadan", "Prophet's birthday", "New Year"], correct: 1 }
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
            name: "0. Wudu — Complete Review with All Invalidators",
            image: "wudu-steps",
            recitations: [{
                arabic: "بِسْمِ ٱللَّٰهِ",
                transliteration: "Bismillah",
                translation: "In the name of Allah",
                explanation: { summary: "Even for Janazah, Wudu is required as it is a prayer. Complete sequence: (1) Bismillah. (2) Hands 3x. (3) Mouth 3x. (4) Nose (Istinshaq + Istinthaar) 3x. (5) Face 3x. (6) Right arm to elbow 3x. (7) Left arm to elbow 3x. (8) Wipe full head once (front to back, back to front). (9) Wipe ears once (index inside, thumbs behind). (10) Right foot to ankle 3x (between toes). (11) Left foot to ankle 3x (between toes). INVALIDATORS: (A) Anything exiting front/back passages. (B) Deep sleep (losing consciousness). (C) Touching private parts directly. (D) Eating camel meat (according to some scholars). (E) Vomiting a mouthful. (F) Loss of consciousness/sanity. If unsure whether Wudu is still valid, the principle is: certainty is not overridden by doubt — if you are sure you made Wudu and unsure you broke it, it is still valid." }
            }],
            practice_tips: { technical: "Wudu must be complete for Janazah. There is no tayammum substitute unless water is truly unavailable.", spiritual: "You are about to stand before Allah on behalf of the deceased. Ensure the utmost purity." }
        }, {
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
        practice: `<h3>Janazah Prayer Practice</h3><p>The Janazah is entirely performed standing. No bowing, no prostration.</p><ol><li><strong>Takbir 1:</strong> Say "Allahu Akbar" with raised hands → Recite Al-Fatiha silently.</li><li><strong>Takbir 2:</strong> Say "Allahu Akbar" (hands may or may not be raised) → Recite Salawat Ibrahimiyyah.</li><li><strong>Takbir 3:</strong> Say "Allahu Akbar" → Recite the Dua for the deceased:<br><em>"Allahummagh-fir lahu warhamhu wa 'aafihi wa'fu 'anhu wa akrim nuzulahu wa wassi' mudkhalahu waghsilhu bil-maa'i wath-thalji wal-barad."</em><br>(O Allah, forgive him, have mercy on him, grant him wellbeing, pardon him, honor his reception, widen his entrance, and wash him with water, snow, and hail.)</li><li><strong>Takbir 4:</strong> Say "Allahu Akbar" → Pause briefly in silence.</li><li><strong>Tasleem:</strong> Say "As-salaamu 'alaykum wa rahmatullaah" — one Tasleem to the right (some scholars say both sides).</li></ol><h4>Key Rules:</h4><ul><li>It is a <strong>Fard Kifayah</strong> — if enough people perform it, the obligation is lifted from the rest.</li><li>The body of the deceased should be in front of the imam.</li><li>For a male deceased, the imam stands at the chest level; for a female, at the middle.</li><li>There is NO adhan, iqamah, ruku, or sujud.</li></ul>`,
        quiz: [
            { question: "Does Janazah prayer have Ruku or Sujud?", options: ["Yes", "No — standing only"], correct: 1 },
            { question: "What is recited after the 2nd Takbir?", options: ["Al-Fatiha", "Salawat Ibrahimiyyah", "Dua for deceased", "Tasleem"], correct: 1 },
            { question: "Is Janazah Fard 'Ayn or Fard Kifayah?", options: ["Fard 'Ayn (on everyone)", "Fard Kifayah (communal)"], correct: 1 },
            { question: "How many Takbirs are in the Janazah prayer?", options: ["2", "3", "4", "5"], correct: 2 },
            { question: "What is recited after the 1st Takbir?", options: ["Dua for deceased", "Salawat", "Al-Fatiha", "Nothing"], correct: 2 },
            { question: "What is the main Dua in Janazah asking for?", options: ["Money", "Forgiveness and mercy for the deceased", "Long life", "Knowledge"], correct: 1 },
            { question: "What does 'Fard Kifayah' mean?", options: ["Everyone must do it", "If enough people do it, it's fulfilled for all", "Only the imam does it", "It's optional"], correct: 1 },
            { question: "Is there an Adhan for Janazah?", options: ["Yes", "No"], correct: 1 }
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
        practice: `<h3>Ihsan Mastery Practice</h3><p>This is not a new prayer — it is perfecting everything you've learned. Pray any 4-rak'ah prayer with the following Ihsan checklist:</p><ol><li><strong>Before Prayer:</strong><ul><li>Perform Wudu slowly and mindfully. Feel each drop of water.</li><li>Choose a clean, quiet space. Remove distractions.</li><li>Stand facing Qiblah. Take 3 deep breaths before beginning.</li></ul></li><li><strong>During Takbir:</strong> Close your eyes briefly. Imagine the entire world melting away behind you.</li><li><strong>During Qiyam:</strong><ul><li>Recite Al-Fatiha ONE verse at a time. Pause 2-3 seconds between each verse.</li><li>Recite Surah Ad-Duha — feel the warmth of Allah's reassurance.</li><li>Think about the MEANING, not just the words.</li></ul></li><li><strong>During Ruku:</strong> Hold longer than usual. Say "Subhaana Rabbiyal-'Adheem" at least 5 times. Feel your ego bowing.</li><li><strong>During Sujud:</strong><ul><li>Stay longer. Say "Subhaana Rabbiyal-A'laa" at least 7 times.</li><li>Make personal dua in your own language. Pour your heart out.</li><li>This is the closest you will ever be to Allah.</li></ul></li><li><strong>During Tasleem:</strong> Feel gratitude. You just had a private audience with the Creator of the universe.</li></ol><h4>The Prophet ﷺ said:</h4><p><em>"Pray as you have seen me praying."</em> (Bukhari)</p><p><em>"Ihsan is to worship Allah as if you see Him, and if you cannot see Him, know that He sees you."</em> (Muslim)</p>`,
        quiz: [
            { question: "What is 'Ihsan' in worship?", options: ["Praying fast", "Worshipping as if you see Allah", "Moving a lot", "Talking during prayer"], correct: 1 },
            { question: "Which surah begins with 'By the morning brightness'?", options: ["Al-Ikhlas", "Al-Fatiha", "Ad-Duha", "Al-Asr"], correct: 2 },
            { question: "What is 'Khushu'?", options: ["Speed", "Deep humility and focus in prayer", "Loudness", "Movement"], correct: 1 },
            { question: "When are you closest to Allah?", options: ["Standing", "Ruku", "Sujud", "Tasleem"], correct: 2 },
            { question: "What are 'Makharij'?", options: ["Prayer positions", "Articulation points for Arabic letters", "Types of prayer", "Wudu steps"], correct: 1 },
            { question: "Complete: 'Your Lord has not taken leave of you...' — which surah?", options: ["Al-Fatiha", "Ad-Duha (93:3)", "Al-Ikhlas", "Al-Falaq"], correct: 1 },
            { question: "What did the Prophet ﷺ say about prayer?", options: ["Pray quickly", "Pray as you have seen me praying", "Pray only when you feel like it", "Pray silently always"], correct: 1 },
            { question: "How many verses are in Surah Ad-Duha?", options: ["5", "7", "9", "11"], correct: 3 },
            { question: "What is the meaning of 'Wa wajadaka daallan fahadaa'?", options: ["He found you rich", "He found you lost and guided you", "He made you sad", "He tested you"], correct: 1 },
            { question: "What should you focus on during Ihsan prayer?", options: ["Speed of recitation", "The meaning of every word", "How others see you", "Finishing quickly"], correct: 1 }
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
