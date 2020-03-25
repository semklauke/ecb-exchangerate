import { Currency } from './types';

export const currencies: { [code: string]: Currency } = {
    "ADF": { code: "ADF", name: "Andorran Franc (1-1 peg to the French franc)" },
    "ADP": { code: "ADP", name: "Andorran Peseta (1-1 peg to the Spanish peseta)" },
    "AED": { code: "AED", name: "United Arab Emirates dirham" },
    "AFA": { code: "AFA", name: "Afghanistan afghani (old)" },
    "AFN": { code: "AFN", name: "Afghanistan, Afghanis" },
    "ALL": { code: "ALL", name: "Albanian lek" },
    "AMD": { code: "AMD", name: "Armenian dram" },
    "ANG": { code: "ANG", name: "Netherlands Antillean guilder" },
    "AOA": { code: "AOA", name: "Angola, Kwanza" },
    "AON": { code: "AON", name: "Angolan kwanza (old)" },
    "AOR": { code: "AOR", name: "Angolan kwanza readjustado" },
    "ARS": { code: "ARS", name: "Argentine peso" },
    "ATS": { code: "ATS", name: "Austrian schilling" },
    "AUD": { code: "AUD", name: "Australian dollar" },
    "AWG": { code: "AWG", name: "Aruban florin/guilder" },
    "AZM": { code: "AZM", name: "Azerbaijanian manat (old)" },
    "AZN": { code: "AZN", name: "Azerbaijan, manats" },
    "BAM": { code: "BAM", name: "Bosnia-Hezergovinian convertible mark" },
    "BBD": { code: "BBD", name: "Barbados dollar" },
    "BDT": { code: "BDT", name: "Bangladesh taka" },
    "BEF": { code: "BEF", name: "Belgian franc" },
    "BEL": { code: "BEL", name: "Belgian franc (financial)" },
    "BGL": { code: "BGL", name: "Bulgarian lev (old)" },
    "BGN": { code: "BGN", name: "Bulgarian lev" },
    "BHD": { code: "BHD", name: "Bahraini dinar" },
    "BIF": { code: "BIF", name: "Burundi franc" },
    "BMD": { code: "BMD", name: "Bermudian dollar" },
    "BND": { code: "BND", name: "Brunei dollar" },
    "BOB": { code: "BOB", name: "Bolivian boliviano" },
    "BOV": { code: "BOV", name: "Mvdol" },
    "BRE": { code: "BRE", name: "Brasilian cruzeiro (old)" },
    "BRL": { code: "BRL", name: "Brazilian real" },
    "BSD": { code: "BSD", name: "Bahamas dollar" },
    "BTC": { code: "BTC", name: "Bitcoin" },
    "BTN": { code: "BTN", name: "Bhutan ngultrum" },
    "BWP": { code: "BWP", name: "Botswana pula" },
    "BYB": { code: "BYB", name: "Belarussian rouble (old)" },
    "BYN": { code: "BYN", name: "Belarusian ruble" },
    "BYR": { code: "BYR", name: "Belarusian ruble (old)" },
    "BZD": { code: "BZD", name: "Belize dollar" },
    "C36": { code: "C36", name: "European Commission IC-36 group of currencies (European Union 27 Member States, i.e. BE, DE, EE, GR, ES, FR, IE, IT, CY, LU, NL, MT, AT, PT, SI, SK, FI, BG, CZ, DK, LV, LT, HU, PL, RO, SE, GB, and US, AU, CA, JP, MX, NZ, NO, CH, TR)" },
    "CAD": { code: "CAD", name: "Canadian dollar" },
    "CDF": { code: "CDF", name: "Congo franc (ex Zaire)" },
    "CHE": { code: "CHE", name: "WIR Euro" },
    "CHF": { code: "CHF", name: "Swiss franc" },
    "CHW": { code: "CHW", name: "WIR Franc" },
    "CLF": { code: "CLF", name: "Chile Unidades de fomento" },
    "CLP": { code: "CLP", name: "Chilean peso" },
    "CNH": { code: "CNH", name: "Chinese yuan offshore" },
    "CNY": { code: "CNY", name: "Chinese yuan renminbi" },
    "COP": { code: "COP", name: "Colombian peso" },
    "COU": { code: "COU", name: "Unidad de Valor Real" },
    "CRC": { code: "CRC", name: "Costa Rican colon" },
    "CSD": { code: "CSD", name: "Serbian dinar" },
    "CUC": { code: "CUC", name: "Cuban convertible peso" },
    "CUP": { code: "CUP", name: "Cuban peso" },
    "CVE": { code: "CVE", name: "Cape Verde escudo" },
    "CYP": { code: "CYP", name: "Cyprus pound" },
    "CZK": { code: "CZK", name: "Czech koruna" },
    "DEM": { code: "DEM", name: "German mark" },
    "DJF": { code: "DJF", name: "Djibouti franc" },
    "DKK": { code: "DKK", name: "Danish krone" },
    "DOP": { code: "DOP", name: "Dominican peso" },
    "DZD": { code: "DZD", name: "Algerian dinar" },
    "E0" : { code: "E0" , name: "EER-12 group of trading partners (of the euro area moving composition), i.e. AU,CA,DK,HK,JP,NO,SG,KR,SE,CH,GB,US" },
    "E1" : { code: "E1" , name: "EER-20 group of trading partners (of the euro area-18 composition), i.e. AU,CA,DK,HK,JP,NO,SG,KR,SE,CH,GB,US and BG,CZ,LT,HU,PL,RO,CN and HR" },
    "E2" : { code: "E2" , name: "EER-19 group of trading partners (of the euro area-18 composition), i.e. AU,CA,DK,HK,JP,NO,SG,KR,SE,CH,GB,US and BG,CZ,LT,HU,PL,RO,CN" },
    "E3" : { code: "E3" , name: "EER-39 group of trading partners (of the euro area-18 composition), i.e. AU,CA,DK,HK,JP,NO,SG,KR,SE,CH,GB,US and BG,CZ,LT,HU,PL,RO,CN and HR,DZ,AR,BR,CL,IS,IN,ID,IL,MY,MX,MA,NZ,PH,RU,ZA,TW,TH,TR,VE" },
    "E4" : { code: "E4" , name: "EER-12 group of trading partners (of the euro area-18 composition), i.e. AU,CA,DK,HK,JP,NO,SG,KR,SE,CH,GB,US" },
    "E5" : { code: "E5" , name: "EER-19 group of trading partners, i.e. AU,CA,DK,HK,JP,NO,SG,KR,SE,CH,GB,US and BG,CZ,HU,PL,RO,CN and HR" },
    "E6" : { code: "E6" , name: "EER-18 group of trading partners, i.e. AU,CA,DK,HK,JP,NO,SG,KR,SE,CH,GB,US and BG,CZ,HU,PL,RO,CN" },
    "E7" : { code: "E7" , name: "EER-38 group of trading partners, i.e. AU,CA,DK,HK,JP,NO,SG,KR,SE,CH,GB,US and BG,CZ,HU,PL,RO,CN and HR,DZ,AR,BR,CL,IS,IN,ID,IL,MY,MX,MA,NZ,PH,RU,ZA,TW,TH,TR,VE" },
    "E8" : { code: "E8" , name: "EER-12 group of trading partners, i.e. AU,CA,DK,HK,JP,NO,SG,KR,SE,CH,GB,US" },
    "ECS": { code: "ECS", name: "Ecuador sucre" },
    "EEK": { code: "EEK", name: "Estonian kroon" },
    "EGP": { code: "EGP", name: "Egyptian pound" },
    "ERN": { code: "ERN", name: "Erytrean nafka" },
    "ESP": { code: "ESP", name: "Spanish peseta" },
    "ETB": { code: "ETB", name: "Ethiopian birr" },
    "EUR": { code: "EUR", name: "Euro" },
    "FIM": { code: "FIM", name: "Finnish markka" },
    "FJD": { code: "FJD", name: "Fiji dollar" },
    "FKP": { code: "FKP", name: "Falkland Islands pound" },
    "FRF": { code: "FRF", name: "French franc" },
    "GBP": { code: "GBP", name: "UK pound sterling" },
    "GEL": { code: "GEL", name: "Georgian lari" },
    "GGP": { code: "GGP", name: "Guernsey, Pounds" },
    "GHC": { code: "GHC", name: "Ghana Cedi (old)" },
    "GHS": { code: "GHS", name: "Ghana Cedi" },
    "GIP": { code: "GIP", name: "Gibraltar pound" },
    "GMD": { code: "GMD", name: "Gambian dalasi" },
    "GNF": { code: "GNF", name: "Guinea franc" },
    "GRD": { code: "GRD", name: "Greek drachma" },
    "GTQ": { code: "GTQ", name: "Guatemalan quetzal" },
    "GWP": { code: "GWP", name: "Guinea-Bissau peso (old)" },
    "GYD": { code: "GYD", name: "Guyanan dollar" },
    "H1" : { code: "H1" , name: "Euro area-18 countries, i.e. FR,BE,LU,NL,DE,IT,IE,PT,ES,FI,AT,GR,SI,CY,EE,LV,MT,SK" },
    "H10": { code: "H10", name: "Euro area-19 countries and EER-38 group of trading partners, i.e. FR,BE,LU,NL,DE,IT,IE,PT,ES,FI,AT,GR,SI,CY,EE,LT,LV,MT,SK and AU,CA,DK,HK,JP,NO,SG,KR,SE,CH,GB,US and BG,CZ,HU,PL,RO,CN and HR,DZ,AR,BR,CL,IS,IN,ID,IL,MY,MX,MA,NZ,PH,RU,ZA,TW,TH,TR,VE" },
    "H11": { code: "H11", name: "Euro area-19 countries and EER-19 group of trading partners, i.e. FR,BE,LU,NL,DE,IT,IE,PT,ES,FI,AT,GR,SI,CY,EE,LT,LV,MT,SK and AU,CA,DK,HK,JP,NO,SG,KR,SE,CH,GB,US and BG,CZ,HU,PL,RO,CN and HR" },
    "H2" : { code: "H2" , name: "Euro area-18 countries and EER-12 group of trading partners, i.e. FR,BE,LU,NL,DE,IT,IE,PT,ES,FI,AT,GR,SI,CY,EE,LV,MT,SK and AU,CA,DK,HK,JP,NO,SG,KR,SE,CH,GB,US" },
    "H3" : { code: "H3" , name: "Euro area-18 countries and EER-19 group of trading partners, i.e. FR,BE,LU,NL,DE,IT,IE,PT,ES,FI,AT,GR,SI,CY,EE,LV,MT,SK and AU,CA,DK,HK,JP,NO,SG,KR,SE,CH,GB,US and BG,CZ,LT,HU,PL,RO,CN" },
    "H36": { code: "H36", name: "European Commission IC-36 group of trading partners, i.e. BE,DE,EE,GR,ES,FR,IE,IT,CY,LU,NL,MT,AT,PT,SI,SK,FI,BG,CZ,DK,LV,LT,HU,PL,RO,SE,GB and US,AU,CA,JP,MX,NZ,NO,CH,TR" },
    "H37": { code: "H37", name: "European Commission IC-37 group of trading partners, i.e. BE,DE,EE,GR,ES,FR,IE,IT,CY,LU,NL,MT,AT,PT,SI,SK,FI,BG,CZ,DK,HR,LV,LT,HU,PL,RO,SE,GB and US,AU,CA,JP,MX,NZ,NO,CH,TR" },
    "H4" : { code: "H4" , name: "Euro area-18 countries and EER-39 group of trading partners, i.e. FR,BE,LU,NL,DE,IT,IE,PT,ES,FI,AT,GR,SI,CY,EE,LV,MT,SK and AU,CA,DK,HK,JP,NO,SG,KR,SE,CH,GB,US and BG,CZ,LT,HU,PL,RO,CN and HR,DZ,AR,BR,CL,IS,IN,ID,IL,MY,MX,MA,NZ,PH,RU,ZA,TW,TH,TR,VE" },
    "H42": { code: "H42", name: "European Commission IC-42 group of trading partners, i.e. BE,DE,EE,GR,ES,FR,IE,IT,CY,LU,NL,MT,AT,PT,SI,SK,FI,BG,CZ,DK,HR,LV,LT,HU,PL,RO,SE,GB and US,AU,CA,JP,MX,NZ,NO,CH,TR,KR,CN,HK,RU,BR" },
    "H5" : { code: "H5" , name: "Euro area-18 countries and EER-20 group of trading partners, i.e. FR,BE,LU,NL,DE,IT,IE,PT,ES,FI,AT,GR,SI,CY,EE,LV,MT,SK and AU,CA,DK,HK,JP,NO,SG,KR,SE,CH,GB,US and BG,CZ,LT,HU,PL,RO,CN and HR" },
    "H6" : { code: "H6" , name: "Euro area-18 countries and EER-21 group of trading partners, i.e. FR,BE,LU,NL,DE,IT,IE,PT,ES,FI,AT,GR,SI,CY,EE,LV,MT,SK and AU,CA,DK,HK,JP,NO,SG,KR,SE,CH,GB,US and BG,CZ,LT,HU,PL,RO,HR,TR,RU" },
    "H7" : { code: "H7" , name: "Euro area-19 countries, i.e. FR,BE,LU,NL,DE,IT,IE,PT,ES,FI,AT,GR,SI,CY,EE,LT,LV,MT,SK" },
    "H8" : { code: "H8" , name: "Euro area-19 countries and EER-12 group of trading partners, i.e. FR,BE,LU,NL,DE,IT,IE,PT,ES,FI,AT,GR,SI,CY,EE,LT,LV,MT,SK and AU,CA,DK,HK,JP,NO,SG,KR,SE,CH,GB,US" },
    "H9" : { code: "H9" , name: "Euro area-19 countries and EER-18 group of trading partners, i.e. FR,BE,LU,NL,DE,IT,IE,PT,ES,FI,AT,GR,SI,CY,EE,LT,LV,MT,SK and AU,CA,DK,HK,JP,NO,SG,KR,SE,CH,GB,US and BG,CZ,HU,PL,RO,CN" },
    "HKD": { code: "HKD", name: "Hong Kong dollar" },
    "HKQ": { code: "HKQ", name: "Hong Kong dollar (old)" },
    "HNL": { code: "HNL", name: "Honduran lempira" },
    "HRK": { code: "HRK", name: "Croatian kuna" },
    "HTG": { code: "HTG", name: "Haitian gourde" },
    "HUF": { code: "HUF", name: "Hungarian forint" },
    "IDR": { code: "IDR", name: "Indonesian rupiah" },
    "IEP": { code: "IEP", name: "Irish pound" },
    "ILS": { code: "ILS", name: "Israeli shekel" },
    "IMP": { code: "IMP", name: "Isle of Man, Pounds" },
    "INR": { code: "INR", name: "Indian rupee" },
    "IQD": { code: "IQD", name: "Iraqi dinar" },
    "IRR": { code: "IRR", name: "Iranian rial" },
    "ISK": { code: "ISK", name: "Iceland krona" },
    "ITL": { code: "ITL", name: "Italian lira" },
    "JEP": { code: "JEP", name: "Jersey, Pounds" },
    "JMD": { code: "JMD", name: "Jamaican dollar" },
    "JOD": { code: "JOD", name: "Jordanian dinar" },
    "JPY": { code: "JPY", name: "Japanese yen" },
    "KES": { code: "KES", name: "Kenyan shilling" },
    "KGS": { code: "KGS", name: "Kyrgyzstan som" },
    "KHR": { code: "KHR", name: "Kampuchean real (Cambodian)" },
    "KMF": { code: "KMF", name: "Comoros franc" },
    "KPW": { code: "KPW", name: "Korean won (North)" },
    "KRW": { code: "KRW", name: "Korean won (Republic)" },
    "KWD": { code: "KWD", name: "Kuwait dinar" },
    "KYD": { code: "KYD", name: "Cayman Islands dollar" },
    "KZT": { code: "KZT", name: "Kazakstan tenge" },
    "LAK": { code: "LAK", name: "Lao kip" },
    "LBP": { code: "LBP", name: "Lebanese pound" },
    "LKR": { code: "LKR", name: "Sri Lanka rupee" },
    "LRD": { code: "LRD", name: "Liberian dollar" },
    "LSL": { code: "LSL", name: "Lesotho loti" },
    "LTL": { code: "LTL", name: "Lithuanian litas" },
    "LUF": { code: "LUF", name: "Luxembourg franc" },
    "LVL": { code: "LVL", name: "Latvian lats" },
    "LYD": { code: "LYD", name: "Libyan dinar" },
    "MAD": { code: "MAD", name: "Moroccan dirham" },
    "MDL": { code: "MDL", name: "Moldovian leu" },
    "MGA": { code: "MGA", name: "Madagascar, Ariary" },
    "MGF": { code: "MGF", name: "Malagasy franc" },
    "MKD": { code: "MKD", name: "Macedonian denar" },
    "MMK": { code: "MMK", name: "Myanmar kyat" },
    "MNT": { code: "MNT", name: "Mongolian tugrik" },
    "MOP": { code: "MOP", name: "Macau pataca" },
    "MRO": { code: "MRO", name: "Mauritanian ouguiya" },
    "MRU": { code: "MRU", name: "Mauritania ouguiya" },
    "MTL": { code: "MTL", name: "Maltese lira" },
    "MUR": { code: "MUR", name: "Mauritius rupee" },
    "MVR": { code: "MVR", name: "Maldive rufiyaa" },
    "MWK": { code: "MWK", name: "Malawi kwacha" },
    "MXN": { code: "MXN", name: "Mexican peso" },
    "MXP": { code: "MXP", name: "Mexican peso (old)" },
    "MXV": { code: "MXV", name: "Mexican Unidad de Inversion (UDI)" },
    "MYR": { code: "MYR", name: "Malaysian ringgit" },
    "MZM": { code: "MZM", name: "Mozambique metical (old)" },
    "MZN": { code: "MZN", name: "Mozambique, Meticais" },
    "NAD": { code: "NAD", name: "Namibian dollar" },
    "NGN": { code: "NGN", name: "Nigerian naira" },
    "NIO": { code: "NIO", name: "Nicaraguan cordoba" },
    "NLG": { code: "NLG", name: "Netherlands guilder" },
    "NOK": { code: "NOK", name: "Norwegian krone" },
    "NPR": { code: "NPR", name: "Nepaleese rupee" },
    "NZD": { code: "NZD", name: "New Zealand dollar" },
    "OMR": { code: "OMR", name: "Oman Sul rial" },
    "PAB": { code: "PAB", name: "Panama balboa" },
    "PEN": { code: "PEN", name: "Peru nuevo sol" },
    "PGK": { code: "PGK", name: "Papua New Guinea kina" },
    "PHP": { code: "PHP", name: "Philippine peso" },
    "PKR": { code: "PKR", name: "Pakistan rupee" },
    "PLN": { code: "PLN", name: "Polish zloty" },
    "PLZ": { code: "PLZ", name: "Polish zloty (old)" },
    "PTE": { code: "PTE", name: "Portuguese escudo" },
    "PYG": { code: "PYG", name: "Paraguay guarani" },
    "QAR": { code: "QAR", name: "Qatari rial" },
    "ROL": { code: "ROL", name: "Romanian leu (old)" },
    "RON": { code: "RON", name: "Romanian leu" },
    "RSD": { code: "RSD", name: "Serbian dinar" },
    "RUB": { code: "RUB", name: "Russian rouble" },
    "RUR": { code: "RUR", name: "Russian ruble (old)" },
    "RWF": { code: "RWF", name: "Rwanda franc" },
    "SAR": { code: "SAR", name: "Saudi riyal" },
    "SBD": { code: "SBD", name: "Solomon Islands dollar" },
    "SCR": { code: "SCR", name: "Seychelles rupee" },
    "SDD": { code: "SDD", name: "Sudanese dinar" },
    "SDG": { code: "SDG", name: "Sudan, Dinars" },
    "SDP": { code: "SDP", name: "Sudanese pound (old)" },
    "SEK": { code: "SEK", name: "Swedish krona" },
    "SGD": { code: "SGD", name: "Singapore dollar" },
    "SHP": { code: "SHP", name: "St. Helena pound" },
    "SIT": { code: "SIT", name: "Slovenian tolar" },
    "SKK": { code: "SKK", name: "Slovak koruna" },
    "SLL": { code: "SLL", name: "Sierra Leone leone" },
    "SOS": { code: "SOS", name: "Somali shilling" },
    "SPL": { code: "SPL", name: "Seborga, Luigini" },
    "SRD": { code: "SRD", name: "Suriname, Dollars" },
    "SRG": { code: "SRG", name: "Suriname guilder" },
    "SSP": { code: "SSP", name: "South sudanese pound" },
    "STD": { code: "STD", name: "Sao Tome and Principe dobra" },
    "STN": { code: "STN", name: "Dobra" },
    "SVC": { code: "SVC", name: "El Salvador colon" },
    "SYP": { code: "SYP", name: "Syrian pound" },
    "SZL": { code: "SZL", name: "Swaziland lilangeni" },
    "THB": { code: "THB", name: "Thai baht" },
    "TJR": { code: "TJR", name: "Tajikistan rouble" },
    "TJS": { code: "TJS", name: "Tajikistan, Somoni" },
    "TMM": { code: "TMM", name: "Turkmenistan manat (old)" },
    "TMT": { code: "TMT", name: "Turkmenistan manat" },
    "TND": { code: "TND", name: "Tunisian dinar" },
    "TOP": { code: "TOP", name: "Tongan paanga" },
    "TPE": { code: "TPE", name: "East Timor escudo" },
    "TRL": { code: "TRL", name: "Turkish lira (old)" },
    "TRY": { code: "TRY", name: "Turkish lira" },
    "TTD": { code: "TTD", name: "Trinidad and Tobago dollar" },
    "TVD": { code: "TVD", name: "Tuvalu, Tuvalu Dollars" },
    "TWD": { code: "TWD", name: "New Taiwan dollar" },
    "TZS": { code: "TZS", name: "Tanzania shilling" },
    "U1" : { code: "U1" , name: "Euro and domestic currency" },
    "UAH": { code: "UAH", name: "Ukraine hryvnia" },
    "UGX": { code: "UGX", name: "Uganda Shilling" },
    "USD": { code: "USD", name: "US dollar" },
    "USN": { code: "USN", name: "US Dollar (Next day)" },
    "UYI": { code: "UYI", name: "Uruguay Peso en Unidades Indexadas" },
    "UYU": { code: "UYU", name: "Uruguayan peso" },
    "UZS": { code: "UZS", name: "Uzbekistan sum" },
    "VEB": { code: "VEB", name: "Venezuelan bolivar (old)" },
    "VEF": { code: "VEF", name: "Venezuelan bolivar" },
    "VES": { code: "VES", name: "Venezuelan bolivar soberano" },
    "VND": { code: "VND", name: "Vietnamese dong" },
    "VUV": { code: "VUV", name: "Vanuatu vatu" },
    "WST": { code: "WST", name: "Samoan tala" },
    "X1" : { code: "X1" , name: "All currencies except national currency" },
    "X2" : { code: "X2" , name: "All currencies except USD" },
    "X3" : { code: "X3" , name: "All currencies except EUR" },
    "X4" : { code: "X4" , name: "All currencies except EUR, USD" },
    "X5" : { code: "X5" , name: "All currencies except EUR, JPY, USD" },
    "X6" : { code: "X6" , name: "All currencies except EUR, CHF, GBP, JPY, USD" },
    "X7" : { code: "X7" , name: "All currencies except EUR, USD, JPY, GBP, CHF, domestic currency" },
    "X8" : { code: "X8" , name: "All currencies except USD, EUR, GBP, JPY, CHF, CNY, AUD, CAD" },
    "X9" : { code: "X9" , name: "All currencies except EUR, USD, JPY, domestic currency" },
    "XAF": { code: "XAF", name: "CFA franc / BEAC" },
    "XAG": { code: "XAG", name: "Silver" },
    "XAU": { code: "XAU", name: "Gold" },
    "XBA": { code: "XBA", name: "European composite unit" },
    "XBB": { code: "XBB", name: "European Monetary unit EC-6" },
    "XBC": { code: "XBC", name: "European Unit of Account 9 (E.U.A.-9)" },
    "XBD": { code: "XBD", name: "European Unit of Account 17 (E.U.A.-17)" },
    "XCD": { code: "XCD", name: "Eastern Caribbean dollar" },
    "XDB": { code: "XDB", name: "Currencies included in the SDR basket, gold and SDRs" },
    "XDC": { code: "XDC", name: "Domestic currency (incl. conversion to current currency made using a fixed parity)" },
    "XDD": { code: "XDD", name: "Currencies included in the SDR basket (USD, EUR, JPY, GBP, CNY)" },
    "XDM": { code: "XDM", name: "Domestic currency (incl. conversion to current currency made using market exchange rate)" },
    "XDN": { code: "XDN", name: "Domestic currency (currency previously used by a country before joining a Monetary Union)" },
    "XDO": { code: "XDO", name: "Other currencies not included in the SDR basket, excluding gold and SDRs" },
    "XDR": { code: "XDR", name: "Special Drawing Rights (SDR)" },
    "XEU": { code: "XEU", name: "European Currency Unit (E.C.U.)" },
    "XFO": { code: "XFO", name: "Gold-Franc" },
    "XFU": { code: "XFU", name: "UIC-Franc" },
    "XGO": { code: "XGO", name: "Gold fine troy ounces" },
    "XNC": { code: "XNC", name: "Euro area non-participating foreign currency" },
    "XOF": { code: "XOF", name: "CFA franc / BCEAO" },
    "XPC": { code: "XPC", name: "Euro area participating foreign currency" },
    "XPD": { code: "XPD", name: "Palladium Ounces" },
    "XPF": { code: "XPF", name: "Pacific franc" },
    "XPT": { code: "XPT", name: "Platinum, Ounces" },
    "XRH": { code: "XRH", name: "Rhodium" },
    "XSU": { code: "XSU", name: "Sucre" },
    "XTS": { code: "XTS", name: "Codes specifically reserved for testing purposes" },
    "XUA": { code: "XUA", name: "ADB Unit of Account" },
    "XXX": { code: "XXX", name: "Transactions where no currency is involved" },
    "YER": { code: "YER", name: "Yemeni rial" },
    "YUM": { code: "YUM", name: "Yugoslav dinar" },
    "Z01": { code: "Z01", name: "All currencies combined" },
    "Z02": { code: "Z02", name: "Euro and euro area national currencies" },
    "Z03": { code: "Z03", name: "Other EU currencies combined" },
    "Z04": { code: "Z04", name: "Other currencies than EU combined" },
    "Z05": { code: "Z05", name: "All currencies other than EU, EUR, USD, CHF, JPY" },
    "Z06": { code: "Z06", name: "Non-Euro and non-euro area currencies combined" },
    "Z07": { code: "Z07", name: "All currencies other than domestic, Euro and euro area currencies" },
    "Z08": { code: "Z08", name: "ECB EER-12 group of currencies (AU, CA, DK, HK, JP, NO, SG, KR, SE, CH, GB, US), changing composition of the euro area" },
    "Z09": { code: "Z09", name: "EER broad group of currencies including also Greece until 01 january 2001" },
    "Z0Z": { code: "Z0Z", name: "Not applicable" },
    "Z10": { code: "Z10", name: "EER-12 group of currencies (AU, CA, DK, HK, JP, NO, SG, KR, SE, CH, GB, US)" },
    "Z11": { code: "Z11", name: "EER broad group of currencies (excluding Greece)" },
    "Z12": { code: "Z12", name: "Euro and Euro Area countries currencies (including Greece)" },
    "Z13": { code: "Z13", name: "Other EU currencies combined (MU12; excluding GRD)" },
    "Z14": { code: "Z14", name: "Other currencies than EU15 and EUR combined" },
    "Z15": { code: "Z15", name: "All currencies other than EU15, EUR, USD, CHF, JPY" },
    "Z16": { code: "Z16", name: "Non-MU12 currencies combined" },
    "Z17": { code: "Z17", name: "ECB EER-12 group of currencies and Euro Area countries currencies (FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, GR, AU, CA, DK, HK, JP, NO, SG, KR, SE, CH, GB, US)" },
    "Z18": { code: "Z18", name: "ECB EER broad group of currencies and Euro Area countries currencies" },
    "Z19": { code: "Z19", name: "ECB EER-12 group of currencies and Euro area 11 countries currencies (FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, AU, CA, DK, HK, JP, NO, SG, KR, SE, CH, GB, US)" },
    "Z20": { code: "Z20", name: "ECB EER-12 group of currencies (AU, CA, DK, HK, JP, NO, SG, KR, SE, CH, GB, US) - Euro area 15" },
    "Z21": { code: "Z21", name: "ECB EER broad group, regional breakdown, industrialised countries" },
    "Z22": { code: "Z22", name: "ECB EER broad group, regional breakdown, non-Japan Asia" },
    "Z23": { code: "Z23", name: "ECB EER broad group, regional breakdown, Latin America" },
    "Z24": { code: "Z24", name: "ECB EER broad group, regional breakdown, Central and Eastern Europe (CEEC)" },
    "Z25": { code: "Z25", name: "ECB EER broad group, regional breakdown, other countries" },
    "Z26": { code: "Z26", name: "Euro area 15 countries currencies (FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, GR, SI, MT and CY)" },
    "Z27": { code: "Z27", name: "ECB EER-12 group of currencies and Euro area 15 country currencies (FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, GR, SI, CY, MT, AU, CA, DK, HK, JP, NO, SG, KR, SE, CH, GB, US)" },
    "Z28": { code: "Z28", name: "Euro area-16 countries (BE, DE, IE, GR, ES, FR, IT, CY, LU, MT, NL, AT, PT, SI, SK and FI)" },
    "Z29": { code: "Z29", name: "Euro area-16 countries vis-a-vis the EER-12 group of trading partners and other euro area countries (AU, CA, DK, HK, JP, NO, SG, KR, SE, CH, GB, US, BE, DE, IE, GR, ES, FR, IT, CY, LU, MT, NL, AT, PT, SI, SK and FI)" },
    "Z30": { code: "Z30", name: "EER-23 group of currencies (CZ, CY, DK, EE, LV, LT, HU, MT, PL, SI, SK, SE, GB, AU, CA, CN, HK, JP, NO, SG, KR, CH, US)" },
    "Z31": { code: "Z31", name: "EER-42 group of currencies (CZ, CY, DK, EE, LV, LT, HU, MT, PL, SI, SK, SE, GB, AU, CA, CN, HK, JP, NO, SG, KR, CH, US, DZ, AR, BR, BG, HR, IN, ID, IL, MY, MX, MA, NZ, PH, RO, RU, ZA, TW, TH, TR)" },
    "Z32": { code: "Z32", name: "Euro area-17 countries (BE, DE, EE, IE, GR, ES, FR, IT, CY, LU, MT, NL, AT, PT, SI, SK and FI)" },
    "Z33": { code: "Z33", name: "Euro area-17 countries vis-a-vis the EER-12 group of trading partners and other euro area countries (AU, CA, DK, HK, JP, NO, SG, KR, SE, CH, GB, US, BE, DE, EE, IE, GR, ES, FR, IT, CY, LU, MT, NL, AT, PT, SI, SK and FI)" },
    "Z37": { code: "Z37", name: "ECB EER-23 group of currencies and Euro Area countries currencies (FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, GR, CZ, CY, DK, EE, LV, LT, HU, MT, PL, SI, SK, SE, GB, AU, CA, CN, HK, JP, NO, SG, KR, CH, US)" },
    "Z38": { code: "Z38", name: "ECB EER-42 group of currencies and Euro Area countries currencies (FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, GR, CZ, CY, DK, EE, LV, LT, HU, MT, PL, SI, SK, SE, GB, AU, CA, CN, HK, JP, NO, SG, KR, CH, US, DZ, AR, BR, BG, HR, IN, ID, IL, MY, MX, MA, NZ, PH, RO, RU, ZA, TW, TH, TR)" },
    "Z40": { code: "Z40", name: "ECB EER-12 group of currencies (AU, CA, DK, HK, JP, NO, SG, KR, SE, CH, GB, US)" },
    "Z41": { code: "Z41", name: "All currencies other than domestic" },
    "Z42": { code: "Z42", name: "All currencies other than EUR, USD, GBP, CHF, JPY and domestic" },
    "Z44": { code: "Z44", name: "Other currencies than EU15, EUR and domestic" },
    "Z45": { code: "Z45", name: "All currencies other than EU15, EUR, USD, CHF, JPY and domestic" },
    "Z46": { code: "Z46", name: "All currencies other than EUR, USD, GBP and JPY" },
    "Z50": { code: "Z50", name: "ECB EER-24 group of currencies (AU, CA, CN, DK, HK, JP, NO, SG, KR, SE, CH, GB, US, CY, CZ, EE, HU, LV, LT, MT, PL, SK, BG, RO)" },
    "Z51": { code: "Z51", name: "ECB EER-44 group of currencies (AU, CA, CN, DK, HK, JP, NO, SG, KR, SE, CH, GB, US, CY, CZ, EE, HU, LV, LT, MT, PL, SK, BG, RO, NZ, DZ, AR, BR, HR, IN, ID, IL, MY, MX, MA, PH, RU, ZA, TW, TH, TR, IS, CL, VE)" },
    "Z52": { code: "Z52", name: "Euro and Euro area 13 country currencies (FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, GR, SI)" },
    "Z53": { code: "Z53", name: "Non-euro area 13 currencies combined (all currencies other than those related to FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, GR, SI)" },
    "Z54": { code: "Z54", name: "ECB EER-22 group of currencies (AU, CA, CN, DK, HK, JP, NO, SG, KR, SE, CH, GB, US,CZ, EE, HU, LV, LT, PL, SK, BG, RO) - Euro area 15" },
    "Z55": { code: "Z55", name: "ECB EER-42 group of currencies (AU, CA, CN, DK, HK, JP, NO, SG, KR, SE, CH, GB, US, CZ, EE, HU, LV, LT, PL, SK, BG, RO, NZ, DZ, AR, BR, HR, IN, ID, IL, MY, MX, MA, PH, RU, ZA, TW, TH, TR, IS, CL, VE) - Euro area 15" },
    "Z56": { code: "Z56", name: "ECB EER-12 group of currencies and Euro area country currencies (FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, GR, SI, AU, CA, DK, HK, JP, NO, SG, KR, SE, CH, GB, US)" },
    "Z57": { code: "Z57", name: "ECB EER-20 group of currencies and Euro area 17 country currencies (FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, GR, SI, AU, CA, CN, DK, HK, JP, NO, SG, KR, SE, CH, GB, US, CY, CZ, EE, HU, LV, LT, MT, PL, SK, BG, RO)" },
    "Z58": { code: "Z58", name: "ECB EER-40 group of currencies and Euro area 17 country currencies (FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, GR, SI, AU, CA, CN, DK, HK, JP, NO, SG, KR, SE, CH, GB, US, CY, CZ, EE, HU, LV, LT, MT, PL, SK, BG, RO, NZ, DZ, AR, BR, HR, IN, ID, IL, MY, MX, MA, PH, RU, ZA, TW, TH, TR, IS, CL, VE)" },
    "Z59": { code: "Z59", name: "Euro area-16 countries vis-a-vis the EER-21 group of trading partners (AU, CA, DK, HK, JP, NO, SG, KR, SE, CH, GB, US, BG, CZ, EE, LV, LT, HU, PL, RO and CN)" },
    "Z60": { code: "Z60", name: "Euro area-16 countries vis-a-vis the EER-41 group of trading partners (AU, CA, DK, HK, JP, NO, SG, KR, SE, CH, GB, US, BG, CZ, EE, LV, LT, HU, PL, RO, CN, DZ, AR, BR, CL, HR, IS, IN, ID, IL, MY, MX, MA, NZ, PH, RU, ZA, TW, TH, TR and VE)" },
    "Z61": { code: "Z61", name: "ECB EER-21 group of currencies and Euro area 17 country currencies (FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, GR, SI, AU, CA, CN, DK, HK, JP, NO, SG, KR, SE, CH, GB, US, CY, CZ, EE, HU, LV, LT, MT, PL, SK, BG, RO, HR)" },
    "Z62": { code: "Z62", name: "Euro and Euro area 15 country currencies (FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, GR, SI, CY, MT)" },
    "Z63": { code: "Z63", name: "Non-euro area 15 currencies combined (all currencies other than those related to FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, GR, SI, CY, MT)" },
    "Z64": { code: "Z64", name: "Euro area-17 countries vis-a-vis the EER-20 group of trading partners (AU, CA, DK, HK, JP, NO, SG, KR, SE, CH, GB, US, BG, CZ, LV, LT, HU, PL, RO and CN)" },
    "Z65": { code: "Z65", name: "Euro area-17 countries vis-a-vis the EER-40 group of trading partners (AU, CA, DK, HK, JP, NO, SG, KR, SE, CH, GB, US, BG, CZ, LV, LT, HU, PL, RO, CN, DZ, AR, BR, CL, HR, IS, IN, ID, IL, MY, MX, MA, NZ, PH, RU, ZA, TW, TH, TR and VE)" },
    "Z66": { code: "Z66", name: "Euro area-17 countries vis-a-vis the EER-21 group of trading partners (AU, CA, DK, HK, JP, NO, SG, KR, SE, CH, GB, US, BG, CZ, LV, LT, HU, PL, RO, HR and CN)" },
    "Z67": { code: "Z67", name: "Euro area-16 countries vis-a-vis the EER-12 group of trading partners (AU, CA, DK, HK, JP, NO, SG, KR, SE, CH, GB and US)" },
    "Z68": { code: "Z68", name: "Euro area-17 countries vis-a-vis the EER-12 group of trading partners (AU, CA, DK, HK, JP, NO, SG, KR, SE, CH, GB and US)" },
    "Z69": { code: "Z69", name: "Euro area-17 countries vis-a-vis the EER-23 group of trading partners (AU, CA, DK, HK, JP, NO, SG, KR, SE, CH, GB, US, BG, CZ, LV, LT, HU, PL, RO, HR, TR, RU and CN)" },
    "Z70": { code: "Z70", name: "ECB EER-23 group of currencies and Euro area 17 country currencies (FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, GR, SI, AU, CA, CN, DK, HK, JP, NO, SG, KR, SE, CH, GB, US, CY, CZ, EE, HU, LV, LT, MT, PL, SK, BG, RO, HR, TR and RU)" },
    "Z72": { code: "Z72", name: "Euro and Euro area 16 country currencies (FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, GR, SI, CY, MT, SK)" },
    "Z73": { code: "Z73", name: "Non-euro area 16 currencies combined (all currencies other than those related to FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, GR, SI, CY, MT, SK)" },
    "Z82": { code: "Z82", name: "Euro and Euro area 17 country currencies (FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, GR, SI, CY, MT, SK, EE)" },
    "Z83": { code: "Z83", name: "Non-euro area 17 currencies combined (all currencies other than those related to FR, BE, LU, NL, DE, IT, IE, PT, ES, FI, AT, GR, SI, CY, MT, SK, EE)" },
    "ZAR": { code: "ZAR", name: "South African rand" },
    "ZMK": { code: "ZMK", name: "Zambian kwacha" },
    "ZMW": { code: "ZMW", name: "New zambian kwacha" },
    "ZWD": { code: "ZWD", name: "Zimbabwe dollar" },
    "ZWL": { code: "ZWL", name: "Fourth Zimbabwe dollar" },
    "ZWN": { code: "ZWN", name: "Zimbabwe, Zimbabwe Dollars" },
    "ZWR": { code: "ZWR", name: "Third Zimbabwe dollar" },
    "_T": { code: "_T", name: "All currencies" },
    "*": { code: "_T", name: "All currencies" }
};