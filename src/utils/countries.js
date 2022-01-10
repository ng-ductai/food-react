const countries = [
  { value: "afghanistan", label: "Afghanistan" },
  { value: "åland Islands", label: "Åland Islands" },
  { value: "albania", label: "Albania" },
  { value: "algeria", label: "Algeria" },
  { value: "american Samoa", label: "American Samoa" },
  { value: "andorra", label: "Andorra" },
  { value: "angola", label: "Angola" },
  { value: "anguilla", label: "Anguilla" },
  { value: "antigua and Barbuda", label: "Antigua and Barbuda" },
  { value: "argentina", label: "Argentina" },
  { value: "armenia", label: "Armenia" },
  { value: "aruba", label: "Aruba" },
  { value: "australia", label: "Australia" },
  { value: "austria", label: "Austria" },
  { value: "azerbaijan", label: "Azerbaijan" },
  { value: "bangladesh", label: "Bangladesh" },
  { value: "barbados", label: "Barbados" },
  { value: "bahamas", label: "Bahamas" },
  { value: "bahrain", label: "Bahrain" },
  { value: "belarus", label: "Belarus" },
  { value: "belgium", label: "Belgium" },
  { value: "belize", label: "Belize" },
  { value: "benin", label: "Benin" },
  { value: "bermuda", label: "Bermuda" },
  { value: "bhutan", label: "Bhutan" },
  { value: "bolivia", label: "Bolivia" },
  { value: "bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
  { value: "botswana", label: "Botswana" },
  { value: "brazil", label: "Brazil" },
  {
    value: "british Indian Ocean Territory",
    label: "British Indian Ocean Territory",
  },
  { value: "british Virgin Islands", label: "British Virgin Islands" },
  { value: "brunei Darussalam", label: "Brunei Darussalam" },
  { value: "bulgaria", label: "Bulgaria" },
  { value: "burkina Faso", label: "Burkina Faso" },
  { value: "burma", label: "Burma" },
  { value: "burundi", label: "Burundi" },
  { value: "cambodia", label: "Cambodia" },
  { value: "cameroon", label: "Cameroon" },
  { value: "canada", label: "Canada" },
  { value: "cape Verde", label: "Cape Verde" },
  { value: "cayman Islands", label: "Cayman Islands" },
  { value: "central African Republic", label: "Central African Republic" },
  { value: "chad", label: "Chad" },
  { value: "chile", label: "Chile" },
  { value: "china", label: "China" },
  { value: "christmas Island", label: "Christmas Island" },
  { value: "cocos (Keeling) Islands", label: "Cocos (Keeling) Islands" },
  { value: "colombia", label: "Colombia" },
  { value: "comoros", label: "Comoros" },
  { value: "congo-Brazzaville", label: "Congo-Brazzaville" },
  { value: "congo-Kinshasa", label: "Congo-Kinshasa" },
  { value: "cook Islands", label: "Cook Islands" },
  { value: "costa Rica", label: "Costa Rica" },
  { value: "$_[", label: "$_[" },
  { value: "croatia", label: "Croatia" },
  { value: "curaçao", label: "Curaçao" },
  { value: "cyprus", label: "Cyprus" },
  { value: "czech Republic", label: "Czech Republic" },
  { value: "denmark", label: "Denmark" },
  { value: "djibouti", label: "Djibouti" },
  { value: "dominica", label: "Dominica" },
  { value: "dominican Republic", label: "Dominican Republic" },
  { value: "east Timor", label: "East Timor" },
  { value: "ecuador", label: "Ecuador" },
  { value: "el Salvador", label: "El Salvador" },
  { value: "egypt", label: "Egypt" },
  { value: "equatorial Guinea", label: "Equatorial Guinea" },
  { value: "eritrea", label: "Eritrea" },
  { value: "estonia", label: "Estonia" },
  { value: "ethiopia", label: "Ethiopia" },
  { value: "falkland Islands", label: "Falkland Islands" },
  { value: "faroe Islands", label: "Faroe Islands" },
  {
    value: "federated States of Micronesia",
    label: "Federated States of Micronesia",
  },
  { value: "fiji", label: "Fiji" },
  { value: "finland", label: "Finland" },
  { value: "france", label: "France" },
  { value: "french Guiana", label: "French Guiana" },
  { value: "french Polynesia", label: "French Polynesia" },
  { value: "french Southern Lands", label: "French Southern Lands" },
  { value: "gabon", label: "Gabon" },
  { value: "gambia", label: "Gambia" },
  { value: "georgia", label: "Georgia" },
  { value: "germany", label: "Germany" },
  { value: "ghana", label: "Ghana" },
  { value: "gibraltar", label: "Gibraltar" },
  { value: "greece", label: "Greece" },
  { value: "greenland", label: "Greenland" },
  { value: "grenada", label: "Grenada" },
  { value: "guadeloupe", label: "Guadeloupe" },
  { value: "guam", label: "Guam" },
  { value: "guatemala", label: "Guatemala" },
  { value: "guernsey", label: "Guernsey" },
  { value: "guinea", label: "Guinea" },
  { value: "guinea-Bissau", label: "Guinea-Bissau" },
  { value: "guyana", label: "Guyana" },
  { value: "haiti", label: "Haiti" },
  { value: "heard and McDonald Islands", label: "Heard and McDonald Islands" },
  { value: "honduras", label: "Honduras" },
  { value: "hong Kong", label: "Hong Kong" },
  { value: "hungary", label: "Hungary" },
  { value: "iceland", label: "Iceland" },
  { value: "india", label: "India" },
  { value: "indonesia", label: "Indonesia" },
  { value: "iraq", label: "Iraq" },
  { value: "ireland", label: "Ireland" },
  { value: "isle of Man", label: "Isle of Man" },
  { value: "israel", label: "Israel" },
  { value: "italy", label: "Italy" },
  { value: "jamaica", label: "Jamaica" },
  { value: "japan", label: "Japan" },
  { value: "jersey", label: "Jersey" },
  { value: "jordan", label: "Jordan" },
  { value: "kazakhstan", label: "Kazakhstan" },
  { value: "kenya", label: "Kenya" },
  { value: "kiribati", label: "Kiribati" },
  { value: "kuwait", label: "Kuwait" },
  { value: "kyrgyzstan", label: "Kyrgyzstan" },
  { value: "laos", label: "Laos" },
  { value: "latvia", label: "Latvia" },
  { value: "lebanon", label: "Lebanon" },
  { value: "lesotho", label: "Lesotho" },
  { value: "liberia", label: "Liberia" },
  { value: "libya", label: "Libya" },
  { value: "liechtenstein", label: "Liechtenstein" },
  { value: "lithuania", label: "Lithuania" },
  { value: "luxembourg", label: "Luxembourg" },
  { value: "macau", label: "Macau" },
  { value: "macedonia", label: "Macedonia" },
  { value: "madagascar", label: "Madagascar" },
  { value: "malawi", label: "Malawi" },
  { value: "malaysia", label: "Malaysia" },
  { value: "maldives", label: "Maldives" },
  { value: "mali", label: "Mali" },
  { value: "malta", label: "Malta" },
  { value: "marshall Islands", label: "Marshall Islands" },
  { value: "martinique", label: "Martinique" },
  { value: "mauritania", label: "Mauritania" },
  { value: "mauritius", label: "Mauritius" },
  { value: "mayotte", label: "Mayotte" },
  { value: "mexico", label: "Mexico" },
  { value: "moldova", label: "Moldova" },
  { value: "monaco", label: "Monaco" },
  { value: "mongolia", label: "Mongolia" },
  { value: "montenegro", label: "Montenegro" },
  { value: "montserrat", label: "Montserrat" },
  { value: "morocco", label: "Morocco" },
  { value: "mozambique", label: "Mozambique" },
  { value: "namibia", label: "Namibia" },
  { value: "nauru", label: "Nauru" },
  { value: "nepal", label: "Nepal" },
  { value: "netherlands", label: "Netherlands" },
  { value: "new Caledonia", label: "New Caledonia" },
  { value: "new Zealand", label: "New Zealand" },
  { value: "nicaragua", label: "Nicaragua" },
  { value: "niger", label: "Niger" },
  { value: "nigeria", label: "Nigeria" },
  { value: "niue", label: "Niue" },
  { value: "norfolk Island", label: "Norfolk Island" },
  { value: "northern Mariana Islands", label: "Northern Mariana Islands" },
  { value: "norway", label: "Norway" },
  { value: "oman", label: "Oman" },
  { value: "pakistan", label: "Pakistan" },
  { value: "palau", label: "Palau" },
  { value: "panama", label: "Panama" },
  { value: "papua New Guinea", label: "Papua New Guinea" },
  { value: "paraguay", label: "Paraguay" },
  { value: "peru", label: "Peru" },
  { value: "philippines", label: "Philippines" },
  { value: "pitcairn Islands", label: "Pitcairn Islands" },
  { value: "poland", label: "Poland" },
  { value: "portugal", label: "Portugal" },
  { value: "puerto Rico", label: "Puerto Rico" },
  { value: "qatar", label: "Qatar" },
  { value: "réunion", label: "Réunion" },
  { value: "romania", label: "Romania" },
  { value: "russia", label: "Russia" },
  { value: "rwanda", label: "Rwanda" },
  { value: "saint Barthélemy", label: "Saint Barthélemy" },
  { value: "saint Helena", label: "Saint Helena" },
  { value: "saint Kitts and Nevis", label: "Saint Kitts and Nevis" },
  { value: "saint Lucia", label: "Saint Lucia" },
  { value: "saint Martin", label: "Saint Martin" },
  { value: "saint Pierre and Miquelon", label: "Saint Pierre and Miquelon" },
  { value: "saint Vincent", label: "Saint Vincent" },
  { value: "samoa", label: "Samoa" },
  { value: "san Marino", label: "San Marino" },
  { value: "são Tomé and Príncipe", label: "São Tomé and Príncipe" },
  { value: "saudi Arabia", label: "Saudi Arabia" },
  { value: "senegal", label: "Senegal" },
  { value: "serbia", label: "Serbia" },
  { value: "seychelles", label: "Seychelles" },
  { value: "sierra Leone", label: "Sierra Leone" },
  { value: "singapore", label: "Singapore" },
  { value: "sint Maarten", label: "Sint Maarten" },
  { value: "slovakia", label: "Slovakia" },
  { value: "slovenia", label: "Slovenia" },
  { value: "solomon Islands", label: "Solomon Islands" },
  { value: "somalia", label: "Somalia" },
  { value: "south Africa", label: "South Africa" },
  { value: "south Georgia", label: "South Georgia" },
  { value: "south Korea", label: "South Korea" },
  { value: "spain", label: "Spain" },
  { value: "sri Lanka", label: "Sri Lanka" },
  { value: "sudan", label: "Sudan" },
  { value: "suriname", label: "Suriname" },
  { value: "svalbard and Jan Mayen", label: "Svalbard and Jan Mayen" },
  { value: "sweden", label: "Sweden" },
  { value: "swaziland", label: "Swaziland" },
  { value: "switzerland", label: "Switzerland" },
  { value: "syria", label: "Syria" },
  { value: "taiwan", label: "Taiwan" },
  { value: "tajikistan", label: "Tajikistan" },
  { value: "tanzania", label: "Tanzania" },
  { value: "thailand", label: "Thailand" },
  { value: "togo", label: "Togo" },
  { value: "tokelau", label: "Tokelau" },
  { value: "tonga", label: "Tonga" },
  { value: "trinidad and Tobago", label: "Trinidad and Tobago" },
  { value: "tunisia", label: "Tunisia" },
  { value: "turkey", label: "Turkey" },
  { value: "turkmenistan", label: "Turkmenistan" },
  { value: "turks and Caicos Islands", label: "Turks and Caicos Islands" },
  { value: "tuvalu", label: "Tuvalu" },
  { value: "uganda", label: "Uganda" },
  { value: "ukraine", label: "Ukraine" },
  { value: "united Arab Emirates", label: "United Arab Emirates" },
  { value: "united Kingdom", label: "United Kingdom" },
  { value: "united States", label: "United States" },
  { value: "uruguay", label: "Uruguay" },
  { value: "uzbekistan", label: "Uzbekistan" },
  { value: "vanuatu", label: "Vanuatu" },
  { value: "vatican City", label: "Vatican City" },
  { value: "vietnam", label: "Vietnam" },
  { value: "venezuela", label: "Venezuela" },
  { value: "wallis and Futuna", label: "Wallis and Futuna" },
  { value: "western Sahara", label: "Western Sahara" },
  { value: "yemen", label: "Yemen" },
  { value: "zambia", label: "Zambia" },
  { value: "zimbabwe", label: "Zimbabwe" },
];

export default countries;
