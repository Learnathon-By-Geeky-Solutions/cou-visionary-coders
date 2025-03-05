const subDistricts = {
  Bagerhat: [
    'Bagerhat Sadar',
    'Chitalmari',
    'Fakirhat',
    'Kachua',
    'Mollahat',
    'Mongla',
    'Morrelganj',
    'Rampal',
    'Sarankhola',
  ],
  Bandarban: [
    'Ali Kadam',
    'Bandarban Sadar',
    'Lama',
    'Rowangchhari',
    'Ruma',
    'Thanchi',
  ],
  Barguna: [
    'Amtali',
    'Bamna',
    'Barguna Sadar',
    'Betagi',
    'Patharghata',
    'Taltali',
  ],
  Barisal: [
    'Agailjhara',
    'Babuganj',
    'Bakerganj',
    'Banaripara',
    'Gaurnadi',
    'Hizla',
    'Barisal Sadar',
    'Mehendiganj',
    'Muladi',
    'Wazirpur',
  ],
  Bhola: [
    'Bhola Sadar',
    'Burhanuddin',
    'Char Fasson',
    'Daulatkhan',
    'Lalmohan',
    'Manpura',
    'Tazumuddin',
  ],
  Bogra: [
    'Adamdighi',
    'Bogra Sadar',
    'Dhunat',
    'Dhupchanchia',
    'Gabtali',
    'Kahalu',
    'Nandigram',
    'Sariakandi',
    'Shajahanpur',
    'Sherpur',
    'Shibganj',
    'Sonatola',
  ],
  Brahmanbaria: [
    'Ashuganj',
    'Bancharampur',
    'Brahmanbaria Sadar',
    'Kasba',
    'Nabinagar',
    'Nasirnagar',
    'Sarail',
  ],
  Chandpur: [
    'Chandpur Sadar',
    'Faridganj',
    'Haimchar',
    'Haziganj',
    'Kachua',
    'Matlab Uttar',
    'Matlab Dakkhin',
    'Shahrasti',
  ],
  'Chapai Nawabganj': [
    'Bholahat',
    'Chapai Nawabganj Sadar',
    'Gomastapur',
    'Nachole',
    'Shibganj',
  ],
  Chittagong: [
    'Anwara',
    'Banshkhali',
    'Boalkhali',
    'Chandanaish',
    'Fatikchhari',
    'Hathazari',
    'Lohagara',
    'Mirsharai',
    'Patiya',
    'Rangunia',
    'Raozan',
    'Sandwip',
    'Satkania',
    'Sitakunda',
  ],
  Chuadanga: ['Alamdanga', 'Chuadanga Sadar', 'Damurhuda', 'Jibannagar'],
  Comilla: [
    'Barura',
    'Brahmanpara',
    'Burichang',
    'Chandina',
    'Chauddagram',
    'Comilla Sadar',
    'Daudkandi',
    'Debidwar',
    'Homna',
    'Laksam',
    'Monohorgonj',
    'Muradnagar',
    'Nangalkot',
    'Titas',
  ],
  "Cox's Bazar": [
    'Chakaria',
    "Cox's Bazar Sadar",
    'Kutubdia',
    'Maheshkhali',
    'Ramu',
    'Teknaf',
    'Ukhia',
  ],
  Dhaka: [
    'Adabor',
    'Badda',
    'Bangshal',
    'Bimanbandar',
    'Cantonment',
    'Chak Bazar',
    'Darus Salam',
    'Demra',
    'Dhanmondi',
    'Gendaria',
    'Gulshan',
    'Hazaribagh',
    'Jatrabari',
    'Kadamtali',
    'Kafrul',
    'Kalabagan',
    'Kamrangirchar',
    'Kotwali',
    'Lalbagh',
    'Mirpur',
    'Mohammadpur',
    'Motijheel',
    'New Market',
    'Pallabi',
    'Paltan',
    'Ramna',
    'Rampura',
    'Sabujbagh',
    'Shah Ali',
    'Shahbag',
    'Sher-e-Bangla Nagar',
    'Shyampur',
    'Sutrapur',
    'Tejgaon',
    'Tejgaon Industrial Area',
    'Turag',
    'Uttar Khan',
  ],
  Dinajpur: [
    'Biral',
    'Birampur',
    'Bochaganj',
    'Chirirbandar',
    'Phulbari',
    'Ghoraghat',
    'Hakimpur',
    'Kaharole',
    'Khansama',
    'Dinajpur Sadar',
    'Nawabganj',
    'Parbatipur',
  ],
  Faridpur: [
    'Alfadanga',
    'Bhanga',
    'Boalmari',
    'Charbhadrasan',
    'Faridpur Sadar',
    'Madhukhali',
    'Nagarkanda',
    'Sadarpur',
    'Saltha',
  ],
  Feni: ['Chhagalnaiya', 'Daganbhuiyan', 'Feni Sadar', 'Parshuram', 'Sonagazi'],
  Gaibandha: [
    'Fulchhari',
    'Gaibandha Sadar',
    'Gobindaganj',
    'Palashbari',
    'Sadullapur',
    'Saghata',
    'Sundarganj',
  ],
  Gazipur: ['Gazipur Sadar', 'Kaliakair', 'Kaliganj', 'Kapasia', 'Sreepur'],
  Gopalganj: [
    'Gopalganj Sadar',
    'Kashiani',
    'Kotalipara',
    'Muksudpur',
    'Tungipara',
  ],
  Habiganj: [
    'Ajmiriganj',
    'Baniachang',
    'Bahubal',
    'Chunarughat',
    'Habiganj Sadar',
    'Lakhai',
    'Madhabpur',
    'Nabiganj',
  ],
  Jamalpur: [
    'Baksiganj',
    'Dewanganj',
    'Islampur',
    'Jamalpur Sadar',
    'Madarganj',
    'Melandaha',
    'Sarishabari',
  ],
  Jashore: [
    'Abhaynagar',
    'Bagherpara',
    'Chaugachha',
    'Jashore Sadar',
    'Jhikargachha',
    'Keshabpur',
    'Manirampur',
    'Sharsha',
  ],
  Jhalokati: ['Jhalokati Sadar', 'Kathalia', 'Nalchity', 'Rajapur'],
  Jhenaidah: [
    'Harinakunda',
    'Jhenaidah Sadar',
    'Kaliganj',
    'Kotchandpur',
    'Maheshpur',
    'Shailkupa',
  ],
  Joypurhat: ['Akkelpur', 'Joypurhat Sadar', 'Kalai', 'Khetlal', 'Panchbibi'],
  Khagrachari: [
    'Dighinala',
    'Khagrachhari Sadar',
    'Lakshmichhari',
    'Mahalchhari',
    'Manikchhari',
  ],
  Khulna: [
    'Batiaghata',
    'Dacope',
    'Dighalia',
    'Koyra',
    'Paikgachha',
    'Phultala',
    'Rupsha',
    'Terokhada',
  ],
  Kishoreganj: [
    'Astagram',
    'Bajitpur',
    'Bhairab',
    'Hossainpur',
    'Itna',
    'Karimganj',
    'Katiadi',
    'Kishoreganj Sadar',
    'Kuliarchar',
    'Mithamain',
    'Nikli',
    'Pakundia',
    'Tarail',
  ],
  Kurigram: [
    'Bhurungamari',
    'Char Rajibpur',
    'Chilmari',
    'Kurigram Sadar',
    'Nageshwari',
    'Phulbari',
    'Raomari',
    'Rajarhat',
    'Ulipur',
  ],
  Kushtia: [
    'Bheramara',
    'Daulatpur',
    'Khoksa',
    'Kumarkhali',
    'Kushtia Sadar',
    'Mirpur',
  ],
  Lakshmipur: ['Lakshmipur Sadar', 'Raipur', 'Ramganj', 'Ramgati'],
  Lalmonirhat: [
    'Aditmari',
    'Hatibandha',
    'Kaliganj',
    'Lalmonirhat Sadar',
    'Patgram',
  ],
  Madaripur: ['Barhamganj', 'Kalkini', 'Madaripur Sadar', 'Rajoir'],
  Magura: ['Magura Sadar', 'Mohammadpur', 'Shalikha', 'Sreepur'],
  Manikganj: [
    'Daulatpur',
    'Ghior',
    'Harirampur',
    'Manikganj Sadar',
    'Shibganj',
    'Saturia',
  ],
  Meherpur: ['Gangni', 'Meherpur Sadar', 'Mujibnagar'],
  Moulvibazar: [
    'Barlekha',
    'Juri',
    'Kamalganj',
    'Kulaura',
    'Moulvibazar Sadar',
    'Rajnagar',
    'Sreemangal',
  ],
  Munshiganj: [
    'Gazaria',
    'Lohajang',
    'Munshiganj Sadar',
    'Sirajdikhan',
    'Sreenagar',
    'Tongibari',
  ],
  Mymensingh: [
    'Bhaluka',
    'Dhobaura',
    'Fulbaria',
    'Gaffargaon',
    'Gauripur',
    'Haluaghat',
    'Ishwarganj',
    'Muktagachha',
    'Mymensingh Sadar',
    'Nandail',
    'Phulpur',
    'Trishal',
  ],
  Naogaon: [
    'Atrai',
    'Badalgachhi',
    'Dhamoirhat',
    'Manda',
    'Mahadevpur',
    'Naogaon Sadar',
    'Niamatpur',
    'Patnitala',
    'Porsha',
    'Raninagar',
    'Sapahar',
  ],
  Narail: ['Kalia', 'Lohagara', 'Narail Sadar'],
  Narayanganj: [
    'Araihazar',
    'Bandar',
    'Narayanganj Sadar',
    'Rupganj',
    'Siddhirganj',
    'Sonargaon',
  ],
  Narsingdi: [
    'Belabo',
    'Monohardi',
    'Narsingdi Sadar',
    'Palash',
    'Raipura',
    'Shibpur',
  ],
  Natore: [
    'Bagatipara',
    'Baraigram',
    'Gurudaspur',
    'Lalpur',
    'Natore Sadar',
    'Singra',
  ],
  Netrokona: [
    'Atpara',
    'Barhatta',
    'Durgapur',
    'Khaliajuri',
    'Kalmakanda',
    'Madan',
    'Mohanganj',
    'Netrokona Sadar',
    'Purbadhala',
  ],
  Nilphamari: [
    'Dimla',
    'Domar',
    'Jaldhaka',
    'Kishoreganj',
    'Nilphamari Sadar',
    'Saidpur',
  ],
  Noakhali: [
    'Begumganj',
    'Chatkhil',
    'Companiganj',
    'Hatiya',
    'Senbagh',
    'Noakhali Sadar',
    'Subarnachar',
  ],
  Pabna: [
    'Atgharia',
    'Bera',
    'Bhangura',
    'Chatmohar',
    'Faridpur',
    'Ishwardi',
    'Pabna Sadar',
    'Santhia',
    'Sujanagar',
  ],
  Panchagarh: ['Atwari', 'Boda', 'Debiganj', 'Panchagarh Sadar', 'Tetulia'],
  Patuakhali: [
    'Bauphal',
    'Dashmina',
    'Galachipa',
    'Kalapara',
    'Mirzaganj',
    'Patuakhali Sadar',
    'Dumki',
  ],
  Pirojpur: [
    'Bhandaria',
    'Kaukhali',
    'Mathbaria',
    'Nazirpur',
    'Pirojpur Sadar',
    'Nesarabad (Swarupkathi)',
  ],
  Rajbari: ['Baliakandi', 'Goalandaghat', 'Pangsha', 'Rajbari Sadar'],
  Rajshahi: [
    'Bagha',
    'Bagmara',
    'Charghat',
    'Durgapur',
    'Godagari',
    'Mohanpur',
    'Paba',
    'Puthia',
    'Tanore',
    'Rajshahi Sadar',
  ],
  Rangamati: [
    'Baghaichhari',
    'Barkal',
    'Kaptai',
    'Juraichhari',
    'Langadu',
    'Naniarchar',
    'Rajasthali',
    'Rangamati Sadar',
  ],
  Rangpur: [
    'Badarganj',
    'Gangachara',
    'Kaunia',
    'Mithapukur',
    'Pirgachha',
    'Pirganj',
    'Rangpur Sadar',
    'Taraganj',
  ],
  Satkhira: [
    'Assasuni',
    'Debhata',
    'Kalaroa',
    'Kaliganj',
    'Satkhira Sadar',
    'Shyamnagar',
    'Tala',
  ],
  Shariatpur: [
    'Bhedarganj',
    'Damudya',
    'Gosairhat',
    'Naria',
    'Shariatpur Sadar',
    'Zajira',
  ],
  Sherpur: ['Jhenaigati', 'Nakla', 'Nalitabari', 'Sherpur Sadar', 'Sreebardi'],
  Sirajganj: [
    'Belkuchi',
    'Chauhali',
    'Kamarkhanda',
    'Kazipur',
    'Raiganj',
    'Shahjadpur',
    'Sirajganj Sadar',
    'Tarash',
    'Ullahpara',
  ],
  Sunamganj: [
    'Bishwambarpur',
    'Chhatak',
    'Derai',
    'Dharampasha',
    'Dowarabazar',
    'Jagannathpur',
    'Jamalganj',
    'Sullah',
    'Sunamganj Sadar',
    'Tahirpur',
  ],
  Sylhet: [
    'Balaganj',
    'Beanibazar',
    'Bishwanath',
    'Companiganj',
    'Dakshin Surma',
    'Fenchuganj',
    'Golapganj',
    'Gowainghat',
    'Jaintiapur',
    'Kanaighat',
    'Kompanyganj',
    'Sylhet Sadar',
    'Zakiganj',
  ],
  Tangail: [
    'Bhuapur',
    'Delduar',
    'Ghatail',
    'Gopalpur',
    'Kalihati',
    'Madhupur',
    'Mirzapur',
    'Nagarpur',
    'Sakhipur',
    'Tangail Sadar',
  ],
  Thakurgaon: [
    'Baliadangi',
    'Haripur',
    'Pirganj',
    'Ranisankail',
    'Thakurgaon Sadar',
  ],
};

export default subDistricts;
