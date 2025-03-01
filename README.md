#Naziv projekta: Rezervacija Splavova

#Opis:
Ova web aplikacija omogućava korisnicima da rezervišu splavove za rekreaciju. Korisnici mogu pregledati dostupne splavove, odabrati datum i vrijeme, te izvršiti rezervaciju putem jednostavnog obrasca. Aplikacija koristi Firebase za pohranu podataka o rezervacijama, omogućavajući dinamičko ažuriranje dostupnih splavova na osnovu odabranog datuma.

#Tehnologije:
React: Frontend aplikacija je izgrađena pomoću React biblioteke, omogućavajući modularan i reaktivan korisnički interfejs.
JavaScript (ES6+): Korišten za implementaciju logike aplikacije, manipulaciju DOM-om i interakciju sa Firebase bazom podataka.
CSS3: Za stilizovanje aplikacije i prilagođavanje izgleda različitim uređajima (responsive design).
Firebase: Korišten kao backend servis za pohranu podataka o rezervacijama u NoSQL bazi podataka (Firestore). Firebase Authentication se može dodati za upravljanje korisničkim nalozima (nije vidljivo u dostavljenom kodu, ali se može dodati).
HTML5: Za strukturu web stranica.
Responsive Design: Aplikacija je dizajnirana da bude responsivna, prilagođavajući se različitim veličinama ekrana (mobilni uređaji, tableti, desktop računari) pomoću CSS media queries.

#Izgled aplikacije:
![izgled app](https://github.com/user-attachments/assets/2767491a-3631-449a-bcc8-fe1e85049feb)


#Funkcionalnosti:
Pregled dostupnih splavova sa slikama.
Odabir datuma za rezervaciju.
Forma za unos ličnih podataka i odabir splava.
Pohranjivanje rezervacija u Firebase Firestore bazu podataka.
Dinamičko prikazivanje dostupnih splavova na osnovu odabranog datuma.
Mogućnost dodavanja funkcionalnosti za prikaz liste rezervacija i upravljanje njima (nije vidljivo u dostavljenom kodu, ali se može dodati).

#Kako pokrenuti aplikaciju:
Klonirajte repozitorij.
Instalirajte potrebne zavisnosti pomoću npm install.
Konfigurišite Firebase sa svojim kredencijalima.
Pokrenite aplikaciju pomoću npm start.
