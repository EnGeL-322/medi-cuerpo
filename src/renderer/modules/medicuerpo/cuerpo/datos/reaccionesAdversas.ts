export const RENG_SECCIONES_REACCIONES = {
  '34084-4': '6 · Reacciones adversas',
  'FT 4.8': '4.8 · Reacciones adversas',
  '34071-1': 'Advertencias',
  '43685-7': '5 · Advertencias y precauciones',
  '34066-1': 'Advertencia destacada'
} as const

type RengRegistro = readonly [texto: string, codigo: keyof typeof RENG_SECCIONES_REACCIONES, cita: string]

export const RENG_REACCIONES: Readonly<Record<string, readonly RengRegistro[]>> = {
  'abiraterona-oral': [
    [ 'Náuseas.', '34084-4', 'hypertension, nausea, edema, hypokalemia,' ],
    [ 'Vómitos.', '34084-4', 'diarrhea, vomiting, upper respiratory' ],
    [ 'Diarrea.', '34084-4', 'flush, diarrhea, vomiting, upper' ]
  ],
  'acarbosa-oral': [
    [ 'Dolor abdominal, diarrea y flatulencia en los ensayos controlados de la etiqueta.', '34084-4', 'the incidences of abdominal pain, diarrhea, and flatulence' ]
  ],
  'aciclovir-avet': [
    [ 'Náuseas.', '34084-4', 'days were nausea and/or vomiting' ],
    [ 'Vómitos.', '34084-4', 'and/or vomiting in 8 of 298 patient' ],
    [ 'Diarrea.', '34084-4', '(4.8%) and diarrhea (2.4%). The 589' ]
  ],
  'albendazol-oral': [
    [ 'Dolor abdominal.', '34084-4', 'Abdominal Pain 6 0' ],
    [ 'Vómitos.', '34084-4', 'Vomiting 4 6' ],
    [ 'Mareo.', '34084-4', 'Dizziness 1 less than 1' ]
  ],
  'alendronato-fosamax-70': [
    [ 'Náuseas.', '34084-4', 'musculoskeletal pain, nausea. ( 6.1 )' ],
    [ 'Diarrea.', '34084-4', 'constipation, diarrhea, dyspepsia, musculoskeletal' ],
    [ 'Estreñimiento.', '34084-4', 'regurgitation, constipation, diarrhea, dyspepsia,' ]
  ],
  'alfuzosina-oral': [
    [ 'Mareo.', '34084-4', 'Dizziness 19 (2.8%) 27 (5.7%)' ],
    [ 'Dolor de cabeza.', '34084-4', 'Headache 12 (1.8%) 14 (3.0%)' ],
    [ 'Fatiga.', '34084-4', 'Fatigue 12 (1.8%) 13 (2.7%)' ]
  ],
  'alogliptina-oral': [
    [ 'Dolor de cabeza.', '34084-4', 'nasopharyngitis, headache and upper respiratory' ],
    [ 'Nasofaringitis.', '34084-4', '≥4%) are nasopharyngitis, headache and upper' ]
  ],
  'alopurinol-zyloric-100': [
    [ 'Trombocitopenia.', 'FT 4.8', 'Trombocitopenia 1' ],
    [ 'Hipersensibilidad.', 'FT 4.8', 'Hipersensibilidad 2' ]
  ],
  'alprazolam-oral': [
    [ 'Presión arterial baja.', '34084-4', 'coordination, hypotension, dysarthria, and' ],
    [ 'Acatisia (inquietud motora).', '34084-4', 'Akathisia 41% 21%' ],
    [ 'Disminución del apetito.', '34084-4', 'Decreased appetite 13.3% 12.8%' ]
  ],
  'amlodipino-norvasc': [
    [ 'Náuseas.', '34084-4', 'fatigue, nausea, abdominal pain,' ],
    [ 'Dolor abdominal.', '34084-4', 'nausea, abdominal pain, and somnolence.' ],
    [ 'Somnolencia.', '34084-4', 'pain, and somnolence. ( 6 )' ]
  ],
  'amoxicilina-aurobindo-capsulas': [
    [ 'Náuseas.', '34084-4', 'vomiting, and nausea. (6.1)' ],
    [ 'Vómitos.', '34084-4', 'diarrhea, rash, vomiting, and nausea. (6.1)' ],
    [ 'Diarrea.', '34084-4', 'suspension were diarrhea, rash, vomiting,' ]
  ],
  'anastrozol-oral': [
    [ 'Sofocos.', '34084-4', 'groups was hot flashes, although there' ],
    [ 'Náuseas.', '34084-4', 'depression, nausea and vomiting, rash,' ],
    [ 'Vómitos.', '34084-4', 'nausea and vomiting, rash, osteoporosis,' ]
  ],
  'apixaban-eliquis': [
    [ 'En adultos, las reacciones descritas con mayor frecuencia están relacionadas con el sangrado.', '34084-4', 'in adult patients are related to bleeding' ],
    [ 'En estudios pediátricos se describieron dolor de cabeza, vómitos y sangrado menstrual abundante.', '34084-4', 'headache, vomiting, and excessive menstrual bleeding' ]
  ],
  'aprepitant-oral': [
    [ 'Fatiga.', '34084-4', 'fatigue 13% 12%' ],
    [ 'Diarrea.', '34084-4', 'diarrhea 9% 8%' ],
    [ 'Astenia.', '34084-4', 'asthenia 7% 6%' ]
  ],
  'aripiprazol-oral': [
    [ 'Náuseas.', '34084-4', '(≥10%) were nausea, vomiting, constipation,' ],
    [ 'Vómitos.', '34084-4', 'nausea, vomiting, constipation,' ],
    [ 'Estreñimiento.', '34084-4', 'vomiting, constipation, headache, dizziness,' ]
  ],
  'atenolol-oral': [
    [ 'Mareo.', '34084-4', 'Dizziness 4 1' ],
    [ 'Vértigo.', '34084-4', 'Vertigo 2 0.5' ],
    [ 'Somnolencia.', '34084-4', 'Drowsiness 0.6 0' ]
  ],
  'atorvastatina-lipitor': [
    [ 'Diarrea.', '34084-4', 'arthralgia, diarrhea, pain in extremity,' ],
    [ 'Dolor articular.', '34084-4', 'nasopharyngitis, arthralgia, diarrhea, pain' ],
    [ 'Nasofaringitis.', '34084-4', '≥5%) are nasopharyngitis, arthralgia, diarrhea,' ]
  ],
  'azitromicina-zithromax': [
    [ 'Náuseas.', '34084-4', 'to 14%), nausea (3 to 18%), abdominal' ],
    [ 'Vómitos.', '34084-4', '7%), or vomiting (2 to 7%). ( 6.1' ],
    [ 'Diarrea.', '34084-4', 'reactions are diarrhea (5 to 14%), nausea' ]
  ],
  'benazepril-oral': [
    [ 'Dolor de cabeza.', '34084-4', 'discontinuation were headache (0.6%) and cough' ],
    [ 'Tos.', '34084-4', '(0.6%) and cough (0.5%).' ]
  ],
  'bisoprolol-oral': [
    [ 'Dolor articular.', '34084-4', 'arthralgia 2.3 2.2' ],
    [ 'Mareo.', '34084-4', 'dizziness 3.8 2.9' ],
    [ 'Dolor de cabeza.', '34084-4', 'headache 11.4 8.8' ]
  ],
  'bumetanida-oral': [
    [ 'Náuseas.', '34084-4', '(0.6%), nausea (0.6%) and encephalopathy' ],
    [ 'Dolor de cabeza.', '34084-4', '(0.8%), headache (0.6%), nausea' ],
    [ 'Mareo.', '34084-4', 'patients), dizziness (1.1%), hypotension' ]
  ],
  'bupropion-oral': [
    [ 'Náuseas.', '34084-4', 'mouth, nausea, insomnia, dizziness,' ],
    [ 'Dolor abdominal.', '34084-4', 'pharyngitis, abdominal pain, agitation, anxiety,' ],
    [ 'Sequedad de boca.', '34084-4', 'rate): dry mouth, nausea, insomnia,' ]
  ],
  'canagliflozina-oral': [
    [ 'Estreñimiento.', '34084-4', 'Constipation 0.9% 1.8%' ],
    [ 'Náuseas.', '34084-4', 'Nausea 1.6% 2.1%' ],
    [ 'Fatiga.', '34084-4', 'reactions of fatigue (1.8%, 2.2%, and' ]
  ],
  'candesartan-oral': [
    [ 'Dolor de cabeza.', '34084-4', 'ATACAND were headache (0.6%) and dizziness' ],
    [ 'Mareo.', '34084-4', '(0.6%) and dizziness (0.3%).' ]
  ],
  'capecitabina-oral': [
    [ 'Náuseas.', '34084-4', 'diarrhea, and nausea. ( 6.1 )' ],
    [ 'Diarrea.', '34084-4', 'syndrome, diarrhea, and nausea. (' ],
    [ 'Dolor abdominal.', '34084-4', 'fatigue, and abdominal pain. ( 6.1 )' ]
  ],
  'carbamazepina-oral': [
    [ 'Náuseas.', '34084-4', 'unsteadiness, nausea, and vomiting.' ],
    [ 'Vómitos.', '34084-4', 'nausea, and vomiting. To minimize the' ],
    [ 'Mareo.', '34084-4', 'therapy, are dizziness, drowsiness, unsteadiness,' ]
  ],
  'carvedilol-coreg': [
    [ 'Dificultad para respirar.', '34084-4', 'carvedilol were dyspnea, anemia, and lung' ],
    [ 'Edema.', '34084-4', 'and lung edema. The following' ],
    [ 'Anemia.', '34084-4', 'dyspnea, anemia, and lung edema.' ]
  ],
  'cefalexina-ascend': [
    [ 'Dolor abdominal.', '34084-4', 'gastritis, and abdominal pain have also occurred.' ]
  ],
  'cefpodoxima-oral': [
    [ 'Diarrea.', '34084-4', 'Diarrhea 7 % Diarrhea or' ],
    [ 'Náuseas.', '34084-4', 'Nausea 3.3 % Vaginal Fungal' ],
    [ 'Dolor abdominal.', '34084-4', 'Abdominal Pain 1.2 % Headache' ]
  ],
  'cefuroxima-oral': [
    [ 'Náuseas.', '34084-4', 'diarrhea, nausea/vomiting, Jarisch-Herxheimer' ],
    [ 'Vómitos.', '34084-4', 'nausea/vomiting, Jarisch-Herxheimer' ],
    [ 'Diarrea.', '34084-4', 'tablets are diarrhea, nausea/vomiting,' ]
  ],
  'celecoxib-celebrex': [
    [ 'Diarrea.', '34084-4', 'abdominal pain, diarrhea, dyspepsia, flatulence,' ],
    [ 'Dispepsia.', '34084-4', 'diarrhea, dyspepsia, flatulence, peripheral' ],
    [ 'Dolor abdominal.', '34084-4', '>placebo) are: abdominal pain, diarrhea, dyspepsia,' ]
  ],
  'ciclobenzaprina-oral': [
    [ 'Náuseas.', '34084-4', 'constipation, nausea, dyspepsia, and' ],
    [ 'Estreñimiento.', '34084-4', 'fatigue, constipation, nausea, dyspepsia,' ],
    [ 'Dispepsia.', '34084-4', 'nausea, dyspepsia, and somnolence' ]
  ],
  'ciprofloxacino-cipro': [
    [ 'Náuseas.', '34084-4', '≥1% were nausea, diarrhea, liver' ],
    [ 'Vómitos.', '34084-4', 'abnormal, vomiting, and rash. ( 6' ],
    [ 'Diarrea.', '34084-4', 'nausea, diarrhea, liver function' ]
  ],
  'citalopram-oral': [
    [ 'Astenia.', '34084-4', 'Asthenia 1 <1' ],
    [ 'Sequedad de boca.', '34084-4', 'Dry Mouth 1 <1' ],
    [ 'Vómitos.', '34084-4', 'Vomiting 1 0' ]
  ],
  'claritromicina-rising': [
    [ 'Dolor abdominal.', '34084-4', 'Abdominal pain 5% 4%' ],
    [ 'Dolor de cabeza.', '34084-4', 'Headache 3% 1%' ],
    [ 'Diarrea.', '34084-4', 'Diarrhea 8% 4%' ]
  ],
  'clindamicina-oral': [
    [ 'Dolor abdominal, náuseas, vómitos o diarrea.', '34084-4', 'nausea, vomiting, and diarrhea' ],
    [ 'La etiqueta también describe colitis seudomembranosa.', '34084-4', 'Abdominal pain, pseudomembranous colitis' ]
  ],
  'clonazepam-oral': [
    [ 'Somnolencia.', '34084-4', 'shown that drowsiness has occurred in' ],
    [ 'Ataxia.', '34084-4', 'patients and ataxia in approximately' ],
    [ 'Mareo.', '34084-4', 'Dizziness 1% <1%' ]
  ],
  'clopidogrel-plavix': [
    [ 'Sangrado, que puede ser grave. En el estudio CURE se describieron, entre otros, sangrado nasal y sangre en la orina.', '34084-4', 'Bleeding, including life-threatening and fatal bleeding' ]
  ],
  'colchicina-oral': [
    [ 'Diarrea.', '34084-4', 'gout was diarrhea.' ],
    [ 'Náuseas.', '34084-4', 'diarrhea, nausea and vomiting. These' ],
    [ 'Vómitos.', '34084-4', 'nausea and vomiting. These effects' ]
  ],
  'dabigatran-pradaxa-capsulas': [
    [ 'Sangrado.', '34084-4', 'reactions and bleeding ( 6.1 )' ],
    [ 'Náuseas.', '34084-4', '(3.3%), nausea (3.3%) and menorrhagia' ],
    [ 'Dispepsia.', '34084-4', 'reactions were dyspepsia (5%), epistaxis' ]
  ],
  'dapagliflozina-farxiga': [
    [ 'Nasofaringitis.', '34084-4', 'infections, nasopharyngitis, and urinary tract' ],
    [ 'Infección urinaria.', '34084-4', 'nasopharyngitis, and urinary tract infections. ( 6.1)' ],
    [ 'Infección genital por hongos.', '34084-4', 'female genital mycotic infections, nasopharyngitis,' ]
  ],
  'desloratadina-oral': [
    [ 'Sequedad de boca.', '34084-4', 'pharyngitis, dry mouth, myalgia, fatigue,' ],
    [ 'Somnolencia.', '34084-4', 'fatigue, somnolence, dysmenorrhea.' ],
    [ 'Fatiga.', '34084-4', 'myalgia, fatigue, somnolence, dysmenorrhea.' ]
  ],
  'dexlansoprazol-oral': [
    [ 'Diarrea.', '34084-4', 'DEXILANT was diarrhea (0.7%).' ],
    [ 'Dolor abdominal.', '34084-4', 'headache, abdominal pain, diarrhea, nasopharyngitis,' ],
    [ 'Dolor de cabeza.', '34084-4', 'patients were headache, abdominal pain,' ]
  ],
  'diazepam-oral': [
    [ 'Somnolencia.', '34084-4', 'reported were drowsiness, fatigue, muscle' ],
    [ 'Fatiga.', '34084-4', 'drowsiness, fatigue, muscle weakness,' ],
    [ 'Ataxia.', '34084-4', 'weakness, and ataxia.' ]
  ],
  'digoxina-lanoxin': [
    [ 'Náuseas y vómitos.', '34084-4', 'In addition to nausea and vomiting' ],
    [ 'La etiqueta destaca alteraciones del ritmo cardíaco.', '34084-4', 'Cardiac arrhythmias' ]
  ],
  'dolutegravir-oral': [
    [ 'Dolor de cabeza.', '34084-4', 'fatigue, and headache. ( 6.1 )' ],
    [ 'Fatiga.', '34084-4', 'insomnia, fatigue, and headache.' ],
    [ 'Insomnio.', '34084-4', 'trial) are insomnia, fatigue, and headache.' ]
  ],
  'donepezilo-oral': [
    [ 'Náuseas.', '34084-4', 'ARICEPT are nausea, diarrhea, insomnia,' ],
    [ 'Vómitos.', '34084-4', 'insomnia, vomiting, muscle cramps,' ],
    [ 'Diarrea.', '34084-4', 'nausea, diarrhea, insomnia, vomiting,' ]
  ],
  'doxazosina-oral': [
    [ 'Mareo.', '34084-4', 'hypotension, and dizziness. ( 6.1 )' ],
    [ 'Fatiga.', '34084-4', 'trials are fatigue, malaise, hypotension,' ],
    [ 'Presión arterial baja.', '34084-4', 'malaise, hypotension, and dizziness.' ]
  ],
  'doxiciclina-vibracina-100': [
    [ 'Náuseas y diarrea entre las reacciones digestivas descritas para tetraciclinas, incluida la doxiciclina.', 'FT 4.8', 'diarrea, glositis' ],
    [ 'Fotosensibilidad y erupción cutánea.', 'FT 4.8', 'Reacción de fotosensibilidad erupción' ]
  ],
  'duloxetina-oral': [
    [ 'Náuseas.', '34084-4', 'patients) were nausea, dry mouth, somnolence,' ],
    [ 'Estreñimiento.', '34084-4', 'somnolence, constipation, decreased appetite,' ],
    [ 'Sequedad de boca.', '34084-4', 'nausea, dry mouth, somnolence, constipation,' ]
  ],
  'dutasterida-oral': [
    [ 'Mareo.', '34084-4', 'disorders, and dizziness. Ejaculation disorders' ]
  ],
  'empagliflozina-jardiance': [
    [ 'Infección urinaria.', '34084-4', 'incidence) were urinary tract infections and female genital' ],
    [ 'Infección genital por hongos.', '34084-4', 'female genital mycotic infections ( 6.1 )' ],
    [ 'Dolor articular.', '34084-4', 'Arthralgia 2.2 2.4' ]
  ],
  'enalapril-oral': [
    [ 'Fatiga.', '34084-4', 'Fatigue 3.0 (<0.1) 2.6' ],
    [ 'Astenia.', '34084-4', 'Asthenia 1.1 (0.1) 0.9' ],
    [ 'Diarrea.', '34084-4', 'Diarrhea 1.4 (<0.1) 1.7' ]
  ],
  'entecavir-oral': [
    [ 'Náuseas.', '34084-4', 'dizziness, and nausea. The adverse reactions' ],
    [ 'Dolor de cabeza.', '34084-4', 'grades) are headache, fatigue, dizziness,' ],
    [ 'Mareo.', '34084-4', 'fatigue, dizziness, and nausea. The' ]
  ],
  'eplerenona-oral': [
    [ 'La etiqueta destaca potasio alto en sangre y aumento de creatinina.', '34084-4', 'hyperkalemia and increased creatinine' ]
  ],
  'ertugliflozina-oral': [
    [ 'Infección genital por hongos.', '34084-4', 'female genital mycotic infections. ( 6.1 )' ],
    [ 'Dolor de cabeza.', '34084-4', 'Headache 2.3% 3.5%' ],
    [ 'Nasofaringitis.', '34084-4', 'Nasopharyngitis 2.3% 2.5%' ]
  ],
  'escitalopram-lexapro': [
    [ 'Náuseas.', '34084-4', 'delay), nausea, sweating increased,' ],
    [ 'Somnolencia.', '34084-4', 'fatigue and somnolence, decreased libido,' ],
    [ 'Fatiga.', '34084-4', 'increased, fatigue and somnolence,' ]
  ],
  'esomeprazol-nexium-capsulas': [
    [ 'Diarrea.', '34084-4', 'reported were: diarrhea (4%), headache' ],
    [ 'Dolor abdominal.', '34084-4', '(4%), and abdominal pain (4%).' ],
    [ 'Dolor de cabeza.', '34084-4', 'diarrhea (4%), headache (4%), and abdominal' ]
  ],
  'espironolactona-aldactone': [
    [ 'Potasio alto en sangre.', '34084-4', 'Hyperkalemia [see Warnings and Precautions' ],
    [ 'Aumento del tejido mamario (ginecomastia).', '34084-4', 'ALDACTONE treatment is gynecomastia' ]
  ],
  'exemestano-oral': [
    [ 'Náuseas.', '34084-4', 'vs. 5%), nausea (9% vs. 5%), fatigue' ],
    [ 'Fatiga.', '34084-4', 'vs. 5%), fatigue (8% vs. 10%), increased' ],
    [ 'Aumento del apetito.', '34084-4', '8%), and increased appetite (3% vs. 6%) for' ]
  ],
  'ezetimiba-zetia': [
    [ 'Diarrea.', '34084-4', 'Diarrhea 3.7 4.1' ],
    [ 'Dolor articular.', '34084-4', 'Arthralgia 2.2 3.0' ],
    [ 'Fatiga.', '34084-4', 'Fatigue 1.5 2.4' ]
  ],
  'famciclovir-oral': [
    [ 'Náuseas.', '34084-4', 'headache and nausea.' ],
    [ 'Dolor de cabeza.', '34084-4', 'famciclovir are headache and nausea.' ],
    [ 'Vómitos.', '34084-4', 'vs. 11%), vomiting (5% vs. 4%), fatigue' ]
  ],
  'famotidina-pepcid': [
    [ 'Diarrea.', '34084-4', 'constipation, and diarrhea. ( 6.1 )' ],
    [ 'Estreñimiento.', '34084-4', 'dizziness, constipation, and diarrhea.' ],
    [ 'Dolor de cabeza.', '34084-4', 'reactions are: headache, dizziness, constipation,' ]
  ],
  'febuxostat-oral': [
    [ 'Náuseas.', '34084-4', 'Nausea 0.7% 1.1%' ],
    [ 'Dolor articular.', '34084-4', 'Arthralgia 0% 1.1%' ],
    [ 'Erupción cutánea.', '34084-4', 'Rash 0.7% 0.5%' ]
  ],
  'felodipino-oral': [
    [ 'Dolor de cabeza.', '34084-4', 'edema and headache. Peripheral edema' ],
    [ 'Edema periférico.', '34084-4', 'day were peripheral edema and headache. Peripheral' ],
    [ 'Astenia.', '34084-4', 'Asthenia 3.3 (0.0) 3.9 (0.0)' ]
  ],
  'fenitoina-oral': [
    [ 'Dolor de cabeza.', '34084-4', 'paresthesias, and headaches have also been' ],
    [ 'Mareo.', '34084-4', 'confusion. Dizziness, vertigo, insomnia,' ],
    [ 'Somnolencia.', '34084-4', 'coordination, somnolence, and mental confusion.' ]
  ],
  'fidaxomicina-oral': [
    [ 'Náuseas.', '34084-4', '≥2%) are nausea, vomiting, abdominal' ],
    [ 'Vómitos.', '34084-4', 'nausea, vomiting, abdominal pain,' ],
    [ 'Dolor abdominal.', '34084-4', 'vomiting, abdominal pain, gastrointestinal' ]
  ],
  'finasterida-oral': [
    [ 'Erupción cutánea.', '34084-4', 'Rash 0.5 0.2' ],
    [ 'Astenia.', '34084-4', 'Asthenia 7.1 15.7' ],
    [ 'Dolor de cabeza.', '34084-4', 'Headache 2.3 4.1' ]
  ],
  'fluconazol-diflucan': [
    [ 'Náuseas · notificación poscomercialización.', '34084-4', 'pain (3%), nausea (2%), and diarrhea' ],
    [ 'Vómitos · notificación poscomercialización.', '34084-4', 'events were vomiting (5%), abdominal' ],
    [ 'Diarrea · notificación poscomercialización.', '34084-4', '(2%), and diarrhea (2%). Treatment' ]
  ],
  'fluoxetina-prozac': [
    [ 'Astenia.', '34084-4', 'Asthenia 9 5' ],
    [ 'Diarrea.', '34084-4', 'Diarrhea 12 8' ],
    [ 'Pérdida del apetito.', '34084-4', 'Anorexia 11 2' ]
  ],
  'furosemida-lasix': [
    [ 'Vértigo y mareo figuran en la lista de reacciones.', '34084-4', '3. vertigo 7. xanthopsia 4. dizziness' ],
    [ 'Advertencia sobre pérdida importante de agua y electrolitos si la diuresis es excesiva.', '34071-1', 'profound diuresis with water and electrolyte depletion' ]
  ],
  'gabapentina-neurontin': [
    [ 'Mareo.', '34084-4', 'patients, were dizziness, somnolence, and' ],
    [ 'Somnolencia.', '34084-4', 'dizziness, somnolence, and peripheral' ],
    [ 'Edema periférico.', '34084-4', 'somnolence, and peripheral edema.' ]
  ],
  'glipizida-glucotrol-xl': [
    [ 'Diarrea.', '34084-4', 'dizziness, diarrhea, nervousness, tremor,' ],
    [ 'Flatulencia.', '34084-4', 'hypoglycemia and flatulence ( 6.1 ).' ],
    [ 'Mareo.', '34084-4', '3%) are dizziness, diarrhea, nervousness,' ]
  ],
  'granisetron-oral': [
    [ 'Diarrea.', '34084-4', 'events were diarrhea, asthenia, and' ],
    [ 'Estreñimiento.', '34084-4', 'asthenia, and constipation. Headache, however,' ],
    [ 'Dolor de cabeza.', '34084-4', 'constipation. Headache, however, was less' ]
  ],
  'hidroclorotiazida-hidrosaluretil-25': [
    [ 'Trombocitopenia.', 'FT 4.8', 'Raras: trombocitopenia a veces con púrpura.' ],
    [ 'Anemia.', 'FT 4.8', 'ósea y anemia hemolítica.' ],
    [ 'Edema.', 'FT 4.8', 'neumonitis y edema pulmonar.' ]
  ],
  'hidroxicloroquina-oral': [
    [ 'Náuseas.', '34084-4', 'reported are: nausea, vomiting, diarrhea,' ],
    [ 'Vómitos.', '34084-4', 'nausea, vomiting, diarrhea, and' ],
    [ 'Diarrea.', '34084-4', 'vomiting, diarrhea, and abdominal' ]
  ],
  'ibuprofeno-normon-600': [
    [ 'Náuseas, vómitos, flatulencia y otros síntomas digestivos.', 'FT 4.8', 'náuseas, vómitos, flatulencia' ],
    [ 'También se describe hemorragia gastrointestinal, con casos graves documentados.', 'FT 4.8', 'hemorragia gastrointestinal, en algunos casos mortales' ]
  ],
  'ibuprofeno-chartwell-rx': [
    [ 'Se describen náuseas, dolor en la parte alta del abdomen, ardor y diarrea.', '34084-4', 'Nausea*, epigastric pain*, heartburn*, diarrhea' ]
  ],
  'ibuprofeno-advil-200': [
    [ 'La etiqueta advierte de reacciones alérgicas graves.', '34071-1', 'Ibuprofen may cause a severe allergic reaction' ],
    [ 'La etiqueta advierte de sangrado gástrico grave.', '34071-1', 'may cause severe stomach bleeding' ]
  ],
  'imatinib-oral': [
    [ 'Náuseas.', '34084-4', 'edema, nausea, vomiting, muscle' ],
    [ 'Vómitos.', '34084-4', 'nausea, vomiting, muscle cramps,' ],
    [ 'Diarrea.', '34084-4', 'musculoskeletal pain, diarrhea, rash, fatigue,' ]
  ],
  'irbesartan-oral': [
    [ 'Mareo.', '34084-4', 'hyperkalemia dizziness, orthostatic dizziness,' ],
    [ 'Potasio alto en sangre.', '34084-4', 'placebo were hyperkalemia dizziness, orthostatic' ],
    [ 'Presión arterial baja.', '34084-4', 'orthostatic hypotension. ( 6.1 )' ]
  ],
  'isoniazida-oral': [
    [ 'Neuropatía periférica. La ficha describe que puede empezar con hormigueo en manos o pies.', '34084-4', 'Peripheral neuropathy is the most common toxic effect' ],
    [ 'La ficha describe elevación de transaminasas y casos de hepatitis, algunos graves.', '34084-4', 'severe and sometimes fatal hepatitis' ]
  ],
  'lamivudina-oral': [
    [ 'Náuseas.', '34084-4', 'headache, nausea, malaise and fatigue,' ],
    [ 'Diarrea.', '34084-4', 'symptoms, diarrhea, and cough. ( 6.1' ],
    [ 'Dolor de cabeza.', '34084-4', 'adults were headache, nausea, malaise' ]
  ],
  'lamotrigina-lamictal': [
    [ 'Náuseas.', '34084-4', 'ataxia, nausea, blurred vision,' ],
    [ 'Vómitos.', '34084-4', 'included vomiting, infection, fever,' ],
    [ 'Diarrea.', '34084-4', 'injury, diarrhea, abdominal pain,' ]
  ],
  'lansoprazol-oral': [
    [ 'Dolor abdominal.', '34084-4', 'Abdominal Pain 2.1 1.2' ],
    [ 'Estreñimiento.', '34084-4', 'Constipation 1.0 0.4' ],
    [ 'Diarrea.', '34084-4', 'Diarrhea 3.8 2.3' ]
  ],
  'letrozol-oral': [
    [ 'Dolor de cabeza.', '34084-4', 'arthralgia, headache, dizziness, hypercholesterolemia,' ],
    [ 'Mareo.', '34084-4', 'headache, dizziness, hypercholesterolemia,' ],
    [ 'Astenia.', '34084-4', 'flushing, asthenia, edema, arthralgia,' ]
  ],
  'levetiracetam-keppra': [
    [ 'Mareo.', '34084-4', 'infection, and dizziness. Of the most common' ],
    [ 'Somnolencia.', '34084-4', 'placebo, were somnolence, asthenia, infection,' ],
    [ 'Astenia.', '34084-4', 'somnolence, asthenia, infection, and' ]
  ],
  'levofloxacino-chartwell': [
    [ 'Náuseas.', '34084-4', '(≥3%) were nausea, headache, diarrhea,' ],
    [ 'Diarrea.', '34084-4', 'headache, diarrhea, insomnia, constipation' ],
    [ 'Estreñimiento.', '34084-4', 'insomnia, constipation and dizziness (' ]
  ],
  'levotiroxina-synthroid': [
    [ 'Palpitaciones, temblor e insomnio pueden aparecer con exceso de efecto tiroideo. La etiqueta los relaciona principalmente con sobredosificación terapéutica.', '34084-4', 'hyperthyroidism due to therapeutic overdosage' ]
  ],
  'linagliptina-oral': [
    [ 'Nasofaringitis.', '34084-4', 'Nasopharyngitis 7.0 6.1' ],
    [ 'Diarrea.', '34084-4', 'Diarrhea 3.3 3.0' ],
    [ 'Tos.', '34084-4', 'Cough 2.1 1.4' ]
  ],
  'linezolid-zyvox-600': [
    [ 'Náuseas.', '34084-4', 'headache, nausea, and anemia. (' ],
    [ 'Vómitos.', '34084-4', 'diarrhea, vomiting, headache, nausea,' ],
    [ 'Diarrea.', '34084-4', 'include diarrhea, vomiting, headache,' ]
  ],
  'lisinopril-zestril': [
    [ 'Mareo.', '34084-4', 'Dizziness 19% 12%' ],
    [ 'Presión arterial baja.', '34084-4', 'Hypotension 11% 7%' ],
    [ 'Aumento de creatinina.', '34084-4', 'Creatinine increased 10% 7%' ]
  ],
  'loperamida-bionpharma': [
    [ 'Estreñimiento.', '34084-4', 'Constipation 2.6% 0.8%' ],
    [ 'Mareo.', '34084-4', 'Dizziness 1.4% 0.7%' ],
    [ 'Náuseas.', '34084-4', 'Nausea 0.7% 3.2%' ]
  ],
  'losartan-cozaar': [
    [ 'Mareo.', '34084-4', 'placebo) are: dizziness, upper respiratory' ],
    [ 'Dolor de espalda.', '34084-4', 'congestion, and back pain. ( 6.1 )' ],
    [ 'Tos.', '34084-4', 'Cough 25% 17%' ]
  ],
  'lubiprostona-oral': [
    [ 'Náuseas.', '34084-4', 'CIC were nausea, diarrhea, headache,' ],
    [ 'Diarrea.', '34084-4', 'nausea, diarrhea, headache, abdominal' ],
    [ 'Dolor abdominal.', '34084-4', 'headache, abdominal pain, abdominal distension,' ]
  ],
  'meloxicam-chartwell': [
    [ 'Diarrea.', '34084-4', 'adults are diarrhea, upper respiratory' ],
    [ 'Dispepsia.', '34084-4', 'infections, dyspepsia, and influenza-like' ],
    [ 'Dolor abdominal.', '34084-4', 'Abdominal pain 17.2 20.1' ]
  ],
  'memantina-oral': [
    [ 'Diarrea.', '34084-4', 'headache, diarrhea and dizziness (' ],
    [ 'Dolor de cabeza.', '34084-4', 'mg/day were headache, diarrhea and dizziness' ],
    [ 'Mareo.', '34084-4', 'diarrhea and dizziness ( 6.1 )' ]
  ],
  'mesalazina-lialda': [
    [ 'Vómitos.', '34084-4', 'infection, vomiting, anemia, headache,' ],
    [ 'Dolor abdominal.', '34084-4', 'LIALDA were: abdominal pain, upper respiratory' ],
    [ 'Dolor de cabeza.', '34084-4', 'anemia, headache, and viral infection.' ]
  ],
  'metformina-granules': [
    [ 'Náuseas.', '34084-4', 'diarrhea, nausea/vomiting, flatulence,' ],
    [ 'Vómitos.', '34084-4', 'nausea/vomiting, flatulence, asthenia,' ],
    [ 'Diarrea.', '34084-4', '(>5.0%) are diarrhea, nausea/vomiting,' ]
  ],
  'metoclopramida-oral': [
    [ 'La etiqueta incluye inquietud, somnolencia, fatiga y falta de energía.', '34084-4', 'restlessness, drowsiness, fatigue, and lassitude' ],
    [ 'Advertencia por discinesia tardía, un trastorno de movimientos involuntarios que puede persistir.', '34066-1', 'WARNING: TARDIVE DYSKINESIA' ]
  ],
  'metoprolol-lopressor': [
    [ 'Presión arterial baja.', '34084-4', 'infarction are hypotension and bradycardia.' ]
  ],
  'metronidazol-flagyl-375': [
    [ 'Estreñimiento.', '34084-4', 'cramping; and constipation.' ]
  ],
  'mirabegron-oral': [
    [ 'Dolor de cabeza.', '34084-4', 'infection, and headache. ( 6.1 )' ],
    [ 'Nasofaringitis.', '34084-4', 'hypertension, nasopharyngitis, urinary tract' ],
    [ 'Infección urinaria.', '34084-4', 'nasopharyngitis, urinary tract infection, and headache.' ]
  ],
  'mirtazapina-oral': [
    [ 'Mareo.', '34084-4', 'gain, and dizziness. ( 6.1 )' ],
    [ 'Somnolencia.', '34084-4', 'placebo) were somnolence, increased appetite,' ],
    [ 'Aumento del apetito.', '34084-4', 'somnolence, increased appetite, weight gain, and' ]
  ],
  'montelukast-singulair': [
    [ 'Entre los efectos recogidos en los ensayos están dolor abdominal, diarrea y tos.', '34084-4', 'cough, abdominal pain, diarrhea' ],
    [ 'Advertencia destacada por reacciones neuropsiquiátricas graves notificadas, como cambios de conducta o del sueño.', '34066-1', 'SERIOUS NEUROPSYCHIATRIC EVENTS' ]
  ],
  'naproxeno-aurobindo': [
    [ 'Náuseas.', '34084-4', 'abdominal pain, nausea, headache, rash,' ],
    [ 'Dispepsia.', '34084-4', 'naproxen were dyspepsia, abdominal pain,' ],
    [ 'Dolor abdominal.', '34084-4', 'dyspepsia, abdominal pain, nausea, headache,' ]
  ],
  'nebivolol-oral': [
    [ 'Náuseas.', '34084-4', '(0.4%), nausea (0.2%) and bradycardia' ],
    [ 'Dolor de cabeza.', '34084-4', 'BYSTOLIC were headache (0.4%), nausea' ],
    [ 'Diarrea.', '34084-4', 'Diarrhea 2 2' ]
  ],
  'nifedipino-oral': [
    [ 'Dolor de cabeza.', '34084-4', 'Headache 15.8 9.8' ],
    [ 'Fatiga.', '34084-4', 'Fatigue 5.9 4.1' ],
    [ 'Mareo.', '34084-4', 'Dizziness 4.1 4.5' ]
  ],
  'nitrofurantoina-furantoina-50': [
    [ 'Anemia.', 'FT 4.8', 'granulocitopenia, anemia hemolítica, anemia' ],
    [ 'Picor.', 'FT 4.8', 'alérgicas (prurito, urticaria), manifestaciones' ],
    [ 'Urticaria.', 'FT 4.8', '(prurito, urticaria), manifestaciones' ]
  ],
  'olanzapina-oral': [
    [ 'Estreñimiento.', '34084-4', 'Constipation 9 3' ],
    [ 'Aumento de peso.', '34084-4', 'Weight gain 6 1' ],
    [ 'Mareo.', '34084-4', 'Dizziness 11 4' ]
  ],
  'olmesartan-oral': [
    [ 'Mareo en ensayos clínicos en adultos.', '34084-4', 'most common adverse reaction in adults was dizziness' ],
    [ 'La etiqueta recoge notificaciones poscomercialización de enteropatía similar a la celíaca.', '34084-4', 'Vomiting, sprue-like enteropathy' ]
  ],
  'omeprazol-prilosec-suspension': [
    [ 'Rinitis.', '34084-4', 'discoloration (2%), rhinitis (2%), pharyngitis' ],
    [ 'Faringitis.', '34084-4', 'rhinitis (2%), pharyngitis (1%), and flu-syndrome' ],
    [ 'Alteración del gusto.', '34084-4', 'alone were taste perversion (15%), tongue discoloration' ]
  ],
  'ondansetron-ascend': [
    [ 'Diarrea.', '34084-4', 'constipation, and diarrhea.' ],
    [ 'Estreñimiento.', '34084-4', 'headache, constipation, and diarrhea.' ],
    [ 'Dolor de cabeza.', '34084-4', 'events were headache, constipation,' ]
  ],
  'orlistat-xenical': [
    [ 'Urgencia para defecar.', '34084-4', 'discharge, fecal urgency, fatty/oily stool,' ],
    [ 'Manchado aceitoso.', '34084-4', 'include oily spotting, flatus with discharge,' ],
    [ 'Dolor de cabeza.', '34084-4', 'Headache 28 31' ]
  ],
  'oseltamivir-tamiflu-capsulas': [
    [ 'Náuseas.', '34084-4', 'Nausea 10% 6%' ],
    [ 'Vómitos.', '34084-4', 'Vomiting 8% 3%' ],
    [ 'Dolor de cabeza.', '34084-4', 'Headache 2% 1%' ]
  ],
  'pantoprazol-protonix': [
    [ 'Dolor de cabeza.', '34084-4', 'Headache 12.2 12.8' ],
    [ 'Diarrea.', '34084-4', 'Diarrhea 8.8 9.6' ],
    [ 'Náuseas.', '34084-4', 'Nausea 7.0 5.2' ]
  ],
  'paracetamol-normon-500': [
    [ 'Malestar.', 'FT 4.8', 'Raras: Malestar' ],
    [ 'Hipersensibilidad.', 'FT 4.8', 'Reacciones de hipersensibilidad que oscilan, entre' ],
    [ 'Toxicidad hepática.', 'FT 4.8', 'raras : Hepatotoxicidad (ictericia).' ]
  ],
  'paracetamol-tylenol-325': [
    [ 'Advertencia de lesión hepática grave por sobredosis.', '34071-1', 'Severe liver damage may occur' ],
    [ 'Advertencia de reacciones cutáneas graves.', '34071-1', 'acetaminophen may cause severe skin reactions' ]
  ],
  'paroxetina-oral': [
    [ 'Náuseas.', '34084-4', 'disorder, nausea, nervousness, somnolence,' ],
    [ 'Diarrea.', '34084-4', 'appetite, diarrhea, dizziness, dry' ],
    [ 'Estreñimiento.', '34084-4', 'asthenia, constipation, decreased appetite,' ]
  ],
  'pioglitazona-actos': [
    [ 'Dolor de cabeza.', '34084-4', 'infection, headache, sinusitis, myalgia,' ],
    [ 'Dolor muscular.', '34084-4', 'sinusitis, myalgia, and pharyngitis.' ],
    [ 'Faringitis.', '34084-4', 'myalgia, and pharyngitis. ( 6.1 )' ]
  ],
  'prednisona-dacortin-5': [
    [ 'Puede enmascarar o agravar infecciones, según la ficha técnica.', 'FT 4.8', 'exacerbación o reactivación de las infecciones' ],
    [ 'Entre los efectos musculoesqueléticos descritos figuran debilidad o atrofia muscular y osteoporosis.', 'FT 4.8', 'Atrofia muscular, fatiga muscular, miopatía' ]
  ],
  'pregabalina-oral': [
    [ 'Sequedad de boca.', '34084-4', 'somnolence, dry mouth, edema, blurred' ],
    [ 'Mareo.', '34084-4', 'adults are dizziness, somnolence, dry' ],
    [ 'Somnolencia.', '34084-4', 'dizziness, somnolence, dry mouth, edema,' ]
  ],
  'prucaloprida-oral': [
    [ 'Náuseas.', '34084-4', 'abdominal pain, nausea, diarrhea, abdominal' ],
    [ 'Vómitos.', '34084-4', 'dizziness, vomiting, flatulence, and' ],
    [ 'Diarrea.', '34084-4', 'nausea, diarrhea, abdominal distension,' ]
  ],
  'quetiapina-seroquel': [
    [ 'Dispepsia.', '34084-4', 'increased, dyspepsia ( 6.1 )' ],
    [ 'Aumento de peso.', '34084-4', 'pharyngitis, weight gain, lethargy, ALT' ],
    [ 'Estreñimiento.', '34084-4', 'mouth (9%), constipation (8%), ALT increased' ]
  ],
  'rabeprazol-oral': [
    [ 'Estreñimiento.', '34084-4', 'infection, and constipation ( 6.1 ).' ],
    [ 'Flatulencia.', '34084-4', 'pharyngitis, flatulence, infection, and' ],
    [ 'Faringitis.', '34084-4', 'are pain, pharyngitis, flatulence, infection,' ]
  ],
  'repaglinida-oral': [
    [ 'Náuseas.', '34084-4', 'arthralgia, nausea, diarrhea, and' ],
    [ 'Diarrea.', '34084-4', 'nausea, diarrhea, and back pain.' ],
    [ 'Dolor de cabeza.', '34084-4', 'infection, headache, sinusitis, arthralgia,' ]
  ],
  'rifaximina-xifaxan-550': [
    [ 'Edema periférico.', '34084-4', 'Peripheral edema 21 (15%) 13 (8%)' ],
    [ 'Náuseas.', '34084-4', 'Nausea 20 (14%) 21 (13%)' ],
    [ 'Mareo.', '34084-4', 'Dizziness 18 (13%) 13 (8%)' ]
  ],
  'risedronato-oral': [
    [ 'Dispepsia.', '34084-4', 'pain, and dyspepsia ( 6.1 )' ],
    [ 'Dolor abdominal.', '34084-4', 'arthralgia, abdominal pain, and dyspepsia' ],
    [ 'Dolor articular.', '34084-4', 'back pain, arthralgia, abdominal pain,' ]
  ],
  'risperidona-oral': [
    [ 'Náuseas.', '34084-4', 'vision, nausea, vomiting, upper' ],
    [ 'Vómitos.', '34084-4', 'nausea, vomiting, upper abdominal' ],
    [ 'Diarrea.', '34084-4', 'dyspepsia, diarrhea, salivary hypersecretion,' ]
  ],
  'rivaroxaban-xarelto': [
    [ 'En estudios pediátricos se describieron sangrado, tos, vómitos y gastroenteritis.', '34084-4', 'bleeding, cough, vomiting, and gastroenteritis' ],
    [ 'La etiqueta advierte que el sangrado puede ser grave o mortal.', '43685-7', 'XARELTO can cause serious and fatal bleeding' ]
  ],
  'rosuvastatina-crestor': [
    [ 'Dolor de cabeza.', '34084-4', 'Headache 5.0 5.5' ],
    [ 'Náuseas.', '34084-4', 'Nausea 3.1 3.8' ],
    [ 'Dolor muscular.', '34084-4', 'Myalgia 1.3 3.1' ]
  ],
  'sertralina-zoloft-comprimidos': [
    [ 'Náuseas.', '34084-4', 'trials were nausea, diarrhea/loose' ],
    [ 'Diarrea.', '34084-4', 'nausea, diarrhea/loose stool, tremor,' ],
    [ 'Dispepsia.', '34084-4', 'tremor, dyspepsia, decreased appetite,' ]
  ],
  'sildenafilo-viagra': [
    [ 'Náuseas.', '34084-4', 'myalgia, nausea, dizziness, and' ],
    [ 'Dispepsia.', '34084-4', 'flushing, dyspepsia, abnormal vision,' ],
    [ 'Dolor de cabeza.', '34084-4', '2%) are headache, flushing, dyspepsia,' ]
  ],
  'simvastatina-zocor': [
    [ 'Náuseas.', '34084-4', 'constipation, and nausea. ( 6.1 )' ],
    [ 'Estreñimiento.', '34084-4', 'abdominal pain, constipation, and nausea. (' ],
    [ 'Dolor abdominal.', '34084-4', 'headache, abdominal pain, constipation,' ]
  ],
  'sitagliptina-januvia': [
    [ 'Nasofaringitis.', '34084-4', 'Nasopharyngitis 23 (5.2) 12 (3.3)' ],
    [ 'Dolor de cabeza.', '34084-4', 'Headache 9 (5.1) 7 (3.9)' ],
    [ 'Glucosa baja en sangre.', '34084-4', 'studies, hypoglycemia was also more commonly' ]
  ],
  'solifenacina-oral': [
    [ 'Estreñimiento.', '34084-4', 'mouth, and constipation at both 5 mg and' ],
    [ 'Sequedad de boca.', '34084-4', 'placebo) were dry mouth, and constipation' ],
    [ 'Infección urinaria.', '34084-4', 'doses; and urinary tract infection, and blurred vision' ]
  ],
  'sumatriptan-oral': [
    [ 'Fatiga.', '34084-4', 'malaise/fatigue. ( 6.1 )' ],
    [ 'Vértigo.', '34084-4', 'pain/pressure/tightness/heaviness, vertigo, and malaise/fatigue.' ],
    [ 'Malestar.', '34084-4', 'vertigo, and malaise/fatigue. ( 6.1' ]
  ],
  'tadalafilo-oral': [
    [ 'Dispepsia.', '34084-4', 'headache, dyspepsia, back pain, myalgia,' ],
    [ 'Dolor de cabeza.', '34084-4', 'include headache, dyspepsia, back' ],
    [ 'Dolor muscular.', '34084-4', 'back pain, myalgia, nasal congestion,' ]
  ],
  'tamsulosina-rising': [
    [ 'Náuseas.', '34084-4', 'somnolence, nausea, sinusitis, insomnia,' ],
    [ 'Diarrea.', '34084-4', 'back pain, diarrhea, pharyngitis, chest' ],
    [ 'Dolor de cabeza.', '34084-4', 'dose were headache, dizziness, rhinitis,' ]
  ],
  'terbinafina-oral': [
    [ 'Dolor de cabeza.', '34084-4', 'Headache 12.9 9.5' ],
    [ 'Diarrea.', '34084-4', 'Diarrhea 5.6 2.9' ],
    [ 'Dispepsia.', '34084-4', 'Dyspepsia 4.3 2.9' ]
  ],
  'ticagrelor-oral': [
    [ 'Dificultad para respirar.', '34084-4', 'bleeding and dyspnea. (5.1 , 5.3 , 6.1)' ],
    [ 'Sangrado.', '34084-4', '(>5%) are bleeding and dyspnea. (5.1' ],
    [ 'Mareo.', '34084-4', 'Dizziness 4.5 3.9' ]
  ],
  'tizanidina-oral': [
    [ 'Sequedad de boca.', '34084-4', 'placebo) were dry mouth, somnolence, asthenia,' ],
    [ 'Mareo.', '34084-4', 'asthenia, and dizziness. (' ],
    [ 'Somnolencia.', '34084-4', 'mouth, somnolence, asthenia, and' ]
  ],
  'tolterodina-oral': [
    [ 'Estreñimiento.', '34084-4', 'headache, constipation, and abdominal' ],
    [ 'Dolor abdominal.', '34084-4', 'constipation, and abdominal pain. ( 6.1 )' ],
    [ 'Sequedad de boca.', '34084-4', '>placebo) were dry mouth, headache, constipation,' ]
  ],
  'topiramato-oral': [
    [ 'Mareo.', '34084-4', 'fatigue, dizziness, somnolence, nervousness,' ],
    [ 'Somnolencia.', '34084-4', 'dizziness, somnolence, nervousness, psychomotor' ],
    [ 'Fatiga.', '34084-4', 'problems, fatigue, dizziness, somnolence,' ]
  ],
  'torasemida-oral': [
    [ 'Aumento de la cantidad o frecuencia de orina, descrito en los ensayos de hipertensión.', '34084-4', 'most common adverse reaction is excessive urination' ],
    [ 'La etiqueta advierte de alteraciones de electrolitos, incluido el descenso del potasio.', '43685-7', 'can cause potentially symptomatic hypokalemia' ]
  ],
  'tramadol-rising': [
    [ 'Náuseas.', '34084-4', 'dizziness/vertigo, nausea, constipation,' ],
    [ 'Vómitos.', '34084-4', 'somnolence, vomiting and pruritus (' ],
    [ 'Estreñimiento.', '34084-4', 'nausea, constipation, headache, somnolence,' ]
  ],
  'trazodona-oral': [
    [ 'Diarrea.', '34084-4', 'fatigue, diarrhea, nasal congestion,' ],
    [ 'Somnolencia.', '34084-4', 'syncope, drowsiness, fatigue, diarrhea,' ],
    [ 'Fatiga.', '34084-4', 'drowsiness, fatigue, diarrhea, nasal' ]
  ],
  'valaciclovir-valtrex': [
    [ 'Náuseas.', '34084-4', 'headache, nausea, and abdominal' ],
    [ 'Dolor abdominal.', '34084-4', 'nausea, and abdominal pain. The only adverse' ],
    [ 'Dolor de cabeza.', '34084-4', 'placebo are headache, nausea, and abdominal' ]
  ],
  'valsartan-diovan': [
    [ 'Dolor abdominal.', '34084-4', 'fatigue and abdominal pain ( 6.1 )' ],
    [ 'Dolor de cabeza.', '34084-4', 'reactions are headache, dizziness, viral' ],
    [ 'Mareo.', '34084-4', 'headache, dizziness, viral infection,' ]
  ],
  'vancomicina-vancocin-capsulas': [
    [ 'Náuseas.', '34084-4', '10%) were nausea (17%), abdominal' ],
    [ 'Dolor abdominal.', '34084-4', '(17%), abdominal pain (15%) , and hypokalemia' ],
    [ 'Potasio bajo en sangre.', '34084-4', '(15%) , and hypokalemia (13%). ( 6.1 )' ]
  ],
  'venlafaxina-oral': [
    [ 'Náuseas.', '34084-4', 'placebo) were: nausea (30.0%), somnolence' ],
    [ 'Estreñimiento.', '34084-4', '(9.8%), constipation (9.3%), impotence' ],
    [ 'Sequedad de boca.', '34084-4', '(15.3%), dry mouth (14.8%), sweating' ]
  ],
  'warfarina-teva': [
    [ 'La etiqueta incluye hemorragias entre las reacciones adversas graves.', '34084-4', 'Hemorrhage [see Boxed Warning' ],
    [ 'La etiqueta advierte de sangrado grave o mortal.', '34066-1', 'Warfarin sodium can cause major or fatal bleeding' ]
  ],
  'zolpidem-oral': [
    [ 'En ensayos previos a la comercialización se describieron somnolencia diurna, mareo y dolor de cabeza.', '34084-4', 'daytime drowsiness (0.5%), dizziness (0.4%), headache' ],
    [ 'Advertencia por conductas complejas durante el sueño, como caminar o realizar actividades sin estar plenamente despierto.', '34066-1', 'COMPLEX SLEEP BEHAVIORS' ]
  ]
}
