import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const resources = {
  "en": {
    "translation": {
      "appName": "KrishiDrishti AI",
      "tagline": "Empowering Indian Farmers with Smart AI Intelligence",
      "nav": {
        "home": "Home",
        "dashboard": "Dashboard",
        "scanner": "AI Crop Scanner",
        "chat": "AI Farming Assistant",
        "weather": "Weather",
        "schemes": "Govt Schemes",
        "market": "Market Prices",
        "shops": "Nearby Shops",
        "helpline": "Emergency Helpline",
        "profile": "Profile",
        "history": "Scan History",
        "login": "Login",
        "register": "Register",
        "logout": "Logout"
      },
      "hero": {
        "badge": "AI-Powered Smart Farming Assistant",
        "title": "Smart Farming Powered by Artificial Intelligence",
        "subtitle": "Detect crop diseases instantly, get expert farming guidance, monitor weather forecasts, and check market prices in your preferred Indian language.",
        "scanButton": "Scan Crop Leaf Now",
        "assistantButton": "Talk to AI Assistant",
        "accuracyMetric": "95%+ AI Accuracy",
        "languagesMetric": "6 Indian Languages",
        "guidanceMetric": "24/7 Farmer Voice Guidance"
      },
      "home": {
        "servicesTitle": "Comprehensive Digital Farming Services",
        "servicesSubtitle": "Everything you need for crop health, weather protection, market profitability, and government support in one platform.",
        "exploreFeature": "Explore Feature",
        "dailyTipBadge": "Daily Smart Farming Tip",
        "dailyTipTitle": "Neem-Coated Urea & Split Application",
        "dailyTipDesc": "Applying Nitrogen in 3 split doses (Sowing, Tillering, and Panicle initiation) prevents nutrient leaching and improves fertilizer efficiency by up to 25%.",
        "dailyTipButton": "Go to Farmer Dashboard",
        "helplineTitle": "Need Urgent Farm Assistance?",
        "helplineDesc": "Call Kisan Call Center (1551) or connect with emergency agricultural experts.",
        "helplineButton": "View Emergency Contacts",
        "scannerDesc": "Instant AI crop disease diagnosis & remedy plan",
        "chatDesc": "Ask farming questions in your native language",
        "weatherDesc": "Localized agricultural weather & spraying alerts",
        "marketDesc": "Real-time APMC mandi prices across India",
        "schemesDesc": "Financial support schemes like PM-KISAN & PMFBY",
        "shopsDesc": "Locate nearby fertilizer, pesticide & seed stores"
      },
      "dashboard": {
        "badge": "Smart Farmer Dashboard",
        "welcome": "Namaste",
        "location": "Location",
        "preferredLang": "Preferred Language",
        "scannerBtn": "AI Crop Scanner",
        "todayTipBadge": "Today's Farming Tip",
        "ipmTitle": "Integrated Pest Management (IPM) for Chilli & Cotton",
        "ipmDesc": "Install yellow and blue sticky traps at 15 traps/acre in early crop stages to monitor and capture sucking pests like thrips and whiteflies before infestation spreads.",
        "leafScanTitle": "Instant Leaf Scan",
        "leafScanDesc": "Take a photo of diseased crop leaf to get instant KrishiDrishti CNN diagnosis & remedies.",
        "startScanBtn": "Start Crop Scan",
        "assistantTitle": "AI Voice & Text Assistant",
        "assistantDesc": "Ask questions about fertilizers, soil, pesticides & schemes in 6 Indian languages.",
        "chatAiBtn": "Chat with AI",
        "recentScansTitle": "Recent Crop Disease Scans",
        "viewHistory": "View Complete History",
        "noScans": "No crop scans performed yet. Click below to analyze your crop!",
        "firstScanBtn": "Perform First Crop Scan",
        "confidence": "Confidence",
        "nearbyShopsTitle": "Nearby Agricultural Shops",
        "nearbyShopsSubtitle": "Fertilizer, seed & pesticide stores near your location",
        "viewAll": "View All",
        "schemesTitle": "Government Support Schemes",
        "schemesSubtitle": "Financial benefits and crop insurance support for farmers",
        "browseSchemes": "Browse All Schemes",
        "applyPortal": "Apply on Portal",
        "greeting": "Namaste, {{name}}! 👋",
        "farmerFallback": "Farmer",
        "selectLocation": "Select your location",
        "detectGps": "Detect GPS Location",
        "locationNotSet": "No location selected"
      },
      "scanner": {
        "title": "AI Crop Disease Detection",
        "subtitle": "Capture or upload a clear leaf image for instantaneous AI analysis & treatment plan.",
        "takePhoto": "Capture Leaf Photo",
        "uploadPhoto": "Upload Leaf Image",
        "analyzing": "KrishiDrishti CNN Analyzing Leaf Image...",
        "reportTitle": "Crop Diagnosis Report",
        "confidence": "AI Confidence Score",
        "severity": "Severity Level",
        "symptoms": "Observed Symptoms",
        "causes": "Possible Causes",
        "chemical": "Chemical Treatment",
        "organic": "Organic Remedies",
        "fertilizers": "Fertilizer Guidance",
        "prevention": "Prevention Methods",
        "smartRec": "Smart Recommendations",
        "saveReport": "Save Report to Profile",
        "savedSuccess": "Report saved to your profile successfully!",
        "readAloud": "Read Report Aloud",
        "selectPhotoError": "Please select or capture a leaf photo first.",
        "generateReportError": "Failed to generate crop diagnosis report. Please try again.",
        "analysisError": "Unable to analyze crop image. Please upload a clear leaf photo."
      },
      "market": {
        "liveTitle": "Live Market Prices",
        "title": "Agricultural Mandi Prices",
        "subtitle": "Real-time crop market prices across APMC mandis in India",
        "selectState": "Select State",
        "selectDistrict": "Select District",
        "selectMarket": "Select Market",
        "allStates": "All States",
        "allDistricts": "All Districts",
        "allMarkets": "All Mandis",
        "searchCrop": "Search Crop",
        "cropName": "Crop Name",
        "minPrice": "Min Price",
        "maxPrice": "Max Price",
        "modalPrice": "Modal Price",
        "arrivalQty": "Arrival Quantity",
        "unit": "Unit",
        "lastUpdated": "Last Updated",
        "trend": "Trend",
        "stable": "Stable",
        "minMax": "Min - Max Price",
        "loading": "Loading live APMC market prices...",
        "noData": "No market prices found for your selection.",
        "error": "Error loading market prices. Please try again.",
        "bags": "Bags",
        "quintals": "Quintals",
        "boxes": "Boxes",
        "bunch": "Bunch",
        "today": "Today",
        "yesterday": "Yesterday",
        "todayRates": "Today Mandi Rates",
        "viewAll": "View All Prices"
      },
      "weather": {
        "badge": "Live Weather Forecast",
        "title": "Agricultural Weather & Spray Alerts",
        "subtitle": "Localized weather forecasts and smart agricultural advice",
        "selectState": "Select State",
        "selectDistrict": "Select District",
        "useGps": "Detect GPS Location",
        "locating": "Locating GPS...",
        "temp": "Temperature",
        "humidity": "Humidity",
        "rainProb": "Rain Prob",
        "windSpeed": "Wind Speed",
        "uvIndex": "UV Index",
        "condition": "Condition",
        "sunrise": "Sunrise",
        "sunset": "Sunset",
        "adviceTitle": "Weather-Based Farming Advice",
        "hourlyTitle": "Hourly Forecast",
        "weeklyTitle": "7-Day Forecast",
        "loading": "Loading weather data...",
        "error": "Failed to retrieve weather details.",
        "detecting": "Detecting GPS...",
        "detectGps": "Detect GPS Location",
        "selectLocation": "Select a Location",
        "currentLocation": "Current Location",
        "refresh": "Refresh",
        "rainProbability": "Rain Probability",
        "wind": "Wind Speed",
        "hourlyForecast": "Hourly Forecast",
        "weeklyForecast": "7-Day Forecast",
        "farmingAdvice": "Farming Advice",
        "alerts": "Farming Alerts",
        "rain": "Rain",
        "liveForecast": "Live Weather Forecast",
        "alertsTitle": "Weather Emergency Alert",
        "conditions": {
          "Clear Sky": "Clear Sky",
          "Mainly Clear": "Mainly Clear",
          "Partly Cloudy": "Partly Cloudy",
          "Overcast": "Overcast",
          "Foggy": "Foggy",
          "Light Drizzle": "Light Drizzle",
          "Moderate Drizzle": "Moderate Drizzle",
          "Heavy Drizzle": "Heavy Drizzle",
          "Light Rain": "Light Rain",
          "Moderate Rain": "Moderate Rain",
          "Heavy Rain": "Heavy Rain",
          "Light Snow": "Light Snow",
          "Moderate Snow": "Moderate Snow",
          "Heavy Snow": "Heavy Snow",
          "Light Showers": "Light Showers",
          "Moderate Showers": "Moderate Showers",
          "Heavy Showers": "Heavy Showers",
          "Thunderstorm": "Thunderstorm",
          "Thunderstorm with Hail": "Thunderstorm with Hail",
          "Heavy Thunderstorm with Hail": "Heavy Thunderstorm with Hail",
          "Unknown": "Unknown"
        },
        "days": {
          "today": "Today",
          "tomorrow": "Tomorrow",
          "mon": "Mon",
          "tue": "Tue",
          "wed": "Wed",
          "thu": "Thu",
          "fri": "Fri",
          "sat": "Sat",
          "sun": "Sun"
        },
        "geoNotSupported": "Geolocation is not supported by your browser.",
        "geoError": "Could not get weather for your current location."
      },
      "schemes": {
        "badge": "Financial & Govt Support",
        "title": "Government Agricultural Schemes",
        "subtitle": "Central & State schemes, financial assistance, insurance, and farm loans",
        "selectState": "Filter by State",
        "allStates": "All India & State Schemes",
        "searchPlaceholder": "Search scheme by name, benefit or keyword...",
        "categories": {
          "all": "All Schemes",
          "crop": "Crop Support",
          "irrigation": "Irrigation",
          "insurance": "Insurance",
          "loans": "Loans & KCC",
          "subsidies": "Subsidies & Inputs",
          "women": "Women Farmers",
          "dairy": "Dairy Sector",
          "fisheries": "Fisheries"
        },
        "overview": "Scheme Overview",
        "eligibility": "Eligibility Criteria",
        "benefits": "Key Benefits",
        "documents": "Required Documents",
        "officialWebsite": "Official Website",
        "applyBtn": "Apply on Portal",
        "loading": "Loading government schemes...",
        "noData": "No schemes found matching your search."
      },
      "shops": {
        "badge": "Agri Stores Finder",
        "title": "Nearby Agricultural Shops",
        "subtitle": "Find verified fertilizer, seed, pesticide, and equipment dealers near you",
        "selectState": "Select State",
        "selectDistrict": "Select District",
        "selectPlace": "Place / Town",
        "useGps": "Use GPS Location",
        "locating": "Finding location...",
        "categories": {
          "all": "All Shops",
          "fertilizer_seed": "Fertilizers & Seeds",
          "pesticides": "Pesticides & Chemicals",
          "equipment": "Machinery & Equipment"
        },
        "distance": "Distance",
        "timing": "Timing",
        "phone": "Phone Contact",
        "address": "Address",
        "viewMap": "View on Google Maps",
        "loading": "Locating nearby shops...",
        "noData": "No agri shops found for the selected area.",
        "geoError": "Could not detect GPS location. Showing shops for selected area."
      },
      "assistant": {
        "greeting": "Namaste! I am your KrishiDrishti AI assistant. Ask any farming question in your native language!",
        "voiceNavScanner": "Opening AI Crop Scanner...",
        "voiceNavDashboard": "Navigating to Farmer Dashboard...",
        "voiceNavWeather": "Opening Weather Forecast...",
        "voiceNavMarket": "Loading Market Prices...",
        "chatPlaceholder": "Ask about fertilizers, crop diseases, weather or schemes...",
        "send": "Send",
        "listening": "Listening in your language... Click mic to stop.",
        "startListen": "Speak Question",
        "fallbackReply": "Namaste! I am your AI farming assistant. Please ask your question.",
        "voiceHeader": "AI Voice Assistant",
        "voiceSubheader": "Ask farming questions in your native language",
        "thinking": "AI is thinking...",
        "speakNow": "Speak now...",
        "stopListening": "Stop Listening",
        "tapToSpeak": "Tap microphone to speak",
        "muteSpeech": "Mute Speech",
        "quickPrompts": "Quick Questions",
        "title": "AI Farming Assistant",
        "subtitle": "Ask questions about crop diseases, fertilizers, weather, and schemes",
        "inputPlaceholder": "Type your farming question here..."
      },
      "helpline": {
        "title": "Emergency Helpline",
        "subtitle": "Kisan Call Center & Emergency Agricultural Contacts",
        "kisanCenterTitle": "Kisan Call Center (1551)",
        "kisanCenterDesc": "Get 24/7 free expert agricultural advice from farm experts.",
        "financialHelpline": "Kisan Financial Support Helpline",
        "vetCare": "Veterinary Emergency Care",
        "weatherEmergency": "Agri Weather Emergency Service",
        "callNow": "Call Toll Free Now",
        "tollFree": "Toll Free"
      },
      "auth": {
        "loginTitle": "Welcome Back",
        "loginSubtitle": "Login to access AI crop diagnostic & personalized advice",
        "registerTitle": "Join KrishiDrishti AI",
        "registerSubtitle": "Create your farmer profile to get customized guidance",
        "forgotTitle": "Reset Password",
        "forgotSubtitle": "Enter your registered mobile number",
        "fullName": "Full Name",
        "phone": "Phone Number",
        "email": "Email Address",
        "password": "Password",
        "confirmPassword": "Confirm Password",
        "state": "State",
        "district": "District",
        "primaryCrop": "Primary Crop",
        "landSize": "Land Size (Acres)",
        "language": "Preferred Language",
        "loginBtn": "Login",
        "registerBtn": "Register Profile",
        "sendOtpBtn": "Send OTP",
        "rememberMe": "Remember Me",
        "forgotPasswordLink": "Forgot Password?",
        "dontHaveAccount": "Don't have an account?",
        "alreadyHaveAccount": "Already have an account?",
        "backToLogin": "Back to Login"
      },
      "footer": {
        "brandDesc": "AI-Powered Smart Farming platform delivering crop disease diagnosis, voice assistance, and real-time mandi prices in 6 Indian languages.",
        "quickServices": "Quick Services",
        "farmerHelpline": "Farmer Helpline",
        "kisanCallCenter": "Kisan Call Center: 1551",
        "callCenterDesc": "Toll-free 24/7 national farmer assistance center.",
        "callNumber": "Call 1800-180-1551",
        "accessibilityTitle": "Security & Accessibility",
        "encryptedSessions": "Encrypted Sessions",
        "supportedLangs": "Supported: English, Telugu, Hindi, Tamil, Kannada, Malayalam",
        "screenReader": "Screen Reader Enabled",
        "contrastEnabled": "Dark Mode Enabled",
        "copyright": "© 2026 KrishiDrishti AI. All rights reserved.",
        "builtWithLove": "Crafted with ❤️ for Indian Farmers"
      },
      "cameraModal": {
        "headerTitle": "Crop Leaf Camera Scanner",
        "leafPositionGuideline": "Center leaf inside frame",
        "retakePhoto": "Retake Photo",
        "analyzeLeaf": "Analyze Leaf Image",
        "switchCamera": "Switch Camera",
        "capturePhoto": "Capture Photo",
        "cameraError": "Camera access denied or unavailable."
      },
      "accessibility": {
        "readPage": "Read Page",
        "stopReading": "Stop Reading",
        "largeText": "Large Text",
        "darkTheme": "Dark Mode",
        "lightTheme": "Light Mode",
        "enabled": "Enabled",
        "disabled": "Disabled"
      },
      "data": {
        "states": {
          "Andhra Pradesh": "Andhra Pradesh",
          "Telangana": "Telangana",
          "Karnataka": "Karnataka",
          "Tamil Nadu": "Tamil Nadu",
          "Kerala": "Kerala",
          "Maharashtra": "Maharashtra",
          "All India": "All India"
        },
        "districts": {
          "Guntur": "Guntur",
          "Kurnool": "Kurnool",
          "Anantapur": "Anantapur",
          "Warangal": "Warangal",
          "Nizamabad": "Nizamabad",
          "Karimnagar": "Karimnagar",
          "Kolar": "Kolar",
          "Shivamogga": "Shivamogga",
          "Chitradurga": "Chitradurga",
          "Erode": "Erode",
          "Tiruchirappalli": "Tiruchirappalli",
          "Wayanad": "Wayanad",
          "Kottayam": "Kottayam",
          "Nashik": "Nashik",
          "Latur": "Latur"
        },
        "crops": {
          "Paddy (Common)": "Paddy (Common)",
          "Red Chilli (Teja)": "Red Chilli (Teja)",
          "Cotton (Long Staple)": "Cotton (Long Staple)",
          "Groundnut (Pod)": "Groundnut (Pod)",
          "Cotton (Medium Staple)": "Cotton (Medium Staple)",
          "Maize (Yellow)": "Maize (Yellow)",
          "Turmeric (Finger)": "Turmeric (Finger)",
          "Paddy (Grade A)": "Paddy (Grade A)",
          "Tomato": "Tomato",
          "Arecanut (Rashi)": "Arecanut (Rashi)",
          "Onion (Red)": "Onion (Red)",
          "Banana (Poovan)": "Banana (Poovan)",
          "Black Pepper": "Black Pepper",
          "Rubber (RSS-4)": "Rubber (RSS-4)",
          "Onion (Nashik Red)": "Onion (Nashik Red)",
          "Soyabean (Yellow)": "Soyabean (Yellow)"
        },
        "markets": {
          "Guntur APMC Mandi": "Guntur APMC Mandi",
          "Guntur Yard": "Guntur Yard",
          "Kurnool Market Yard": "Kurnool Market Yard",
          "Anantapur APMC": "Anantapur APMC",
          "Warangal Enamamula Market": "Warangal Enamamula Market",
          "Nizamabad APMC": "Nizamabad APMC",
          "Nizamabad Yard": "Nizamabad Yard",
          "Karimnagar APMC": "Karimnagar APMC",
          "Kolar APMC Mandi": "Kolar APMC Mandi",
          "Shivamogga APMC": "Shivamogga APMC",
          "Chitradurga Mandi": "Chitradurga Mandi",
          "Erode APMC": "Erode APMC",
          "Trichy Central Market": "Trichy Central Market",
          "Kalpetta Market": "Kalpetta Market",
          "Kottayam Rubber Board": "Kottayam Rubber Board",
          "Lasalgaon APMC": "Lasalgaon APMC",
          "Latur APMC Mandi": "Latur APMC Mandi"
        },
        "weatherConditions": {
          "Scattered Showers": "Scattered Showers",
          "Scattered Rains": "Scattered Rains",
          "Partly Cloudy": "Partly Cloudy",
          "Sunny & Clear": "Sunny & Clear",
          "Thunderstorm": "Thunderstorm",
          "Light Rains": "Light Rains",
          "Sunny": "Sunny"
        },
        "days": {
          "Today": "Today",
          "Tomorrow": "Tomorrow",
          "Thu": "Thu",
          "Fri": "Fri",
          "Sat": "Sat",
          "Sun": "Sun",
          "Mon": "Mon"
        },
        "weatherAdvice": [
          "Delay chemical sprays for 24 hours due to 65% precipitation probability.",
          "Maintain proper field drainage for standing paddy crops to avoid root rot.",
          "Morning dew humidity is high; check chilli foliage for early downy mildew signs.",
          "Ideal weather for transplanting pulse crops in evening hours."
        ],
        "weatherAlerts": [
          {
            "title": "Moderate Rainfall Expected",
            "description": "Rain showers predicted over next 24 hours (65% chance). Delay pesticide spraying."
          },
          {
            "title": "Optimal Soil Moisture",
            "description": "Current humidity levels (78%) are favorable for paddy and chilli seedling growth."
          }
        ],
        "schemes": {
          "pm-kisan": {
            "title": "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
            "overview": "Financial assistance scheme providing ₹6,000 per year in three equal installments to small and marginal farmer families across India.",
            "eligibility": [
              "All landholding farmers families across India",
              "Subject to exclusion criteria (e.g. institutional landholders)"
            ],
            "benefits": [
              "₹6,000 per year directly transferred to bank accounts in 3 installments of ₹2,000",
              "Direct Benefit Transfer (DBT) ensuring transparency"
            ],
            "documents": [
              "Aadhaar Card",
              "Land Ownership Papers (RoR)",
              "Active Bank Account linked with Aadhaar",
              "Mobile Number"
            ]
          },
          "pmfby": {
            "title": "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
            "overview": "Comprehensive crop insurance coverage against non-preventable natural risks from pre-sowing to post-harvest stages.",
            "eligibility": [
              "All farmers growing notified crops in notified areas including sharecroppers"
            ],
            "benefits": [
              "Low premium: 2% Kharif, 1.5% Rabi, 5% horticultural crops",
              "Balance premium subsidized by Government",
              "Full insured claim for crop loss"
            ],
            "documents": [
              "Land Records (Khasra/Khatauni)",
              "Sowing Certificate",
              "Aadhaar Card & Bank Passbook",
              "Cancelled Cheque"
            ]
          },
          "kcc": {
            "title": "Kisan Credit Card (KCC) Scheme",
            "overview": "Provides timely and adequate short-term credit to farmers for crop cultivation and post-harvest expenses.",
            "eligibility": [
              "Individual farmers / Joint borrowers",
              "Tenant farmers and sharecroppers",
              "Self Help Groups (SHGs)"
            ],
            "benefits": [
              "Concessional interest rate of 7% per annum for loans up to ₹3 Lakhs",
              "3% interest subvention for prompt repayment",
              "Collateral-free loan up to ₹1.6 Lakhs"
            ],
            "documents": [
              "Application Form",
              "Identity Proof (Aadhaar/Voter ID)",
              "Address & Land Records",
              "Passport Photographs"
            ]
          },
          "pmksy": {
            "title": "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
            "overview": "Promotes \"Per Drop More Crop\" micro-irrigation (Drip and Sprinkler) to improve water-use efficiency.",
            "eligibility": [
              "Farmers owning cultivated land with assured water source"
            ],
            "benefits": [
              "55% subsidy for small/marginal farmers and 45% for other farmers on micro-irrigation",
              "Reduced water consumption by 30-50%"
            ],
            "documents": [
              "Land Ownership Documents",
              "Water Source Proof",
              "Aadhaar & Bank Details"
            ]
          },
          "mky": {
            "title": "Mahila Kisan Sashaktikaran Pariyojana (MKSP)",
            "overview": "Empowers women in agriculture by making systematic investments to enhance their participation and productivity.",
            "eligibility": [
              "Women farmers, women Self Help Groups (SHGs), and marginal women workers"
            ],
            "benefits": [
              "100% capacity building, organic farming training, and skill development",
              "Financial seed capital for women-led enterprises"
            ],
            "documents": [
              "Aadhaar Card",
              "SHG Membership Certificate",
              "Bank Account Details"
            ]
          },
          "didf": {
            "title": "Dairy Processing Infrastructure Development Fund (DIDF)",
            "overview": "Focuses on modernizing milk processing plants and chilling infrastructure for dairy farmers.",
            "eligibility": [
              "Dairy Cooperative Societies, Milk Producer Companies, State Federations"
            ],
            "benefits": [
              "Subsidized loan interest rate at 6.5% per annum",
              "Creation of milk chilling infrastructure in rural hubs"
            ],
            "documents": [
              "Registration Certificate of Cooperative",
              "Detailed Project Report (DPR)",
              "Bank Account Details"
            ]
          },
          "pmmsy": {
            "title": "Pradhan Mantri Matsya Sampada Yojana (PMMSY)",
            "overview": "Flagship scheme for holistic development of fisheries sector including aquaculture and fish ponds.",
            "eligibility": [
              "Fishers, fish farmers, fish workers, and fisheries cooperatives"
            ],
            "benefits": [
              "40% financial subsidy for General category and 60% for SC/ST/Women",
              "Insurance coverage up to ₹5 Lakhs"
            ],
            "documents": [
              "Aadhaar Card",
              "Fisheries License / Land ownership",
              "Bank Details"
            ]
          },
          "rythu-bharosa": {
            "title": "YSR Rythu Bharosa - PM KISAN (Andhra Pradesh)",
            "overview": "Financial assistance scheme providing ₹13,500 per year to farmer families including tenant farmers in Andhra Pradesh.",
            "eligibility": [
              "Farmer families owning land and registered tenant farmers in AP"
            ],
            "benefits": [
              "₹13,500 annually in 3 installments (₹7,500 Kharif, ₹4,000 Rabi, ₹2,000 Sankranti)"
            ],
            "documents": [
              "Aadhaar Card",
              "AP Pattadar Passbook / CCRC Card",
              "Bank Passbook"
            ]
          },
          "rythu-bandhu": {
            "title": "Rythu Bandhu Scheme (Telangana)",
            "overview": "Investment support scheme providing ₹10,000 per acre per year to land-owning farmers in Telangana.",
            "eligibility": [
              "All Pattadar land-owning farmers in Telangana state"
            ],
            "benefits": [
              "₹5,000 per acre for Kharif season + ₹5,000 per acre for Rabi season"
            ],
            "documents": [
              "Telangana Pattadar Passbook",
              "Aadhaar Card",
              "Bank Account Details"
            ]
          }
        },
        "shops": {
          "s1": {
            "name": "Sri Lakshmi Agri Inputs & Fertilizer Store",
            "address": "Main Road, Near APMC Market Yard, Guntur, AP 522001"
          },
          "s2": {
            "name": "Kisan Crop Protection & Pesticides Center",
            "address": "Station Road, Guntur, AP 522002"
          },
          "s3": {
            "name": "Rythu Seva Kendram & Farm Equipment Store",
            "address": "RTC Bus Stand Complex, Guntur, AP 522001"
          },
          "s4": {
            "name": "Jai Kisan Organic Fertilizers & Seeds Depot",
            "address": "Enamamula Market Road, Warangal, TS 506002"
          },
          "s5": {
            "name": "Cauvery Agri Tech & Drip Equipment",
            "address": "APMC Yard Gate, Kolar, KA 563101"
          }
        }
      },
      "severity": {
        "Low": "Low",
        "Moderate": "Moderate",
        "High": "High",
        "Critical": "Critical"
      },
      "profile": {
        "title": "Farmer Profile",
        "subtitle": "Verified Smart Farmer",
        "personalInfo": "Personal Information",
        "name": "Full Name",
        "phone": "Mobile Number",
        "state": "State",
        "district": "District",
        "preferredLang": "Preferred Language",
        "primaryCrop": "Primary Crop",
        "saveChanges": "Save Profile Changes"
      },
      "history": {
        "title": "Scan History",
        "subtitle": "Your previously analyzed crop disease reports",
        "noHistory": "No crop disease scans recorded yet.",
        "viewReport": "View Full Report"
      }
    }
  },
  "te": {
    "translation": {
      "appName": "కృషిదృష్టి AI",
      "tagline": "రైతులకు స్మార్ట్ ఆర్టిఫిషియల్ ఇంటెలిజెన్స్ సేవలు",
      "nav": {
        "home": "హోమ్",
        "dashboard": "డాష్‌బోర్డ్",
        "scanner": "పంట వ్యాధి స్కానర్",
        "chat": "AI వ్యవసాయ సహాయకుడు",
        "weather": "వాతావరణం",
        "schemes": "ప్రభుత్వ పథకాలు",
        "market": "మార్కెట్ ధరలు",
        "shops": "సమీప అంగళ్ళు",
        "helpline": "అత్యవసర సహాయం",
        "profile": "ప్రొఫైల్",
        "history": "స్కాన్ చరిత్ర",
        "login": "లాగిన్",
        "register": "రిజిస్టర్",
        "logout": "లాగౌట్"
      },
      "hero": {
        "badge": "AI-ఆధారిత స్మార్ట్ వ్యవసాయ సహాయకుడు",
        "title": "ఆర్టిఫిషియల్ ఇంటెలిజెన్స్‌తో స్మార్ట్ వ్యవసాయం",
        "subtitle": "పంట వ్యాధులను తక్షణమే గుర్తించండి, నిపుణుల సలహాలు పొందండి, వాతావరణ సమాచారం మరియు మార్కెట్ ధరలను మీ మాతృభాషలో తెలుసుకోండి.",
        "scanButton": "పంట ఆకును స్కాన్ చేయండి",
        "assistantButton": "AI సహాయకునితో మాట్లాడండి",
        "accuracyMetric": "95%+ AI కచ్చితత్వం",
        "languagesMetric": "6 భారతీయ భాషలు",
        "guidanceMetric": "24/7 రైతు వాయిస్ మార్గదర్శకత్వం"
      },
      "home": {
        "servicesTitle": "సమగ్ర డిజిటల్ వ్యవసాయ సేవలు",
        "servicesSubtitle": "పంట ఆరోగ్యం, వాతావరణ రక్షణ, మార్కెట్ ధరలు మరియు ప్రభుత్వ పథకాలు ఒకే వేదికపై.",
        "exploreFeature": "సేవను చూడండి",
        "dailyTipBadge": "నేటి వ్యవసాయ చిట్కా",
        "dailyTipTitle": "వేప పూత పూసిన యూరియా వినియోగం",
        "dailyTipDesc": "నత్రజనిని 3 విడతలుగా (విత్తేటప్పుడు, దుబ్బు చేసేటప్పుడు, చిరు పొట్ట దశలో) వేయడం ద్వారా 25% ఎరువుల సామర్థ్యం పెరుగుతుంది.",
        "dailyTipButton": "రైతు డాష్‌బోర్డ్‌కు వెళ్ళండి",
        "helplineTitle": "అత్యవసర వ్యవసాయ సహాయం కావాలా?",
        "helplineDesc": "కిసాన్ కాల్ సెంటర్ (1551) లేదా అత్యవసర వ్యవసాయ నిపుణులను సంప్రదించండి.",
        "helplineButton": "అత్యవసర నంబర్లు చూడండి",
        "scannerDesc": "తక్షణ AI పంట వ్యాధి నిర్ధారణ మరియు నివారణ నివేదిక",
        "chatDesc": "మీ మాతృభాషలో వ్యవసాయ సందేహాలు అడగండి",
        "weatherDesc": "ప్రాంతీయ వాతావరణం మరియు మందుల పిచికారీ హెచ్చరికలు",
        "marketDesc": "దేశవ్యాప్త APMC మార్కెట్ యార్డ్ ధరలు",
        "schemesDesc": "PM-KISAN, PMFBY వంటి ప్రభుత్వ ఆర్థిక పథకాలు",
        "shopsDesc": "సమీపంలోని ఎరువులు, విత్తనాలు మరియు పురుగుమందుల దుకాణాలు"
      },
      "dashboard": {
        "badge": "స్మార్ట్ రైతు డాష్‌బోర్డ్",
        "welcome": "నమస్తే",
        "location": "ప్రాంతం",
        "preferredLang": "ఎంచుకున్న భాష",
        "scannerBtn": "పంట వ్యాధి స్కానర్",
        "todayTipBadge": "నేటి సలహా",
        "ipmTitle": "మిరప మరియు పత్తిలో సమగ్ర సస్యరక్షణ",
        "ipmDesc": "పంట తొలి దశలో ఎకరాకు 15 చొప్పున పసుపు మరియు నీలి రంగు జిగురు అట్టలను అమర్చి తామర పురుగులు, తెల్లనల్లి వ్యాప్తిని నిరోధించండి.",
        "leafScanTitle": "తక్షణ ఆకు స్కాన్",
        "leafScanDesc": "వ్యాధి సోకిన ఆకు ఫొటో తీసి KrishiDrishti CNN నివారణ మార్గాలను పొందండి.",
        "startScanBtn": "స్కాన్ ప్రారంభించండి",
        "assistantTitle": "AI వాయిస్ & టెక్స్ట్ సహాయకుడు",
        "assistantDesc": "ఎరువులు, విత్తనాలు, వాతావరణంపై 6 భాషలలో ప్రశ్నలు అడగండి.",
        "chatAiBtn": "AIతో మాట్లాడండి",
        "recentScansTitle": "ఇటీవలి పంట స్కాన్లు",
        "viewHistory": "పూర్తి చరిత్ర చూడండి",
        "noScans": "ఇంకా ఎటువంటి స్కాన్లు చేయలేదు. మీ పంటను పరీక్షించడానికి క్రింద క్లిక్ చేయండి!",
        "firstScanBtn": "మొదటి స్కాన్ చేయండి",
        "confidence": "నమ్మకం స్కోరు",
        "nearbyShopsTitle": "సమీప వ్యవసాయ దుకాణాలు",
        "nearbyShopsSubtitle": "మీ ప్రాంతానికి దగ్గరలోని ఎరువులు & విత్తనాల అంగళ్ళు",
        "viewAll": "అన్నీ చూడండి",
        "schemesTitle": "ప్రభుత్వ వ్యవసాయ పథకాలు",
        "schemesSubtitle": "రైతులకు ఆర్థిక సహాయం మరియు పంట భీమా",
        "browseSchemes": "పథకాలు చూడండి",
        "applyPortal": "పోర్టల్‌లో దరఖాస్తు చేయండి",
        "greeting": "నమస్కారం, {{name}}! 👋",
        "farmerFallback": "రైతు మిత్రమా",
        "selectLocation": "మీ ప్రాంతాన్ని ఎంచుకోండి",
        "detectGps": "జీపీఎస్ లొకేషన్ ఎంచుకోండి",
        "locationNotSet": "ప్రాంతం ఎంచుకోలేదు"
      },
      "scanner": {
        "title": "AI పంట వ్యాధి నిర్ధారణ",
        "subtitle": "ఆకు ఫొటోను అప్‌లోడ్ చేసి తక్షణ AI వ్యాధి నిర్ధారణ నివేదిక పొందండి.",
        "takePhoto": "ఫొటో తీయండి",
        "uploadPhoto": "చిత్రం అప్‌లోడ్ చేయండి",
        "analyzing": "KrishiDrishti CNN పరిశీలిస్తోంది...",
        "reportTitle": "పంట నివారణ నివేదిక",
        "confidence": "AI కచ్చితత్వం స్కోరు",
        "severity": "తీవ్రత స్థాయి",
        "symptoms": "గమనించిన లక్షణాలు",
        "causes": "సాధ్యమైన కారణాలు",
        "chemical": "రసాయన నివారణ మందులు",
        "organic": "సేంద్రీయ / ప్రకృతి నివారణలు",
        "fertilizers": "ఎరువుల యాజమాన్యం",
        "prevention": "ముందస్తు జాగ్రత్తలు",
        "smartRec": "స్మార్ట్ సలహాలు",
        "saveReport": "ప్రొఫైల్‌లో దాచుకోండి",
        "savedSuccess": "నివేదిక ప్రొఫైల్‌లో భద్రపరచబడింది!",
        "readAloud": "చదివి వినిపించు",
        "selectPhotoError": "దయచేసి మొదట ఆకు ఫొటో ఎంచుకోండి.",
        "generateReportError": "పంట నివేదిక సిద్ధం కాలేదు. దయచేసి మళ్లీ ప్రయత్నించండి.",
        "analysisError": "పంట ఫోటో విశ్లేషణ విఫలమైంది. స్పష్టమైన ఆకు ఫోటో అప్‌లోడ్ చేయండి."
      },
      "market": {
        "liveTitle": "లైవ్ మార్కెట్ ధరలు",
        "title": "వ్యవసాయ మార్కెట్ ధరలు",
        "subtitle": "వివిధ మార్కెట్లలో నేటి పంటల ధరలు.",
        "selectState": "రాష్ట్రాన్ని ఎంచుకోండి",
        "selectDistrict": "జిల్లాను ఎంచుకోండి",
        "selectMarket": "మార్కెట్ / మండి ఎంచుకోండి",
        "allStates": "అన్ని రాష్ట్రాలు",
        "allDistricts": "అన్ని జిల్లాలు",
        "allMarkets": "అన్ని మార్కెట్లు",
        "searchCrop": "పంట పేరు శోధించండి",
        "cropName": "పంట పేరు",
        "minPrice": "కనీస ధర",
        "maxPrice": "గరిష్ట ధర",
        "modalPrice": "సగటు/మాడల్ ధర",
        "arrivalQty": "సరుకు రాక (పరిమాణం)",
        "unit": "ప్రమాణం",
        "lastUpdated": "చివరి నవీకరణ",
        "trend": "మార్పు",
        "stable": "స్థిరం",
        "minMax": "కనిష్ట - గరిష్ట ధర",
        "loading": "లైవ్ మార్కెట్ ధరలు లోడ్ అవుతున్నాయి...",
        "noData": "మీరు ఎంచుకున్న మార్కెట్‌లో ఎటువంటి సమాచారం లేదు.",
        "error": "మార్కెట్ ధరల లోడింగ్‌లో లోపం జరిగింది.",
        "bags": "బస్తాలు",
        "quintals": "క్వింటాళ్లు",
        "boxes": "పెట్టెలు",
        "bunch": "గెలలు",
        "today": "ఈరోజు",
        "yesterday": "నిన్న",
        "todayRates": "ఈనాటి మార్కెట్ ధరలు",
        "viewAll": "అన్ని ధరలు చూడండి"
      },
      "weather": {
        "badge": "లైవ్ వాతావరణ అంచనా",
        "title": "వ్యవసాయ వాతావరణ సమాచారం",
        "subtitle": "ప్రాంతీయ వాతావరణం మరియు మందుల పిచికారీ సలహాలు.",
        "selectState": "రాష్ట్రాన్ని ఎంచుకోండి",
        "selectDistrict": "జిల్లాను ఎంచుకోండి",
        "useGps": "ప్రస్తుత ప్రాంతాన్ని గుర్తించు (GPS)",
        "locating": "ప్రాంతం గుర్తిస్తోంది...",
        "temp": "ఉష్ణోగ్రత",
        "humidity": "తేమ (ఆర్థ్రత)",
        "rainProb": "వర్షం సంభావ్యత",
        "windSpeed": "గాలి వేగం",
        "uvIndex": "యువి ఇండెక్స్",
        "condition": "పరిస్థితి",
        "sunrise": "సూర్యోదయం",
        "sunset": "సూర్యాస్తమయం",
        "adviceTitle": "వాతావరణ ఆధారిత వ్యవసాయ సలహా",
        "hourlyTitle": "గంటల వారీ అంచనా",
        "weeklyTitle": "7 రోజుల వాతావరణం",
        "loading": "వాతావరణ సమాచారం సేకరిస్తోంది...",
        "error": "వాతావరణ సమాచారం లభించలేదు.",
        "detecting": "జీపీఎస్ కనుగొంటోంది...",
        "detectGps": "జీపీఎస్ లొకేషన్ ఎంచుకోండి",
        "selectLocation": "లొకేషన్ ఎంచుకోండి",
        "currentLocation": "ప్రస్తుత ప్రాంతం",
        "refresh": "తాజాకరించు",
        "rainProbability": "వర్షపాతం సంభావ్యత",
        "wind": "గాలి వేగం",
        "hourlyForecast": "గంటల వారీ అంచనా",
        "weeklyForecast": "7 రోజుల వాతావరణ అంచనా",
        "farmingAdvice": "వ్యవసాయ సలహాలు",
        "alerts": "వాతావరణ హెచ్చరికలు",
        "rain": "వర్షం",
        "liveForecast": "వాతావరణ నివేదిక",
        "alertsTitle": "వాతావరణ అత్యవసర నివేదిక",
        "conditions": {
          "Clear Sky": "ఆకాశం నిర్మలంగా ఉంది",
          "Mainly Clear": "చాలావరకు నిర్మలంగా ఉంది",
          "Partly Cloudy": "పాక్షికంగా మబ్బులు",
          "Overcast": "మబ్బు పట్టి ఉంది",
          "Foggy": "పొగమంచు",
          "Light Drizzle": "తేలికపాటి చినుకులు",
          "Moderate Drizzle": "మిసమిస చినుకులు",
          "Heavy Drizzle": "భారీ చినుకులు",
          "Light Rain": "తేలికపాటి వర్షం",
          "Moderate Rain": "సాధారణ వర్షం",
          "Heavy Rain": "భారీ వర్షం",
          "Light Snow": "తేలికపాటి మంచు",
          "Moderate Snow": "సాధారణ మంచు",
          "Heavy Snow": "భారీ మంచు",
          "Light Showers": "తేలికపాటి జల్లులు",
          "Moderate Showers": "సాధారణ జల్లులు",
          "Heavy Showers": "భారీ జల్లులు",
          "Thunderstorm": "రుతుపవనాల ఉరుములు వర్షం",
          "Thunderstorm with Hail": "వడగండ్ల వాన",
          "Heavy Thunderstorm with Hail": "భారీ వడగండ్ల వాన",
          "Unknown": "తెలియదు"
        },
        "days": {
          "today": "ఈరోజు",
          "tomorrow": "రేపు",
          "mon": "సోమ",
          "tue": "మంగళ",
          "wed": "బుధ",
          "thu": "గురు",
          "fri": "శుక్ర",
          "sat": "శని",
          "sun": "ఆది"
        },
        "geoNotSupported": "మీ బ్రౌజర్‌లో జీపీఎస్ లొకేషన్ సపోర్ట్ చేయదు.",
        "geoError": "మీ ప్రస్తుత ప్రాంత వాతావరణం పొందలేకపోయాము."
      },
      "schemes": {
        "badge": "ఆర్థిక సహాయం",
        "title": "ప్రభుత్వ వ్యవసాయ పథకాలు",
        "subtitle": "కేంద్ర మరియు రాష్ట్ర ప్రభుత్వ రైతు పథకాలు.",
        "selectState": "రాష్ట్రం ప్రకారం ఫిల్టర్ చేయండి",
        "allStates": "అన్ని భారతీయ & రాష్ట్ర పథకాలు",
        "searchPlaceholder": "పథకం పేరు లేదా కీవర్డ్ వెతకండి...",
        "categories": {
          "all": "అన్ని పథకాలు",
          "crop": "పంట రక్షణ & సాయం",
          "irrigation": "సాగునీరు / సూక్ష్మ సేద్యం",
          "insurance": "పంట భీమా (Fasal Bima)",
          "loans": "రుణాలు & కిసాన్ క్రెడిట్ కార్డ్",
          "subsidies": "సబ్సిడీలు & ఎరువులు",
          "women": "మహిళా రైతులు",
          "dairy": "పాడి పరిశ్రమ",
          "fisheries": "చేపల పెంపకం"
        },
        "overview": "పథకం వివరాలు",
        "eligibility": "అర్హతలు",
        "benefits": "ప్రయోజనాలు",
        "documents": "కావలసిన పత్రాలు",
        "officialWebsite": "అధికారిక వెబ్‌సైట్",
        "applyBtn": "పోర్టల్‌లో అప్లై చేయండి",
        "loading": "పథకాల వివరాలు లోడ్ అవుతున్నాయి...",
        "noData": "ఎటువంటి పథకాలు లభించలేదు."
      },
      "shops": {
        "badge": "సమీప అంగళ్ళు",
        "title": "సమీప వ్యవసాయ దుకాణాలు",
        "subtitle": "దగ్గరలోని ఎరువులు, విత్తనాలు మరియు పురుగుమందుల దుకాణాలు.",
        "selectState": "రాష్ట్రం",
        "selectDistrict": "జిల్లా",
        "selectPlace": "ప్రాంతం / ఊరు",
        "useGps": "ప్రస్తుత GPS స్థానం ఉపయోగించండి",
        "locating": "స్థానం గుర్తిస్తోంది...",
        "categories": {
          "all": "అన్ని దుకాణాలు",
          "fertilizer_seed": "ఎరువులు & విత్తనాలు",
          "pesticides": "పురుగుమందులు",
          "equipment": "పరికరాలు & యంత్రాలు"
        },
        "distance": "దూరం",
        "timing": "వేళలు",
        "phone": "ఫోన్ నంబర్",
        "address": "చిరునామా",
        "viewMap": "Google Maps లో చూడండి",
        "loading": "సమీప దుకాణాలు లోడ్ అవుతున్నాయి...",
        "noData": "ఎటువంటి దుకాణాలు లభించలేదు.",
        "geoError": "జీపీఎస్ లొకేషన్ కనుగొనలేకపోయాము. ఎంచుకున్న ప్రాంత దుకాణాలు చూపిస్తున్నాము."
      },
      "assistant": {
        "greeting": "నమస్తే! నేను మీ కృషిదృష్టి AI సహాయకుడిని. వ్యవసాయ సందేహాలు తెలుగులో అడగండి!",
        "voiceNavScanner": "పంట వ్యాధి స్కానర్ తెరుస్తోంది...",
        "voiceNavDashboard": "రైతు డాష్‌బోర్డ్‌కు వెళ్తోంది...",
        "voiceNavWeather": "వాతావరణ వివరాలు తెరుస్తోంది...",
        "voiceNavMarket": "మార్కెట్ ధరలు లోడ్ అవుతున్నాయి...",
        "chatPlaceholder": "ఎరువులు, విత్తనాలు, వ్యాధుల గురించి అడగండి...",
        "send": "పంపు",
        "listening": "వింటోంది... ఆపడానికి మైక్ నొక్కండి.",
        "startListen": "వాయిస్‌తో అడగండి",
        "fallbackReply": "నమస్కారం! నేను మీ వ్యవసాయ మిత్రుడిని. మీ సందేహాన్ని అడగండి.",
        "voiceHeader": "ఏఐ వాయిస్ అసిస్టెంట్",
        "voiceSubheader": "మీ మాతృభాషలో మాట్లాడి వ్యవసాయ ప్రశ్నలు అడగండి",
        "thinking": "ఏఐ ఆలోచిస్తోంది...",
        "speakNow": "ఇప్పుడు మాట్లాడండి...",
        "stopListening": "వినడం ఆపు",
        "tapToSpeak": "మాట్లాడటానికి మైక్ నొక్కండి",
        "muteSpeech": "శబ్దం ఆపివేయి",
        "quickPrompts": "త్వరిత ప్రశ్నలు",
        "title": "ఏఐ వ్యవసాయ సహాయకుడు",
        "subtitle": "పంట రోగాలు, ఎరువులు, వాతావరణం, పథకాలపై ప్రశ్నలు అడగండి",
        "inputPlaceholder": "మీ వ్యవసాయ సందేహాన్ని టైప్ చేయండి..."
      },
      "helpline": {
        "title": "అత్యవసర హెల్ప్‌లైన్",
        "subtitle": "కిసాన్ కాల్ సెంటర్ మరియు అత్యవసర వ్యవసాయ పరిచయాలు",
        "kisanCenterTitle": "కిసాన్ కాల్ సెంటర్ (1551)",
        "kisanCenterDesc": "ఉచితంగా 24/7 వ్యవసాయ నిపుణుల సలహాలు పొందండి.",
        "financialHelpline": "రైతు ఆర్థిక సహాయ హెల్ప్‌లైన్",
        "vetCare": "పశువైద్య అత్యవసర సేవ",
        "weatherEmergency": "వాతావరణ అత్యవసర సేవ",
        "callNow": "ఉచితంగా కాల్ చేయండి",
        "tollFree": "టోల్ ఫ్రీ"
      },
      "auth": {
        "loginTitle": "తిరిగి స్వాగతం",
        "loginSubtitle": "లాగిన్ అయి AI సేవలను ఉపయోగించండి",
        "registerTitle": "కృషిదృష్టి AI లో చేరండి",
        "registerSubtitle": "రైతు ఖాతాను సృష్టించుకోండి",
        "forgotTitle": "పాస్‌వర్డ్ పునరుద్ధరణ",
        "forgotSubtitle": "మీ ఫోన్ నంబర్ నమోదు చేయండి",
        "fullName": "పూర్తి పేరు",
        "phone": "ఫోన్ నంబర్",
        "email": "ఈమెయిల్",
        "password": "పాస్‌వర్డ్",
        "confirmPassword": "పాస్‌వర్డ్ ధృవీకరించండి",
        "state": "రాష్ట్రం",
        "district": "జిల్లా",
        "primaryCrop": "ముఖ్యమైన పంట",
        "landSize": "భూమి విస్తీర్ణం (ఎకరాలు)",
        "language": "ఎంచుకున్న భాష",
        "loginBtn": "లాగిన్",
        "registerBtn": "రజిస్టర్ చేయండి",
        "sendOtpBtn": "కోడ్ పంపు",
        "rememberMe": "నన్ను గుర్తుంచుకో",
        "forgotPasswordLink": "పాస్‌వర్డ్ మరచిపోయారా?",
        "dontHaveAccount": "ఖాతా లేదా?",
        "alreadyHaveAccount": "ఖాతా ఉందా?",
        "backToLogin": "లాగిన్‌కు వెళ్ళండి"
      },
      "footer": {
        "brandDesc": "KrishiDrishti AI పంట వ్యాధి నిర్ధారణ, వాయిస్ అసిస్టెంట్, లైవ్ వాతావరణం, మార్కెట్ ధరలు మరియు ప్రభుత్వ పథకాలను 6 భారతీయ భాషలలో రైతులకు అందిస్తోంది.",
        "quickServices": "ముఖ్య సేవలు",
        "farmerHelpline": "రైతు సహాయ కేంద్రం",
        "kisanCallCenter": "కిసాన్ కాల్ సెంటర్: 1551",
        "callCenterDesc": "ఉచిత 24/7 జాతీయ రైతు సహాయ కేంద్రం.",
        "callNumber": "కాల్ చేయండి 1800-180-1551",
        "accessibilityTitle": "అందుబాటు & భద్రత",
        "encryptedSessions": "సురక్షిత లాగిన్ సేవలు",
        "supportedLangs": "సపోర్ట్ చేసే భాషలు: ఇంగ్లీష్, తెలుగు, హిందీ, తమిళం, కన్నడ, మలయాళం",
        "screenReader": "వాయిస్ రీడర్ అనుకూలత",
        "contrastEnabled": "డార్క్ మోడ్ & పెద్ద అక్షరాలు",
        "copyright": "© 2026 కృషిదృష్టి AI. సర్వహక్కులు ప్రత్యేకించబడినవి.",
        "builtWithLove": "భారతీయ వ్యవసాయం కోసం రూపొందించబడింది ❤️"
      },
      "cameraModal": {
        "headerTitle": "కెమెరా స్కానర్",
        "leafPositionGuideline": "ఆకును ఫ్రేమ్ మధ్యలో ఉంచండి",
        "retakePhoto": "మళ్ళీ ఫొటో తీయండి",
        "analyzeLeaf": "విశ్లేషించండి",
        "switchCamera": "కెమెరా మార్చండి",
        "capturePhoto": "ఫొటో తీయండి",
        "cameraError": "కెమెరా లభించలేదు."
      },
      "accessibility": {
        "readPage": "పేజీ చదవండి",
        "stopReading": "ఆపండి",
        "largeText": "పెద్ద అక్షరాలు",
        "darkTheme": "డార్క్ మోడ్",
        "lightTheme": "లైట్ మోడ్",
        "enabled": "సమర్థించబడింది",
        "disabled": "అক্ষমం చేయబడింది"
      },
      "data": {
        "states": {
          "Andhra Pradesh": "ఆంధ్రప్రదేశ్",
          "Telangana": "తెలంగాణ",
          "Karnataka": "కర్ణాటక",
          "Tamil Nadu": "తమిళనాడు",
          "Kerala": "కేరళ",
          "Maharashtra": "మహారాష్ట్ర",
          "All India": "అఖిల భారత పథకాలు"
        },
        "districts": {
          "Guntur": "గుంటూరు",
          "Kurnool": "కర్నూలు",
          "Anantapur": "అనంతపురం",
          "Warangal": "వరంగల్",
          "Nizamabad": "నిజామాబాద్",
          "Karimnagar": "కరీంనగర్",
          "Kolar": "కోలార్",
          "Shivamogga": "శివమొగ్గ",
          "Chitradurga": "చిత్రదుర్గ",
          "Erode": "ఈరోడ్",
          "Tiruchirappalli": "తిరుచిరాపల్లి",
          "Wayanad": "వయనాడ్",
          "Kottayam": "కొట్టాయం",
          "Nashik": "నాసిక్",
          "Latur": "లాతూర్"
        },
        "crops": {
          "Paddy (Common)": "వరి (సాధారణ రకం)",
          "Red Chilli (Teja)": "ఎర్ర మిరప (తేజ రకం)",
          "Cotton (Long Staple)": "పత్తి (పొడవు పింజ)",
          "Groundnut (Pod)": "వేరుశనగ కాయలు",
          "Cotton (Medium Staple)": "పత్తి (మధ్యస్థ రకం)",
          "Maize (Yellow)": "మొక్కజొన్న (పసుపు)",
          "Turmeric (Finger)": "పసుపు కొమ్ము",
          "Paddy (Grade A)": "వరి (గ్రేడ్ A)",
          "Tomato": "టమాటో",
          "Arecanut (Rashi)": "పోక చెక్క / వక్క",
          "Onion (Red)": "ఉల్లిపాయ (ఎరుపు)",
          "Banana (Poovan)": "అరటి (పూవన్)",
          "Black Pepper": "నల్ల మిరియాలు",
          "Rubber (RSS-4)": "రబ్బరు (RSS-4)",
          "Onion (Nashik Red)": "నాసిక్ ఎర్ర ఉల్లి",
          "Soyabean (Yellow)": "సోయాబీన్ (పసుపు)"
        },
        "markets": {
          "Guntur APMC Mandi": "గుంటూరు APMC మార్కెట్",
          "Guntur Yard": "గుంటూరు మిర్చి యార్డ్",
          "Kurnool Market Yard": "కర్నూలు మార్కెట్ యార్డ్",
          "Anantapur APMC": "అనంతపురం APMC",
          "Warangal Enamamula Market": "వరంగల్ ఏనుమాముల మార్కెట్",
          "Nizamabad APMC": "నిజామాబాద్ APMC",
          "Nizamabad Yard": "నిజామాబాద్ యార్డ్",
          "Karimnagar APMC": "కరీంనగర్ APMC",
          "Kolar APMC Mandi": "కోలార్ APMC మండి",
          "Shivamogga APMC": "శివమొగ్గ APMC",
          "Chitradurga Mandi": "చిత్రదుర్గ మండి",
          "Erode APMC": "ఈరోడ్ APMC",
          "Trichy Central Market": "తిరుచ్చి సెంట్రల్ మార్కెట్",
          "Kalpetta Market": "కల్పట్టా మార్కెట్",
          "Kottayam Rubber Board": "కొట్టాయం రబ్బర్ బోర్డు",
          "Lasalgaon APMC": "లసల్‌గావ్ APMC",
          "Latur APMC Mandi": "లాతూర్ APMC మండి"
        },
        "weatherConditions": {
          "Scattered Showers": "చెదురుమదురు జల్లులు",
          "Scattered Rains": "చెదురుమదురు వర్షాలు",
          "Partly Cloudy": "పాక్షికంగా మబ్బులు",
          "Sunny & Clear": "ఎండ మరియు నిర్మలం",
          "Thunderstorm": "ఉరుములతో కూడిన వర్షం",
          "Light Rains": "తేలికపాటి వర్షం",
          "Sunny": "ఎండ"
        },
        "days": {
          "Today": "నేడు",
          "Tomorrow": "రేపు",
          "Thu": "గురువారం",
          "Fri": "శుక్రవారం",
          "Sat": "శనివారం",
          "Sun": "ఆదివారం",
          "Mon": "సోమవారం"
        },
        "weatherAdvice": [
          "వర్షపాతం అవకాశం ఉన్నందున రాబోయే 24 గంటల వరకు రసాయన మందుల పిచికారీ వాయిదా వేయండి.",
          "వరి పొలాల్లో వేరు కుళ్ళు నివారణకు తగిన నీటి పారుదల కాలువలను శుభ్రంగా ఉంచండి.",
          "ఉదయం పూట తేమ ఎక్కువ ఉన్నందున మిరప పంటలో బూడిద తెగులు లక్షణాలను పరిశీలించండి.",
          "సాయంత్రం వేళల్లో మినుము/పెసర పంట నాట్లకు అనుకూలమైన వాతావరణం."
        ],
        "weatherAlerts": [
          {
            "title": "మోస్తరు వర్షపాతం హెచ్చరిక",
            "description": "రాబోయే 24 గంటల్లో వర్షం కురిసే అవకాశం ఉంది. మందుల పిచికారీని నిలిపివేయండి."
          },
          {
            "title": "అనుకూలమైన మట్టి తేమ",
            "description": "ప్రస్తుత తేమ శాతం (78%) వరి నారుమళ్లకు మరియు మిరప మొక్కల ఎదుగుదలకు అనుకూలం."
          }
        ],
        "schemes": {
          "pm-kisan": {
            "title": "ప్రధాన మంత్రి కిసాన్ సమ్మాన్ నిధి (PM-KISAN)",
            "overview": "రైతు కుటుంబాలకు ఏటా ₹6,000 ఆర్థిక సహాయం 3 విడతల్లో నేరుగా బ్యాంక్ ఖాతాలో జమ చేసే పథకం.",
            "eligibility": [
              "భారతదేశంలోని సాగుభూమి కలిగిన రైతు కుటుంబాలన్నీ అర్హులు",
              "ఆదాయపు పన్ను చెల్లించేవారు మినహాయింపు"
            ],
            "benefits": [
              "ఏటా ₹6,000 నేరుగా బ్యాంక్ ఖాతాలో జమ (₹2,000 చొప్పున 3 విడతలు)",
              "100% పారదర్శకతతో DBT పద్ధతి"
            ],
            "documents": [
              "ఆధార్ కార్డ్",
              "భూమి హక్కు పత్రాలు (పట్టాదార్ పాస్ పుస్తకం)",
              "ఆధార్ లింక్ అయిన బ్యాంక్ ఖాతా",
              "ఫోన్ నంబర్"
            ]
          },
          "pmfby": {
            "title": "ప్రధాన మంత్రి ఫసల్ భీమా యోజన (PMFBY)",
            "overview": "ప్రకృతి వైపరీత్యాలు మరియు పంట నష్టాల నుండి విత్తే దశ నుండి కోత తర్వాతి దశ వరకు సమగ్ర పంట భీమా రక్షణ.",
            "eligibility": [
              "నోటిఫై చేసిన పంటలను సాగుచేసే రైతులు, కౌలు రైతులందరూ అర్హులు"
            ],
            "benefits": [
              "చాలా తక్కువ ప్రీమియం: ఖరీఫ్‌కు 2%, రబీకి 1.5%, వాణిజ్య పంటలకు 5%",
              "మిగిలిన ప్రీమియంను ప్రభుత్వమే భరిస్తుంది"
            ],
            "documents": [
              "భూమి పత్రాలు (ఖాతా/పహాణీ)",
              "పంట విత్తిన ధృవీకరణ పత్రం",
              "ఆధార్ కార్డ్ & బ్యాంక్ పాస్ బుక్",
              "కాన్సల్డ్ చెక్"
            ]
          },
          "kcc": {
            "title": "కిసాన్ క్రెడిట్ కార్డ్ (KCC) పథకం",
            "overview": "రైతులకు పంట సాగు, కోత తర్వాతి ఖర్చులు మరియు వ్యవసాయ అవసరాల కోసం తక్కువ వడ్డీకే రుణ సదుపాయం.",
            "eligibility": [
              "సొంత భూమి కలిగిన రైతులు, కౌలు రైతులు",
              "రైతు స్వయం సహాయక బృందాలు (SHG)"
            ],
            "benefits": [
              "₹3 లక్షల వరకు సంవత్సరానికి కేవలం 7% వడ్డీకే రుణం",
              "సకాలంలో చెల్లిస్తే 3% వడ్డీ రాయితీ (సరిగ్గా కడితే 4% వడ్డీ)",
              "₹1.6 లక్షల వరకు షూరిటీ లేని రుణం"
            ],
            "documents": [
              "దరఖాస్తు ఫారం",
              "గుర్తింపు కార్డు (ఆధార్/ఓటర్ ఐడీ)",
              "చిరునామా & భూమి పత్రాలు",
              "పాస్‌పోర్ట్ సైజు ఫొటోలు"
            ]
          },
          "pmksy": {
            "title": "ప్రధాన మంత్రి కృషి సించాయీ యోజన (PMKSY)",
            "overview": "బిందు మరియు తుంపర సేద్యం (Drip & Sprinkler) ద్వారా నీటి వినియోగ సామర్థ్యాన్ని పెంచే పథకం.",
            "eligibility": [
              "సాగుభూమి మరియు నీటి వసతి కలిగిన రైతులందరూ అర్హులు"
            ],
            "benefits": [
              "చిన్న, సన్నకారు రైతులకు 55% మరియు ఇతర రైతులకు 45% సబ్సిడీ",
              "30-50% నీటి పొదుపు మరియు ఎరువుల ఆదా"
            ],
            "documents": [
              "భూమి యాజమాన్య పత్రాలు",
              "నీటి వసతి ఆధారాలు",
              "ఆధార్ & బ్యాంక్ వివరాలు"
            ]
          },
          "mky": {
            "title": "మహిళా కిసాన్ సశక్తీకరణ్ పరియోజన (MKSP)",
            "overview": "వ్యవసాయంలో మహిళా రైతుల భాగస్వామ్యాన్ని, ఉత్పాదకతను పెంచే ప్రత్యేక మహిళా పథకం.",
            "eligibility": [
              "మహిళా రైతులు, మహిళా సంఘాల సభ్యులు (SHG)"
            ],
            "benefits": [
              "సేంద్రీయ వ్యవసాయంపై 100% ఉచిత శిక్షణ",
              "మహిళా రైతు గ్రూపులకు ఆర్థిక ప్రోత్సాహకాలు"
            ],
            "documents": [
              "ఆధార్ కార్డ్",
              "మహిళా సంఘం సభ్యత్వ కార్డ్",
              "బ్యాంక్ ఖాతా వివరాలు"
            ]
          },
          "didf": {
            "title": "డైరీ ప్రాసెసింగ్ ఇన్ఫ్రాస్ట్రక్చర్ డెవలప్‌మెంట్ ఫండ్ (DIDF)",
            "overview": "పాడి రైతులకు పాలు నిల్వ చేసే కేంద్రాలు, మౌలిక వసతుల కల్పన కోసం ఆర్థిక సహాయం.",
            "eligibility": [
              "పాడి సహకార సంఘాలు, పాల ఉత్పత్తిదారుల సంఘాలు"
            ],
            "benefits": [
              "6.5% తక్కువ వడ్డీకే రుణాలు",
              "గ్రామీణ ప్రాంతాల్లో పాల శీతలీకరణ కేంద్రాల ఏర్పాటు"
            ],
            "documents": [
              "సంఘం రిజిస్ట్రేషన్ సర్టిఫికేట్",
              "ప్రాజెక్ట్ నివేదిక (DPR)",
              "బ్యాంక్ ఖాతా వివరాలు"
            ]
          },
          "pmmsy": {
            "title": "ప్రధాన మంత్రి మత్స్య సంపద యోజన (PMMSY)",
            "overview": "చేపలు మరియు రొయ్యల పెంపకం దారులకు ఆర్థిక సహాయం మరియు నిధులు.",
            "eligibility": [
              "మత్స్యకారులు, చేపల పెంపకందారులు, సహకార సంఘాలు"
            ],
            "benefits": [
              "జనరల్ వర్గానికి 40%, SC/ST/మహిళలకు 60% ఆర్థిక సబ్సిడీ",
              "₹5 లక్షల వరకు ప్రమాద భీమా రక్షణ"
            ],
            "documents": [
              "ఆధార్ కార్డ్",
              "చేపల పెంపకం లైసెన్స్/చెరువు భూమి పత్రాలు",
              "బ్యాంక్ వివరాలు"
            ]
          },
          "rythu-bharosa": {
            "title": "YSR రైతు భరోసా - PM KISAN (ఆంధ్రప్రదేశ్)",
            "overview": "ఆంధ్రప్రదేశ్ రైతులకు మరియు అర్హులైన కౌలు రైతులకు ఏటా ₹13,500 ఆర్థిక సాయం అందించే పథకం.",
            "eligibility": [
              "ఆంధ్రప్రదేశ్ లోని సొంత భూమి కలిగిన రైతులు మరియు CCRC కౌలు రైతులు"
            ],
            "benefits": [
              "ఏటా ₹13,500 ఆర్థిక సాయం (ఖరీఫ్ ముందు ₹7,500, రబీ ముందు ₹4,000, సంక్రాంతికి ₹2,000)"
            ],
            "documents": [
              "ఆధార్ కార్డ్",
              "పట్టాదార్ పాస్ పుస్తకం / CCRC కౌలు కార్డ్",
              "బ్యాంక్ పాస్ బుక్"
            ]
          },
          "rythu-bandhu": {
            "title": "రైతు బంధు పథకం (తెలంగాణ)",
            "overview": "తెలంగాణలోని పట్టాదారు రైతులకు ఎకరానికి ఏటా ₹10,000 పెట్టుబడి సాయం అందించే పథకం.",
            "eligibility": [
              "తెలంగాణలోని పట్టాదారు రైతులందరూ అర్హులు"
            ],
            "benefits": [
              "ఎకరానికి ఖరీఫ్‌లో ₹5,000 + రబీలో ₹5,000 నేరుగా బ్యాంక్ ఖాతాలో జమ"
            ],
            "documents": [
              "తెలంగాణ పట్టాదార్ పాస్ పుస్తకం",
              "ఆధార్ కార్డ్",
              "బ్యాంక్ ఖాతా వివరాలు"
            ]
          }
        },
        "shops": {
          "s1": {
            "name": "శ్రీ లక్ష్మి అగ్రి ఇన్‌పుట్స్ & ఫెర్టిలైజర్ స్టోర్",
            "address": "మెయిన్ రోడ్, APMC మార్కెట్ యార్డ్ దగ్గర, గుంటూరు, AP 522001"
          },
          "s2": {
            "name": "కిసాన్ క్రాప్ ప్రొటెక్షన్ & పెస్టిసైడ్స్ సెంటర్",
            "address": "స్టేషన్ రోడ్, గుంటూరు, AP 522002"
          },
          "s3": {
            "name": "రైతు సేవా కేంద్రం & ఫార్మ్ ఎక్విప్‌మెంట్ స్టోర్",
            "address": "RTC బస్ స్టాండ్ కాంప్లెక్స్, గుంటూరు, AP 522001"
          },
          "s4": {
            "name": "జై కిసాన్ ఆర్గానిక్ ఫెర్టిలైజర్స్ & సీడ్స్ డిపో",
            "address": "ఏనుమాముల మార్కెట్ రోడ్, వరంగల్, TS 506002"
          },
          "s5": {
            "name": "కావేరి అగ్రి టెక్ & డ్రిప్ ఎక్విప్‌మెంట్",
            "address": "APMC యార్డ్ గేట్, కోలార్, KA 563101"
          }
        }
      },
      "severity": {
        "Low": "తక్కువ",
        "Moderate": "మధ్యస్థ",
        "High": "అధికం",
        "Critical": "తీవ్రమైన"
      },
      "profile": {
        "title": "రైతు ప్రొఫైల్",
        "subtitle": "గుర్తించబడిన స్మార్ట్ రైతు",
        "personalInfo": "వ్యక్తిగత వివరాలు",
        "name": "పూర్తి పేరు",
        "phone": "మొబైల్ సంఖ్య",
        "state": "రాష్ట్రం",
        "district": "జిల్లా",
        "preferredLang": "ప్రాధాన్య భాష",
        "primaryCrop": "ప్రధాన పంట",
        "saveChanges": "వివరాలు సేవ్ చేయండి"
      },
      "history": {
        "title": "స్కాన్ చరిత్ర",
        "subtitle": "మీరు విశ్లేషించిన పంట వ్యాధి నివేదికలు",
        "noHistory": "ఇంతవరకు ఏ పంట వ్యాధి స్కాన్‌లు చేయలేదు.",
        "viewReport": "పూర్తి నివేదిక చూడండి"
      }
    }
  },
  "hi": {
    "translation": {
      "appName": "कृषिदृष्टि AI",
      "tagline": "भारतीय किसानों के लिए स्मार्ट AI कृषि सहायक",
      "nav": {
        "home": "होम",
        "dashboard": "डैशबोर्ड",
        "scanner": "फसल रोग स्कैनर",
        "chat": "AI कृषि सहायक",
        "weather": "मौसम",
        "schemes": "सरकारी योजनाएं",
        "market": "मंडी भाव",
        "shops": "निकटतम दुकानें",
        "helpline": "हेल्पलाइन",
        "profile": "प्रोफाइल",
        "history": "स्कैन इतिहास",
        "login": "लॉगइन",
        "register": "रजिस्टर",
        "logout": "लॉगआउट"
      },
      "hero": {
        "badge": "AI-संचालित स्मार्ट कृषि सहायक",
        "title": "कृत्रिम बुद्धिमत्ता से करें स्मार्ट खेती",
        "subtitle": "फसल की बीमारियों को तुरंत पहचानें, विशेषज्ञ सलाह लें, मौसम पूर्वानुमान देखें और अपनी भाषा में मंडी भाव जानें।",
        "scanButton": "फसल की पत्ती स्कैन करें",
        "assistantButton": "AI सहायक से बात करें",
        "accuracyMetric": "95%+ सटीक AI",
        "languagesMetric": "6 भारतीय भाषाएं",
        "guidanceMetric": "24/7 किसान वॉयस गाइड"
      },
      "home": {
        "servicesTitle": "डिजिटल कृषि सेवाएं",
        "servicesSubtitle": "फसल स्वास्थ्य, मौसम, मंडी भाव और सरकारी सहायता सब एक ही मंच पर।",
        "exploreFeature": "विशेषता देखें",
        "dailyTipBadge": "दैनिक कृषि सलाह",
        "dailyTipTitle": "नीम-लेपित यूरिया का प्रयोग",
        "dailyTipDesc": "नाइट्रोजन को 3 किस्तों में देने से उर्वरक दक्षता में 25% तक सुधार होता है।",
        "dailyTipButton": "किसान डैशबोर्ड पर जाएं",
        "helplineTitle": "आपातकालीन सहायता चाहिए?",
        "helplineDesc": "किसान कॉल सेंटर (1551) पर कॉल करें।",
        "helplineButton": "हेल्पलाइन नंबर देखें",
        "scannerDesc": "तुरंत फसल रोग निदान एवं उपचार योजना",
        "chatDesc": "अपनी मातृभाषा में कृषि प्रश्न पूछें",
        "weatherDesc": "सटीक मौसम एवं छिड़काव चेतावनी",
        "marketDesc": "देशभर की APMC मंडियों के लाइव भाव",
        "schemesDesc": "PM-KISAN और PMFBY जैसी वित्तीय योजनाएं",
        "shopsDesc": "पास की खाद, बीज एवं कीटनाशक दुकानें"
      },
      "dashboard": {
        "badge": "स्मार्ट किसान डैशबोर्ड",
        "welcome": "नमस्ते",
        "location": "स्थान",
        "preferredLang": "चुनी गई भाषा",
        "scannerBtn": "रोग स्कैनर",
        "todayTipBadge": "आज की सलाह",
        "ipmTitle": "एकीकृत कीट प्रबंधन (IPM)",
        "ipmDesc": "शुरुआती चरण में पीले और नीले चिपचिपे ट्रैप लगाकर रसचूसक कीटों को नियंत्रित करें।",
        "leafScanTitle": "तुरंत पत्ती स्कैन",
        "leafScanDesc": "बीमार पत्ती का फोटो लें और KrishiDrishti CNN से उपचार प्राप्त करें।",
        "startScanBtn": "स्कैन शुरू करें",
        "assistantTitle": "AI वॉयस सहायक",
        "assistantDesc": "खाद, उर्वरक, मौसम एवं योजनाओं पर प्रश्न पूछें।",
        "chatAiBtn": "AI से बात करें",
        "recentScansTitle": "हाल के फसल स्कैन",
        "viewHistory": "पूरा इतिहास देखें",
        "noScans": "अभी तक कोई स्कैन नहीं हुआ है।",
        "firstScanBtn": "पहला स्कैन करें",
        "confidence": "सटीकता",
        "nearbyShopsTitle": "निकटतम कृषि दुकानें",
        "nearbyShopsSubtitle": "उर्वरक एवं बीज की दुकानें",
        "viewAll": "सभी देखें",
        "schemesTitle": "सरकारी कृषि योजनाएं",
        "schemesSubtitle": "वित्तीय सहायता और फसल बीमा",
        "browseSchemes": "योजनाएं देखें",
        "applyPortal": "पोर्टल पर आवेदन करें",
        "greeting": "नमस्ते, {{name}}! 👋",
        "farmerFallback": "किसान भाई",
        "selectLocation": "अपना स्थान चुनें",
        "detectGps": "जीपीएस स्थान खोजें",
        "locationNotSet": "कोई स्थान नहीं चुना गया"
      },
      "scanner": {
        "title": "AI फसल रोग पहचान",
        "subtitle": "रोग की पहचान और उपचार योजना के लिए पत्ती का फोटो अपलोड करें।",
        "takePhoto": "फोटो खींचें",
        "uploadPhoto": "इमेज अपलोड करें",
        "analyzing": "KrishiDrishti CNN जांच कर रहा है...",
        "reportTitle": "फसल निदान रिपोर्ट",
        "confidence": "सटीकता स्कोर",
        "severity": "गंभीरता स्तर",
        "symptoms": "लक्षण",
        "causes": "संभावित कारण",
        "chemical": "रासायनिक उपचार",
        "organic": "जैविक उपाय",
        "fertilizers": "उर्वरक प्रबंधन",
        "prevention": "बचाव के उपाय",
        "smartRec": "स्मार्ट सुझाव",
        "saveReport": "रिपोर्ट सुरक्षित करें",
        "savedSuccess": "रिपोर्ट प्रोफाइल में सुरक्षित हो गई!",
        "readAloud": "रिपोर्ट पढ़कर सुनाएं",
        "selectPhotoError": "कृपया पहले पत्ती की फोटो चुनें।",
        "generateReportError": "रिपोर्ट तैयार करने में विफलता। कृपया पुनः प्रयास करें।",
        "analysisError": "फसल विश्लेषण में त्रुटि। कृपया स्पष्ट चित्र अपलोड करें।"
      },
      "market": {
        "liveTitle": "लाइव मंडी भाव",
        "title": "कृषि मंडी भाव",
        "subtitle": "भारत की APMC मंडियों में फसलों के आज के ताजा भाव",
        "selectState": "राज्य चुनें",
        "selectDistrict": "जिला चुनें",
        "selectMarket": "मंडी / बाजार चुनें",
        "allStates": "सभी राज्य",
        "allDistricts": "सभी जिले",
        "allMarkets": "सभी मंडियां",
        "searchCrop": "फसल का नाम खोजें",
        "cropName": "फसल का नाम",
        "minPrice": "न्यूनतम मूल्य",
        "maxPrice": "अधिकतम मूल्य",
        "modalPrice": "औसत/मॉडल मूल्य",
        "arrivalQty": "आवक मात्रा",
        "unit": "इकाई",
        "lastUpdated": "अंतिम अपडेट",
        "trend": "रुझान",
        "stable": "स्थिर",
        "minMax": "न्यूनतम - अधिकतम मूल्य",
        "loading": "लाइव मंडी भाव लोड हो रहे हैं...",
        "noData": "आपके चयन के लिए कोई भाव उपलब्ध नहीं हैं।",
        "error": "मंडी भाव लोड करने में त्रुटि।",
        "bags": "बोरी",
        "quintals": "क्विंटल",
        "boxes": "डिब्बे",
        "bunch": "गुच्छे",
        "today": "आज",
        "yesterday": "कल",
        "todayRates": "आज के मंडी भाव",
        "viewAll": "सभी भाव देखें"
      },
      "weather": {
        "badge": "लाइव मौसम पूर्वानुमान",
        "title": "कृषि मौसम एवं छिड़काव सलाह",
        "subtitle": "सटीक मौसम पूर्वानुमान और खेती की स्मार्ट सलाह",
        "selectState": "राज्य चुनें",
        "selectDistrict": "जिला चुनें",
        "useGps": "वर्तमान GPS स्थान चुनें",
        "locating": "स्थान खोजा जा रहा है...",
        "temp": "तापमान",
        "humidity": "नमी (आर्द्रता)",
        "rainProb": "बारिश की संभावना",
        "windSpeed": "हवा की गति",
        "uvIndex": "यूवी इंडेक्स",
        "condition": "स्थिति",
        "sunrise": "सूर्योदय",
        "sunset": "सूर्यास्त",
        "adviceTitle": "मौसम आधारित कृषि सलाह",
        "hourlyTitle": "प्रति घंटे का पूर्वानुमान",
        "weeklyTitle": "7 दिनों का मौसम",
        "loading": "मौसम की जानकारी लोड हो रही है...",
        "error": "मौसम विवरण प्राप्त नहीं हो सका।",
        "detecting": "जीपीएस खोज रहा है...",
        "detectGps": "जीपीएस स्थान खोजें",
        "selectLocation": "स्थान चुनें",
        "currentLocation": "वर्तमान स्थान",
        "refresh": "ताज़ा करें",
        "rainProbability": "बारिश की संभावना",
        "wind": "हवा की गति",
        "hourlyForecast": "घंटेवार पूर्वानुमान",
        "weeklyForecast": "7-दिवसीय मौसम पूर्वानुमान",
        "farmingAdvice": "कृषि सलाह",
        "alerts": "मौसम चेतावनी",
        "rain": "बारिश",
        "liveForecast": "मौसम रिपोर्ट",
        "alertsTitle": "मौसम आपातकालीन चेतावनी",
        "conditions": {
          "Clear Sky": "साफ आसमान",
          "Mainly Clear": "मुख्यतः साफ",
          "Partly Cloudy": "आंशिक रूप से बादल",
          "Overcast": "घने बादल",
          "Foggy": "कोहरा",
          "Light Drizzle": "हल्की बूंदाबांदी",
          "Moderate Drizzle": "मध्यम बूंदाबांदी",
          "Heavy Drizzle": "तेज बूंदाबांदी",
          "Light Rain": "हल्की बारिश",
          "Moderate Rain": "मध्यम बारिश",
          "Heavy Rain": "भारी बारिश",
          "Light Snow": "हल्की बर्फबारी",
          "Moderate Snow": "मध्यम बर्फबारी",
          "Heavy Snow": "भारी बर्फबारी",
          "Light Showers": "हल्की बौछारें",
          "Moderate Showers": "मध्यम बौछारें",
          "Heavy Showers": "तेज बौछारें",
          "Thunderstorm": "गरज के साथ तूफान",
          "Thunderstorm with Hail": "ओलावृष्टि के साथ तूफान",
          "Heavy Thunderstorm with Hail": "भारी ओलावृष्टि",
          "Unknown": "अज्ञात"
        },
        "days": {
          "today": "आज",
          "tomorrow": "कल",
          "mon": "सोम",
          "tue": "मंगल",
          "wed": "बुध",
          "thu": "गुरु",
          "fri": "शुक्र",
          "sat": "शनि",
          "sun": "रवि"
        },
        "geoNotSupported": "आपके ब्राउज़र में जीपीएस लोकेशन समर्थित नहीं है।",
        "geoError": "आपके वर्तमान स्थान का मौसम प्राप्त नहीं हो सका।"
      },
      "schemes": {
        "badge": "वित्तीय सहायता",
        "title": "सरकारी कृषि योजनाएं",
        "subtitle": "केंद्र एवं राज्य सरकार की किसान कल्याण योजनाएं",
        "selectState": "राज्य के अनुसार फिल्टर करें",
        "allStates": "समस्त भारत एवं राज्य योजनाएं",
        "searchPlaceholder": "योजना का नाम या शब्द खोजें...",
        "categories": {
          "all": "सभी योजनाएं",
          "crop": "फसल सहायता",
          "irrigation": "सिंचाई योजनाएं",
          "insurance": "फसल बीमा (Fasal Bima)",
          "loans": "ऋण एवं केसीसी (KCC)",
          "subsidies": "सब्सिडी एवं उर्वरक",
          "women": "महिला किसान",
          "dairy": "डेयरी विकास",
          "fisheries": "मत्स्य पालन"
        },
        "overview": "योजना विवरण",
        "eligibility": "पात्रता",
        "benefits": "मुख्य लाभ",
        "documents": "आवश्यक दस्तावेज",
        "officialWebsite": "आधिकारिक वेबसाइट",
        "applyBtn": "पोर्टल पर आवेदन करें",
        "loading": "सरकारी योजनाएं लोड हो रही हैं...",
        "noData": "कोई योजना नहीं मिली।"
      },
      "shops": {
        "badge": "कृषि दुकान खोजक",
        "title": "निकटतम कृषि दुकानें",
        "subtitle": "पास की सत्यापित खाद, बीज एवं कीटनाशक दुकानें खोजें",
        "selectState": "राज्य",
        "selectDistrict": "जिला",
        "selectPlace": "स्थान / शहर",
        "useGps": "GPS स्थान का उपयोग करें",
        "locating": "स्थान खोजा जा रहा है...",
        "categories": {
          "all": "सभी दुकानें",
          "fertilizer_seed": "खाद एवं बीज",
          "pesticides": "कीटनाशक",
          "equipment": "मशीनरी एवं उपकरण"
        },
        "distance": "दूरी",
        "timing": "समय",
        "phone": "फोन नंबर",
        "address": "पता",
        "viewMap": "गूगल मैप्स पर देखें",
        "loading": "दुकानें लोड हो रही हैं...",
        "noData": "इस क्षेत्र में कोई दुकान नहीं मिली।",
        "geoError": "जीपीएस स्थान नहीं मिला। चयनित क्षेत्र की दुकानें दिखाई जा रही हैं।"
      },
      "assistant": {
        "greeting": "नमस्ते! मैं आपका कृषिदृष्टि AI सहायक हूं। अपनी भाषा में खेती से जुड़ा प्रश्न पूछें!",
        "voiceNavScanner": "फसल रोग स्कैनर खोला जा रहा है...",
        "voiceNavDashboard": "किसान डैशबोर्ड पर जाया जा रहा है...",
        "voiceNavWeather": "मौसम पूर्वानुमान खोला जा रहा है...",
        "voiceNavMarket": "मंडी भाव लोड हो रहे हैं...",
        "chatPlaceholder": "खाद, बीज, रोग या मौसम के बारे में पूछें...",
        "send": "भेजें",
        "listening": "आपकी भाषा सुन रहा है... रोकने के लिए माइक दबाएं।",
        "startListen": "बोलकर पूछें",
        "fallbackReply": "नमस्ते! मैं आपका कृषि मित्र हूँ। कृपया अपना प्रश्न पूछें।",
        "voiceHeader": "एआई वॉयस असिस्टेंट",
        "voiceSubheader": "अपनी भाषा में बोलकर कृषि प्रश्न पूछें",
        "thinking": "एआई सोच रहा है...",
        "speakNow": "अब बोलें...",
        "stopListening": "सुनना बंद करें",
        "tapToSpeak": "बोलने के लिए माइक दबाएं",
        "muteSpeech": "आवाज बंद करें",
        "quickPrompts": "त्वरित प्रश्न",
        "title": "एआई कृषि सहायक",
        "subtitle": "फसल रोग, उर्वरक, मौसम और योजनाओं पर प्रश्न पूछें",
        "inputPlaceholder": "अपना कृषि प्रश्न यहाँ टाइप करें..."
      },
      "auth": {
        "loginTitle": "पुनः स्वागत है",
        "loginSubtitle": "लॉगइन करें और AI सेवाओं का लाभ उठाएं",
        "registerTitle": "कृषिदृष्टि AI से जुड़ें",
        "registerSubtitle": "अपना किसान खाता बनाएं",
        "forgotTitle": "पासवर्ड रीसेट करें",
        "forgotSubtitle": "अपना पंजीकृत मोबाइल नंबर दर्ज करें",
        "fullName": "पूरा नाम",
        "phone": "मोबाइल नंबर",
        "email": "ईमेल पता",
        "password": "पासवर्ड",
        "confirmPassword": "पासवर्ड की पुष्टि करें",
        "state": "राज्य",
        "district": "जिला",
        "primaryCrop": "मुख्य फसल",
        "landSize": "भूमि (एकड़)",
        "language": "चुनी गई भाषा",
        "loginBtn": "लॉगइन",
        "registerBtn": "रजिस्टर करें",
        "sendOtpBtn": "ओटीपी भेजें",
        "rememberMe": "मुझे याद रखें",
        "forgotPasswordLink": "पासवर्ड भूल गए?",
        "dontHaveAccount": "खाता नहीं है?",
        "alreadyHaveAccount": "पहले से खाता है?",
        "backToLogin": "लॉगइन पर वापस जाएं"
      },
      "footer": {
        "brandDesc": "AI-संचालित कृषि मंच जो 6 भारतीय भाषाओं में फसल रोग निदान, वॉयस सहायता और मंडी भाव प्रदान करता है।",
        "quickServices": "त्वरित सेवाएं",
        "farmerHelpline": "किसान हेल्पलाइन",
        "kisanCallCenter": "किसान कॉल सेंटर: 1551",
        "callCenterDesc": "निःशुल्क 24/7 राष्ट्रीय किसान सहायता केंद्र।",
        "callNumber": "कॉल करें 1800-180-1551",
        "accessibilityTitle": "सुरक्षा एवं सुगमता",
        "encryptedSessions": "सुरक्षित लॉगइन",
        "supportedLangs": "समर्थित भाषाएं: अंग्रेजी, तेलुगु, हिंदी, तमिल, कन्नड़, मलयालम",
        "screenReader": "स्क्रीन रीडर सक्षम",
        "contrastEnabled": "डार्क मोड सक्षम",
        "copyright": "© 2026 कृषिदृष्टि AI. सर्वाधिकार सुरक्षित।",
        "builtWithLove": "भारतीय किसानों के लिए समर्पित ❤️"
      },
      "cameraModal": {
        "headerTitle": "कैमरा स्कैनर",
        "leafPositionGuideline": "पत्ती को फ्रेम के बीच रखें",
        "retakePhoto": "पुनः फोटो लें",
        "analyzeLeaf": "जांच करें",
        "switchCamera": "कैमरा बदलें",
        "capturePhoto": "फोटो खींचें",
        "cameraError": "कैमरा उपलब्ध नहीं है।"
      },
      "accessibility": {
        "readPage": "पेज पढ़ें",
        "stopReading": "रोकें",
        "largeText": "बड़ा टेक्स्ट",
        "darkTheme": "डार्क मोड",
        "lightTheme": "लाइट मोड",
        "enabled": "सक्षम",
        "disabled": "अक्षम"
      },
      "data": {
        "states": {
          "Andhra Pradesh": "आंध्र प्रदेश",
          "Telangana": "तेलंगाना",
          "Karnataka": "कर्नाटक",
          "Tamil Nadu": "तमिलनाडु",
          "Kerala": "केरल",
          "Maharashtra": "महाराष्ट्र",
          "All India": "अखिल भारतीय योजनाएं"
        },
        "districts": {
          "Guntur": "गुंटूर",
          "Kurnool": "कुर्नूल",
          "Anantapur": "अनंतपुर",
          "Warangal": "वरंगल",
          "Nizamabad": "निज़ामाबाद",
          "Karimnagar": "करीमनगर",
          "Kolar": "कोलार",
          "Shivamogga": "शिवमोग्गा",
          "Chitradurga": "चित्रदुर्ग",
          "Erode": "ईरोड",
          "Tiruchirappalli": "तिरुचिरापल्ली",
          "Wayanad": "वायनाड",
          "Kottayam": "कोट्टायम",
          "Nashik": "नासिक",
          "Latur": "लातूर"
        },
        "crops": {
          "Paddy (Common)": "धान (सामान्य किस्म)",
          "Red Chilli (Teja)": "लाल मिर्च (तेजा किस्म)",
          "Cotton (Long Staple)": "कपास (लंबे रेशे वाली)",
          "Groundnut (Pod)": "मूंगफली फली",
          "Cotton (Medium Staple)": "कपास (मध्यम किस्म)",
          "Maize (Yellow)": "मक्का (पीला)",
          "Turmeric (Finger)": "हल्दी की गांठ",
          "Paddy (Grade A)": "धान (ग्रेड A)",
          "Tomato": "टमाटर",
          "Arecanut (Rashi)": "सुपारी",
          "Onion (Red)": "प्याज (लाल)",
          "Banana (Poovan)": "केला (पूवन)",
          "Black Pepper": "काली मिर्च",
          "Rubber (RSS-4)": "रबड़ (RSS-4)",
          "Onion (Nashik Red)": "नासिक लाल प्याज",
          "Soyabean (Yellow)": "सोयाबीन (पीला)"
        },
        "markets": {
          "Guntur APMC Mandi": "गुंटूर APMC मंडी",
          "Guntur Yard": "गुंटूर यार्ड",
          "Kurnool Market Yard": "कुर्नूल मार्केट यार्ड",
          "Anantapur APMC": "अनंतपुर APMC",
          "Warangal Enamamula Market": "वरंगल एनमामूला मंडी",
          "Nizamabad APMC": "निज़ामाबाद APMC",
          "Nizamabad Yard": "निज़ामाबाद यार्ड",
          "Karimnagar APMC": "करीमनगर APMC",
          "Kolar APMC Mandi": "कोलार APMC मंडी",
          "Shivamogga APMC": "शिवमोग्गा APMC",
          "Chitradurga Mandi": "चित्रदुर्ग मंडी",
          "Erode APMC": "ईरोड APMC",
          "Trichy Central Market": "तिरुच्ची सेंट्रल मार्केट",
          "Kalpetta Market": "कल्पेट्टा मार्केट",
          "Kottayam Rubber Board": "कोट्टायम रबड़ बोर्ड",
          "Lasalgaon APMC": "लासलगांव APMC",
          "Latur APMC Mandi": "लातूर APMC मंडी"
        },
        "weatherConditions": {
          "Scattered Showers": "छिटपुट वर्षा",
          "Scattered Rains": "छिटपुट बारिश",
          "Partly Cloudy": "आंशिक रूप से बादलों से घिरा",
          "Sunny & Clear": "धूप और साफ",
          "Thunderstorm": "गर्जन के साथ बारिश",
          "Light Rains": "हल्की बारिश",
          "Sunny": "धूप"
        },
        "days": {
          "Today": "आज",
          "Tomorrow": "कल",
          "Thu": "गुरुवार",
          "Fri": "शुक्रवार",
          "Sat": "शनिवार",
          "Sun": "रविवार",
          "Mon": "सोमवार"
        },
        "weatherAdvice": [
          "65% बारिश की संभावना के कारण अगले 24 घंटे तक रासायनिक छिड़काव टालें।",
          "धान के खेतों में जलजमाव और सड़न से बचने के लिए जल निकासी व्यवस्था दुरुस्त रखें।",
          "सुबह की नमी अधिक होने से मिर्च की फसल में फफूंद जनित रोगों की निगरानी करें।",
          "शाम के समय दालों की रोपाई के लिए मौसम अनुकूल है।"
        ],
        "weatherAlerts": [
          {
            "title": "मध्यम बारिश की चेतावनी",
            "description": "अगले 24 घंटों में बारिश की संभावना है। कीटनाशक छिड़काव स्थगित रखें।"
          },
          {
            "title": "अनुकूल मिट्टी की नमी",
            "description": "वर्तमान आद्रता (78%) धान की पौध और मिर्च के पौधों की वृद्धि के लिए अनुकूल है।"
          }
        ],
        "schemes": {
          "pm-kisan": {
            "title": "प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)",
            "overview": "छोटे और सीमांत किसान परिवारों को प्रति वर्ष ₹6,000 की वित्तीय सहायता 3 किस्तों में सीधे बैंक खाते में दी जाती है।",
            "eligibility": [
              "भारत के सभी योग्य भूमिधारक किसान परिवार",
              "उच्च आय करदाताओं को छोड़कर"
            ],
            "benefits": [
              "₹6,000 प्रति वर्ष 3 समान किस्तों (₹2,000) में सीधे बैंक खाते में",
              "पारदर्शिता के साथ DBT हस्तांतरण"
            ],
            "documents": [
              "आधार कार्ड",
              "भूमि मालिकाना दस्तावेज (खसरा/खतौनी)",
              "आधार लिंक बैंक खाता",
              "मोबाइल नंबर"
            ]
          },
          "pmfby": {
            "title": "प्रधानमंत्री फसल बीमा योजना (PMFBY)",
            "overview": "बुआई से पहले से लेकर कटाई के बाद तक प्राकृतिक आपदाओं से फसल नुकसान का संपूर्ण बीमा कवरेज।",
            "eligibility": [
              "अधिसूचित क्षेत्रों में अधिसूचित फसल उगाने वाले सभी किसान एवं बटाईदार"
            ],
            "benefits": [
              "कम प्रीमियम: खरीफ 2%, रबी 1.5%, व्यावसायिक फसलें 5%",
              "शेष प्रीमियम सरकार द्वारा वहन",
              "फसल नुकसान का पूरा बीमा दावा"
            ],
            "documents": [
              "भूमि रिकॉर्ड (खसरा/खतौनी)",
              "बुआई प्रमाण पत्र",
              "आधार कार्ड एवं बैंक पासबुक",
              "रद्द चेक"
            ]
          },
          "kcc": {
            "title": "किसान क्रेडिट कार्ड (KCC) योजना",
            "overview": "किसानों को फसल खेती और कटाई के बाद के खर्चों के लिए रियायती ब्याज दर पर अल्पकालिक ऋण।",
            "eligibility": [
              "व्यक्तिगत किसान / संयुक्त खातेदार",
              "पट्टेदार किसान एवं बटाईदार",
              "स्वयं सहायता समूह (SHG)"
            ],
            "benefits": [
              "₹3 लाख तक के ऋण पर 7% रियायती ब्याज दर",
              "समय पर भुगतान करने पर 3% की अतिरिक्त छूट (प्रभावी ब्याज 4%)",
              "₹1.6 लाख तक बिना गारंटी ऋण"
            ],
            "documents": [
              "आवेदन पत्र",
              "पहचान पत्र (आधार/वोटर आईडी)",
              "पता एवं भूमि रिकॉर्ड",
              "पासपोर्ट फोटो"
            ]
          },
          "pmksy": {
            "title": "प्रधानमंत्री कृषि सिंचाई योजना (PMKSY)",
            "overview": "\"प्रति बूंद अधिक फसल\" के तहत ड्रिप और स्प्रिंकलर सिंचाई से जल उपयोग दक्षता में सुधार।",
            "eligibility": [
              "सिंचाई योग्य भूमि और जल स्रोत वाले किसान"
            ],
            "benefits": [
              "छोटे/सीमांत किसानों को 55% और अन्य किसानों को 45% सब्सिडी",
              "30-50% जल की बचत"
            ],
            "documents": [
              "भूमि स्वामित्व दस्तावेज",
              "जल स्रोत का प्रमाण",
              "आधार एवं बैंक विवरण"
            ]
          },
          "mky": {
            "title": "महिला किसान सशक्तिकरण परियोजना (MKSP)",
            "overview": "कृषि में महिला किसानों की भागीदारी और उत्पादकता बढ़ाने के लिए विशेष योजना।",
            "eligibility": [
              "महिला किसान, महिला स्वयं सहायता समूह (SHG)"
            ],
            "benefits": [
              "जैविक खेती पर 100% मुफ्त प्रशिक्षण",
              "महिला समूहों को वित्तीय पूंजी सहायता"
            ],
            "documents": [
              "आधार कार्ड",
              "SHG सदस्यता कार्ड",
              "बैंक खाता विवरण"
            ]
          },
          "didf": {
            "title": "डेयरी प्रसंस्करण अवसंरचना विकास निधि (DIDF)",
            "overview": "डेयरी किसानों के लिए दुग्ध प्रसंस्करण और शीतलन अवसंरचना का आधुनिकीकरण।",
            "eligibility": [
              "डेयरी सहकारिता समितियां, दुग्ध उत्पादक कंपनियां"
            ],
            "benefits": [
              "6.5% रियायती ब्याज दर पर ऋण",
              "ग्रामीण क्षेत्रों में मिल्क चिलिंग प्लांट की स्थापना"
            ],
            "documents": [
              "समिति पंजीकरण प्रमाण पत्र",
              "परियोजना रिपोर्ट (DPR)",
              "बैंक खाता विवरण"
            ]
          },
          "pmmsy": {
            "title": "प्रधानमंत्री मत्स्य संपदा योजना (PMMSY)",
            "overview": "मत्स्य पालन, तालाब निर्माण और जलीय कृषि के समग्र विकास के लिए प्रमुख योजना।",
            "eligibility": [
              "मछुआरे, मत्स्य पालक, सहकारी समितियां"
            ],
            "benefits": [
              "सामान्य वर्ग को 40% और SC/ST/महिलाओं को 60% वित्तीय सब्सिडी",
              "₹5 लाख तक का दुर्घटना बीमा"
            ],
            "documents": [
              "आधार कार्ड",
              "मत्स्य पालन लाइसेंस/भूमि दस्तावेज",
              "बैंक विवरण"
            ]
          },
          "rythu-bharosa": {
            "title": "YSR रायथू भरोसा - PM KISAN (आंध्र प्रदेश)",
            "overview": "आंध्र प्रदेश के किसानों और पट्टेदार किसानों को प्रति वर्ष ₹13,500 की वित्तीय सहायता।",
            "eligibility": [
              "आंध्र प्रदेश के भूमिधारक किसान एवं पंजीकृत बटाईदार किसान"
            ],
            "benefits": [
              "प्रति वर्ष ₹13,500 की सहायता 3 किस्तों में"
            ],
            "documents": [
              "आधार कार्ड",
              "पट्टादार पासबुक / CCRC कार्ड",
              "बैंक पासबुक"
            ]
          },
          "rythu-bandhu": {
            "title": "रायथू बंधु योजना (तेलंगाना)",
            "overview": "तेलंगाना के किसानों को फसल निवेश सहायता के रूप में प्रति एकड़ ₹10,000 प्रति वर्ष।",
            "eligibility": [
              "तेलंगाना के सभी पट्टादार किसान"
            ],
            "benefits": [
              "खरीफ में ₹5,000 + रबी में ₹5,000 प्रति एकड़ सीधे बैंक खाते में"
            ],
            "documents": [
              "तेलंगाना पट्टादार पासबुक",
              "आधार कार्ड",
              "बैंक खाता विवरण"
            ]
          }
        },
        "shops": {
          "s1": {
            "name": "श्री लक्ष्मी एग्री इनपुट्स एंड फर्टिलाइजर स्टोर",
            "address": "मेन रोड, APMC मार्केट यार्ड के पास, गुंटूर, AP 522001"
          },
          "s2": {
            "name": "किसान क्रॉप प्रोटेक्शन एंड पेस्टिसाइड्स सेंटर",
            "address": "स्टेशन रोड, गुंटूर, AP 522002"
          },
          "s3": {
            "name": "रायथू सेवा केंद्रम एंड फार्म इक्विपमेंट स्टोर",
            "address": "RTC बस स्टैंड कॉम्प्लेक्स, गुंटूर, AP 522001"
          },
          "s4": {
            "name": "जय किसान ऑर्गेनिक फर्टिलाइजर्स एंड सीड्स डिपो",
            "address": "एनमामूला मार्केट रोड, वरंगल, TS 506002"
          },
          "s5": {
            "name": "कावेरी एग्री टेक एंड ड्रिप इक्विपमेंट",
            "address": "APMC यार्ड गेट, कोलार, KA 563101"
          }
        }
      },
      "severity": {
        "Low": "कम",
        "Moderate": "मध्यम",
        "High": "उच्च",
        "Critical": "गंभीर"
      },
      "helpline": {
        "title": "आपातकालीन हेल्पलाइन",
        "subtitle": "किसान सहायता केंद्र एवं आपातकालीन कृषि संपर्क",
        "kisanCenterTitle": "किसान कॉल सेंटर (1551)",
        "kisanCenterDesc": "फसल, कीट एवं कृषि विशेषज्ञों से 24/7 निःशुल्क परामर्श लें।",
        "financialHelpline": "किसान वित्तीय सहायता हेल्पलाइन",
        "vetCare": "पशु चिकित्सा आपातकालीन सेवा",
        "weatherEmergency": "कृषि मौसम आपातकालीन सेवा",
        "callNow": "अभी कॉल करें",
        "tollFree": "टोल फ्री"
      },
      "profile": {
        "title": "किसान प्रोफाइल",
        "subtitle": "सत्यापित स्मार्ट किसान",
        "personalInfo": "व्यक्तिगत विवरण",
        "name": "पूरा नाम",
        "phone": "मोबाइल नंबर",
        "state": "राज्य",
        "district": "जिला",
        "preferredLang": "पसंदीदा भाषा",
        "primaryCrop": "मुख्य फसल",
        "saveChanges": "प्रोफाइल सहेजें"
      },
      "history": {
        "title": "स्कैन इतिहास",
        "subtitle": "आपकी पिछली फसल बीमारी विश्लेषण रिपोर्ट",
        "noHistory": "अभी तक कोई फसल बीमारी स्कैन दर्ज नहीं हुआ है।",
        "viewReport": "पूरी रिपोर्ट देखें"
      }
    }
  },
  "ta": {
    "translation": {
      "appName": "கிருஷ் திருஷ்டி AI",
      "tagline": "இந்திய விவசாயிகளுக்கான ஸ்மார்ட் AI விவசாய உதவியாளர்",
      "nav": {
        "home": "முகப்பு",
        "dashboard": "டேஷ்போர்டு",
        "scanner": "பயிர் நோய் ஸ்கேனர்",
        "chat": "AI விவசாய உதவியாளர்",
        "weather": "வானிலை",
        "schemes": "அரசு திட்டங்கள்",
        "market": "சந்தை விலைகள்",
        "shops": "அருகிலுள்ள கடைகள்",
        "helpline": "அவசர உதவி",
        "profile": "சுயவிவரம்",
        "history": "வரலாறு",
        "login": "லாகின்",
        "register": "பதிவு",
        "logout": "லாக்அவுட்"
      },
      "hero": {
        "badge": "AI-இயங்கும் ஸ்மார்ட் விவசாய உதவியாளர்",
        "title": "செயற்கை நுண்ணறிவுடன் ஸ்மார்ட் விவசாயம்",
        "subtitle": "பயிர் நோய்களை உடனடியாகக் கண்டறியவும், நிபுணர் ஆலோசனைகளைப் பெறவும், சந்தை விலைகளை அறியவும்.",
        "scanButton": "இலையை ஸ்கேன் செய்க",
        "assistantButton": "AI உடன் பேசுங்கள்",
        "accuracyMetric": "95%+ துல்லியமான AI",
        "languagesMetric": "6 இந்திய மொழிகள்",
        "guidanceMetric": "24/7 குரல் வழிகாட்டி"
      },
      "home": {
        "servicesTitle": "முழுமையான டிஜிட்டல் விவசாய சேவைகள்",
        "servicesSubtitle": "பயிர் ஆரோக்கியம், வானிலை, சந்தை விலைகள் ஒரே தளத்தில்.",
        "exploreFeature": "சேவையை காண்க",
        "dailyTipBadge": "இன்றைய விவசாய உதவிக்குறிப்பு",
        "dailyTipTitle": "வேம்பு பூசப்பட்ட யூரியா பயன்பாடு",
        "dailyTipDesc": "நைட்ரஜனை 3 தவணைகளாக இடுவதன் மூலம் 25% உரத் திறனை அதிகரிக்கலாம்.",
        "dailyTipButton": "டேஷ்போர்டிற்குச் செல்க",
        "helplineTitle": "அவசர உதவி தேவையா?",
        "helplineDesc": "கிசான் அழைப்பு மையத்தை (1551) தொடர்பு கொள்ளவும்.",
        "helplineButton": "எண்களைக் காண்க",
        "scannerDesc": "உடனடி AI பயிர் நோய் கண்டறிதல் நிவேதனம்",
        "chatDesc": "உங்கள் தாய்மொழியில் சந்தேகங்களைக் கேட்கலாம்",
        "weatherDesc": "துல்லியமான வானிலை மற்றும் தெளிப்பு எச்சரிக்கைகள்",
        "marketDesc": "நாடு தழுவிய சந்தை விலைகள்",
        "schemesDesc": "PM-KISAN மற்றும் PMFBY நிதி திட்டங்கள்",
        "shopsDesc": "அருகிலுள்ள உரம் மற்றும் விதை கடைகள்"
      },
      "dashboard": {
        "badge": "ஸ்மார்ட் விவசாயி டேஷ்போர்டு",
        "welcome": "வணக்கம்",
        "location": "இடம்",
        "preferredLang": "தேர்ந்தெடுக்கப்பட்ட மொழி",
        "scannerBtn": "நோய் ஸ்கேனர்",
        "todayTipBadge": "இன்றைய குறிப்பு",
        "ipmTitle": "ஒருங்கிணைந்த பயிர் பாதுகாப்பு",
        "ipmDesc": "மஞ்சள் மற்றும் நீல ஒட்டும் அட்டைகளைப் பயன்படுத்தி சாறு உறிஞ்சும் பூச்சிகளைக் கட்டுப்படுத்தலாம்.",
        "leafScanTitle": "உடனடி இலை ஸ்கேன்",
        "leafScanDesc": "பாதிக்கப்பட்ட இலையின் புகைப்படத்தை எடுத்து KrishiDrishti CNN தீர்வுகளைப் பெறுங்கள்.",
        "startScanBtn": "ஸ்கேன் தொடங்குக",
        "assistantTitle": "AI குரல் உதவியாளர்",
        "assistantDesc": "உரம், விதைகள் மற்றும் வானிலை பற்றி 6 மொழிகளில் கேட்கலாம்.",
        "chatAiBtn": "AI உடன் பேசுங்கள்",
        "recentScansTitle": "சமீபத்திய ஸ்கேன்கள்",
        "viewHistory": "முழு வரலாற்றைக் காண்க",
        "noScans": "இன்னும் ஸ்கேன் எதுவும் செய்யப்படவில்லை.",
        "firstScanBtn": "முதல் ஸ்கேன் செய்க",
        "confidence": "துல்லியம்",
        "nearbyShopsTitle": "அருகிலுள்ள கடைகள்",
        "nearbyShopsSubtitle": "உரம் மற்றும் விதை விற்பனையாளர்கள்",
        "viewAll": "அனைத்தையும் காண்க",
        "schemesTitle": "அரசு திட்டங்கள்",
        "schemesSubtitle": "நிதி உதவி மற்றும் பயிர் காப்பீடு",
        "browseSchemes": "திட்டங்களை காண்க",
        "applyPortal": "விண்ணப்பிக்கவும்",
        "greeting": "வணக்கம், {{name}}! 👋",
        "farmerFallback": "விவசாயி",
        "selectLocation": "உங்கள் இடத்தை தேர்ந்தெடுக்கவும்",
        "detectGps": "ஜிபிஎஸ் இடத்தை தேர்ந்தெடுக்கவும்",
        "locationNotSet": "இடம் தேர்ந்தெடுக்கப்படவில்லை"
      },
      "scanner": {
        "title": "AI பயிர் நோய் கண்டறிதல்",
        "subtitle": "நோயைக் கண்டறிய இலையின் புகைப்படத்தைப் பதிவேற்றவும்.",
        "takePhoto": "படம் எடுக்கவும்",
        "uploadPhoto": "படத்தைப் பதிவேற்றவும்",
        "analyzing": "KrishiDrishti CNN ஆய்வு செய்கிறது...",
        "reportTitle": "பயிர் கண்டறிதல் அறிக்கை",
        "confidence": "துல்லிய மதிப்பெண்",
        "severity": "தீவிர நிலை",
        "symptoms": "அறிகுறிகள்",
        "causes": "காரணங்கள்",
        "chemical": "ரசாயன சிகிச்சை",
        "organic": "இயற்கை தீர்வுகள்",
        "fertilizers": "உர மேலாண்மை",
        "prevention": "முன்னெச்சரிக்கைகள்",
        "smartRec": "ஸ்மார்ட் ஆலோசனைகள்",
        "saveReport": "அறிக்கையைச் சேமிக்கவும்",
        "savedSuccess": "அறிக்கை சேமிக்கப்பட்டது!",
        "readAloud": "வாசித்துக் காட்டவும்",
        "selectPhotoError": "தயவுசெய்து முதலில் இலையின் புகைப்படத்தைத் தேர்ந்தெடுக்கவும்.",
        "generateReportError": "அறிக்கை உருவாக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.",
        "analysisError": "பயிர் பகுப்பாய்வு பிழை. தெளிவான படத்தை பதிவேற்றவும்."
      },
      "market": {
        "liveTitle": "நேரலை சந்தை விலைகள்",
        "title": "விவசாய சந்தை விலைகள்",
        "subtitle": "இந்தியாவின் APMC சந்தைகளில் இன்றைய பயிர் விலைகள்",
        "selectState": "மாநிலத்தை தேர்ந்தெடுக்கவும்",
        "selectDistrict": "மாவட்டத்தை தேர்ந்தெடுக்கவும்",
        "selectMarket": "சந்தை / மண்டியை தேர்ந்தெடுக்கவும்",
        "allStates": "அனைத்து மாநிலங்கள்",
        "allDistricts": "அனைத்து மாவட்டங்கள்",
        "allMarkets": "அனைத்து சந்தைகள்",
        "searchCrop": "பயிர் பெயரைத் தேடவும்",
        "cropName": "பயிர் பெயர்",
        "minPrice": "குறைந்தபட்ச விலை",
        "maxPrice": "அதிகபட்ச விலை",
        "modalPrice": "சராசரி விலை",
        "arrivalQty": "வரத்து அளவு",
        "unit": "அலகு",
        "lastUpdated": "கடைசி புதுப்பிப்பு",
        "trend": "போக்கு",
        "stable": "நிலையானது",
        "minMax": "குறைந்த - அதிக விலை",
        "loading": "சந்தை விலைகள் ஏற்றப்படுகின்றன...",
        "noData": "நீங்கள் தேர்ந்தெடுத்ததற்கு விலைகள் எதுவும் இல்லை.",
        "error": "சந்தை விலைகளை ஏற்றுவதில் பிழை.",
        "bags": "பைகள்",
        "quintals": "குவிண்டால்",
        "boxes": "பெட்டிகள்",
        "bunch": "தாறுகள்",
        "today": "இன்று",
        "yesterday": "நேற்று",
        "todayRates": "இன்றைய சந்தை விலைகள்",
        "viewAll": "அனைத்து விலைகளையும் காண்க"
      },
      "weather": {
        "badge": "நேரலை வானிலை",
        "title": "விவசாய வானிலை & தெளிப்பு எச்சரிக்கைகள்",
        "subtitle": "துல்லியமான வானிலை மற்றும் ஸ்மார்ட் ஆலோசனைகள்",
        "selectState": "மாநிலத்தை தேர்ந்தெடுக்கவும்",
        "selectDistrict": "மாவட்டத்தை தேர்ந்தெடுக்கவும்",
        "useGps": "தற்போதைய GPS இடத்தை கண்டறி",
        "locating": "இடம் கண்டறியப்படுகிறது...",
        "temp": "வெப்பநிலை",
        "humidity": "ஈரப்பதம்",
        "rainProb": "மழை வாய்ப்பு",
        "windSpeed": "காற்றின் வேகம்",
        "uvIndex": "யுவி குறியீடு",
        "condition": "நிலைமை",
        "sunrise": "சூரியோதயம்",
        "sunset": "சூரிய அஸ்தமனம்",
        "adviceTitle": "வானிலை சார்ந்த விவசாய ஆலோசனை",
        "hourlyTitle": "மணிநேர கணிப்பு",
        "weeklyTitle": "7 நாட்கள் வானிலை",
        "loading": "வானிலை தகவல்கள் ஏற்றப்படுகின்றன...",
        "error": "வானிலை விவரங்களைப் பெற முடியவில்லை.",
        "detecting": "ஜிபிஎஸ் கண்டறிகிறது...",
        "detectGps": "ஜிபிஎஸ் இடத்தை தேர்ந்தெடுக்கவும்",
        "selectLocation": "இடத்தை தேர்ந்தெடுக்கவும்",
        "currentLocation": "தற்போதைய இடம்",
        "refresh": "புதுப்பி",
        "rainProbability": "மழை வாய்ப்பு",
        "wind": "காற்றின் வேகம்",
        "hourlyForecast": "மணிநேர கணிப்பு",
        "weeklyForecast": "7 நாள் வானிலை கணிப்பு",
        "farmingAdvice": "விவசாய ஆலோசனைகள்",
        "alerts": "வானிலை எச்சரிக்கைகள்",
        "rain": "மழை",
        "liveForecast": "நேரடி வானிலை",
        "alertsTitle": "வானிலை அவசர எச்சரிக்கை",
        "conditions": {
          "Clear Sky": "தெளிவான வானம்",
          "Mainly Clear": "பெரும்பாலும் தெளிவானது",
          "Partly Cloudy": "பகுதி மேகமூட்டம்",
          "Overcast": "முழு மேகமூட்டம்",
          "Foggy": "பனிமூட்டம்",
          "Light Drizzle": "லேசான தூறல்",
          "Moderate Drizzle": "மிதமான தூறல்",
          "Heavy Drizzle": "கனமான தூறல்",
          "Light Rain": "லேசான மழை",
          "Moderate Rain": "மிதமான மழை",
          "Heavy Rain": "கனமழை",
          "Light Snow": "லேசான பனிப்பொழிவு",
          "Moderate Snow": "மிதமான பனிப்பொழிவு",
          "Heavy Snow": "கனமான பனிப்பொழிவு",
          "Light Showers": "லேசான மழைச்சாரல்",
          "Moderate Showers": "மிதமான சாரல்",
          "Heavy Showers": "கன சாரல்",
          "Thunderstorm": "இடி மின்னலுடன் கூடிய மழை",
          "Thunderstorm with Hail": "ஆலங்கட்டி மழை",
          "Heavy Thunderstorm with Hail": "கடும் ஆலங்கட்டி மழை",
          "Unknown": "தெரியவில்லை"
        },
        "days": {
          "today": "இன்று",
          "tomorrow": "நாளை",
          "mon": "திங்கள்",
          "tue": "செவ்வாய்",
          "wed": "புதன்",
          "thu": "வியாழன்",
          "fri": "வெள்ளி",
          "sat": "சனி",
          "sun": "ஞாயிறு"
        },
        "geoNotSupported": "உங்கள் உலாவி ஜிபிஎஸ் இருப்பிடத்தை ஆதரிக்கவில்லை.",
        "geoError": "உங்கள் தற்போதைய இடத்தின் வானிலையை பெற முடியவில்லை."
      },
      "schemes": {
        "badge": "நிதி உதவி",
        "title": "அரசு விவசாய திட்டங்கள்",
        "subtitle": "மத்திய மற்றும் மாநில அரசு விவசாயி நலத்திட்டங்கள்",
        "selectState": "மாநிலம் வாரியாக வடிக்கவும்",
        "allStates": "அனைத்து இந்தியா & மாநில திட்டங்கள்",
        "searchPlaceholder": "திட்டத்தின் பெயரைத் தேடுக...",
        "categories": {
          "all": "அனைத்து திட்டங்கள்",
          "crop": "பயிர் உதவி",
          "irrigation": "பாசனம்",
          "insurance": "பயிர் காப்பீடு",
          "loans": "கடன்கள் & KCC",
          "subsidies": "மானியங்கள் & உரங்கள்",
          "women": "பெண் விவசாயிகள்",
          "dairy": "பால் பண்ணை",
          "fisheries": "மீன்வளம்"
        },
        "overview": "திட்ட விவரம்",
        "eligibility": "தகுதி",
        "benefits": "முக்கிய நன்மைகள்",
        "documents": "தேவையான ஆவணங்கள்",
        "officialWebsite": "அதிகாரப்பூர்வ இணையதளம்",
        "applyBtn": "விண்ணப்பிக்கவும்",
        "loading": "திட்டங்கள் ஏற்றப்படுகின்றன...",
        "noData": "எந்த திட்டமும் காணப்படவில்லை."
      },
      "shops": {
        "badge": "கடை கண்டறிதல்",
        "title": "அருகிலுள்ள விவசாய கடைகள்",
        "subtitle": "அருகிலுள்ள உரம், விதை மற்றும் பூச்சிக்கொல்லி கடைகள்",
        "selectState": "மாநிலம்",
        "selectDistrict": "மாவட்டம்",
        "selectPlace": "இடம் / ஊர்",
        "useGps": "GPS இடத்தைப் பயன்படுத்தவும்",
        "locating": "இடம் கண்டறியப்படுகிறது...",
        "categories": {
          "all": "அனைத்து கடைகள்",
          "fertilizer_seed": "உரங்கள் & விதைகள்",
          "pesticides": "பூச்சிக்கொல்லிகள்",
          "equipment": "இயந்திரங்கள் & கருவிகள்"
        },
        "distance": "தூரம்",
        "timing": "நேரம்",
        "phone": "தொலைபேசி எண்",
        "address": "முகவரி",
        "viewMap": "கூகிள் மேப்ஸில் காண்க",
        "loading": "கடைகள் ஏற்றப்படுகின்றன...",
        "noData": "இப்பகுதியில் கடைகள் எதுவும் காணப்படவில்லை.",
        "geoError": "ஜிபிஎஸ் இருப்பிடத்தை கண்டறிய முடியவில்லை. தேர்ந்தெடுக்கப்பட்ட பகுதிக்கான கடைகள் காண்பிக்கப்படுகின்றன."
      },
      "assistant": {
        "greeting": "வணக்கம்! நான் உங்கள் கிருஷ் திருஷ்டி AI உதவியாளர். விவசாய கேள்விகளை தமிழில் கேளுங்கள்!",
        "voiceNavScanner": "ஸ்கேனர் திறக்கப்படுகிறது...",
        "voiceNavDashboard": "டேஷ்போர்டிற்குச் செல்கிறது...",
        "voiceNavWeather": "வானிலை திறக்கப்படுகிறது...",
        "voiceNavMarket": "சந்தை விலைகள் ஏற்றப்படுகின்றன...",
        "chatPlaceholder": "உரம், விதைகள், நோய்கள் பற்றி கேளுங்கள்...",
        "send": "அனுப்பு",
        "listening": "கேட்கிறது... நிறுத்த மைக்கை அழுத்தவும்.",
        "startListen": "குரலில் கேளுங்கள்",
        "fallbackReply": "வணக்கம்! நான் உங்கள் விவசாய உதவியாளன். உங்கள் கேள்வியை கேளுங்கள்.",
        "voiceHeader": "AI குரல் உதவியாளன்",
        "voiceSubheader": "உங்கள் மொழியில் பேசுங்கள்",
        "thinking": "AI சிந்திக்கிறது...",
        "speakNow": "இப்போது பேசுங்கள்...",
        "stopListening": "கேட்பதை நிறுத்து",
        "tapToSpeak": "பேச மைக்கை அழுத்தவும்",
        "muteSpeech": "ஒலியை முடக்கு",
        "quickPrompts": "விரைவு கேள்விகள்",
        "title": "AI விவசாய உதவியாளன்",
        "subtitle": "பயிர் நோய்கள், உரங்கள், வானிலை பற்றி கேட்கவும்",
        "inputPlaceholder": "உங்கள் விவசாய கேள்வியை தட்டச்சு செய்யவும்..."
      },
      "auth": {
        "loginTitle": "மீண்டும் வருக",
        "loginSubtitle": "லாகின் செய்து AI சேவைகளைப் பயன்படுத்துங்கள்",
        "registerTitle": "கிருஷ் திருஷ்டி AI இல் இணையுங்கள்",
        "registerSubtitle": "விவசாயி கணக்கை உருவாக்குங்கள்",
        "forgotTitle": "கடவுச்சொல்லை மீட்டமைக்கவும்",
        "forgotSubtitle": "பதிவுசெய்த மொபைல் எண்ணை உள்ளிடவும்",
        "fullName": "முழு பெயர்",
        "phone": "மொபைல் எண்",
        "email": "மின்னஞ்சல்",
        "password": "கடவுச்சொல்",
        "confirmPassword": "கடவுச்சொல்லை உறுதிசெய்க",
        "state": "மாநிலம்",
        "district": "மாவட்டம்",
        "primaryCrop": "முதன்மை பயிர்",
        "landSize": "நில அளவு (ஏக்கர்)",
        "language": "தேர்ந்தெடுக்கப்பட்ட மொழி",
        "loginBtn": "லாகின்",
        "registerBtn": "பதிவுசெய்க",
        "sendOtpBtn": "OTP அனுப்பு",
        "rememberMe": "என்னை நினைவில் கொள்க",
        "forgotPasswordLink": "கடவுச்சொல் மறந்துவிட்டதா?",
        "dontHaveAccount": "கணக்கு இல்லையா?",
        "alreadyHaveAccount": "ஏற்கனவே கணக்கு உள்ளதா?",
        "backToLogin": "லாகினிற்குத் திரும்பு"
      },
      "footer": {
        "brandDesc": "6 இந்திய மொழிகளில் பயிர் நோய் கண்டறிதல், குரல் உதவி மற்றும் சந்தை விலைகளை வழங்கும் AI தளம்.",
        "quickServices": "விரைவு சேவைகள்",
        "farmerHelpline": "விவசாயி உதவி மையம்",
        "kisanCallCenter": "கிசான் அழைப்பு மையம்: 1551",
        "callCenterDesc": "இலவச 24/7 தேசிய உதவி மையம்.",
        "callNumber": "அழைக்கவும் 1800-180-1551",
        "accessibilityTitle": "பாதுகாப்பு & அணுகல்",
        "encryptedSessions": "பாதுகாப்பான லாகின்",
        "supportedLangs": "ஆதரிக்கப்படும் மொழிகள்: ஆங்கிலம், தெலுங்கு, இந்தி, தமிழ், கன்னடம், மலையாளம்",
        "screenReader": "திரை வாசிப்பு வசதி",
        "contrastEnabled": "டார்க் மோட் வசதி",
        "copyright": "© 2026 கிருஷ் திருஷ்டி AI. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
        "builtWithLove": "இந்திய விவசாயிகளுக்காக உருவாக்கப்பட்டது ❤️"
      },
      "cameraModal": {
        "headerTitle": "கேமரா ஸ்கேனர்",
        "leafPositionGuideline": "இலையை சட்டகத்தின் நடுவில் வைக்கவும்",
        "retakePhoto": "மீண்டும் படம் எடுக்கவும்",
        "analyzeLeaf": "ஆய்வு செய்க",
        "switchCamera": "கேமராவை மாற்றவும்",
        "capturePhoto": "படம் எடுக்கவும்",
        "cameraError": "கேமரா கிடைக்கவில்லை."
      },
      "accessibility": {
        "readPage": "பக்கத்தை வாசி",
        "stopReading": "நிறுத்து",
        "largeText": "பெரிய எழுத்துக்கள்",
        "darkTheme": "டார்க் மோட்",
        "lightTheme": "லைட் மோட்",
        "enabled": "செயல்படுத்தப்பட்டது",
        "disabled": "முடக்கப்பட்டது"
      },
      "data": {
        "states": {
          "Andhra Pradesh": "ஆந்திரப் பிரதேசம்",
          "Telangana": "தெலங்கானா",
          "Karnataka": "கர்நாடகா",
          "Tamil Nadu": "தமிழ்நாடு",
          "Kerala": "கேரளா",
          "Maharashtra": "மகாராஷ்டிரா",
          "All India": "அனைத்து இந்திய திட்டங்கள்"
        },
        "districts": {
          "Guntur": "குண்டூர்",
          "Kurnool": "கர்நூல்",
          "Anantapur": "அனந்தபூர்",
          "Warangal": "வாரங்கல்",
          "Nizamabad": "நிஜாமாபாத்",
          "Karimnagar": "கரிம்நகர்",
          "Kolar": "கோலார்",
          "Shivamogga": "சிவமொக்கா",
          "Chitradurga": "சித்ரதுர்கா",
          "Erode": "ஈரோடு",
          "Tiruchirappalli": "திருச்சிராப்பள்ளி",
          "Wayanad": "வயநாடு",
          "Kottayam": "கோட்டயம்",
          "Nashik": "நாசிக்",
          "Latur": "லாரூர்"
        },
        "crops": {
          "Paddy (Common)": "நெல் (சாதாரண)",
          "Red Chilli (Teja)": "சிவப்பு மிளகாய் (தேஜா)",
          "Cotton (Long Staple)": "பருத்தி (நீண்ட நார்)",
          "Groundnut (Pod)": "நிலக்கடலை",
          "Cotton (Medium Staple)": "பருத்தி (நடுத்தர)",
          "Maize (Yellow)": "சோளம் (மஞ்சள்)",
          "Turmeric (Finger)": "மஞ்சள் கிழங்கு",
          "Paddy (Grade A)": "நெல் (கிரேடு A)",
          "Tomato": "தக்காளி",
          "Arecanut (Rashi)": "பாக்கு",
          "Onion (Red)": "வெங்காயம் (சிவப்பு)",
          "Banana (Poovan)": "வாழை (பூவன்)",
          "Black Pepper": "கருப்பு மிளகு",
          "Rubber (RSS-4)": "ரப்பர் (RSS-4)",
          "Onion (Nashik Red)": "நாசிக் சிவப்பு வெங்காயம்",
          "Soyabean (Yellow)": "சோயாபீன் (மஞ்சள்)"
        },
        "markets": {
          "Guntur APMC Mandi": "குண்டூர் APMC சந்தை",
          "Guntur Yard": "குண்டூர் யார்டு",
          "Kurnool Market Yard": "கர்நூல் சந்தை",
          "Anantapur APMC": "அனந்தபூர் APMC",
          "Warangal Enamamula Market": "வாரங்கல் எனமாமுலா சந்தை",
          "Nizamabad APMC": "நிஜாமாபாத் APMC",
          "Nizamabad Yard": "நிஜாமாபாத் யார்டு",
          "Karimnagar APMC": "கரிம்நகர் APMC",
          "Kolar APMC Mandi": "கோலார் APMC சந்தை",
          "Shivamogga APMC": "சிவமொக்கா APMC",
          "Chitradurga Mandi": "சித்ரதுர்கா சந்தை",
          "Erode APMC": "ஈரோடு APMC",
          "Trichy Central Market": "திருச்சி மத்திய சந்தை",
          "Kalpetta Market": "கல்பட்டா சந்தை",
          "Kottayam Rubber Board": "கோட்டயம் ரப்பர் வாரியம்",
          "Lasalgaon APMC": "லசல்கான் APMC",
          "Latur APMC Mandi": "லாத்தூர் APMC சந்தை"
        },
        "weatherConditions": {
          "Scattered Showers": "சிதறிய மழை",
          "Scattered Rains": "சிதறிய மழைச்சாரல்",
          "Partly Cloudy": "பகுதி மேகமூட்டம்",
          "Sunny & Clear": "வெயில் & தெளிவான வானம்",
          "Thunderstorm": "இடி மின்னலுடன் மழை",
          "Light Rains": "லேசான மழை",
          "Sunny": "வெயில்"
        },
        "days": {
          "Today": "இன்று",
          "Tomorrow": "நாளை",
          "Thu": "வியாழன்",
          "Fri": "வெள்ளி",
          "Sat": "சனி",
          "Sun": "ஞாயிறு",
          "Mon": "திங்கள்"
        },
        "weatherAdvice": [
          "65% மழை வாய்ப்பு உள்ளதால் அடுத்த 24 மணி நேரத்திற்கு தெளிப்புகளை ஒத்திவைக்கவும்.",
          "நெற்பயிரில் வேர் அழுகலைத் தவிர்க்க வடிகால் வாய்க்கால்களை சுத்தமாக வைத்திருக்கவும்.",
          "காலை ஈரப்பதம் அதிகமாக உள்ளதால் மிளகாய் பயிரில் பூஞ்சை நோய்களைக் கண்காணிக்கவும்.",
          "மாலை வேளையில் பயறு வகை பயிர்களை நடவு செய்ய சாதகமான வானிலை."
        ],
        "weatherAlerts": [
          {
            "title": "மிதமான மழை எச்சரிக்கை",
            "description": "அடுத்த 24 மணி நேரத்தில் மழை பெய்ய வாய்ப்புள்ளது. தெளிப்பை ஒத்திவைக்கவும்."
          },
          {
            "title": "சாதகமான மண் ஈரப்பதம்",
            "description": "தற்போதைய ஈரப்பதம் (78%) நெல் மற்றும் மிளகாய் பயிர் வளர்ச்சிக்கு சாதகமானது."
          }
        ],
        "schemes": {
          "pm-kisan": {
            "title": "பிரதமர் கிசான் சம்மான் நிதி (PM-KISAN)",
            "overview": "விவசாய குடும்பங்களுக்கு ஆண்டுக்கு ₹6,000 நிதி உதவி 3 தவணைகளில் நேரடியாக வங்கி கணக்கில் செலுத்தப்படும் திட்டம்.",
            "eligibility": [
              "இந்தியாவில் நிலம் வைத்துள்ள அனைத்து விவசாய குடும்பங்களும் தகுதியானவர்கள்"
            ],
            "benefits": [
              "ஆண்டுக்கு ₹6,000 3 தவணைகளில் (₹2,000) நேரடியாக வங்கிக் கணக்கில்",
              "நேரடி பணப் பரிமாற்றம் (DBT) வெளிப்படைத்தன்மை"
            ],
            "documents": [
              "ஆதார் கார்டு",
              "நில ஆவணங்கள் (பட்டா/சிட்டா)",
              "ஆதாருடன் இணைக்கப்பட்ட வங்கி கணக்கு",
              "மொபைல் எண்"
            ]
          },
          "pmfby": {
            "title": "பிரதம மந்திரி பயிர் காப்பீட்டுத் திட்டம் (PMFBY)",
            "overview": "இயற்கை இடர்ப்பாடுகளால் ஏற்படும் பயிர் இழப்புகளுக்கு முழுமையான பயிர் காப்பீட்டு பாதுகாப்பு.",
            "eligibility": [
              "அறிவிக்கப்பட்ட பகுதிகளில் பயிர் செய்யும் அனைத்து விவசாயிகளும் தகுதியானவர்கள்"
            ],
            "benefits": [
              "குறைந்த பிரீமியம்: காரிஃப் 2%, ரபி 1.5%, தோட்டக்கலை 5%",
              "மீதி பிரீமியம் அரசே செலுத்தும்",
              "முழு இழப்பீடு தொகை"
            ],
            "documents": [
              "நில ஆவணங்கள்",
              "பயிர் சாகுபடி சான்றிதழ்",
              "ஆதார் கார்டு & வங்கி கணக்கு",
              "ரத்து செய்யப்பட்ட காசோலை"
            ]
          },
          "kcc": {
            "title": "கிசான் கடன் அட்டை (KCC) திட்டம்",
            "overview": "விவசாயிகளுக்கு பயிர் சாகுபடி செலவுகளுக்காக குறைந்த வட்டியில் குறுகிய கால கடன் வழங்கல்.",
            "eligibility": [
              "தனிப்பட்ட விவசாயிகள் / குத்தகை விவசாயிகள்",
              "சுய உதவிக்குழுக்கள் (SHG)"
            ],
            "benefits": [
              "₹3 லட்சம் வரையிலான கடன்களுக்கு 7% சலுகை வட்டி",
              "முறையாகச் செலுத்தினால் 3% கூடுதல் வட்டி மானியம்",
              "₹1.6 லட்சம் வரை பிணையில்லா கடன்"
            ],
            "documents": [
              "விண்ணப்பப் படிவம்",
              "அடையாளச் சான்று (ஆதார்/வாக்காளர் அடையாள அட்டை)",
              "முகவரி & நில ஆவணங்கள்",
              "பாஸ்போர்ட் அளவு புகைப்படம்"
            ]
          },
          "pmksy": {
            "title": "பிரதம மந்திரி விவசாய நீர்ப்பாசனத் திட்டம் (PMKSY)",
            "overview": "சொட்டுநீர் மற்றும் தெளிப்பு நீர்ப்பாசனம் மூலம் நீர் பயன்பாட்டுத் திறனை அதிகரிக்கும் திட்டம்.",
            "eligibility": [
              "பாசன வசதியுள்ள நில உரிமையாளர்கள்"
            ],
            "benefits": [
              "சிறிய/குறு விவசாயிகளுக்கு 55% மற்றும் பிற விவசாயிகளுக்கு 45% மானியம்",
              "30-50% நீர் சேமிப்பு"
            ],
            "documents": [
              "நில உரிமை ஆவணங்கள்",
              "நீர் ஆதார சான்று",
              "ஆதார் & வங்கி விவரங்கள்"
            ]
          },
          "mky": {
            "title": "மகளிர் கிசான் சஷக்திகரன் பரியோஜனா (MKSP)",
            "overview": "விவசாயத்தில் பெண் விவசாயிகளின் பங்களிப்பையும் உற்பத்தியையும் बढ़ाने திட்டம்.",
            "eligibility": [
              "பெண் விவசாயிகள், மகளிர் சுய உதவிக்குழுக்கள் (SHG)"
            ],
            "benefits": [
              "இயற்கை விவசாயம் பற்றிய 100% இலவச பயிற்சி",
              "மகளிர் குழுக்களுக்கு நிதி உதவி"
            ],
            "documents": [
              "ஆதார் கார்டு",
              "சுய உதவிக்குழு உறுப்பினர் அட்டை",
              "வங்கி கணக்கு விவரங்கள்"
            ]
          },
          "didf": {
            "title": "பால் பதப்படுத்துதல் உள்கட்டமைப்பு மேம்பாட்டு நிதி (DIDF)",
            "overview": "பால் பண்ணை விவசாயிகளுக்காக பால் பதப்படுத்தும் ஆலைகள் மற்றும் குளிரூட்டும் உள்கட்டமைப்பை நவீனமயமாக்கல்.",
            "eligibility": [
              "பால் கூட்டுறவு சங்கங்கள், பால் உற்பத்தியாளர் நிறுவனங்கள்"
            ],
            "benefits": [
              "6.5% சலுகை வட்டியில் கடன்",
              "கிராமப்புறங்களில் பால் குளிரூட்டும் மையங்கள் அமைத்தல்"
            ],
            "documents": [
              "கூட்டுறவு சங்க பதிவு சான்றிதழ்",
              "திட்ட அறிக்கை (DPR)",
              "வங்கி கணக்கு விவரங்கள்"
            ]
          },
          "pmmsy": {
            "title": "பிரதம மந்திரி மத்சய சம்பதா யோஜனா (PMMSY)",
            "overview": "மீன்வளத்துறை மற்றும் மீன் வளர்ப்பு குளங்களின் வளர்ச்சிக்கு நிதி உதவி.",
            "eligibility": [
              "மீனவர்கள், மீன் வளர்ப்போர், கூட்டுறவு சங்கங்கள்"
            ],
            "benefits": [
              "பொதுப்பிரிவினருக்கு 40% மற்றும் SC/ST/பெண்களுக்கு 60% நிதி மானியம்",
              "₹5 லட்சம் வரை விபத்து காப்பீடு"
            ],
            "documents": [
              "ஆதார் கார்டு",
              "மீன்பிடி உரிமம்/நில ஆவணங்கள்",
              "வங்கி விவரங்கள்"
            ]
          },
          "rythu-bharosa": {
            "title": "YSR ரைது பரோசா - PM KISAN (ஆந்திரப் பிரதேசம்)",
            "overview": "ஆந்திராவில் நில உரிமையாளர்கள் மற்றும் குத்தகை விவசாயிகளுக்கு ஆண்டுக்கு ₹13,500 நிதி உதவி.",
            "eligibility": [
              "ஆந்திராவில் நிலம் வைத்துள்ள விவசாயிகள் மற்றும் குத்தகை விவசாயிகள்"
            ],
            "benefits": [
              "ஆண்டுக்கு ₹13,500 3 தவணைகளில் நிதி உதவி"
            ],
            "documents": [
              "ஆதார் கார்டு",
              "பட்டா தார் பாஸ்புக் / CCRC அட்டை",
              "வங்கி பாஸ்புக்"
            ]
          },
          "rythu-bandhu": {
            "title": "ரைது பந்து திட்டம் (தெலங்கானா)",
            "overview": "தெலங்கானாவில் நில உரிமையாளர்களுக்கு ஏக்கரால் ஆண்டுக்கு ₹10,000 முதலீட்டு உதவி.",
            "eligibility": [
              "தெலங்கானாவில் நிலம் வைத்துள்ள அனைத்து பட்டாதாரர்களும்"
            ],
            "benefits": [
              "ஏக்கருக்கு காரிஃப் ₹5,000 + ரபி ₹5,000 நேரடியாக வங்கிக் கணக்கில்"
            ],
            "documents": [
              "தெலங்கானா பட்டாதார் பாஸ்புக்",
              "ஆதார் கார்டு",
              "வங்கி கணக்கு விவரங்கள்"
            ]
          }
        },
        "shops": {
          "s1": {
            "name": "ஸ்ரீ லக்ஷ்மி அக்ரி இன்புட்ஸ் & உரக் கடை",
            "address": "முதன்மை சாலை, APMC சந்தை அருகில், குண்டூர், AP 522001"
          },
          "s2": {
            "name": "கிசான் பயிர் பாதுகாப்பு & பூச்சிக்கொல்லி மையம்",
            "address": "ஸ்டேஷன் சாலை, குண்டூர், AP 522002"
          },
          "s3": {
            "name": "ரைது சேவா கேந்திரம் & பண்ணை உபகரணங்கள் கடை",
            "address": "RTC பேருந்து நிலைய வளாகம், குண்டூர், AP 522001"
          },
          "s4": {
            "name": "ஜெய் கிசான் இயற்கை உரங்கள் & விதைகள் மையம்",
            "address": "எனமாமுலா சந்தை சாலை, வாரங்கல், TS 506002"
          },
          "s5": {
            "name": "காவேரி அக்ரி டெக் & சொட்டுநீர் உபகரணங்கள்",
            "address": "APMC யார்டு கேட், கோலார், KA 563101"
          }
        }
      },
      "severity": {
        "Low": "குறைந்த",
        "Moderate": "மிதமான",
        "High": "அதிக",
        "Critical": "கடுமையான"
      },
      "helpline": {
        "title": "அவசர உதவி மையம்",
        "subtitle": "கிசான் உதவி மையம் மற்றும் அவசர விவசாய தொடர்புகள்",
        "kisanCenterTitle": "கிசான் அழைப்பு மையம் (1551)",
        "kisanCenterDesc": "24/7 இலவச விவசாய நிபுணர் ஆலோசனை பெறவும்.",
        "financialHelpline": "விவசாய நிதி உதவி மையம்",
        "vetCare": "கால்நடை அவசர பராமரிப்பு",
        "weatherEmergency": "வானிலை அவசர சேவை",
        "callNow": "இப்போது அழைக்கவும்",
        "tollFree": "கட்டணமில்லா சேவை"
      },
      "profile": {
        "title": "விவசாயி சுயவிவரம்",
        "subtitle": "அங்கீகரிக்கப்பட்ட விவசாயி",
        "personalInfo": "தனிப்பட்ட தகவல்கள்",
        "name": "முழு பெயர்",
        "phone": "கைபேசி எண்",
        "state": "மாநிலம்",
        "district": "மாவட்டம்",
        "preferredLang": "விருப்ப மொழி",
        "primaryCrop": "முதன்மை பயிர்",
        "saveChanges": "சுயவிவரத்தை சேமிக்கவும்"
      },
      "history": {
        "title": "ஸ்கேன் வரலாறு",
        "subtitle": "முந்தைய பயிர் நோய் பகுப்பாய்வு அறிக்கைகள்",
        "noHistory": "இன்னும் பயிர் நோய் ஸ்கேன்கள் எதுவும் செய்யப்படவில்லை.",
        "viewReport": "முழு அறிக்கையைக் காண்க"
      }
    }
  },
  "kn": {
    "translation": {
      "appName": "ಕೃಷಿದೃಷ್ಟಿ AI",
      "tagline": "ಭಾರತೀಯ ರೈತರಿಗೆ ಸ್ಮಾರ್ಟ್ AI ಕೃಷಿ ಸಹಾಯಕ",
      "nav": {
        "home": "ಹೋಮ್",
        "dashboard": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        "scanner": "ಬೆಳೆ ರೋಗ ಸ್ಕ್ಯಾನರ್",
        "chat": "AI ಕೃಷಿ ಸಹಾಯಕ",
        "weather": "ಹವಾಮಾನ",
        "schemes": "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
        "market": "ಮಾರುಕಟ್ಟೆ ದರ",
        "shops": "ಹತ್ತಿರದ ಅಂಗಡಿಗಳು",
        "helpline": "ತುರ್ತು ಸಹಾಯ",
        "profile": "ಪ್ರೊಫೈಲ್",
        "history": "ಇತಿಹಾಸ",
        "login": "ಲಾಗಿನ್",
        "register": "ನೋಂದಣಿ",
        "logout": "ಲಾಗ್‌ಔಟ್"
      },
      "hero": {
        "badge": "AI-ಆಧಾರಿತ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಸಹಾಯಕ",
        "title": "ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆಯೊಂದಿಗೆ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ",
        "subtitle": "ಬೆಳೆ ರೋಗಗಳನ್ನು ತಕ್ಷಣ ಗುರುತಿಸಿ, ತಜ್ಞರ ಸಲಹೆ ಪಡೆಯಿರಿ, ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ದರಗಳನ್ನು ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ತಿಳಿಯಿರಿ.",
        "scanButton": "ಎಲೆಯನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
        "assistantButton": "AI ಜೊತೆ ಮಾತನಾಡಿ",
        "accuracyMetric": "95%+ ನಿಖರ AI",
        "languagesMetric": "6 ಭಾರತೀಯ ಭಾಷೆಗಳು",
        "guidanceMetric": "24/7 ಧ್ವನಿ ಮಾರ್ಗದರ್ಶನ"
      },
      "home": {
        "servicesTitle": "ಸಮಗ್ರ ಡಿಜಿಟಲ್ ಕೃಷಿ ಸೇವೆಗಳು",
        "servicesSubtitle": "ಬೆಳೆ ಆರೋಗ್ಯ, ಹವಾಮಾನ, ಮಾರುಕಟ್ಟೆ ದರಗಳು ಮತ್ತು ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಒಂದೇ ವೇದಿಕೆಯಲ್ಲಿ.",
        "exploreFeature": "ಸೇವೆಯನ್ನು ನೋಡಿ",
        "dailyTipBadge": "ಇಂದಿನ ಕೃಷಿ ಸಲಹೆ",
        "dailyTipTitle": "ಬೇವಿನ ಲೇಪಿತ ಯೂರಿಯಾ ಬಳಕೆ",
        "dailyTipDesc": "ಸಾರಜನಕವನ್ನು 3 ಕಂತುಗಳಲ್ಲಿ ನೀಡುವುದರಿಂದ ರಸಗೊಬ್ಬರ ಸಾಮರ್ಥ್ಯ 25% ಹೆಚ್ಚಾಗುತ್ತದೆ.",
        "dailyTipButton": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹೋಗಿ",
        "helplineTitle": "ತುರ್ತು ಸಹಾಯ ಬೇಕೇ?",
        "helplineDesc": "ಕಿಸಾನ್ ಕಾಲ್ ಸೆಂಟರ್ (1551) ಗೆ ಕರೆ ಮಾಡಿ.",
        "helplineButton": "ಸಹಾಯವಾಣಿ ಸಂಖ್ಯೆಗಳು",
        "scannerDesc": "ತಕ್ಷಣದ AI ಬೆಳೆ ರೋಗ ರೋಗನಿರ್ಣಯ ವರದಿ",
        "chatDesc": "ನಿಮ್ಮ ಮಾತೃಭಾಷೆಯಲ್ಲಿ ಕೃಷಿ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ",
        "weatherDesc": "ನಿಖರ ಹವಾಮಾನ ಮತ್ತು ಕೀಟನಾಶಕ ಸಿಂಪಡಣೆ ಎಚ್ಚರಿಕೆಗಳು",
        "marketDesc": "ದೇಶಾದ್ಯಂತದ APMC ಮಾರುಕಟ್ಟೆ ದರಗಳು",
        "schemesDesc": "PM-KISAN ಮತ್ತು PMFBY ನಂತಹ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
        "shopsDesc": "ಹತ್ತಿರದ ರಸಗೊಬ್ಬರ ಮತ್ತು ಬೀಜದ ಅಂಗಡಿಗಳು"
      },
      "dashboard": {
        "badge": "ಸ್ಮಾರ್ಟ್ ರೈತ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        "welcome": "ನಮಸ್ಕಾರ",
        "location": "ಸ್ಥಳ",
        "preferredLang": "ಆಯ್ಕೆಮಾಡಿದ ಭಾಷೆ",
        "scannerBtn": "ರೋಗ ಸ್ಕ್ಯಾನರ್",
        "todayTipBadge": "ಇಂದಿನ ಸಲಹೆ",
        "ipmTitle": "ಸಮಗ್ರ ಪೀಡೆ ನಿರ್ವಹಣೆ (IPM)",
        "ipmDesc": "ಆರಂಭಿಕ ಹಂತದಲ್ಲಿ ಹಳದಿ ಮತ್ತು ನೀಲಿ ಜಿಗುಟು ಬಲೆಗಳನ್ನು ಬಳಸಿ ಕೀಟಗಳನ್ನು ನಿಯಂತ್ರಿಸಿ.",
        "leafScanTitle": "ತಕ್ಷಣದ ಎಲೆ ಸ್ಕ್ಯಾನ್",
        "leafScanDesc": "ರೋಗಗ್ರಸ್ತ ಎಲೆಯ ಫೋಟೋ ತೆಗೆದು KrishiDrishti CNN ನಿಂದ ಪರಿಹಾರ ಪಡೆಯಿರಿ.",
        "startScanBtn": "ಸ್ಕ್ಯಾನ್ ಪ್ರಾರಂಭಿಸಿ",
        "assistantTitle": "AI ಧ್ವನಿ ಸಹಾಯಕ",
        "assistantDesc": "ಗೊಬ್ಬರ, ಬೀಜಗಳು ಮತ್ತು ಹವಾಮಾನದ ಬಗ್ಗೆ 6 ಭಾಷೆಗಳಲ್ಲಿ ಕೇಳಿ.",
        "chatAiBtn": "AI ಜೊತೆ ಮಾತನಾಡಿ",
        "recentScansTitle": "ಇತ್ತೀಚಿನ ಸ್ಕ್ಯಾನ್‌ಗಳು",
        "viewHistory": "ಸಂಪೂರ್ಣ ಇತಿಹಾಸ ನೋಡಿ",
        "noScans": "ಇನ್ನೂ ಯಾವುದೇ ಸ್ಕ್ಯಾನ್ ಮಾಡಲಾಗಿಲ್ಲ.",
        "firstScanBtn": "ಮೊದಲ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
        "confidence": "ನಿಖರತೆ",
        "nearbyShopsTitle": "ಹತ್ತಿರದ ಕೃಷಿ ಅಂಗಡಿಗಳು",
        "nearbyShopsSubtitle": "ರಸಗೊಬ್ಬರ ಮತ್ತು ಬೀಜ ಮಾರಾಟಗಾರರು",
        "viewAll": "ಎಲ್ಲವನ್ನೂ ನೋಡಿ",
        "schemesTitle": "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
        "schemesSubtitle": "ಆರ್ಥಿಕ ನೆರವು ಮತ್ತು ಬೆಳೆ ವಿಮೆ",
        "browseSchemes": "ಯೋಜನೆಗಳನ್ನು ನೋಡಿ",
        "applyPortal": "ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
        "greeting": "ನಮಸ್ಕಾರ, {{name}}! 👋",
        "farmerFallback": "ರೈತ ಮಿತ್ರ",
        "selectLocation": "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        "detectGps": "ಜಿಪಿಎಸ್ ಸ್ಥಳ ಆಯ್ಕೆಮಾಡಿ",
        "locationNotSet": "ಯಾವ ಸ್ಥಳವನ್ನೂ ಆಯ್ಕೆ ಮಾಡಲಾಗಿಲ್ಲ"
      },
      "scanner": {
        "title": "AI ಬೆಳೆ ರೋಗ ಗುರುತಿಸುವಿಕೆ",
        "subtitle": "ರೋಗ ಗುರುತಿಸಲು ಎಲೆಯ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
        "takePhoto": "ಫೋಟೋ ತೆಗೆಯಿರಿ",
        "uploadPhoto": "ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        "analyzing": "KrishiDrishti CNN ಪರಿಶೀಲಿಸುತ್ತಿದೆ...",
        "reportTitle": "ಬೆಳೆ ರೋಗನಿರ್ಣಯ ವರದಿ",
        "confidence": "ನಿಖರತೆ ಸ್ಕೋರ್",
        "severity": "ತೀವ್ರತೆಯ ಮಟ್ಟ",
        "symptoms": "ಲಕ್ಷಣಗಳು",
        "causes": "ಸಾಧ್ಯವಾದ ಕಾರಣಗಳು",
        "chemical": "ರಾಸಾಯನಿಕ ಚಿಕಿತ್ಸೆ",
        "organic": "ಸಾವಯವ ಪರಿಹಾರಗಳು",
        "fertilizers": "ರಸಗೊಬ್ಬರ ನಿರ್ವಹಣೆ",
        "prevention": "ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು",
        "smartRec": "ಸ್ಮಾರ್ಟ್ ಸಲಹೆಗಳು",
        "saveReport": "ವರದಿ ಉಳಿಸಿ",
        "savedSuccess": "ವರದಿ ಪ್ರೊಫೈಲ್‌ನಲ್ಲಿ ಉಳಿಸಲಾಗಿದೆ!",
        "readAloud": "ಓದಿ ಕೇಳಿಸಿ",
        "selectPhotoError": "ದಯವಿಟ್ಟು ಮೊದಲು ಎಲೆಯ ಫೋಟೋ ಆಯ್ಕೆಮಾಡಿ.",
        "generateReportError": "ವರದಿ ತಯಾರಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
        "analysisError": "ಬೆಳೆ ವಿಶ್ಲೇಷಣೆ ದೋಷ. ಸ್ಪಷ್ಟ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ."
      },
      "market": {
        "liveTitle": "ಲೈವ್ ಮಾರುಕಟ್ಟೆ ದರಗಳು",
        "title": "ಕೃಷಿ ಮಾರುಕಟ್ಟೆ ದರಗಳು",
        "subtitle": "ಭಾರತದ APMC ಮಾರುಕಟ್ಟೆಗಳಲ್ಲಿ ಇಂದಿನ ಬೆಳೆ ದರಗಳು",
        "selectState": "ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        "selectDistrict": "ಜಿಲ್ಲೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        "selectMarket": "ಮಾರುಕಟ್ಟೆ / ಮಂಡಿ ಆಯ್ಕೆಮಾಡಿ",
        "allStates": "ಎಲ್ಲಾ ರಾಜ್ಯಗಳು",
        "allDistricts": "ಎಲ್ಲಾ ಜಿಲ್ಲೆಗಳು",
        "allMarkets": "ಎಲ್ಲಾ ಮಾರುಕಟ್ಟೆಗಳು",
        "searchCrop": "ಬೆಳೆಯ ಹೆಸರು ಹುಡುಕಿ",
        "cropName": "ಬೆಳೆಯ ಹೆಸರು",
        "minPrice": "ಕನಿಷ್ಠ ದರ",
        "maxPrice": "ಗರಿಷ್ಠ ದರ",
        "modalPrice": "ಸರಾಸರಿ ದರ",
        "arrivalQty": "ಆವಕ ಪ್ರಮಾಣ",
        "unit": "ಘಟಕ",
        "lastUpdated": "ಕೊನೆಯ ನವೀಕರಣ",
        "trend": "ಟ್ರೆಂಡ್",
        "stable": "ಸ್ಥಿರ",
        "minMax": "ಕನಿಷ್ಠ - ಗರಿಷ್ಠ ದರ",
        "loading": "ಮಾರುಕಟ್ಟೆ ದರಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
        "noData": "ನಿಮ್ಮ ಆಯ್ಕೆಗೆ ಯಾವುದೇ ದರಗಳು ಲಭ್ಯವಿಲ್ಲ.",
        "error": "ಮಾರುಕಟ್ಟೆ ದರಗಳನ್ನು ಲೋಡ್ ಮಾಡುವಲ್ಲಿ ದೋಷ.",
        "bags": "ಚೀಲಗಳು",
        "quintals": "ಕ್ವಿಂಟಾಲ್",
        "boxes": "ಪೆಟ್ಟಿಗೆಗಳು",
        "bunch": "ಗೊಂಚಲುಗಳು",
        "today": "ಇಂದು",
        "yesterday": "ನಿನ್ನೆ",
        "todayRates": "ಇಂದಿನ ಮಾರುಕಟ್ಟೆ ದರಗಳು",
        "viewAll": "ಎಲ್ಲಾ ದರಗಳನ್ನು ವೀಕ್ಷಿಸಿ"
      },
      "weather": {
        "badge": "ಲೈವ್ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ",
        "title": "ಕೃಷಿ ಹವಾಮಾನ ಮತ್ತು ಸಿಂಪಡಣೆ ಸಲಹೆ",
        "subtitle": "ನಿಖರ ಹವಾಮಾನ ಮತ್ತು ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಸಲಹೆಗಳು",
        "selectState": "ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        "selectDistrict": "ಜಿಲ್ಲೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        "useGps": "ಪ್ರಸ್ತುತ GPS ಸ್ಥಳ ಗುರುತಿಸಿ",
        "locating": "ಸ್ಥಳ ಗುರುತಿಸಲಾಗುತ್ತಿದೆ...",
        "temp": "ತಾಪಮಾನ",
        "humidity": "ತೇವಾಂಶ (ಆರ್ದ್ರತೆ)",
        "rainProb": "ಮಳೆ ಸಾಧ್ಯತೆ",
        "windSpeed": "ಗಾಳಿಯ ವೇಗ",
        "uvIndex": "ಯುವಿ ಸೂಚ್ಯಂಕ",
        "condition": "ಸ್ಥಿತಿ",
        "sunrise": "ಸೂರ್ಯೋದಯ",
        "sunset": "ಸೂರ್ಯಾಸ್ತ",
        "adviceTitle": "ಹವಾಮಾನ ಆಧಾರಿತ ಕೃಷಿ ಸಲಹೆ",
        "hourlyTitle": "ಪ್ರತಿ ಗಂಟೆಯ ಮುನ್ಸೂಚನೆ",
        "weeklyTitle": "7 ದಿನಗಳ ಹವಾಮಾನ",
        "loading": "ಹವಾಮಾನ ಮಾಹಿತಿ ಪಡೆಯಲಾಗುತ್ತಿದೆ...",
        "error": "ಹವಾಮಾನ ವಿವರಗಳನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯವಾಗಿಲ್ಲ.",
        "detecting": "ಜಿಪಿಎಸ್ ಪತ್ತೆಮಾಡಲಾಗುತ್ತಿದೆ...",
        "detectGps": "ಜಿಪಿಎಸ್ ಸ್ಥಳ ಆಯ್ಕೆಮಾಡಿ",
        "selectLocation": "ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        "currentLocation": "ಪ್ರಸ್ತುತ ಸ್ಥಳ",
        "refresh": "ನವೀಕರಿಸಿ",
        "rainProbability": "ಮಳೆಯ ಸಾಧ್ಯತೆ",
        "wind": "ಗಾಳಿಯ ವೇಗ",
        "hourlyForecast": "ಗಂಟೆಯ ಮುನ್ಸೂಚನೆ",
        "weeklyForecast": "7-ದಿನಗಳ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ",
        "farmingAdvice": "ಕೃಷಿ ಸಲಹೆಗಳು",
        "alerts": "ಹವಾಮಾನ ಎಚ್ಚರಿಕೆಗಳು",
        "rain": "ಮಳೆ",
        "liveForecast": "ಹವಾಮಾನ ವರದಿ",
        "alertsTitle": "ಹವಾಮಾನ ತುರ್ತು ಎಚ್ಚರಿಕೆ",
        "conditions": {
          "Clear Sky": "ಸ್ಪಷ್ಟ ಆಕಾಶ",
          "Mainly Clear": "ಹೆಚ್ಚಾಗಿ ಸ್ಪಷ್ಟ",
          "Partly Cloudy": "ಭಾಗಶಃ ಮೋಡ ಮುಸುಕಿದ",
          "Overcast": "ಮೋಡ ಕವಿದ ವಾತಾವರಣ",
          "Foggy": "ಮಂಜು ಮುಸುಕಿದ",
          "Light Drizzle": "ಸಣ್ಣ ಹನಿ ಮಳೆ",
          "Moderate Drizzle": "ಸಾಧಾರಣ ಹನಿ ಮಳೆ",
          "Heavy Drizzle": "ಭಾರಿ ಹನಿ ಮಳೆ",
          "Light Rain": "ಹಗುರ ಮಳೆ",
          "Moderate Rain": "ಸಾಧಾರಣ ಮಳೆ",
          "Heavy Rain": "ಭಾರಿ ಮಳೆ",
          "Light Snow": "ಹಗುರ ಹಿಮಪಾತ",
          "Moderate Snow": "ಸಾಧಾರಣ ಹಿಮಪಾತ",
          "Heavy Snow": "ಭಾರಿ ಹಿಮಪಾತ",
          "Light Showers": "ಹಗುರ ಮಳೆ ಹನಿಗಳು",
          "Moderate Showers": "ಸಾಧಾರಣ ಮಳೆ ಹನಿಗಳು",
          "Heavy Showers": "ಭಾರಿ ಮಳೆ ಹನಿಗಳು",
          "Thunderstorm": "ಸಿಡಿಲು ಸಹಿತ ಮಳೆ",
          "Thunderstorm with Hail": "ಆಲಿಕಲ್ಲು ಸಹಿತ ಮಳೆ",
          "Heavy Thunderstorm with Hail": "ಭಾರಿ ಆಲಿಕಲ್ಲು ಮಳೆ",
          "Unknown": "ತಿಳಿದಿಲ್ಲ"
        },
        "days": {
          "today": "ಇಂದು",
          "tomorrow": "ನಾಳೆ",
          "mon": "ಸೋಮ",
          "tue": "ಮಂಗಳ",
          "wed": "ಬುಧ",
          "thu": "ಗುರು",
          "fri": "ಶುಕ್ರ",
          "sat": "ಶನಿ",
          "sun": "ಭಾನುವಾರ"
        },
        "geoNotSupported": "ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಜಿಪಿಎಸ್ ಬೆಂಬಲಿತವಾಗಿಲ್ಲ.",
        "geoError": "ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಸ್ಥಳದ ಹವಾಮಾನ ಪಡೆಯಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ."
      },
      "schemes": {
        "badge": "ಆರ್ಥಿಕ ನೆರವು",
        "title": "ಸರ್ಕಾರಿ ಕೃಷಿ ಯೋಜನೆಗಳು",
        "subtitle": "ಕೇಂದ್ರ ಮತ್ತು ರಾಜ್ಯ ಸರ್ಕಾರದ ರೈತ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು",
        "selectState": "ರಾಜ್ಯದ ಪ್ರಕಾರ ಫಿಲ್ಟರ್ ಮಾಡಿ",
        "allStates": "ಎಲ್ಲಾ ಭಾರತೀಯ & ರಾಜ್ಯ ಯೋಜನೆಗಳು",
        "searchPlaceholder": "ಯೋಜನೆಯ ಹೆಸರು ಹುಡುಕಿ...",
        "categories": {
          "all": "ಎಲ್ಲಾ ಯೋಜನೆಗಳು",
          "crop": "ಬೆಳೆ ನೆರವು",
          "irrigation": "ನೀರಾವರಿ",
          "insurance": "ಬೆಳೆ ವಿಮೆ (Fasal Bima)",
          "loans": "ಸಾಲಗಳು & KCC",
          "subsidies": "ಸಬ್ಸಿಡಿಗಳು & ಗೊಬ್ಬರಗಳು",
          "women": "ಮಹಿಳಾ ರೈತರು",
          "dairy": "ಹಾಲಿನ ಉದ್ಯಮ",
          "fisheries": "ಮೀನುಗಾರಿಕೆ"
        },
        "overview": "ಯೋಜನೆಯ ವಿವರ",
        "eligibility": "ಅರ್ಹತೆ",
        "benefits": "ಮುಖ್ಯ ಪ್ರಯೋಜನಗಳು",
        "documents": "ಅಗತ್ಯವಿರುವ ದಾಖಲೆಗಳು",
        "officialWebsite": "ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್",
        "applyBtn": "ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
        "loading": "ಯೋಜನೆಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
        "noData": "ಯಾವುದೇ ಯೋಜನೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ."
      },
      "shops": {
        "badge": "ಅಂಗಡಿ ಹುಡುಕಾಟ",
        "title": "ಹತ್ತಿರದ ಕೃಷಿ ಅಂಗಡಿಗಳು",
        "subtitle": "ಹತ್ತಿರದ ರಸಗೊಬ್ಬರ, ಬೀಜ ಮತ್ತು ಕೀಟನಾಶಕ ಅಂಗಡಿಗಳು",
        "selectState": "ರಾಜ್ಯ",
        "selectDistrict": "ಜಿಲ್ಲೆ",
        "selectPlace": "ಸ್ಥಳ / ಊರು",
        "useGps": "GPS ಸ್ಥಳವನ್ನು ಬಳಸಿ",
        "locating": "ಸ್ಥಳ ಗುರುತಿಸಲಾಗುತ್ತಿದೆ...",
        "categories": {
          "all": "ಎಲ್ಲಾ ಅಂಗಡಿಗಳು",
          "fertilizer_seed": "ರಸಗೊಬ್ಬರ & ಬೀಜಗಳು",
          "pesticides": "ಕೀಟನಾಶಕಗಳು",
          "equipment": "ಯಂತ್ರೋಪಕರಣಗಳು"
        },
        "distance": "ದೂರ",
        "timing": "ಸಮಯ",
        "phone": "ಫೋನ್ ಸಂಖ್ಯೆ",
        "address": "ವಿಳಾಸ",
        "viewMap": "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ನೋಡಿ",
        "loading": "ಅಂಗಡಿಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
        "noData": "ಈ ಪ್ರದೇಶದಲ್ಲಿ ಯಾವುದೇ ಅಂಗಡಿಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
        "geoError": "ಜಿಪಿಎಸ್ ಸ್ಥಳ ಪತ್ತೆಯಾಗಿಲ್ಲ. ಆಯ್ಕೆಮಾಡಿದ ಪ್ರದೇಶದ ಅಂಗಡಿಗಳನ್ನು ತೋರಿಸಲಾಗುತ್ತಿದೆ."
      },
      "assistant": {
        "greeting": "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಕೃಷಿದೃಷ್ಟಿ AI ಸಹಾಯಕ. ಕನ್ನಡದಲ್ಲಿ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ!",
        "voiceNavScanner": "ಸ್ಕೇನರ್ ತೆರೆಯಲಾಗುತ್ತಿದೆ...",
        "voiceNavDashboard": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹೋಗಲಾಗುತ್ತಿದೆ...",
        "voiceNavWeather": "ಹವಾಮಾನ ವಿವರ ತೆರೆಯಲಾಗುತ್ತಿದೆ...",
        "voiceNavMarket": "ಮಾರುಕಟ್ಟೆ ದರಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
        "chatPlaceholder": "ಗೊಬ್ಬರ, ಬೀಜಗಳು, ರೋಗಗಳ ಬಗ್ಗೆ ಕೇಳಿ...",
        "send": "ಕಳುಹಿಸಿ",
        "listening": "ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತಿದೆ... ನಿಲ್ಲಿಸಲು ಮೈಕ್ ಒತ್ತಿ.",
        "startListen": "ಧ್ವನಿಯಲ್ಲಿ ಕೇಳಿ",
        "fallbackReply": "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ ಕೃಷಿ ಸಹಾಯಕ. ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ.",
        "voiceHeader": "ಎಐ ಧ್ವನಿ ಸಹಾಯಕ",
        "voiceSubheader": "ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡಿ ಪ್ರಶ್ನೆ ಕೇಳಿ",
        "thinking": "ಎಐ ಯೋಚಿಸುತ್ತಿದೆ...",
        "speakNow": "ಈಗ ಮಾತನಾಡಿ...",
        "stopListening": "ಆಲಿಸುವುದನ್ನು ನಿಲ್ಲಿಸಿ",
        "tapToSpeak": "ಮಾತನಾಡಲು ಮೈಕ್ ಒತ್ತಿ",
        "muteSpeech": "ಧ್ವನಿ ಬಂದ್ ಮಾಡಿ",
        "quickPrompts": "ತ್ವರಿತ ಪ್ರಶ್ನೆಗಳು",
        "title": "ಎಐ ಕೃಷಿ ಸಹಾಯಕ",
        "subtitle": "ಬೆಳೆ ರೋಗಗಳು, ಗೊಬ್ಬರ, ಹವಾಮಾನದ ಬಗ್ಗೆ ಕೇಳಿ",
        "inputPlaceholder": "ನಿಮ್ಮ ಕೃಷಿ ಪ್ರಶ್ನೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ..."
      },
      "auth": {
        "loginTitle": "ಮತ್ತೆ ಸುಸ್ವಾಗತ",
        "loginSubtitle": "ಲಾಗಿನ್ ಆಗಿ AI ಸೇವೆಗಳನ್ನು ಬಳಸಿ",
        "registerTitle": "ಕೃಷಿದೃಷ್ಟಿ AI ಗೆ ಸೇರಿ",
        "registerSubtitle": "ರೈತ ಖಾತೆಯನ್ನು ರಚಿಸಿ",
        "forgotTitle": "ಪಾಸ್‌ವರ್ಡ್ ರಿಸೆಟ್ ಮಾಡಿ",
        "forgotSubtitle": "ನಿಮ್ಮ ನೋಂದಾಯಿತ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ",
        "fullName": "ಪೂರ್ಣ ಹೆಸರು",
        "phone": "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
        "email": "ಇಮೇಲ್",
        "password": "ಪಾಸ್‌ವರ್ಡ್",
        "confirmPassword": "ಪಾಸ್‌ವರ್ಡ್ ಖಚಿತಪಡಿಸಿ",
        "state": "ರಾಜ್ಯ",
        "district": "ಜಿಲ್ಲೆ",
        "primaryCrop": "ಮುಖ್ಯ ಬೆಳೆ",
        "landSize": "ಭೂಮಿ (ಎಕರೆ)",
        "language": "ಆಯ್ಕೆಮಾಡಿದ ಭಾಷೆ",
        "loginBtn": "ಲಾಗಿನ್",
        "registerBtn": "ನೋಂದಾಯಿಸಿ",
        "sendOtpBtn": "OTP ಕಳುಹಿಸಿ",
        "rememberMe": "ನನ್ನನ್ನು ನೆನಪಿಡಿ",
        "forgotPasswordLink": "ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿದ್ದೀರಾ?",
        "dontHaveAccount": "ಖಾತೆ ಇಲ್ಲವೇ?",
        "alreadyHaveAccount": "ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?",
        "backToLogin": "ಲಾಗಿನ್‌ಗೆ ಹಿಂತಿರುಗಿ"
      },
      "footer": {
        "brandDesc": "6 ಭಾರತೀಯ ಭಾಷೆಗಳಲ್ಲಿ ಬೆಳೆ ರೋಗ ರೋಗನಿರ್ಣಯ, ಧ್ವನಿ ನೆರವು ಮತ್ತು ಮಾರುಕಟ್ಟೆ ದರಗಳನ್ನು ಒದಗಿಸುವ AI ವೇದಿಕೆ.",
        "quickServices": "ತ್ವರಿತ ಸೇವೆಗಳು",
        "farmerHelpline": "ರೈತ ಸಹಾಯ ಕೇಂದ್ರ",
        "kisanCallCenter": "ಕಿಸಾನ್ ಕಾಲ್ ಸೆಂಟರ್: 1551",
        "callCenterDesc": "ಉಚಿತ 24/7 ರಾಷ್ಟ್ರೀಯ ರೈತ ಸಹಾಯ ಕೇಂದ್ರ.",
        "callNumber": "ಕರೆ ಮಾಡಿ 1800-180-1551",
        "accessibilityTitle": "ಸುರಕ್ಷತೆ & ಪ್ರವೇಶಿಸುವಿಕೆ",
        "encryptedSessions": "ಸುರಕ್ಷಿತ ಲಾಗಿನ್",
        "supportedLangs": "ಬೆಂಬಲಿತ ಭಾಷೆಗಳು: ಇಂಗ್ಲಿಷ್, ತೆಲುಗು, ಹಿಂದಿ, ತಮಿಳು, ಕನ್ನಡ, ಮಲಯಾಳಂ",
        "screenReader": "ಸ್ಕ್ರೀನ್ ರೀಡರ್ ಸಕ್ರಿಯ",
        "contrastEnabled": "ಡಾರ್ಕ್ ಮೋಡ್ ಸಕ್ರಿಯ",
        "copyright": "© 2026 ಕೃಷಿದೃಷ್ಟಿ AI. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
        "builtWithLove": "ಭಾರತೀಯ ರೈತರಿಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ ❤️"
      },
      "cameraModal": {
        "headerTitle": "ಕ್ಯಾಮೆರಾ ಸ್ಕ್ಯಾನರ್",
        "leafPositionGuideline": "ಎಲೆಯನ್ನು ಫ್ರೇಮ್ ಮಧ್ಯದಲ್ಲಿರಿಸಿ",
        "retakePhoto": "ಮತ್ತೆ ಫೋಟೋ ತೆಗೆಯಿರಿ",
        "analyzeLeaf": "ವಿಶ್ಲೇಷಿಸಿ",
        "switchCamera": "ಕ್ಯಾಮೆರಾ ಬದಲಾಯಿಸಿ",
        "capturePhoto": "ಫೋಟೋ ತೆಗೆಯಿರಿ",
        "cameraError": "ಕ್ಯಾಮೆರಾ ಲಭ್ಯವಿಲ್ಲ."
      },
      "accessibility": {
        "readPage": "ಪುಟ ಓದಿ",
        "stopReading": "ನಿಲ್ಲಿಸಿ",
        "largeText": "ದೊಡ್ಡ ಅಕ್ಷರಗಳು",
        "darkTheme": "ಡಾರ್ಕ್ ಮೋಡ್",
        "lightTheme": "ಲೈಟ್ ಮೋಡ್",
        "enabled": "ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ",
        "disabled": "ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ"
      },
      "data": {
        "states": {
          "Andhra Pradesh": "ಆಂಧ್ರಪ್ರದೇಶ",
          "Telangana": "ತೆಲಂಗಾಣ",
          "Karnataka": "ಕರ್ನಾಟಕ",
          "Tamil Nadu": "ತಮಿಳುನಾಡು",
          "Kerala": "ಕೇರಳ",
          "Maharashtra": "ಮಹಾರಾಷ್ಟ್ರ",
          "All India": "ಅಖಿಲ ಭಾರತ ಯೋಜನೆಗಳು"
        },
        "districts": {
          "Guntur": "ಗುಂಟೂರು",
          "Kurnool": "ಕರ್ನೂಲು",
          "Anantapur": "ಅನಂತಪುರ",
          "Warangal": "ವರಂಗಲ್",
          "Nizamabad": "ನಿಜಾಮಾಬಾದ್",
          "Karimnagar": "ಕರೀಂನಗರ",
          "Kolar": "ಕೋಲಾರ",
          "Shivamogga": "ಶಿವಮೊಗ್ಗ",
          "Chitradurga": "ಚಿತ್ರದುರ್ಗ",
          "Erode": "ಈರೋಡ್",
          "Tiruchirappalli": "ತಿರುಚಿರಾಪಳ್ಳಿ",
          "Wayanad": "ವಯನಾಡ್",
          "Kottayam": "ಕೊಟ್ಟಾಯಂ",
          "Nashik": "ನಾಸಿಕ್",
          "Latur": "ಲಾತೂರ್"
        },
        "crops": {
          "Paddy (Common)": "ಭತ್ತ (ಸಾಮಾನ್ಯ)",
          "Red Chilli (Teja)": "ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿ (ತೇಜ)",
          "Cotton (Long Staple)": "ಹತ್ತಿ (ಉದ್ದ ರೇಷೆ)",
          "Groundnut (Pod)": "ಕಡಲೆಕಾಯಿ",
          "Cotton (Medium Staple)": "ಹತ್ತಿ (ಮಧ್ಯಮ)",
          "Maize (Yellow)": "ಮೆಕ್ಕೆಜೋಳ (ಹಳದಿ)",
          "Turmeric (Finger)": "ಅರಿಶಿನ ಕೊಂಬು",
          "Paddy (Grade A)": "ಭತ್ತ (ಗ್ರೇಡ್ A)",
          "Tomato": "ಟೊಮೆಟೊ",
          "Arecanut (Rashi)": "ಅಡಿಕೆ (ರಾಶಿ)",
          "Onion (Red)": "ಈರುಳ್ಳಿ (ಕೆಂಪು)",
          "Banana (Poovan)": "ಬಾಳೆಹಣ್ಣು (ಪೂವನ್)",
          "Black Pepper": "ಕಾಳುಮೆಣಸು",
          "Rubber (RSS-4)": "ರಬ್ಬರ್ (RSS-4)",
          "Onion (Nashik Red)": "ನಾಸಿಕ್ ಕೆಂಪು ಈರುಳ್ಳಿ",
          "Soyabean (Yellow)": "ಸೋಯಾಬೀನ್ (ಹಳದಿ)"
        },
        "markets": {
          "Guntur APMC Mandi": "ಗುಂಟೂರು APMC ಮಾರುಕಟ್ಟೆ",
          "Guntur Yard": "ಗುಂಟೂರು ಯಾರ್ಡ್",
          "Kurnool Market Yard": "ಕರ್ನೂಲು ಮಾರುಕಟ್ಟೆ",
          "Anantapur APMC": "ಅನಂತಪುರ APMC",
          "Warangal Enamamula Market": "ವರಂಗಲ್ ಏನಾಮಾಮುಲ ಮಾರುಕಟ್ಟೆ",
          "Nizamabad APMC": "ನಿಜಾಮಾಬಾದ್ APMC",
          "Nizamabad Yard": "ನಿಜಾಮಾಬಾದ್ ಯಾರ್ಡ್",
          "Karimnagar APMC": "ಕರೀಂನಗರ APMC",
          "Kolar APMC Mandi": "ಕೋಲಾರ APMC ಮಾರುಕಟ್ಟೆ",
          "Shivamogga APMC": "ಶಿವಮೊಗ್ಗ APMC",
          "Chitradurga Mandi": "ಚಿತ್ರದುರ್ಗ ಮಂಡಿ",
          "Erode APMC": "ಈರೋಡ್ APMC",
          "Trichy Central Market": "ತಿರುಚಿ ಸೆಂಟ್ರಲ್ ಮಾರುಕಟ್ಟೆ",
          "Kalpetta Market": "ಕಲ್ಪೆಟ್ಟ ಮಾರುಕಟ್ಟೆ",
          "Kottayam Rubber Board": "ಕೊಟ್ಟಾಯಂ ರಬ್ಬರ್ ಮಂಡಳಿ",
          "Lasalgaon APMC": "ಲಸಲಗಾಂವ್ APMC",
          "Latur APMC Mandi": "ಲಾತೂರ್ APMC ಮಾರುಕಟ್ಟೆ"
        },
        "weatherConditions": {
          "Scattered Showers": "ವಿರಳ ಮಳೆ ಜಿಟಿಜಿಟಿ",
          "Scattered Rains": "ವಿರಳ ಮಳೆ",
          "Partly Cloudy": "ಭಾಗಶಃ ಮೋಡ ಕವಿದ ವಾತಾವರಣ",
          "Sunny & Clear": "ಬಿಸಿಲು ಮತ್ತು ಸ್ಪಷ್ಟ ಆಕಾಶ",
          "Thunderstorm": "ಸಿಡಿಲು ಸಹಿತ ಮಳೆ",
          "Light Rains": "ಸಣ್ಣ ಮಳೆ",
          "Sunny": "ಬಿಸಿಲು"
        },
        "days": {
          "Today": "ಇಂದು",
          "Tomorrow": "ನಾಳೆ",
          "Thu": "ಗುರುವಾರ",
          "Fri": "ಶುಕ್ರವಾರ",
          "Sat": "ಶನಿವಾರ",
          "Sun": "ಭಾನುವಾರ",
          "Mon": "ಸೋಮವಾರ"
        },
        "weatherAdvice": [
          "65% ಮಳೆಯ ಸಾಧ್ಯತೆಯಿರುವುದರಿಂದ ಮುಂದಿನ 24 ಗಂಟೆಗಳ ಕಾಲ ರಸಾಯನ ಸಿಂಪಡಣೆ ಮುಂದೂಡಿ.",
          "ಭತ್ತದ ಗದ್ದೆಗಳಲ್ಲಿ ನೀರು ನಿಲ್ಲದಂತೆ ಸೂಕ್ತ ಚರಂಡಿ ವ್ಯವಸ್ಥೆಯನ್ನು ಸ್ವಚ್ಛವಾಗಿಡಿ.",
          "ಬೆಳಗಿನ ತೇವಾಂಶ ಹೆಚ್ಚಾಗಿರುವುದರಿಂದ ಮೆಣಸಿನಕಾಯಿ ಬೆಳೆಯಲ್ಲಿ ಬೂದಿ ರೋಗ ಲಕ್ಷಣಗಳನ್ನು ಗಮನಿಸಿ.",
          "ಸಂಜೆ ವೇಳೆ ಉದ್ದು/ಹೆಸರು ಬೆಳೆಗಳ ಸಸಿ ನೆಡಲು ಸೂಕ್ತ ವಾತಾವರಣ."
        ],
        "weatherAlerts": [
          {
            "title": "ಸಾಧಾರಣ ಮಳೆಯ ಎಚ್ಚರಿಕೆ",
            "description": "ಮುಂದಿನ 24 ಗಂಟೆಗಳಲ್ಲಿ ಮಳೆಯಾಗುವ ಸಾಧ್ಯತೆಯಿದೆ. ಸಿಂಪಡಣೆ ಮುಂದೂಡಿ."
          },
          {
            "title": "ಸೂಕ್ತ ಮಣ್ಣಿನ ತೇವಾಂಶ",
            "description": "ಪ್ರಸ್ತುತ ತೇವಾಂಶ (78%) ಭತ್ತದ ಸಸಿಗಳಿಗೆ ಮತ್ತು ಮೆಣಸಿನಕಾಯಿ ಸಸಿಗಳ ಬೆಳವಣಿಗೆಗೆ ಪೂರಕವಾಗಿದೆ."
          }
        ],
        "schemes": {
          "pm-kisan": {
            "title": "ಪ್ರಧಾನಮಂತ್ರಿ ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ (PM-KISAN)",
            "overview": "ಸಣ್ಣ ಮತ್ತು ಅಂಚಿನ ರೈತ ಕುಟುಂಬಗಳಿಗೆ ವರ್ಷಕ್ಕೆ ₹6,000 ಆರ್ಥಿಕ ನೆರವನ್ನು 3 ಕಂತುಗಳಲ್ಲಿ ನೇರವಾಗಿ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮಾ ಮಾಡುವ ಯೋಜನೆ.",
            "eligibility": [
              "ಭಾರತದ ಎಲ್ಲಾ ಜಮೀನು ಹೊಂದಿರುವ ರೈತ ಕುಟುಂಬಗಳು ಅರ್ಹರು"
            ],
            "benefits": [
              "ವರ್ಷಕ್ಕೆ ₹6,000 ರಂತೆ 3 ಕಂತುಗಳಲ್ಲಿ (₹2,000) ನೇರ ಬ್ಯಾಂಕ್ ಜಮಾ",
              "ಸುಲಭ ಮತ್ತು ಪಾರದರ್ಶಕ DBT ವರ್ಗಾವಣೆ"
            ],
            "documents": [
              "ಆಧಾರ್ ಕಾರ್ಡ್",
              "ಜಮೀನಿನ ಪಹಣಿ (RTC)",
              "ಆಧಾರ್ ಲಿಂಕ್ ಆದ ಬ್ಯಾಂಕ್ ಖಾತೆ",
              "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ"
            ]
          },
          "pmfby": {
            "title": "ಪ್ರಧಾನಮಂತ್ರಿ ಫಸಲ್ ಬಿಮಾ ಯೋಜನೆ (PMFBY)",
            "overview": "ನೈಸರ್ಗಿಕ ವಿಕೋಪ ಮತ್ತು ಬೆಳೆ ಹಾನಿಗೆ ಬಿತ್ತನೆಯಿಂದ ಕಟಾವಿನವರೆಗೆ ಸಂಪೂರ್ಣ ಬೆಳೆ ವಿಮೆ ರಕ್ಷಣೆ.",
            "eligibility": [
              "ಅಧಿಸೂಚಿತ ಪ್ರದೇಶದಲ್ಲಿ ಅಧಿಸೂಚಿತ ಬೆಳೆ ಬೆಳೆಯುವ ಎಲ್ಲಾ ರೈತರು"
            ],
            "benefits": [
              "ಕಡಿಮೆ ಪ್ರೀಮಿಯಂ: ಮುಂಗಾರು 2%, ಹಿಂಗಾರು 1.5%, ವಾಣಿಜ್ಯ ಬೆಳೆಗಳು 5%",
              "ಉಳಿದ ಪ್ರೀಮಿಯಂ ಸರ್ಕಾರವೇ ಭರಿಸುತ್ತದೆ"
            ],
            "documents": [
              "ಪಹಣಿ (RTC)",
              "ಬಿತ್ತನೆ ದೃಢೀಕರಣ ಪತ್ರ",
              "ಆಧಾರ್ ಕಾರ್ಡ್ & ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್",
              "ರದ್ದಾದ ಚೆಕ್"
            ]
          },
          "kcc": {
            "title": "ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ (KCC) ಯೋಜನೆ",
            "overview": "ರೈತರಿಗೆ ಬೆಳೆ ಸಾಲು ಮತ್ತು ಕಟಾವಿನ ನಂತರದ ವೆಚ್ಚಕ್ಕಾಗಿ ರಿಯಾಯಿತಿ ಬಡ್ಡಿದರದಲ್ಲಿ ಸಾಲ ಸೌಲಭ್ಯ.",
            "eligibility": [
              "ವೈಯಕ್ತಿಕ ರೈತರು / ಜಂಟಿ ಖಾತೆದಾರರು",
              "ಗೇಣಿ ರೈತರು",
              "ಸ್ವಸಹಾಯ ಗುಂಪುಗಳು (SHG)"
            ],
            "benefits": [
              "₹3 ಲಕ್ಷದವರೆಗಿನ ಸಾಲಕ್ಕೆ ಬಾರ್ಷಿಕ 7% ರಿಯಾಯಿತಿ ಬಡ್ಡಿದರ",
              "ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಪಾವತಿಸಿದರೆ 3% ಬಡ್ಡಿ ಸಹಾಯಧನ",
              "₹1.6 ಲಕ್ಷದವರೆಗೆ ಶೂರಿಟಿ ಇಲ್ಲದ ಸಾಲ"
            ],
            "documents": [
              "ಅರ್ಜಿ ನಮೂನೆ",
              "ಗುರುತಿನ ಚೀಟಿ (ಆಧಾರ್/ವೋಟರ್ ಐಡಿ)",
              "ವಿಳಾಸ & ಪಹಣಿ ದಾಖಲೆಗಳು",
              "ಪಾಸ್‌ಪೋರ್ಟ್ ಫೋಟೋ"
            ]
          },
          "pmksy": {
            "title": "ಪ್ರಧಾನಮಂತ್ರಿ ಕೃಷಿ ಸಿಂಚಾಯಿ ಯೋಜನೆ (PMKSY)",
            "overview": "ಹನಿ ಮತ್ತು ತುಂತುರು ನೀರಾವರಿ ಮೂಲಕ ನೀರಿನ ಬಳಕೆ ಸಾಮರ್ಥ್ಯವನ್ನು ಹೆಚ್ಚಿಸುವ ಯೋಜನೆ.",
            "eligibility": [
              "ನೀರಾವರಿ ಸೌಲಭ್ಯ ಹೊಂದಿರುವ ಜಮೀನಿನ ರೈತರು"
            ],
            "benefits": [
              "ಸಣ್ಣ/ಅಂಚಿನ ರೈತರಿಗೆ 55% ಮತ್ತು ಇತರೆ ರೈತರಿಗೆ 45% ಸಬ್ಸಿಡಿ",
              "30-50% ನೀರು ಉಳಿತಾಯ"
            ],
            "documents": [
              "ಜಮೀನಿನ ಹಕ್ಕು ದಾಖಲೆಗಳು",
              "ನೀರಿನ ಮೂಲದ ಪುರಾವೆ",
              "ಆಧಾರ್ & ಬ್ಯಾಂಕ್ ವಿವರಗಳು"
            ]
          },
          "mky": {
            "title": "ಮಹಿಳಾ ಕಿಸಾನ್ ಸಶಕ್ತಿಕರಣ ಯೋಜನೆ (MKSP)",
            "overview": "ಕೃಷಿಯಲ್ಲಿ ಮಹಿಳಾ ರೈತರ ಭಾಗವಹಿಸುವಿಕೆ ಮತ್ತು ಉತ್ಪಾದಕತೆಯನ್ನು ಹೆಚ್ಚಿಸುವ ವಿಶೇಷ ಯೋಜನೆ.",
            "eligibility": [
              "ಮಹಿಳಾ ರೈತರು, ಮಹಿಳಾ ಸ್ವಸಹಾಯ ಗುಂಪುಗಳು (SHG)"
            ],
            "benefits": [
              "ಸಾವಯವ ಕೃಷಿ ಕುರಿತು 100% ಉಚಿತ ತರಬೇತಿ",
              "ಮಹಿಳಾ ಗುಂಪುಗಳಿಗೆ ಆರ್ಥಿಕ ಬಂಡವಾಳ ನೆರವು"
            ],
            "documents": [
              "ಆಧಾರ್ ಕಾರ್ಡ್",
              "SHG ಸದಸ್ಯತ್ವ ಚೀಟಿ",
              "ಬ್ಯಾಂಕ್ ಖಾತೆ ವಿವರಗಳು"
            ]
          },
          "didf": {
            "title": "ಡೈರಿ ಸಂಸ್ಕರಣೆ ಮೂಲಸೌಕರ್ಯ ಅಭಿವೃದ್ಧಿ ನಿಧಿ (DIDF)",
            "overview": "ಹಾಲು ಉತ್ಪಾದಕ ರೈತರಿಗಾಗಿ ಹಾಲು ಶೀತಲೀಕರಣ ಮತ್ತು ಸಂಸ್ಕರಣಾ ಸೌಲಭ್ಯಗಳ ಆಧುನಿಕೀಕರಣ.",
            "eligibility": [
              "ಹಾಲಿನ ಸಹಕಾರ ಸಂಘಗಳು, ಹಾಲು ಉತ್ಪಾದಕರ ಕಂಪನಿಗಳು"
            ],
            "benefits": [
              "6.5% ರಿಯಾಯಿತಿ ಬಡ್ಡಿದರದಲ್ಲಿ ಸಾಲ ಸೌಲಭ್ಯ",
              "ಗ್ರಾಮೀಣ ಭಾಗದಲ್ಲಿ ಹಾಲು ಶೀತಲೀಕರಣ ಕೇಂದ್ರ ಸ್ಥಾಪನೆ"
            ],
            "documents": [
              "ಸಂಘದ ನೋಂದಣಿ ಪ್ರಮಾಣಪತ್ರ",
              "ಯೋಜನಾ ವರದಿ (DPR)",
              "ಬ್ಯಾಂಕ್ ಖಾತೆ ವಿವರಗಳು"
            ]
          },
          "pmmsy": {
            "title": "ಪ್ರಧಾನಮಂತ್ರಿ ಮತ್ಸ್ಯ ಸಂಪದ ಯೋಜನೆ (PMMSY)",
            "overview": "ಮೀನುಗಾರಿಕೆ ಮತ್ತು ಮೀನು ಸಾಕಣೆ ಕೊಳಗಳ ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿಗಾಗಿ ಆರ್ಥಿಕ ನೆರವು.",
            "eligibility": [
              "ಮೀನುಗಾರರು, ಮೀನು ಸಾಲಿಕೆದಾರರು, ಸಹಕಾರ ಸಂಘಗಳು"
            ],
            "benefits": [
              "ಸಾಮಾನ್ಯ ವರ್ಗಕ್ಕೆ 40% ಮತ್ತು SC/ST/ಮಹಿಳೆಯರಿಗೆ 60% ಹಣಕಾಸಿನ ಸಬ್ಸಿಡಿ",
              "₹5 ಲಕ್ಷದವರೆಗೆ ಅಪಘಾತ ವಿಮೆ"
            ],
            "documents": [
              "ಆಧಾರ್ ಕಾರ್ಡ್",
              "ಮೀನುಗಾರಿಕೆ ಪರವಾನಗಿ/ಜಮೀನಿನ ದಾಖಲೆ",
              "ಬ್ಯಾಂಕ್ ವಿವರಗಳು"
            ]
          },
          "rythu-bharosa": {
            "title": "YSR ರೈತು ಭರೋಸಾ - PM KISAN (ಆಂಧ್ರಪ್ರದೇಶ)",
            "overview": "ಆಂಧ್ರಪ್ರದೇಶದ ರೈತರಿಗೆ ಮತ್ತು ಗೇಣಿ ರೈತರಿಗೆ ವರ್ಷಕ್ಕೆ ₹13,500 ಆರ್ಥಿಕ ನೆರವು.",
            "eligibility": [
              "ಆಂಧ್ರಪ್ರದೇಶದ ಜಮೀನುದಾರರು ಮತ್ತು ನೋಂದಾಯಿತ ಗೇಣಿ ರೈತರು"
            ],
            "benefits": [
              "ವರ್ಷಕ್ಕೆ ₹13,500 ಹಣಕಾಸಿನ ಸಹಾಯ 3 ಕಂತುಗಳಲ್ಲಿ"
            ],
            "documents": [
              "ಆధಾರ್ ಕಾರ್ಡ್",
              "ಪಟ್ಟಾದಾರ್ ಪಾಸ್‌ಬುಕ್ / CCRC ಕಾರ್ಡ್",
              "ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್"
            ]
          },
          "rythu-bandhu": {
            "title": "ರೈತು ಬಂಧು ಯೋಜನೆ (ತೆಲಂಗಾಣ)",
            "overview": "ತೆಲಂಗಾಣದ ರೈತರಿಗೆ ಬೆಳೆ ಹೂಡಿಕೆ ಸಹಾಯವಾಗಿ ಎಕರೆಗೆ ವರ್ಷಕ್ಕೆ ₹10,000 ಆರ್ಥಿಕ ನೆರವು.",
            "eligibility": [
              "ತೆಲಂಗಾಣದ ಎಲ್ಲಾ ಪಟ್ಟಾದಾರ ರೈತರು"
            ],
            "benefits": [
              "ಎಕರೆಗೆ ಮುಂಗಾರಿನಲ್ಲಿ ₹5,000 + ಹಿಂಗಾರಿನಲ್ಲಿ ₹5,000 ನೇರ ಬ್ಯಾಂಕ್ ಜಮಾ"
            ],
            "documents": [
              "ತೆಲಂಗಾಣ ಪಟ್ಟಾದಾರ್ ಪಾಸ್‌ಬುಕ್",
              "ಆಧಾರ್ ಕಾರ್ಡ್",
              "ಬ್ಯಾಂಕ್ ಖಾತೆ ವಿವರಗಳು"
            ]
          }
        },
        "shops": {
          "s1": {
            "name": "ಶ್ರೀ ಲಕ್ಷ್ಮಿ ಅಗ್ರಿ ಇನ್‌ಪುಟ್ಸ್ & ಫರ್ಟಿಲೈಸರ್ ಸ್ಟೋರ್",
            "address": "ಮುಖ್ಯ ರಸ್ತೆ, APMC ಮಾರುಕಟ್ಟೆ ಹತ್ತಿರ, ಗುಂಟೂರು, AP 522001"
          },
          "s2": {
            "name": "ಕಿಸಾನ್ ಕ್ರಾಪ್ ಪ್ರೊಟೆಕ್ಷನ್ & ಪೆಸ್ಟಿಸೈಡ್ಸ್ ಸೆಂಟರ್",
            "address": "ಸ್ಟೇಷನ್ ರಸ್ತೆ, ಗುಂಟೂರು, AP 522002"
          },
          "s3": {
            "name": "ರೈತು ಸೇವಾ ಕೇಂದ್ರಮ್ & ಫಾರ್ಮ್ ಇಕ್ವಿಪ್‌ಮೆಂಟ್ ಸ್ಟೋರ್",
            "address": "RTC ಬಸ್ સ્ટેಂಡ್ ಕಾಂಪ್ಲೆಕ್ಸ್, ಗುಂಟೂರು, AP 522001"
          },
          "s4": {
            "name": "ಜೈ ಕಿಸಾನ್ ಆರ್ಗ್ಯಾನಿಕ್ ಫರ್ಟಿಲೈಸರ್ಸ್ & ಸೀಡ್ಸ್ ಡಿಪೋ",
            "address": "ಏನಾಮಾಮುಲ ಮಾರುಕಟ್ಟೆ ರಸ್ತೆ, ವರಂಗಲ್, TS 506002"
          },
          "s5": {
            "name": "ಕಾವೇರಿ ಅಗ್ರಿ ಟೆಕ್ & ಡ್ರಿಪ್ ಇಕ್ವಿಪ್‌ಮೆಂಟ್",
            "address": "APMC ಯಾರ್ಡ್ ಗೇಟ್, ಕೋಲಾರ, KA 563101"
          }
        }
      },
      "severity": {
        "Low": "ಕಡಿಮೆ",
        "Moderate": "ಮಧ್ಯಮ",
        "High": "ಹೆಚ್ಚಿನ",
        "Critical": "ಸಂದಿಗ್ಧ"
      },
      "helpline": {
        "title": "ತುರ್ತು ಸಹಾಯವಾಣಿ",
        "subtitle": "ಕಿಸಾನ್ ಸಹಾಯ ಕೇಂದ್ರ ಮತ್ತು ಕೃಷಿ ತುರ್ತು ಸಂಪರ್ಕಗಳು",
        "kisanCenterTitle": "ಕಿಸಾನ್ ಕಾಲ್ ಸೆಂಟರ್ (1551)",
        "kisanCenterDesc": "24/7 ಉಚಿತ ಕೃಷಿ ತಜ್ಞರ ಸಲಹೆ ಪಡೆಯಿರಿ.",
        "financialHelpline": "ಕೃಷಿ ಹಣಕಾಸು ಸಹಾಯವಾಣಿ",
        "vetCare": "ಪಶುವೈದ್ಯಕೀಯ ತುರ್ತು ಸೇವೆ",
        "weatherEmergency": "ಹವಾಮಾನ ತುರ್ತು ಸೇವೆ",
        "callNow": "ಈಗ ಕರೆ ಮಾಡಿ",
        "tollFree": "ಉಚಿತ ಕರೆ"
      },
      "profile": {
        "title": "ರೈತ ಪ್ರೊಫೈಲ್",
        "subtitle": "ಪರಿಶೀಲಿಸಿದ ಸ್ಮಾರ್ಟ್ ರೈತ",
        "personalInfo": "ವೈಯಕ್ತಿಕ ವಿವರಗಳು",
        "name": "ಪೂರ್ಣ ಹೆಸರು",
        "phone": "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
        "state": "ರಾಜ್ಯ",
        "district": "ಜಿಲ್ಲೆ",
        "preferredLang": "ಆದ್ಯತೆಯ ಭಾಷೆ",
        "primaryCrop": "ಮುಖ್ಯ ಬೆಳೆ",
        "saveChanges": "ವಿವರಗಳನ್ನು ಉಳಿಸಿ"
      },
      "history": {
        "title": "ಸ್ಕ್ಯಾನ್ ಇತಿಹಾಸ",
        "subtitle": "ನಿಮ್ಮ ಹಿಂದಿನ ಬೆಳೆ ರೋಗ ವಿಶ್ಲೇಷಣೆ ವರದಿಗಳು",
        "noHistory": "ಇನ್ನೂ ಯಾವುದೇ ಬೆಳೆ ರೋಗ ಸ್ಕ್ಯಾನ್‌ಗಳನ್ನು ದಾಖಲಿಸಿಲ್ಲ.",
        "viewReport": "ಸಂಪೂರ್ಣ ವರದಿ ವೀಕ್ಷಿಸಿ"
      }
    }
  },
  "ml": {
    "translation": {
      "appName": "കൃഷിദൃഷ്ടി AI",
      "tagline": "ഇന്ത്യൻ കർഷകർക്കായി സ്മാർട്ട് AI കാർഷിക സഹായി",
      "nav": {
        "home": "ഹോം",
        "dashboard": "ഡാഷ്‌ബോർഡ്",
        "scanner": "വിള രോഗ സ്കാനർ",
        "chat": "AI കാർഷിക സഹായി",
        "weather": "കാലാവസ്ഥ",
        "schemes": "സർക്കാർ പദ്ധതികൾ",
        "market": "വിപണി വിലകൾ",
        "shops": "സമീപ കടകൾ",
        "helpline": "അടിയന്തര സഹായം",
        "profile": "പ്രൊഫൈൽ",
        "history": "ചരിത്രം",
        "login": "ലോഗിൻ",
        "register": "രജിസ്റ്റർ",
        "logout": "ലോഗ്ഔട്ട്"
      },
      "hero": {
        "badge": "AI-അധിഷ്ഠിത സ്മാർട്ട് കാർഷിക സഹായി",
        "title": "കൃത്രിമ ബുദ്ധിയോടെ സ്മാർട്ട് കൃഷി",
        "subtitle": "വിള രോഗങ്ങൾ തൽക്ഷണം കണ്ടെത്തുക, വിദഗ്ദ്ധ നിർദ്ദേശങ്ങൾ നേടുക, കാലാവസ്ഥയും വിപണി വിലകളും നിങ്ങളുടെ ഭാഷയിൽ അറിയുക.",
        "scanButton": "ഇല സ്കാൻ ചെയ്യുക",
        "assistantButton": "AI യോട് സംസാരിക്കുക",
        "accuracyMetric": "95%+ കൃത്യതയുള്ള AI",
        "languagesMetric": "6 ഇന്ത്യൻ ഭാഷകൾ",
        "guidanceMetric": "24/7 വോയ്സ് വഴികാട്ടി"
      },
      "home": {
        "servicesTitle": "സമ്പൂർണ്ണ ഡിജിറ്റൽ കാർഷിക സേവനങ്ങൾ",
        "servicesSubtitle": "വിള ആരോഗ്യം, കാലാവസ്ഥ, വിപണി വിലകൾ, സർക്കാർ പദ്ധതികൾ എന്നിവ ഒരൊറ്റ പ്ലാറ്റ്‌ഫോമിൽ.",
        "exploreFeature": "സേവനം കാണുക",
        "dailyTipBadge": "ഇന്നത്തെ കാർഷിക സന്ദേശം",
        "dailyTipTitle": "വേപ്പ് പൊതിഞ്ഞ യുറിയ പ്രയോഗം",
        "dailyTipDesc": "നൈട്രജൻ 3 ഗഡുക്കളായി നൽകുന്നത് വളത്തിന്റെ കാര്യക്ഷമത 25% വർദ്ധിപ്പിക്കുന്നു.",
        "dailyTipButton": "ഡാഷ്‌ബോർഡിലേക്ക് പോവുക",
        "helplineTitle": "അടിയന്തര സഹായം വേണമോ?",
        "helplineDesc": "കിസാൻ കോൾ സെന്ററുമായി (1551) ബന്ധപ്പെടുക.",
        "helplineButton": "നമ്പറുകൾ കാണുക",
        "scannerDesc": "തൽക്ഷണ AI വിള രോഗ നിർണ്ണയ റിപ്പോർട്ട്",
        "chatDesc": "നിങ്ങളുടെ മാതൃഭാഷയിൽ സംശയങ്ങൾ ചോദിക്കാം",
        "weatherDesc": "കൃത്യമായ കാലാവസ്ഥയും മരുന്ന് തളിക്കൽ മുന്നറിയിപ്പുകളും",
        "marketDesc": "രാജ്യവ്യാപകമായ APMC വിപണി വിലകൾ",
        "schemesDesc": "PM-KISAN, PMFBY തുടങ്ങിയ സർക്കാർ സാമ്പത്തിക സഹായങ്ങൾ",
        "shopsDesc": "സമീപത്തെ വളം, വിത്ത് കടകൾ"
      },
      "dashboard": {
        "badge": "സ്മാർട്ട് കർഷക ഡാഷ്‌ബോർഡ്",
        "welcome": "നമസ്കാരം",
        "location": "സ്ഥലം",
        "preferredLang": "തിരഞ്ഞെടുത്ത ഭാഷ",
        "scannerBtn": "രോഗ സ്കാനർ",
        "todayTipBadge": "ഇന്നത്തെ ഉപദേശം",
        "ipmTitle": "സംയോജിത കീടനിയന്ത്രണം (IPM)",
        "ipmDesc": "തുടക്കത്തിൽ മഞ്ഞ, നീല ഒട്ടുന്ന കെണികൾ വെച്ച് കീടങ്ങളെ നിയന്ത്രിക്കാം.",
        "leafScanTitle": "തൽക്ഷണ ഇല സ്കാൻ",
        "leafScanDesc": "രോഗം ബാധിച്ച ഇലയുടെ ഫോട്ടോ എടുത്ത് KrishiDrishti CNN പരിഹാരങ്ങൾ നേടുക.",
        "startScanBtn": "സ്കാൻ ആരംഭിക്കുക",
        "assistantTitle": "AI വോയ്സ് സഹായി",
        "assistantDesc": "വളം, വിത്തുകൾ, കാലാവസ്ഥ എന്നിവയെക്കുറിച്ച് 6 ഭാഷകളിൽ ചോദിക്കാം.",
        "chatAiBtn": "AI യോട് സംസാരിക്കുക",
        "recentScansTitle": "സമീപകാല സ്കാനുകൾ",
        "viewHistory": "മുഴുവൻ ചരിത്രം കാണുക",
        "noScans": "ഇതുവരെ സ്കാനുകളൊന്നും ചെയ്തിട്ടില്ല.",
        "firstScanBtn": "ആദ്യ സ്കാൻ ചെയ്യുക",
        "confidence": "കൃത്യത",
        "nearbyShopsTitle": "സമീപ കാർഷിക കടകൾ",
        "nearbyShopsSubtitle": "വളം, വിത്ത് വിൽപ്പനക്കാർ",
        "viewAll": "എല്ലാം കാണുക",
        "schemesTitle": "സർക്കാർ പദ്ധതികൾ",
        "schemesSubtitle": "സാമ്പത്തിക സഹായവും വിള ഇൻഷുറൻസും",
        "browseSchemes": "പദ്ധതികൾ കാണുക",
        "applyPortal": "അപേക്ഷിക്കുക",
        "greeting": "നമസ്കാരം, {{name}}! 👋",
        "farmerFallback": "കർഷക മിത്രമേ",
        "selectLocation": "നിങ്ങളുടെ സ്ഥലം തിരഞ്ഞെടുക്കുക",
        "detectGps": "ജിപിഎസ് ലൊക്കേഷൻ തിരഞ്ഞെടുക്കുക",
        "locationNotSet": "സ്ഥലം തിരഞ്ഞെടുത്തിട്ടില്ല"
      },
      "scanner": {
        "title": "AI വിള രോഗ നിർണ്ണയം",
        "subtitle": "രോഗ നിർണ്ണയത്തിനായി ഇലയുടെ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക.",
        "takePhoto": "ഫോട്ടോ എടുക്കുക",
        "uploadPhoto": "ചിത്രം അപ്‌ലോഡ് ചെയ്യുക",
        "analyzing": "KrishiDrishti CNN പരിശോധിക്കുന്നു...",
        "reportTitle": "വിള രോഗ നിർണ്ണയ റിപ്പോർട്ട്",
        "confidence": "കൃത്യതാ സ്കോർ",
        "severity": "തീവ്രത ഘട്ടം",
        "symptoms": "ലക്ഷണങ്ങൾ",
        "causes": "സാധ്യമായ കാരണങ്ങൾ",
        "chemical": "രാസ ചികിത്സകൾ",
        "organic": "ജൈവ പരിഹാരങ്ങൾ",
        "fertilizers": "വള പ്രയോഗം",
        "prevention": "മുൻകരുതലുകൾ",
        "smartRec": "സ്മാർട്ട് നിർദ്ദേശങ്ങൾ",
        "saveReport": "റിപ്പോർട്ട് സൂക്ഷിക്കുക",
        "savedSuccess": "റിപ്പോർട്ട് പ്രൊഫൈലിൽ സൂക്ഷിച്ചു!",
        "readAloud": "വായിച്ചു കേൾപ്പിക്കുക",
        "selectPhotoError": "ദയവായി ആദ്യം ഇലയുടെ ഫോട്ടോ തിരഞ്ഞെടുക്കുക.",
        "generateReportError": "റിപ്പോർട്ട് തയ്യാറാക്കാൻ സാധിച്ചില്ല. വീണ്ടും ശ്രമിക്കുക.",
        "analysisError": "വിള വിശകലനത്തിൽ പിശക്. വ്യക്തമായ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക."
      },
      "market": {
        "liveTitle": "ലൈവ് വിപണി വിലകൾ",
        "title": "കാർഷിക വിപണി വിലകൾ",
        "subtitle": "ഇന്ത്യയിലെ APMC വിപണികളിലെ ഇന്നത്തെ വിള വിലകൾ",
        "selectState": "സംസ്ഥാനം തിരഞ്ഞെടുക്കുക",
        "selectDistrict": "ജില്ല തിരഞ്ഞെടുക്കുക",
        "selectMarket": "മാർക്കറ്റ് / മണ്ടി തിരഞ്ഞെടുക്കുക",
        "allStates": "എല്ലാ സംസ്ഥാനങ്ങളും",
        "allDistricts": "എല്ലാ ജില്ലകളും",
        "allMarkets": "എല്ലാ വിപണികളും",
        "searchCrop": "വിളയുടെ പേര് തിരയുക",
        "cropName": "വിളയുടെ പേര്",
        "minPrice": "കുറഞ്ഞ വില",
        "maxPrice": "കൂടിയ വില",
        "modalPrice": "ശരാശരി വില",
        "arrivalQty": "വരവ് അളവ്",
        "unit": "യൂണിറ്റ്",
        "lastUpdated": "അവസാന അപ്ഡേറ്റ്",
        "trend": "മാറ്റം",
        "stable": "സ്ഥിരം",
        "minMax": "കുറഞ്ഞ - കൂടിയ വില",
        "loading": "വിപണി വിലകൾ ലോഡ് ചെയ്യുന്നു...",
        "noData": "നിങ്ങൾ തിരഞ്ഞെടുത്ത സ്ഥലത്ത് വിവരങ്ങൾ ലഭ്യമല്ല.",
        "error": "വിപണി വിലകൾ ലഭിക്കുന്നതിൽ പിശക്.",
        "bags": "സഞ്ചികൾ",
        "quintals": "ക്വിന്റൽ",
        "boxes": "പെട്ടികൾ",
        "bunch": "കുലകൾ",
        "today": "ഇന്ന്",
        "yesterday": "ഇന്നലെ",
        "todayRates": "ഇന്നത്തെ മാർക്കറ്റ് നിരക്കുകൾ",
        "viewAll": "എല്ലാ നിരക്കുകളും കാണുക"
      },
      "weather": {
        "badge": "ലൈവ് കാലാവസ്ഥ പ്രവചനം",
        "title": "കാർഷിക കാലാവസ്ഥ & മരുന്ന് തളിക്കൽ സന്ദേശങ്ങൾ",
        "subtitle": "കൃത്യമായ കാലാവസ്ഥയും കാർഷിക നിർദ്ദേശങ്ങളും",
        "selectState": "സംസ്ഥാനം തിരഞ്ഞെടുക്കുക",
        "selectDistrict": "ജില്ല തിരഞ്ഞെടുക്കുക",
        "useGps": "നിലവിലെ GPS സ്ഥാനം കണ്ടെത്തുക",
        "locating": "സ്ഥലം കണ്ടെത്തുന്നു...",
        "temp": "താപനില",
        "humidity": "ആർദ്രത (ഈർപ്പം)",
        "rainProb": "മഴ സാധ്യത",
        "windSpeed": "കാറ്റിന്റെ വേഗത",
        "uvIndex": "യുവൈ ഇൻഡക്സ്",
        "condition": "അവസ്ഥ",
        "sunrise": "സൂര്യോദയം",
        "sunset": "സൂര്യാസ്തമയം",
        "adviceTitle": "കാലാവസ്ഥാ അധിഷ്ഠിത കാർഷിക ഉപദേശം",
        "hourlyTitle": "മണിക്കൂർ തോറുമുള്ള പ്രവചനം",
        "weeklyTitle": "7 ദിവസത്തെ കാലാവസ്ഥ",
        "loading": "കാലാവസ്ഥാ വിവരങ്ങൾ ശേഖരിക്കുന്നു...",
        "error": "കാലാവസ്ഥ വിവരങ്ങൾ ലഭിച്ചില്ല.",
        "detecting": "ജിപിഎസ് പര്യവേക്ഷണം ചെയ്യുന്നു...",
        "detectGps": "ജിപിഎസ് ലൊക്കേഷൻ തിരഞ്ഞെടുക്കുക",
        "selectLocation": "ലൊക്കേഷൻ തിരഞ്ഞെടുക്കുക",
        "currentLocation": "നിലവിലെ ലൊക്കേഷൻ",
        "refresh": "പുതുക്കുക",
        "rainProbability": "മഴയുടെ സാധ്യത",
        "wind": "കാറ്റിന്റെ വേഗത",
        "hourlyForecast": "മണിക്കൂർ തോറുമുള്ള പ്രവചനം",
        "weeklyForecast": "7 ദിവസത്തെ കാലാവസ്ഥാ പ്രവചനം",
        "farmingAdvice": "കാർഷിക നിർദ്ദേശങ്ങൾ",
        "alerts": "കാലാവസ്ഥാ മുന്നറിയിപ്പുകൾ",
        "rain": "മഴ",
        "liveForecast": "തത്സമയ കാലാവസ്ഥ",
        "alertsTitle": "കാലാവസ്ഥാ അടിയന്തര മുന്നറിയിപ്പ്",
        "conditions": {
          "Clear Sky": "തെളിഞ്ഞ ആകാശം",
          "Mainly Clear": "പ്രധാനമായും തെളിഞ്ഞത്",
          "Partly Cloudy": "ഭാഗികമായി മേഘാവൃതമാണ്",
          "Overcast": "പൂർണ്ണമായും മേഘാവൃതമാണ്",
          "Foggy": "മഞ്ഞുമൂടിയ അന്തരീക്ഷം",
          "Light Drizzle": "നേരിയ ചാറ്റൽമഴ",
          "Moderate Drizzle": "മിതമായ ചാറ്റൽമഴ",
          "Heavy Drizzle": "ശക്തമായ ചാറ്റൽമഴ",
          "Light Rain": "നേരിയ മഴ",
          "Moderate Rain": "മിതമായ മഴ",
          "Heavy Rain": "ശക്തമായ മഴ",
          "Light Snow": "നേരിയ മഞ്ഞുവീഴ്ച",
          "Moderate Snow": "മിതമായ മഞ്ഞുവീഴ്ച",
          "Heavy Snow": "ശക്തമായ മഞ്ഞുവീഴ്ച",
          "Light Showers": "നേരിയ മഴത്തുള്ളികൾ",
          "Moderate Showers": "മിതമായ മഴത്തുള്ളികൾ",
          "Heavy Showers": "ശക്തമായ മഴത്തുള്ളികൾ",
          "Thunderstorm": "ഇടിമിന്നലോടു കൂടിയ മഴ",
          "Thunderstorm with Hail": "ആലിപ്പഴ വീഴ്ചയോടു കൂടിയ മഴ",
          "Heavy Thunderstorm with Hail": "ശക്തമായ ആലിപ്പഴ മഴ",
          "Unknown": "അജ്ഞാതം"
        },
        "days": {
          "today": "ഇന്ന്",
          "tomorrow": "നാളെ",
          "mon": "തിങ്കൾ",
          "tue": "ചൊവ്വ",
          "wed": "ബുധൻ",
          "thu": "വ്യാഴം",
          "fri": "വെള്ളി",
          "sat": "ശനി",
          "sun": "ഞായർ"
        },
        "geoNotSupported": "നിങ്ങളുടെ ബ്രൗസറിൽ ജിപിഎസ് ലഭ്യമായിട്ടില്ല.",
        "geoError": "നിങ്ങളുടെ നിലവിലെ സ്ഥലത്തെ കാലാവസ്ഥ ലഭ്യമായില്ല."
      },
      "schemes": {
        "badge": "സാമ്പത്തിക സഹായം",
        "title": "സർക്കാർ കാർഷിക പദ്ധതികൾ",
        "subtitle": "കേന്ദ്ര-സംസ്ഥാന സർക്കാർ ക്ഷേമ പദ്ധതികൾ",
        "selectState": "സംസ്ഥാനം അനുസരിച്ച് ഫിൽട്ടർ ചെയ്യുക",
        "allStates": "എല്ലാ ഇന്ത്യ & സംസ്ഥാന പദ്ധതികളും",
        "searchPlaceholder": "പദ്ധതിയുടെ പേര് തിരയുക...",
        "categories": {
          "all": "എല്ലാ പദ്ധതികളും",
          "crop": "വിള സഹായം",
          "irrigation": "ജലസേചനം",
          "insurance": "വിള ഇൻഷുറൻസ് (Fasal Bima)",
          "loans": "വായ്പകളും KCC യും",
          "subsidies": "സബ്‌സിഡികളും വളവും",
          "women": "വനിതാ കർഷകർ",
          "dairy": "ക്ഷീര വികസനം",
          "fisheries": "മത്സ്യബന്ധനം"
        },
        "overview": "പദ്ധതി വിവരങ്ങൾ",
        "eligibility": "യോഗ്യത",
        "benefits": "പ്രധാന ആനുകൂല്യങ്ങൾ",
        "documents": "ആവശ്യമായ രേഖകൾ",
        "officialWebsite": "ഔദ്യോഗിക വെബ്‌സൈറ്റ്",
        "applyBtn": "അപേക്ഷിക്കുക",
        "loading": "പദ്ധതികൾ ലോഡ് ചെയ്യുന്നു...",
        "noData": "പദ്ധതികളൊന്നും കണ്ടെത്തിയില്ല."
      },
      "shops": {
        "badge": "കട കണ്ടെത്തൽ",
        "title": "സമീപ കാർഷിക കടകൾ",
        "subtitle": "സമീപത്തെ വളം, വിത്ത്, കീടനാശിനി കടകൾ കണ്ടെത്തുക",
        "selectState": "സംസ്ഥാനം",
        "selectDistrict": "ജില്ല",
        "selectPlace": "സ്ഥലം / നഗരം",
        "useGps": "GPS സ്ഥാനം ഉപയോഗിക്കുക",
        "locating": "സ്ഥലം കണ്ടെത്തുന്നു...",
        "categories": {
          "all": "എല്ലാ കടകളും",
          "fertilizer_seed": "വളവും വിത്തുകളും",
          "pesticides": "കീടനാശിനികൾ",
          "equipment": "യന്ത്രസാമഗ്രികൾ"
        },
        "distance": "ദൂരം",
        "timing": "സമയം",
        "phone": "ഫോൺ നമ്പർ",
        "address": "വിലാസം",
        "viewMap": "ഗൂഗിൾ മാപ്പിൽ കാണുക",
        "loading": "കടകൾ ലോഡ് ചെയ്യുന്നു...",
        "noData": "ഈ പ്രദേശത്ത് കടകളൊന്നും കണ്ടെത്തിയില്ല.",
        "geoError": "ജിപിഎസ് ലൊക്കേഷൻ കണ്ടെത്താനായില്ല. തിരഞ്ഞെടുത്ത സ്ഥലത്തെ കടകൾ കാണിക്കുന്നു."
      },
      "assistant": {
        "greeting": "നമസ്കാരം! ഞാൻ നിങ്ങളുടെ കൃഷിദൃഷ്ടി AI സഹായിയാണ്. മലയാളത്തിൽ ചോദ്യങ്ങൾ ചോദിക്കൂ!",
        "voiceNavScanner": "സ്കാനർ തുറക്കുന്നു...",
        "voiceNavDashboard": "ഡാഷ്‌ബോർഡിലേക്ക് പോകുന്നു...",
        "voiceNavWeather": "കാലാവസ്ഥ തുറക്കുന്നു...",
        "voiceNavMarket": "വിപണി വിലകൾ ലോഡ് ചെയ്യുന്നു...",
        "chatPlaceholder": "വളം, വിത്തുകൾ, രോഗങ്ങൾ എന്നിവയെക്കുറിച്ച് ചോദിക്കൂ...",
        "send": "അയക്കുക",
        "listening": "കേൾക്കുന്നു... നിർത്താൻ മൈക്ക് അമർത്തുക.",
        "startListen": "ശബ്ദത്തിൽ ചോദിക്കൂ",
        "fallbackReply": "നമസ്കാരം! ഞാൻ നിങ്ങളുടെ കാർഷിക സഹായിയാണ്. നിങ്ങളുടെ ചോദ്യങ്ങൾ ചോദിക്കാം.",
        "voiceHeader": "എഐ വോയ്സ് അസിസ്റ്റന്റ്",
        "voiceSubheader": "നിങ്ങളുടെ ഭാഷയിൽ സംസാരിച്ച് സംശയങ്ങൾ ചോദിക്കൂ",
        "thinking": "എഐ ചിന്തിക്കുന്നു...",
        "speakNow": "ഇപ്പോൾ സംസാരിക്കൂ...",
        "stopListening": "കേൾക്കുന്നത് നിർത്തുക",
        "tapToSpeak": "സംസാരിക്കാൻ മൈക്ക് അമർത്തുക",
        "muteSpeech": "ശബ്ദം നിശബ്ദമാക്കുക",
        "quickPrompts": "പെട്ടെന്നുള്ള ചോദ്യങ്ങൾ",
        "title": "എഐ കാർഷിക സഹായി",
        "subtitle": "വിള രോഗങ്ങൾ, വളം, കാലാവസ്ഥ എന്നിവയെക്കുറിച്ച് ചോദിക്കുക",
        "inputPlaceholder": "നിങ്ങളുടെ ചോദ്യം ടൈപ്പ് ചെയ്യുക..."
      },
      "auth": {
        "loginTitle": "വീണ്ടും സ്വാഗതം",
        "loginSubtitle": "ലോഗിൻ ചെയ്ത് AI സേവനങ്ങൾ ഉപയോഗിക്കൂ",
        "registerTitle": "കൃഷിദൃഷ്ടി AI യിൽ ചേരൂ",
        "registerSubtitle": "കർഷക അക്കൗണ്ട് ഉണ്ടാക്കൂ",
        "forgotTitle": "പാസ്‌വേഡ് വീണ്ടെടുക്കുക",
        "forgotSubtitle": "ഫോൺ നമ്പർ നൽകുക",
        "fullName": "പൂർണ്ണമായ പേര്",
        "phone": "ഫോൺ നമ്പർ",
        "email": "ഇമെയിൽ",
        "password": "പാസ്‌വേഡ്",
        "confirmPassword": "പാസ്‌വേഡ് ഉറപ്പാക്കുക",
        "state": "സംസ്ഥാനം",
        "district": "ജില്ല",
        "primaryCrop": "പ്രധാന വിള",
        "landSize": "ഭൂമി (ഏക്കർ)",
        "language": "തിരഞ്ഞെടുത്ത ഭാഷ",
        "loginBtn": "ലോഗിൻ",
        "registerBtn": "രജിസ്റ്റർ ചെയ്യുക",
        "sendOtpBtn": "OTP അയക്കുക",
        "rememberMe": "എന്നെ ഓർക്കുക",
        "forgotPasswordLink": "പാസ്‌വേഡ് മറന്നോ?",
        "dontHaveAccount": "അക്കൗണ്ട് ഇല്ലേ?",
        "alreadyHaveAccount": "അക്കൗണ്ട് ഉണ്ടോ?",
        "backToLogin": "ലോഗിനിലേക്ക് മടങ്ങുക"
      },
      "footer": {
        "brandDesc": "6 ഇന്ത്യൻ ഭാഷകളിൽ രോഗ നിർണ്ണയവും വോയ്സ് അസിസ്റ്റന്റും വിപണി വിലകളും നൽകുന്ന AI പ്ലാറ്റ്‌ഫോം.",
        "quickServices": "ദ്രുത സേവനങ്ങൾ",
        "farmerHelpline": "കർഷക ഹെൽപ്പ്‌ലൈൻ",
        "kisanCallCenter": "കിസാൻ കോൾ സെന്റർ: 1551",
        "callCenterDesc": "സൗജന്യ 24/7 ദേശീയ കർഷക ഹെൽപ്പ്‌ലൈൻ.",
        "callNumber": "വിളിക്കുക 1800-180-1551",
        "accessibilityTitle": "സുരക്ഷയും സൗകര്യങ്ങളും",
        "encryptedSessions": "സുരക്ഷിത ലോഗിൻ",
        "supportedLangs": "പിന്തുണയ്ക്കുന്ന ഭാഷകൾ: ഇംഗ്ലീഷ്, തെലുങ്ക്, ഹിന്ദി, തമിഴ്, കന്നഡ, മലയാളം",
        "screenReader": "വായനാ സൗകര്യം",
        "contrastEnabled": "ഡാർക്ക് മോഡ്",
        "copyright": "© 2026 കൃഷിദൃഷ്ടി AI. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.",
        "builtWithLove": "ഇന്ത്യൻ കർഷകർക്കായി നിർമ്മിച്ചത് ❤️"
      },
      "cameraModal": {
        "headerTitle": "ക്യാമറ സ്കാനർ",
        "leafPositionGuideline": "ഇല ഫ്രെയിമിന്റെ മധ്യത്തിൽ വയ്ക്കുക",
        "retakePhoto": "വീണ്ടും ഫോട്ടോ എടുക്കുക",
        "analyzeLeaf": "അപഗ്രഥിക്കുക",
        "switchCamera": "ക്യാമറ മാറ്റുക",
        "capturePhoto": "ഫോട്ടോ എടുക്കുക",
        "cameraError": "ക്യാമറ ലഭ്യമായില്ല."
      },
      "accessibility": {
        "readPage": "പേജ് വായിക്കുക",
        "stopReading": "നിർത്തുക",
        "largeText": "വലിയ അക്ഷരങ്ങൾ",
        "darkTheme": "ഡാർക്ക് മോഡ്",
        "lightTheme": "ലൈറ്റ് മോഡ്",
        "enabled": "പ്രാപ്തമാക്കി",
        "disabled": "അപ്രാപ്തമാക്കി"
      },
      "data": {
        "states": {
          "Andhra Pradesh": "ആന്ധ്രാപ്രദേശ്",
          "Telangana": "തെലങ്കാന",
          "Karnataka": "കർണാടക",
          "Tamil Nadu": "തമിഴ്‌നാട്",
          "Kerala": "കേരളം",
          "Maharashtra": "മഹാരാഷ്ട്ര",
          "All India": "അഖിലേന്ത്യാ പദ്ധതികൾ"
        },
        "districts": {
          "Guntur": "ഗുണ്ടൂർ",
          "Kurnool": "കർണൂൽ",
          "Anantapur": "അനന്തപൂർ",
          "Warangal": "വാറങ്കൽ",
          "Nizamabad": "നിസാമാബാദ്",
          "Karimnagar": "കരീംനഗർ",
          "Kolar": "കോലാർ",
          "Shivamogga": "ശിവമോഗ്ഗ",
          "Chitradurga": "ചിത്രദുർഗ്ഗ",
          "Erode": "ഈറോഡ്",
          "Tiruchirappalli": "തിരുച്ചിറപ്പള്ളി",
          "Wayanad": "വയനാട്",
          "Kottayam": "കോട്ടയം",
          "Nashik": "നാസിക്",
          "Latur": "ലാത്തൂർ"
        },
        "crops": {
          "Paddy (Common)": "നെല്ല് (സാധാരണ)",
          "Red Chilli (Teja)": "ചുവന്ന മുളക് (തേജ)",
          "Cotton (Long Staple)": "പരുത്തി (നീളമുള്ളത്)",
          "Groundnut (Pod)": "നിലക്കടല",
          "Cotton (Medium Staple)": "പരുത്തി (ഇടത്തരം)",
          "Maize (Yellow)": "ചോളം (മഞ്ഞ)",
          "Turmeric (Finger)": "മഞ്ഞൾ",
          "Paddy (Grade A)": "നെല്ല് (ഗ്രേഡ് എ)",
          "Tomato": "തക്കാളി",
          "Arecanut (Rashi)": "അടയ്ക്ക",
          "Onion (Red)": "സവാള (ചുവപ്പ്)",
          "Banana (Poovan)": "നേന്ത്രപ്പഴം / പൂവൻ",
          "Black Pepper": "കുരുമുളക്",
          "Rubber (RSS-4)": "റബ്ബർ (RSS-4)",
          "Onion (Nashik Red)": "നാസിക് ചുവന്ന സവാള",
          "Soyabean (Yellow)": "സോയാബീൻ (മഞ്ഞ)"
        },
        "markets": {
          "Guntur APMC Mandi": "ഗുണ്ടൂർ APMC മാർക്കറ്റ്",
          "Guntur Yard": "ഗുണ്ടൂർ യാർഡ്",
          "Kurnool Market Yard": "കർണൂൽ മാർക്കറ്റ്",
          "Anantapur APMC": "അനന്തപൂർ APMC",
          "Warangal Enamamula Market": "വാറങ്കൽ ഏനാമാമുല മാർക്കറ്റ്",
          "Nizamabad APMC": "നിസാമാബാദ് APMC",
          "Nizamabad Yard": "നിസാമാബാദ് യാർഡ്",
          "Karimnagar APMC": "കരീംനഗർ APMC",
          "Kolar APMC Mandi": "കോലാർ APMC മാർക്കറ്റ്",
          "Shivamogga APMC": "ശിവമോഗ്ഗ APMC",
          "Chitradurga Mandi": "ചിത്രദുർഗ്ഗ മണ്ടി",
          "Erode APMC": "ഈറോഡ് APMC",
          "Trichy Central Market": "തിരുച്ചി സെൻട്രൽ മാർക്കറ്റ്",
          "Kalpetta Market": "കൽപ്പറ്റ മാർക്കറ്റ്",
          "Kottayam Rubber Board": "കോട്ടയം റബ്ബർ ബോർഡ്",
          "Lasalgaon APMC": "ലസൽഗാവ് APMC",
          "Latur APMC Mandi": "ലാത്തൂർ APMC മാർക്കറ്റ്"
        },
        "weatherConditions": {
          "Scattered Showers": "ചിതറിയ മഴ",
          "Scattered Rains": "ചെറിയ ചാറ്റൽമഴ",
          "Partly Cloudy": "ഭാഗികമായി മേഘാവൃതം",
          "Sunny & Clear": "വെയിലും തെളിഞ്ഞ ആകാശവും",
          "Thunderstorm": "ഇടിമിന്നലോട് കൂടിയ മഴ",
          "Light Rains": "നേരിയ മഴ",
          "Sunny": "വെയിൽ"
        },
        "days": {
          "Today": "ഇന്ന്",
          "Tomorrow": "നാളെ",
          "Thu": "വ്യാഴം",
          "Fri": "വെള്ളി",
          "Sat": "ശനി",
          "Sun": "ഞായർ",
          "Mon": "തിങ്കൾ"
        },
        "weatherAdvice": [
          "65% മഴ സാധ്യതയുള്ളതിനാൽ അടുത്ത 24 മണിക്കൂറിലേക്ക് മരുന്ന് തളിക്കുന്നത് മാറ്റിവെക്കുക.",
          "നെൽവയലുകളിൽ വെള്ളക്കെട്ട് ഒഴിവാക്കാൻ നീർച്ചാലുകൾ വൃത്തിയായി സൂക്ഷിക്കുക.",
          "രാവിലെ ഈർപ്പം കൂടുതലായതിനാൽ മുളക് കൃഷിയിൽ കുമിൾ രോഗങ്ങൾ ശ്രദ്ധിക്കുക.",
          "വൈകുന്നേരങ്ങളിൽ ചെറുപയർ/ഉഴുന്ന് തൈകൾ നടാൻ അനുയോജ്യമായ കാലാവസ്ഥ."
        ],
        "weatherAlerts": [
          {
            "title": "മിതമായ മഴ മുന്നറിയിപ്പ്",
            "description": "അടുത്ത 24 മണിക്കൂറിൽ മഴയ്ക്ക് സാധ്യതയുണ്ട്. മരുന്ന് തളിക്കുന്നത് നിർത്തുക."
          },
          {
            "title": "അനുയോജ്യമായ മണ്ണിലെ ഈർപ്പം",
            "description": "നിലവിലെ ഈർപ്പം (78%) നെൽക്കൃഷിക്കും മുളക് തൈകളുടെ വളർച്ചയ്ക്കും അനുയോജ്യമാണ്."
          }
        ],
        "schemes": {
          "pm-kisan": {
            "title": "പ്രധാൻ മന്ത്രി കിസാൻ സമ്മാൻ നിധി (PM-KISAN)",
            "overview": "കർഷക കുടുംബങ്ങൾക്ക് പ്രതിവർഷം ₹6,000 ധനസഹായം 3 ഗഡുക്കളായി നേരിട്ട് ബാങ്ക് അക്കൗണ്ടിലേക്ക് നൽകുന്ന പദ്ധതി.",
            "eligibility": [
              "ഇന്ത്യയിലുടനീളമുള്ള കൃഷിഭൂമിയുള്ള എല്ലാ കർഷക കുടുംബങ്ങളും യോഗ്യരാണ്"
            ],
            "benefits": [
              "പ്രതിവർഷം ₹6,000 നേരിട്ട് ബാങ്ക് അക്കൗണ്ടിൽ (₹2,000 വീതം 3 ഗഡുക്കൾ)",
              "സുതാര്യമായ DBT കൈമാറ്റം"
            ],
            "documents": [
              "ആധാർ കാർഡ്",
              "ഭൂമി ഉടമസ്ഥാവകാശ രേഖകൾ (കരമടച്ച രസീത്)",
              "ആധാറുമായി ബന്ധിപ്പിച്ച ബാങ്ക് അക്കൗണ്ട്",
              "ഫോൺ നമ്പർ"
            ]
          },
          "pmfby": {
            "title": "പ്രധാൻ മന്ത്രി ഫസൽ ബീമാ യോജന (PMFBY)",
            "overview": "പ്രകൃതിദുരന്തങ്ങൾ മൂലമുള്ള വിളനാശത്തിന് സമഗ്രമായ വിള ഇൻഷുറൻസ് സംരക്ഷണം.",
            "eligibility": [
              "വിജ്ഞാപനം ചെയ്ത പ്രദേശങ്ങളിൽ കൃഷി ചെയ്യുന്ന എല്ലാ കർഷകരും യോഗ്യരാണ്"
            ],
            "benefits": [
              "കുറഞ്ഞ പ്രീമിയം: ഖരീഫ് 2%, റബി 1.5%, വാണിജ്യ വിളകൾ 5%",
              "ബാക്കി പ്രീമിയം സർക്കാർ വഹിക്കും"
            ],
            "documents": [
              "ഭൂമി രേഖകൾ",
              "വിളവിത്ത് നടീൽ സർട്ടിഫിക്കറ്റ്",
              "ആധാർ കാർഡും ബാങ്ക് പാസ്ബുക്കും",
              "ക്യാൻസൽ ചെയ്ത ചെക്ക്"
            ]
          },
          "kcc": {
            "title": "കിസാൻ ക്രെഡിറ്റ് കാർഡ് (KCC) പദ്ധതി",
            "overview": "കർഷകർക്ക് കൃഷി ആവശ്യങ്ങൾക്കായി കുറഞ്ഞ പലിശ നിരക്കിൽ ഹ്രസ്വകാല വായ്പാ സൗകര്യം.",
            "eligibility": [
              "വ്യക്തിഗത കർഷകർ / പാട്ടക്കർഷകർ",
              "സ്വയം സഹായ സംഘങ്ങൾ (SHG)"
            ],
            "benefits": [
              "₹3 ലക്ഷം വരെയുള്ള വായ്പകൾക്ക് 7% ഇളവ് പലിശ നിരക്ക്",
              "കൃത്യസമയത്ത് തിരിച്ചടച്ചാൽ 3% അധിക പലിശ സബ്‌സിഡി",
              "₹1.6 ലക്ഷം വരെ ഈടില്ലാത്ത വായ്പ"
            ],
            "documents": [
              "അപേക്ഷാ ഫോം",
              "തിരിച്ചറിയൽ രേഖ (ആധാർ/വോട്ടർ ഐഡി)",
              "വിലാസവും ഭൂമി രേഖകളും",
              "പാസ്‌പോർട്ട് സൈസ് ഫോട്ടോ"
            ]
          },
          "pmksy": {
            "title": "പ്രധാൻ മന്ത്രി കൃഷി സിഞ്ചായി യോജന (PMKSY)",
            "overview": "തുള്ളിനന, തളിക്കൽ ജലസേചനം എന്നിവയിലൂടെ ജല ഉപയോഗക്ഷമത വർദ്ധിപ്പിക്കുന്ന പദ്ധതി.",
            "eligibility": [
              "ജലസ്രോതസ്സുള്ള കൃഷിഭൂമിയുടമകളായ കർഷകർ"
            ],
            "benefits": [
              "ചെറുകിട കർഷകർക്ക് 55% മറ്റിതര കർഷകർക്ക് 45% സബ്‌സിഡി",
              "30-50% ജലലാഭം"
            ],
            "documents": [
              "ഭൂമി ഉടമസ്ഥാവകാശ രേഖകൾ",
              "ജലസ്രോതസ്സ് തെളിവ്",
              "ആധാറും ബാങ്ക് വിവരങ്ങളും"
            ]
          },
          "mky": {
            "title": "മഹിളാ കിസാൻ ശാക്തീകരണ് പരിയോജന (MKSP)",
            "overview": "കാർഷിക മേഖലയിൽ വനിതാ കർഷകരുടെ പങ്കാളിത്തവും ഉൽപ്പാദനക്ഷമതയും വർദ്ധിപ്പിക്കുന്നതിനുള്ള പ്രത്യേക പദ്ധതി.",
            "eligibility": [
              "വനിതാ കർഷകർ, വനിതാ സ്വയംസഹായ സംഘങ്ങൾ (SHG)"
            ],
            "benefits": [
              "ജൈവകൃഷിയിൽ 100% സൗജന്യ പരിശീലനം",
              "വനിതാ സംഘങ്ങൾക്ക് സാമ്പത്തിക സഹായം"
            ],
            "documents": [
              "ആധാർ കാർഡ്",
              "SHG അംഗത്വ കാർഡ്",
              "ബാങ്ക് അക്കൗണ്ട് വിവരങ്ങൾ"
            ]
          },
          "didf": {
            "title": "ഡെയറി പ്രോസസിംഗ് ഇൻഫ്രാസ്ട്രക്ചർ ഡെവലപ്‌മെന്റ് ഫണ്ട് (DIDF)",
            "overview": "ക്ഷീരകർഷകർക്കായി പാൽ സംസ്കരണ, ശീതീകരണ പ്ലാന്റുകളുടെ ആധുനികവൽക്കരണം.",
            "eligibility": [
              "ക്ഷീര സഹകരണ സംഘങ്ങൾ, പാൽ ഉൽപാദക കമ്പനികൾ"
            ],
            "benefits": [
              "6.5% കുറഞ്ഞ പലിശ നിരക്കിൽ വായ്പ",
              "ഗ്രാമപ്രദേശങ്ങളിൽ പാൽ ശീതീകരണ കേന്ദ്രങ്ങൾ"
            ],
            "documents": [
              "സംഘം രജിസ്ട്രേഷൻ സർട്ടിഫിക്കറ്റ്",
              "പ്രോജക്ട് റിപ്പോർട്ട് (DPR)",
              "ബാങ്ക് അക്കൗണ്ട് വിവരങ്ങൾ"
            ]
          },
          "pmmsy": {
            "title": "പ്രധാൻ മന്ത്രി മൽസ്യ സമ്പദ യോജന (PMMSY)",
            "overview": "മത്സ്യബന്ധനം, ഉൾനാടൻ മത്സ്യകൃഷി, കുളങ്ങൾ എന്നിവയുടെ വികസനത്തിനുള്ള ധനസഹായം.",
            "eligibility": [
              "മത്സ്യത്തൊഴിലാളികൾ, മത്സ്യകർഷകർ, സഹകരണ സംഘങ്ങൾ"
            ],
            "benefits": [
              "ജനറൽ വിഭാഗത്തിന് 40% വും SC/ST/വനിതകൾക്ക് 60% വും ധനസഹായം",
              "₹5 ലക്ഷം വരെ അപകട ഇൻഷുറൻസ്"
            ],
            "documents": [
              "ആധാർ കാർഡ്",
              "മത്സ്യബന്ധന ലൈസൻസ്/ഭൂമി രേഖകൾ",
              "ബാങ്ക് വിവരങ്ങൾ"
            ]
          },
          "rythu-bharosa": {
            "title": "YSR ൈരതു ഭരോസ - PM KISAN (ആന്ധ്രാപ്രദേശ്)",
            "overview": "ആന്ധ്രാപ്രദേശിലെ കർഷകർക്കും പാട്ടക്കർഷകർക്കും പ്രതിവർഷം ₹13,500 സാമ്പത്തിക സഹായം.",
            "eligibility": [
              "ആന്ധ്രയിലെ ഭൂമിയുള്ള കർഷകരും രജിസ്റ്റർ ചെയ്ത പാട്ടക്കർഷകരും"
            ],
            "benefits": [
              "പ്രതിവർഷം ₹13,500 ധനസഹായം 3 ഗഡുക്കളായി"
            ],
            "documents": [
              "ആധാർ കാർഡ്",
              "പട്ടാദാർ പാസ്ബുക്ക് / CCRC കാർഡ്",
              "ബാങ്ക് പാസ്ബുക്ക്"
            ]
          },
          "rythu-bandhu": {
            "title": "ൈരതു ബന്ധു പദ്ധതി (തെലങ്കാന)",
            "overview": "തെലങ്കാനയിലെ കർഷകർക്ക് പ്രതിവർഷം ഏക്കറിന് ₹10,000 വിള നിക്ഷേപ സഹായം.",
            "eligibility": [
              "തെലങ്കാനയിലെ എല്ലാ പട്ടാദാർ കർഷകരും"
            ],
            "benefits": [
              "ഏക്കറിന് ഖരീഫിൽ ₹5,000 + റബിയിൽ ₹5,000 നേരിട്ട് ബാങ്ക് അക്കൗണ്ടിലേക്ക്"
            ],
            "documents": [
              "തെലങ്കാന പട്ടാദാർ പാസ്ബുക്ക്",
              "ആധാർ കാർഡ്",
              "ബാങ്ക് അക്കൗണ്ട് വിവരങ്ങൾ"
            ]
          }
        },
        "shops": {
          "s1": {
            "name": "ശ്രീ ലക്ഷ്മി അഗ്രി ഇൻപുട്സ് & ഫെർട്ടിലൈസർ സ്റ്റോർ",
            "address": "മെയിൻ റോഡ്, APMC മാർക്കറ്റിന് സമീപം, ഗുണ്ടൂർ, AP 522001"
          },
          "s2": {
            "name": "കിസാൻ ക്രോപ്പ് പ്രൊട്ടക്ഷൻ & പെസ്റ്റിസൈഡ്സ് സെന്റർ",
            "address": "സ്റ്റേഷൻ റോഡ്, ഗുണ്ടൂർ, AP 522002"
          },
          "s3": {
            "name": "റൈതു സേവാ കേന്ദ്രം & ഫാം എക്വിപ്മെന്റ് സ്റ്റോർ",
            "address": "RTC ബസ് സ്റ്റാൻഡ് കോംപ്ലക്സ്, ഗുണ്ടൂർ, AP 522001"
          },
          "s4": {
            "name": "ജയ് കിസാൻ ഓർഗാനിക് ഫെർട്ടിലൈസേഴ്സ് & സീഡ്സ് ഡിപ്പോ",
            "address": "ഏനാമാമുല മാർക്കറ്റ് റോഡ്, വാറങ്കൽ, TS 506002"
          },
          "s5": {
            "name": "കാവേരി അഗ്രി ടെക് & ഡ്രിപ്പ് എക്വിപ്മെന്റ്",
            "address": "APMC യാർഡ് ഗേറ്റ്, കോലാർ, KA 563101"
          }
        }
      },
      "severity": {
        "Low": "കുറഞ്ഞ",
        "Moderate": "മിതമായ",
        "High": "ഉയർന്ന",
        "Critical": "തീവ്രമായ"
      },
      "helpline": {
        "title": "അടിയന്തര ഹെൽപ്പ് ലൈൻ",
        "subtitle": "കിസാൻ സഹായ കേന്ദ്രവും അടിയന്തര കാർഷിക കോൺടാക്റ്റുകളും",
        "kisanCenterTitle": "കിസാൻ കോൾ സെന്റർ (1551)",
        "kisanCenterDesc": "24/7 സൗജന്യ കാർഷിക വിദഗ്ദ്ധ ഉപദേശം നേടുക.",
        "financialHelpline": "കർഷക സാമ്പത്തിക സഹായ ലൈൻ",
        "vetCare": "മൃഗസംരക്ഷണ അടിയന്തര സേവനം",
        "weatherEmergency": "കാലാവസ്ഥാ അടിയന്തര സേവനം",
        "callNow": "ഇപ്പോൾ വിളിക്കുക",
        "tollFree": "ടോൾ ഫ്രീ"
      },
      "profile": {
        "title": "കർഷക പ്രൊഫൈൽ",
        "subtitle": "സ്ഥിരീകരിച്ച സ്മാർട്ട് കർഷകൻ",
        "personalInfo": "വ്യക്തിഗത വിവരങ്ങൾ",
        "name": "പൂർണ്ണ പേര്",
        "phone": "മൊബൈൽ നമ്പർ",
        "state": "സംസ്ഥാനം",
        "district": "ജില്ല",
        "preferredLang": "തിരഞ്ഞെടുത്ത ഭാഷ",
        "primaryCrop": "പ്രധാന വിള",
        "saveChanges": "വിവരങ്ങൾ സേവ് ചെയ്യുക"
      },
      "history": {
        "title": "സ്കാൻ ചരിത്രം",
        "subtitle": "മുൻപത്തെ വിള രോഗ വിശകലന റിപ്പോർട്ടുകൾ",
        "noHistory": "ഇതുവരെ രോഗ സ്കാനുകൾ ഒന്നും രേഖപ്പെടുത്തിയിട്ടില്ല.",
        "viewReport": "പൂർണ്ണ റിപ്പോർട്ട് കാണുക"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'krishi_language'
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
