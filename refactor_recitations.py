import re
import os

file_path = r'c:\Users\mhojn\TerminalProjects\Salah-app-main\Salah-app-main\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Refactored Al-Falaq
al_falaq_new = """                    {
                        name: "Recitation of al-Falaq",
                        image: "qiyaam",
                        recitations: [{
                            arabic: "سُورَةُ ٱلْفَلَقِ",
                            transliteration: "Surat al-Falaq",
                            translation: "The Daybreak",
                            audio: "falaq-audio",
                            explanation: {
                                summary: "A surah for seeking refuge in Allah from various forms of evil.",
                                components: [
                                    {
                                        component: "Verses of Protection",
                                        description: [
                                            { verse: 1, arabic: "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ", transliteration: "Qul a'oodhu birabbil-falaq", translation: "Say, 'I seek refuge in the Lord of daybreak'" },
                                            { verse: 2, arabic: "مِن شَرِّ مَا خَلَقَ", transliteration: "Min sharri maa khalaq", translation: "From the evil of that which He created" },
                                            { verse: 3, arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ", transliteration: "Wa min sharri ghaasiqin idhaa waqab", translation: "And from the evil of darkness when it settles" },
                                            { verse: 4, arabic: "وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلْعُقَدِ", transliteration: "Wa min sharrin-naffaathaati fil-'uqad", translation: "And from the evil of the blowers in knots" },
                                            { verse: 5, arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ", transliteration: "Wa min sharri haasidin idhaa hasad", translation: "And from the evil of an envier when he envies.'" }
                                        ]
                                    }
                                ]
                            }
                        }]
                    }"""

# Refactored An-Nas
an_nas_new = """                    {
                        name: "Recitation of an-Nas",
                        image: "qiyaam",
                        recitations: [{
                            arabic: "سُورَةُ ٱلنَّاسِ",
                            transliteration: "Surat an-Nas",
                            translation: "Mankind",
                            audio: "nas-audio",
                            explanation: {
                                summary: "The final surah of the Quran, seeking refuge from whispers and temptations.",
                                components: [
                                    {
                                        component: "Verses of Sanctuary",
                                        description: [
                                            { verse: 1, arabic: "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ", transliteration: "Qul a'oodhu birabbin-naas", translation: "Say, 'I seek refuge in the Lord of mankind," },
                                            { verse: 2, arabic: "مَلِكِ ٱلنَّاسِ", transliteration: "Malikin-naas", translation: "The Sovereign of mankind," },
                                            { verse: 3, arabic: "إِلَٰهِ ٱلنَّاسِ", transliteration: "Ilaahin-naas", translation: "The God of mankind," },
                                            { verse: 4, arabic: "مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ", transliteration: "Min sharril-waswaasil-khannaas", translation: "From the evil of the retreating whisperer -" },
                                            { verse: 5, arabic: "ٱلَّذِي يُوَسْوِسُ فِي صُدُورِ ٱلنَّاسِ", transliteration: "Alladhee yuwaswisu fee sudoorin-naas", translation: "Who whispers [evil] into the breasts of mankind -" },
                                            { verse: 6, arabic: "مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ", transliteration: "Minal-jinnati wan-naas", translation: "From among the jinn and mankind.'" }
                                        ]
                                    }
                                ]
                            }
                        }]
                    }"""

# Regex search patterns (handling possible space variations and Arabic text)
# We target the 'name: "Recitation of ..."' line up to the closing '}]' of that posture.

content = re.sub(r'\{\s+name: "Recitation of Al-Falaq",.*?\}\s+\]\s+\}', al_falaq_new, content, flags=re.DOTALL)
content = re.sub(r'\{\s+name: "Recitation of An-Nas",.*?\}\s+\]\s+\}', an_nas_new, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Replacement complete.")
