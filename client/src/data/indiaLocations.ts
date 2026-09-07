export interface LocationHierarchy {
  [state: string]: {
    [district: string]: string[];
  };
}

export const INDIA_LOCATIONS: LocationHierarchy = {
  "Andhra Pradesh": {
    "Guntur": ["Guntur APMC Yard", "Station Road", "RTC Complex", "Bypass Road"],
    "Krishna": ["Vijayawada Market Yard", "Gudivada Road", "Machilipatnam"],
    "Prakasam": ["Ongole APMC", "Markapur Road", "Chirala Market"],
    "Kurnool": ["Market Yard", "Old Bus Stand", "Town Hall Area"],
    "Anantapur": ["Clock Tower", "APMC Circle", "Tadipatri Road"],
    "Visakhapatnam": ["Anakapalle Jaggery Market", "Gajuwaka", "Madhavadhara"],
    "West Godavari": ["Tadepalligudem APMC", "Eluru Main Road", "Bhimavaram"],
    "East Godavari": ["Rajahmundry APMC", "Kakinada Port Road", "Amalapuram"],
    "Chittoor": ["Madanapalle Tomato Market", "Chittoor APMC", "Tirupati Road"],
    "Nellore": ["APMC Market Yard", "Kavali Road", "Gudur Bus Stand"]
  },
  "Arunachal Pradesh": {
    "Papum Pare": ["Itanagar Market", "Naharlagun Daily Market", "Nirjuli"],
    "East Siang": ["Pasighat Main Market", "Ruksin Bazaar"],
    "West Kameng": ["Bomdila Town", "Dirang Market"]
  },
  "Assam": {
    "Kamrup Metropolitan": ["Guwahati Pamohi APMC", "Fancy Bazaar", "Dispur"],
    "Nagaon": ["Nagaon APMC Yard", "Haibargaon", "Koliabor Market"],
    "Cachar": ["Silchar Fatak Bazaar", "Rangirkhari", "Udarbond"],
    "Dibrugarh": ["Dibrugarh Chowkidinghee", "Naharani Market", "Tinsukia Road"],
    "Jorhat": ["Gar Ali Market", "Jorhat APMC", "Rowriah"]
  },
  "Bihar": {
    "Patna": ["Musallahpur Hat", "Mithapur APMC", "Danapur Market"],
    "Muzaffarpur": ["Bela Industrial Area", "Aghoria Bazar", "Kanti Market"],
    "Gaya": ["Kedarnath Market", "Tekari Road", "Manpur"],
    "Bhagalpur": ["Mirjanhat APMC", "Naya Bazar", "Sultanganj"],
    "Rohtas": ["Sasaram APMC Yard", "Dehri-on-Sone", "Nokha"],
    "Nalanda": ["Bihar Sharif APMC", "Rajgir Road", "Hilsa"]
  },
  "Chhattisgarh": {
    "Raipur": ["Pandri APMC Yard", "Fafadih Market", "Tatibandh"],
    "Durg": ["Bhilai Supela Market", "Durg APMC", "Patan Road"],
    "Bilaspur": ["Tifra APMC Yard", "Vyapar Vihar", "Bodri"],
    "Rajnandgaon": ["Ganj Line Market", "Rajnandgaon APMC", "Dongargarh"]
  },
  "Goa": {
    "North Goa": ["Mapusa Friday Market", "Panaji APMC Yard", "Bicholim"],
    "South Goa": ["Margao Gandhi Market", "Ponda APMC", "Curchorem"]
  },
  "Gujarat": {
    "Ahmedabad": ["Jamalpur APMC Market", "Naroda GIDC", "Sanand APMC"],
    "Rajkot": ["Bedi APMC Market Yard", "Gondal Road", "Dhoraji"],
    "Surat": ["Sardar Market APMC", "Varachha", "Bardoli APMC"],
    "Vadodara": ["Sayajigunj APMC", "Padra Road", "Karjan APMC"],
    "Junagadh": ["Junagadh APMC Yard", "Keshod Market", "Manavadar"],
    "Banaskantha": ["Palanpur APMC", "Dessa APMC Yard", "Tharad"]
  },
  "Haryana": {
    "Karnal": ["Karnal Grain Market APMC", "Gharaunda", "Taraori"],
    "Hisar": ["Hisar New Grain Market", "Hansi APMC", "Barwala"],
    "Ambala": ["Ambala City Grain Market", "Naraingarh", "Barara"],
    "Sirsa": ["Sirsa APMC Yard", "Dabwali Road", "Ellenabad"],
    "Kurukshetra": ["Pipli Grain Market", "Shahbad APMC", "Thanesar"]
  },
  "Himachal Pradesh": {
    "Shimla": ["Dhalli Fruit Market APMC", "The Mall Road", "Rampur"],
    "Kangra": ["Dharamshala Main Market", "Palampur APMC", "Kangra Town"],
    "Mandi": ["Mandi Grain Market", "Sundernagar APMC", "Nerchowk"],
    "Solan": ["Solan Vegetable APMC Yard", "Parwanoo", "Nalagarh"]
  },
  "Jharkhand": {
    "Ranchi": ["Pundag APMC Yard", "Kanke Road", "Daily Market Ranchi"],
    "Dhanbad": ["Bartand APMC Yard", "Katras Bazar", "Jharia"],
    "East Singhbhum": ["Jamshedpur Parsudih APMC", "Sakchi Market", "Ghatshila"],
    "Hazaribagh": ["Hazaribagh APMC Yard", "Barhi", "Vishnugarh"]
  },
  "Karnataka": {
    "Bengaluru Urban": ["Yeshwanthpur APMC Yard", "KR Market", "Hebbal APMC"],
    "Kolar": ["Kolar APMC Yard Gate", "MB Road", "Bangarapet"],
    "Shivamogga": ["BH Road APMC Yard", "Bus Stand Circle", "Sagar Road"],
    "Mysuru": ["Bandipalya APMC Yard", "Sayyaji Rao Road", "Hunsur"],
    "Belagavi": ["Belagavi APMC Yard", "Khadak Galli", "Gokak"],
    "Mandya": ["Mandya APMC Yard", "Maddur Road", "Srirangapatna"],
    "Davanagere": ["Davanagere APMC Yard", "PB Road", "Harihar"]
  },
  "Kerala": {
    "Palakkad": ["Valanyar APMC Yard", "Big Bazaar Palakkad", "Chittur"],
    "Wayanad": ["Kalpetta APMC Yard", "Sulthan Bathery", "Mananthavady"],
    "Idukki": ["Kattappana Spices Market", "Adimali", "Thodupuzha APMC"],
    "Ernakulam": ["Broadway Market Kochi", "Aluva APMC", "Perumbavoor"],
    "Thrissur": ["Sakthan Thampuran Market", "Chalakkudy APMC", "Kunnamkulam"]
  },
  "Madhya Pradesh": {
    "Indore": ["Choithram APMC Market", "Laxmibai Nagar APMC", "Mhow"],
    "Ujjain": ["Chimanganj APMC Mandi", "Freeganj", "Nagda"],
    "Bhopal": ["Karond APMC Mandi", "Hamidia Road", "Berasia"],
    "Jabalpur": ["Vijay Nagar APMC Mandi", "Patatan Market", "Sihora"],
    "Gwalior": ["Laxmi Ganj APMC Mandi", "Hazira Market", "Dabra"]
  },
  "Maharashtra": {
    "Nashik": ["Panchavati APMC Market", "Pimplegaon Baswant", "Lasalgaon Onion APMC"],
    "Pune": ["Gultekdi APMC Market Yard", "Hadapsar APMC", "Baramati APMC"],
    "Ahmednagar": ["Ahmednagar APMC Mandi", "Rahata APMC", "Sangamner"],
    "Nagpur": ["Kalamna APMC Market Yard", "Cotton Market Nagpur", "Saoner"],
    "Aurangabad": ["Jadhavwadi APMC Yard", "Paithan Road", "Gangapur"],
    "Solapur": ["Solapur APMC Market Yard", "Pandharpur", "Barshi APMC"]
  },
  "Manipur": {
    "Imphal East": ["Ima Keithel Market", "Porompat", "Lamlai"],
    "Imphal West": ["Khwairamband Bazaar", "Thangal Bazaar", "Lamphelpat"]
  },
  "Meghalaya": {
    "East Khasi Hills": ["Iewduh Bara Bazaar Shillong", "Laitumkhrah", "Mawsynram Road"],
    "West Garo Hills": ["Tura Super Market", "Phulbari Market", "Rongram"]
  },
  "Mizoram": {
    "Aizawl": ["Bara Bazaar Aizawl", "Zarkawt Market", "Bawngkawn"],
    "Lunglei": ["Lunglei Main Bazaar", "Venglai"]
  },
  "Nagaland": {
    "Kohima": ["Kohima Mao Market", "High School Junction", "PHED Colony"],
    "Dimapur": ["Dimapur Hong Kong Market", "New Market", "Chumoukedima"]
  },
  "Odisha": {
    "Cuttack": ["Malgodown Wholesellers APMC", "Chhatrabazar", "Choudwar"],
    "Khordha": ["Bhubaneswar Unit 1 APMC", "Jatni Market", "Khordha Town"],
    "Ganjam": ["Berhampur APMC Mandi", "Aska Road", "Bhanjanagar"],
    "Sambalpur": ["Bareipali APMC Yard", "Khetrajpur", "Burla"],
    "Bargarh": ["Bargarh APMC Paddy Yard", "Attabira", "Padampur"]
  },
  "Punjab": {
    "Ludhiana": ["Ludhiana New Grain Market APMC", "Khanna APMC Mandi", "Jagraon"],
    "Amritsar": ["Bhagtanwala APMC Grain Market", "Majitha Road", "Jandiala"],
    "Jalandhar": ["Jalandhar Cantt APMC Market", "Maqsudan APMC", "Nakodar"],
    "Patiala": ["Sirhind Road Grain Market", "Nabaha APMC", "Samana"],
    "Bathinda": ["Bathinda APMC Grain Market", "Raman Mandi", "Mauri Mandi"]
  },
  "Rajasthan": {
    "Jaipur": ["Muhana Mandi APMC", "Surajpole Mandi", "Chomu APMC"],
    "Jodhpur": ["Bhagat Ki Kothi APMC Mandi", "Maha Mandi", "Piparcity"],
    "Kota": ["Bhana Mada APMC Mandi", "Kota Grain Market", "Ramganj Mandi"],
    "Udaipur": ["Savina APMC Mandi", "Surajpole Udaipur", "Fatehnagar"],
    "Sri Ganganagar": ["Sri Ganganagar Grain APMC", "Raisinghnagar", "Suratgarh"]
  },
  "Sikkim": {
    "East Sikkim": ["Gangtok Lal Bazaar", "Ranipool APMC", "Singtam Market"],
    "South Sikkim": ["Namchi Central Market", "Jorethang APMC"]
  },
  "Tamil Nadu": {
    "Coimbatore": ["Mettupalayam Road APMC", "Gandhipuram Market", "Pollachi APMC"],
    "Madurai": ["Mattuthavani Vegetable APMC", "Simmakkal", "Melur APMC"],
    "Salem": ["Leigh Bazaar APMC", "Suramangalam", "Attur APMC Yard"],
    "Tiruchirappalli": ["Gandhi Market Trichy", "Kallakudi APMC", "Thuraiyur"],
    "Erode": ["Erode Turmeric APMC Yard", "Perundurai Road", "Bhavani"],
    "Thanjavur": ["Thanjavur APMC Grain Market", "Pattukkottai", "Kumbakonam"]
  },
  "Telangana": {
    "Hyderabad": ["Gudimalkapur APMC Market", "Bowenpally APMC", "LB Nagar Market"],
    "Warangal": ["Enamamula APMC Market Yard", "Hanamkonda", "Kazipet"],
    "Karimnagar": ["Collectorate Circle APMC", "Tower Circle", "Jagtial Road"],
    "Nizamabad": ["Nizamabad APMC Market Yard", "Armoor Road", "Bodhan APMC"],
    "Nalgonda": ["Nalgonda APMC Yard", "Miryalaguda Paddy Mandi", "Suryapet"]
  },
  "Tripura": {
    "West Tripura": ["Battala Market Agartala", "Maharaj Ganj Bazaar", "Jirania"],
    "Gomati": ["Udaipur Central Market", "Kakraban Market"]
  },
  "Uttar Pradesh": {
    "Lucknow": ["Dubagga APMC Mandi", "Navin Galla Mandi Sitapur Road", "Charbagh"],
    "Kanpur Nagar": ["Naubasta APMC Galla Mandi", "Collectorganj", "Rawatpur"],
    "Varanasi": ["Pahariya APMC Mandi", "Chandua Ganj", "Ramnagar"],
    "Agra": ["Kuberpur APMC Mandi", "Sikandra Market", "Fatehabad Road"],
    "Meerut": ["Delapeer APMC Galla Mandi", "Modinagar", "Sardhana"],
    "Prayagraj": ["Mundera APMC Mandi", "Naini Market", "Phulpur"]
  },
  "Uttarakhand": {
    "Dehradun": ["Niranjanpur APMC Mandi", "Hanuman Chowk", "Rishikesh APMC"],
    "Haridwar": ["Jwalapur APMC Mandi", "Laksar Road", "Roorkee APMC"],
    "Udham Singh Nagar": ["Rudrapur APMC Galla Mandi", "Kashipur APMC", "Kichha"]
  },
  "West Bengal": {
    "Hooghly": ["Singur Cold Storage APMC", "Sheoraphuli Market", "Arambagh"],
    "Nadia": ["Krishnanagar APMC Market Yard", "Ranaghat", "Chakdaha"],
    "Murshidabad": ["Baharampur APMC Yard", "Kandi Market", "Jangipur"],
    "Burdwan": ["Burdwan APMC Galla Mandi", "Kalna Market", "Katwa"],
    "North 24 Parganas": ["Barasat APMC Market", "Habra Market Yard", "Basirhat"]
  },
  "Andaman & Nicobar Islands": {
    "South Andaman": ["Port Blair Aberdeen Bazaar", "Junglighat Market", "Garacharma"],
    "North & Middle Andaman": ["Mayabunder Town Market", "Diglipur Bazaar"]
  },
  "Chandigarh": {
    "Chandigarh": ["Sector 26 Grain APMC Market", "Sector 43 APMC", "Mani Majra"]
  },
  "Dadra & Nagar Haveli and Daman & Diu": {
    "Daman": ["Daman Market Building", "Nani Daman"],
    "Silvassa": ["Silvassa APMC Market Yard", "Khanvel Road"]
  },
  "Delhi": {
    "New Delhi": ["Azadpur APMC Wholesale Mandi", "Okhla Sabzi Mandi", "Ghazipur APMC"],
    "North West Delhi": ["Narela APMC Grain Market", "Kanjhawala Market", "Bawana"],
    "South West Delhi": ["Najafgarh APMC Mandi", "Bijwasan Market", "Kapashera"]
  },
  "Jammu & Kashmir": {
    "Srinagar": ["Parimpora Fruit & Agri APMC", "Lal Chowk Srinagar", "Soura"],
    "Jammu": ["Narwal APMC Fruit Market", "Warehouse Jammu", "R S Pura Mandi"],
    "Anantnag": ["Anantnag APMC Fruit Yard", "Bijbehara Market", "Dooru"],
    "Baramulla": ["Sopore Fruit APMC Yard", "Baramulla Main Market", "Pattan"]
  },
  "Ladakh": {
    "Leh": ["Leh Main Bazaar", "Skara APMC Yard", "Choglamsar"],
    "Kargil": ["Kargil Main Market", "Baroo Colony"]
  },
  "Lakshadweep": {
    "Kavaratti": ["Kavaratti Island Co-op Store", "Agatti Island Market"]
  },
  "Puducherry": {
    "Puducherry": ["Grand Bazaar Puducherry", "Mettupalayam APMC Yard", "Villianur"],
    "Karaikal": ["Karaikal APMC Market Yard", "Kottucherry"]
  }
};
